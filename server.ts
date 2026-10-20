import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { createServer as createViteServer } from 'vite';

dotenv.config();

// Ensure HMR is disabled in AI Studio container environment
process.env.DISABLE_HMR = 'true';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize GoogleGenAI client lazily (Telemetry User-Agent: aistudio-build)
let _ai: GoogleGenAI | null = null;
function getAI(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set');
  }
  if (!_ai) {
    _ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return _ai;
}

// Disk & Memory Cache for TTS Audio to ensure ZERO duplicate quota usage
const CACHE_DIR = '/tmp/linguaai_tts_cache';
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

const memoryAudioCache = new Map<string, string>();

function getAudioCacheKey(text: string, voice: string, lang?: string, style?: string): string {
  const hash = crypto.createHash('sha256');
  hash.update(`gemini|${text.trim()}|${voice}|${lang || 'auto'}|${style || 'default'}`);
  return hash.digest('hex');
}

// Prebuilt Gemini TTS voices:
// 'Kore': Warm, gentle, clear female teacher (default for warm persona)
// 'Fenrir': Deep, calm, articulate educator (default for focused persona)
// 'Puck': Dynamic, expressive, energetic coach (default for dynamic persona)
// 'Zephyr': Modern, fluent, balanced conversationalist
// 'Charon': Formal, steady academic narrator
const VOICE_MAP: Record<string, string> = {
  warm: 'Kore',
  focused: 'Fenrir',
  dynamic: 'Puck',
  kore: 'Kore',
  fenrir: 'Fenrir',
  puck: 'Puck',
  zephyr: 'Zephyr',
  charon: 'Charon',
};

// Robust multi-model cascade prioritizing fast, resilient, high-quota models
const TTS_MODEL_CASCADE = [
  'gemini-3.8-flash-lite-tts',
  'gemini-3.8-flash-tts',
];

// In-flight server-side request deduplication to prevent duplicate concurrent API hits
const inFlightServerRequests = new Map<string, Promise<string>>();

// API Route: Generate Studio-Quality Natural Bilingual Teacher Audio
app.post('/api/tts', async (req, res) => {
  try {
    const { text, persona = 'warm', voiceName, style, lang } = req.body;

    if (!text || typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({ error: 'Text parameter is required' });
    }

    const cleanText = text.trim();
    const selectedVoice = voiceName || VOICE_MAP[persona] || 'Kore';
    const speechStyle = style || 'Natural teacher speech';

    const cacheKey = getAudioCacheKey(cleanText, selectedVoice, lang, speechStyle);

    // 1. Check in-memory cache
    if (memoryAudioCache.has(cacheKey)) {
      return res.json({
        audioBase64: memoryAudioCache.get(cacheKey),
        mimeType: 'audio/wav',
        cached: true,
        source: 'memory',
        voice: selectedVoice,
      });
    }

    // 2. Check disk cache
    const cacheFilePath = path.join(CACHE_DIR, `${cacheKey}.wav`);
    if (fs.existsSync(cacheFilePath)) {
      const diskData = fs.readFileSync(cacheFilePath, 'base64');
      memoryAudioCache.set(cacheKey, diskData);
      return res.json({
        audioBase64: diskData,
        mimeType: 'audio/wav',
        cached: true,
        source: 'disk',
        voice: selectedVoice,
      });
    }

    // 3. Check if this exact text is ALREADY being synthesized right now
    if (inFlightServerRequests.has(cacheKey)) {
      const base64Audio = await inFlightServerRequests.get(cacheKey)!;
      return res.json({
        audioBase64: base64Audio,
        mimeType: 'audio/wav',
        cached: true,
        source: 'in-flight-dedup',
        voice: selectedVoice,
      });
    }

    // 4. Synthesize natural human teacher speech using resilient multi-model cascade
    const synthesisPromise = (async (): Promise<string> => {
      let lastError: any = null;
      const ai = getAI();

      for (const model of TTS_MODEL_CASCADE) {
        try {
          const contents = [
            {
              role: 'user',
              parts: [{ text: cleanText }],
            },
          ];

          const response = await ai.models.generateContent({
            model,
            contents,
            config: {
              responseModalities: ['AUDIO'],
              speechConfig: {
                voiceConfig: {
                  prebuiltVoiceConfig: {
                    voiceName: selectedVoice,
                  },
                },
              },
            },
          });

          const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
          if (base64Audio) {
            // Save to memory cache
            memoryAudioCache.set(cacheKey, base64Audio);

            // Save to disk cache asynchronously
            fs.writeFile(cacheFilePath, Buffer.from(base64Audio, 'base64'), (writeErr) => {
              if (writeErr) console.warn('Disk cache write warning:', writeErr);
            });

            return base64Audio;
          }
        } catch (err: any) {
          lastError = err;
          const status = err?.status || err?.response?.status;
          console.warn(`TTS model ${model} failed (status: ${status || 'unknown'}), falling back to next model...`);
          // Continue to next model in cascade
        }
      }

      throw lastError || new Error('All TTS models in cascade failed to synthesize audio');
    })();

    // Store in-flight promise so concurrent identical requests share the result
    inFlightServerRequests.set(cacheKey, synthesisPromise);

    try {
      const base64Audio = await synthesisPromise;
      return res.json({
        audioBase64: base64Audio,
        mimeType: 'audio/wav',
        cached: false,
        voice: selectedVoice,
      });
    } finally {
      inFlightServerRequests.delete(cacheKey);
    }
  } catch (error: any) {
    console.error('TTS Generation error:', error?.message || error);
    const isRateLimit = error?.status === 429 || error?.message?.includes('quota');
    return res.status(isRateLimit ? 429 : 500).json({
      error: error?.message || 'Failed to generate teacher audio',
      isRateLimit,
      retryable: true,
    });
  }
});

