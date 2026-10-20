import { LessonData, LessonStepDef } from '../types/lesson';
import { LessonCategoryType } from '../types/curriculum';
import { getFullCurriculumLessons } from './curriculumData';
import { generatePedagogicalMasterclass } from '../services/pedagogicalEngine';

export const LESSON_STEPS: LessonStepDef[] = [
  {
    key: 'intro',
    stepNumber: 1,
    label: 'Derse Giriş',
    shortLabel: 'Giriş',
    description: 'Konuya genel bakış, öğrenme hedefleri ve ön hazırlık.',
  },
  {
    key: 'lecture',
    stepNumber: 2,
    label: 'Öğretmen Anlatımı',
    shortLabel: 'Anlatım',
    description: 'Kapsamlı konu anlatımı, kural mantığı ve adım adım analiz.',
  },
  {
    key: 'examples',
    stepNumber: 3,
    label: 'Örnekler & Kurallar',
    shortLabel: 'Örnekler',
    description: 'Gerçek hayattan çift dilli örnek cümleler ve sesli dinleme.',
  },
  {
    key: 'exercises',
    stepNumber: 4,
    label: 'Alıştırmalar',
    shortLabel: 'Alıştırma',
    description: 'Anında geri bildirimli çoktan seçmeli ve boşluk doldurma soruları.',
  },
  {
    key: 'sentence',
    stepNumber: 5,
    label: 'Kendi Cümleni Kur',
    shortLabel: 'Cümle Kurucu',
    description: 'Kelimeleri birleştirerek hedef İngilizce cümleyi inşa etme.',
  },
  {
    key: 'summary',
    stepNumber: 6,
    label: 'Ders Özeti & Tamamlama',
    shortLabel: 'Özet',
    description: 'Kazanım kontrolü, puan kazanımı ve ders tamamlama.',
  },
];

