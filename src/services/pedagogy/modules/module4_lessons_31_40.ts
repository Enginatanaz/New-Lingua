// LinguAAI Pedagogical Content — Level A1: Module 4 (Lessons 31–40)
// Nesneler, Sahiplik ve Niteleme
// 100% bespoke, CEFR A1 compliant, zero generic templates.

import { TopicBlueprint } from '../../pedagogicalEngine';

export const module4_lessons_31_40: Record<number, TopicBlueprint> = {
  // -------------------------------------------------------------------------
  // LESSON 31: İşaret Sıfatları: This & That (Yakın ve Uzak Tekiller)
  // -------------------------------------------------------------------------
  31: {
    skillType: 'grammar',
    concreteCompetency: "Tekil nesneleri ve durumları fiziksel veya zamansal mesafelerine göre ayırt edebilmek; elinizin altında/yakındaki tekil nesneler için 'THIS', uzaktaki tekil nesneler için 'THAT' sözcüklerini 'is' fiiliyle hatasız kullanabilmek.",
    whyItMatters: "Bir mağazada vitrindeki bir nesneyi işaret ederken ('Şu kazağı istiyorum'), elinizdeki bir şeyi tanıtırken ('Bu benim yeni telefonum') veya telefonda kendinizi tanıtırken ('This is John speaking') temel işaret sıfatları kullanılır.",
    linguisticLogic: "İngilizcede işaret sözcükleri (Demonstratives) iki temel boyutta çalışır: Mesafe (Yakın vs Uzak) ve Sayı (Tekil vs Çoğul). Tekil nesnelerde: 1) Konuşucuya fiziksel ya da zamansal olarak YAKIN olanlar için 'THIS' (Bu) kullanılır: 'This is my bag'. 2) Konuşucudan UZAKTA olan, parmakla işaret edilen veya geçmişte/uzakta kalanlar için 'THAT' (Şu / O) kullanılır: 'That is his car'. Her iki kelime de tekil olduğu için 'IS' fiiliyle birleşir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: 'THIS' — Yakındaki Tekil Varlık (Bu)",
        content: "Dokunabileceğiniz, elinizde tuttuğunuz veya hemen önünüzde duran tekil bir varlığı gösterirken 'THIS' kullanılır. Formül: 'This is a / an [İsim]' veya doğrudan isimden önce: 'This book is interesting.'",
        formula: "THIS is a/an [Tekil İsim]  |  THIS + [Tekil İsim] + is + Sıfat",
        keyPhrase: "This is my new passport.  |  This coffee is delicious.",
        subPoints: [
          "Telaffuz: 'This' kelimesinde 'th' peltek 'd' sesidir (/ðɪs/), sesli harf ise kısa 'i'dir.",
          "Zaman yakınlığı: 'this week' (bu hafta), 'this morning' (bu sabah)."
        ],
        rationale: "Yakınlık hissinin fiziksel ve zamansal algısını oturtmak esastır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: 'THAT' — Uzaktaki Tekil Varlık (Şu / O)",
        content: "Uzanıp dokunamadığınız, parmakla işaret ettiğiniz veya karşınızda uzakta duran tekil bir nesne için 'THAT' kullanılır. Formül: 'That is a / an [İsim]' veya 'That car is fast.'",
        formula: "THAT is a/an [Tekil İsim]  |  THAT + [Tekil İsim] + is + Sıfat",
        keyPhrase: "That is our manager's office.  |  That building is very old.",
        subPoints: [
          "Konuşma dilinde kısaltması çok yaygındır: That is -> That's (/ðæts/). 'That's right!' (Aynen öyle / Doğru!).",
          "Ancak 'This is' asla *This's diye kısaltılamaz!"
        ],
        rationale: "Uzaklık kavramı ve kısaltma kurallarının ayrımı konuşma doğallığını sağlar."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Telefonda ve Tanıştırmada Özel Kullanımlar",
        content: "İngilizcede telefonda konuşurken 'Ben Ali'yim' demek için *I am Ali denmez; 'This is Ali' (Arayan benim) denir! Karşı tarafa 'Sen kimsin?' derken ise 'Who is that?' denir. Birini yanınızdakiyle tanıştırırken de: 'David, this is Sarah' denir.",
        formula: "Telefonda kendini tanıtma: THIS is [İsim]  |  Karşı tarafı sorma: Who is THAT?",
        keyPhrase: "Hello, this is Mark speaking.  |  Alex, this is my colleague Elena.",
        subPoints: [
          "Telefonda asla *I am Mark denmez; 'This is Mark' kalıptır.",
          "Tanıştırmada 'He is Sarah' denmez; 'This is Sarah' denir."
        ],
        rationale: "Sosyal ve kurumsal telefon adabının küresel standardı budur."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "That's Kısaltması vs This Kısaltma Yasağı",
        formula: "That is = That's (DOĞRU)  |  This is = *This's (BÖYLE BİR KISALTMA YOKTUR)",
        explanation: "'That is' günlük dilde 'That's' olarak kısalabilir. Ancak 'This' zaten 's' ile bittiği için yanına kesmeyle bir 's' daha eklenemez; daima 'This is' olarak tam yazılır.",
        exampleSnippet: "That's a brilliant idea!  |  This is my laptop.",
        tipNote: "This is kalıbını asla kısaltmayın."
      },
      {
        ruleTitle: "İşaret Sıfatı vs İşaret Zamiri",
        formula: "Zamir: This is my car (This tek başına)  |  Sıfat: This car is mine (This ismin önünde)",
        explanation: "'This' tek başına özne olabilir ('This is good') ya da bir ismin önüne gelerek onu işaret edebilir ('This laptop is expensive').",
        exampleSnippet: "That woman is our department director.",
        cautionNote: "İki kullanım da tamamen doğrudur."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Telefonda: Hello, I am David from IT.",
        correctExample: "Hello, this is David from IT.",
        rootCause: "Türkçe 'Ben David' ifadesini doğrudan 'I am David' olarak telefona taşımak.",
        memoryTip: "Telefonda 'Ben' değil, 'THIS IS...' denir: This is David speaking!"
      },
      {
        wrongExample: "This's a very nice present.",
        correctExample: "This is a very nice present.",
        rootCause: "That's kısaltmasını yanlışlıkla This'e de uyarlamaya çalışmak.",
        memoryTip: "That kısalır (That's), This kısalmaz (This is)!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Elektronik Mağazasında Ürün İnceleme",
      description: "Bir müşterinin mağaza görevlisiyle tezgahtaki ve vitrindeki tabletleri karşılaştırması.",
      contextType: "social",
      dialogue: [
        { speaker: "Customer", textEn: "Excuse me, how much is this tablet on the counter?", textTr: "Affedersiniz, tezgahtaki bu tablet ne kadar?" },
        { speaker: "Assistant", textEn: "This tablet is three hundred pounds. It is our newest model.", textTr: "Bu tablet üç yüz sterlin. Bizim en yeni modelimizdir." },
        { speaker: "Customer", textEn: "And what about that one on the top shelf, behind the glass?", textTr: "Peki ya camın arkasındaki, üst raftaki şu tablet?" },
        { speaker: "Assistant", textEn: "That is an older model, so that is only two hundred pounds.", textTr: "O daha eski bir model, bu yüzden o sadece iki yüz sterlin." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "This (Yakın)",
      conceptB: "That (Uzak)",
      keyDifference: "'This' elinizi uzatıp dokunabildiğiniz veya hemen yakınınızdaki tekil varlıktır. 'That' ise parmağınızla işaret ettiğiniz, karşınızda veya uzakta duran tekil varlıktır.",
      exampleA: "This coffee is hot. (Elimdeki fincan)",
      exampleB: "That car across the street is fast. (Karşı kaldırımdaki araba)"
    },
    memoryHook: "İşaret Kancası: Elindeyse THIS (Bu), uzaktaysa THAT (Şu/O)! Telefonda kendini tanıtırken daima THIS IS!",
    examples: [
      {
        en: "This is my personal laptop, but that computer on the desk belongs to the company.",
        tr: "Bu benim kişisel dizüstü bilgisayarımdır, ancak masadaki şu bilgisayar şirkete aittir.",
        highlightedWords: ["This is", "that computer"],
        grammarCategory: "Yakın ve Uzak Tekil Karşılaştırması",
        contextNote: "Eşyaların mülkiyetini ayırt etme.",
        breakdownNote: "This is (yakın) + but + that computer (uzak)."
      },
      {
        en: "Hello, this is Dr. Watson speaking from the central clinic.",
        tr: "Merhaba, merkez klinikten Dr. Watson konuşuyor.",
        highlightedWords: ["this is Dr. Watson speaking"],
        grammarCategory: "Telefonda Kendini Tanıtma",
        contextNote: "Resmi telefon görüşmesi açılışı.",
        breakdownNote: "This is + isim + speaking + yer edatı."
      },
      {
        en: "That is a very reasonable price for such a high-quality leather jacket.",
        tr: "Böylesine kaliteli bir deri ceket için şu çok makul bir fiyattır.",
        highlightedWords: ["That is a very reasonable price"],
        grammarCategory: "Durum ve Fiyat Yorumlama",
        contextNote: "Alışverişte karar anı.",
        breakdownNote: "That is + sıfat tamlaması (a very reasonable price)."
      }
    ],
    vocabulary: [
      { word: "Near", phonetic: "/nɪər/", partOfSpeech: "preposition", meaningTr: "Yakınında, yanında", exampleSentence: "The cafe is near my house." },
      { word: "Far", phonetic: "/fɑːr/", partOfSpeech: "adverb", meaningTr: "Uzak, uzakta", exampleSentence: "The airport is far from the city." },
      { word: "Model", phonetic: "/ˈmɒd.əl/", partOfSpeech: "noun", meaningTr: "Model, örnek", exampleSentence: "This is the latest phone model." },
      { word: "Counter", phonetic: "/ˈkaʊn.tər/", partOfSpeech: "noun", meaningTr: "Tezgah, banko", exampleSentence: "Leave the documents on the counter." }
    ],
    quickCheck: {
      question: "Telefonda bir müşteri temsilcisine 'Merhaba, ben Londra ofisinden Sarah' demek isteyen biri cümleye nasıl başlamalıdır?",
      options: [
        "Hello, this is Sarah from the London office.",
        "Hello, I am Sarah from the London office.",
        "Hello, that is Sarah from the London office.",
        "Hello, here is Sarah from the London office."
      ],
      correctIndex: 0,
      explanation: "İngilizcede telefonda kendini tanıtırken 'This is [İsim]' kalıbı kullanılır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun işaret sözcüğünü yerleştirin:",
      sentence: "Look at ___ red sports car across the street; it looks fantastic!",
      options: ["that", "this", "these", "those"],
      correctAnswer: "that",
      hint: "Caddenin karşı tarafındaki (uzaktaki) tek bir arabayı işaret ediyoruz.",
      explanation: "Uzaktaki tekil nesneleri işaret ederken 'that' kullanılır: 'that red sports car across the street'."
    },
    sentenceBuilder: {
      promptTr: "Bu benim yeni telefonum ve şu masadaki eski cihazdır.",
      targetEn: "This is my new phone and that is the old device on the desk",
      availableWords: ["This", "is", "my", "new", "phone", "and", "that", "is", "the", "old", "device", "on", "the", "desk", "these", "are"],
      explanation: "Yakın tekil (This is my new phone) + bağlaç (and) + uzak tekil (that is the old device on the desk)."
    },
    summaryTakeaways: [
      "Yakındaki tekil nesneler için 'THIS', uzaktaki tekil nesneler için 'THAT' kullanılır.",
      "'That is' sözlü dilde 'That's' olarak kısalabilir; ancak 'This is' asla kısaltılamaz.",
      "Telefonda kendini tanıtırken veya yanındakini tanıştırırken 'This is...' kalıbı esastır."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 32: İşaret Sıfatları: These & Those (Yakın ve Uzak Çoğullar)
  // -------------------------------------------------------------------------
  32: {
    skillType: 'grammar',
    concreteCompetency: "Çoğul nesneleri mesafelerine göre ayırt edebilmek; yakındaki çoğul nesneler için 'THESE', uzaktaki çoğul nesneler için 'THOSE' sözcüklerini 'ARE' fiiliyle hatasız kullanabilmek, 'this' (/ðɪs/) ile 'these' (/ðiːz/) arasındaki kritik fonetik telaffuz farkını uygulayabilmek.",
    whyItMatters: "Birden fazla nesneyi gösterirken ('Bu anahtarlar benim', 'Şu ayakkabılar çok pahalı', 'Bu belgeleri imzalayın') tekil-çoğul uyumunu sağlamak temel dilbilgisinin omurgasıdır.",
    linguisticLogic: "'This' kelimesinin çoğulu 'THESE' (Bunlar), 'That' kelimesinin çoğulu ise 'THOSE' (Şunlar / Onlar) kelimesidir. Bu kelimeler çoğul varlıkları işaret ettiği için arkalarından gelen fiil 'IS' değil, 'ARE' olmak ZORUNDADIR. En büyük telaffuz tuzağı: 'This' (/ðɪs/ - kısa i, s ile biter) ile 'These' (/ðiːz/ - uzun ii, z ile biter) ayrımıdır.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: 'THESE' — Yakındaki Çoğul Varlıklar (Bunlar)",
        content: "Elinizde tuttuğunuz veya hemen önünüzde duran birden fazla nesne için 'THESE' (/ðiːz/) kullanılır. Çoğul olduğu için arkasından 'ARE' gelir ve nesne çoğul eki (-s) alır: 'These are my keys.'",
        formula: "THESE are + [Çoğul İsim]  |  THESE + [Çoğul İsim] + are + Sıfat",
        keyPhrase: "These are our project files.  |  These shoes are very comfortable.",
        subPoints: [
          "Tekil 'this' -> Çoğul 'these'.",
          "İsim mutlaka çoğul olmalıdır: 'These books are heavy' (*These book YANLIŞTIR)."
        ],
        rationale: "Yakındaki çoğul varlıkların dilbilgisel ve fonetik standardıdır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: 'THOSE' — Uzaktaki Çoğul Varlıklar (Şunlar / Onlar)",
        content: "Uzaktaki, parmakla gösterdiğiniz birden fazla nesne veya insan için 'THOSE' (/ðəʊz/) kullanılır. Formül: 'Those are + [Çoğul İsim]' veya 'Those cars are fast.'",
        formula: "THOSE are + [Çoğul İsim]  |  THOSE + [Çoğul İsim] + are + Sıfat",
        keyPhrase: "Those are luxury apartments.  |  Those trees in the park are ancient.",
        subPoints: [
          "Tekil 'that' -> Çoğul 'those'.",
          "Telaffuz: /ðəʊz/ (Dooz - 'z' sesiyle biter)."
        ],
        rationale: "Uzaktaki çoğul nesnelerin mekansal işaret refleksidir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Kritik Fonetik Ayrım: THIS (/ðɪs/) vs THESE (/ðiːz/)",
        content: "Türk öğrencilerin en çok zorlandığı ayrım: 'This' kelimesinde 'i' sesi kısa ve kapalıdır, son harfi 's' olarak biter (/ðɪs/). 'These' kelimesinde ise 'e' harfleri uzun 'ii' sesi verir ve sonu 'z' sesiyle biter (/ðiːz/). Kulak bu farkı duyduğunda tekil mi çoğul mu olduğunu anında anlar.",
        formula: "Tekil: THIS = /ðɪs/ (kısa i, 's' sesi)  |  Çoğul: THESE = /ðiːz/ (uzun ii, 'z' sesi)",
        keyPhrase: "This book (/ðɪs/) vs These books (/ðiːz/).",
        subPoints: [
          "'This' derken dudaklar daha gevşektir, 'These' derken gülümser gibi yanlara açılır.",
          "Fiil uyumu: This IS vs These ARE."
        ],
        rationale: "Fonetik farkı kavramak dinleme ve konuşma sınavlarında hata yapılmasını önler."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Çoğul Uyumu Zorunluluğu",
        formula: "These ARE books (DOĞRU)  |  *These is books (AĞIR HATA!)  |  *These are book (HATA!)",
        explanation: "'These' ve 'Those' kelimeleri çoğul bir paket oluşturur: İşaret sözcüğü çoğuldur, fiil çoğuldur (are) ve isim çoğuldur (-s). Biri bile tekil kalamaz.",
        exampleSnippet: "Those documents are ready for signature.",
        cautionNote: "These veya Those arkasından tekil isim getirmeyin!"
      },
      {
        ruleTitle: "Dörtlü İşaret Matrisi",
        formula: "Yakın Tekil: THIS  |  Uzak Tekil: THAT\nYakın Çoğul: THESE  |  Uzak Çoğul: THOSE",
        explanation: "İngilizcenin 4 işaret kelimesi bu ikiye iki matristen ibarettir: Tekil-yakın (This), Tekil-uzak (That), Çoğul-yakın (These), Çoğul-uzak (Those).",
        exampleSnippet: "This is my pen, that is your pen. These are my notes, those are your notes.",
        tipNote: "Bu dört kelimeyi mesafelerine göre zihninizde gruplayın."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "These car are very expensive.",
        correctExample: "These cars are very expensive.",
        rootCause: "'These' sözcüğünden sonraki isme çoğul '-s' takısını takmayı unutmak.",
        memoryTip: "These çoğuldur, isme de 'S' tak: THESE CARS!"
      },
      {
        wrongExample: "Those is our new project partners.",
        correctExample: "Those are our new project partners.",
        rootCause: "'Those' sözcüğünden sonra tekil fiil 'is' kullanmak.",
        memoryTip: "Those çoğuldur, daima ARE alır: THOSE ARE!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Havalimanı Güvenlik Kontrolünde Eşyaları Ayırma",
      description: "Güvenlik görevlisinin yolcunun tepsisindeki ve çantasındaki eşyaları işaret ederek yönlendirmesi.",
      contextType: "travel",
      dialogue: [
        { speaker: "Officer", textEn: "Please place these electronic devices in the grey tray.", textTr: "Lütfen (elinizdeki) bu elektronik cihazları gri tepsiye yerleştirin." },
        { speaker: "Passenger", textEn: "Should I take off these leather shoes as well?", textTr: "Bu deri ayakkabıları da çıkarmalı mıyım?" },
        { speaker: "Officer", textEn: "No, keep them on. But put those metal keys and that watch in the basket.", textTr: "Hayır, kalsın. Ancak (uzaktaki masada duran) şu metal anahtarları ve şu saati sepete koyun." },
        { speaker: "Passenger", textEn: "Understood. Are these liquids permitted?", textTr: "Anlaşıldı. Bu sıvılar serbest mi?" }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "These (Yakın Çoğul)",
      conceptB: "Those (Uzak Çoğul)",
      keyDifference: "'These' konuşmacının hemen yanında, masasında veya elinde tuttuğu birden fazla nesnedir. 'Those' ise uzakta, rafta veya karşı tarafta duran birden fazla nesnedir.",
      exampleA: "These pens in my hand are blue.",
      exampleB: "Those cars in the parking lot are red."
    },
    memoryHook: "Çoğul Şifresi: Yakındaysa 'THESE ARE' (/ðiːz ɑːr/), uzaktaysa 'THOSE ARE' (/ðəʊz ɑːr/)! İsme de mutlaka -S tak!",
    examples: [
      {
        en: "These financial reports are ready, but those contracts over there need urgent review.",
        tr: "Bu finansal raporlar hazır, ancak şuradaki şu sözleşmelerin acil incelenmesi gerekiyor.",
        highlightedWords: ["These financial reports are", "those contracts over there"],
        grammarCategory: "Yakın ve Uzak Çoğul",
        contextNote: "Ofis belgelerini karşılaştırma.",
        breakdownNote: "These + çoğul isim + are + but + those + çoğul isim."
      },
      {
        en: "Are these your luggage bags on the conveyor belt, sir? - Yes, they are.",
        tr: "Banttaki bu bagaj çantaları sizin mi efendim? - Evet, onlar benim.",
        highlightedWords: ["Are these your luggage bags"],
        grammarCategory: "Çoğul İşaret Sorusu",
        contextNote: "Havalimanı bagaj alım alanı.",
        breakdownNote: "Are these + çoğul isim -> Yes, they are."
      },
      {
        en: "Those mountains in the distance are covered with snow throughout the winter.",
        tr: "Uzaktaki o dağlar kış boyunca karla kaplıdır.",
        highlightedWords: ["Those mountains in the distance"],
        grammarCategory: "Uzak Çoğul Manzara",
        contextNote: "Doğa tasviri.",
        breakdownNote: "Those + çoğul isim (mountains) + in the distance + are."
      }
    ],
    vocabulary: [
      { word: "Device", phonetic: "/dɪˈvaɪs/", partOfSpeech: "noun", meaningTr: "Cihaz, aygıt", exampleSentence: "These electronic devices are useful." },
      { word: "Contract", phonetic: "/ˈkɒn.trækt/", partOfSpeech: "noun", meaningTr: "Sözleşme, kontrat", exampleSentence: "Sign these contracts, please." },
      { word: "Distance", phonetic: "/ˈdɪs.təns/", partOfSpeech: "noun", meaningTr: "Mesafe, uzaklık", exampleSentence: "Those lights in the distance are bright." },
      { word: "Tray", phonetic: "/treɪ/", partOfSpeech: "noun", meaningTr: "Tepsi", exampleSentence: "Put your keys in this tray." }
    ],
    quickCheck: {
      question: "'Masadaki bu anahtarlar çok eskidir' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "These keys on the desk are very old.",
        "This keys on the desk are very old.",
        "These key on the desk is very old.",
        "Those keys on the desk is very old."
      ],
      correctIndex: 0,
      explanation: "Yakındaki çoğul anahtarlar için 'These' sözcüğü, 'keys' çoğul ismi ve 'are' çoğul fiili kullanılır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun seçeneği yerleştirin:",
      sentence: "Look at ___ beautiful paintings on the far wall of the art gallery.",
      options: ["those", "these", "this", "that"],
      correctAnswer: "those",
      hint: "Uzak duvardaki (far wall) çoğul tablolardan (paintings) bahsediliyor.",
      explanation: "Uzaktaki çoğul nesneleri işaret etmek için 'those' kullanılır: 'those beautiful paintings'."
    },
    sentenceBuilder: {
      promptTr: "Bu belgeler çok önemlidir ve şu kitaplar kütüphaneye aittir.",
      targetEn: "These documents are very important and those books belong to the library",
      availableWords: ["These", "documents", "are", "very", "important", "and", "those", "books", "belong", "to", "the", "library", "this", "that"],
      explanation: "Yakın çoğul (These documents are very important) + bağlaç (and) + uzak çoğul (those books belong to the library)."
    },
    summaryTakeaways: [
      "Yakındaki çoğullar için 'THESE', uzaktaki çoğullar için 'THOSE' kullanılır.",
      "These ve Those kelimeleriyle daima çoğul isimler ve 'ARE' fiili kullanılır (These cars are...).",
      "This (/ðɪs/) tekil ve kısa sesli iken, These (/ðiːz/) çoğul, uzun sesli ve 'z' ile biter."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 33: Düzenli Çoğul İsimler (-s, -es, -ies) ve Yazım Kuralları
  // -------------------------------------------------------------------------
  33: {
    skillType: 'grammar',
    concreteCompetency: "İngilizcede düzenli isimleri çoğul yaparken kelimenin son sesine göre doğru takıyı (-s, -es, -ies, -ves) seçebilmek, yazım kurallarını ve fonetik telaffuzları (/s/, /z/, /ɪz/) hatasız uygulayabilmek.",
    whyItMatters: "Bir restoranda sipariş verirken, otelde oda ayırtırken veya eşyalarınızı sayarken isimlerin çoğul biçimlerini doğru yazmak ve telaffuz etmek temel okuryazarlık gereksinimidir.",
    linguisticLogic: "İngilizcede düzenli isimlerin çoğulu Türkçedeki '-ler/-lar' gibi tek bir ekle değil, kelimenin sonundaki harflerin fonetik uyumuna göre dört farklı imla kuralıyla yapılır: 1) Genel kural: Doğrudan '-s' eklenir (book -> books, car -> cars). 2) Tıslayan seslerle (-s, -ss, -sh, -ch, -x, -z) bitenlere '-es' eklenir (bus -> buses, watch -> watches). 3) Sessiz harf + y ile bitenlerde 'y' düşer, '-ies' gelir (city -> cities, baby -> babies). 4) -f veya -fe ile biten bazı isimlerde 'f' yumuşar, '-ves' olur (leaf -> leaves, knife -> knives).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Genel Kural (-s) ve Tıslayan Sesler (-es)",
        content: "İsimlerin %90'ı doğrudan '-s' alarak çoğul olur: pen -> pens, apple -> apples, dog -> dogs. Ancak kelime -s, -ss, -sh, -ch, -x ile bitiyorsa, peş peşe tıslama sesi çıkarılamayacağı için araya /ɪ/ sesi girer ve '-es' yazılır: bus -> buses, glass -> glasses, dish -> dishes, watch -> watches, box -> boxes.",
        formula: "Genel: + S (cars, books)  |  -s, -ss, -sh, -ch, -x sonu: + ES (buses, watches, boxes)",
        keyPhrase: "two watches  |  three boxes  |  four glasses",
        subPoints: [
          "-es takısı /ɪz/ (iz) olarak net bir hece şeklinde okunur: watch-iz, box-iz.",
          "-o ile biten bazı isimler de -es alır: potato -> potatoes, tomato -> tomatoes."
        ],
        rationale: "Fonetik olarak iki sessiz ıslık sesinin yan yana gelememesi -es kuralını doğurur."
      },
      {
        stepNumber: 2,
        title: "2. Adım: '-y' ile Bitenler: -ies vs -s Ayrımı",
        content: "Eğer kelime SESSİZ harf + 'y' ile bitiyorsa 'y' harfi düşer ve '-ies' eklenir: city -> cities, country -> countries, dictionary -> dictionaries, party -> parties. Ancak SESLİ harf + 'y' ile bitiyorsa hiçbir şey düşmez, sadece '-s' eklenir: boy -> boys, key -> keys, day -> days.",
        formula: "Sessiz + Y = -IES (city -> cities)  |  Sesli + Y = -S (day -> days, key -> keys)",
        keyPhrase: "many cities  |  all countries  |  two keys",
        subPoints: [
          "Key -> keys (çünkü e seslidir, *keies OLMAZ).",
          "Baby -> babies (b sessizdir, y düşer -ies gelir)."
        ],
        rationale: "İngilizce imla tarihinin en katı sesli-sessiz ayrım kurallarından biridir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: '-f' ve '-fe' Sonu: '-ves' Değişimi",
        content: "-f veya -fe ile biten bir grup yaygın isimde sert 'f' sesi çoğulda yumuşayarak 'v' sesine dönüşür ve '-ves' olarak yazılır: knife -> knives (bıçaklar), leaf -> leaves (yapraklar), shelf -> shelves (raflar), wife -> wives (eşler), life -> lives (hayatlar).",
        formula: "-f / -fe ile bitenler -> VES (shelf -> shelves, knife -> knives)",
        keyPhrase: "sharp knives  |  wooden shelves  |  autumn leaves",
        subPoints: [
          "İstisnalar: roof -> roofs (çatılar), chef -> chefs (şefler) - bunlar doğrudan -s alır.",
          "Telaffuzda 'v' sesi belirgindir: /naɪvz/, /ʃelvz/."
        ],
        rationale: "Germenik ses yumuşaması (f -> v) kuralı dildeki akıcılığı sağlar."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "City vs Key İmla Ayrımı",
        formula: "Sessiz + Y = CITIES (y düşer)  |  Sesli + Y = KEYS (y düşmez)",
        explanation: "'y' harfinden önceki harfe bakın: Eğer harf sessizse (t, r, b...) 'y' düşer ve -ies olur (cities, countries). Eğer sesli bir harfse (e, a, o...) doğrudan -s gelir (keys, days, boys).",
        exampleSnippet: "We visited five countries and three big cities.",
        cautionNote: "Asla *keies veya *citys yazmayın!"
      },
      {
        ruleTitle: "-es Telaffuz Kuralı: /ɪz/",
        formula: "buses = /bʌs.ɪz/  |  watches = /wɒtʃ.ɪz/  |  boxes = /bɒks.ɪz/",
        explanation: "-es alan kelimelerde son hece fazladan bir 'iz' sesi üretir. Tek heceli 'watch' çoğul olunca iki heceli 'watch-iz' haline gelir.",
        exampleSnippet: "I have two luxury watches.",
        tipNote: "Son hecedeki /ɪz/ sesini net duyurun."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "There are many countrys in Europe.",
        correctExample: "There are many countries in Europe.",
        rootCause: "Sessiz + y kuralını unutup doğrudan 's' eklemek.",
        memoryTip: "Country sessizle biter; 'y' uçar, -IES gelir: COUNTRIES!"
      },
      {
        wrongExample: "Put the books on the shelfs.",
        correctExample: "Put the books on the shelves.",
        rootCause: "Shelf kelimesinin -ves ile çoğul yapıldığını unutmak.",
        memoryTip: "F sesi yumuşar: Shelf -> SHELVES!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Kütüphanede Kitap ve Raf Düzeni",
      description: "Bir üniversite kütüphanesinde kütüphanecinin yeni gelen sözlükleri ve kitapları raflara yerleştirmesi.",
      contextType: "academic",
      dialogue: [
        { speaker: "Student", textEn: "Excuse me, where are the bilingual dictionaries?", textTr: "Affedersiniz, iki dilli sözlükler nerede?" },
        { speaker: "Librarian", textEn: "They are on the wooden shelves in room 4, next to the encyclopedias.", textTr: "4 numaralı odadaki ahşap raflarda (shelves), ansiklopedilerin yanındalar." },
        { speaker: "Student", textEn: "And are these study boxes available for students?", textTr: "Peki bu çalışma kabinleri (study boxes) öğrenciler için müsait mi?" },
        { speaker: "Librarian", textEn: "Yes, you can use any of those private boxes for your research.", textTr: "Evet, araştırmanız için o özel kabinlerin (boxes) herhangi birini kullanabilirsiniz." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Çoğul Eki (-ler / -lar)",
      conceptB: "İngilizce Düzenli Çoğullar (-s, -es, -ies, -ves)",
      keyDifference: "Türkçe sadece sesli uyumuna göre '-ler' ya da '-lar' eklerken; İngilizce kelimenin sonundaki sessize göre imlayı değiştirir (y düşer -ies olur, f düşer -ves olur).",
      exampleA: "Şehir-ler / Kutu-lar / Bıçak-lar",
      exampleB: "Cities (-ies) / Boxes (-es) / Knives (-ves)"
    },
    memoryHook: "Çoğul Formülü: Normalde S ekle! Tıslarsa ES ekle! Sessiz+Y varsa IES yap! F ile biterse VES yap!",
    examples: [
      {
        en: "Our company exports organic dried fruits to twenty different countries.",
        tr: "Şirketimiz yirmi farklı ülkeye organik kurutulmuş meyveler ihraç eder.",
        highlightedWords: ["fruits", "different countries"],
        grammarCategory: "-s ve -ies Çoğulları",
        contextNote: "Uluslararası ticaret verisi.",
        breakdownNote: "fruit -> fruits (-s) + country -> countries (-ies)."
      },
      {
        en: "Please pack the fragile ceramic dishes and glasses into these padded boxes.",
        tr: "Lütfen kırılgan seramik tabakları ve bardakları bu korumalı kutulara paketleyin.",
        highlightedWords: ["dishes", "glasses", "boxes"],
        grammarCategory: "-es Çoğul İmlası",
        contextNote: "Taşınma ve paketleme yönergesi.",
        breakdownNote: "dish -> dishes (-sh) + glass -> glasses (-ss) + box -> boxes (-x)."
      },
      {
        en: "Autumn is here, and colorful leaves are falling from the trees onto the pathways.",
        tr: "Sonbahar geldi ve renkli yapraklar ağaçlardan patikalara dökülüyor.",
        highlightedWords: ["leaves", "trees", "pathways"],
        grammarCategory: "-ves ve Düzenli Çoğullar",
        contextNote: "Mevsimsel doğa tasviri.",
        breakdownNote: "leaf -> leaves (-ves) + tree -> trees (-s) + pathway -> pathways (-s)."
      }
    ],
    vocabulary: [
      { word: "Dictionary", phonetic: "/ˈdɪk.ʃən.ər.i/", partOfSpeech: "noun", meaningTr: "Sözlük (çoğulu: dictionaries)", exampleSentence: "We have five English dictionaries." },
      { word: "Knife", phonetic: "/naɪf/", partOfSpeech: "noun", meaningTr: "Bıçak (çoğulu: knives)", exampleSentence: "Keep sharp knives away from children." },
      { word: "Leaf", phonetic: "/liːf/", partOfSpeech: "noun", meaningTr: "Yaprak (çoğulu: leaves)", exampleSentence: "Leaves turn yellow in autumn." },
      { word: "Shelf", phonetic: "/ʃelf/", partOfSpeech: "noun", meaningTr: "Raf (çoğulu: shelves)", exampleSentence: "Put the files on the top shelves." }
    ],
    quickCheck: {
      question: "'City' (Şehir) ve 'Shelf' (Raf) kelimelerinin doğru çoğul yazılışları hangi seçenektir?",
      options: [
        "cities / shelves",
        "citys / shelfs",
        "cities / shelfs",
        "cityes / shelves"
      ],
      correctIndex: 0,
      explanation: "'City' sessiz+y ile bittiği için 'cities', 'shelf' ise -f ile bittiği için 'shelves' olur."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun çoğul ismi yerleştirin:",
      sentence: "The movers carefully packed all the crystal ___ into wooden crates.",
      options: ["glasses", "glass", "glasss", "glassies"],
      correctAnswer: "glasses",
      hint: "'glass' kelimesi -ss ile biter. Tıslayan seslere hangi çoğul eki gelir?",
      explanation: "-ss ile biten isimler '-es' eki alarak çoğul yapılır: 'glasses'."
    },
    sentenceBuilder: {
      promptTr: "Kütüphaneci yeni sözlükleri ahşap raflara yerleştirir.",
      targetEn: "The librarian puts the new dictionaries on the wooden shelves",
      availableWords: ["The", "librarian", "puts", "the", "new", "dictionaries", "on", "the", "wooden", "shelves", "dictionarys", "shelfs", "is"],
      explanation: "Özne (The librarian) + fiil (puts) + çoğul nesne 1 (the new dictionaries) + yer (on the wooden shelves)."
    },
    summaryTakeaways: [
      "İsimlerin çoğunda doğrudan '-s' eklenir (books, cars).",
      "-s, -ss, -sh, -ch, -x ile bitenler '-es' alır ve /ɪz/ okunur (watches, boxes).",
      "Sessiz + y ile bitenlerde 'y' düşer, '-ies' gelir (cities); -f/-fe ile bitenlerde 'v'ye döner ve '-ves' olur (knives, shelves)."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 34: Düzensiz Çoğul İsimler (Men, women, children, people)
  // -------------------------------------------------------------------------
  34: {
    skillType: 'grammar',
    concreteCompetency: "İngilizcedeki en yaygın düzensiz çoğul isimleri (man->men, woman->women, child->children, person->people, tooth->teeth, foot->feet, mouse->mice, fish->fish) ve bu isimlerin sonuna ASLA '-s' takısı eklenmeyeceğini, fiil uyumunun çoğul (ARE / HAVE / V1) olduğunu hatasız uygulayabilmek.",
    whyItMatters: "'Peoples' veya 'mans' demek İngilizce seviyesini anında zedeleyen en kaba hatalardır. Bu temel düzensiz isimleri refleks olarak doğru kullanmak akıcılığın şartıdır.",
    linguisticLogic: "İngilizce tarihi boyunca Germenik iç ses değişimi (Umlaut) yaşayan bazı kök isimler, çoğul yapılırken sonlarına '-s' almazlar; kelimenin içindeki sesli harf değişir veya özel bir ek alır. En önemli kural: Bu kelimeler ZATEN KENDİ İÇİNDE ÇOĞULDUR. Bu yüzden sonlarına tekrar '-s' takılmaz (*peoples, *childrens YANLIŞTIR) ve fiilleri daima ÇOĞUL çekimlenir ('People ARE friendly', 'Children LIKE games').",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: İnsan Odaklı Düzensiz Çoğullar",
        content: "En sık kullanılan insan çoğulları: Man (/mæn/) -> MEN (/men/), Woman (/ˈwʊm.ən/) -> WOMEN (/ˈwɪm.ɪn/ - ilk hece 'vi' diye okunur!), Child (/tʃaɪld/) -> CHILDREN (/ˈtʃɪl.drən/), Person (/ˈpɜː.sən/) -> PEOPLE (/ˈpiː.pəl/).",
        formula: "1 man -> 2 men  |  1 woman -> 2 women  |  1 child -> 2 children  |  1 person -> 2 people",
        keyPhrase: "There are three men and four women in the conference room.",
        subPoints: [
          "'Women' kelimesinin telaffuzuna dikkat edin: 'Vimin' (/ˈwɪm.ɪn/).",
          "'People' kelimesi zaten çoğuldur; 'people are' denir, asla 'peoples' denmez (uluslar/halklar anlamı hariç)."
        ],
        rationale: "Toplumsal ve insani iletişimde bu dört kelime her gün kullanılır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Vücut ve Hayvan Düzensiz Çoğulları",
        content: "İç ses değişimi yaşayan vücut uzuvları ve hayvanlar: Tooth (diş) -> TEETH (dişler), Foot (ayak) -> FEET (ayaklar), Mouse (fare) -> MICE (fareler), Goose (kaz) -> GEESE (kazlar). Değişmeyenler: 1 Sheep -> 2 SHEEP (koyun), 1 Fish -> 2 FISH (balık).",
        formula: "tooth -> teeth  |  foot -> feet  |  mouse -> mice  |  fish -> fish",
        keyPhrase: "Brush your teeth.  |  My feet are tired.  |  There are five fish in the tank.",
        subPoints: [
          "'oo' sesleri 'ee'ye dönüşür: foot -> feet, tooth -> teeth.",
          "'fish' kelimesinin çoğulu da 'fish'tir (*fishes çok özel tür çeşitliliği hariç kullanılmaz)."
        ],
        rationale: "Vücut ve doğa kelimelerinde kuralsız kalıpları ezberlemek zorunludur."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Fiil Uyumu: Bu Kelimeler ÇOĞUL Fiil Alır!",
        content: "Bu kelimelerin sonunda '-s' olmaması öğrencileri yanıltıp tekil sanmalarına yol açar. Oysa bu kelimelerin hepsi ÇOĞULDUR. Bu yüzden daima 'ARE', 'WERE', 'HAVE' ve yalın fiil alırlar: 'People are kind' (*People is YANLIŞTIR), 'Children play' (*Children plays YANLIŞTIR).",
        formula: "People / Children / Men / Women + ARE / HAVE / YALIN FİİL",
        keyPhrase: "People are very helpful here.  |  The children have new toys.",
        subPoints: [
          "People IS friendly -> AĞIR HATA! Doğrusu: People ARE friendly.",
          "Children NEEDS help -> HATA! Doğrusu: Children NEED help."
        ],
        rationale: "Özne-yüklem uyumunu korumak gramer bütünlüğünün temelidir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Düzensiz Çoğula Asla -s Eklenmez!",
        formula: "people (DOĞRU)  |  *peoples (AĞIR HATA!)  |  children (DOĞRU)  |  *childrens (HATA!)",
        explanation: "'People' zaten 'kişiler/insanlar' demektir. 'Children' zaten 'çocuklar' demektir. Bu kelimelerin sonuna tekrar -s takmak Türkçede 'insanlarlar' veya 'çocuklarlar' demek kadar anlamsızdır.",
        exampleSnippet: "Many people work in this building.",
        cautionNote: "Asla 'peoples' veya 'childrens' demeyin!"
      },
      {
        ruleTitle: "People = ÇOĞULDUR (ARE)",
        formula: "People ARE (DOĞRU)  |  *People is (AĞIR HATA!)",
        explanation: "Türkçe 'İnsanlar iyi-dir' (tekil ek) dese de, İngilizcede 'people' öznesi 'They' zamirine denktir ve daima çoğul fiil alır.",
        exampleSnippet: "People in this town are very welcoming.",
        tipNote: "People kelimesini görünce fiili çoğul (are/have/do) yapın."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Many peoples is waiting outside.",
        correctExample: "Many people are waiting outside.",
        rootCause: "Hem kelimeye gereksiz -s takmak hem de fiili tekil 'is' yapmak.",
        memoryTip: "People zaten çoğuldur; -s almaz ve ARE ile kullanılır: PEOPLE ARE!"
      },
      {
        wrongExample: "My foots hurt after walking.",
        correctExample: "My feet hurt after walking.",
        rootCause: "'Foot' kelimesini düzenli sanıp sonuna -s eklemek.",
        memoryTip: "Ayaklar kuralsızdır: Foot -> FEET!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Halk Kütüphanesinde Aile Etkinliği",
      description: "Şehir kütüphanesinde hafta sonu düzenlenen aile okuma etkinliğinde görevlinin katılımcı sayısını bildirmesi.",
      contextType: "social",
      dialogue: [
        { speaker: "Coordinator", textEn: "How many people are there in the reading hall today?", textTr: "Bugün okuma salonunda kaç kişi (people) var?" },
        { speaker: "Assistant", textEn: "There are about fifty people. Most of them are women and young children.", textTr: "Yaklaşık elli kişi var. Çoğu kadınlar (women) ve küçük çocuklar (children)." },
        { speaker: "Coordinator", textEn: "Are the children enjoying the story session?", textTr: "Çocuklar masal seansından keyif alıyorlar mı?" },
        { speaker: "Assistant", textEn: "Yes, they are very happy. They love the animal books.", textTr: "Evet, çok mutlular. Hayvan kitaplarına bayılıyorlar." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe 'İnsanlar' (Tekil Fiil Alabilir)",
      conceptB: "İngilizce 'People' (Zorunlu Çoğul Fiil)",
      keyDifference: "Türkçede 'İnsanlar bekliyor' derken fiil tekil (-yor) kalabilir. İngilizcede ise 'people' öznesi istisnasız çoğul fiil gerektirir ('People are waiting').",
      exampleA: "İnsanlar bekliyor. (Tekil fiil)",
      exampleB: "People are waiting. (Çoğul fiil)"
    },
    memoryHook: "Düzensizler Kulübü: Man->Men, Woman->Women, Child->Children, Person->People! Zaten çoğuldurlar, -s almazlar, ARE ile coşarlar!",
    examples: [
      {
        en: "Many young people in this country speak at least two foreign languages fluently.",
        tr: "Bu ülkedeki birçok genç insan en az iki yabancı dili akıcı şekilde konuşur.",
        highlightedWords: ["young people", "speak"],
        grammarCategory: "Düzensiz Çoğul Özne ve Fiil",
        contextNote: "Toplumsal yetenek tespiti.",
        breakdownNote: "Çoğul özne (Many young people) + çoğul yalın fiil (speak - speaks değil!)."
      },
      {
        en: "The dentist checks my teeth every six months to prevent dental decay.",
        tr: "Diş hekimi diş çürümesini önlemek için her altı ayda bir dişlerimi kontrol eder.",
        highlightedWords: ["my teeth"],
        grammarCategory: "Düzensiz Vücut Uzvu Çoğulu",
        contextNote: "Diş muayenesi.",
        breakdownNote: "tooth -> teeth (çoğul nesne)."
      },
      {
        en: "Children need safe outdoor spaces to play and develop their social skills.",
        tr: "Çocuklar oynamak ve sosyal becerilerini geliştirmek için güvenli açık alanlara ihtiyaç duyarlar.",
        highlightedWords: ["Children need"],
        grammarCategory: "Çoğul Özne Uyum Kuralı",
        contextNote: "Çocuk gelişimi ilkesi.",
        breakdownNote: "child -> children (çoğul) + need (çoğul fiil - needs değil!)."
      }
    ],
    vocabulary: [
      { word: "Person", phonetic: "/ˈpɜː.sən/", partOfSpeech: "noun", meaningTr: "Kişi, birey (çoğulu: people)", exampleSentence: "She is a wonderful person." },
      { word: "Child", phonetic: "/tʃaɪld/", partOfSpeech: "noun", meaningTr: "Çocuk (çoğulu: children)", exampleSentence: "Every child deserves education." },
      { word: "Tooth", phonetic: "/tuːθ/", partOfSpeech: "noun", meaningTr: "Diş (çoğulu: teeth)", exampleSentence: "He has a painful tooth." },
      { word: "Foot", phonetic: "/fʊt/", partOfSpeech: "noun", meaningTr: "Ayak (çoğulu: feet)", exampleSentence: "My feet hurt after running." }
    ],
    quickCheck: {
      question: "'Bu şehirdeki insanlar çok misafirperverdir' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "People in this city are very hospitable.",
        "People in this city is very hospitable.",
        "Peoples in this city are very hospitable.",
        "Persons in this city is very hospitable."
      ],
      correctIndex: 0,
      explanation: "'People' kelimesi sonuna -s almaz ve daima çoğul fiil olan 'are' ile kullanılır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun seçeneği yerleştirin:",
      sentence: "All the ___ in the kindergarten are listening enthusiastically to the fairy tale.",
      options: ["children", "childs", "childrens", "child"],
      correctAnswer: "children",
      hint: "'Child' kelimesinin kuralsız çoğulu hangisidir?",
      explanation: "'Child' kelimesinin çoğulu 'children'dır; asla sonuna -s almaz."
    },
    sentenceBuilder: {
      promptTr: "Birçok insan kütüphanede çalışıyor ve çocuklar sessizce kitap okuyor.",
      targetEn: "Many people work in the library and children read books quietly",
      availableWords: ["Many", "people", "work", "in", "the", "library", "and", "children", "read", "books", "quietly", "peoples", "works"],
      explanation: "Özne 1 (Many people work in the library) + bağlaç (and) + özne 2 (children read books quietly)."
    },
    summaryTakeaways: [
      "Man->Men, Woman->Women, Child->Children, Person->People düzensiz çoğul isimlerdir.",
      "Bu kelimeler kendi içinde çoğul olduğu için sonlarına ASLA '-s' takısı eklenmez (*peoples denmez).",
      "Bu öznelerle fiil daima ÇOĞUL çekimlenir (People are, Children like)."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 35: İyelik Sıfatları: My, Your, His, Her, Its, Our, Their
  // -------------------------------------------------------------------------
  35: {
    skillType: 'grammar',
    concreteCompetency: "İngilizcede sahiplik bildiren iyelik sıfatlarını (Possessive Adjectives: my, your, his, her, its, our, their) doğru şahıs ve cinsiyet ayrımıyla, daima bir ismin önünde ve 'its' ile 'it's' ayrımını kusursuz yaparak kullanabilmek.",
    whyItMatters: "Kişisel eşyalarınızı ('Benim pasaportum'), ailenizi ('Onun kız kardeşi') veya şirketinizi ('Bizim ofisimiz') tanımlamak sahip olma sıfatlarıyla gerçekleşir.",
    linguisticLogic: "İngilizcede İyelik Sıfatları (Possessive Adjectives) tek başlarına duramazlar; mutlaka arkalarından bir İSİM gelmek zorundadır (my car, her job, their house). Üçüncü tekil şahısta sahiplik sahibin cinsiyetine göre belirlenir: Erkek sahibi için 'HIS' (onun), kadın sahibi için 'HER' (onun), cansız/hayvan için 'ITS' (onun). En büyük imla tuzağı: 'ITS' (iyelik sıfatı: onun) ile 'IT'S' (it is kısaltması: o ...dır) arasındaki kesme işareti ayrımıdır.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Şahıs Zamirinden İyelik Sıfatına Dönüşüm Tablosu",
        content: "Her kişi zamirinin kendine özgü bir sahiplik sıfatı vardır: I -> MY (benim), You -> YOUR (senin/sizin), He -> HIS (onun - erkek), She -> HER (onun - kadın), It -> ITS (onun - cansız/hayvan), We -> OUR (bizim), They -> THEIR (onların).",
        formula: "I->MY | YOU->YOUR | HE->HIS | SHE->HER | IT->ITS | WE->OUR | THEY->THEIR",
        keyPhrase: "my passport  |  your coat  |  his brother  |  her car  |  our team  |  their house",
        subPoints: [
          "İyelik sıfatları tek başına kalamaz: *This is my YANLIŞTIR; 'This is my bag' DOĞRUDUR.",
          "İsim çoğul olsa bile iyelik sıfatı değişmez: my book, my books."
        ],
        rationale: "Şahısların sahiplik formlarıyla birebir eşleştirilmesi temel sistemdir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: 3. Tekil Şahıs Cinsiyet Ayrımı: HIS vs HER vs ITS",
        content: "Türkçede tek bir 'onun' varken İngilizcede sahibin cinsiyeti belirleyicidir: Eğer sahip erkekse 'HIS' (David's car -> his car). Sahip kadınsa 'HER' (Mary's phone -> her phone). Sahip bir şirket, ülke, nesne veya hayvansa 'ITS' (The company and its products -> şirketin ürünleri).",
        formula: "Erkek sahibi: HIS [İsim]  |  Kadın sahibi: HER [İsim]  |  Cansız/Hayvan: ITS [İsim]",
        keyPhrase: "Alex is with his sister.  |  Elena drives her new car.  |  The dog ate its food.",
        subPoints: [
          "Önemli olan nesnenin değil, SAHİBİN cinsiyetidir: David'in annesi -> 'HIS mother' (anne kadın olsa da sahip erkektir!).",
          "Mary'nin babası -> 'HER father'."
        ],
        rationale: "Sahibin cinsiyetine odaklanma kuralı Türk öğrenciler için kritik bir eşiktir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Hayati İmla Tuzağı: ITS vs IT'S",
        content: "İngilizce yazımda en çok yapılan hata: 'ITS' (kesmesiz) = 'onun' anlamına gelen iyelik sıfatıdır ('The cat licked its paws'). 'IT'S' (kesmeli) ise 'It is' veya 'It has' ifadesinin kısaltmasıdır ('It's raining' = Hava yağıyor).",
        formula: "ITS (Kesmesiz) = Sahiplik (Onun)  |  IT'S (Kesmeli) = It is (O ...dır)",
        keyPhrase: "The hotel changed its name.  |  It's a very nice hotel.",
        subPoints: [
          "Asla sahiplik sıfatına kesme işareti koymayın: *The dog hurt it's leg YANLIŞTIR!",
          "Doğrusu: 'The dog hurt its leg.'"
        ],
        rationale: "Kesme işareti ayrımı resmi yazışmalarda ve sınavlarda puan kaybettiren temel unsurdur."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Sahibin Cinsiyeti Kuralı",
        formula: "Erkek sahibi = HIS (his mother, his car)  |  Kadın sahibi = HER (her father, her bag)",
        explanation: "Sahiplik sıfatı sahip olunan nesneye değil, sahip olan kişiye bakar. Bir erkeğin annesinden bahsederken anne kadın diye 'her' denmez; sahip erkek olduğu için 'HIS mother' denir.",
        exampleSnippet: "David loves his mother.  |  Sarah loves her father.",
        cautionNote: "Sahip kimse ona göre His veya Her seçin!"
      },
      {
        ruleTitle: "ITS (Onun) vs IT'S (O ...dır)",
        formula: "ITS = Sahiplik (its colour, its price)  |  IT'S = It is kısaltması (It's cold, It's new)",
        explanation: "Eğer cümlenizde 'It is' diyebiliyorsanız kesmeli 'it's' yazın. Eğer 'onun' anlamındaysa kesmesiz 'its' yazın.",
        exampleSnippet: "The company increased its revenue because it's very innovative.",
        tipNote: "Yerine 'it is' koyarak test edin."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "David is with her wife at the restaurant.",
        correctExample: "David is with his wife at the restaurant.",
        rootCause: "Eşi kadın olduğu için 'her' seçmek; David'in erkek olduğunu unutmak.",
        memoryTip: "Sahip erkektir (David), o halde: HIS wife!"
      },
      {
        wrongExample: "The cat lost it's collar.",
        correctExample: "The cat lost its collar.",
        rootCause: "Sahiplik sıfatına yanlışlıkla kesme işareti koymak.",
        memoryTip: "Sahiplik 'its' kesmesizdir; kesme işareti sadece 'it is' içindir!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Havalimanında Kayıp Bagaj Formu Doldurma",
      description: "Kayıp eşya bürosunda yolcunun kendi ve ailesinin valizlerini görevliye tarif etmesi.",
      contextType: "travel",
      dialogue: [
        { speaker: "Officer", textEn: "Could you describe your missing luggage, please?", textTr: "Kayıp bagajınızı tarif edebilir misiniz lütfen?" },
        { speaker: "Passenger", textEn: "Yes. My suitcase is large and black. Its handle is red.", textTr: "Evet. Benim bavulum büyük ve siyahtır. Onun kulpu (its handle) kırmızıdır." },
        { speaker: "Officer", textEn: "And what about your wife's bag?", textTr: "Peki ya eşinizin çantası?" },
        { speaker: "Passenger", textEn: "Her bag is small and brown. Her name is on the luggage tag.", textTr: "Onun çantası (her bag) küçük ve kahverengidir. Bagaj etiketinde onun adı yazıyor." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Kişi Zamiri (Subject Pronoun)",
      conceptB: "İyelik Sıfatı (Possessive Adjective)",
      keyDifference: "Kişi zamiri cümlenin öznesidir ve tek başına fiille kullanılır ('I work'). İyelik sıfatı ise tek başına duramaz, mutlaka bir ismin önüne yapışır ('My office is big').",
      exampleA: "She is a lawyer. (Özne)",
      exampleB: "Her office is in London. (İyelik Sıfatı + İsim)"
    },
    memoryHook: "İyelik Aynası: Ben->MY, Sen->YOUR, Erkek->HIS, Kadın->HER, Cansız->ITS (kesmesiz!), Biz->OUR, Onlar->THEIR! Yanına mutlaka İSİM alırlar!",
    examples: [
      {
        en: "Our company opened its new branch in Berlin last week.",
        tr: "Şirketimiz geçen hafta Berlin'de yeni şubesini açtı.",
        highlightedWords: ["Our company", "its new branch"],
        grammarCategory: "Kurumsal Sahiplik (our & its)",
        contextNote: "Şirketin mülkiyeti ve şubesi.",
        breakdownNote: "Our company (bizim şirketimiz) + its new branch (onun yeni şubesi - kesmesiz!)."
      },
      {
        en: "David is washing his car while Sarah is cleaning her bicycle.",
        tr: "Sarah bisikletini temizlerken David arabasını yıkıyor.",
        highlightedWords: ["his car", "her bicycle"],
        grammarCategory: "His ve Her Ayrımı",
        contextNote: "Cinsiyete göre sahiplik sıfatı kullanımı.",
        breakdownNote: "Erkek sahibi -> his car; Kadın sahibi -> her bicycle."
      },
      {
        en: "Their children attend a prestigious international school in Geneva.",
        tr: "Onların çocukları Cenevre'de prestijli bir uluslararası okula gidiyor.",
        highlightedWords: ["Their children"],
        grammarCategory: "Çoğul Sahiplik",
        contextNote: "Aile ve eğitim.",
        breakdownNote: "Their (onların) + çoğul isim (children)."
      }
    ],
    vocabulary: [
      { word: "Suitcase", phonetic: "/ˈsuːt.keɪs/", partOfSpeech: "noun", meaningTr: "Bavul, valiz", exampleSentence: "My suitcase is very heavy." },
      { word: "Luggage", phonetic: "/ˈlʌɡ.ɪdʒ/", partOfSpeech: "noun", meaningTr: "Bagaj (sayılamaz!)", exampleSentence: "Keep your luggage with you." },
      { word: "Colleague", phonetic: "/ˈkɒl.iːɡ/", partOfSpeech: "noun", meaningTr: "İş arkadaşı, meslektaş", exampleSentence: "His colleagues are very helpful." },
      { word: "Belong", phonetic: "/bɪˈlɒŋ/", partOfSpeech: "verb", meaningTr: "Ait olmak", exampleSentence: "This coat belongs to her." }
    ],
    quickCheck: {
      question: "'Michael kız kardeşiyle birlikte yaşıyor' cümlesinde 'kız kardeşiyle' ifadesi nasıl çevrilmelidir?",
      options: [
        "with his sister",
        "with her sister",
        "with its sister",
        "with him sister"
      ],
      correctIndex: 0,
      explanation: "Sahip olan kişi Michael (erkek) olduğu için erkek iyelik sıfatı 'his' kullanılır: 'with his sister'."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun iyelik sıfatını yerleştirin:",
      sentence: "The university is famous for ___ high academic standards and historic library.",
      options: ["its", "it's", "their", "his"],
      correctAnswer: "its",
      hint: "'The university' tekil cansız bir kurumdur. İyelik sıfatı kesmeli midir kesmesiz midir?",
      explanation: "Tekil cansız varlıkların iyelik sıfatı kesmesiz olarak 'its' şeklinde yazılır: 'for its high academic standards'."
    },
    sentenceBuilder: {
      promptTr: "Bizim evimiz çok geniştir ve onun bahçesi harikadır.",
      targetEn: "Our house is very spacious and its garden is wonderful",
      availableWords: ["Our", "house", "is", "very", "spacious", "and", "its", "garden", "is", "wonderful", "it's", "their", "his"],
      explanation: "Sahiplik 1 (Our house is very spacious) + bağlaç (and) + sahiplik 2 (its garden is wonderful - kesmesiz its!)."
    },
    summaryTakeaways: [
      "İyelik sıfatları daima bir ismin önünde yer alır (my car, her job); tek başlarına duramazlar.",
      "3. tekil şahısta sahiplik sahibin cinsiyetine göre seçilir: Erkek (His), Kadın (Her), Cansız (Its).",
      "'ITS' kesmesiz olarak 'onun' demektir; kesmeli 'IT'S' ise 'It is' kısaltmasıdır."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 36: Sahiplik Kesme İşareti: Apostrophe 's (Tom's Car)
  // -------------------------------------------------------------------------
  36: {
    skillType: 'grammar',
    concreteCompetency: "İngilizcede canlı varlıkların sahipliğini bildiren kesme işareti ('s) kuralını, tekil isimlerde ('s) ve düzenli çoğul isimlerde sadece kesme işareti (') kullanımını, düzensiz çoğullarda ('s) kuralını ve nesneler için 'of' yapısını hatasız uygulayabilmek.",
    whyItMatters: "'Tom'un arabası', 'öğretmenin masası' veya 'öğrencilerin kitapları' gibi canlı sahiplik ilişkilerini doğru ifade etmek günlük dilin ve mülkiyet anlatımının esasıdır.",
    linguisticLogic: "İngilizcede canlı varlıkların (insanlar ve hayvanlar) sahipliğini anlatmak için ismin sonuna kesme işareti ve 's' (-'s) eklenir: 'Tom's car' (Tom'un arabası). Kurallar şöyledir: 1) Tekil isimlere -'s gelir: 'the teacher's desk' (öğretmenin masası). 2) -s ile biten düzenli çoğul isimlere sadece KESME İŞARETİ (') gelir, ikinci bir 's' yazılmaz: 'the teachers' room' (öğretmenlerin odası). 3) -s ile bitmeyen düzensiz çoğullara normal -'s gelir: 'the children's toys' (çocukların oyuncakları). Cansız nesnelerin sahipliğinde ise kesme işareti yerine 'of' yapısı tercih edilir: 'the door of the car' (arabanın kapısı).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Tekil İsimlerde Kesme İşareti ('s)",
        content: "Tek bir kişinin veya hayvanın bir şeye sahip olduğunu söylemek için ismin sonuna kesme işareti ve 's' konur: Sahip + 's + Sahiplenilen Nesne. Bu yapı Türkçedeki '-in/-ın' tamlayan ekinin tam karşılığıdır.",
        formula: "[Tekil Canlı İsim] + 'S + [Sahiplenilen Nesne]",
        keyPhrase: "Sarah's laptop  |  the doctor's phone  |  my brother's car",
        subPoints: [
          "Sarah's laptop = Sarah'nın dizüstü bilgisayarı.",
          "Sahiplenilen nesnenin önüne tekrar 'the' konmaz: *Sarah's the laptop KESİNLİKLE YANLIŞTIR."
        ],
        rationale: "Canlı sahiplik yapısının temel söz dizimi kuralıdır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Düzenli Çoğul İsimler (Sadece Sonda Kesme: s')",
        content: "Eğer isim zaten çoğul eki olan '-s' ile bitiyorsa, peş peşe iki tane 's' yazıp tıslama yaratmamak için kelimenin sonuna SADECE KESME İŞARETİ (') konur, ikinci bir 's' yazılmaz!",
        formula: "[Düzenli Çoğul İsim-s] + ' + [Sahiplenilen Nesne]",
        keyPhrase: "the students' books  |  my parents' house  |  the doctors' clinic",
        subPoints: [
          "the boy's room = Tek bir çocuğun odası.",
          "the boys' room = Birden fazla erkek çocuğun (çocukların) odası.",
          "Telaffuzları aynıdır (/bɔɪz ruːm/), ancak yazımda kesmenin yeri anlamı tekilden çoğula çevirir!"
        ],
        rationale: "Kesme işaretinin yeri yazılı İngilizcede tekil/çoğul sahibin tek ayracıdır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Düzensiz Çoğullar ve Cansızlarda 'OF'",
        content: "Sonunda '-s' olmayan düzensiz çoğul isimlere (men, women, children, people) normal tekiller gibi -'s gelir: 'the children's park', 'women's fashion'. Cansız nesnelerin sahipliğinde ise kesme işareti değil, 'of' kalıbı kullanılır: 'the leg of the table' (*the table's leg yerine).",
        formula: "Düzensiz Çoğul: children's / people's  |  Cansız Nesne: the [Parça] OF the [Bütün]",
        keyPhrase: "the children's bedroom  |  the wheel of the car  |  the roof of the house",
        subPoints: [
          "children's (çocukların) -> sonu s ile bitmediği için 's alır.",
          "the leg of the table = masanın bacağı (cansız)."
        ],
        rationale: "Canlı ve cansız tamlama kurallarının ayrımı İngilizce üslup zarafetini oluşturur."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Kesme İşaretinin Yeri Hayat Kurtarır!",
        formula: "Tekil Sahip: the student's book (Öğrencinin kitabı)\nÇoğul Sahip: the students' books (Öğrencilerin kitapları)",
        explanation: "Kesme işareti 's'den ÖNCEYSE tek bir kişi sahiptir. Kesme işareti 's'den SONRAYSA birden fazla çoğul kişi sahiptir.",
        exampleSnippet: "My sister's room (1 kız kardeş) vs My sisters' room (birden fazla kız kardeş).",
        cautionNote: "Kesmenin yerini sahibin tekil mi çoğul mu olduğuna göre belirleyin."
      },
      {
        ruleTitle: "Düzensiz Çoğullarda 's Kuralı",
        formula: "children's toys (DOĞRU)  |  *childrens' toys (YANLIŞ!)",
        explanation: "'Children' kelimesi zaten çoğuldur ancak sonu 's' ile bitmez. Bu yüzden normal bir isim gibi kesme ve 's' alır: children's.",
        exampleSnippet: "The women's association held an international conference.",
        tipNote: "Düzensiz çoğullara normal 's takın."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "This is the car of Tom.",
        correctExample: "This is Tom's car.",
        rootCause: "Canlı insan sahipliğinde Türkçe 'Tom'un arabası' yapısını 'of' ile çevirmeye çalışmak.",
        memoryTip: "İnsanlarda 'of' hantaldır; kesme işareti kullan: TOM'S car!"
      },
      {
        wrongExample: "My parents's car is new.",
        correctExample: "My parents' car is new.",
        rootCause: "Zaten -s ile biten çoğul kelimeye ikinci bir 's' eklemek.",
        memoryTip: "-s ile biten çoğulun sonuna sadece KESME koy: parents'!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Ofiste Masaların ve Eşyaların Kime Ait Olduğunu Açıklama",
      description: "Yeni stajyere ofisteki departman alanlarını ve kişisel masaları tanıtan kıdemli çalışan.",
      contextType: "workplace",
      dialogue: [
        { speaker: "Mentor", textEn: "Welcome to our open-plan office. This is Alex's desk, and that is Elena's workspace.", textTr: "Açık plan ofisimize hoş geldin. Bu Alex'in masası, şu da Elena'nın çalışma alanı." },
        { speaker: "Stajyer", textEn: "And whose office is that large corner room?", textTr: "Peki şu büyük köşe odası kimin ofisi?" },
        { speaker: "Mentor", textEn: "That is the managing director's office. And down the hall is the managers' meeting room.", textTr: "O genel müdürün ofisi (director's). Koridorun sonunda ise müdürlerin toplantı odası (managers') var." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Canlı Varlık Sahipliği ('s)",
      conceptB: "Cansız Nesne Parça-Bütün İlişkisi (of)",
      keyDifference: "Canlı insan ve hayvan sahipliğinde kesme işareti ('s) kullanılır ('David's bag'). Cansız nesnelerin parçalarında ise 'of' yapısı tercih edilir ('the screen of the phone').",
      exampleA: "Michael's car. (Canlı insan)",
      exampleB: "The door of the house. (Cansız nesne)"
    },
    memoryHook: "Kesme Kuralı: Canlıysa 'S tak (Tom's car)! Çoğulsa sadece kesme at (boys' room)! Cansızsa 'OF' ile bağla (the leg of the table)!",
    examples: [
      {
        en: "Dr. Smith's research paper was published in a leading medical journal.",
        tr: "Dr. Smith'in araştırma makalesi önde gelen bir tıp dergisinde yayımlandı.",
        highlightedWords: ["Dr. Smith's research paper"],
        grammarCategory: "Tekil Canlı Sahipliği",
        contextNote: "Akademik mülkiyet.",
        breakdownNote: "Tekil kişi (Dr. Smith) + 's + sahiplenilen nesne (research paper)."
      },
      {
        en: "The teachers' lounge is located on the second floor, next to the library.",
        tr: "Öğretmenler odası (öğretmenlerin dinlenme odası) ikinci katta, kütüphanenin yanındadır.",
        highlightedWords: ["The teachers' lounge"],
        grammarCategory: "Düzenli Çoğul Sahipliği",
        contextNote: "Kurum içi mekan sahipliği.",
        breakdownNote: "Düzenli çoğul (teachers) + kesme işareti (') + lounge."
      },
      {
        en: "The children's playground was renovated with eco-friendly wooden equipment.",
        tr: "Çocuk oyun parkı çevre dostu ahşap ekipmanlarla yenilendi.",
        highlightedWords: ["The children's playground"],
        grammarCategory: "Düzensiz Çoğul Sahipliği",
        contextNote: "Sosyal tesis.",
        breakdownNote: "Düzensiz çoğul (children) + 's + playground."
      }
    ],
    vocabulary: [
      { word: "Lounge", phonetic: "/laʊndʒ/", partOfSpeech: "noun", meaningTr: "Dinlenme odası, salon", exampleSentence: "Relax in the staff lounge." },
      { word: "Renovate", phonetic: "/ˈren.ə.veɪt/", partOfSpeech: "verb", meaningTr: "Yenilemek, tadilat yapmak", exampleSentence: "They renovated the old library." },
      { word: "Director", phonetic: "/daɪˈrek.tər/", partOfSpeech: "noun", meaningTr: "Yönetici, müdür", exampleSentence: "He is the company's managing director." },
      { word: "Equipment", phonetic: "/ɪˈkwɪp.mənt/", partOfSpeech: "noun", meaningTr: "Ekipman, donanım (sayılamaz!)", exampleSentence: "Modern office equipment saves time." }
    ],
    quickCheck: {
      question: "'Öğrencilerin sınav sonuçları çok başarılıydı' cümlesinde 'öğrencilerin sonuçları' ifadesi nasıl yazılmalıdır?",
      options: [
        "the students' results",
        "the student's results",
        "the students's results",
        "the results of students"
      ],
      correctIndex: 0,
      explanation: "Çoğul öğrenciler (students) -s ile bittiği için sadece kesme işareti alır: 'the students' results'."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun sahiplik ifadesini yerleştirin:",
      sentence: "We bought new storybooks for the ___ library at the primary school.",
      options: ["children's", "childrens'", "childrens's", "childs'"],
      correctAnswer: "children's",
      hint: "'Children' düzensiz çoğuldur ve -s ile bitmez.",
      explanation: "Sonunda -s olmayan düzensiz çoğul isimlere normal kesme ve 's' eklenir: 'children's'."
    },
    sentenceBuilder: {
      promptTr: "Tom'un yeni arabası müdürün ofisinin önünde park halindedir.",
      targetEn: "Tom's new car is parked in front of the manager's office",
      availableWords: ["Tom's", "new", "car", "is", "parked", "in", "front", "of", "the", "manager's", "office", "Toms", "managers"],
      explanation: "Özne (Tom's new car) + to be (is parked) + konum (in front of the manager's office)."
    },
    summaryTakeaways: [
      "Canlı varlıklarda sahiplik tekil isimlere -'s eklenerek yapılır (Tom's car).",
      "-s ile biten çoğul isimlerde sadece KESME İŞARETİ konur, ikinci bir s yazılmaz (the boys' room).",
      "Düzensiz çoğullar (children, women) normal -'s alır (children's books); cansızlarda 'of' yapısı tercih edilir."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 37: Have got / Has got ile Sahiplik Bildirimi
  // -------------------------------------------------------------------------
  37: {
    skillType: 'grammar',
    concreteCompetency: "Özellikle İngiliz İngilizcesinde (British English) ve günlük konuşmada sahiplik, aile bağı ve fiziksel özellikleri anlatmak için kullanılan 'Have got / Has got' yapısını olumlu, olumsuz (haven't got / hasn't got) ve soru (Have you got...? / Has she got...?) biçimleriyle hatasız kurabilmek.",
    whyItMatters: "Birleşik Krallık'ta veya uluslararası İngilizce sınavlarında (Cambridge, IELTS) 'Have you got a pen?' veya 'I've got a headache' kalıpları günlük iletişimin ayrılmaz bir parçasıdır.",
    linguisticLogic: "'Have got' yapısı anlam olarak standart 'have' fiiliyle birebir aynıdır (sahip olmak); ancak dilbilgisel mekanizması tamamen farklıdır: 1) 'Have' burada bir yardımcı fiil gibi davranır, bu yüzden olumsuz yaparken 'don't' kullanılmaz; doğrudan 'HAVEN'T GOT' denir. 2) Soru sorarken 'do' başa gelmez; 'HAVE' başa geçer: 'Have you got...?'. 3) He, She, It için 'HAS GOT' (hasn't got / Has he got...?) kullanılır. Konuşma dilinde 'I've got', 'He's got' kısaltmaları esastır.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Olumlu Cümle ve Kısaltmalar (I've got / He's got)",
        content: "I, You, We, They ile 'have got' (kısaltması: 've got); He, She, It ile 'has got' (kısaltması: 's got) kullanılır. 'I have got a car' = 'I've got a car' (Bir arabam var).",
        formula: "I / You / We / They + HAVE GOT ('ve got)  |  He / She / It + HAS GOT ('s got)",
        keyPhrase: "I've got two brothers.  |  She's got blue eyes.  |  We've got a problem.",
        subPoints: [
          "'He's got' kısaltmasındaki 's 'has' fiilidir ('He is got' DEĞİLDİR!).",
          "Fiziksel özellikler için çok yaygındır: 'She's got long brown hair.'"
        ],
        rationale: "Konuşma dilindeki kısaltmaların mantığını kavramak dinleme becerisini keskinleştirir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Olumsuz Cümle: 'Haven't got' ve 'Hasn't got'",
        content: "'Have got' yapısında 'don't' veya 'doesn't' KULLANILMAZ. 'Have' fiilinin sağına doğrudan 'not' eklenir: 'haven't got' / 'hasn't got'.",
        formula: "I/You/We/They + HAVEN'T GOT  |  He/She/It + HASN'T GOT",
        keyPhrase: "I haven't got enough money.  |  He hasn't got a driving licence.",
        subPoints: [
          "*I don't have got AĞIR GRAMER HATASIDIR! Ya 'I don't have' ya da 'I haven't got' denir.",
          "İki sistemi birbirine asla karıştırmayın."
        ],
        rationale: "Yardımcı fiilli yapı ile standart fiil sisteminin birbirine karışmasını önlemek gerekir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Soru Cümlesi ve Kısa Cevaplar",
        content: "Soru yaparken 'Have' veya 'Has' cümlenin en başına fırlar: 'Have you got...?' / 'Has she got...?'. Cevaplarda 'got' söylenmez; sadece 'Yes, I have' veya 'No, I haven't' denir.",
        formula: "HAVE + [I/you/we/they] + GOT ...?  |  HAS + [he/she/it] + GOT ...?",
        keyPhrase: "Have you got a minute? - Yes, I have.  |  Has he got a car? - No, he hasn't.",
        subPoints: [
          "Biri size 'Have you got a pen?' dediğinde 'Yes, I have' veya 'No, I haven't' deyin.",
          "Cevapta 'got' tekrarlanmaz (*Yes, I have got denmez)."
        ],
        rationale: "İngiliz İngilizcesi soru-cevap protokolünü eksiksiz kurmak esastır."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Sistemleri Karıştırmama İlkesi",
        formula: "Sistem 1: I haven't got a car (Have got sistemi)\nSistem 2: I don't have a car (Standart Have sistemi)\n*I don't have got a car (KESİNLİKLE YANLIŞ!)",
        explanation: "'Have got' kullanıyorsanız olumsuzluğu 'haven't got' ile yapın. 'Don't' kullanacaksanız 'got' kelimesini cümleden tamamen atın.",
        exampleSnippet: "She hasn't got time. = She doesn't have time.",
        cautionNote: "Asla 'don't have got' demeyin!"
      },
      {
        ruleTitle: "Kısa Cevapta 'got' Düşer!",
        formula: "Have you got a pen? -> Yes, I HAVE (DOĞRU)  |  *Yes, I have got (YANLIŞ)",
        explanation: "Kısa cevaplarda sadece yardımcı fiil (have/has) söylenir, arkasındaki 'got' atılır.",
        exampleSnippet: "Has she got a passport? - Yes, she has. / No, she hasn't.",
        tipNote: "Kısa cevapta 'got' kullanmayın."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I don't have got any cash on me.",
        correctExample: "I haven't got any cash on me. / I don't have any cash on me.",
        rootCause: "İki farklı sahiplik yapısını melezleyip çorba yapmak.",
        memoryTip: "Ya 'HAVEN'T GOT' de ya da 'DON'T HAVE' de; ikisini karıştırma!"
      },
      {
        wrongExample: "He have got three sisters.",
        correctExample: "He has got three sisters.",
        rootCause: "3. tekil şahısta (He) 'have' yerine 'has' kuralını unutmak.",
        memoryTip: "He, She, It için daima HAS GOT!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Ofiste Kırtasiye ve Ekipman Paylaşımı",
      description: "Toplantı öncesi iki iş arkadaşının yanlarındaki ofis malzemelerini kontrol etmesi.",
      contextType: "workplace",
      dialogue: [
        { speaker: "Kemal", textEn: "Excuse me Sarah, have you got a spare black pen for the meeting?", textTr: "Affedersin Sarah, toplantı için fazladan siyah bir kalemin var mı (have you got)?" },
        { speaker: "Sarah", textEn: "Yes, I have. Here you are. Have you got a notepad as well?", textTr: "Evet, var (Yes, I have). Buyur. Yanında bir not defterin de var mı?" },
        { speaker: "Kemal", textEn: "No, I haven't got one. Could I borrow a few sheets of paper?", textTr: "Hayır, yok (I haven't got one). Birkaç sayfa kağıt ödünç alabilir miyim?" },
        { speaker: "Sarah", textEn: "Sure, I've got plenty in my folder.", textTr: "Elbette, dosyamda bolca var (I've got)." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Have Got (İngiliz Ağırlıklı)",
      conceptB: "Have / Has (Global / Amerikan Standart)",
      keyDifference: "Anlamları tamamen aynıdır. Ancak 'Have got' olumsuzunu 'haven't got' ve sorusunu 'Have you got?' ile yaparken; standart 'have' olumsuzunu 'don't have' ve sorusunu 'Do you have?' ile yapar.",
      exampleA: "Have you got a car? - No, I haven't got a car.",
      exampleB: "Do you have a car? - No, I don't have a car."
    },
    memoryHook: "Have Got Formülü: I've got (varım var), He's got (onun var), Soru: HAVE YOU GOT? Olumsuz: HAVEN'T GOT!",
    examples: [
      {
        en: "I've got a terrible headache, so I haven't got the energy to go out tonight.",
        tr: "Korkunç bir baş ağrım var, bu yüzden bu gece dışarı çıkacak enerjim yok.",
        highlightedWords: ["I've got a terrible headache", "haven't got the energy"],
        grammarCategory: "Sağlık Durumu ve Enerji",
        contextNote: "Fiziksel rahatsızlık bildirimi.",
        breakdownNote: "I've got + isim (a headache) + so + haven't got + nesne."
      },
      {
        en: "Has our new marketing coordinator got an international driver's licence?",
        tr: "Yeni pazarlama koordinatörümüzün uluslararası bir sürücü belgesi var mı?",
        highlightedWords: ["Has our new marketing coordinator got"],
        grammarCategory: "3. Tekil Soru Formu",
        contextNote: "İşe alım belgesi sorgulama.",
        breakdownNote: "Has + tekil özne + got + nesne?"
      },
      {
        en: "They've got a spacious holiday cottage near the coast with a beautiful garden.",
        tr: "Kıyı yakınında güzel bir bahçesi olan ferah bir tatil kulübeleri var.",
        highlightedWords: ["They've got a spacious holiday cottage"],
        grammarCategory: "Mülkiyet Bildirimi",
        contextNote: "Yazlık ev mülkiyeti.",
        breakdownNote: "They've got + sıfat tamlaması (a spacious cottage) + edat öbeği."
      }
    ],
    vocabulary: [
      { word: "Headache", phonetic: "/ˈhed.eɪk/", partOfSpeech: "noun", meaningTr: "Baş ağrısı", exampleSentence: "I have got a severe headache." },
      { word: "Spare", phonetic: "/speər/", partOfSpeech: "adjective", meaningTr: "Yedek, fazladan", exampleSentence: "Have you got a spare key?" },
      { word: "Plenty", phonetic: "/ˈplen.ti/", partOfSpeech: "pronoun", meaningTr: "Bolca, çok miktarda", exampleSentence: "We have got plenty of time." },
      { word: "Licence", phonetic: "/ˈlaɪ.səns/", partOfSpeech: "noun", meaningTr: "Ruhsat, lisans, ehliyet", exampleSentence: "He has got a driving licence." }
    ],
    quickCheck: {
      question: "'Have you got a dictionary?' sorusuna verilecek en doğru kısa cevap hangisidir?",
      options: [
        "Yes, I have.",
        "Yes, I do.",
        "Yes, I have got.",
        "Yes, I got."
      ],
      correctIndex: 0,
      explanation: "'Have got' sorularına kısa cevap verirken 'got' düşer ve sadece 'Yes, I have' denir."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun seçeneği yerleştirin:",
      sentence: "Sarah ___ got any brothers or sisters; she is an only child.",
      options: ["hasn't", "haven't", "doesn't", "isn't"],
      correctAnswer: "hasn't",
      hint: "'Sarah' tekil bir kadın öznedir (She) ve cümlede 'got' vardır.",
      explanation: "3. tekil şahıslarda olumsuz have got yapısı 'hasn't got' ile kurulur: 'Sarah hasn't got'."
    },
    sentenceBuilder: {
      promptTr: "Senin fazladan bir kalemin var mı? - Evet, bende bir tane var.",
      targetEn: "Have you got a spare pen yes I have got one",
      availableWords: ["Have", "you", "got", "a", "spare", "pen", "yes", "I", "have", "got", "one", "do", "has"],
      explanation: "Soru (Have you got a spare pen) + cevap (yes I have got one)."
    },
    summaryTakeaways: [
      "'Have got / Has got' sahiplik bildirir ve konuşma dilinde 've got / 's got olarak kısalır.",
      "Olumsuz yapmak için 'haven't got / hasn't got' kullanılır; 'don't' ile birleştirilmez.",
      "Sorularda 'Have/Has' başa gelir; kısa cevapta 'got' atılır (Yes, I have / No, I haven't)."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 38: Have / Has ile Sahiplik Bildirimi (Do you have...?)
  // -------------------------------------------------------------------------
  38: {
    skillType: 'grammar',
    concreteCompetency: "Küresel ve Amerikan İngilizcesinde standart olan 'Have / Has' sahiplik sistemini, Geniş Zaman yardımcı fiilleriyle ('Do you have...?' / 'Does she have...?' / 'I don't have' / 'He doesn't have') hatasız kullanabilmek ve 'Have got' sistemiyle farklarını ayırt edebilmek.",
    whyItMatters: "Dünya genelinde, iş İngilizcesinde ve Amerikan medyasında sahiplik için en yaygın, standart ve evrensel yapı 'Do you have...?' kalıbıdır. Bu yapıyı bilmek her ortamda anlaşılmanızı sağlar.",
    linguisticLogic: "Bu sistemde 'HAVE' kelimesi özel bir yardımcı fiil değil, tamamen normal bir eylem fiili gibi muamele görür: 1) Olumlu: I/You/We/They 'have', He/She/It 'has' alır. 2) Olumsuz: Tıpkı 'work' fiili gibi önüne 'don't' veya 'doesn't' gelir: 'I don't have', 'He doesn't have' (doesn't gelince has -> have olur!). 3) Soru: Cümlenin başına 'Do' veya 'Does' gelir: 'Do you have...?', 'Does he have...?'.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Olumlu Cümle (Have vs Has)",
        content: "I, You, We, They ile 'HAVE'; He, She, It ile 'HAS' kullanılır. Yanına asla 'got' gelmez: 'I have a car', 'She has a new laptop'.",
        formula: "I / You / We / They + HAVE + Nesne  |  He / She / It + HAS + Nesne",
        keyPhrase: "I have two sisters.  |  He has an important meeting today.",
        subPoints: [
          "'have got' gibi kısaltılamaz: *I've a car YANLIŞTIR; 'I have a car' tam söylenir.",
          "Mülkiyet, akrabalık ve hastalık durumlarında kullanılır: 'I have a headache'."
        ],
        rationale: "Standart eylem fiili statüsündeki 'have' kullanımının temelleridir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Olumsuz Cümle: 'don't have' ve 'doesn't have'",
        content: "Olumsuz yaparken Geniş Zaman kuralları aynen işler: I/You/We/They için 'DON'T HAVE'; He/She/It için 'DOESN'T HAVE'. Kural: 'doesn't' geldiği için fiil 'has' değil, yalın olan 'HAVE' biçimine döner!",
        formula: "I/You/We/They + DON'T HAVE  |  He/She/It + DOESN'T HAVE (has değil!)",
        keyPhrase: "I don't have enough time.  |  She doesn't have a car.",
        subPoints: [
          "Asla *He doesn't has DENMEZ!",
          "Asla *I haven't a car DENMEZ (got yoksa haven't tek başına duramaz)."
        ],
        rationale: "Geniş zaman kurallarının have fiiline eksiksiz uygulanması çelişkileri bitirir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Soru Sorma: 'Do you have...?' / 'Does she have...?'",
        content: "Soru yaparken 'Do' veya 'Does' başa gelir: 'Do you have a question?' / 'Does he have a credit card?'. Kısa cevaplar da 'do/don't' ile verilir: 'Yes, I do. / No, I don't.'",
        formula: "DO + [I/you/we/they] + HAVE ...?  |  DOES + [he/she/it] + HAVE ...?",
        keyPhrase: "Do you have a pen? - Yes, I do.  |  Does she have a brother? - No, she doesn't.",
        subPoints: [
          "Cevapta 'have' kullanılmaz: 'Yes, I do' denir (*Yes, I have denmez).",
          "Does başa gelince fiil yine yalın 'have' kalır."
        ],
        rationale: "Küresel İngilizcede en sık sorulan soru kalıbıdır."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Do you have? vs Have you got?",
        formula: "Do you have a car? -> Yes, I do.  (Standart / Amerikan)\nHave you got a car? -> Yes, I have. (British)",
        explanation: "İki kalıp da tamamen eş anlamlıdır. Ancak 'Do' ile sorulan soruya 'Yes, I do'; 'Have' ile sorulan soruya 'Yes, I have' ile karşılık verilir.",
        exampleSnippet: "Do you have any questions? - Yes, I do.",
        tipNote: "Uluslararası iş ortamında 'Do you have' en tarafsız ve standart tercihtir."
      },
      {
        ruleTitle: "He doesn't HAVE (Has değil!)",
        formula: "He doesn't HAVE (DOĞRU)  |  *He doesn't has (AĞIR HATA!)",
        explanation: "'Doesn't' yardımcı fiili 3. şahıs takısını üzerine aldığı için fiil çıplak haline dönmek zorundadır. 'Has'in çıplak hali ise 'have'dir.",
        exampleSnippet: "The hotel doesn't have a swimming pool.",
        cautionNote: "Doesn't sonrasında asla 'has' yazmayın!"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Do you have a car? -> Yes, I have.",
        correctExample: "Do you have a car? -> Yes, I do.",
        rootCause: "'Do' ile sorulan soruya 'have' ile karşılık verme hatası.",
        memoryTip: "Soruda DO varsa, cevapta da DO vardır: YES, I DO!"
      },
      {
        wrongExample: "She doesn't has any experience.",
        correctExample: "She doesn't have any experience.",
        rootCause: "'Doesn't' sonrasında fiili yalına çevirmeyi unutmak.",
        memoryTip: "Doesn't varsa arkasından daima HAVE gelir: doesn't HAVE!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Otel Resepsiyonunda Olanakları ve Donanımı Sorma",
      description: "Otele giriş yapan müşterinin odada bulunan ekipmanları 'Do you have...?' kalıbıyla öğrenmesi.",
      contextType: "travel",
      dialogue: [
        { speaker: "Guest", textEn: "Good afternoon. Do you have high-speed Wi-Fi in the rooms?", textTr: "Tünaydın. Odalarda yüksek hızlı Wi-Fi var mı (Do you have)?" },
        { speaker: "Receptionist", textEn: "Yes, we do. It is complimentary for all guests.", textTr: "Evet, var (Yes, we do). Tüm misafirler için ücretsizdir." },
        { speaker: "Guest", textEn: "And does the executive room have a mini fridge?", textTr: "Peki executive odada mini buzdolabı var mı (does it have)?" },
        { speaker: "Receptionist", textEn: "Yes, it does. It also has a coffee machine.", textTr: "Evet, var (Yes, it does). Ayrıca bir kahve makinesi de var (it has)." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Standart Have (Do you have?)",
      conceptB: "Have Got (Have you got?)",
      keyDifference: "Standart 'have' sisteminde olumsuz ve soru için 'do/does/don't/doesn't' yardımcı fiilleri kullanılır. 'Have got' sisteminde ise 'have' bizzat yardımcı fiil gibi davranır.",
      exampleA: "Do you have a passport? - I don't have a passport.",
      exampleB: "Have you got a passport? - I haven't got a passport."
    },
    memoryHook: "Standart Have Kuralı: Normal fiil gibi davranır: Do you have? Yes, I do! He doesn't have! Asla 'doesn't has' deme!",
    examples: [
      {
        en: "Do you have a business card with your contact details? - Yes, I do.",
        tr: "İletişim bilgilerinizin olduğu bir kartvizitiniz var mı? - Evet, var.",
        highlightedWords: ["Do you have a business card", "Yes, I do"],
        grammarCategory: "Standart Soru ve Cevap",
        contextNote: "Profesyonel iş tanışması.",
        breakdownNote: "Do + you + have + nesne? -> Yes, I do."
      },
      {
        en: "Our company has branches in twelve countries, but it doesn't have an office in Tokyo.",
        tr: "Şirketimizin on iki ülkede şubesi var, ancak Tokyo'da bir ofisi yok.",
        highlightedWords: ["has branches", "doesn't have an office"],
        grammarCategory: "Has ve Doesn't Have",
        contextNote: "Kurumsal şube ağı.",
        breakdownNote: "Tekil özne + has (olumlu) + but + doesn't have (olumsuz)."
      },
      {
        en: "Does this laptop have a backlit keyboard for working in the dark?",
        tr: "Bu dizüstü bilgisayarın karanlıkta çalışmak için arkadan aydınlatmalı klavyesi var mı?",
        highlightedWords: ["Does this laptop have"],
        grammarCategory: "Tekil Cansız Soru",
        contextNote: "Teknoloji ürünü özelliği sorma.",
        breakdownNote: "Does + tekil nesne (this laptop) + have + nesne?"
      }
    ],
    vocabulary: [
      { word: "Complimentary", phonetic: "/ˌkɒm.plɪˈmen.tər.i/", partOfSpeech: "adjective", meaningTr: "Ücretsiz, ikram olan", exampleSentence: "Breakfast is complimentary." },
      { word: "Experience", phonetic: "/ɪkˈspɪə.ri.əns/", partOfSpeech: "noun", meaningTr: "Deneyim, tecrübe", exampleSentence: "She has five years of experience." },
      { word: "Branch", phonetic: "/brɑːntʃ/", partOfSpeech: "noun", meaningTr: "Şube, branş, kol", exampleSentence: "The bank has a local branch here." },
      { word: "Details", phonetic: "/ˈdiː.teɪlz/", partOfSpeech: "noun", meaningTr: "Ayrıntılar, detaylar", exampleSentence: "Send me the project details." }
    ],
    quickCheck: {
      question: "'Do you have an extra charger?' sorusuna verilecek en doğru kısa cevap hangisidir?",
      options: [
        "Yes, I do.",
        "Yes, I have.",
        "Yes, I have got.",
        "Yes, do I."
      ],
      correctIndex: 0,
      explanation: "Soru 'Do' ile sorulduğu için kısa cevapta 'Yes, I do' kullanılır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun seçeneği yerleştirin:",
      sentence: "My brother is looking for a job because he ___ any stable income right now.",
      options: ["doesn't have", "doesn't has", "don't have", "hasn't"],
      correctAnswer: "doesn't have",
      hint: "'My brother' 3. tekil şahıstır (He). Geniş zamanda 'have' fiilinin olumsuzu nasıldır?",
      explanation: "3. tekil şahıslarda olumsuzluk 'doesn't have' kalıbıyla kurulur: 'he doesn't have any stable income'."
    },
    sentenceBuilder: {
      promptTr: "Sizin bu akşam için boş vaktiniz var mı? - Evet, var.",
      targetEn: "Do you have free time for this evening yes I do",
      availableWords: ["Do", "you", "have", "free", "time", "for", "this", "evening", "yes", "I", "do", "have", "has"],
      explanation: "Soru (Do you have free time for this evening) + kısa cevap (yes I do)."
    },
    summaryTakeaways: [
      "Küresel standartta sahiplik 'Do you have...?' sorusu ve 'I don't have' olumsuzuyla kurulur.",
      "He, She, It ile olumlu 'has', olumsuz 'doesn't have' (has değil!) kullanılır.",
      "'Do you have...?' sorusuna 'Yes, I do / No, I don't' ile karşılık verilir; 'Yes, I have' denmez."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 39: Aile Bireyleri ve Akrabalık İfadeleri
  // -------------------------------------------------------------------------
  39: {
    skillType: 'vocabulary',
    concreteCompetency: "Çekirdek ve geniş aile bireylerini (parents, mother, father, siblings, brother, sister, husband, wife, son, daughter, grandparents, aunt, uncle, cousin), cinsiyet ayrımlarını ve akrabalık ilişkilerini 'have/has' ve iyelik sıfatlarıyla hatasız ifade edebilmek.",
    whyItMatters: "Yabancı bir arkadaşla sohbet ederken, aile fotoğraflarını gösterirken veya sosyal bağ kurarken ailenizi tanıtmak en sıcak ve yaygın diyalog konusudur.",
    linguisticLogic: "İngilizce aile terimlerinde iki önemli çatı kelime (umbrella term) vardır: 1) 'Parents' = Anne ve baba (ikisi birlikte ebeveyn). 2) 'Siblings' = Kardeşler (cinsiyet belirtmeden erkek ve kız kardeşlerin tümü). Çiftler için 'husband' (koca) ve 'wife' (karı); çocuklar için 'son' (erkek evlat) ve 'daughter' (kız evlat); geniş ailede 'aunt' (teyze/hala), 'uncle' (amca/dayı) ve cinsiyetsiz 'cousin' (kuzen) kullanılır.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Çatı Kelimeler: Parents ve Siblings",
        content: "Türkçede 'annemler' veya 'anne babam' deriz. İngilizcede anne ve babanın ikisine birden 'PARENTS' (/ˈpeə.rənts/) denir ('parent' tekil ebeveyndir). Kız ve erkek kardeşleri toptan ifade etmek için ise 'SIBLINGS' (/ˈsɪb.lɪŋz/) kelimesi kullanılır.",
        formula: "father + mother = PARENTS  |  brothers + sisters = SIBLINGS",
        keyPhrase: "My parents live in Izmir.  |  I have got two siblings: a brother and a sister.",
        subPoints: [
          "'parent' kelimesi tek bir ebeveyni (anne ya da baba), 'parents' ise ikisini birden anlatır.",
          "'Do you have any siblings?' = Hiç kardeşin var mı?"
        ],
        rationale: "Çatı kavramlar uzun uzun 'annem ve babam' demek yerine pratik ve doğal anlatım sağlar."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Çekirdek Aile: Eşler ve Çocuklar",
        content: "Evlilik bağı: 'husband' (erkek eş / koca), 'wife' (kadın eş / hanım) - çoğulu 'wives'tır. Çocuklar: 'son' (/sʌn/ - erkek çocuk), 'daughter' (/ˈdɔː.tər/ - kız çocuk). Çocukların geneli için 'children' denir.",
        formula: "husband & wife (Eşler)  |  son (Erkek evlat) & daughter (Kız evlat)",
        keyPhrase: "My husband is an architect.  |  They have a son and two daughters.",
        subPoints: [
          "'Son' kelimesi 'sun' (güneş) kelimesiyle birebir aynı okunur: /sʌn/.",
          "'Daughter' kelimesindeki 'gh' harfleri okunmaz: /ˈdɔː.tər/."
        ],
        rationale: "Aile soy ağacının birinci halkasını oluşturan temel kelimelerdir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Geniş Aile: Grandparents, Aunt, Uncle, Cousin",
        content: "Büyükanne ve büyükbaba: 'grandparents' (grandfather / grandmother). Akrabalar: 'uncle' (/ˈʌŋ.kəl/ - amca veya dayı), 'aunt' (/ɑːnt/ - teyze veya hala), 'cousin' (/ˈkʌz.ən/ - amca/dayı/hala/teyze çocuğu / kuzen).",
        formula: "grandfather & grandmother = GRANDPARENTS  |  uncle & aunt -> COUSIN",
        keyPhrase: "My uncle lives in Germany.  |  I have three cousins.",
        subPoints: [
          "İngilizcede amca ile dayı ayrımı yoktur; ikisi de 'uncle'dır.",
          "Teyze ile hala ayrımı yoktur; ikisi de 'aunt'tır.",
          "'Cousin' kelimesi cinsiyetsizdir; hem kız hem erkek kuzen için geçerlidir."
        ],
        rationale: "Geniş aile kavramlarının basitleştirilmiş yapısını kavramak çeviri yükünü hafifletir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Uncle / Aunt / Cousin Kapsayıcılığı",
        formula: "Amca = Dayı = UNCLE  |  Teyze = Hala = AUNT  |  Kuzen = COUSIN",
        explanation: "Türkçedeki akrabalık ayrıntıları (amca, dayı, enişte, bacanak) İngilizcede bulunmaz. Babanın veya annenin erkek kardeşine doğrudan 'uncle', kız kardeşine 'aunt' denir.",
        exampleSnippet: "My uncle David is my mother's brother.",
        tipNote: "Akraba kelimelerini basitleştirerek ezberleyin."
      },
      {
        ruleTitle: "Parent vs Relatives",
        formula: "PARENTS = Sadece Anne ve Baba  |  RELATIVES = Bütün Akrabalar",
        explanation: "Türk öğrenciler bazen 'parents' kelimesini 'akrabalar' sanır. 'Parents' SADECE anne-babadır! Tüm sülale ve akrabalar için 'relatives' denir.",
        exampleSnippet: "My parents are retired, but my relatives still work.",
        cautionNote: "Akrabalara 'parents' demeyin; 'relatives' deyin!"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I have two brother and one sister.",
        correctExample: "I have two brothers and one sister.",
        rootCause: "Birden fazla erkek kardeş varken 'brother' kelimesinin çoğul -s ekini unutmak.",
        memoryTip: "Birden fazlaysa 'S' ekle: TWO BROTHERS!"
      },
      {
        wrongExample: "My parents is living in Antalya.",
        correctExample: "My parents are living in Antalya. / My parents live in Antalya.",
        rootCause: "'Parents' kelimesini tekil sanmak; iki kişi (anne ve baba) olduğunu unutmak.",
        memoryTip: "Parents iki kişidir (They), daima ARE alır!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Fotoğraf Albümüne Bakarak Aileyi Tanıtma",
      description: "Yurt dışından gelen misafire telefondaki aile fotoğrafını göstererek aile bireylerini tanıtma.",
      contextType: "social",
      dialogue: [
        { speaker: "Friend", textEn: "Is this a photo of your family gathering?", textTr: "Bu senin aile toplantınızın bir fotoğrafı mı?" },
        { speaker: "Elif", textEn: "Yes, it is! These are my parents in the middle. My father is sixty and my mother is fifty-eight.", textTr: "Evet! Ortadakiler benim annem ve babam (my parents). Babam altmış, annem elli sekiz yaşında." },
        { speaker: "Friend", textEn: "And who are those young people next to them?", textTr: "Peki yanlarındaki şu gençler kim?" },
        { speaker: "Elif", textEn: "That is my older brother with his wife and their little daughter. She is my niece.", textTr: "O ağabeyim, eşi ve onların küçük kızları. O benim yeğenim." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Akrabalık Zenginliği",
      conceptB: "İngilizce Sadeleştirilmiş Akrabalık",
      keyDifference: "Türkçe amca, dayı, teyze, hala, elti, görümce gibi onlarca ayrı kelime kullanırken; İngilizce baba tarafı / anne tarafı ayrımı yapmadan tek bir kelime (uncle, aunt, cousin) kullanır.",
      exampleA: "Dayım (anne kardeşi) vs Amcam (baba kardeşi)",
      exampleB: "My uncle (İkisi için de tek kelime)"
    },
    memoryHook: "Aile Ağacı: Anne-baba PARENTS, kardeşler SIBLINGS, erkek çocuk SON, kız çocuk DAUGHTER, amca-dayı UNCLE, teyze-hala AUNT!",
    examples: [
      {
        en: "My parents celebrate their thirty-fifth wedding anniversary this weekend.",
        tr: "Annem ve babam bu hafta sonu otuz beşinci evlilik yıl dönümlerini kutluyorlar.",
        highlightedWords: ["My parents celebrate"],
        grammarCategory: "Çoğul Ebeveyn Öznesi",
        contextNote: "Aile kutlaması.",
        breakdownNote: "Çoğul özne (My parents) + çoğul fiil (celebrate) + nesne."
      },
      {
        en: "David has got two siblings: an older brother and a younger sister.",
        tr: "David'in iki kardeşi var: bir ağabey ve bir küçük kız kardeş.",
        highlightedWords: ["two siblings", "older brother", "younger sister"],
        grammarCategory: "Kardeş Terimleri",
        contextNote: "Kardeş sayısı belirtme.",
        breakdownNote: "has got + two siblings + detaylar."
      },
      {
        en: "Her uncle lives in Toronto, so she visits her Canadian cousins every summer.",
        tr: "Onun amcası Toronto'da yaşıyor, bu yüzden her yaz Kanadalı kuzenlerini ziyaret ediyor.",
        highlightedWords: ["Her uncle lives", "her Canadian cousins"],
        grammarCategory: "Geniş Aile Akrabaları",
        contextNote: "Akraba ziyareti.",
        breakdownNote: "Her uncle lives (3. tekil -s) + her Canadian cousins."
      }
    ],
    vocabulary: [
      { word: "Parent", phonetic: "/ˈpeə.rənt/", partOfSpeech: "noun", meaningTr: "Ebeveyn (anne veya baba)", exampleSentence: "Both my parents are teachers." },
      { word: "Sibling", phonetic: "/ˈsɪb.lɪŋ/", partOfSpeech: "noun", meaningTr: "Kardeş (kız veya erkek)", exampleSentence: "I have no siblings; I am an only child." },
      { word: "Daughter", phonetic: "/ˈdɔː.tər/", partOfSpeech: "noun", meaningTr: "Kız evlat", exampleSentence: "Their daughter is studying law." },
      { word: "Relative", phonetic: "/ˈrel.ə.tɪv/", partOfSpeech: "noun", meaningTr: "Akraba, hısım", exampleSentence: "We invited all our close relatives." }
    ],
    quickCheck: {
      question: "'Anne ve babam' ifadesini tek bir İngilizce kelimeyle ifade etmek için hangisi kullanılır?",
      options: [
        "parents",
        "relatives",
        "siblings",
        "family"
      ],
      correctIndex: 0,
      explanation: "Anne ve babanın ikisini birden kapsayan çatı kelime 'parents'tır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun akrabalık sözcüğünü yerleştirin:",
      sentence: "My mother's sister is my ___, and her children are my cousins.",
      options: ["aunt", "uncle", "daughter", "niece"],
      correctAnswer: "aunt",
      hint: "Annenin kız kardeşi (teyze) İngilizcede ne demektir?",
      explanation: "Teyze veya hala İngilizcede 'aunt' kelimesiyle ifade edilir."
    },
    sentenceBuilder: {
      promptTr: "Benim annem ve babam İzmir'de yaşar ve iki kız evlatları vardır.",
      targetEn: "My parents live in Izmir and they have two daughters",
      availableWords: ["My", "parents", "live", "in", "Izmir", "and", "they", "have", "two", "daughters", "lives", "has"],
      explanation: "Özne (My parents live in Izmir) + bağlaç (and) + ikinci kısım (they have two daughters)."
    },
    summaryTakeaways: [
      "Anne ve babaya birlikte 'parents', kardeşlerin tümüne 'siblings' denir.",
      "İngilizcede amca/dayı 'uncle', teyze/hala 'aunt', kuzenler ise 'cousin' olarak adlandırılır.",
      "'Parents' iki kişi olduğu için çoğuldur ve çoğul fiil alır (My parents live / are)."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 40: A1 Modül 4 Entegrasyonu: Kişisel Eşyalar ve Aile Tanıtımı
  // -------------------------------------------------------------------------
  40: {
    skillType: 'speaking',
    concreteCompetency: "A1 Modül 4 boyunca öğrenilen tüm işaret sıfatlarını (this/that/these/those), iyelik sıfatlarını (my, his, her, their), kesme işaretini ('s), sahiplik yapılarını (have/has got) ve aile terimlerini birleştirerek bir aileyi, kişisel eşyaları ve mülkiyetleri akıcı bir sunumla tanıtabilmek.",
    whyItMatters: "Bu ders A1 seviyesinde sahiplik ve niteleme becerilerinin zirvesidir. Bir aile fotoğrafını gösterirken veya kişisel eşyalarınızı tanıtırken tüm bu yapıları tek bir tutarlı paragrafta sentezleyebilmelisiniz.",
    linguisticLogic: "Başarılı bir aile ve eşya tanıtımı pedagojik olarak 4 sütunun entegrasyonudur: 1) İşaret ve Fotoğraf Girişi: 'This is a photo of my family.' 2) Aile Bireyleri ve Meslekleri: 'These are my parents; my father is an engineer.' 3) Kesme İşareti ve Sahiplik: 'This is my brother's new car; he has got a great job.' 4) Kişisel Niteleme: 'Their house is spacious and its garden is beautiful.'",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Fotoğraf veya Ortam Girişi (This is a photo of...)",
        content: "Sunuma elinizdeki fotoğrafı veya ortamı işaret ederek başlayın: 'This is a lovely photograph of my family taken last summer in Bodrum.'",
        formula: "This is a photo of [my family / our team / my home]",
        keyPhrase: "This is a picture of my family.  |  Let me introduce my family.",
        subPoints: [
          "'This is' ile yakındaki fotoğraf tanıtılır.",
          "Fotoğrafın çekildiği yer veya zaman 'taken in...' ile belirtilebilir."
        ],
        rationale: "Görsel ve bağlamsal bir çapa atarak dinleyicinin dikkatini toplar."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Bireyleri İşaret Etme ve Niteleme (These are my parents...)",
        content: "Fotoğraftaki kişileri tek tek veya gruplar halinde işaret edin: 'These are my parents in the centre. My father's name is Hasan and he is sixty years old. My mother's name is Fatma and she is a retired teacher.'",
        formula: "These are my [Çoğul Bireyler]  |  [İsim]'s name is ...",
        keyPhrase: "These are my parents.  |  This is my older brother, Tom.",
        subPoints: [
          "Kesme işaretini ('s) isim bildirimiyle birleştirin: 'My brother's name is...'",
          "Yaş ve meslek To Be ile eklenir: 'He is an accountant.'"
        ],
        rationale: "Önceki modüllerin (meslek, yaş, to be) bu modülle kusursuz kenetlenmesidir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Eşyalar ve Sahiplikler (Have got / Possessives)",
        content: "Kişilerin sahip olduğu eşyaları ve evlerini bağlayın: 'My brother has got a red sports car. That is his car in the background. My parents have got a cosy summer house and its garden is full of olive trees.'",
        formula: "[Kişi] + has got / have got + [Eşya/Mülk]  |  [İyelik Sıfatı] + is/are...",
        keyPhrase: "He has got a new apartment.  |  Their house has a lovely view.",
        subPoints: [
          "'his car', 'her laptop', 'their house' iyelik sıfatlarını eksiksiz kullanın.",
          "Cansız mülk için kesmesiz 'its' kullanın: 'its garden is beautiful'."
        ],
        rationale: "Tüm sahiplik alternatiflerini doğal bir bağlamda sentezler."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Entegrasyon Çerçevesi",
        formula: "Fotoğraf (This is...) -> Kişiler (These are my parents...) -> Eşyalar (His car is... / He has got...)",
        explanation: "Bu 3 basamaklı sıra dinleyicinin zihninde net bir soy ağacı ve mülkiyet haritası oluşturur.",
        exampleSnippet: "This is my family. These are my parents. This is my brother's car.",
        tipNote: "Her kişi için bir meslek ve bir sahiplik detayı ekleyin."
      },
      {
        ruleTitle: "This vs These Uyumu",
        formula: "This is my brother (Tekil)  |  These are my parents (Çoğul)",
        explanation: "Tek bir kişiyi gösterirken 'This is', birden fazla kişiyi gösterirken 'These are' kalıbı kullanılır.",
        exampleSnippet: "This is my sister, and these are our parents.",
        cautionNote: "Tekil kişiye 'These is' demeyin!"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "These is my family and this are my brothers.",
        correctExample: "This is my family and these are my brothers.",
        rootCause: "Tekil olan 'family' ile çoğul olan 'brothers' kelimelerinin işaret sıfatlarını ters kullanmak.",
        memoryTip: "Family tekildir (This is my family); brothers çoğuldur (These are my brothers)!"
      },
      {
        wrongExample: "This is my brother car, it's colour is blue.",
        correctExample: "This is my brother's car, its colour is blue.",
        rootCause: "Kesme işaretini ('s) unutmak ve iyelik sıfatı 'its' yerine kesmeli 'it's' yazmak.",
        memoryTip: "Brother's car (kesme var) ama its colour (kesme yok)!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Uluslararası Yaz Kampında Aile ve Yaşam Sunumu",
      description: "Yaz kampında ilk akşam tanışma etkinliğinde bir Türk öğrencinin ailesini ve yaşam ortamını arkadaşlarına sunması.",
      contextType: "social",
      dialogue: [
        { speaker: "Host", textEn: "Can, it is your turn to share your family photo with the group.", textTr: "Can, aile fotoğrafını grupla paylaşma sırası sende." },
        { speaker: "Can", textEn: "Thank you! This is a photograph of my family in Istanbul. These are my parents.", textTr: "Teşekkür ederim! Bu ailemin İstanbul'daki bir fotoğrafı (This is). Bunlar annem ve babam (These are)." },
        { speaker: "Can", textEn: "My father is an engineer and my mother is a doctor. This is my brother's bicycle in front of the house.", textTr: "Babam mühendis, annem doktordur. Bu evin önündeki ağabeyimin bisikletidir (brother's)." },
        { speaker: "Can", textEn: "He has got a passion for cycling. Their house is old, but its interior is very modern.", textTr: "Onun bisiklete tutkusu var (He has got). Onların evi eski ama onun içi (its interior) çok moderndir." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Parçalı Dilbilgisi Kuralları",
      conceptB: "Entegre İletişimsel Sunum",
      keyDifference: "Parçalı bilgi 'this' ve 'my' kurallarını ayrı ayrı bilmektir. Entegre sunum ise işaret, sahiplik, aile ve sıfatları tek bir nefeste akıcı bir anlatıya dönüştürebilmektir.",
      exampleA: "This is a car. The car is Tom. Tom has a car.",
      exampleB: "This is Tom's new car, and he has got a great passion for driving."
    },
    memoryHook: "Entegrasyon Zinciri: 'This is my family' ile başla, 'These are my parents' ile göster, 'Tom's car' ile bağla, 'Its garden' ile tamamla!",
    examples: [
      {
        en: "This is a photograph of our family reunion; these are my grandparents sitting in the centre.",
        tr: "Bu bizim aile buluşmamızın bir fotoğrafıdır; ortada oturanlar benim büyükanne ve büyükbabamdır.",
        highlightedWords: ["This is a photograph", "these are my grandparents"],
        grammarCategory: "Fotoğraf Girişi ve Çoğul Gösterim",
        contextNote: "Aile albümü sunumu.",
        breakdownNote: "This is a photo + these are my grandparents (çoğul)."
      },
      {
        en: "My older brother's apartment is in Kensington, and its balcony has a breathtaking park view.",
        tr: "Ağabeyimin dairesi Kensington'dadır ve onun balkonunun nefes kesici bir park manzarası vardır.",
        highlightedWords: ["brother's apartment", "its balcony"],
        grammarCategory: "Kesme İşareti ve İyelik Sıfatı",
        contextNote: "Ağabeyin evinin konumu ve niteliği.",
        breakdownNote: "brother's apartment ('s) + its balcony (kesmesiz its)."
      },
      {
        en: "Those are my sister's children; they have got a cute puppy named Max.",
        tr: "Şunlar kız kardeşimin çocuklarıdır; Max adında sevimli bir köpek yavruları var.",
        highlightedWords: ["Those are my sister's children", "they have got a cute puppy"],
        grammarCategory: "Uzak Çoğul ve Sahiplik",
        contextNote: "Akraba ve evcil hayvan tanıtımı.",
        breakdownNote: "Those are + sister's children + they have got."
      }
    ],
    vocabulary: [
      { word: "Reunion", phonetic: "/ˌriːˈjuː.njən/", partOfSpeech: "noun", meaningTr: "Yeniden buluşma, kavuşma (aile/okul)", exampleSentence: "We have an annual family reunion." },
      { word: "Breathtaking", phonetic: "/ˈbreθˌteɪ.kɪŋ/", partOfSpeech: "adjective", meaningTr: "Nefes kesici, muhteşem", exampleSentence: "The balcony has a breathtaking view." },
      { word: "Interior", phonetic: "/ɪnˈtɪə.ri.ər/", partOfSpeech: "noun", meaningTr: "İç mekan, iç kısım", exampleSentence: "The interior of the house is modern." },
      { word: "Gathering", phonetic: "/ˈɡæð.ər.ɪŋ/", partOfSpeech: "noun", meaningTr: "Toplanma, toplantı (sosyal)", exampleSentence: "It was a warm family gathering." }
    ],
    quickCheck: {
      question: "'Bu benim ailemin fotoğrafıdır ve şunlar ağabeyimin çocuklarıdır' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "This is a photo of my family and those are my brother's children.",
        "These is a photo of my family and that are my brother's children.",
        "This is a photo of my family and those is my brother children.",
        "That is a photo of my family and these are my brothers children."
      ],
      correctIndex: 0,
      explanation: "Tekil fotoğraf için 'This is', uzaktaki çoğul çocuklar için 'those are' ve sahiplik için 'brother's children' dizilimi doğrudur."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun entegrasyon öbeğini yerleştirin:",
      sentence: "This is my sister's new cottage, and ___ garden is full of blooming flowers.",
      options: ["its", "it's", "her", "their"],
      correctAnswer: "its",
      hint: "'cottage' (kulübe/ev) tekil cansız bir nesnedir. Bahçesi kastedildiğinde hangi iyelik sıfatı kullanılır?",
      explanation: "Tekil cansız bir mülkün (cottage) iyelik sıfatı kesmesiz olarak 'its' şeklinde yazılır: 'its garden'."
    },
    sentenceBuilder: {
      promptTr: "Bu benim kız kardeşimin yeni arabasıdır ve onun rengi parlak kırmızıdır.",
      targetEn: "This is my sister's new car and its colour is bright red",
      availableWords: ["This", "is", "my", "sister's", "new", "car", "and", "its", "colour", "is", "bright", "red", "it's", "her"],
      explanation: "İşaret ve sahiplik (This is my sister's new car) + bağlaç (and) + niteleme (its colour is bright red)."
    },
    summaryTakeaways: [
      "Tekil nesne ve fotoğraflar için 'This is', çoğul bireyler için 'These are' kullanılır.",
      "Canlı mülkiyetinde kesme işareti (sister's car) ve iyelik sıfatları (his, her, their) kusursuz uygulanır.",
      "Cansız mülkler için kesmesiz 'its' kullanılır (its garden, its colour); 'it's' ile karıştırılmaz."
    ]
  }
};