// API Route: Health & Cache Statistics
app.get('/api/tts/health', (_req, res) => {
  let diskFilesCount = 0;
  try {
    diskFilesCount = fs.readdirSync(CACHE_DIR).length;
  } catch (e) {}

  res.json({
    status: 'ok',
    model: 'gemini-3.8-flash-lite-tts',
    memoryCacheCount: memoryAudioCache.size,
    diskCacheCount: diskFilesCount,
    availableVoices: ['Kore', 'Fenrir', 'Puck', 'Zephyr', 'Charon'],
  });
});

// Disk & Memory Cache for Dictionary Lookups
const DICT_CACHE_DIR = '/tmp/linguaai_dict_cache';
if (!fs.existsSync(DICT_CACHE_DIR)) {
  fs.mkdirSync(DICT_CACHE_DIR, { recursive: true });
}
const memoryDictCache = new Map<string, any>();

// API Route: Contextual English-to-Turkish Lexicon Lookup
app.post('/api/dictionary/lookup', async (req, res) => {
  try {
    const { word, contextSentence } = req.body;
    if (!word || typeof word !== 'string') {
      return res.status(400).json({ error: 'Word parameter is required' });
    }

    const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()?"'“”’]/g, '').trim().toLowerCase();
    if (!cleanWord || cleanWord.length < 1) {
      return res.status(400).json({ error: 'Valid word is required' });
    }

    const normalizedContext = (contextSentence || '').trim().slice(0, 150);
    const cacheKey = `${cleanWord}|${normalizedContext}`;

    if (memoryDictCache.has(cacheKey)) {
      return res.json(memoryDictCache.get(cacheKey));
    }

    const hash = crypto.createHash('md5').update(cacheKey).digest('hex');
    const cacheFilePath = path.join(DICT_CACHE_DIR, `${hash}.json`);
    if (fs.existsSync(cacheFilePath)) {
      try {
        const cached = JSON.parse(fs.readFileSync(cacheFilePath, 'utf-8'));
        memoryDictCache.set(cacheKey, cached);
        return res.json(cached);
      } catch (e) {}
    }

    const prompt = `You are an expert bilingual English-Turkish lexicographer.
Analyze the English word "${cleanWord}" ${normalizedContext ? `in the specific context of this sentence: "${normalizedContext}"` : ''}.
Provide a precise Turkish translation and explanation.

Return ONLY a valid JSON object matching this schema:
{
  "word": "${cleanWord}",
  "lemma": "base form of the word (e.g., run for running)",
  "tr": "Turkish translation fitting the context (1-3 words in Turkish, NEVER the English word)",
  "phonetic": "IPA pronunciation transcription like /ˈkwaɪ.ət/",
  "pos": "noun | verb | adj | adv | phrase | preposition | conjunction",
  "contextDef": "Clear, concise 1-sentence Turkish definition explaining this word in this context",
  "example": "A short natural English example sentence showing usage"
}`;

    const DICT_MODEL_CASCADE = [
      'gemini-3.1-flash-lite',
      'gemini-3.8-flash',
      'gemini-flash-latest',
    ];

    let jsonText: string | null = null;
    let lastErr: any = null;
    const ai = getAI();

    for (const model of DICT_MODEL_CASCADE) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          config: {
            responseMimeType: 'application/json',
          },
        });

        jsonText = response.candidates?.[0]?.content?.parts?.[0]?.text || null;
        if (jsonText) break;
      } catch (err: any) {
        lastErr = err;
        console.warn(`Dictionary model ${model} failed, trying next...`);
      }
    }

    if (!jsonText) {
      throw lastErr || new Error('All dictionary models in cascade failed');
    }

    const parsed = JSON.parse(jsonText);
    if (!parsed.tr || parsed.tr.toLowerCase() === cleanWord.toLowerCase()) {
      parsed.tr = 'Çeviri bulunamadı';
    }

    memoryDictCache.set(cacheKey, parsed);
    fs.writeFile(cacheFilePath, JSON.stringify(parsed), () => {});
    return res.json(parsed);
  } catch (err: any) {
    console.warn('Dictionary lookup error:', err?.message || err);
    return res.status(500).json({ error: 'Translation lookup failed', message: err?.message });
  }
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`LinguAAI server running at http://localhost:${PORT}`);
  });
}

startServer();
