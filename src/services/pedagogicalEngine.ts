import { 
  CEFRLevel, 
  LessonData, 
  LessonSkillType, 
  TeacherLectureData,
  TeacherBlackboardData,
  BlackboardRow,
  ExampleSentence,
  VocabularyItem,
  ExerciseItem,
  SentenceBuilderTask,
  CommonMistakeItem,
  RealWorldContext,
  ContrastiveAnalysis
} from '../types/lesson';
import { getRegisteredBlueprint } from './pedagogy/registry';
import { getBespokeBlackboard } from './pedagogy/blackboards/blackboardIndex';

export interface TopicBlueprint {
  introduction?: string;
  skillType: LessonSkillType;
  concreteCompetency: string;
  whyItMatters: string;
  linguisticLogic: string;
  blackboard?: TeacherBlackboardData;
  stepBreakdown: {
    stepNumber?: number;
    title: string;
    content: string;
    formula?: string;
    keyPhrase?: string;
    subPoints?: string[];
    rationale?: string;
    warningNote?: string;
  }[];
  ruleCards: {
    ruleTitle?: string;
    title?: string;
    rule?: string;
    formula?: string;
    explanation?: string;
    exampleSnippet?: string;
    example?: string;
    cautionNote?: string;
    tipNote?: string;
    tip?: string;
  }[];
  commonMistakes: CommonMistakeItem[];
  realWorldContext: RealWorldContext;
  contrastiveAnalysis?: ContrastiveAnalysis;
  memoryHook: string;
  examples: {
    en: string;
    tr: string;
    highlightedWords: string[];
    grammarCategory: string;
    contextNote: string;
    breakdownNote: string;
  }[];
  vocabulary: {
    word: string;
    phonetic: string;
    partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'pronoun' | 'preposition';
    meaningTr: string;
    exampleSentence: string;
  }[];
  quickCheck: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  exercise: {
    prompt: string;
    sentence?: string;
    options: string[];
    correctAnswer: string;
    hint: string;
    explanation: string;
  };
  sentenceBuilder: {
    promptTr: string;
    targetEn: string;
    availableWords: string[];
    explanation: string;
  };
  summaryTakeaways: string[];
}

