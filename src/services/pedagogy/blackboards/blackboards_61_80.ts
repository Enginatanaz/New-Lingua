// LinguAAI V8.0 — Bespoke Blackboard Pedagogical Database
// Module 7 & Module 8: Lessons 61 to 80 (CEFR A1)
// 100% Bespoke, topic-authentic chalkboard datasets.

import { TeacherBlackboardData } from '../../../types/lesson';

export const BLACKBOARDS_61_TO_80: Record<number, TeacherBlackboardData> = {
  // =========================================================================
  // LESSON 61: Şimdiki Zaman (Present Continuous): Formülü ve Mantığı
  // =========================================================================
  61: {
    title: "Şimdiki Zaman (Present Continuous): Temel Formül ve Mantık",
    subtitle: "Konuşma Anında Süregelen Eylemler: Özne + AM/IS/ARE + Fiil-ing",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "ÖZNE + AM / IS / ARE + FİİL-ING + NESNE + NOW / AT THE MOMENT",
      components: [
        { label: "1. Özne", code: "I / He, She, It / You, We, They", role: "Eylemi yapan kişi", color: 'white' },
        { label: "2. Yardımcı Fiil", code: "am / is / are", role: "Zaman köprüsü (Unutulamaz!)", color: 'yellow' },
        { label: "3. Süreç Fiili", code: "working / studying / eating", role: "Fiil köküne -ing takısı", color: 'yellow' },
        { label: "4. Anlık Zaman", code: "right now / at the moment", role: "Konuşma anı bildirimi", color: 'white' },
      ],
      exampleEn: "She is presenting the quarterly marketing report right now.",
      exampleTr: "Şu anda üç aylık pazarlama raporunu sunuyor.",
      breakdownNote: "Özne (She) + Yardımcı (is) + Eylem (presenting) + Nesne (report) + Zaman (right now).",
    },
    chalkNote: {
      yellowHighlight: "İki Ayaklı Sehpa Kuralı: Şimdiki zamanda 'am/is/are' VEYA '-ing' tek başına yetmez; İKİSİ BİRLİKTE ŞARTTIR!",
      whiteExplanation: "'I working' YANLIŞTIR ('am' eksik); 'I am work' YANLIŞTIR ('-ing' eksik); daima 'I am working' denir.",
    },
    sideTip: "Konuşma anında tam gözünüzün önünde olan veya o günlerde devam eden eylemler için kullanılır.",
  },

  // =========================================================================
  // LESSON 62: Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri
  // =========================================================================
  62: {
    title: "Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri",
    subtitle: "Sessiz Çiftleşmesi, 'e' Düşmesi ve 'ie' Değişimi Haritası",
    layoutType: 'verb_transformation',
    headers: ["Fiil Kökü Bitişi", "İmla Kuralı", "Fiil Dönüşüm Örnekleri", "Örnek Cümle"],
    rows: [
      { col1: "Genel Çoğu Fiil", col2: "Doğrudan +ing eklenir", highlightCol2: true, col3: "work -> working  •  read -> reading", col4: "I am reading an insightful article." },
      { col1: "Sessiz + E ile biten", col2: "-e harfi DÜŞER, +ing", highlightCol2: true, col3: "make -> making  •  write -> writing  •  drive -> driving", col4: "She is writing a technical proposal." },
      { col1: "Kısa Sesli + Tek Sessiz (CVC)", col2: "Son sessiz ÇİFTLEŞİR, +ing", highlightCol2: true, col3: "sit -> sitting  •  run -> running  •  stop -> stopping", col4: "The train is stopping at the platform." },
      { col1: "-ie ile biten fiiller", col2: "-ie düşer, -y olur (+ying)", highlightCol2: true, col3: "lie -> lying  •  die -> dying  •  tie -> tying", col4: "The cat is lying on the sunny rug." },
    ],
    chalkNote: {
      yellowHighlight: "-e ile biten fiillerde 'e' harfi silinir: 'making' (makeing YANLIŞ!). Tek heceli CVC fiillerde son harf ikizleşir: 'running'!",
      whiteExplanation: "İstisna: Sonu -w, -x, -y ile biten fiillerde son harf çiftleşmez: 'play -> playing', 'show -> showing'.",
    },
    sideTip: "'Open' veya 'listen' kelimelerinde ilk hece vurgulu olduğundan son harf çiftleşmez: 'opening', 'listening'.",
  },

  // =========================================================================
  // LESSON 63: Şimdiki Zaman: Olumsuz Cümleler (am not, isn't, aren't)
  // =========================================================================
  63: {
    title: "Şimdiki Zaman: Olumsuz Cümleler (am not, isn't, aren't)",
    subtitle: "Şu Anda Yapılmayan Eylemler: Özne + am not / isn't / aren't + V-ing",
    layoutType: 'grammar_table',
    headers: ["Özne Grubu", "Olumsuz Yardımcı", "Fiil Hâli (-ing KALIR!)", "Örnek Cümle"],
    rows: [
      { col1: "I", col2: "am not ('m not)", highlightCol2: true, col3: "sleeping / working", col4: "I am not sleeping; I am reading." },
      { col1: "He / She / It", col2: "is not (isn't)", highlightCol2: true, col3: "listening / attending", col4: "He isn't listening to the presentation." },
      { col1: "You / We / They", col2: "are not (aren't)", highlightCol2: true, col3: "watching / having", col4: "They aren't watching television right now." },
      { col1: "Kritik Fark", col2: "Present Simple vs Continuous", highlightCol2: true, col3: "don't work vs isn't working", col4: "This printer isn't working at the moment." },
    ],
    chalkNote: {
      yellowHighlight: "Olumsuz cümlede '-ing' takısı DÜŞMEZ! 'isn't work' YANLIŞTIR; daima 'isn't workING' denir!",
      whiteExplanation: "'Don't/doesn't' geniş zamana aittir. Şu an yapılan işin olumsuzunda 'isn't / aren't' kullanılır.",
    },
    sideTip: "Bozuk aletler için: 'The elevator isn't working' (Asansör şu an çalışmıyor).",
  },

  // =========================================================================
  // LESSON 64: Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar
  // =========================================================================
  64: {
    title: "Şimdiki Zaman: Soru Cümleleri ve Kısa Cevaplar",
    subtitle: "Devrik Yapı: Am / Is / Are Başa Geçer + Özne + Fiil-ing?",
    layoutType: 'grammar_table',
    headers: ["Soru Kalıbı", "Örnek Soru Cümlesi", "Olumlu Kısa Cevap", "Olumsuz Kısa Cevap"],
    rows: [
      { col1: "Are you...?", col2: "Are you studying for the English exam?", highlightCol1: true, col3: "Yes, I am.", col4: "No, I'm not." },
      { col1: "Is he / she...?", col2: "Is she waiting for the client downstairs?", highlightCol1: true, col3: "Yes, she is.", col4: "No, she isn't." },
      { col1: "Are they...?", col2: "Are they having lunch in the cafeteria?", highlightCol1: true, col3: "Yes, they are.", col4: "No, they aren't." },
      { col1: "WH- + Continuous", col2: "What are you doing right now?", highlightCol1: true, col3: "I am writing an email.", col4: "WH- kelimesi am/is/are önüne gelir." },
    ],
    chalkNote: {
      yellowHighlight: "Soru sorarken 'AM / IS / ARE' öznenin önüne gelir: 'ARE you listening to me?'",
      whiteExplanation: "Kısa cevapta '-ing' li fiil tekrarlanmaz; 'Yes, I am' veya 'No, he isn't' yeterlidir.",
    },
    sideTip: "Telefonda meşgul olup olmadığını sorma: 'Are you busy? Are you driving?'",
  },

  // =========================================================================
  // LESSON 65: Şimdiki Zaman Zaman Belirteçleri: Now, At the moment, Right now
  // =========================================================================
  65: {
    title: "Şimdiki Zaman Belirteçleri (Time Signals: Now, At the moment)",
    subtitle: "Cümlenin Şimdiki Zaman Olduğunu Gösteren Anahtar Zaman İfadeleri",
    layoutType: 'structure_table',
    headers: ["Zaman Zarfı", "Türkçe Karşılığı", "Cümledeki Yeri", "Örnek Cümle"],
    rows: [
      { col1: "NOW", col2: "Şimdi / Şu anda", highlightCol1: true, col3: "Cümle sonunda", col4: "We are discussing the budget now." },
      { col1: "RIGHT NOW", col2: "Tam şu anda (Acil / Anlık)", highlightCol1: true, col3: "Cümle sonunda", col4: "She is signing the contract right now." },
      { col1: "AT THE MOMENT", col2: "Şu sıralar / Şu anda", highlightCol1: true, col3: "Cümle sonunda / başında", col4: "The director is in a conference at the moment." },
      { col1: "CURRENTLY / THESE DAYS", col2: "Bugünlerde / Bu dönemde", highlightCol1: true, col3: "Fiilden önce veya cümlenin başında", col4: "They are currently developing a new mobile app." },
      { col1: "LOOK! / LISTEN!", col2: "Bak! / Dinle! (Dikkat çekme)", highlightCol1: true, col3: "Cümlenin en başında", col4: "Look! It is snowing outside!" },
    ],
    chalkNote: {
      yellowHighlight: "Bir cümlenin başında 'LOOK!' veya 'LISTEN!' varsa eylem o anda gerçekleşiyordur; ŞİMDİKİ ZAMAN zorunludur!",
      whiteExplanation: "'Every day' geniş zamanın sinyaliyken, 'right now' ve 'at the moment' şimdiki zamanın kesin sinyalidir.",
    },
    sideTip: "'Currently' kelimesi özne ile fiil arasına gelebilir: 'We are currently hiring.'",
  },

  // =========================================================================
  // LESSON 66: Geniş Zaman vs Şimdiki Zaman Karşılaştırması
  // =========================================================================
  66: {
    title: "Geniş Zaman vs Şimdiki Zaman Karşılaştırma Matrisi",
    subtitle: "Rutinler ve Genel Doğrular (Simple) vs Anlık Devam Edenler (Continuous)",
    layoutType: 'comparison_table',
    headers: ["Kriter", "Geniş Zaman (Present Simple)", "Şimdiki Zaman (Present Continuous)"],
    rows: [
      { col1: "Temel Anlam", col2: "Her zaman yapılan rutinler, alışkanlıklar", col3: "Şu anda, bu dakikalarda devam eden süreç" },
      { col1: "Cümle Formülü", col2: "Özne + V1 (+s for he/she/it)", col3: "Özne + AM/IS/ARE + V-ing" },
      { col1: "Sinyal Kelimeleri", col2: "always, usually, every day, on Mondays", col3: "now, right now, at the moment, currently, Look!" },
      { col1: "Karşılaştırmalı Örnek", col2: "I usually drink coffee. (Genel alışkanlık)", col3: "Today I am drinking tea. (Anlık tercih)" },
      { col1: "Yardımcı Fiil", col2: "Do / Does (soruda/olumsuzda)", col3: "Am / Is / Are (bütün cümlelerde)" },
    ],
    chalkNote: {
      yellowHighlight: "Karşılaştırma Kuralı: 'Ne yaparsın?' sorusu Present Simple, 'Şu an ne yapıyorsun?' sorusu Continuous'tur!",
      whiteExplanation: "'I live in London' (Kalıcı ikamet - Simple) vs 'I am staying at a hotel' (Geçici durum - Continuous).",
    },
    sideTip: "İki zamanı birleştiren cümle: 'I usually drive to work, but today I am taking the train.'",
  },

  // =========================================================================
  // LESSON 67: Durum Bildiren Fiiller (Stative Verbs) Neden -ing Almaz?
  // =========================================================================
  67: {
    title: "Durum Bildiren Fiiller (Stative Verbs) Neden -ing Almaz?",
    subtitle: "Zihinsel Durum, Duygu, Sahiplik ve Algı Fiillerinin -ing Yasağı",
    layoutType: 'grammar_table',
    headers: ["Kategori", "Stative Fiiller", "Yanlış Kullanım (-ing YASAK)", "Doğru Kullanım (Simple)"],
    rows: [
      { col1: "Zihinsel Süreç", col2: "know, understand, believe, remember", highlightCol2: true, col3: "*I am knowing the answer", col4: "I know the answer. (Biliyorum)" },
      { col1: "Duygular & İstek", col2: "want, need, love, like, hate, prefer", highlightCol2: true, col3: "*I am wanting a coffee", col4: "I want a coffee now. (İstiyorum)" },
      { col1: "Sahiplik", col2: "have (sahiplik), belong, own", highlightCol2: true, col3: "*She is having a car", col4: "She has a car. (Arabası var)" },
      { col1: "Görünüş / Durum", col2: "seem, look (görünmek), mean", highlightCol2: true, col3: "*What is it meaning?", col4: "What does it mean? (Ne anlama gelir?)" },
    ],
    chalkNote: {
      yellowHighlight: "Stative (durum) fiiller şu anda olsalar bile ASLA '-ing' ALMAZ! 'I am understanding' BÜYÜK YANLIŞTIR, 'I understand' denir!",
      whiteExplanation: "İstisna: 'Have' yemek yemek veya duş almak anlamında bir eylemse -ing alabilir: 'I am having lunch.'",
    },
    sideTip: "McDonald's sloganı 'I'm lovin' it' edebi bir reklam dili istisnasıdır; sınavlarda 'I love it' yazılır.",
  },

  // =========================================================================
  // LESSON 68: Fotoğraf ve Görsel Tasviri Yapma
  // =========================================================================
  68: {
    title: "Fotoğraf ve Görsel Tasviri Yapma Şeması",
    subtitle: "Bir Fotoğraftaki Kişilerin Eylemlerini ve Konumlarını Şimdiki Zamanla Tasvir Etme",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "IN THE PHOTO/PICTURE + THERE IS A [KİŞİ] + V-ING + MEKAN / ARKA PLAN",
      components: [
        { label: "1. Görsel Konumu", code: "In the foreground / In the background", role: "Fotoğraftaki yer (Ön/Arka plan)", color: 'yellow' },
        { label: "2. Kişi & Sayı", code: "there is a young woman / two men", role: "Görülen insanlar", color: 'white' },
        { label: "3. Süren Eylem", code: "sitting at a cafe / laughing together", role: "Fotoğraftaki anlık eylem (-ing)", color: 'yellow' },
        { label: "4. Ayrıntı / Kıyafet", code: "wearing a dark coat / holding a coffee", role: "Detay tasviri", color: 'white' },
      ],
      exampleEn: "In the picture, a man is walking his dog and smiling at the camera.",
      exampleTr: "Fotoğrafta bir adam köpeğini gezdiriyor ve kameraya gülümsüyor.",
      breakdownNote: "Görsel Girişi (In the picture) + Özne (a man) + Eylem (is walking / smiling).",
    },
    chalkNote: {
      yellowHighlight: "Fotoğraf ve resim tasvir edilirken eylemler DAİMA Present Continuous (am/is/are + V-ing) ile anlatılır!",
      whiteExplanation: "Kıyafet belirtirken 'wear' fiili kullanılır: 'He is wearing a blue suit.'",
    },
    sideTip: "Konum kalıpları: 'On the left' (solda), 'On the right' (sağda), 'In the middle' (ortada).",
  },

  // =========================================================================
  // LESSON 69: Telefon Görüşmesi Kalıpları ve Anlık Durumlar
  // =========================================================================
  69: {
    title: "Telefon Görüşmesi Kalıpları ve Anlık Durum Bildirimi",
    subtitle: "Kendini Tanıtma, Karşıyı Sorma, Bekletme ve Bağlama Standartları",
    layoutType: 'structure_table',
    headers: ["Aşama", "İngilizce Telefon Kalıbı", "Örnek Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "1. Kendini Tanıtma", col2: "This is [İsim] speaking / calling.", highlightCol2: true, col3: "Hello, this is David Miller speaking.", col4: "Merhaba, ben David Miller." },
      { col1: "2. Karşı Tarafı İsteme", col2: "Can / Could I speak to [Kişi]?", highlightCol2: true, col3: "Could I speak to Ms. Sarah, please?", col4: "Bayan Sarah ile görüşebilir miyim?" },
      { col1: "3. Karşıyı Sorma", col2: "Who is speaking / calling?", highlightCol2: true, col3: "May I ask who is calling?", col4: "Kimin aradığını öğrenebilir miyim?" },
      { col1: "4. Bekletme Kalıbı", col2: "Hold on a second / Hang on", highlightCol2: true, col3: "Hold on a second, I am transferring you.", col4: "Bir saniye hatta kalın, bağlıyorum." },
      { col1: "5. Müsait Değil", col2: "He is in a meeting right now.", highlightCol2: true, col3: "He is talking on another line.", col4: "Şu an başka bir hatta konuşuyor." },
    ],
    chalkNote: {
      yellowHighlight: "Telefonda 'I am David' denmez; 'THIS IS David' veya 'David speaking' denir!",
      whiteExplanation: "Karşıdaki kişiye 'Sen kimsin?' derken 'Who are you?' kaba kaçar; 'Who is speaking?' veya 'Who is calling?' denir.",
    },
    sideTip: "Mesaj bırakma teklifi: 'Would you like to leave a message?' (Mesaj bırakmak ister misiniz?).",
  },

  // =========================================================================
  // LESSON 70: A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma
  // =========================================================================
  70: {
    title: "A1 Modül 7 Entegrasyonu: Canlı Olay Akışını Aktarma",
    subtitle: "Canlı Yayın, Maç Sunumu veya Ofis Hareketliliğini Anlık Seslendirme",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "ZAMAN / KONUM + ÖZNE + AM/IS/ARE + V-ING + ETKİLEŞİM",
      components: [
        { label: "1. Canlı Sahne", code: "Right now at the stadium / in our studio", role: "Yayın konumu", color: 'white' },
        { label: "2. Aktörler", code: "the players / the conference participants", role: "Eylemi gerçekleştirenler", color: 'white' },
        { label: "3. Süren Eylem", code: "are warming up / are taking their seats", role: "Anlık hareketlilik (-ing)", color: 'yellow' },
        { label: "4. Anlık Değişim", code: "the referee is blowing the whistle", role: "Yeni gelişen an", color: 'yellow' },
      ],
      exampleEn: "The participants are taking their seats, and the keynote speaker is walking to the stage.",
      exampleTr: "Katılımcılar yerlerini alıyor ve ana konuşmacı sahneye doğru yürüyor.",
      breakdownNote: "İki eşzamanlı süreci bağlamak için 'and' bağlacı kullanılır.",
    },
    chalkNote: {
      yellowHighlight: "Canlı yayın anlatımında her an süregelen eylem Present Continuous ile aktarılır!",
      whiteExplanation: "Eylemler ardışık ve anlık birer darbe şeklindeyse spikerler bazen hız için Present Simple kullanabilir.",
    },
    sideTip: "Canlı bağlantı girişi: 'We are reporting live from London downtown.'",
  },

  // =========================================================================
  // LESSON 71: Sayılabilen ve Sayılamayan İsimler (Countable & Uncountable)
  // =========================================================================
  71: {
    title: "Sayılabilen ve Sayılamayan İsimler (Countable & Uncountable)",
    subtitle: "Tane Tane Sayılabilenler (-s Alır) vs Sıvı/Kütle/Soyut Sayılamayanlar (-s ALMAZ)",
    layoutType: 'comparison_table',
    headers: ["Özellik", "Sayılabilen İsimler (Countable - C)", "Sayılamayan İsimler (Uncountable - U)"],
    rows: [
      { col1: "Tanım & Mantık", col2: "Bireysel olarak tek tek sayılabilir", col3: "Sıvı, gaz, kütle, toz veya soyut kavramlar" },
      { col1: "Çoğul Eki (-s)", col2: "Alır: apple -> apples, car -> cars", col3: "ASLA ALMAZ: water (waters YASAK), money" },
      { col1: "a / an Kullanımı", col2: "Tekilken 'a / an' alır: a book", col3: "'a / an' ASLA ALMAZ: a water YASAK, some water" },
      { col1: "Fiil Uyumu", col2: "Tekilse IS, çoğulsa ARE", col3: "Daima TEKİL fiil (IS) alır: Milk is healthy." },
      { col1: "Tuzak Kelimeler", col2: "coin, dollar, job, tip", col3: "money, information, advice, furniture, bread" },
    ],
    chalkNote: {
      yellowHighlight: "İngilizcede MONEY (para), INFORMATION (bilgi) ve ADVICE (tavsiye) SAYILAMAZ! Asla çoğul eki almazlar!",
      whiteExplanation: "'Three advices' veya 'an information' BÜYÜK HATADIR; 'some advice' veya 'a piece of information' denir.",
    },
    sideTip: "Ekmek (bread) İngilizcede kütledir; tane için 'a loaf of bread' veya 'a slice of bread' denir.",
  },

  // =========================================================================
  // LESSON 72: A / An Belirteçleri ve İsimlerle Kullanımı
  // =========================================================================
  72: {
    title: "A / AN Belirteçleri (Indefinite Articles) ve Sesletim Kuralı",
    subtitle: "Yazılışa Göre Değil, KELİMENİN İLK SESİNE Göre A veya AN Seçimi",
    layoutType: 'grammar_table',
    headers: ["Belirteç", "Hangi Sesin Önüne Gelir?", "Örnek Kelimeler", "İstisna & Dikkat Noktası"],
    rows: [
      { col1: "A", col2: "Sessiz Sesle (Consonant Sound) başlayan", highlightCol1: true, col3: "a book, a car, a teacher, a company", col4: "Standart sessiz harf sesleri" },
      { col1: "AN", col2: "Sesli Sesle (Vowel Sound /a, e, i, o, u/) başlayan", highlightCol1: true, col3: "an apple, an egg, an engineer, an office", col4: "Standart sesli harf sesleri" },
      { col1: "AN (Sessiz H harfi)", col2: "Okunmayan sessiz 'h' harfleri (/aʊ/ sesi)", highlightCol1: true, col3: "an hour, an honest person, an heir", col4: "'h' okunmaz; sesliyle başlar -> AN hour" },
      { col1: "A (Sesli U / E harfi)", col2: "'Y' sesi (/juː/) çıkaran harfler", highlightCol1: true, col3: "a university, a European country, a uniform", col4: "'Y' sesi sessiz kabul edilir -> A university" },
    ],
    chalkNote: {
      yellowHighlight: "Altın Kural: Harfe değil SESE bakın! 'an hour' (/aʊər/ sesli), 'a university' (/juː/ sessiz)!",
      whiteExplanation: "'A / An' YALNIZCA tekil sayılabilen isimlerin önüne gelir; çoğullarla veya sayılamayanlarla kullanılmaz.",
    },
    sideTip: "'A water' denmez; 'a bottle of water' (bir şişe su) denir.",
  },

  // =========================================================================
  // LESSON 73: Some ve Any Kullanım Farkları (Olumlu, Olumsuz, Soru)
  // =========================================================================
  73: {
    title: "SOME ve ANY Kullanım Matrisi (Olumlu, Olumsuz, Soru)",
    subtitle: "Belirsiz Miktar Bildirimi: SOME (+) vs ANY (-) ve İstisna İkram Soruları",
    layoutType: 'comparison_table',
    headers: ["Cümle Türü", "SOME (Biraz / Birkaç)", "ANY (Hiç / Herhangi)"],
    rows: [
      { col1: "Olumlu Düz Cümle (+)", col2: "KULLANILIR: I have some friends. / There is some water.", col3: "Kullanılmaz (İstisna hariç)" },
      { col1: "Olumsuz Cümle (-)", col2: "Kullanılmaz", col3: "KULLANILIR: I don't have any money. / There aren't any chairs." },
      { col1: "Genel Soru Cümlesi (?)", col2: "Kullanılmaz", col3: "KULLANILIR: Do you have any questions? / Is there any milk?" },
      { col1: "İkram & Rica Soruları (!)", col2: "KULLANILIR: Would you like some coffee? / Can I have some water?", col3: "Kullanılmaz (Cevabın 'evet' olması beklenir)" },
    ],
    chalkNote: {
      yellowHighlight: "İkram veya kibar rica sorularında ANY değil SOME kullanılır: 'Would you like SOME tea?'!",
      whiteExplanation: "Olumsuz cümlede 'any' 'hiç' anlamına gelir: 'I don't have ANY time' (Hiç vaktim yok).",
    },
    sideTip: "Some hem çoğul sayılanlarla (some books) hem sayılamayanlarla (some sugar) kullanılır.",
  },

  // =========================================================================
  // LESSON 74: Much, Many ve A lot of ile Miktar Bildirimi
  // =========================================================================
  74: {
    title: "MUCH, MANY ve A LOT OF ile Miktar Bildirimi",
    subtitle: "Sayılabilen Çoğullar (Many) vs Sayılamayanlar (Much) vs Evrensel (A lot of)",
    layoutType: 'comparison_table',
    headers: ["Belirteç", "İsim Türü", "Cümle Uyumu", "Örnek Cümle"],
    rows: [
      { col1: "MANY (Çok)", col2: "Sayılabilen ÇOĞUL isimler (-s)", highlightCol1: true, col3: "Olumsuz ve Soru cümlelerinde yaygın", col4: "I don't have many colleagues. / Do you read many books?" },
      { col1: "MUCH (Çok)", col2: "Sayılamayan TEKİL isimler", highlightCol1: true, col3: "Olumsuz ve Soru cümlelerinde yaygın", col4: "We don't have much time. / How much money do you need?" },
      { col1: "A LOT OF / LOTS OF", col2: "HER İKİSİYLE DE KULLANILIR (Çoğul + Sayılamayan)", highlightCol1: true, col3: "Olumlu düz cümlelerin kralıdır", col4: "I have a lot of friends. / She drinks a lot of water." },
      { col1: "Kritik Kullanım Notu", col2: "Olumlu cümlede much tek başına garip kaçar", highlightCol2: true, col3: "'I have much money' yerine 'a lot of money' denir", col4: "Doğal konuşma dili kuralı." },
    ],
    chalkNote: {
      yellowHighlight: "Olumlu düz cümlelerde 'much' yerine 'A LOT OF' tercih edilir: 'I have a lot of work today'!",
      whiteExplanation: "Many sayılabilen çoğullarla (many cities), Much sayılamayanlarla (much luggage) eşleşir.",
    },
    sideTip: "'Thanks a lot' kalıbı 'çok teşekkürler' demektir.",
  },

  // =========================================================================
  // LESSON 75: A few (Birkaç) ve A little (Biraz) Kullanımı
  // =========================================================================
  75: {
    title: "A FEW (Birkaç) ve A LITTLE (Biraz) Kullanımı",
    subtitle: "Az Ama Yeterli Miktar: A few (+Çoğul) vs A little (+Sayılamayan)",
    layoutType: 'comparison_table',
    headers: ["Miktar İfadesi", "Uyumlu İsim Türü", "Psikolojik Anlam", "Örnek Cümle"],
    rows: [
      { col1: "A FEW (Birkaç)", col2: "Sayılabilen ÇOĞUL isimler (-s)", highlightCol1: true, col3: "Az sayıda ama yeterli (+)", col4: "I have a few close friends in London." },
      { col1: "A LITTLE (Biraz)", col2: "Sayılamayan TEKİL isimler", highlightCol1: true, col3: "Az miktarda ama yeterli (+)", col4: "There is a little milk left in the bottle." },
      { col1: "FEW (Neredeyse hiç)", col2: "Sayılabilen ÇOĞUL isimler (-s)", highlightCol1: true, col3: "Yetersiz, eksik, olumsuz (-)", col4: "He has few friends; he is very lonely." },
      { col1: "LITTLE (Neredeyse hiç)", col2: "Sayılamayan TEKİL isimler", highlightCol1: true, col3: "Yetersiz, neredeyse yok (-)", col4: "We have little time; hurry up!" },
    ],
    chalkNote: {
      yellowHighlight: "'A' harfi pozitiflik katar: 'a few' (birkaç tane var, yeterli), 'few' (neredeyse hiç yok, yetersiz)!",
      whiteExplanation: "Sayılabilenlerle 'a few', sayılamayanlarla 'a little' kullanılır: 'a few days', 'a little patience'.",
    },
    sideTip: "Nazikçe 'biraz' rica ederken: 'Could I have a little more coffee, please?'",
  },

  // =========================================================================
  // LESSON 76: Restoranda Sipariş Verme Kalıpları (I would like...)
  // =========================================================================
  76: {
    title: "Restoranda Sipariş Verme Kalıpları: 'I WOULD LIKE...'",
    subtitle: "Garson ile İletişim: 'I want' Kabalığından Kurtulup 'I would like' Nezaketine Geçiş",
    layoutType: 'structure_table',
    headers: ["Restoran Aşaması", "Kullanılan İngilizce Kalıp", "Örnek Cümle", "Garsonun Yanıtı"],
    rows: [
      { col1: "1. Masa İsteme", col2: "A table for [Sayı], please.", highlightCol2: true, col3: "A table for two, please.", col4: "Right this way, please." },
      { col1: "2. Menüyü İnceleme", col2: "Could we see the menu?", highlightCol2: true, col3: "Could we have the drinks menu?", col4: "Certainly, here it is." },
      { col1: "3. Sipariş Verme", col2: "I would like (I'd like) + [Yemek]", highlightCol2: true, col3: "I'd like the grilled salmon with vegetables.", col4: "Excellent choice, sir." },
      { col1: "4. Alternatif Sipariş", col2: "Can / Could I have + [Yemek]?", highlightCol2: true, col3: "Could I have a glass of still water?", col4: "Still or sparkling?" },
      { col1: "5. Hesap İsteme", col2: "Could we have the bill, please?", highlightCol2: true, col3: "Could we get the check / bill, please?", col4: "Sure, card or cash?" },
    ],
    chalkNote: {
      yellowHighlight: "Restoranda sipariş verirken 'I want' kaba kabul edilir; daima 'I WOULD LIKE' (kısaca I'd like) denmelidir!",
      whiteExplanation: "Hesap isterken İngiltere'de 'the bill', Amerika'da ise 'the check' kelimesi kullanılır.",
    },
    sideTip: "Bahşiş sorusu: 'Is service included in the bill?' (Servis ücrete dahil mi?).",
  },

  // =========================================================================
  // LESSON 77: Markette ve Mağazada Alışveriş Diyalogları
  // =========================================================================
  77: {
    title: "Mağazada ve Markette Alışveriş Diyalogları",
    subtitle: "Reyon Bulma, Beden ve Renk Sorma, Ödeme Yöntemi Seçimi",
    layoutType: 'structure_table',
    headers: ["Alışveriş Aşaması", "Kullanılan İfade", "Örnek Cümle", "Kasiyer / Görevli Yanıtı"],
    rows: [
      { col1: "1. Yardım Teklifini Karşılama", col2: "I'm just browsing / looking, thank you.", highlightCol2: true, col3: "Just looking around, thanks.", col4: "Let me know if you need anything." },
      { col1: "2. Ürün Yeri Sorma", col2: "Where can I find [Ürün]?", highlightCol2: true, col3: "Excuse me, where can I find olive oil?", col4: "It's on aisle 4, on the top shelf." },
      { col1: "3. Kabin Sorma", col2: "Where are the fitting rooms?", highlightCol2: true, col3: "Can I try this jacket on?", col4: "The fitting rooms are around the corner." },
      { col1: "4. Beden / Renk Sorma", col2: "Do you have this in size M / blue?", highlightCol2: true, col3: "Do you have this sweater in medium?", col4: "Let me check our stock." },
      { col1: "5. Ödeme Yöntemi", col2: "Can I pay by credit card / in cash?", highlightCol2: true, col3: "Can I pay contactless?", col4: "Yes, just tap your card here." },
    ],
    chalkNote: {
      yellowHighlight: "Ödeme yaparken: Kartla ödemede 'BY card' (veya contactless); nakit ödemede 'IN cash' denir!",
      whiteExplanation: "'Try on' kıyafeti üzerine denemek anlamına gelen temel deyimsel fiildir: 'Can I try it on?'",
    },
    sideTip: "Fiş isterken: 'Could I have the receipt, please?' (/rɪˈsiːt/ - 'p' okunmaz!).",
  },

  // =========================================================================
  // LESSON 78: Giysiler, Bedenler ve Renk Uyumları
  // =========================================================================
  78: {
    title: "Giysiler, Bedenler ve Renk Uyumları (Clothes & Sizes)",
    subtitle: "Daima Çoğul Olan Giysiler (Trousers, Jeans, Glasses) ve Fit vs Suit Ayrımı",
    layoutType: 'grammar_table',
    headers: ["Kategori", "İngilizce Giysi İsimleri", "Dilbilgisi Kuralı", "Örnek Cümle"],
    rows: [
      { col1: "Daima Çoğul Giysiler (İki bacaklı)", col2: "trousers / pants, jeans, shorts, leggings", highlightCol2: true, col3: "Daima 'ARE' alır (-s düşmez)", col4: "These jeans are very comfortable. (is YANLIŞ!)" },
      { col1: "Çift Bildiren Nesneler", col2: "glasses, sunglasses, scissors", highlightCol2: true, col3: "Daima 'ARE' alır", col4: "Where are my reading glasses?" },
      { col1: "Tekil Sayma Kalıbı", col2: "a pair of [Çoğul Giysi]", highlightCol2: true, col3: "Tekil saymak için 'a pair of' şart", col4: "I bought a new pair of trousers today." },
      { col1: "Fit vs Suit Ayrımı", col2: "Fit (Beden oturması) vs Suit (Yakışması)", highlightCol2: true, col3: "Kritik kelime farkı", col4: "This shirt fits me (bedenim), and blue suits you (yakışmış)." },
    ],
    chalkNote: {
      yellowHighlight: "Trousers (pantolon) ve Jeans İKİ BACAKLI oldukları için DAİMA ÇOĞULDUR ve 'ARE' alır: 'These jeans ARE nice'!",
      whiteExplanation: "'Fit' bedensel ölçünün uymasıdır; 'Suit' ise rengin veya tarzın size yakışmasıdır.",
    },
    sideTip: "Beden skalası: XS (extra small), S (small), M (medium), L (large), XL (extra large).",
  },

  // =========================================================================
  // LESSON 79: Öneri Kalıpları: Let's..., Shall we...?, How about...?
  // =========================================================================
  79: {
    title: "Öneri Kalıpları: LET'S..., SHALL WE...?, HOW ABOUT...?",
    subtitle: "Birlikte Bir Şey Yapmayı Teklif Etme ve Kabul / Reddetme Stratejileri",
    layoutType: 'structure_table',
    headers: ["Öneri Kalıbı", "Fiil Biçimi", "Örnek Öneri Cümlesi", "Doğal Yanıt"],
    rows: [
      { col1: "LET'S... (Hadi...)", col2: "Let's + YALIN FİİL (V1)", highlightCol1: true, col3: "Let's take a short coffee break.", col4: "Great idea! / Sounds good to me." },
      { col1: "SHALL WE...? (...alım mı?)", col2: "Shall we + YALIN FİİL (V1)?", highlightCol1: true, col3: "Shall we invite the marketing team too?", col4: "Yes, that would be very helpful." },
      { col1: "HOW ABOUT...? (...ne dersin?)", col2: "How about + FİİL-ING...?", highlightCol1: true, col3: "How about ordering some Italian pizza?", col4: "I'd love to, but I'm not hungry." },
      { col1: "WHY DON'T WE...? (Neden...mıyoruz?)", col2: "Why don't we + YALIN FİİL (V1)?", highlightCol1: true, col3: "Why don't we discuss this tomorrow morning?", col4: "Good point, let's schedule it." },
    ],
    chalkNote: {
      yellowHighlight: "HOW ABOUT ve WHAT ABOUT ardından gelen eyleme '-ING' takısı eklenir: 'How about goING out?'",
      whiteExplanation: "Let's ve Shall we ardından ise fiil tamamen YALIN (V1) kalır: 'Let's go', 'Shall we dance'.",
    },
    sideTip: "Kibarca reddederken: 'I'd love to, but I have another commitment.'",
  },

  // =========================================================================
  // LESSON 80: A1 Seviye Sonu Entegrasyonu ve Yeterlilik Değerlendirmesi
  // =========================================================================
  80: {
    title: "A1 Seviye Sonu Entegrasyonu: 8 Temel Sütun Matrisi",
    subtitle: "A1 Seviyesinin Tüm Gramer ve İletişim Yetkinliklerinin Bütünleşik Özeti",
    layoutType: 'comparison_table',
    headers: ["A1 Dil Sütunu", "Anahtar Yapı / Kural", "Model Örnek Cümle", "Kazanılan CEFR Yetkinliği"],
    rows: [
      { col1: "1. Tanışma & Sosyal", col2: "Hello, My name is, Nice to meet you", col3: "Hello, I'm Alex. Nice to meet you, too.", col4: "Kendini tanıtma ve nezaket formülleri" },
      { col1: "2. To Be & Durum", col2: "am / is / are • There is / are", col3: "She is an architect. There is a park nearby.", col4: "Kimlik, meslek ve mekan tasviri" },
      { col1: "3. Geniş Zaman (Simple)", col2: "V1 / V-s • don't / doesn't • do / does", col3: "I usually wake up at 7, but he sleeps late.", col4: "Günlük rutinler ve alışkanlıklar" },
      { col1: "4. Sahiplik", col2: "have / has • possessive 's • my/your/his", col3: "This is Tom's car. He has two children.", col4: "Aile ve kişisel eşya anlatımı" },
      { col1: "5. Soru Üretimi (WH-)", col2: "What, Where, When, Why, How, How much", col3: "Where do you live? How much is this coat?", col4: "Bilgi isteme ve röportaj yapabilme" },
      { col1: "6. Yetenek & İzin (Can)", col2: "can / can't + V1 (yalın)", col3: "I can speak two languages and code in Python.", col4: "Becerileri ifade etme ve rica" },
      { col1: "7. Şimdiki Zaman", col2: "am/is/are + V-ing (now, at the moment)", col3: "We are presenting the project right now.", col4: "Anlık olayları ve fotoğrafları tasvir" },
      { col1: "8. Miktar & Alışveriş", col2: "a/an, some/any, much/many, I'd like", col3: "I would like some water. Are there any apples?", col4: "Restoranda ve markette sipariş verme" },
    ],
    chalkNote: {
      yellowHighlight: "A1 Mezuniyet Eşiği: Bu 8 sütunu hatasız birleştiren bir öğrenci dünyadaki temel tüm günlük ihtiyaçlarını İngilizce karşılayabilir!",
      whiteExplanation: "A2 seviyesinde geçmiş zaman (Past Simple / Past Continuous) ve zaman bağlaçları dünyasına adım atacaksınız.",
    },
    sideTip: "Tebrikler! A1 Başlangıç Seviyesini başarıyla tamamladınız.",
  },
};
