// LinguAAI V8.0 — Bespoke Blackboard Pedagogical Database
// Module 3 & Module 4: Lessons 21 to 40 (CEFR A1)
// 100% Bespoke, topic-authentic chalkboard datasets.

import { TeacherBlackboardData } from '../../../types/lesson';

export const BLACKBOARDS_21_TO_40: Record<number, TeacherBlackboardData> = {
  // =========================================================================
  // LESSON 21: Geniş Zaman (Present Simple): Olumlu Cümleler
  // =========================================================================
  21: {
    title: "Geniş Zaman (Present Simple): Olumlu Cümle Yapısı (SVO)",
    subtitle: "Rutinler, Alışkanlıklar ve Genel Doğrular (Özne + Fiil + Nesne + Zaman)",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "ÖZNE (Subject) + FİİL (Verb) + NESNE (Object) + ZAMAN (Time)",
      components: [
        { label: "1. Özne Grubu", code: "I / You / We / They", role: "Fiil yalın hâlde kalır (V1)", color: 'white' },
        { label: "2. Eylem Fiili", code: "work / drink / study", role: "Temel rutin eylem", color: 'yellow' },
        { label: "3. Cümle Nesnesi", code: "coffee / English / projects", role: "Eylemin yöneldiği nesne", color: 'white' },
        { label: "4. Zaman Belirteci", code: "every morning / at 9 AM", role: "Eylemin yapılma sıklığı", color: 'white' },
      ],
      exampleEn: "I drink two cups of green tea every morning.",
      exampleTr: "Ben her sabah iki fincan yeşil çay içerim.",
      breakdownNote: "Türkçede fiil cümlenin en sonundadır ('içerim'); İngilizcede ise hemen öznenin ardından gelir ('I drink').",
    },
    chalkNote: {
      yellowHighlight: "I / You / We / They öznelerinde fiile hiçbir ek gelmez; fiil en yalın hâliyle (V1) kullanılır!",
      whiteExplanation: "Geniş Zaman şu anı değil; genel doğruları, iş alışkanlıklarını ve günlük tekrarlanan eylemleri anlatır.",
    },
    sideTip: "Zaman zarfı cümlenin en sonuna yerleştirilir: 'every day', 'on Mondays'.",
  },

  // =========================================================================
  // LESSON 22: Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları
  // =========================================================================
  22: {
    title: "Present Simple: 3. Tekil Şahıs -s / -es / -ies İmla Kuralları",
    subtitle: "He / She / It Öznelerinde Fiil Sonuna Gelen Eklerin Ses ve Harf Değişimi",
    layoutType: 'verb_transformation',
    headers: ["Fiil Kökü Bitişi", "Eklenen Takı", "Örnek Fiil Dönüşümü", "Cümle İçi Kullanım"],
    rows: [
      { col1: "Genel Çoğu Fiil", col2: "+s", highlightCol2: true, col3: "work -> works  •  read -> reads", col4: "She works at an international firm." },
      { col1: "-ch, -sh, -ss, -x, -o ile biten", col2: "+es", highlightCol2: true, col3: "watch -> watches  •  go -> goes", col4: "He watches the news every evening." },
      { col1: "Sessiz + Y ile biten", col2: "-y düşer, +ies gelir", highlightCol2: true, col3: "study -> studies  •  fly -> flies", col4: "Sarah studies medicine at university." },
      { col1: "Sesli + Y ile biten", col2: "Sadece +s gelir", highlightCol2: true, col3: "play -> plays  •  stay -> stays", col4: "David plays tennis on Sundays." },
      { col1: "Düzensiz Tekil: HAVE", col2: "HAVE -> HAS olur", highlightCol2: true, col3: "have -> has (haves DİYE BİR ŞEY YOK)", col4: "He has a busy schedule today." },
    ],
    chalkNote: {
      yellowHighlight: "'-s / -es' takısı YALNIZCA He, She, It öznelerinde ve YALNIZCA olumlu düz cümlelerde gelir!",
      whiteExplanation: "Soru ve olumsuz cümlelerde 'Does' devreye girdiğinde fiildeki '-s' takısı tamamen düşer: 'Does he work?'",
    },
    sideTip: "Telaffuz: 'watches' (/ɪz/ olarak sesletilir), 'plays' (/z/ sesi verir).",
  },

  // =========================================================================
  // LESSON 23: Present Simple: Olumsuz Cümleler (Don't / Doesn't)
  // =========================================================================
  23: {
    title: "Present Simple: Olumsuz Cümleler (Don't / Doesn't)",
    subtitle: "Yardımcı Fiil ile Olumsuzluk: Don't / Doesn't + Yalın Fiil (V1)",
    layoutType: 'grammar_table',
    headers: ["Özne Grubu", "Olumsuz Yardımcı Fiil", "Ana Fiil Hâli", "Örnek Cümle"],
    rows: [
      { col1: "I / You / We / They", col2: "don't (do not)", highlightCol2: true, col3: "Yalın Fiil (V1)", col4: "I don't drink coffee after 6 PM." },
      { col1: "He / She / It", col2: "doesn't (does not)", highlightCol2: true, col3: "Yalın Fiil (V1 - 's' DÜŞER!)", col4: "She doesn't eat meat; she is vegetarian." },
      { col1: "Kritik Hata Örneği", col2: "*doesn't works -> KESİNLİKLE YANLIŞ!", highlightCol2: true, col3: "Doğrusu: doesn't work", col4: "Does eki '-s' takısını zaten devralmıştır." },
      { col1: "Türkçe Anlam", col2: "-mez / -maz eki", highlightCol2: true, col3: "We don't work on Saturdays.", col4: "Cumartesi günleri çalışmayız." },
    ],
    chalkNote: {
      yellowHighlight: "DOESN'T kullanılan cümlede ana fiile ASLA '-s' takısı konmaz! 'She doesn't works' BÜYÜK HATADIR!",
      whiteExplanation: "Özne 'He, She, It' olsa bile olumsuzda ana fiil tamamen yalındır: 'He doesn't like cold weather.'",
    },
    sideTip: "'Don't' ve 'doesn't' konuşma dilinin standart kısaltmasıdır; 'do not' resmi metinlerde tercih edilir.",
  },

  // =========================================================================
  // LESSON 24: Present Simple: Soru Cümleleri (Do / Does) ve Kısa Cevaplar
  // =========================================================================
  24: {
    title: "Present Simple: Soru Cümleleri (Do / Does) ve Kısa Cevaplar",
    subtitle: "Yardımcı Fiil ile Soru Sorma Düzeni ve Kısa Yanıt Formülleri",
    layoutType: 'grammar_table',
    headers: ["Soru Kalıbı", "Yardımcı + Özne + Yalın Fiil", "Olumlu Kısa Cevap", "Olumsuz Kısa Cevap"],
    rows: [
      { col1: "Do I / you / we / they...?", col2: "Do you live in Istanbul?", highlightCol1: true, col3: "Yes, I do.", col4: "No, I don't." },
      { col1: "Does he / she / it...?", col2: "Does she speak Spanish?", highlightCol1: true, col3: "Yes, she does.", col4: "No, she doesn't." },
      { col1: "İş & Okul Sorusu", col2: "Do they work at weekends?", highlightCol1: true, col3: "Yes, they do.", col4: "No, they don't." },
      { col1: "Soru Kuralı", col2: "Does + Özne + Yalın Fiil (V1)", highlightCol1: true, col3: "Does he like tea? (likes YANLIŞ)", col4: "Soru formunda 's' düşer." },
    ],
    chalkNote: {
      yellowHighlight: "Soruda DO veya DOES cümlenin en başına gelir! DOES gelince ana fiildeki '-s' takısı düşer!",
      whiteExplanation: "Kısa cevaplarda ana fiil tekrarlanmaz; yalnızca 'Yes, I do' veya 'No, she doesn't' denir.",
    },
    sideTip: "Vurgu ve tonlama: Evet/Hayır sorularında ses tonu cümlenin sonunda yükselir.",
  },

  // =========================================================================
  // LESSON 25: Sıklık Zarfları: Always, Usually, Often, Sometimes, Never
  // =========================================================================
  25: {
    title: "Sıklık Zarfları: Always, Usually, Often, Sometimes, Never",
    subtitle: "Eylemlerin Ne Sıklıkla Yapıldığını Gösteren Zarfların Cümledeki Yeri",
    layoutType: 'grammar_table',
    headers: ["Sıklık Zarfı", "Yüzdelik Değer", "Cümledeki Konumu", "Örnek Cümle"],
    rows: [
      { col1: "Always", col2: "%100 (Daima, Her zaman)", highlightCol1: true, col3: "Ana fiilden ÖNCE", col4: "I always review my notes before exams." },
      { col1: "Usually / Normally", col2: "%85 (Genellikle, Çoğunlukla)", highlightCol1: true, col3: "Ana fiilden ÖNCE", col4: "She usually takes the metro to work." },
      { col1: "Often / Frequently", col2: "%70 (Sık sık)", highlightCol1: true, col3: "Ana fiilden ÖNCE", col4: "We often eat dinner together as a team." },
      { col1: "Sometimes", col2: "%50 (Bazen, Ara sıra)", highlightCol1: true, col3: "Fiilden önce / Cümle başında", col4: "He sometimes works from home on Fridays." },
      { col1: "Never", col2: "%0 (Asla, Hiçbir zaman)", highlightCol1: true, col3: "Cümleyi ANLAMCA olumsuz yapar", col4: "I never drink energy drinks. (don't kullanılmaz!)" },
    ],
    chalkNote: {
      yellowHighlight: "Sıklık zarfları normal fiillerden ÖNCE (always go), To Be fiilinden SONRA (is always late) gelir!",
      whiteExplanation: "'Never' zaten olumsuzluk içerdiğinden cümledeki fiile tekrar 'don't/doesn't' eklenmez: 'I never drink' (I don't never YANLIŞ!).",
    },
    sideTip: "Sıklık sorma sorusu: 'How often do you exercise?' (Ne sıklıkla egzersiz yaparsın?).",
  },

  // =========================================================================
  // LESSON 26: Günlük Sabah Rutini Fiilleri
  // =========================================================================
  26: {
    title: "Günlük Sabah Rutini Fiilleri ve Sıralama",
    subtitle: "Sabah Uyanışından Evden Çıkışa Kadar Olan Eylem Zinciri",
    layoutType: 'structure_table',
    headers: ["Sıralama", "İngilizce Eylem Fiili", "Örnek Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "1. Uyanma & Kalkma", col2: "wake up (uyanmak) • get up (yataktan kalkmak)", highlightCol2: true, col3: "I wake up at 7:00, but I get up at 7:15.", col4: "7'de uyanırım ama 7:15'te yataktan kalkarım." },
      { col1: "2. Hijyen & Bakım", col2: "wash my face • brush my teeth • take a shower", highlightCol2: true, col3: "I take a quick shower and brush my teeth.", col4: "Hızlı bir duş alıp dişlerimi fırçalarım." },
      { col1: "3. Giyinme", col2: "get dressed (giyinmek)", highlightCol2: true, col3: "She gets dressed in ten minutes.", col4: "On dakikada giyinir." },
      { col1: "4. Kahvaltı", col2: "have breakfast (kahvaltı yapmak)", highlightCol2: true, col3: "We have breakfast together every morning.", col4: "Her sabah birlikte kahvaltı yaparız." },
      { col1: "5. Evden Çıkış", col2: "leave home (evden ayrılmak / çıkmak)", highlightCol2: true, col3: "He leaves home at 8:00 AM.", col4: "Sabah saat 8:00'de evden çıkar." },
    ],
    chalkNote: {
      yellowHighlight: "Kahvaltı yapmak için 'make breakfast' (hazırlamak) veya 'HAVE breakfast' (yemek) denir. 'Eat breakfast' de doğrudur.",
      whiteExplanation: "'Wake up' gözlerini açmaktır; 'Get up' yataktan fiziksel olarak ayağa kalkmaktır.",
    },
    sideTip: "'Leave from home' YANLIŞTIR; İngilizcede doğrudan 'leave home' denir.",
  },

  // =========================================================================
  // LESSON 27: İş, Okul ve Akşam Rutinleri
  // =========================================================================
  27: {
    title: "İş, Okul ve Akşam Rutinleri",
    subtitle: "Ulaşım, Çalışma Saatleri ve Akşam Dinlenme Eylemleri",
    layoutType: 'structure_table',
    headers: ["Gün Bölümü", "Rutin Eylem", "Örnek Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "Ulaşım (Commute)", col2: "catch the bus • take the train • drive to work", highlightCol2: true, col3: "I take the metro to work every day.", col4: "İşe her gün metroyla giderim." },
      { col1: "İşe / Okula Başlama", col2: "arrive at work • start school", highlightCol2: true, col3: "She arrives at the office at 8:45 AM.", col4: "Ofise sabah 8:45'te varır." },
      { col1: "İşi / Okulu Bitirme", col2: "finish work • leave the office", highlightCol2: true, col3: "We finish work at 5:30 PM.", col4: "İşi akşam 5:30'da bitiririz." },
      { col1: "Eve Dönüş & Yemek", col2: "get home • have dinner", highlightCol2: true, col3: "I get home around 6:30 and have dinner.", col4: "6:30 civarı eve gelip akşam yemeği yerim." },
      { col1: "Gece Rutini", col2: "watch TV • go to bed", highlightCol2: true, col3: "He reads a book and goes to bed at 11.", col4: "Kitap okur ve 11'de yatar." },
    ],
    chalkNote: {
      yellowHighlight: "'Eve varmak' için 'get home' veya 'arrive home' denir. 'Go to home' YANLIŞTIR; 'home' önüne 'to' almaz!",
      whiteExplanation: "İşe/okula varmak için 'arrive AT work' veya 'arrive AT school' edatı kullanılır.",
    },
    sideTip: "Yatağa gitmek: 'go to bed' kalıbıdır ('go to sleep' uykuya dalmaktır).",
  },

  // =========================================================================
  // LESSON 28: Zaman Edatları: At, On, In Kullanım Matrisi
  // =========================================================================
  28: {
    title: "Zaman Edatları: AT, ON, IN Kullanım Matrisi",
    subtitle: "Hassas Saatten Geniş Yıllara Doğru Piramit Kuralı",
    layoutType: 'grammar_table',
    headers: ["Edat", "Kullanıldığı Zaman Aralığı", "Örnek İfadeler", "Örnek Cümle"],
    rows: [
      { col1: "AT (Hassas Nokta)", col2: "Saatler ve Özel Vakitler", highlightCol1: true, col3: "at 8:30, at noon, at night, at midnight, at the weekend", col4: "The meeting starts at 10:00 AM." },
      { col1: "ON (Belirli Günler)", col2: "Günler ve Belirli Tarihler", highlightCol1: true, col3: "on Monday, on Fridays, on 15th July, on my birthday", col4: "We don't work on Sundays." },
      { col1: "IN (Geniş Dönemler)", col2: "Aylar, Yıllar, Mevsimler, Günün Bölümleri", highlightCol1: true, col3: "in May, in 2026, in summer, in the morning / afternoon", col4: "The project ends in December." },
      { col1: "İstisna Uyarısı", col2: "in the morning vs at night", highlightCol1: true, col3: "in the morning/evening AMA at night", col4: "I study in the morning and rest at night." },
    ],
    chalkNote: {
      yellowHighlight: "Zaman Piramidi: AT (Saatler) -> ON (Günler & Tarihler) -> IN (Aylar, Yıllar, Mevsimler)!",
      whiteExplanation: "'Last, next, every, this' kelimelerinin önüne HİÇBİR edat gelmez: 'next Friday' (on next Friday YANLIŞ!).",
    },
    sideTip: "Günün bölümleri: 'in the morning', 'in the afternoon', 'in the evening' ama 'AT night'.",
  },

  // =========================================================================
  // LESSON 29: Boş Zaman Aktiviteleri ve Hobiler (Like / Love + V-ing)
  // =========================================================================
  29: {
    title: "Boş Zaman Aktiviteleri ve Sevgi Fiilleri (Like / Love + V-ing)",
    subtitle: "Beğeni ve İlgi Bildirirken Fiilin İsim-Fiil (Gerund -ing) Hâline Dönüşmesi",
    layoutType: 'structure_table',
    headers: ["Duygu Derecesi", "Fiil Kalıbı", "Örnek Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "Çok Sevme (Love)", col2: "love + V-ing", highlightCol2: true, col3: "I love swimming in the sea.", col4: "Denizde yüzmeyi çok severim." },
      { col1: "Sevme / Hoşlanma (Like)", col2: "like + V-ing", highlightCol2: true, col3: "She likes reading detective novels.", col4: "Polisiye romanlar okumayı sever." },
      { col1: "Zevk Alma (Enjoy)", col2: "enjoy + V-ing", highlightCol2: true, col3: "We enjoy cooking Italian food.", col4: "İtalyan yemekleri pişirmekten keyif alırız." },
      { col1: "Nefret Etme (Hate)", col2: "hate + V-ing", highlightCol2: true, col3: "He hates doing housework on Sundays.", col4: "Pazar günleri ev işi yapmaktan nefret eder." },
      { col1: "Sevmemek (Don't like)", col2: "don't / doesn't like + V-ing", highlightCol2: true, col3: "They don't like waiting in queues.", col4: "Kuyrukta beklemeyi sevmezler." },
    ],
    chalkNote: {
      yellowHighlight: "Like, love, enjoy, hate fiillerinden sonra gelen eylem fiili '-ing' takısı alır: 'I like readING'!",
      whiteExplanation: "'I like read' YANLIŞTIR; eylemin kendisini bir hobiye/nesneye dönüştürmek için '-ing' şarttır.",
    },
    sideTip: "Soru sorarken: 'What do you like doing in your free time?' (Boş zamanında ne yapmayı seversin?).",
  },

  // =========================================================================
  // LESSON 30: A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma
  // =========================================================================
  30: {
    title: "A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma",
    subtitle: "Zaman Bağlaçları (First, Then, After that, Finally) ile Akıcı Rutin Metni",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "BAĞLAÇ + ÖZNE + RUTİN FİİL + ZAMAN / EDAT",
      components: [
        { label: "1. Başlangıç Bağlacı", code: "First (İlk olarak)", role: "Günün ilk eylemi", color: 'yellow' },
        { label: "2. Devam Bağlaçları", code: "Then / After that (Sonra / Ardından)", role: "Birbirini izleyen adımlar", color: 'white' },
        { label: "3. Ara Bağlaç", code: "Next / Later on (Daha sonra)", role: "Zaman ilerlemesi", color: 'white' },
        { label: "4. Kapanış Bağlacı", code: "Finally (Son olarak / En sonunda)", role: "Günün son eylemi", color: 'yellow' },
      ],
      exampleEn: "First, I wake up at 7. Then, I have breakfast. After that, I go to work. Finally, I sleep at 11.",
      exampleTr: "İlk olarak 7'de uyanırım. Sonra kahvaltı yaparım. Ardından işe giderim. Son olarak 11'de uyurum.",
      breakdownNote: "Bağlaçlar cümle başında kullanıldığında ardından genellikle hafif bir virgül konur.",
    },
    chalkNote: {
      yellowHighlight: "Tekrardan kaçınmak için bağlaçları sırayla kullanın: First -> Then -> After that -> Finally!",
      whiteExplanation: "'Then' bağlacından sonra 'after' tek başına kullanılmaz; 'After that' (ondan sonra) denmelidir.",
    },
    sideTip: "3. tekil şahıs için anlatırken her fiile -s eklemeyi unutmayın: 'First, he wakes up...'",
  },

  // =========================================================================
  // LESSON 31: İşaret Sıfatları: This & That (Yakın ve Uzak Tekiller)
  // =========================================================================
  31: {
    title: "İşaret Sıfatları: THIS ve THAT (Yakın ve Uzak Tekiller)",
    subtitle: "Mesafe ve Konuma Göre Tekil Nesneleri İşaret Etme",
    layoutType: 'structure_table',
    headers: ["İşaret Zamiri", "Mesafe / Konum", "Fiil Uyumu", "Örnek Cümle"],
    rows: [
      { col1: "THIS (Bu)", col2: "Yakın (Dokunma mesafesi / Elde)", highlightCol1: true, col3: "is (tekil fiil)", col4: "This is my new laptop. / This book is great." },
      { col1: "THAT (Şu / O)", col2: "Uzak (Gözle görülen ama uzakta)", highlightCol1: true, col3: "is (tekil fiil)", col4: "That is our office building over there." },
      { col1: "Soru Sorma", col2: "What is this? / What is that?", highlightCol1: true, col3: "What is this? -> It's a key.", col4: "'Bu nedir?' / 'Şu nedir?'" },
      { col1: "Kısaltma Kuralı", col2: "That is -> That's", highlightCol1: true, col3: "That's my brother over there.", col4: "This is birleşip 'this's' OLMAZ!" },
    ],
    chalkNote: {
      yellowHighlight: "THIS yakındaki tekil nesnedir; THAT uzaktaki tekil nesnedir! İkisi de tekil 'IS' ile kullanılır.",
      whiteExplanation: "'That is' kısaltılarak 'That's' olabilir ama 'This is' asla 'This's' şeklinde kısaltılamaz.",
    },
    sideTip: "Telefonda kendini tanıtırken: 'Hello, this is David speaking.' (That is David denmez).",
  },

  // =========================================================================
  // LESSON 32: İşaret Sıfatları: These & Those (Yakın ve Uzak Çoğullar)
  // =========================================================================
  32: {
    title: "İşaret Sıfatları: THESE ve THOSE (Yakın ve Uzak Çoğullar)",
    subtitle: "Birden Fazla Nesneyi Mesafeye Göre İşaret Etme ve Çoğul Uyumu",
    layoutType: 'structure_table',
    headers: ["İşaret Zamiri", "Mesafe / Konum", "Fiil & İsim Uyumu", "Örnek Cümle"],
    rows: [
      { col1: "THESE (Bunlar)", col2: "Yakındaki Çoğul Nesneler", highlightCol1: true, col3: "are + Çoğul İsim (-s)", col4: "These are my project documents." },
      { col1: "THOSE (Şunlar / Onlar)", col2: "Uzaktaki Çoğul Nesneler", highlightCol1: true, col3: "are + Çoğul İsim (-s)", col4: "Those cars in the parking lot are electric." },
      { col1: "Telaffuz Farkı", col2: "This /ðɪs/ (kısa i) vs These /ðiːz/ (uzun i+z)", highlightCol1: true, col3: "Fonetik sesletim", col4: "These kelimesi 'diiz' şeklinde uzatılır." },
      { col1: "Soru Formu", col2: "What are these? / What are those?", highlightCol1: true, col3: "What are these? -> They're receipts.", col4: "Cevapta 'They are...' kullanılır." },
    ],
    chalkNote: {
      yellowHighlight: "THESE ve THOSE çoğuldur; arkasından gelen isim de fiil de ÇOĞUL olmak zorundadır: 'These books are...'!",
      whiteExplanation: "'These book' veya 'These is' KESİNLİKLE YANLIŞTIR; çoğul uyumu şarttır.",
    },
    sideTip: "This -> These (Yakın tekil/çoğul)  |  That -> Those (Uzak tekil/çoğul).",
  },

  // =========================================================================
  // LESSON 33: Düzenli Çoğul İsimler (-s, -es, -ies) ve Yazım Kuralları
  // =========================================================================
  33: {
    title: "Düzenli Çoğul İsimler (-s, -es, -ies, -ves) İmla Kuralları",
    subtitle: "Kelime Sonu Harflerine Göre Çoğul Eki Değişimi",
    layoutType: 'verb_transformation',
    headers: ["Kelime Bitişi", "Çoğul Eki", "Tekil -> Çoğul Örnekleri", "Örnek Cümle"],
    rows: [
      { col1: "Çoğu Standart İsim", col2: "+s", highlightCol2: true, col3: "book -> books  •  car -> cars", col4: "I bought three new books today." },
      { col1: "-s, -sh, -ch, -x, -z ile biten", col2: "+es", highlightCol2: true, col3: "bus -> buses  •  watch -> watches  •  box -> boxes", col4: "There are four boxes in the corridor." },
      { col1: "Sessiz + Y ile biten", col2: "-y düşer, +ies", highlightCol2: true, col3: "city -> cities  •  baby -> babies", col4: "London and Tokyo are massive cities." },
      { col1: "Sesli + Y ile biten", col2: "Sadece +s", highlightCol2: true, col3: "day -> days  •  boy -> boys  •  key -> keys", col4: "I need my office keys." },
      { col1: "-f veya -fe ile biten", col2: "-f düşer, +ves", highlightCol2: true, col3: "leaf -> leaves  •  knife -> knives  •  life -> lives", col4: "Autumn leaves are falling." },
    ],
    chalkNote: {
      yellowHighlight: "Sessiz + Y ile bitenlerde 'y' düşüp '-ies' olur (city->cities). Sesli + Y ile bitenlerde 'y' DÜŞMEZ (day->days)!",
      whiteExplanation: "-f / -fe ile biten temel kelimelerde (half, knife, leaf, wife, life) çoğul '-ves' olur.",
    },
    sideTip: "İstisnalar: 'roof -> roofs', 'chef -> chefs' (bunlarda -ves olmaz).",
  },

  // =========================================================================
  // LESSON 34: Düzensiz Çoğul İsimler (Men, women, children, people)
  // =========================================================================
  34: {
    title: "Düzensiz Çoğul İsimler (Irregular Plural Nouns)",
    subtitle: "-s Takısı Almadan Kökten Değişen Temel İsimler",
    layoutType: 'grammar_table',
    headers: ["Tekil Hâl (Singular)", "Düzensiz Çoğul (Plural)", "Türkçe Anlamı", "Örnek Cümle"],
    rows: [
      { col1: "man /mæn/", col2: "men /men/", highlightCol2: true, col3: "adam -> adamlar", col4: "Three men are waiting in the lobby." },
      { col1: "woman /ˈwʊmən/", col2: "women /ˈwɪmɪn/", highlightCol2: true, col3: "kadın -> kadınlar", col4: "Two women founded this startup company." },
      { col1: "child /tʃaɪld/", col2: "children /ˈtʃɪldrən/", highlightCol2: true, col3: "çocuk -> çocuklar", col4: "The children are playing in the garden." },
      { col1: "person /ˈpɜːrsn/", col2: "people /ˈpiːpl/", highlightCol2: true, col3: "kişi -> insanlar / kişiler", col4: "Fifty people attended the seminar." },
      { col1: "foot /fʊt/ • tooth /tuːθ/", col2: "feet /fiːt/ • teeth /tiːθ/", highlightCol2: true, col3: "ayak/ayaklar • diş/dişler", col4: "Brush your teeth twice a day." },
      { col1: "sheep / fish (Aynen kalan)", col2: "sheep / fish", highlightCol2: true, col3: "koyun / balık (değişmez)", col4: "There are ten sheep in the field." },
    ],
    chalkNote: {
      yellowHighlight: "Düzensiz çoğul isimlere ASLA tekrar '-s' eklenmez! 'Childrens', 'peoples', 'mens' KESİNLİKLE YANLIŞTIR!",
      whiteExplanation: "People çoğuldur ve daima 'ARE' alır: 'People ARE friendly here' (People is YANLIŞ!).",
    },
    sideTip: "Women telaffuzu: Tekil 'wuman' okunurken çoğul 'wimin' şeklinde seslendirilir.",
  },

  // =========================================================================
  // LESSON 35: İyelik Sıfatları: My, Your, His, Her, Its, Our, Their
  // =========================================================================
  35: {
    title: "İyelik Sıfatları (Possessive Adjectives)",
    subtitle: "Kime Ait Olduğunu Belirten Sıfatlar: İyelik Sıfatı + İsim Zorunluluğu",
    layoutType: 'grammar_table',
    headers: ["Özne Zamiri", "İyelik Sıfatı", "Örnek Tamlama", "Türkçe Anlamı"],
    rows: [
      { col1: "I (Ben)", col2: "MY", highlightCol2: true, col3: "my phone / my passport", col4: "benim telefonum / benim pasaportum" },
      { col1: "You (Sen / Siz)", col2: "YOUR", highlightCol2: true, col3: "your keys / your office", col4: "senin anahtarların / sizin ofisiniz" },
      { col1: "He (O - Erkek)", col2: "HIS", highlightCol2: true, col3: "his car / his brother", col4: "onun arabası (erkek)" },
      { col1: "She (O - Kadın)", col2: "HER", highlightCol2: true, col3: "her bag / her ideas", col4: "onun çantası (kadın)" },
      { col1: "It (O - Cansız/Hayvan)", col2: "ITS (kesme işaretsiz!)", highlightCol2: true, col3: "its color / its name", col4: "onun rengi (kedinin/şirketin)" },
      { col1: "We / They (Biz / Onlar)", col2: "OUR / THEIR", highlightCol2: true, col3: "our team / their house", col4: "bizim ekibimiz / onların evi" },
    ],
    chalkNote: {
      yellowHighlight: "İyelik sıfatı tek başına kullanılamaz; ardından MUTLAKA bir isim gelmelidir: 'This is my car'!",
      whiteExplanation: "Büyük Tuzak: 'ITS' (onun) ile 'IT'S' (it is) karıştırılmamalıdır! Sahiplikte kesme işareti (') ASLA konmaz.",
    },
    sideTip: "Türkçede 'arabam' denirken İngilizcede iyelik sıfatı ayrı bir kelimedir: 'my car'.",
  },

  // =========================================================================
  // LESSON 36: Sahiplik Kesme İşareti: Apostrophe 's (Tom's Car)
  // =========================================================================
  36: {
    title: "Sahiplik Kesme İşareti: Apostrophe 's (Tom's Car)",
    subtitle: "Canlı Varlıkların Sahipliğinde -'s Eki ve Çoğullarda Sadece Kesme (') Kuralı",
    layoutType: 'structure_table',
    headers: ["Sahip Türü", "Uygulanan Kural", "Örnek İfade", "Türkçe Karşılığı"],
    rows: [
      { col1: "Tekil Kişi / Canlı", col2: "İsim + 's", highlightCol2: true, col3: "Tom's car / my father's office", col4: "Tom'un arabası / babamın ofisi" },
      { col1: "Düzenli Çoğul (-s ile biten)", col2: "Sadece kesme işareti (')", highlightCol2: true, col3: "the teachers' lounge / the boys' room", col4: "öğretmenlerin odası / erkeklerin odası" },
      { col1: "Düzensiz Çoğul (-s ile bitmeyen)", col2: "İsim + 's (normal gibi)", highlightCol2: true, col3: "the children's toys / women's clothes", col4: "çocukların oyuncakları / kadın giysileri" },
      { col1: "Cansız Varlıklar", col2: "'s yerine 'OF' kullanılır", highlightCol2: true, col3: "the door of the car / the screen of the TV", col4: "arabanın kapısı / televizyonun ekranı" },
    ],
    chalkNote: {
      yellowHighlight: "Zaten çoğul olup -s ile biten kelimelere tekrar 's' eklenmez; sadece kesme (') konur: 'students' books'!",
      whiteExplanation: "Cansız nesnelerde -'s yerine 'of' tamlaması tercih edilir: 'the leg of the table' (table's leg değil).",
    },
    sideTip: "İki ortak sahiplik: 'Tom and Mary's house' (tek ev). Ayrı sahiplikler: 'Tom's and Mary's cars' (iki ayrı araba).",
  },

  // =========================================================================
  // LESSON 37: Have got / Has got ile Sahiplik Bildirimi
  // =========================================================================
  37: {
    title: "Have got / Has got ile Sahiplik Bildirimi",
    subtitle: "İngiliz İngilizcesi Klasiği: Olumlu, Olumsuz (haven't got) ve Soru (Have you got?)",
    layoutType: 'structure_table',
    headers: ["Özne Grubu", "Olumlu Biçim (+)", "Olumsuz Biçim (-)", "Soru Formu (?)"],
    rows: [
      { col1: "I / You / We / They", col2: "have got (I've got)", highlightCol2: true, col3: "haven't got", col4: "Have you got a car? -> Yes, I have." },
      { col1: "He / She / It", col2: "has got (He's got)", highlightCol2: true, col3: "hasn't got", col4: "Has she got a brother? -> Yes, she has." },
      { col1: "Örnek Cümle (+)", col2: "I've got two tickets for the concert.", highlightCol2: true, col3: "Konser için iki biletim var.", col4: "Doğrudan sahiplik bildirir." },
      { col1: "Örnek Cümle (-)", col2: "He hasn't got enough cash with him.", highlightCol2: true, col3: "Yanında yeterli nakit parası yok.", col4: "'Hasn't got' kalıbı." },
    ],
    chalkNote: {
      yellowHighlight: "He, She, It öznelerinde 'HAVE GOT' değil 'HAS GOT' (He's got) kullanılır!",
      whiteExplanation: "Soru sorarken 'Have / Has' öznenin önüne geçer: 'Have you got any questions?' -> 'Yes, I have.' / 'No, I haven't.'",
    },
    sideTip: "'I've got a headache' (başım ağrıyor) gibi sağlık durumlarında da çok yaygındır.",
  },

  // =========================================================================
  // LESSON 38: Have / Has ile Sahiplik Bildirimi (Do you have...?)
  // =========================================================================
  38: {
    title: "Have / Has ile Sahiplik Bildirimi (Do you have...?)",
    subtitle: "Amerikan ve Küresel İngilizce Standardı: Do / Does Yardımcı Fiili ile Sahiplik",
    layoutType: 'structure_table',
    headers: ["Cümle Türü", "I / You / We / They Formülü", "He / She / It Formülü", "Örnek Cümle"],
    rows: [
      { col1: "Olumlu Cümle (+)", col2: "Özne + HAVE", highlightCol2: true, col3: "Özne + HAS", col4: "I have a car. / She has a meeting." },
      { col1: "Olumsuz Cümle (-)", col2: "don't have", highlightCol2: true, col3: "doesn't have (HAS DEĞİL!)", col4: "He doesn't have time. (doesn't has YANLIŞ!)" },
      { col1: "Soru Cümlesi (?)", col2: "Do you have...?", highlightCol2: true, col3: "Does she have...? (HAS DEĞİL!)", col4: "Do you have a pen? / Does he have a car?" },
      { col1: "Kısa Cevap", col2: "Yes, I do. / No, I don't.", highlightCol2: true, col3: "Yes, she does. / No, she doesn't.", col4: "Yardımcı fiille cevap verilir." },
    ],
    chalkNote: {
      yellowHighlight: "Soru ve olumsuzda 'DOES' devreye girdiğinde 'has' yeniden yalın 'HAVE' hâline döner: 'Does she HAVE a car?'",
      whiteExplanation: "'Does she has' veya 'She doesn't has' İngilizcedeki en yaygın öğrenci hatalarındandır; ASLA KULLANMAYIN!",
    },
    sideTip: "İş dünyasında ve uluslararası mülakatlarda 'Do you have...?' kullanımı en güvenli ve evrensel formdur.",
  },

  // =========================================================================
  // LESSON 39: Aile Bireyleri ve Akrabalık İfadeleri
  // =========================================================================
  39: {
    title: "Aile Bireyleri ve Akrabalık İfadeleri (Family Members)",
    subtitle: "Çekirdek Aile, Geniş Aile ve Cinsiyet Eşleşmeleri",
    layoutType: 'grammar_table',
    headers: ["Kategori", "Erkek (Male)", "Kadın (Female)", "Ortak / Çoğul İfade"],
    rows: [
      { col1: "Ebeveynler", col2: "father (baba)", highlightCol2: true, col3: "mother (anne)", col4: "parents (anne-baba / ebeveyn)" },
      { col1: "Çocuklar", col2: "son (erkek evlat)", highlightCol2: true, col3: "daughter (kız evlat)", col4: "children (çocuklar)" },
      { col1: "Kardeşler", col2: "brother (erkek kardeş)", highlightCol2: true, col3: "sister (kız kardeş)", col4: "siblings (kardeşler)" },
      { col1: "Eşler", col2: "husband (koca / erkek eş)", highlightCol2: true, col3: "wife (karı / kadın eş)", col4: "spouse (eş)" },
      { col1: "Geniş Aile", col2: "uncle (amca/dayı) • nephew (erkek yeğen)", highlightCol2: true, col3: "aunt (hala/teyze) • niece (kız yeğen)", col4: "cousin (kuzen - ortak)" },
      { col1: "Büyük Ebeveyn", col2: "grandfather (dede)", highlightCol2: true, col3: "grandmother (büyükanne)", col4: "grandparents (büyükebeveynler)" },
    ],
    chalkNote: {
      yellowHighlight: "Yeğen kelimesinde cinsiyet ayrımı vardır: Erkek yeğen = NEPHEW (/ˈnefjuː/), Kız yeğen = NIECE (/niːs/)!",
      whiteExplanation: "Kuzen (COUSIN) kelimesi hem kız hem erkek kuzenler için ortak kullanılır.",
    },
    sideTip: "'Brother' veya 'sister' kelimelerine yaş eklemek için: 'older brother' (abi), 'younger sister' (küçük kız kardeş).",
  },

  // =========================================================================
  // LESSON 40: A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı
  // =========================================================================
  40: {
    title: "A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı",
    subtitle: "İşaret Sıfatları, İyelik Sıfatları, -'s ve Sahiplik Fiillerinin Bütünleşik Kullanımı",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "THIS/THAT IS + İYELİK SIFATI + AİLE BİREYİ + HAS/HAVE + EŞYA",
      components: [
        { label: "1. Tanıtma Girişi", code: "This is / Meet...", role: "Kişiyi takdim etme", color: 'yellow' },
        { label: "2. İyelik + Akraba", code: "my older brother / our daughter", role: "Akrabalık bağı", color: 'white' },
        { label: "3. İsim & Meslek", code: "His name is David. He is a doctor.", role: "Kimlik bilgisi", color: 'white' },
        { label: "4. Sahiplik & Eşya", code: "He has a modern car. Tom's keys...", role: "Kişisel aidiyet", color: 'yellow' },
      ],
      exampleEn: "This is my brother, David. He has a modern apartment, and that is his car.",
      exampleTr: "Bu benim erkek kardeşim David. Modern bir dairesi var ve şu onun arabası.",
      breakdownNote: "Takdim (This is) + Akrabalık (my brother) + Sahiplik (he has / his car).",
    },
    chalkNote: {
      yellowHighlight: "Bütünleşik Sunum Kuralı: Fotoğraf gösterirken veya tanıştırırken 'This is my...' ile başlayın!",
      whiteExplanation: "Kişinin cinsiyetine göre iyelik sıfatını (HIS / HER) doğru eşleştirmeye özellikle dikkat edin.",
    },
    sideTip: "Sosyal toplantılarda: 'I'd like you to meet my colleague, Sarah.'",
  },
};
