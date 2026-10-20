// LinguAAI Pedagogical Content — Level A1: Module 8 (Lessons 71–80)
// Yiyecek, İçecek ve Miktar Belirteçleri: Countable & Uncountable, Quantifiers, Ordering Food
// 100% bespoke, CEFR A1 compliant, zero generic templates.

import { TopicBlueprint } from '../../pedagogicalEngine';

export const module8_lessons_71_80: Record<number, TopicBlueprint> = {
  "71": {
    "skillType": "vocabulary",
    "concreteCompetency": "A1 standardında İngilizce isimleri Sayılabilen (Countable) ve Sayılamayan (Uncountable) olarak ayırt edebilmek; sayılamayan isimlerin (su, süt, pirinç, para, bilgi, ekmek) çoğul eki (-s) alamayacağını ve daima tekil fiil gerektirdiğini hatasız uygulamak.",
    "whyItMatters": "Sipariş verirken, markette alışveriş yaparken veya miktar belirtirken isimlerin sayılabilir olup olmadığını bilmek doğru artikel (a/an/some) ve fiil seçiminin temelidir.",
    "linguisticLogic": "İngilizcede isimler iki temel varlık felsefesine dayanır: 1) SAYILABİLEN İSİMLER (Countable): Bireysel sınırları olan, tane tane sayılabilen nesnelerdir. Tekil halleri 'a/an' alabilir (an apple, a car), çoğul halleri '-s' takısı alır (three apples, five cars). 2) SAYILAMAYAN İSİMLER (Uncountable): Sıvılar (water, milk, oil), taneli kütleler (rice, sugar, salt), maddeler (bread, cheese, meat, butter), soyut kavramlar (information, advice, happiness) ve genel küme adları (money, luggage, furniture). Sayılamayan isimler ASLA -s takısı almaz (*waters, *moneys, *breads YANLIŞTIR!) ve önlerine doğrudan 'a/an' gelemez (*a water YANLIŞTIR!). Cümlede daima tekil yüklem (is/was) alırlar.",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Sayılabilen İsimlerin Doğası (Countable)",
        "content": "Tane olarak 1, 2, 3 diye sayabildiğiniz eşyalardır: a book (bir kitap) -> two books (iki kitap), an orange -> three oranges. Önlerine sayı gelebilir, çoğul yapılabilirler.",
        "formula": "a/an + Tekil İsim  <-->  Sayı + Çoğul İsim (-s)",
        "keyPhrase": "I have two apples and an orange on the table.",
        "subPoints": [
          "Çoğul olduklarında 'are' alırlar: 'The apples are fresh.'",
          "Tekilken tek başlarına yalın duramazlar, önlerine a/an veya the isterler."
        ],
        "rationale": "Sayılabilir nesnelerin sınırlarını ve artikel kurallarını pekiştirir."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Sayılamayan İsimlerin Doğası (Uncountable)",
        "content": "Sayılamayan varlıklar bir kütle, sıvı veya soyut kavramdır: water, coffee, bread, cheese, money, advice. Bu kelimelere ASLA '-s' takısı eklenemez ve önlerine tek başlarına 'a/an' konamaz.",
        "formula": "Sayılamayan İsim = Daima Tekil (*-s takısı YASAK)",
        "keyPhrase": "Water is essential for life. | Fresh bread smells delicious.",
        "subPoints": [
          "*two breads YANLIŞTIR -> two loaves of bread (iki somun ekmek) denir.",
          "*moneys YANLIŞTIR -> money daima tekildir."
        ],
        "rationale": "Türkçe düşünerek ekmek ve para gibi kelimeleri sayma yanılgısını önler."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: Ölçü ve Kap Sözcükleriyle Sayılabilir Kılma (Partitives)",
        "content": "Sayılamayan bir maddeyi sayılabilir kılmak için önüne kap veya ölçü birimi (partitive) konur: a bottle of water (bir şişe su), a cup of coffee (bir fincan kahve), a slice of bread (bir dilim ekmek), a piece of cheese (bir parça peynir). Sayılan şey su değil, şişedir!",
        "formula": "a [ölçü/kap] of + [Sayılamayan İsim]",
        "keyPhrase": "Two cups of tea, please. | Three slices of cheese.",
        "subPoints": [
          "Burada çoğul eki kap kelimesine gelir: one bottle -> two bottles of water.",
          "Sıvı kelimesi yine tekil kalır: bottles of water (water-s değil)."
        ],
        "rationale": "Sayılamayan maddeleri siparişte ve alışverişte ölçülebilir kılmayı öğretir."
      }
    ],
    "ruleCards": [
      {
        "ruleTitle": "Sayılamayan İsimlerde Tekil Fiil Kuralı",
        "formula": "Uncountable Noun + IS / WAS (Tekil Yüklem)",
        "explanation": "Sayılamayan isimler ne kadar büyük bir miktarı anlatırsa anlatsın dilbilgisel olarak TEKİL kabul edilir.",
        "exampleSnippet": "The milk is in the fridge. / Money is not everything.",
        "tipNote": "Sayılamayan gördün mü fiili 'is' yap!"
      },
      {
        "ruleTitle": "'Bread' ve 'Money' Türk Öğrenci Tuzağı",
        "formula": "bread (sayılamaz)  |  money (sayılamaz)",
        "explanation": "Türkçede 'iki ekmek', 'paralar' denir ancak İngilizcede 'bread' ve 'money' kesinlikle sayılamazdır.",
        "cautionNote": "*two breads demeyin; 'two loaves of bread' deyin."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "Can I have two breads, please?",
        "correctExample": "Can I have two loaves of bread, please? / Can I have some bread?",
        "rootCause": "Türkçe 'iki ekmek' alışkanlığını İngilizceye doğrudan aktarmak.",
        "memoryTip": "Ekmek sayılamaz; dilim (slice) veya somun (loaf) ile say: TWO LOAVES OF BREAD!"
      },
      {
        "wrongExample": "The informations are very useful.",
        "correctExample": "The information is very useful.",
        "rootCause": "'Information' kelimesine çoğul -s takısı eklemek ve çoğul fiil (are) kullanmak.",
        "memoryTip": "Information tekildir, sonuna -s almaz: The information IS useful!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Fırında Sabah Alışverişi",
      "description": "Müşteri fırıncıdan ekmek, peynir ve kruvasan satın alır.",
      "contextType": "daily",
      "dialogue": [
        {
          "speaker": "Baker",
          "textEn": "Good morning! What can I get for you today?",
          "textTr": "Günaydın! Bugün sizin için ne verebilirim?"
        },
        {
          "speaker": "Customer",
          "textEn": "Good morning! Could I have two loaves of sourdough bread and a piece of cheddar cheese, please?",
          "textTr": "Günaydın! İki somun ekşi mayalı ekmek ve bir parça çedar peyniri alabilir miyim lütfen?"
        },
        {
          "speaker": "Baker",
          "textEn": "Certainly! Would you also like some fresh croissants? They are straight from the oven.",
          "textTr": "Elbette! Taze kruvasan da ister misiniz? Fırından yeni çıktılar."
        },
        {
          "speaker": "Customer",
          "textEn": "Yes, I will take three croissants, please.",
          "textTr": "Evet, üç kruvasan alayım lütfen."
        }
      ],
      "culturalNote": "Fırında ekmek alırken 'two breads' yerine 'two loaves of bread' demek kibar ve standart İngilizcedir."
    },
    "contrastiveAnalysis": {
      "title": "Sayılabilirlik Mantığı: Türkçe vs İngilizce",
      "englishConcept": "Countable vs Uncountable (Katı Gramer Ayrımı)",
      "turkishDifference": "Türkçede 'çay ver', 'iki çay ver', 'bir su ver' şeklinde her şey kolayca sayılabilir. İngilizcede ise kap/ölçü kelimesi (cup of, bottle of) olmadan sayılamayan kelime doğrudan sayılamaz.",
      "directComparison": [
        {
          "context": "Sıvı siparişi",
          "en": "A glass of water.",
          "trMeaning": "Bir bardak su.",
          "commonErrorTr": "*A water.",
          "whyItMatters": "Ölçü kabı 'glass' zorunludur."
        }
      ]
    },
    "memoryHook": "KÜTLE vs TANE: Tane tane sayıyorsan -S alır (three apples), bardakta/kütlede ise TEKİL kalır (water is cold)!",
    "examples": [
      {
        "en": "Fresh milk is kept in the refrigerator to prevent spoiling.",
        "tr": "Taze süt bozulmasını önlemek için buzdolabında saklanır.",
        "highlightedWords": [
          "Fresh milk is kept"
        ],
        "grammarCategory": "Sayılamayan özne + tekil is",
        "contextNote": "Sıvı madde doğası.",
        "breakdownNote": "Milk (sayılamaz) + is (tekil fiil) + kept."
      },
      {
        "en": "She orders three cups of herbal tea and two blueberry muffins.",
        "tr": "Üç fincan bitki çayı ve iki yaban mersinli kek sipariş ediyor.",
        "highlightedWords": [
          "three cups of",
          "two blueberry muffins"
        ],
        "grammarCategory": "Partitive + Uncountable vs Countable",
        "contextNote": "Kafe siparişi.",
        "breakdownNote": "Three cups of herbal tea (ölçü çoğul, tea tekil) + two muffins (çoğul)."
      },
      {
        "en": "Can you give me some advice about my university application?",
        "tr": "Üniversite başvurum hakkında bana biraz tavsiye verebilir misiniz?",
        "highlightedWords": [
          "some advice"
        ],
        "grammarCategory": "advice (uncountable)",
        "contextNote": "Soyut kavram.",
        "breakdownNote": "Advice sayılamazdır; *an advice veya *advices denmez."
      }
    ],
    "vocabulary": [
      {
        "word": "Loaf",
        "phonetic": "/ləʊf/",
        "partOfSpeech": "noun",
        "meaningTr": "Somun (ekmek için, çoğulu: loaves)",
        "exampleSentence": "A loaf of bread."
      },
      {
        "word": "Advice",
        "phonetic": "/ədˈvaɪs/",
        "partOfSpeech": "noun",
        "meaningTr": "Tavsiye, öğüt (sayılamaz)",
        "exampleSentence": "Can you give me some advice?"
      },
      {
        "word": "Refrigerator",
        "phonetic": "/rɪˈfrɪdʒ.ər.eɪ.tər/",
        "partOfSpeech": "noun",
        "meaningTr": "Buzdolabı (kısaca fridge)",
        "exampleSentence": "The cheese is in the refrigerator."
      },
      {
        "word": "Partitive",
        "phonetic": "/ˈpɑː.tɪ.tɪv/",
        "partOfSpeech": "noun",
        "meaningTr": "Bölme/ölçü bildiren sözcük (cup of, slice of)",
        "exampleSentence": "Use partitives with uncountable nouns."
      }
    ],
    "quickCheck": {
      "question": "Aşağıdaki cümlelerden hangisi İngilizce dilbilgisi kurallarına göre KESİNLİKLE DOĞRUDUR?",
      "options": [
        "The advice you gave me yesterday was very helpful.",
        "The advices you gave me yesterday were very helpful.",
        "An advice you gave me yesterday was very helpful.",
        "The advice you gave me yesterday were very helpful."
      ],
      "correctIndex": 0,
      "explanation": "'Advice' sayılamaz bir isimdir; -s takısı almaz ve tekil yardımcı fiil ('was') alır."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa uygun ölçü ifadesini yerleştirin:",
      "sentence": "Would you like another ___ of pizza before I clear the table?",
      "options": [
        "slice",
        "bottle",
        "loaf",
        "cup"
      ],
      "correctAnswer": "slice",
      "hint": "Pizza, kek ve ekmek gibi yiyeceklerin tek bir porsiyonu hangi kelimeyle (dilim) ifade edilir?",
      "explanation": "Pizza dilimi için 'slice of pizza' kalıbı kullanılır."
    },
    "sentenceBuilder": {
      "promptTr": "Bize masaya iki şişe soğuk su getirebilir misiniz lütfen?",
      "targetEn": "Could you bring us two bottles of cold water please",
      "availableWords": [
        "Could",
        "you",
        "bring",
        "us",
        "two",
        "bottles",
        "of",
        "cold",
        "water",
        "please",
        "waters",
        "a",
        "bottle"
      ],
      "explanation": "Rica (Could you bring us) + ölçülü miktar (two bottles of cold water) + nezaket (please)."
    },
    "summaryTakeaways": [
      "Sayılabilen isimler tane ile sayılır, 'a/an' alabilir ve sonuna -s takısı takar.",
      "Sayılamayan isimler (water, bread, money, advice) ASLA -s takısı almaz ve tekil fiil alır.",
      "Sayılamayanları sayılabilir kılmak için kap/ölçü sözcükleri (cup of, slice of, bottle of) kullanılır.",
      "'Bread' ve 'money' kelimelerinin sayılamaz olduğunu unutmamak kritiktir."
    ]
  },
  "72": {
    "skillType": "grammar",
    "concreteCompetency": "A1 standardında tekil sayılabilen isimlerin önüne gelen belirsiz artikelleri (A / AN) yazılışlarına göre değil, ilk harfin SESLETİMİNE (fonetiğine) göre ('a university', 'an hour', 'an apple', 'a doctor') hatasız seçebilmek.",
    "whyItMatters": "İngilizcede artikeller kulağa hoş gelen bir ses akışı için vardır. 'A hour' veya 'an university' demek hem telaffuzu bozar hem de anında fark edilen bir temel hata oluşturur.",
    "linguisticLogic": "İngilizcede 'A' ve 'AN' belirteçleri yalnızca TEKİL SAYILABİLEN isimlerin önüne gelir ve 'herhangi bir' anlamına gelir. Altın kural: Seçim harfin YAZILIŞINA göre değil, SESLETİLDİĞİ İLK SESE göre yapılır! 1) 'AN' KURALI: Kelime sesli bir ünlü harfle (vowel sound: /æ/, /e/, /ɪ/, /ɒ/, /ʌ/, /aʊ/) başlıyorsa iki sesli harf çarpışmasın diye araya 'n' köprüsü girer: an apple, an elephant, an engineer. İstisna: 'Hour' (saat) kelimesinde 'h' okunmaz, sesli harfle başlar: AN HOUR! 2) 'A' KURALI: Kelime sessiz bir ünsüz harfle (consonant sound) başlıyorsa 'A' gelir: a car, a book, a teacher. İstisna: 'University' ve 'European' kelimeleri sesli harfle yazılsa bile '/juː/' (Y sessizi) ile okunur: A UNIVERSITY, A EUROPEAN CITY!",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Temel Kural (Sesli Ses vs Sessiz Ses)",
        "content": "Kural harfe değil kulağa bakar. Kelimenin ilk sesini telaffuz edin: Ünsüz sesle açılıyorsa 'A' (a cat, a dog, a pencil); ünlü sesle açılıyorsa 'AN' (an orange, an ice cream, an umbrella).",
        "formula": "A + Ünsüz Ses  <-->  AN + Ünlü Ses",
        "keyPhrase": "a doctor | an architect | a student | an actor",
        "subPoints": [
          "Amaç iki sesli harfin arka arkaya çarpışıp dili zorlamasını engellemektir.",
          "'a apple' derken boğaz tıkanır, 'an apple' derken akıcı kayar."
        ],
        "rationale": "Artikellerin fonetik varlık nedenini kavratır."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Okunmayan 'H' Tuzağı (Silent H)",
        "content": "'Hour' (saat), 'honest' (dürüst), 'honor' (onur) kelimelerinde baştaki 'H' harfi KESİNLİKLE OKUNMAZ! Kelime doğrudan sesli harfle (/aʊər/, /ˈɒn.ɪst/) başlar. Bu yüzden başlarına 'AN' gelir: 'an hour', 'an honest person'.",
        "formula": "Silent 'H' -> AN hour  |  AN honest man",
        "keyPhrase": "I will wait for an hour. | She is an honest manager.",
        "subPoints": [
          "Ancak 'H' okunuyorsa 'A' gelir: 'a house' (/haʊs/), 'a hotel', 'a hospital'.",
          "Tek kriter: H sesini duyuyor musun, duymuyor musun?"
        ],
        "rationale": "Sınavlarda en sık sorulan 'silent h' kuralını çözümler."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: 'U' ve 'EU' Harflerinin 'Y' Sesi Tuzağı (/juː/)",
        "content": "'University', 'uniform', 'unit', 'European' kelimeleri sesli harfle yazılır ancak telaffuzları Türkçedeki 'Y' sesi gibi (/j/) bir yarı ünsüzle başlar. Bu yüzden başlarına 'AN' değil, 'A' gelir: 'a university' (/ə juːnɪˈvɜːsəti/), 'a European country'.",
        "formula": "'U' okunurken /juː/ ise -> A university  |  /ʌ/ ise -> AN umbrella",
        "keyPhrase": "a university degree | a unique design | an umbrella",
        "subPoints": [
          "Umbrella'da 'u' harfi 'a' (/ʌ/) gibi okunur -> AN umbrella.",
          "University'de 'u' harfi 'yu' (/juː/) gibi okunur -> A university."
        ],
        "rationale": "Harf ile fonetik arasındaki ayrımı kalıcı kılar."
      }
    ],
    "ruleCards": [
      {
        "ruleTitle": "Fonetik Esas İlkesi",
        "formula": "Gözüne değil, kulağına güven!",
        "explanation": "A veya An seçimi kelimenin yazılışına değil, ağızdan çıkan ilk sesin ünlü mü ünsüz mü olduğuna bağlıdır.",
        "exampleSnippet": "an hour (h sessiz)  |  a university (u = /juː/)",
        "tipNote": "İlk sesi yüksek sesle oku, ona göre seç!"
      },
      {
        "ruleTitle": "Çoğul ve Sayılamayanlarda A/An Yasağı",
        "formula": "*a books (YANLIŞ)  |  *a water (YANLIŞ)",
        "explanation": "A ve An 'bir tane' demektir. Bu yüzden çoğul isimlerle veya sayılamayan isimlerle ASLA kullanılamaz.",
        "cautionNote": "Sadece tekil sayılabilen isimlerde kullanılır."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "I have been waiting here for a hour.",
        "correctExample": "I have been waiting here for an hour.",
        "rootCause": "'Hour' kelimesinin 'h' harfiyle yazıldığını görüp 'a' koymak.",
        "memoryTip": "Hour kelimesinde 'H' uyur, sesli başlar: AN HOUR!"
      },
      {
        "wrongExample": "She is studying at an university in London.",
        "correctExample": "She is studying at a university in London.",
        "rootCause": "'University' kelimesinin 'u' harfini sesli sanıp 'an' eklemek.",
        "memoryTip": "University 'Y' sesiyle açılır; ünsüzdür: A UNIVERSITY!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Uluslararası Başvuru Formunda Bilgi Girişi",
      "description": "Öğrenci danışmanı başvuru belgesindeki dilbilgisi hatalarını kontrol eder.",
      "contextType": "daily",
      "dialogue": [
        {
          "speaker": "Advisor",
          "textEn": "Look at your personal statement: you wrote 'I have an university degree'. That is a small mistake.",
          "textTr": "Kişisel beyanınıza bakın: 'I have an university degree' yazmışsınız. Bu küçük bir hata."
        },
        {
          "speaker": "Student",
          "textEn": "Really? But university starts with the vowel 'u'!",
          "textTr": "Gerçekten mi? Ama university sesli 'u' harfiyle başlıyor!"
        },
        {
          "speaker": "Advisor",
          "textEn": "Yes, but it sounds like /juː/, which is a consonant sound. So you must write 'a university degree'.",
          "textTr": "Evet ama ünsüz bir ses olan /juː/ gibi sesletiliyor. Bu yüzden 'a university degree' yazmalısınız."
        },
        {
          "speaker": "Student",
          "textEn": "I understand now! And is it 'an MBA'?",
          "textTr": "Şimdi anladım! Peki 'an MBA' mi yazılır?"
        },
        {
          "speaker": "Advisor",
          "textEn": "Yes! Because 'M' is pronounced /em/, starting with a vowel sound: an MBA!",
          "textTr": "Evet! Çünkü 'M' harfi /em/ diye sesli sesle başlar: an MBA!"
        }
      ],
      "culturalNote": "İngilizcede kısaltmaların (MBA, FBI, VIP) başına gelen artikel harfin okunuş sesine göre belirlenir."
    },
    "contrastiveAnalysis": {
      "title": "Bir Belirteci vs A / An",
      "englishConcept": "A (Ünsüz ses) vs AN (Ünlü ses)",
      "turkishDifference": "Türkçede 'bir' kelimesi her kelimenin önünde aynı kalır ('bir elma', 'bir araba', 'bir saat'). İngilizcede ise ses uyumu için 'a' veya 'an' seçimi zorunludur.",
      "directComparison": [
        {
          "context": "Ünlü ile başlayan",
          "en": "an orange",
          "trMeaning": "bir portakal",
          "commonErrorTr": "*a orange",
          "whyItMatters": "Sesli çarpışmasını engeller."
        },
        {
          "context": "Sessiz ile başlayan",
          "en": "a laptop",
          "trMeaning": "bir dizüstü bilgisayar",
          "commonErrorTr": "Sorunsuz eşleşir.",
          "whyItMatters": "Standart 'a' kuralı."
        }
      ]
    },
    "memoryHook": "A/AN KULAĞI: Kulağına 'A, E, I, O' sesi geliyorsa AN (an hour), 'Y veya sessiz' geliyorsa A (a university)!",
    "examples": [
      {
        "en": "It takes an hour and a half to reach the airport by express bus.",
        "tr": "Ekspres otobüsle havalimanına ulaşmak bir buçuk saat sürer.",
        "highlightedWords": [
          "an hour",
          "a half"
        ],
        "grammarCategory": "an hour (silent h) vs a half",
        "contextNote": "Süre bildirimi.",
        "breakdownNote": "An hour (sessiz h) + and + a half (okunan h)."
      },
      {
        "en": "He is an honest employee who always reports technical issues accurately.",
        "tr": "O, teknik sorunları her zaman doğru şekilde bildiren dürüst bir çalışandır.",
        "highlightedWords": [
          "an honest employee"
        ],
        "grammarCategory": "an honest (silent h)",
        "contextNote": "Karakter nitelemesi.",
        "breakdownNote": "An + honest (/ɒn.ɪst/) + employee."
      },
      {
        "en": "They are launching a unique mobile application for language learners.",
        "tr": "Dil öğrenenler için benzersiz bir mobil uygulama başlatıyorlar.",
        "highlightedWords": [
          "a unique"
        ],
        "grammarCategory": "a unique (/juːˈniːk/)",
        "contextNote": "Ürün tanıtımı.",
        "breakdownNote": "A + unique (y sesiyle başlar) + mobile application."
      }
    ],
    "vocabulary": [
      {
        "word": "Honest",
        "phonetic": "/ˈɒn.ɪst/",
        "partOfSpeech": "adjective",
        "meaningTr": "Dürüst, güvenilir (h okunmaz)",
        "exampleSentence": "He is an honest man."
      },
      {
        "word": "Unique",
        "phonetic": "/juːˈniːk/",
        "partOfSpeech": "adjective",
        "meaningTr": "Benzersiz, eşsiz (y sesiyle başlar)",
        "exampleSentence": "A unique opportunity."
      },
      {
        "word": "Employee",
        "phonetic": "/ɪmˈplɔɪ.iː/",
        "partOfSpeech": "noun",
        "meaningTr": "Çalışan, personel",
        "exampleSentence": "An experienced employee."
      },
      {
        "word": "Statement",
        "phonetic": "/ˈsteɪt.mənt/",
        "partOfSpeech": "noun",
        "meaningTr": "Beyan, açıklama",
        "exampleSentence": "Read the official statement."
      }
    ],
    "quickCheck": {
      "question": "Aşağıdaki kelime ve artikel eşleşmelerinden hangisi KESİNLİKLE DOĞRUDUR?",
      "options": [
        "an hour, a university, an honest person, a European city",
        "a hour, an university, a honest person, an European city",
        "an hour, an university, an honest person, an European city",
        "a hour, a university, a honest person, a European city"
      ],
      "correctIndex": 0,
      "explanation": "Hour ve honest sesli okunduğu için 'an'; university ve European /j/ ünsüzüyle okunduğu için 'a' alır."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa uygun artikeli yerleştirin:",
      "sentence": "Our company hired ___ experienced international consultant for the new project.",
      "options": [
        "an",
        "a",
        "the",
        "some"
      ],
      "correctAnswer": "an",
      "hint": "'Experienced' kelimesinin ilk sesine dikkat edin (/ɪkˈspɪə.ri.ənst/).",
      "explanation": "'Experienced' kelimesi ünlü bir sesle başladığı için önüne 'an' belirteci gelir."
    },
    "sentenceBuilder": {
      "promptTr": "Ben Londra'da tarihi bir üniversitede öğrenciyim.",
      "targetEn": "I am a student at a historic university in London",
      "availableWords": [
        "I",
        "am",
        "a",
        "student",
        "at",
        "a",
        "historic",
        "university",
        "in",
        "London",
        "an",
        "the",
        "are"
      ],
      "explanation": "Özne + to be (I am) + meslek (a student) + yer öbeği (at a historic university in London - university 'a' alır)."
    },
    "summaryTakeaways": [
      "A ve An seçimi yazılışa değil, ilk harfin ÇIKAN SESİNE göredir.",
      "Sessiz 'H' taşıyan kelimeler 'AN' alır: an hour, an honest man.",
      "/juː/ (Y sesi) ile başlayan kelimeler 'A' alır: a university, a European city.",
      "A ve An yalnızca tekil sayılabilen isimlerle kullanılır."
    ]
  },
  "73": {
    "skillType": "grammar",
    "concreteCompetency": "A1 standardında belirsiz miktar belirten 'SOME' ve 'ANY' sözcüklerini olumlu, olumsuz ve soru cümlelerindeki rol dağılımına göre ('some' olumlu ve kibar tekliflerde, 'any' olumsuz ve genel sorularda) hatasız kullanabilmek.",
    "whyItMatters": "Markette, restoranda veya evde 'Biraz ekmek var mı?' veya 'Hiç süt kalmadı' derken 'some' ve 'any' arasındaki farkı bilmek dilbilgisel karmaşayı önler.",
    "linguisticLogic": "İngilizcede 'SOME' ve 'ANY' hem çoğul sayılabilen (some apples, any questions) hem de sayılamayan (some water, any milk) isimlerle kullanılır. Aralarındaki fark CÜMLENİN TÜRÜNDEN kaynaklanır: 1) SOME: Standart kural olarak OLUMLU cümlelerde kullanılır: 'I have some friends', 'There is some bread'. İSTİSNA: İkram, teklif ve ricalarda (cevabın 'evet' olması beklenen nazik sorularda) 'some' soruya girer: 'Would you like some coffee?', 'Can I have some water?'. 2) ANY: Standart kural olarak OLUMSUZ cümlelerde ('hiç' anlamında) ve BİLGİ EDİNME SORULARINDA kullanılır: 'I don't have ANY money' (Hiç param yok), 'Do you have ANY questions?' (Hiç sorunuz var mı?).",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: 'SOME' — Olumlu Cümleler (Biraz / Birkaç)",
        "content": "Olumlu bir beyanda bulunurken 'some' kullanılır. Sayılamayanlarla 'biraz', sayılabilen çoğullarla 'birkaç' anlamına gelir: 'There is some cheese in the fridge' (Dolapta biraz peynir var), 'I bought some new books' (Birkaç yeni kitap aldım).",
        "formula": "Olumlu Cümle + SOME + [Çoğul İsim / Sayılamayan İsim]",
        "keyPhrase": "We need some paper. | There are some apples on the table.",
        "subPoints": [
          "Sayılabilen isimler daima çoğul olur: some book YANLIŞTIR, 'some books' DOĞRUDUR.",
          "Sayılamayan isimler tekil kalır: 'some water'."
        ],
        "rationale": "Olumlu miktar bildiriminin standart yapısını kurar."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: 'ANY' — Olumsuz Cümleler ve Genel Sorular",
        "content": "Cümlede olumsuzluk eki (not, n't) varsa 'some' yerini 'any'ye bırakır ve 'hiç' anlamı kazanır: 'I don't have any cash' (Hiç nakit param yok), 'There aren't any clean towels' (Hiç temiz havlu yok). Standart evet/hayır sorularında da 'any' kullanılır: 'Are there any messages for me?' (Bana hiç mesaj var mı?).",
        "formula": "Olumsuz / Soru + ANY + [Çoğul İsim / Sayılamayan İsim]",
        "keyPhrase": "We don't have any milk left. | Do you have any brothers?",
        "subPoints": [
          "*I don't have some money YANLIŞTIR!",
          "Olumsuz cümlede 'some' asla 'hiç' anlamında kullanılamaz; 'any' şarttır."
        ],
        "rationale": "Olumsuzluk ve soru dönüşümünde 'some -> any' refleksini kazandırır."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: 'SOME'ın İstisnası: Kibar Teklif ve Ricalar",
        "content": "Bir soru cümlesi aslında bir ikram ('Would you like...?') veya kibar bir istek ('Can I have...?') ise, kural dışına çıkılır ve soru olmasına rağmen 'SOME' kullanılır! Çünkü amacınız bilgi edinmek değil, ikramda bulunmaktır.",
        "formula": "Would you like SOME [Yiyecek/İçecek]?  |  Can I have SOME [Madde]?",
        "keyPhrase": "Would you like some tea? | Can I have some sugar, please?",
        "subPoints": [
          "*Would you like any tea? kulağa soğuk ve yapay gelir; 'some tea' denir.",
          "İkram sorularında daima 'some' arayın!"
        ],
        "rationale": "İngilizcenin en ünlü ve pratik soru istisnasını netleştirir."
      }
    ],
    "ruleCards": [
      {
        "ruleTitle": "Some vs Any Temel Matrisi",
        "formula": "Olumlu = SOME  |  Olumsuz (-n't) = ANY  |  Genel Soru = ANY",
        "explanation": "Cümle olumluysa 'some', olumsuz veya soruysa 'any' kullanılır.",
        "exampleSnippet": "I have some bread. / I don't have any bread. / Do you have any bread?",
        "tipNote": "Cümlede 'not' gördüysen 'any'yi yapıştır!"
      },
      {
        "ruleTitle": "İkram ve Rica İstisnası (Offer / Request)",
        "formula": "Would you like SOME...?  |  Can I have SOME...?",
        "explanation": "Karşıdakine bir şey ikram ederken veya bir şey rica ederken soru olsa bile 'some' kullanılır.",
        "cautionNote": "İkramlarda asla 'any' kullanmayın."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "There isn't some milk in the bottle.",
        "correctExample": "There isn't any milk in the bottle.",
        "rootCause": "Olumsuz cümlede 'any' yerine 'some' kullanmak.",
        "memoryTip": "Cümlede 'isn't' varsa yanına 'ANY' gelir: There isn't ANY milk!"
      },
      {
        "wrongExample": "Would you like any cake with your tea?",
        "correctExample": "Would you like some cake with your tea?",
        "rootCause": "İkram sorusunu genel soru sanıp 'any' kullanmak.",
        "memoryTip": "Misafire ikram yapıyorsan cömert ol, SOME ver: Would you like SOME cake?"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Evde Akşam Yemeği Öncesi Mutfak Kontrolü",
      "description": "Ev arkadaşları yemek yapmadan önce dolapta ne olup olmadığını kontrol eder.",
      "contextType": "daily",
      "dialogue": [
        {
          "speaker": "Oliver",
          "textEn": "Let's make pasta for dinner! Do we have any tomato sauce in the pantry?",
          "textTr": "Akşam yemeğinde makarna yapalım! Kilerde hiç domates sosumuz var mı?"
        },
        {
          "speaker": "Sophie",
          "textEn": "No, we don't have any sauce left, but we have some fresh tomatoes in the basket.",
          "textTr": "Hayır, hiç sosumuz kalmamış ama sepette biraz taze domatesimiz var."
        },
        {
          "speaker": "Oliver",
          "textEn": "Great! Are there any onions?",
          "textTr": "Harika! Hiç soğan var mı?"
        },
        {
          "speaker": "Sophie",
          "textEn": "Yes, there are some onions. Would you like some iced tea while we cook?",
          "textTr": "Evet, birkaç soğan var. Biz yemek yaparken biraz buzlu çay ister misin?"
        }
      ],
      "culturalNote": "Ev sahipliğinde misafirlere bir şey ikram edilirken 'Would you like some...?' en samimi ve kibar kalıptır."
    },
    "contrastiveAnalysis": {
      "title": "Bazı / Hiç vs Some / Any",
      "englishConcept": "Some (Olumlu / İkram) vs Any (Olumsuz / Bilgi Sorusu)",
      "turkishDifference": "Türkçede olumsuz cümlede 'hiç' kullanılır ('Hiç süt yok'). İngilizcede bu 'any' ile karşılanır. Olumluda ise 'biraz/birkaç' yerine 'some' gelir.",
      "directComparison": [
        {
          "context": "Olumsuzda miktar",
          "en": "I don't have any money.",
          "trMeaning": "Hiç param yok.",
          "commonErrorTr": "*I don't have some money.",
          "whyItMatters": "Olumsuzda 'any' zorunludur."
        },
        {
          "context": "İkram sorusu",
          "en": "Would you like some water?",
          "trMeaning": "Biraz su ister misiniz?",
          "commonErrorTr": "*Would you like any water?",
          "whyItMatters": "İkramda 'some' kalıptır."
        }
      ]
    },
    "memoryHook": "MİKTAR ANAHTARI: Olumluya SOME, olumsuza ANY, ikrama gelince soru bile olsa SOME!",
    "examples": [
      {
        "en": "We need to buy some fresh eggs and some butter from the supermarket.",
        "tr": "Süpermarketten biraz taze yumurta ve biraz tereyağı almamız gerekiyor.",
        "highlightedWords": [
          "some fresh eggs",
          "some butter"
        ],
        "grammarCategory": "some + çoğul / sayılamayan",
        "contextNote": "Alışveriş listesi.",
        "breakdownNote": "Some eggs (çoğul sayılabilen) + some butter (sayılamayan)."
      },
      {
        "en": "Are there any vegetarian restaurants in this neighborhood?",
        "tr": "Bu mahallede hiç vejetaryen restoran var mı?",
        "highlightedWords": [
          "Are there any"
        ],
        "grammarCategory": "Are there any + çoğul soru",
        "contextNote": "Şehirde mekan arama.",
        "breakdownNote": "Soru olduğu için 'any' kullanıldı."
      },
      {
        "en": "Can I have some extra sugar for my coffee, please?",
        "tr": "Kahvem için biraz ilave şeker alabilir miyim lütfen?",
        "highlightedWords": [
          "Can I have some"
        ],
        "grammarCategory": "Rica sorusu + some",
        "contextNote": "Kibar talep.",
        "breakdownNote": "Rica sorusu olduğu için soru cümlesinde 'some' kullanıldı."
      }
    ],
    "vocabulary": [
      {
        "word": "Pantry",
        "phonetic": "/ˈpæn.tri/",
        "partOfSpeech": "noun",
        "meaningTr": "Kiler, erzak dolabı",
        "exampleSentence": "The sauce is in the pantry."
      },
      {
        "word": "Sauce",
        "phonetic": "/sɔːs/",
        "partOfSpeech": "noun",
        "meaningTr": "Sos",
        "exampleSentence": "Do we have any pasta sauce?"
      },
      {
        "word": "Extra",
        "phonetic": "/ˈek.strə/",
        "partOfSpeech": "adjective",
        "meaningTr": "Fazladan, ilave",
        "exampleSentence": "Can I have an extra napkin?"
      },
      {
        "word": "Neighborhood",
        "phonetic": "/ˈneɪ.bə.hʊd/",
        "partOfSpeech": "noun",
        "meaningTr": "Mahalle, semt",
        "exampleSentence": "This is a quiet neighborhood."
      }
    ],
    "quickCheck": {
      "question": "Bir kafede oturan müşteriye garsonun 'Biraz sıcak süt ister misiniz?' diye ikramda bulunması için en doğru cümle hangisidir?",
      "options": [
        "Would you like some warm milk?",
        "Would you like any warm milk?",
        "Do you like some warm milk?",
        "Are you wanting any warm milk?"
      ],
      "correctIndex": 0,
      "explanation": "Kibar ikram ve teklif sorularında kural olarak soru olmasına rağmen 'some' kullanılır: 'Would you like some warm milk?'"
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa uygun miktar belirtecini yerleştirin:",
      "sentence": "The pharmacy is closed; we don't have ___ medicine at home.",
      "options": [
        "any",
        "some",
        "a",
        "many"
      ],
      "correctAnswer": "any",
      "hint": "Cümlede 'don't have' (olumsuzluk) bulunmaktadır ve 'medicine' sayılamaz isimdir.",
      "explanation": "Olumsuz cümlelerde 'hiç' anlamında 'any' kullanılır: 'we don't have any medicine'."
    },
    "sentenceBuilder": {
      "promptTr": "Buzdolabında hiç süt yok ama tezgahta biraz elma var.",
      "targetEn": "There is not any milk in the fridge but there are some apples on the counter",
      "availableWords": [
        "There",
        "is",
        "not",
        "any",
        "milk",
        "in",
        "the",
        "fridge",
        "but",
        "there",
        "are",
        "some",
        "apples",
        "on",
        "the",
        "counter",
        "some",
        "any"
      ],
      "explanation": "Olumsuz kısım (There is not any milk in the fridge) + bağlaç (but) + olumlu kısım (there are some apples on the counter)."
    },
    "summaryTakeaways": [
      "'Some' olumlu cümlelerde (biraz/birkaç) kullanılır.",
      "'Any' olumsuz cümlelerde (hiç) ve genel sorularda kullanılır.",
      "İkram (Would you like...?) ve ricalarda (Can I have...?) soru da olsa 'SOME' kullanılır.",
      "Both 'some' ve 'any' hem çoğul hem sayılamayan isimlerle çalışır."
    ]
  },
  "74": {
    "skillType": "grammar",
    "concreteCompetency": "A1 standardında büyük miktarları ifade etmek için 'MUCH', 'MANY' ve 'A LOT OF' belirteçlerinin ayrımını (much: sayılamayanlarda/olumsuzda, many: sayılabilen çoğullarda, a lot of: olumlu cümlelerde her ikisiyle) hatasız uygulayabilmek.",
    "whyItMatters": "'Çok' demek İngilizcede tek bir kelime değildir. 'A lot of', 'much' ve 'many'nin yerlerini doğru bilmek cümlelerinize doğal bir anadil akışı kazandırır.",
    "linguisticLogic": "İngilizcede çokluk belirten 3 dev kelime vardır: 1) MANY: YALNIZCA SAYILABİLEN ÇOĞUL İSİMLERLE kullanılır (many books, many cars, many people). Özellikle soru ve olumsuzlarda standarttır. 2) MUCH: YALNIZCA SAYILAMAYAN İSİMLERLE kullanılır (much water, much time, much money). Doğal dilde neredeyse SADECE olumsuz cümlelerde ve sorularda tercih edilir ('I don't have much time'). Olumlu cümlede *I have much time demek yapaydır! 3) A LOT OF (veya LOTS OF): Evrensel kurtarıcıdır! Hem sayılabilen çoğullarla hem de sayılamayanlarla OLUMLU cümlelerde en doğal tercihtir: 'I have a lot of books' (Çok kitabım var), 'I have a lot of time' (Çok vaktim var).",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: 'A LOT OF' — Olumlu Cümlelerin Şampiyonu",
        "content": "Olumlu bir cümlede 'çok' demek istediğinizde isim ister sayılsın ister sayılmasın en doğal seçim 'A LOT OF'tur: 'She has a lot of friends' (Çok arkadaşı var - sayılabilen), 'We drink a lot of coffee' (Çok kahve içeriz - sayılamayan).",
        "formula": "Olumlu Cümle + A LOT OF + [Çoğul İsim / Sayılamayan İsim]",
        "keyPhrase": "There are a lot of tourists. | He has a lot of money.",
        "subPoints": [
          "Konuşma dilinde 'lots of' da aynı anlama gelir: 'lots of friends'.",
          "Olumlu cümlede 'much' kullanmaktan kaçının; kulağa aşırı resmi veya yapay gelir."
        ],
        "rationale": "Olumlu cümlelerde öğrencileri 'much' tuzağından kurtarır."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: 'MANY' — Sayılabilen Çoğullar (Soru ve Olumsuz)",
        "content": "Tane ile sayılabilen çoğul isimlerin önünde kullanılır. Soru ve olumsuzlarda standarttır: 'Do you have many colleagues?' (Çok meslektaşın var mı?), 'There aren't many cars on the road today' (Bugün yolda çok araba yok).",
        "formula": "MANY + [Çoğul İsim (-s)] (Özellikle soru ve olumsuzda)",
        "keyPhrase": "How many books? | There aren't many chairs.",
        "subPoints": [
          "İsim daima çoğul eki taşır: many friend YANLIŞTIR, 'many friends' DOĞRUDUR.",
          "How many ile adet sorulur."
        ],
        "rationale": "Sayılabilir çokluk sistemini soru ve olumsuzlarla pekiştirir."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: 'MUCH' — Sayılamayanlar (Soru ve Olumsuz)",
        "content": "Sıvı, para, zaman gibi sayılamayan maddelerin çokluğunu sorgularken veya azlığını vurgularken 'MUCH' kullanılır: 'We don't have much time left' (Çok vaktimiz kalmadı), 'Is there much traffic today?' (Bugün çok trafik var mı?).",
        "formula": "MUCH + [Sayılamayan İsim (Tekil)] (Soru ve Olumsuzda)",
        "keyPhrase": "I don't have much money. | There isn't much sugar.",
        "subPoints": [
          "*I have much money -> Doğal İngilizcede söylenmez! Yerine: 'I have a lot of money' denir.",
          "How much ile fiyat ve sayılamayan miktar sorulur."
        ],
        "rationale": "'Much' kelimesinin olumsuz ve soru kısıtlamasını kalıcı kılar."
      }
    ],
    "ruleCards": [
      {
        "ruleTitle": "Olumlu Cümlede 'A LOT OF' Kuralı",
        "formula": "Olumlu Cümle + A LOT OF (*much değil!)",
        "explanation": "Olumlu cümlelerde 'much' yerine daima 'a lot of' tercih edilir.",
        "exampleSnippet": "She has a lot of experience. (*She has much experience değil)",
        "tipNote": "Olumlu cümlede çok diyeceksen 'a lot of' de!"
      },
      {
        "ruleTitle": "Much ve Many İsim Uyumu",
        "formula": "MANY + Çoğul (books)  <-->  MUCH + Tekil Sayılamayan (water)",
        "explanation": "Many çoğul isimlerle, Much sayılamayan tekil maddelerle eşleşir.",
        "cautionNote": "*much books veya *many water demek imkansız bir hatadır."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "I have much work to do today.",
        "correctExample": "I have a lot of work to do today.",
        "rootCause": "Olumlu cümlede 'a lot of' yerine 'much' kullanma yapaylığı.",
        "memoryTip": "Olumlu cümlede 'MUCH' yalnız kalır; 'A LOT OF' kullan: a lot of work!"
      },
      {
        "wrongExample": "There aren't much hotels in this small village.",
        "correctExample": "There aren't many hotels in this small village.",
        "rootCause": "Sayılabilen çoğul oteller için 'much' kullanmak.",
        "memoryTip": "Otel sayılabilir; çoğullar MANY sever: aren't MANY hotels!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Havalimanına Yetişirken Zaman ve Bagaj Durumu",
      "description": "İki yolcu takside uçağa yetişip yetişemeyeceklerini ve eşyalarını konuşur.",
      "contextType": "daily",
      "dialogue": [
        {
          "speaker": "Passenger A",
          "textEn": "Driver, do we have much time before the flight check-in closes?",
          "textTr": "Şoför bey, uçuş biniş işlemleri kapanmadan önce çok vaktimiz var mı?"
        },
        {
          "speaker": "Driver",
          "textEn": "Don't worry, there isn't much traffic on the highway today. We will arrive in twenty minutes.",
          "textTr": "Merak etmeyin, bugün otoyolda çok trafik yok. Yirmi dakika içinde varırız."
        },
        {
          "speaker": "Passenger B",
          "textEn": "That is a relief. Do we have a lot of luggage in the trunk?",
          "textTr": "Bu rahatlatıcı. Bagajda çok valizimiz var mı?"
        },
        {
          "speaker": "Passenger A",
          "textEn": "No, we only have two small bags, so there aren't many things to carry.",
          "textTr": "Hayır, sadece iki küçük çantamız var, bu yüzden taşınacak çok şey yok."
        }
      ],
      "culturalNote": "İngilizcede zaman darlığında 'We don't have much time' standart deyimdir."
    },
    "contrastiveAnalysis": {
      "title": "Çok Kelimesinin Üçlü Ayrımı",
      "englishConcept": "Many (Çoğul) vs Much (Sayılamaz) vs A lot of (Olumlu her ikisi)",
      "turkishDifference": "Türkçede 'çok kitap', 'çok su', 'çok insan' derken hepsine tek bir 'çok' kelimesi yeter. İngilizcede ise sayılabilirlik ve cümlenin olumlu/olumsuz oluşu fiil seçimini doğrudan belirler.",
      "directComparison": [
        {
          "context": "Sayılabilir çokluk",
          "en": "many questions",
          "trMeaning": "çok soru",
          "commonErrorTr": "*much questions",
          "whyItMatters": "Soru sayılabilir, many alır."
        },
        {
          "context": "Sayılamaz çokluk",
          "en": "much noise",
          "trMeaning": "çok gürültü",
          "commonErrorTr": "*many noise",
          "whyItMatters": "Gürültü sayılamaz, much alır."
        }
      ]
    },
    "memoryHook": "ÜÇLÜ MİKTAR ÇARKI: Sayılıyorsa MANY, sayılıyorsa olumsuzda MUCH, olumlu cümlede daima A LOT OF!",
    "examples": [
      {
        "en": "There are a lot of historic monuments in the old city center.",
        "tr": "Eski şehir merkezinde çok sayıda tarihi anıt var.",
        "highlightedWords": [
          "a lot of historic monuments"
        ],
        "grammarCategory": "a lot of + çoğul isim",
        "contextNote": "Şehir zenginliği tasviri.",
        "breakdownNote": "There are + a lot of + çoğul isim + yer."
      },
      {
        "en": "We don't have much information about the new software yet.",
        "tr": "Yeni yazılım hakkında henüz çok fazla bilgimiz yok.",
        "highlightedWords": [
          "don't have much information"
        ],
        "grammarCategory": "much + sayılamayan bilgi",
        "contextNote": "Bilgi azlığı vurgusu.",
        "breakdownNote": "Olumsuz (don't have) + much + information (sayılamaz)."
      },
      {
        "en": "How many languages can your business partner speak fluently?",
        "tr": "İş ortağınız kaç dili akıcı bir şekilde konuşabiliyor?",
        "highlightedWords": [
          "How many languages"
        ],
        "grammarCategory": "How many + çoğul dil",
        "contextNote": "Dil adedi sorgulama.",
        "breakdownNote": "How many + languages + can + özne + speak."
      }
    ],
    "vocabulary": [
      {
        "word": "Monument",
        "phonetic": "/ˈmɒn.jə.mənt/",
        "partOfSpeech": "noun",
        "meaningTr": "Anıt, abide",
        "exampleSentence": "A lot of ancient monuments."
      },
      {
        "word": "Traffic",
        "phonetic": "/ˈtræf.ɪk/",
        "partOfSpeech": "noun",
        "meaningTr": "Trafik (sayılamaz)",
        "exampleSentence": "There isn't much traffic."
      },
      {
        "word": "Trunk",
        "phonetic": "/trʌŋk/",
        "partOfSpeech": "noun",
        "meaningTr": "Araba bagajı (UK: boot)",
        "exampleSentence": "Put the bags in the trunk."
      },
      {
        "word": "Relief",
        "phonetic": "/rɪˈliːf/",
        "partOfSpeech": "noun",
        "meaningTr": "Rahatlama, ferahlama",
        "exampleSentence": "That is a big relief."
      }
    ],
    "quickCheck": {
      "question": "'Benim şirketimde çok sayıda uluslararası proje var' olumlu cümlesinin en doğal İngilizcesi hangisidir?",
      "options": [
        "There are a lot of international projects in my company.",
        "There are much international projects in my company.",
        "There is a lot of international project in my company.",
        "There have many international projects in my company."
      ],
      "correctIndex": 0,
      "explanation": "Olumlu cümlede sayılabilen çoğullarla 'There are a lot of [projects]' en doğal ve doğru yapıdır."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa uygun miktar belirtecini yerleştirin:",
      "sentence": "Hurry up! We don't have ___ time before the museum ticket office closes.",
      "options": [
        "much",
        "many",
        "a lot",
        "few"
      ],
      "correctAnswer": "much",
      "hint": "Cümle olumsuzdur ('don't have') ve 'time' sayılamayan bir isimdir.",
      "explanation": "Sayılamayan isimlerde olumsuz cümlelerde 'much' kullanılır: 'don't have much time'."
    },
    "sentenceBuilder": {
      "promptTr": "Bugün otoyolda çok fazla araba yok bu yüzden hızlı sürüyoruz.",
      "targetEn": "There are not many cars on the highway today so we are driving fast",
      "availableWords": [
        "There",
        "are",
        "not",
        "many",
        "cars",
        "on",
        "the",
        "highway",
        "today",
        "so",
        "we",
        "are",
        "driving",
        "fast",
        "much",
        "is"
      ],
      "explanation": "Olumsuz çokluk (There are not many cars on the highway today) + sonuç (so we are driving fast)."
    },
    "summaryTakeaways": [
      "Olumlu cümlelerde hem çoğul hem sayılamayanlarla 'a lot of' en doğal seçimdir.",
      "'Many' sayılabilen çoğul isimlerle (soru ve olumsuzda) kullanılır.",
      "'Much' sayılamayan isimlerle (soru ve olumsuzda) kullanılır.",
      "Olumlu cümlede *I have much time yerine 'I have a lot of time' denir."
    ]
  },
  "75": {
    "skillType": "grammar",
    "concreteCompetency": "A1 standardında küçük miktarları ifade etmek için 'A FEW' (birkaç tane) ve 'A LITTLE' (biraz) kalıplarını isimlerin sayılabilirlik durumuna göre ('a few' sayılabilen çoğullarla, 'a little' sayılamayanlarla) hatasız kullanabilmek; 'a'sız hallerinin olumsuz anlamını kavrayabilmek.",
    "whyItMatters": "Bir kahveye 'biraz şeker' veya tatilde 'birkaç gün' derken doğru azlık belirtecini seçmek ifade kesinliğinin temelidir.",
    "linguisticLogic": "İngilizcede azlık belirten iki kardeş ikili vardır: 1) A FEW (Birkaç tane): YALNIZCA SAYILABİLEN ÇOĞUL İSİMLERLE kullanılır: 'a few friends' (birkaç arkadaş), 'a few days' (birkaç gün), 'a few questions' (birkaç soru). İsim mutlaka çoğul eki (-s) alır. 2) A LITTLE (Biraz): YALNIZCA SAYILAMAYAN İSİMLERLE kullanılır: 'a little milk' (biraz süt), 'a little time' (biraz zaman), 'a little money' (biraz para). İsim asla -s almaz. İLERİ DÜZEY NÜANS: Önündeki 'A' harfi 'yeterli miktarda az' (pozitif) anlamı katar. 'A' atıldığında ('few', 'little') 'yetersiz, yok denecek kadar az' (negatif) anlamına bürünür: 'I have a little money' (Biraz param var, kahve alabilirim) vs 'I have little money' (Neredeyse hiç param yok, çok fakirim).",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: 'A FEW + Çoğul İsim' (Birkaç Tane)",
        "content": "Sayılabilen nesnelerden az miktarda (genellikle 2 ila 4 arası) bahsederken 'a few' kullanılır. İsim MUTLAKA ÇOĞULDUR: 'a few minutes' (birkaç dakika), 'a few biscuits' (birkaç bisküvi), 'a few mistakes' (birkaç hata).",
        "formula": "A FEW + [Çoğul İsim (-s)]",
        "keyPhrase": "I have a few questions. | We stay here for a few days.",
        "subPoints": [
          "*a few minute YANLIŞTIR -> a few minutes DOĞRUDUR.",
          "Sayılabildiği için çoğul eki şarttır."
        ],
        "rationale": "Sayılabilir azlık yapısını dilbilgisel bütünlükle öğretir."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: 'A LITTLE + Sayılamayan İsim' (Biraz)",
        "content": "Sayılamayan sıvılardan, kütlelerden veya soyut kavramlardan az miktarda bahsederken 'a little' kullanılır: 'a little sugar' (biraz şeker), 'a little patience' (biraz sabır), 'a little help' (biraz yardım). İsim tekil kalır.",
        "formula": "A LITTLE + [Sayılamayan Tekil İsim]",
        "keyPhrase": "Can you add a little milk? | I speak a little English.",
        "subPoints": [
          "*a little friends YANLIŞTIR -> a few friends DOĞRUDUR.",
          "'a little bit' günlük konuşmada 'a little' ile eşanlamlıdır."
        ],
        "rationale": "Sayılamayan azlık yapısının kullanım sahasını netleştirir."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: 'A' Harfinin Büyüsü: Pozitif vs Negatif Anlam",
        "content": "Başında 'A' olduğunda pozitif bir 'az ama yeter' anlamı vardır: 'I have a few friends' (Birkaç arkadaşım var, mutluyum). 'A' düştüğünde 'neredeyse hiç' negatifliği doğar: 'I have few friends' (Neredeyse hiç arkadaşım yok, yalnızım). 'I have a little time' (Biraz vaktim var, konuşabiliriz) vs 'I have little time' (Vaktim yok denecek kadar az).",
        "formula": "A few / A little = Az ama yeter (+)  <-->  Few / Little = Yok denecek kadar az (-)",
        "keyPhrase": "Don't worry, we still have a little time.",
        "subPoints": [
          "A1 seviyesinde daima 'A few' ve 'A little' pozitif yapıları kullanılır.",
          "'A' harfini asla düşürmemeye özen gösterin."
        ],
        "rationale": "İngilizcenin en ince anlamsal nüansını sezgisel olarak kavratır."
      }
    ],
    "ruleCards": [
      {
        "ruleTitle": "İsim Türü Eşleşme İlkesi",
        "formula": "A FEW + Çoğul (days)  <-->  A LITTLE + Sayılamayan (water)",
        "explanation": "A few tane ile sayılan çoğullarla, A little sayılamayan kütlelerle birleşir.",
        "exampleSnippet": "a few cookies (bisküviler)  |  a little tea (çay)",
        "tipNote": "Tane tane sayabiliyorsan A FEW, tartıyorsan A LITTLE!"
      },
      {
        "ruleTitle": "'A' Harfini Unutmama Kuralı",
        "formula": "a few  |  a little (*a düşerse anlam olumsuza kayar)",
        "explanation": "'Birkaç' veya 'biraz' demek için başındaki 'a' harfi zorunludur.",
        "cautionNote": "'A few' birleşik bir miktar kalıbıdır."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "Can I have a few water, please?",
        "correctExample": "Can I have a little water, please? / Can I have a glass of water?",
        "rootCause": "Sayılamayan su için sayılabilen 'a few' belirtecini kullanmak.",
        "memoryTip": "Su tane ile sayılmaz; sıvıysa A LITTLE kullan: A LITTLE WATER!"
      },
      {
        "wrongExample": "She has a little friends in Istanbul.",
        "correctExample": "She has a few friends in Istanbul.",
        "rootCause": "Sayılabilen arkadaşlar için 'a little' kullanmak.",
        "memoryTip": "Arkadaşlar sayılabilir insandır; çoğulsa A FEW kullan: A FEW FRIENDS!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Kafede Kahve Siparişi Kişiselleştirme",
      "description": "Müşteri baristaya kahvesine ne kadar süt ve şeker istediğini tarif eder.",
      "contextType": "daily",
      "dialogue": [
        {
          "speaker": "Barista",
          "textEn": "How do you take your Americano coffee, sir?",
          "textTr": "Americano kahvenizi nasıl alırsınız efendim?"
        },
        {
          "speaker": "Customer",
          "textEn": "Could you add just a little warm oat milk and a little brown sugar, please?",
          "textTr": "Lütfen sadece biraz ılık yulaf sütü ve biraz esmer şeker ekleyebilir misiniz?"
        },
        {
          "speaker": "Barista",
          "textEn": "Sure! Would you like a few butter cookies with that?",
          "textTr": "Elbette! Yanında birkaç tereyağlı kurabiye ister misiniz?"
        },
        {
          "speaker": "Customer",
          "textEn": "Yes, please! Just a few cookies will be perfect.",
          "textTr": "Evet lütfen! Sadece birkaç kurabiye harika olur."
        }
      ],
      "culturalNote": "Kahve siparişlerinde miktar belirtirken 'just a little' (sadece birazcık) çok kibar ve yaygın bir tabirdir."
    },
    "contrastiveAnalysis": {
      "title": "Birkaç vs Biraz (A few vs A little)",
      "englishConcept": "A few (Sayılabilen çoğul) vs A little (Sayılamayan)",
      "turkishDifference": "Türkçede 'birkaç' sayılabilenlerle ('birkaç kişi'), 'biraz' ise sayılamayanlarla ('biraz su') kullanılır. İngilizcede 'a few' ve 'a little' bu ayrımı birebir yansıtır.",
      "directComparison": [
        {
          "context": "Sayılabilen azlık",
          "en": "a few minutes",
          "trMeaning": "birkaç dakika",
          "commonErrorTr": "*a little minutes",
          "whyItMatters": "Dakika sayılır, a few alır."
        },
        {
          "context": "Sayılamayan azlık",
          "en": "a little salt",
          "trMeaning": "biraz tuz",
          "commonErrorTr": "*a few salt",
          "whyItMatters": "Tuz sayılamaz, a little alır."
        }
      ]
    },
    "memoryHook": "AZLIK TERAZİSİ: Sayabiliyorsan A FEW (a few pens), sıvı ve kütleyse A LITTLE (a little sugar)!",
    "examples": [
      {
        "en": "We only need a little olive oil to dress this Mediterranean salad.",
        "tr": "Bu Akdeniz salatasını soslamak için sadece biraz zeytinyağına ihtiyacımız var.",
        "highlightedWords": [
          "a little olive oil"
        ],
        "grammarCategory": "a little + sayılamayan sıvı",
        "contextNote": "Yemek tarifi.",
        "breakdownNote": "Need + a little + olive oil (sıvı, sayılamaz)."
      },
      {
        "en": "The manager wants to ask a few quick questions before the meeting ends.",
        "tr": "Müdür toplantı bitmeden önce birkaç kısa soru sormak istiyor.",
        "highlightedWords": [
          "a few quick questions"
        ],
        "grammarCategory": "a few + çoğul isim",
        "contextNote": "İş toplantısı.",
        "breakdownNote": "A few + quick questions (sayılabilen çoğul)."
      },
      {
        "en": "I have a little cash in my wallet, so I can pay for the parking ticket.",
        "tr": "Cüzdanımda biraz nakit param var, bu yüzden otopark biletini ödeyebilirim.",
        "highlightedWords": [
          "a little cash"
        ],
        "grammarCategory": "a little + sayılamayan nakit",
        "contextNote": "Ödeme imkanı.",
        "breakdownNote": "A little + cash (sayılamaz) -> pozitif yeterlilik."
      }
    ],
    "vocabulary": [
      {
        "word": "Patience",
        "phonetic": "/ˈpeɪ.ʃəns/",
        "partOfSpeech": "noun",
        "meaningTr": "Sabır (sayılamaz)",
        "exampleSentence": "Please have a little patience."
      },
      {
        "word": "Biscuit",
        "phonetic": "/ˈbɪs.kɪt/",
        "partOfSpeech": "noun",
        "meaningTr": "Bisküvi, kurabiye",
        "exampleSentence": "Eat a few biscuits."
      },
      {
        "word": "Mediterranean",
        "phonetic": "/ˌmed.ɪ.tərˈeɪ.ni.ən/",
        "partOfSpeech": "adjective",
        "meaningTr": "Akdeniz'e özgü",
        "exampleSentence": "A fresh Mediterranean diet."
      },
      {
        "word": "Cash",
        "phonetic": "/kæʃ/",
        "partOfSpeech": "noun",
        "meaningTr": "Nakit para (sayılamaz)",
        "exampleSentence": "Do you have a little cash?"
      }
    ],
    "quickCheck": {
      "question": "'Toplantıdan önce sadece birkaç dakikamız var' cümlesinin en doğru İngilizcesi hangisidir?",
      "options": [
        "We only have a few minutes before the meeting.",
        "We only have a little minutes before the meeting.",
        "We only have a few minute before the meeting.",
        "We only have little minutes before the meeting."
      ],
      "correctIndex": 0,
      "explanation": "Dakika (minutes) sayılabilen çoğul bir isimdir; 'a few minutes' kalıbı kullanılır."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa uygun miktar belirtecini yerleştirin:",
      "sentence": "Can you please put ___ lemon juice on the grilled fish?",
      "options": [
        "a little",
        "a few",
        "many",
        "few"
      ],
      "correctAnswer": "a little",
      "hint": "'Lemon juice' (limon suyu) sıvıdır ve sayılamayan bir maddedir.",
      "explanation": "Sayılamayan sıvılarda 'biraz' demek için 'a little' kullanılır: 'a little lemon juice'."
    },
    "sentenceBuilder": {
      "promptTr": "Benim sadece birkaç sorum var ve biraz yardımınıza ihtiyacım var.",
      "targetEn": "I have only a few questions and I need a little help",
      "availableWords": [
        "I",
        "have",
        "only",
        "a",
        "few",
        "questions",
        "and",
        "I",
        "need",
        "a",
        "little",
        "help",
        "little",
        "few"
      ],
      "explanation": "Cümle 1 (I have only a few questions - sayılabilen) + bağlaç (and) + Cümle 2 (I need a little help - sayılamayan)."
    },
    "summaryTakeaways": [
      "'A few' sayılabilen çoğul isimlerle 'birkaç tane' demektir (a few books).",
      "'A little' sayılamayan isimlerle 'biraz' demektir (a little milk).",
      "Başlarındaki 'a' harfi 'az ama yeterli' pozitif anlamını sağlar.",
      "İsimlerin sayılabilirliğini kontrol etmek doğru seçimin anahtarıdır."
    ]
  },
  "76": {
    "skillType": "speaking",
    "concreteCompetency": "A1 standardında bir restoranda veya kafede garsonla iletişim kurarak sipariş vermek için 'I would like... / I'd like...', 'I'll have...' ve hesabı istemek için 'Could we have the bill, please?' kalıplarını yüksek nezaketle hatasız kullanabilmek.",
    "whyItMatters": "Yurtdışına seyahat eden birinin ilk ve en sık gireceği sosyal ortam restorandır. 'I want meat' demek kaba ve buyurgan tınlar; 'I'd like...' ve 'I'll have...' kalıpları ise saygın bir müşteri tavrı kazandırır.",
    "linguisticLogic": "İngilizce restoran dilinde üç altın nezaket aşaması vardır: 1) SİPARİŞ VERME: 'I want' yerine daima yumuşatılmış 'I WOULD LIKE' (I'd like /aɪd laɪk/) veya anlık seçim bildiren 'I'LL HAVE' kullanılır: 'I'd like the grilled salmon, please' (Izgara somon rica edeyim), 'I'll have a sparkling water' (Bir maden suyu alayım). 2) İSTEKTE BULUNMA: Masaya bir şey isterken 'Could we have...' veya 'Can I get...' denir: 'Could we have some bread, please?'. 3) HESAP İSTEME: İngiliz İngilizcesinde 'THE BILL', Amerikan İngilizcesinde 'THE CHECK' kullanılır: 'Could we have the bill, please?' (Hesabı alabilir miyiz lütfen?).",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: 'I would like' ve 'I'll have' ile Sipariş Açılışı",
        "content": "Garson 'Are you ready to order?' (Sipariş vermeye hazır mısınız?) dediğinde söze 'I'd like...' veya 'I'll have...' ile başlayın. İki kalıp da son derece kibar ve standarttır.",
        "formula": "I'd like + [Yiyecek / İçecek] + please  |  I'll have + [Yiyecek / İçecek]",
        "keyPhrase": "I'd like the tomato soup, please. | I'll have the steak with potatoes.",
        "subPoints": [
          "*I want the soup -> Kaba ve buyurgan tınlar; daima 'I'd like' kullanın.",
          "Sonuna 'please' eklemeyi asla unutmayın."
        ],
        "rationale": "Kültürel nezaket ve doğru müşteri dilini kazandırır."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Masaya İlave İsteklerde Bulunma",
        "content": "Masaya peçete, su veya çatal bıçak isterken 'Could we have...' veya 'Could I get...' kalıbı kullanılır: 'Could we have some more napkins, please?' (Biraz daha peçete alabilir miyiz lütfen?).",
        "formula": "Could we have + [Nesne] + please?",
        "keyPhrase": "Could we have some olive oil? | Can I get an extra glass?",
        "subPoints": [
          "Çoğul masa adına 'Could we have' denir.",
          "İstekte bulunurken 'some' kullanılır (Could we have some water?)."
        ],
        "rationale": "Yemek esnasındaki ara talepleri pürüzsüz yönetmeyi sağlar."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: Hesabı İsteme ve Ödeme Yöntemi",
        "content": "Yemek bittiğinde hesabı istemek için 'Could we have the bill, please?' (İngiltere) veya 'the check' (Amerika) denir. Ödeme yaparken: 'Can I pay by card?' (Kartla ödeyebilir miyim?) veya 'We pay in cash' (Nakit ödüyoruz) denir.",
        "formula": "Could we have the bill, please?  |  Can I pay by credit card?",
        "keyPhrase": "The bill, please. | Is service included?",
        "subPoints": [
          "Ödemede kart için 'BY card', nakit için 'IN cash' edatı kullanılır.",
          "'Keep the change' (Üstü kalsın) bahşiş bırakırken söylenen yaygın kalıptır."
        ],
        "rationale": "Restoran kapanış ve ödeme sürecini eksiksiz tamamlar."
      }
    ],
    "ruleCards": [
      {
        "ruleTitle": "I'd Like Nezaket Kuralı",
        "formula": "I would like = I'd like (*I want değil!)",
        "explanation": "Restoranda 'istemek' için 'want' yerine 'would like' kullanılır. 'Would' cümleyi yumuşatarak rica tonuna çevirir.",
        "exampleSnippet": "I'd like a table for two, please.",
        "tipNote": "Restoranda 'want' kelimesini aklından çıkar, 'I'd like' de!"
      },
      {
        "ruleTitle": "Hesap Kelimesi Coğrafi Ayrımı",
        "formula": "THE BILL (İngiltere)  <-->  THE CHECK (Amerika)",
        "explanation": "Londra'da 'the bill', New York'ta 'the check' denir. İkisi de doğrudur.",
        "cautionNote": "Hesap isterken 'How much' yerine 'Could we have the bill, please?' demek daha şıktır."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "Waiter, I want the chicken and a beer.",
        "correctExample": "I'd like the chicken and a beer, please.",
        "rootCause": "'I want' kullanarak farkında olmadan kaba bir emir tonu yaratmak.",
        "memoryTip": "Sipariş verirken kraliyet nezaketi takın: I'D LIKE, PLEASE!"
      },
      {
        "wrongExample": "Can I pay with credit card?",
        "correctExample": "Can I pay by credit card?",
        "rootCause": "Kartla ödemede 'with' edatı kullanma yanılgısı.",
        "memoryTip": "Kartla ödeme BY alır: pay BY card; nakit IN alır: pay IN cash!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Londra'da Geleneksel Bir Restoranda Akşam Yemeği",
      "description": "Müşteriler sipariş verir, ekmek ister ve hesabı öder.",
      "contextType": "daily",
      "dialogue": [
        {
          "speaker": "Server",
          "textEn": "Good evening! Are you ready to order, or do you need a few more minutes?",
          "textTr": "İyi akşamlar! Sipariş vermeye hazır mısınız, yoksa birkaç dakikaya daha ihtiyacınız var mı?"
        },
        {
          "speaker": "Guest",
          "textEn": "We are ready, thank you. For starters, I'd like the French onion soup, and for the main course, I'll have the grilled sea bass.",
          "textTr": "Hazırız, teşekkürler. Başlangıç olarak Fransız soğan çorbası rica edeyim, ana yemek olarak da ızgara levrek alayım."
        },
        {
          "speaker": "Server",
          "textEn": "Excellent choice. And for you, madam?",
          "textTr": "Mükemmel seçim. Peki sizin için hanımefendi?"
        },
        {
          "speaker": "Guest's Friend",
          "textEn": "I would like the mushroom risotto, please. And could we have a bottle of sparkling water for the table?",
          "textTr": "Ben mantarlı risotto rica edeyim lütfen. Ve masaya bir şişe maden suyu alabilir miyiz?"
        },
        {
          "speaker": "Server",
          "textEn": "Certainly! Coming right up.",
          "textTr": "Elbette! Hemen geliyor."
        }
      ],
      "culturalNote": "İngiltere'de başlangıç 'starter', ana yemek 'main course', tatlı ise 'dessert' olarak adlandırılır."
    },
    "contrastiveAnalysis": {
      "title": "İstiyorum vs I'd like",
      "englishConcept": "I'd like (Rica/Arzu) vs I'll have (Karar/Seçim)",
      "turkishDifference": "Türkçede 'Ben tavuk alayım' veya 'Levrek istiyorum' demek yaygındır ve kaba karşılanmaz. İngilizcede ise 'I want' kaba sayılır; 'I'd like' veya 'I'll have' demek zorunludur.",
      "directComparison": [
        {
          "context": "Sipariş verme",
          "en": "I'd like the pasta.",
          "trMeaning": "Makarna alayım / rica edeyim.",
          "commonErrorTr": "*I want pasta.",
          "whyItMatters": "Nezaket dozu belirleyicidir."
        }
      ]
    },
    "memoryHook": "RESTORAN ÜÇLEMESİ: Siparişe 'I'd like...', araya 'Could we have...', çıkarken 'Could we have the bill, please!'",
    "examples": [
      {
        "en": "I would like my steak medium-rare with roast potatoes, please.",
        "tr": "Bifteğimi fırın patates eşliğinde orta-az pişmiş rica edeyim lütfen.",
        "highlightedWords": [
          "I would like my steak",
          "medium-rare"
        ],
        "grammarCategory": "I would like + pişme derecesi",
        "contextNote": "Et pişme tercihi.",
        "breakdownNote": "I would like + nesne + pişme derecesi + garnitür + please."
      },
      {
        "en": "Could we have the dessert menu and two coffees, please?",
        "tr": "Tatlı menüsünü ve iki kahve alabilir miyiz lütfen?",
        "highlightedWords": [
          "Could we have the dessert menu"
        ],
        "grammarCategory": "Could we have + menü",
        "contextNote": "Yemek sonrası siparişi.",
        "breakdownNote": "Rica kalıbı (Could we have) + nesneler + please."
      },
      {
        "en": "Can we split the bill, or do we pay together?",
        "tr": "Hesabı bölüşebilir miyiz, yoksa birlikte mi ödüyoruz?",
        "highlightedWords": [
          "split the bill"
        ],
        "grammarCategory": "split the bill (hesabı bölüşmek)",
        "contextNote": "Ödeme paylaşımı.",
        "breakdownNote": "Can we + split the bill + or + pay together?"
      }
    ],
    "vocabulary": [
      {
        "word": "Bill",
        "phonetic": "/bɪl/",
        "partOfSpeech": "noun",
        "meaningTr": "Hesap, fatura (UK)",
        "exampleSentence": "Could we have the bill, please?"
      },
      {
        "word": "Starter",
        "phonetic": "/ˈstɑː.tər/",
        "partOfSpeech": "noun",
        "meaningTr": "Başlangıç yemeği (meze/çorba)",
        "exampleSentence": "Soup is a great starter."
      },
      {
        "word": "Main course",
        "phonetic": "/ˌmeɪn ˈkɔːs/",
        "partOfSpeech": "noun",
        "meaningTr": "Ana yemek",
        "exampleSentence": "For my main course, I'll have fish."
      },
      {
        "word": "Split",
        "phonetic": "/splɪt/",
        "partOfSpeech": "verb",
        "meaningTr": "Bölüşmek, paylaştırmak",
        "exampleSentence": "Can we split the bill?"
      }
    ],
    "quickCheck": {
      "question": "Bir restoranda garsona son derece kibar bir dille hesabı getirmesini söylemek için hangi cümle KULLANILMALIDIR?",
      "options": [
        "Could we have the bill, please?",
        "Bring the bill now!",
        "Give me the check quickly.",
        "How much money for our food?"
      ],
      "correctIndex": 0,
      "explanation": "'Could we have the bill, please?' restoranda hesap istemenin evrensel ve en saygın kalıbıdır."
    },
    "exercise": {
      "prompt": "Restoran diyaloğundaki boşluğu en uygun kalıpla tamamlayın:",
      "sentence": "Server: 'What would you like to drink?' - Customer: '___ a glass of freshly squeezed orange juice, please.'",
      "options": [
        "I'd like",
        "I want to",
        "I am like",
        "I will to have"
      ],
      "correctAnswer": "I'd like",
      "hint": "'Would like' sorusuna aynı nezaketle 'I would like / I'd like' ile yanıt verilir.",
      "explanation": "İçecek siparişi verirken 'I'd like a glass of...' kalıbı kullanılır."
    },
    "sentenceBuilder": {
      "promptTr": "Ben ana yemek olarak ızgara somon balığı rica edeyim lütfen.",
      "targetEn": "I would like the grilled salmon for my main course please",
      "availableWords": [
        "I",
        "would",
        "like",
        "the",
        "grilled",
        "salmon",
        "for",
        "my",
        "main",
        "course",
        "please",
        "want",
        "am"
      ],
      "explanation": "Sipariş kalıbı (I would like) + nesne (the grilled salmon) + öğün rolü (for my main course) + nezaket (please)."
    },
    "summaryTakeaways": [
      "Restoranda sipariş verirken 'I would like...' veya 'I'll have...' kullanılır.",
      "'I want' kaba algılanır ve kaçınılmalıdır.",
      "Masaya ek eşya veya su isterken 'Could we have...' denir.",
      "Hesap için İngiltere'de 'the bill', Amerika'da 'the check' kullanılır."
    ]
  },
  "77": {
    "skillType": "speaking",
    "concreteCompetency": "A1 standardında mağaza ve markette alışveriş yaparken fiyat sorma ('How much is this?'), beden/renk sorma ('Do you have this in a medium?'), ödeme yapma ('Can I pay by card?') ve yardım isteme diyaloglarını hatasız yönetebilmek.",
    "whyItMatters": "Yurtdışında giysi denerken, süpermarkette bir reyonu ararken veya kasada indirim sorarken alışveriş dili bağımsız seyahat etmenin en pratik güvencesidir.",
    "linguisticLogic": "Alışveriş iletişimi belirli aşamalardan oluşur: 1) YARDIM TEKLİFİ VE YANIT: Satış danışmanı 'Can I help you?' (Yardımcı olabilir miyim?) dediğinde, sadece bakınıyorsanız 'I'm just browsing, thank you' (Sadece bakınıyorum, teşekkürler) denir. 2) ÜRÜN VE BEDEN ARAMA: 'Do you have this in [Beden / Renk]?' (Bunun M bedeni / mavisi var mı?). 3) DENEME KABİNİ: 'Can I try this on?' (Bunu üzerimde deneyebilir miyim?), 'Where are the fitting rooms?' (Soyunma kabinleri nerede?). 4) KASADA ÖDEME: 'Can I pay by card or in cash?' (Kartla mı nakit mi ödeyebilirim?), 'Can I have a receipt, please?' (Fiş alabilir miyim lütfen?).",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Mağazaya Giriş ve 'Just Browsing'",
        "content": "Mağazaya girdiğinizde görevliler hemen 'Can I help you?' veya 'Are you looking for anything in particular?' der. Baskı hissetmeden kibarca 'I'm just browsing, thanks' (Sadece bakınıyorum) diyerek rahatça gezebilirsiniz.",
        "formula": "Can I help you? -> I'm just browsing, thank you.",
        "keyPhrase": "I'm just browsing, thanks. | I'm looking for a warm sweater.",
        "subPoints": [
          "Eğer belirli bir şey arıyorsanız: 'I'm looking for a winter jacket.'",
          "'Browse' vitrin gezmek, etrafa göz atmak demektir."
        ],
        "rationale": "Mağaza içi ilk temas stresini ortadan kaldırır."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Deneme Kabini ve Beden Sorma",
        "content": "Beğendiğiniz kıyafeti denemek için 'Can I try this on?' kalıbı kullanılır. 'Try on' üstüne giyip denemek demektir. Kabinlerin yeri ise 'Where are the fitting rooms / changing rooms?' sorusuyla öğrenilir.",
        "formula": "Can I try this on?  |  Where are the fitting rooms?",
        "keyPhrase": "Where is the changing room? | Do you have this in size 38?",
        "subPoints": [
          "Çoğul bir şey denerken: 'Can I try THESE on?' (ayakkabı, pantolon).",
          "İngiltere'de 'changing room', Amerika'da 'fitting room' yaygındır."
        ],
        "rationale": "Kıyafet alışverişinin en kritik aşamasını öğretir."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: Kasada Ödeme ve Fiş İsteme",
        "content": "Kasada ödeme yaparken temassız kart veya nakit seçeneğini belirtin: 'Can I pay by contactless card?' (Temassız kartla ödeyebilir miyim?). Ayrılırken 'Can I have a receipt, please?' diyerek faturanızı alın ('receipt' /rɪˈsiːt/ kelimesinde 'p' okunmaz!).",
        "formula": "Can I pay by card?  |  Can I have a receipt, please?",
        "keyPhrase": "Here is your receipt. | Would you like a bag?",
        "subPoints": [
          "'Receipt' kelimesinde 'P' harfi KESİNLİKLE OKUNMAZ: /rɪˈsiːt/!",
          "Poşet ücretli olduğu için görevli 'Would you like a bag?' diye sorar."
        ],
        "rationale": "Kasa işlemlerini ve 'receipt' kelimesinin fonetik tuzağını çözer."
      }
    ],
    "ruleCards": [
      {
        "ruleTitle": "'Try on' Öbek Fiil Kuralı",
        "formula": "try THIS on  |  try THEM on (*try on it YANLIŞ)",
        "explanation": "'Try on' zamirle kullanıldığında zamir ortaya girer: 'try this on', 'try them on'.",
        "exampleSnippet": "I love this jacket; can I try it on?",
        "tipNote": "Zamir ortaya girer: try IT on!"
      },
      {
        "ruleTitle": "'Receipt' Sessiz 'P' Kuralı",
        "formula": "RECEIPT = /rɪˈsiːt/ (*re-sept değil!)",
        "explanation": "Fiş/makbuz anlamına gelen 'receipt' kelimesinde 'p' harfi okunmaz.",
        "cautionNote": "Asla 'p' sesini çıkarmayın; 'risit' deyin."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "Can I try on this jacket? - Yes, you can try on it.",
        "correctExample": "Can I try this jacket on? - Yes, you can try it on.",
        "rootCause": "'Try on' öbeğinde 'it' zamirini sona koymak.",
        "memoryTip": "Zamir araya girer: TRY IT ON!"
      },
      {
        "wrongExample": "Give me the resipt please.",
        "correctExample": "Could I have the receipt, please?",
        "rootCause": "'Receipt' kelimesini yanlış telaffuz etmek ve emreder gibi istemek.",
        "memoryTip": "P harfini yut, kibar iste: Could I have the receipt /rɪˈsiːt/, please?"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Büyük Bir Alışveriş Merkezinde Giysi Alışverişi",
      "description": "Müşteri bir mont beğenir, dener ve kasada ödeme yapar.",
      "contextType": "daily",
      "dialogue": [
        {
          "speaker": "Sales Associate",
          "textEn": "Hello! Can I help you find anything today?",
          "textTr": "Merhaba! Bugün bir şey bulmanıza yardımcı olabilir miyim?"
        },
        {
          "speaker": "Customer",
          "textEn": "Hello! Yes, I really like this black wool coat. Do you have it in a medium size?",
          "textTr": "Merhaba! Evet, bu siyah yün kabanı çok beğendim. Bunun M bedeni var mı acaba?"
        },
        {
          "speaker": "Sales Associate",
          "textEn": "Let me check the stock... Yes, here is a medium. Would you like to try it on?",
          "textTr": "Stoğu kontrol edeyim... Evet, işte bir M beden. Üzerinizde denemek ister misiniz?"
        },
        {
          "speaker": "Customer",
          "textEn": "Yes please! Where are the fitting rooms?",
          "textTr": "Evet lütfen! Soyunma kabinleri nerede?"
        },
        {
          "speaker": "Sales Associate",
          "textEn": "They are right around the corner on the left.",
          "textTr": "Tam köşeyi dönünce sol taraftalar."
        }
      ],
      "culturalNote": "İngiltere'de mağazalarda kıyafeti denerken kabine en fazla 5-6 parça ürün sokulmasına izin veren numaralı kartlar verilir."
    },
    "contrastiveAnalysis": {
      "title": "Üzerinde Denemek vs Try on",
      "englishConcept": "Try [something] on",
      "turkishDifference": "Türkçede 'denemek' tek kelimedir ('montu deneyebilir miyim?'). İngilizcede ise giysi denemek için 'try on' öbek fiili kullanılır.",
      "directComparison": [
        {
          "context": "Kıyafet deneme",
          "en": "Can I try this on?",
          "trMeaning": "Bunu deneyebilir miyim?",
          "commonErrorTr": "*Can I try this?",
          "whyItMatters": "Kıyafette 'on' edatı şarttır."
        }
      ]
    },
    "memoryHook": "ALIŞVERİŞ ZİNCİRİ: Bakıyorsan 'just browsing', giyeceksen 'try it on', öderken 'by card', fiş isterken 'receipt'!",
    "examples": [
      {
        "en": "Do you have these leather shoes in a size forty-two?",
        "tr": "Bu deri ayakkabıların kırk iki numarası var mı?",
        "highlightedWords": [
          "in a size forty-two"
        ],
        "grammarCategory": "in a size + numara",
        "contextNote": "Ayakkabı numarası sorma.",
        "breakdownNote": "Do you have + these shoes + in a size forty-two?"
      },
      {
        "en": "Can I return this sweater if it does not fit properly?",
        "tr": "Eğer üzerime tam oturmazsa bu kazağı iade edebilir miyim?",
        "highlightedWords": [
          "return this sweater",
          "fit properly"
        ],
        "grammarCategory": "return + fit",
        "contextNote": "İade politikası sorma.",
        "breakdownNote": "Can I return + nesne + if it does not fit."
      },
      {
        "en": "Is there a discount on these winter boots during the seasonal sale?",
        "tr": "Sezon indiriminde bu kışlık botlarda bir indirim var mı?",
        "highlightedWords": [
          "Is there a discount"
        ],
        "grammarCategory": "Is there a discount on",
        "contextNote": "İndirim sorgulama.",
        "breakdownNote": "Is there a discount + on these boots."
      }
    ],
    "vocabulary": [
      {
        "word": "Fitting room",
        "phonetic": "/ˈfɪt.ɪŋ ˌruːm/",
        "partOfSpeech": "noun",
        "meaningTr": "Soyunma/deneme kabini",
        "exampleSentence": "Where is the fitting room?"
      },
      {
        "word": "Receipt",
        "phonetic": "/rɪˈsiːt/",
        "partOfSpeech": "noun",
        "meaningTr": "Fiş, fatura makbuzu (p okunmaz)",
        "exampleSentence": "Keep your receipt for refund."
      },
      {
        "word": "Browse",
        "phonetic": "/braʊz/",
        "partOfSpeech": "verb",
        "meaningTr": "Göz gezdirmek, bakmak",
        "exampleSentence": "I'm just browsing, thanks."
      },
      {
        "word": "Discount",
        "phonetic": "/ˈdɪs.kaʊnt/",
        "partOfSpeech": "noun",
        "meaningTr": "İndirim",
        "exampleSentence": "Is there a student discount?"
      }
    ],
    "quickCheck": {
      "question": "Mağazada bir pantolonu denemek istediğinizi satış görevlisine en doğru şekilde nasıl söylersiniz?",
      "options": [
        "Can I try these trousers on, please?",
        "Can I try on these, please?",
        "Do I can try this trouser?",
        "Can I trying this trouser on?"
      ],
      "correctIndex": 0,
      "explanation": "Pantolon İngilizcede daima çoğuldur ('these trousers') ve 'try ... on' kalıbı kullanılır."
    },
    "exercise": {
      "prompt": "Alışveriş diyaloğundaki boşluğa uygun soruyu yerleştirin:",
      "sentence": "Customer: 'I really like this blue jacket. ___ ?' - Associate: 'Yes, here is a size Large.'",
      "options": [
        "Do you have this in a large size",
        "Are you having large size",
        "How much is large size",
        "Is this a large"
      ],
      "correctAnswer": "Do you have this in a large size",
      "hint": "Müşteri beğendiği ürünün büyük (L) bedeninin olup olmadığını sormaktadır.",
      "explanation": "Beden sormak için standart kalıp 'Do you have this in [size]?'dir."
    },
    "sentenceBuilder": {
      "promptTr": "Affedersiniz, kasada temassız kredi kartıyla ödeme yapabilir miyim?",
      "targetEn": "Excuse me can I pay by contactless credit card at the checkout",
      "availableWords": [
        "Excuse",
        "me",
        "can",
        "I",
        "pay",
        "by",
        "contactless",
        "credit",
        "card",
        "at",
        "the",
        "checkout",
        "with",
        "in"
      ],
      "explanation": "Nezaket açılışı (Excuse me) + soru kalıbı (can I pay) + ödeme yöntemi (by contactless credit card) + yer (at the checkout)."
    },
    "summaryTakeaways": [
      "Mağazada sadece bakıyorsanız 'I'm just browsing, thanks' denir.",
      "Kıyafet denemek için 'Can I try this on?' kalıbı kullanılır.",
      "'Receipt' kelimesinde 'P' harfi KESİNLİKLE okunmaz (/rɪˈsiːt/).",
      "Beden sorarken 'Do you have this in size [M/L/38]?' denir."
    ]
  },
  "78": {
    "skillType": "vocabulary",
    "concreteCompetency": "A1 standardında temel giysi isimlerini (shirt, T-shirt, jacket, trousers, dress, skirt, shoes, boots), beden ölçülerini (small, medium, large) ve renk uyumlarını ('It fits well', 'It matches your shoes') doğru sıfat tamlamalarıyla hatasız kullanabilmek.",
    "whyItMatters": "Kendi tarzınızı anlatırken, alışverişte aradığınız ürünü tarif ederken veya birine iltifat ederken ('Bu renk sana çok yakışmış') giysi ve renk bilgisi gündelik hayatın kalbidir.",
    "linguisticLogic": "İngilizcede giyim ve renkler konusunda 3 temel kural vardır: 1) ÇİFT BACAKLI GİYSİLER DAİMA ÇOĞULDUR: İki bacağı olan veya çift halinde giyilen giysiler İngilizcede ASLA tekil kullanılamaz! 'trousers' (pantolon), 'jeans' (kot pantolon), 'shorts' (şort), 'glasses' (gözlük), 'shoes' (ayakkabılar). Bu kelimeler tek bir pantolon olsa bile 'ARE' fiili alır: 'My trousers ARE clean' (*My trousers is YANLIŞ!). Bir adet demek için 'a pair of trousers' denir. 2) SIFAT SIRALAMASI: Renkler ve beden sıfatları isimden ÖNCE gelir: 'a black leather jacket', 'a small red dress'. 3) FIT vs MATCH vs SUIT AYRIMI: 'Fit' bedenin uyması (dar/bol olmaması), 'Match' iki rengin/eşyanın birbiriyle uyumu, 'Suit' ise bir kıyafetin o kişiye yakışmasıdır.",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Çoğul Giysiler Kuralı (Trousers, Jeans, Shoes)",
        "content": "İki bacaklı veya çift olan her kıyafet çoğuldur: trousers, jeans, pants, shorts, shoes, boots, glasses. Tekil zamir 'it' ile değil, çoğul zamir 'THEY' ile temsil edilirler: 'These jeans are very comfortable. They fit me perfectly.'",
        "formula": "Trousers / Jeans / Shoes + ARE (Daima Çoğul!)",
        "keyPhrase": "Where are my black trousers? | These shoes are too tight.",
        "subPoints": [
          "*This trouser is nice YANLIŞTIR -> 'These trousers are nice' DOĞRUDUR.",
          "Tekil gibi saymak için: 'A pair of jeans' (bir çift kot pantolon)."
        ],
        "rationale": "İngilizcenin en temel çoğul giysi gramer refleksini oturtur."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Bedenler ve Beden Uyumu (Sizes & Fit)",
        "content": "Temel bedenler: Small (S - küçük), Medium (M - orta), Large (L - büyük), Extra Large (XL). Bir kıyafetin bedeninize tam gelip gelmediğini anlatmak için: 'It fits me well' (Bana tam uyuyor/geliyor), 'It is too tight' (Çok dar), 'It is too loose' (Çok bol).",
        "formula": "It fits me well  |  It is too tight (dar) / loose (bol)",
        "keyPhrase": "This jacket fits me perfectly. | These shoes are too small.",
        "subPoints": [
          "'Fit' fiziksel ölçü uyumudur.",
          "'Too' aşırı/fazla anlamına gelir: 'too big' (fazla büyük)."
        ],
        "rationale": "Alışverişte deneme kabini değerlendirmelerini ifade edebilmeyi sağlar."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: Renk Uyumu ve Yakışma (Match vs Suit)",
        "content": "İki eşyanın renkleri birbirine uyuyorsa 'MATCH' kullanılır: 'Your bag matches your shoes' (Çantan ayakkabılarına uyuyor). Bir kıyafet bir kişiye yakışmışsa 'SUIT' kullanılır: 'That blue dress really suits you!' (O mavi elbise sana gerçekten çok yakışmış!).",
        "formula": "[Eşya 1] matches [Eşya 2]  |  [Kıyafet] suits [Kişi]",
        "keyPhrase": "Blue suits you very well! | The tie matches the shirt.",
        "subPoints": [
          "'Match' iki nesnenin birbiriyle uyumudur.",
          "'Suit' bir şeyin insana yakışmasıdır."
        ],
        "rationale": "Sosyal iltifat ve stil analizindeki kritik fiil ayrımını kazandırır."
      }
    ],
    "ruleCards": [
      {
        "ruleTitle": "Pantolon ve Kotların Çoğulluğu",
        "formula": "These trousers / jeans ARE (*is değil!)",
        "explanation": "Türkçede 'pantolonum nerede' denir; İngilizcede 'Where are my trousers' denir. İki paçası olduğu için daima çoğuldur.",
        "exampleSnippet": "These jeans are on sale today.",
        "cautionNote": "Asla 'a trouser' demeyin; 'a pair of trousers' deyin."
      },
      {
        "ruleTitle": "Suit vs Match Ayrımı",
        "formula": "Suit = Kişiye Yakışmak  |  Match = Renklerin Birbirine Uyması",
        "explanation": "Elbise insana 'suit' eder, çanta ayakkabıya 'match' eder.",
        "tipNote": "İltifat ederken 'It suits you!' de."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "Where is my new jeans?",
        "correctExample": "Where are my new jeans?",
        "rootCause": "Kot pantolonu tek bir nesne sanıp 'is' kullanmak.",
        "memoryTip": "Jeans çoğuldur, iki bacağı vardır; ARE ister: Where ARE my jeans?"
      },
      {
        "wrongExample": "This shirt matches you very well.",
        "correctExample": "This shirt suits you very well.",
        "rootCause": "Kişiye yakışma fiili olan 'suit' yerine 'match' kullanmak.",
        "memoryTip": "İnsana yakışıyorsa SUIT kullan: It SUITS you!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Düğün Öncesi Kıyafet Seçimi ve Fikir Alma",
      "description": "İki arkadaş davet için takım elbise ve elbise denerken fikir alışverişinde bulunur.",
      "contextType": "daily",
      "dialogue": [
        {
          "speaker": "Mark",
          "textEn": "What do you think of this navy blue suit? Does it fit me?",
          "textTr": "Bu lacivert takım elbise hakkında ne düşünüyorsun? Üzerime oldu mu?"
        },
        {
          "speaker": "Sarah",
          "textEn": "It fits your shoulders perfectly, and navy blue really suits your skin tone!",
          "textTr": "Omuzlarına mükemmel şekilde oturdu ve lacivert ten rengine gerçekten çok yakıştı!"
        },
        {
          "speaker": "Mark",
          "textEn": "Thanks! And does this silk tie match the suit?",
          "textTr": "Teşekkürler! Peki bu ipek kravat takıma uyuyor mu?"
        },
        {
          "speaker": "Sarah",
          "textEn": "Yes, the silver stripes match your white shirt and dark jacket beautifully.",
          "textTr": "Evet, gümüş çizgiler beyaz gömleğine ve koyu ceketine çok güzel uyuyor."
        }
      ],
      "culturalNote": "Özel davetlerde kıyafet uyumu hakkında konuşurken 'It suits you' demek en samimi iltifattır."
    },
    "contrastiveAnalysis": {
      "title": "Pantolon Tekilliği vs Çoğulluğu",
      "englishConcept": "Trousers/Jeans daima ÇOĞULDUR.",
      "turkishDifference": "Türkçede 'pantolon, şort, gözlük' kelimeleri tekildir ('pantolonum temizdir'). İngilizcede ise bu kelimeler kesinlikle çoğul kabul edilir ve çoğul fiil alır.",
      "directComparison": [
        {
          "context": "Pantolon öznesi",
          "en": "These trousers are new.",
          "trMeaning": "Bu pantolon yeni.",
          "commonErrorTr": "*This trouser is new.",
          "whyItMatters": "İngilizcede daima 'these trousers are' denir."
        }
      ]
    },
    "memoryHook": "GİYİM KURALI: İki bacaklılar ÇOĞULDUR (jeans are), bedeni oturuyorsa FITS, sana yakışmışsa SUITS!",
    "examples": [
      {
        "en": "These black trousers are too long for me; I need a smaller size.",
        "tr": "Bu siyah pantolon bana çok uzun; daha küçük bir bedene ihtiyacım var.",
        "highlightedWords": [
          "These black trousers are",
          "too long"
        ],
        "grammarCategory": "Çoğul giysi + too + sıfat",
        "contextNote": "Beden ve boy uyumsuzluğu.",
        "breakdownNote": "These trousers are (çoğul) + too long."
      },
      {
        "en": "That emerald green evening dress really suits your green eyes.",
        "tr": "O zümrüt yeşili gece elbisesi yeşil gözlerine gerçekten çok yakışıyor.",
        "highlightedWords": [
          "really suits your"
        ],
        "grammarCategory": "suits (kişiye yakışmak)",
        "contextNote": "İltifat ve stil.",
        "breakdownNote": "Özne + suits (yakışır) + nesne."
      },
      {
        "en": "His brown leather belt matches his oxford shoes perfectly.",
        "tr": "Kahverengi deri kemeri oxford ayakkabılarıyla kusursuz bir şekilde uyuyor.",
        "highlightedWords": [
          "matches his oxford shoes"
        ],
        "grammarCategory": "matches (birbiriyle uyum)",
        "contextNote": "Aksesuar uyumu.",
        "breakdownNote": "Özne + matches (uyar) + nesne."
      }
    ],
    "vocabulary": [
      {
        "word": "Trousers",
        "phonetic": "/ˈtraʊ.zəz/",
        "partOfSpeech": "noun",
        "meaningTr": "Pantolon (daima çoğul, US: pants)",
        "exampleSentence": "These trousers are clean."
      },
      {
        "word": "Tight",
        "phonetic": "/taɪt/",
        "partOfSpeech": "adjective",
        "meaningTr": "Dar, sıkan",
        "exampleSentence": "These shoes are too tight."
      },
      {
        "word": "Loose",
        "phonetic": "/luːs/",
        "partOfSpeech": "adjective",
        "meaningTr": "Bol, gevşek",
        "exampleSentence": "The jacket is too loose."
      },
      {
        "word": "Suit",
        "phonetic": "/suːt/",
        "partOfSpeech": "verb",
        "meaningTr": "Yakışmak (isim: takım elbise)",
        "exampleSentence": "That red hat suits you."
      }
    ],
    "quickCheck": {
      "question": "'Benim yeni kot pantolonum nerede? Onlar çok rahattı' ifadesinin doğru İngilizcesi hangisidir?",
      "options": [
        "Where are my new jeans? They are very comfortable.",
        "Where is my new jeans? It is very comfortable.",
        "Where are my new jean? They are very comfortable.",
        "Where is my new jean? It are very comfortable."
      ],
      "correctIndex": 0,
      "explanation": "'Jeans' kelimesi daima çoğuldur; 'are' ve 'they' zamiriyle kullanılır."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa uygun fiili yerleştirin:",
      "sentence": "You should definitely buy that dark blue jacket; it ___ you wonderfully!",
      "options": [
        "suits",
        "matches",
        "fits with",
        "wears"
      ],
      "correctAnswer": "suits",
      "hint": "Bir kıyafetin bir insana çok yakıştığını belirtmek için hangi fiil kullanılır?",
      "explanation": "Bir giysinin kişiye yakışmasını ifade etmek için 'suit' fiili kullanılır: 'it suits you'."
    },
    "sentenceBuilder": {
      "promptTr": "Bu koyu mavi takım elbise sana çok yakışıyor ve beyaz gömleğinle mükemmel uyuyor.",
      "targetEn": "This dark blue suit suits you very well and matches your white shirt perfectly",
      "availableWords": [
        "This",
        "dark",
        "blue",
        "suit",
        "suits",
        "you",
        "very",
        "well",
        "and",
        "matches",
        "your",
        "white",
        "shirt",
        "perfectly",
        "suit",
        "match"
      ],
      "explanation": "Özne (This dark blue suit) + suits you very well + bağlaç (and) + matches your white shirt perfectly."
    },
    "summaryTakeaways": [
      "Trousers, jeans, shorts, shoes gibi giysiler daima ÇOĞULDUR ve 'are' alır.",
      "Beden uyumu için 'FIT' (dar/bol olmama), kişiye yakışması için 'SUIT' kullanılır.",
      "İki eşyanın renk/stil uyumu için 'MATCH' fiili kullanılır.",
      "Bedenler Small (S), Medium (M), Large (L) olarak sıralanır."
    ]
  },
  "79": {
    "skillType": "speaking",
    "concreteCompetency": "A1 standardında birlikte bir aktivite yapmayı önermek için 'LET'S...', 'SHALL WE...?', 'HOW ABOUT...?' ve 'WHY DON'T WE...?' öneri kalıplarını yapısal kurallarıyla ('Let's + V1', 'How about + V-ing') hatasız kullanabilmek ve önerileri kibarca kabul/ret edebilmek.",
    "whyItMatters": "Arkadaşlarla plan yaparken, hafta sonu etkinliği belirlerken veya iş toplantısında bir mola teklif ederken öneri kalıpları sosyal hayatın ve işbirliğinin motorudur.",
    "linguisticLogic": "İngilizcede birlikte bir eylem yapmayı teklif eden 4 ana kalıp vardır: 1) LET'S + YALIN FİİL (V1): En doğrudan ve coşkulu tekliftir: 'Let's go to the cinema' (Hadi sinemaya gidelim). Olumsuzu: 'Let's NOT stay home'. 2) SHALL WE + YALIN FİİL (V1)?: Daha nazik ve karşı tarafın fikrini soran tekliftir: 'Shall we have coffee?' (Kahve içelim mi?). 3) HOW ABOUT / WHAT ABOUT + FİİL-ING?: Öneri sorusudur ve edat kuralı gereği FİİLE '-ING' TAKAR: 'How about HAV-ING lunch together?' (Birlikte öğle yemeği yemeye ne dersin?). 4) WHY DON'T WE + YALIN FİİL (V1)?: 'Neden yapmıyoruz ki?' mantığıyla öneri getirir: 'Why don't we invite Mark?'.",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: 'Let's' ile Doğrudan Öneri (Let's + V1)",
        "content": "'Let us'ın kısaltması olan 'Let's' arkasından YALIN FİİL alır. Soru işareti almaz, düz cümledir: 'Let's take a taxi' (Hadi taksiye binelim). Olumsuzu 'Let's NOT' ile yapılır: 'Let's not spend too much money' (Hadi çok fazla para harcamayalım).",
        "formula": "LET'S + Yalın Fiil (V1)  |  Olumsuz: LET'S NOT + V1",
        "keyPhrase": "Let's go for a walk. | Let's not argue about this.",
        "subPoints": [
          "*Let's to go YANLIŞTIR -> 'Let's go' DOĞRUDUR.",
          "*Let's don't go YANLIŞTIR -> 'Let's not go' DOĞRUDUR."
        ],
        "rationale": "En popüler öneri kalıbının olumlu ve olumsuz kullanımını oturtur."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: 'How about' ile -ing Eki Kuralı",
        "content": "'About' bir edat (preposition) olduğu için arkasından gelen eyleme '-ING' takısı taktırmak ZORUNDADIR! 'How about + V-ing': 'How about going to the museum?' (Müzeye gitmeye ne dersin?). İsim de gelebilir: 'How about a cup of coffee?' (Bir fincan kahveye ne dersin?).",
        "formula": "How about / What about + FİİL-ING / İsim?",
        "keyPhrase": "How about eating sushi tonight? | How about this restaurant?",
        "subPoints": [
          "*How about go... YANLIŞTIR -> 'How about GOING...' DOĞRUDUR.",
          "Öneri yaparken çok sempatik ve esnek bir tondur."
        ],
        "rationale": "Edat ardına gelen fiilin -ing alması kuralını öneri bağlamında kavratır."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: Önerileri Kabul Etme ve Kibarca Geri Çevirme",
        "content": "Bir teklif geldiğinde verilecek standart yanıtlar: KABUL: 'That sounds great!' (Kulağa harika geliyor!), 'I'd love to!' (Çok isterim!), 'Why not?' (Neden olmasın!). KİBARCA RET: 'I'd love to, but I'm busy tonight' (Çok isterdim ama bu akşam meşgulüm), 'I'm afraid I have other plans.'",
        "formula": "Kabul: That sounds great!  <-->  Ret: I'd love to, but...",
        "keyPhrase": "That sounds like a wonderful idea! | Maybe next time.",
        "subPoints": [
          "Tek başına 'No' demek kaba algılanır.",
          "'I'd love to, but...' kalıbı en nazik ret kalkanıdır."
        ],
        "rationale": "Sosyal diyalog akışında kabul ve ret nezaketini pekiştirir."
      }
    ],
    "ruleCards": [
      {
        "ruleTitle": "How About + V-ing Kuralı",
        "formula": "How about + Verb-ING (*How about go YANLIŞ)",
        "explanation": "'About' edat olduğu için arkasından fiil gelirse mutlaka -ing takısı alır.",
        "exampleSnippet": "How about watching a movie? (How about watch değil)",
        "tipNote": "How about gördüysen fiile -ing ekle!"
      },
      {
        "ruleTitle": "Let's Olumsuzu: 'Let's not'",
        "formula": "Let's NOT + V1 (*Let's don't YANLIŞ)",
        "explanation": "Let's olumsuz yapılırken 'don't' kullanılmaz; 'not' doğrudan fiilin önüne gelir.",
        "cautionNote": "Let's not be late for the flight!"
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "How about go to the seaside tomorrow?",
        "correctExample": "How about going to the seaside tomorrow?",
        "rootCause": "'How about' kalıbının edat kuralını unutup fiili yalın bırakmak.",
        "memoryTip": "How about bir edattır; fiile -ING taktırmadan bırakmaz: How about GOING?"
      },
      {
        "wrongExample": "Let's don't stay here.",
        "correctExample": "Let's not stay here.",
        "rootCause": "Geniş zaman alışkanlığıyla 'don't' ile olumsuz yapmaya çalışmak.",
        "memoryTip": "Let's cümlesine don't sokma: LET'S NOT STAY!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Cuma Akşamı Hafta Sonu Planı Yapma",
      "description": "Üç iş arkadaşı cuma mesai bitiminde hafta sonu için plan yapar.",
      "contextType": "daily",
      "dialogue": [
        {
          "speaker": "Emma",
          "textEn": "It has been a very busy week! Let's do something fun this weekend.",
          "textTr": "Çok yoğun bir hafta oldu! Hadi bu hafta sonu eğlenceli bir şeyler yapalım."
        },
        {
          "speaker": "Liam",
          "textEn": "That sounds great! Shall we go hiking in the national park on Saturday?",
          "textTr": "Kulağa harika geliyor! Cumartesi günü milli parkta doğa yürüyüşüne gidelim mi?"
        },
        {
          "speaker": "Noah",
          "textEn": "The weather forecast says it is going to rain on Saturday. How about visiting the new art gallery instead?",
          "textTr": "Hava durumu cumartesi yağmur yağacağını söylüyor. Onun yerine yeni sanat galerisini ziyaret etmeye ne dersiniz?"
        },
        {
          "speaker": "Emma",
          "textEn": "I love that idea! And why don't we have Italian dinner afterwards?",
          "textTr": "Bu fikre bayıldım! Ve sonrasında neden İtalyan yemeği yemiyoruz ki?"
        },
        {
          "speaker": "Liam",
          "textEn": "Perfect plan! Let's meet in front of the gallery at two o'clock.",
          "textTr": "Kusursuz plan! Saat ikide galerinin önünde buluşalım."
        }
      ],
      "culturalNote": "İngilizcede arkadaş ortamında plan yaparken ardı ardına farklı öneri kalıpları (Shall we, How about, Let's) kullanmak diyaloğu çok doğal kılar."
    },
    "contrastiveAnalysis": {
      "title": "Hadi / -elim mi vs Let's / Shall we",
      "englishConcept": "Let's (Hadi) + Shall we (Yapalım mı?) + How about (Ne dersin?)",
      "turkishDifference": "Türkçede istek kipi fiile eklenir ('gidelim', 'yapalım mı?'). İngilizcede ise cümlenin başında farklı kalıplar (Let's, Shall we, How about) kullanılır.",
      "directComparison": [
        {
          "context": "Doğrudan teklif",
          "en": "Let's start.",
          "trMeaning": "Hadi başlayalım.",
          "commonErrorTr": "Sorunsuz eşleşir.",
          "whyItMatters": "Standart 'Let's' kalıbı."
        },
        {
          "context": "Öneri sorusu",
          "en": "How about going out?",
          "trMeaning": "Dışarı çıkmaya ne dersin?",
          "commonErrorTr": "*How about go out?",
          "whyItMatters": "Fiil -ing almak zorundadır."
        }
      ]
    },
    "memoryHook": "ÖNERİ DÖRTLÜSÜ: Let's + V1, Shall we + V1, Why don't we + V1, ama HOW ABOUT + V-ING!",
    "examples": [
      {
        "en": "Shall we take a short coffee break before we review the next report?",
        "tr": "Sonraki raporu incelemeden önce kısa bir kahve molası verelim mi?",
        "highlightedWords": [
          "Shall we take a short coffee break"
        ],
        "grammarCategory": "Shall we + V1",
        "contextNote": "İş ortamı mola önerisi.",
        "breakdownNote": "Shall we + take (yalın fiil) + nesne + zaman."
      },
      {
        "en": "How about inviting our new neighbors for brunch on Sunday morning?",
        "tr": "Pazar sabahı yeni komşularımızı kahvaltıya davet etmeye ne dersin?",
        "highlightedWords": [
          "How about inviting"
        ],
        "grammarCategory": "How about + V-ing",
        "contextNote": "Sosyal komşuluk teklifi.",
        "breakdownNote": "How about + inviting (-ing eki) + nesne + zaman."
      },
      {
        "en": "Why don't we book our flight tickets online to get an early discount?",
        "tr": "Erken rezervasyon indirimi almak için uçak biletlerimizi neden internetten ayırtmıyoruz ki?",
        "highlightedWords": [
          "Why don't we book"
        ],
        "grammarCategory": "Why don't we + V1",
        "contextNote": "Akılcı seyahat önerisi.",
        "breakdownNote": "Why don't we + book (yalın fiil) + nesne + amaç."
      }
    ],
    "vocabulary": [
      {
        "word": "Forecast",
        "phonetic": "/ˈfɔː.kɑːst/",
        "partOfSpeech": "noun",
        "meaningTr": "Hava tahmini",
        "exampleSentence": "The weather forecast predicts rain."
      },
      {
        "word": "Afterwards",
        "phonetic": "/ˈɑːf.tə.wədz/",
        "partOfSpeech": "adverb",
        "meaningTr": "Sonrasında, daha sonra",
        "exampleSentence": "We can have dinner afterwards."
      },
      {
        "word": "Break",
        "phonetic": "/breɪk/",
        "partOfSpeech": "noun",
        "meaningTr": "Mola, ara",
        "exampleSentence": "Let's take a ten-minute break."
      },
      {
        "word": "Instead",
        "phonetic": "/ɪnˈsted/",
        "partOfSpeech": "adverb",
        "meaningTr": "Bunun yerine",
        "exampleSentence": "Let's drink tea instead."
      }
    ],
    "quickCheck": {
      "question": "'Hafta sonu gölde balık tutmaya gitmeye ne dersin?' önerisini İngilizce kurmak için hangi cümle TAMAMEN DOĞRUDUR?",
      "options": [
        "How about going fishing at the lake this weekend?",
        "How about go fishing at the lake this weekend?",
        "Let's to go fishing at the lake this weekend?",
        "Shall we going fishing at the lake this weekend?"
      ],
      "correctIndex": 0,
      "explanation": "'How about' kalıbından sonra fiil '-ing' alır: 'How about going fishing...?'"
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa uygun öneri biçimini yerleştirin:",
      "sentence": "It is getting late and dark; ___ not walk through the deserted alley.",
      "options": [
        "let's",
        "shall we",
        "how about",
        "why don't"
      ],
      "correctAnswer": "let's",
      "hint": "Cümlede 'not + yalın fiil' ('not walk') vardır ve düz bir öneri cümlesidir.",
      "explanation": "Olumsuz teklifte 'Let's not + yalın fiil' kalıbı kullanılır: 'let's not walk'."
    },
    "sentenceBuilder": {
      "promptTr": "Hadi bu akşam İtalyan restoranında akşam yemeği yiyelim ve yeni projeyi kutlayalım.",
      "targetEn": "Let us have dinner at the Italian restaurant and celebrate the new project tonight",
      "availableWords": [
        "Let",
        "us",
        "have",
        "dinner",
        "at",
        "the",
        "Italian",
        "restaurant",
        "and",
        "celebrate",
        "the",
        "new",
        "project",
        "tonight",
        "having",
        "to"
      ],
      "explanation": "Öneri açılışı (Let us have dinner) + yer (at the Italian restaurant) + bağlaç (and) + ikinci eylem (celebrate the new project) + zaman (tonight)."
    },
    "summaryTakeaways": [
      "'Let's + V1' doğrudan ve enerjik öneri kalıbıdır; olumsuzu 'Let's not'tur.",
      "'How about + V-ing' edat kuralı gereği eyleme '-ing' takar.",
      "'Shall we + V1?' ve 'Why don't we + V1?' soru formundaki nazik tekliflerdir.",
      "Öneriyi kabul ederken 'That sounds great!', nazikçe reddederken 'I'd love to, but...' denir."
    ]
  },
  "80": {
    "skillType": "speaking",
    "concreteCompetency": "A1 Seviye Sonu Entegrasyonu: A1 düzeyindeki 80 ders boyunca öğrenilen tüm temel dilbilgisi, kelime ve iletişim reflekslerini (kendini tanıtma, günlük rutinler, saatler, aile, mekanlar, soru kalıpları, yetenekler, şimdiki zaman, restoranda sipariş ve alışveriş) gerçekçi ve kapsamlı bir büyük final simülasyonunda akıcı bir şekilde birleştirebilmek.",
    "whyItMatters": "A1 seviyesinin son dersi bir dönüm noktasıdır. Öğrenci artık başlangıç seviyesini geride bırakmış, günlük hayatta tek başına hayatta kalabilecek ve basit düzeyde her durumunu anlatabilecek yeterliliğe ulaşmıştır.",
    "linguisticLogic": "A1 Yeterlilik Sentezi şu 6 ana sütunun kusursuz entegrasyonuna dayanır: 1) KİMLİK & MESLEK: To be ve iyelik sıfatlarıyla kendini, ailesini ve işini tanıtmak (I am, my name is, she is an architect). 2) GÜNLÜK RUTİNLER & ZAMANLAR: Geniş zaman ve sıklık zarflarıyla bir gününü aktarmak (I wake up at 7:00, I usually take the bus). 3) MEKANLAR & SORU SORMA: WH- sorularıyla bilgi edinmek ve yön tarifini anlamak (Where is...?, How much is...?). 4) YETENEKLER & İZİN: Can, can't, could you, may I ile iletişim kurmak. 5) ŞİMDİKİ ZAMAN: Anlık olayları aktarmak (Right now I am traveling). 6) RESTORAN & ALIŞVERİŞ: İhtiyaçlarını nezaketle satın almak (I would like, could we have the bill).",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: A1 Başlangıç Seviyesi Portresi (Self-Profile)",
        "content": "Kendinizi, mesleğinizi, ailenizi ve boş zaman aktivitelerinizi duraksamadan anlatın: 'Hello, my name is Emre. I am twenty-eight years old and I am a software engineer from Istanbul. I live in an apartment near the center.'",
        "formula": "To Be (Kimlik) + Present Simple (Rutin) + Hobiler",
        "keyPhrase": "I work from Monday to Friday, and I play tennis at weekends.",
        "subPoints": [
          "To be ile durum cümlelerini ve geniş zaman eylemlerini birleştirin.",
          "Söz dizimi disiplinine (SVO: Özne + Fiil + Nesne) harfiyen uyun."
        ],
        "rationale": "Kişisel kimlik sunumunu akıcı bir monoloğa dönüştürür."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Seyahat, Alışveriş ve Restoran Yönetimi",
        "content": "Yabancı bir ülkede tek başınayken otel girişinden siparişe kadar tüm adımları canlandırın: 'Excuse me, could you help me? Where is the nearest metro station? ... In the restaurant: I'd like the grilled chicken, please. Could we have the bill?'",
        "formula": "Rica (Could you) + Konum (Where is) + Sipariş (I'd like)",
        "keyPhrase": "Can I pay by credit card? | Could we have the bill, please?",
        "subPoints": [
          "Yabancı ortamlarda nezaket kalıplarını (Excuse me, please, could you) otomatikleştirin.",
          "Sayılamayan maddelerde ölçü ve belirteçleri doğru seçin."
        ],
        "rationale": "Hayatta kalma İngilizcesinin (survival English) tüm reflekslerini test eder."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: A1 Yeterlilik Belgesi ve A2'ye Geçiş Eşiği",
        "content": "Öğrenci A1 seviyesini tamamladığında şu refleksi kazanmıştır: 'Basit cümlelerle kendimi ifade edebiliyorum, sorular sorabiliyorum, anlık durumumu aktarabiliyorum.' Artık geçmiş zamanın kapısını çalacak (A2) ve hikayeler anlatmaya hazır hale gelecektir.",
        "formula": "A1 Yeterlilik = Durum (To be) + Rutin (Simple) + Anlık (Continuous) + Modals (Can)",
        "keyPhrase": "Congratulations! You have mastered all 80 lessons of Level A1!",
        "subPoints": [
          "80 ders boyunca toplam 400'den fazla hedef kelime ve tüm temel gramer yapıları kavrandı.",
          "Artık A2 seviyesinde 'Geçmiş Zaman' (Past Simple - did/was/were) dünyasına adım atıyorsunuz."
        ],
        "rationale": "Öğrencinin öğrenme yolculuğundaki başarısını tescil eder ve motivasyon sağlar."
      }
    ],
    "ruleCards": [
      {
        "ruleTitle": "A1 Seviyesinin 4 Ana Zaman ve Kip Omurgası",
        "formula": "1) To Be (am/is/are) | 2) Present Simple (V1) | 3) Present Continuous (am/is/are + V-ing) | 4) Can / Can't",
        "explanation": "Bu 4 yapı A1 İngilizcesinin taşıyıcı sütunlarıdır. Bu sütunlar sağlamsa sonraki seviyeler hızla yükselir.",
        "exampleSnippet": "I am a teacher (To be), I work hard (Simple), I am writing now (Continuous), I can speak English (Can).",
        "tipNote": "Bu 4 yapıyı hatasız kullanabiliyorsanız A1 tamamlanmıştır!"
      },
      {
        "ruleTitle": "A2'ye Geçiş Eşiği: Geçmiş Zamana Hazırlık",
        "formula": "A1 = Şimdi ve Genel Doğrular  <-->  A2 = Geçmiş Zaman ve Hikaye Anlatımı",
        "explanation": "A1 seviyesinde şu anı ve genel alışkanlıkları öğrendiniz. A2 seviyesinde ise geçmiş zaman (Past Simple - did, went, saw, was/were) dünyasını fethedeceksiniz.",
        "cautionNote": "A1 yapılarını sağlamlaştırmadan geçmiş zamana geçmeyin."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "I am work every day and I can to swim.",
        "correctExample": "I work every day and I can swim.",
        "rootCause": "Geniş zamanda fiilin önüne 'am' koymak ve 'can'den sonra 'to' eklemek (A1'in en büyük iki hatası).",
        "memoryTip": "Eylemde 'am' yok (I work!), 'can'den sonra 'to' yok (I can swim!)!"
      },
      {
        "wrongExample": "What you do? - I am student.",
        "correctExample": "What do you do? - I am a student.",
        "rootCause": "Soruda yardımcı fiili ve mesleğin önündeki 'a' artikelini unutmak.",
        "memoryTip": "Yardımcı fiilsiz soru, artikelsiz meslek olmaz: What DO you do? - I am A student!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Uluslararası Dil Okulunda A1 Yeterlilik Mülakatı",
      "description": "Öğretmen ve öğrenci A1 kurunu tamamlama mülakatında kapsamlı sohbet eder.",
      "contextType": "daily",
      "dialogue": [
        {
          "speaker": "Teacher",
          "textEn": "Welcome to your A1 level exit interview, Emre! Tell me about yourself, your routine, and what you can do.",
          "textTr": "A1 seviyesi bitirme mülakatına hoş geldin Emre! Bana kendinden, rutinlerinden ve neler yapabildiğinden bahset."
        },
        {
          "speaker": "Emre",
          "textEn": "Hello! My name is Emre. I am twenty-eight years old and I live in Istanbul. I work as a civil engineer from Monday to Friday. I can design structural plans and I can speak English quite well now.",
          "textTr": "Merhaba! Benim adım Emre. Yirmi sekiz yaşındayım ve İstanbul'da yaşıyorum. Pazartesiden Cumaya inşaat mühendisi olarak çalışıyorum. Statik planlar tasarlayabiliyorum ve artık oldukça iyi İngilizce konuşabiliyorum."
        },
        {
          "speaker": "Teacher",
          "textEn": "Excellent fluency! And what are you doing these days outside of work?",
          "textTr": "Mükemmel bir akıcılık! Peki bu günlerde iş dışında neler yapıyorsun?"
        },
        {
          "speaker": "Emre",
          "textEn": "Right now, I am preparing for an international certificate and I often play tennis with colleagues at weekends. If I visit London, I can easily order food, ask for directions, and go shopping on my own!",
          "textTr": "Şu anda uluslararası bir sertifikaya hazırlanıyorum ve hafta sonları meslektaşlarımla sık sık tenis oynuyorum. Londra'yı ziyaret edersem kendi başıma kolayca yemek sipariş edebilir, adres sorabilir ve alışveriş yapabilirim!"
        },
        {
          "speaker": "Teacher",
          "textEn": "Congratulations Emre! You have officially passed Level A1 with flying colors. Welcome to Level A2!",
          "textTr": "Tebrikler Emre! A1 seviyesini üstün başarıyla resmi olarak tamamladın. A2 seviyesine hoş geldin!"
        }
      ],
      "culturalNote": "Avrupa Ortak Dil Kriterleri'ne (CEFR) göre A1'i tamamlayan bir öğrenci günlük temel ihtiyaçlarını yabancı bir ülkede tek başına karşılayabilir."
    },
    "contrastiveAnalysis": {
      "title": "A1 Seviyesinin Büyük Pedagojik Özeti",
      "englishConcept": "CEFR A1 Yeterlilik Standartı (Lessons 1 to 80)",
      "turkishDifference": "Türkçe sondan eklemeli bir dil olduğu için en büyük zorluk yardımcı fiilleri (am/is/are, do/does, can) cümlenin ortasına veya başına doğru yerleştirmektir. 80 ders sonunda bu refleks başarıyla kurulmuştur.",
      "directComparison": [
        {
          "context": "Tam entegrasyon",
          "en": "I live in Turkey, but right now I am visiting London and I can speak basic English.",
          "trMeaning": "Türkiye'de yaşıyorum ama şu an Londra'yı ziyaret ediyorum ve temel İngilizce konuşabiliyorum.",
          "commonErrorTr": "A1'in tüm zamanları bir arada.",
          "whyItMatters": "Zamanlar arası geçiş ustalığı."
        }
      ]
    },
    "memoryHook": "A1 ZİRVESİ: To Be (Kimlik) + Present Simple (Rutin) + Present Continuous (Anlık) + Can (Yetenek) + Alışveriş & Restoran = A1 BAŞARILDI!",
    "examples": [
      {
        "en": "I usually drink black tea in the morning, but today I am having a large cappuccino at a local coffee shop.",
        "tr": "Sabahları genellikle sade çay içerim ama bugün yerel bir kahve dükkanında büyük bir kapuçino içiyorum.",
        "highlightedWords": [
          "usually drink",
          "today I am having"
        ],
        "grammarCategory": "Rutin vs Anlık Entegrasyonu",
        "contextNote": "A1 seviye sentezi.",
        "breakdownNote": "Present Simple (usually drink) + but + Present Continuous (today I am having)."
      },
      {
        "en": "Could you please tell me how many metro stations there are between here and the central museum?",
        "tr": "Burası ile merkez müze arasında kaç tane metro istasyonu olduğunu bana söyleyebilir misiniz lütfen?",
        "highlightedWords": [
          "Could you please tell me",
          "how many metro stations there are"
        ],
        "grammarCategory": "Rica + How many + Konum",
        "contextNote": "Şehirde yön bulma sentezi.",
        "breakdownNote": "Could you please tell me + how many stations + there are."
      },
      {
        "en": "She can play the acoustic guitar very well, but she cannot sing at all.",
        "tr": "Akustik gitarı çok iyi çalabiliyor ama hiç şarkı söyleyemiyor.",
        "highlightedWords": [
          "can play the acoustic guitar",
          "very well",
          "cannot sing at all"
        ],
        "grammarCategory": "Yetenek + Enstrüman + Derece Zarfı",
        "contextNote": "Beceri ve sınır sentezi.",
        "breakdownNote": "Can + play the guitar + very well + but + cannot sing at all."
      }
    ],
    "vocabulary": [
      {
        "word": "Certificate",
        "phonetic": "/səˈtɪf.ɪ.kət/",
        "partOfSpeech": "noun",
        "meaningTr": "Sertifika, yeterlilik belgesi",
        "exampleSentence": "She received her language certificate."
      },
      {
        "word": "Structural",
        "phonetic": "/ˈstrʌk.tʃər.əl/",
        "partOfSpeech": "adjective",
        "meaningTr": "Yapısal, inşaatla ilgili",
        "exampleSentence": "Structural engineering is complex."
      },
      {
        "word": "Fluency",
        "phonetic": "/ˈfluː.ən.si/",
        "partOfSpeech": "noun",
        "meaningTr": "Akıcılık, dile hakimiyet",
        "exampleSentence": "Your speaking fluency is great."
      },
      {
        "word": "Congratulations",
        "phonetic": "/kənˌɡrætʃ.əˈleɪ.ʃənz/",
        "partOfSpeech": "noun",
        "meaningTr": "Tebrikler, kutlarım!",
        "exampleSentence": "Congratulations on passing Level A1!"
      }
    ],
    "quickCheck": {
      "question": "A1 seviyesini tamamlayan bir öğrencinin kendini ve günlük yaşamını anlatırken kurduğu aşağıdaki cümlelerden hangisi DİLBİLGİSEL VE BAĞLAMSAL OLARAK KUSURSUZDUR?",
      "options": [
        "I am a teacher, I work from Monday to Friday, and right now I am learning English.",
        "I am teacher, I am work from Monday to Friday, and now I learn English.",
        "I a teacher, I work at Monday to Friday, and I learning English right now.",
        "I am a teacher, I works from Monday to Friday, and right now I learn English."
      ],
      "correctIndex": 0,
      "explanation": "'I am a teacher' (artikel doğru), 'I work' (Geniş zaman doğru), 'I am learning' (Şimdiki zaman doğru)."
    },
    "exercise": {
      "prompt": "A1 büyük final değerlendirme cümlesindeki boşluğa uygun yapıyı seçin:",
      "sentence": "Excuse me officer, ___ the nearest underground station and how much is a day ticket?",
      "options": [
        "where is",
        "where does",
        "where are",
        "where be"
      ],
      "correctAnswer": "where is",
      "hint": "'The nearest underground station' tekil bir mekandır; konumu hangi soru kalıbıyla sorulur?",
      "explanation": "Tekil bir mekanın konumunu sormak için 'where is' kullanılır: 'where is the nearest underground station'."
    },
    "sentenceBuilder": {
      "promptTr": "Ben A1 seviyesindeki tüm seksen dersi başarıyla tamamladım ve artık A2 seviyesine hazırım.",
      "targetEn": "I completed all eighty lessons in Level A1 and I am now ready for Level A2",
      "availableWords": [
        "I",
        "completed",
        "all",
        "eighty",
        "lessons",
        "in",
        "Level",
        "A1",
        "and",
        "I",
        "am",
        "now",
        "ready",
        "for",
        "Level",
        "A2",
        "complete",
        "is"
      ],
      "explanation": "Büyük final cümlesi: Başarı bildirimi (I completed all eighty lessons in Level A1) + hazır oluş teyidi (and I am now ready for Level A2)."
    },
    "summaryTakeaways": [
      "Tebrikler! A1 seviyesinin 80 dersi de eksiksiz ve derin pedagojiyle tamamlandı.",
      "To be, Present Simple, Present Continuous ve Can/Can't temel sütunları kuruldu.",
      "Restoranda sipariş verme, markette alışveriş yapma ve yön sorma refleksleri kazanıldı.",
      "Artık Geçmiş Zaman dünyasını fethedeceğimiz A2 seviyesine (Ders 81-100) tamamen hazırsınız!"
    ]
  }
};
