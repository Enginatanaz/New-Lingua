// LinguAAI Pedagogical Content — Level A1: Module 3 (Lessons 21–30)
// Geniş Zaman ve Günlük Rutinler
// 100% bespoke, CEFR A1 compliant, zero generic templates.

import { TopicBlueprint } from '../../pedagogicalEngine';

export const module3_lessons_21_30: Record<number, TopicBlueprint> = {
  // -------------------------------------------------------------------------
  // LESSON 21: Geniş Zaman (Present Simple): Olumlu Cümleler
  // -------------------------------------------------------------------------
  21: {
    skillType: 'grammar',
    concreteCompetency: "Geniş Zaman (Present Simple) yapısını alışkanlıklar, günlük rutinler ve genel doğrular için I, You, We, They şahıslarıyla fiilin yalın halini (V1) kullanarak hatasız kurabilmek ve bu cümlelerde 'am/is/are' kullanmama kuralını uygulamak.",
    whyItMatters: "Geniş Zaman İngilizcede en sık kullanılan zaman kipidir. Günlük yaşantınızı, hobilerinizi, nerede yaşadığınızı veya ne iş yaptığınızı aktarmanın ana aracıdır.",
    linguisticLogic: "Geniş Zaman (Present Simple) şu anda yapılan anlık eylemleri değil; tekrarlanan rutinleri, alışkanlıkları ve değişmez gerçekleri anlatır. I, You, We, They şahıslarında fiil hiçbir ek almaz, sözlükteki en yalın haliyle (base form) öznenin arkasına gelir: 'I live in Ankara', 'We drink coffee every morning'. En büyük tuzak: Durum cümlesi olmayan bu eylem cümlelerine gereksiz yere 'am/is/are' sokmaktır (*I am live in Izmir KESİNLİKLE YANLIŞTIR).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Geniş Zaman Ne Zaman Kullanılır?",
        content: "Geniş Zaman şu üç temel durumda kullanılır: 1) Alışkanlıklar ve Rutinler ('I wake up early' - Erken uyanırım), 2) Genel Doğrular ve Bilimsel Gerçekler ('Water boils at 100 degrees' - Su 100 derecede kaynar), 3) Kalıcı Durumlar ('They live in London' - Onlar Londra'da yaşarlar).",
        formula: "I / You / We / They + FİİL (Yalın V1) + Nesne / Zaman Zarfı",
        keyPhrase: "I work from Monday to Friday.  |  We drink tea after dinner.",
        subPoints: [
          "Şu anda olan bir eylem değil, hayatın genel akışındaki bir tekrardır.",
          "Zaman zarfları sıkça eşlik eder: every day (her gün), every morning (her sabah)."
        ],
        rationale: "Zamanın kullanım sahasını netleştirmek doğru kip seçimini sağlar."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Cümle Dizilimi (Özne + Fiil + Nesne - SVO)",
        content: "Türkçede fiil cümlenin sonuna gider ('Ben her gün kahve içerim'). İngilizcede ise fiil öznenin hemen arkasından gelir ('I drink coffee every day'). Fiil ile nesne arasına hiçbir yabancı unsur sokulmaz.",
        formula: "ÖZNE (I/You/We/They) + FİİL + NESNE + (Zaman/Yer)",
        keyPhrase: "They play tennis at the weekend.  |  You speak English very well.",
        subPoints: [
          "Özne (They) + Fiil (play) + Nesne (tennis) + Zaman (at the weekend).",
          "İngilizce SVO (Subject-Verb-Object) söz dizimine harfiyen uyun."
        ],
        rationale: "Söz dizimi disiplini Türk öğrencilerin yüklemi sona atma eğilimini kırar."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Hayati Kural: Asla 'am/is/are' Eklemeyin!",
        content: "Eğer cümlenizde gerçek bir eylem fiili varsa (work, live, drink, play, read), cümlenin başına kesinlikle 'am / is / are' GELEMEZ. 'I live in Istanbul' cümlesine 'am' eklerseniz (*I am live in Istanbul) cümle İngilizce olmaktan çıkar ve anlamsızlaşır.",
        formula: "I live (DOĞRU)  |  *I am live (KESİNLİKLE YANLIŞ!)",
        keyPhrase: "We study English every day. (Asla *We are study demeyin)",
        subPoints: [
          "am/is/are sadece sıfat ve isimlerle durum bildirir (I am a student, I am tired).",
          "Eylem fiilleri kendi başlarına bağımsızdır (I study, I work)."
        ],
        rationale: "Eylem ve durum fiillerinin ayrımı tüm İngilizce eğitiminin mihenk taşıdır."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Eylem Fiili Varsa To Be YASAKTIR!",
        formula: "I work here (DOĞRU)  |  *I am work here (YANLIŞ!)",
        explanation: "Geniş Zaman olumlu cümlesinde I, You, We, They şahıslarıyla sadece özne ve yalın fiil yan yana gelir. Araya asla 'am' veya 'are' sokmayın.",
        exampleSnippet: "They visit their grandparents every Sunday.",
        cautionNote: "Yalın fiilin önüne am/are koymayın!"
      },
      {
        ruleTitle: "Söz Dizimi Sıralaması: S-V-O",
        formula: "Özne + Fiil + Nesne (I read books, NOT *I books read)",
        explanation: "Türkçe 'Ben kitap okurum' diye nesneyi öne fiili sona atarken; İngilizce 'I read books' diye fiili hemen öznenin yanına alır.",
        exampleSnippet: "We drink fresh orange juice in the morning.",
        tipNote: "Özneden hemen sonra eylemi söyleyin."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I am live in Ankara with my family.",
        correctExample: "I live in Ankara with my family.",
        rootCause: "To Be alışkanlığını eylem cümlelerine de bulaştırma hatası.",
        memoryTip: "Cümlede 'live' (yaşamak) fiili varken 'am' fiiline yer yoktur: I live!"
      },
      {
        wrongExample: "We every day play football.",
        correctExample: "We play football every day.",
        rootCause: "Zaman zarfını Türkçe gibi fiilin hemen önüne sıkıştırmak.",
        memoryTip: "Zaman zarfları (every day) cümlenin en sonuna gider!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "İş Mülakatında Günlük Çalışma Alışkanlıklarını Paylaşma",
      description: "Yeni bir iş başvurusunda adayın haftalık rutinini ve çalışma disiplinini mülakat görevlisine anlatması.",
      contextType: "workplace",
      dialogue: [
        { speaker: "Interviewer", textEn: "Could you tell us about your typical working week?", textTr: "Bize tipik bir çalışma haftanızdan bahsedebilir misiniz?" },
        { speaker: "Aday", textEn: "Certainly. I start work at eight thirty every morning, and I check all priority emails first.", textTr: "Elbette. Her sabah sekiz buçukta işe başlarım ve önce tüm öncelikli e-postaları kontrol ederim." },
        { speaker: "Interviewer", textEn: "Do you work with international clients?", textTr: "Uluslararası müşterilerle çalışıyor musunuz?" },
        { speaker: "Aday", textEn: "Yes, we collaborate with teams in London and Berlin. We share daily progress reports.", textTr: "Evet, Londra ve Berlin'deki ekiplerle iş birliği yapıyoruz. Günlük ilerleme raporları paylaşıyoruz." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Geniş Zaman (-r / -ar / -er)",
      conceptB: "İngilizce Present Simple (Yalın Fiil)",
      keyDifference: "Türkçe fiil köküne ek takar ('okur-um', 'çalışır-ız'). İngilizce I/You/We/They şahıslarında fiile hiçbir ek takmaz, fiilin sözlükteki yalın halini kullanır ('read', 'work').",
      exampleA: "Biz her akşam kitap okuruz.",
      exampleB: "We read books every evening."
    },
    memoryHook: "Geniş Zaman Kuralı: I, You, We, They arkasından FİİLİ DİMDİK VE YALIN KOY: I work, we study! Asla 'am/are' sokma!",
    examples: [
      {
        en: "I drink two cups of green tea every morning before I leave home.",
        tr: "Her sabah evden çıkmadan önce iki fincan yeşil çay içerim.",
        highlightedWords: ["I drink", "every morning"],
        grammarCategory: "Sabah Rutini",
        contextNote: "Düzenli tekrarlanan alışkanlık.",
        breakdownNote: "Özne (I) + yalın fiil (drink) + nesne (two cups of green tea) + zaman zarfı."
      },
      {
        en: "Our engineers develop innovative software solutions for healthcare companies.",
        tr: "Mühendislerimiz sağlık şirketleri için yenilikçi yazılım çözümleri geliştirir.",
        highlightedWords: ["engineers develop", "innovative software solutions"],
        grammarCategory: "Genel Mesleki Görev",
        contextNote: "Şirketin düzenli iş faaliyeti.",
        breakdownNote: "Çoğul özne (Our engineers) + yalın fiil (develop) + nesne."
      },
      {
        en: "They live in a quiet residential area near the botanical garden.",
        tr: "Onlar botanik bahçesinin yakınında sakin bir yerleşim bölgesinde yaşarlar.",
        highlightedWords: ["They live in"],
        grammarCategory: "Kalıcı Durum Bildirimi",
        contextNote: "İkamet durumu.",
        breakdownNote: "Özne (They) + yalın fiil (live) + yer edat öbeği."
      }
    ],
    vocabulary: [
      { word: "Routine", phonetic: "/ruːˈtiːn/", partOfSpeech: "noun", meaningTr: "Rutin, alışılmış düzen", exampleSentence: "Morning exercise is part of my routine." },
      { word: "Habit", phonetic: "/ˈhæb.ɪt/", partOfSpeech: "noun", meaningTr: "Alışkanlık", exampleSentence: "Reading before sleep is a healthy habit." },
      { word: "Collaborate", phonetic: "/kəˈlæb.ə.reɪt/", partOfSpeech: "verb", meaningTr: "İş birliği yapmak", exampleSentence: "We collaborate with international partners." },
      { word: "Typical", phonetic: "/ˈtɪp.ɪ.kəl/", partOfSpeech: "adjective", meaningTr: "Tipik, sıradan", exampleSentence: "A typical working day starts at 9 a.m." }
    ],
    quickCheck: {
      question: "'Biz her gün ofiste İngilizce konuşuruz' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "We speak English in the office every day.",
        "We are speak English in the office every day.",
        "We speaks English in the office every day.",
        "We English speak in the office every day."
      ],
      correctIndex: 0,
      explanation: "'We' öznesiyle fiil yalın halde (speak) gelir; 'are' eklenmez ve fiil nesneden önce yer alır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun seçeneği yerleştirin:",
      sentence: "My colleagues and I ___ to work by metro because it is fast.",
      options: ["go", "goes", "are go", "going"],
      correctAnswer: "go",
      hint: "'My colleagues and I' çoğuldur (We). Geniş zamanda 'We' ile fiil nasıl gelir?",
      explanation: "Çoğul öznelerde geniş zaman olumlu cümle fiilin yalın haliyle (go) kurulur: 'My colleagues and I go to work'."
    },
    sentenceBuilder: {
      promptTr: "Biz her sabah sekiz buçukta ofiste işe başlarız.",
      targetEn: "We start work in the office at half past eight every morning",
      availableWords: ["We", "start", "work", "in", "the", "office", "at", "half", "past", "eight", "every", "morning", "are", "starts"],
      explanation: "Özne (We) + fiil (start work) + yer (in the office) + saat (at half past eight) + sıklık (every morning)."
    },
    summaryTakeaways: [
      "Geniş Zaman alışkanlıklar, rutinler ve genel gerçekler için kullanılır.",
      "I, You, We, They şahıslarıyla fiil hiçbir ek almaz, sözlükteki yalın haliyle kullanılır.",
      "Geniş zaman eylem cümlelerinde kesinlikle 'am/is/are' kullanılmaz (I work, We live)."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 22: Present Simple: 3. Tekil Şahıs -s/-es/-ies Takısı Kuralları
  // -------------------------------------------------------------------------
  22: {
    skillType: 'grammar',
    concreteCompetency: "Geniş Zamanda 3. tekil şahıslarla (He, She, It ve tekil isimler) olumlu cümle kurarken fiil sonuna gelen -s, -es ve -ies takılarının imla ve fonetik kurallarını hatasız uygulayabilmek, düzensiz 'have -> has' dönüşümünü doğru kullanabilmek.",
    whyItMatters: "İngilizcede A1 seviyesinden C2 seviyesine kadar öğrencilerin yaptığı 1 numaralı konuşma hatası 3. tekil şahıs '-s' takısını yutmaktır. Bu kuralı oturtmak İngilizcenizin sağlamlığını doğrudan kanıtlar.",
    linguisticLogic: "İngilizce eski Germenik şahıs çekimlerinin neredeyse tamamını kaybetmiş, yalnızca 3. tekil şahıs (He, She, It) olumlu Geniş Zaman çekiminde fiil sonuna '-s' takısını korumuştur. Fiilin son harfine göre imla kuralları şöyledir: 1) Genel kural: Fiil sonuna '-s' gelir (works, plays). 2) -ch, -sh, -ss, -x, -o ile biten fiiller telaffuz kolaylığı için '-es' alır (watches, washes, kisses, fixes, goes, does). 3) Sessiz harf + y ile bitenlerde 'y' düşer, '-ies' gelir (study -> studies, fly -> flies). 4) Düzensiz: have -> has olur.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Genel Kural: Fiil Sonuna '-s' Eklenmesi",
        content: "Özne He, She, It veya tek bir kişi/nesne olduğunda (My manager, Sarah, The train), fiil sonuna '-s' takısı eklenir: work -> works, live -> lives, read -> reads, run -> runs.",
        formula: "He / She / It + FİİL-S + Nesne",
        keyPhrase: "He works in a bank.  |  She lives in Paris.  |  The train arrives at 9.",
        subPoints: [
          "'Sarah works' (Doğru) vs *'Sarah work' (Ağır gramer hatası).",
          "Sesli harf + 'y' ile bitenlerde 'y' düşmez, doğrudan -s gelir: play -> plays, buy -> buys, enjoy -> enjoys."
        ],
        rationale: "Bu ek İngilizcede tekillik ve zaman uyumunun yaşayan tek canlı ekidir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: '-es' Alan Fiiller: Tıslama Sesleri ve 'O' Harfi",
        content: "Fiil sonu tıslayan veya patlayan seslerle (-ch, -sh, -ss, -x, -z) veya 'o' harfiyle bitiyorsa, peş peşe iki sessiz ses çıkarılamayacağı için araya bir sesli girer ve '-es' eklenir: watch -> watches (/ɪz/), wash -> washes, pass -> passes, fix -> fixes, go -> goes, do -> does.",
        formula: "-ch, -sh, -ss, -x, -o ile bitenler -> + ES",
        keyPhrase: "He watches news.  |  She goes to the gym.  |  He fixes laptops.",
        subPoints: [
          "Telaffuz: -ch, -sh, -ss, -x sonundaki -es eki /ɪz/ (iz) olarak okunur: watch-iz, wash-iz.",
          "'go' fiili 'goes' (/ɡoʊz/), 'do' fiili 'does' (/dʌz/) olur."
        ],
        rationale: "İngilizce fonotaktik kuralları gereği tıslayan seslerin ardına doğrudan /s/ gelemez."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Sessiz + Y -> '-ies' ve Düzensiz 'HAVE -> HAS'",
        content: "Eğer fiil sessiz bir harf + 'y' ile bitiyorsa, 'y' harfi 'i'ye dönüşür ve '-es' eklenir: study -> studies, fly -> flies, try -> tries, carry -> carries. 'Sahip olmak' fiili ise kuralsızdır: *haves OLMAZ; 'HAS' (/hæz/) olur: 'He has a meeting'.",
        formula: "Sessiz + Y -> IES (study -> studies)  |  HAVE -> HAS",
        keyPhrase: "She studies medicine.  |  He has a busy schedule.",
        subPoints: [
          "play -> plays (çünkü 'y'den önce 'a' seslisi var, study gibi değildir!).",
          "'He has lunch at 1 p.m.' = O saat 13:00'te öğle yemeği yer."
        ],
        rationale: "İmla kuralları yazılı İngilizcenin temel sınav standartlarını oluşturur."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Play vs Study İmla Ayrımı",
        formula: "Sesli + Y = PLAYS (y düşmez)  |  Sessiz + Y = STUDIES (y düşer, -ies gelir)",
        explanation: "'Play' kelimesinde y'den önce sesli 'a' vardır, bu yüzden sadece -s alır. 'Study' kelimesinde y'den önce sessiz 'd' vardır, bu yüzden y düşer ve -ies gelir.",
        exampleSnippet: "Ali plays football, but he studies medicine at university.",
        cautionNote: "*plaies yazmayın! Sadece sessiz+y kuralında -ies olur."
      },
      {
        ruleTitle: "HAVE -> HAS Dönüşümü",
        formula: "I / You / We / They = HAVE  |  He / She / It = HAS",
        explanation: "3. tekil şahıslarda 'have' fiili '-s' takısı aldığında kuralsız olarak 'has' haline gelir. Asla *haves yazılmaz veya söylenmez.",
        exampleSnippet: "She has an important client meeting this afternoon.",
        tipNote: "He/She/It için daima HAS kullanın."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "He work in a big IT company.",
        correctExample: "He works in a big IT company.",
        rootCause: "3. tekil şahıs öznesi varken alışkanlıkla fiilin sonundaki '-s' takısını yutmak.",
        memoryTip: "He, She, It görünce fiile hemen 'S' YAPIŞTIR: He works, She lives!"
      },
      {
        wrongExample: "She haves a new car.",
        correctExample: "She has a new car.",
        rootCause: "Have fiilini düzenli sanıp sonuna -s eklemek.",
        memoryTip: "Haves diye bir kelime yoktur; doğrusu HAS'tir!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Bir Çalışanın Günlük Rutinini Yöneticiye Anlatma",
      description: "İnsan kaynakları uzmanının yeni ekip lideri Sarah'nın günlük çalışma rutinini müdüre özetlemesi.",
      contextType: "workplace",
      dialogue: [
        { speaker: "Manager", textEn: "How does Sarah manage her department so efficiently?", textTr: "Sarah departmanını nasıl bu kadar verimli yönetiyor?" },
        { speaker: "HR Specialist", textEn: "She arrives at the office at eight sharp. She checks all urgent tickets first.", textTr: "Ofise tam sekizde varır. Önce tüm acil talepleri kontrol eder." },
        { speaker: "Manager", textEn: "Does she collaborate with the design team?", textTr: "Tasarım ekibiyle iş birliği yapar mı?" },
        { speaker: "HR Specialist", textEn: "Yes, she meets them every Tuesday and she reviews their prototypes.", textTr: "Evet, onlarla her Salı buluşur ve prototiplerini inceler." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "1. Şahıs / Çoğul (I / You / We / They)",
      conceptB: "3. Tekil Şahıs (He / She / It)",
      keyDifference: "1. şahıslar ve çoğullarda fiil tamamen yalındır ('I work'). 3. tekil şahısta ise fiil '-s / -es / -ies' takısı alır ('He works').",
      exampleA: "They live in London. (Yalın)",
      exampleB: "She lives in London. (-s takılı)"
    },
    memoryHook: "Üçüncü Tekil Şifresi: HE, SHE, IT arkasından fiil tek kalmaz, 'S' takısıyla gücünü katlar: works, watches, studies, has!",
    examples: [
      {
        en: "My father goes to the gym three times a week and he eats very healthy food.",
        tr: "Babam haftada üç kez spor salonuna gider ve çok sağlıklı besinler yer.",
        highlightedWords: ["goes", "eats"],
        grammarCategory: "3. Tekil Şahıs Rutini",
        contextNote: "Tekil şahıs (My father = He) eylem çekimi.",
        breakdownNote: "go -> goes (-o ile bittiği için -es) + eat -> eats (-s)."
      },
      {
        en: "Sarah studies architectural design at university and she draws beautiful sketches.",
        tr: "Sarah üniversitede mimari tasarım okuyor ve güzel eskizler çiziyor.",
        highlightedWords: ["studies", "draws"],
        grammarCategory: "-ies ve -s İmlası",
        contextNote: "Eğitim ve yetenek tasviri.",
        breakdownNote: "study -> studies (sessiz+y) + draw -> draws."
      },
      {
        en: "The express train catches up quickly and reaches the capital in two hours.",
        tr: "Ekspres tren hızla yetişir ve başkente iki saatte ulaşır.",
        highlightedWords: ["catches up", "reaches"],
        grammarCategory: "-ch ile Biten Fiiller",
        contextNote: "Cansız tekil özne (The train = It) eylem çekimi.",
        breakdownNote: "catch -> catches + reach -> reaches (-es alır)."
      }
    ],
    vocabulary: [
      { word: "Manage", phonetic: "/ˈmæn.ɪdʒ/", partOfSpeech: "verb", meaningTr: "Yönetmek, idare etmek", exampleSentence: "She manages a large marketing team." },
      { word: "Reach", phonetic: "/riːtʃ/", partOfSpeech: "verb", meaningTr: "Ulaşmak, varmak", exampleSentence: "The bus reaches the station at 10." },
      { word: "Fly", phonetic: "/flaɪ/", partOfSpeech: "verb", meaningTr: "Uçmak (flies)", exampleSentence: "The pilot flies international routes." },
      { word: "Fix", phonetic: "/fɪks/", partOfSpeech: "verb", meaningTr: "Tamir etmek, onarmak (fixes)", exampleSentence: "He fixes computer hardware issues." }
    ],
    quickCheck: {
      question: "'Erkek kardeşim bir laboratuvarda çalışır ve yeni ilaçlar inceler' cümlesinin doğru fiil çekimleri hangi seçenektir?",
      options: [
        "works / studies",
        "work / study",
        "workes / studys",
        "is work / is study"
      ],
      correctIndex: 0,
      explanation: "'My brother' 3. tekil şahıs (He) olduğu için 'work -> works' ve 'study -> studies' biçimlerini alır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun fiil çekimini yerleştirin:",
      sentence: "Emily ___ breakfast at home every morning, but her brother eats at school.",
      options: ["has", "have", "haves", "having"],
      correctAnswer: "has",
      hint: "'Emily' tekil bir kadın öznedir (She). 'Have' fiili 3. tekil şahısta neye dönüşür?",
      explanation: "3. tekil şahıslarda 'have' fiili düzensiz olarak 'has' şeklini alır: 'Emily has breakfast'."
    },
    sentenceBuilder: {
      promptTr: "David her gün kütüphanede ders çalışır ve çok kitap okur.",
      targetEn: "David studies in the library every day and reads many books",
      availableWords: ["David", "studies", "in", "the", "library", "every", "day", "and", "reads", "many", "books", "study", "read"],
      explanation: "Özne (David) + fiil 1 (studies) + yer (in the library) + zaman (every day) + bağlaç (and) + fiil 2 (reads) + nesne (many books)."
    },
    summaryTakeaways: [
      "He, She, It ve tekil öznelerle geniş zaman olumlu cümlede fiile '-s', '-es' veya '-ies' eklenir.",
      "-ch, -sh, -ss, -x, -o ile biten fiiller '-es' alır (watches, goes, fixes).",
      "'have' fiili 3. tekil şahısta düzensiz olarak 'has' olur."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 23: Present Simple: Olumsuz Cümleler (Don't / Doesn't)
  // -------------------------------------------------------------------------
  23: {
    skillType: 'grammar',
    concreteCompetency: "Geniş Zamanda olumsuz cümleleri doğru yardımcı fiillerle (I/You/We/They için 'don't + V1', He/She/It için 'doesn't + V1') kurabilmek ve 'doesn't' geldiğinde ana fiildeki '-s' takısının kesinlikle düştüğünü uygulamak.",
    whyItMatters: "Neleri sevmediğinizi, hangi alışkanlıklara sahip olmadığınızı ('Sigara içmem', 'O kahve içmez', 'Hafta sonu çalışmayız') veya yanlış bilgileri düzeltmeyi olumsuz cümlelerle ifade edersiniz.",
    linguisticLogic: "Geniş Zamanda fiiller tek başlarına olumsuzluk eki (not) alamazlar (*I not go YANLIŞTIR). Olumsuzluk için devreye 'DO' yardımcı fiili girer: 1) I, You, We, They için 'do not' kaynaşarak 'DON'T' olur. 2) He, She, It için ise 3. tekil şahıs '-s' takısı 'do' yardımcı fiiline aktarılır ve 'does not' kaynaşarak 'DOESN'T' haline gelir. En kritik gramer kuralı: '-s' takısı zaten 'doesn't' içine geçtiği için, arkasından gelen ana fiil daima YALIN HALİNE (V1) döner (*He doesn't works KESİNLİKLE YANLIŞTIR; 'He doesn't work' DOĞRUDUR).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: I, You, We, They ile 'DON'T + V1'",
        content: "Çoğullar ve ben/sen özneleriyle olumsuz yapmak için özne ile fiil arasına 'don't' yerleştirilir. Fiil tamamen yalın kalır.",
        formula: "I / You / We / They + DON'T + FİİL (V1) + Nesne",
        keyPhrase: "I don't drink coffee.  |  We don't work at weekends.  |  They don't live here.",
        subPoints: [
          "'don't' kelimesi 'do not' ifadesinin günlük konuşmadaki standart kısaltmasıdır.",
          "Asla fiile dokunmayın: 'I don't like horror movies.'"
        ],
        rationale: "Yardımcı fiil 'do' İngilizce olumsuzluk mekanizmasının taşıyıcı kolonudur."
      },
      {
        stepNumber: 2,
        title: "2. Adım: He, She, It ile 'DOESN'T + V1' (Hayati Kural)",
        content: "Üçüncü tekil şahıslarda olumsuzluk 'doesn't' ile yapılır. Burada Türk öğrencilerin en sık takıldığı nokta: Fiilin sonundaki '-s' takısı 'do' fiiline geçip onu 'does' yaptığı için, ana fiil YALIN (V1) hale döner!",
        formula: "He / She / It + DOESN'T + FİİL (Yalın V1 - S Takısı YOK!)",
        keyPhrase: "He doesn't work on Sundays. (Asla *He doesn't works DENMEZ!)",
        subPoints: [
          "She plays tennis -> She doesn't play tennis ('plays'deki s düştü!).",
          "He has a car -> He doesn't have a car ('has' aslı olan 'have'e döndü!)."
        ],
        rationale: "Bir cümlede 3. şahıs işareti sadece bir kez verilir; 'doesn't' varken fiile tekrar 's' eklemek çifte çekim hatasıdır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: 'Have' Fiilinin Olumsuzu (doesn't have)",
        content: "3. tekil şahısta olumlu cümle 'She has a car' iken, olumsuz cümlede 'doesn't' geldiği için fiil yalın haline döner ve 'She doesn't have a car' olur. Asla *She doesn't has DENMEZ!",
        formula: "He/She/It + DOESN'T HAVE (Asla *doesn't has değil)",
        keyPhrase: "He doesn't have enough time.  |  The company doesn't have an office here.",
        subPoints: [
          "'doesn't' bir canavar gibidir; fiilin sonundaki tüm 's'leri yer ve fiili yalın bırakır!",
          "I don't have / She doesn't have."
        ],
        rationale: "Düzensiz fiillerin olumsuzluk refleksini oturtmak hata payını sıfırlar."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "'Doesn't' S Takısını Yutar Kuralı",
        formula: "He doesn't WORK (DOĞRU)  |  *He doesn't works (AĞIR HATA!)",
        explanation: "'Does' zaten içinde '-s' takısını barındırır. Bir cümlede iki tane 's' takısı yan yana gelemez. 'Doesn't' gördüyseniz arkasındaki fiil daima sözlükteki çıplak haliyle gelmelidir.",
        exampleSnippet: "Sarah speaks French, but she doesn't speak German.",
        cautionNote: "Doesn't sonrasında fiile asla -s eklemeyin!"
      },
      {
        ruleTitle: "Don't vs Doesn't Seçimi",
        formula: "I / You / We / They = DON'T  |  He / She / It = DOESN'T",
        explanation: "Özne tek bir kişi veya varlıksa 'doesn't', çoğul veya ben/sen ise 'don't' seçilir.",
        exampleSnippet: "My colleagues don't agree, but the manager doesn't mind.",
        tipNote: "Öznenin tekil/çoğul durumuna göre karar verin."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "He doesn't likes tea.",
        correctExample: "He doesn't like tea.",
        rootCause: "Olumlu cümledeki '-s' alışkanlığını 'doesn't' sonrasında da sürdürmek.",
        memoryTip: "Doesn't geldi, 's' takısı kaçtı: He doesn't LIKE!"
      },
      {
        wrongExample: "She doesn't has a passport.",
        correctExample: "She doesn't have a passport.",
        rootCause: "'Doesn't' sonrasında 'has' kullanmak; fiilin yalın halinin 'have' olduğunu unutmak.",
        memoryTip: "Doesn't arkasından daima HAVE gelir: doesn't HAVE!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Diyet ve Yaşam Tarzı Alışkanlıklarını Konuşma",
      description: "Öğle yemeği siparişi verirken iki arkadaşın tüketmedikleri yiyecek ve içecekleri belirtmesi.",
      contextType: "daily",
      dialogue: [
        { speaker: "Baris", textEn: "Do you want some sugar in your coffee, Lisa?", textTr: "Kahvene biraz şeker ister misin Lisa?" },
        { speaker: "Lisa", textEn: "No, thank you. I don't use sugar in hot drinks. I prefer black coffee.", textTr: "Hayır, teşekkürler. Sıcak içeceklerde şeker kullanmam. Sade kahve tercih ederim." },
        { speaker: "Baris", textEn: "And what about Michael? Does he drink black coffee too?", textTr: "Peki ya Michael? O da sade kahve içer mi?" },
        { speaker: "Lisa", textEn: "No, Michael doesn't drink coffee at all. He only drinks herbal tea.", textTr: "Hayır, Michael hiç kahve içmez. O sadece bitki çayı içer." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Olumsuzluk Eki (-me / -ma)",
      conceptB: "İngilizce Yardımcı Fiilli Olumsuzluk (don't / doesn't)",
      keyDifference: "Türkçede olumsuzluk eki fiilin içine kaynaşır ('iç-me-m', 'çalış-ma-z'). İngilizcede ise fiil bağımsız kalır, önüne ayrı bir 'don't' veya 'doesn't' yardımcı kelimesi gelir.",
      exampleA: "O kahve içmez.",
      exampleB: "He doesn't drink coffee."
    },
    memoryHook: "Olumsuzluk Kuralı: I, You, We, They -> DON'T! He, She, It -> DOESN'T! Ama unutma: DOESN'T fiildeki 's'yi silip süpürür!",
    examples: [
      {
        en: "My supervisor doesn't work on weekends because he spends time with his family.",
        tr: "Yöneticim hafta sonları çalışmaz çünkü ailesiyle vakit geçirir.",
        highlightedWords: ["doesn't work on weekends"],
        grammarCategory: "3. Tekil Şahıs Olumsuz",
        contextNote: "Hafta sonu çalışma durumu olumsuzu.",
        breakdownNote: "Özne (My supervisor) + doesn't + yalın fiil (work) + zaman zarfı."
      },
      {
        en: "We don't live in the city centre anymore; we live in a quiet suburb.",
        tr: "Artık şehir merkezinde yaşamıyoruz; sessiz bir banliyöde yaşıyoruz.",
        highlightedWords: ["We don't live"],
        grammarCategory: "Çoğul Şahıs Olumsuz",
        contextNote: "İkamet durumu olumsuzu.",
        breakdownNote: "Özne (We) + don't + yalın fiil (live) + yer."
      },
      {
        en: "The company doesn't have an office in Manchester, but it has one in London.",
        tr: "Şirketin Manchester'da bir ofisi yok, ancak Londra'da bir ofisi var.",
        highlightedWords: ["doesn't have an office"],
        grammarCategory: "Kurumsal Tekil Olumsuz",
        contextNote: "Kurumsal varlık/ofis durumu.",
        breakdownNote: "Özne (The company) + doesn't have (has değil!) + nesne."
      }
    ],
    vocabulary: [
      { word: "Prefer", phonetic: "/prɪˈfɜːr/", partOfSpeech: "verb", meaningTr: "Tercih etmek", exampleSentence: "I prefer tea to coffee." },
      { word: "Spend", phonetic: "/spend/", partOfSpeech: "verb", meaningTr: "Harcamak (zaman/para)", exampleSentence: "She spends time outdoors." },
      { word: "Rarely", phonetic: "/ˈreə.li/", partOfSpeech: "adverb", meaningTr: "Nadiren, seyrek olarak", exampleSentence: "He rarely eats fast food." },
      { word: "Anymore", phonetic: "/ˌen.iˈmɔːr/", partOfSpeech: "adverb", meaningTr: "Artık (olumsuz cümlelerde)", exampleSentence: "We don't live there anymore." }
    ],
    quickCheck: {
      question: "'Sarah et yemez çünkü o bir vejetaryendir' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "Sarah doesn't eat meat because she is a vegetarian.",
        "Sarah doesn't eats meat because she is a vegetarian.",
        "Sarah don't eat meat because she is a vegetarian.",
        "Sarah not eats meat because she is a vegetarian."
      ],
      correctIndex: 0,
      explanation: "3. tekil şahıs (Sarah) ile olumsuzluk 'doesn't' ile yapılır ve fiil yalın kalır: 'doesn't eat'."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun olumsuz yardımcı fiili yerleştirin:",
      sentence: "This laptop ___ have a long battery life, so keep the charger with you.",
      options: ["doesn't", "don't", "isn't", "not"],
      correctAnswer: "doesn't",
      hint: "'This laptop' tekil bir cansız öznedir (It). 'Have' fiiliyle olumsuzluk nasıl kurulur?",
      explanation: "Tekil 3. şahıslarda geniş zaman fiil olumsuzu 'doesn't + have' ile yapılır: 'This laptop doesn't have'."
    },
    sentenceBuilder: {
      promptTr: "Biz hafta sonları çalışmayız ve o hiç kahve içmez.",
      targetEn: "We don't work at weekends and he doesn't drink coffee",
      availableWords: ["We", "don't", "work", "at", "weekends", "and", "he", "doesn't", "drink", "coffee", "drinks", "not", "isn't"],
      explanation: "Çoğul olumsuz (We don't work at weekends) + bağlaç (and) + tekil olumsuz (he doesn't drink coffee)."
    },
    summaryTakeaways: [
      "Geniş Zamanda olumsuzluk I, You, We, They için 'don't + V1', He, She, It için 'doesn't + V1' ile yapılır.",
      "'doesn't' kullanıldığında ana fiildeki '-s' takısı kesinlikle düşer ve fiil yalın haline döner.",
      "3. tekil şahıslarda olumsuz sahiplik 'doesn't have' kalıbıyla söylenir; asla *doesn't has denmez."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 24: Present Simple: Soru Cümleleri (Do / Does) ve Kısa Cevaplar
  // -------------------------------------------------------------------------
  24: {
    skillType: 'grammar',
    concreteCompetency: "Geniş Zamanda 'Evet/Hayır' soru cümlelerini doğru yardımcı fiillerle (Do I/you/we/they...? / Does he/she/it...?) kurabilmek, 'Does' kullanıldığında fiilin yalın kaldığını uygulamak ve doğal kısa cevaplar verebilmek ('Yes, I do. / No, she doesn't.').",
    whyItMatters: "Birinin ne iş yaptığını, İngilizce bilip bilmediğini, nerede oturduğunu veya bir alışkanlığını öğrenmek soru sorma refleksiyle mümkündür.",
    linguisticLogic: "Geniş Zamanda soru sormak için cümlenin başına 'DO' veya 'DOES' yardımcı fiili getirilir: 1) I, You, We, They özneleri için cümlenin başına 'DO' gelir: 'Do you speak English?'. 2) He, She, It özneleri için cümlenin başına 'DOES' gelir: 'Does he work here?'. Tıpkı olumsuz cümledeki gibi, '-s' takısı 'does' içine girdiği için ana fiil daima YALIN HALİNDE (V1) kalır (*Does he works KESİNLİKLE YANLIŞTIR). Kısa cevaplarda ise 'do/don't' veya 'does/doesn't' kullanılır.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: 'DO' ile Soru Sorma (I, You, We, They)",
        content: "Düz cümlenin en başına 'DO' getirilir; cümlenin geri kalanı hiçbir değişikliğe uğramadan aynen korunur.",
        formula: "DO + [I / You / We / They] + FİİL (V1) + Nesne ?",
        keyPhrase: "Do you live in London?  |  Do they work on Saturdays?  |  Do we have time?",
        subPoints: [
          "'You speak English' (Düz cümle) -> 'DO you speak English?' (Soru cümlesi).",
          "Fiil tamamen yalındır, hiçbir ek almaz."
        ],
        rationale: "Yardımcı fiili başa çekme kuralı soru yapısının değişmez prensibidir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: 'DOES' ile Soru Sorma (He, She, It)",
        content: "Özne He, She, It olduğunda cümlenin başına 'DOES' gelir. Ve kural: 'Does' başa geldiği için ana fiildeki '-s' takısı DÜŞER, fiil YALIN (V1) hale döner!",
        formula: "DOES + [He / She / It] + FİİL (Yalın V1 - S Takısı YOK!) ?",
        keyPhrase: "Does she play tennis? (Asla *Does she plays DENMEZ!)",
        subPoints: [
          "'Does he have a car?' (Does geldiği için 'has' değil, yalın olan 'have' kullanılır).",
          "'Does your brother work in IT?'"
        ],
        rationale: "Çifte 's' hatası soru cümlelerinde en sık tekrarlanan aksaklıktır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Doğal Kısa Cevaplar (Yes, I do. / No, he doesn't.)",
        content: "Geniş zaman sorularına yanıt verirken fiil tekrarlanmaz; sorunun yöneltildiği yardımcı fiil kullanılır. Do ile sorulana 'do/don't', Does ile sorulana 'does/doesn't' ile karşılık verilir.",
        formula: "Yes, I/you/we/they DO.  |  No, I/you/we/they DON'T.\nYes, he/she/it DOES.  |  No, he/she/it DOESN'T.",
        keyPhrase: "Do you speak German? - No, I don't.  |  Does he live alone? - Yes, he does.",
        subPoints: [
          "Biri size 'Do you work here?' dediğinde asla *'Yes, I work' demeyin; 'Yes, I do' deyin.",
          "Sorudaki 'you', cevaba 'I' veya 'we' olarak döner."
        ],
        rationale: "Kısa cevaplar ana dili İngilizce olanların en temel diyalog refleksidir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Does Varsa Fiil YALINDIR!",
        formula: "Does he WORK? (DOĞRU)  |  *Does he works? (AĞIR HATA!)",
        explanation: "Cümlede 'does' varsa 3. şahıs işareti verilmiş demektir. Ana fiile asla tekrar '-s' takısı eklemeyin.",
        exampleSnippet: "Does Sarah live in Manchester?",
        cautionNote: "Does sonrasında fiile -s eklemeyin!"
      },
      {
        ruleTitle: "Kısa Cevapta Fiil Değil, Do/Does Kullanılır",
        formula: "Do you play? -> Yes, I DO (DOĞRU)  |  *Yes, I play (YAPAY/YANLIŞ)",
        explanation: "İngilizcede kısa cevap verirken eylem fiili tekrarlanmaz; cümlenin başındaki yardımcı fiil (do/does) korunur.",
        exampleSnippet: "Does he study hard? - Yes, he does.",
        tipNote: "Soruda neyle başladıysanız (Do/Does), cevapta da onu kullanın."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Does your friend plays basketball?",
        correctExample: "Does your friend play basketball?",
        rootCause: "3. tekil şahıs sorusunda 'does' varken fiilin sonundaki 's' takısını korumak.",
        memoryTip: "Does başa gelince fiildeki 's' takısı uçar: Does he PLAY?"
      },
      {
        wrongExample: "Do you like chocolate? -> Yes, I like.",
        correctExample: "Do you like chocolate? -> Yes, I do.",
        rootCause: "Türkçe 'Evet severim' mantığıyla fiili tekrarlamak.",
        memoryTip: "Do ile sorulduysa do ile cevapla: YES, I DO!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Yurt Dışında Yeni Bir Kulübe Kayıt Olurken",
      description: "Spor kulübündeki görevlinin yeni üye adayına alışkanlıkları ve programı hakkında sorular sorması.",
      contextType: "social",
      dialogue: [
        { speaker: "Staff", textEn: "Hello! Welcome to Metro Fitness. Do you exercise regularly?", textTr: "Merhaba! Metro Fitness'a hoş geldiniz. Düzenli olarak spor yapar mısınız?" },
        { speaker: "Can", textEn: "Yes, I do. I go running three times a week.", textTr: "Evet, yaparım. Haftada üç kez koşuya çıkarım." },
        { speaker: "Staff", textEn: "Excellent. Does your membership card include the swimming pool?", textTr: "Mükemmel. Üyelik kartınız yüzme havuzunu kapsıyor mu?" },
        { speaker: "Can", textEn: "No, it doesn't. Can I upgrade it today?", textTr: "Hayır kapsamıyor. Bugün yükseltebilir miyim?" }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Soru Cümlesi",
      conceptB: "İngilizce Do/Does Soru Yapısı",
      keyDifference: "Türkçede cümlenin sonuna '-r misin / -r mi' eki eklenir ('Çalışır mısın?'). İngilizcede ise cümlenin en başına 'Do' veya 'Does' yardımcı fiili getirilir ('Do you work?').",
      exampleA: "İngilizce konuşur musun?",
      exampleB: "Do you speak English?"
    },
    memoryHook: "Soru Kancası: Sorarken başa DO veya DOES fırlat! DOES gelince fiilin 's'sini at! Cevapta DO / DOES ile kapat!",
    examples: [
      {
        en: "Do you commute to work by public transport every morning? - Yes, I do.",
        tr: "Her sabah işe toplu taşımayla mı gidip gelirsiniz? - Evet, öyle.",
        highlightedWords: ["Do you commute", "Yes, I do"],
        grammarCategory: "2. Şahıs Soru ve Cevap",
        contextNote: "Ulaşım alışkanlığı sorgulama.",
        breakdownNote: "Do + you + yalın fiil (commute) + yer/ulaşım -> Yes, I do."
      },
      {
        en: "Does Michael speak Italian fluently? - No, he doesn't, but he understands Spanish.",
        tr: "Michael akıcı şekilde İtalyanca konuşur mu? - Hayır konuşmaz, ama İspanyolca anlar.",
        highlightedWords: ["Does Michael speak", "No, he doesn't"],
        grammarCategory: "3. Tekil Şahıs Soru ve Cevap",
        contextNote: "Dil becerisi sorgulama.",
        breakdownNote: "Does + tekil özne (Michael) + yalın fiil (speak) -> No, he doesn't."
      },
      {
        en: "Does this bus stop in front of the central hospital?",
        tr: "Bu otobüs merkez hastanesinin önünde durur mu?",
        highlightedWords: ["Does this bus stop"],
        grammarCategory: "Cansız Tekil Soru",
        contextNote: "Toplu taşıma güzergahı sorma.",
        breakdownNote: "Does + tekil nesne (this bus) + yalın fiil (stop) + konum."
      }
    ],
    vocabulary: [
      { word: "Commute", phonetic: "/kəˈmjuːt/", partOfSpeech: "verb", meaningTr: "İşe gidip gelmek (yolculuk)", exampleSentence: "I commute by train every day." },
      { word: "Regularly", phonetic: "/ˈreɡ.jə.lə.li/", partOfSpeech: "adverb", meaningTr: "Düzenli olarak", exampleSentence: "Do you exercise regularly?" },
      { word: "Include", phonetic: "/ɪnˈkluːd/", partOfSpeech: "verb", meaningTr: "İçermek, kapsamak", exampleSentence: "Does the price include breakfast?" },
      { word: "Understand", phonetic: "/ˌʌn.dəˈstænd/", partOfSpeech: "verb", meaningTr: "Anlamak", exampleSentence: "Do you understand the question?" }
    ],
    quickCheck: {
      question: "'Kız kardeşin bir bankada mı çalışır?' sorusunun en doğru İngilizce karşılığı hangisidir?",
      options: [
        "Does your sister work in a bank?",
        "Does your sister works in a bank?",
        "Do your sister work in a bank?",
        "Is your sister work in a bank?"
      ],
      correctIndex: 0,
      explanation: "'your sister' 3. tekil şahıs (She) olduğu için 'Does' başa gelir ve fiil yalın kalır: 'Does your sister work'."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun yardımcı fiili yerleştirin:",
      sentence: "___ you and your team travel abroad frequently for business conferences?",
      options: ["Do", "Does", "Are", "Have"],
      correctAnswer: "Do",
      hint: "'you and your team' çoğul bir öznedir (You / Siz).",
      explanation: "Çoğul öznelerle Geniş Zaman soru cümlelerinde 'Do' başa gelir: 'Do you and your team travel?'."
    },
    sentenceBuilder: {
      promptTr: "Sen hafta sonları tenis oynar mısın? - Hayır oynamam.",
      targetEn: "Do you play tennis at weekends no I don't",
      availableWords: ["Do", "you", "play", "tennis", "at", "weekends", "no", "I", "don't", "does", "plays", "not"],
      explanation: "Soru (Do you play tennis at weekends) + kısa cevap (no I don't)."
    },
    summaryTakeaways: [
      "Geniş Zamanda soru yaparken I, You, We, They için 'Do', He, She, It için 'Does' başa gelir.",
      "'Does' kullanıldığında fiildeki '-s' takısı düşer ve fiil tamamen yalın kalır.",
      "Kısa cevaplarda fiil tekrarlanmaz; 'Yes, I do / No, I don't' veya 'Yes, he does / No, he doesn't' denir."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 25: Sıklık Zarfları: Always, Usually, Often, Sometimes, Never
  // -------------------------------------------------------------------------
  25: {
    skillType: 'grammar',
    concreteCompetency: "Sıklık zarflarını (always %100, usually %85, often %70, sometimes %50, rarely/seldom %15, never %0) anlam dereceleriyle kavrayabilmek, cümle içindeki yerleşim kuralını (Normal fiilden ÖNCE, To Be fiilinden SONRA) ve 'never' kelimesinin olumlu fiille olumsuz anlam yarattığını hatasız uygulayabilmek.",
    whyItMatters: "Bir eylemi ne sıklıkla yaptığınızı ('Her zaman erken kalkarım', 'Asla geç kalmam', 'Bazen dışarıda yemek yeriz') ifade etmek günlük rutinin en belirleyici detayını oluşturur.",
    linguisticLogic: "İngilizcede sıklık zarflarının (Adverbs of Frequency) cümle içindeki konumu katı bir kurala bağlıdır: 1) Normal Eylem Fiillerinden (drink, go, work) HEMEN ÖNCE gelir: 'I always drink coffee.' 2) 'To Be (am/is/are)' fiilinden HEMEN SONRA gelir: 'He is always late.' 3) En büyük tuzak: 'NEVER' kelimesi kendi içinde 'asla/hiç' olumsuzluğunu barındırır; bu yüzden 'never' olan bir cümlede 'don't / doesn't' KULLANILMAZ (*I don't never eat meat KESİNLİKLE YANLIŞTIR; 'I never eat meat' DOĞRUDUR).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Sıklık Zarfları Cetveli (%100'den %0'a)",
        content: "Sıklık zarfları eylemin tekrarlanma yüzdesini gösterir: Always (%100 - Her zaman), Usually / Normally (%80-90 - Genellikle), Often (%60-70 - Sık sık), Sometimes (%50 - Bazen), Rarely / Seldom (%10-20 - Nadiren), Never (%0 - Asla / Hiçbir zaman).",
        formula: "%100: ALWAYS -> %85: USUALLY -> %70: OFTEN -> %50: SOMETIMES -> %0: NEVER",
        keyPhrase: "I always wake up early.  |  I never drink alcohol.",
        subPoints: [
          "'Often' sözcüğündeki 't' harfi sessiz okunabilir: /ˈɒf.ən/ veya /ˈɒf.tən/ (ikisi de kabul edilir).",
          "'Sometimes' cümle başında da kullanılabilir: 'Sometimes I walk to work.'"
        ],
        rationale: "Zarfların sıklık yüzdeleri öğrencinin doğru kavramı seçmesini sağlar."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Cümle İçi Yerleşim Kuralı (Altın Kural)",
        content: "Sıklık zarfları iki farklı yerde durur: Kural A: Normal bir fiil varsa FİİLİN ÖNÜNE gelir (Özne + Zarf + Fiil): 'I always read'. Kural B: 'To Be (am/is/are)' varsa FİİLİN SAĞINA geçer (Özne + be + Zarf): 'He is always late'.",
        formula: "Normal Fiil: Özne + ZARF + Fiil  |  To Be: Özne + am/is/are + ZARF",
        keyPhrase: "She usually arrives on time.  |  She is usually on time.",
        subPoints: [
          "'I always drink' (Eylem fiili önünde).",
          "'I am always happy' (To Be arkasında).",
          "Asla fiil ile nesne arasına sıklık zarfı koymayın: *I drink always coffee YANLIŞTIR!"
        ],
        rationale: "İngilizcede orta konumlu zarfların (mid-position adverbs) yerleşim disiplinidir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: 'NEVER' Kuralı (Çifte Olumsuzluk Yasağı)",
        content: "'Never' kelimesi yapısı gereği cümlenin anlamını tek başına olumsuz yapar. Bu nedenle İngilizcede çifte olumsuzluk (double negative) kuralı gereği, 'never' ile kurulan cümlenin fiili OLUMLU yapıda kalmalıdır.",
        formula: "Özne + NEVER + Fiil (Olumlu Çekim!)  (Asla don't/doesn't yok)",
        keyPhrase: "I never eat fast food. (DOĞRU)  |  *I don't never eat fast food. (YANLIŞ!)",
        subPoints: [
          "He never drinks coffee (3. tekil şahısta fiil yine -s alır: drinks).",
          "Never tek başına olumsuzluk için yeterlidir."
        ],
        rationale: "İngilizce mantık ilkeleri gereği iki olumsuz birbirini götürüp olumlu yapacağı için çifte olumsuz yasaktır."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Zarfların Konumu: Eylemden Önce, To Be'den Sonra",
        formula: "Özne + [ZARF] + Eylem Fiili  |  Özne + [am/is/are] + [ZARF]",
        explanation: "Normal eylem fiillerinde sıklık zarfı fiilden ÖNCE gelir (I often go). Ancak 'am/is/are' fiilinde sıklık zarfı fiilden SONRA gelir (I am often tired).",
        exampleSnippet: "David usually works late, but he is never late for meetings.",
        cautionNote: "Sıralamayı karıştırmayın: 'He is always' (DOĞRU) vs *'He always is' (YANLIŞ)."
      },
      {
        ruleTitle: "Never ile Çifte Olumsuzluk YASAKTIR!",
        formula: "I NEVER smoke (DOĞRU)  |  *I don't never smoke (AĞIR HATA!)",
        explanation: "'Never' zaten 'asla' demektir. Yanına 'don't' veya 'doesn't' koyarsanız mantık hatası oluşur.",
        exampleSnippet: "She never eats seafood.",
        tipNote: "Never varsa cümlede don't veya doesn't kullanamazsınız."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I drink always coffee in the morning.",
        correctExample: "I always drink coffee in the morning.",
        rootCause: "Sıklık zarfını fiil ile nesnenin arasına sokma hatası.",
        memoryTip: "Zarf fiilden önce gelir: ALWAYS drink!"
      },
      {
        wrongExample: "He is late always.",
        correctExample: "He is always late.",
        rootCause: "Sıklık zarfını cümlenin en sonuna atma hatası.",
        memoryTip: "To Be'den hemen sonra koy: is ALWAYS late!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Doktor Kontrolünde Yaşam Alışkanlıklarını Sorgulama",
      description: "Genel sağlık taramasında doktorun hastanın beslenme ve uyku sıklıklarını değerlendirmesi.",
      contextType: "daily",
      dialogue: [
        { speaker: "Doctor", textEn: "How often do you exercise during the week?", textTr: "Hafta içinde ne sıklıkla spor yaparsınız?" },
        { speaker: "Patient", textEn: "I usually go for a walk in the evening, and I sometimes cycle at the weekend.", textTr: "Genellikle akşamları yürüyüşe çıkarım ve bazen hafta sonu bisiklete binerim." },
        { speaker: "Doctor", textEn: "Do you drink coffee before going to bed?", textTr: "Yatmadan önce kahve içer misiniz?" },
        { speaker: "Patient", textEn: "No, doctor. I never drink coffee after six in the evening. I am always in bed by eleven.", textTr: "Hayır doktor bey. Akşam saat altıdan sonra asla kahve içmem. Saat on birde her zaman yatakta olurum." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Sıklık Zarfı Konumu",
      conceptB: "İngilizce Sıklık Zarfı Konumu",
      keyDifference: "Türkçede 'Her zaman geç kalır' veya 'Geç kalır her zaman' gibi esnek sıralamalar mümkündür. İngilizcede ise zarf mutlaka ya ana fiilden hemen önce (always works) ya da To Be'den hemen sonra (is always) gelmelidir.",
      exampleA: "O her zaman güler yüzlüdür.",
      exampleB: "She is always smiling."
    },
    memoryHook: "Zarf Kuralı: Normal fiilin ÖNÜNE geç (always eat), To Be fiilinin ARKASINA geç (is always), NEVER görünce don't/doesn't'ı unut!",
    examples: [
      {
        en: "Our project manager always reviews the technical code before final deployment.",
        tr: "Proje yöneticimiz son dağıtımdan önce teknik kodları her zaman inceler.",
        highlightedWords: ["always reviews"],
        grammarCategory: "Fiilden Önce Zarf",
        contextNote: "Düzenli iş süreci adımı.",
        breakdownNote: "Özne + always + 3. tekil fiil (reviews) + nesne."
      },
      {
        en: "Public transport in this city is usually very punctual and reliable.",
        tr: "Bu şehirdeki toplu taşıma genellikle çok dakik ve güvenilirdir.",
        highlightedWords: ["is usually very punctual"],
        grammarCategory: "To Be Arkasında Zarf",
        contextNote: "Ulaşım kalitesi tasviri.",
        breakdownNote: "Özne (Public transport) + is + usually + sıfatlar."
      },
      {
        en: "Alex never drinks sugary soda because he cares about his dental health.",
        tr: "Alex diş sağlığına önem verdiği için asla şekerli gazoz içmez.",
        highlightedWords: ["never drinks"],
        grammarCategory: "Never ve Olumlu Fiil",
        contextNote: "Kişisel sağlık ilkesi.",
        breakdownNote: "Özne (Alex) + never + fiil-s (drinks - don't yok!)."
      }
    ],
    vocabulary: [
      { word: "Punctual", phonetic: "/ˈpʌŋk.tʃu.əl/", partOfSpeech: "adjective", meaningTr: "Dakik, tam zamanında gelen", exampleSentence: "She is always punctual for meetings." },
      { word: "Reliable", phonetic: "/rɪˈlaɪ.ə.bəl/", partOfSpeech: "adjective", meaningTr: "Güvenilir, sağlam", exampleSentence: "The train service is very reliable." },
      { word: "Frequently", phonetic: "/ˈfriː.kwənt.li/", partOfSpeech: "adverb", meaningTr: "Sıkça, sık sık (often)", exampleSentence: "We travel frequently for business." },
      { word: "Seldom", phonetic: "/ˈsel.dəm/", partOfSpeech: "adverb", meaningTr: "Nadiren (rarely)", exampleSentence: "He seldom watches television." }
    ],
    quickCheck: {
      question: "'David her zaman sabahları erken kalkar' cümlesinin doğru İngilizce dizilimi hangisidir?",
      options: [
        "David always wakes up early in the morning.",
        "David wakes up always early in the morning.",
        "David is always wake up early in the morning.",
        "David wakes always up early in the morning."
      ],
      correctIndex: 0,
      explanation: "Sıklık zarfları normal eylem fiillerinden (wakes up) HEMEN ÖNCE gelir: 'David always wakes up'."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun kelime dizilimini yerleştirin:",
      sentence: "My brother is a very responsible driver; he ___ behind the wheel.",
      options: ["never uses his phone", "doesn't never use his phone", "uses never his phone", "is never use his phone"],
      correctAnswer: "never uses his phone",
      hint: "'never' kendi içinde olumsuzdur, don't/doesn't gerektirmez ve fiilden önce gelir.",
      explanation: "'Never' fiilden önce gelir ve fiil olumlu çekimlenir (uses): 'never uses his phone'."
    },
    sentenceBuilder: {
      promptTr: "O her zaman dakiktir ve işe asla geç kalmaz.",
      targetEn: "He is always punctual and he is never late for work",
      availableWords: ["He", "is", "always", "punctual", "and", "he", "is", "never", "late", "for", "work", "always is", "doesn't"],
      explanation: "1. Kısım (He is always punctual) + bağlaç (and) + 2. Kısım (he is never late for work)."
    },
    summaryTakeaways: [
      "Sıklık zarfları normal eylem fiillerinin ÖNÜNE (always drink), To Be fiilinin ise ARKASINA (is always) gelir.",
      "'Never' tek başına cümleyi olumsuz yapar; yanında asla 'don't' veya 'doesn't' kullanılmaz.",
      "Sıklık zarfları fiil ile nesne arasına asla sokulmaz."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 26: Günlük Sabah Rutini Fiilleri
  // -------------------------------------------------------------------------
  26: {
    skillType: 'vocabulary',
    concreteCompetency: "Sabah rutinini oluşturan temel fiil öbeklerini (wake up vs get up farkı, brush teeth, wash face, take a shower, get dressed, have breakfast, leave home) kronolojik sıra belirteçleriyle (first, then, after that) akıcı şekilde kullanabilmek.",
    whyItMatters: "Sabah rutini her insanın her gün istisnasız yaşadığı en somut döngüdür. Dil öğreniminde günlük eylemleri İngilizce düşünerek ifade edebilmek temel konuşma özgüvenini inşa eder.",
    linguisticLogic: "İngilizce sabah rutininde birleşik fiiller (phrasal verbs) ve sabit eşdizimler (collocations) hakimdir. En önemli kavramsal ayrım: 'wake up' gözünü açıp uyanmaktır; 'get up' ise yataktan fiziksel olarak kalkıp ayağa dikilmektir. Kahvaltı için 'make/eat' yerine en doğal fiil 'have breakfast'tır. Rutin sıralaması için 'First' (İlk olarak), 'Then' (Sonra), 'After that' (Ondan sonra) zaman bağlaçları kullanılır.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Uyanış: Wake up vs Get up Ayrımı",
        content: "'Wake up' uykudan uyanmak, bilincin açılmasıdır (Örn: Alarm çalınca uyanırım). 'Get up' ise yorganı kaldırıp yataktan dışarı çıkmaktır. Arada geçirilen vakit için: 'I wake up at 7:00, but I get up at 7:15.'",
        formula: "WAKE UP = Uyanmak  |  GET UP = Yataktan Kalkmak",
        keyPhrase: "I wake up at seven o'clock.  |  I get up ten minutes later.",
        subPoints: [
          "Alarm çalması için 'The alarm goes off' denir.",
          "Yatakta kalıp tembellik etmek için 'stay in bed' kullanılır."
        ],
        rationale: "Bu iki eylemin ayrımı günlük anlatımlarda gerçekçilik ve doğallık sağlar."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Kişisel Bakım ve Hazırlık Fiilleri",
        content: "Yataktan kalktıktan sonraki temel banyo ve giyinme fiilleri: 'wash my face' (yüzümü yıkamak), 'brush my teeth' (dişlerimi fırçalamak - tooth çoğulu teeth!), 'take / have a shower' (duş almak), 'get dressed' (üstünü giyinmek / giyinmek).",
        formula: "brush my teeth  |  wash my face  |  take a shower  |  get dressed",
        keyPhrase: "First, I wash my face and brush my teeth. Then, I take a quick shower.",
        subPoints: [
          "'brush my tooth' YANLIŞTIR; dişler çoğul olduğu için 'brush my teeth' denir.",
          "'get dressed' = kıyafetleri giyinmek (kıyafet ismi belirtmeden)."
        ],
        rationale: "Sabit eşdizimler (collocations) kelime ezberini refleks haline dönüştürür."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Kahvaltı ve Evden Çıkış (have breakfast & leave home)",
        content: "Kahvaltı yapmak için en doğal İngilizce kalıp 'HAVE breakfast'tır. Evden ayrılmak için 'LEAVE home' denir. Formül: 'After that, I have breakfast and leave home at eight.'",
        formula: "HAVE breakfast  |  LEAVE home (+ for work/school)",
        keyPhrase: "I have breakfast with my family.  |  I leave home at eight thirty.",
        subPoints: [
          "'eat breakfast' da doğrudur ancak 'have breakfast' konuşma dilinde çok daha yaygındır.",
          "'leave from home' YANLIŞTIR; 'leave' fiili doğrudan nesnesini alır: 'leave home'."
        ],
        rationale: "Evden çıkış eylemiyle sabah rutini tamamlanır ve günün ikinci evresine geçilir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Wake up vs Get up",
        formula: "Wake up = Gözünü açmak  |  Get up = Yataktan kalkmak",
        explanation: "Sabah 07:00'de uyanıp yarım saat telefona bakan biri 'I wake up at 7, but I get up at 7:30' der.",
        exampleSnippet: "My alarm rings at 06:30, so I wake up immediately.",
        tipNote: "İki eylemi peş peşe anlatarak zengin bir cümle kurun."
      },
      {
        ruleTitle: "Leave Home (from YOK!)",
        formula: "LEAVE HOME (DOĞRU)  |  *LEAVE FROM HOME (YANLIŞ!)",
        explanation: "Türkçe 'evden çıkmak' derken '-den' eki kullanılır. İngilizcede ise 'leave' fiili doğrudan mekanı alır, araya 'from' edatı konmaz.",
        exampleSnippet: "I leave home at quarter to eight every weekday.",
        cautionNote: "Asla 'leave from home' yazmayın!"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I brush my tooth every morning.",
        correctExample: "I brush my teeth every morning.",
        rootCause: "Tekil 'tooth' ile düzensiz çoğul 'teeth' farkını unutmak.",
        memoryTip: "Bir tek dişi değil, tüm dişleri fırçalarsın: TEETH!"
      },
      {
        wrongExample: "I make breakfast and leave from home.",
        correctExample: "I have breakfast and leave home.",
        rootCause: "Türkçe 'kahvaltı yapmak' ve 'evden ayrılmak' ifadelerini birebir çevirmek.",
        memoryTip: "Kahvaltı yapılırken 'HAVE', evden çıkarken doğrudan 'LEAVE HOME'!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Sabah Rutinini Arkadaşla Karşılaştırma",
      description: "İki üniversite öğrencisinin sabah derslerine yetişmek için nasıl hazırlandıklarını anlatması.",
      contextType: "daily",
      dialogue: [
        { speaker: "Kemal", textEn: "What time do you usually wake up on weekdays?", textTr: "Hafta içi genellikle saat kaçta uyanırsın?" },
        { speaker: "Alex", textEn: "My alarm rings at six thirty, so I wake up then, but I get up at seven.", textTr: "Alarmım altı buçukta çalar, o zaman uyanırım ama yedi gibi kalkarım." },
        { speaker: "Kemal", textEn: "Do you have breakfast at home?", textTr: "Evde kahvaltı yapar mısın?" },
        { speaker: "Alex", textEn: "Yes, I take a quick shower, get dressed, have eggs and tea, and leave home at eight.", textTr: "Evet, hızlı bir duş alırım, giyinirim, yumurta ve çay içerim ve sekizde evden çıkarım." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe 'Kahvaltı Yapmak'",
      conceptB: "İngilizce 'Have Breakfast'",
      keyDifference: "Türkçede 'yapmak' fiili kullanılır. İngilizcede ise 'make breakfast' kahvaltıyı mutfakta hazırlamak/pişirmektir; o kahvaltıyı yemek ve yapmak ise 'have breakfast'tır.",
      exampleA: "Annem kahvaltı hazırlar (makes breakfast), biz kahvaltı yaparız (have breakfast).",
      exampleB: "My mother makes breakfast, and we have breakfast together."
    },
    memoryHook: "Sabah Rutini Zinciri: Wake up (uyan) -> Get up (kalk) -> Brush teeth (fırçala) -> Take a shower (duş al) -> Have breakfast (ye) -> Leave home (çık)!",
    examples: [
      {
        en: "I wake up at six thirty, take a refreshing shower, and get dressed for work.",
        tr: "Saat altı buçukta uyanırım, ferahlatıcı bir duş alırım ve iş için giyinirim.",
        highlightedWords: ["wake up", "take a refreshing shower", "get dressed"],
        grammarCategory: "Sabah Hazırlık Eylemleri",
        contextNote: "Uyanış ve hazırlanma zinciri.",
        breakdownNote: "Geniş zaman sıralı eylemler (wake up -> take a shower -> get dressed)."
      },
      {
        en: "David always brushes his teeth and washes his face before he has breakfast.",
        tr: "David kahvaltı yapmadan önce her zaman dişlerini fırçalar ve yüzünü yıkar.",
        highlightedWords: ["brushes his teeth", "washes his face", "has breakfast"],
        grammarCategory: "3. Tekil Sabah Rutini",
        contextNote: "Kişisel bakım ve beslenme sırası.",
        breakdownNote: "3. tekil şahıs takıları (-es) ve collocations."
      },
      {
        en: "We leave home at quarter past eight to catch the morning express bus.",
        tr: "Sabah ekspres otobüsüne yetişmek için evden sekizi çeyrek geçe çıkarız.",
        highlightedWords: ["leave home at quarter past eight"],
        grammarCategory: "Evden Çıkış Saati",
        contextNote: "Ulaşıma başlama anı.",
        breakdownNote: "leave home + saat (at quarter past eight) + amaç mastarı."
      }
    ],
    vocabulary: [
      { word: "Alarm", phonetic: "/əˈlɑːm/", partOfSpeech: "noun", meaningTr: "Çalar saat, alarm", exampleSentence: "My alarm goes off at 6 a.m." },
      { word: "Shower", phonetic: "/ʃaʊ.ər/", partOfSpeech: "noun", meaningTr: "Duş", exampleSentence: "A cold shower wakes me up." },
      { word: "Toothbrush", phonetic: "/ˈtuːθ.brʌʃ/", partOfSpeech: "noun", meaningTr: "Diş fırçası", exampleSentence: "I need a new toothbrush." },
      { word: "Refreshing", phonetic: "/rɪˈfreʃ.ɪŋ/", partOfSpeech: "adjective", meaningTr: "Ferahlatıcı, canlandırıcı", exampleSentence: "A refreshing cup of tea is great." }
    ],
    quickCheck: {
      question: "'Gözlerini açıp uyanmak' ile 'yataktan kalkıp ayağa dikilmek' fiilleri sırasıyla hangi seçenekte doğru verilmiştir?",
      options: [
        "wake up / get up",
        "get up / wake up",
        "stand up / wake up",
        "sleep / get up"
      ],
      correctIndex: 0,
      explanation: "Uykudan uyanmak 'wake up', yataktan kalkmak ise 'get up' fiiliyle karşılanır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun fiil öbeğini yerleştirin:",
      sentence: "Every morning, I ___ my teeth thoroughly before having breakfast.",
      options: ["brush", "wash", "cleanse", "make"],
      correctAnswer: "brush",
      hint: "Diş fırçalamak için hangi fiil kullanılır?",
      explanation: "Diş fırçalamak için standart eşdizim 'brush one's teeth' şeklindedir."
    },
    sentenceBuilder: {
      promptTr: "Ben her sabah saat yedide uyanırım ve duş alırım.",
      targetEn: "I wake up at seven o'clock and take a shower every morning",
      availableWords: ["I", "wake", "up", "at", "seven", "o'clock", "and", "take", "a", "shower", "every", "morning", "get", "am"],
      explanation: "Eylem 1 (I wake up at seven o'clock) + bağlaç (and) + eylem 2 (take a shower) + sıklık (every morning)."
    },
    summaryTakeaways: [
      "'Wake up' uyanmak, 'get up' ise yataktan kalkmaktır.",
      "Diş fırçalamak 'brush my teeth' (çoğul teeth), kahvaltı yapmak 'have breakfast' ile söylenir.",
      "Evden çıkmak için araya edat sokulmaz; doğrudan 'leave home' denir."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 27: İş, Okul ve Akşam Rutinleri
  // -------------------------------------------------------------------------
  27: {
    skillType: 'vocabulary',
    concreteCompetency: "Günün ikinci yarısını ve akşam rutinini anlatan temel eylemleri (arrive at work, start work, have lunch, finish work, get home, have dinner, relax, go to bed, fall asleep) ve eve dönüş kalıplarını ('get home' - to yok!) hatasız kullanabilmek.",
    whyItMatters: "Bir iş gününün nasıl geçtiğini, saat kaçta paydos ettiğinizi ve akşamları nasıl dinlendiğinizi anlatmak yetişkin sohbetlerinin ve iş-yaşam dengesi diyaloglarının temelidir.",
    linguisticLogic: "Akşam rutinlerinde iki önemli gramer inceliği vardır: 1) 'HOME' kelimesi yön edatı olan 'to' almaz (*go to home veya *get to home YANLIŞTIR; 'go home' / 'get home' DOĞRUDUR). 2) Akşam yemeği 'have dinner', iş bitişi 'finish work', yatağa gitmek 'go to bed', uykuya dalmak ise 'fall asleep' eşdizimleriyle ifade edilir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: İş / Okul Saatleri: Başlama, Öğle Yemeği, Bitiş",
        content: "İşe veya okula varış: 'arrive at work / school'. İşe başlama: 'start work'. Öğle yemeği: 'have lunch' (saat 12:00-13:00 arası). İşi bitirme / paydos: 'finish work' veya 'leave work'.",
        formula: "arrive at work  |  start work  |  have lunch  |  finish work",
        keyPhrase: "I start work at 9 a.m.  |  We have lunch at one o'clock.  |  I finish work at six.",
        subPoints: [
          "'start work' kalıbında 'the' kullanılmaz (start the work denmez).",
          "'finish work' = işi bitirip ofisten ayrılmak."
        ],
        rationale: "Çalışma saatleri çerçevesinin doğru kelimelerle çizilmesi gerekir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Eve Dönüş: 'GET HOME' (Neden 'TO' Yoktur?)",
        content: "İşten çıkıp eve varmayı anlatırken 'get home' veya 'arrive home' denir. 'Home' kelimesi İngilizcede yer-yön zarfı işlevi gördüğü için önüne 'TO' edatı ALMAZ! *Go to home veya *get to home demek ağır bir hatadır.",
        formula: "GET HOME (DOĞRU)  |  *GET TO HOME (KESİNLİKLE YANLIŞ!)",
        keyPhrase: "I get home around seven in the evening.  |  What time do you get home?",
        subPoints: [
          "'get home' = eve varmak / ulaşmak.",
          "'go home' = eve doğru yola çıkmak / gitmek.",
          "İkisinde de 'to' ASLA kullanılmaz!"
        ],
        rationale: "Home kelimesinin zarf özelliği İngilizcenin en temel kural dışılıklarından biridir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Akşam Rahatlaması ve Uykuya Geçiş",
        content: "Eve vardıktan sonraki eylemler: 'have dinner' (akşam yemeği yemek), 'relax on the sofa' (kanepede dinlenmek), 'watch a TV series' (dizi izlemek), 'go to bed' (yatmak) ve 'fall asleep' (uykuya dalmak).",
        formula: "have dinner  |  relax  |  go to bed  |  fall asleep",
        keyPhrase: "After dinner, I relax and read a book.  |  I go to bed at eleven thirty.",
        subPoints: [
          "'go to bed' = yatağa girmek / yatmak.",
          "'fall asleep' = bilincin kapanıp uykuya dalması.",
          "Gece vakti için 'at night' edatı kullanılır."
        ],
        rationale: "Günün kapanış döngüsünü doğru kelimelerle bağlamak tam bir günlük anlatım sunar."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Home Önüne 'TO' Almaz!",
        formula: "GO HOME (DOĞRU)  |  *GO TO HOME (AĞIR HATA!)  |  GET HOME (DOĞRU)",
        explanation: "'Home' kelimesi 'ev' isim anlamının yanında 'eve doğru' zarfıdır. Bu yüzden hareket fiilleriyle (go, get, come, drive) kullanılırken araya 'to' konmaz.",
        exampleSnippet: "I finish work at 5 p.m. and get home at 6 p.m.",
        cautionNote: "Asla 'go to home' yazmayın veya söylemeyin!"
      },
      {
        ruleTitle: "Go to bed vs Fall asleep",
        formula: "Go to bed = Yatağa gitmek  |  Fall asleep = Uykuya dalmak",
        explanation: "Yatağa saat 23:00'te girip kitap okuyup saat 23:30'da uykuya dalabilirsiniz: 'I go to bed at 11, but I fall asleep at 11:30.'",
        exampleSnippet: "He was so tired that he fell asleep immediately.",
        tipNote: "İki eylemin farkını ayırt edin."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I go to home by bus after work.",
        correctExample: "I go home by bus after work.",
        rootCause: "Türkçe 'eve gitmek' derkenki yönelme ekini 'to' olarak eklemek.",
        memoryTip: "Home tek başına yeter: GO HOME, GET HOME!"
      },
      {
        wrongExample: "I make dinner at 8 p.m. with my family.",
        correctExample: "I have dinner at 8 p.m. with my family.",
        rootCause: "Yemek yemek anlamında 'have' yerine 'make' (pişirmek) kullanmak.",
        memoryTip: "Yemeği yemek için: HAVE dinner!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "İş Çıkışı Akşam Planları Hakkında Sohbet",
      description: "Ofiste mesai bitiminde iki iş arkadaşının akşam neler yapacaklarını konuşması.",
      contextType: "workplace",
      dialogue: [
        { speaker: "Sarah", textEn: "Are you staying late tonight, David?", textTr: "Bu akşam geç saate kadar kalıyor musun David?" },
        { speaker: "David", textEn: "No, I finish work at five thirty today. I want to get home early.", textTr: "Hayır, bugün beşte buçukta paydos ediyorum. Eve erken varmak istiyorum." },
        { speaker: "Sarah", textEn: "What do you usually do in the evenings?", textTr: "Akşamları genellikle ne yaparsın?" },
        { speaker: "David", textEn: "I have dinner with my wife, relax with a good book, and go to bed around eleven.", textTr: "Eşimle akşam yemeği yerim, güzel bir kitapla dinlenirim ve saat on bir sularında yatarım." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe 'Eve Gitmek / Varmak'",
      conceptB: "İngilizce 'Go Home / Get Home'",
      keyDifference: "Türkçe 'ev-e' şeklinde yönelme eki takar. İngilizce ise 'school' için 'go TO school' derken, istisnai olarak 'home' için 'to' edatını düşürür ('go home').",
      exampleA: "Okula gitmek (go to school) vs Eve gitmek (go home)",
      exampleB: "I go to school, but I go home."
    },
    memoryHook: "Akşam Zinciri: Finish work (işi bitir) -> Get home (eve var - to yok!) -> Have dinner (akşam yemeği ye) -> Relax (dinlen) -> Go to bed (yat)!",
    examples: [
      {
        en: "I usually finish work at six and get home around seven in the evening.",
        tr: "Genellikle işi altıda bitiririm ve akşam yedide eve varırım.",
        highlightedWords: ["finish work", "get home around seven"],
        grammarCategory: "İş Bitişi ve Eve Varış",
        contextNote: "Mesai bitiş ve eve dönüş saatleri.",
        breakdownNote: "Geniş zaman eylemleri (finish work -> get home around seven)."
      },
      {
        en: "We always have dinner together as a family and discuss our day.",
        tr: "Biz her zaman ailece birlikte akşam yemeği yeriz ve günümüzü konuşuruz.",
        highlightedWords: ["have dinner together", "discuss our day"],
        grammarCategory: "Aile Akşam Rutini",
        contextNote: "Akşam yemeği ve sohbet.",
        breakdownNote: "always + have dinner + together."
      },
      {
        en: "He reads a novel in bed for twenty minutes and then falls asleep easily.",
        tr: "Yatakta yirmi dakika roman okur ve ardından kolayca uykuya dalar.",
        highlightedWords: ["in bed", "falls asleep easily"],
        grammarCategory: "Uykuya Dalma Eylemi",
        contextNote: "Gece rutini.",
        breakdownNote: "reads a novel + and then + falls asleep (3. tekil şahıs -s)."
      }
    ],
    vocabulary: [
      { word: "Dinner", phonetic: "/ˈdɪn.ər/", partOfSpeech: "noun", meaningTr: "Akşam yemeği", exampleSentence: "We have dinner at 8 p.m." },
      { word: "Relax", phonetic: "/rɪˈlæks/", partOfSpeech: "verb", meaningTr: "Rahatlamak, dinlenmek", exampleSentence: "Music helps me relax." },
      { word: "Asleep", phonetic: "/əˈsliːp/", partOfSpeech: "adjective", meaningTr: "Uykuda, uyumuş (fall asleep: uykuya dalmak)", exampleSentence: "The baby is fast asleep." },
      { word: "Commute", phonetic: "/kəˈmjuːt/", partOfSpeech: "noun", meaningTr: "İş-ev arası gidiş geliş yolu", exampleSentence: "My evening commute takes 40 minutes." }
    ],
    quickCheck: {
      question: "'İşten sonra genellikle saat yedide eve varırım' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "I usually get home at seven after work.",
        "I usually get to home at seven after work.",
        "I usually go to home at seven after work.",
        "I am usually get home at seven after work."
      ],
      correctIndex: 0,
      explanation: "Eve varmak 'get home' olarak söylenir ve araya asla 'to' edatı girmez."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun fiili yerleştirin:",
      sentence: "I was so exhausted yesterday that I ___ asleep immediately after lying down.",
      options: ["fell", "went", "got", "slept"],
      correctAnswer: "fell",
      hint: "Uykuya dalmak anlamına gelen kalıp 'fall asleep'tir.",
      explanation: "Uykuya dalmak eşdizimi 'fall asleep' (geçmiş hali: fell asleep) ile kurulur."
    },
    sentenceBuilder: {
      promptTr: "Ben saat beşte işi bitiririm ve metroyla eve giderim.",
      targetEn: "I finish work at five o'clock and go home by metro",
      availableWords: ["I", "finish", "work", "at", "five", "o'clock", "and", "go", "home", "by", "metro", "to", "am"],
      explanation: "Eylem 1 (I finish work at five o'clock) + bağlaç (and) + eylem 2 (go home by metro - to yok!)."
    },
    summaryTakeaways: [
      "İş saatleri 'start work' (başlamak) ve 'finish work' (bitirmek) ile anlatılır.",
      "Eve gitmek veya varmak derken 'home' önüne 'to' almaz: 'go home' / 'get home'.",
      "Akşam yemeği 'have dinner', yatağa gitmek 'go to bed', uykuya dalmak 'fall asleep'tir."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 28: Zaman Edatları: At, On, In Kullanım Matrisi
  // -------------------------------------------------------------------------
  28: {
    skillType: 'grammar',
    concreteCompetency: "İngilizcede zaman bildiren üç kritik edatı (AT, ON, IN) geometrik zaman hiyerarşisine göre (AT: en dar noktasal saatler; ON: 24 saatlik tekil günler ve tarihler; IN: en geniş aylar, mevsimler, yıllar ve günün bölümleri) hatasız ve istisnalarıyla (at night, at the weekend) kullanabilmek.",
    whyItMatters: "Zaman edatları İngilizcede öğrencilerin en çok karıştırdığı ama doğru kullanıldığında konuşmaya anında doğallık kazandıran en önemli gramer matrisidir.",
    linguisticLogic: "Zaman edatları (Prepositions of Time) ters piramit mantığıyla çalışır: 1) Piramidin Tabiatı En Dar Nokta = 'AT' (Noktasal saatler ve anlar: at 5 p.m., at noon, at midnight, at night). 2) Piramidin Orta Katı = 'ON' (24 saatlik tekil gün ve tarihler: on Monday, on July 15th, on my birthday). 3) Piramidin En Geniş Tabanı = 'IN' (Haftalar, aylar, mevsimler, yıllar, yüzyıllar ve günün geniş bölümleri: in July, in 2026, in summer, in the morning/afternoon/evening).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: En Dar Noktasal Zamanlar: 'AT'",
        content: "'AT' zaman çizelgesindeki spesifik bir noktayı gösterir. Saatlerde (at 8 o'clock, at 14:30), günün özel noktalarında (at noon = öğle 12:00, at midnight = gece 24:00) ve istisnai olarak gece vaktinde ('at night') kullanılır.",
        formula: "AT + [Saat / Noktasal Vakit / Gece]",
        keyPhrase: "at 9 a.m.  |  at noon  |  at midnight  |  at night  |  at the weekend",
        subPoints: [
          "İngiliz İngilizcesinde 'at the weekend' (hafta sonunda) denir.",
          "Öğün vakitlerinde: 'at breakfast', 'at lunchtime', 'at dinner'.",
          "Dönemsel tatillerde (gün belirtmeden): 'at Christmas', 'at Easter'."
        ],
        rationale: "Noktasal hassasiyet gerektiren zaman birimleri 'AT' ile kilitlenir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: 24 Saatlik Günler ve Tarihler: 'ON'",
        content: "İçinde 'GÜN' kelimesi veya takvimde bir gün kutucuğu olan her ifadenin başına 'ON' gelir: Haftanın günleri (on Monday, on Friday), tarihler (on the 4th of July), özel günler (on my birthday, on New Year's Day), günün belirli bir bölümüyle birleşmiş günler (on Friday morning).",
        formula: "ON + [Gün / Tarih / Özel Gün / Günün Belirli Vakti]",
        keyPhrase: "on Tuesday  |  on May 19th  |  on Sunday morning  |  on my birthday",
        subPoints: [
          "Tek başına sabah: 'in the morning'; ama Cuma sabahı: 'ON Friday morning' (çünkü gün baskındır!).",
          "Tarihler gün içerdiği için daima 'ON' alır: 'on October 29th'."
        ],
        rationale: "Takvimdeki 24 saatlik periyotların değişmez edatı 'ON'dur."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Geniş Zaman Dilimleri ve Günün Bölümleri: 'IN'",
        content: "Geniş zaman bloklarında 'IN' kullanılır: Aylar (in July), mevsimler (in spring), yıllar (in 2026), yüzyıllar (in the 21st century) ve günün geniş bölümleri (in the morning, in the afternoon, in the evening).",
        formula: "IN + [Ay / Mevsim / Yıl / Yüzyıl / Günün Bölümü]",
        keyPhrase: "in August  |  in winter  |  in 2025  |  in the morning",
        subPoints: [
          "Günün bölümlerinde 'the' zorunludur: 'in THE morning', 'in THE afternoon'.",
          "Ama dikkat: 'at night' (istisnadır, 'in the night' özel durumlar hariç kullanılmaz)."
        ],
        rationale: "Süreç ve dönem bildiren geniş zaman zarfları kapsayıcı 'IN' ile kurulur."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Zaman Piramidi Kuralı",
        formula: "AT = Saatler (En dar)  |  ON = Günler (Orta)  |  IN = Aylar/Yıllar (En geniş)",
        explanation: "Zaman daraldıkça edat sertleşir: Saatler için AT, Günler için ON, Aylar ve Yıllar için IN.",
        exampleSnippet: "The meeting is AT 9:00, ON Monday, IN September.",
        tipNote: "Bu üçlüyü tek bir cümlede sırayla aklınızda tutun."
      },
      {
        ruleTitle: "Hayati İstisna: In the morning vs On Friday morning",
        formula: "in the morning (Genel sabah)  |  ON Friday morning (Güne bağlı sabah)",
        explanation: "Sabah vakti normalde 'in the morning' alır; ancak önüne gün ismi geldiğinde günün edatı olan 'ON' devreye girer: 'on Monday morning'.",
        exampleSnippet: "I see him on Monday morning, not in Monday morning.",
        cautionNote: "İçinde gün adı varsa daima ON seçin!"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "The party is in Friday at the night.",
        correctExample: "The party is on Friday at night.",
        rootCause: "Günün önüne 'in' getirmek ve 'at night' kalıbına gereksiz 'the' eklemek.",
        memoryTip: "Güne bas: ON Friday! Geceye nokta koy: AT night!"
      },
      {
        wrongExample: "Our flight leaves in 08:30 in the morning.",
        correctExample: "Our flight leaves at 08:30 in the morning.",
        rootCause: "Saatlerin önüne 'in' getirme yanılgısı.",
        memoryTip: "Saat tik-tak eder, başına AT gelir: AT 08:30!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Uluslararası Proje Takvimini Belirleme",
      description: "İki proje yöneticisinin konferans, toplantı ve teslim tarihlerini zaman edatlarıyla netleştirmesi.",
      contextType: "workplace",
      dialogue: [
        { speaker: "Manager A", textEn: "When is our quarterly project review?", textTr: "Üç aylık proje incelememiz ne zaman?" },
        { speaker: "Manager B", textEn: "It is in October. Specifically, on Thursday the 12th.", textTr: "Ekim ayında (in October). Daha doğrusu 12'si Perşembe günü (on Thursday the 12th)." },
        { speaker: "Manager A", textEn: "And what time does it start?", textTr: "Peki saat kaçta başlıyor?" },
        { speaker: "Manager B", textEn: "It starts at half past nine in the morning, and finishes at noon.", textTr: "Sabah saat dokuz buçukta (at half past nine in the morning) başlıyor ve öğleyin (at noon) bitiyor." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Zaman Ekleri (-de / -da)",
      conceptB: "İngilizce Zaman Edatları (At, On, In)",
      keyDifference: "Türkçede saatte (sekizde), günde (Pazartesi günü), ayda (Temmuzda) aynı ek (-de/-da) kullanılır. İngilizcede ise saat 'at', gün 'on', ay 'in' olmak üzere 3 farklı edat zorunludur.",
      exampleA: "Saat 5'te (at 5) / Pazartesi günü (on Monday) / Temmuz'da (in July)",
      exampleB: "at 5 / on Monday / in July"
    },
    memoryHook: "Ters Piramit Şifresi: Noktasal saate AT koy! Takvimdeki güne ON bas! Ay, mevsim ve yıla IN ile gir!",
    examples: [
      {
        en: "The flight lands in London at seven o'clock on Saturday morning.",
        tr: "Uçak Londra'ya Cumartesi sabahı saat yedide iner.",
        highlightedWords: ["at seven o'clock", "on Saturday morning"],
        grammarCategory: "Saat ve Gün Birleşimi",
        contextNote: "Uçuş varış bilgisi.",
        breakdownNote: "at + saat (seven o'clock) + on + günün sabahı (Saturday morning)."
      },
      {
        en: "Our company was founded in 2015 and the annual gala is in December.",
        tr: "Şirketimiz 2015 yılında kuruldu ve yıllık gala Aralık ayındadır.",
        highlightedWords: ["in 2015", "in December"],
        grammarCategory: "Yıl ve Ay Edatı",
        contextNote: "Kurumsal tarihçe.",
        breakdownNote: "in + yıl (2015) + in + ay (December)."
      },
      {
        en: "I cannot sleep well at night if I drink strong espresso in the evening.",
        tr: "Akşam koyu espresso içersem gece iyi uyuyamam.",
        highlightedWords: ["at night", "in the evening"],
        grammarCategory: "Günün Vakitleri Karşılaştırması",
        contextNote: "Akşam ve gece edat ayrımı.",
        breakdownNote: "at night (istisna) + in the evening (günün bölümü)."
      }
    ],
    vocabulary: [
      { word: "Quarterly", phonetic: "/ˈkwɔː.təl.i/", partOfSpeech: "adjective", meaningTr: "Üç aylık (dönem)", exampleSentence: "We have quarterly sales reviews." },
      { word: "Annual", phonetic: "/ˈæn.ju.əl/", partOfSpeech: "adjective", meaningTr: "Yıllık, yılda bir yapılan", exampleSentence: "The annual conference is in May." },
      { word: "Noon", phonetic: "/nuːn/", partOfSpeech: "noun", meaningTr: "Öğle vakti (12:00)", exampleSentence: "The meeting ends at noon." },
      { word: "Specifically", phonetic: "/spəˈsɪf.ɪ.kəl.i/", partOfSpeech: "adverb", meaningTr: "Özellikle, tam olarak", exampleSentence: "We meet specifically on Fridays." }
    ],
    quickCheck: {
      question: "'Dersimiz saat 10'da, Cuma günü, Ekim ayında başlayacak' cümlesinde boşluklara sırasıyla hangi edatlar gelmelidir? -> 'Our lesson starts ___ 10:00, ___ Friday, ___ October.'",
      options: [
        "at / on / in",
        "in / on / at",
        "on / in / at",
        "at / in / on"
      ],
      correctIndex: 0,
      explanation: "Saatler için 'AT', günler için 'ON', aylar için 'IN' edatı kullanılır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun zaman edatını yerleştirin:",
      sentence: "My grandparents always wake up early ___ the morning to tend their garden.",
      options: ["in", "at", "on", "to"],
      correctAnswer: "in",
      hint: "'the morning' günün geniş bir bölümüdür.",
      explanation: "Günün bölümleri (morning, afternoon, evening) 'in the...' ile kullanılır."
    },
    sentenceBuilder: {
      promptTr: "Bizim toplantımız Pazartesi sabahı saat dokuz buçukta başlar.",
      targetEn: "Our meeting starts at half past nine on Monday morning",
      availableWords: ["Our", "meeting", "starts", "at", "half", "past", "nine", "on", "Monday", "morning", "in", "the"],
      explanation: "Özne (Our meeting) + fiil (starts) + saat (at half past nine) + gün vakti (on Monday morning)."
    },
    summaryTakeaways: [
      "Saatler ve 'night' için 'AT' kullanılır (at 9 o'clock, at night).",
      "24 saatlik tekil günler ve tarihler için 'ON' kullanılır (on Monday, on May 4th).",
      "Aylar, mevsimler, yıllar ve günün bölümleri için 'IN' kullanılır (in July, in 2026, in the morning)."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 29: Boş Zaman Aktiviteleri ve Hobiler (Like / Love + V-ing)
  // -------------------------------------------------------------------------
  29: {
    skillType: 'vocabulary',
    concreteCompetency: "Boş zaman aktivitelerini (free time activities / hobbies) ve sevgi/hoşlanma derecelerini (love, like, enjoy, don't mind, don't like, hate) arkasından gelen fiile '-ing' takısı ekleyerek (gerund) hatasız cümlelerle kurabilmek.",
    whyItMatters: "Sosyal tanışmalarda iş ve memleketten sonra konuşulan en keyifli konu hobilerdir. Ortak zevkleri keşfetmek ve arkadaşlık kurmak bu yapıyla gerçekleşir.",
    linguisticLogic: "İngilizcede sevgi, nefret ve hoşlanma bildiren duygu fiillerinden (love, like, enjoy, hate) sonra başka bir eylem geliyorsa, o eylem artık bir çekimli fiil olamaz; isimleşmek (Gerund) zorundadır. Bu isimleşme fiil sonuna '-ing' takısı eklenerek yapılır: 'I like swimming' (Yüzmeyi severim), 'She loves reading' (Okumaya bayılır). En büyük hata ikinci fiili yalın bırakmaktır (*I like swim KESİNLİKLE YANLIŞTIR).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Duygu Dereceleri (Love'dan Hate'e)",
        content: "Hobilerde hoşlanma derecesini şu fiiller belirler: Love (Bayılmak/Çok sevmek: +++), Like / Enjoy (Sevmek/Hoşlanmak: ++), Don't mind (Fark etmez/Sorun değil: =), Don't like (Sevmemek: -), Hate (Nefret etmek: ---).",
        formula: "LOVE / LIKE / ENJOY / HATE + [İsim]  VEYA  + [FİİL-ING]",
        keyPhrase: "I love swimming.  |  She likes reading.  |  He hates cooking.",
        subPoints: [
          "Fiilden sonra doğrudan isim gelebilir: 'I like football' (Futbolu severim).",
          "Ama bir eylem gelecekse '-ing' ZORUNDADIR: 'I like playing football' (Futbol oynamayı severim)."
        ],
        rationale: "Duygu basamaklarını bilmek kişisel tercihleri tam yansıtır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: İkinci Fiile '-ing' Ekleme Mantığı (Gerund)",
        content: "Türkçede 'Yüz-me-yi severim' derken '-me/-ma' ekiyle fiili isimleştiririz. İngilizce de aynı şeyi '-ing' ekiyle yapar. 'Swim' fiiline '-ing' gelince 'swimming' (yüzme eylemi) olur.",
        formula: "Özne + like/love + FİİL-ING (read -> reading, run -> running)",
        keyPhrase: "I enjoy watching documentaries.  |  She loves listening to jazz.",
        subPoints: [
          "-ing eklerken imla: swim -> swimming (çift m), run -> running (çift n), dance -> dancing ('e' düşer).",
          "Asla ikinci fiili yalın bırakmayın: *I like cook YANLIŞTIR; 'I like cooking' DOĞRUDUR."
        ],
        rationale: "İki fiilin peş peşe geldiğinde ikincisinin isimleşmesi (gerund) İngilizcenin ana kaidesidir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: 3. Tekil Şahısta 'like -> likes' Unutulmamalı!",
        content: "Cümlenin ana fiili 'like' veya 'love' olduğu için, özne He/She/It olduğunda bu fiil '-s' takısı alır: 'He likes swimming', 'She loves dancing'. Olumsuzunda ise 'doesn't like' gelir: 'He doesn't like cooking.'",
        formula: "He/She/It + LIKES / LOVES + Fiil-ing  |  doesn't like + Fiil-ing",
        keyPhrase: "My sister likes photography.  |  He doesn't like waking up early.",
        subPoints: [
          "'-s' takısı İLK fiile (like/love) gelir, ikinci fiil '-ing' alır: He likes (1. fiil) swimming (2. fiil).",
          "Soru: 'Does he like traveling?'"
        ],
        rationale: "Zaman çekimi ana fiile yapılır, isimleşmiş fiil etkilenmez."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "İkinci Fiile -ING Zorunluluğu",
        formula: "I like COOKING (DOĞRU)  |  *I like cook (AĞIR HATA!)",
        explanation: "Like, love, enjoy, hate fiillerinden sonra bir eylem geliyorsa o eylem mutlaka '-ing' eki alarak isimleşmelidir.",
        exampleSnippet: "We enjoy walking in the park on sunny afternoons.",
        cautionNote: "İkinci fiili asla yalın bırakmayın!"
      },
      {
        ruleTitle: "Enjoy Daima -ing Alır",
        formula: "ENJOY + Verb-ING (I enjoy reading, NOT *enjoy to read)",
        explanation: "'Like' ve 'love' bazen 'to + V1' de alabilir (I like to swim). Ancak 'ENJOY' fiili istisnasız olarak DAİMA '-ing' alır.",
        exampleSnippet: "Do you enjoy cooking Italian meals?",
        tipNote: "Enjoy gördüyseniz peşine -ing yapıştırın."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I like play guitar in my free time.",
        correctExample: "I like playing the guitar in my free time.",
        rootCause: "İkinci fiildeki '-ing' takısını unutmak.",
        memoryTip: "Sevdiğin şey bir eylemse sonuna -ING koy: LIKE PLAYING!"
      },
      {
        wrongExample: "He like swimming in the pool.",
        correctExample: "He likes swimming in the pool.",
        rootCause: "3. tekil şahıstaki (He) ana fiil olan 'like' kelimesine '-s' takısını takmamak.",
        memoryTip: "Özne He/She ise like -> LIKES olur!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Dil Değişim (Language Exchange) Buluşmasında Hobiler",
      description: "Haftalık dil değişim kafesinde iki gencin boş zaman aktivitelerini ve sevdikleri şeyleri paylaşması.",
      contextType: "social",
      dialogue: [
        { speaker: "Leo", textEn: "What do you like doing in your free time, Deniz?", textTr: "Boş zamanlarında ne yapmayı seversin Deniz?" },
        { speaker: "Deniz", textEn: "I love hiking in nature, and I enjoy taking landscape photographs. How about you?", textTr: "Doğada yürüyüş yapmaya bayılırım ve manzara fotoğrafları çekmekten hoşlanırım. Ya sen?" },
        { speaker: "Leo", textEn: "I prefer indoor activities. I like cooking Italian food and playing chess.", textTr: "Ben kapalı alan aktivitelerini tercih ederim. İtalyan yemekleri pişirmeyi ve satranç oynamayı severim." },
        { speaker: "Deniz", textEn: "Do you play video games as well?", textTr: "Aynı zamanda video oyunları da oynar mısın?" },
        { speaker: "Leo", textEn: "No, I hate sitting in front of a screen for hours.", textTr: "Hayır, saatlerce ekran karşısında oturmaktan nefret ederim." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe İsim-Fiil (-me / -ma / -mek)",
      conceptB: "İngilizce Gerund (-ing)",
      keyDifference: "Türkçede 'Yüz-me-yi severim' derken fiile '-me' takarız. İngilizce de birebir aynı mantıkla 'swim' fiiline '-ing' ekleyerek 'swimming' yapar.",
      exampleA: "Kitap oku-ma-yı severim.",
      exampleB: "I like read-ing books."
    },
    memoryHook: "Hobi Kuralı: Sevdiğini söylerken eylemin sırtına -ING yükle: LOVE swimming, LIKE dancing, ENJOY cooking, HATE waiting!",
    examples: [
      {
        en: "My sister loves baking artisanal bread on Sunday mornings.",
        tr: "Kız kardeşim Pazar sabahları butik ekmek pişirmeye bayılır.",
        highlightedWords: ["loves baking"],
        grammarCategory: "3. Tekil Şahıs ve Gerund",
        contextNote: "Hobi ve yetenek anlatımı.",
        breakdownNote: "Özne (My sister) + loves (3. tekil -s) + fiil-ing (baking) + nesne."
      },
      {
        en: "We really enjoy hiking along the coastline during the spring season.",
        tr: "İlkbahar sezonunda kıyı şeridi boyunca doğa yürüyüşü yapmaktan gerçekten çok hoşlanırız.",
        highlightedWords: ["enjoy hiking"],
        grammarCategory: "Enjoy + V-ing",
        contextNote: "Açık hava boş zaman aktivitesi.",
        breakdownNote: "Özne (We) + enjoy + fiil-ing (hiking) + yer edat öbeği."
      },
      {
        en: "I hate commuting in heavy traffic, so I prefer cycling to work.",
        tr: "Yoğun trafikte işe gidip gelmekten nefret ederim, bu yüzden işe bisikletle gitmeyi tercih ederim.",
        highlightedWords: ["hate commuting", "prefer cycling"],
        grammarCategory: "Hate ve Prefer Kullanımı",
        contextNote: "Ulaşım tercihi ve sevilmeyen eylem.",
        breakdownNote: "hate + commuting + so + prefer + cycling."
      }
    ],
    vocabulary: [
      { word: "Hiking", phonetic: "/ˈhaɪ.kɪŋ/", partOfSpeech: "noun", meaningTr: "Doğa yürüyüşü", exampleSentence: "We go hiking in the mountains." },
      { word: "Bake", phonetic: "/beɪk/", partOfSpeech: "verb", meaningTr: "Fırında pişirmek (ekmek/pasta)", exampleSentence: "She likes baking chocolate cookies." },
      { word: "Chess", phonetic: "/tʃes/", partOfSpeech: "noun", meaningTr: "Satranç", exampleSentence: "Do you know how to play chess?" },
      { word: "Landscape", phonetic: "/ˈlænd.skeɪp/", partOfSpeech: "noun", meaningTr: "Manzara", exampleSentence: "He loves painting natural landscapes." }
    ],
    quickCheck: {
      question: "'Sarah boş zamanlarında polisiye romanlar okumayı çok sever' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "Sarah loves reading detective novels in her free time.",
        "Sarah love reading detective novels in her free time.",
        "Sarah loves read detective novels in her free time.",
        "Sarah is love reading detective novels in her free time."
      ],
      correctIndex: 0,
      explanation: "'Sarah' 3. tekil şahıs olduğu için 'loves' (-s takılı) ve ardından gelen fiil isimleşerek 'reading' (-ing ekli) olur."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun fiil biçimini yerleştirin:",
      sentence: "My parents really enjoy ___ in the Mediterranean during the summer.",
      options: ["swimming", "swim", "to swimming", "swims"],
      correctAnswer: "swimming",
      hint: "'Enjoy' fiilinden sonra gelen eylem hangi eki alır?",
      explanation: "'Enjoy' fiili doğrudan '-ing' takılı fiil (gerund) alır: 'enjoy swimming'."
    },
    sentenceBuilder: {
      promptTr: "Ben boş zamanlarımda piyano çalmaktan ve müzik dinlemekten hoşlanırım.",
      targetEn: "I enjoy playing the piano and listening to music in my free time",
      availableWords: ["I", "enjoy", "playing", "the", "piano", "and", "listening", "to", "music", "in", "my", "free", "time", "play", "listen"],
      explanation: "Duygu (I enjoy) + eylem 1 (playing the piano) + bağlaç (and) + eylem 2 (listening to music) + zaman (in my free time)."
    },
    summaryTakeaways: [
      "Like, love, enjoy ve hate fiillerinden sonra gelen eylemler '-ing' eki alır (like swimming, love reading).",
      "He, She, It ile kurulan cümlelerde 'like -> likes' ve 'love -> loves' şeklinde ana fiil -s takısı alır.",
      "'Enjoy' fiilinden sonra daima '-ing' gelir; asla yalın fiil kullanılmaz."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 30: A1 Modül 3 Entegrasyonu: Bir Günümü Baştan Sona Anlatma
  // -------------------------------------------------------------------------
  30: {
    skillType: 'speaking',
    concreteCompetency: "A1 Modül 3 boyunca öğrenilen tüm Geniş Zaman mekanizmalarını (olumlu/olumsuz/soru, 3. tekil şahıs çekimleri, sıklık zarfları, zaman edatları, sabah-akşam rutinleri ve hobiler) kronolojik bağlaçlarla (First, Then, After that, Around, Finally) birleştirerek tam bir günü baştan sona eksiksiz anlatabilmek.",
    whyItMatters: "Bu ders A1 seviyesinde bir öğrencinin tek tek cümleler kurmaktan çıkıp, akıcı, hikaye tadında ve bağlantılı bir monolog/paragraf üretebildiği büyük bir olgunluk aşamasıdır.",
    linguisticLogic: "Bütünsel bir gün anlatımı pedagojik olarak 4 ana evreden oluşur: 1) Sabah Evresi: Wake up, get up, shower, have breakfast. 2) Gün Ortası Evresi: Commute, work/study, have lunch, interact. 3) Akşam Evresi: Finish work, get home, have dinner, free time/hobbies. 4) Gece Kapanışı: Relax, go to bed, fall asleep. Bu evreleri birbirine bağlayan çimento ise sıralama bağlaçlarıdır: 'First of all', 'Then', 'After that', 'Around 7 p.m.', 'Finally'.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Kronolojik Sıralama Bağlaçları (Connectors)",
        content: "Cümlelerin arka arkaya robot gibi sıralanmasını engellemek için zaman bağlaçları kullanılır: First (İlk olarak), Then (Sonra), Next (Ardından), After that (Ondan sonra), Later (Daha sonra), Finally (Son olarak / En sonunda).",
        formula: "First, [Eylem 1] -> Then, [Eylem 2] -> After that, [Eylem 3] -> Finally, [Kapanış]",
        keyPhrase: "First, I wake up at 7. Then, I take a shower. After that, I have breakfast.",
        subPoints: [
          "Bağlaçlardan sonra genellikle virgül konur: 'After that, I leave home.'",
          "'Then'den sonra virgül opsiyoneldir: 'Then I get dressed.'"
        ],
        rationale: "Bağlaçlar metne profesyonel akış ve mantıksal tutarlılık kazandırır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Sıklık Zarfları ve Zaman Edatlarını Ekleme",
        content: "Metni zenginleştirmek için her eyleme sıklık zarfı (usually, always) ve zaman edatı (at 8:30, in the morning) serpiştirin: 'I usually leave home at eight thirty' veya 'I always drink tea in the afternoon'.",
        formula: "Özne + [Sıklık Zarfı] + Fiil + [Zaman Edatı Öbeği]",
        keyPhrase: "I always take the bus at 08:15.  |  I usually finish work at six.",
        subPoints: [
          "Edat matrisini unutmayın: Saatler 'at', günler 'on', vakitler 'in the morning'.",
          "Rutinin istisnalarını belirtin: '...but on Fridays I finish early.'"
        ],
        rationale: "Öğrenilen tüm zaman kalıplarının aynı potada erimesi kalıcılığı garanti eder."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Hobileri ve Duygu Tercihlerini Dahil Etme",
        content: "Sadece zorunlu işleri değil, günün içindeki keyifli anları da 'like/love + V-ing' kalıbıyla metne yedirin: 'In the evening, I love cooking dinner and I enjoy reading a novel before I go to bed.'",
        formula: "In the evening, I like/enjoy + [Fiil-ING] + before I go to bed",
        keyPhrase: "I enjoy relaxing with music.  |  I love spending time with my kids.",
        subPoints: [
          "'before I go to bed' (yatmadan önce).",
          "Kapanışı daima uyku vaktiyle yapın: 'Finally, I go to bed around eleven.'"
        ],
        rationale: "Kişisel tercihler monoloğu mekanik bir listeden çıkarıp yaşayan bir anlatıya çevirir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Tam Gün Anlatım Şablonu",
        formula: "Sabah (First, wake up at...) -> İş/Okul (Then, work at...) -> Akşam (After that, have dinner) -> Gece (Finally, sleep at...)",
        explanation: "Bu 4 aşamalı omurgayı takip ettiğinizde hiçbir eylemi atlamadan 10-12 cümlelik mükemmel bir İngilizce sunum yapabilirsiniz.",
        exampleSnippet: "First, I wake up at 7. Then, I go to work. In the evening, I relax. Finally, I sleep at 11.",
        tipNote: "Zaman bağlaçlarını cümle başlarında vurgulayarak söyleyin."
      },
      {
        ruleTitle: "Before ve After ile Cümle Bağlama",
        formula: "Before + [Cümle] (Before I leave home)  |  After + [Cümle] (After I get home)",
        explanation: "'Before' (önce) ve 'after' (sonra) bağlaçlarından sonra tam bir cümle gelebilir.",
        exampleSnippet: "I have breakfast before I leave home.  |  After I finish work, I go to the gym.",
        cautionNote: "Before ve after bağlaçlarının yerleşimine dikkat edin."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I wake up at 7. I wash my face. I eat. I go to work. (Robotik anlatım)",
        correctExample: "First, I wake up at 7. Then, I wash my face and have breakfast before I go to work.",
        rootCause: "Bağlaç ve zaman edatı kullanmadan sadece arka arkaya kuru fiil sıralamak.",
        memoryTip: "Bağlaçları kullan: FIRST, THEN, AFTER THAT, FINALLY!"
      },
      {
        wrongExample: "After I get to home, I like watch TV.",
        correctExample: "After I get home, I like watching TV.",
        rootCause: "Home önüne 'to' koymak ve like arkasındaki fiilin -ing ekini unutmak.",
        memoryTip: "Get home (to yok!) + like WATCHING (ing var!)!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Dil Sınavı Konuşma Bölümünde 'Bir Gününüzü Anlatın' Görevi",
      description: "Uluslararası bir İngilizce yeterlilik sınavında adayın 2 dakika boyunca tipik bir iş gününü akıcı şekilde jüriye sunması.",
      contextType: "academic",
      dialogue: [
        { speaker: "Examiner", textEn: "Could you describe a typical day in your life from morning to night?", textTr: "Bize hayatınızdaki tipik bir günü sabahtan akşama kadar tarif edebilir misiniz?" },
        { speaker: "Candidate", textEn: "With pleasure. On weekdays, my alarm rings at seven o'clock. First, I get up, take a shower, and have breakfast with my family.", textTr: "Memnuniyetle. Hafta içi alarmım saat yedide çalar. İlk olarak kalkarım, duş alırım ve ailemle kahvaltı yaparım." },
        { speaker: "Candidate", textEn: "Then, I leave home at eight and commute by metro. I start work at nine, and I usually have lunch at half past twelve.", textTr: "Sonra sekizde evden çıkarım ve metroyla giderim. Dokuzda işe başlarım ve genellikle on iki buçukta öğle yemeği yerim." },
        { speaker: "Candidate", textEn: "I finish work at six and get home around seven. In the evening, I enjoy cooking dinner, and finally I go to bed at eleven.", textTr: "Saat altıda işi bitirir ve yedi gibi eve varırım. Akşamları yemek pişirmekten hoşlanırım ve en sonunda on birde yatarım." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Kısa ve Kopuk Cümleler",
      conceptB: "Akıcı ve Bağlantılı Gün Anlatımı",
      keyDifference: "Kısa cümleler A1 seviyesinin acemi aşamasıdır. Bağlaçlarla örülmüş ve zaman edatlarıyla desteklenmiş paragraf ise A1 seviyesinin başarıyla tamamlandığını gösterir.",
      exampleA: "I wake up. I eat. I work.",
      exampleB: "First, I wake up early. After having a quick breakfast, I go to work by train."
    },
    memoryHook: "Gün Anlatımı Dörtlüsü: 1) Sabah uyanışın (First), 2) Gün ortası çalışman (Then), 3) Akşam hobin (After that), 4) Gece uykun (Finally)!",
    examples: [
      {
        en: "On a typical weekday, I wake up at six thirty, take a quick shower, and have breakfast with my family.",
        tr: "Tipik bir hafta içi gününde saat altı buçukta uyanırım, hızlı bir duş alırım ve ailemle kahvaltı yaparım.",
        highlightedWords: ["typical weekday", "wake up at six thirty", "take a quick shower"],
        grammarCategory: "Sabah Rutin Paragrafı",
        contextNote: "Günün başlangıç evresi.",
        breakdownNote: "Geniş zaman sıralı fiiller + zaman edatları."
      },
      {
        en: "I arrive at the office at nine o'clock, check priority emails, and usually have lunch at one.",
        tr: "Ofise saat dokuzda varırım, öncelikli e-postaları kontrol ederim ve genellikle birde öğle yemeği yerim.",
        highlightedWords: ["arrive at the office", "check priority emails", "usually have lunch"],
        grammarCategory: "İş Günü Akışı",
        contextNote: "Mesai içi düzenli aktiviteler.",
        breakdownNote: "arrive at + start work + sıklık zarfı + have lunch."
      },
      {
        en: "After I get home around seven, I enjoy reading historical novels, and finally I go to bed at eleven thirty.",
        tr: "Yedi gibi eve vardıktan sonra tarihi romanlar okumaktan hoşlanırım ve en sonunda on bir buçukta yatarım.",
        highlightedWords: ["After I get home", "enjoy reading", "finally I go to bed"],
        grammarCategory: "Akşam ve Gece Kapanışı",
        contextNote: "Akşam hobisi ve gün sonu.",
        breakdownNote: "After bağlacı + get home (to yok!) + enjoy reading (-ing) + finally + go to bed."
      }
    ],
    vocabulary: [
      { word: "Typical", phonetic: "/ˈtɪp.ɪ.kəl/", partOfSpeech: "adjective", meaningTr: "Tipik, alışılagelmiş", exampleSentence: "This is a typical day for me." },
      { word: "Finally", phonetic: "/ˈfaɪ.nəl.i/", partOfSpeech: "adverb", meaningTr: "Sonunda, son olarak", exampleSentence: "Finally, we arrived at our destination." },
      { word: "Commute", phonetic: "/kəˈmjuːt/", partOfSpeech: "verb", meaningTr: "İşe gidip gelmek", exampleSentence: "I commute forty minutes every day." },
      { word: "Lifestyle", phonetic: "/ˈlaɪf.staɪl/", partOfSpeech: "noun", meaningTr: "Yaşam tarzı", exampleSentence: "He has a very active lifestyle." }
    ],
    quickCheck: {
      question: "Günlük rutin anlatırken olayları kronolojik olarak birbirine bağlamak için hangi sıralama en doğaldır?",
      options: [
        "First -> Then -> After that -> Finally",
        "Finally -> Then -> First -> Next",
        "After that -> First -> Finally -> Then",
        "Then -> Finally -> Next -> First"
      ],
      correctIndex: 0,
      explanation: "Standart kronolojik akış: First (İlk olarak) -> Then (Sonra) -> After that (Ondan sonra) -> Finally (Son olarak)."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun bağlacı yerleştirin:",
      sentence: "___ I get home from work, I always take off my shoes and relax on the sofa.",
      options: ["After", "Before", "While", "During"],
      correctAnswer: "After",
      hint: "İşten eve vardıktan SONRA rahatladığını anlatan bağlacı seçin.",
      explanation: "'İşten eve vardıktan sonra' anlamını kurmak için 'After' bağlacı kullanılır: 'After I get home from work'."
    },
    sentenceBuilder: {
      promptTr: "İlk olarak uyanırım, sonra kahvaltı yaparım ve en sonunda evden çıkarım.",
      targetEn: "First I wake up then I have breakfast and finally I leave home",
      availableWords: ["First", "I", "wake", "up", "then", "I", "have", "breakfast", "and", "finally", "I", "leave", "home", "get", "to"],
      explanation: "Zaman bağlacı 1 (First I wake up) + bağlaç 2 (then I have breakfast) + bağlaç 3 (and finally I leave home)."
    },
    summaryTakeaways: [
      "Tam gün anlatımı kronolojik sıra bağlaçlarıyla (First, Then, After that, Finally) birbirine bağlanır.",
      "Geniş Zaman fiilleri, sıklık zarfları (usually, always) ve zaman edatları (at 8, on weekdays) metni zenginleştirir.",
      "Akşam hobileri 'like/love + V-ing' kalıbıyla entegre edilerek anlatıma kişisel bir derinlik katılır."
    ]
  }
};
