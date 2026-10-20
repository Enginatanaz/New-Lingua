/**
 * Bilingual Lexicon & Contextual Dictionary Service (LinguAAI FAZ 7)
 * 
 * Accurately cleans punctuation, detects context-appropriate Turkish meanings,
 * provides phonetic IPA transcription, parts of speech, and prevents duplicate English fallbacks.
 */

import { ReadingWordItem } from '../types/reading';

export interface DictionaryLookupResult {
  word: string;
  cleanWord: string;
  lemma: string;
  tr: string;
  phonetic?: string;
  pos?: string;
  contextDef?: string;
  example?: string;
  isFound: boolean;
  source: 'text_curated' | 'offline_lexicon' | 'api' | 'not_found';
}

// High frequency common core English-to-Turkish lexicon for instant offline response
const COMMON_LEXICON: Record<string, { tr: string; pos: string; phonetic: string; defTr: string }> = {
  // Common verbs
  'be': { tr: 'olmak', pos: 'verb', phonetic: '/biː/', defTr: 'Varlık veya durum bildiren temel fiil.' },
  'is': { tr: 'dır/dir (olmak)', pos: 'verb', phonetic: '/ɪz/', defTr: 'Üçüncü tekil şahıs durum fiili.' },
  'are': { tr: 'olmak (çoğul)', pos: 'verb', phonetic: '/ɑːr/', defTr: 'Çoğul ve ikinci şahıs durum fiili.' },
  'was': { tr: 'idi (geçmiş zaman)', pos: 'verb', phonetic: '/wɒz/', defTr: 'Geçmiş zaman tekil durum fiili.' },
  'were': { tr: 'idiler (geçmiş zaman)', pos: 'verb', phonetic: '/wɜːr/', defTr: 'Geçmiş zaman çoğul durum fiili.' },
  'have': { tr: 'sahip olmak', pos: 'verb', phonetic: '/hæv/', defTr: 'Bir şeye sahip olmayı veya deneyimi ifade eder.' },
  'has': { tr: 'sahip olmak (üçüncü şahıs)', pos: 'verb', phonetic: '/hæz/', defTr: 'Üçüncü şahıs mülkiyet fiili.' },
  'had': { tr: 'sahipti', pos: 'verb', phonetic: '/hæd/', defTr: 'Geçmişte sahip olunan durum.' },
  'do': { tr: 'yapmak', pos: 'verb', phonetic: '/duː/', defTr: 'Bir eylemi veya görevi gerçekleştirmek.' },
  'does': { tr: 'yapar', pos: 'verb', phonetic: '/dʌz/', defTr: 'Geniş zaman üçüncü şahıs eylem fiili.' },
  'did': { tr: 'yaptı', pos: 'verb', phonetic: '/dɪd/', defTr: 'Geçmiş zamanda bir işi tamamlamak.' },
  'go': { tr: 'gitmek', pos: 'verb', phonetic: '/ɡoʊ/', defTr: 'Bir yerden başka bir yere hareket etmek.' },
  'goes': { tr: 'gider', pos: 'verb', phonetic: '/ɡoʊz/', defTr: 'Bir yöne hareket etme eylemi.' },
  'went': { tr: 'gitti', pos: 'verb', phonetic: '/went/', defTr: 'Geçmiş zamanda bir yere gitmek.' },
  'gone': { tr: 'gitmiş', pos: 'verb', phonetic: '/ɡɒn/', defTr: 'Gitmiş bulunmak.' },
  'see': { tr: 'görmek, anlamak', pos: 'verb', phonetic: '/siː/', defTr: 'Gözle algılamak veya farkına varmak.' },
  'saw': { tr: 'gördü', pos: 'verb', phonetic: '/sɔː/', defTr: 'Geçmişte gözlemlemek.' },
  'seen': { tr: 'görülmüş', pos: 'verb', phonetic: '/siːn/', defTr: 'Görülmüş olan.' },
  'make': { tr: 'yapmak, üretmek', pos: 'verb', phonetic: '/meɪk/', defTr: 'Yeni bir şey oluşturmak veya inşa etmek.' },
  'made': { tr: 'yaptı, üretildi', pos: 'verb', phonetic: '/meɪd/', defTr: 'Üretilmiş veya yapılmış.' },
  'get': { tr: 'almak, elde etmek, varmak', pos: 'verb', phonetic: '/ɡet/', defTr: 'Kazanmak, elde etmek veya bir duruma gelmek.' },
  'got': { tr: 'aldı, ulaştı', pos: 'verb', phonetic: '/ɡɒt/', defTr: 'Elde edilmiş olan.' },
  'come': { tr: 'gelmek', pos: 'verb', phonetic: '/kʌm/', defTr: 'Konuşucuya doğru yaklaşmak.' },
  'came': { tr: 'geldi', pos: 'verb', phonetic: '/keɪm/', defTr: 'Geçmişte gelme eylemi.' },
  'know': { tr: 'bilmek, tanımak', pos: 'verb', phonetic: '/noʊ/', defTr: 'Bilgiye sahip olmak veya farkında olmak.' },
  'knew': { tr: 'biliyordu', pos: 'verb', phonetic: '/nuː/', defTr: 'Geçmişte bir bilgiyi bilmek.' },
  'known': { tr: 'bilinen', pos: 'verb', phonetic: '/noʊn/', defTr: 'Tanınan veya bilinen durum.' },
  'take': { tr: 'almak, götürmek', pos: 'verb', phonetic: '/teɪk/', defTr: 'Bir şeyi eline almak veya kabul etmek.' },
  'took': { tr: 'aldı', pos: 'verb', phonetic: '/tʊk/', defTr: 'Geçmiş zamanda almak.' },
  'think': { tr: 'düşünmek, sanmak', pos: 'verb', phonetic: '/θɪŋk/', defTr: 'Zihinde fikir yürütmek veya inanmak.' },
  'thought': { tr: 'düşündü / düşünce', pos: 'verb', phonetic: '/θɔːt/', defTr: 'Geçmiş düşünce veya fikir.' },
  'tell': { tr: 'anlatmak, söylemek', pos: 'verb', phonetic: '/tel/', defTr: 'Birine sözlü bilgi vermek.' },
  'told': { tr: 'anlattı', pos: 'verb', phonetic: '/toʊld/', defTr: 'Geçmişte birine bilgi aktarmak.' },
  'find': { tr: 'bulmak', pos: 'verb', phonetic: '/faɪnd/', defTr: 'Arayıp keşfetmek veya rastlamak.' },
  'found': { tr: 'buldu', pos: 'verb', phonetic: '/faʊnd/', defTr: 'Keşfedilmiş veya bulunmuş.' },
  'give': { tr: 'vermek', pos: 'verb', phonetic: '/ɡɪv/', defTr: 'Bir şeyi bir başkasına sunmak.' },
  'gave': { tr: 'verdi', pos: 'verb', phonetic: '/ɡeɪv/', defTr: 'Geçmişte başkasına sunulan.' },
  'ask': { tr: 'sormak, istemek', pos: 'verb', phonetic: '/æsk/', defTr: 'Soru yöneltmek veya talepte bulunmak.' },
  'walk': { tr: 'yürümek', pos: 'verb', phonetic: '/wɔːk/', defTr: 'Adımlarla ilerlemek.' },
  'walks': { tr: 'yürür', pos: 'verb', phonetic: '/wɔːks/', defTr: 'Yürüme eylemi.' },
  'walked': { tr: 'yürüdü', pos: 'verb', phonetic: '/wɔːkt/', defTr: 'Geçmişte adımlamak.' },
  'order': { tr: 'sipariş etmek, emretmek', pos: 'verb', phonetic: '/ˈɔːr.dər/', defTr: 'Yiyecek veya içecek istemek.' },
  'orders': { tr: 'sipariş eder', pos: 'verb', phonetic: '/ˈɔːr.dərz/', defTr: 'Sipariş verme eylemi.' },
  'ordered': { tr: 'sipariş etti', pos: 'verb', phonetic: '/ˈɔːr.dərd/', defTr: 'Geçmişte verilen sipariş.' },
  'wake': { tr: 'uyanmak', pos: 'verb', phonetic: '/weɪk/', defTr: 'Uykudan kalkmak.' },
  'wakes': { tr: 'uyanır', pos: 'verb', phonetic: '/weɪks/', defTr: 'Güne başlama eylemi.' },
  'woke': { tr: 'uyandı', pos: 'verb', phonetic: '/woʊk/', defTr: 'Geçmişte uyanmak.' },
  'open': { tr: 'açmak / açık', pos: 'verb', phonetic: '/ˈoʊ.pən/', defTr: 'Kapalı olanı aralamak.' },
  'opens': { tr: 'açar', pos: 'verb', phonetic: '/ˈoʊ.pənz/', defTr: 'Açma eylemi.' },
  'opened': { tr: 'açtı', pos: 'verb', phonetic: '/ˈoʊ.pənd/', defTr: 'Açılmış olan.' },
  'write': { tr: 'yazmak', pos: 'verb', phonetic: '/raɪt/', defTr: 'Kağıda veya ekrana harf dökmek.' },
  'writes': { tr: 'yazar', pos: 'verb', phonetic: '/raɪts/', defTr: 'Yazı yazma eylemi.' },
  'wrote': { tr: 'yazdı', pos: 'verb', phonetic: '/roʊt/', defTr: 'Geçmişte kaleme alınan.' },
  'read': { tr: 'okumak', pos: 'verb', phonetic: '/riːd/', defTr: 'Yazılı metinleri çözümlemek.' },
  'listen': { tr: 'dinlemek', pos: 'verb', phonetic: '/ˈlɪs.ən/', defTr: 'Sese dikkatle kulak vermek.' },
  'speak': { tr: 'konuşmak', pos: 'verb', phonetic: '/spiːk/', defTr: 'Kelimelerle ses çıkarmak.' },
  'live': { tr: 'yaşamak', pos: 'verb', phonetic: '/lɪv/', defTr: 'Hayatta olmak veya bir yerde ikamet etmek.' },
  'learn': { tr: 'öğrenmek', pos: 'verb', phonetic: '/lɜːrn/', defTr: 'Yeni bir bilgi veya beceri edinmek.' },
  'understand': { tr: 'anlamak', pos: 'verb', phonetic: '/ˌʌn.dərˈstænd/', defTr: 'Kavramak, idrak etmek.' },

  // Common Nouns
  'book': { tr: 'kitap', pos: 'noun', phonetic: '/bʊk/', defTr: 'Yazılı veya basılı yapraklar bütünü.' },
  'books': { tr: 'kitaplar', pos: 'noun', phonetic: '/bʊks/', defTr: 'Birden fazla kitap.' },
  'cafe': { tr: 'kafe', pos: 'noun', phonetic: '/kæˈfeɪ/', defTr: 'Kahve ve hafif yiyecekler sunan mekan.' },
  'coffee': { tr: 'kahve', pos: 'noun', phonetic: '/ˈkɔː.fi/', defTr: 'Kavrulmuş çekirdeklerden yapılan sıcak içecek.' },
  'tea': { tr: 'çay', pos: 'noun', phonetic: '/tiː/', defTr: 'Demlenerek tüketilen geleneksel içecek.' },
  'water': { tr: 'su', pos: 'noun', phonetic: '/ˈwɔː.tər/', defTr: 'Yaşam için temel berrak sıvı.' },
  'window': { tr: 'pencere', pos: 'noun', phonetic: '/ˈwɪn.doʊ/', defTr: 'Işık ve hava girmesini sağlayan cam açıklık.' },
  'river': { tr: 'nehir, ırmak', pos: 'noun', phonetic: '/ˈrɪv.ər/', defTr: 'Doğal su akıntısı.' },
  'city': { tr: 'şehir, kent', pos: 'noun', phonetic: '/ˈsɪt.i/', defTr: 'Yoğun nüfuslu büyük yerleşim yeri.' },
  'street': { tr: 'sokak, cadde', pos: 'noun', phonetic: '/striːt/', defTr: 'Binalar arasındaki yol.' },
  'streets': { tr: 'sokaklar', pos: 'noun', phonetic: '/striːts/', defTr: 'Birden çok sokak.' },
  'morning': { tr: 'sabah', pos: 'noun', phonetic: '/ˈmɔːr.nɪŋ/', defTr: 'Günün erken başlangıç saatleri.' },
  'evening': { tr: 'akşam', pos: 'noun', phonetic: '/ˈiːv.nɪŋ/', defTr: 'Günün batımına yakın saatler.' },
  'night': { tr: 'gece', pos: 'noun', phonetic: '/naɪt/', defTr: 'Karanlık olan uyku dönemi.' },
  'time': { tr: 'zaman, vakit', pos: 'noun', phonetic: '/taɪm/', defTr: 'Süre veya an.' },
  'day': { tr: 'gün', pos: 'noun', phonetic: '/deɪ/', defTr: '24 saatlik süre.' },
  'week': { tr: 'hafta', pos: 'noun', phonetic: '/wiːk/', defTr: 'Yedi günlük zaman dilimi.' },
  'month': { tr: 'ay', pos: 'noun', phonetic: '/mʌnθ/', defTr: 'Takvim ayı.' },
  'year': { tr: 'yıl, sene', pos: 'noun', phonetic: '/jɪr/', defTr: 'On iki aylık periyot.' },
  'friend': { tr: 'arkadaş, dost', pos: 'noun', phonetic: '/frend/', defTr: 'Sevilen ve güvenilen yakın kişi.' },
  'friends': { tr: 'arkadaşlar', pos: 'noun', phonetic: '/frendz/', defTr: 'Dostlar.' },
  'family': { tr: 'aile', pos: 'noun', phonetic: '/ˈfæm.əl.i/', defTr: 'Akrabalık bağı bulunan hane halkı.' },
  'people': { tr: 'insanlar, halk', pos: 'noun', phonetic: '/ˈpiː.pəl/', defTr: 'Toplumu oluşturan bireyler.' },
  'person': { tr: 'kişi, şahıs', pos: 'noun', phonetic: '/ˈpɜːr.sən/', defTr: 'Birey.' },
  'place': { tr: 'yer, mekan', pos: 'noun', phonetic: '/pleɪs/', defTr: 'Konum veya alan.' },
  'world': { tr: 'dünya', pos: 'noun', phonetic: '/wɜːrld/', defTr: 'Yerküre veya yaşam çevresi.' },
  'life': { tr: 'hayat, yaşam', pos: 'noun', phonetic: '/laɪf/', defTr: 'Doğumdan ölüme kadar geçen süreç.' },
  'story': { tr: 'hikaye, öykü', pos: 'noun', phonetic: '/ˈstɔːr.i/', defTr: 'Anlatılan olay örgüsü.' },
  'bird': { tr: 'kuş', pos: 'noun', phonetic: '/bɜːrd/', defTr: 'Kanatlı uçan hayvan.' },
  'birds': { tr: 'kuşlar', pos: 'noun', phonetic: '/bɜːrdz/', defTr: 'Birden fazla kuş.' },
  'waiter': { tr: 'garson', pos: 'noun', phonetic: '/ˈweɪ.tər/', defTr: 'Kafede veya restoranda servis yapan kişi.' },
  'waiters': { tr: 'garsonlar', pos: 'noun', phonetic: '/ˈweɪ.tərz/', defTr: 'Servis çalışanları.' },
  'jacket': { tr: 'ceket', pos: 'noun', phonetic: '/ˈdʒæk.ɪt/', defTr: 'Üste giyilen dış giysi.' },
  'energy': { tr: 'enerji, canlılık', pos: 'noun', phonetic: '/ˈen.ər.dʒi/', defTr: 'Güç ve zindelik.' },

  // Common Adjectives
  'quiet': { tr: 'sessiz, sakin', pos: 'adj', phonetic: '/ˈkwaɪ.ət/', defTr: 'Gürültüsüz ve huzurlu.' },
  'calm': { tr: 'sakin, durgun', pos: 'adj', phonetic: '/kɑːm/', defTr: 'Huzurlu ve telaşsız.' },
  'friendly': { tr: 'arkadaş canlısı, samimi', pos: 'adj', phonetic: '/ˈfrend.li/', defTr: 'Güler yüzlü ve cana yakın.' },
  'fresh': { tr: 'taze, yeni', pos: 'adj', phonetic: '/freʃ/', defTr: 'Yeni hazırlanmış veya ferah.' },
  'hot': { tr: 'sıcak', pos: 'adj', phonetic: '/hɑːt/', defTr: 'Yüksek sıcaklığa sahip.' },
  'cold': { tr: 'soğuk', pos: 'adj', phonetic: '/koʊld/', defTr: 'Düşük sıcaklığa sahip.' },
  'busy': { tr: 'meşgul, yoğun', pos: 'adj', phonetic: '/ˈbɪz.i/', defTr: 'İşlerle dolu veya hareketli.' },
  'good': { tr: 'iyi, güzel', pos: 'adj', phonetic: '/ɡʊd/', defTr: 'Olumlu niteliklere sahip.' },
  'great': { tr: 'harika, büyük', pos: 'adj', phonetic: '/ɡreɪt/', defTr: 'Çok iyi veya olağanüstü.' },
  'new': { tr: 'yeni', pos: 'adj', phonetic: '/nuː/', defTr: 'Yakın zamanda var olmuş.' },
  'old': { tr: 'eski, yaşlı', pos: 'adj', phonetic: '/oʊld/', defTr: 'Uzun süredir var olan.' },
  'small': { tr: 'küçük', pos: 'adj', phonetic: '/smɔːl/', defTr: 'Boyutu ufak olan.' },
  'large': { tr: 'büyük, geniş', pos: 'adj', phonetic: '/lɑːrdʒ/', defTr: 'Kapsamı veya boyutu geniş.' },
  'blue': { tr: 'mavi', pos: 'adj', phonetic: '/bluː/', defTr: 'Gökyüzü rengi.' },
  'black': { tr: 'siyah, kara', pos: 'adj', phonetic: '/blæk/', defTr: 'Karanlık renk.' },
  'white': { tr: 'beyaz, ak', pos: 'adj', phonetic: '/waɪt/', defTr: 'Kar rengi.' },
  'happy': { tr: 'mutlu', pos: 'adj', phonetic: '/ˈhæp.i/', defTr: 'Sevinçli ve neşeli.' },
  'early': { tr: 'erken', pos: 'adv', phonetic: '/ˈɜːr.li/', defTr: 'Vaktinden önce veya sabah saatlerinde.' },
  'still': { tr: 'hâlâ, henüz / hareketsiz', pos: 'adv', phonetic: '/stɪl/', defTr: 'Sürmekte olan durumu ifade eder.' },
  'warmly': { tr: 'sıcakkanlılıkla, içtenlikle', pos: 'adv', phonetic: '/ˈwɔːrm.li/', defTr: 'Samimi ve sevgi dolu biçimde.' },
  'always': { tr: 'her zaman, daima', pos: 'adv', phonetic: '/ˈɔːl.weɪz/', defTr: 'Kesintisiz, sürekli olarak.' },
  'often': { tr: 'sık sık, çoğunlukla', pos: 'adv', phonetic: '/ˈɔːf.ən/', defTr: 'Düzenli aralıklarla.' },
  'never': { tr: 'asla, hiçbir zaman', pos: 'adv', phonetic: '/ˈnev.ər/', defTr: 'Hiçbir koşulda olmama.' },
};

