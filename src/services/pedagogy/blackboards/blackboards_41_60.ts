// LinguAAI V8.0 — Bespoke Blackboard Pedagogical Database
// Module 5 & Module 6: Lessons 41 to 60 (CEFR A1)
// 100% Bespoke, topic-authentic chalkboard datasets.

import { TeacherBlackboardData } from '../../../types/lesson';

export const BLACKBOARDS_41_TO_60: Record<number, TeacherBlackboardData> = {
  // =========================================================================
  // LESSON 41: WH- Soruları: What (Ne / Hangi) Kullanımı
  // =========================================================================
  41: {
    title: "WH- Soru Kelimesi: WHAT (Ne / Hangi) ve Soru Dizilimi",
    subtitle: "Nesne, Eylem, Tanım ve Tercih Sorma: What + Yardımcı Fiil + Özne + Fiil",
    layoutType: 'wh_question_table',
    headers: ["Soru Kalıbı", "Hangi Bilgiyi Sorar?", "Örnek Soru Cümlesi", "Model Cevap"],
    rows: [
      { col1: "What is...?", col2: "Tanım / Kimlik / Nesne", highlightCol1: true, col3: "What is your profession?", col4: "I am a software developer." },
      { col1: "What do you...?", col2: "Alışkanlık / Rutin eylem", highlightCol1: true, col3: "What do you do on weekends?", col4: "I usually play basketball." },
      { col1: "What + İsim...?", col2: "Hangi [İsim] (Tercih / Kategori)", highlightCol1: true, col3: "What kind of music do you like?", col4: "I like classical and jazz music." },
      { col1: "What time...?", col2: "Saat kaçta? (Tam saat)", highlightCol1: true, col3: "What time does the lesson start?", col4: "It starts at nine o'clock." },
    ],
    chalkNote: {
      yellowHighlight: "Altın Soru Kuralı: WHAT + YARDIMCI FİİL (do/does/is/are) + ÖZNE + FİİL ?",
      whiteExplanation: "'What you do?' YANLIŞTIR; soru sorarken yardımcı fiil (do/does) öznenin önüne gelmek zorundadır: 'What DO you do?'",
    },
    sideTip: "'What is your job?' ile 'What do you do?' aynı anlama gelir ve mesleğinizi sorar.",
  },

  // =========================================================================
  // LESSON 42: WH- Soruları: Where (Nerede / Nereye) ile Konum Sorma
  // =========================================================================
  42: {
    title: "WH- Soru Kelimesi: WHERE (Nerede / Nereye) ve Mekan Sorma",
    subtitle: "Konum, İkamet, Varış Yeri ve Edatlarla Cevap Verme Düzeni",
    layoutType: 'wh_question_table',
    headers: ["Soru Türü", "İngilizce Soru Kalıbı", "Örnek Cümle", "Edatlı Yanıt"],
    rows: [
      { col1: "Konum Sorma (To Be)", col2: "Where is / are + Özne?", highlightCol1: true, col3: "Where is the nearest subway station?", col4: "It is on Main Street, opposite the bank." },
      { col1: "İkamet & Yaşam", col2: "Where do you live?", highlightCol1: true, col3: "Where do you live in London?", col4: "I live in Kensington." },
      { col1: "Köken / Memleket", col2: "Where are you from?", highlightCol1: true, col3: "Where are your colleagues from?", col4: "They are from Spain and Italy." },
      { col1: "Çalışma Yeri", col2: "Where does he work?", highlightCol1: true, col3: "Where does your brother work?", col4: "He works at a technology firm." },
    ],
    chalkNote: {
      yellowHighlight: "WHERE hem 'Nerede?' (konum) hem de 'Nereye?' (yönelme) anlamına gelir!",
      whiteExplanation: "'Where you live?' YANLIŞ; yardımcı fiil mutlaka özne önüne gelir: 'Where DO you live?'",
    },
    sideTip: "Adres sorarken: 'Excuse me, where is the elevator?' (Affedersiniz, asansör nerede?).",
  },

  // =========================================================================
  // LESSON 43: WH- Soruları: Who (Kim) ve Whose (Kimin) Kullanımı
  // =========================================================================
  43: {
    title: "WH- Soruları: WHO (Kim) ve WHOSE (Kimin) Ayrımı",
    subtitle: "Kişi Kimliği Sorma (Who) vs Aitlik ve Sahiplik Sorgulama (Whose)",
    layoutType: 'wh_question_table',
    headers: ["Soru Kelimesi", "Sorgulanan Unsur", "Cümle Yapısı", "Örnek ve Yanıt"],
    rows: [
      { col1: "WHO (Kim)", col2: "Kişi / Şahıs / Aktör", highlightCol1: true, col3: "Who is that woman over there?", col4: "That is Ms. Clara, our manager." },
      { col1: "WHO (Özne Sorusu)", col2: "Eylemi kim yapıyor?", highlightCol1: true, col3: "Who lives in this large house?", col4: "An old artist lives here. (Do/does kullanılmaz!)" },
      { col1: "WHOSE (Kimin)", col2: "Aitlik / Mülkiyet", highlightCol1: true, col3: "Whose coat is this?", col4: "It's Tom's coat. / It's mine." },
      { col1: "WHOSE + Çoğul", col2: "Kimin nesneleri?", highlightCol1: true, col3: "Whose keys are these?", col4: "They are Sarah's keys." },
    ],
    chalkNote: {
      yellowHighlight: "Kritik Fark: 'WHO' kişi kimliğini sorar; 'WHOSE + İSİM' ise nesnenin sahibini sorar!",
      whiteExplanation: "Büyük Yazım Tuzağı: 'WHO'S' (Who is kısaltmasıdır: 'Who is calling?') ile 'WHOSE' (Kimin: 'Whose bag?') karıştırılmamalıdır!",
    },
    sideTip: "'Whose is this bag?' yerine konuşma dilinde 'Whose bag is this?' kalıbı daha yaygındır.",
  },

  // =========================================================================
  // LESSON 44: WH- Soruları: When (Ne Zaman) ve What Time (Saat Kaçta)
  // =========================================================================
  44: {
    title: "WH- Soruları: WHEN (Ne Zaman) ve WHAT TIME (Saat Kaçta)",
    subtitle: "Genel Tarih/Dönem Sorma (When) ile Dakik Saat Sorma (What time) Farkı",
    layoutType: 'wh_question_table',
    headers: ["Soru Kalıbı", "Zaman Kapsamı", "Örnek Soru", "Doğru Zaman Edatı ile Yanıt"],
    rows: [
      { col1: "WHEN (Genel Zaman)", col2: "Gün, Hafta, Ay, Yıl veya Tarih", highlightCol1: true, col3: "When is your job interview?", col4: "It is on next Tuesday / in September." },
      { col1: "WHAT TIME (Kesin Saat)", col2: "Saat ve Dakika Odaklı", highlightCol1: true, col3: "What time does your train depart?", col4: "It departs AT 14:45." },
      { col1: "Doğum Günü", col2: "When is your birthday?", highlightCol1: true, col3: "When is your birthday?", col4: "It is on 12th May." },
      { col1: "Toplantı Saati", col2: "What time is the meeting?", highlightCol1: true, col3: "What time is the meeting?", col4: "It is at half past three (3:30)." },
    ],
    chalkNote: {
      yellowHighlight: "Tam saat sorulurken 'WHAT TIME', genel bir gün veya tarih sorulurken 'WHEN' tercih edilir!",
      whiteExplanation: "'What time' sorusuna verilen cevapta saatten önce 'AT' edatı zorunludur: 'At 8:00 AM'.",
    },
    sideTip: "Resmi programlarda: 'When does the flight arrive?' (Uçak ne zaman varıyor?).",
  },

  // =========================================================================
  // LESSON 45: WH- Soruları: Why (Neden) ve Because ile Sebep Bildirme
  // =========================================================================
  45: {
    title: "WH- Soru Kelimesi: WHY (Neden) ve BECAUSE (Çünkü) Zinciri",
    subtitle: "Gerekçe ve Sebep Sorgulama: Why Sorularına Mantıklı Cevap Verme",
    layoutType: 'structure_table',
    headers: ["Aşama", "Yapı & Formül", "Örnek Cümle", "Türkçe Anlamı"],
    rows: [
      { col1: "Soru (Why)", col2: "Why + Yardımcı Fiil + Özne + Fiil?", highlightCol1: true, col3: "Why are you learning English?", col4: "Neden İngilizce öğreniyorsun?" },
      { col1: "Cevap (Because)", col2: "Because + Tam Cümle (Özne + Fiil)", highlightCol2: true, col3: "Because I want to work in an international firm.", col4: "Çünkü uluslararası bir şirkette çalışmak istiyorum." },
      { col1: "Durum Sorusu", col2: "Why are you late?", highlightCol1: true, col3: "Why are you late today?", col4: "Bugün neden geç kaldın?" },
      { col1: "Durum Cevabı", col2: "Because the traffic was terrible.", highlightCol2: true, col3: "Because the traffic was very heavy.", col4: "Çünkü trafik çok yoğundu." },
    ],
    chalkNote: {
      yellowHighlight: "WHY sorusunun standart cevabı 'BECAUSE' (Çünkü) ile başlar ve ardından TAM BİR CÜMLE gelir!",
      whiteExplanation: "'Why you are learning?' YANLIŞTIR; soru sırası gereği 'Why ARE you learning?' denmelidir.",
    },
    sideTip: "'Because of' ardından cümle değil isim gelir: 'Because of the rain' (Yağmur yüzünden).",
  },

  // =========================================================================
  // LESSON 46: WH- Soruları: How (Nasıl) ve Durum Sorma
  // =========================================================================
  46: {
    title: "WH- Soru Kelimesi: HOW (Nasıl) ve Ulaşım / Yöntem / Durum",
    subtitle: "Hâl Hatır Sorma, Ulaşım Şekli ve Bir İşin Yapılış Yöntemi",
    layoutType: 'wh_question_table',
    headers: ["Kullanım Amacı", "İngilizce Soru Kalıbı", "Örnek Cümle", "Model Yanıt"],
    rows: [
      { col1: "Hâl / Durum Sorma", col2: "How are you? / How is it going?", highlightCol1: true, col3: "How are you today, David?", col4: "I am doing well, thank you." },
      { col1: "Ulaşım Yolu (By...)", col2: "How do you go to work?", highlightCol1: true, col3: "How do you commute to work?", col4: "I go by train / by metro / on foot (yürüyerek)." },
      { col1: "Yöntem / Çözüm", col2: "How do you spell this word?", highlightCol1: true, col3: "How do you spell your surname?", col4: "It's S-M-I-T-H." },
      { col1: "Makineler / Kullanım", col2: "How does this machine work?", highlightCol1: true, col3: "How does this application work?", col4: "You press this green button." },
    ],
    chalkNote: {
      yellowHighlight: "Ulaşım araçlarında 'BY' edatı kullanılır (by car, by bus, by train); sadece yürüyerek demek için 'ON FOOT' denir!",
      whiteExplanation: "'How you are?' YANLIŞ; 'To be' özne önüne geçer: 'How ARE you?'.",
    },
    sideTip: "'How do you do?' bir soru değildir; ilk kez tanışılan birine söylenen resmi bir 'Merhaba'dır.",
  },

  // =========================================================================
  // LESSON 47: How Often ile Eylem Sıklığı Sorma
  // =========================================================================
  47: {
    title: "HOW OFTEN ile Eylem Sıklığı Sorma ve Yanıt Kalıpları",
    subtitle: "Rutinlerin Ne Sıklıkla Yapıldığını Öğrenme: Once, Twice, Three times...",
    layoutType: 'structure_table',
    headers: ["Sıklık Aralığı", "İngilizce İfade", "Örnek Soru", "Örnek Cevap"],
    rows: [
      { col1: "Günde / Haftada 1 Kez", col2: "ONCE a day / a week / a month", highlightCol2: true, col3: "How often do you go to the gym?", col4: "I go to the gym once a week." },
      { col1: "Günde / Haftada 2 Kez", col2: "TWICE a day / a week / a month", highlightCol2: true, col3: "How often do you check your emails?", col4: "I check my emails twice a day." },
      { col1: "3 ve Daha Fazla", col2: "THREE TIMES / FOUR TIMES a week", highlightCol2: true, col3: "How often does she travel abroad?", col4: "She travels three times a year." },
      { col1: "Her Gün / Her Hafta", col2: "EVERY day / week / Sunday", highlightCol2: true, col3: "How often do you study English?", col4: "I study English every day." },
    ],
    chalkNote: {
      yellowHighlight: "1 kez için 'ONE TIME' değil 'ONCE'; 2 kez için 'TWO TIMES' değil 'TWICE' denir!",
      whiteExplanation: "Soru sırası: HOW OFTEN + DO/DOES + ÖZNE + YALIN FİİL (V1)?",
    },
    sideTip: "Alternatif cevap: 'Never' (hiç), 'Hardly ever' (neredeyse hiç), 'Always' (her zaman).",
  },

  // =========================================================================
  // LESSON 48: How Many ile Sayılabilen Nesne Sayısı Sorma
  // =========================================================================
  48: {
    title: "HOW MANY ile Sayılabilen Nesne Sayısı Sorma",
    subtitle: "Çoğul İsim Uyum Kuralı: How Many + ÇOĞUL İSİM (-s) + Yardımcı Fiil",
    layoutType: 'grammar_table',
    headers: ["Kullanım Türü", "Kalıp Formülü", "Örnek Soru Cümlesi", "Model Yanıt"],
    rows: [
      { col1: "Sahiplik Sayısı", col2: "How many [Çoğul İsim] do you have?", highlightCol1: true, col3: "How many books do you read a month?", col4: "I read two or three books." },
      { col1: "Mevcudiyet Sayısı", col2: "How many [Çoğul İsim] are there...?", highlightCol1: true, col3: "How many rooms are there in the office?", col4: "There are six rooms." },
      { col1: "İnsan Sayısı", col2: "How many people / children...?", highlightCol1: true, col3: "How many people attended the conference?", col4: "Around fifty people." },
      { col1: "Kritik Hata Örneği", col2: "*How many car -> YANLIŞ!", highlightCol2: true, col3: "Doğrusu: How many cars...", col4: "How many ardından gelen isim daima ÇOĞULDUR." },
    ],
    chalkNote: {
      yellowHighlight: "HOW MANY ardından gelen isim MUTLAKA ÇOĞUL (-s) olmak zorundadır! 'How many child' YANLIŞ, 'How many children' DOĞRU!",
      whiteExplanation: "Sayılamayan nesnelerle (su, para, süt) 'How many' kullanılmaz; 'How much' kullanılır.",
    },
    sideTip: "Düzensiz çoğullara dikkat: 'How many languages do you speak?' (Kaç dil konuşuyorsun?).",
  },

  // =========================================================================
  // LESSON 49: How Much ile Fiyat ve Sayılamayan Miktar Sorma
  // =========================================================================
  49: {
    title: "HOW MUCH ile Fiyat ve Sayılamayan Miktar Sorma",
    subtitle: "Fiyat Sorma (is this?) ve Sayılamayan Sıvı/Kütle Miktarı Sorgulama",
    layoutType: 'structure_table',
    headers: ["Soru Amacı", "Kalıp Formülü", "Örnek Soru", "Örnek Cevap"],
    rows: [
      { col1: "Tekil Fiyat Sorma", col2: "How much is this [Nesne]?", highlightCol2: true, col3: "How much is this leather jacket?", col4: "It is forty-five pounds (£45)." },
      { col1: "Çoğul Fiyat Sorma", col2: "How much are these [Nesneler]?", highlightCol2: true, col3: "How much are these brown shoes?", col4: "They are eighty euros (€80)." },
      { col1: "Sayılamayan Miktar", col2: "How much [Sayılamayan İsim] do you...?", highlightCol2: true, col3: "How much water do you drink daily?", col4: "I drink about two liters." },
      { col1: "Para & Zaman", col2: "How much time / money do we need?", highlightCol2: true, col3: "How much time do we have before flight?", col4: "We have two hours." },
    ],
    chalkNote: {
      yellowHighlight: "Fiyat sorarken 'How much IS this...?' (tekil) veya 'How much ARE these...?' (çoğul) denir!",
      whiteExplanation: "Money (para), time (zaman) ve water (su) sayılamaz; bu yüzden 'How many money' KESİNLİKLE YANLIŞTIR, 'How much money' denir.",
    },
    sideTip: "Alışverişte doğrudan nesneyi gösterip: 'How much is it?' (Fiyatı ne kadar?) diyebilirsiniz.",
  },

  // =========================================================================
  // LESSON 50: A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma
  // =========================================================================
  50: {
    title: "A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma",
    subtitle: "Tüm WH- Sorularının (What, Where, When, Why, How, How often) Bütünleşik Kullanımı",
    layoutType: 'wh_question_table',
    headers: ["Röportaj Alanı", "Kullanılan WH- Kalıbı", "Profesyonel Soru Örneği", "Adayın Yanıtı"],
    rows: [
      { col1: "1. Başlangıç & Köken", col2: "Where were you born? / Where are you from?", highlightCol2: true, col3: "Where are you originally from?", col4: "I am originally from Chicago." },
      { col1: "2. Meslek & Rutin", col2: "What do you do every day?", highlightCol2: true, col3: "What does your typical day look like?", col4: "I wake up early and write scripts." },
      { col1: "3. İlham & Neden", col2: "Why do you love this field?", highlightCol2: true, col3: "Why did you choose this career?", col4: "Because I love creative storytelling." },
      { col1: "4. Sıklık & Alışkanlık", col2: "How often do you practice?", highlightCol2: true, col3: "How often do you train every week?", col4: "I train four times a week." },
    ],
    chalkNote: {
      yellowHighlight: "Entegrasyon Kuralı: Röportajda önce genel kişisel sorular (Where/What), ardından derinlemesine neden soruları (Why/How) sorulur!",
      whiteExplanation: "Her soru sorulurken yardımcı fiilin (do/does/is/are) özne önüne yerleşmesine azami dikkat gösterin.",
    },
    sideTip: "Kibar röportaj girişleri: 'Could you tell our audience, where do you live?'",
  },

  // =========================================================================
  // LESSON 51: Yetenek Bildirme: Can ile Olumlu Cümleler
  // =========================================================================
  51: {
    title: "Yetenek Bildirme: CAN ile Olumlu Cümleler",
    subtitle: "Fiziksel ve Zihinsel Beceriler: Özne + CAN + Yalın Fiil (V1)",
    layoutType: 'structure_table',
    headers: ["Özne Grubu", "Modal Fiil", "Ana Fiil (Yalın V1)", "Örnek Cümle"],
    rows: [
      { col1: "I / You / We / They", col2: "CAN", highlightCol2: true, col3: "swim / drive / speak", col4: "I can speak two foreign languages fluently." },
      { col1: "He / She / It (3. Tekil)", col2: "CAN (-s ALMAZ!)", highlightCol2: true, col3: "play / code / solve", col4: "She can play the violin very well. (cans YASAK!)" },
      { col1: "Bare Infinitive Kuralı", col2: "can + to swim -> YANLIŞ!", highlightCol2: true, col3: "can swim (to DÜŞER)", col4: "He can drive a manual transmission car." },
      { col1: "Türkçe Anlam", col2: "-ebilmek / -abilmek", highlightCol2: true, col3: "We can finish this report today.", col4: "Bu raporu bugün bitirebiliriz." },
    ],
    chalkNote: {
      yellowHighlight: "CAN ardından gelen ana fiile ASLA '-s' veya 'to' eklenmez! Fiil en saf yalın hâlinde (V1) kalır!",
      whiteExplanation: "'She cans speak' veya 'She can to speak' BÜYÜK HATADIR; daima 'She can speak' denir.",
    },
    sideTip: "CAN tüm öznelerde (I, you, he, she, it, we, they) tamamen aynı kalır; hiçbir ek almaz.",
  },

  // =========================================================================
  // LESSON 52: Yetersizlik Bildirme: Can't ile Olumsuz Cümleler
  // =========================================================================
  52: {
    title: "Yetersizlik Bildirme: CAN'T ile Olumsuz Cümleler",
    subtitle: "Becerisizlik ve İmkansızlık: Cannot / Can't + Yalın Fiil (V1)",
    layoutType: 'structure_table',
    headers: ["Özne", "Olumsuz Modal", "Ana Fiil", "Örnek Cümle & Telaffuz"],
    rows: [
      { col1: "Tüm Özneler (I, You, She, They)", col2: "can't (/kænt/ veya /kɑːnt/)", highlightCol2: true, col3: "swim", col4: "I can't swim in deep water." },
      { col1: "Resmi Tam Yazılış", col2: "cannot (Bitişik yazılır!)", highlightCol2: true, col3: "attend", col4: "The director cannot attend the meeting." },
      { col1: "Kritik Dil Kuralı", col2: "can't + V1 (yalın)", highlightCol2: true, col3: "drive", col4: "He can't drive yet; he is fifteen." },
      { col1: "Fonetik Vurgu", col2: "Can't kelimesine sert basılır", highlightCol2: true, col3: "Vurgu kuralı", col4: "I CAN'T hear you clearly. (Vurgu can't üzerindedir)" },
    ],
    chalkNote: {
      yellowHighlight: "Resmi İngilizcede 'can not' ayrı değil, tek kelime olarak 'CANNOT' şeklinde bitişik yazılır!",
      whiteExplanation: "Amerikan telaffuzunda /kænt/, İngiliz telaffuzunda ise kalın /kɑːnt/ sesi duyulur.",
    },
    sideTip: "Telefonda ses gelmiyorsa: 'I can't hear you, could you speak louder?'",
  },

  // =========================================================================
  // LESSON 53: Yetenek Sorma: Can you...? ve Kısa Cevaplar
  // =========================================================================
  53: {
    title: "Yetenek Sorma: CAN YOU...? ve Kısa Cevaplar",
    subtitle: "Devrik Soru Yapısı ve Net Evet/Hayır Yanıt Protokolü",
    layoutType: 'grammar_table',
    headers: ["Soru Kalıbı", "Örnek Soru Cümlesi", "Olumlu Kısa Yanıt", "Olumsuz Kısa Yanıt"],
    rows: [
      { col1: "Can you...?", col2: "Can you swim across the river?", highlightCol1: true, col3: "Yes, I can.", col4: "No, I can't." },
      { col1: "Can he / she...?", col2: "Can she speak German fluently?", highlightCol1: true, col3: "Yes, she can.", col4: "No, she can't." },
      { col1: "Can they...?", col2: "Can they solve this coding problem?", highlightCol1: true, col3: "Yes, they can.", col4: "No, they can't." },
      { col1: "WH- + Can", col2: "What sports can you play?", highlightCol1: true, col3: "I can play tennis and basketball.", col4: "WH- kelimesi can'in önüne gelir." },
    ],
    chalkNote: {
      yellowHighlight: "Soru sorarken CAN cümlenin en başına geçer: CAN + ÖZNE + YALIN FİİL (V1)?",
      whiteExplanation: "Kısa cevapta 'Yes, I can' yeterlidir; ana fiili tekrar söylemeye gerek yoktur ('Yes, I can swim' yerine).",
    },
    sideTip: "Mülakatta soruya yanıt verirken: 'Yes, I can, and I have three years of experience.'",
  },

  // =========================================================================
  // LESSON 54: İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları
  // =========================================================================
  54: {
    title: "İzin İsteme: CAN I...? ve MAY I...? Nezaket Dereceleri",
    subtitle: "Samimi Arkadaş Ortamından Resmi Protokole İzin İsteme Skalası",
    layoutType: 'structure_table',
    headers: ["Nezaket Düzeyi", "Kullanılan Modal", "Örnek İzin Cümlesi", "Doğru Yanıt Formülü"],
    rows: [
      { col1: "Günlük / Samimi (Standard)", col2: "CAN I + V1...?", highlightCol2: true, col3: "Can I use your charger for a moment?", col4: "Sure, go ahead! / Of course." },
      { col1: "Kibar / Nazik (Polite)", col2: "COULD I + V1...?", highlightCol2: true, col3: "Could I leave thirty minutes early today?", col4: "Yes, of course you can." },
      { col1: "En Resmi / Protokol (Formal)", col2: "MAY I + V1...?", highlightCol2: true, col3: "May I ask a question, Mr. Chairman?", col4: "Yes, you may. / Please do." },
      { col1: "Alternatif İzin", col2: "Do you mind if I + V1...?", highlightCol2: true, col3: "Do you mind if I open the window?", col4: "No, not at all. (Açabilirsin)" },
    ],
    chalkNote: {
      yellowHighlight: "Öğretmene, müşteriye veya yöneticiye hitap ederken 'CAN I' yerine 'COULD I' veya 'MAY I' tercih edilir!",
      whiteExplanation: "'May I' asla olumsuz izin cevabında kabalaşmaz; cevap 'Yes, you may' veya 'I'm afraid you can't' şeklindedir.",
    },
    sideTip: "Bir odaya girerken kapıyı çalıp: 'May I come in?' (Girebilir miyim?) demek evrensel nezakettir.",
  },

  // =========================================================================
  // LESSON 55: Rica Etme: Can you help me? / Could you please...?
  // =========================================================================
  55: {
    title: "Rica Etme ve Yardım İsteme Formülleri",
    subtitle: "Can you...? -> Could you...? -> Would you mind...? Nezaket Hiyerarşisi",
    layoutType: 'structure_table',
    headers: ["Rica Düzeyi", "Kalıp Formülü", "Örnek Cümle", "Kibar Karşılık"],
    rows: [
      { col1: "Temel Rica", col2: "Can you [V1]...?", highlightCol2: true, col3: "Can you pass me the salt, please?", col4: "Sure! Here you are." },
      { col1: "Daha Kibar Rica", col2: "Could you please [V1]...?", highlightCol2: true, col3: "Could you please send me the final report?", col4: "Certainly, I'll send it now." },
      { col1: "Zarif / Hassas Rica", col2: "Would you mind + V-ING...?", highlightCol2: true, col3: "Would you mind closing the door?", col4: "Not at all! (Memnuniyetle kapatırım)" },
      { col1: "Yardım İsteme", col2: "Can you help me with [Nesne]?", highlightCol2: true, col3: "Could you help me with this heavy suitcase?", col4: "Of course! Let me take it." },
    ],
    chalkNote: {
      yellowHighlight: "'Would you mind' kalıbından sonra fiil '-ing' takısı alır: 'Would you mind helpING me?'",
      whiteExplanation: "'Would you mind' sorusuna 'sakıncası yok, yardım ederim' demek için 'NO, NOT AT ALL' denir!",
    },
    sideTip: "E-posta yazışmalarında: 'Could you please confirm receipt of this email?'",
  },

  // =========================================================================
  // LESSON 56: Duyusal Algı Fiilleriyle Can Kullanımı (See, Hear, Smell)
  // =========================================================================
  56: {
    title: "Duyusal Algı Fiilleriyle CAN Kullanımı (See, Hear, Smell, Taste)",
    subtitle: "İngilizcede 5 Duyu Fiilinin -ing Almak Yerine CAN ile İfade Edilmesi",
    layoutType: 'grammar_table',
    headers: ["Duyu Organı", "Duyu Fiili", "CAN ile Cümle", "Türkçe Anlamı (Şu anki algı)"],
    rows: [
      { col1: "Göz (Görme)", col2: "see (görmek)", highlightCol2: true, col3: "I can see a ship in the distance.", col4: "Uzakta bir gemi görüyorum (I am seeing YANLIŞ)." },
      { col1: "Kulak (İşitme)", col2: "hear (duymak)", highlightCol2: true, col3: "Can you hear that strange noise outside?", col4: "Dışarıdaki o garip sesi duyabiliyor musun?" },
      { col1: "Burun (Koku alma)", col2: "smell (kokusunu almak)", highlightCol2: true, col3: "I can smell fresh coffee in the kitchen.", col4: "Mutfaktan taze kahve kokusu alıyorum." },
      { col1: "Dil (Tat alma)", col2: "taste (tadını almak)", highlightCol2: true, col3: "I can taste lemon in this dressing.", col4: "Bu sosun içinde limon tadı alıyorum." },
    ],
    chalkNote: {
      yellowHighlight: "Türkçede 'görüyorum/duyuyorum' şimdiki zaman söylenir; İngilizcede ise 'I CAN SEE / I CAN HEAR' denir!",
      whiteExplanation: "Duyu fiilleri algı anında '-ing' almaz; 'I am hearing you' YANLIŞTIR, 'I can hear you' DOĞRUDUR.",
    },
    sideTip: "Telefonda ses kesildiğinde: 'Can you hear me now?' (Şu an beni duyabiliyor musun?).",
  },

  // =========================================================================
  // LESSON 57: Sporlar ve Aktiviteler: Play, Go, Do Kullanım Matrisi
  // =========================================================================
  57: {
    title: "Sporlar ve Aktiviteler: PLAY, GO, DO Kullanım Matrisi",
    subtitle: "Toplu/Takım Sporları (Play), -ing ile Bitenler (Go) ve Bireysel/Dövüş (Do)",
    layoutType: 'grammar_table',
    headers: ["Eylem Fiili", "Hangi Tür Aktivitelerle?", "Örnek Sporlar", "Model Cümle"],
    rows: [
      { col1: "PLAY", col2: "Topla oynanan sporlar ve rekabetçi takım oyunları", highlightCol1: true, col3: "football, basketball, tennis, chess, golf", col4: "We play football every Saturday morning." },
      { col1: "GO", col2: "-ing ile biten ve mekan değiştiren aktiviteler", highlightCol1: true, col3: "swimming, running, cycling, skiing, fishing", col4: "She goes swimming twice a week." },
      { col1: "DO", col2: "Bireysel sporlar, dövüş sanatları ve salonsal egzersizler", highlightCol1: true, col3: "yoga, judo, karate, aerobics, gymnastics", col4: "I do yoga in the morning to relax." },
      { col1: "İstisna Uyarısı", col2: "boxing bir dövüş sporudur", highlightCol2: true, col3: "do boxing  (veya go boxing)", col4: "'Play boxing' KESİNLİKLE YANLIŞTIR." },
    ],
    chalkNote: {
      yellowHighlight: "Toplu sporlarda PLAY, -ing ile bitenlerde GO, bireysel salonsal sporlarda DO kullanılır!",
      whiteExplanation: "'Play swimming' veya 'Do football' BÜYÜK HATADIR; sporun mekanik türüne göre fiil seçilmelidir.",
    },
    sideTip: "Masa oyunları ve satranç için de PLAY kullanılır: 'play chess', 'play board games'.",
  },

  // =========================================================================
  // LESSON 58: Müzik Aletleri ve Beceriler (play the piano)
  // =========================================================================
  58: {
    title: "Müzik Aletleri ve Beceriler: 'PLAY THE [Enstrüman]' Kuralı",
    subtitle: "Sporlarda 'the' Kullanılmazken Müzik Aletlerinde 'THE' Belirteci Zorunluluğu",
    layoutType: 'structure_table',
    headers: ["Alan", "Kural & Formül", "Örnek İfade", "Doğru vs Yanlış Karşılaştırması"],
    rows: [
      { col1: "Müzik Enstrümanı", col2: "play + THE + Enstrüman", highlightCol2: true, col3: "play the guitar / play the piano", col4: "She plays the piano. ('plays piano' EKSİK!)" },
      { col1: "Üflemeli / Yaylı", col2: "play the flute / play the violin", highlightCol2: true, col3: "play the drums / play the cello", col4: "He can play the electric guitar." },
      { col1: "Spor Karşılaştırması", col2: "Sporlarda 'the' ASLA kullanılmaz", highlightCol2: true, col3: "play football (play the football YASAK)", col4: "Müzikte THE var, sporda THE YOK!" },
      { col1: "Yetenek Cümlesi", col2: "Can you play the [Enstrüman]?", highlightCol2: true, col3: "Can you play any musical instruments?", col4: "I can play the acoustic guitar." },
    ],
    chalkNote: {
      yellowHighlight: "Altın Karşılaştırma: Müzik aletinde 'THE' ŞART (play the piano), sporda 'THE' YASAK (play tennis)!",
      whiteExplanation: "İngilizcede bir enstrümanı çalabilmek bir sanat formu olduğundan türü belirten 'the' ile nitelenir.",
    },
    sideTip: "Enstrümana sahip olmayı söylerken 'a' kullanılır: 'I have a guitar, but I can't play the guitar.'",
  },

  // =========================================================================
  // LESSON 59: Becerileri Derecelendirme (Very well, Quite well, A little bit)
  // =========================================================================
  59: {
    title: "Becerileri Derecelendirme (Skill Adverbs & Modifiers)",
    subtitle: "Akıcılık ve Yetenek Seviyesini Zarflarla Net Olarak İfade Etme Skalası",
    layoutType: 'structure_table',
    headers: ["Yetenek Derecesi", "Kullanılan Derece Zarfı", "Cümledeki Yeri", "Örnek Cümle"],
    rows: [
      { col1: "Mükemmel / Anadili Gibi", col2: "fluently (akıcı bir şekilde)", highlightCol2: true, col3: "Cümlenin en sonunda", col4: "She speaks French and Spanish fluently." },
      { col1: "Çok İyi", col2: "very well (çok iyi)", highlightCol2: true, col3: "Cümlenin en sonunda", col4: "He can code in Python very well." },
      { col1: "Oldukça İyi / Fena Değil", col2: "quite well / pretty well", highlightCol2: true, col3: "Cümlenin en sonunda", col4: "I can understand spoken English quite well." },
      { col1: "Biraz / Başlangıç", col2: "a little bit / a little", highlightCol2: true, col3: "Cümle sonunda veya nesne önünde", col4: "I can speak a little bit of German." },
      { col1: "Hiç / Sıfır Beceri", col2: "not ... at all (hiç mi hiç)", highlightCol2: true, col3: "Olumsuz cümle sonunda", col4: "I can't cook Italian food at all." },
    ],
    chalkNote: {
      yellowHighlight: "Derecelendirme zarfları cümlenin en sonuna yerleştirilir: 'I can speak English VERY WELL'!",
      whiteExplanation: "'Very well' sıfat değil zarftır; fiilin nasıl yapıldığını belirtir ('very good' yerine 'very well' denir).",
    },
    sideTip: "Mülakatta tevazu ve netlik: 'I speak English quite well, and I am learning rapidly.'",
  },

  // =========================================================================
  // LESSON 60: A1 Modül 6 Entegrasyonu: İş İlanı Başvurusunda Becerileri Sunma
  // =========================================================================
  60: {
    title: "A1 Modül 6 Entegrasyonu: İş Başvurusunda Becerileri Sunma",
    subtitle: "Can, Modal Fiiller ve Derece Zarflarının Profesyonel CV/Mülakat Uyarlaması",
    layoutType: 'syntax_diagram',
    syntaxBlocks: {
      formula: "ÖZNE + CAN + YALIN FİİL + NESNE + DERECE ZARFI",
      components: [
        { label: "1. Aday / Özne", code: "I", role: "Başvuran profesyonel", color: 'white' },
        { label: "2. Yetenek Modalı", code: "can / am able to", role: "Yetkinlik beyanı", color: 'yellow' },
        { label: "3. Eylem Fiili", code: "manage / analyze / communicate", role: "Profesyonel beceri", color: 'white' },
        { label: "4. Derecelendirme", code: "fluently / very well / effectively", role: "Yetkinlik düzeyi", color: 'yellow' },
      ],
      exampleEn: "I can analyze financial data and communicate with clients very well.",
      exampleTr: "Finansal verileri analiz edebilir ve müşterilerle çok iyi iletişim kurabilirim.",
      breakdownNote: "Yetenek (can analyze) + Nesne (financial data) + Derece (very well).",
    },
    chalkNote: {
      yellowHighlight: "Mülakat Altın Kuralı: Becerilerinizi sıralarken sadece 'I can do it' demeyin; derece zarfıyla destekleyin!",
      whiteExplanation: "İki beceriyi bağlarken 'and' bağlacını kullanın: 'I can speak English fluently AND I can use Excel.'",
    },
    sideTip: "Zayıf olunan alanları kibarca söyleme: 'I can't speak French yet, but I am taking lessons.'",
  },
};