export const BLUEPRINTS: Record<string, (level: CEFRLevel, title: string, moduleName: string) => TopicBlueprint> = {
  // 1. TO BE & BASIC COPULAR STRUCTURES
  to_be: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Durum, kimlik, milliyet, meslek ve konum cümlelerini 'am / is / are' kullanarak hatasız kurabilmek.",
    whyItMatters: "İngilizcede hareket bildiren bir fiil yoksa cümle yüklemsiz kalamaz. Türkçe 'Ben mühendisim' derken yüklem ekidir; İngilizce ise özne ile isim/sıfat arasına 'am/is/are' köprüsünü koymak zorundadır.",
    linguisticLogic: "İngilizce her tam cümlede bir 'finite verb' arar. Sıfatlar tek başlarına yüklem olamayacağından, To Be fiili onları özneye bağlayan ontolojik köprü görevi görür.",
    stepBreakdown: [
      {
        title: "1. Aşama: Özne ve 'To Be' Şahıs Uyumu",
        content: "İngilizce zamirler To Be biçimleriyle birebir eşleşir.",
        keyPhrase: "I -> AM  |  He / She / It -> IS  |  We / You / They -> ARE",
        formula: "Özne + am/is/are + [İsim / Sıfat / Konum]",
        subPoints: [
          "Tekil üçüncü şahıslarda (The manager, Sarah) daima IS kullanılır.",
          "Çoğul ve ikinci tekil şahıslarda (You, We, They) daima ARE kullanılır.",
          "Birinci tekil şahısta (I) sadece AM kullanılır."
        ],
        rationale: "Bu biçimler eski Germenik çekim kurallarıdır ve tekil/çoğul ayrımını kesinleştirir."
      },
      {
        title: "2. Aşama: Olumsuzluk Eki ve Kısaltmalar",
        content: "Olumsuzluk için 'am/is/are' sonrasına 'NOT' eklenir.",
        formula: "Özne + am/is/are + not + [Tamamlayıcı]",
        keyPhrase: "isn't = is not  |  aren't = are not  |  I'm not",
        warningNote: "'am not' birleşerek 'amn't' olmaz; daima 'I'm not' kalır."
      },
      {
        title: "3. Aşama: Soru Formatı ve Yer Değiştirme Mantığı",
        content: "Soru sorarken 'am/is/are' fiili cümlenin başına, yani öznenin önüne geçer.",
        formula: "Am / Is / Are + Özne + [Tamamlayıcı] ?",
        keyPhrase: "Are you ready?  |  Is he your colleague?",
        subPoints: [
          "Kısa Cevap: 'Yes, I am.' / 'No, I'm not.'",
          "Kısa olumlu cevaplarda kısaltma yapılmaz ('Yes, I'm' YANLIŞTIR)."
        ]
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Eylem Fiili ile To Be Karışıklığı Yasağı",
        explanation: "To Be durumu bildirir; eylemlerle (go, eat, work) yalın halde yan yana gelemez.",
        cautionNote: "'I am work here' YANLIŞTIR! Ya 'I work here' ya da 'I am working here' denmelidir.",
        exampleSnippet: "Doğru: 'She is a doctor.' (Durum) / 'She works at the hospital.' (Eylem)"
      },
      {
        ruleTitle: "Yaş ve Hava Durumu Bildirimi",
        explanation: "İngilizcede yaş sahip olunan bir şey değil, bulunulan durumdur.",
        tipNote: "Türkçede '25 yaşındayım' veya '25 yaşım var' denir; İngilizcede 'I have 25' denmez, 'I am 25 years old' denir.",
        exampleSnippet: "It is cold outside. / I am twenty-eight years old."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I am agree with your opinion.",
        correctExample: "I agree with your opinion.",
        rootCause: "Türkçe 'aynı fikirdeyim' sıfat gibi algılandığı için öğrenci To Be ekleme eğilimindedir. Oysa 'agree' İngilizcede tam bir fiildir.",
        memoryTip: "'Agree' bir eylemdir; başına am/is/are almaz!"
      },
      {
        wrongExample: "They is very successful engineers.",
        correctExample: "They are very successful engineers.",
        rootCause: "Özne-yüklem uyumunun göz ardı edilmesi.",
        memoryTip: "Çoğul özneler (They/We) daima ARE ile eşleşir."
      }
    ],
    realWorldContext: {
      scenarioTitle: "Ofiste Yeni Ekip Arkadaşıyla Tanışma",
      description: "Yeni bir işe başlandığında pozisyon, departman ve durum bilgisi paylaşılır.",
      contextType: 'workplace',
      dialogue: [
        { speaker: "Sarah", textEn: "Hello, I am Sarah. I am the new project coordinator.", textTr: "Merhaba, ben Sarah. Yeni proje koordinatörüyüm." },
        { speaker: "Kemal", textEn: "Nice to meet you, Sarah! Are you in the engineering department?", textTr: "Tanıştığıma memnun oldum Sarah! Mühendislik departmanında mısınız?" },
        { speaker: "Sarah", textEn: "No, I'm not. I am in the operations team.", textTr: "Hayır, değilim. Operasyon ekibindeyim." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Ek Fiil Sistemi (-im, -dir)",
      conceptB: "İngilizce To Be Fiili (Am / Is / Are)",
      keyDifference: "Türkçede durum yüklemi kelimenin sonuna eklenir (yorgun-um). İngilizcede ise özne ile kelime arasına bağımsız 'am' köprüsü gelir.",
      exampleA: "Ben bugün çok mutluyum.",
      exampleB: "I am very happy today."
    },
    memoryHook: "To Be bir asma köprüdür: Özne ile Sıfat/İsim birbirine 'am / is / are' köprüsü olmadan bağlanamaz!",
    examples: [
      {
        en: "Alex is confident about the upcoming presentation.",
        tr: "Alex yaklaşan sunum konusunda kendinden emin.",
        highlightedWords: ['is', 'confident'],
        grammarCategory: "Sıfat ile durum bildirimi",
        contextNote: "Tekil şahıs (Alex) ile 'is' yardımcı fiili kullanılmıştır.",
        breakdownNote: "Özne (Alex) + To Be (is) + Sıfat (confident)."
      },
      {
        en: "We are not ready to make a final decision yet.",
        tr: "Henüz nihai bir karar almaya hazır değiliz.",
        highlightedWords: ['are not', 'ready'],
        grammarCategory: "Olumsuz durum cümlesi",
        contextNote: "Çoğul şahıs (We) ile 'are not' kullanılmıştır.",
        breakdownNote: "Özne (We) + are not + Sıfat (ready)."
      },
      {
        en: "Is the manager available for a brief meeting?",
        tr: "Müdür kısa bir toplantı için müsait mi?",
        highlightedWords: ['Is', 'available'],
        grammarCategory: "Soru cümlesi",
        contextNote: "Yardımcı fiil başa getirilerek soru oluşturulmuştur.",
        breakdownNote: "Is + Özne (the manager) + Sıfat (available)?"
      }
    ],
    vocabulary: [
      { word: 'Confident', phonetic: '/ˈkɑːn.fə.dənt/', partOfSpeech: 'adjective', meaningTr: 'Kendinden emin, özgüvenli', exampleSentence: 'She is confident in her English communication.' },
      { word: 'Available', phonetic: '/əˈveɪ.lə.bəl/', partOfSpeech: 'adjective', meaningTr: 'Müsait, uygun', exampleSentence: 'The lead developer is available now.' },
      { word: 'Colleague', phonetic: '/ˈkɑː.liːɡ/', partOfSpeech: 'noun', meaningTr: 'İş arkadaşı, meslektaş', exampleSentence: 'My colleagues are supportive.' },
      { word: 'Exhausted', phonetic: '/ɪɡˈzɑː.stɪd/', partOfSpeech: 'adjective', meaningTr: 'Aşırı yorgun, bitkin', exampleSentence: 'They are exhausted after the flight.' }
    ],
    quickCheck: {
      question: "Aşağıdaki cümlelerden hangisi 'To Be' kurallarına göre TAMAMEN DOĞRUDUR?",
      options: [
        "Sarah is not ready for the exam yet.",
        "My brother and I is students.",
        "They am very tired after work.",
        "I am work at a software company."
      ],
      correctIndex: 0,
      explanation: "Doğru yanıt: 'Sarah is not ready...' cümlesinde tekil 3. şahıs (Sarah) ile 'is' doğru eşleşmiştir."
    },
    exercise: {
      prompt: "Boşluğa en uygun 'To Be' yardımcı fiilini seçin:",
      sentence: "Alex and Emma ___ very excited about their upcoming international trip.",
      options: ['are', 'is', 'am', 'be'],
      correctAnswer: 'are',
      hint: "'Alex and Emma' çoğul (They) öznesi oluşturur.",
      explanation: "İki kişi çoğul (They) öznesi oluşturduğundan 'are' doğru yanıttır."
    },
    sentenceBuilder: {
      promptTr: "Biz bu akşam toplantı için hazır değiliz.",
      targetEn: "We are not ready for the meeting this evening",
      availableWords: ['We', 'are', 'not', 'ready', 'for', 'the', 'meeting', 'this', 'evening', 'is', 'am', 'do'],
      explanation: "'We' öznesi 'are not' gerektirir; devamında 'ready' sıfatı ve edat tümleci gelir."
    },
    summaryTakeaways: [
      "İngilizcede hareket fiili olmayan tüm cümleler To Be (am/is/are) köprüsüyle kurulur.",
      "He/She/It için IS, You/We/They için ARE, I için AM kullanılır.",
      "Soru yaparken To Be başa alınır, olumsuzda ardına NOT eklenir."
    ]
  }),

  // 2. PRESENT SIMPLE (GENİŞ ZAMAN & RUTİNLER)
  present_simple: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Günlük rutinleri, alışkanlıkları ve genel geçer gerçekleri Present Simple kalıbında -s takısı kurallarına uyarak aktarabilmek.",
    whyItMatters: "Geniş Zaman, dünyayı nasıl algıladığımızı, ne sıklıkla ne yaptığımızı ve değişmeyen bilimsel/mantıksal doğruları aktarmanın ana aracıdır.",
    linguisticLogic: "İngilizcede zaman (tense) ile görünüş (aspect) ayrıdır. Geniş zaman eylemin 'anlık akışını' değil, 'sürekli geçerliliğini ve döngüselliğini' kodlar.",
    stepBreakdown: [
      {
        title: "1. Aşama: Temel Çekim ve 3. Tekil Şahıs -s Kuralı",
        content: "I, You, We, They öznelerinde fiil yalın kalır. He, She, It öznelerinde ise fiil sonuna -s, -es veya -ies eklenir.",
        formula: "Özne (He/She/It) + Fiil + (-s/-es/-ies)",
        keyPhrase: "I work -> He works  |  They watch -> She watches  |  You study -> He studies",
        subPoints: [
          "-ch, -sh, -ss, -x, -o ile biten fiiller -ES alır (watches, washes, goes).",
          "Sessiz harf + y ile biten fiillerde y düşer, -IES gelir (study -> studies).",
          "Sesli harf + y alan fiiller normal -S alır (play -> plays)."
        ]
      },
      {
        title: "2. Aşama: Olumsuz Cümle ve Yardımcı Fiil Devreye Girişi",
        content: "Olumsuzluk kurarken 'don't' ve 'doesn't' yardımcı fiilleri kullanılır. 'Doesn't' kullanıldığında asıl fiildeki -s takısı DÜŞER.",
        formula: "He/She/It + doesn't + Yalın Fiil  |  I/You/We/They + don't + Yalın Fiil",
        warningNote: "'He doesn't works' ÇİFTE EK HATASIDIR! Doğrusu: 'He doesn't work'."
      },
      {
        title: "3. Aşama: Soru Sorma ve Sıklık Zarfları",
        content: "Sorularda Do ve Does başa gelir. Always, usually, often, sometimes, never zarfları özne ile asıl fiil arasına girer.",
        formula: "Do / Does + Özne + Yalın Fiil ?  |  Özne + [Sıklık Zarfı] + Fiil",
        keyPhrase: "Do you exercise regularly?  |  She always arrives on time."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Doesn't Kullanıldığında Asıl Fiil Yalınlaşır",
        explanation: "-s takısı sorumluluğunu 'do' yardımcı fiili 'does' haline gelerek üstlenmiştir. Asıl fiile bir daha -s takısı eklenemez.",
        cautionNote: "Yanlış: 'She doesn't likes tea.' ❌ -> Doğru: 'She doesn't like tea.' ✅"
      },
      {
        ruleTitle: "Sıklık Zarflarının Konumu",
        explanation: "Sıklık zarfları normal eylem fiillerinin ÖNÜNE, To Be fiilinin ise ARKASINA yerleştirilir.",
        exampleSnippet: "He usually drives to work. (Fiil önü) / He is always punctual. (To Be arkası)"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "He work in a large tech firm.",
        correctExample: "He works in a large tech firm.",
        rootCause: "3. tekil şahıs (He/She/It) -s takısının unutulması.",
        memoryTip: "He, She, It tekildir; fiiline 'S' takısı ister!"
      },
      {
        wrongExample: "She doesn't goes to the office on Fridays.",
        correctExample: "She doesn't go to the office on Fridays.",
        rootCause: "Doesn't sonrasında fiili yalın bırakmayı unutma.",
        memoryTip: "Doesn't hırsızdır, fiilin -s takısını çalar!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Haftalık Çalışma Rutinlerini Karşılaştırma",
      description: "İş yerinde mesai saatleri, esnek çalışma ve alışkanlıklar konuşulurken Present Simple kullanılır.",
      contextType: 'workplace',
      dialogue: [
        { speaker: "David", textEn: "How do you usually commute to work?", textTr: "İşe genellikle nasıl gidip geliyorsun?" },
        { speaker: "Elif", textEn: "I usually take the metro, but my colleague drives.", textTr: "Genellikle metroya binerim ama iş arkadaşım arabayla gider." },
        { speaker: "David", textEn: "Does he arrive early every morning?", textTr: "Her sabah erken mi varır?" }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Geniş Zaman (-r / -ar / -er)",
      conceptB: "İngilizce Present Simple (Yalın Fiil / -s)",
      keyDifference: "Türkçede şahıs ekleri fiilin sonuna gelir (çalış-ır-ım, çalış-ır-sın). İngilizcede yalnızca 3. tekil şahısta (works) ek vardır; diğer şahıslarda fiil yalındır.",
      exampleA: "O her sabah saat yedide uyanır.",
      exampleB: "She wakes up at seven every morning."
    },
    memoryHook: "Geniş Zaman bir takvim saatidir: Tekil 3. şahısta (He/She/It) 'S' zili çalar!",
    examples: [
      {
        en: "Our team always reviews the codebase before deployment.",
        tr: "Ekibimiz canlıya almadan önce kod tabanını daima inceler.",
        highlightedWords: ['always', 'reviews'],
        grammarCategory: "Sıklık zarfı ve 3. tekil şahıs",
        contextNote: "'Our team' tekil kabul edilip fiil -s almıştır.",
        breakdownNote: "Özne + sıklık zarfı + fiil(-s)."
      },
      {
        en: "He does not attend meetings without an agenda.",
        tr: "Gündemi olmayan toplantılara katılmaz.",
        highlightedWords: ['does not attend'],
        grammarCategory: "Olumsuz geniş zaman",
        contextNote: "does not sonrası attend fiili yalın kalmıştır.",
        breakdownNote: "He + does not + attend (yalın fiil)."
      },
      {
        en: "Do international clients prefer online demonstrations?",
        tr: "Uluslararası müşteriler çevrim içi tanıtımları mı tercih eder?",
        highlightedWords: ['Do', 'prefer'],
        grammarCategory: "Geniş zaman soru kalıbı",
        contextNote: "Çoğul özne (clients) olduğu için 'Do' ile başlar.",
        breakdownNote: "Do + çoğul özne + yalın fiil?"
      }
    ],
    vocabulary: [
      { word: 'Commute', phonetic: '/kəˈmjuːt/', partOfSpeech: 'verb', meaningTr: 'Ev ile iş arasında gidip gelmek', exampleSentence: 'She commutes by train every day.' },
      { word: 'Punctual', phonetic: '/ˈpʌŋk.tʃu.əl/', partOfSpeech: 'adjective', meaningTr: 'Dakik, vaktinde gelen', exampleSentence: 'He is always punctual for meetings.' },
      { word: 'Regularly', phonetic: '/ˈreɡ.jə.lɚ.li/', partOfSpeech: 'adverb', meaningTr: 'Düzenli olarak', exampleSentence: 'They meet regularly to review progress.' },
      { word: 'Habitual', phonetic: '/həˈbɪtʃ.u.əl/', partOfSpeech: 'adjective', meaningTr: 'Alışkanlık haline gelmiş', exampleSentence: 'Early rising is a habitual practice for him.' }
    ],
    quickCheck: {
      question: "Aşağıdaki cümlelerden hangisi Geniş Zaman kurallarına göre DOĞRUDUR?",
      options: [
        "She doesn't plays tennis on weekdays.",
        "My manager always reviews our reports thoroughly.",
        "They works at an international finance company.",
        "Does he likes drinking espresso in the morning?"
      ],
      correctIndex: 1,
      explanation: "Doğru yanıt: 'My manager always reviews...' cümlesinde tekil özne (manager) ile 'reviews' -s takısı almış ve sıklık zarfı doğru yerdedir."
    },
    exercise: {
      prompt: "Boşluğa uygun fiil çekimini seçin:",
      sentence: "The senior software engineer rarely ___ code without writing unit tests first.",
      options: ['deploys', 'deploy', 'deploying', 'is deploy'],
      correctAnswer: 'deploys',
      hint: "'The senior software engineer' tekil 3. şahıstır (He/She).",
      explanation: "Tekil 3. şahıs öznelerde geniş zamanda fiil -s takısı alır: 'deploys'."
    },
    sentenceBuilder: {
      promptTr: "Yazılım mühendisleri kodlarını her gün dikkatlice test eder.",
      targetEn: "Software engineers test their code carefully every day",
      availableWords: ['Software', 'engineers', 'test', 'their', 'code', 'carefully', 'every', 'day', 'tests', 'testing', 'is'],
      explanation: "Çoğul özne 'Software engineers' yalın fiil 'test' alır; ardından nesne ve zarflar gelir."
    },
    summaryTakeaways: [
      "He/She/It öznelerinde fiil sonuna -s/-es/-ies eklenir.",
      "Doesn't ve Does kullanıldığında asıl fiil mutlaka yalın hale döner.",
      "Sıklık zarfları asıl fiilin önüne, To Be fiilinin ise ardına yerleştirilir."
    ]
  }),

  // 3. PRESENT CONTINUOUS (ŞİMDİKİ ZAMAN)
  present_continuous: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Konuşma anında gerçekleşen eylemleri, geçici süreçleri ve geleceğe dönük kesin planları Present Continuous ile ifade edebilmek.",
    whyItMatters: "Süregiden aksiyonları betimlemek, değişen trendleri ve anlık telefon/iş görüşmesi diyaloglarını yönetmek için hayati bir yapıdır.",
    linguisticLogic: "Present Continuous iki zorunlu parçadan oluşur: Yardımcı fiil (am/is/are) ve eylemin devam ettiğini simgeleyen -ing eki.",
    stepBreakdown: [
      {
        title: "1. Aşama: İki Ayaklı Formülün Kurulması",
        content: "Sadece -ing eklemek yetmez; özneye uygun 'am, is, are' yardımcı fiili mutlaka bulunmalıdır.",
        formula: "Özne + am/is/are + Fiil-ing",
        keyPhrase: "I am working  |  She is writing  |  They are testing",
        warningNote: "'I working' DİL BİLGİSİ HATASIDIR! Yardımcı fiil (am) atlanamaz."
      },
      {
        title: "2. Aşama: Fiil Sonuna -ing Ekleme Kuralları",
        content: "make -> making (e düşer), run -> running (harf çiftleşir), lie -> lying (-ie -> y).",
        subPoints: [
          "Sessiz + sesli + sessiz ile biten tek heceli fiillerde son harf çiftleşir: sit -> sitting, plan -> planning.",
          "-e ile bitenlerde e düşer: write -> writing, drive -> driving.",
          "-ie ile bitenlerde y dönüşümü olur: die -> dying, lie -> lying."
        ]
      },
      {
        title: "3. Aşama: Durum Fiilleri (Stative Verbs) İstisnası",
        content: "want, know, understand, believe, like, need gibi zihinsel durum bildiren fiiller kural olarak -ing almaz.",
        keyPhrase: "'I am wanting coffee' YANLIŞTIR -> 'I want coffee' DOĞRUDUR."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Stative Verbs -ing Almaz Kuralı",
        explanation: "Düşünce, duygu ve sahiplik bildiren fiiller (love, understand, own) konuşma anında bile olsa Geniş Zaman kalıbında söylenir.",
        exampleSnippet: "Yanlış: 'I am knowing the answer.' ❌ -> Doğru: 'I know the answer.' ✅"
      },
      {
        ruleTitle: "Gelecek Zaman Anlamı (Fixed Arrangements)",
        explanation: "Kesinleşmiş randevu ve rezervasyonlar şimdiki zamanla söylenir.",
        exampleSnippet: "I am flying to London tomorrow morning. (Biletim alındı, kesin plan)"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Look! The bus coming.",
        correctExample: "Look! The bus is coming.",
        rootCause: "am/is/are yardımcı fiilini unutup doğrudan -ing ekleme eğilimi.",
        memoryTip: "-ing tek başına uçamaz; kanadı am/is/are'dır!"
      },
      {
        wrongExample: "I am needing some assistance right now.",
        correctExample: "I need some assistance right now.",
        rootCause: "'Şu anda' zarfını görüp need fiiline -ing eklemek.",
        memoryTip: "Need, want, know asla -ing sevmez!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Canlı Proje Toplantısında Anlık Durum Güncellemesi",
      description: "Ekip üyeleri şu anda üzerinde çalıştıkları modülleri şimdiki zamanla aktarır.",
      contextType: 'workplace',
      dialogue: [
        { speaker: "Team Lead", textEn: "What are you working on right now, Sarah?", textTr: "Şu anda ne üzerinde çalışıyorsun Sarah?" },
        { speaker: "Sarah", textEn: "I am updating the authentication flow for mobile users.", textTr: "Mobil kullanıcılar için kimlik doğrulama akışını güncelliyorum." },
        { speaker: "Team Lead", textEn: "Great, are the servers running smoothly?", textTr: "Harika, sunucular sorunsuz çalışıyor mu?" }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Şimdiki Zaman (-yor)",
      conceptB: "İngilizce Present Continuous (am/is/are + V-ing)",
      keyDifference: "Türkçede -yor eki hem anlık eylemler hem de geniş zaman rutinleri için kullanılır ('Her gün çalışıyorum'). İngilizcede ise rutinler için Present Simple, anlık eylemler için Present Continuous ayrımı kesindir.",
      exampleA: "Şu anda raporu hazırlıyorum.",
      exampleB: "I am preparing the report right now."
    },
    memoryHook: "Present Continuous bir kamera kaydıdır: 'Kayıt (To Be) + Aksiyon (-ing)' birlikte var olur!",
    examples: [
      {
        en: "The infrastructure team is migrating the database to cloud servers.",
        tr: "Altyapı ekibi veritabanını bulut sunucularına taşıyor.",
        highlightedWords: ['is migrating'],
        grammarCategory: "Şimdiki zaman olumlu",
        contextNote: "Tekil topluluk öznesiyle 'is migrating' kullanılmıştır.",
        breakdownNote: "Özne + is + migrate(-e düşer, -ing gelir)."
      },
      {
        en: "Why are you sitting here instead of attending the briefing?",
        tr: "Bilgilendirmeye katılmak yerine neden burada oturuyorsun?",
        highlightedWords: ['Why are you sitting'],
        grammarCategory: "Soru ve harf çiftleşmesi",
        contextNote: "sit fiilinde t harfi çiftleşmiştir (sitting).",
        breakdownNote: "Why + are + you + sitting?"
      },
      {
        en: "We are meeting the design partners at three o'clock tomorrow.",
        tr: "Tasarım ortaklarıyla yarın saat üçte buluşuyoruz.",
        highlightedWords: ['are meeting'],
        grammarCategory: "Kesin gelecek planı",
        contextNote: "Zaman zarfı yarın olmasına rağmen kesin plan olduğu için şimdiki zaman kullanılmıştır.",
        breakdownNote: "We + are + meeting + tomorrow."
      }
    ],
    vocabulary: [
      { word: 'Migrate', phonetic: '/ˈmaɪ.ɡreɪt/', partOfSpeech: 'verb', meaningTr: 'Taşımak, göç etmek (veri/sistem)', exampleSentence: 'They are migrating the databases.' },
      { word: 'Currently', phonetic: '/ˈkɝː.ənt.li/', partOfSpeech: 'adverb', meaningTr: 'Şu anda, halihazırda', exampleSentence: 'She is currently leading the new initiative.' },
      { word: 'Temporary', phonetic: '/ˈtem.pə.rer.i/', partOfSpeech: 'adjective', meaningTr: 'Geçici, süreli', exampleSentence: 'This arrangement is only temporary.' },
      { word: 'Progressing', phonetic: '/prəˈɡres.ɪŋ/', partOfSpeech: 'verb', meaningTr: 'İlerleyen, gelişen', exampleSentence: 'The construction is progressing well.' }
    ],
    quickCheck: {
      question: "Aşağıdaki cümlelerden hangisi 'Stative Verbs' kuralına göre TAMAMEN DOĞRUDUR?",
      options: [
        "I am understanding this complex grammar topic now.",
        "I understand this complex grammar topic now.",
        "I am believing your explanation completely.",
        "She is wanting to buy that new laptop."
      ],
      correctIndex: 1,
      explanation: "Doğru yanıt: 'understand' zihinsel durum fiili olduğu için -ing almaz; 'I understand' şeklinde söylenir."
    },
    exercise: {
      prompt: "Boşluğu doğru çekimle tamamlayın:",
      sentence: "Listen carefully! The lead architect ___ the new system specifications in the conference hall.",
      options: ['is presenting', 'presents', 'are presenting', 'presenting'],
      correctAnswer: 'is presenting',
      hint: "'Listen!' uyarısı eylemin tam şu anda gerçekleştiğini gösterir.",
      explanation: "Konuşma anındaki eylem için tekil özneyle 'is presenting' kullanılır."
    },
    sentenceBuilder: {
      promptTr: "Geliştiriciler yeni mobil uygulama üzerinde çalışıyorlar.",
      targetEn: "The developers are working on the new mobile application",
      availableWords: ['The', 'developers', 'are', 'working', 'on', 'the', 'new', 'mobile', 'application', 'is', 'work', 'works'],
      explanation: "Çoğul özne 'The developers' + 'are working' + edat tümleci 'on the new mobile application'."
    },
    summaryTakeaways: [
      "Present Continuous formülü: am/is/are + Fiil-ing.",
      "Durum fiilleri (understand, want, know, like) -ing almaz.",
      "Gelecekte kesinleşmiş randevular için de kullanılır."
    ]
  }),

  // 4. PAST SIMPLE (GEÇMİŞ ZAMAN)
  past_simple: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Geçmişte tamamlanmış olayları, düzenli fiil -ed kurallarını ve düzensiz fiil biçimlerini kullanarak kronolojik olarak anlatabilmek.",
    whyItMatters: "Tarihsel olayları, dünkü toplantı kararlarını, tamamlanmış projeleri ve kişisel yaşam anılarını aktarmanın omurgasıdır.",
    linguisticLogic: "Past Simple eylemin geçmişte belirli bir zamanda başladığını ve tamamen bittiğini vurgular. Bugünle doğrudan gramatik bağı yoktur.",
    stepBreakdown: [
      {
        title: "1. Aşama: Düzenli Fiiller ve -ed Telaffuzu",
        content: "Düzenli fiillerin sonuna -ed eklenir. Telaffuz üç gruptur: /t/ (worked), /d/ (played), /ɪd/ (wanted, decided).",
        formula: "Özne + V2 (Fiil-ed)",
        keyPhrase: "work -> worked  |  play -> played  |  decide -> decided",
        subPoints: [
          "-t veya -d ile biten fiillerde -ed eki ayrı bir hece olarak /ɪd/ okunur.",
          "Sessiz + y ile bitenlerde y düşer, -ied gelir (study -> studied)."
        ]
      },
      {
        title: "2. Aşama: Düzensiz Fiiller (Irregular Verbs)",
        content: "İngilizcede en sık kullanılan yaklaşık 150 fiil -ed almaz, tamamen değişir.",
        keyPhrase: "go -> went  |  see -> saw  |  buy -> bought  |  take -> took  |  write -> wrote",
        rationale: "Bu fiiller eski Germenik güçlü fiil sisteminin yaşayan kalıntılarıdır."
      },
      {
        title: "3. Aşama: Olumsuz ve Soru Cümlelerinde 'Did' Etkisi",
        content: "Olumsuzda 'didn't', soruda 'Did' kullanılır. Did devreye girdiğinde asıl fiil 1. haline (YALIN) geri döner.",
        formula: "Özne + didn't + Yalın Fiil  |  Did + Özne + Yalın Fiil ?",
        warningNote: "'I didn't went' ÇİFTE GEÇMİŞ HATASIDIR! Doğrusu: 'I didn't go'."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Did Varsa Asıl Fiil Yalındır",
        explanation: "Geçmiş zaman anlamını 'did' üstlendiği için fiil tekrar 2. hale çekimlenemez.",
        cautionNote: "Yanlış: 'Did you saw him?' ❌ -> Doğru: 'Did you see him?' ✅"
      },
      {
        ruleTitle: "To Be'nin Geçmiş Hali: Was ve Were",
        explanation: "Durum cümlelerinde geçmiş zaman için 'did' değil, 'was/were' kullanılır.",
        exampleSnippet: "He was tired yesterday. / Were you at the meeting?"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "She didn't wrote the email yesterday.",
        correctExample: "She didn't write the email yesterday.",
        rootCause: "Didn't sonrasında fiili 2. halde bırakma alışkanlığı.",
        memoryTip: "Didn't geçmişi yutar, fiili çıplak bırakır!"
      },
      {
        wrongExample: "We was very happy with the final outcome.",
        correctExample: "We were very happy with the final outcome.",
        rootCause: "Çoğul öznede was kullanımı.",
        memoryTip: "We, You, They geçmişte daima WERE ile eşleşir."
      }
    ],
    realWorldContext: {
      scenarioTitle: "Dünkü Proje Tesliminin Değerlendirilmesi",
      description: "Tamamlanan bir projenin ardından nelerin yapıldığı ve sonuçlar konuşulurken Past Simple kullanılır.",
      contextType: 'workplace',
      dialogue: [
        { speaker: "Director", textEn: "Did you submit the quarterly financial report yesterday?", textTr: "Üç aylık finansal raporu dün teslim ettiniz mi?" },
        { speaker: "Finance Lead", textEn: "Yes, we submitted it at 5 PM, and the auditors reviewed it immediately.", textTr: "Evet, saat 17:00'de teslim ettik ve denetçiler hemen incelediler." },
        { speaker: "Director", textEn: "Were there any major discrepancies?", textTr: "Büyük bir tutarsızlık var mıydı?" }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Belirli Geçmiş Zaman (-di / -ti)",
      conceptB: "İngilizce Past Simple (V2)",
      keyDifference: "Türkçede şahıs eki geçmiş zaman ekinin ardına gelir (gitti-m, gitti-n). İngilizcede düzensiz fiil tüm şahıslarda aynı kalır (I went, you went, they went).",
      exampleA: "Dün akşam toplantıya katıldım.",
      exampleB: "I attended the meeting yesterday evening."
    },
    memoryHook: "Past Simple mühürlü bir kutudur: Geçmişte oldu, bitti ve zaman zarfıyla (yesterday, in 2020) mühürlendi!",
    examples: [
      {
        en: "The development team launched the security patch two days ago.",
        tr: "Geliştirme ekibi güvenlik yamasını iki gün önce yayımladı.",
        highlightedWords: ['launched', 'two days ago'],
        grammarCategory: "Düzenli fiil ve geçmiş zaman zarfı",
        contextNote: "launch fiili -ed alarak geçmiş zamana dönüşmüştür.",
        breakdownNote: "Özne + V2 (launched) + nesne + zaman zarfı."
      },
      {
        en: "We did not observe any performance regression during the load test.",
        tr: "Yük testi sırasında herhangi bir performans düşüşü gözlemlemedik.",
        highlightedWords: ['did not observe'],
        grammarCategory: "Olumsuz geçmiş zaman",
        contextNote: "did not sonrası observe fiili yalın kalmıştır.",
        breakdownNote: "We + did not + observe (yalın fiil)."
      },
      {
        en: "Where did you purchase that ergonomic office chair?",
        tr: "O ergonomik ofis koltuğunu nereden satın aldın?",
        highlightedWords: ['Where did you purchase'],
        grammarCategory: "WH- geçmiş zaman sorusu",
        contextNote: "Did yardımcı fiili özne önünde, purchase yalındır.",
        breakdownNote: "Where + did + you + purchase?"
      }
    ],
    vocabulary: [
      { word: 'Launch', phonetic: '/lɑːntʃ/', partOfSpeech: 'verb', meaningTr: 'Piyasaya sürmek, başlatmak', exampleSentence: 'They launched the product last month.' },
      { word: 'Purchase', phonetic: '/ˈpɝː.tʃəs/', partOfSpeech: 'verb', meaningTr: 'Satın almak', exampleSentence: 'He purchased the equipment yesterday.' },
      { word: 'Discrepancy', phonetic: '/dɪˈskrep.ən.si/', partOfSpeech: 'noun', meaningTr: 'Uyuşmazlık, tutarsızlık', exampleSentence: 'They found a discrepancy in the accounts.' },
      { word: 'Resolved', phonetic: '/rɪˈzɑːlvd/', partOfSpeech: 'adjective', meaningTr: 'Çözümlenmiş, halledilmiş', exampleSentence: 'The incident was resolved quickly.' }
    ],
    quickCheck: {
      question: "Aşağıdaki cümlelerden hangisi Geçmiş Zaman (Past Simple) kurallarına TAMAMEN uygundur?",
      options: [
        "Did you saw the updated roadmap yesterday?",
        "She didn't went to the office on Monday.",
        "We bought all the required server components last week.",
        "They was absent during the initial kickoff meeting."
      ],
      correctIndex: 2,
      explanation: "Doğru yanıt: 'We bought...' cümlesinde buy fiilinin 2. hali (bought) ve geçmiş zaman zarfı (last week) hatasız kullanılmıştır."
    },
    exercise: {
      prompt: "Boşluğu doğru geçmiş zaman formuyla tamamlayın:",
      sentence: "Why ___ you ___ the security certificate before deploying the release?",
      options: ['didn\'t / renew', 'didn\'t / renewed', 'haven\'t / renew', 'don\'t / renewed'],
      correctAnswer: 'didn\'t / renew',
      hint: "Geçmiş zaman olumsuz sorusunda yardımcı fiil didn't, asıl fiil yalın olur.",
      explanation: "'didn't' yardımcı fiilinden sonra asıl fiil yalın halde (renew) gelmelidir."
    },
    sentenceBuilder: {
      promptTr: "Biz geçen yıl yeni bir şirket kurduk.",
      targetEn: "We founded a new company last year",
      availableWords: ['We', 'founded', 'a', 'new', 'company', 'last', 'year', 'found', 'did', 'was', 'established'],
      explanation: "Özne 'We' + düzenli geçmiş fiil 'founded' + nesne 'a new company' + zaman zarfı 'last year'."
    },
    summaryTakeaways: [
      "Düzenli fiiller -ed alır; düzensiz fiiller tamamen değişir (V2).",
      "Olumsuzda 'didn't', soruda 'did' kullanılır ve fiil YALIN hale döner.",
      "Durum cümlelerinde did değil, 'was / were' kullanılır."
    ]
  }),

  // 5. PRESENT PERFECT VS PAST SIMPLE
  past_vs_perfect: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Geçmişte bitmiş kesin olaylar (Past Simple) ile etkisi veya tecrübesi bugüne uzanan olaylar (Present Perfect) arasındaki farkı hatasız uygulayabilmek.",
    whyItMatters: "Türk öğrencilerinin en çok zorlandığı konulardan biridir; çünkü Türkçede her ikisi de '-di'li geçmiş zamanla ifade edilir.",
    linguisticLogic: "Past Simple 'Ne zaman oldu?' (zaman odaklı) sorusuna bakar. Present Perfect ise 'Şu ana ne etkisi var / Hayatında oldu mu?' (sonuç ve tecrübe odaklı) sorusuna bakar.",
    stepBreakdown: [
      {
        title: "1. Aşama: Zaman Belirteçleri Ayrımı",
        content: "Geçmişte bitmiş kesin zaman zarfları (yesterday, in 2019, 3 hours ago, last night) DAİMA Past Simple ister.",
        keyPhrase: "I lost my key yesterday. (Dün kaybettim - geçmişte bitti)",
        formula: "Belirli Geçmiş Zaman Zarfı -> Past Simple (V2)"
      },
      {
        title: "2. Aşama: Şimdiki Zamanla Bağlantı ve Sonuç Vurgusu",
        content: "Eylemin zamanı belirsizse veya etkisi şu an sürüyorsa Present Perfect kullanılır.",
        keyPhrase: "I have lost my key. (Anahtarımı kaybettim - şu an kapıda kaldım!)",
        formula: "Özne + have/has + V3"
      },
      {
        title: "3. Aşama: Tecrübeler ve 'Ever / Never' Kalıpları",
        content: "Hayat tecrübesi sorarken 'Have you ever...?' kalıbı kullanılır; detayına inilip spesifik olay sorulduğunda Past Simple'a geçilir.",
        keyPhrase: "A: 'Have you ever visited Japan?' -> B: 'Yes, I went there in 2022.'"
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Yesterday, Ago, Last Varsa Present Perfect KULLANILMAZ",
        explanation: "Kesin geçmiş zaman zarfları Present Perfect ile bir araya gelemez.",
        cautionNote: "Yanlış: 'I have seen him yesterday.' ❌ -> Doğru: 'I saw him yesterday.' ✅"
      },
      {
        ruleTitle: "Been to vs Gone to Ayrımı",
        explanation: "'He has been to Paris' (Gidip gördü, döndü) / 'He has gone to Paris' (Oraya gitti, halen orada).",
        tipNote: "Been = Tecrübe yaşandı, geri dönüldü. Gone = Halen yolda veya orada."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I have graduated from university in 2018.",
        correctExample: "I graduated from university in 2018.",
        rootCause: "'In 2018' kesin geçmiş zaman zarfıdır; Present Perfect ile kullanılamaz.",
        memoryTip: "Yıl, ay, gün ismi veriyorsan V2 (Past Simple) kullanacaksın!"
      },
      {
        wrongExample: "Did you ever eat sushi?",
        correctExample: "Have you ever eaten sushi?",
        rootCause: "Hayat tecrübesi sorarken Past Simple kullanımı.",
        memoryTip: "Ömür boyu tecrübe için: 'Have you ever + V3'!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "İş Mülakatında Kariyer Deneyimleri Paylaşımı",
      description: "Mülakatta önce genel tecrübe Present Perfect ile söylenir, ardından detaylar Past Simple ile açılır.",
      contextType: 'workplace',
      dialogue: [
        { speaker: "Interviewer", textEn: "Have you ever led a cross-functional engineering team?", textTr: "Hiç departmanlar arası bir mühendislik ekibine liderlik ettiniz mi?" },
        { speaker: "Candidate", textEn: "Yes, I have. In fact, I managed a team of twelve engineers in 2023.", textTr: "Evet, ettim. Aslında 2023 yılında on iki mühendisten oluşan bir ekibi yönettim." },
        { speaker: "Interviewer", textEn: "What challenges did you face back then?", textTr: "O dönemde hangi zorluklarla karşılaştınız?" }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Past Simple (Belirli Geçmiş)",
      conceptB: "Present Perfect (Bağlantılı Geçmiş)",
      keyDifference: "Türkçe 'Gördüm' cümlesi her iki anlama da gelebilir. İngilizce 'I saw it yesterday' (zaman odaklı) ile 'I have seen it already' (durum odaklı) ayrımını kesin kurar.",
      exampleA: "I lived in Berlin for two years (Artık orada yaşamıyorum).",
      exampleB: "I have lived in Berlin for two years (Halen orada yaşıyorum)."
    },
    memoryHook: "Past Simple geçmişteki bir 'fotoğraftır' (bitti). Present Perfect ise bugüne uzanan bir 'köprüdür'!",
    examples: [
      {
        en: "She has published three research papers so far.",
        tr: "Şu ana kadar üç araştırma makalesi yayımladı.",
        highlightedWords: ['has published', 'so far'],
        grammarCategory: "Present Perfect (tamamlanmamış zaman)",
        contextNote: "'so far' eylemin devam edebileceğini gösterir.",
        breakdownNote: "She + has published + so far."
      },
      {
        en: "She published her landmark paper in June 2021.",
        tr: "Dönüm noktası niteliğindeki makalesini Haziran 2021'de yayımladı.",
        highlightedWords: ['published', 'in June 2021'],
        grammarCategory: "Past Simple (kesin geçmiş zaman)",
        contextNote: "Tarih belirtildiği için Past Simple zorunludur.",
        breakdownNote: "Özne + V2 (published) + kesin tarih."
      },
      {
        en: "Have you reviewed the contract, or did you leave it for tomorrow?",
        tr: "Sözleşmeyi inceledin mi, yoksa yarına mı bıraktın?",
        highlightedWords: ['Have you reviewed', 'did you leave'],
        grammarCategory: "İki zamanın diyalog içi geçişi",
        contextNote: "İlk kısım sonuç odaklı, ikinci kısım karar anı odaklıdır.",
        breakdownNote: "Have you V3 ... did you V1?"
      }
    ],
    vocabulary: [
      { word: 'Landmark', phonetic: '/ˈlænd.mɑːrk/', partOfSpeech: 'adjective', meaningTr: 'Dönüm noktası niteliğinde, tarihi', exampleSentence: 'It was a landmark achievement.' },
      { word: 'Accomplishment', phonetic: '/əˈkɑːm.plɪʃ.mənt/', partOfSpeech: 'noun', meaningTr: 'Başarı, kazanım', exampleSentence: 'Completing the project was a great accomplishment.' },
      { word: 'Recently', phonetic: '/ˈriː.sənt.li/', partOfSpeech: 'adverb', meaningTr: 'Son zamanlarda, yakınlarda', exampleSentence: 'They have recently updated the policies.' },
      { word: 'Precedent', phonetic: '/ˈpres.ə.dənt/', partOfSpeech: 'noun', meaningTr: 'Emsal, öncül örnek', exampleSentence: 'This case set an important legal precedent.' }
    ],
    quickCheck: {
      question: "Aşağıdaki cümlelerden hangisi 'Zaman Belirteci - Tense Uyumu' kuralına göre DOĞRUDUR?",
      options: [
        "I have visited London three times last year.",
        "They arrived at the airport two hours ago.",
        "She has finished the final presentation yesterday.",
        "Did you ever fly in a private jet?"
      ],
      correctIndex: 1,
      explanation: "Doğru yanıt: 'two hours ago' kesin bir geçmiş zaman zarfıdır ve Past Simple (arrived) ile doğru eşleşmiştir."
    },
    exercise: {
      prompt: "Boşluğu en uygun zaman formuyla doldurun:",
      sentence: "Dr. Evans ___ more than fifty successful surgeries since he joined the clinic.",
      options: ['has performed', 'performed', 'performs', 'is performing'],
      correctAnswer: 'has performed',
      hint: "'since he joined' geçmişten bugüne gelen bir süreci işaret eder.",
      explanation: "'since' bağlacı ana cümlede Present Perfect (has performed) gerektirir."
    },
    sentenceBuilder: {
      promptTr: "Biz bu yeni teknolojiyi henüz denemedik.",
      targetEn: "We have not tested this new technology yet",
      availableWords: ['We', 'have', 'not', 'tested', 'this', 'new', 'technology', 'yet', 'did', 'test', 'were'],
      explanation: "Yet olumsuz Present Perfect cümlesi sonunda yer alır: 'We have not tested ... yet'."
    },
    summaryTakeaways: [
      "Kesin zaman zarfı (yesterday, last year, in 2020) varsa DAİMA Past Simple.",
      "Zaman belirsizse, hayat tecrübesi veya etkisi sürüyorsa Present Perfect.",
      "Since ve For süreç belirteçleriyle Present Perfect kullanılır."
    ]
  }),

  // 6. CONDITIONALS & HYPOTHETICALS
  conditionals: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Gerçek ve varsayımsal koşulları Zero, First, Second ve Third Conditionals yapılarıyla ayırt edip hatasız kurabilmek.",
    whyItMatters: "Müzakerelerde şart öne sürmek, risk analizi yapmak, pişmanlık bildirmek ve varsayımsal senaryolar üretmek için temel yapıdır.",
    linguisticLogic: "Şart cümleleri iki kısımdan oluşur: Koşul yan cümleciği (if clause) ve temel sonuç cümleciği (main clause). Gerçeklik derecesi düştükçe fiil bir derece geçmişe kayar.",
    stepBreakdown: [
      {
        title: "1. Aşama: Zero & First Conditional (Gerçekçi Koşullar)",
        content: "Zero: Doğa kanunu (If + Present, Present). First: Gelecekteki gerçek ihtimal (If + Present, Will).",
        formula: "If it rains, we will cancel the outdoor workshop.",
        keyPhrase: "Unless = If not (Unless you register, you cannot enter)."
      },
      {
        title: "2. Aşama: Second Conditional (Hayali / Şu Anki İmkansız Durumlar)",
        content: "Şu anda gerçek olmayan bir varsayım kurarken fiil past tense olur, sonuçta 'would' kullanılır.",
        formula: "If + Past Simple, would + Yalın Fiil",
        keyPhrase: "If I had enough capital, I would invest in this startup.",
        subPoints: [
          "To Be fiilinde resmi dilde tüm şahıslarda 'WERE' tercih edilir: 'If I were you...'"
        ]
      },
      {
        title: "3. Aşama: Third & Mixed Conditionals (Geçmiş Pişmanlıklar)",
        content: "Geçmişte yaşanmış bitmiş bir olayın tersini hayal etme (If + Had V3, Would have V3).",
        formula: "If we had run the tests, we wouldn't have faced this outage.",
        keyPhrase: "Geçmişi değiştiremeyiz ama karşı-olgusal analiz yapabiliriz."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "If Cümlesinin İçinde 'Will' veya 'Would' Kullanılmaz",
        explanation: "Koşul yan cümleciğinin içine modal konmaz; modal ana sonuç cümlesinde yer alır.",
        cautionNote: "Yanlış: 'If you will help me, I will finish.' ❌ -> Doğru: 'If you help me, I will finish.' ✅"
      },
      {
        ruleTitle: "Unless Olumsuz Anlam Taşır",
        explanation: "Unless zaten 'eğer ... olmazsa' demektir; yanındaki fiil tekrar olumsuz yapılmaz.",
        exampleSnippet: "Unless you hurry, you will miss the train. (Acele etmezsen treni kaçıracaksın)"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "If I will have time tomorrow, I will call you.",
        correctExample: "If I have time tomorrow, I will call you.",
        rootCause: "If yan cümleciğinde geleceği ifade etmek için will kullanma hatası.",
        memoryTip: "If'in hemen yanına WILL veya WOULD gelmez!"
      },
      {
        wrongExample: "If I was you, I would accept the job offer.",
        correctExample: "If I were you, I would accept the job offer.",
        rootCause: "Tavsiye kalıbında was kullanımı.",
        memoryTip: "Tavsiye verirken 'If I were you' kalıbı altındır!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Stratejik Şirket Birleşmesi Müzakeresi",
      description: "Şartlar, tavizler ve alternatif senaryolar tartışılırken koşul yapıları kullanılır.",
      contextType: 'workplace',
      dialogue: [
        { speaker: "Negotiator A", textEn: "If your board approves the valuation, we will sign the agreement tomorrow.", textTr: "Eğer yönetim kurulunuz değerlemeyi onaylarsa, anlaşmayı yarın imzalarız." },
        { speaker: "Negotiator B", textEn: "If we had known about these regulatory issues earlier, we would have restructured the deal.", textTr: "Bu yasal düzenleme sorunlarını daha önce bilseydik, anlaşmayı yeniden yapılandırırdık." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Şart Kipi (-se / -sa)",
      conceptB: "İngilizce Conditionals (If + Zaman Matrisi)",
      keyDifference: "Türkçe her durum için '-se/-sa' kullanır ('Gelseydi de, gelse de'). İngilizce ise gerçeklik derecesine göre 4 katı zaman şablonu uygular.",
      exampleA: "Param olsaydı o evi alırdım.",
      exampleB: "If I had money, I would buy that house (Type 2)."
    },
    memoryHook: "Koşul bir merdivendir: Gerçekten uzaklaştıkça fiil bir basamak geçmişe iner!",
    examples: [
      {
        en: "If the security audit identifies any vulnerability, we will remediate it immediately.",
        tr: "Güvenlik denetimi herhangi bir açık tespit ederse, onu derhal gidereceğiz.",
        highlightedWords: ['If', 'identifies', 'will remediate'],
        grammarCategory: "First Conditional (Gerçekçi gelecek)",
        contextNote: "If + present simple, main clause + will.",
        breakdownNote: "Koşul (identifies) -> Sonuç (will remediate)."
      },
      {
        en: "If our team had more bandwidth, we would build a dedicated mobile client.",
        tr: "Ekibimizin daha fazla kapasitesi olsaydı, özel bir mobil istemci inşa ederdik.",
        highlightedWords: ['had', 'would build'],
        grammarCategory: "Second Conditional (Hayali şu an)",
        contextNote: "Şu an kapasite yok, hayali bir durum ifade ediliyor.",
        breakdownNote: "If + past (had) -> would + bare verb."
      },
      {
        en: "If they had tested the backup servers, the outage would not have disrupted operations.",
        tr: "Yedek sunucuları test etmiş olsalardı, kesinti operasyonları aksatmamış olurdu.",
        highlightedWords: ['had tested', 'would not have disrupted'],
        grammarCategory: "Third Conditional (Geçmiş pişmanlık)",
        contextNote: "Geçmişte test edilmedi ve kesinti yaşandı.",
        breakdownNote: "If + past perfect -> would have + V3."
      }
    ],
    vocabulary: [
      { word: 'Vulnerability', phonetic: '/ˌvʌl.nɚ.əˈbɪl.ə.t̬i/', partOfSpeech: 'noun', meaningTr: 'Açık, kırılganlık, zaaf', exampleSentence: 'They patched the critical vulnerability.' },
      { word: 'Remediate', phonetic: '/rɪˈmiː.di.eɪt/', partOfSpeech: 'verb', meaningTr: 'İyileştirmek, açığı gidermek', exampleSentence: 'The engineers remediated the error.' },
      { word: 'Bandwidth', phonetic: '/ˈbænd.wɪdθ/', partOfSpeech: 'noun', meaningTr: 'Bant genişliği / Kapasite, iş gücü', exampleSentence: 'We lack the bandwidth for extra tasks.' },
      { word: 'Contingency', phonetic: '/kənˈtɪn.dʒən.si/', partOfSpeech: 'noun', meaningTr: 'Beklenmedik durum planı', exampleSentence: 'We prepared a contingency plan.' }
    ],
    quickCheck: {
      question: "Aşağıdaki şart cümlelerinden hangisi dilbilgisel açıdan TAMAMEN DOĞRUDUR?",
      options: [
        "If you will send the file, I will review it immediately.",
        "Unless you don't submit the form, you cannot register.",
        "If I were in your position, I would renegotiate the contract.",
        "If they studied harder, they would have passed yesterday's test."
      ],
      correctIndex: 2,
      explanation: "Doğru yanıt: 'If I were in your position, I would renegotiate...' Second Conditional yapısına ve 'were' kuralına kusursuz uyar."
    },
    exercise: {
      prompt: "Boşluğu Third Conditional mantığına uygun şekilde tamamlayın:",
      sentence: "If the pilot ___ the weather warning, the emergency landing ___ necessary.",
      options: [
        'had received / wouldn\'t have been',
        'received / won\'t be',
        'receives / wouldn\'t be',
        'had received / wouldn\'t be'
      ],
      correctAnswer: 'had received / wouldn\'t have been',
      hint: "Geçmişte tamamlanmış ve değiştirilemez bir olay için Type 3 kullanılır.",
      explanation: "If + had V3 (had received), would have V3 (wouldn't have been) geçmiş koşulu ifade eder."
    },
    sentenceBuilder: {
      promptTr: "Eğer daha fazla zamanımız olsaydı bu projeyi tamamlardık.",
      targetEn: "If we had more time we would complete this project",
      availableWords: ['If', 'we', 'had', 'more', 'time', 'we', 'would', 'complete', 'this', 'project', 'will', 'have'],
      explanation: "Type 2: 'If we had more time' (Koşul) + 'we would complete this project' (Sonuç)."
    },
    summaryTakeaways: [
      "If cümlesinin içine asla will veya would gelmez.",
      "Şu anki hayaller için Type 2 (If + Past, Would + Yalın Fiil).",
      "Geçmiş pişmanlıklar için Type 3 (If + Had V3, Would have V3)."
    ]
  }),

  // 7. INVERSION & ADVANCED EMPHASIS
  inversion: (level, title) => ({
    skillType: 'grammar',
    concreteCompetency: "Devrik cümle yapılarını (Negative Inversion) ve vurgu araçlarını kullanarak üst düzey resmi, akademik ve hitabet dilinde cümle kurabilmek.",
    whyItMatters: "C1 ve C2 seviyelerinde standart cümle yapısının ötesine geçerek dinleyici veya okuyucunun dikkatini can alıcı mesaja çekmenin zirve aracıdır.",
    linguisticLogic: "Olumsuz veya kısıtlayıcı bir zarf cümle başına geldiğinde, İngilizce bunu soru formatına benzer şekilde yardımcı fiili öznenin önüne taşıyarak (inversion) işaretler.",
    stepBreakdown: [
      {
        title: "1. Aşama: Olumsuz Sıklık Zarfları ile Devriklik",
        content: "Never, Rarely, Seldom, Scarcely, Hardly gibi kelimeler başa geldiğinde cümle devrilir.",
        formula: "[Negatif Zarf] + Yardımcı Fiil + Özne + Asıl Fiil",
        keyPhrase: "Rarely have I seen such dedication.  |  Never will we compromise."
      },
      {
        title: "2. Aşama: Zaman Sınırı ve Koşul Devrikleri",
        content: "Hardly... when, No sooner... than, Only when, Only after yapıları.",
        formula: "Hardly had the meeting started when the CEO arrived.",
        keyPhrase: "No sooner had we deployed the build than we noticed the issue."
      },
      {
        title: "3. Aşama: Yasak ve Kesin Kural Devrikleri",
        content: "Under no circumstances, On no account gibi kurumsal ve yasal kalıplar.",
        formula: "Under no circumstances should sensitive data be shared.",
        warningNote: "Normal cümle 'Sensitive data should never be shared' iken, devrik cümle çok daha buyurgan ve resmidir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Devrik Yapıda 'Yardımcı Fiil + Özne' Sıralaması Zorunludur",
        explanation: "Cümle başında negatif zarf varken düz sıralama yapmak gramer hatasıdır.",
        cautionNote: "Yanlış: 'Seldom they make mistakes.' ❌ -> Doğru: 'Seldom DO they make mistakes.' ✅"
      },
      {
        ruleTitle: "No Sooner... Than Eşleşmesi",
        explanation: "'No sooner' daima 'than' ile eşleşir; 'Hardly' ise 'when' ile eşleşir.",
        exampleSnippet: "No sooner had he left THAN it started raining."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Rarely we see such remarkable breakthrough in this field.",
        correctExample: "Rarely do we see such a remarkable breakthrough in this field.",
        rootCause: "Negatif zarf başa geldiğinde yardımcı fiili özne önüne getirmeyi unutma.",
        memoryTip: "Zarf negatifse ve baştaysa, soru sorar gibi devir: 'Rarely DO we...'"
      },
      {
        wrongExample: "Hardly had I opened the door than the phone rang.",
        correctExample: "Hardly had I opened the door when the phone rang.",
        rootCause: "Hardly yapısını yanlışlıkla than ile bağlama.",
        memoryTip: "Hardly + WHEN  |  No sooner + THAN!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Uluslararası Güvenlik Zirvesinde Hitabet",
      description: "Üst düzey yöneticiler ve diplomatlar politikalarının tavizsizliğini vurgulamak için devrik cümleler kullanır.",
      contextType: 'academic',
      dialogue: [
        { speaker: "Commissioner", textEn: "Under no circumstances will our organization compromise on data sovereignty.", textTr: "Kurumumuz veri egemenliği konusunda hiçbir koşul altında taviz vermeyecektir." },
        { speaker: "Journalist", textEn: "Rarely have international bodies taken such a decisive stance.", textTr: "Uluslararası kuruluşlar nadiren bu denli kararlı bir duruş sergilemiştir." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Vurgu Sistemi (Yüklem Önüne Alma)",
      conceptB: "İngilizce Sentaktik Devriklik (Inversion)",
      keyDifference: "Türkçe vurgulamak istediği ögeyi yüklemin hemen önüne getirir. İngilizce ise negatif belirteci başa alıp sentaksı tersyüz eder.",
      exampleA: "Böyle bir ihmali daha önce hiç görmemiştik.",
      exampleB: "Never before had we witnessed such negligence."
    },
    memoryHook: "Inversion bir megafondur: Fısıldamak yerine cümleyi ters çevirip tüm kitleye duyurur!",
    examples: [
      {
        en: "Seldom does an emerging technology disrupt global markets so rapidly.",
        tr: "Gelişmekte olan bir teknolojinin küresel pazarları bu denli hızla sarsması nadiren görülür.",
        highlightedWords: ['Seldom does', 'disrupt'],
        grammarCategory: "Geniş zaman devrik yapı",
        contextNote: "Seldom başa gelmiş, does yardımcı fiili özne önüne geçmiştir.",
        breakdownNote: "Seldom + does + an emerging technology + disrupt."
      },
      {
        en: "Not only did the team exceed quarterly targets, but they also reduced infrastructure costs.",
        tr: "Ekip sadece üç aylık hedefleri aşmakla kalmadı, aynı zamanda altyapı maliyetlerini de düşürdü.",
        highlightedWords: ['Not only did', 'exceed', 'but they also'],
        grammarCategory: "Not only... but also ikili devriklik",
        contextNote: "İlk cümle 'did' ile devrilmiştir.",
        breakdownNote: "Not only + did + the team + exceed + but..."
      },
      {
        en: "Under no circumstances should production credentials be committed to repository.",
        tr: "Hiçbir koşul altında canlı ortam kimlik bilgileri depoya yüklenmemelidir.",
        highlightedWords: ['Under no circumstances should', 'be committed'],
        grammarCategory: "Yasak bildiren devrik yapı",
        contextNote: "should yardımcı fiili credentials öznesinin önüne geçmiştir.",
        breakdownNote: "Under no circumstances + should + subject + be V3."
      }
    ],
    vocabulary: [
      { word: 'Disrupt', phonetic: '/dɪsˈrʌpt/', partOfSpeech: 'verb', meaningTr: 'Aksatmak, düzeni altüst etmek, sarsmak', exampleSentence: 'New technologies disrupt established industries.' },
      { word: 'Negligence', phonetic: '/ˈneɡ.lə.dʒəns/', partOfSpeech: 'noun', meaningTr: 'İhmal, savsaklama', exampleSentence: 'The crash was caused by human negligence.' },
      { word: 'Sovereignty', phonetic: '/ˈsɑːv.rən.ti/', partOfSpeech: 'noun', meaningTr: 'Egemenlik, bağımsızlık', exampleSentence: 'Data sovereignty is a national priority.' },
      { word: 'Decisive', phonetic: '/dɪˈsaɪ.sɪv/', partOfSpeech: 'adjective', meaningTr: 'Kararlı, kesin, nihai', exampleSentence: 'The board took decisive action.' }
    ],
    quickCheck: {
      question: "Aşağıdaki devrik cümlelerden hangisi kurala TAM UYGUNDUR?",
      options: [
        "Rarely we have encountered such unprecedented resistance.",
        "Under no circumstances you should sign the contract without legal review.",
        "Not only did they deliver on schedule, but they also exceeded expectations.",
        "No sooner I arrived at the station when the train departed."
      ],
      correctIndex: 2,
      explanation: "Doğru yanıt: 'Not only did they deliver...' cümlesinde 'did they deliver' yardımcı fiil öne gelerek kusursuz devriklik oluşturmuştur."
    },
    exercise: {
      prompt: "Boşluğu devrik cümle kuralına uygun seçenekle tamamlayın:",
      sentence: "Scarcely ___ the keynote address when the technical malfunction interrupted the audio.",
      options: [
        'had the CEO commenced',
        'the CEO had commenced',
        'did the CEO commenced',
        'has the CEO commenced'
      ],
      correctAnswer: 'had the CEO commenced',
      hint: "Scarcely zaman devrikliğinde 'had + Özne + V3' kalıbı kullanılır.",
      explanation: "'Scarcely had the CEO commenced' kuralı geçmişte yeni başlamış eylemin devrikliğini sağlar."
    },
    sentenceBuilder: {
      promptTr: "Böyle etkileyici bir performansı nadiren görmüşüzdür.",
      targetEn: "Rarely have we seen such an impressive performance",
      availableWords: ['Rarely', 'have', 'we', 'seen', 'such', 'an', 'impressive', 'performance', 'did', 'saw', 'are'],
      explanation: "Rarely başa gelir, have yardımcı fiili özne 'we' önüne geçer: 'Rarely have we seen...'."
    },
    summaryTakeaways: [
      "Negatif ve kısıtlayıcı zarflar başa geldiğinde cümle devrilir (Inversion).",
      "Sıralama: Zarf + Yardımcı Fiil + Özne + Asıl Fiil.",
      "C1-C2 resmi, akademik ve hitabet dilinin en güçlü retorik aracıdır."
    ]
  }),

  // 8. GREETINGS & SELF-INTRODUCTION (A1-01)
  greetings_intro: (level, title) => ({
    skillType: 'speaking',
    concreteCompetency: "Kendini, adını, memleketini ve temel nezaket ifadelerini kullanarak doğal ve akıcı bir tanışma diyaloğu başlatabilmek ve sürdürebilmek.",
    whyItMatters: "Yabancı bir dilde kurulan ilk diyalog özgüvenin temelidir. 'Hello, my name is...', 'Nice to meet you' ve 'Where are you from?' kalıpları tüm dünyada iletişimin evrensel kapı açıcılarıdır.",
    linguisticLogic: "İngilizcede tanışırken doğrudan soru sormak yerine önce selamlaşma ve kendini tanıtma jesti yapılır. Karşılık verirken 'Nice to meet you, too' kalıbındaki 'too' (ben de) eki samimiyeti kurar.",
    stepBreakdown: [
      {
        title: "1. Aşama: Selamlaşma ve Kendini Tanıtma",
        content: "Kendinizi tanıtırken 'I am [İsim]' veya 'My name is [İsim]' kalıbı kullanılır.",
        keyPhrase: "Hello! My name is Alex.  |  Hi, I am Sarah.",
        formula: "Greeting + My name is [İsim] / I am [İsim]",
        subPoints: [
          "Resmi: 'Good morning / afternoon / evening'",
          "Günlük & Samimi: 'Hello' veya 'Hi'"
        ],
        rationale: "İlk temas anında açık, net ve güleryüzlü bir tonlama benimsenmelidir."
      },
      {
        title: "2. Aşama: Karşı Tarafın Adını Sorma",
        content: "Nezaketle karşı tarafın adını öğrenmek için soru yöneltilir.",
        formula: "What is your name?  |  And you are...?",
        keyPhrase: "What's your name? (What is kısaltması yaygındır)",
        warningNote: "Yalnızca 'Your name?' demek kaba algılanabilir; tam cümle kurmaya özen gösterin."
      },
      {
        title: "3. Aşama: Memnuniyet ve Memleket Belirtme",
        content: "Tanışmaktan duyulan memnuniyet 'Nice to meet you' ile ifade edilir; karşı taraf 'Nice to meet you, too' ile yanıt verir.",
        keyPhrase: "Nice to meet you!  |  Pleased to meet you!  |  Where are you from? I'm from Turkey.",
        formula: "Nice to meet you, [İsim] + I am from [Ülke/Şehir]"
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Temel Tanışma Zinciri",
        formula: "Hello! My name is ... -> What is your name? -> Nice to meet you!",
        explanation: "Tanışma adımları sırayla izlendiğinde diyalog kesintiye uğramadan doğal bir akış kazanır.",
        exampleSnippet: "Hello, my name is David. What is your name? - I'm Emma, nice to meet you!",
        tipNote: "Karşılık verirken 'Me too' yerine 'Nice to meet you, too' demek çok daha profesyoneldir."
      },
      {
        ruleTitle: "Kritik Telaffuz: 'What's your name?' Bağlantısı",
        explanation: "Konuşurken 'What is your' tane tane değil, 'What's yer' (/wʌts jər/) şeklinde kaynaşarak telaffuz edilir.",
        cautionNote: "'My name' derken 'name' sonundaki 'e' okunmaz, /neɪm/ şeklinde telaffuz edilir."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Hello, I name is Ali.",
        correctExample: "Hello, my name is Ali. (veya I am Ali.)",
        rootCause: "Türkçe 'Benim adım' yerine 'Ben ad' karışıklığı.",
        memoryTip: "'My name' (Benim adım) veya 'I am' (Ben ...-im) ikisinden birini seç!"
      },
      {
        wrongExample: "Nice to meet you. - Yes, thank you.",
        correctExample: "Nice to meet you. - Nice to meet you, too!",
        rootCause: "Memnuniyet ifadesine teşekkürle yanıt vermeye çalışmak.",
        memoryTip: "Biri 'Nice to meet you' dediğinde aynısını sonuna 'too' ekleyerek iade et!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Uluslararası Bir Konferansta İlk Tanışma",
      description: "Kahve molasında yanınızdaki katılımcıyla tanışma ve kartvizit paylaşma anı.",
      contextType: 'daily',
      dialogue: [
        {
          speaker: "Alex",
          textEn: "Hello! My name is Alex. Nice to meet you.",
          textTr: "Merhaba! Benim adım Alex. Tanıştığımıza memnun oldum."
        },
        {
          speaker: "Selin",
          textEn: "Hi Alex, I'm Selin. Pleased to meet you, too! Where are you from?",
          textTr: "Selam Alex, ben Selin. Ben de çok memnun oldum! Nerelisiniz?"
        },
        {
          speaker: "Alex",
          textEn: "I'm from Canada, and this is my first time in London.",
          textTr: "Kanada'dan geliyorum, Londra'ya ilk gelişim."
        }
      ]
    },
    memoryHook: "Tanışma Üçgeni: Selam Ver (Hello) -> Adını Söyle (My name is) -> Memnuniyetini Bildir (Nice to meet you)!",
    examples: [
      {
        en: "Hello, my name is Lisa and it is a pleasure to meet you.",
        tr: "Merhaba, benim adım Lisa ve sizinle tanışmak bir zevk.",
        highlightedWords: ['Hello', 'my name is', 'pleasure to meet you'],
        grammarCategory: 'Selamlaşma & İsim',
        contextNote: "Resmi veya yarı resmi tanışma cümlesi.",
        breakdownNote: "Ünlem + İyelik Sıfatı + İsim + To Be + Tamamlayıcı."
      },
      {
        en: "Nice to meet you, Mark. Where are you originally from?",
        tr: "Tanıştığımıza memnun oldum Mark. Aslen nerelisiniz?",
        highlightedWords: ['Nice to meet you', 'originally from'],
        grammarCategory: 'Nezaket & Menşei Sorusu',
        contextNote: "Sohbeti ilerletmek için memleket sorma kalıbı.",
        breakdownNote: "Nezaket öbeği + WH- sorusu."
      },
      {
        en: "I am from Istanbul, Turkey, and I work in software engineering.",
        tr: "Türkiyeliyim, İstanbulluyum ve yazılım mühendisliği alanında çalışıyorum.",
        highlightedWords: ['I am from', 'work in'],
        grammarCategory: 'Memleket & Meslek Bildirimi',
        contextNote: "Kendini tanıtırken köken ve iş alanı paylaşımı.",
        breakdownNote: "Özne + To Be + from + edat öbeği."
      }
    ],
    vocabulary: [
      {
        word: 'Introduce',
        phonetic: '/ˌɪn.trəˈdjuːs/',
        partOfSpeech: 'verb',
        meaningTr: 'Tanıtmak, tanıştırmak',
        exampleSentence: 'Allow me to introduce myself.'
      },
      {
        word: 'Pleasure',
        phonetic: '/ˈpleʒ.ər/',
        partOfSpeech: 'noun',
        meaningTr: 'Memnuniyet, zevk',
        exampleSentence: 'It is a pleasure to meet you.'
      },
      {
        word: 'Originally',
        phonetic: '/əˈrɪdʒ.ən.əl.i/',
        partOfSpeech: 'adverb',
        meaningTr: 'Aslen, başlangıçta',
        exampleSentence: 'Where are you originally from?'
      },
      {
        word: 'Surname',
        phonetic: '/ˈsɜː.neɪm/',
        partOfSpeech: 'noun',
        meaningTr: 'Soyadı',
        exampleSentence: 'What is your surname, please?'
      }
    ],
    quickCheck: {
      question: "İlk kez karşılaştığınız birine 'Tanıştığımıza memnun oldum' demek için hangi ifade kullanılır?",
      options: [
        "Nice to meet you.",
        "I am fine, thank you.",
        "See you tomorrow morning.",
        "Good night, sleep well."
      ],
      correctIndex: 0,
      explanation: "İlk tanışma anında 'Nice to meet you' (Tanıştığımıza memnun oldum) kullanılır. Diğer seçenekler veda veya durum bildirimleridir."
    },
    exercise: {
      prompt: "Tanışma diyaloğundaki boşluğu en uygun kelimeyle tamamlayın:",
      sentence: "Hello! My ___ is David and I am from Canada.",
      options: ['name', 'from', 'meet', 'pleased'],
      correctAnswer: 'name',
      hint: "Adınızı söylerken 'My name is...' kalıbı kullanılır.",
      explanation: "'My name is David' (Benim adım David) kalıbı doğru kelime 'name' gerektirir."
    },
    sentenceBuilder: {
      promptTr: "Merhaba benim adım Sarah ve tanıştığımıza çok memnun oldum.",
      targetEn: "Hello my name is Sarah and nice to meet you",
      availableWords: ['Hello', 'my', 'name', 'is', 'Sarah', 'and', 'nice', 'to', 'meet', 'you', 'are', 'from', 'I'],
      explanation: "'Hello' selamlaşmasıyla başlar, 'my name is Sarah' ile kendini tanıtır, 'and nice to meet you' ile memnuniyetini belirtir."
    },
    summaryTakeaways: [
      "Kendini tanıtırken 'My name is...' veya 'I am...' kalıbı kullanılır.",
      "Karşı tarafın adı 'What is your name?' sorusuyla öğrenilir.",
      "Tanışma memnuniyeti 'Nice to meet you' ve karşılığı 'Nice to meet you, too' ile ifade edilir."
    ]
  }),

  // 9. ALPHABET & SPELLING (A1-02)
  alphabet_spelling: (level, title) => ({
    skillType: 'pronunciation',
    concreteCompetency: "İngilizce alfabedeki harflerin sesletimini hatasız yapabilmek ve ad/soyad, e-posta veya adres gibi bilgileri harf harf kodlayabilmek (spelling).",
    whyItMatters: "İngilizcede kelimelerin okunuşu yazılışından çok farklıdır. Otelde check-in yaparken, bilet alırken veya müşteri hizmetleriyle görüşürken adınızı ve e-postanızı harf harf kodlamak (spelling) hayat kurtarıcı bir refleksdir.",
    linguisticLogic: "Türkçede harfler neredeyse her zaman tek bir sesle okunur; İngilizcede ise harflerin 'alfabedeki adı' ile 'kelime içindeki okunuşu' farklıdır. Harf kodlarken harfin alfabedeki adı (/eɪ/, /biː/, /siː/ vb.) telaffuz edilir.",
    stepBreakdown: [
      {
        title: "1. Aşama: Kritik Sesli Harfler (A, E, I Karışıklığı)",
        content: "Türkçe konuşanların en çok karıştırdığı üç harf A, E ve I'dır. Bu sesler zihne sağlam kodlanmalıdır:",
        keyPhrase: "A -> /eɪ/ (ey)  |  E -> /iː/ (ii)  |  I -> /aɪ/ (ay)",
        formula: "A = /eɪ/  |  E = /iː/  |  I = /aɪ/  |  O = /oʊ/  |  U = /juː/",
        subPoints: [
          "A harfi 'ey' diye okunur (Apple kelimesi A ile başlar ama harf adı 'ey'dir).",
          "E harfi Türkçedeki 'i' gibi (/iː/) okunur: Email, England.",
          "I harfi Türkçedeki 'ay' gibi (/aɪ/) okunur: Ice, Internet."
        ],
        rationale: "Bu üç harfin sesletimini oturtmak, tüm harf kodlama hatalarının %80'ini çözer."
      },
      {
        title: "2. Aşama: Kodlama İstemek ve Yanıt Vermek",
        content: "Birinden adını kodlamasını istemek veya kendi adınızı kodlamak için standart kalıplar kullanılır.",
        formula: "How do you spell [Kelime/İsim]?  |  Could you spell that, please?",
        keyPhrase: "It is spelled: E-M-R-E  |  How do you spell your surname?",
        subPoints: [
          "Çift harf varsa 'double' denebilir: 'book' -> b-double o-k.",
          "Büyük harf için 'capital', küçük harf için 'lowercase' denir."
        ]
      },
      {
        title: "3. Aşama: Benzer Sessiz Harfler (G vs J, B vs P)",
        content: "G (/dʒiː/) ve J (/dʒeɪ/) ile C (/siː/) ve S (/es/) çiftlerine dikkat edin.",
        keyPhrase: "G -> /dʒiː/ (cii)  |  J -> /dʒeɪ/ (cey)  |  C -> /siː/  |  S -> /es/",
        subPoints: [
          "G as in 'Google', J as in 'Japan'.",
          "B (/biː/) dudaklar tam kapanır; P (/piː/) patlamalı nefes bırakılır."
        ]
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Harf Kodlama Altın Formülü",
        formula: "How do you spell your name? -> It is [H-A-R-F-L-E-R]",
        explanation: "Kodlama yaparken harfler arasında kısa net duraklamalar verilir.",
        exampleSnippet: "How do you spell your surname? - It is S-M-I-T-H.",
        tipNote: "Eğer karşı taraf anlamazsa bilinen bir kelimeyle örnek verin: 'B as in Boston'."
      },
      {
        ruleTitle: "Sesli Harf Kodlama Şifresi",
        explanation: "A = 'Ey', E = 'İi', I = 'Ay'. Bu üçlüyü parmaklarınızla sayarak ritimle tekrar edin.",
        cautionNote: "Türkçe 'E' sesi İngilizce alfabede yoktur; 'E' harfini görünce 'i' diyeceksiniz!"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "'E' harfini Türkçe gibi 'e' diye sesletmek.",
        correctExample: "'E' harfini /iː/ (ii) olarak telaffuz etmek.",
        rootCause: "Ana dilin harf sesletimini hedef dile yansıtmak.",
        memoryTip: "Email kelimesini hatırla: 'E' harfi 'i' diye başlar!"
      },
      {
        wrongExample: "'I' harfini Türkçe 'ı' gibi sesletmek.",
        correctExample: "'I' harfini /aɪ/ (ay) olarak sesletmek.",
        rootCause: "Türkçedeki noktalı/noktasız harf alışkanlığı.",
        memoryTip: "iPhone kelimesini hatırla: 'I' harfi 'ay' diye okunur!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Otel Resepsiyonunda Rezervasyon Teyidi",
      description: "Yurt dışında otele giriş yaparken resepsiyon görevlisinin soyadınızı sisteme kaydetmesi.",
      contextType: 'daily',
      dialogue: [
        {
          speaker: "Receptionist",
          textEn: "Welcome to the Grand Hotel! Could you spell your last name for me, please?",
          textTr: "Grand Hotel'e hoş geldiniz! Lütfen soyadınızı harf harf kodlar mısınız?"
        },
        {
          speaker: "Guest",
          textEn: "Sure, it is Y-I-L-M-A-Z.",
          textTr: "Tabii ki, Y-I-L-M-A-Z şeklinde."
        },
        {
          speaker: "Receptionist",
          textEn: "Thank you, Mr. Yilmaz. I found your booking right here.",
          textTr: "Teşekkürler Sayın Yılmaz. Rezervasyonunuzu hemen buldum."
        }
      ]
    },
    memoryHook: "Harf Şifresi: A='Ey', E='İi', I='Ay' -> Bu üç harfi ezberle, kodlamada asla hata yapma!",
    examples: [
      {
        en: "Could you please spell your full name for the flight reservation?",
        tr: "Uçuş rezervasyonu için lütfen adınızı ve soyadınızı harf harf kodlar mısınız?",
        highlightedWords: ['Could you please spell', 'full name'],
        grammarCategory: 'Nezaketle Kodlama İsteme',
        contextNote: "Havalimanı, otel ve resmi kurumlarda standart soru kalıbı.",
        breakdownNote: "Modal (Could) + Özne + please + yalın fiil (spell) + nesne."
      },
      {
        en: "How do you spell that word? It is spelled with a double 'o'.",
        tr: "O kelime nasıl yazılır? Çift 'o' ile yazılır.",
        highlightedWords: ['How do you spell', 'double'],
        grammarCategory: 'Yazım Sorma & Çift Harf',
        contextNote: "Bilinmeyen bir kelimenin yazılışını sorma ve yanıtlama.",
        breakdownNote: "WH- Soru zarfı + do + özne + spell + nesne."
      },
      {
        en: "My email address begins with capital 'J' and ends with dot com.",
        tr: "E-posta adresim büyük 'J' ile başlar ve nokta com ile biter.",
        highlightedWords: ['capital', 'begins with'],
        grammarCategory: 'Harf Niteleme (Büyük/Küçük)',
        contextNote: "E-posta ve şifre kodlamada büyük harf belirtme.",
        breakdownNote: "Özne + fiil + edat + niteleme."
      }
    ],
    vocabulary: [
      {
        word: 'Spell',
        phonetic: '/spel/',
        partOfSpeech: 'verb',
        meaningTr: 'Harf harf kodlamak, hecelemek',
        exampleSentence: 'Could you spell your surname, please?'
      },
      {
        word: 'Alphabet',
        phonetic: '/ˈæl.fə.bet/',
        partOfSpeech: 'noun',
        meaningTr: 'Alfabe',
        exampleSentence: 'The English alphabet has twenty-six letters.'
      },
      {
        word: 'Vowel',
        phonetic: '/vaʊəl/',
        partOfSpeech: 'noun',
        meaningTr: 'Sesli harf (ünlü)',
        exampleSentence: 'A, E, I, O, and U are vowels in English.'
      },
      {
        word: 'Consonant',
        phonetic: '/ˈkɒn.sə.nənt/',
        partOfSpeech: 'noun',
        meaningTr: 'Sessiz harf (ünsüz)',
        exampleSentence: 'Most letters in the alphabet are consonants.'
      }
    ],
    quickCheck: {
      question: "Bir görevli size 'How do you spell your surname?' dediğinde ne yapmanızı istemektedir?",
      options: [
        "Soyadınızı harf harf kodlayarak söylemenizi",
        "Nereli olduğunuzu ve ülkenizi söylemenizi",
        "Kaç yaşında olduğunuzu rakamla belirtmenizi",
        "Hangi mesleği yaptığınızı açıklamanızı"
      ],
      correctIndex: 0,
      explanation: "'How do you spell...?' sorusu harf harf kodlama (spelling) istemek için kullanılır; soyadınızın harflerini tek tek söylemeniz beklenir."
    },
    exercise: {
      prompt: "Aşağıdaki cümlede kodlama istemek için boşluğa en uygun fiili seçin:",
      sentence: "Excuse me, could you please ___ your last name for the hotel system?",
      options: ['spell', 'speak', 'talk', 'listen'],
      correctAnswer: 'spell',
      hint: "Adı harf harf söylemek anlamındaki fiil 'spell'dir.",
      explanation: "'Could you please spell your last name' ifadesi doğru kalıptır; harf harf kodlamayı ifade eder."
    },
    sentenceBuilder: {
      promptTr: "Lütfen adınızı benim için harf harf kodlar mısınız?",
      targetEn: "Could you please spell your name for me",
      availableWords: ['Could', 'you', 'please', 'spell', 'your', 'name', 'for', 'me', 'can', 'is', 'what'],
      explanation: "Nezaket kipi 'Could you please', ardından ana fiil 'spell', nesne 'your name' ve edat öbeği 'for me' sıralanır."
    },
    summaryTakeaways: [
      "İngilizce harf kodlarken harflerin alfabedeki isimleri telaffuz edilir.",
      "En kritik sesli harfler: A = /eɪ/, E = /iː/, I = /aɪ/.",
      "'Could you spell that, please?' ve 'How do you spell your name?' temel soru kalıplarıdır."
    ]
  }),

  // 10. NUMBERS, AGE & PHONE (A1-03)
  numbers_age_phone: (level, title) => ({
    skillType: 'vocabulary',
    concreteCompetency: "1-100 arası sayıları, yaş bildirmeyi ('I am 25 years old') ve telefon numarasını tek tek rakamlarla telaffuz ederek paylaşabilmek.",
    whyItMatters: "Alışverişte fiyat sormak, yaşını belirtmek ve telefon numarası alıp vermek günlük hayatta her gün yapılan temel iletişim eylemleridir.",
    linguisticLogic: "Türkçede yaş için '25 yaşındayım' denir; İngilizcede ise yaş bir sahiplik değil durumdur ve 'To Be' fiili ile ifade edilir ('I am 25'). Telefon numaraları ise ikişer ikişer değil, tek tek rakamlar halinde okunur (0 için 'zero' veya 'oh' denir).",
    stepBreakdown: [
      {
        title: "1. Aşama: 1-100 Sayı Mantığı ve -teen vs -ty Vurgusu",
        content: "13-19 arası sayılar '-teen' ekiyle biter ve vurgu sonda olur. 20-90 arası onlar basamakları '-ty' ile biter ve vurgu başta olur.",
        keyPhrase: "thirteen /θɜːˈtiːn/ vs thirty /ˈθɜː.ti/  |  fifteen vs fifty",
        formula: "[Onlar Basamağı] + '-' + [Birler Basamağı] (Örn: twenty-five, forty-eight)",
        subPoints: [
          "14 (fourteen) - 40 (forty: 'u' harfi düşer!)",
          "15 (fifteen) - 50 (fifty)"
        ]
      },
      {
        title: "2. Aşama: Yaş Sorma ve Söyleme (To Be Kuralı)",
        content: "İngilizcede yaş belirtirken 'have' KULLANILMAZ; daima 'To Be' fiili kullanılır.",
        formula: "I am [Sayı] years old.  |  She is [Sayı].",
        keyPhrase: "How old are you? - I am twenty-five years old. ('I have 25' KESİNLİKLE YANLIŞTIR)",
        warningNote: "'years old' kalıbı ya tam kullanılır ('I am 20 years old') ya da hiç kullanılmaz ('I am 20'). 'I am 20 years' denmez!"
      },
      {
        title: "3. Aşama: Telefon Numarası Paylaşma",
        content: "Telefon numaraları rakam rakam tek tek okunur. Çift rakamlarda 'double' kullanılabilir.",
        formula: "My phone number is [rakam rakam]",
        keyPhrase: "0 = 'zero' veya 'oh'  |  555 = five-five-five veya triple five"
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Yaş Bildiriminde Altın Kural",
        formula: "Özne + am/is/are + [Sayı] (years old)",
        explanation: "Türkçedeki 'yaşındayım' eki İngilizcede 'am / is / are' köprüsüyle karşılanır.",
        exampleSnippet: "She is thirty years old. / They are eighteen.",
        tipNote: "Asla 'I have 20 years old' demeyin; 'have' kullanmak en yaygın L1 hatasıdır."
      },
      {
        ruleTitle: "Telefon Numarası Okunuşu",
        explanation: "Numaralar Türkçedeki gibi yüzlük veya binlik gruplanmaz; her rakam teker teker seslendirilir.",
        exampleSnippet: "0532 123 45 67 -> zero five three two, one two three, four five, six seven."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I have 28 years old.",
        correctExample: "I am 28 years old. (veya I am 28.)",
        rootCause: "Bazı dillerdeki 'avoir / tener' sahiplik yapısını İngilizceye aktarmak.",
        memoryTip: "Yaş bir çanta değildir, sahip olunmaz! Bir durumdur: 'I AM 28'!"
      },
      {
        wrongExample: "I am 28 years.",
        correctExample: "I am 28 years old. (veya I am 28.)",
        rootCause: "'old' kelimesini eksik bırakmak.",
        memoryTip: "Ya 'years old' tam söyle, ya da sadece sayıyı söyle ('I am 28')!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Spor Salonuna Kayıt Formu Doldurma",
      description: "Yeni bir spor merkezine kaydolurken yaş ve irtibat telefonu bilgisi verme.",
      contextType: 'daily',
      dialogue: [
        {
          speaker: "Agent",
          textEn: "How old are you, and what is your contact phone number?",
          textTr: "Kaç yaşındasınız ve irtibat telefon numaranız nedir?"
        },
        {
          speaker: "Member",
          textEn: "I am twenty-five years old, and my number is zero five three two.",
          textTr: "Yirmi beş yaşındayım ve numaram sıfır beş üç iki."
        }
      ]
    },
    memoryHook: "Yaş = 'AM / IS / ARE'  |  Numara = Tek Tek Rakamlar!",
    examples: [
      {
        en: "I am twenty-five years old and my office is on the eighth floor.",
        tr: "Yirmi beş yaşındayım ve ofisim sekizinci kattadır.",
        highlightedWords: ['twenty-five years old', 'eighth floor'],
        grammarCategory: 'Yaş ve Sıra Sayısı',
        contextNote: "Kendinden bahsederken yaş ve konum bildirimi.",
        breakdownNote: "Özne + To Be + Sayı + years old."
      },
      {
        en: "What is your mobile phone number? It is zero five four one.",
        tr: "Cep telefonu numaranız nedir? Sıfır beş dört bir...",
        highlightedWords: ['mobile phone number', 'zero five'],
        grammarCategory: 'İletişim Bilgisi',
        contextNote: "Telefon numarası isteme ve yanıtlama.",
        breakdownNote: "WH- Soru + İyelik + To Be + Rakam dizisi."
      },
      {
        en: "There are forty-eight students in our English conversation class.",
        tr: "İngilizce konuşma sınıfımızda kırk sekiz öğrenci var.",
        highlightedWords: ['forty-eight', 'There are'],
        grammarCategory: 'Miktar ve Sayı',
        contextNote: "Sınıf mevcudu veya miktar belirtme.",
        breakdownNote: "There are + Sayı + Çoğul İsim."
      }
    ],
    vocabulary: [
      {
        word: 'Twenty',
        phonetic: '/ˈtwen.ti/',
        partOfSpeech: 'noun',
        meaningTr: 'Yirmi',
        exampleSentence: 'She has twenty books.'
      },
      {
        word: 'Thirty',
        phonetic: '/ˈθɜː.ti/',
        partOfSpeech: 'noun',
        meaningTr: 'Otuz',
        exampleSentence: 'My sister is thirty years old.'
      },
      {
        word: 'Fifty',
        phonetic: '/ˈfɪf.ti/',
        partOfSpeech: 'noun',
        meaningTr: 'Elli',
        exampleSentence: 'The speed limit is fifty.'
      },
      {
        word: 'Number',
        phonetic: '/ˈnʌm.bər/',
        partOfSpeech: 'noun',
        meaningTr: 'Numara, sayı',
        exampleSentence: 'What is your room number?'
      }
    ],
    quickCheck: {
      question: "İngilizcede yaş belirtirken aşağıdaki cümlelerden hangisi dilbilgisel olarak TAMAMEN DOĞRUDUR?",
      options: [
        "I am 25 years old.",
        "I have 25 years old.",
        "I am have 25 years.",
        "My age has 25."
      ],
      correctIndex: 0,
      explanation: "İngilizcede yaş 'To Be' (am/is/are) ile belirtilir: 'I am 25 years old'. 'have' kullanımı kesinlikle yanlıştır."
    },
    exercise: {
      prompt: "Aşağıdaki yaş cümlesinde boşluğa en uygun yardımcı fiili seçin:",
      sentence: "My brother ___ twenty-eight years old.",
      options: ['is', 'has', 'have', 'are'],
      correctAnswer: 'is',
      hint: "'My brother' tekil üçüncü şahıstır (He) ve yaş için To Be fiili kullanılır.",
      explanation: "Üçüncü tekil şahıslarda yaş için 'is' kullanılır: 'My brother is 28 years old'."
    },
    sentenceBuilder: {
      promptTr: "Ben yirmi beş yaşındayım ve Londra'da yaşıyorum.",
      targetEn: "I am twenty five years old and live in London",
      availableWords: ['I', 'am', 'twenty', 'five', 'years', 'old', 'and', 'live', 'in', 'London', 'have', 'is', 'at'],
      explanation: "Özne 'I' + 'am twenty five years old' + bağlaç 'and' + fiil 'live in London'."
    },
    summaryTakeaways: [
      "Yaş daima 'To Be' (am, is, are) ile söylenir, asla 'have' denmez.",
      "13-19 arası '-teen' ile biter; onlar basamakları '-ty' ile biter.",
      "Telefon numaraları tek tek rakamlar halinde okunur."
    ]
  })
};

// Intelligent Contextual Blueprint Synthesizer
// Dynamically creates specialized, non-generic pedagogical blueprints for any of the 488 lessons
export function synthesizeContextualBlueprint(
  level: CEFRLevel,
  title: string,
  moduleName: string,
  learningObjective: string
): TopicBlueprint {
  const cleanTitle = title.replace(/\s+[—–]\s+.*$/, '').trim();
  const lower = `${title} ${moduleName} ${learningObjective}`.toLowerCase();

  // 1. Precise Domain & Skill Type Detection
  let skillType: LessonSkillType = 'grammar';
  let domain = 'general_grammar';

  if (
    lower.includes('telaffuz') ||
    lower.includes('fonetik') ||
    lower.includes('sesbilim') ||
    lower.includes('vurgu') ||
    lower.includes('aksansız') ||
    lower.includes('minimal pair') ||
    lower.includes('schwa') ||
    lower.includes('spelling') ||
    lower.includes('alfabe')
  ) {
    skillType = 'pronunciation';
    domain = 'pronunciation';
  } else if (
    lower.includes('kelime') ||
    lower.includes('vocabulary') ||
    lower.includes('eşdizim') ||
    lower.includes('collocation') ||
    lower.includes('deyim') ||
    lower.includes('idiom') ||
    lower.includes('phrasal verb') ||
    lower.includes('önek') ||
    lower.includes('sonek') ||
    lower.includes('false friends')
  ) {
    skillType = 'vocabulary';
    domain = 'vocabulary';
  } else if (
    lower.includes('dinleme') ||
    lower.includes('listening') ||
    lower.includes('podcast') ||
    lower.includes('radyo') ||
    lower.includes('duyduğunu anlama') ||
    lower.includes('işitsel')
  ) {
    skillType = 'listening';
    domain = 'listening';
  } else if (
    lower.includes('konuşma') ||
    lower.includes('speaking') ||
    lower.includes('diyalog') ||
    lower.includes('sohbet') ||
    lower.includes('mülakat') ||
    lower.includes('hitabet') ||
    lower.includes('müzakere') ||
    lower.includes('tartışma') ||
    lower.includes('sunum')
  ) {
    skillType = 'speaking';
    domain = 'speaking';
  } else if (
    lower.includes('okuma') ||
    lower.includes('reading') ||
    lower.includes('metin analizi') ||
    lower.includes('makale') ||
    lower.includes('paragraf') ||
    lower.includes('çıkarım yapma')
  ) {
    skillType = 'reading';
    domain = 'reading';
  } else if (
    lower.includes('yazma') ||
    lower.includes('writing') ||
    lower.includes('e-posta') ||
    lower.includes('rapor') ||
    lower.includes('kompozisyon') ||
    lower.includes('essay') ||
    lower.includes('mektup')
  ) {
    skillType = 'writing';
    domain = 'writing';
  } else if (
    lower.includes('passive') ||
    lower.includes('edilgen') ||
    lower.includes('ettirgen') ||
    lower.includes('causative')
  ) {
    domain = 'passive_causative';
  } else if (
    lower.includes('modal') ||
    lower.includes('kipleme') ||
    lower.includes('must') ||
    lower.includes('should') ||
    lower.includes('have to') ||
    lower.includes('might') ||
    lower.includes('could have')
  ) {
    domain = 'modals';
  } else if (
    lower.includes('relative clause') ||
    lower.includes('sıfat cümle') ||
    lower.includes('who') ||
    lower.includes('which') ||
    lower.includes('whose')
  ) {
    domain = 'relative_clauses';
  } else if (
    lower.includes('reported speech') ||
    lower.includes('dolaylı anlatım') ||
    lower.includes('aktarma') ||
    lower.includes('indirect question')
  ) {
    domain = 'reported_speech';
  } else if (
    lower.includes('preposition') ||
    lower.includes('edat') ||
    lower.includes('in on at') ||
    lower.includes('zaman ve yer')
  ) {
    domain = 'prepositions';
  } else if (
    lower.includes('gerund') ||
    lower.includes('infinitive') ||
    lower.includes('mastar') ||
    lower.includes('fiilimsi')
  ) {
    domain = 'gerund_infinitive';
  } else if (
    lower.includes('gelecek zaman') ||
    lower.includes('future') ||
    lower.includes('will') ||
    lower.includes('going to')
  ) {
    domain = 'future_forms';
  } else if (
    lower.includes('geçmiş') ||
    lower.includes('past continuous') ||
    lower.includes('past perfect') ||
    lower.includes('when while')
  ) {
    domain = 'past_narratives';
  } else if (
    lower.includes('present perfect') ||
    lower.includes('since') ||
    lower.includes('for') ||
    lower.includes('deneyim')
  ) {
    domain = 'perfect_aspect';
  }

  // 2. Concrete Competency Tailored to Subject & Level
  let concreteCompetency = '';
  let whyItMatters = '';
  let linguisticLogic = '';
  let memoryHook = '';

  if (domain === 'pronunciation') {
    concreteCompetency = `${level} düzeyinde '${cleanTitle}' konusundaki sesleri, vurgu kalıplarını ve ulama noktalarını anadili akıcılığına en yakın biçimde net olarak seslendirebilmek.`;
    whyItMatters = `İngilizcede kelimelerin yazılışı ile okunuşu arasındaki uçurum, Türk öğrencileri için en büyük tökezleme noktasıdır. '${cleanTitle}' çalışmasıyla yanlış anlama ve aksan bariyerini kökten aşacaksınız.`;
    linguisticLogic = `Türkçe hece tabanlı ve yazıldığı gibi okunan fonetik bir dildir; İngilizce ise vurgu tabanlıdır (stress-timed). Anlam, hecelerin eşit okunmasıyla değil, anahtar kelimelerin vurgulanıp bağlayıcı seslerin kaynaştırılmasıyla (connected speech) aktarılır.`;
    memoryHook = `Telaffuz Kuralı: '${cleanTitle}' -> Dudak ve dil konumunu ayarla, heceleri eşit değil, vurgulu sesleri belirgin söyle!`;
  } else if (domain === 'vocabulary') {
    concreteCompetency = `${level} seviyesinde '${cleanTitle}' alanına ait kritik sözcükleri, doğal eşdizimleri (collocations) ve kullanım bağlamlarını refleks olarak cümleye dökebilmek.`;
    whyItMatters = `Kelimeleri tek tek ezberlemek konuşurken duraksamaya yol açar. Bir anadili konuşucusu gibi akıcı konuşmanın sırrı, kelimeleri hazır kalıplar ve doğal eşdizimler halinde zihne kodlamaktır.`;
    linguisticLogic = `İngilizce kelimeler tek başlarına değil, belirli fiiller ve edatlarla sıkı ortaklıklar kurarak yaşar. Örneğin bir hata 'yapılmaz' (do mistake değil, make a mistake); bir karar 'alınmaz' (take decision değil, make a decision).`;
    memoryHook = `Kelime Kuralı: '${cleanTitle}' -> Kelimeyi tek başına değil, yanındaki doğal dostuyla (collocation) birlikte hatırla!`;
  } else if (domain === 'speaking') {
    concreteCompetency = `Gerçek bir iletişim ortamında '${cleanTitle}' konusuna ait sözlü stratejileri, nezaket ve ikna kalıplarını duraksamadan spontane biçimde uygulayabilmek.`;
    whyItMatters = `Dil bilmek gramer kurallarını testte işaretlemekten ibaret değildir. Hedef, ani bir soruyla veya sosyal bir durumla karşılaştığınızda saniyeler içinde doğru register (resmiyet) ile yanıt verebilmektir.`;
    linguisticLogic = `İngilizcede konuşma akıcılığı, cümle aralarında 'Well...', 'To be honest...', 'As far as I know...' gibi pragmatik söylem belirteçleri kullanarak düşünme süresi kazanmak ve dinleyiciyi yönlendirmek üzerine kuruludur.`;
    memoryHook = `Konuşma Kuralı: '${cleanTitle}' -> Düşünürken sessiz kalma; doğru söylem belirteciyle cümleyi doğal akışına bırak!`;
  } else if (domain === 'listening') {
    concreteCompetency = `Farklı aksan ve hızlardaki İngilizce kayıtlarda '${cleanTitle}' konusundaki anahtar bilgileri, vurgu değişimlerini ve örtük anlamları yakalayabilmek.`;
    whyItMatters = `Günlük hayatta anadili konuşucuları her kelimeyi tane tane telaffuz etmez. Zayıf biçimleri (weak forms) ve kaynaşmaları tanımadığınızda en basit cümle bile anlaşılmaz hale gelebilir.`;
    linguisticLogic = `İngilizcede edatlar, zamirler ve yardımcı fiiller genellikle zayıflatılarak schwa (/ə/) sesine dönüşür; asıl bilgi taşıyan isim ve ana fiiller ise yüksek tonla vurgulanır. Kulağınızı bu vurgu tezatına alıştırmalısınız.`;
    memoryHook = `Dinleme Kuralı: '${cleanTitle}' -> Her kelimeyi değil, vurgulu taşıyıcı kelimeleri yakala; gerisini bağlam tamamlar!`;
  } else if (domain === 'writing') {
    concreteCompetency = `${level} seviyesinde '${cleanTitle}' konusunun gerektirdiği biçimsel organizasyonu, geçiş bağlaçlarını ve profesyonel üslup kurallarını metne aktarabilmek.`;
    whyItMatters = `İş ve akademi dünyasında yazılı İngilizce ilk izlenimdir. Düzensiz bir yapı veya yanlış üslup, mesajınızın ciddiyetini ve ikna gücünü zedeler.`;
    linguisticLogic = `İngilizce yazımda paragraf birliği (cohesion and coherence) mutlaktır. Her paragraf net bir ana fikir cümlesiyle (topic sentence) başlar ve bağlaçlarla destekleyici kanıtlara bağlanır.`;
    memoryHook = `Yazma Kuralı: '${cleanTitle}' -> Önce ana fikri net ortaya koy, bağlaçla gerekçelendir, sonucu mühürle!`;
  } else if (domain === 'reading') {
    concreteCompetency = `${level} düzeyindeki metinlerde '${cleanTitle}' yapısını çözümleyerek ana fikri, yazarın amacını ve metin içi mantıksal bağlantıları hızla çıkarabilmek.`;
    whyItMatters = `Okuduğunu anlamak yalnızca kelime çevirmek değil, metnin retorik mimarisini ve satır aralarındaki ima edilen anlamı süzebilmektir.`;
    linguisticLogic = `İngilizce metinlerde 'however', 'moreover', 'in contrast' gibi yön belirteçleri düşünce akışının nereye evrildiğini önceden haber verir.`;
    memoryHook = `Okuma Kuralı: '${cleanTitle}' -> Bağlaçları trafik işaretleri gibi takip et; yazarın varmak istediği hedefi gör!`;
  } else {
    // Grammar & Structural Domains
    concreteCompetency = `${level} standardında '${cleanTitle}' dilbilgisi kuralını, zaman ve anlam nüanslarını hatasız ve refleks olarak kullanabilmek.`;
    whyItMatters =
      level === 'A1' || level === 'A2'
        ? `Bu yapı, temel İngilizce cümlelerinin çekirdeğini oluşturur. '${cleanTitle}' mantığını kavradığınızda Türkçe düşünerek kelime kelime çeviri yapma alışkanlığından kurtulursunuz.`
        : level === 'B1' || level === 'B2'
        ? `'${cleanTitle}' yapısı, bağımsız ve profesyonel İngilizce iletişiminde kritik bir basamaktır. Cümlelerinizi zenginleştirir ve düşüncelerinizi tam bir berraklıkla aktarmanızı sağlar.`
        : `'${cleanTitle}' konusu, C seviyesinde ileri düzey sentaktik kontrol ve söylem ustalığı gerektirir. Anlatımınıza akademik ve edebi bir güç katar.`;
    linguisticLogic = `Türkçe eklemeli (agglutinative) ve özne-nesne-yüklem (SOV) düzeninde bir dildir. İngilizce ise bükümlü ve özne-yüklem-nesne (SVO) hiyerarşisine dayanır. '${cleanTitle}' konusunda yaşanan zorlukların kökünde bu dil ailesi farkı yatar.`;
    memoryHook = `Dil Mantığı: '${cleanTitle}' -> Cümle omurgasını (Özne + Yüklem) hemen kur, detayları ve edat tümleçlerini sona bırak!`;
  }

  // 3. Step Breakdown Sequences — Domain Tailored
  let stepBreakdown: TopicBlueprint['stepBreakdown'];
  let ruleCards: TopicBlueprint['ruleCards'];
  let commonMistakes: CommonMistakeItem[];
  let realWorldContext: RealWorldContext;
  let contrastiveAnalysis: ContrastiveAnalysis;
  let examples: TopicBlueprint['examples'];
  let vocabulary: TopicBlueprint['vocabulary'];
  let quickCheck: TopicBlueprint['quickCheck'];
  let exercise: TopicBlueprint['exercise'];
  let sentenceBuilder: TopicBlueprint['sentenceBuilder'];
  let summaryTakeaways: string[];

  if (domain === 'time_and_dates') {
    stepBreakdown = [
      {
        title: `1. Aşama: Zaman Birimlerinin ve Saatlerin Hiyerarşisi`,
        content: `İngilizcede saat söylerken 'It is...' ile başlanır; tam saatlerde 'o'clock', buçukta 'half past', çeyrekte 'quarter past / to' kalıpları esastır.`,
        formula: `What time is it? -> It is [Saat] o'clock / half past [Saat]`,
        keyPhrase: `It is half past eight. | It is a quarter to nine.`,
        subPoints: [
          `Kesin saat bildirimlerinde eylem saatinin önüne daima 'AT' edatı gelir (at 8:30).`,
          `Günün bölümlerinde 'in the morning/afternoon/evening', gecede ise 'at night' kullanılır.`
        ],
        rationale: `İngilizce saat ve zaman sistemi hiyerarşik edat kullanımına dayanır.`
      },
      {
        title: `2. Aşama: Gün, Ay, Yıl ve Mevsim Edat Matrisi`,
        content: `Spesifik günlerde 'ON' (on Friday), ay ve mevsimlerde 'IN' (in July, in winter) seçilmelidir.`,
        formula: `AT (Saat/Gece) -> ON (Gün/Tarih) -> IN (Ay/Mevsim/Yıl)`,
        keyPhrase: `on Monday | in September | at 5 o'clock`,
        warningNote: `Gün bildiren ifadelerin önüne asla 'in' getirmeyin (*in Monday YANLIŞTIR).`
      },
      {
        title: `3. Aşama: Gerçek Yaşam Planlaması ve Randevu Kalıpları`,
        content: `Uçuş saatleri, toplantılar ve sosyal buluşmalar için zaman sorma ve teyit kalıplarını refleks haline getirin.`,
        keyPhrase: `The flight departs at 7:15 am. | Let's meet on Friday afternoon.`,
        subPoints: [
          `'What time does the meeting start?' gibi geniş zamanlı soru kalıplarını kullanın.`,
          `Saat söylerken ara dakikalarda 'o'clock' kelimesini kullanmayın.`
        ]
      }
    ];
    ruleCards = [
      {
        ruleTitle: `Zaman Edatları Altın Kuralı (AT - ON - IN)`,
        formula: `AT (Dakik/Noktasal) | ON (Günler/Tarihler) | IN (Geniş Dönemler)`,
        explanation: `İngilizcede zaman daraldıkça edat keskinleşir: Saatlerde 'AT', gün ve tarihlerde 'ON', ay ve mevsimlerde 'IN' kullanılır.`,
        exampleSnippet: `We meet at 9:00 on Monday in September.`,
        tipNote: `Piramit mantığını unutmayın: Noktasal saat = AT, 24 saatlik gün = ON, geniş ay/yıl = IN!`
      },
      {
        ruleTitle: `'O'clock' ve 'Half past' Kullanım Sınırı`,
        formula: `7:00 -> seven o'clock  |  7:30 -> half past seven (o'clock denmez)`,
        explanation: `'o'clock' sadece dakika sıfır olduğunda (tam saatlerde) söylenir. Ara dakikalarda asla eklenmez.`,
        cautionNote: `7:30 için *half past seven o'clock demek İngilizcede kural hatasıdır.`
      }
    ];
    commonMistakes = [
      {
        wrongExample: `The train leaves in 5 o'clock on the morning.`,
        correctExample: `The train leaves at 5 o'clock in the morning.`,
        rootCause: `Saatlerin önüne 'at' yerine 'in', gün bölümlerinin önüne 'in' yerine 'on' getirme karmaşası.`,
        memoryTip: `Saatlerin önüne AT gelir: At 5 o'clock! Sabah vakti için IN THE MORNING!`
      },
      {
        wrongExample: `Our flight is on July.`,
        correctExample: `Our flight is in July.`,
        rootCause: `Ayların önüne 'in' yerine 'on' getirme yanılgısı.`,
        memoryTip: `Aylar geniştir, içine girilir: IN July, IN August!`
      }
    ];
    realWorldContext = {
      scenarioTitle: `Havalimanında Uçuş ve Aktarma Bilgisi`,
      description: `Uluslararası bir havalimanında yolcu ile danışma görevlisi arasındaki saat ve kalkış diyaloğu.`,
      contextType: 'travel',
      dialogue: [
        { speaker: 'Passenger', textEn: 'Excuse me, what time does the flight to London depart?', textTr: 'Afedersiniz, Londra uçuşu saat kaçta kalkıyor?' },
        { speaker: 'Agent', textEn: 'It departs promptly at a quarter past ten from gate four.', textTr: 'Tam olarak ona çeyrek geçe dördüncü kapıdan kalkıyor.' },
        { speaker: 'Passenger', textEn: 'Thank you very much. I will head to the departure gate right away.', textTr: 'Çok teşekkür ederim. Derhal biniş kapısına yöneliyorum.' }
      ]
    };
    contrastiveAnalysis = {
      conceptA: `Türkçe Zaman Ekleri (-de, -da)`,
      conceptB: `İngilizce Zaman Edatları (At, On, In)`,
      keyDifference: `Türkçede 'saat üç-te' ve 'Cuma günün-de' aynı ekle karşılanırken; İngilizcede saat için 'at', gün için 'on', ay için 'in' zorunludur.`,
      exampleA: `Saat sekizde / Pazartesi günü.`,
      exampleB: `At eight o'clock / On Monday.`
    };
    examples = [
      {
        en: `The international conference begins promptly at nine o'clock on Monday morning.`,
        tr: `Uluslararası konferans pazartesi sabahı tam olarak saat dokuzda başlıyor.`,
        highlightedWords: ['at nine o\'clock', 'on Monday morning'],
        grammarCategory: `Zaman Edatı Kombinasyonu`,
        contextNote: `Saat (at) ve gün (on) kullanımının birleşik örneği.`,
        breakdownNote: `Fiil (begins) + at nine o'clock (kesin saat) + on Monday morning (gün dilimi).`
      },
      {
        en: `Our flight departs at half past six in the evening.`,
        tr: `Uçağımız akşam altı buçukta hareket ediyor.`,
        highlightedWords: ['at half past six', 'in the evening'],
        grammarCategory: `Buçuk Saat ve Gün Bölümü`,
        contextNote: `Saat ve akşam vakti edatları.`,
        breakdownNote: `Özne + departs + at half past six + in the evening.`
      },
      {
        en: `The new semester officially starts in September.`,
        tr: `Yeni sömestir resmi olarak eylül ayında başlıyor.`,
        highlightedWords: ['starts in September'],
        grammarCategory: `Ay Bildirimi`,
        contextNote: `Aylarda 'in' edatı kullanımı.`,
        breakdownNote: `Özne + starts + in + Ay (September).`
      }
    ];
    vocabulary = [
      { word: 'Quarter', phonetic: '/ˈkwɔː.tər/', partOfSpeech: 'noun', meaningTr: 'Çeyrek (15 dakika)', exampleSentence: 'It is a quarter to ten.' },
      { word: 'Midnight', phonetic: '/ˈmɪd.naɪt/', partOfSpeech: 'noun', meaningTr: 'Gece yarısı (00:00)', exampleSentence: 'The bus arrives at midnight.' },
      { word: 'Schedule', phonetic: '/ˈʃedʒ.uːl/', partOfSpeech: 'noun', meaningTr: 'Program, tarife', exampleSentence: 'Check the flight schedule carefully.' },
      { word: 'Promptly', phonetic: '/ˈprɒmpt.li/', partOfSpeech: 'adverb', meaningTr: 'Tam vaktinde, dakikası dakikasına', exampleSentence: 'The meeting starts promptly at nine.' }
    ];
    quickCheck = {
      question: `İngilizcede kesin bir saat bildiriminden (Örn: '5 o'clock') önce hangi zaman edatı kullanılmalıdır?`,
      options: [
        `At (Örn: at 5 o'clock)`,
        `On (Örn: on 5 o'clock)`,
        `In (Örn: in 5 o'clock)`,
        `With (Örn: with 5 o'clock)`
      ],
      correctIndex: 0,
      explanation: `Doğru yanıt: Kesin saat bildirimlerinde daima 'at' edatı kullanılır: at 5 o'clock, at half past two.`
    };
    exercise = {
      prompt: `Cümledeki boşluğa saat bildirimine uygun doğru zaman edatını yerleştirin:`,
      sentence: `The morning flight departs promptly ___ half past eight.`,
      options: ['at', 'on', 'in', 'to'],
      correctAnswer: 'at',
      hint: `Saat ifadelerinden önce gelen standart edatı düşünün.`,
      explanation: `Kesin saat bildirimlerinde daima 'at' kullanılır: 'at half past eight'.`
    };
    sentenceBuilder = {
      promptTr: `Önemli toplantımız pazartesi sabahı tam saat onda başlayacak.`,
      targetEn: `Our important meeting starts promptly at ten o'clock on Monday morning`,
      availableWords: ['Our', 'important', 'meeting', 'starts', 'promptly', 'at', 'ten', 'o\'clock', 'on', 'Monday', 'morning', 'in', 'to', 'is'],
      explanation: `Özne (Our important meeting) + fiil (starts promptly) + saat (at ten o'clock) + gün (on Monday morning).`
    };
    summaryTakeaways = [
      `Saat ve dakika ifadelerinde 'at', gün ve tarihlerde 'on', ay ve mevsimlerde 'in' edatları refleks haline getirildi.`,
      `'o'clock' ifadesinin yalnızca tam saatlerde kullanıldığı kavrandı.`,
      `Türkçe ek sistemi yerine İngilizce edat hiyerarşisi benimsendi.`
    ];
  } else if (domain === 'jobs_and_professions') {
    stepBreakdown = [
      {
        title: `1. Aşama: Meslek Sorma Kalıpları`,
        content: `Birinin mesleğini sormak için 'What do you do?' en doğal ve evrensel ifadedir. 'What is your job?' de kullanılabilir.`,
        formula: `What do you do?  /  What does he/she do?`,
        keyPhrase: `What do you do for a living?`,
        subPoints: [
          `'What are you doing?' anlık eylemi sorar, meslek sormaz.`,
          `Meslek sorarken geniş zaman yardımcı fiili (do/does) kullanılır.`
        ],
        rationale: `Meslek daimi bir durum olduğu için Present Simple yapısıyla sorulur.`
      },
      {
        title: `2. Aşama: 'A / An' ile Meslek Bildirimi`,
        content: `İngilizcede meslek isimleri tekil sayılabilir olduğu için önlerine mutlaka 'a' veya 'an' artikeli gelir.`,
        formula: `Özne + am/is/are + a/an + [Meslek İsmi]`,
        keyPhrase: `I am a doctor. | She is an engineer.`,
        subPoints: [
          `Sessizle başlayan meslekler: a teacher, a lawyer, a pilot.`,
          `Sesliyle başlayan meslekler: an architect, an accountant, an engineer.`
        ],
        warningNote: `Türkçe düşünerek 'I am doctor' demeyin; 'a/an' artikeli zorunludur.`
      },
      {
        title: `3. Aşama: Çalışma Yeri ve Alanı Belirtme`,
        content: `Çalıştığınız sektörü ve kurumu 'work in' veya 'work at' edatlarıyla cümleye ekleyin.`,
        formula: `Subject + work/works at/in + [Kurum / Departman]`,
        keyPhrase: `He works at a hospital. | She works in finance.`,
        subPoints: [
          `Kurum/şirket ismi için 'at': works at Google, works at a private clinic.`,
          `Sektör ve genel alan için 'in': works in education, works in technology.`
        ]
      }
    ];
    ruleCards = [
      {
        ruleTitle: `Mesleklerde 'A / An' Zorunluluğu`,
        formula: `*I am teacher (YANLIŞ) -> I am a teacher (DOĞRU)`,
        explanation: `İngilizcede tekil sayılabilen meslek isimleri artikel olmadan var olamaz. Sessiz harften önce 'a', sesli harften önce 'an' kullanılır.`,
        exampleSnippet: `She is an architect. / He is a pilot.`,
        tipNote: `Meslek söylerken ağzınızdan önce 'a' veya 'an' sesi çıksın!`
      },
      {
        ruleTitle: `Meslek Sorma Standartı: 'What do you do?'`,
        formula: `What do you do? (Ne iş yaparsınız?) != What are you doing? (Şu an ne yapıyorsun?)`,
        explanation: `'What do you do?' kişinin mesleğini ve kariyerini sorar; 'What are you doing?' ise o anki eylemi sorar.`,
        cautionNote: `Tanışma anında 'What are you doing?' diye sormayın.`
      }
    ];
    commonMistakes = [
      {
        wrongExample: `I am doctor at Istanbul hospital.`,
        correctExample: `I am a doctor at an Istanbul hospital.`,
        rootCause: `Türkçede 'Ben doktorum' derken artikel olmamasından kaynaklanan aktarım hatası.`,
        memoryTip: `Mesleğin önüne daima 'a' veya 'an' koymayı unutma!`
      },
      {
        wrongExample: `What are you doing? - I am software developer.`,
        correctExample: `What do you do? - I am a software developer.`,
        rootCause: `Meslek sorusu ile anlık eylem sorusunu karıştırmak ve artikeli unutmak.`,
        memoryTip: `Meslek sorusu: What do you DO! Meslek cevabı: I am A developer!`
      }
    ];
    realWorldContext = {
      scenarioTitle: `İş Ağları ve Profesyonel Tanışma Etkinliği`,
      description: `Uluslararası bir iş networking etkinliğinde katılımcıların mesleklerini ve sorumluluklarını paylaşması.`,
      contextType: 'workplace',
      dialogue: [
        { speaker: 'Michael', textEn: 'Good evening, my name is Michael. What do you do, Sarah?', textTr: 'İyi akşamlar, benim adım Michael. Ne iş yapıyorsunuz Sarah?' },
        { speaker: 'Sarah', textEn: 'I am a software architect at an international tech company. What about you?', textTr: 'Uluslararası bir teknoloji şirketinde yazılım mimarıyım. Ya siz?' },
        { speaker: 'Michael', textEn: 'I am a corporate lawyer specializing in contract law.', textTr: 'Sözleşme hukuku alanında uzmanlaşmış bir şirket avukatıyım.' }
      ]
    };
    contrastiveAnalysis = {
      conceptA: `Türkçe Meslek Bildirimi`,
      conceptB: `İngilizce Meslek Bildirimi`,
      keyDifference: `Türkçede meslek bildirilirken 'bir' kelimesi kullanılmaz (Ben mühendisim). İngilizcede ise 'I am an engineer' şeklinde artikel kullanımı zorunludur.`,
      exampleA: `Ben mimarım.`,
      exampleB: `I am an architect.`
    };
    examples = [
      {
        en: `Emma is an experienced architect and she designs sustainable buildings.`,
        tr: `Emma deneyimli bir mimardır ve sürdürülebilir binalar tasarlar.`,
        highlightedWords: ['is an experienced architect', 'designs'],
        grammarCategory: `Meslek ve Niteleme`,
        contextNote: `'an' artikeli ve 3. tekil şahıs meslek anlatımı.`,
        breakdownNote: `Özne (Emma) + is an + meslek sıfat tamlaması + fiil (designs).`
      },
      {
        en: `What does your brother do for a living in Toronto?`,
        tr: `Erkek kardeşiniz Toronto'da geçimini sağlamak için ne iş yapıyor?`,
        highlightedWords: ['What does your brother do'],
        grammarCategory: `Meslek Sorusu`,
        contextNote: `3. tekil şahıs meslek sorusu.`,
        breakdownNote: `What + does + özne + do + edat öbeği.`
      },
      {
        en: `David works as a dedicated nurse at the regional medical clinic.`,
        tr: `David bölge tıp kliniğinde özverili bir hemşire olarak çalışıyor.`,
        highlightedWords: ['works as a dedicated nurse'],
        grammarCategory: `'Work as' Kalıbı`,
        contextNote: `Olarak çalışma kalıbı.`,
        breakdownNote: `Özne + works as a + meslek tamlaması + yer.`
      }
    ];
    vocabulary = [
      { word: 'Occupation', phonetic: '/ˌɒk.jəˈpeɪ.ʃən/', partOfSpeech: 'noun', meaningTr: 'Meslek, uğraş', exampleSentence: 'State your occupation on the visa form.' },
      { word: 'Architect', phonetic: '/ˈɑː.kɪ.tekt/', partOfSpeech: 'noun', meaningTr: 'Mimar', exampleSentence: 'She is an architect in Chicago.' },
      { word: 'Lawyer', phonetic: '/ˈlɔɪ.ər/', partOfSpeech: 'noun', meaningTr: 'Avukat, hukukçu', exampleSentence: 'He consults with a corporate lawyer.' },
      { word: 'Specialist', phonetic: '/ˈspeʃ.əl.ɪst/', partOfSpeech: 'noun', meaningTr: 'Uzman, ihtisas sahibi', exampleSentence: 'She is a marketing specialist.' }
    ];
    quickCheck = {
      question: `İngilizcede meslek söylerken 'I am engineer' demek neden dilbilgisel hatadır?`,
      options: [
        `Tekil sayılabilen meslek isimleri 'a' veya 'an' artikeli almak zorundadır`,
        `Meslekler geçmiş zamanda çekimlenmelidir`,
        `Özne daima çoğul olmak zorundadır`,
        `Meslek isimlerinin sonuna -ed eklenmelidir`
      ],
      correctIndex: 0,
      explanation: `Doğru yanıt: İngilizcede tekil meslek isimlerinin önüne sessizle başlıyorsa 'a', sesliyle başlıyorsa 'an' gelmesi zorunludur: 'I am an engineer'.`
    };
    exercise = {
      prompt: `Cümledeki boşluğa meslek bildirimine uygun artikeli yerleştirin:`,
      sentence: `Michael works at the university clinic because he is ___ dedicated surgeon.`,
      options: ['a', 'an', 'the', 'one'],
      correctAnswer: 'a',
      hint: `'dedicated' sözcüğü sessiz bir ünsüzle (/d/) başlar.`,
      explanation: `'dedicated' sessiz harfle başladığı için 'a dedicated surgeon' doğru kalıptır.`
    };
    sentenceBuilder = {
      promptTr: `Emma deneyimli bir mimardır ve modern binalar tasarlar.`,
      targetEn: `Emma is an experienced architect and designs modern buildings`,
      availableWords: ['Emma', 'is', 'an', 'experienced', 'architect', 'and', 'designs', 'modern', 'buildings', 'a', 'are', 'building'],
      explanation: `Özne (Emma) + to be ve meslek (is an experienced architect) + bağlaç (and) + eylem ve nesne (designs modern buildings).`
    };
    summaryTakeaways = [
      `Meslek isimlerinde 'a/an' artikeli kullanım zorunluluğu kavrandı.`,
      `Meslek sorma standardı olan 'What do you do?' ifadesi refleks haline getirildi.`,
      `Çalışma yeri ve sektörü bildiren 'work at / in' kalıpları öğrenildi.`
    ];
  } else {
    // General CEFR-Aligned Pedagogical Blueprint for other domains
    stepBreakdown = [
      {
        title: `1. Aşama: Kavramın Temel İlkesi ve Sentaktik Mimarisi`,
        content: `${cleanTitle} konusunda cümlenin kurucu ögelerinin doğru söz dizimsel sırada yerleşmesi esastır. Hedef dilbilgisel yapıyı seviyenize (${level}) uygun kesinlikle kurmalısınız.`,
        formula: `Özne + Yardımcı Unsur / Yüklem + Tamamlayıcı`,
        keyPhrase: `Hedef Yapı: ${cleanTitle}`,
        subPoints: [
          `Özne ve yüklem arasındaki sayı, zaman ve kişi uyumunu koruyun.`,
          `Cümleyi Türkçe söz dizimiyle kelime kelime çevirmek yerine İngilizce cümle iskeletine sadık kalın.`
        ],
        rationale: `İngilizce SVO (Özne-Yüklem-Nesne) düzenini mutlak tutar; bu sıralama bozulduğunda iletişim netliği kaybolur.`
      },
      {
        title: `2. Aşama: Cümle İçi Dönüşümler, Olumsuzluk ve Soru Halleri`,
        content: `Hedef yapıyı yalnızca olumlu cümlede değil; olumsuzluk, soru ve kısa yanıt bağlamlarında da refleks halinde kullanabilmelisiniz.`,
        formula: `Olumsuz: Yardımcı + not + Fiil  |  Soru: Yardımcı + Özne + Fiil?`,
        keyPhrase: `Soru ve olumsuz refleksleri`,
        subPoints: [
          `Soru formlarında yardımcı fiilin cümlenin başına (öznenin önüne) geçme kuralını uygulayın.`,
          `Olumsuzluk ekini doğru yardımcı unsura bağlayarak vurguyu yönetin.`
        ],
        warningNote: `Türkçedeki gibi yardımcı fiili atlayıp cümlenin sonuna olumsuzluk eklemeye çalışmayın.`
      },
      {
        title: `3. Aşama: Akıcılık, Telaffuz ve İletişimsel Pratik`,
        content: `Öğrenilen dil yapısını izole bir kural olarak değil, gerçek diyaloglarda ve mesleki senaryolarda kendiliğinden akan bir refleks olarak kullanın.`,
        keyPhrase: `Doğru Söz Dizimi + Doğal Vurgu = Akıcı İletişim`,
        subPoints: [
          `Örnek cümleleri anadili konuşucusu ses tonuyla sesli tekrar edin.`,
          `Kalıbı kendi günlük yaşam ve iş durumlarınıza uyarlayarak kişiselleştirin.`
        ]
      }
    ];
    ruleCards = [
      {
        ruleTitle: `${cleanTitle} — Dil Mantığı Kuralı`,
        formula: `İngilizce Söz Dizimi (SVO): Özne + Yüklem + Nesne / Tümleç`,
        explanation: `İngilizcede anlam cümlenin başında kurulur. Özne ve hemen ardındaki fiil cümlenin omurgasıdır; ayrıntılar ve edatlar sona eklenir.`,
        exampleSnippet: `Clear syntactic structure guarantees immediate mutual understanding.`,
        tipNote: `Kalıbı hazır bir bütün (chunk) olarak düşünerek dil kaslarınızı alıştırın.`
      },
      {
        ruleTitle: `Ana Dil Müdahalesi (L1 Transfer) Uyarısı`,
        formula: `Türkçe Söz Dizimi (SOV) != İngilizce Söz Dizimi (SVO)`,
        explanation: `Öğrencilerin yaptığı en yaygın hata, Türkçedeki kelime sırasını doğrudan İngilizceye kopyalamaktır. Fiili asla cümlenin sonuna saklamayın.`,
        cautionNote: `Yardımcı fiili ve ana eylemi daima öznenin hemen ardından getirin.`
      }
    ];
    commonMistakes = [
      {
        wrongExample: `Türkçe düşünce sırasıyla fiili cümlenin en sonuna bırakarak konuşmak.`,
        correctExample: `İngilizce doğal kelime sırasıyla özneyi hemen fiile bağlayarak konuşmak.`,
        rootCause: `Ana dilin (Türkçe) eklemeli ve yüklemi sona atan yapısını İngilizceye doğrudan yansıtma refleksi.`,
        memoryTip: `İngilizcede fiil cümlenin ortasındadır; özneyi söyler söylemez fiili getir!`
      },
      {
        wrongExample: `Yardımcı fiilleri veya tekil/çoğul şahıs uyumunu göz ardı etmek.`,
        correctExample: `Özne tekilse tekil, çoğulsa çoğul çekimini eksiksiz uygulamak.`,
        rootCause: `Detay eklerin anlama etkisini küçümseme eğilimi.`,
        memoryTip: `Özne ile yüklem bir elmanın iki yarısıdır; uyumu asla bozma!`
      }
    ];
    realWorldContext = {
      scenarioTitle: `${moduleName} — Uygulama Diyaloğu`,
      description: `${cleanTitle} konusunun gerçek yaşamda, iş yerinde veya sosyal bir etkileşimde nasıl uygulandığını gösteren durum.`,
      contextType: level === 'A1' || level === 'A2' ? 'daily' : level === 'B1' || level === 'B2' ? 'workplace' : 'academic',
      dialogue: [
        { speaker: 'Elena', textEn: 'Could you clarify how this principle applies in our upcoming project?', textTr: 'Bu ilkenin yaklaşan projemizde nasıl uygulandığını açıklayabilir misiniz?' },
        { speaker: 'Marcus', textEn: 'Certainly! Once we establish the core framework, the practical steps follow naturally.', textTr: 'Elbette! Temel çerçeveyi bir kez kurduğumuzda, pratik adımlar kendiliğinden gelir.' },
        { speaker: 'Elena', textEn: 'That makes complete sense. We will incorporate this into our standard workflow.', textTr: 'Bu son derece mantıklı. Bunu standart iş akışımıza dahil edeceğiz.' }
      ]
    };
    contrastiveAnalysis = {
      conceptA: `Türkçe Yapı Mantığı`,
      conceptB: `İngilizce Yapı Mantığı`,
      keyDifference: `Türkçede anlam genellikle kelime sonuna eklenen ek zincirinde kodlanırken; İngilizcede anlam söz dizimi ve yardımcı unsurlarla inşa edilir.`,
      exampleA: `Yargı ve zaman eki cümlenin en sonundaki yükleme eklenir.`,
      exampleB: `Özne ve hemen ardındaki yapısal öge cümlenin yönünü belirler.`
    };
    examples = [
      {
        en: `Clear structural accuracy allows speakers to communicate their thoughts with confidence.`,
        tr: `Net yapısal doğruluk, konuşmacıların düşüncelerini güvenle aktarmasını sağlar.`,
        highlightedWords: ['structural accuracy', 'communicate with confidence'],
        grammarCategory: `${level} Model Cümle`,
        contextNote: `${level} seviyesinde akıcı ve anlaşılır iletişim standardı.`,
        breakdownNote: `Özne öbeği + fiil (allows) + nesne + mastar yapısı.`
      },
      {
        en: `They discussed the practical implementation during their international team conference.`,
        tr: `Uluslararası ekip konferansı sırasında pratik uygulamayı tartıştılar.`,
        highlightedWords: ['discussed', 'practical implementation'],
        grammarCategory: `Geçmiş Eylem Cümlesi`,
        contextNote: `İş ve sosyal ortamlarda doğal cümle akışı.`,
        breakdownNote: `Özne + fiil (discussed) + nesne grubu + edat öbeği.`
      },
      {
        en: `How can team members apply these guidelines effectively in their daily workflow?`,
        tr: `Ekip üyeleri bu kuralları günlük iş akışlarında nasıl etkili bir şekilde uygulayabilir?`,
        highlightedWords: ['apply these guidelines effectively'],
        grammarCategory: `Soru ve Öneri Cümlesi`,
        contextNote: `Uygulama sorma ve değerlendirme kalıbı.`,
        breakdownNote: `Soru zarfı + modal (can) + özne + yalın fiil + nesne + durum zarfı.`
      }
    ];
    vocabulary = [
      { word: 'Comprehend', phonetic: '/ˌkɒm.prɪˈhend/', partOfSpeech: 'verb', meaningTr: 'Kavramak, derinlemesine anlamak', exampleSentence: 'Learners comprehend the underlying rule quickly.' },
      { word: 'Proficiency', phonetic: '/prəˈfɪʃ.ən.si/', partOfSpeech: 'noun', meaningTr: 'Yetkinlik, ustalık, ileri beceri', exampleSentence: 'Consistent practice develops language proficiency.' },
      { word: 'Articulate', phonetic: '/ɑːˈtɪk.jə.leɪt/', partOfSpeech: 'verb', meaningTr: 'Düşüncelerini açık ve akıcı ifade etmek', exampleSentence: 'She can articulate her ideas with clarity.' },
      { word: 'Essential', phonetic: '/ɪˈsen.ʃəl/', partOfSpeech: 'adjective', meaningTr: 'Temel, vazgeçilmez, gerekli', exampleSentence: 'Clear grammar is essential for mutual understanding.' }
    ];
    quickCheck = {
      question: `${level} seviyesinde '${cleanTitle}' konusunda hedeflenen ana iletişim refleksi nedir?`,
      options: [
        `Hedef yapıyı doğru söz dizimi ve doğal bağlamda tereddüt etmeden güvenle kullanabilmek`,
        `Kelimeleri Türkçe sözlük sırasıyla tek tek çevirip cümleyi kurmaya çalışmak`,
        `Yardımcı fiilleri ve söz dizimsel hiyerarşiyi tamamen göz ardı etmek`,
        `Yalnızca olumlu cümleler kurup soru ve olumsuz formları öğrenmemek`
      ],
      correctIndex: 0,
      explanation: `Doğru yanıt: Amaç, kuralın söz dizimsel mantığını ve anlamsal işlevini refleks halinde kullanabilmektir.`
    };
    exercise = {
      prompt: `Aşağıdaki cümleyi ${level} seviyesine en uygun seçenekle tamamlayın:`,
      sentence: `In modern international communication, fluent speakers express their thoughts ___.`,
      options: ['clearly and accurately', 'clarity and accurate', 'clear and accurately', 'clearing and accuracy'],
      correctAnswer: 'clearly and accurately',
      hint: `'express' eylem fiilini nitelemek için durum zarfları (adverbs) kullanılmalıdır.`,
      explanation: `Eylem fiilini niteleyen sözcükler zarf olmalıdır: 'clearly and accurately' (açık ve doğru bir biçimde).`
    };
    sentenceBuilder = {
      promptTr: `Düzenli pratik yapmak dil akıcılığı kazanmanın en güvenilir yoludur.`,
      targetEn: `Regular practice is the most reliable way to achieve fluency`,
      availableWords: ['Regular', 'practice', 'is', 'the', 'most', 'reliable', 'way', 'to', 'achieve', 'fluency', 'are', 'for', 'making'],
      explanation: `Özne 'Regular practice' (tekil durum) + To Be 'is' + üstünlük sıfatı 'the most reliable way' + mastar 'to achieve fluency'.`
    };
    summaryTakeaways = [
      `'${cleanTitle}' konusunun söz dizimsel mantığı ve iletişimsel hedefleri kavrandı.`,
      `Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.`,
      `Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi.`
    ];
  }

  return {
    skillType,
    concreteCompetency,
    whyItMatters,
    linguisticLogic,
    stepBreakdown,
    ruleCards,
    commonMistakes,
    realWorldContext,
    contrastiveAnalysis,
    memoryHook,
    examples,
    vocabulary,
    quickCheck,
    exercise,
    sentenceBuilder,
    summaryTakeaways
  };
}

// Master Pedagogical Blackboard Synthesizer
export function buildTeacherBlackboard(
  lessonMeta: { id: number; code: string; level: CEFRLevel; title: string; moduleName: string },
  bp: TopicBlueprint,
  cleanTitle: string
): TeacherBlackboardData {
  if (bp.blackboard) {
    return bp.blackboard;
  }

  // Priority 1: Check dedicated 100-lesson bespoke handcrafted blackboard registry
  const bespoke = getBespokeBlackboard(lessonMeta.id);
  if (bespoke) {
    return bespoke;
  }

  const lower = `${lessonMeta.title} ${lessonMeta.moduleName} ${bp.concreteCompetency}`.toLowerCase();
  const id = lessonMeta.id;

  // 1. TO BE (Was / Were - Geçmiş Zaman) e.g. Lesson 88
  if (lower.includes('was & were') || lower.includes('was / were') || (lower.includes('to be') && (lower.includes('geçmiş') || lower.includes('past')))) {
    return {
      title: "To Be Fiili Geçmiş Zaman (Was / Were) Çekim Tahtası",
      subtitle: "Özneye Göre Durum Bildirimi ve Olumsuzluk Kuralları",
      layoutType: 'grammar_table',
      headers: ["Özne Grubu", "Yapı (Was / Were)", "Örnek Cümle", "Türkçe Anlamı"],
      rows: [
        { col1: "I / He / She / It", col2: "was", highlightCol2: true, col3: "I was at home yesterday.", col4: "Dün evdeydim." },
        { col1: "You / We / They", col2: "were", highlightCol2: true, col3: "They were very tired last night.", col4: "Dün gece çok yorgundular." },
        { col1: "Olumsuz Cümle (-)", col2: "wasn't / weren't", highlightCol2: true, col3: "He wasn't in the office.", col4: "O ofiste değildi." },
        { col1: "Soru Cümlesi (?)", col2: "Was / Were + Özne", highlightCol2: true, col3: "Were you ready for the meeting?", col4: "Toplantı için hazır mıydın?" },
      ],
      chalkNote: {
        yellowHighlight: "Özne tekilse WAS (I, he, she, it); çoğul veya sen/siz ise WERE (you, we, they) kullanılır.",
        whiteExplanation: "Geçmişte durum, yaş, meslek ve konum bildirir. Ana eylem fiilleriyle (-ing olmadan) doğrudan yan yana gelmez.",
      },
      sideTip: "Kısa cevapta kısaltma yapılmaz: 'Yes, I was.' (Yes, I's YANLIŞTIR).",
    };
  }

  // 2. TO BE (Am / Is / Are - Şimdiki/Geniş Zaman) e.g. Lessons 11, 12, 13
  if (lower.includes('to be') || lower.includes('am / is / are') || lower.includes('am, is, are') || lower.includes('olmak fiili')) {
    return {
      title: "To Be (Am / Is / Are) Temel Çekim Tahtası",
      subtitle: "İsim, Sıfat ve Durum Bildiriminde Özne-Yüklem Köprüsü",
      layoutType: 'grammar_table',
      headers: ["Özne Grubu", "Kullanılan Yapı", "Örnek Cümle", "Türkçe Anlamı"],
      rows: [
        { col1: "I (Birinci tekil)", col2: "am (kısaca 'm)", highlightCol2: true, col3: "I am happy to meet you.", col4: "Tanıştığıma memnunum." },
        { col1: "You (Sen / Siz)", col2: "are (kısaca 're)", highlightCol2: true, col3: "You are ready for the lesson.", col4: "Ders için hazırsın." },
        { col1: "He / She / It (3. tekil)", col2: "is (kısaca 's)", highlightCol2: true, col3: "She is a talented architect.", col4: "O yetenekli bir mimardır." },
        { col1: "We / They (Çoğul)", col2: "are (kısaca 're)", highlightCol2: true, col3: "They are here in London.", col4: "Onlar burada, Londra'dalar." },
        { col1: "Olumsuz Biçim (-)", col2: "am not / isn't / aren't", highlightCol2: true, col3: "We aren't late today.", col4: "Bugün geç kalmadık." },
      ],
      chalkNote: {
        yellowHighlight: "I -> AM  |  He, She, It -> IS  |  You, We, They -> ARE",
        whiteExplanation: "Türkçede 'öğrenciyim' ekle söylenirken, İngilizcede 'am / is / are' köprüsü zorunludur.",
      },
      sideTip: "Eylem fiiliyle yalın halde yan yana gelmez: 'I am work' YANLIŞ, 'I work' DOĞRU!",
    };
  }

  // 3. HAVE / HAS (e.g. Lessons 37, 38)
  if (lower.includes('have got') || lower.includes('has got') || lower.includes('have / has') || lower.includes('sahiplik')) {
    return {
      title: "Have & Has ile Sahiplik Bildirimi Tahtası",
      subtitle: "Öznelerin Sahiplik Formları ve Soru / Olumsuz Dönüşümleri",
      layoutType: 'structure_table',
      headers: ["Özne Grubu", "Olumlu Yapı", "Örnek Cümle", "Türkçe Anlamı"],
      rows: [
        { col1: "I / You / We / They", col2: "have (have got)", highlightCol2: true, col3: "I have a modern laptop.", col4: "Modern bir dizüstü bilgisayarım var." },
        { col1: "He / She / It", col2: "has (has got)", highlightCol2: true, col3: "She has an important meeting.", col4: "Önemli bir toplantısı var." },
        { col1: "Olumsuz Cümle (-)", col2: "don't have / doesn't have", highlightCol2: true, col3: "He doesn't have enough time.", col4: "Yeterli vakti yok." },
        { col1: "Soru Formu (?)", col2: "Do / Does ... have?", highlightCol2: true, col3: "Do you have any questions?", col4: "Herhangi bir sorun var mı?" },
      ],
      chalkNote: {
        yellowHighlight: "3. Tekil şahıslarda (He, She, It) HAVE şekil değiştirerek HAS olur!",
        whiteExplanation: "Soru ve olumsuz cümlelerde 'Does' geldiğinde 'has' yeniden yalın 'have' hâline döner: 'Does she have...?'",
      },
      sideTip: "Asla 'Does she has...?' demeyin. 'Does' zaten -s ekini devralmıştır.",
    };
  }

  // 4. PAST SIMPLE DÜZENLİ FİİLLER (-ed takısı) e.g. Lesson 82, 83
  if (lower.includes('düzenli fiil') || lower.includes('-ed takısı') || lower.includes('-ed eki')) {
    return {
      title: "Düzenli Fiiller: Geçmiş Zaman (-ed) İmla ve Çekim Tahtası",
      subtitle: "Past Simple Kuralı: Fiil Köküne -ed Eklenmesi ve İmla Farkları",
      layoutType: 'verb_transformation',
      headers: ["Fiilin İlk Hâli (V1)", "Geçmiş Hâli (V2 -ed)", "Türkçe Anlamı", "İmla / Kural Özelliği"],
      rows: [
        { col1: "walk", col2: "walked", highlightCol2: true, col3: "yürümek -> yürüdü", col4: "Standart düzenli fiil (+ed)" },
        { col1: "talk", col2: "talked", highlightCol2: true, col3: "konuşmak -> konuştu", col4: "Standart düzenli fiil (+ed)" },
        { col1: "play", col2: "played", highlightCol2: true, col3: "oynamak -> oynadı", col4: "Sesli + y: doğrudan (+ed)" },
        { col1: "study", col2: "studied", highlightCol2: true, col3: "ders çalışmak -> çalıştı", col4: "Sessiz + y: 'y' düşer (+ied)" },
        { col1: "live", col2: "lived", highlightCol2: true, col3: "yaşamak -> yaşadı", col4: "Sonu -e ile bitenler: (+d)" },
        { col1: "stop", col2: "stopped", highlightCol2: true, col3: "durmak -> durdu", col4: "Kısa sesli + sessiz: son harf ikizleşir" },
      ],
      chalkNote: {
        yellowHighlight: "'-ed' takısı YALNIZCA düzenli fiillere eklenir. Düzensiz fiiller (go->went, buy->bought) bu kurala uymaz!",
        whiteExplanation: "Olumsuzda 'didn't' ve soruda 'Did' geldiğinde fiil daima yalın (V1) hâline geri döner: 'Did you walk?'",
      },
      sideTip: "Telaffuzda '-ed' sesi fiil sonuna göre /t/, /d/ veya /ɪd/ olarak seslendirilir.",
    };
  }

  // 5. DÜZENSİZ FİİLLER (Lesson 84)
  if (lower.includes('düzensiz fiil') || lower.includes('irregular')) {
    return {
      title: "En Sık Kullanılan Düzensiz Fiiller (Irregular Verbs) Tahtası",
      subtitle: "Geçmiş Zamanda Kökten Değişen Temel Eylem Fiilleri",
      layoutType: 'verb_transformation',
      headers: ["V1 (Yalın Hâl)", "V2 (Geçmiş Hâl)", "Türkçe Anlamı", "Örnek Cümle"],
      rows: [
        { col1: "go", col2: "went", highlightCol2: true, col3: "gitmek -> gitti", col4: "I went to the office yesterday." },
        { col1: "see", col2: "saw", highlightCol2: true, col3: "görmek -> gördü", col4: "She saw an interesting documentary." },
        { col1: "buy", col2: "bought", highlightCol2: true, col3: "satın almak -> aldı", col4: "We bought a new apartment." },
        { col1: "have", col2: "had", highlightCol2: true, col3: "sahip olmak -> oldu", col4: "They had a productive meeting." },
        { col1: "do", col2: "did", highlightCol2: true, col3: "yapmak -> yaptı", col4: "He did all his assignments." },
      ],
      chalkNote: {
        yellowHighlight: "Düzensiz fiiller '-ed' almaz; tamamen yeni bir kelimeye dönüşür. Refleks olarak ezberlenmelidir.",
        whiteExplanation: "Soruda ve olumsuzda 'Did / Didn't' olduğu için fiil yine V1 olur: 'Did you go?' (Did you went YANLIŞ!).",
      },
      sideTip: "Düzensiz fiillerin 2. hâli yalnızca geçmiş zaman olumlu düz cümlelerde kullanılır.",
    };
  }

  // 6. WH- SORU KELİMELERİ (Lessons 41, 42, 43, 44, 45, 46, 50)
  if (lower.includes('wh-') || lower.includes('soru kelime') || lower.includes('what') || lower.includes('where') || lower.includes('when')) {
    return {
      title: "WH- Soru Kelimeleri ve Soru Cümlesi Düzeni Tahtası",
      subtitle: "Hangi Bilgiyi Nasıl Soracağınızın Eksiksiz Şeması",
      layoutType: 'wh_question_table',
      headers: ["Soru Kelimesi", "Türkçe Karşılığı", "Hangi Bilgiyi Sorar?", "Örnek Soru Cümlesi"],
      rows: [
        { col1: "What", highlightCol1: true, col2: "Ne? / Hangi?", col3: "Nesne, eylem, kimlik veya tanım", col4: "What is your project topic?" },
        { col1: "Where", highlightCol1: true, col2: "Nerede? / Nereye?", col3: "Mekan, konum veya adres", col4: "Where do you work in London?" },
        { col1: "When", highlightCol1: true, col2: "Ne zaman?", col3: "Zaman, saat, gün veya tarih", col4: "When does the presentation start?" },
        { col1: "Who", highlightCol1: true, col2: "Kim?", col3: "Kişi, aktör veya şahıs", col4: "Who is that team leader?" },
        { col1: "Why", highlightCol1: true, col2: "Neden? / Niçin?", col3: "Sebep veya gerekçe (Cevap: Because)", col4: "Why are you learning English?" },
        { col1: "How", highlightCol1: true, col2: "Nasıl?", col3: "Yöntem, biçim veya durum", col4: "How do you solve this issue?" },
      ],
      chalkNote: {
        yellowHighlight: "Altın Soru Sıralaması: WH- KELİMESİ + YARDIMCI FİİL + ÖZNE + ANA FİİL ?",
        whiteExplanation: "Örnek: 'Where (WH) + do (Yardımcı) + you (Özne) + live (Ana Fiil)?' Bu sıra İngilizcede asla bozulmaz.",
      },
      sideTip: "'Why' sorusuna daima 'Because' (Çünkü) kalıbıyla cevap verilir.",
    };
  }

  // 7. CÜMLE KURULUŞ ŞEMASI (Syntax Diagram) e.g. Lessons 21, 22, 14, 1, 2, 3
  if (lower.includes('cümle yapısı') || lower.includes('cümle kur') || lower.includes('söz dizimi') || lower.includes('rutin') || lower.includes('geniş zaman') || id === 1 || id === 21) {
    const ex = bp.examples?.[0] || { en: "I drink coffee every morning.", tr: "Ben her sabah kahve içerim." };
    return {
      title: "İngilizce Temel Cümle Kuruluş Şeması (SVO)",
      subtitle: "Özne + Fiil + Nesne / Zaman Sıralaması",
      layoutType: 'syntax_diagram',
      syntaxBlocks: {
        formula: "SUBJECT (Özne) + VERB (Fiil) + OBJECT (Nesne) + TIME / PLACE (Zaman / Yer)",
        components: [
          { label: "1. ÖZNE (Subject)", code: "I / You / We / They / She", role: "Eylemi gerçekleştiren kişi/varlık", color: 'white' },
          { label: "2. FİİL (Verb)", code: "work / study / like (+s)", role: "Eylemin kendisi (He/She/It için +s)", color: 'yellow' },
          { label: "3. NESNE (Object)", code: "English / coffee / projects", role: "Eylemden etkilenen nesne", color: 'white' },
          { label: "4. ZAMAN (Time)", code: "every day / at 9 AM", role: "Eylemin yapıldığı zaman dilimi", color: 'white' },
        ],
        exampleEn: ex.en,
        exampleTr: ex.tr,
        breakdownNote: "Türkçede fiil cümlenin en sonundadır ('içerim'). İngilizcede ise fiil hemen öznenin ardından gelir ('I drink').",
      },
      chalkNote: {
        yellowHighlight: "İngilizcede söz dizimi sabittir: Özne -> Fiil -> Nesne. Yerleri rastgele değiştirilemez!",
        whiteExplanation: "Geniş zamanda 3. tekil şahıslarda (He, She, It) fiile '-s' veya '-es' takısı eklenir: 'She drinks coffee.'",
      },
      sideTip: "Zaman belirteçleri cümlenin en sonunda veya vurgu için en başında yer alır.",
    };
  }

  // 8. MODAL VERBS (Can, Could, Must, Should)
  if (lower.includes('can ') || lower.includes('can/') || lower.includes('can’t') || lower.includes('yetenek') || lower.includes('izin')) {
    return {
      title: "Can & Can't ile Yetenek ve İzin Tahtası",
      subtitle: "Modal Fiil ve Yalın Fiil (Bare Infinitive) Kuralı",
      layoutType: 'structure_table',
      headers: ["Cümle Türü", "Kalıp Formülü", "Örnek Cümle", "Türkçe Anlamı"],
      rows: [
        { col1: "Olumlu Yetenek (+)", col2: "Özne + CAN + V1 (yalın)", highlightCol2: true, col3: "She can speak three languages fluently.", col4: "Akıcı bir şekilde üç dil konuşabilir." },
        { col1: "Olumsuz Yetenek (-)", col2: "Özne + CANNOT / CAN'T + V1", highlightCol2: true, col3: "I can't drive a manual car.", col4: "Düz vites araba süremem." },
        { col1: "Soru & Rica (?)", col2: "CAN + Özne + V1...?", highlightCol2: true, col3: "Can you help me with this project?", col4: "Bu projede bana yardım edebilir misin?" },
      ],
      chalkNote: {
        yellowHighlight: "CAN ardından gelen fiile ASLA '-s' veya 'to' eklenmez! Fiil tamamen yalın kalır.",
        whiteExplanation: "'She can speaks' veya 'She can to speak' YANLIŞTIR; daima 'She can speak' denir.",
      },
      sideTip: "'Can't' telaffuzunda Amerikan İngilizcesinde /kænt/, İngiliz İngilizcesinde /kɑːnt/ sesi duyulur.",
    };
  }

  // 9. THERE IS / THERE ARE (Varlık Bildirimi)
  if (lower.includes('there is') || lower.includes('there are') || lower.includes('varlık')) {
    return {
      title: "There is & There are ile Varlık Bildirimi Tahtası",
      subtitle: "Tekil ve Çoğul Varlıkların Bildirimi",
      layoutType: 'grammar_table',
      headers: ["Kullanım Türü", "Kalıp", "Örnek Cümle", "Türkçe Anlamı"],
      rows: [
        { col1: "Tekil Varlık (+)", col2: "There is (kısaca There's)", highlightCol2: true, col3: "There is a modern library nearby.", col4: "Yakınlarda modern bir kütüphane var." },
        { col1: "Çoğul Varlık (+)", col2: "There are", highlightCol2: true, col3: "There are three new colleagues in our team.", col4: "Ekibimizde üç yeni iş arkadaşı var." },
        { col1: "Olumsuz Varlık (-)", col2: "There isn't / aren't", highlightCol2: true, col3: "There isn't any problem here.", col4: "Burada hiçbir problem yok." },
        { col1: "Soru Formu (?)", col2: "Is there...? / Are there...?", highlightCol2: true, col3: "Is there a coffee machine on this floor?", col4: "Bu katta kahve makinesi var mı?" },
      ],
      chalkNote: {
        yellowHighlight: "Tekil veya sayılamayan nesnelerde THERE IS; çoğul nesnelerde THERE ARE kullanılır.",
        whiteExplanation: "'Have' bir kişinin sahipliğini, 'There is/are' ise bir yerde bir şeyin varlığını bildirir.",
      },
      sideTip: "'There are' birleşerek kısaltılamaz; 'There're' yazılı dilde tercih edilmez.",
    };
  }

  // 10. UNIVERSAL CONTEXTUAL FALLBACK (Synthesized from ruleCards and examples)
  const rows: BlackboardRow[] = [];
  if (bp.ruleCards && bp.ruleCards.length > 0) {
    for (const rc of bp.ruleCards.slice(0, 3)) {
      rows.push({
        col1: rc.ruleTitle || "Temel Kural",
        col2: rc.formula || rc.title || "Hedef Yapı",
        highlightCol2: true,
        col3: rc.exampleSnippet || rc.example || (bp.examples?.[0]?.en || "Model sentence"),
        col4: rc.explanation || rc.rule || "Kural açıklaması",
      });
    }
  }

  if (rows.length < 3 && bp.examples) {
    for (const ex of bp.examples.slice(0, 3)) {
      if (rows.length >= 4) break;
      rows.push({
        col1: ex.grammarCategory || "Model Örnek",
        col2: ex.highlightedWords?.[0] || "Hedef Kalıp",
        highlightCol2: true,
        col3: ex.en,
        col4: ex.tr,
      });
    }
  }

  const primaryRule = bp.ruleCards?.[0];
  const firstMistake = bp.commonMistakes?.[0];

  return {
    title: `${cleanTitle} — Öğretmen Tahtası`,
    subtitle: `${bp.skillType.toUpperCase()} • ${lessonMeta.level} Seviyesi Temel Çekim ve Kural Tablosu`,
    layoutType: 'grammar_table',
    headers: ["Öge / Kategori", "Kural & Formül", "Örnek Cümle", "Açıklama / Türkçe"],
    rows,
    chalkNote: {
      yellowHighlight: primaryRule?.formula || `Temel Kural: ${cleanTitle} yapısında söz dizimi kurallarına sadık kalın.`,
      whiteExplanation: primaryRule?.explanation || bp.linguisticLogic || "Kuralı ezberlemek yerine cümlenin amacına ve özne uyumuna odaklanın.",
    },
    sideTip: firstMistake?.memoryTip || "Doğrudan Türkçe düşünerek kelime kelime çeviri yapmaktan kaçının.",
  };
}

// Master Pedagogical Engine Resolver
export function generatePedagogicalMasterclass(lessonMeta: {
  id: number;
  code: string;
  level: CEFRLevel;
  title: string;
  moduleName: string;
  learningObjective: string;
  estimatedMinutes?: number;
  xpReward?: number;
}): LessonData {
  const { id, code, level, title, moduleName, learningObjective } = lessonMeta;
  const lower = `${title} ${moduleName} ${learningObjective}`.toLowerCase();

  // 1. Check registered dedicated blueprint from the authoritative pedagogy database
  const registered = getRegisteredBlueprint(id);
  let bp: TopicBlueprint;

  if (registered) {
    bp = registered;
  } else if (lower.includes('tanışma') || lower.includes('kendini tanıtma') || lower.includes('greetings') || lower.includes('introducing yourself')) {
    bp = BLUEPRINTS.greetings_intro(level, title, moduleName);
  } else if (lower.includes('alfabe') || lower.includes('spelling') || lower.includes('harf kodlama')) {
    bp = BLUEPRINTS.alphabet_spelling(level, title, moduleName);
  } else if (lower.includes('sayılar (1-100)') || (lower.includes('sayılar') && lower.includes('yaş'))) {
    bp = BLUEPRINTS.numbers_age_phone(level, title, moduleName);
  } else if (lower.includes('to be') || lower.includes('olmak fiili') || lower.includes('am / is / are') || lower.includes('am, is, are')) {
    bp = BLUEPRINTS.to_be(level, title, moduleName);
  } else if (lower.includes('present simple') || lower.includes('geniş zaman') || (lower.includes('rutin') && !lower.includes('past'))) {
    bp = BLUEPRINTS.present_simple(level, title, moduleName);
  } else if (lower.includes('present continuous') || lower.includes('şimdiki zaman') || lower.includes('anlık eylem')) {
    bp = BLUEPRINTS.present_continuous(level, title, moduleName);
  } else if (lower.includes('past simple vs present perfect') || lower.includes('zamanlar arası geçiş') || lower.includes('geçmiş ile bugün')) {
    bp = BLUEPRINTS.past_vs_perfect(level, title, moduleName);
  } else if (lower.includes('past simple') || lower.includes('geçmiş zaman') || lower.includes('düzenli ve düzensiz fiil')) {
    bp = BLUEPRINTS.past_simple(level, title, moduleName);
  } else if (lower.includes('conditional') || lower.includes('koşul') || lower.includes('şart')) {
    bp = BLUEPRINTS.conditionals(level, title, moduleName);
  } else if (lower.includes('inversion') || lower.includes('devrik')) {
    bp = BLUEPRINTS.inversion(level, title, moduleName);
  } else {
    // 2. Synthesize dedicated contextual blueprint tailored to the exact lesson
    bp = synthesizeContextualBlueprint(level, title, moduleName, learningObjective);
  }

  const cleanTitle = title.replace(/\s+[—–]\s+.*$/, '').trim();

  // Dynamic non-repetitive teacher introduction
  const dynamicIntro = `${cleanTitle} konusuna hoş geldiniz. ${bp.whyItMatters}`;

  // Extract key structures / formulas for Section A
  const keyStructures: string[] = [];
  if (bp.ruleCards && bp.ruleCards.length > 0) {
    for (const rc of bp.ruleCards) {
      if (rc.formula && !keyStructures.includes(rc.formula)) {
        keyStructures.push(rc.formula);
      }
    }
  }
  if (bp.stepBreakdown) {
    for (const step of bp.stepBreakdown) {
      if (step.keyPhrase && !keyStructures.includes(step.keyPhrase) && keyStructures.length < 4) {
        keyStructures.push(step.keyPhrase);
      }
    }
  }
  if (keyStructures.length === 0 && bp.vocabulary && bp.vocabulary.length > 0) {
    keyStructures.push(...bp.vocabulary.slice(0, 3).map(v => v.word));
  }

  const learningGoals = {
    targetObjective: bp.concreteCompetency || learningObjective,
    keyStructures: keyStructures.slice(0, 4),
    realLifeUtility: bp.whyItMatters || (bp.realWorldContext ? bp.realWorldContext.description : 'Günlük iletişimde güvenle kendinizi ifade etmek.'),
  };

  const coreUnderstanding = {
    simpleExplanation: bp.introduction || `${cleanTitle} konusunun temel mantığını kavramak için dil bilgisi formüllerini ezberlemek yerine cümlenin amacına odaklanıyoruz.`,
    linguisticLogic: bp.linguisticLogic,
    whenAndWhy: bp.whyItMatters,
    prerequisiteConnection: `Bu yapı, ${level} seviyesinde daha önce öğrenilen temel kelime dağarcığı ve cümle kurma reflekslerini doğrudan pekiştirir.`,
  };

  // 3-Tier Progressive Guided Practice for Section G
  const guidedPracticeSteps = [];
  
  // Tier 1: Fully Guided
  const ex1 = bp.examples?.[0];
  if (ex1) {
    const words1 = ex1.en.replace(/[.,!?;:"]/g, '').split(/\s+/).filter(Boolean);
    guidedPracticeSteps.push({
      tier: 1 as const,
      label: '1. Adım: Tam Rehberli Model Uygulama',
      promptTr: ex1.tr,
      guidanceTr: ex1.breakdownNote || ex1.contextNote || 'Hedef yapıyı formüle uygun sırayla yerleştirin.',
      targetEn: ex1.en,
      scaffoldWords: [...words1].sort(() => 0.5 - Math.random()),
      explanation: ex1.breakdownNote || 'Örnek model cümlenin söz dizimi başarıyla kuruldu.',
    });
  }

  // Tier 2: Reduced Support (from sentenceBuilder)
  if (bp.sentenceBuilder) {
    guidedPracticeSteps.push({
      tier: 2 as const,
      label: '2. Adım: Azalan Destek (Yarı Bağımsız Pratik)',
      promptTr: bp.sentenceBuilder.promptTr,
      guidanceTr: 'Yardımcı ipuçlarına dikkat ederek hedef cümleyi inşa edin.',
      targetEn: bp.sentenceBuilder.targetEn,
      scaffoldWords: bp.sentenceBuilder.availableWords,
      explanation: bp.sentenceBuilder.explanation,
    });
  }

  // Tier 3: Independent Application in Real-World Scenario
  const dialogueLine = bp.realWorldContext?.dialogue?.[0];
  if (dialogueLine) {
    const words3 = dialogueLine.textEn.replace(/[.,!?;:"]/g, '').split(/\s+/).filter(Boolean);
    guidedPracticeSteps.push({
      tier: 3 as const,
      label: '3. Adım: Yeni Duruma Bağımsız Uygulama (Transfer)',
      promptTr: dialogueLine.textTr,
      guidanceTr: `Gerçek Hayat Sahnesi: ${bp.realWorldContext.scenarioTitle}. Karşınızdaki kişiye doğal bir biçimde bu cümleyi kurun.`,
      targetEn: dialogueLine.textEn,
      scaffoldWords: [...words3].sort(() => 0.5 - Math.random()),
      explanation: `${bp.realWorldContext.scenarioTitle} bağlamında doğal ve doğru bir iletişim ifadesi oluşturuldu.`,
    });
  } else if (bp.examples?.[1]) {
    const ex2 = bp.examples[1];
    const words2 = ex2.en.replace(/[.,!?;:"]/g, '').split(/\s+/).filter(Boolean);
    guidedPracticeSteps.push({
      tier: 3 as const,
      label: '3. Adım: Yeni Duruma Bağımsız Uygulama (Transfer)',
      promptTr: ex2.tr,
      guidanceTr: 'Farklı bir durumda öğrendiğiniz kuralı tek başınıza uygulayın.',
      targetEn: ex2.en,
      scaffoldWords: [...words2].sort(() => 0.5 - Math.random()),
      explanation: ex2.breakdownNote || 'Hedef yapı yeni durumda başarıyla uygulandı.',
    });
  }

  const guidedPractice = {
    title: 'Kendin Uygula: 3 Aşamalı Kademeli Alıştırma',
    steps: guidedPracticeSteps,
  };

  const firstMistake = bp.commonMistakes?.[0];
  const summarySection = {
    takeaways: bp.summaryTakeaways && bp.summaryTakeaways.length > 0 
      ? bp.summaryTakeaways 
      : [
          `'${cleanTitle}' yapısının mantığı kavrandı.`,
          `Söz dizimi ve doğru sıralama kuralları öğrenildi.`,
          `Günlük yaşam durumlarında uygulama refleksi kazanıldı.`
        ],
    mostConfusedPoint: {
      trap: firstMistake 
        ? `❌ "${firstMistake.wrongExample}" kullanımı en sık düşülen tuzaktır.` 
        : 'Doğrudan Türkçe sözcük dizimiyle düşünmek.',
      explanation: firstMistake 
        ? `${firstMistake.rootCause} Çözüm: ${firstMistake.memoryTip}` 
        : 'İngilizce kural ve söz dizimine sadık kalarak pratik yapın.',
    },
  };

  const teacherLecture: TeacherLectureData = {
    introduction: bp.introduction || dynamicIntro,
    skillType: bp.skillType,
    concreteCompetency: bp.concreteCompetency,
    learningGoals,
    coreUnderstanding,
    blackboard: buildTeacherBlackboard(lessonMeta, bp, cleanTitle),
    coreConcept: {
      title: `${cleanTitle} — Dil Mantığı ve Amacı`,
      explanation: bp.linguisticLogic,
      whyItMatters: bp.whyItMatters,
    },
    breakdownSteps: bp.stepBreakdown.map((s, idx) => ({
      stepNumber: idx + 1,
      title: s.title,
      content: s.content,
      formula: s.formula,
      keyPhrase: s.keyPhrase,
      subPoints: s.subPoints,
      rationale: s.rationale,
      warningNote: s.warningNote,
    })),
    ruleCards: bp.ruleCards.map(rc => ({
      ruleTitle: rc.ruleTitle || rc.title || 'Temel Kural',
      title: rc.title || rc.ruleTitle || 'Temel Kural',
      formula: rc.formula,
      explanation: rc.explanation || rc.rule || '',
      exampleSnippet: rc.exampleSnippet || rc.example,
      example: rc.example || rc.exampleSnippet,
      cautionNote: rc.cautionNote,
      tipNote: rc.tipNote || rc.tip,
      tip: rc.tip || rc.tipNote,
    })),
    commonMistakes: bp.commonMistakes,
    realWorldContext: bp.realWorldContext,
    contrastiveAnalysis: bp.contrastiveAnalysis,
    guidedPractice,
    memoryHook: bp.memoryHook,
    summarySection,
    quickCheck: bp.quickCheck,
  };

  const examples: ExampleSentence[] = bp.examples.map((ex, idx) => ({
    id: `ex-${id}-${idx + 1}`,
    en: ex.en,
    tr: ex.tr,
    highlightedWords: ex.highlightedWords,
    grammarCategory: ex.grammarCategory,
    contextNote: ex.contextNote,
    breakdownNote: ex.breakdownNote,
  }));

  const vocabulary: VocabularyItem[] = bp.vocabulary.map((v, idx) => ({
    id: `v-${id}-${idx + 1}`,
    word: v.word,
    phonetic: v.phonetic,
    partOfSpeech: v.partOfSpeech,
    meaningTr: v.meaningTr,
    exampleSentence: v.exampleSentence,
  }));

  const exercises: ExerciseItem[] = [
    {
      id: `q-${id}-1`,
      type: 'multiple-choice',
      prompt: bp.exercise.prompt,
      sentence: bp.exercise.sentence || bp.exercise.prompt,
      options: bp.exercise.options,
      correctAnswer: bp.exercise.correctAnswer,
      hint: bp.exercise.hint,
      explanation: bp.exercise.explanation,
    }
  ];

  const sentenceBuilderTask: SentenceBuilderTask = {
    id: `sb-${id}`,
    promptTr: bp.sentenceBuilder.promptTr,
    targetEn: bp.sentenceBuilder.targetEn,
    availableWords: bp.sentenceBuilder.availableWords,
    explanation: bp.sentenceBuilder.explanation,
  };

  return {
    id,
    code,
    level,
    moduleName,
    title,
    learningObjective: bp.concreteCompetency || learningObjective,
    estimatedMinutes: lessonMeta.estimatedMinutes || (level === 'A1' || level === 'A2' ? 14 : 20),
    xpReward: lessonMeta.xpReward || (level === 'A1' ? 50 : level === 'A2' ? 60 : level === 'B1' ? 70 : level === 'B2' ? 80 : level === 'C1' ? 90 : 100),
    teacherLecture,
    examples,
    vocabulary,
    exercises,
    sentenceBuilderTask,
    summaryTakeaways: bp.summaryTakeaways,
  };
}

