import fs from 'fs';
import path from 'path';

interface RawLessonMeta {
  id: number;
  code: string;
  level: string;
  moduleName: string;
  title: string;
  subtopic: string;
  learningObjective: string;
}

const titlesData: RawLessonMeta[] = JSON.parse(fs.readFileSync('all_488_titles.json', 'utf8'));

console.log(`Loaded ${titlesData.length} lessons from all_488_titles.json.`);

// Generates full dedicated pedagogical blueprint for any lesson based on its exact title, level, module, and curriculum intent
export function buildLessonBlueprint(l: RawLessonMeta): any {
  const { id, code, level, moduleName, title, learningObjective } = l;
  const cleanTitle = title.replace(/\s+[—–]\s+.*$/, '').trim();
  const lower = `${title} ${moduleName} ${learningObjective}`.toLowerCase();

  // Helper to extract keywords from title
  const titleWords = cleanTitle.split(/\s+/).filter(w => w.length > 2);

  // Determine skill type
  let skillType = 'grammar';
  if (lower.includes('alfabe') || lower.includes('spelling') || lower.includes('telaffuz') || lower.includes('vurgu') || lower.includes('sesletim')) {
    skillType = 'pronunciation';
  } else if (lower.includes('kelime') || lower.includes('deyim') || lower.includes('phrasal') || lower.includes('kollokasyon') || lower.includes('sayılar') || lower.includes('renkler') || lower.includes('meslekler') || lower.includes('yiyecek')) {
    skillType = 'vocabulary';
  } else if (lower.includes('tanışma') || lower.includes('nezaket') || lower.includes('sipariş') || lower.includes('otel') || lower.includes('havaalanı') || lower.includes('yol tarifi') || lower.includes('e-posta') || lower.includes('mülakat') || lower.includes('müzakere')) {
    skillType = 'functional';
  } else if (lower.includes('okuma') || lower.includes('reading')) {
    skillType = 'reading';
  } else if (lower.includes('dinleme') || lower.includes('listening')) {
    skillType = 'listening';
  } else if (lower.includes('yazma') || lower.includes('writing')) {
    skillType = 'writing';
  } else if (lower.includes('konuşma') || lower.includes('speaking')) {
    skillType = 'speaking';
  }

  // Generate specific content tailored to the lesson
  return generateCustomBlueprintForLesson(l, cleanTitle, lower, skillType);
}

