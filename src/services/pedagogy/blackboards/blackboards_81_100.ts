// LinguAAI V8.0 — Bespoke Blackboard Pedagogical Database
// Module 9 & Module 10: Lessons 81 to 100 (CEFR A2)
// 100% Bespoke, topic-authentic chalkboard datasets.

import { TeacherBlackboardData } from '../../../types/lesson';

export const BLACKBOARDS_81_TO_100: Record<number, TeacherBlackboardData> = {
  // =========================================================================
  // LESSON 81: Geçmiş Zamanın Temel Mantığı ve Did Yardımcı Fiili
  // =========================================================================
  81: {
    title: "Geçmiş Zamanın Temel Mantığı (Past Simple) ve DID Yardımcı Fiili",
    subtitle: "Geçmişte Başlayıp Tamamlanmış Eylemler ve DID'in Rolü",
    layoutType: 'structure_table',
    headers: ["Cümle Türü", "Fiil Hâli & Yardımcı", "Örnek Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "Olumlu Düz Cümle (+)", col2: "Fiilin 2. Hâli (V2 -ed / Düzensiz)", highlightCol2: true, col3: "I visited my grandparents yesterday.", col4: "Dün büyükanne ve büyükbabamı ziyaret ettim." },
      { col1: "Olumsuz Cümle (-)", col2: "DIDN'T + Yalın Fiil (V1)", highlightCol2: true, col3: "I didn't visit them yesterday.", col4: "Dün onları ziyaret etmedim (visited DÜŞER!)." },
      { col1: "Soru Cümlesi (?)", col2: "DID + Özne + Yalın Fiil (V1)?", highlightCol2: true, col3: "Did you visit them yesterday?", col4: "Dün onları ziyaret ettin mi?" },
      { col1: "Zaman Çizelgesi", col2: "Geçmişte kesin bir zamanda bitti", highlightCol2: true, col3: "yesterday, last year, in 2020", col4: "Şu anla hiçbir bağlantısı kalmamıştır." },
    ],
    chalkNote: {
      yellowHighlight: "Altın Kural: Fiilin 2. hâli (V2) YALNIZCA olumlu düz cümlelerde kullanılır! Soruda (Did) ve olumsuzda (didn't) fiil daima V1 olur!",
      whiteExplanation: "'Did you went?' veya 'I didn't visited' İngilizcedeki en affedilmez hatalardandır; 'Did' zaten geçmiş zamanı taşır.",
    },
    sideTip: "Tüm öznelerde (I, you, he, she, it, we, they) aynı yardımcı fiil (DID) geçerlidir.",
  },

  // =========================================================================
  // LESSON 82: Düzenli Fiiller: -ed Takısı ve İmla Kuralları
  // =========================================================================
  82: {
    title: "Düzenli Fiiller: Geçmiş Zaman (-ed) İmla Kuralları",
    subtitle: "Fiil Son Harflerine Göre -ed / -d / -ied ve Sessiz İkizleşmesi Kuralları",
    layoutType: 'verb_transformation',
    headers: ["Fiil Kökü Bitişi", "Eklenen Takı", "Örnek Fiil Dönüşümü", "İmla Kuralı Açıklaması"],
    rows: [
      { col1: "Genel Çoğu Fiil", col2: "+ed", highlightCol2: true, col3: "walk -> walked  •  talk -> talked", col4: "Standart düzenli fiil kuralı" },
      { col1: "-e ile biten fiiller", col2: "Sadece +d", highlightCol2: true, col3: "live -> lived  •  like -> liked", col4: "Zaten -e harfi var; tekrar 'e' yazılmaz" },
      { col1: "Sessiz + Y ile biten", col2: "-y düşer, +ied", highlightCol2: true, col3: "study -> studied  •  try -> tried", col4: "'y' harfi düşer, 'ied' gelir" },
      { col1: "Sesli + Y ile biten", col2: "Sadece +ed ('y' DÜŞMEZ)", highlightCol2: true, col3: "play -> played  •  stay -> stayed", col4: "Sesli + y kuralı: 'y' korunur" },
      { col1: "Kısa Sesli + Tek Sessiz (CVC)", col2: "Son sessiz ÇİFTLEŞİR", highlightCol2: true, col3: "stop -> stopped  •  plan -> planned", col4: "Tek heceli fiilde son harf ikizleşir" },
    ],
    chalkNote: {
      yellowHighlight: "'-ed' takısı YALNIZCA düzenli fiillere (regular verbs) eklenir. Düzensiz fiiller (go, see, buy) bu kurala uymaz!",
      whiteExplanation: "İki 'e' yan yana gelmez: 'lived' yazılır, 'liveed' yazılmaz.",
    },
    sideTip: "Düzenli fiiller geçmiş zamanın omurgasıdır; fiillerin çoğunluğu düzenlidir.",
  },

  // =========================================================================
  // LESSON 83: -ed Takısının 3 Farklı Fonetik Telaffuzu (/t/, /d/, /ɪd/)
  // =========================================================================
  83: {
    title: "-ed Takısının 3 Farklı Fonetik Telaffuzu (/t/, /d/, /ɪd/)",
    subtitle: "Fiil Sonundaki Sesin Titreşimine (Voiced/Voiceless) Göre Telaffuz Formülleri",
    layoutType: 'rule_bulletin',
    headers: ["Fonetik Ses", "Kural & Bitiş Sesleri", "Örnek Fiiller", "Doğru Telaffuz Kılavuzu"],
    rows: [
      { col1: "/t/ Sesi (Sert Nefesli)", col2: "Titreşimsiz sessizlerle bitenler (/p, k, f, s, ʃ, tʃ/)", highlightCol1: true, col3: "worked /wɜːkt/, watched /wɒtʃt/, laughed /lɑːft/", col4: "Boğazda titreşim olmaz; sert /t/ sesi çıkar" },
      { col1: "/d/ Sesi (Yumuşak Titreşimli)", col2: "Titreşimli seslerle ve tüm ünlülerle bitenler", highlightCol1: true, col3: "played /pleɪd/, lived /lɪvd/, cleaned /kliːnd/", col4: "Boğaz titreşir; yumuşak /d/ duyulur" },
      { col1: "/ɪd/ Sesi (Ayrı Ekstra Hece!)", col2: "YALNIZCA /t/ veya /d/ harf sesleriyle bitenler", highlightCol1: true, col3: "started /ˈstɑːtɪd/, needed /ˈniːdɪd/, decided", col4: "Yalnızca bu grupta ekstra bir 'id' hecesi okunur!" },
      { col1: "Kritik Telaffuz Hatası", col2: "*work-ed ('vörkid' YANLIŞ!)", highlightCol2: true, col3: "Doğrusu: /wɜːkt/ (vörkt)", col4: "'worked' kelimesinde 'ed' ayrı hece olarak okunmaz!" },
    ],
    chalkNote: {
      yellowHighlight: "En Kritik Telaffuz Kuralı: SADECE fiil 't' veya 'd' sesiyle bitiyorsa ekstra 'İD' hecesi okunur (started, needed)! Diğerlerinde 'ed' ayrı hece OLMAZ!",
      whiteExplanation: "'Watched' kelimesi 'vaçid' değil 'vaçt' olarak sesletilir.",
    },
    sideTip: "Boğazınıza elinizi koyun: Titreşim varsa /d/, titreşim yoksa /t/, t/d ile bitiyorsa /ɪd/.",
  },

  // =========================================================================
  // LESSON 84: En Sık Kullanılan 50 Düzensiz Fiil (Go, Buy, See, Have, Do)
  // =========================================================================
  84: {
    title: "En Sık Kullanılan Temel Düzensiz Fiiller (Irregular Verbs)",
    subtitle: "Geçmiş Zamanda -ed Almayıp Kökten Değişen Temel Eylem Fiilleri",
    layoutType: 'verb_transformation',
    headers: ["V1 (Yalın Hâl)", "V2 (Geçmiş Zaman Hâli)", "Türkçe Anlamı", "Örnek Cümle"],
    rows: [
      { col1: "go / see", col2: "WENT / SAW", highlightCol2: true, col3: "gitmek / görmek", col4: "I went to Paris and saw the Eiffel Tower." },
      { col1: "buy / have", col2: "BOUGHT / HAD", highlightCol2: true, col3: "satın almak / sahip olmak", col4: "She bought a new car and had a party." },
      { col1: "do / make", col2: "DID / MADE", highlightCol2: true, col3: "yapmak / üretmek", col4: "We did our homework and made a cake." },
      { col1: "come / take", col2: "CAME / TOOK", highlightCol2: true, col3: "gelmek / almak (götürmek)", col4: "He came home late and took a taxi." },
      { col1: "write / read", col2: "WROTE / READ (okunuşu: /red/)", highlightCol2: true, col3: "yazmak / okumak", col4: "I wrote three emails and read the report." },
    ],
    chalkNote: {
      yellowHighlight: "Düzensiz fiiller kuralsızdır; -ed takısı almazlar! Doğrudan hafızaya kazınmalıdırlar.",
      whiteExplanation: "READ fiilinin 2. hali aynı yazılır ama kırmızı anlamına gelen 'RED' (/red/) şeklinde telaffuz edilir!",
    },
    sideTip: "V2 hali yalnızca geçmiş zaman olumlu düz cümlelerde kullanılır.",
  },

  // =========================================================================
  // LESSON 85: Geçmiş Zaman: Olumsuz Cümleler (Didn't + Yalın Fiil)
  // =========================================================================
  85: {
    title: "Geçmiş Zaman: Olumsuz Cümleler (DIDN'T + Yalın Fiil)",
    subtitle: "Yardımcı Fiil ile Olumsuzluk: Didn't Geldiğinde Fiil Daima V1'e Döner!",
    layoutType: 'grammar_table',
    headers: ["Özne Grubu", "Olumsuz Yardımcı", "Fiil Hâli (V1 YALIN!)", "Örnek Cümle"],
    rows: [
      { col1: "I / You / We / They", col2: "didn't (did not)", highlightCol2: true, col3: "go (went DEĞİL!)", col4: "I didn't go to work yesterday." },
      { col1: "He / She / It", col2: "didn't (did not)", highlightCol2: true, col3: "see (saw DEĞİL!)", col4: "She didn't see the incoming email." },
      { col1: "Düzenli Fiil Olumsuzu", col2: "didn't + V1", highlightCol2: true, col3: "call (called DEĞİL!)", col4: "He didn't call me last night." },
      { col1: "Büyük Hata Uyarısı", col2: "*didn't went / *didn't bought", highlightCol2: true, col3: "KESİNLİKLE YANLIŞ!", col4: "Doğrusu: didn't go / didn't buy" },
    ],
    chalkNote: {
      yellowHighlight: "DIDN'T olan bir cümlede ana fiil ASLA 2. hâlde olamaz! 'didn't went' BÜYÜK YANLIŞTIR, 'didn't go' DOĞRUDUR!",
      whiteExplanation: "'Didn't' kelimesi geçmiş zaman yükünü zaten üstüne almıştır; ana fiil en yalın (V1) haline döner.",
    },
    sideTip: "Resmi metinlerde: 'The client did not accept the initial proposal.'",
  },

  // =========================================================================
  // LESSON 86: Geçmiş Zaman: Soru Cümleleri (Did you...?) ve Kısa Cevaplar
  // =========================================================================
  86: {
    title: "Geçmiş Zaman: Soru Cümleleri (DID YOU...?) ve Kısa Cevaplar",
    subtitle: "Geçmişi Sorgulama: DID + Özne + Yalın Fiil (V1)? Formülü",
    layoutType: 'grammar_table',
    headers: ["Soru Kalıbı", "Yardımcı + Özne + V1", "Olumlu Kısa Yanıt", "Olumsuz Kısa Yanıt"],
    rows: [
      { col1: "Did you...?", col2: "Did you watch the match last night?", highlightCol1: true, col3: "Yes, I did.", col4: "No, I didn't." },
      { col1: "Did he / she...?", col2: "Did she sign the contract?", highlightCol1: true, col3: "Yes, she did.", col4: "No, she didn't." },
      { col1: "Did they...?", col2: "Did they arrive on time?", highlightCol1: true, col3: "Yes, they did.", col4: "No, they didn't." },
      { col1: "WH- + Did", col2: "What did you do yesterday?", highlightCol1: true, col3: "I stayed at home and rested.", col4: "WH- başa gelir, ardından Did gelir." },
    ],
    chalkNote: {
      yellowHighlight: "Soruda DID cümlenin en başına gelir ve ana fiil YALIN (V1) kalır: 'Did you see him?' (Did you saw YANLIŞ!).",
      whiteExplanation: "Kısa cevaplarda 'Yes, I did' veya 'No, I didn't' denir; ana fiil yinelenmez.",
    },
    sideTip: "İş hayatında takip sorusu: 'Did you receive my attachment?' (Ek dosyamı aldınız mı?).",
  },

  // =========================================================================
  // LESSON 87: Geçmiş Zaman Zaman Belirteçleri (Yesterday, Last week, 2 days ago)
  // =========================================================================
  87: {
    title: "Geçmiş Zaman Belirteçleri (Time Signals: Yesterday, Last, Ago)",
    subtitle: "Cümlenin Past Simple Olduğunu Kanıtlayan 3 Anahtar Zaman Ailesi",
    layoutType: 'structure_table',
    headers: ["Zaman Ailesi", "Kullanım Kuralı & Örnekler", "Örnek Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "YESTERDAY (Dün)", col2: "yesterday morning / afternoon / evening", highlightCol1: true, col3: "I met the new client yesterday afternoon.", col4: "Dün öğleden sonra yeni müşteriyle tanıştım." },
      { col1: "LAST... (Geçen...)", col2: "last night / last week / last month / last year", highlightCol1: true, col3: "We launched the new website last month.", col4: "Geçen ay yeni web sitemizi yayına aldık." },
      { col1: "...AGO (...Önce)", col2: "Süre + ago (two days ago / three months ago)", highlightCol1: true, col3: "The train left ten minutes ago.", col4: "Tren on dakika önce hareket etti." },
      { col1: "Geçmiş Yıllar & Tarihler", col2: "IN + Geçmiş Yıl (in 2020, in 1995)", highlightCol1: true, col3: "They moved to London in 2021.", col4: "2021 yılında Londra'ya taşındılar." },
    ],
    chalkNote: {
      yellowHighlight: "AGO kelimesi sürenin SONUNA gelir: 'two weeks AGO' (önce iki hafta değil, iki hafta önce)!",
      whiteExplanation: "'Last' kelimesinin önüne edat (in/on/at) gelmez: 'last Sunday' (on last Sunday YANLIŞ!). 'Dün gece' için 'last night' denir ('yesterday night' denmez).",
    },
    sideTip: "Geçmiş zaman belirteçleri genellikle cümlenin en sonuna yerleştirilir.",
  },

  // =========================================================================
  // LESSON 88: To Be Fiilinin Geçmiş Hali: Was & Were Kullanımı
  // =========================================================================
  88: {
    title: "To Be Fiilinin Geçmiş Zaman Hali: WAS ve WERE Çekim Tahtası",
    subtitle: "Geçmişte Durum, Konum, Yaş ve Meslek Bildirimi (Am/Is -> WAS, Are -> WERE)",
    layoutType: 'grammar_table',
    headers: ["Özne Grubu", "Geçmiş Durum Fiili", "Örnek Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "I / He / She / It (Tekiller)", col2: "WAS (am/is geçmişi)", highlightCol2: true, col3: "I was very tired yesterday evening.", col4: "Dün akşam çok yorgundum." },
      { col1: "You / We / They (Çoğullar)", col2: "WERE (are geçmişi)", highlightCol2: true, col3: "They were in Rome last summer.", col4: "Geçen yaz Roma'daydılar." },
      { col1: "Hava & Zaman", col2: "It was + Sıfat/Hava", highlightCol2: true, col3: "It was rainy and cold yesterday.", col4: "Dün hava yağmurlu ve soğuktu." },
      { col1: "Mekan & Konum", col2: "was / were at home / in office", highlightCol2: true, col3: "She was at the conference all day.", col4: "Bütün gün konferanstaydı." },
    ],
    chalkNote: {
      yellowHighlight: "I, He, She, It ile WAS; You, We, They ile WERE kullanılır!",
      whiteExplanation: "WAS ve WERE durum fiilidir; arkasından normal eylem fiili (did gibi) yalın halde gelmez. 'I was go' BÜYÜK YANLIŞTIR!",
    },
    sideTip: "'Where were you?' telaffuzu: /weər wɜːr juː/ ('Where' açık e, 'were' kapalı nötr sestir).",
  },

  // =========================================================================
  // LESSON 89: Was & Were: Olumsuz ve Soru Cümleleri
  // =========================================================================
  89: {
    title: "Was & Were: Olumsuz (wasn't / weren't) ve Soru Cümleleri",
    subtitle: "Devrik Soru Yapısı ve Geçmiş Durumu Sorgulama Kılavuzu",
    layoutType: 'grammar_table',
    headers: ["Cümle Türü", "Yapı & Formül", "Örnek Cümle", "Kısa Yanıt"],
    rows: [
      { col1: "Tekil Olumsuz (-)", col2: "was not (wasn't)", highlightCol2: true, col3: "He wasn't at the meeting this morning.", col4: "O bu sabah toplantıda değildi." },
      { col1: "Çoğul Olumsuz (-)", col2: "were not (weren't)", highlightCol2: true, col3: "We weren't satisfied with the results.", col4: "Sonuçlardan memnun değildik." },
      { col1: "Tekil Soru (?)", col2: "Was + he/she/it...?", highlightCol1: true, col3: "Was the exam difficult?", col4: "Yes, it was. / No, it wasn't." },
      { col1: "Çoğul Soru (?)", col2: "Were + you/they...?", highlightCol1: true, col3: "Were you ready for the presentation?", col4: "Yes, I was. (Yes, I's YASAK!)" },
    ],
    chalkNote: {
      yellowHighlight: "Was/Were sorularında DID KULLANILMAZ! 'Did you were?' KESİNLİKLE YANLIŞTIR; doğrudan 'Were you...?' denir!",
      whiteExplanation: "Kısa cevapta kısaltma yapılmaz: 'Yes, I was' (Yes, I's YANLIŞTIR).",
    },
    sideTip: "'Where were you yesterday?' (Dün neredeydin?) en sık kullanılan soru kalıbıdır.",
  },

  // =========================================================================
  // LESSON 90: A2 Modül 1 Entegrasyonu: Unutulmaz Bir Tatil Gününü Anlatma
  // =========================================================================
  90: {
    title: "A2 Modül 1 Entegrasyonu: Unutulmaz Bir Tatil Gününü Anlatma",
    subtitle: "Past Simple (Eylemler) ve Was/Were (Durumlar/Hava) Entegrasyonu",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "GEÇMİŞ ZAMAN ZARFI + WAS/WERE (Durum) + V2 EYLEMLER + DUYGU",
      components: [
        { label: "1. Mekan & Durum", code: "Last summer, I was in Barcelona. The weather was hot.", role: "Atmosfer ve durum tasviri (Was/Were)", color: 'yellow' },
        { label: "2. Gerçekleşen Eylemler", code: "We visited museums and ate delicious paella.", role: "Ardışık tamamlanan eylemler (V2)", color: 'white' },
        { label: "3. Karşılaşılan Olay", code: "I bought traditional souvenirs at the local market.", role: "Önemli anlar", color: 'yellow' },
        { label: "4. Kapanış Yorumu", code: "It was an unforgettable vacation for all of us.", role: "Genel değerlendirme", color: 'white' },
      ],
      exampleEn: "Last July, we went to Italy. The hotel was wonderful, and we visited ancient ruins.",
      exampleTr: "Geçen temmuz İtalya'ya gittik. Otel harikaydı ve antik kalıntıları ziyaret ettik.",
      breakdownNote: "Gidiş eylemi (went - V2) + Durum (was wonderful) + Gezi (visited - V2).",
    },
    chalkNote: {
      yellowHighlight: "Tatil anlatırken durumu anlatırken WAS/WERE (the hotel was great), eylemleri anlatırken V2 (we went, we saw) kullanın!",
      whiteExplanation: "Zaman akışını bağlamak için 'First, Then, After that, In the evening' bağlaçlarını kullanın.",
    },
    sideTip: "Tatil değerlendirmesi: 'We had a fantastic time together.'",
  },

  // =========================================================================
  // LESSON 91: Sürekli Geçmiş Zaman (Past Continuous): Was/Were + V-ing
  // =========================================================================
  91: {
    title: "Sürekli Geçmiş Zaman (Past Continuous): WAS/WERE + V-ing",
    subtitle: "Geçmişte Belirli Bir Anda Devam Etmekte Olan Süreçler",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "ÖZNE + WAS / WERE + FİİL-ING + GEÇMİŞ ZAMAN NOKTASI",
      components: [
        { label: "1. Özne", code: "I, He, She, It / You, We, They", role: "Eylemi yapan kişi", color: 'white' },
        { label: "2. Geçmiş Yardımcı", code: "was / were", role: "Geçmiş zaman köprüsü", color: 'yellow' },
        { label: "3. Süreç Fiili", code: "driving / sleeping / working", role: "Süregelen eylem (-ing)", color: 'yellow' },
        { label: "4. Belirli Geçmiş Anı", code: "at 8:00 PM yesterday / all night", role: "Zaman kesiti", color: 'white' },
      ],
      exampleEn: "At 9:00 PM yesterday, I was studying for the IELTS exam.",
      exampleTr: "Dün akşam saat 9:00'da IELTS sınavına çalışıyordum.",
      breakdownNote: "O saatte eylem başlamıştı ve henüz bitmemişti; tam o dakikada devam ediyordu.",
    },
    chalkNote: {
      yellowHighlight: "Past Continuous geçmişte bir 'noktayı' değil, o anda devam etmekte olan 'süreci' anlatır: 'I WAS READ-ING'!",
      whiteExplanation: "'I was work' YANLIŞTIR ('-ing' eksik); 'I working' YANLIŞTIR ('was' eksik); ikisi birlikte şarttır.",
    },
    sideTip: "Past Simple (dün yaptım bitti) vs Past Continuous (dün o saatte yapmaktaydım).",
  },

  // =========================================================================
  // LESSON 92: Past Continuous: Olumsuz ve Soru Formları
  // =========================================================================
  92: {
    title: "Past Continuous: Olumsuz (wasn't/weren't) ve Soru Formları",
    subtitle: "Geçmişte O Anda Yapılmayan Eylemler ve Geçmişteki Süreci Sorgulama",
    layoutType: 'grammar_table',
    headers: ["Cümle Türü", "Kalıp Formülü", "Örnek Cümle", "Kısa Yanıt"],
    rows: [
      { col1: "Tekil Olumsuz (-)", col2: "wasn't + V-ing", highlightCol2: true, col3: "I wasn't sleeping when you called.", col4: "Aradığında uyumuyordum." },
      { col1: "Çoğul Olumsuz (-)", col2: "weren't + V-ing", highlightCol2: true, col3: "They weren't paying attention.", col4: "Dikkatlerini vermiyorlardı." },
      { col1: "Soru Formu (?)", col2: "Were you + V-ing...?", highlightCol1: true, col3: "Were you driving when it started to snow?", col4: "Yes, I was. / No, I wasn't." },
      { col1: "WH- + Past Cont.", col2: "What were you doing at 10 PM?", highlightCol1: true, col3: "What were you doing at 10:00 PM yesterday?", col4: "I was watching a film." },
    ],
    chalkNote: {
      yellowHighlight: "Soru sorarken WAS / WERE öznenin önüne geçer: 'What WERE you doing?'",
      whiteExplanation: "Olumsuzda fiildeki '-ing' takısı DÜŞMEZ: 'He wasn't listenING.'",
    },
    sideTip: "Alibi (mazeret) sorusu: 'Where were you staying at that time?'",
  },

  // =========================================================================
  // LESSON 93: Geçmiş Zaman vs Past Continuous Karşılaştırması
  // =========================================================================
  93: {
    title: "Geçmiş Zaman (Simple) vs Past Continuous Karşılaştırması",
    subtitle: "Tamamlanmış Kısa Eylem (Nokta) vs Süreç Bildiren Arka Plan Eylemi (Çizgi)",
    layoutType: 'comparison_table',
    headers: ["Kriter", "Past Simple (Geçmiş Zaman)", "Past Continuous (Sürekli Geçmiş)"],
    rows: [
      { col1: "Görsel Model", col2: "Zaman çizgisinde bir NOKTA (X)", col3: "Zaman çizgisinde bir ÇİZGİ (=====>)" },
      { col1: "Eylemin Niteliği", col2: "Başladı ve tamamen bitti", col3: "Geçmişte belirli bir anda sürüyordu" },
      { col1: "Örnek Cümle", col2: "I read a book yesterday. (Kitabı okudum)", col3: "I was reading at 8 PM. (Okumaktaydım)" },
      { col1: "Hikaye Anlatımı", col2: "Ana olay zinciri (ardışık eylemler)", col3: "Arka plan sahnesi, atmosfer, hava durumu" },
      { col1: "Bağlaç Ortaklığı", col2: "Genellikle WHEN ardından gelir (anlık olay)", col3: "Genellikle WHILE ardından gelir (uzun süreç)" },
    ],
    chalkNote: {
      yellowHighlight: "Past Simple olayı BİTİRİR (I cooked dinner - Yemeği pişirdim); Past Continuous sürecin ORTASINI gösterir (I was cooking - Pişirmekteydim)!",
      whiteExplanation: "Hikaye anlatırken zemin Past Continuous ile kurulur, ana darbe olayları Past Simple ile verilir.",
    },
    sideTip: "'The sun was shining (Continuous) and birds sang (Simple)' edebi bir sahne açılışıdır.",
  },

  // =========================================================================
  // LESSON 94: Zaman Bağlacı: When ile Anlık Olayın Bölünmesi
  // =========================================================================
  94: {
    title: "Zaman Bağlacı: WHEN ile Süregelen Olayın Kesintiye Uğraması",
    subtitle: "Uzun Süreç (Past Continuous) + WHEN + Anlık Kesici Eylem (Past Simple)",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "UZUN SÜREÇ (Was/Were + V-ing) + WHEN + KESİCİ OLAY (Past Simple V2)",
      components: [
        { label: "1. Süregelen Arka Plan", code: "I was having dinner", role: "Uzun süreç (Past Continuous)", color: 'white' },
        { label: "2. Zaman Bağlacı", code: "WHEN (O anda / -dığında)", role: "Kesinti anı bağlacı", color: 'yellow' },
        { label: "3. Anlık Kesici Eylem", code: "the phone rang", role: "Süreci bölen anlık olay (Past Simple V2)", color: 'yellow' },
        { label: "4. Türkçe Anlam", code: "Telefon çaldığında akşam yemeği yiyordum.", role: "Bütünleşik anlam", color: 'white' },
      ],
      exampleEn: "We were driving along the highway when suddenly a deer jumped onto the road.",
      exampleTr: "Otoyolda arabayla gidiyorduk ki aniden yola bir geyik fırladı.",
      breakdownNote: "Gidiş süreci (were driving) + Bağlaç (when) + Anlık kesinti (a deer jumped).",
    },
    chalkNote: {
      yellowHighlight: "Altın Kural: WHEN bağlacından hemen sonra gelen eylem DAİMA Past Simple (V2) olur: 'WHEN the phone rang'!",
      whiteExplanation: "Cümle 'When' ile de başlayabilir: 'When the phone rang, I was having dinner.' (Araya virgül konur).",
    },
    sideTip: "'When' kelimesinden hemen sonra '-ing' gelmez; daima anlık eylem (V2) gelir.",
  },

  // =========================================================================
  // LESSON 95: Zaman Bağlacı: While ile Eşzamanlı Süregelen Olaylar
  // =========================================================================
  95: {
    title: "Zaman Bağlacı: WHILE ile Süreç Bildirimi (-iken)",
    subtitle: "WHILE + Uzun Süreç (Past Continuous) ve Eşzamanlı Eylemler",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "WHILE + UZUN SÜREÇ (Was/Were + V-ing) + DİĞER EYLEM",
      components: [
        { label: "1. Süreç Bağlacı", code: "WHILE (İken / Süresince)", role: "Zaman dilimi bildiren bağlaç", color: 'yellow' },
        { label: "2. Arka Plan Süreci", code: "she was studying in her room", role: "Uzun süreç (Past Continuous)", color: 'yellow' },
        { label: "3. İkinci Eylem", code: "her brother was playing the guitar", role: "Eşzamanlı ikinci süreç", color: 'white' },
        { label: "4. Türkçe Çeviri", code: "O odasında ders çalışıyorken erkek kardeşi gitar çalıyordu.", role: "Eşzamanlılık", color: 'white' },
      ],
      exampleEn: "While I was walking in the park, I found an expensive wristwatch on the bench.",
      exampleTr: "Parkta yürüyorken bankın üzerinde pahalı bir kol saati buldum.",
      breakdownNote: "While ardından süreç (was walking) gelir; ikinci cümle anlık olay (found) da olabilir.",
    },
    chalkNote: {
      yellowHighlight: "Altın Kural: WHILE bağlacının hemen ardından DAİMA Past Continuous (was/were + V-ing) gelir!",
      whiteExplanation: "When ardından Past Simple (anlık olay); While ardından Past Continuous (uzun süreç) gelir.",
    },
    sideTip: "'As' kelimesi de 'While' gibi kullanılabilir: 'As I was driving home...' (Eve sürüyorken).",
  },

  // =========================================================================
  // LESSON 96: Bir Hikaye Başlatma ve Arka Plan Tasviri Kurma
  // =========================================================================
  96: {
    title: "Bir Hikaye Başlatma ve Arka Plan Tasviri Kurma",
    subtitle: "Atmosfer Yaratma: Hava Durumu, Mekan, Arka Plan Hareketliliği ve Anlık Kırılma",
    layoutType: 'structure_table',
    headers: ["Hikaye Katmanı", "Kullanılan Zaman & Yapı", "Model Cümle", "Pedagojik Rolü"],
    rows: [
      { col1: "1. Zaman & Atmosfer", col2: "It was + Sıfat (Past Simple)", highlightCol2: true, col3: "It was a dark, stormy October night.", col4: "Dinleyicide merak ve ortam hissi yaratır." },
      { col1: "2. Arka Plan Hareketi", col2: "Past Continuous (was/were V-ing)", highlightCol2: true, col3: "The wind was howling and rain was pouring down.", col4: "Olay gerçekleşmeden önceki sahne tablosu." },
      { col1: "3. Baş Karakter Durumu", col2: "Past Continuous", highlightCol2: true, col3: "David was sitting by the fireplace, reading old letters.", col4: "Karakterin o anki meşguliyeti." },
      { col1: "4. Kırılma Anı (Darbe)", col2: "Suddenly + Past Simple (V2)", highlightCol2: true, col3: "Suddenly, someone knocked loudly on the wooden door.", col4: "Hikayeyi başlatan ani beklenmedik olay." },
    ],
    chalkNote: {
      yellowHighlight: "Hikaye Anlatımı Formülü: Zemin Past Continuous ile çizilir (wind was howling); macera SUDDENLY + Past Simple ile patlar (someone knocked)!",
      whiteExplanation: "Bütün hikayeyi tek bir zamanda anlatmak anlatımı monotonlaştırır; iki zamanı katman katman örün.",
    },
    sideTip: "Hikaye bağlaçları: 'Suddenly' (aniden), 'All of a sudden' (birdenbire), 'Without warning' (uyarısızca).",
  },

  // =========================================================================
  // LESSON 97: Kaza, Acil Durum ve Beklenmedik Olayları Anlatma
  // =========================================================================
  97: {
    title: "Kaza, Acil Durum ve Beklenmedik Olayları Anlatma",
    subtitle: "Acil Servis, Sigorta veya Polise Olay Akışını Eksiksiz Bildirme",
    layoutType: 'structure_table',
    headers: ["Aşama", "İngilizce İfade Kalıbı", "Örnek Olay Cümlesi", "Türkçe Anlamı"],
    rows: [
      { col1: "Kaza Öncesi Süreç", col2: "I was driving / walking when...", highlightCol2: true, col3: "I was driving within the speed limit when...", col4: "Hız sınırında sürüyorken..." },
      { col1: "Beklenmedik An", col2: "A car suddenly pulled out / braked", highlightCol2: true, col3: "A white van suddenly pulled out of the side street.", col4: "Beyaz bir minibüs aniden ara sokaktan çıktı." },
      { col1: "Çarpışma & Hasar", col2: "I crashed into / damaged the bumper", highlightCol2: true, col3: "I couldn't stop in time and hit the rear bumper.", col4: "Zamanında duramadım ve arka tampona çarptım." },
      { col1: "Yaralanma Durumu", col2: "Nobody was injured / hurt", highlightCol2: true, col3: "Fortunately, nobody was injured in the accident.", col4: "Neyse ki kazada kimse yaralanmadı." },
    ],
    chalkNote: {
      yellowHighlight: "Kaza tutanağında netlik esastır: 'I was driving at 40 km/h when the vehicle in front braked suddenly.'",
      whiteExplanation: "Geçmişte yapamadığınız şeyler için 'couldn't' kullanılır: 'I couldn't avoid the collision.'",
    },
    sideTip: "Acil servis arandığında: 'There has been a traffic accident at the junction of 5th Avenue.'",
  },

  // =========================================================================
  // LESSON 98: Geçmişte Eşzamanlı İki Eylem (Parallel Past Actions)
  // =========================================================================
  98: {
    title: "Geçmişte Eşzamanlı İki Eylem (Parallel Past Actions)",
    subtitle: "WHILE ile Birbirini Kesmeyen İki Uzun Sürecin Birlikte Yürümesi",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "WHILE + SÜREÇ 1 (Was/Were V-ing) + SÜREÇ 2 (Was/Were V-ing)",
      components: [
        { label: "1. Birinci Süreç", code: "While Sarah was preparing the financial report", role: "Süregelen 1. eylem", color: 'yellow' },
        { label: "2. Eşzamanlılık Bağlacı", code: "while / whereas", role: "Paralel zaman köprüsü", color: 'white' },
        { label: "3. İkinci Süreç", code: "David was analyzing client feedback", role: "Süregelen 2. eylem (Bölünme yok)", color: 'yellow' },
        { label: "4. Bütünleşik Anlam", code: "Sarah raporu hazırlıyorken David geri bildirimleri analiz ediyordu.", role: "İki eylem aynı anda sürdü", color: 'white' },
      ],
      exampleEn: "While my mother was cooking in the kitchen, my father was reading the newspaper in the living room.",
      exampleTr: "Annem mutfakta yemek pişiriyorken babam oturma odasında gazete okuyordu.",
      breakdownNote: "İki eylem de uzun sürelidir ve birbirini kesintiye uğratmaz; her ikisi de Past Continuous kalır.",
    },
    chalkNote: {
      yellowHighlight: "Eğer iki geçmiş eylem aynı anda paralel olarak devam ediyorsa ve birbirini kesmiyorsa İKİSİ DE Past Continuous olur!",
      whiteExplanation: "Bir eylem diğerini bölerse 'kesen' eylem Past Simple olur (Lesson 94); bölmezse ikisi de Continuous kalır.",
    },
    sideTip: "Ev yaşamı ve ekip çalışmasını anlatırken bu yapı anlatıma zenginlik ve profesyonellik katar.",
  },

  // =========================================================================
  // LESSON 99: Zaman Çizelgesi ve Kronolojik Olay Akışı
  // =========================================================================
  99: {
    title: "Kronolojik Olay Akışı ve Zaman Çizelgesi Bağlaçları",
    subtitle: "Olayları Mantıklı Bir Zaman Sırasına Dizme: First, Meanwhile, Eventually",
    layoutType: 'structure_table',
    headers: ["Aşama", "Zaman Bağlacı", "Örnek Cümle", "Metindeki İşlevi"],
    rows: [
      { col1: "1. Başlangıç", col2: "At first / Initially / In the beginning", highlightCol2: true, col3: "At first, the system seemed completely normal.", col4: "Olayların başlangıç noktasını kurar." },
      { col1: "2. Ani Gelişme", col2: "Suddenly / All of a sudden", highlightCol2: true, col3: "Suddenly, all the office lights went out.", col4: "Beklenmedik bir değişimi bildirir." },
      { col1: "3. Eşzamanlı Gelişme", col2: "Meanwhile / In the meantime", highlightCol2: true, col3: "Meanwhile, the IT team was investigating the server.", col4: "Başka bir yerde aynı anda olanları aktarır." },
      { col1: "4. Bir Süre Sonra", col2: "After a while / Later on", highlightCol2: true, col3: "After a while, the emergency generator started.", col4: "Zamanın ilerlediğini gösterir." },
      { col1: "5. Sonuç & Çözüm", col2: "Eventually / In the end / Finally", highlightCol2: true, col3: "Eventually, they resolved the technical issue.", col4: "Hikayenin nihai sonunu bağlar." },
    ],
    chalkNote: {
      yellowHighlight: "'MEANWHILE' kelimesi 'bu esnada / bu sırada' demektir ve başka bir odada/yerde süren paralel olayı bağlar!",
      whiteExplanation: "'EVENTUALLY' zaman alan zorlu bir sürecin 'en nihayetinde / sonunda' başarıyla çözüldüğünü vurgular.",
    },
    sideTip: "Cümle başında kullanılan bu bağlaçlardan sonra daima virgül (,) konur.",
  },

  // =========================================================================
  // LESSON 100: A2 Modül 2 Entegrasyonu: Gizemli Bir Olayın İfadesini Verme
  // =========================================================================
  100: {
    title: "A2 Modül 2 Entegrasyonu: Gizemli Olay / Tanık İfadesi",
    subtitle: "Polis Sorgusunda Past Continuous, Past Simple, When/While ve Kronolojik Bağlaçların Zirvesi",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "SORGU SORUSU (Where/What were you doing?) -> İFADE METNİ (While I was... when suddenly...)",
      components: [
        { label: "1. Zaman & Konum Tespiti", code: "At 11:15 PM last night, I was walking home alone.", role: "Tanığın o andaki konumu (Continuous)", color: 'white' },
        { label: "2. Süreç & Kesinti", code: "While I was passing the gallery, I heard a loud alarm.", role: "While + Continuous -> Simple kesintisi", color: 'yellow' },
        { label: "3. Görsel Detay & Şahıs", code: "A tall man wearing a black hoodie was running away.", role: "Görülen şüphelinin o anki eylemi", color: 'yellow' },
        { label: "4. Yapılan Müdahale", code: "I immediately called 999 and reported the incident.", role: "Tanığın aldığı anlık aksiyon (V2)", color: 'white' },
      ],
      exampleEn: "I was walking past the museum when the alarm went off. Meanwhile, two suspects were escaping in a silver car.",
      exampleTr: "Müzenin önünden geçiyordum ki alarm çaldı. Bu sırada iki şüpheli gümüş renkli bir arabayla kaçıyordu.",
      breakdownNote: "Past Simple (went off, called) + Past Continuous (was walking, were escaping) + Bağlaçlar (when, meanwhile).",
    },
    chalkNote: {
      yellowHighlight: "100. Ders Başarısı: Past Simple ve Past Continuous arasındaki tüm köprüleri kurdunuz! Artık karmaşık geçmiş olayları bir dedektif veya tanık titizliğiyle anlatabilirsiniz!",
      whiteExplanation: "İfade verirken saatler 'AT', günler 'ON', süreçler 'WHILE', anlık kesintiler 'WHEN' ile sunulur.",
    },
    sideTip: "Tebrikler! İlk 100 dersin konu anlatımı ve akıllı siyah tahta öğretim sistemini eksiksiz tamamladınız.",
  },
};
