// LinguAAI V8.0 — Bespoke Blackboard Pedagogical Database
// Module 1 & Module 2: Lessons 1 to 20 (CEFR A1)
// 100% Bespoke, topic-authentic chalkboard datasets.

import { TeacherBlackboardData } from '../../../types/lesson';

export const BLACKBOARDS_1_TO_20: Record<number, TeacherBlackboardData> = {
  // =========================================================================
  // LESSON 1: Tanışma İfadeleri ve Kendini Tanıtma
  // =========================================================================
  1: {
    title: "Selamlaşma, İsim Bildirme ve Tanışma Formülleri",
    subtitle: "İlk Sosyal Temas: Selamlama, İsim Bildirme ve Memnuniyet Zinciri",
    layoutType: 'structure_table',
    headers: ["Aşama & Durum", "Kullanılan İngilizce Kalıp", "Örnek Cümle", "Türkçe Karşılığı"],
    rows: [
      { col1: "1. Selamlama (Samimi)", col2: "Hello! / Hi!", highlightCol2: true, col3: "Hello! My name is David.", col4: "Merhaba! Benim adım David." },
      { col1: "1. Selamlama (Resmi)", col2: "Good morning / afternoon / evening", highlightCol2: true, col3: "Good morning, Ms. Davis.", col4: "Günaydın, Bayan Davis." },
      { col1: "2. İsim Bildirme", col2: "My name is... / I am...", highlightCol2: true, col3: "My name is Sarah Miller.", col4: "Benim adım Sarah Miller." },
      { col1: "3. Karşı Adı Sorma", col2: "What is your name? -> What's your name?", highlightCol2: true, col3: "Hello, I'm Alex. What's your name?", col4: "Selam, ben Alex. Adınız nedir?" },
      { col1: "4. Memnuniyet Bildirme", col2: "Nice to meet you! -> Nice to meet you, too!", highlightCol2: true, col3: "A: Nice to meet you! B: Nice to meet you, too!", col4: "Tanıştığıma memnun oldum. - Ben de!" },
    ],
    chalkNote: {
      yellowHighlight: "Tanışma Karşılığı Altın Kuralı: 'Me too' kaba kalır; mutlaka 'Nice to meet you, too' denir!",
      whiteExplanation: "Zaten tanıdığınız birini yeniden görürseniz 'Nice to meet you' (ilk tanışma) değil, 'Nice to see you' (yeniden görüşme) deyin.",
    },
    sideTip: "Asla 'I name is...' demeyin; Ben = I, Benim = My ('My name is...').",
  },

  // =========================================================================
  // LESSON 2: İngilizce Alfabe ve Harf Kodlama (Spelling)
  // =========================================================================
  2: {
    title: "İngilizce Alfabe (26 Harf) ve İsim Kodlama (Spelling)",
    subtitle: "Ortak Ünlü Seslerine Göre Harf Grupları ve Doğru Telaffuz",
    layoutType: 'grammar_table',
    headers: ["Fonetik Ses Grubu", "Bu Gruba Dahil Harfler", "Harflerin Fonetik Okunuşu", "Heceleme (Spelling) Örneği"],
    rows: [
      { col1: "/eɪ/ Sesi Ailesi", col2: "A, H, J, K", highlightCol2: true, col3: "A /eɪ/, H /eɪtʃ/, J /dʒeɪ/, K /keɪ/", col4: "Ortak ünlü sesi /eɪ/" },
      { col1: "/iː/ Sesi Ailesi", col2: "B, C, D, E, G, P, T, V, Z", highlightCol2: true, col3: "B /biː/, C /siː/, D /diː/, E /iː/, P /piː/", col4: "En kalabalık harf grubu (/iː/)" },
      { col1: "/e/ Sesi Ailesi", col2: "F, L, M, N, S, X", highlightCol2: true, col3: "F /ef/, L /el/, M /em/, N /en/, S /es/", col4: "Türkçe sesletime yakın /e/ ailesi" },
      { col1: "/aɪ/ Sesi Ailesi", col2: "I, Y", highlightCol2: true, col3: "I /aɪ/ (ay), Y /waɪ/ (vay)", col4: "'I' harfi Türkçe 'ay' gibi okunur" },
      { col1: "Kodlama Sorusu", col2: "How do you spell your surname?", highlightCol2: true, col3: "It's M-I-L-L-E-R (/em-aɪ-el-el-iː-ɑː/)", col4: "Soyadınızı nasıl hecelersiniz?" },
    ],
    chalkNote: {
      yellowHighlight: "Kritik Karışıklık: 'E' harfi İngilizcede /iː/ (i), 'I' harfi ise /aɪ/ (ay) okunur!",
      whiteExplanation: "Havalimanında, otelde veya pasaport kontrolünde harfleri tek tek İngilizce fonetik sesleriyle kodlayın.",
    },
    sideTip: "İki aynı harf yan yana gelirse 'double L' veya 'double E' şeklinde söylenebilir.",
  },

  // =========================================================================
  // LESSON 3: Sayılar (1-100), Yaş ve Telefon Numarası
  // =========================================================================
  3: {
    title: "Sayılar (1-100), Yaş ve Telefon Numarası Bildirimi",
    subtitle: "-teen (13-19) ve -ty (20-90) Vurgu Farkı ile Yaş Kalıbı",
    layoutType: 'grammar_table',
    headers: ["Sayı Kategorisi", "İngilizce Yazılış & Vurgu", "Örnek Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "1-12 Temel Rakamlar", col2: "one, two, three, four... twelve", highlightCol2: true, col3: "I have two sisters and one brother.", col4: "İki kız, bir erkek kardeşim var." },
      { col1: "13-19 (-TEEN Grubu)", col2: "thirteen, fourteen, fifteen... nineteen", highlightCol2: true, col3: "She is fourteen years old (four-TEEN).", col4: "Vurgu son hecededir (-teen)." },
      { col1: "20-90 (-TY Onluklar)", col2: "twenty, thirty, forty, fifty... ninety", highlightCol2: true, col3: "He is forty years old (FOR-ty).", col4: "Vurgu ilk hecededir (-ty)." },
      { col1: "Yaş Sorma & Bildirme", col2: "How old are you? -> I am [Sayı] years old", highlightCol2: true, col3: "I am twenty-five years old.", col4: "25 yaşındayım ('I have 25' YASAKTIR!)." },
      { col1: "Telefon Numarası", col2: "Rakamlar tek tek okunur; 0 = oh / zero", highlightCol2: true, col3: "My number is 07911... (oh-seven-nine...)", col4: "Telefon numaraları tekil rakam dizisidir." },
    ],
    chalkNote: {
      yellowHighlight: "İngilizcede yaş sahip olunan bir nesne değildir; bulunulan durumdur: 'I AM 25', asla 'I have 25' denmez!",
      whiteExplanation: "14 (four-TEEN) son hece uzatılır; 40 (FOR-ty) ilk heceye sert basılır.",
    },
    sideTip: "Sayı yazarken 21-99 arası onluk ve birlik arasına tire konur: 'twenty-five', 'forty-two'.",
  },

  // =========================================================================
  // LESSON 4: Kişi Zamirleri (Subject Pronouns)
  // =========================================================================
  4: {
    title: "İngilizce Özne Zamirleri (Subject Pronouns)",
    subtitle: "Cümlede Eylemi Yapan Kişiyi Belirten Temel Zamir Sistemi",
    layoutType: 'grammar_table',
    headers: ["Şahıs Zamiri", "Rol & Cinsiyet Ayrımı", "Örnek Cümle", "Türkçe Karşılığı"],
    rows: [
      { col1: "I (Birinci Tekil)", col2: "Ben (Daima BÜYÜK harf)", highlightCol2: true, col3: "I am ready for the interview.", col4: "Mülakat için hazırım." },
      { col1: "You (İkinci Şahıs)", col2: "Sen VEYA Siz (Tekil ve Çoğul ortak)", highlightCol2: true, col3: "You are our best client.", col4: "En iyi müşterimizsiniz." },
      { col1: "He (Üçüncü Tekil)", col2: "O (Erkek insanlar için)", highlightCol2: true, col3: "He is a senior engineer.", col4: "O kıdemli bir mühendistir." },
      { col1: "She (Üçüncü Tekil)", col2: "O (Kadın insanlar için)", highlightCol2: true, col3: "She is a university professor.", col4: "O bir üniversite profesörüdür." },
      { col1: "It (Üçüncü Tekil)", col2: "O (Cansız nesne, hayvan, hava, saat)", highlightCol2: true, col3: "It is very cold outside.", col4: "Dışarısı çok soğuk." },
      { col1: "We / They (Çoğullar)", col2: "Biz / Onlar", highlightCol2: true, col3: "We are colleagues. / They are here.", col4: "Biz meslektaşız. / Onlar buradalar." },
    ],
    chalkNote: {
      yellowHighlight: "'I' (ben) zamiri cümlenin neresinde olursa olsun DAİMA büyük harfle yazılır!",
      whiteExplanation: "Türkçede 'O' tek bir kelimedir; İngilizcede ise erkek (HE), kadın (SHE), cansız (IT) ayrımı zorunludur.",
    },
    sideTip: "Cümlede özne olmadan cümle kurulamaz. 'Am ready' denmez; 'I am ready' denir.",
  },

  // =========================================================================
  // LESSON 5: Ülkeler, Milliyetler ve Diller
  // =========================================================================
  5: {
    title: "Ülke (Country), Milliyet (Nationality) ve Dil (Language)",
    subtitle: "Memleket, Kimlik ve Konuşulan Dil Arasındaki Kesin Ayrım",
    layoutType: 'grammar_table',
    headers: ["Ülke (from + Country)", "Milliyet (Nationality)", "Konuşulan Dil (Language)", "Örnek Cümle"],
    rows: [
      { col1: "Turkey", col2: "Turkish", highlightCol2: true, col3: "Turkish", col4: "I am from Turkey. I am Turkish." },
      { col1: "Germany", col2: "German", highlightCol2: true, col3: "German", col4: "Hans is from Germany. He speaks German." },
      { col1: "The UK / Britain", col2: "British", highlightCol2: true, col3: "English", col4: "She is from the UK. She is British." },
      { col1: "Italy", col2: "Italian", highlightCol2: true, col3: "Italian", col4: "They are from Italy. They speak Italian." },
      { col1: "Japan", col2: "Japanese", highlightCol2: true, col3: "Japanese", col4: "Kenji is from Japan. He is Japanese." },
    ],
    chalkNote: {
      yellowHighlight: "ÜLKE söylerken 'FROM' kullanılır (I am from Turkey). MİLLİYET söylerken 'from' kullanılmaz (I am Turkish)!",
      whiteExplanation: "İngilizcede ülke, milliyet ve dil isimlerinin baş harfi DAİMA büyük yazılır: 'English', 'Spanish'.",
    },
    sideTip: "'Where are you from?' (Nerelisin?) vs 'What is your nationality?' (Uyruğun nedir?).",
  },

  // =========================================================================
  // LESSON 6: Meslekler ve Günlük Çalışma Alanları
  // =========================================================================
  6: {
    title: "Meslekler, 'a / an' Kuralı ve Çalışma Alanları",
    subtitle: "Meslek Tanımlamalarında Belirteç Seçimi ve 'What do you do?'",
    layoutType: 'structure_table',
    headers: ["Ses Kuralı", "Belirteç + Meslek", "Çalışma Ortamı (at/in)", "Örnek Cümle"],
    rows: [
      { col1: "Sessiz Sesle Başlayan", col2: "a doctor / a teacher / a lawyer", highlightCol2: true, col3: "work at a hospital / in a school", col4: "He is a doctor at City Hospital." },
      { col1: "Sesli Sesle Başlayan", col2: "an engineer / an architect / an actor", highlightCol2: true, col3: "work in an office / on a site", col4: "She is an architect in London." },
      { col1: "Meslek Sorma Kalıbı", col2: "What do you do? (veya What's your job?)", highlightCol2: true, col3: "What do you do? - I am an accountant.", col4: "'Ne iş yapıyorsun / mesleğin nedir?'" },
      { col1: "Çoğul Meslekler", col2: "They are engineers (a/an DÜŞER)", highlightCol2: true, col3: "work in the technology sector", col4: "They are software engineers." },
    ],
    chalkNote: {
      yellowHighlight: "İngilizcede tekil meslek söylerken 'a / an' belirteci ZORUNLUDUR! 'I am doctor' YANLIŞ, 'I am a doctor' DOĞRU!",
      whiteExplanation: "'What do you do?' sorusu 'Şu an ne yapıyorsun?' demek değildir; mesleğinizi ve geçiminizi sorar.",
    },
    sideTip: "Okunuşu sesliyle başlayan kelimelere dikkat: 'an hour' (/aʊər/), 'a university' (/juːnɪ.../).",
  },

  // =========================================================================
  // LESSON 7: Günler, Aylar, Mevsimler ve Tarihler
  // =========================================================================
  7: {
    title: "Günler, Aylar, Mevsimler ve Zaman Edatları",
    subtitle: "ON (Günler & Tarihler) ve IN (Aylar & Mevsimler) Kullanım Matrisi",
    layoutType: 'grammar_table',
    headers: ["Zaman Dilimi", "İngilizce İsimler", "Kullanılan Edat", "Örnek Cümle"],
    rows: [
      { col1: "Haftanın Günleri", col2: "Monday, Tuesday, Wednesday... Sunday", highlightCol2: true, col3: "ON + Gün (on Friday)", col4: "We have an important meeting on Friday." },
      { col1: "Yılın Ayları", col2: "January, February, March... December", highlightCol2: true, col3: "IN + Ay (in September)", col4: "The new academic term begins in September." },
      { col1: "Dört Mevsim", col2: "spring, summer, autumn, winter", highlightCol2: true, col3: "IN + Mevsim (in summer)", col4: "Many people travel abroad in summer." },
      { col1: "Tam Tarihler (Gün+Ay)", col2: "15th May, 2nd October", highlightCol2: true, col3: "ON + Tarih (on 15th May)", col4: "Our contract starts on 15th May." },
    ],
    chalkNote: {
      yellowHighlight: "Altın Kural: GÜNLERDE 'ON' (on Monday), AYLARDA VE MEVSİMLERDE 'IN' (in May, in winter)!",
      whiteExplanation: "İngilizcede gün ve ay isimleri cümle içinde nerede olursa olsun daima büyük harfle başlar: 'Friday', 'July'.",
    },
    sideTip: "Hafta sonu: Amerikan İngilizcesinde 'on the weekend', İngiliz İngilizcesinde 'at the weekend' denir.",
  },

  // =========================================================================
  // LESSON 8: Saatler ve Zaman İfadeleri (What time is it?)
  // =========================================================================
  8: {
    title: "İngilizce Saat Söyleme (Telling the Time) Şeması",
    subtitle: "Önce Dakika Sonra Saat: PAST (Geçiyor) ve TO (Var / Kala)",
    layoutType: 'structure_table',
    headers: ["Saat Durumu", "İngilizce Kalıp Formülü", "Dijital Saat", "Örnek Cümle"],
    rows: [
      { col1: "Tam Saat", col2: "It is [Sayı] o'clock.", highlightCol2: true, col3: "09:00", col4: "It is nine o'clock in the morning." },
      { col1: "Çeyrek Geçiyor", col2: "It is quarter past [Saat].", highlightCol2: true, col3: "09:15", col4: "It is quarter past nine." },
      { col1: "Buçuk", col2: "It is half past [Saat].", highlightCol2: true, col3: "09:30", col4: "It is half past nine." },
      { col1: "Çeyrek Var / Kala", col2: "It is quarter to [Sonraki Saat].", highlightCol2: true, col3: "09:45", col4: "It is quarter to ten (10'a çeyrek var)." },
      { col1: "Dakika Geçiyor / Var", col2: "twenty past eight / ten to four", highlightCol2: true, col3: "08:20 / 03:50", col4: "The bus arrives at twenty past eight." },
    ],
    chalkNote: {
      yellowHighlight: "İngilizcede saat söylerken önce DAKİKA, sonra SAAT söylenir: 'Ten past nine' (9'u 10 geçiyor)!",
      whiteExplanation: "Belirli bir olayın gerçekleştiği saatten önce 'AT' edatı zorunludur: 'The train leaves AT 08:30.'",
    },
    sideTip: "'o'clock' yalnızca tam saatlerde söylenir; 'nine thirty o'clock' KESİNLİKLE denmez!",
  },

  // =========================================================================
  // LESSON 9: Sınıf ve Günlük İletişim Yönergeleri (Imperatives)
  // =========================================================================
  9: {
    title: "Emir, Talimat ve Yönerge Cümleleri (Imperatives)",
    subtitle: "Öznesiz Cümle Kurulumu: Olumlu (V1) ve Olumsuz (Don't + V1)",
    layoutType: 'structure_table',
    headers: ["Cümle Türü", "Kalıp Formülü", "Örnek Yönerge", "Türkçe Anlamı"],
    rows: [
      { col1: "Olumlu Emir / Talimat (+)", col2: "Doğrudan YALIN FİİL (V1)", highlightCol2: true, col3: "Open your textbook to page 12.", col4: "Ders kitabınızı sayfa 12'ye açın." },
      { col1: "Olumsuz Emir / Yasak (-)", col2: "DON'T + YALIN FİİL (V1)", highlightCol2: true, col3: "Don't speak during the examination.", col4: "Sınav sırasında konuşmayın." },
      { col1: "Kibar Rica (Please)", col2: "Please + V1  VEYA  V1..., please", highlightCol2: true, col3: "Please sign your name on this line.", col4: "Lütfen adınızı bu çizgiye imzalayın." },
      { col1: "Sınıf & İletişim", col2: "Listen carefully / Look at the board", highlightCol2: true, col3: "Listen carefully to the recording.", col4: "Kaydı dikkatle dinleyin." },
    ],
    chalkNote: {
      yellowHighlight: "Emir cümlelerinde özne (you) yazılmaz veya söylenmez; cümle doğrudan YALIN FİİLLE başlar!",
      whiteExplanation: "Olumsuz emir verirken zaman veya şahıs fark etmeksizin daima 'DON'T' kullanılır: 'Don't touch that!'",
    },
    sideTip: "'Please' kelimesi cümlenin sonuna geldiğinde önüne virgül konur: 'Sit down, please.'",
  },

  // =========================================================================
  // LESSON 10: Temel Nezaket Kuralları ve Sosyal Formüller
  // =========================================================================
  10: {
    title: "Sosyal Nezaket Formülleri ve Karşılık Verme Zinciri",
    subtitle: "Sosyal İletişimde 'Excuse me', 'Sorry' ve 'You're welcome' Zinciri",
    layoutType: 'structure_table',
    headers: ["Sosyal Durum", "Kullanılan Nezaket İfadesi", "Doğru Karşılık", "Örnek Kullanım"],
    rows: [
      { col1: "Teşekkür Etme", col2: "Thank you / Thanks a lot", highlightCol2: true, col3: "You're welcome. / Not at all.", col4: "Thank you for your help. - You're welcome." },
      { col1: "İzin İsteme / Seslenme", col2: "Excuse me, [soru / rica]", highlightCol2: true, col3: "Yes, how can I help you?", col4: "Excuse me, where is the elevator?" },
      { col1: "Özür Dileme (Hata anı)", col2: "I am sorry. / Sorry about that.", highlightCol2: true, col3: "That's all right. / No problem.", col4: "Sorry I'm late! - No problem at all." },
      { col1: "Anlayamama / Tekrar", col2: "Pardon? / Could you repeat that?", highlightCol2: true, col3: "Sure, let me say it again.", col4: "Pardon? I didn't hear your surname." },
    ],
    chalkNote: {
      yellowHighlight: "'Excuse me' bir konuşmayı başlatmadan veya izin isterken; 'Sorry' ise bir hata yapıldıktan sonra söylenir!",
      whiteExplanation: "'Thank you' dendiğinde sessiz kalınmaz; 'You're welcome' veya samimi ortamda 'No problem' denir.",
    },
    sideTip: "Metroda birinin yanından geçmek için 'Sorry' değil 'Excuse me' demek daha doğaldır.",
  },

  // =========================================================================
  // LESSON 11: To Be (Am / Is / Are) — Temel Tanımlamalar
  // =========================================================================
  11: {
    title: "To Be (Am / Is / Are) Temel Çekim Tahtası",
    subtitle: "İsim, Sıfat ve Durum Bildiriminde Özne-Yüklem Köprüsü",
    layoutType: 'grammar_table',
    headers: ["Özne Grubu", "Kullanılan Yapı", "Örnek Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "I (Birinci tekil)", col2: "am (kısaca 'm)", highlightCol2: true, col3: "I am happy to meet you.", col4: "Tanıştığıma memnunum." },
      { col1: "You (Sen / Siz)", col2: "are (kısaca 're)", highlightCol2: true, col3: "You are ready for the lesson.", col4: "Ders için hazırsın." },
      { col1: "He / She / It (3. tekil)", col2: "is (kısaca 's)", highlightCol2: true, col3: "She is a talented architect.", col4: "O yetenekli bir mimardır." },
      { col1: "We / They (Çoğul)", col2: "are (kısaca 're)", highlightCol2: true, col3: "They are here in London.", col4: "Onlar burada, Londra'dalar." },
    ],
    chalkNote: {
      yellowHighlight: "I -> AM  |  He, She, It -> IS  |  You, We, They -> ARE",
      whiteExplanation: "Türkçede 'öğrenciyim' ekle söylenirken, İngilizcede 'am / is / are' köprüsü zorunludur.",
    },
    sideTip: "Eylem fiiliyle yalın halde yan yana gelmez: 'I am work' YANLIŞ, 'I work' DOĞRU!",
  },

  // =========================================================================
  // LESSON 12: To Be: Olumsuz Cümleler ve Kısaltmalar (isn't, aren't)
  // =========================================================================
  12: {
    title: "To Be: Olumsuz Cümleler ve Kısaltmalar (isn't, aren't)",
    subtitle: "NOT Olumsuzluk Ekinin Yerleşimi ve Günlük Konuşma Kısaltmaları",
    layoutType: 'grammar_table',
    headers: ["Özne", "Tam Biçim (Full Form)", "Kısaltılmış Biçim (Contraction)", "Örnek Cümle"],
    rows: [
      { col1: "I", col2: "I am not", highlightCol2: true, col3: "I'm not (amn't DİYE BİR ŞEY YOKTUR)", col4: "I'm not tired after the trip." },
      { col1: "He / She / It", col2: "is not", highlightCol2: true, col3: "isn't  VEYA  He's not", col4: "She isn't at the office today." },
      { col1: "You / We / They", col2: "are not", highlightCol2: true, col3: "aren't  VEYA  We're not", col4: "They aren't ready for the test." },
      { col1: "Sıfat / Durum", col2: "am not / isn't / aren't + Sıfat", highlightCol2: true, col3: "isn't expensive / aren't cold", col4: "This laptop isn't very expensive." },
    ],
    chalkNote: {
      yellowHighlight: "Çok Önemli Kural: 'am not' birleşerek 'amn't' OLMAZ; daima 'I'm not' kalır!",
      whiteExplanation: "Konuşma dilinde 'is not' yerine 'isn't', 'are not' yerine 'aren't' kullanımı standarttır.",
    },
    sideTip: "Resmi iş yazışmalarında kısaltma yapılmaz: 'The manager is not available.'",
  },

  // =========================================================================
  // LESSON 13: To Be: Soru Cümleleri ve Kısa Cevaplar
  // =========================================================================
  13: {
    title: "To Be: Soru Cümleleri ve Kısa Cevaplar",
    subtitle: "Devrik Yapı Mantığı: Am / Is / Are Fiilinin Özne Önüne Geçmesi",
    layoutType: 'grammar_table',
    headers: ["Soru Kalıbı", "Örnek Soru Cümlesi", "Olumlu Kısa Cevap", "Olumsuz Kısa Cevap"],
    rows: [
      { col1: "Are you...?", col2: "Are you ready for the meeting?", highlightCol1: true, col3: "Yes, I am. (Yes, I'm YANLIŞ!)", col4: "No, I'm not." },
      { col1: "Is he / she...?", col2: "Is she your new manager?", highlightCol1: true, col3: "Yes, she is.", col4: "No, she isn't. / No, she's not." },
      { col1: "Is it...?", col2: "Is it cold outside?", highlightCol1: true, col3: "Yes, it is.", col4: "No, it isn't." },
      { col1: "Are they...?", col2: "Are they in the conference room?", highlightCol1: true, col3: "Yes, they are.", col4: "No, they aren't." },
    ],
    chalkNote: {
      yellowHighlight: "Soru sorarken AM / IS / ARE öznenin önüne geçer! Kısa olumlu cevapta KISALTMA YAPILMAZ: 'Yes, I am' (Yes, I'm YANLIŞ!).",
      whiteExplanation: "İngilizcede sadece 'Yes' veya 'No' demek soğuk kaçabilir; 'Yes, I am' gibi kısa cevap sosyal nezakettir.",
    },
    sideTip: "Soru tonlaması: Evet/Hayır sorularında cümlenin sonu hafifçe yukarı doğru tırmanır.",
  },

  // =========================================================================
  // LESSON 14: There is & There are — Varlık Bildirimi
  // =========================================================================
  14: {
    title: "There is & There are — Varlık Bildirimi",
    subtitle: "Bir Yerde Bir Şeyin Bulunduğunu Bildirme: Tekil (is) vs Çoğul (are)",
    layoutType: 'grammar_table',
    headers: ["Varlık Türü", "Kullanılan Kalıp", "Örnek Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "Tekil Sayılabilen (+)", col2: "There is a / an... (There's)", highlightCol2: true, col3: "There is a large park near here.", col4: "Buranın yakınında büyük bir park var." },
      { col1: "Sayılamayan İsim (+)", col2: "There is some...", highlightCol2: true, col3: "There is some fresh water on the table.", col4: "Masanın üstünde biraz taze su var." },
      { col1: "Çoğul İsimler (+)", col2: "There are [Sayı / İsimler]", highlightCol2: true, col3: "There are twenty students in class.", col4: "Sınıfta yirmi öğrenci var." },
      { col1: "Fark Uyarısı", col2: "There is != Have", highlightCol2: true, col3: "There is a problem. (Problem var)", col4: "'Have' bir kişinin sahipliğidir; 'There is' varlıktır." },
    ],
    chalkNote: {
      yellowHighlight: "Tekil ve sayılamayan nesnelerde THERE IS; çoğul nesnelerde THERE ARE kullanılır!",
      whiteExplanation: "Türkçedeki 'var' kelimesi sahiplik bildiriyorsa 'have/has', ortamda mevcudiyet bildiriyorsa 'there is/are' ile karşılanır.",
    },
    sideTip: "'There are' birleştirilerek kısaltılamaz; 'There're' yazılı dilde kesinlikle kullanılmaz.",
  },

  // =========================================================================
  // LESSON 15: There is / are: Olumsuz ve Soru Halleri
  // =========================================================================
  15: {
    title: "There is / are: Olumsuz ve Soru Halleri",
    subtitle: "Yokluk Bildirimi (isn't / aren't any) ve Varlık Sorgulama (Is there? / Are there?)",
    layoutType: 'grammar_table',
    headers: ["Cümle Yapısı", "Formül", "Örnek Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "Tekil Olumsuz (-)", col2: "There isn't a / an...", highlightCol2: true, col3: "There isn't a pharmacy on this street.", col4: "Bu caddede eczane yok." },
      { col1: "Çoğul Olumsuz (-)", col2: "There aren't any...", highlightCol2: true, col3: "There aren't any empty chairs in the room.", col4: "Odada hiç boş sandalye yok." },
      { col1: "Tekil Soru (?)", col2: "Is there a / an...?", highlightCol2: true, col3: "Is there an ATM nearby?", col4: "Yakınlarda bir bankamatik var mı?" },
      { col1: "Çoğul Soru (?)", col2: "Are there any...?", highlightCol2: true, col3: "Are there any questions about the plan?", col4: "Plan hakkında hiç soru var mı?" },
    ],
    chalkNote: {
      yellowHighlight: "Olumsuz ve soru cümlelerinde çoğullarla 'ANY' (hiç) kullanılır: 'There aren't ANY chairs'!",
      whiteExplanation: "Soru sorarken 'is / are' başa geçer: 'Is there...?' -> 'Yes, there is.' / 'No, there isn't.'",
    },
    sideTip: "'Is there any water?' (Sayılamayan su için tekil 'is' ve 'any' kullanılır).",
  },

  // =========================================================================
  // LESSON 16: Temel Konum Edatları: In, On, Under, Next to, Behind
  // =========================================================================
  16: {
    title: "Temel Konum Edatları (Prepositions of Place)",
    subtitle: "Nesnelerin ve Kişilerin Mekandaki Yerini Belirtme Haritası",
    layoutType: 'grammar_table',
    headers: ["Konum Edatı", "Mekansal Anlam", "Örnek Cümle", "Türkçe Karşılığı"],
    rows: [
      { col1: "IN", col2: "İçinde / Kapalı alanda", highlightCol1: true, col3: "The keys are in my bag.", col4: "Anahtarlar çantamın içinde." },
      { col1: "ON", col2: "Üstünde (yüzey temasıyla)", highlightCol1: true, col3: "The laptop is on the desk.", col4: "Dizüstü bilgisayar masanın üstünde." },
      { col1: "UNDER", col2: "Altında", highlightCol1: true, col3: "The cat is sleeping under the table.", col4: "Kedi masanın altında uyuyor." },
      { col1: "NEXT TO", col2: "Yanında / Bitişiğinde", highlightCol1: true, col3: "The bank is next to the post office.", col4: "Banka postanenin bitişiğindedir." },
      { col1: "BEHIND / IN FRONT OF", col2: "Arkasında / Önünde", highlightCol1: true, col3: "The garden is behind the house.", col4: "Bahçe evin arkasındadır." },
    ],
    chalkNote: {
      yellowHighlight: "'ON' yüzey teması gerektirir (masanın üstü, duvar, zemin). Havada asılı olmak 'above' kelimesidir!",
      whiteExplanation: "'Next to' iki kelimedir; 'next the bank' YANLIŞTIR, 'next TO the bank' denmelidir.",
    },
    sideTip: "Şehir ve ülkelerde 'IN' kullanılır: 'in Istanbul', 'in England'.",
  },

  // =========================================================================
  // LESSON 17: Renkler ve Temel Niteleme Sıfatları
  // =========================================================================
  17: {
    title: "Renkler ve Temel Niteleme Sıfatları",
    subtitle: "İngilizcede Sıfat-İsim Sıralaması: Sıfat Daima İsimden ÖNCE Gelir!",
    layoutType: 'structure_table',
    headers: ["Kullanım Tipi", "Sıralama Formülü", "Örnek", "Kural Notu"],
    rows: [
      { col1: "İsim Tamlaması", col2: "SIFAT + İSİM (a blue car)", highlightCol2: true, col3: "I have a blue car.", col4: "Türkçe gibi: Sıfat önde ('car blue' KESİNLİKLE YANLIŞ)." },
      { col1: "To Be Sonrası", col2: "ÖZNE + IS/ARE + SIFAT", highlightCol2: true, col3: "My new car is blue.", col4: "'To be' ardından sıfat tek başına gelir." },
      { col1: "Çoğul İsimlerde", col2: "Sıfat ASLA çoğul eki (-s) ALMAZ", highlightCol2: true, col3: "two blue cars (blues cars YASAK)", col4: "İsim çoğul olsa da sıfat yalın kalır." },
      { col1: "Zıt Sıfat Çiftleri", col2: "big - small • new - old • cheap - expensive", highlightCol2: true, col3: "an expensive watch / a cheap pen", col4: "Temel niteleme sıfatları." },
    ],
    chalkNote: {
      yellowHighlight: "İngilizcede sıfatlar ASLA çoğul eki almaz! 'Expensive cars' DOĞRU, 'Expensives cars' KESİNLİKLE YANLIŞ!",
      whiteExplanation: "Sıfat ismin önüne geldiğinde belirteç sıfatın sesine göre seçilir: 'a car' ama 'an old car' (/oʊ/ sesli ses).",
    },
    sideTip: "Renkler de sıfattır ve aynı kurala uyar: 'red apples' (reds apples denmez).",
  },

  // =========================================================================
  // LESSON 18: Duygular ve Fiziksel Durumlar (Happy, Tired, Hungry)
  // =========================================================================
  18: {
    title: "Duygular ve Fiziksel Durumlar (Feelings & States)",
    subtitle: "To Be ile Durum Bildirimi: Açlık, Susuzluk, Yorgunluk ve Sevinç",
    layoutType: 'grammar_table',
    headers: ["Durum Kategorisi", "İngilizce Sıfat", "To Be ile Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "Fiziksel İhtiyaç", col2: "hungry (aç) / thirsty (susamış)", highlightCol2: true, col3: "I am hungry; let's have lunch.", col4: "Açım; hadi öğle yemeği yiyelim." },
      { col1: "Enerji & Yorgunluk", col2: "tired (yorgun) / exhausted (tükenmiş)", highlightCol2: true, col3: "She is tired after a long flight.", col4: "Uzun uçuştan sonra yorgun." },
      { col1: "Duygusal Durum", col2: "happy (mutlu) / sad (üzgün) / excited", highlightCol2: true, col3: "We are excited about the new project.", col4: "Yeni proje için heyecanlıyız." },
      { col1: "Endişe & Korku", col2: "nervous (gergin) / worried (endişeli)", highlightCol2: true, col3: "He is nervous before the presentation.", col4: "Sunumdan önce gergin." },
    ],
    chalkNote: {
      yellowHighlight: "Türkçede 'açlığım var' veya 'susadım' denir; İngilizcede bunlar sıfattır ve 'To Be' ile söylenir: 'I am hungry'!",
      whiteExplanation: "'I have hungry' KESİNLİKLE YANLIŞTIR; açlık bir durumdur, bu yüzden 'am/is/are' kullanılır.",
    },
    sideTip: "Soru sorarken: 'Are you tired?' (Yorgun musun?) -> 'Yes, a little bit.'",
  },

  // =========================================================================
  // LESSON 19: Hava Durumu ve Sıcaklık İfadeleri
  // =========================================================================
  19: {
    title: "Hava Durumu ve Sıcaklık İfadeleri",
    subtitle: "'It is...' Öznesiyle Hava Tasviri ve Sıcaklık Dereceleri",
    layoutType: 'grammar_table',
    headers: ["Hava Olayı", "İngilizce Sıfat / Fiil", "Örnek Cümle", "Türkçe Karşılığı"],
    rows: [
      { col1: "Güneşli / Bulutlu", col2: "sunny / cloudy", highlightCol2: true, col3: "It is sunny and pleasant today.", col4: "Bugün hava güneşli ve güzel." },
      { col1: "Yağmurlu / Rüzgarlı", col2: "rainy / windy", highlightCol2: true, col3: "It is very windy outside; wear a coat.", col4: "Dışarısı çok rüzgarlı; palto giy." },
      { col1: "Karlı / Sisli", col2: "snowy / foggy", highlightCol2: true, col3: "It is snowy in the mountains.", col4: "Dağlarda hava karlı." },
      { col1: "Sıcaklık Derecesi", col2: "hot / warm / cool / cold / freezing", highlightCol2: true, col3: "It is 22 degrees Celsius (22°C).", col4: "Hava 22 santigrat derece." },
    ],
    chalkNote: {
      yellowHighlight: "Hava durumundan bahsederken cümle daima 'IT IS' (kısaca It's) ile başlar: 'It is rainy today'!",
      whiteExplanation: "İsimden sıfat yapma: Sun (Güneş) -> Sunny (Güneşli), Rain (Yağmur) -> Rainy (Yağmurlu), Wind -> Windy.",
    },
    sideTip: "'How is the weather?' veya 'What is the weather like?' hava sorma kalıplarıdır.",
  },

  // =========================================================================
  // LESSON 20: A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme
  // =========================================================================
  20: {
    title: "A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme",
    subtitle: "There is/are, Konum Edatları ve Sıfatların Bütünleşik Tasvir Şeması",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "THERE IS/ARE + SIFAT + EŞYA + KONUM EDATI + ODA / YER",
      components: [
        { label: "1. Varlık Bildirimi", code: "There is / There are", role: "Mevcudiyet ifadesi", color: 'yellow' },
        { label: "2. Sıfat + Eşya", code: "a comfortable desk / two lamps", role: "Nitelikli mobilya/eşya", color: 'white' },
        { label: "3. Konum Edatı", code: "next to / on / under / behind", role: "Mekansal ilişki", color: 'yellow' },
        { label: "4. Referans Noktası", code: "the large window / the wall", role: "Odadaki konum", color: 'white' },
      ],
      exampleEn: "There is a comfortable wooden desk next to the large window.",
      exampleTr: "Büyük pencerenin yanında konforlu ahşap bir çalışma masası var.",
      breakdownNote: "Varlık (There is) + Nitelik (comfortable wooden desk) + Konum (next to) + Referans (the large window).",
    },
    chalkNote: {
      yellowHighlight: "Entegrasyon Kuralı: Bir odayı tasvir ederken önce ana eşyayı söyleyin, ardından konum edatıyla yerini bağlayın!",
      whiteExplanation: "Çoklu nesnelerde çoğul uyumuna dikkat edin: 'There are two modern lamps on the bedside tables.'",
    },
    sideTip: "Renk ve sıfat uyumu: 'The walls are light gray, and the floor is clean.'",
  },
};