// Client in-memory lookup cache to avoid repeating API hits
const clientLookupCache = new Map<string, DictionaryLookupResult>();

/**
 * Strips punctuation and returns a sanitized lowercase token
 */
export function cleanWordToken(rawWord: string): string {
  if (!rawWord) return '';
  return rawWord
    .replace(/^[.,/#!$%^&*;:{}=\-_`~()?"'“”’]+/, '')
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'“”’]+$/, '')
    .trim()
    .toLowerCase();
}

/**
 * Derives common root lemmas (e.g. plurals -> singular, -ed -> base, -ing -> base)
 */
export function getCandidateLemmas(cleanWord: string): string[] {
  const candidates = [cleanWord];

  // Plural -s, -es, -ies
  if (cleanWord.endsWith('ies') && cleanWord.length > 4) {
    candidates.push(cleanWord.slice(0, -3) + 'y');
  }
  if (cleanWord.endsWith('es') && cleanWord.length > 3) {
    candidates.push(cleanWord.slice(0, -2));
    candidates.push(cleanWord.slice(0, -1));
  }
  if (cleanWord.endsWith('s') && !cleanWord.endsWith('ss') && cleanWord.length > 2) {
    candidates.push(cleanWord.slice(0, -1));
  }

  // Past / Participle -ed
  if (cleanWord.endsWith('ied') && cleanWord.length > 4) {
    candidates.push(cleanWord.slice(0, -3) + 'y');
  }
  if (cleanWord.endsWith('ed') && cleanWord.length > 3) {
    candidates.push(cleanWord.slice(0, -2));
    candidates.push(cleanWord.slice(0, -1));
  }

  // Progressive -ing
  if (cleanWord.endsWith('ing') && cleanWord.length > 4) {
    candidates.push(cleanWord.slice(0, -3));
    candidates.push(cleanWord.slice(0, -3) + 'e');
  }

  // Adverb -ly
  if (cleanWord.endsWith('ly') && cleanWord.length > 3) {
    candidates.push(cleanWord.slice(0, -2));
  }

  return Array.from(new Set(candidates));
}

/**
 * Main Lookup function:
 * 1. Checks active reading text's curated vocabulary list (exact contextual pedagogical definition)
 * 2. Checks local common English-Turkish lexicon with inflection lemmatization
 * 3. Falls back to contextual /api/dictionary/lookup for unlisted words
 * 4. NEVER returns the English word as the Turkish translation if not found
 */
export async function lookupWordDefinition(
  rawWord: string,
  options: {
    contextSentence?: string;
    textVocabulary?: ReadingWordItem[];
  } = {}
): Promise<DictionaryLookupResult> {
  const cleanWord = cleanWordToken(rawWord);

  if (!cleanWord || cleanWord.length < 1) {
    return {
      word: rawWord,
      cleanWord: '',
      lemma: '',
      tr: 'Geçersiz kelime',
      isFound: false,
      source: 'not_found',
    };
  }

  // 1. Text-Curated Priority Check
  if (options.textVocabulary && options.textVocabulary.length > 0) {
    const directMatch = options.textVocabulary.find(
      (v) => v.word.toLowerCase() === cleanWord || cleanWordToken(v.word) === cleanWord
    );

    if (directMatch) {
      return {
        word: rawWord,
        cleanWord,
        lemma: directMatch.word,
        tr: directMatch.tr,
        phonetic: directMatch.phonetic,
        pos: directMatch.pos,
        contextDef: directMatch.contextDef,
        example: directMatch.example,
        isFound: true,
        source: 'text_curated',
      };
    }

    // Check candidate lemmas against text vocabulary
    const lemmas = getCandidateLemmas(cleanWord);
    for (const lem of lemmas) {
      const lemmaMatch = options.textVocabulary.find(
        (v) => v.word.toLowerCase() === lem || cleanWordToken(v.word) === lem
      );
      if (lemmaMatch) {
        return {
          word: rawWord,
          cleanWord,
          lemma: lemmaMatch.word,
          tr: lemmaMatch.tr,
          phonetic: lemmaMatch.phonetic,
          pos: lemmaMatch.pos,
          contextDef: lemmaMatch.contextDef,
          example: lemmaMatch.example,
          isFound: true,
          source: 'text_curated',
        };
      }
    }
  }

  // 2. Client Memory Cache Check
  const cacheKey = `${cleanWord}|${(options.contextSentence || '').slice(0, 60)}`;
  if (clientLookupCache.has(cacheKey)) {
    return clientLookupCache.get(cacheKey)!;
  }

  // 3. Offline Common Lexicon Check
  const candidates = getCandidateLemmas(cleanWord);
  for (const cand of candidates) {
    if (COMMON_LEXICON[cand]) {
      const entry = COMMON_LEXICON[cand];
      const result: DictionaryLookupResult = {
        word: rawWord,
        cleanWord,
        lemma: cand,
        tr: entry.tr,
        phonetic: entry.phonetic,
        pos: entry.pos,
        contextDef: entry.defTr,
        isFound: true,
        source: 'offline_lexicon',
      };
      clientLookupCache.set(cacheKey, result);
      return result;
    }
  }

  // 4. Remote API Contextual Lookup (/api/dictionary/lookup)
  try {
    const res = await fetch('/api/dictionary/lookup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        word: cleanWord,
        contextSentence: options.contextSentence,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.tr && data.tr.toLowerCase() !== cleanWord.toLowerCase() && data.tr !== 'Çeviri bulunamadı') {
        const result: DictionaryLookupResult = {
          word: rawWord,
          cleanWord,
          lemma: data.lemma || cleanWord,
          tr: data.tr,
          phonetic: data.phonetic,
          pos: data.pos,
          contextDef: data.contextDef,
          example: data.example,
          isFound: true,
          source: 'api',
        };
        clientLookupCache.set(cacheKey, result);
        return result;
      }
    }
  } catch (apiErr) {
    console.warn('[dictionaryService] Remote lookup warning:', apiErr);
  }

  // 5. Explicit "Not Found" state — NEVER repeat the English word as Turkish translation!
  const notFoundResult: DictionaryLookupResult = {
    word: rawWord,
    cleanWord,
    lemma: cleanWord,
    tr: 'Çeviri bulunamadı',
    contextDef: 'Bu kelime için Türkçe karşılık bulunamadı. Lütfen kelime kökünü veya yazımını kontrol edin.',
    isFound: false,
    source: 'not_found',
  };

  clientLookupCache.set(cacheKey, notFoundResult);
  return notFoundResult;
}