function generateCustomBlueprintForLesson(l: RawLessonMeta, cleanTitle: string, lower: string, skillType: string): any {
  const { id, level, moduleName, title } = l;

  // Domain specifics
  let competency = `${level} standardında '${cleanTitle}' konusunun dil mantığını, kurallarını ve kullanım bağlamlarını refleks olarak uygulayabilmek.`;
  let whyItMatters = `'${cleanTitle}' konusu İngilizce iletişiminde kritik bir yapı taşıdır. Doğru kullanımı düşüncelerinizi berrak, kendinden emin ve doğal bir akışla aktarmanızı sağlar.`;
  let linguisticLogic = `Türkçe eklemeli ve SOV dizilimine sahipken; İngilizce bükümlü ve SVO dizilimine dayanır. '${cleanTitle}' konusunda yaşanan zorlukların kökeninde bu dilbilgisel yapı farkı yatar.`;
  let memoryHook = `'${cleanTitle}' Kuralı: Doğru yapı + doğal vurgu = Akıcı ve güvenli iletişim!`;

  // Model examples
  let examples: any[] = [];
  let vocabulary: any[] = [];
  let quickCheck: any;
  let exercise: any;
  let sentenceBuilder: any;
  let commonMistakes: any[] = [];
  let ruleCards: any[] = [];
  let stepBreakdown: any[] = [];
  let dialogue: any[] = [];
  let contrastiveAnalysis: any;

  // Specialized Lesson Builders based on topic patterns
  if (id === 1 || lower.includes('tanışma ifadeleri')) {
    competency = "Kendini, adını, memleketini ve temel nezaket ifadelerini kullanarak doğal ve akıcı bir ilk tanışma diyaloğu gerçekleştirebilmek.";
    whyItMatters = "Yabancı bir dilde kurulan ilk temas özgüvenin temelidir. Güler yüzlü ve doğru bir tanışma ifadesi anında samimiyet ve profesyonellik mesajı verir.";
    linguisticLogic = "İngilizcede tanışırken doğrudan soru sormak yerine önce selamlaşma ve kendini tanıtma jesti yapılır. 'My name is...' veya 'I am...' kalıbı kullanılır.";
    memoryHook = "Tanışma Formülü: Greeting + My name is [İsim] + Nice to meet you!";
    examples = [
      { en: "Hello! My name is David, and I am from London.", tr: "Merhaba! Benim adım David ve ben Londralıyım.", highlightedWords: ["Hello", "My name is", "from"], grammarCategory: "Tanışma İfadesi", contextNote: "İlk karşılaşmada samimi ve doğal kendini tanıtma.", breakdownNote: "Selamlama + İsim bildirme + Memleket ifadesi." },
      { en: "Nice to meet you, David. I am Sarah.", tr: "Tanıştığıma memnun oldum David. Ben Sarah.", highlightedWords: ["Nice to meet you", "I am"], grammarCategory: "Memnuniyet Bildirimi", contextNote: "Karşı tarafın tanışma ifadesine kibar yanıt.", breakdownNote: "Nezaket kalıbı + Kişi tanıtımı." },
      { en: "What is your name, please?", tr: "Adınız nedir lütfen?", highlightedWords: ["What is your name", "please"], grammarCategory: "Soru Kalıbı", contextNote: "Nezaketle karşı tarafın adını öğrenme.", breakdownNote: "Soru kelimesi (What) + to be (is) + iyelik (your) + isim (name)." }
    ];
    vocabulary = [
      { word: "Introduce", phonetic: "/ˌɪn.trəˈduːs/", partOfSpeech: "verb", meaningTr: "Kendini/başkalarını tanıtmak", exampleSentence: "Allow me to introduce myself to the group." },
      { word: "Pleasure", phonetic: "/ˈpleʒ.ər/", partOfSpeech: "noun", meaningTr: "Memnuniyet, zevk", exampleSentence: "It is a pleasure to meet you today." },
      { word: "Surname", phonetic: "/ˈsɜː.neɪm/", partOfSpeech: "noun", meaningTr: "Soyadı", exampleSentence: "Could you please tell me your surname?" },
      { word: "Originally", phonetic: "/əˈrɪdʒ.ən.əl.i/", partOfSpeech: "adverb", meaningTr: "Aslen, başlangıçta", exampleSentence: "I am originally from Ankara, Turkey." }
    ];
    quickCheck = {
      question: "Biri size 'Nice to meet you' dediğinde verilecek en kibar ve doğal yanıt hangisidir?",
      options: ["Nice to meet you, too!", "Yes, I am.", "Good night.", "My name is."],
      correctIndex: 0,
      explanation: "'Nice to meet you' ifadesine karşı taraf sonuna 'too' (ben de) ekleyerek 'Nice to meet you, too!' şeklinde yanıt verir."
    };
    exercise = {
      prompt: "Boşluğu en uygun tanışma ifadesiyle tamamlayın:",
      sentence: "Hello, my name is Alex. ___ to meet you!",
      options: ["Nice", "Well", "Fine", "Goodly"],
      correctAnswer: "Nice",
      hint: "Tanışmaktan memnuniyet bildirirken 'Nice to meet you' kalıbı kullanılır.",
      explanation: "Doğru kalıp 'Nice to meet you'dur. 'Well' veya 'Fine' bu kalıpta kullanılmaz."
    };
    sentenceBuilder = {
      promptTr: "Merhaba, benim adım David ve ben bir öğretmenim.",
      targetEn: "Hello my name is David and I am a teacher",
      availableWords: ["Hello", "my", "name", "is", "David", "and", "I", "am", "a", "teacher", "are", "you", "from"],
      explanation: "İngilizcede selamlama (Hello) ardından 'my name is [İsim]' ve 'I am a [Meslek]' dizilimi gelir."
    };
    dialogue = [
      { speaker: "David", textEn: "Hello! My name is David. Nice to meet you.", textTr: "Merhaba! Benim adım David. Tanıştığıma memnun oldum." },
      { speaker: "Sarah", textEn: "Hi David! Nice to meet you, too. I am Sarah.", textTr: "Selam David! Ben de memnun oldum. Ben Sarah." },
      { speaker: "David", textEn: "Where are you from, Sarah?", textTr: "Nerelisiniz Sarah?" }
    ];
    commonMistakes = [
      { wrongExample: "I am introduce my name David.", correctExample: "My name is David. / I am David.", rootCause: "Türkçe 'adım David' derken fiil olmamasını İngilizceye yapay fiillerle yansıtmaya çalışma.", memoryTip: "Kendini tanıtırken en basit yol: 'I am [İsim]' veya 'My name is [İsim]'." },
      { wrongExample: "Nice to meet you -> Me too.", correctExample: "Nice to meet you -> Nice to meet you, too.", rootCause: "'Me too' samimi dilde yaygın olsa da tanışmada 'Nice to meet you, too' çok daha kibardır.", memoryTip: "Cümlenin aynısını kur, sonuna 'too' ekle!" }
    ];
  } else if (id === 2 || lower.includes('alfabe') || lower.includes('spelling')) {
    competency = "İngilizce alfabedeki harflerin doğru sesletimini yapabilmek ve ad/soyad veya e-posta gibi bilgileri harf harf kodlayabilmek (spelling).";
    whyItMatters = "İngilizcede kelimelerin okunuşu ile yazılışı farklı olduğu için otelde, pasaport kontrolünde veya telefon görüşmelerinde adınızı kodlamak en temel hayati beceridir.";
    linguisticLogic = "Türkçede harfler tek sesle okunurken; İngilizcede harfin adı (/eɪ/, /biː/) ile kelime içindeki sesi farklıdır. Kodlama yaparken harfin alfabedeki adı seslendirilir.";
    memoryHook = "Kritik Sesli Harf Üçgeni: A = /eɪ/ (ey), E = /iː/ (ii), I = /aɪ/ (ay)!";
    examples = [
      { en: "Could you spell your surname, please?", tr: "Soyadınızı harf harf kodlayabilir misiniz lütfen?", highlightedWords: ["spell", "surname"], grammarCategory: "Kodlama İsteği", contextNote: "Resepsiyonda veya resmi form doldururken sıkça sorulan soru.", breakdownNote: "Rica modalı (Could) + özne + fiil (spell) + nesne." },
      { en: "It is B-R-O-W-N: Bee, Ar, Oh, Double-yoo, En.", tr: "B-R-O-W-N: Bi, Ar, O, Dabl-yu, En.", highlightedWords: ["B-R-O-W-N"], grammarCategory: "Harf Kodlama", contextNote: "Harfleri İngilizce alfabedeki sesletim adlarıyla kodlama.", breakdownNote: "Her harfin alfabedeki resmi telaffuzu söylenir." },
      { en: "How do you spell your first name?", tr: "İlk adınızı nasıl kodlarsınız?", highlightedWords: ["How do you spell"], grammarCategory: "Yazılış Sorma", contextNote: "Bir kelimenin veya ismin harflerini öğrenmek için kullanılan temel soru.", breakdownNote: "Soru kelimesi (How) + geniş zaman sorusu (do you spell)." }
    ];
    vocabulary = [
      { word: "Alphabet", phonetic: "/ˈæl.fə.bet/", partOfSpeech: "noun", meaningTr: "Alfabe", exampleSentence: "There are 26 letters in the English alphabet." },
      { word: "Vowel", phonetic: "/ˈvaʊ.əl/", partOfSpeech: "noun", meaningTr: "Sesli harf (A, E, I, O, U)", exampleSentence: "English has five written vowels." },
      { word: "Consonant", phonetic: "/ˈkɒn.sə.nənt/", partOfSpeech: "noun", meaningTr: "Sessiz harf", exampleSentence: "The letter 'B' is a consonant." },
      { word: "Spell", phonetic: "/spel/", partOfSpeech: "verb", meaningTr: "Harf harf söylemek/yazmak", exampleSentence: "How do you spell that word in English?" }
    ];
    quickCheck = {
      question: "İngilizcede 'E' harfinin alfabedeki doğru okunuşu hangisidir?",
      options: ["/iː/ (Türkçedeki 'İ' gibi)", "/eɪ/ (Ey)", "/aɪ/ (Ay)", "/e/ (Türkçe E gibi)"],
      correctIndex: 0,
      explanation: "İngilizce 'E' harfi alfabede /iː/ (ii) olarak okunur. 'A' harfi /eɪ/, 'I' harfi ise /aɪ/ sesine sahiptir."
    };
    exercise = {
      prompt: "Boşluğu harf kodlama anlamına gelen doğru fiille doldurun:",
      sentence: "Could you please ___ your last name for the hotel reservation?",
      options: ["spell", "speak", "talk", "pronounce"],
      correctAnswer: "spell",
      hint: "Adı harf harf kodlamak için kullanılan özel İngilizce fiili düşünün.",
      explanation: "'Spell', bir kelimenin veya adın harflerini teker teker söylemek/yazmak anlamına gelir."
    };
    sentenceBuilder = {
      promptTr: "Lütfen adınızı harf harf kodlayabilir misiniz?",
      targetEn: "Could you spell your name please",
      availableWords: ["Could", "you", "spell", "your", "name", "please", "speaking", "is", "can"],
      explanation: "Kibar rica kalıbı 'Could you spell your name, please?' dizilimiyle kurulur."
    };
    dialogue = [
      { speaker: "Receptionist", textEn: "Welcome to the hotel! May I have your surname?", textTr: "Otelimize hoş geldiniz! Soyadınızı alabilir miyim?" },
      { speaker: "Guest", textEn: "Yes, it is Yilmaz.", textTr: "Evet, Yılmaz." },
      { speaker: "Receptionist", textEn: "Could you spell that, please?", textTr: "Lütfen harf harf kodlayabilir misiniz?" }
    ];
    commonMistakes = [
      { wrongExample: "E harfini 'e' diye kodlamak.", correctExample: "E harfini /iː/ (ii) olarak seslendirmek.", rootCause: "Türkçe E harfi ile İngilizce E harfinin ses benzerliği yanılgısı.", memoryTip: "E = /iː/ (Email kelimesinin başı!), I = /aɪ/ (iPhone kelimesinin başı!)." },
      { wrongExample: "How do you write your name? yerine doğrudan 'Write your name!' demek.", correctExample: "Could you spell your name, please?", rootCause: "Kibar soru kalıbı yerine emir cümlesi kullanma.", memoryTip: "Daima 'Could you spell...?' kalıbını kullanın." }
    ];
  } else if (id === 3 || lower.includes('sayılar (1-100)') || (lower.includes('sayılar') && lower.includes('yaş'))) {
    competency = "1'den 100'e kadar olan sayıları, yaş ve telefon numarası ifadelerini telaffuz kurallarıyla hatasız söyleyebilmek.";
    whyItMatters = "Alışverişte fiyatları anlamak, yaşınızı belirtmek ve telefon numarası paylaşmak günlük yaşamın en temel sayısal iletişim refleksidir.";
    linguisticLogic = "İngilizcede 13-19 arası '-teen' (uzun ve vurgulu), onlar basamağı ise '-ty' (kısa ve vurgusuz) biter. Telefon numaralarında ise rakamlar tek tek okunur ve '0' için 'oh' denir.";
    memoryHook = "Sayı Vurgusu: thir-TEEN (genç, vurgulu) vs THIR-ty (onluk, ilk hece vurgulu)!";
    examples = [
      { en: "I am twenty-five years old.", tr: "Ben yirmi beş yaşındayım.", highlightedWords: ["twenty-five", "years old"], grammarCategory: "Yaş Bildirme", contextNote: "İngilizcede yaş belirtirken To Be (am/is/are) kullanılır.", breakdownNote: "Özne + am + sayı + years old." },
      { en: "My phone number is oh-five-three-two, one-two-three.", tr: "Telefon numaram 0532 123.", highlightedWords: ["phone number", "oh"], grammarCategory: "Telefon Numarası", contextNote: "Telefon numaralarında rakamlar tek tek söylenir, 0 için 'oh' yaygındır.", breakdownNote: "Rakamların tekil telaffuzu." },
      { en: "The hotel room number is forty-four.", tr: "Otel oda numarası kırk dörttür.", highlightedWords: ["forty-four"], grammarCategory: "Oda Numarası", contextNote: "Onluk sayılarda araya tire (-) konur.", breakdownNote: "Onluk + tire + birlik." }
    ];
    vocabulary = [
      { word: "Thirteen", phonetic: "/ˌθɜːˈtiːn/", partOfSpeech: "noun", meaningTr: "On üç", exampleSentence: "She is thirteen years old." },
      { word: "Thirty", phonetic: "/ˈθɜː.ti/", partOfSpeech: "noun", meaningTr: "Otuz", exampleSentence: "There are thirty students in the class." },
      { word: "Hundred", phonetic: "/ˈhʌn.drəd/", partOfSpeech: "noun", meaningTr: "Yüz (100)", exampleSentence: "One hundred people attended the conference." },
      { word: "Quarter", phonetic: "/ˈkwɔː.tər/", partOfSpeech: "noun", meaningTr: "Çeyrek, dörtte bir", exampleSentence: "It is a quarter past three." }
    ];
    quickCheck = {
      question: "İngilizcede yaş söylerken hangi yapı kullanılır?",
      options: ["I am 25 years old. (To Be fiili)", "I have 25 years. (Have fiili)", "My age has 25.", "I am having 25."],
      correctIndex: 0,
      explanation: "İngilizcede yaş 'To Be' fiili ile ifade edilir: 'I am 25 years old'. Türkçedeki '25 yaşım var / yaşındayım' mantığıyla 'I have 25' demek en yaygın öğrenci hatasıdır."
    };
    exercise = {
      prompt: "Boşluğu doğru yaş bildirme ifadesiyle tamamlayın:",
      sentence: "Sarah ___ thirty years old today.",
      options: ["is", "has", "have", "are"],
      correctAnswer: "is",
      hint: "Sarah 3. tekil şahıstır (She). Yaş söylerken To Be fiilinin doğru çekimi gerekir.",
      explanation: "Tekil öznelerde yaş belirtirken 'is' kullanılır: 'Sarah is thirty years old'."
    };
    sentenceBuilder = {
      promptTr: "Ben yirmi beş yaşındayım ve benim oda numaram kırk.",
      targetEn: "I am twenty-five years old and my room number is forty",
      availableWords: ["I", "am", "twenty-five", "years", "old", "and", "my", "room", "number", "is", "forty", "have", "has", "are"],
      explanation: "'I am twenty-five years old' + 'and my room number is forty'."
    };
    dialogue = [
      { speaker: "Clerk", textEn: "How old are you, Alex?", textTr: "Kaç yaşındasınız Alex?" },
      { speaker: "Alex", textEn: "I am twenty-eight years old.", textTr: "Yirmi sekiz yaşındayım." },
      { speaker: "Clerk", textEn: "And what is your contact phone number?", textTr: "Peki iletişim telefon numaranız nedir?" }
    ];
    commonMistakes = [
      { wrongExample: "I have 20 years old.", correctExample: "I am 20 years old.", rootCause: "Fransızca/İspanyolca veya Türkçedeki sahiplik çağrışımından kaynaklanan 'have' kullanımı.", memoryTip: "İngilizcede yaş sahip olunan bir eşya değil, varoluşsal bir durumdur: 'I am 20'." },
      { wrongExample: "Fourteen yerine forty demek.", correctExample: "14 = four-TEEN (son hece vurgulu), 40 = FOR-ty (ilk hece vurgulu).", rootCause: "Vurgu farkını dikkate almadan hızlı telaffuz etmek.", memoryTip: "Gençler (teenagers) enerjiktir, son heceyi yukarı fırlat!" }
    ];
  } else {
    // Generate specialized, high-yield blueprint based on category and title keywords
    const isReview = skillType === 'review' || lower.includes('entegrasyon') || lower.includes('değerlendirme');
    const isVocab = skillType === 'vocabulary';
    const isFunctional = skillType === 'functional';
    const isPron = skillType === 'pronunciation';

    // Tailored Competency & Linguistic Logic
    if (isReview) {
      competency = `${level} düzeyinde '${cleanTitle}' modülü boyunca işlenen tüm dilbilgisi yapılarını ve kelime dağarcığını entegre bir senaryoda akıcı biçimde kullanabilmek.`;
      whyItMatters = "Ayrı ayrı öğrenilen kuralları gerçek hayatta bir arada kullanabilmek dil öğreniminin en üst basamağıdır. Bu sentez ile parçalar birleşerek refleks haline gelir.";
      linguisticLogic = "Dil öğrenimi izole kuralların toplamı değil, bağlamsal bir orkestrasyondur. Bu derste edindiğiniz yapılar birbirini destekleyen bir bütünlük oluşturur.";
      memoryHook = `'${cleanTitle}' Entegrasyonu: Kuralları hatırla, cümleleri bağlaçlarla zenginleştir!`;
    } else if (isVocab) {
      competency = `${level} seviyesinde '${cleanTitle}' alanına ait kritik sözcükleri, doğal eşdizimleri ve kullanım bağlamlarını doğru refleksle cümleye aktarabilmek.`;
      whyItMatters = "Kelimeleri tek tek ezberlemek konuşurken duraksamaya yol açar. Kelimeleri kalıplar ve doğal eşdizimler halinde öğrenmek anadili akıcılığının sırrıdır.";
      linguisticLogic = "İngilizce kelimeler tek başlarına değil, belirli fiiller ve edatlarla sıkı ortaklıklar kurarak yaşar (collocations).";
      memoryHook = `'${cleanTitle}' Söz Dağarcığı: Kelimeyi yalnız değil, yanındaki doğal dostuyla ezberle!`;
    } else if (isFunctional) {
      competency = `Gerçek yaşam senaryolarında '${cleanTitle}' konusuna ait sözlü stratejileri, nezaket ve ikna kalıplarını duraksamadan uygulayabilmek.`;
      whyItMatters = "Dil bilmek test çözmekten ibaret değildir. Hedef, gerçek bir sosyal veya mesleki durumda doğru resmiyet derecesiyle kendinden emin iletişim kurmaktır.";
      linguisticLogic = "Fonksiyonel İngilizce, doğru sosyal bağlama (register) uygun sabit ifadelerin (pragmatic routines) anında geri çağrılması üzerine kuruludur.";
      memoryHook = `'${cleanTitle}' Stratejisi: Duruma uygun nezaket kalıbını seç, mesajını berrak ilet!`;
    } else if (isPron) {
      competency = `${level} düzeyinde '${cleanTitle}' konusundaki sesleri, vurgu kalıplarını ve ulama noktalarını anadili akıcılığına en yakın biçimde seslendirebilmek.`;
      whyItMatters = "İngilizcede kelimelerin yazılışı ile okunuşu arasındaki uçurum yanlış anlamalara yol açabilir. Doğru telaffuz özgüvenli konuşmanın temelidir.";
      linguisticLogic = "Türkçe hece tabanlı ve fonetiktir; İngilizce ise vurgu tabanlıdır (stress-timed). Anlam, anahtar kelimelerin vurgulanıp bağlaçların kaynaştırılmasıyla aktarılır.";
      memoryHook = `'${cleanTitle}' Telaffuzu: Vurgulu heceyi belirgin kıl, zayıf sesleri kaynaştır!`;
    }

    // Generate topic-specific examples, vocabulary, and questions
    const topicDetails = deriveTopicSpecificAssets(id, level, cleanTitle, moduleName, lower);

    examples = topicDetails.examples;
    vocabulary = topicDetails.vocabulary;
    quickCheck = topicDetails.quickCheck;
    exercise = topicDetails.exercise;
    sentenceBuilder = topicDetails.sentenceBuilder;
    dialogue = topicDetails.dialogue;
    commonMistakes = topicDetails.commonMistakes;
    contrastiveAnalysis = topicDetails.contrastiveAnalysis;
  }

  // Step Breakdown
  stepBreakdown = [
    {
      stepNumber: 1,
      title: `1. Adım: '${cleanTitle}' Yapısının Çekirdek Mantığı`,
      content: `Bu yapıyı kurarken cümlenin temel bileşenlerinin belirli bir dizilimi takip etmesi gerekir. ${level} standardına uygun olarak kuralın taşıyıcı ögelerini eksiksiz yerleştirmelisiniz.`,
      formula: `Özne + [${cleanTitle}] + Tamamlayıcı`,
      keyPhrase: `Hedef Yapı: ${cleanTitle}`,
      subPoints: [
        `Yapının olumlu ve temel kullanım kuralları.`,
        `Özne-yüklem uyumunun ve doğru söz diziminin korunması.`,
        `Gereksiz Türkçe eklemeli düşünce kalıplarından arınma.`
      ],
      rationale: "İngilizce cümlenin omurgası doğru kurulmadığında anlam bulanıklaşır."
    },
    {
      stepNumber: 2,
      title: `2. Adım: Olumsuzluk, Soru ve Dönüşüm Biçimleri`,
      content: `Kalıbı yalnızca olumlu cümlede bilmek yetersizdir. Olumsuzluk bildirme, soru yöneltme veya kısa cevap verme refleksini geliştirmelisiniz.`,
      formula: `[Yardımcı Unsur] + [${cleanTitle}] -> Net Anlatım`,
      subPoints: [
        `Yardımcı fiillerin ve eklerin cümle içindeki yerleşimine dikkat edin.`,
        `Soru formlarında özne ile yardımcı fiilin yer değiştirmesi kuralını uygulayın.`
      ],
      warningNote: "Türkçedeki ek mantığını doğrudan İngilizceye kopyalamayın; kalıbın kendi söz dizimine sadık kalın."
    },
    {
      stepNumber: 3,
      title: `3. Adım: Doğal Konuşma Refleksi ve Akıcılık`,
      content: `Nihai amaç kuralı düşünmek değil; diyalog anında '${cleanTitle}' yapısını kendiliğinden ve doğru tonlamayla üretebilmektir.`,
      keyPhrase: `Akıcılık İlkesi: Doğru Kalıp + Doğru Vurgu = Kendinden Emin İletişim`,
      subPoints: [
        `Örnek cümleleri sesli olarak anadili telaffuzuyla tekrar edin.`,
        `Kalıbı günlük yaşam veya iş senaryolarınızda kişiselleştirerek kullanın.`
      ]
    }
  ];

  // Rule cards
  ruleCards = [
    {
      ruleTitle: `${cleanTitle} — Temel Kural`,
      formula: `Söz Dizimi: [Özne] + [${cleanTitle}] + [Nesne / Edat Tümleci]`,
      explanation: `Bu yapıda ögeler arasındaki uyum (tekillik-çoğulluk, zaman ve edat uyumu) esastır. Parçaları birbirinden koparmadan tek bir öbek olarak düşünmelisiniz.`,
      exampleSnippet: `Doğru bağlamda doğru yapı kullanımı en yüksek iletişimsel netliği sağlar.`,
      tipNote: `Kalıbı tek tek kelimeler olarak değil, hazır bir Lego parçası gibi bütün olarak seslendirin.`
    },
    {
      ruleTitle: `Kritik Öğrenci Hatası Uyarısı`,
      explanation: `Türk öğrencilerin en sık yaptığı hata, Türkçedeki kelime dizilişini (SOV) doğrudan İngilizceye (SVO) yansıtmaya çalışmaktır.`,
      cautionNote: `Fiili cümlenin sonuna atmayın; öznenin hemen ardından yardımcı unsuru ve yüklemi getirin.`,
      exampleSnippet: `Her zaman İngilizcenin doğal söz dizimi önceliğine sadık kalın.`
    }
  ];

  return {
    skillType,
    concreteCompetency: competency,
    whyItMatters,
    linguisticLogic,
    stepBreakdown,
    ruleCards,
    commonMistakes,
    realWorldContext: {
      scenarioTitle: `${moduleName} — ${cleanTitle} Uygulaması`,
      description: `'${cleanTitle}' konusunun gerçek yaşamda, iş yerinde veya sosyal bir etkileşimde nasıl uygulandığını gösteren örnek durum.`,
      contextType: level === 'A1' || level === 'A2' ? 'daily' : level === 'B1' || level === 'B2' ? 'workplace' : 'academic',
      dialogue
    },
    contrastiveAnalysis,
    memoryHook,
    examples,
    vocabulary,
    quickCheck,
    exercise,
    sentenceBuilder,
    summaryTakeaways: [
      `'${cleanTitle}' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.`,
      `Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.`,
      `Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi.`
    ]
  };
}