// Richly authored flagship lessons matching authoritative CEFR curriculum
const DETAILED_LESSONS: Record<number, LessonData> = {
  1: {
    id: 1,
    code: 'A1-01',
    level: 'A1',
    moduleName: 'Tanışma, Alfabe ve Temel İletişim',
    title: 'Tanışma İfadeleri ve Kendini Tanıtma',
    learningObjective: "Kendini, adını, memleketini ve temel nezaket ifadelerini kullanarak doğal ve akıcı bir ilk tanışma diyaloğu gerçekleştirebilmek.",
    estimatedMinutes: 12,
    xpReward: 50,
    teacherLecture: {
      introduction: "İngilizce öğrenirken atacağımız ilk ve en heyecan verici adım, bir başkasıyla tanışmak ve kendimizi tanıtmaktır. 'Hello', 'My name is...', 'Nice to meet you' gibi kalıplar tüm dünyada iletişimin evrensel anahtarıdır.",
      coreConcept: {
        title: "Tanışma ve Selamlaşmanın Temel Mantığı",
        explanation: "İngilizcede tanışırken doğrudan soru sormak yerine önce selamlaşma ve kendini tanıtma jesti yapılır. 'My name is...' (Benim adım...) veya 'I am...' (Ben ...) kalıbı kullanılır. Karşı tarafın adı ise 'What is your name?' sorusuyla öğrenilir.",
        whyItMatters: "Yabancı bir dilde kurulan ilk temas özgüvenin temelidir. Doğru ve güler yüzlü bir tanışma ifadesi karşı tarafa anında samimiyet ve profesyonellik mesajı verir.",
      },
      breakdownSteps: [
        {
          stepNumber: 1,
          title: "Selamlaşma ve Kendini Tanıtma",
          content: "Kendinizi tanıtırken 'I am [İsim]' veya 'My name is [İsim]' kalıbı kullanılır. Resmi ortamlarda 'Good morning / afternoon / evening', günlük dilde ise 'Hello' veya 'Hi' tercih edilir.",
          keyPhrase: "Hello! My name is Alex.  |  Hi, I am Sarah.",
          formula: "Greeting + My name is [İsim] / I am [İsim]",
          subPoints: [
            "Resmi: 'Good morning' (öğlene kadar), 'Good afternoon' (öğleden akşama), 'Good evening' (akşam).",
            "Samimi: 'Hello' veya 'Hi'."
          ]
        },
        {
          stepNumber: 2,
          title: "Karşı Tarafın Adını Sorma",
          content: "Nezaketle karşı tarafın adını öğrenmek için 'What is your name?' sorusu yöneltilir. Günlük konuşmada 'What's your name?' kısaltması yaygındır.",
          formula: "What is your name?  |  What's your name?",
          keyPhrase: "What's your name? (What is kısaltması)",
          subPoints: [
            "Telaffuz: 'What is your' sözcükleri akıcı konuşmada 'What's yer' (/wʌts jər/) gibi kaynaşır."
          ]
        },
        {
          stepNumber: 3,
          title: "Tanışmaktan Memnuniyet Bildirme",
          content: "Tanışma anında 'Nice to meet you' veya 'Pleased to meet you' denir. Karşı taraf ise sonuna 'too' (ben de) ekleyerek yanıt verir: 'Nice to meet you, too!'",
          formula: "Nice to meet you! -> Nice to meet you, too!",
          keyPhrase: "Nice to meet you!  |  Pleased to meet you!  |  Where are you from?",
          subPoints: [
            "Biri size 'Nice to meet you' dediğinde 'Me too' demek yerine 'Nice to meet you, too' demek çok daha kibardır."
          ]
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
          ruleTitle: "Sık Yapılan Hata: İsim Bildirimi",
          explanation: "Türkçe 'Benim adım Ali' derken 'My name is Ali' denir. 'I name is Ali' kesinlikle yanlıştır.",
          cautionNote: "'I name is Ali' DEMEYİN! 'My name is Ali' veya 'I am Ali' deyin."
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
      }
    },
    examples: [
      {
        id: 'ex-1-1',
        en: "Hello, my name is Lisa and it is a pleasure to meet you.",
        tr: "Merhaba, benim adım Lisa ve sizinle tanışmak bir zevk.",
        highlightedWords: ['Hello', 'my name is', 'pleasure to meet you'],
        grammarCategory: 'Selamlaşma & İsim',
        contextNote: "Resmi veya yarı resmi tanışma cümlesi."
      },
      {
        id: 'ex-1-2',
        en: "Nice to meet you, Mark. Where are you originally from?",
        tr: "Tanıştığımıza memnun oldum Mark. Aslen nerelisiniz?",
        highlightedWords: ['Nice to meet you', 'originally from'],
        grammarCategory: 'Nezaket & Menşei Sorusu',
        contextNote: "Sohbeti ilerletmek için memleket sorma kalıbı."
      },
      {
        id: 'ex-1-3',
        en: "I am from Istanbul, Turkey, and I work in software engineering.",
        tr: "Türkiyeliyim, İstanbulluyum ve yazılım mühendisliği alanında çalışıyorum.",
        highlightedWords: ['I am from', 'work in'],
        grammarCategory: 'Memleket & Meslek Bildirimi',
        contextNote: "Kendini tanıtırken köken ve iş alanı paylaşımı."
      }
    ],
    vocabulary: [
      {
        id: 'v-1-1',
        word: 'Introduce',
        phonetic: '/ˌɪn.trəˈdjuːs/',
        partOfSpeech: 'verb',
        meaningTr: 'Tanıtmak, tanıştırmak',
        exampleSentence: 'Allow me to introduce myself.'
      },
      {
        id: 'v-1-2',
        word: 'Pleasure',
        phonetic: '/ˈpleʒ.ər/',
        partOfSpeech: 'noun',
        meaningTr: 'Memnuniyet, zevk',
        exampleSentence: 'It is a pleasure to meet you.'
      },
      {
        id: 'v-1-3',
        word: 'Originally',
        phonetic: '/əˈrɪdʒ.ən.əl.i/',
        partOfSpeech: 'adverb',
        meaningTr: 'Aslen, başlangıçta',
        exampleSentence: 'Where are you originally from?'
      },
      {
        id: 'v-1-4',
        word: 'Surname',
        phonetic: '/ˈsɜː.neɪm/',
        partOfSpeech: 'noun',
        meaningTr: 'Soyadı',
        exampleSentence: 'What is your surname, please?'
      }
    ],
    exercises: [
      {
        id: 'q-1-1',
        type: 'multiple-choice',
        prompt: "Tanışma diyaloğundaki boşluğu en uygun kelimeyle tamamlayın:",
        sentence: "Hello! My ___ is David and I am from Canada.",
        options: ['name', 'from', 'meet', 'pleased'],
        correctAnswer: 'name',
        hint: "Adınızı söylerken 'My name is...' kalıbı kullanılır.",
        explanation: "'My name is David' (Benim adım David) kalıbı doğru kelime 'name' gerektirir."
      },
      {
        id: 'q-1-2',
        type: 'fill-blank',
        prompt: "Tanışma anındaki memnuniyet ifadesinde boşluğu tamamlayın (küçük harfle):",
        sentence: "Nice to ___ you, Sarah.",
        correctAnswer: 'meet',
        hint: "Görüşmek, buluşmak, tanışmak anlamına gelen fiili yazın.",
        explanation: "'Nice to meet you' kalıbında 'meet' fiili yer alır."
      },
      {
        id: 'q-1-3',
        type: 'multiple-choice',
        prompt: "Biri size 'Nice to meet you' dediğinde verilecek en kibar karşılık hangisidir?",
        options: [
          'Nice to meet you, too.',
          'Good night.',
          'I am going home.',
          'Yes, I do.'
        ],
        correctAnswer: 'Nice to meet you, too.',
        hint: "'too' eki Türkçedeki 'de/da' (ben de) anlamına gelir.",
        explanation: "Karşılık verirken 'Nice to meet you, too' (Ben de tanıştığımıza çok memnun oldum) denir."
      }
    ],
    sentenceBuilderTask: {
      id: 'sb-1',
      promptTr: "Merhaba benim adım Sarah ve tanıştığımıza çok memnun oldum.",
      targetEn: "Hello my name is Sarah and nice to meet you",
      availableWords: [
        'Hello', 'my', 'name', 'is', 'Sarah', 'and', 'nice', 'to', 'meet', 'you',
        'are', 'from', 'I'
      ],
      explanation: "'Hello' selamlaşmasıyla başlar, 'my name is Sarah' ile kendini tanıtır, 'and nice to meet you' ile memnuniyetini belirtir."
    },
    summaryTakeaways: [
      "Kendini tanıtırken 'My name is...' veya 'I am...' kalıbı kullanılır.",
      "Karşı tarafın adı 'What is your name?' sorusuyla öğrenilir.",
      "Tanışma memnuniyeti 'Nice to meet you' ve karşılığı 'Nice to meet you, too' ile ifade edilir."
    ]
  },

  2: {
    id: 2,
    code: 'A1-02',
    level: 'A1',
    moduleName: 'Tanışma, Alfabe ve Temel İletişim',
    title: 'İngilizce Alfabe ve Harf Kodlama (Spelling)',
    learningObjective: "İngilizce alfabedeki harflerin doğru sesletimini yapabilmek ve ad/soyad veya e-posta gibi bilgileri harf harf kodlayabilmek (spelling).",
    estimatedMinutes: 12,
    xpReward: 50,
    teacherLecture: {
      introduction: "İngilizce alfabe Türkçe alfabeden farklı sesletim kurallarına sahiptir. İngilizcede kelimelerin okunuşu yazılışından farklı olduğu için otelde, pasaport kontrolünde veya telefon görüşmelerinde adınızı harf harf kodlamak (spelling) en sık kullanacağınız pratik beceridir.",
      coreConcept: {
        title: "İngilizce Harf Sesletimi ve Kodlama (Spelling) Mantığı",
        explanation: "Türkçede harfler neredeyse her zaman tek bir sesle okunur; İngilizcede ise harflerin 'alfabedeki adı' ile 'kelime içindeki okunuşu' farklıdır. Harf kodlarken harfin alfabedeki adı (/eɪ/, /biː/, /siː/ vb.) telaffuz edilir.",
        whyItMatters: "Yurt dışında otel resepsiyonunda 'Could you spell your surname?' sorusuna takılmadan cevap vermek, iletişimin ilk saniyesinde özgüven sağlar.",
      },
      breakdownSteps: [
        {
          stepNumber: 1,
          title: "Kritik Sesli Harfler (A, E, I Karışıklığı)",
          content: "Türkçe konuşanların en çok karıştırdığı üç harf A, E ve I'dır. Bu sesler zihne sağlam kodlanmalıdır: A = /eɪ/ (ey), E = /iː/ (ii), I = /aɪ/ (ay).",
          keyPhrase: "A -> /eɪ/ (ey)  |  E -> /iː/ (ii)  |  I -> /aɪ/ (ay)",
          formula: "A = /eɪ/  |  E = /iː/  |  I = /aɪ/  |  O = /oʊ/  |  U = /juː/",
          subPoints: [
            "A harfi 'ey' diye okunur: Apple kelimesinin ilk harfi 'ey' harfidir.",
            "E harfi Türkçedeki 'i' gibi (/iː/) okunur: Email, England.",
            "I harfi Türkçedeki 'ay' gibi (/aɪ/) okunur: iPhone, Ice."
          ]
        },
        {
          stepNumber: 2,
          title: "Kodlama İstemek ve Yanıt Vermek",
          content: "Birinden adını kodlamasını istemek veya kendi adınızı kodlamak için standart kalıplar kullanılır: 'How do you spell your name?' ve 'It is spelled E-M-R-E'.",
          formula: "How do you spell [Kelime/İsim]?  |  Could you spell that, please?",
          keyPhrase: "It is spelled: E-M-R-E  |  How do you spell your surname?",
          subPoints: [
            "Çift harf varsa 'double' denebilir: 'book' -> b-double o-k.",
            "Büyük harf için 'capital', küçük harf için 'lowercase' denir."
          ]
        },
        {
          stepNumber: 3,
          title: "Benzer Sessiz Harfler (G vs J, B vs P)",
          content: "G (/dʒiː/) ve J (/dʒeɪ/) ile B (/biː/) ve P (/piː/) çiftlerinin telaffuz farklarına dikkat edilmelidir.",
          keyPhrase: "G -> /dʒiː/ (cii)  |  J -> /dʒeɪ/ (cey)  |  B -> /biː/  |  P -> /piː/",
          subPoints: [
            "G as in 'Google', J as in 'Japan'.",
            "B sesinde dudaklar sıkı kapanır; P sesinde nefes patlaması yapılır."
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
      }
    },
    examples: [
      {
        id: 'ex-2-1',
        en: "Could you please spell your full name for the flight reservation?",
        tr: "Uçuş rezervasyonu için lütfen adınızı ve soyadınızı harf harf kodlar mısınız?",
        highlightedWords: ['Could you please spell', 'full name'],
        grammarCategory: 'Nezaketle Kodlama İsteme',
        contextNote: "Havalimanı, otel ve resmi kurumlarda standart soru kalıbı."
      },
      {
        id: 'ex-2-2',
        en: "How do you spell that word? It is spelled with a double 'o'.",
        tr: "O kelime nasıl yazılır? Çift 'o' ile yazılır.",
        highlightedWords: ['How do you spell', 'double'],
        grammarCategory: 'Yazım Sorma & Çift Harf',
        contextNote: "Bilinmeyen bir kelimenin yazılışını sorma ve yanıtlama."
      },
      {
        id: 'ex-2-3',
        en: "My email address begins with capital 'J' and ends with dot com.",
        tr: "E-posta adresim büyük 'J' ile başlar ve nokta com ile biter.",
        highlightedWords: ['capital', 'begins with'],
        grammarCategory: 'Harf Niteleme (Büyük/Küçük)',
        contextNote: "E-posta ve şifre kodlamada büyük harf belirtme."
      }
    ],
    vocabulary: [
      {
        id: 'v-2-1',
        word: 'Spell',
        phonetic: '/spel/',
        partOfSpeech: 'verb',
        meaningTr: 'Harf harf kodlamak, hecelemek',
        exampleSentence: 'Could you spell your surname, please?'
      },
      {
        id: 'v-2-2',
        word: 'Alphabet',
        phonetic: '/ˈæl.fə.bet/',
        partOfSpeech: 'noun',
        meaningTr: 'Alfabe',
        exampleSentence: 'The English alphabet has twenty-six letters.'
      },
      {
        id: 'v-2-3',
        word: 'Vowel',
        phonetic: '/vaʊəl/',
        partOfSpeech: 'noun',
        meaningTr: 'Sesli harf (ünlü)',
        exampleSentence: 'A, E, I, O, and U are vowels in English.'
      },
      {
        id: 'v-2-4',
        word: 'Consonant',
        phonetic: '/ˈkɒn.sə.nənt/',
        partOfSpeech: 'noun',
        meaningTr: 'Sessiz harf (ünsüz)',
        exampleSentence: 'Most letters in the alphabet are consonants.'
      }
    ],
    exercises: [
      {
        id: 'q-2-1',
        type: 'multiple-choice',
        prompt: "Aşağıdaki cümlede kodlama istemek için boşluğa en uygun fiili seçin:",
        sentence: "Excuse me, could you please ___ your last name for the hotel system?",
        options: ['spell', 'speak', 'talk', 'listen'],
        correctAnswer: 'spell',
        hint: "Adı harf harf söylemek anlamındaki fiil 'spell'dir.",
        explanation: "'Could you please spell your last name' ifadesi doğru kalıptır; harf harf kodlamayı ifade eder."
      },
      {
        id: 'q-2-2',
        type: 'fill-blank',
        prompt: "Harf kodlama sorusundaki eksik kelimeyi yazın (küçük harfle):",
        sentence: "How do you ___ your first name?",
        correctAnswer: 'spell',
        hint: "'s-p-e-l-l' fiili.",
        explanation: "'How do you spell your first name?' standart soru kalıbıdır."
      },
      {
        id: 'q-2-3',
        type: 'multiple-choice',
        prompt: "İngilizcede 'E' harfinin alfabedeki telaffuzu hangisidir?",
        options: [
          '/iː/ (ii)',
          '/e/ (e)',
          '/aɪ/ (ay)',
          '/eɪ/ (ey)'
        ],
        correctAnswer: '/iː/ (ii)',
        hint: "Email kelimesinin ilk harfini düşünün.",
        explanation: "'E' harfi İngilizce alfabede /iː/ (ii) olarak okunur. /eɪ/ ise 'A' harfidir."
      }
    ],
    sentenceBuilderTask: {
      id: 'sb-2',
      promptTr: "Lütfen adınızı benim için harf harf kodlar mısınız?",
      targetEn: "Could you please spell your name for me",
      availableWords: [
        'Could', 'you', 'please', 'spell', 'your', 'name', 'for', 'me',
        'can', 'is', 'what'
      ],
      explanation: "Nezaket kipi 'Could you please', ardından ana fiil 'spell', nesne 'your name' ve edat öbeği 'for me' sıralanır."
    },
    summaryTakeaways: [
      "İngilizce harf kodlarken harflerin alfabedeki isimleri telaffuz edilir.",
      "En kritik sesli harfler: A = /eɪ/, E = /iː/, I = /aɪ/.",
      "'Could you spell that, please?' ve 'How do you spell your name?' temel soru kalıplarıdır."
    ]
  },

  3: {
    id: 3,
    code: 'A1-03',
    level: 'A1',
    moduleName: 'Tanışma, Alfabe ve Temel İletişim',
    title: 'Sayılar (1-100), Yaş ve Telefon Numarası',
    learningObjective: "1-100 arası sayıları, yaş bildirmeyi ('I am 25 years old') ve telefon numarasını tek tek rakamlarla telaffuz ederek paylaşabilmek.",
    estimatedMinutes: 12,
    xpReward: 50,
    teacherLecture: {
      introduction: "Sayılar, yaş ve telefon numarası günlük hayatın vazgeçilmez temel yapı taşlarıdır. Yaşımızı söylerken Türkçeden farklı olarak 'have' değil 'To Be' fiilini kullanırız. Telefon numaralarında ise rakamları ikişer ikişer değil, tek tek telaffuz ederiz.",
      coreConcept: {
        title: "Sayılar, Yaş ve Telefon Numarası Mantığı",
        explanation: "Türkçede '25 yaşındayım' denir; İngilizcede ise yaş bir sahiplik değil durumdur ve 'To Be' fiili ile ifade edilir ('I am 25 years old'). Telefon numaraları ise tek tek rakamlar halinde okunur (0 için 'zero' veya 'oh' denir).",
        whyItMatters: "Alışverişte fiyat sormak, yaşını belirtmek ve telefon numarası alıp vermek günlük hayatta her gün yapılan temel iletişim eylemleridir.",
      },
      breakdownSteps: [
        {
          stepNumber: 1,
          title: "1-100 Sayı Mantığı ve -teen vs -ty Vurgusu",
          content: "13-19 arası sayılar '-teen' ekiyle biter ve vurgu sonda olur: thirteen, fourteen. 20-90 arası onlar basamakları '-ty' ile biter ve vurgu başta olur: thirty, forty.",
          keyPhrase: "thirteen /θɜːˈtiːn/ vs thirty /ˈθɜː.ti/  |  fifteen vs fifty",
          formula: "[Onlar Basamağı] + '-' + [Birler Basamağı] (Örn: twenty-five, forty-eight)"
        },
        {
          stepNumber: 2,
          title: "Yaş Sorma ve Söyleme (To Be Kuralı)",
          content: "İngilizcede yaş belirtirken 'have' KULLANILMAZ; daima 'To Be' fiili kullanılır. 'How old are you?' sorusuna 'I am [sayı] years old' denir.",
          formula: "I am [Sayı] years old.  |  She is [Sayı].",
          keyPhrase: "How old are you? - I am twenty-five years old."
        },
        {
          stepNumber: 3,
          title: "Telefon Numarası Paylaşma",
          content: "Telefon numaraları rakam rakam tek tek okunur. Çift rakamlarda 'double' kullanılabilir. 0 için 'zero' veya 'oh' denir.",
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
      }
    },
    examples: [
      {
        id: 'ex-3-1',
        en: "I am twenty-five years old and my office is on the eighth floor.",
        tr: "Yirmi beş yaşındayım ve ofisim sekizinci kattadır.",
        highlightedWords: ['twenty-five years old', 'eighth floor'],
        grammarCategory: 'Yaş ve Sıra Sayısı',
        contextNote: "Kendinden bahsederken yaş ve konum bildirimi."
      },
      {
        id: 'ex-3-2',
        en: "What is your mobile phone number? It is zero five four one.",
        tr: "Cep telefonu numaranız nedir? Sıfır beş dört bir...",
        highlightedWords: ['mobile phone number', 'zero five'],
        grammarCategory: 'İletişim Bilgisi',
        contextNote: "Telefon numarası isteme ve yanıtlama."
      },
      {
        id: 'ex-3-3',
        en: "There are forty-eight students in our English conversation class.",
        tr: "İngilizce konuşma sınıfımızda kırk sekiz öğrenci var.",
        highlightedWords: ['forty-eight', 'There are'],
        grammarCategory: 'Miktar ve Sayı',
        contextNote: "Sınıf mevcudu veya miktar belirtme."
      }
    ],
    vocabulary: [
      {
        id: 'v-3-1',
        word: 'Twenty',
        phonetic: '/ˈtwen.ti/',
        partOfSpeech: 'noun',
        meaningTr: 'Yirmi',
        exampleSentence: 'She has twenty books.'
      },
      {
        id: 'v-3-2',
        word: 'Thirty',
        phonetic: '/ˈθɜː.ti/',
        partOfSpeech: 'noun',
        meaningTr: 'Otuz',
        exampleSentence: 'My sister is thirty years old.'
      },
      {
        id: 'v-3-3',
        word: 'Fifty',
        phonetic: '/ˈfɪf.ti/',
        partOfSpeech: 'noun',
        meaningTr: 'Elli',
        exampleSentence: 'The speed limit is fifty.'
      },
      {
        id: 'v-3-4',
        word: 'Number',
        phonetic: '/ˈnʌm.bər/',
        partOfSpeech: 'noun',
        meaningTr: 'Numara, sayı',
        exampleSentence: 'What is your room number?'
      }
    ],
    exercises: [
      {
        id: 'q-3-1',
        type: 'multiple-choice',
        prompt: "Aşağıdaki yaş cümlesinde boşluğa en uygun yardımcı fiili seçin:",
        sentence: "My brother ___ twenty-eight years old.",
        options: ['is', 'has', 'have', 'are'],
        correctAnswer: 'is',
        hint: "'My brother' tekil üçüncü şahıstır (He) ve yaş için To Be fiili kullanılır.",
        explanation: "Üçüncü tekil şahıslarda yaş için 'is' kullanılır: 'My brother is 28 years old'."
      },
      {
        id: 'q-3-2',
        type: 'multiple-choice',
        prompt: "Hangisi doğru bir yaş bildirme cümlesidir?",
        options: [
          'She is thirty years old.',
          'She has thirty years old.',
          'She is thirty years.',
          'She got thirty years.'
        ],
        correctAnswer: 'She is thirty years old.',
        hint: "İngilizcede yaş için 'is + sayı + years old' kalıbı kullanılır.",
        explanation: "'She is thirty years old' tam ve kusursuz kalıptır."
      }
    ],
    sentenceBuilderTask: {
      id: 'sb-3',
      promptTr: "Ben yirmi beş yaşındayım ve Londra'da yaşıyorum.",
      targetEn: "I am twenty five years old and live in London",
      availableWords: [
        'I', 'am', 'twenty', 'five', 'years', 'old', 'and', 'live', 'in', 'London',
        'have', 'is', 'at'
      ],
      explanation: "Özne 'I' + 'am twenty five years old' + bağlaç 'and' + fiil 'live in London'."
    },
    summaryTakeaways: [
      "Yaş daima 'To Be' (am, is, are) ile söylenir, asla 'have' denmez.",
      "13-19 arası '-teen' ile biter; onlar basamakları '-ty' ile biter.",
      "Telefon numaraları tek tek rakamlar halinde okunur."
    ]
  },

  11: {
    id: 11,
    code: 'A1-01',
    level: 'A1',
    moduleName: 'Durum Cümleleri ve Varlık Bildirimi',
    title: "To Be (Am / Is / Are) — Olmak Fiili ve Temel Tanımlamalar",
    learningObjective: "İngilizce'de isim, sıfat ve konum belirten temel durum cümlelerini 'am, is, are' kullanarak hatasız kurabilmek.",
    estimatedMinutes: 12,
    xpReward: 50,
    teacherLecture: {
      introduction: "İngilizce öğrenirken karşımıza çıkan en hayati yapı 'To Be' fiilidir. Türkçede 'Ben öğretmen-im', 'Hava soğuk-tur' gibi eklerle yaptığımız durum bildirimleri, İngilizcede ayrı bir fiil olan 'am / is / are' ile kurulur. Cümlede hareket bildiren bir eylem (koşmak, yemek, gitmek) yoksa; kim olduğumuzu, nasıl olduğumuzu veya nerede olduğumuzu anlatmak için 'To Be'ye muhtacız.",
      coreConcept: {
        title: "'To Be' Fiilinin Temel Mantığı Nedir?",
        explanation: "İngilizcede her tam cümlenin mutlak surette bir yükleme (fiile) ihtiyacı vardır. Türkçe 'Ben yorgunum' derken yüklemimiz 'yorgun' sıfatına eklenen '-um' şahıs ekidir. İngilizce ise 'I tired' diyemez; özne ile sıfat arasına bir köprü koymak zorundadır: 'I am tired'. İşte bu köprü 'To Be' fiilidir.",
        whyItMatters: "Bu fiil yalnızca A1 seviyesinde değil; ileride göreceğimiz Şimdiki Zaman (Continuous tenses), Edilgen Çatı (Passive Voice) ve Şart Cümlelerinde de temel yapı taşı olarak karşınıza çıkacaktır.",
      },
      breakdownSteps: [
        {
          stepNumber: 1,
          title: "Öznelere Göre Şahıs Eşleşmeleri",
          content: "İngilizce zamirler üç farklı 'To Be' biçimiyle eşleşir. Bu kural istisnasız ezberlenmelidir:",
          keyPhrase: "I → AM  |  He / She / It → IS  |  We / You / They → ARE",
          subPoints: [
            "Tekil şahıslarda (He, She, It veya 'My father', 'The cat') daima IS kullanılır.",
            "Çoğul şahıslarda (We, You, They veya 'Tom and Lisa') daima ARE kullanılır.",
            "Birinci tekil şahısta (I) ise sadece AM kullanılır."
          ]
        },
        {
          stepNumber: 2,
          title: "Olumsuz Cümle Oluşturma Formülü",
          content: "Olumsuzluk bildirmek için 'am, is, are' yapısının hemen ardına 'NOT' kelimesi eklenir. Günlük konuşmada genellikle kısaltmalar tercih edilir.",
          formula: "Özne + am / is / are + NOT + (İsim / Sıfat / Yer)",
          keyPhrase: "is not = isn't  |  are not = aren't  |  I am not = I'm not",
          subPoints: [
            "He is not ready → He isn't ready. (O hazır değil.)",
            "They are not at home → They aren't at home. (Onlar evde değiller.)"
          ]
        },
        {
          stepNumber: 3,
          title: "Soru Cümlesi Kurma (Yer Değiştirme Mantığı)",
          content: "Soru sormak istediğimizde Türkçedeki gibi '-mı/-mi' eki eklemek yerine, 'am / is / are' fiilini cümlenin en başına, yani öznenin önüne taşırız.",
          formula: "Am / Is / Are + Özne + (İsim / Sıfat / Yer) ?",
          keyPhrase: "You are a doctor → Are you a doctor? (Doktor musun?)",
          subPoints: [
            "Kısa Cevaplar: 'Yes, I am.' veya 'No, I'm not.'",
            "Üçüncü şahıs: 'Is she your sister?' → 'Yes, she is.' / 'No, she isn't.'"
          ]
        }
      ],
      ruleCards: [
        {
          ruleTitle: "Temel Kural: Sıfatlar ve İsimlerle Kullanım",
          formula: "Subject + am/is/are + [Adjective / Noun / Place]",
          explanation: "To Be fiilinden sonra asla yalın bir başka fiil (run, sleep, study) gelemez. Ya bir meslek/isim (a teacher), ya bir sıfat (happy, cold) ya da bir konum (in Istanbul) gelmelidir.",
          exampleSnippet: "She is an engineer. / We are very happy today. / The book is on the table.",
          tipNote: "Meslek söylerken 'a / an' belgisiz tanımlığını asla unutmayın: 'I am teacher' YANLIŞ, 'I am a teacher' DOĞRU."
        },
        {
          ruleTitle: "Sık Yapılan Kritik Hata: Fiil Karmaşası",
          explanation: "Öğrencilerin en çok yaptığı hata, eylem fiilleriyle 'am/is/are'ı aynı anda kullanmaktır.",
          cautionNote: "'I am go to school' DEMEYİN! Cümlede 'go' eylemi varsa To Be kullanılmaz: 'I go to school' (Geniş Zaman). To Be sadece durum ve kimlik anlatır.",
          exampleSnippet: "Yanlış: 'I am agree with you.' ❌  →  Doğru: 'I agree with you.' ✅"
        }
      ],
      quickCheck: {
        question: "Aşağıdaki cümlelerden hangisi dilbilgisi kurallarına göre TAMAMEN DOĞRUDUR?",
        options: [
          "My brother and I is students.",
          "Sarah is not ready for the exam yet.",
          "They am very tired after work.",
          "I am work at a software company."
        ],
        correctIndex: 1,
        explanation: "'Sarah is not ready...' cümlesinde tekil 3. şahıs (Sarah) ile 'is' doğru eşleşmiş ve olumsuzluk 'not' ile düzgün kurulmuştur. 'My brother and I' çoğul (we) olduğu için 'are' gerektirir."
      }
    },
    examples: [
      {
        id: 'ex-11-1',
        en: "I am confident about the new project results.",
        tr: "Yeni proje sonuçları konusunda kendimden eminim.",
        highlightedWords: ['am', 'confident'],
        grammarCategory: 'Sıfat ile durum bildirimi',
        contextNote: "'confident' bir sıfattır, bu nedenle 'I' öznesiyle 'am' kullanılmıştır."
      },
      {
        id: 'ex-11-2',
        en: "David is not at the office right now; he is at home.",
        tr: "David şu anda ofiste değil; evde.",
        highlightedWords: ['is not', 'is'],
        grammarCategory: 'Konum bildirimi & Olumsuzluk',
        contextNote: "Mekan ve bulunma durumu bildirirken 'at the office' öncesinde 'is' yer alır."
      },
      {
        id: 'ex-11-3',
        en: "Are your colleagues ready for the annual presentation?",
        tr: "İş arkadaşların yıllık sunum için hazırlar mı?",
        highlightedWords: ['Are', 'ready'],
        grammarCategory: 'Soru cümlesi',
        contextNote: "'your colleagues' çoğul olduğu için soru 'Are' ile başlar."
      },
      {
        id: 'ex-11-4',
        en: "It is extremely important to practice speaking every single day.",
        tr: "Her gün konuşma pratiği yapmak son derece önemlidir.",
        highlightedWords: ['It is', 'important'],
        grammarCategory: 'Genel durum ve önem tespiti',
        contextNote: "Durumsal tespitlerde cansız/genel özne olarak 'It is' kalıbı kullanılır."
      }
    ],
    vocabulary: [
      {
        id: 'v-11-1',
        word: 'Confident',
        phonetic: '/ˈkɑːn.fə.dənt/',
        partOfSpeech: 'adjective',
        meaningTr: 'Kendinden emin, özgüvenli',
        exampleSentence: 'She feels confident about her English interview.'
      },
      {
        id: 'v-11-2',
        word: 'Colleague',
        phonetic: '/ˈkɑː.liːɡ/',
        partOfSpeech: 'noun',
        meaningTr: 'İş arkadaşı, meslektaş',
        exampleSentence: 'My colleagues are very supportive and helpful.'
      },
      {
        id: 'v-11-3',
        word: 'Available',
        phonetic: '/əˈveɪ.lə.bəl/',
        partOfSpeech: 'adjective',
        meaningTr: 'Müsait, uygun, erişilebilir',
        exampleSentence: 'The manager is not available at the moment.'
      },
      {
        id: 'v-11-4',
        word: 'Exhausted',
        phonetic: '/ɪɡˈzɑː.stɪd/',
        partOfSpeech: 'adjective',
        meaningTr: 'Aşırı yorgun, bitkin',
        exampleSentence: 'We are exhausted after traveling for ten hours.'
      }
    ],
    exercises: [
      {
        id: 'q-11-1',
        type: 'multiple-choice',
        prompt: "Boşluğa en uygun 'To Be' yardımcı fiilini seçin:",
        sentence: "Alex and Emma ___ very excited about their upcoming trip to London.",
        options: ['am', 'is', 'are', 'be'],
        correctAnswer: 'are',
        hint: "'Alex and Emma' iki kişi olduğu için çoğul (They) öznesi olarak düşünülmelidir.",
        explanation: "İki kişi çoğul özne (They) oluşturur; dolayısıyla 'are' doğru yanıttır."
      },
      {
        id: 'q-11-2',
        type: 'fill-blank',
        prompt: "Aşağıdaki soru cümlesini tamamlamak için uygun fiili yazın (küçük harfle):",
        sentence: "___ your father an architect or a civil engineer?",
        correctAnswer: 'is',
        hint: "'your father' tekil bir erkek şahıstır (He).",
        explanation: "'your father' üçüncü tekil şahıs (He) olduğu için soru 'Is' ile başlar."
      },
      {
        id: 'q-11-3',
        type: 'multiple-choice',
        prompt: "Aşağıdaki hatalı cümlenin düzeltilmiş hali hangisidir?",
        sentence: "'I am have 28 years old.' (Hatalı)",
        options: [
          'I am 28 years old.',
          'I have 28 years.',
          'I is 28 years old.',
          'I got 28 years old.'
        ],
        correctAnswer: 'I am 28 years old.',
        hint: "İngilizcede yaş belirtirken 'have' kullanılmaz; 'To Be' kullanılır.",
        explanation: "İngilizcede yaş sahip olunan bir şey değil, bulunulan durumdur. Bu yüzden 'I am 28 years old' denir."
      }
    ],
    sentenceBuilderTask: {
      id: 'sb-11',
      promptTr: "Biz bu akşam toplantı için hazır değiliz.",
      targetEn: "We are not ready for the meeting this evening",
      availableWords: [
        'We', 'are', 'not', 'ready', 'for', 'the', 'meeting', 'this', 'evening',
        'is', 'am', 'do'
      ],
      explanation: "'We' öznesi 'are not' gerektirir. Devamında 'ready' (hazır), ardından 'for the meeting' (toplantı için) ve zaman zarfı 'this evening' gelir."
    },
    summaryTakeaways: [
      "'To Be' durum, kimlik, meslek, yaş ve konum anlatır; hareket eylemleriyle karıştırılmamalıdır.",
      "Özne uyumu: I am | He, She, It is | We, You, They are.",
      "Olumsuzluk için 'not' eklenir (isn't, aren't); soru için fiil başa alınır.",
      "Mesleklerde tekil öznelerle 'a / an' kullanımı zorunludur (He is an engineer)."
    ]
  },

  21: {
    id: 21,
    code: 'A1-01',
    level: 'A1',
    moduleName: 'Geniş Zaman ve Günlük Rutinler',
    title: "Geniş Zaman (Present Simple): Olumlu Cümleler",
    learningObjective: "Alışkanlıkları, düzenli yapılan aktiviteleri ve genel gerçekleri Present Simple kalıbında -s takısı kurallarına dikkat ederek ifade edebilmek.",
    estimatedMinutes: 15,
    xpReward: 50,
    teacherLecture: {
      introduction: "Present Simple (Geniş Zaman), her gün tekrarladığınız rutinleri, hobilerinizi ve değişmeyen doğa kanunlarını anlatırken başvurduğunuz zamandır. 'Her sabah 7'de uyanırım', 'Güneş doğudan doğar' gibi ifadelerin tamamı bu zaman dilimiyle kurulur.",
      coreConcept: {
        title: "Present Simple Ne Zaman Kullanılır?",
        explanation: "Bir eylemin 'şu anda' yapılıyor olması gerekmez; hayatın genelinde tekrarlanan, periyodik bir alışkanlık olması yeterlidir. Türkçedeki '-r, -er, -ar' ekine karşılık gelir.",
        whyItMatters: "İş mülakatlarında 'Bize bir iş gününüzü anlatın' sorusundan arkadaş sohbetlerine kadar en çok konuştuğumuz zaman dilimidir."
      },
      breakdownSteps: [
        {
          stepNumber: 1,
          title: "Olumlu Cümle ve 3. Tekil Şahıs Kuralı (-s takısı)",
          content: "I, You, We, They öznelerinde fiil hiç değişmeden yalın haliyle kalır. Ancak He, She, It öznelerinde fiilin sonuna '-s' veya '-es' takısı gelir.",
          keyPhrase: "I work → He works  |  We live → She lives  |  They watch → He watches",
          formula: "Subject + Verb(s/es) + Object",
          subPoints: [
            "-ch, -sh, -ss, -x, -o ile biten fiillere '-es' gelir: go → goes, watch → watches.",
            "Sessiz harf + y ile bitenlerde 'y' düşer, '-ies' gelir: study → studies."
          ]
        },
        {
          stepNumber: 2,
          title: "Olumsuz Cümle ve Yardımcı Fiiller: Don't & Doesn't",
          content: "Olumsuz cümle kurarken 'Do not (don't)' veya 'Does not (doesn't)' yardımcı fiilleri devreye girer. Çok kritik: 'doesn't' geldiğinde ana fiildeki '-s' takısı düşer!",
          formula: "Subject + don't / doesn't + Verb (Yalın) + Object",
          keyPhrase: "He doesn't like coffee (He doesn't likes YANLIŞTIR!)"
        },
        {
          stepNumber: 3,
          title: "Soru Cümleleri: Do & Does",
          content: "Soru sorarken 'Do' veya 'Does' cümlenin en başına gelir. Fiil her zaman yalın halde kalır.",
          formula: "Do / Does + Subject + Verb (Yalın) ...?",
          keyPhrase: "Do you speak English?  |  Does she work on weekends?"
        }
      ],
      ruleCards: [
        {
          ruleTitle: "Altın Kural: -s Takısı Sadece Olumlu Cümlede Kalır",
          formula: "He plays tennis. (Olumlu) / He does NOT play tennis. (Olumsuz) / Does he play tennis? (Soru)",
          explanation: "'Does' veya 'doesn't' yardımcı fiili zaten bünyesinde o -s takısını barındırır. Bu yüzden ana fiile bir daha -s eklemek İngilizcede çifte kural hatası sayılır.",
          cautionNote: "'She doesn't works' yazımı en yaygın sınav ve konuşma hatasıdır."
        },
        {
          ruleTitle: "Sıklık Zarfları (Frequency Adverbs) Konumu",
          explanation: "Always, usually, often, sometimes, rarely, never gibi sıklık bildiren kelimeler ana fiilden hemen ÖNCE, 'To Be' fiilinden ise SONRA gelir.",
          exampleSnippet: "I always drink water. / She is always punctual."
        }
      ],
      quickCheck: {
        question: "Aşağıdaki cümlelerden hangisi dilbilgisel olarak DOĞRUDUR?",
        options: [
          "Mark doesn't drinks tea in the morning.",
          "Mark don't drink tea in the morning.",
          "Mark doesn't drink tea in the morning.",
          "Mark not drink tea in the morning."
        ],
        correctIndex: 2,
        explanation: "Mark (He) için 'doesn't' kullanılır ve ana fiil yalın kalır: 'doesn't drink'."
      }
    },
    examples: [
      {
        id: 'ex-21-1',
        en: "Our team conducts a stand-up meeting every morning at nine.",
        tr: "Ekibimiz her sabah dokuzda ayaküstü bir toplantı düzenler.",
        highlightedWords: ['conducts', 'every morning'],
        grammarCategory: 'Rutin eylem & 3. tekil şahıs',
        contextNote: "'Our team' tekil bir topluluk adı olduğu için 'conduct' fiili '-s' almıştır."
      },
      {
        id: 'ex-21-2',
        en: "She doesn't drive to work because the subway is faster.",
        tr: "Metro daha hızlı olduğu için işe arabayla gitmez.",
        highlightedWords: ["doesn't drive", 'because'],
        grammarCategory: 'Olumsuz geniş zaman',
        contextNote: "'doesn't' sonrasında 'drive' yalın kullanılmıştır."
      },
      {
        id: 'ex-21-3',
        en: "Do you usually check your work emails on Saturday?",
        tr: "Cumartesi günleri genellikle iş e-postalarını kontrol eder misin?",
        highlightedWords: ['Do you', 'usually', 'check'],
        grammarCategory: 'Geniş zaman soru & sıklık zarfı',
        contextNote: "'usually' sıklık zarfı 'check' fiilinden hemen önce gelmiştir."
      }
    ],
    vocabulary: [
      {
        id: 'v-21-1',
        word: 'Conduct',
        phonetic: '/kənˈdʌkt/',
        partOfSpeech: 'verb',
        meaningTr: 'Yürütmek, düzenlemek, icra etmek',
        exampleSentence: 'They conduct research on artificial intelligence.'
      },
      {
        id: 'v-21-2',
        word: 'Usually',
        phonetic: '/ˈjuː.ʒu.ə.li/',
        partOfSpeech: 'adverb',
        meaningTr: 'Genellikle, çoğunlukla',
        exampleSentence: 'I usually have lunch at noon.'
      },
      {
        id: 'v-21-3',
        word: 'Punctual',
        phonetic: '/ˈpʌŋk.tʃu.əl/',
        partOfSpeech: 'adjective',
        meaningTr: 'Dakik, vaktinde gelen',
        exampleSentence: 'He is very punctual and never arrives late.'
      }
    ],
    exercises: [
      {
        id: 'q-21-1',
        type: 'multiple-choice',
        prompt: "Boşluğu doğru fiil çekimi ile doldurun:",
        sentence: "My sister ___ software engineering at university and speaks three languages.",
        options: ['study', 'studies', 'studying', 'studys'],
        correctAnswer: 'studies',
        hint: "'study' fiilinde sessiz harf + y olduğundan 'y' düşer ve '-ies' gelir.",
        explanation: "'My sister' (She) öznesinde 'study' fiili 'studies' şeklini alır."
      },
      {
        id: 'q-21-2',
        type: 'multiple-choice',
        prompt: "Hangisi doğru bir soru cümlesidir?",
        options: [
          'Does your manager approve the budget?',
          'Do your manager approve the budget?',
          'Does your manager approves the budget?',
          'Is your manager approve the budget?'
        ],
        correctAnswer: 'Does your manager approve the budget?',
        hint: "'your manager' tekil (He/She) olduğundan 'Does' ile başlar ve fiil yalın kalır.",
        explanation: "'Does' kullanılırken fiil sonuna '-s' almaz: 'Does ... approve'."
      }
    ],
    sentenceBuilderTask: {
      id: 'sb-21',
      promptTr: "O (kadın) haftasonları nadiren televizyon izler.",
      targetEn: "She rarely watches television on weekends",
      availableWords: [
        'She', 'rarely', 'watches', 'television', 'on', 'weekends',
        'watch', 'does', 'is', 'at'
      ],
      explanation: "'She' öznesi sıklık zarfı 'rarely' ile devam eder, ardından 'watches' (-es takısıyla) ve 'on weekends' gelir."
    },
    summaryTakeaways: [
      "Present Simple alışkanlıklar, rutinler ve genel doğrular için kullanılır.",
      "He / She / It öznelerinde olumlu cümlede fiile -s/-es/-ies takısı eklenir.",
      "Olumsuzda 'don't / doesn't', soruda 'Do / Does' kullanılır ve ana fiil yalın kalır.",
      "Sıklık zarfları (always, usually, rarely) fiilden hemen önce yer alır."
    ]
  }
};

// Generates 488 structured curriculum modules across all CEFR levels
export function getAllCurriculumLessons(): {
  id: number;
  code: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  title: string;
  moduleName: string;
  learningObjective: string;
  estimatedMinutes: number;
  xpReward: number;
  isDetailed: boolean;
  lessonType?: LessonCategoryType;
  prerequisiteLessonIds?: number[];
}[] {
  const fullCurriculum = getFullCurriculumLessons();
  return fullCurriculum.map((l) => ({
    id: l.id,
    code: l.code,
    level: l.level,
    title: l.title,
    moduleName: l.moduleName,
    learningObjective: l.learningObjectives[0] || l.description,
    estimatedMinutes: l.estimatedDuration,
    xpReward: l.xpReward,
    isDetailed: true,
    lessonType: l.lessonType,
    prerequisiteLessonIds: l.prerequisiteLessonIds,
  }));
}

// Fetch complete lesson data by ID; dynamically constructs full interactive pedagogical data from authoritative registered blueprints
export function getLessonById(id: number): LessonData {

  const fullCurriculum = getFullCurriculumLessons();
  const curriculumMatch = fullCurriculum.find((l) => l.id === id);
  const fallback = fullCurriculum[0];
  const lessonDef = curriculumMatch || fallback;

  return generatePedagogicalMasterclass({
    id: lessonDef.id,
    code: lessonDef.code,
    level: lessonDef.level,
    moduleName: lessonDef.moduleName,
    title: lessonDef.title,
    learningObjective: lessonDef.learningObjectives[0] || lessonDef.description,
    estimatedMinutes: lessonDef.estimatedDuration,
    xpReward: lessonDef.xpReward,
  });
}

