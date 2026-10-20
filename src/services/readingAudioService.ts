/**
 * Studio Natural Audio Service for Reading Module (LinguAAI FAZ 7)
 * 
 * Provides human-like, fluent English narration using Gemini Neural TTS via /api/tts.
 * Matches English text with natural English voices (Zephyr / Kore / Puck).
 * Preserves sentence integrity, prevents abrupt pauses, and implements transparent error handling.
 */

import { SpeechRate, getSavedSpeechRate, saveSpeechRate } from '../utils/speech';

export type ReadingVoice = 'Zephyr' | 'Kore' | 'Fenrir' | 'Puck';
export type ReadingAudioStatus = 'idle' | 'loading' | 'playing' | 'paused' | 'error';

export interface ReadingAudioState {
  status: ReadingAudioStatus;
  currentParagraphIndex: number | null;
  errorMessage: string | null;
  speed: SpeechRate;
  activeVoice: ReadingVoice;
  isFullTextMode: boolean;
}

type AudioStateListener = (state: ReadingAudioState) => void;

class ReadingAudioService {
  private audioElement: HTMLAudioElement | null = null;
  private audioCache = new Map<string, string>(); // Text + Voice -> Base64 WAV
  private inFlightRequests = new Map<string, Promise<string>>();
  
  private listeners: AudioStateListener[] = [];
  
  private status: ReadingAudioStatus = 'idle';
  private currentParagraphIndex: number | null = null;
  private errorMessage: string | null = null;
  private speed: SpeechRate = 1.0;
  private activeVoice: ReadingVoice = 'Zephyr';
  private isFullTextMode: boolean = false;

  private paragraphsToPlay: string[] = [];
  private currentQueueIndex: number = 0;
  private activeAbortController: AbortController | null = null;

  constructor() {
    this.speed = getSavedSpeechRate();
    if (typeof window !== 'undefined') {
      this.initAudioElement();
    }
  }