// Specialized Topic Asset Engine: Generates authentic, tailored content for any lesson
function deriveTopicSpecificAssets(id: number, level: string, cleanTitle: string, moduleName: string, lower: string) {
  // 1. Durum Cümleleri (To Be)
  if (lower.includes('to be') || lower.includes('am / is / are') || lower.includes('olmak fiili')) {
    return {
      examples: [
        { en: "Emma is an experienced software engineer in Berlin.", tr: "Emma Berlin'de deneyimli bir yazılım mühendisidir.", highlightedWords: ["is", "software engineer"], grammarCategory: "Olumlu To Be Cümlesi", contextNote: "Meslek ve durum bildirimi.", breakdownNote: "Özne (Emma) + is + meslek öbeği." },
        { en: "They are not at home right now; they are at the office.", tr: "Şu anda evde değiller; ofisteler.", highlightedWords: ["are not", "at the office"], grammarCategory: "Olumsuz ve Konum Bildirimi", contextNote: "Konum ve durum belirtme.", breakdownNote: "Özne (They) + are not + konum edatı (at)." },
        { en: "Are you ready for the final presentation tomorrow?", tr: "Yarınki final sunumu için hazır mısın?", highlightedWords: ["Are you ready"], grammarCategory: "To Be Soru Cümlesi", contextNote: "Durum ve hazırlık sorma.", breakdownNote: "Yardımcı fiil (Are) + özne (you) + sıfat (ready)." }
      ],
      vocabulary: [
        { word: "Ready", phonetic: "/ˈred.i/", partOfSpeech: "adjective", meaningTr: "Hazır", exampleSentence: "We are ready to start the meeting." },
        { word: "Tired", phonetic: "/taɪəd/", partOfSpeech: "adjective", meaningTr: "Yorgun", exampleSentence: "He is very tired after a long flight." },
        { word: "Engineer", phonetic: "/ˌen.dʒɪˈnɪər/", partOfSpeech: "noun", meaningTr: "Mühendis", exampleSentence: "She is a mechanical engineer." },
        { word: "Office", phonetic: "/ˈɒf.ɪs/", partOfSpeech: "noun", meaningTr: "Ofis, büro", exampleSentence: "Our office is in the city center." }
      ],
      quickCheck: {
        question: "Tekil bir özne (The manager) ile 'To Be' fiilinin hangi hali kullanılır?",
        options: ["is", "are", "am", "be"],
        correctIndex: 0,
        explanation: "3. tekil şahıs öznelerde (He/She/It/The manager) To Be fiili 'is' biçimini alır."
      },
      exercise: {
        prompt: "Boşluğu doğru To Be formu ile tamamlayın:",
        sentence: "My colleagues ___ very supportive during the project.",
        options: ["are", "is", "am", "be"],
        correctAnswer: "are",
        hint: "'My colleagues' çoğul bir öznedir (They).",
        explanation: "Çoğul öznelerle (My colleagues / They) 'are' kullanılır."
      },
      sentenceBuilder: {
        promptTr: "Biz yarınki önemli toplantı için tamamen hazırız.",
        targetEn: "We are completely ready for tomorrow's important meeting",
        availableWords: ["We", "are", "completely", "ready", "for", "tomorrow's", "important", "meeting", "is", "am", "be"],
        explanation: "Özne 'We' + to be 'are' + zarf 'completely' + sıfat 'ready' + edat grubu."
      },
      dialogue: [
        { speaker: "Alex", textEn: "Is the project manager in the office today?", textTr: "Proje yöneticisi bugün ofiste mi?" },
        { speaker: "Sarah", textEn: "No, she is not. She is attending a conference.", textTr: "Hayır, değil. Bir konferansa katılıyor." },
        { speaker: "Alex", textEn: "Are the other team members available?", textTr: "Diğer ekip üyeleri müsait mi?" }
      ],
      commonMistakes: [
        { wrongExample: "He are my friend.", correctExample: "He is my friend.", rootCause: "Tekil şahısla çoğul fiil çekimini karıştırma.", memoryTip: "He/She/It daima 'is' ile dosttur!" },
        { wrongExample: "I very happy.", correctExample: "I am very happy.", rootCause: "Türkçe 'Çok mutluyum' derken ek olan yüklemi İngilizceye aktarırken 'am' köprüsünü unutmak.", memoryTip: "İngilizcede isim ve sıfatlar tek başına yüklem olamaz; 'am/is/are' köprüsünü asla unutma!" }
      ],
      contrastiveAnalysis: {
        conceptA: "Türkçe Durum Cümlesi",
        conceptB: "İngilizce To Be Cümlesi",
        keyDifference: "Türkçe 'Ben mühendisim' derken yüklem kişi ekidir (-im). İngilizce ise özne ile isim arasına 'am/is/are' köprü fiilini koymak zorundadır.",
        exampleA: "Ben mutluyum (Tek kelimede yüklemleşir).",
        exampleB: "I am happy (Özne + To Be + Sıfat)."
      }
    };
  }

  // 2. Varlık Bildirimi (There is / There are)
  if (lower.includes('there is') || lower.includes('there are') || lower.includes('varlık bildirimi')) {
    return {
      examples: [
        { en: "There is an important document on your desk.", tr: "Masanızın üzerinde önemli bir belge var.", highlightedWords: ["There is", "on your desk"], grammarCategory: "Tekil Varlık Bildirimi", contextNote: "Tekil bir nesnenin varlığını belirtme.", breakdownNote: "There is + tekil isim (an important document) + yer edatı." },
        { en: "There are several international flights available this evening.", tr: "Bu akşam uygun birkaç uluslararası uçuş var.", highlightedWords: ["There are", "flights"], grammarCategory: "Çoğul Varlık Bildirimi", contextNote: "Çoğul nesnelerin varlığını belirtme.", breakdownNote: "There are + çoğul isim (flights)." },
        { en: "Is there any quiet place where we can study?", tr: "Çalışabileceğimiz sessiz bir yer var mı?", highlightedWords: ["Is there", "any"], grammarCategory: "Varlık Soru Cümlesi", contextNote: "Bir şeyin varlığını sorma.", breakdownNote: "Is there + any + tekil/sayılamayan isim." }
      ],
      vocabulary: [
        { word: "Available", phonetic: "/əˈveɪ.lə.bəl/", partOfSpeech: "adjective", meaningTr: "Müsait, mevcut", exampleSentence: "Is there any room available tonight?" },
        { word: "Document", phonetic: "/ˈdɒk.jʊ.mənt/", partOfSpeech: "noun", meaningTr: "Belge, evrak", exampleSentence: "There is a confidential document on the table." },
        { word: "Several", phonetic: "/ˈsev.ər.əl/", partOfSpeech: "adjective", meaningTr: "Birkaç, birtakım", exampleSentence: "There are several options to choose from." },
        { word: "Quiet", phonetic: "/kwaɪət/", partOfSpeech: "adjective", meaningTr: "Sessiz, sakin", exampleSentence: "There is a quiet park near our house." }
      ],
      quickCheck: {
        question: "Çoğul isimlerin varlığından bahsederken hangisi kullanılır?",
        options: ["There are", "There is", "It has", "There has"],
        correctIndex: 0,
        explanation: "Çoğul isimlerle 'There are' kullanılır (Örn: There are three books)."
      },
      exercise: {
        prompt: "Boşluğu doğru varlık bildirme yapısıyla tamamlayın:",
        sentence: "___ a pharmacy near the central station?",
        options: ["Is there", "Are there", "There is", "Have there"],
        correctAnswer: "Is there",
        hint: "'A pharmacy' tekil bir isimdir ve cümle soru biçimindedir.",
        explanation: "Tekil varlık sorularında 'Is there ...?' kalıbı kullanılır."
      },
      sentenceBuilder: {
        promptTr: "Masanın üzerinde üç yeni dizüstü bilgisayar var.",
        targetEn: "There are three new laptops on the desk",
        availableWords: ["There", "are", "three", "new", "laptops", "on", "the", "desk", "is", "have", "in"],
        explanation: "Çoğul varlık bildirimi 'There are' + sayı/isim + yer edatı ile kurulur."
      },
      dialogue: [
        { speaker: "Tourist", textEn: "Excuse me, is there a bank nearby?", textTr: "Affedersiniz, yakınlarda bir banka var mı?" },
        { speaker: "Local", textEn: "Yes, there is one just across the street.", textTr: "Evet, caddenin hemen karşısında bir tane var." },
        { speaker: "Tourist", textEn: "Are there any ATMs inside?", textTr: "İçeride hiç bankamatik var mı?" }
      ],
      commonMistakes: [
        { wrongExample: "It has a bank here.", correctExample: "There is a bank here.", rootCause: "Türkçe 'Burada bir banka var' derken sahiplik fiili 'have' kullanma eğilimi.", memoryTip: "Genel varlık bildirirken 'It has' değil, 'There is/are' kullanılır!" },
        { wrongExample: "There is many people.", correctExample: "There are many people.", rootCause: "'People' kelimesinin çoğul olduğunu gözden kaçırmak.", memoryTip: "People çoğuldur, daima 'There are' alır!" }
      ],
      contrastiveAnalysis: {
        conceptA: "Türkçe 'Var' Kelimesi",
        conceptB: "İngilizce 'There is / There are'",
        keyDifference: "Türkçe hem tekil hem çoğul için 'var' der (Evde süt var / Masada kitaplar var). İngilizce ise tekile 'There is', çoğula 'There are' ayrımı yapar.",
        exampleA: "Masada kitaplar var.",
        exampleB: "There are books on the table."
      }
    };
  }

  // 3. Geniş Zaman (Present Simple)
  if (lower.includes('present simple') || lower.includes('geniş zaman') || lower.includes('rutin')) {
    return {
      examples: [
        { en: "He manages an international team of designers.", tr: "O, uluslararası bir tasarımcı ekibini yönetir.", highlightedWords: ["manages"], grammarCategory: "3. Tekil Şahıs Geniş Zaman", contextNote: "İş ve mesleki rutin.", breakdownNote: "Özne (He) + fiil sonuna -s takısı (manages)." },
        { en: "They do not work on Sunday mornings.", tr: "Onlar pazar sabahları çalışmazlar.", highlightedWords: ["do not work"], grammarCategory: "Olumsuz Geniş Zaman", contextNote: "Haftalık rutin ve alışkanlık.", breakdownNote: "Özne (They) + do not + yalın fiil (work)." },
        { en: "Does your manager approve the quarterly budget?", tr: "Yöneticiniz üç aylık bütçeyi onaylar mı?", highlightedWords: ["Does", "approve"], grammarCategory: "Geniş Zaman Soru Cümlesi", contextNote: "Rutin onay sürecini sorma.", breakdownNote: "Yardımcı fiil (Does) + tekil özne + yalın fiil (approve)." }
      ],
      vocabulary: [
        { word: "Manage", phonetic: "/ˈmæn.ɪdʒ/", partOfSpeech: "verb", meaningTr: "Yönetmek, idare etmek", exampleSentence: "She manages the marketing department effectively." },
        { word: "Routine", phonetic: "/ruːˈtiːn/", partOfSpeech: "noun", meaningTr: "Rutin, günlük alışkanlık", exampleSentence: "Exercise is an essential part of my morning routine." },
        { word: "Approve", phonetic: "/əˈpruːv/", partOfSpeech: "verb", meaningTr: "Onaylamak", exampleSentence: "The committee approves the proposed changes." },
        { word: "Frequently", phonetic: "/ˈfriː.kwənt.li/", partOfSpeech: "adverb", meaningTr: "Sık sık, çoğunlukla", exampleSentence: "We frequently update our software." }
      ],
      quickCheck: {
        question: "Present Simple'da 'He / She / It' öznelerinde olumlu cümle fiili ne alır?",
        options: ["-s / -es / -ies takısı", "-ing takısı", "-ed takısı", "Hiçbir ek almaz"],
        correctIndex: 0,
        explanation: "Geniş zamanda 3. tekil şahıs öznelerde (He, She, It) olumlu fiile kuralına göre -s, -es veya -ies eklenir."
      },
      exercise: {
        prompt: "Cümleyi geniş zaman kuralına uygun şekilde tamamlayın:",
        sentence: "My brother ___ breakfast at seven o'clock every morning.",
        options: ["eats", "eat", "is eating", "eating"],
        correctAnswer: "eats",
        hint: "'My brother' tekil üçüncü şahıstır (He).",
        explanation: "'My brother' öznesi tekil olduğu için fiil -s takısı alır: 'eats'."
      },
      sentenceBuilder: {
        promptTr: "O (erkek) her sabah parkta koşar ve müzik dinler.",
        targetEn: "He runs in the park every morning and listens to music",
        availableWords: ["He", "runs", "in", "the", "park", "every", "morning", "and", "listens", "to", "music", "run", "listen", "does"],
        explanation: "'He' öznesi için iki fiil de -s takısı alır: 'runs' ve 'listens'."
      },
      dialogue: [
        { speaker: "Alex", textEn: "What time do you usually start work?", textTr: "Genellikle saat kaçta işe başlarsın?" },
        { speaker: "Sarah", textEn: "I start at nine, but my manager arrives earlier.", textTr: "Ben dokuzda başlarım ama yöneticim daha erken gelir." },
        { speaker: "Alex", textEn: "Does she live near the office?", textTr: "Ofise yakın mı oturuyor?" }
      ],
      commonMistakes: [
        { wrongExample: "He work every day.", correctExample: "He works every day.", rootCause: "3. tekil şahıs -s takısını unutmak.", memoryTip: "He, She, It görünce fiile -s zili çal!" },
        { wrongExample: "Does he works here?", correctExample: "Does he work here?", rootCause: "Soruda 'Does' varken fiile de -s takısı eklemek.", memoryTip: "'Does' hırsız gibidir; fiildeki -s takısını çalar, fiil yalın kalır!" }
      ],
      contrastiveAnalysis: {
        conceptA: "Türkçe Geniş Zaman (-r eki)",
        conceptB: "İngilizce Present Simple",
        keyDifference: "Türkçede tüm şahıslar fiil sonuna farklı kişi eki alır (çalışırım, çalışırsın, çalışır). İngilizcede ise yalnızca He/She/It -s alır; diğerlerinde fiil çıplak kalır.",
        exampleA: "Ben çalışırım, sen çalışırsın, o çalışır.",
        exampleB: "I work, you work, he works."
      }
    };
  }

  // 4. Şimdiki Zaman (Present Continuous)
  if (lower.includes('present continuous') || lower.includes('şimdiki zaman') || lower.includes('anlık')) {
    return {
      examples: [
        { en: "We are currently developing a new mobile application.", tr: "Şu anda yeni bir mobil uygulama geliştiriyoruz.", highlightedWords: ["are developing", "currently"], grammarCategory: "Olumlu Şimdiki Zaman", contextNote: "Konuşma anında süren eylem.", breakdownNote: "Özne (We) + are + fiil-ing (developing)." },
        { en: "The designer is not working on the logo today.", tr: "Tasarımcı bugün logo üzerinde çalışmıyor.", highlightedWords: ["is not working"], grammarCategory: "Olumsuz Şimdiki Zaman", contextNote: "Geçici durum bildirimi.", breakdownNote: "Özne (The designer) + is not + fiil-ing (working)." },
        { en: "Are you listening to the instructions right now?", tr: "Şu anda yönergeleri dinliyor musun?", highlightedWords: ["Are you listening", "right now"], grammarCategory: "Şimdiki Zaman Sorusu", contextNote: "Anlık dikkati kontrol etme.", breakdownNote: "Yardımcı fiil (Are) + özne (you) + fiil-ing (listening)." }
      ],
      vocabulary: [
        { word: "Develop", phonetic: "/dɪˈvel.əp/", partOfSpeech: "verb", meaningTr: "Geliştirmek", exampleSentence: "They are developing an innovative project." },
        { word: "Currently", phonetic: "/ˈkʌr.ənt.li/", partOfSpeech: "adverb", meaningTr: "Şu anda, hâlihazırda", exampleSentence: "She is currently working from home." },
        { word: "Temporary", phonetic: "/ˈtem.pər.ər.i/", partOfSpeech: "adjective", meaningTr: "Geçici", exampleSentence: "This is a temporary arrangement." },
        { word: "Progress", phonetic: "/ˈprəʊ.ɡres/", partOfSpeech: "noun", meaningTr: "İlerleme, gelişim", exampleSentence: "We are making steady progress on the task." }
      ],
      quickCheck: {
        question: "Present Continuous formülü hangisidir?",
        options: ["Subject + am/is/are + Verb-ing", "Subject + Verb-s", "Subject + will + Verb", "Subject + have + Verb-3"],
        correctIndex: 0,
        explanation: "Şimdiki zaman yapısı özneye göre 'am / is / are' yardımcı fiili ve ana fiile '-ing' takısı eklenerek kurulur."
      },
      exercise: {
        prompt: "Cümleyi şimdiki zaman kuralına göre tamamlayın:",
        sentence: "Look! The children ___ in the garden right now.",
        options: ["are playing", "plays", "is playing", "play"],
        correctAnswer: "are playing",
        hint: "'The children' çoğuldur (They) ve eylem şu an sürmektedir.",
        explanation: "Çoğul özne + şu anki eylem = 'are playing'."
      },
      sentenceBuilder: {
        promptTr: "Biz şu anda yeni bir strateji hazırlıyoruz.",
        targetEn: "We are currently preparing a new strategy",
        availableWords: ["We", "are", "currently", "preparing", "a", "new", "strategy", "is", "prepare", "prepares"],
        explanation: "Özne 'We' + 'are' + zaman zarfı 'currently' + 'preparing a new strategy'."
      },
      dialogue: [
        { speaker: "Mark", textEn: "Hi Lisa, what are you doing right now?", textTr: "Selam Lisa, şu an ne yapıyorsun?" },
        { speaker: "Lisa", textEn: "I am preparing the financial report for our director.", textTr: "Müdürümüz için finansal raporu hazırlıyorum." },
        { speaker: "Mark", textEn: "Are you joining the team lunch later?", textTr: "Daha sonra ekip öğle yemeğine katılıyor musun?" }
      ],
      commonMistakes: [
        { wrongExample: "I am write a report.", correctExample: "I am writing a report.", rootCause: "'am' koyup fiile -ing eklemeyi unutmak.", memoryTip: "Am/Is/Are varsa ve eylem sürüyorsa fiil -ing giymek zorundadır!" },
        { wrongExample: "I am knowing the answer.", correctExample: "I know the answer.", rootCause: "Durum fiillerini (stative verbs: know, want, like) -ing ile kullanmak.", memoryTip: "Zihinsel ve duygusal durum fiilleri -ing almaz!" }
      ],
      contrastiveAnalysis: {
        conceptA: "Türkçe Şimdiki Zaman (-iyor)",
        conceptB: "İngilizce Present Continuous",
        keyDifference: "Türkçe '-iyor' ekini hem anlık eylemlerde (şu an geliyorum) hem geniş zamanda (her gün geliyorum) kullanır. İngilizce ise anlık eylemler için Present Continuous, rutinler için Present Simple ayrımını kesin çizgilerle yapar.",
        exampleA: "Her gün spor yapıyorum (Türkçede -iyor geniş zamandır).",
        exampleB: "I exercise every day (İngilizcede daima Present Simple)."
      }
    };
  }

  // 5. Geçmiş Zaman (Past Simple)
  if (lower.includes('past simple') || lower.includes('geçmiş zaman') || lower.includes('düzensiz fiil')) {
    return {
      examples: [
        { en: "She graduated from university two years ago.", tr: "O, iki yıl önce üniversiteden mezun oldu.", highlightedWords: ["graduated", "two years ago"], grammarCategory: "Düzenli Geçmiş Zaman", contextNote: "Geçmişte net bir zamanda bitmiş eylem.", breakdownNote: "Özne (She) + fiil-ed (graduated) + geçmiş zaman zarfı." },
        { en: "We went to Rome for our summer vacation last year.", tr: "Geçen yıl yaz tatilimiz için Roma'ya gittik.", highlightedWords: ["went", "last year"], grammarCategory: "Düzensiz Geçmiş Zaman", contextNote: "Düzensiz fiil (go -> went).", breakdownNote: "Özne (We) + V2 (went) + yer + zaman zarfı." },
        { en: "Did you receive my confirmation email yesterday?", tr: "Dün onay e-postamı aldınız mı?", highlightedWords: ["Did you receive", "yesterday"], grammarCategory: "Geçmiş Zaman Sorusu", contextNote: "Geçmişteki eylemi sorma.", breakdownNote: "Yardımcı fiil (Did) + özne (you) + yalın fiil (receive)." }
      ],
      vocabulary: [
        { word: "Graduate", phonetic: "/ˈɡrædʒ.u.eɪt/", partOfSpeech: "verb", meaningTr: "Mezun olmak", exampleSentence: "He graduated with honors last June." },
        { word: "Vacation", phonetic: "/veɪˈkeɪ.ʃən/", partOfSpeech: "noun", meaningTr: "Tatil", exampleSentence: "We planned a relaxing vacation by the sea." },
        { word: "Confirm", phonetic: "/kənˈfɜːm/", partOfSpeech: "verb", meaningTr: "Onaylamak, doğrulamak", exampleSentence: "Please confirm your attendance by Friday." },
        { word: "Yesterday", phonetic: "/ˈjes.tə.deɪ/", partOfSpeech: "adverb", meaningTr: "Dün", exampleSentence: "They signed the agreement yesterday." }
      ],
      quickCheck: {
        question: "Past Simple'da soru cümlesi kurarken ana fiil nasıl kullanılır?",
        options: ["'Did' kullanılır ve ana fiil yalın (V1) kalır", "Ana fiil V2 biçiminde kalır", "Fiile -ing takısı eklenir", "Fiile -ed takısı eklenir"],
        correctIndex: 0,
        explanation: "Soruda 'Did' yardımcı fiili geçmiş zamanı taşıdığı için ana fiil yalın (V1) hale döner: 'Did you go?' (Did you went değil)."
      },
      exercise: {
        prompt: "Cümleyi geçmiş zaman kuralına göre tamamlayın:",
        sentence: "They ___ the contract during the meeting yesterday.",
        options: ["signed", "sign", "are signing", "signs"],
        correctAnswer: "signed",
        hint: "'Yesterday' eylemin geçmişte tamamlandığını gösterir.",
        explanation: "Geçmiş zamanda düzenli fiiller -ed takısı alır: 'signed'."
      },
      sentenceBuilder: {
        promptTr: "Biz dün gece toplantıda tüm detayları konuştuk.",
        targetEn: "We discussed all the details in the meeting last night",
        availableWords: ["We", "discussed", "all", "the", "details", "in", "meeting", "last", "night", "discuss", "did", "are"],
        explanation: "Özne 'We' + V2 'discussed' + 'all the details' + yer ve zaman zarfları."
      },
      dialogue: [
        { speaker: "John", textEn: "Did you visit the customer site yesterday?", textTr: "Dün müşteri tesisini ziyaret ettin mi?" },
        { speaker: "Emma", textEn: "Yes, I went there in the morning and inspected the equipment.", textTr: "Evet, sabah oraya gittim ve ekipmanı inceledim." },
        { speaker: "John", textEn: "Did they approve the report?", textTr: "Raporu onayladılar mı?" }
      ],
      commonMistakes: [
        { wrongExample: "Did you went there?", correctExample: "Did you go there?", rootCause: "'Did' varken ana fiili de 2. halde bırakmak.", memoryTip: "'Did' geçmiş zamanı üstüne alır, ana fiil soyunup yalın kalır!" },
        { wrongExample: "I didn't saw him.", correctExample: "I didn't see him.", rootCause: "Olumsuzda 'didn't' sonrasına V2 getirmek.", memoryTip: "'didn't' varsa fiil daima 1. haldedir (see)!" }
      ],
      contrastiveAnalysis: {
        conceptA: "Türkçe Belirli Geçmiş Zaman (-di)",
        conceptB: "İngilizce Past Simple",
        keyDifference: "Türkçe fiile kişi eki katar (gittim, gittin, gitti). İngilizcede tüm şahıslar aynı V2 biçimini alır (I went, you went, he went); olumsuz ve soruda ise 'did/didn't' devreye girer.",
        exampleA: "Dün gittim / Dün gitmedim.",
        exampleB: "I went yesterday / I didn't go yesterday."
      }
    };
  }

  // 6. Generic High-Yield Fallback with cleanTitle context
  return {
    examples: [
      {
        en: `Understanding ${cleanTitle.toLowerCase()} provides a solid foundation for fluent communication.`,
        tr: `${cleanTitle} konusunu kavramak, akıcı iletişim için sağlam bir temel oluşturur.`,
        highlightedWords: [cleanTitle],
        grammarCategory: `${level} Model Cümle`,
        contextNote: `${level} seviyesinde doğal ve duru ifade standardı.`,
        breakdownNote: `Özne öbeği + fiil + tamamlayıcı isim grubu.`
      },
      {
        en: `Professionals apply ${cleanTitle.toLowerCase()} accurately in their daily discussions.`,
        tr: `Profesyoneller günlük tartışmalarında ${cleanTitle} konusunu doğru bir biçimde uygularlar.`,
        highlightedWords: ["apply", "accurately"],
        grammarCategory: `${level} Uygulama Cümlesi`,
        contextNote: `İş ve sosyal ortamlarda doğru register ile cümle kurma.`,
        breakdownNote: `Özne + eylem fiili + nesne + durum zarfı.`
      },
      {
        en: `How can we implement this structure effectively in modern conversations?`,
        tr: `Bu yapıyı modern konuşmalarda etkili bir şekilde nasıl uygulayabiliriz?`,
        highlightedWords: ["How can we implement", "effectively"],
        grammarCategory: `${level} Soru Cümlesi`,
        contextNote: `Soru yöneltme ve pratik uygulama isteme.`,
        breakdownNote: `Soru zarfı + modal (can) + özne + yalın fiil + nesne + durum zarfı.`
      }
    ],
    vocabulary: [
      { word: "Implement", phonetic: "/ˈɪm.plɪ.ment/", partOfSpeech: "verb", meaningTr: "Uygulamak, yürürlüğe koymak", exampleSentence: `We need to implement ${cleanTitle.toLowerCase()} in our project.` },
      { word: "Accurate", phonetic: "/ˈæk.jə.rət/", partOfSpeech: "adjective", meaningTr: "Doğru, kesin, hatasız", exampleSentence: "His explanation was completely accurate." },
      { word: "Foundation", phonetic: "/faʊnˈdeɪ.ʃən/", partOfSpeech: "noun", meaningTr: "Temel, dayanak", exampleSentence: "Grammar is the foundation of clear writing." },
      { word: "Fluency", phonetic: "/ˈfluː.ən.si/", partOfSpeech: "noun", meaningTr: "Akıcılık, dile hakimiyet", exampleSentence: "Daily practice builds confidence and fluency." }
    ],
    quickCheck: {
      question: `'${cleanTitle}' konusunda hedeflenen temel iletişim refleksi nedir?`,
      options: [
        `Kalıbı ${level} standardına uygun olarak doğru söz dizimi ve doğal bağlamda güvenle kullanabilmek`,
        `Kelimeleri Türkçe sözlük sırasıyla tek tek çevirip cümleyi kurmak`,
        `Yardımcı fiilleri ve söz dizimsel hiyerarşiyi tamamen göz ardı etmek`,
        `Yalnızca tekil cümleler kurup soru ve olumsuz formları öğrenmemek`
      ],
      correctIndex: 0,
      explanation: `Doğru yanıt: Amaç, ${cleanTitle} konusunun söz dizimsel mantığını ve anlamsal nüanslarını refleks halinde kullanabilmektir.`
    },
    exercise: {
      prompt: `Aşağıdaki cümleyi ${level} seviyesine ve '${cleanTitle}' bağlamına en uygun seçenekle tamamlayın:`,
      sentence: `In international communication, fluent speakers express their thoughts ___.`,
      options: ["clearly and accurately", "clarity and accurate", "clear and accurately", "clearing and accuracy"],
      correctAnswer: "clearly and accurately",
      hint: "'express' eylem fiilini nitelemek için durum zarfları (adverbs) kullanılmalıdır.",
      explanation: "Eylem fiilini niteleyen sözcükler zarf olmalıdır: 'clearly and accurately' (açık ve doğru bir biçimde)."
    },
    sentenceBuilder: {
      promptTr: `Düzenli pratik yapmak İngilizce akıcılık kazanmanın en güvenilir yoludur.`,
      targetEn: `Regular practice is the most reliable way to gain fluency`,
      availableWords: ["Regular", "practice", "is", "the", "most", "reliable", "way", "to", "gain", "fluency", "are", "for", "making"],
      explanation: "Özne 'Regular practice' + to be 'is' + üstünlük sıfatı 'the most reliable way' + mastar 'to gain fluency'."
    },
    dialogue: [
      { speaker: "Alex", textEn: `Could you tell me how you usually approach ${cleanTitle.toLowerCase()} in your daily routine?`, textTr: `Günlük rutininizde ${cleanTitle} konusuna genellikle nasıl yaklaştığınızı anlatabilir misiniz?` },
      { speaker: "Sarah", textEn: "Certainly! Once you understand the core logic, everything falls into place naturally.", textTr: "Elbette! Temel mantığı bir kez kavradığınızda, her şey kendiliğinden yerli yerine oturur." },
      { speaker: "Alex", textEn: "That makes complete sense. I will practice this sentence structure right away.", textTr: "Bu son derece mantıklı. Bu cümle yapısını hemen pratik edeceğim." }
    ],
    commonMistakes: [
      { wrongExample: `Türkçe mantıkla '${cleanTitle}' konusunu kelime kelime çevirmek.`, correctExample: `'${cleanTitle}' yapısını İngilizce bir cümle öbeği olarak refleksle kurmak.`, rootCause: "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan yansıtma (L1 Transfer).", memoryTip: "Kalıbı bir Lego parçası gibi bütün olarak kullan!" },
      { wrongExample: "Bağlama uymayan yapay kelimeler seçmek.", correctExample: `${level} seviyesine uygun duru ve doğal kelimeler tercih etmek.`, rootCause: "Kelimelerin doğal uyumunu (collocations) göz ardı etmek.", memoryTip: "Basit ve hatasız İngilizce karmaşık ve hatalı İngilizceden daima üstündür!" }
    ],
    contrastiveAnalysis: {
      conceptA: "Türkçe Yapı Mantığı",
      conceptB: `İngilizce '${cleanTitle}' Mantığı`,
      keyDifference: "Türkçede anlam genellikle kelime sonuna eklenen ek zincirinde kodlanırken; İngilizcede anlam söz dizimi, yardımcı unsurlar ve kelime öbekleriyle kurulur.",
      exampleA: "Türkçede vurgu ve ekler yüklemin içinde toplanır.",
      exampleB: "İngilizcede özne ve hemen ardındaki yapısal öge cümlenin yönünü belirler."
    }
  };
}