  private initAudioElement() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.src = '';
    }

    this.audioElement = new Audio();
    this.audioElement.preload = 'auto';
    this.audioElement.playbackRate = this.speed;

    this.audioElement.addEventListener('ended', () => {
      this.handleAudioEnded();
    });

    this.audioElement.addEventListener('error', (e) => {
      console.warn('[ReadingAudioService] Audio element playback error:', e);
      this.notifyState({
        status: 'error',
        errorMessage: 'Ses oynatma sırasında beklenmeyen bir hata oluştu.',
      });
    });
  }

  public subscribe(listener: AudioStateListener): () => void {
    this.listeners.push(listener);
    listener(this.getState());
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  public getState(): ReadingAudioState {
    return {
      status: this.status,
      currentParagraphIndex: this.currentParagraphIndex,
      errorMessage: this.errorMessage,
      speed: this.speed,
      activeVoice: this.activeVoice,
      isFullTextMode: this.isFullTextMode,
    };
  }

  private notifyState(partial?: Partial<ReadingAudioState>) {
    if (partial) {
      if (partial.status !== undefined) this.status = partial.status;
      if (partial.currentParagraphIndex !== undefined) this.currentParagraphIndex = partial.currentParagraphIndex;
      if (partial.errorMessage !== undefined) this.errorMessage = partial.errorMessage;
      if (partial.speed !== undefined) this.speed = partial.speed;
      if (partial.activeVoice !== undefined) this.activeVoice = partial.activeVoice;
      if (partial.isFullTextMode !== undefined) this.isFullTextMode = partial.isFullTextMode;
    }

    const state = this.getState();
    this.listeners.forEach(l => {
      try {
        l(state);
      } catch (err) {
        console.warn('Listener error in ReadingAudioService:', err);
      }
    });
  }

  public setSpeed(newSpeed: SpeechRate) {
    this.speed = newSpeed;
    saveSpeechRate(newSpeed);
    if (this.audioElement) {
      this.audioElement.playbackRate = newSpeed;
    }
    this.notifyState({ speed: newSpeed });
  }

  public setVoice(voice: ReadingVoice) {
    this.activeVoice = voice;
    this.notifyState({ activeVoice: voice });
  }

  public stop() {
    if (this.activeAbortController) {
      this.activeAbortController.abort();
      this.activeAbortController = null;
    }

    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
      this.audioElement.src = '';
    }

    this.paragraphsToPlay = [];
    this.currentQueueIndex = 0;
    this.currentParagraphIndex = null;
    this.isFullTextMode = false;
    this.errorMessage = null;
    this.notifyState({
      status: 'idle',
      currentParagraphIndex: null,
      errorMessage: null,
      isFullTextMode: false,
    });
  }

  public pause() {
    if (this.audioElement && this.status === 'playing') {
      this.audioElement.pause();
      this.notifyState({ status: 'paused' });
    }
  }

  public resume() {
    if (this.audioElement && this.status === 'paused') {
      this.audioElement.play().then(() => {
        this.notifyState({ status: 'playing' });
      }).catch(err => {
        console.warn('[ReadingAudioService] Resume failed:', err);
        this.notifyState({ status: 'error', errorMessage: 'Ses oynatma devam ettirilemedi.' });
      });
    }
  }

  /**
   * Fetch natural English audio from /api/tts with client cache & retry
   */
  private async fetchAudio(text: string, signal?: AbortSignal): Promise<string> {
    const cleanText = text.replace(/[*_#`[\]()]/g, '').trim();
    if (!cleanText) throw new Error('Metin boş');

    const cacheKey = `${cleanText}|${this.activeVoice}|en`;
    if (this.audioCache.has(cacheKey)) {
      return this.audioCache.get(cacheKey)!;
    }

    if (this.inFlightRequests.has(cacheKey)) {
      return this.inFlightRequests.get(cacheKey)!;
    }

    const requestPromise = (async (): Promise<string> => {
      let lastErr: any = null;
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          const res = await fetch('/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              text: cleanText,
              voiceName: this.activeVoice,
              lang: 'en',
              style: 'Natural, fluent, clear storytelling English reading with appropriate pauses',
            }),
            signal,
          });

          if (!res.ok) {
            const errJson = await res.json().catch(() => ({}));
            throw new Error(errJson.error || `TTS sunucu hatası (${res.status})`);
          }

          const data = await res.json();
          if (!data.audioBase64 || data.audioBase64.length < 50) {
            throw new Error('TTS sunucusu geçersiz ses verisi döndürdü');
          }

          this.audioCache.set(cacheKey, data.audioBase64);
          return data.audioBase64;
        } catch (err: any) {
          lastErr = err;
          if (err.name === 'AbortError') throw err;
          if (attempt < 2) {
            await new Promise(r => setTimeout(r, 600));
          }
        }
      }
      throw lastErr || new Error('Doğal ses sentezi başarısız oldu.');
    })();

    this.inFlightRequests.set(cacheKey, requestPromise);
    try {
      return await requestPromise;
    } finally {
      this.inFlightRequests.delete(cacheKey);
    }
  }

  /**
   * Play a single paragraph with natural English voice
   */
  public async playParagraph(paragraphText: string, paragraphIndex: number) {
    this.stop();

    this.currentParagraphIndex = paragraphIndex;
    this.isFullTextMode = false;
    this.notifyState({
      status: 'loading',
      currentParagraphIndex: paragraphIndex,
      errorMessage: null,
      isFullTextMode: false,
    });

    this.activeAbortController = new AbortController();

    try {
      const base64Wav = await this.fetchAudio(paragraphText, this.activeAbortController.signal);
      
      if (!this.audioElement) {
        this.initAudioElement();
      }

      if (this.audioElement) {
        this.audioElement.src = `data:audio/wav;base64,${base64Wav}`;
        this.audioElement.playbackRate = this.speed;
        await this.audioElement.play();
        this.notifyState({ status: 'playing' });
      }
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      console.warn('[ReadingAudioService] playParagraph failed:', err);
      this.notifyState({
        status: 'error',
        errorMessage: 'Doğal ses sunucusuna ulaşılamadı. Lütfen bağlantınızı kontrol edip tekrar deneyin.',
      });
    }
  }

  /**
   * Play full text consecutively paragraph-by-paragraph with natural transition
   */
  public async playFullText(paragraphs: string[]) {
    this.stop();

    if (!paragraphs || paragraphs.length === 0) return;

    this.paragraphsToPlay = paragraphs;
    this.currentQueueIndex = 0;
    this.isFullTextMode = true;

    this.playNextInQueue();
  }

  private async playNextInQueue() {
    if (this.currentQueueIndex >= this.paragraphsToPlay.length) {
      this.stop();
      return;
    }

    const currentParagraph = this.paragraphsToPlay[this.currentQueueIndex];
    this.currentParagraphIndex = this.currentQueueIndex;

    this.notifyState({
      status: 'loading',
      currentParagraphIndex: this.currentQueueIndex,
      isFullTextMode: true,
      errorMessage: null,
    });

    this.activeAbortController = new AbortController();

    try {
      const base64Wav = await this.fetchAudio(currentParagraph, this.activeAbortController.signal);

      if (!this.audioElement) {
        this.initAudioElement();
      }

      if (this.audioElement) {
        this.audioElement.src = `data:audio/wav;base64,${base64Wav}`;
        this.audioElement.playbackRate = this.speed;
        await this.audioElement.play();
        this.notifyState({ status: 'playing' });

        // Non-blocking background prefetch for the NEXT paragraph
        if (this.currentQueueIndex + 1 < this.paragraphsToPlay.length) {
          const nextPara = this.paragraphsToPlay[this.currentQueueIndex + 1];
          this.fetchAudio(nextPara).catch(() => {});
        }
      }
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      console.warn('[ReadingAudioService] playNextInQueue failed:', err);
      this.notifyState({
        status: 'error',
        errorMessage: 'Doğal ses sunucusuna ulaşılamadı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.',
      });
    }
  }

  private handleAudioEnded() {
    if (this.isFullTextMode && this.paragraphsToPlay.length > 0) {
      this.currentQueueIndex += 1;
      if (this.currentQueueIndex < this.paragraphsToPlay.length) {
        // Natural small pause between paragraphs (300ms)
        setTimeout(() => {
          if (this.status !== 'idle') {
            this.playNextInQueue();
          }
        }, 300);
      } else {
        this.stop();
      }
    } else {
      this.stop();
    }
  }

  /**
   * Speak single word using natural English voice
   */
  public async speakWord(word: string): Promise<boolean> {
    const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()?"'“”’]/g, '').trim();
    if (!cleanWord) return false;

    try {
      const base64Wav = await this.fetchAudio(cleanWord);
      const audio = new Audio(`data:audio/wav;base64,${base64Wav}`);
      audio.playbackRate = 1.0;
      await audio.play();
      return true;
    } catch (e) {
      console.warn('[ReadingAudioService] Single word speech failed:', e);
      return false;
    }
  }
}

export const readingAudioService = new ReadingAudioService();
