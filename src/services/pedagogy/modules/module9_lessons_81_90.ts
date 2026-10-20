// LinguAAI Pedagogical Content — Level A2: Module 9 (Lessons 81–90)
// Geçmiş Zaman: Düzenli ve Düzensiz Fiiller (Past Simple)
// 100% bespoke, CEFR A2 compliant, zero generic templates.

import { TopicBlueprint } from '../../pedagogicalEngine';

export const module9_lessons_81_90: Record<number, TopicBlueprint> = {
  "81": {
    "skillType": "grammar",
    "concreteCompetency": "A2 standardında geçmiş zamanın (Past Simple) temel mantığını; geçmişte belirli bir zamanda gerçekleşip tamamen sonlanmış eylemleri anlatırken olumlu cümlelerde fiillerin 2. halinin (V2), olumsuz ve sorularda ise 'did / didn't' yardımcı fiiliyle fiilin yalın halinin (V1) kullanıldığını hatasız kavramak.",
    "whyItMatters": "Geçmişte yaşanan olayları, anıları, iş deneyimlerini ve dün neler yaptığınızı anlatabilmek yabancı dilde temel hikaye anlatımının ve günlük iletişimin omurgasıdır.",
    "linguisticLogic": "İngilizcede Past Simple (Geçmiş Zaman) şu üç temel ilkeye dayanır: 1) KAPANMIŞ ZAMAN KURALI: Eylem geçmişte belirli bir noktada yapılmış ve tamamen bitmiştir; şimdiki zamanla doğrudan bir bağı yoktur (I visited London in 2021). 2) İKİNCİ HAL (V2): Sadece ve sadece OLUMLU cümlelerde fiiller 2. haline dönüşür (go -> went, play -> played). 3) DİD DEVRİMCİ YARDIMCISI: Olumsuz ve soru cümlelerinde tüm şahıslar için tek bir yardımcı fiil olan 'DID' devreye girer. Did cümleye girdiğinde zaman yükünü sırtlar ve ana fiili sözlükteki en saf, yalın haline (V1) geri döndürür (*Did you went? YANLIŞ, Did you go? DOĞRU).",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Geçmişte Kapanan Zaman Pencereleri",
        "content": "Past Simple, geçmişte başlayıp o geçmiş zaman dilimi içinde bitmiş eylemler için kullanılır. Cümlede dün (yesterday), geçen hafta (last week) veya iki saat önce (two hours ago) gibi zaman sınırları bulunur veya ima edilir.",
        "formula": "Özne + Fiil (2. Hal - V2) + Zaman Belirteci",
        "keyPhrase": "I graduated from university three years ago.",
        "subPoints": [
          "Eylemin şu anla bağı kopmuştur.",
          "Zaman belirteci (yesterday, last month) cümlenin sonunda veya başında yer alır."
        ],
        "rationale": "Öğrencinin şimdiki zaman ile geçmiş zaman ayrımını zihinsel olarak netleştirmesini sağlar."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: 'DID' Yardımcı Fiili ve Zaman Hırsızı Kuralı",
        "content": "Geniş zamandaki do/does ayrımı geçmişte yoktur. Bütün şahıslar (I, you, he, she, it, we, they) için ortak yardımcı fiil 'DID'dir. Ancak did bir 'zaman hırsızı' gibidir; geçmişlik ekini üzerine alır ve ana fiili yalınlaştırır.",
        "formula": "Olumsuz: Özne + didn't + V1  |  Soru: Did + Özne + V1?",
        "keyPhrase": "I didn't see him yesterday. | Did you call the manager?",
        "subPoints": [
          "*He didn't went -> BÜYÜK YANLIŞ!",
          "He didn't go -> DOĞRU (didn't varsa fiil V1 kalır)."
        ],
        "rationale": "Öğrencilerin en sık yaptığı 'çifte geçmiş zaman' hatasını kökten engeller."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: Tüm Öznelerde Eşitlik (No -s, No Irregularity in Aux)",
        "content": "Past Simple'da He/She/It için fiile -s veya özel ek gelmez. Olumlu cümlede tüm özneler aynı V2 halini alır (I worked, She worked, They worked). Olumsuzda hepsi didn't alır. Bu durum İngilizceyi geniş zamana kıyasla daha kurallı kılar.",
        "formula": "I / You / He / She / We / They + V2 (Tüm şahıslar aynıdır)",
        "keyPhrase": "She arrived on time and we started the meeting.",
        "subPoints": [
          "3. tekil şahıs için özel bir geçmiş zaman takısı yoktur.",
          "Tek kural fiilin düzenli mi düzensiz mi olduğunu bilmektir."
        ],
        "rationale": "Öğrencinin özne uyumu kaygısını azaltıp fiil formuna odaklanmasını sağlar."
      }
    ],
    "ruleCards": [
      {
        "title": "Olumlu Cümle Kuralı (V2)",
        "rule": "Yalnızca olumlu geçmiş cümlelerde fiil 2. haldedir (V2): I lived in Rome.",
        "example": "We bought a new car last weekend.",
        "tip": "Olumsuz ve soruda asla V2 kullanmayın!"
      },
      {
        "title": "Did ve Didn't ile Yalın Fiil (V1)",
        "rule": "Did veya didn't kullanılan her cümlede fiil kesinlikle sözlük haline (V1) döner.",
        "example": "Did they finish the project? - No, they didn't finish it.",
        "tip": "Did cümlenin geçmişlik sigortasıdır, fiile ikinci bir ek taktırmaz."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "Did you saw the news yesterday?",
        "correctExample": "Did you see the news yesterday?",
        "rootCause": "'Did' yardımcı fiili varken ana fiili de geçmiş zaman 2. halinde (saw) bırakmak.",
        "memoryTip": "Cümlede D-I-D varsa, fiil orijinal V1 haline döner: Did you SEE!"
      },
      {
        "wrongExample": "She didn't played tennis last Sunday.",
        "correctExample": "She didn't play tennis last Sunday.",
        "rootCause": "'Didn't' sonrasında düzenli fiile -ed takısı eklemeye devam etmek.",
        "memoryTip": "Didn't geldi, -ed kaçtı! Didn't PLAY!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "İş Görüşmesinde Dünkü Toplantıyı Sorma",
      "description": "İki meslektaş sabah kahve alırken dünkü yönetim kurulu toplantısını konuşur.",
      "contextType": "work",
      "dialogue": [
        {
          "speaker": "Mark",
          "textEn": "Good morning Sarah! Did you attend the budget meeting yesterday?",
          "textTr": "Günaydın Sarah! Dün bütçe toplantısına katıldın mı?"
        },
        {
          "speaker": "Sarah",
          "textEn": "Yes, I did. The director presented the new quarterly targets.",
          "textTr": "Evet katıldım. Direktör yeni çeyrek hedeflerini sundu."
        },
        {
          "speaker": "Mark",
          "textEn": "Did they approve the software budget?",
          "textTr": "Yazılım bütçesini onayladılar mı?"
        },
        {
          "speaker": "Sarah",
          "textEn": "No, they didn't approve it. They wanted more details.",
          "textTr": "Hayır onaylamadılar. Daha fazla ayrıntı istediler."
        }
      ],
      "culturalNote": "İş ortamında dünkü görevleri ve toplantıları takip ederken 'Did you...?' kalıbı en profesyonel soru biçimidir."
    },
    "contrastiveAnalysis": {
      "title": "İngilizce Past Simple vs Türkçe -di'li Geçmiş Zaman",
      "englishConcept": "İngilizcede olumsuzda 'didn't + yalın fiil' kullanılır; olumludaki fiil değişikliği kaybolur.",
      "turkishDifference": "Türkçede geçmiş zaman eki (-di/-ti) hem olumluda (gitti) hem olumsuzda (git-me-di) hem de soruda (gitti mi?) fiilin üzerinde kalır. İngilizcede ise soru ve olumsuzda ek fiilden sökülüp 'did'e geçer.",
      "directComparison": [
        {
          "context": "Olumlu",
          "en": "She went to school.",
          "trMeaning": "Okula gitti.",
          "commonErrorTr": "went kullanılır.",
          "whyItMatters": "Fiil 2. haldedir."
        },
        {
          "context": "Olumsuz",
          "en": "She didn't go to school.",
          "trMeaning": "Okula gitmedi.",
          "commonErrorTr": "*She didn't went",
          "whyItMatters": "Didn't gelince went -> go olur."
        }
      ]
    },
    "memoryHook": "DİD ALARMI: 'Did' veya 'Didn't' duyduğun anda fiilin sırtındaki yükü at, fiili 1. haline döndür!",
    "examples": [
      {
        "en": "Our team completed the client report yesterday afternoon.",
        "tr": "Ekibimiz dün öğleden sonra müşteri raporunu tamamladı.",
        "highlightedWords": [
          "completed",
          "yesterday afternoon"
        ],
        "grammarCategory": "Olumlu Geçmiş Zaman (V2)",
        "contextNote": "Tamamlanmış iş görevi.",
        "breakdownNote": "Complete düzenli bir fiildir, sonuna -d alarak V2 olmuştur."
      },
      {
        "en": "I didn't receive your email this morning.",
        "tr": "Bu sabah e-postanızı almadım.",
        "highlightedWords": [
          "didn't receive"
        ],
        "grammarCategory": "Olumsuz Geçmiş Zaman (didn't + V1)",
        "contextNote": "İletişim aksaklığı.",
        "breakdownNote": "Didn't sonrasında 'receive' fiili ek almadan yalın kalmıştır."
      },
      {
        "en": "Did you sign the rental contract last Friday?",
        "tr": "Geçen Cuma kira sözleşmesini imzaladın mı?",
        "highlightedWords": [
          "Did you sign",
          "last Friday"
        ],
        "grammarCategory": "Geçmiş Zaman Soru (Did + Özne + V1)",
        "contextNote": "Resmi işlem sorusu.",
        "breakdownNote": "Did başa gelmiş, sign fiili yalın kullanılmıştır."
      }
    ],
    "vocabulary": [
      {
        "word": "Past",
        "phonetic": "/pɑːst/",
        "partOfSpeech": "noun",
        "meaningTr": "Geçmiş, geçmiş zaman",
        "exampleSentence": "In the past, people traveled on horses."
      },
      {
        "word": "Attend",
        "phonetic": "/əˈtend/",
        "partOfSpeech": "verb",
        "meaningTr": "Katılmak (toplantı, ders)",
        "exampleSentence": "Did you attend the conference?"
      },
      {
        "word": "Approve",
        "phonetic": "/əˈpruːv/",
        "partOfSpeech": "verb",
        "meaningTr": "Onaylamak",
        "exampleSentence": "The manager approved our proposal."
      },
      {
        "word": "Contract",
        "phonetic": "/ˈkɒn.trækt/",
        "partOfSpeech": "noun",
        "meaningTr": "Sözleşme, kontrat",
        "exampleSentence": "We signed the contract yesterday."
      }
    ],
    "quickCheck": {
      "question": "Aşağıdaki cümlelerden hangisi dilbilgisi kurallarına göre TAMAMEN DOĞRUDUR?",
      "options": [
        "We didn't find the correct address yesterday.",
        "We didn't found the correct address yesterday.",
        "Did you found the correct address yesterday?",
        "We found not the correct address yesterday."
      ],
      "correctIndex": 0,
      "explanation": "'Didn't' yardımcı fiilinden sonra fiilin yalın hali (find) gelir. 'Found' 2. hal olduğu için kullanılamaz."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğu doğru geçmiş zaman formuyla tamamlayın:",
      "sentence": "Did your supervisor ___ the project deadline last week?",
      "options": [
        "extend",
        "extended",
        "extends",
        "extending"
      ],
      "correctAnswer": "extend",
      "hint": "Cümlenin başında 'Did' yardımcı fiili var. Ana fiil hangi halde kalmalı?",
      "explanation": "'Did' sorusunda ana fiil yalın halde (V1) kullanılır: 'extend'."
    },
    "sentenceBuilder": {
      "promptTr": "Dün akşam müdürle önemli sözleşmeyi imzaladık.",
      "targetEn": "We signed the important contract with the manager yesterday evening",
      "availableWords": [
        "We",
        "signed",
        "the",
        "important",
        "contract",
        "with",
        "the",
        "manager",
        "yesterday",
        "evening",
        "did",
        "sign"
      ],
      "explanation": "Özne (We) + V2 (signed) + nesne (the important contract) + edat öbeği (with the manager) + zaman belirteci (yesterday evening)."
    },
    "summaryTakeaways": [
      "Past Simple geçmişte başlayıp tamamen bitmiş olayları anlatır.",
      "Fiiller sadece olumlu cümlelerde 2. halini (V2) alır.",
      "Olumsuzda 'didn't + V1', soruda 'Did + Özne + V1' kalıbı kullanılır.",
      "Tüm şahıslarda (I, you, he, she, it, we, they) tek yardımcı fiil DID'dir."
    ]
  },
  "82": {
    "skillType": "grammar",
    "concreteCompetency": "A2 standardında İngilizce düzenli fiillere (Regular Verbs) geçmiş zaman takısı olan '-ed' eklenirken geçerli 4 temel imla kuralını (standart -ed, -e ile bitenlerde sadece -d, CVC sessiz-sesli-sessiz kuralında harf ikizlemesi, ünsüz+y durumunda -ied değişimi) yazılı olarak hatasız uygulayabilmek.",
    "whyItMatters": "İngilizce yazışmalarda ve sınavlarda fiillerin geçmiş zaman hallerini doğru hecelemek profesyonelliğin ve dil hakimiyetinin temel göstergesidir.",
    "linguisticLogic": "İngilizcede fiillerin büyük çoğunluğu düzenlidir (Regular Verbs) ve geçmiş zaman biçimlerini '-ed' morfemini alarak oluştururlar. Ancak kelimenin sonundaki harf yapısına göre 4 imla kuralı uygulanır: 1) STANDART: Çoğu fiile doğrudan '-ed' eklenir (work -> worked, watch -> watched). 2) SESSİZ 'E': Fiil zaten 'e' ile bitiyorsa fazladan bir 'e' eklenmez, sadece '-d' gelir (live -> lived, dance -> danced). 3) CVC KURALI: Tek heceli ve 'sessiz-sesli-sessiz' harfle biten fiillerde son sessiz harf çiftlenir (stop -> stopped, plan -> planned). DİKKAT: 'w, x, y' harfleri çiftlenmez (play -> played, fix -> fixed). 4) ÜNSÜZ + Y: Fiil ünsüz bir harf ve ardından 'y' ile bitiyorsa 'y' düşer ve yerini '-ied' alır (study -> studied, carry -> carried). Ancak önünde ünlü harf varsa kural bozulmaz (play -> played, enjoy -> enjoyed).",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Standart Fiiller ve Sonu 'e' ile Bitenler",
        "content": "Normal fiiller '-ed' alır: clean -> cleaned, open -> opened. Fiil zaten 'e' harfiyle bitiyorsa sadece '-d' eklenir: close -> closed, arrive -> arrived, love -> loved.",
        "formula": "Fiil + ed  |  Fiil(-e) + d",
        "keyPhrase": "We arrived at the hotel and opened our luggage.",
        "subPoints": [
          "*arriveed YANLIŞTIR -> arrived DOĞRUDUR.",
          "Son harf 'e' ise tekrar 'e' yazılmaz."
        ],
        "rationale": "Gereksiz harf tekrarını ve temel imla hatalarını önler."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: CVC (Sessiz-Sesli-Sessiz) Harf İkizlemesi",
        "content": "Tek heceli, vurgusu sonda olan ve son 3 harfi 'sessiz - sesli - sessiz' şeklinde dizilen fiillerde son harf ikizleşir: stop -> stopped, clap -> clapped, plan -> planned, jog -> jogged.",
        "formula": "C + V + C -> Son harfi çiftle + ed",
        "keyPhrase": "The bus stopped suddenly and the passengers waited.",
        "subPoints": [
          "*stoped YANLIŞTIR -> stopped DOĞRUDUR.",
          "W, X ve Y harfleri çiftlenmez: fix -> fixed, show -> showed."
        ],
        "rationale": "İngilizce ünlü sesin kısa kalmasını sağlayan fonotaktik kuralı öğretir."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: 'Y' Harfinin Kaderi (Ünsüz+Y vs Ünlü+Y)",
        "content": "Fiilin sonundaki 'y' harfinden önce ünsüz varsa (d, r, c vb.), 'y' harfi 'i'ye döner: study -> studied, try -> tried, cry -> cried. Ancak 'y'den önce sesli harf (a, e, o) varsa 'y' kalır ve normal '-ed' eklenir: play -> played, stay -> stayed.",
        "formula": "Ünsüz + y -> -ied  |  Ünlü + y -> -yed",
        "keyPhrase": "She studied hard and stayed at the library until midnight.",
        "subPoints": [
          "study -> studied (d+y olduğu için y düştü)",
          "play -> played (a+y olduğu için y kaldı, *plaied YANLIŞ!)"
        ],
        "rationale": "Öğrencilerin en çok tereddüt ettiği 'y' imla kuralını berraklaştırır."
      }
    ],
    "ruleCards": [
      {
        "title": "CVC İkizleşme Kuralı",
        "rule": "Tek heceli sessiz-sesli-sessiz fiillerde son harf iki kez yazılır: rub -> rubbed, plan -> planned.",
        "example": "He stopped the car immediately.",
        "tip": "Kelimede iki sesli yan yana ise çiftleme yapılmaz: rain -> rained."
      },
      {
        "title": "Ünsüz + Y -> IED",
        "rule": "study -> studied, copy -> copied, worry -> worried.",
        "example": "They copied the documents.",
        "tip": "Önünde sesli varsa kural işlemez: enjoy -> enjoyed."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "He stoped the machine when he noticed the smoke.",
        "correctExample": "He stopped the machine when he noticed the smoke.",
        "rootCause": "'Stop' fiilindeki CVC kuralını atlayıp tek 'p' ile yazmak.",
        "memoryTip": "Trafikte kırmızı ışıkta ÇİFT fren yap: STOPPED!"
      },
      {
        "wrongExample": "The children plaied in the garden all afternoon.",
        "correctExample": "The children played in the garden all afternoon.",
        "rootCause": "'Play' kelimesindeki 'a' seslisini görmezden gelip y'yi i'ye dönüştürmek.",
        "memoryTip": "Önünde sesli harf olan Y düşmez: P-L-A-Y-E-D!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Kütüphanede Sınav Hazırlığı Üzerine Sohbet",
      "description": "İki üniversite öğrencisi dünkü yoğun çalışma günlerini karşılaştırır.",
      "contextType": "social",
      "dialogue": [
        {
          "speaker": "Leo",
          "textEn": "You look tired, Maya. Did you sleep well?",
          "textTr": "Yorgun görünüyorsun Maya. İyi uyudun mu?"
        },
        {
          "speaker": "Maya",
          "textEn": "Not really. I studied for the anatomy exam and stayed awake until 3 AM.",
          "textTr": "Pek sayılmaz. Anatomi sınavına çalıştım ve gece üçe kadar uyanık kaldım."
        },
        {
          "speaker": "Leo",
          "textEn": "I planned to study too, but my laptop crashed.",
          "textTr": "Ben de çalışmayı planladım ama dizüstü bilgisayarım çöktü."
        },
        {
          "speaker": "Maya",
          "textEn": "Oh no! Fortunately, the professor delayed the deadline.",
          "textTr": "Olamaz! Neyse ki profesör son teslim tarihini erteledi."
        }
      ],
      "culturalNote": "İngilizce günlük anlatımlarda düzenli fiillerin imlası sınav kağıtlarında en çok puan kırılan alandır."
    },
    "contrastiveAnalysis": {
      "title": "İngilizce -ed İmlası vs Türkçe Ek Uyumu",
      "englishConcept": "İngilizcede -ed eklenirken kelime kökündeki harfler düşebilir (-e), çiftleşebilir (pp) veya dönüşebilir (ied).",
      "turkishDifference": "Türkçede geçmiş zaman eki (-di/-ti/-du/-tü) ses uyumuna göre değişir ama kelime kökü (gel-di, bak-tı) harf kaybetmez veya çiftleşmez.",
      "directComparison": [
        {
          "context": "Son harf çiftleşmesi",
          "en": "planned",
          "trMeaning": "planladı",
          "commonErrorTr": "*planed",
          "whyItMatters": "İngilizcede çift n yazılır."
        },
        {
          "context": "y dönüşümü",
          "en": "carried",
          "trMeaning": "taşıdı",
          "commonErrorTr": "*carryed",
          "whyItMatters": "y harfi ied olur."
        }
      ]
    },
    "memoryHook": "4 İMLA KURALI: 1) Normal: +ed, 2) 'e' varsa: +d, 3) CVC: ÇİFT HARF, 4) Ünsüz+y: -IED!",
    "examples": [
      {
        "en": "The government planned a major modern hospital project last year.",
        "tr": "Hükümet geçen yıl büyük bir modern hastane projesi planladı.",
        "highlightedWords": [
          "planned"
        ],
        "grammarCategory": "CVC İkizleşmesi (plan -> planned)",
        "contextNote": "Resmi planlama eylemi.",
        "breakdownNote": "Plan (ünsüz-ünlü-ünsüz) olduğu için 'n' çiftlenmiştir."
      },
      {
        "en": "She married a brilliant software engineer in June.",
        "tr": "Haziran ayında parlak bir yazılım mühendisiyle evlendi.",
        "highlightedWords": [
          "married"
        ],
        "grammarCategory": "Ünsüz+Y Dönüşümü (marry -> married)",
        "contextNote": "Evlilik haberi.",
        "breakdownNote": "Marry fiilindeki r+y yapısı gereği 'y' düşmüş, -ied gelmiştir."
      },
      {
        "en": "The manager invited all regional staff members to the seminar.",
        "tr": "Müdür tüm bölge personelini seminere davet etti.",
        "highlightedWords": [
          "invited"
        ],
        "grammarCategory": "Sonu 'e' ile Biten Fiil (invite -> invited)",
        "contextNote": "Resmi davet.",
        "breakdownNote": "Invite fiili 'e' ile bittiği için sadece '-d' almıştır."
      }
    ],
    "vocabulary": [
      {
        "word": "Regular",
        "phonetic": "/ˈreɡ.jə.lər/",
        "partOfSpeech": "adjective",
        "meaningTr": "Düzenli, kurallı",
        "exampleSentence": "'Work' is a regular verb in English."
      },
      {
        "word": "Plan",
        "phonetic": "/plæn/",
        "partOfSpeech": "verb",
        "meaningTr": "Planlamak",
        "exampleSentence": "We planned the vacation together."
      },
      {
        "word": "Marry",
        "phonetic": "/ˈmær.i/",
        "partOfSpeech": "verb",
        "meaningTr": "Evlenmek",
        "exampleSentence": "They married five years ago."
      },
      {
        "word": "Delay",
        "phonetic": "/dɪˈleɪ/",
        "partOfSpeech": "verb",
        "meaningTr": "Ertelemek, geciktirmek",
        "exampleSentence": "The airline delayed our flight."
      }
    ],
    "quickCheck": {
      "question": "Aşağıdaki fiillerden hangisinin '-ed' takısı almış hali YANLIŞ yazılmıştır?",
      "options": [
        "studied",
        "stoped",
        "enjoyed",
        "arrived"
      ],
      "correctIndex": 1,
      "explanation": "'Stop' fiili tek heceli ve CVC (ünsüz-ünlü-ünsüz) yapısında olduğu için 'stopped' (çift p) şeklinde yazılmalıdır."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa 'worry' fiilinin doğru geçmiş zaman imlasını yerleştirin:",
      "sentence": "The parents ___ about their daughter during the stormy night.",
      "options": [
        "worried",
        "worryed",
        "worriedd",
        "worryd"
      ],
      "correctAnswer": "worried",
      "hint": "'Worry' kelimesi ünsüz 'r' ve 'y' ile biter. 'Y' harfine ne olur?",
      "explanation": "Ünsüz + y ile biten fiillerde 'y' düşer ve '-ied' gelir: 'worried'."
    },
    "sentenceBuilder": {
      "promptTr": "Polis dün gece otoyolda şüpheli aracı durdurdu.",
      "targetEn": "The police stopped the suspicious vehicle on the highway last night",
      "availableWords": [
        "The",
        "police",
        "stopped",
        "the",
        "suspicious",
        "vehicle",
        "on",
        "the",
        "highway",
        "last",
        "night",
        "stoped",
        "did"
      ],
      "explanation": "Özne (The police) + V2 doğru imla (stopped) + nesne (the suspicious vehicle) + yer (on the highway) + zaman (last night)."
    },
    "summaryTakeaways": [
      "Düzenli fiillerin çoğu sadece -ed alır (clean -> cleaned).",
      "Sonu 'e' ile biten fiillere sadece -d eklenir (live -> lived).",
      "Tek heceli CVC fiillerde son ünsüz çiftlenir (stop -> stopped, plan -> planned).",
      "Ünsüz + y durumunda 'y' düşer ve '-ied' gelir (study -> studied)."
    ]
  },
  "83": {
    "skillType": "pronunciation",
    "concreteCompetency": "A2 standardında düzenli fiillerin sonundaki '-ed' geçmiş zaman takısını kök fiilin son sesine göre 3 evrensel fonetik kurala (/t/, /d/, /ɪd/) uygun olarak telaffuz edebilmek; özellikle sadece sonu /t/ ve /d/ sesleriyle biten fiillerde fazladan hece (/ɪd/) üretildiğini, diğerlerinde fazladan hece yapılmayıp tek ünsüze dönüştüğünü hatasız uygulamak.",
    "whyItMatters": "Türkçe ana dili olan öğrencilerin %90'ı tüm -ed takılarını '-ed / -et' şeklinde fazladan hece yaparak okur (worked kelimesini *vörk-ed diye okumak gibi). Bu kuralı öğrenmek konuşmanızı anında yapaylıktan kurtarıp doğal bir İngilizce akıcılığına yükseltir.",
    "linguisticLogic": "İngilizcede '-ed' yazılışı tek tiptir ancak sesletimi fiil kökünün bittiği son sesin gırtlaktaki titreşim durumuna (voicing) göre 3 farklı yola ayrılır: 1) /ɪd/ (EKSTRA HECE): Yalnızca ve yalnızca kökü /t/ veya /d/ sesiyle biten fiillerde fazladan bir hece olarak okunur (want -> wan-tid, need -> nee-did). Çünkü t ve d sesinden sonra doğrudan tekrar t/d sesi çıkarılamaz; araya bir sesli /ɪ/ girmelidir. 2) /t/ (SERT SES): Kökü titreşimsiz (voiceless) nefesli bir sesle biten fiillerde (p, k, f, s, ʃ-sh, tʃ-ch) '-ed' takısı sert /t/ sesine dönüşür ve ASLA ayrı bir hece oluşturmaz: worked (/wɜːkt/), watched (/wɒtʃt/), stopped (/stɒpt/). 3) /d/ (YUMUŞAK SES): Kökü titreşimli (voiced) bir sesle (b, g, v, z, m, n, l, r) veya bir sesli harfle biten fiillerde '-ed' yumuşak /d/ sesine dönüşür: played (/pleɪd/), cleaned (/kliːnd/), lived (/lɪvd/).",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Yalnızca /t/ ve /d/ Seslerinden Sonra: /ɪd/ (Ekstra Hece)",
        "content": "Kulağınıza küpe yapacağınız tek kural: SADECE fiilin kökü 'T' veya 'D' ile bitiyorsa -ed takısı 'id' diye okunur ve kelimeye 1 hece ekler: want (1 hece) -> wanted (2 hece: wan-tid), decide (2 hece) -> decided (3 hece: de-ci-did).",
        "formula": "Son Ses /t/ veya /d/ -> /ɪd/ (Fazladan hece var!)",
        "keyPhrase": "I wanted to call you because I needed some advice.",
        "subPoints": [
          "want -> wanted (/wɒn.tɪd/)",
          "need -> needed (/niː.dɪd/)",
          "visit -> visited (/vɪz.ɪ.tɪd/)"
        ],
        "rationale": "Ekstra hece üretme refleksini sadece gerekli olan iki sesle sınırlar."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Nefesli ve Sert Seslerden Sonra: /t/ (Hece Eklenmez!)",
        "content": "Boğazınıza dokunduğunuzda titreşmeyen nefesli seslerle (P, K, F, S, SH, CH) biten fiillerde -ed harfleri bir hece yapmaz; doğrudan sert bir 't' sesiyle kelimeyi kapatır: work -> worked (/wɜːkt/), watch -> watched (/wɒtʃt/).",
        "formula": "p, k, f, s, sh, ch + ed -> /t/ sesi",
        "keyPhrase": "She worked late and watched a movie on television.",
        "subPoints": [
          "*work-ed DEMEYİN -> 'wörkt' deyin!",
          "*watch-ed DEMEYİN -> 'wotçt' deyin!"
        ],
        "rationale": "Türk öğrencilerin en yaygın heceleme hatasını düzeltir."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: Titreşimli Sesler ve Ünlülerden Sonra: /d/ (Hece Eklenmez!)",
        "content": "Boğazınızdaki ses tellerini titreştiren seslerle (B, G, V, Z, M, N, L, R) ve tüm sesli harflerle biten fiillerde -ed takısı yumuşak bir 'd' olarak kaynaşır: play -> played (/pleɪd/), clean -> cleaned (/kliːnd/), call -> called (/kɔːld/).",
        "formula": "Titreşimli Ses / Ünlü + ed -> /d/ sesi",
        "keyPhrase": "We called the hotel and cleaned the room before leaving.",
        "subPoints": [
          "*play-ed DEMEYİN -> 'pleyd' deyin!",
          "*call-ed DEMEYİN -> 'kold' deyin!"
        ],
        "rationale": "Doğal akıcı ses geçişini sağlar."
      }
    ],
    "ruleCards": [
      {
        "title": "Ne Zaman 'İD' Diye Okunur?",
        "rule": "SADECE ve SADECE kelime kökü 'T' veya 'D' sesiyle bitiyorsa: wanted, needed, invited, started.",
        "example": "He started the engine.",
        "tip": "Diğer hiçbir harfte fazladan hece üretmeyin!"
      },
      {
        "title": "Ne Zaman 'T' Diye Okunur?",
        "rule": "P, K, F, S, SH, CH ile biterse sert 't' sesiyle kapanır: laughed (/lɑːft/), kissed (/kɪst/), pushed (/pʊʃt/).",
        "example": "She kissed her baby.",
        "tip": "Kelime tek heceli kalmaya devam eder!"
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "I *work-ed (/wɜː.ked/) in a bank for three years.",
        "correctExample": "I worked (/wɜːkt/) in a bank for three years.",
        "rootCause": "Yazıda gördüğü her -ed harfini Türkçedeki gibi harf harf hecelemeye çalışmak.",
        "memoryTip": "'Work' t ile biter: WÖRKT! Fazladan hece uydurma!"
      },
      {
        "wrongExample": "They *open-ed (/əʊ.pen.ed/) the new shopping mall.",
        "correctExample": "They opened (/əʊ.pənd/) the new shopping mall.",
        "rootCause": "'Open' fiilinin sonundaki n sesinden sonra /d/ yerine /ed/ uydurmak.",
        "memoryTip": "Open fiili n ile biter, sonuna sadece d ekle: OPEND!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "İngilizce Telaffuz Koçluğu Dersi",
      "description": "Öğretmen öğrencinin sunum öncesi düzenli fiil okunuşlarını düzeltir.",
      "contextType": "work",
      "dialogue": [
        {
          "speaker": "Coach",
          "textEn": "Listen carefully to this sentence: 'I cooked dinner and helped my brother'. How many syllables is 'cooked'?",
          "textTr": "Şu cümleyi dikkatle dinle: 'I cooked dinner and helped my brother'. 'Cooked' kaç hecedir?"
        },
        {
          "speaker": "Student",
          "textEn": "It is just one syllable! /kʊkt/, not /kʊ.ked/.",
          "textTr": "Sadece tek hecedir! /kʊkt/, /kʊ.ked/ değil."
        },
        {
          "speaker": "Coach",
          "textEn": "Brilliant! And what about 'invited'?",
          "textTr": "Harika! Peki ya 'invited'?"
        },
        {
          "speaker": "Student",
          "textEn": "Because 'invite' ends with a /t/ sound, we add an extra syllable: /ɪnˈvaɪ.tɪd/!",
          "textTr": "'Invite' /t/ sesiyle bittiği için ekstra hece ekleriz: /ɪnˈvaɪ.tɪd/!"
        }
      ],
      "culturalNote": "Yabancı aksanlarda -ed takısını yanlış hecelemek ana dili İngilizce olanların anlamakta en çok zorlandığı fonetik pürüzlerden biridir."
    },
    "contrastiveAnalysis": {
      "title": "İngilizce -ed Fonetiği vs Türkçe Ek Mantığı",
      "englishConcept": "İngilizcede -ed yazılışı sabit kalırken telaffuzda 3 farklı sese (/t/, /d/, /ɪd/) dönüşür ve çoğu zaman hece sayısı artmaz.",
      "turkishDifference": "Türkçede ekler yazıldığı gibi okunur ve her ek mutlak surette yeni bir hece ekler (gel-di: 2 hece, bak-tı: 2 hece). Bu refleks İngilizceye taşınırsa hata kaçınılmaz olur.",
      "directComparison": [
        {
          "context": "/t/ sesi",
          "en": "helped (/helpt/)",
          "trMeaning": "yardım etti",
          "commonErrorTr": "*help-ed (2 hece)",
          "whyItMatters": "Tek hecedir: helpt."
        },
        {
          "context": "/ɪd/ sesi",
          "en": "decided (/dɪˈsaɪ.dɪd/)",
          "trMeaning": "karar verdi",
          "commonErrorTr": "decided (3 hece)",
          "whyItMatters": "d ile bittiği için -id olur."
        }
      ]
    },
    "memoryHook": "TELAFUZ FORMÜLÜ: T ve D varsa 'İD' de! K, P, S, SH, CH varsa 'T' de! Geri kalan her şeyde 'D' ile bitir!",
    "examples": [
      {
        "en": "The doctor decided to operate immediately yesterday afternoon.",
        "tr": "Doktor dün öğleden sonra derhal ameliyat etmeye karar verdi.",
        "highlightedWords": [
          "decided (/dɪˈsaɪ.dɪd/)"
        ],
        "grammarCategory": "-ed Telaffuzu /ɪd/ Grubu",
        "contextNote": "Tıbbi karar.",
        "breakdownNote": "Decide fiili kök olarak /d/ sesiyle bittiği için -ed eki /ɪd/ şeklinde okunur."
      },
      {
        "en": "We watched an exciting football match at the stadium.",
        "tr": "Stadyumda heyecan verici bir futbol maçı izledik.",
        "highlightedWords": [
          "watched (/wɒtʃt/)"
        ],
        "grammarCategory": "-ed Telaffuzu /t/ Grubu",
        "contextNote": "Spor aktivitesi.",
        "breakdownNote": "Watch fiili /tʃ/ sesiyle bittiği için -ed eki sert /t/ olarak telaffuz edilir."
      },
      {
        "en": "She cleaned her apartment and played violin for two hours.",
        "tr": "Dairesini temizledi ve iki saat boyunca keman çaldı.",
        "highlightedWords": [
          "cleaned (/kliːnd/)",
          "played (/pleɪd/)"
        ],
        "grammarCategory": "-ed Telaffuzu /d/ Grubu",
        "contextNote": "Ev aktivitesi.",
        "breakdownNote": "Clean (/n/) ve play (/eɪ/) sesli/titreşimli bittiği için yumuşak /d/ sesi alır."
      }
    ],
    "vocabulary": [
      {
        "word": "Pronounce",
        "phonetic": "/prəˈnaʊns/",
        "partOfSpeech": "verb",
        "meaningTr": "Telaffuz etmek, sesletmek",
        "exampleSentence": "How do you pronounce this word?"
      },
      {
        "word": "Syllable",
        "phonetic": "/ˈsɪl.ə.bəl/",
        "partOfSpeech": "noun",
        "meaningTr": "Hece",
        "exampleSentence": "'Water' has two syllables."
      },
      {
        "word": "Voiced",
        "phonetic": "/vɔɪst/",
        "partOfSpeech": "adjective",
        "meaningTr": "Titreşimli (ses telleri titreyen)",
        "exampleSentence": "Vowels are voiced sounds."
      },
      {
        "word": "Voiceless",
        "phonetic": "/ˈvɔɪs.ləs/",
        "partOfSpeech": "adjective",
        "meaningTr": "Titreşimsiz, nefesli ses",
        "exampleSentence": "/p/ and /t/ are voiceless consonants."
      }
    ],
    "quickCheck": {
      "question": "Aşağıdaki fiillerden hangisinde '-ed' takısı ekstra bir hece olarak /ɪd/ sesiyle okunur?",
      "options": [
        "started",
        "worked",
        "played",
        "washed"
      ],
      "correctIndex": 0,
      "explanation": "'Start' fiili /t/ sesiyle bittiği için sonuna -ed geldiğinde ekstra hece olarak /ɪd/ telaffuz edilir: /ˈstɑː.tɪd/."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa, -ed takısı sert /t/ sesiyle okunan fiili yerleştirin:",
      "sentence": "The chef ___ the door and started preparing the banquet menu.",
      "options": [
        "locked",
        "needed",
        "waited",
        "decided"
      ],
      "correctAnswer": "locked",
      "hint": "'k' gibi nefesli sessizlerden sonra -ed eki sert /t/ olarak okunur (/lɒkt/).",
      "explanation": "'Locked' fiili /k/ sesiyle bittiği için -ed takısı sert /t/ olarak okunur (/lɒkt/). 'Needed' ve 'waited' ise /ɪd/ fazladan hecesiyle okunur."
    },
    "sentenceBuilder": {
      "promptTr": "Mimar dün sabah tarihi binayı ziyaret etti ve projeyi başlattı.",
      "targetEn": "The architect visited the historic building and started the project yesterday morning",
      "availableWords": [
        "The",
        "architect",
        "visited",
        "the",
        "historic",
        "building",
        "and",
        "started",
        "the",
        "project",
        "yesterday",
        "morning",
        "visit",
        "start"
      ],
      "explanation": "Visited (/ɪd/) ve started (/ɪd/) fiillerinin her ikisi de /t/ ile bittiği için /ɪd/ fonetik kuralına örnektir."
    },
    "summaryTakeaways": [
      "'-ed' takısı kök sesine göre 3 farklı şekilde okunur: /t/, /d/, /ɪd/.",
      "Sadece kökü /t/ ve /d/ ile biten fiiller ekstra hece (/ɪd/) alır (wanted, needed).",
      "Nefesli seslerden (p, k, f, s, sh, ch) sonra hece eklenmez, sert /t/ denir (worked, stopped).",
      "Titreşimli seslerden ve ünlülerden sonra yumuşak /d/ denir (played, cleaned)."
    ]
  },
  "84": {
    "skillType": "vocabulary",
    "concreteCompetency": "A2 standardında günlük İngilizce iletişiminin %80'ini oluşturan en temel 50 düzensiz fiilin (Irregular Verbs) 2. hallerini (V2) -ed almadıkları gerçeğiyle kavramak; özellikle dev 5 fiil olan Go (went), Buy (bought), See (saw), Have (had), Do (did) ve diğer sık fiillerin (make/made, eat/ate, come/came, take/took, give/gave) dönüşümlerini cümle içinde otomatikleşmiş refleksle kullanabilmek.",
    "whyItMatters": "İngilizcede en sık kullanılan eylemlerin neredeyse tamamı düzensizdir. 'I goed' veya 'I buyed' demek dili sıfırdan öğrenen biri izlenimi verir; doğru 2. halleri bilmek akıcı konuşmanın ilk anahtarıdır.",
    "linguisticLogic": "İngilizce bir Cermen dilidir ve tarihsel olarak güçlü fiiller (strong verbs) iç ses değişimine (ablaut) uğrayarak geçmiş zaman biçimlerini alırlar. Düzensiz fiiller ezberlenmesi gereken rastgele kelimeler gibi görünse de 3 temel ses mantığına ayrılırlar: 1) İÇ SESİ DEĞİŞENLER: get -> got, sit -> sat, sing -> sang, write -> wrote. 2) TAMAMEN DEĞİŞENLER (Supletif): go -> went (başka bir arkaik fiilden evrilmiştir). 3) BOĞAZ SESİ (-OUGHT / -AUGHT) ALANLAR: buy -> bought, bring -> brought, catch -> caught, teach -> taught. 4) HİÇ DEĞİŞMEYENLER: cut -> cut, cost -> cost, put -> put, hit -> hit.",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Günlük Hayatın 5 Dev Fiili (The Big Five)",
        "content": "İngilizcede sabahtan akşama kadar en çok kuracağınız 5 geçmiş eylem: GO -> WENT (gitti), SEE -> SAW (gördü), BUY -> BOUGHT (satın aldı), HAVE -> HAD (sahipti / yedi-içti), DO -> DID (yaptı).",
        "formula": "go->went | see->saw | buy->bought | have->had | do->did",
        "keyPhrase": "I went to the store, saw my friend, and bought some groceries.",
        "subPoints": [
          "*goed YANLIŞTIR -> went DOĞRUDUR.",
          "*buyed YANLIŞTIR -> bought DOĞRUDUR.",
          "*seed YANLIŞTIR -> saw DOĞRUDUR."
        ],
        "rationale": "Öğrencinin iletişim ihtiyacının aslan payını bu 5 temel fiil karşılar."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Ses Değişim Modelleriyle Gruplayarak Öğrenme",
        "content": "50 fiili tek tek ezberlemek yerine ses gruplarına ayırın: a) i -> a dönüşümü: drink -> drank, swim -> swam, begin -> began; b) i -> o dönüşümü: write -> wrote, drive -> drove, ride -> rode; c) ow/aw -> ew dönüşümü: know -> knew, blow -> blew, draw -> drew.",
        "formula": "Grup A: i->a  |  Grup B: i->o  |  Grup C: ow->ew",
        "keyPhrase": "He drank some coffee, drove to work, and knew the route well.",
        "subPoints": [
          "Beyin kafiye ve ses benzerliklerini tekil listelerden 10 kat daha hızlı hatırlar."
        ],
        "rationale": "Mekanik ezber yerine nöro-dilbilimsel gruplama tekniği sunar."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: Değişmeyen Sihirli Fiiller (Cost, Cut, Put, Let)",
        "content": "Bazı fiiller geçmiş zamanda hiçbir harf değişikliğine uğramaz; geçmiş hali şimdiki haliyle tamamen aynıdır: put -> put, cut -> cut, cost -> cost, let -> let, hit -> hit. Cümlenin geçmiş zaman olduğunu sonundaki zaman zarfından (yesterday, last night) anlarsınız.",
        "formula": "V1 = V2 (put -> put, cut -> cut, cost -> cost)",
        "keyPhrase": "The new laptop cost two thousand dollars yesterday.",
        "subPoints": [
          "*costed veya *puted KESİNLİKLE YANLIŞTIR!",
          "'He cut his finger yesterday' cümlesi cut fiilinin geçmiş halidir."
        ],
        "rationale": "Değişmeyen fiillere gereksiz -ed ekleme yanılgısını giderir."
      }
    ],
    "ruleCards": [
      {
        "title": "The Big 5 Dönüşümleri",
        "rule": "Go -> Went, See -> Saw, Buy -> Bought, Have -> Had, Do -> Did.",
        "example": "We had lunch and went to the museum.",
        "tip": "Bu beş fiili uykunuzdan uyandırsalar bile hatasız söylemelisiniz!"
      },
      {
        "title": "Hiç Değişmeyen Fiiller Kuralı",
        "rule": "Cut, put, cost, hit, let fiillerine geçmiş zamanda -ed EKLENMEZ.",
        "example": "She put the keys on the table last night.",
        "tip": "He/she/it öznesinde -s yoksa ve zaman geçmişse o fiil V2 halindedir."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "I *buyed a ticket and *goed to the concert.",
        "correctExample": "I bought a ticket and went to the concert.",
        "rootCause": "Düzensiz fiillerin kuralsızlığını unutup aşırı genelleme (overgeneralization) ile -ed eklemek.",
        "memoryTip": "Buy -> BOUGHT, Go -> WENT! Beynine kazı!"
      },
      {
        "wrongExample": "The flight *costed five hundred euros last month.",
        "correctExample": "The flight cost five hundred euros last month.",
        "rootCause": "'Cost' fiilinin V1 ve V2 halinin aynı olduğunu bilmeyip -ed takmak.",
        "memoryTip": "Cost, Cut, Put taş gibidir, hiç değişmez: COST!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Pazartesi Sabahı Hafta Sonu Sohbeti",
      "description": "Ofiste iki iş arkadaşı hafta sonu neler yaptıklarını anlatır.",
      "contextType": "daily",
      "dialogue": [
        {
          "speaker": "David",
          "textEn": "How was your weekend, Emily? What did you do?",
          "textTr": "Hafta sonun nasıldı Emily? Neler yaptın?"
        },
        {
          "speaker": "Emily",
          "textEn": "It was great! On Saturday, I bought some new books and went to an Italian restaurant.",
          "textTr": "Harikaydı! Cumartesi günü birkaç yeni kitap aldım ve bir İtalyan restoranına gittim."
        },
        {
          "speaker": "David",
          "textEn": "Did you see anyone we know?",
          "textTr": "Tanıdığımız birini gördün mü?"
        },
        {
          "speaker": "Emily",
          "textEn": "Yes, I saw Michael. We had coffee together and spoke for hours.",
          "textTr": "Evet Michael'ı gördüm. Birlikte kahve içtik ve saatlerce konuştuk."
        }
      ],
      "culturalNote": "İngilizce konuşulan kültürlerde 'How was your weekend?' sorusuna geçmiş zaman düzensiz fiillerle 2-3 cümlelik canlı detay vermek sosyal bağ kurmanın en kibar yoludur."
    },
    "contrastiveAnalysis": {
      "title": "İngilizce Düzensiz Fiiller vs Türkçe Düzenli Çekim",
      "englishConcept": "İngilizcede fiil kökü tamamen değişir (go -> went, buy -> bought).",
      "turkishDifference": "Türkçede fiil kökü 'git-' ve 'al-' olarak sabit kalır, sadece arkasına -di eki gelir (git-ti, al-dı). İngilizcede kök değiştiği için kelimeyi baştan bilmek şarttır.",
      "directComparison": [
        {
          "context": "Gitmek",
          "en": "I went",
          "trMeaning": "gittim",
          "commonErrorTr": "*I goed",
          "whyItMatters": "went tamamen farklı bir kelimedir."
        },
        {
          "context": "Görmek",
          "en": "I saw",
          "trMeaning": "gördüm",
          "commonErrorTr": "*I seed",
          "whyItMatters": "see -> saw olur."
        }
      ]
    },
    "memoryHook": "BÜYÜK 5'Lİ ŞARKISI: Go gitti WENT oldu, See baktı SAW oldu, Buy aldı BOUGHT oldu, Have vardı HAD oldu, Do yaptı DİD oldu!",
    "examples": [
      {
        "en": "Yesterday I went to the shopping mall and bought a warm winter coat.",
        "tr": "Dün alışveriş merkezine gittim ve sıcak bir kışlık kaban satın aldım.",
        "highlightedWords": [
          "went",
          "bought"
        ],
        "grammarCategory": "Düzensiz Fiil (go -> went, buy -> bought)",
        "contextNote": "Alışveriş aktivitesi.",
        "breakdownNote": "Go düzensiz olarak went, buy ise bought olmuştur."
      },
      {
        "en": "We saw an extraordinary exhibition and had dinner near the river.",
        "tr": "Olağanüstü bir sergi gördük ve nehir kenarında akşam yemeği yedik.",
        "highlightedWords": [
          "saw",
          "had dinner"
        ],
        "grammarCategory": "Düzensiz Fiil (see -> saw, have -> had)",
        "contextNote": "Kültür ve akşam yemeği.",
        "breakdownNote": "See -> saw; have dinner -> had dinner olmuştur."
      },
      {
        "en": "She wrote an inspiring article and sent it to the international publisher.",
        "tr": "İlham verici bir makale yazdı ve onu uluslararası yayıncıya gönderdi.",
        "highlightedWords": [
          "wrote",
          "sent"
        ],
        "grammarCategory": "Düzensiz Fiil (write -> wrote, send -> sent)",
        "contextNote": "Yazarlık ve yayın.",
        "breakdownNote": "Write -> wrote (i->o değişimi); send -> sent (d->t değişimi)."
      }
    ],
    "vocabulary": [
      {
        "word": "Irregular",
        "phonetic": "/ɪˈreɡ.jə.lər/",
        "partOfSpeech": "adjective",
        "meaningTr": "Düzensiz, kural dışı",
        "exampleSentence": "'Went' is an irregular past verb."
      },
      {
        "word": "Groceries",
        "phonetic": "/ˈɡrəʊ.sər.iz/",
        "partOfSpeech": "noun",
        "meaningTr": "Mutfak/market alışverişi",
        "exampleSentence": "I bought groceries at the supermarket."
      },
      {
        "word": "Exhibition",
        "phonetic": "/ˌek.sɪˈbɪʃ.ən/",
        "partOfSpeech": "noun",
        "meaningTr": "Sergi",
        "exampleSentence": "We saw a modern art exhibition."
      },
      {
        "word": "Inspiring",
        "phonetic": "/ɪnˈspaɪə.rɪŋ/",
        "partOfSpeech": "adjective",
        "meaningTr": "İlham verici",
        "exampleSentence": "She gave an inspiring speech."
      }
    ],
    "quickCheck": {
      "question": "Aşağıdaki fiil ve geçmiş zaman eşleştirmelerinden hangisi KESİNLİKLE DOĞRUDUR?",
      "options": [
        "buy -> bought, see -> saw, go -> went",
        "buy -> buyed, see -> saw, go -> went",
        "buy -> bought, see -> seed, go -> goed",
        "buy -> bought, see -> saw, go -> goed"
      ],
      "correctIndex": 0,
      "explanation": "Buy fiilinin 2. hali 'bought', see fiilininki 'saw', go fiilininki ise 'went'tir. Hiçbiri -ed almaz."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa 'give' fiilinin geçmiş zaman (V2) halini yerleştirin:",
      "sentence": "The doctor ___ me some effective medication yesterday.",
      "options": [
        "gave",
        "gived",
        "given",
        "giving"
      ],
      "correctAnswer": "gave",
      "hint": "'Give' düzensiz bir fiildir; içindeki 'i' harfi 'a' sesine dönüşür.",
      "explanation": "'Give' fiilinin 2. hali (Past Simple) 'gave'dir."
    },
    "sentenceBuilder": {
      "promptTr": "Dün arkadaşımla İtalyan kafesinde buluştum ve lezzetli kahve içtik.",
      "targetEn": "I met my friend at the Italian cafe and we drank delicious coffee yesterday",
      "availableWords": [
        "I",
        "met",
        "my",
        "friend",
        "at",
        "the",
        "Italian",
        "cafe",
        "and",
        "we",
        "drank",
        "delicious",
        "coffee",
        "yesterday",
        "meeted",
        "drinked"
      ],
      "explanation": "Meet -> met ve drink -> drank düzensiz fiillerinin geçmiş zaman cümle dizilimi."
    },
    "summaryTakeaways": [
      "İngilizcedeki en yaygın fiiller düzensizdir (Irregular Verbs) ve -ed almaz.",
      "Büyük 5'li: Go->went, Buy->bought, See->saw, Have->had, Do->did.",
      "Put, cut, cost gibi fiiller geçmiş zamanda hiç değişmez.",
      "Düzensiz fiiller sadece olumlu cümlelerde V2 formunda kullanılır."
    ]
  },
  "85": {
    "skillType": "grammar",
    "concreteCompetency": "A2 standardında Past Simple olumsuz cümlelerini 'did not' / 'didn't' kullanarak tüm şahıslarla kurabilmek; olumsuzluk geldikten sonra fiilin 2. halinin ASLA kullanılmayacağını (*didn't went / *didn't bought vahim hatasını engelleyerek) ve fiilin mutlaka kök/sözlük haline (V1) döndürüleceğini hatasız uygulamak.",
    "whyItMatters": "Geçmişte yapmadığınız şeyleri, gerçekleşmeyen olayları veya katılmadığınız toplantıları anlatırken 'didn't + V1' kuralını hatasız kullanmak dil bilgisel güvenilirlik sağlar.",
    "linguisticLogic": "İngilizce mantığında bir cümlede geçmiş zaman göstergesi YALNIZCA BİR KEZ verilir. Olumlu cümlede bu gösterge ana fiilin üzerindedir (I went). Ancak cümleye olumsuzluk girmek istediğinde 'not' tek başına bir fiile yapışamaz; mutlaka bir yardımcı fiile ihtiyaç duyar. Geçmiş zamanın yardımcı fiili 'DID' cümleye girer ve 'didn't' halini alır. DID zaten geçmiş zaman bilgisini üzerinde taşıdığı için (do -> did), ana fiilin geçmiş zaman takısı taşımasına gerek kalmaz; hatta taşıması gramer felaketidir (çifte geçmiş zaman yüklemesi / redundancy). Dolayısıyla 'didn't' ardından gelen fiil her zaman ek almamış, yalın, saf V1 halindedir.",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Formülün Anatomisi (Özne + didn't + V1)",
        "content": "Bütün öznelerde (I, you, he, she, it, we, they) olumsuzluk 'didn't' ile yapılır. Arkasından fiilin 1. hali (sözlük hali) gelir: I didn't know, She didn't come, We didn't buy.",
        "formula": "ÖZNE + DIDN'T + YALIN FİİL (V1)",
        "keyPhrase": "I didn't receive the package and she didn't call me.",
        "subPoints": [
          "Düzenli fiiller -ed takısını atar: didn't work (didn't worked YANLIŞ).",
          "Düzensiz fiiller 1. haline döner: didn't go (didn't went YANLIŞ)."
        ],
        "rationale": "Öğrenciye olumsuz geçmiş zamanın mekanik matematiğini kavratır."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Çifte Geçmiş Zaman Tuzağı (Double Past Tense Trap)",
        "content": "Öğrencilerin en çok yaptığı hata: 'went' kelimesini geçmiş zaman diye ezberleyip 'didn't went' demektir. 'Didn't' geçmişliği üstlendiği için 'went' hemen 'go'ya, 'saw' hemen 'see'ye, 'bought' hemen 'buy'a dönüşmelidir.",
        "formula": "*didn't + V2 = YASAK!  -->  didn't + V1 = KURAL",
        "keyPhrase": "We didn't see the accident because we didn't look outside.",
        "subPoints": [
          "*didn't saw -> YANLIŞ!  --> didn't see -> DOĞRU!",
          "*didn't ate -> YANLIŞ!  --> didn't eat -> DOĞRU!"
        ],
        "rationale": "En köklü fosilleşmiş öğrenci hatasını imha eder."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: Konuşma Dilinde Akıcı Telaffuz (/dɪd.ənt/)",
        "content": "Resmi yazışmalarda ve aşırı vurguda 'did not' kullanılırken, günlük konuşmada %99 oranında 'didn't' (/ˈdɪd.ənt/ veya tek hece gibi /dɪdnt/) kısaltması kullanılır. 'Not' kelimesindeki 'o' harfi yutulur.",
        "formula": "did not -> didn't (/ˈdɪd.ənt/)",
        "keyPhrase": "He didn't answer his phone all day.",
        "subPoints": [
          "Kuvvetli itirazlarda vurgu 'DID NOT' üzerine yapılır: 'I did NOT steal the money!'"
        ],
        "rationale": "Doğal konuşma kısaltmasını ve pragmatik vurgu kullanımını öğretir."
      }
    ],
    "ruleCards": [
      {
        "title": "Fiil Yalınlaşma Kuralı",
        "rule": "Didn't kelimesinden sonra gelen fiil hiçbir ek alamaz (-ed, -s, -ing YASAK) ve 2. haline dönemez.",
        "example": "They didn't invite us to the wedding.",
        "tip": "Didn't bir mıknatıs gibidir; fiilin sırtındaki -ed ve geçmişlik hallerini çeker alır!"
      },
      {
        "title": "Tüm Şahıslar Ortaktır",
        "rule": "He/She/It için 'doesn't' geniş zamandadır; geçmiş zamanda istisnasız tüm şahıslar 'didn't' alır.",
        "example": "She didn't like the soup.",
        "tip": "Geçmişte şahıs ayrımı yoktur, herkes 'didn't' kullanır."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "She *didn't went to the hospital yesterday.",
        "correctExample": "She didn't go to the hospital yesterday.",
        "rootCause": "'Didn't' varken geçmiş zaman refleksini durduramayıp 'went' (V2) kullanmak.",
        "memoryTip": "Didn't gördün mü WENT kaçar, GO gelir!"
      },
      {
        "wrongExample": "I *didn't finished the assignment on time.",
        "correctExample": "I didn't finish the assignment on time.",
        "rootCause": "Düzenli fiillerde -ed ekini silmeyi unutmak.",
        "memoryTip": "Didn't varsa -ed çöpe atılır: didn't FINISH!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "İş Yerinde Teslim Edilmeyen Raporun Gerekçesi",
      "description": "Proje yöneticisi ile çalışan dünkü rapor hakkında konuşur.",
      "contextType": "work",
      "dialogue": [
        {
          "speaker": "Manager",
          "textEn": "Alex, I checked my inbox this morning, but I didn't see your sales report.",
          "textTr": "Alex, bu sabah gelen kutumu kontrol ettim ama satış raporunu görmedim."
        },
        {
          "speaker": "Alex",
          "textEn": "I am so sorry. I didn't finish the final calculations yesterday because the server didn't work.",
          "textTr": "Çok özür dilerim. Dün sunucu çalışmadığı için son hesaplamaları bitiremedim."
        },
        {
          "speaker": "Manager",
          "textEn": "Why didn't you inform IT support?",
          "textTr": "Neden BT desteğine haber vermedin?"
        },
        {
          "speaker": "Alex",
          "textEn": "I called them, but they didn't answer.",
          "textTr": "Onları aradım ama cevap vermediler."
        }
      ],
      "culturalNote": "İş dünyasında mazeret veya durum bildirirken olumsuz geçmiş zaman cümleleri dürüst ve net bir dil kurmanın temelidir."
    },
    "contrastiveAnalysis": {
      "title": "İngilizce Didn't + V1 vs Türkçe Olumsuz Geçmiş Zaman",
      "englishConcept": "İngilizcede olumsuzluk eki (didn't) fiilin dışındadır ve fiili yalın (V1) bırakır.",
      "turkishDifference": "Türkçede olumsuzluk eki (-me/-ma) fiil köküne yapışır ve geçmiş zaman eki (-di) fiilin üzerinde kalmaya devam eder: git-me-di (gitmedi). İngilizcede ise fiil hiçbir ek taşımaz.",
      "directComparison": [
        {
          "context": "Düzenli",
          "en": "didn't play",
          "trMeaning": "oynamadı",
          "commonErrorTr": "*didn't played",
          "whyItMatters": "play yalındır."
        },
        {
          "context": "Düzensiz",
          "en": "didn't buy",
          "trMeaning": "satın almadı",
          "commonErrorTr": "*didn't bought",
          "whyItMatters": "buy 1. haldedir."
        }
      ]
    },
    "memoryHook": "DİDN'T KURALI: Didn't geldiği an fiil tatil moduna girer; tüm eklerini çıkarır, en yalın haliyle kalır!",
    "examples": [
      {
        "en": "The finance department didn't approve the travel expenses yesterday.",
        "tr": "Finans departmanı dün seyahat masraflarını onaylamadı.",
        "highlightedWords": [
          "didn't approve"
        ],
        "grammarCategory": "Olumsuz Düzenli Fiil (didn't + V1)",
        "contextNote": "Şirket içi bütçe kararı.",
        "breakdownNote": "Didn't sonrasında approve fiili ek almamıştır."
      },
      {
        "en": "We didn't catch the morning train because we woke up late.",
        "tr": "Geç uyandığımız için sabah trenine yetişemedik.",
        "highlightedWords": [
          "didn't catch"
        ],
        "grammarCategory": "Olumsuz Düzensiz Fiil (didn't + V1)",
        "contextNote": "Ulaşım aksaması.",
        "breakdownNote": "Catch fiilinin 2. hali caught olmasına rağmen didn't olduğu için catch kalmıştır."
      },
      {
        "en": "She didn't tell anyone about her job interview in London.",
        "tr": "Londra'daki iş mülakatı hakkında hiç kimseye bir şey söylemedi.",
        "highlightedWords": [
          "didn't tell"
        ],
        "grammarCategory": "Olumsuz Düzensiz Fiil (didn't + V1)",
        "contextNote": "Gizli tutulan plan.",
        "breakdownNote": "Tell fiili told yerine 1. haliyle kullanılmıştır."
      }
    ],
    "vocabulary": [
      {
        "word": "Expense",
        "phonetic": "/ɪkˈspens/",
        "partOfSpeech": "noun",
        "meaningTr": "Masraf, harcama, gider",
        "exampleSentence": "Travel expenses were very high."
      },
      {
        "word": "Catch",
        "phonetic": "/kætʃ/",
        "partOfSpeech": "verb",
        "meaningTr": "Yetişmek (trene, uçağa), yakalamak",
        "exampleSentence": "We ran fast to catch the bus."
      },
      {
        "word": "Interview",
        "phonetic": "/ˈɪn.tə.vjuː/",
        "partOfSpeech": "noun",
        "meaningTr": "Mülakat, iş görüşmesi",
        "exampleSentence": "The job interview lasted one hour."
      },
      {
        "word": "Server",
        "phonetic": "/ˈsɜː.vər/",
        "partOfSpeech": "noun",
        "meaningTr": "Sunucu (bilgisayar)",
        "exampleSentence": "The company server crashed yesterday."
      }
    ],
    "quickCheck": {
      "question": "Aşağıdaki olumsuz cümlelerden hangisi dilbilgisel olarak KUSURSUZDUR?",
      "options": [
        "I didn't understand the complex instructions.",
        "I didn't understood the complex instructions.",
        "I didn't understood not the complex instructions.",
        "I not understood the complex instructions."
      ],
      "correctIndex": 0,
      "explanation": "'Didn't' yardımcı fiilinden sonra 'understand' fiilinin 1. hali (yalın hali) gelmelidir. 'Understood' 2. hal olduğu için hatalıdır."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa uygun olumsuz geçmiş zaman fiil formunu yerleştirin:",
      "sentence": "The security guards ___ the visitor into the building without an ID badge.",
      "options": [
        "didn't let",
        "didn't letted",
        "didn't leted",
        "not let"
      ],
      "correctAnswer": "didn't let",
      "hint": "Didn't + V1 kuralı geçerlidir. 'Let' fiilinin yalın hali nedir?",
      "explanation": "'Let' fiili yalın olarak kalır ve 'didn't let' doğru olumsuz geçmiş yapısını oluşturur."
    },
    "sentenceBuilder": {
      "promptTr": "Hava çok rüzgarlı olduğu için dün tekneler limandan ayrılmadı.",
      "targetEn": "The boats didn't leave the harbor yesterday because the weather was very windy",
      "availableWords": [
        "The",
        "boats",
        "didn't",
        "leave",
        "the",
        "harbor",
        "yesterday",
        "because",
        "the",
        "weather",
        "was",
        "very",
        "windy",
        "left",
        "did"
      ],
      "explanation": "Özne (The boats) + didn't + V1 (leave, left DEĞİL) + nesne (the harbor) + zaman (yesterday) + gerekçe yan cümleciği."
    },
    "summaryTakeaways": [
      "Past Simple'da tüm özneler için olumsuzluk yapısı 'didn't + V1'dir.",
      "'Didn't' cümlenin geçmişlik yükünü taşır; ana fiil asla 2. haline dönemez.",
      "*didn't went, *didn't saw, *didn't played gibi kullanımlar ölümcül gramer hatasıdır.",
      "Konuşma dilinde 'did not' yerine 'didn't' kısaltması tercih edilir."
    ]
  },
  "86": {
    "skillType": "speaking",
    "concreteCompetency": "A2 standardında geçmiş zamanda bir eylemin yapılıp yapılmadığını öğrenmek için 'Did + Özne + Yalın Fiil (V1)...?' soru kalıbını kurabilmek; soru sorarken fiilin yalın kalacağını bilmek; Evet/Hayır sorularına 'Yes, I did. / No, I didn't.' şeklinde doğru kısa cevaplar verebilmek; 'Wh-' soru kelimeleriyle (What, Where, When, Why, Who, How) açık uçlu geçmiş zaman soruları yöneltebilmek.",
    "whyItMatters": "Sohbet başlatırken birinin dün ne yaptığını sormak, mülakatta eski deneyimleri sorgulamak veya günlük hayatta bir bilginin teyidini almak geçmiş zaman soru kalıbıyla gerçekleşir.",
    "linguisticLogic": "İngilizcede geçmiş zaman soru yapısı iki temel düzene dayanır: 1) EVET/HAYIR SORULARI (Yes/No Questions): Cümlenin en başına 'DID' yardımcı fiili getirilir. Did başa geçtiği için ana fiil yine yalın (V1) halde kalır: 'Did you see...?' / 'Did she call...?'. Cevap verirken fiil tekrarlanmaz; yardımcı fiille kısa cevap verilir: 'Yes, I did. / No, I didn't.'. 2) AÇIK UÇLU SORULAR (Wh- Questions): 'What, Where, When, Why, Who, How' gibi soru kelimeleri en başa gelir ve ardından standart 'DID + Özne + V1' dizilimi takip eder: 'Where did you go?' / 'What did they buy?'. *Where did you went? YANLIŞTIR, çünkü DID zaten sorunun geçmiş zaman olduğunu ilan etmiştir.",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Standart Did Sorusu ve Kısa Cevaplar",
        "content": "Geçmiş zaman sorusu kurarken cümlenin başına 'DID' koyun, özneyi yazın ve fiili hiçbir ek almadan yalın (V1) halde ekleyin: Did you sleep well? Cevapta sadece 'Yes, I did' veya 'No, I didn't' denir.",
        "formula": "DID + ÖZNE + YALIN FİİL (V1) ... ?  -->  Yes, [özne] did. / No, [özne] didn't.",
        "keyPhrase": "Did you lock the front door? - Yes, I did. / No, I didn't.",
        "subPoints": [
          "*Did you locked...? -> YANLIŞ! (Fiil V1 olmalı).",
          "Kısa cevapta ana fiil söylenmez: *Yes, I locked denmez; 'Yes, I did' denir."
        ],
        "rationale": "Soru oluşturma ve kibar kısa cevap verme refleksini oturtur."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Wh- Bilgi Soruları (Where, What, When, Why, How)",
        "content": "Ayrıntılı bilgi almak istediğinizde Wh- soru kelimesini en başa alın; ardından Did + Özne + V1 yapısını aynen koruyun: Where did you stay? (Nerede kaldınız?), What time did you wake up? (Saat kaçta uyandınız?).",
        "formula": "WH- + DID + ÖZNE + V1 ... ?",
        "keyPhrase": "Where did you buy that leather jacket? - I bought it in Florence.",
        "subPoints": [
          "Soru sorarken fiil yalındır (buy), ancak cevap tam cümle ise fiil 2. hale geçer (bought)!",
          "Who konusuna dikkat: 'Who called you?' (Özne sorusu did almaz), 'Who did you call?' (Kimi aradın, did alır)."
        ],
        "rationale": "Açık uçlu soru mekanizmasını ve cevap verme geçişini öğretir."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: Soru Sorma Tonlaması (Intonation)",
        "content": "Evet/Hayır sorularında ses tonu cümlenin sonunda yukarı doğru yükselir (Did you like the food? ↗). Wh- sorularında ise ses tonu cümlenin sonunda aşağıya doğru iner (Where did you meet him? ↘).",
        "formula": "Yes/No Soru: ↗ Yükselen Ton  |  Wh- Soru: ↘ Düşen Ton",
        "keyPhrase": "Did you understand? ↗  vs  What did you understand? ↘",
        "subPoints": [
          "Doğru tonlama sorunun samimi ve doğal duyulmasını sağlar."
        ],
        "rationale": "Fonetik tonlama kurallarıyla konuşma doğallığı kazandırır."
      }
    ],
    "ruleCards": [
      {
        "title": "Soru Cümlesinde V1 Zorunluluğu",
        "rule": "Did ile başlayan hiçbir soruda fiil 2. halde (V2) olamaz: Did you go? Did they see?",
        "example": "Did you visit the museum yesterday?",
        "tip": "Soru işaretini gördün, Did'i gördün -> fiili hemen sözlük haline çevir!"
      },
      {
        "title": "Kısa Cevap Kuralları",
        "rule": "Did sorularına 'Yes, I do' veya 'Yes, I went' denmez; sadece 'Yes, I did' veya 'No, I didn't' denir.",
        "example": "Did she pass the test? - Yes, she did.",
        "tip": "Soruyu hangi yardımcı fiille sorduysan cevabı da onunla kapat!"
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "*Where did you went on vacation last summer?",
        "correctExample": "Where did you go on vacation last summer?",
        "rootCause": "Soru kelimesinin ardındaki 'did' yardımcı fiiline rağmen ana fiili de geçmiş zaman 2. halinde (went) kullanmak.",
        "memoryTip": "Did varsa WENT yok; Did you GO!"
      },
      {
        "wrongExample": "Did you finish the report? - *Yes, I finished.",
        "correctExample": "Did you finish the report? - Yes, I did.",
        "rootCause": "İngilizce kısa cevap sistemini bilmeyip ana fiili tek başına tekrarlamak.",
        "memoryTip": "Kısa cevapta fiil söylenmez: Yes, I DID!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Havaalanında Pasaport Kontrolü ve Gümrük Mülakatı",
      "description": "Gümrük memuru ülkeye giriş yapan yolcuya seyahatiyle ilgili geçmiş zaman soruları sorar.",
      "contextType": "travel",
      "dialogue": [
        {
          "speaker": "Officer",
          "textEn": "Good evening sir. Where did you fly from today?",
          "textTr": "İyi akşamlar efendim. Bugün nereden uçtunuz?"
        },
        {
          "speaker": "Traveler",
          "textEn": "I flew from Istanbul on flight TK1985.",
          "textTr": "TK1985 sefer sayılı uçuşla İstanbul'dan uçtum."
        },
        {
          "speaker": "Officer",
          "textEn": "Did you pack your luggage yourself?",
          "textTr": "Bavulunuzu kendiniz mi hazırladınız?"
        },
        {
          "speaker": "Traveler",
          "textEn": "Yes, I did.",
          "textTr": "Evet, kendim hazırladım."
        },
        {
          "speaker": "Officer",
          "textEn": "Did anyone give you any packages to carry for them?",
          "textTr": "Biri size kendisi için taşımanız üzere paket verdi mi?"
        },
        {
          "speaker": "Traveler",
          "textEn": "No, they didn't. Nobody gave me anything.",
          "textTr": "Hayır, vermedi. Kimse bana bir şey vermedi."
        }
      ],
      "culturalNote": "Havaalanı gümrüklerinde 'Did you pack your luggage yourself?' sorusuna net ve tereddütsüz 'Yes, I did' demek güvenlik protokolünün parçasıdır."
    },
    "contrastiveAnalysis": {
      "title": "İngilizce Did Soruları vs Türkçe Soru Eki",
      "englishConcept": "İngilizcede soru eki cümlenin en başına (Did) gelir ve ana fiil yalın kalır.",
      "turkishDifference": "Türkçede soru edatı (mi/mı) cümlenin en sonuna gelir ve geçmiş zaman eki fiilin üstünde durur (gittin mi?). İngilizcede ise başa Did gelir, fiil ek almaz (Did you go?).",
      "directComparison": [
        {
          "context": "Soru başı",
          "en": "Did you call?",
          "trMeaning": "Aradın mı?",
          "commonErrorTr": "*You called?",
          "whyItMatters": "Soru için Did başa gelmelidir."
        },
        {
          "context": "Wh- sorusu",
          "en": "What did you say?",
          "trMeaning": "Ne dedin?",
          "commonErrorTr": "*What you said?",
          "whyItMatters": "Wh- sonrasına did şarttır."
        }
      ]
    },
    "memoryHook": "DİD DEDEKTİFİ: 'Did' başa geçer, şüpheli fiili sorguya çeker ve üzerindeki tüm ekleri soydurur (V1 yapar)!",
    "examples": [
      {
        "en": "Did your company launch the new mobile application last month?",
        "tr": "Şirketiniz geçen ay yeni mobil uygulamayı piyasaya sürdü mü?",
        "highlightedWords": [
          "Did your company launch"
        ],
        "grammarCategory": "Geçmiş Zaman Evet/Hayır Sorusu",
        "contextNote": "İş dünyasında ürün lansmanı.",
        "breakdownNote": "Did başa gelmiş, launch fiili yalın kalmıştır."
      },
      {
        "en": "Why did the train arrive forty minutes late this morning?",
        "tr": "Tren bu sabah neden kırk dakika geç geldi?",
        "highlightedWords": [
          "Why did the train arrive"
        ],
        "grammarCategory": "Wh- Bilgi Sorusu (Why + did + Özne + V1)",
        "contextNote": "Ulaşım gecikmesi sorgulama.",
        "breakdownNote": "Why'dan sonra did gelmiş, arrive fiili ek almamıştır."
      },
      {
        "en": "How much money did you spend on your vacation in Spain?",
        "tr": "İspanya'daki tatilinizde ne kadar para harcadınız?",
        "highlightedWords": [
          "How much money did you spend"
        ],
        "grammarCategory": "Miktar Sorusu (How much + did + Özne + V1)",
        "contextNote": "Tatil bütçesi sorusu.",
        "breakdownNote": "Spend fiilinin 2. hali spent olmasına rağmen soru did içerdiği için spend kalmıştır."
      }
    ],
    "vocabulary": [
      {
        "word": "Luggage",
        "phonetic": "/ˈlʌɡ.ɪdʒ/",
        "partOfSpeech": "noun",
        "meaningTr": "Bagaj, bavul",
        "exampleSentence": "Did you pack your luggage yourself?"
      },
      {
        "word": "Flight",
        "phonetic": "/flaɪt/",
        "partOfSpeech": "noun",
        "meaningTr": "Uçuş, uçak seferi",
        "exampleSentence": "Our flight departed on schedule."
      },
      {
        "word": "Launch",
        "phonetic": "/lɔːntʃ/",
        "partOfSpeech": "verb",
        "meaningTr": "Piyasaya sürmek, başlatmak",
        "exampleSentence": "They launched a new product yesterday."
      },
      {
        "word": "Customs",
        "phonetic": "/ˈkʌs.təmz/",
        "partOfSpeech": "noun",
        "meaningTr": "Gümrük",
        "exampleSentence": "We passed through customs smoothly."
      }
    ],
    "quickCheck": {
      "question": "Aşağıdaki sorulardan hangisi gramer açısından TAMAMEN DOĞRUDUR?",
      "options": [
        "What did you learn in yesterday's seminar?",
        "What did you learned in yesterday's seminar?",
        "Where did you went after the meeting?",
        "Did she attended the training session?"
      ],
      "correctIndex": 0,
      "explanation": "'Did' bulunan sorularda fiil yalın halde (learn) olmalıdır. Diğer seçeneklerde learned, went, attended hatalı olarak geçmiş halde kullanılmıştır."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa uygun soru dizilimini yerleştirin:",
      "sentence": "___ to the international conference in Berlin last autumn?",
      "options": [
        "Did your director go",
        "Did your director went",
        "Went your director",
        "Did go your director"
      ],
      "correctAnswer": "Did your director go",
      "hint": "Formül: Did + Özne + V1",
      "explanation": "'Did' + Özne (your director) + V1 (go) sıralaması tam doğrudur."
    },
    "sentenceBuilder": {
      "promptTr": "Dün akşam müdürün gönderdiği önemli e-postayı aldın mı?",
      "targetEn": "Did you receive the important email that the manager sent yesterday evening",
      "availableWords": [
        "Did",
        "you",
        "receive",
        "the",
        "important",
        "email",
        "that",
        "the",
        "manager",
        "sent",
        "yesterday",
        "evening",
        "received",
        "do"
      ],
      "explanation": "Did + you + receive (V1) + nesne öbeği + zaman belirteci."
    },
    "summaryTakeaways": [
      "Past Simple soru yapısı: 'DID + Özne + Yalın Fiil (V1)...?' şeklindedir.",
      "Wh- sorularında soru kelimesi en başa gelir: 'Where did you go?'.",
      "Kısa cevaplar 'Yes, I did. / No, I didn't.' şeklindedir; ana fiil söylenmez.",
      "Soruda 'did' varken ana fiile asla -ed eklenmez veya 2. hali kullanılmaz."
    ]
  },
  "87": {
    "skillType": "vocabulary",
    "concreteCompetency": "A2 standardında Past Simple cümlelerini geçmiş zamana bağlayan ana zaman belirteçlerini (Yesterday ve türevleri, Last + zaman birimi, Süre + ago, In + geçmiş yıl/ay) anlam, kullanım kısıtlamaları ve cümle sonundaki doğru konumuyla hatasız kullanabilmek.",
    "whyItMatters": "Geçmiş zamanı kurarken eylemin ne zaman yapıldığını netleştirmek olayın inandırıcılığını ve anlatımın netliğini sağlar. 'Yesterday night' gibi yaygın Türkçeleştirme hatalarından kurtulmak için bu kalıpları bilmek şarttır.",
    "linguisticLogic": "İngilizcede Past Simple doğrudan 'belirli bir geçmiş an' gerektirir. Bu zamanı sabitleyen 4 büyük zaman belirteci ailesi vardır: 1) YESTERDAY (Dün): Tek başına kullanılır veya 'yesterday morning', 'yesterday afternoon', 'yesterday evening' şeklinde sabah/öğle/akşam ile birleşir. DİKKAT: Dün gece demek için *yesterday night ASLA denmez; İngilizcede dün gece 'LAST NIGHT'tır! 2) LAST (Geçen): Önüne edat (in, on, at) ALMAZ. Last night, last week, last month, last year, last Sunday, last summer. (*in last week YANLIŞTIR). 3) AGO (Önce): Mutlaka bir zaman süresinin ARDINDAN gelir: 'two days ago' (iki gün önce), 'five minutes ago' (beş dakika önce), 'a long time ago' (çok uzun zaman önce). Önüne değil arkasına takılır (*ago two days YANLIŞTIR). 4) IN + GEÇMİŞ YIL/AY: 'in 2019', 'in July', 'in the 20th century'.",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: 'Yesterday' ve 'Last Night' Hayati Ayrımı",
        "content": "Dün sabah -> yesterday morning, dün öğleden sonra -> yesterday afternoon, dün akşam -> yesterday evening. ANCAK dün gece için İngilizcede tek bir doğru ifade vardır: LAST NIGHT. *Yesterday night demek büyük bir acemi hatasıdır.",
        "formula": "yesterday morning/afternoon/evening  BUT  LAST NIGHT",
        "keyPhrase": "I watched the debate on television last night.",
        "subPoints": [
          "*yesterday night -> KESİNLİKLE YANLIŞ!",
          "last night -> DOĞRU!"
        ],
        "rationale": "Öğrencilerin Türkçeden doğrudan çeviri yaparak düştüğü en yaygın tuzağı temizler."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: 'LAST' Ailesi ve Edatsızlık Kuralı",
        "content": "'Last' kelimesi geçen zaman periyotlarını anlatır: last Monday, last weekend, last month, last winter. 'Last' önüne asla 'in' veya 'on' edatı almaz. 'I saw him in last week' değil, 'I saw him last week' denir.",
        "formula": "LAST + [Zaman Birimi] (Edat yok!)",
        "keyPhrase": "Our team visited the client in Berlin last week.",
        "subPoints": [
          "*in last year YANLIŞ -> last year DOĞRU",
          "*on last Sunday YANLIŞ -> last Sunday DOĞRU"
        ],
        "rationale": "Gereksiz edat kullanımını engeller."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: 'AGO' Sözcüğünün Sona Gelme Kuralı",
        "content": "'Ago' kelimesi Türkçedeki 'önce' anlamına gelir. Ancak Türkçenin aksine önce süreyi söylersiniz, 'ago' sözcüğünü cümlenin en sonuna eklersiniz: two hours ago (iki saat önce), three weeks ago (üç hafta önce), ten years ago (on yıl önce).",
        "formula": "[Zaman Süresi] + AGO",
        "keyPhrase": "She moved to Canada five years ago.",
        "subPoints": [
          "*ago five years -> KESİNLİKLE YANLIŞ!",
          "five years ago -> DOĞRU!"
        ],
        "rationale": "Sözcük dizilimi hatasını kalıcı olarak düzeltir."
      }
    ],
    "ruleCards": [
      {
        "title": "Last Night Kuralı",
        "rule": "Dün gece demek için İngilizcede daima 'last night' kullanılır. Yesterday night yasaktır.",
        "example": "We slept early last night.",
        "tip": "Geceyi dünle değil, 'son/geçen' ile an: LAST night!"
      },
      {
        "title": "Ago Dizilim Kuralı",
        "rule": "Süre + ago: three days ago, ten minutes ago, a month ago.",
        "example": "The plane landed ten minutes ago.",
        "tip": "Süreyi öne çek, 'ago'yu arkasına yapıştır!"
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "I finished my homework *yesterday night.",
        "correctExample": "I finished my homework last night.",
        "rootCause": "Türkçedeki 'dün gece' kelimesini kelimesi kelimesine (yesterday + night) çevirmek.",
        "memoryTip": "İngilizcede dün gece yoktur; GEÇEN GECE vardır: LAST NIGHT!"
      },
      {
        "wrongExample": "The concert started *ago thirty minutes.",
        "correctExample": "The concert started thirty minutes ago.",
        "rootCause": "Türkçedeki 'önce 30 dakika' gibi 'ago' kelimesini sürenin önüne koymak.",
        "memoryTip": "Ago daima arkadan gelir: thirty minutes AGO!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Kayıp Kargo Takibi İçin Müşteri Hizmetleri Araması",
      "description": "Müşteri online sipariş ettiği ürünün ne zaman kargoya verildiğini müşteri temsilcisine sorar.",
      "contextType": "daily",
      "dialogue": [
        {
          "speaker": "Customer",
          "textEn": "Hello, I ordered a winter jacket two weeks ago, but it hasn't arrived.",
          "textTr": "Merhaba, iki hafta önce bir kışlık ceket sipariş ettim ama ulaşmadı."
        },
        {
          "speaker": "Agent",
          "textEn": "Let me check your tracking number. Ah, our warehouse dispatched it last Thursday.",
          "textTr": "Takip numaranızı kontrol edeyim. Ah, depomuz ürünü geçen Perşembe sevk etmiş."
        },
        {
          "speaker": "Customer",
          "textEn": "Did the courier attempt delivery yesterday?",
          "textTr": "Kurye dün teslimatı denedi mi?"
        },
        {
          "speaker": "Agent",
          "textEn": "Yes, they arrived yesterday afternoon at 3 PM, but nobody answered the doorbell.",
          "textTr": "Evet, dün öğleden sonra saat 3'te gelmişler ama kapı ziline kimse cevap vermemiş."
        }
      ],
      "culturalNote": "Müşteri hizmetleri ve resmi başvurularda eylemlerin kesin zaman belirteçleriyle (two weeks ago, last Thursday, yesterday afternoon) bildirilmesi sorunun çözülmesini hızlandırır."
    },
    "contrastiveAnalysis": {
      "title": "İngilizce Zaman Belirteçleri vs Türkçe",
      "englishConcept": "Ago sona gelir (two days ago); geçen ifadeleri edatsız kullanılır (last week).",
      "turkishDifference": "Türkçede 'iki gün önce' ifadesinde 'önce' sonradır ve bu örtüşür; ancak Türkçede 'geçen hafta-da' denirken İngilizcede 'in' konmaz.",
      "directComparison": [
        {
          "context": "Dün gece",
          "en": "last night",
          "trMeaning": "dün gece",
          "commonErrorTr": "*yesterday night",
          "whyItMatters": "last night kalıptır."
        },
        {
          "context": "Edat kullanımı",
          "en": "last year",
          "trMeaning": "geçen yıl",
          "commonErrorTr": "*in last year",
          "whyItMatters": "last önüne in almaz."
        }
      ]
    },
    "memoryHook": "ZAMAN FORMÜLÜ: Dün sabah/akşam = YESTERDAY, Dün gece = LAST NIGHT, Süre + AGO, Edatsız = LAST WEEK!",
    "examples": [
      {
        "en": "The prime minister announced the new economic reform package three days ago.",
        "tr": "Başbakan yeni ekonomik reform paketini üç gün önce duyurdu.",
        "highlightedWords": [
          "three days ago"
        ],
        "grammarCategory": "Zaman Belirteci (Süre + ago)",
        "contextNote": "Hükümet duyurusu.",
        "breakdownNote": "Three days (süre) + ago dizilimi cümlenin sonundadır."
      },
      {
        "en": "Our CEO traveled to Tokyo on business last month.",
        "tr": "İcra kurulu başkanımız geçen ay iş için Tokyo'ya seyahat etti.",
        "highlightedWords": [
          "last month"
        ],
        "grammarCategory": "Zaman Belirteci (Last + zaman birimi)",
        "contextNote": "İş seyahati.",
        "breakdownNote": "Last month önüne in veya at almadan doğrudan yer almıştır."
      },
      {
        "en": "A heavy thunderstorm damaged the coastal bridge last night.",
        "tr": "Dün gece şiddetli bir fırtına kıyı köprüsüne zarar verdi.",
        "highlightedWords": [
          "last night"
        ],
        "grammarCategory": "Zaman Belirteci (Last night)",
        "contextNote": "Doğa olayı haberi.",
        "breakdownNote": "Dün gece anlamında doğru kalıp olan 'last night' kullanılmıştır."
      }
    ],
    "vocabulary": [
      {
        "word": "Dispatch",
        "phonetic": "/dɪˈspætʃ/",
        "partOfSpeech": "verb",
        "meaningTr": "Sevk etmek, yollamak",
        "exampleSentence": "The warehouse dispatched the goods."
      },
      {
        "word": "Courier",
        "phonetic": "/ˈkʊr.i.ər/",
        "partOfSpeech": "noun",
        "meaningTr": "Kurye, kargo görevlisi",
        "exampleSentence": "The courier delivered the parcel."
      },
      {
        "word": "Thunderstorm",
        "phonetic": "/ˈθʌn.də.stɔːm/",
        "partOfSpeech": "noun",
        "meaningTr": "Gök gürültülü fırtına",
        "exampleSentence": "A thunderstorm started last night."
      },
      {
        "word": "Warehouse",
        "phonetic": "/ˈweə.haʊs/",
        "partOfSpeech": "noun",
        "meaningTr": "Depo, ambar",
        "exampleSentence": "Products are stored in the warehouse."
      }
    ],
    "quickCheck": {
      "question": "Aşağıdaki cümlelerden hangisinde geçmiş zaman belirteci TAMAMEN DOĞRU kullanılmıştır?",
      "options": [
        "I watched an excellent documentary last night.",
        "I watched an excellent documentary yesterday night.",
        "I watched an excellent documentary in last week.",
        "I watched an excellent documentary ago two days."
      ],
      "correctIndex": 0,
      "explanation": "Dün gece için doğru ifade 'last night'tır. 'Yesterday night', 'in last week' ve 'ago two days' hatalıdır."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa uygun geçmiş zaman belirtecini yerleştirin:",
      "sentence": "The international flight landed safely in London ___.",
      "options": [
        "twenty minutes ago",
        "ago twenty minutes",
        "yesterday night",
        "in last hour"
      ],
      "correctAnswer": "twenty minutes ago",
      "hint": "Süre + ago dizilimi aranmaktadır.",
      "explanation": "Doğru zaman tamlaması süre ardından gelen 'ago'dur: 'twenty minutes ago'."
    },
    "sentenceBuilder": {
      "promptTr": "Ailemiz iki yıl önce İtalya'daki küçük bir kasabaya taşındı.",
      "targetEn": "Our family moved to a small town in Italy two years ago",
      "availableWords": [
        "Our",
        "family",
        "moved",
        "to",
        "a",
        "small",
        "town",
        "in",
        "Italy",
        "two",
        "years",
        "ago",
        "last",
        "in"
      ],
      "explanation": "Özne (Our family) + V2 (moved) + yönelme (to a small town in Italy) + zaman belirteci (two years ago)."
    },
    "summaryTakeaways": [
      "Dün sabah/öğle/akşam: yesterday morning/afternoon/evening.",
      "Dün gece KESİNLİKLE 'last night'tır (*yesterday night yanlıştır).",
      "'Last' önüne edat almaz: last week, last month, last year.",
      "'Ago' sürenin arkasına gelir: two days ago, five years ago."
    ]
  },
  "88": {
    "skillType": "grammar",
    "concreteCompetency": "A2 standardında geçmiş zamanda eylem (koşmak, almak vb.) içermeyen durum, sıfat, mekan ve meslek anlatımlarında 'To Be' fiilinin geçmiş halleri olan 'WAS' (I, he, she, it) ve 'WERE' (you, we, they) yardımcı fiillerini hatasız seçebilmek; en kritik kural olarak 'was/were' cümlelerinde 'did' yardımcı fiilinin ASLA kullanılmayacağını kavramak.",
    "whyItMatters": "Dün nerede olduğunuzu, nasıl hissettiğinizi veya havanın nasıl olduğunu anlatırken eylem fiili bulunmaz; durum fiili olan was/were kullanılır. Bu iki yapıyı karıştırmamak İngilizce omurgasını sağlamlaştırır.",
    "linguisticLogic": "İngilizcede şimdiki zamanda durum bildiren 'am / is / are' fiilleri geçmiş zamana geçildiğinde ikiye ayrılır: 1) WAS: Tekil özneler olan 'I, He, She, It' ile kullanılır (am ve is geçmişte WAS olur). Örnek: 'I was tired' (Yorgundum), 'She was a teacher' (Öğretmendi). 2) WERE: Çoğul ve ikinci tekil şahıslar olan 'You, We, They' ile kullanılır (are geçmişte WERE olur). Örnek: 'You were late' (Geciktin), 'They were in Paris' (Paris'teydiler). 3) ALTIN KURAL (No Did with Was/Were): Cümlede zaten bir yüklem olan was/were varken geçmiş zaman yardımcı fiili olan 'DID' ASLA cümleye giremez! *Did you were tired? veya *I didn't was at home demek İngilizcedeki en vahim hatalardan biridir.",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Şimdiki Zamandan Geçmişe Dönüşüm Tablosu",
        "content": "'am' ve 'is' geçmişte 'WAS' olur: I am -> I was, He is -> He was, It is -> It was. 'are' ise geçmişte 'WERE' olur: You are -> You were, We are -> We were, They are -> They were.",
        "formula": "I / He / She / It + WAS  |  You / We / They + WERE",
        "keyPhrase": "I was at home yesterday, but my parents were in the garden.",
        "subPoints": [
          "I zamiri geçmişte tekil kuralına uyar ve 'was' alır (I were YANLIŞ).",
          "You hem tekil (sen) hem çoğul (siz) için daima 'were' alır."
        ],
        "rationale": "Özne-fiil uyumunu berraklaştırır."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Durum Cümlesi vs Eylem Cümlesi Ayrımı",
        "content": "Cümlede koşmak, gitmek, almak gibi bir fiil yoksa; kişi bir mekandaysa (at school), bir sıfatla tanımlanıyorsa (tired, happy) veya bir unvana sahipse (manager) WAS/WERE kullanılır. Fiil varsa Past Simple eylem kuralı (V2) geçerlidir.",
        "formula": "Özne + was/were + [Sıfat / Yer Edatı / İsim]",
        "keyPhrase": "The weather was terrible and the streets were completely empty.",
        "subPoints": [
          "I was hungry (Açtım - Durum).",
          "I ate a sandwich (Sandviç yedim - Eylem)."
        ],
        "rationale": "Öğrencinin eylem fiilleri ile to be durum fiillerini karıştırmasını engeller."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: DID ile WAS/WERE Asla Yan Yana Gelemez!",
        "content": "Geçmiş zaman eylemlerinde 'did' kullanılır (Did you go?). Ancak durum bildiren to be cümlelerinde 'did' diye bir şey yoktur; cümlenin fiili zaten was veya were'ün kendisidir. Soru yaparken was/were başa geçer: Were you at home?",
        "formula": "*DID + WAS/WERE = KESİNLİKLE YASAK!",
        "keyPhrase": "Were you happy with the hotel? (*Did you were happy YANLIŞ!)",
        "subPoints": [
          "*Did you be tired? -> KORKUNÇ YANLIŞ!",
          "Were you tired? -> DOĞRU!"
        ],
        "rationale": "En köklü yapısal çatışmayı önler."
      }
    ],
    "ruleCards": [
      {
        "title": "Was & Were Dağılımı",
        "rule": "I, He, She, It -> WAS; You, We, They -> WERE.",
        "example": "She was a doctor in Germany. They were our neighbors.",
        "tip": "Tekillere WAS, çoğullara ve You'ya WERE!"
      },
      {
        "title": "Did Yasağı Kuralı",
        "rule": "Was veya Were olan yerde asla 'did' veya 'didn't' aranmaz.",
        "example": "He wasn't at the meeting (didn't was DEĞİL!).",
        "tip": "To be kendi başına yardımcı fiildir, did'e muhtaç değildir."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "*Did you were at the office yesterday?",
        "correctExample": "Were you at the office yesterday?",
        "rootCause": "Soru sormak için ezberlenen 'did' kalıbını durum fiili olan 'were'ün önüne eklemek.",
        "memoryTip": "Was ve Were krallığına 'DID' giremez: WERE YOU...?"
      },
      {
        "wrongExample": "The movie *were very interesting last night.",
        "correctExample": "The movie was very interesting last night.",
        "rootCause": "'The movie' öznesinin 3. tekil şahıs (it) olduğunu fark etmeyip 'were' kullanmak.",
        "memoryTip": "Film tekildir, tekillere WAS gelir: The movie WAS!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Otel Resepsiyonunda Konaklama Değerlendirmesi",
      "description": "Otelden çıkış (check-out) yapan misafir ile resepsiyonist dünkü konaklamayı konuşur.",
      "contextType": "travel",
      "dialogue": [
        {
          "speaker": "Receptionist",
          "textEn": "Good morning Mrs. Brown. How was your stay with us?",
          "textTr": "Günaydın Bayan Brown. Bizimle konaklamanız nasıldı?"
        },
        {
          "speaker": "Guest",
          "textEn": "It was wonderful! The room was very spacious and clean.",
          "textTr": "Harikaydı! Oda çok geniş ve temizdi."
        },
        {
          "speaker": "Receptionist",
          "textEn": "Were the breakfast options satisfactory?",
          "textTr": "Kahvaltı seçenekleri tatmin edici miydi?"
        },
        {
          "speaker": "Guest",
          "textEn": "Yes, they were fresh and delicious. My children were very happy.",
          "textTr": "Evet, taze ve lezzetliydi. Çocuklarım çok mutlu oldular."
        }
      ],
      "culturalNote": "Hizmet sektöründe 'How was your room / meal / stay?' sorusu müşterinin geçmiş deneyimini sormada en yaygın durum sorusudur."
    },
    "contrastiveAnalysis": {
      "title": "İngilizce Was/Were vs Türkçe İdi Eki",
      "englishConcept": "İngilizcede tekil için 'was', çoğul için 'were' kelimesi kullanılır.",
      "turkishDifference": "Türkçede isim veya sıfatın arkasına '-ydi / -idi' eki gelir (yorgun-du-m, yorgun-du-lar). İngilizcede ayrı bir kelime olarak öznenin ardına was/were konur.",
      "directComparison": [
        {
          "context": "Tekil",
          "en": "I was hungry",
          "trMeaning": "açtım (aç idim)",
          "commonErrorTr": "*I were",
          "whyItMatters": "I ile was kullanılır."
        },
        {
          "context": "Çoğul",
          "en": "They were late",
          "trMeaning": "gecikmişlerdi",
          "commonErrorTr": "*They was",
          "whyItMatters": "They ile were kullanılır."
        }
      ]
    },
    "memoryHook": "WAS-WERE KURALI: Ben ve tekiller WAS ile gezer; Sen, biz ve onlar WERE ile uçar. Ortamda DİD barınamaz!",
    "examples": [
      {
        "en": "The project manager was very satisfied with our quarterly performance.",
        "tr": "Proje müdürü üç aylık performansımızdan oldukça memnun kaldı.",
        "highlightedWords": [
          "was very satisfied"
        ],
        "grammarCategory": "Geçmiş Durum Cümlesi (Was + Sıfat)",
        "contextNote": "İş performansı değerlendirmesi.",
        "breakdownNote": "The project manager tekil (he/she) olduğu için 'was' almıştır."
      },
      {
        "en": "The roads were icy and dangerous because of the sudden frost.",
        "tr": "Ani don nedeniyle yollar buzlu ve tehlikeliydi.",
        "highlightedWords": [
          "were icy and dangerous"
        ],
        "grammarCategory": "Geçmiş Durum Cümlesi (Were + Sıfatlar)",
        "contextNote": "Hava ve yol durumu.",
        "breakdownNote": "The roads çoğul (they) olduğu için 'were' almıştır."
      },
      {
        "en": "We were in Rome for an international architectural symposium last spring.",
        "tr": "Geçen bahar uluslararası bir mimarlık sempozyumu için Roma'daydık.",
        "highlightedWords": [
          "were in Rome"
        ],
        "grammarCategory": "Geçmiş Mekan Cümlesi (Were + Yer Edatı)",
        "contextNote": "Konferans seyahati.",
        "breakdownNote": "We öznesi çoğuldur ve 'were' ile mekansal bulunma bildirir."
      }
    ],
    "vocabulary": [
      {
        "word": "Spacious",
        "phonetic": "/ˈspeɪ.ʃəs/",
        "partOfSpeech": "adjective",
        "meaningTr": "Geniş, ferah",
        "exampleSentence": "The hotel suite was very spacious."
      },
      {
        "word": "Satisfied",
        "phonetic": "/ˈsæt.ɪs.faɪd/",
        "partOfSpeech": "adjective",
        "meaningTr": "Memnun, tatmin olmuş",
        "exampleSentence": "The client was satisfied with the design."
      },
      {
        "word": "Frost",
        "phonetic": "/frɒst/",
        "partOfSpeech": "noun",
        "meaningTr": "Don, kırağı",
        "exampleSentence": "Morning frost covered the grass."
      },
      {
        "word": "Symposium",
        "phonetic": "/sɪmˈpəʊ.zi.əm/",
        "partOfSpeech": "noun",
        "meaningTr": "Sempozyum, bilimsel toplantı",
        "exampleSentence": "We attended a physics symposium."
      }
    ],
    "quickCheck": {
      "question": "Aşağıdaki cümlelerin hangisinde 'was / were' kullanımı TAMAMEN DOĞRUDUR?",
      "options": [
        "My colleagues were at the conference, but our director was sick at home.",
        "My colleagues was at the conference, but our director were sick at home.",
        "Did my colleagues were at the conference yesterday?",
        "My colleagues weren't did attend the conference."
      ],
      "correctIndex": 0,
      "explanation": "'Colleagues' çoğuldur ve 'were' alır; 'our director' tekildir ve 'was' alır. Cümlede 'did' yer almaz."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa uygun yardımcı fiili yerleştirin:",
      "sentence": "The museum tickets ___ surprisingly cheap last weekend.",
      "options": [
        "were",
        "was",
        "did",
        "are"
      ],
      "correctAnswer": "were",
      "hint": "'The museum tickets' çoğul bir öznedir (they). Hangi durum fiili gelir?",
      "explanation": "Çoğul öznelerle (tickets) geçmiş zamanda 'were' kullanılır."
    },
    "sentenceBuilder": {
      "promptTr": "Dün hava karlıydı ve trenler çok kalabalıktı.",
      "targetEn": "The weather was snowy and the trains were very crowded yesterday",
      "availableWords": [
        "The",
        "weather",
        "was",
        "snowy",
        "and",
        "the",
        "trains",
        "were",
        "very",
        "crowded",
        "yesterday",
        "did",
        "is"
      ],
      "explanation": "The weather (tekil: was) + the trains (çoğul: were) geçmiş zaman durum dizilimi."
    },
    "summaryTakeaways": [
      "I, He, She, It ile WAS kullanılır.",
      "You, We, They ile WERE kullanılır.",
      "Eylem içermeyen durum, sıfat ve mekan cümlelerinde kullanılır.",
      "Was/Were cümlelerinde kesinlikle DID yardımcı fiili KULLANILMAZ."
    ]
  },
  "89": {
    "skillType": "grammar",
    "concreteCompetency": "A2 standardında 'Was' ve 'Were' durum bildirimlerini olumsuzlaştırmak için 'wasn't' / 'weren't' yapılarını; soru oluşturmak için 'Was / Were' sözcüğünü cümlenin başına alabilmeyi; geçmiş durum sorularına 'Yes, I was. / No, I wasn't.' veya 'Yes, they were. / No, they weren't.' kısa cevaplarını hatasız vermeyi; Wh- soru kalıplarıyla (Where were you? Why was he angry?) durum sorgulayabilmeyi kavramak.",
    "whyItMatters": "Dün toplantıda neden olmadığınızı açıklamak, birinin dünkü ruh halini sormak veya otel odasının temiz olup olmadığını sorgulamak için Was/Were olumsuz ve soru yapıları temel iletişim aracıdır.",
    "linguisticLogic": "İngilizcede to be fiili (was/were) kendi kendisinin yardımcı fiilidir. Bu sebeple: 1) OLUMSUZ YAPILIRKEN: Cümleye harici bir 'didn't' çağrılmaz. Doğrudan was veya were'ün sonuna 'not' eklenir: was not -> wasn't (/ˈwɒz.ənt/), were not -> weren't (/wɜːnt/). Örnek: 'He wasn't at home' (*He didn't was at home KESİNLİKLE YANLIŞTIR). 2) SORU YAPILIRKEN: Was veya Were öznenin önüne geçer: 'Was he ready?' (Hazır mıydı?), 'Were they happy?' (Mutlular mıydı?). 3) KISA CEVAPLAR: 'Yes, I was. / No, I wasn't.' veya 'Yes, they were. / No, they weren't.'. 4) WH- SORULARI: Wh- kelimesi en başa gelir: 'Where were you yesterday at 5 PM?' (Dün saat 5'te neredeydin?).",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Olumsuz Formlar (Wasn't & Weren't)",
        "content": "Olumsuzluk 'wasn't' ve 'weren't' ile kurulur. I / He / She / It -> wasn't; You / We / They -> weren't. Kesinlikle araya 'didn't' sokulmaz.",
        "formula": "Özne + wasn't / weren't + [Sıfat / İsim / Yer]",
        "keyPhrase": "I wasn't ready for the presentation and they weren't in the hall.",
        "subPoints": [
          "*He didn't was -> KORKUNÇ BİR YANLIŞTIR!",
          "He wasn't -> DOĞRUDUR."
        ],
        "rationale": "Öğrencilerin olumsuzda didn't kullanma refleksini nötrler."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Soru Yapısı ve Kısa Cevaplar",
        "content": "Soru sorarken Was veya Were öznenin önüne fırlar: Was the flight on time? Were you surprised? Cevap verirken soru hangi fiille sorulduysa onunla kapatılır: Yes, it was. / No, it wasn't.",
        "formula": "WAS / WERE + ÖZNE ... ?  -->  Yes, [özne] was/were. / No, [özne] wasn't/weren't.",
        "keyPhrase": "Were you nervous during the interview? - Yes, I was. / No, I wasn't.",
        "subPoints": [
          "*Did you were nervous? -> KESİNLİKLE YANLIŞ!",
          "Kısa cevapta 'Yes, I did' DENMEZ; 'Yes, I was' denir!"
        ],
        "rationale": "Soru ve cevap uyumunu sağlar."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: Wh- Durum Soruları (Where were you?)",
        "content": "'Where, Why, Who, When, How' kelimeleri en başa gelir; arkasından Was/Were ve özne sıralanır: Where were you yesterday? (Dün neredeydin?), Why was she upset? (Neden üzgündü?), How was the concert? (Konser nasıldı?).",
        "formula": "WH- + WAS / WERE + ÖZNE ... ?",
        "keyPhrase": "Where were you last night when I called you?",
        "subPoints": [
          "Where were you? sorusundaki 'where' ve 'were' telaffuzuna dikkat: Where /weər/, were /wɜː/."
        ],
        "rationale": "Açık uçlu geçmiş durum sorgulamalarını öğretir."
      }
    ],
    "ruleCards": [
      {
        "title": "Olumsuzda Wasn't / Weren't",
        "rule": "I/He/She/It wasn't; You/We/They weren't. Asla didn't was/were denmez.",
        "example": "The hotel room wasn't clean.",
        "tip": "To be'nin olumsuzu kendi içindedir!"
      },
      {
        "ruleTitle": "Geçmişte Soru Sorma (Was / Were Başa Alınır)",
        "formula": "Was / Were + Özne + [Tamamlayıcı / Konum / Sıfat] ?",
        "explanation": "Geçmiş durum sorularında 'did' yardımcı fiili kesinlikle kullanılmaz. 'Was' veya 'Were' doğrudan öznenin önüne geçer: 'Was he at home?' (Evde miydi?), 'Were they happy?' (Mutlular mıydı?).",
        "exampleSnippet": "Were you at the international conference yesterday morning?",
        "tipNote": "Asla '*Did you were...?' veya '*Did you be...?' demeyin; Was/Were tek başına soru yapar!"
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "I *didn't was at work yesterday because I was ill.",
        "correctExample": "I wasn't at work yesterday because I was ill.",
        "rootCause": "Geçmiş zaman olumsuzluğunu otomatikman 'didn't' ile kurmaya çalışmak.",
        "memoryTip": "Did'e gerek yok! I was NOT -> I WASN'T!"
      },
      {
        "wrongExample": "Were you satisfied with the service? - *Yes, I did.",
        "correctExample": "Were you satisfied with the service? - Yes, I was.",
        "rootCause": "Were sorusuna did ile cevap verme kafa karışıklığı.",
        "memoryTip": "Soru Were ile soruldu, cevap WAS ile kapanır: Yes, I was!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Pazartesi Sabahı Ofiste Toplantıya Katılamayan Meslektaş Sorgusu",
      "description": "Ekip lideri dünkü acil toplantıda bulunmayan takım üyesine durumunu sorar.",
      "contextType": "work",
      "dialogue": [
        {
          "speaker": "Team Lead",
          "textEn": "Good morning Daniel. You weren't at the emergency client briefing yesterday afternoon. Where were you?",
          "textTr": "Günaydın Daniel. Dün öğleden sonra acil müşteri bilgilendirme toplantısında yoktun. Neredeydin?"
        },
        {
          "speaker": "Daniel",
          "textEn": "Good morning. I am so sorry. I wasn't in the office because I had a severe dental appointment.",
          "textTr": "Günaydın. Çok üzgünüm. Şiddetli bir diş randevum olduğu için ofiste değildim."
        },
        {
          "speaker": "Team Lead",
          "textEn": "Oh, I see. Was it painful?",
          "textTr": "Ah, anlıyorum. Çok mu ağrılıydı?"
        },
        {
          "speaker": "Daniel",
          "textEn": "Yes, it was quite painful, but the dentist was excellent.",
          "textTr": "Evet, oldukça ağrılıydı ama diş hekimi mükemmeldi."
        }
      ],
      "culturalNote": "İş hayatında devamsızlık veya toplantıyı kaçırma durumlarında 'I wasn't in the office because...' profesyonel mazeret sunma girişidir."
    },
    "contrastiveAnalysis": {
      "title": "İngilizce Wasn't/Weren't vs Türkçe Değildi",
      "englishConcept": "İngilizcede tekil için 'wasn't', çoğul için 'weren't' kullanılır.",
      "turkishDifference": "Türkçede durum olumsuzluğu 'değil' kelimesiyle yapılır (evde değildim, mutlu değillerdi). İngilizcede doğrudan was/were içine 'not' eklenir.",
      "directComparison": [
        {
          "context": "Olumsuz tekil",
          "en": "He wasn't happy",
          "trMeaning": "mutlu değildi",
          "commonErrorTr": "*He didn't was happy",
          "whyItMatters": "wasn't kullanılır."
        },
        {
          "context": "Soru",
          "en": "Were you there?",
          "trMeaning": "Orada mıydın?",
          "commonErrorTr": "*Did you there?",
          "whyItMatters": "Were başa gelir."
        }
      ]
    },
    "memoryHook": "WAS-WERE KURALI 2: Olumsuzda WASN'T / WEREN'T! Soruda WAS / WERE BAŞA! 'Did' kapıdan içeri adım atamaz!",
    "examples": [
      {
        "en": "The financial audit wasn't ready because the database was offline.",
        "tr": "Veritabanı çevrimdışı olduğu için mali denetim hazır değildi.",
        "highlightedWords": [
          "wasn't ready",
          "was offline"
        ],
        "grammarCategory": "Wasn't Olumsuz Durum Cümlesi",
        "contextNote": "Şirket denetimi.",
        "breakdownNote": "The financial audit tekil olduğu için wasn't almıştır."
      },
      {
        "en": "Were the delegates satisfied with the accommodation and conference facilities?",
        "tr": "Delegeler konaklama ve konferans imkanlarından memnun kaldılar mı?",
        "highlightedWords": [
          "Were the delegates satisfied"
        ],
        "grammarCategory": "Were Soru Cümlesi",
        "contextNote": "Uluslararası organizasyon geri bildirimi.",
        "breakdownNote": "The delegates çoğul olduğu için soru cümlenin başında 'Were' ile kurulmuştur."
      },
      {
        "en": "Why were you absent from the critical board meeting yesterday morning?",
        "tr": "Dün sabahki kritik yönetim kurulu toplantısında neden yoktunuz?",
        "highlightedWords": [
          "Why were you absent"
        ],
        "grammarCategory": "Wh- Soru Cümlesi (Why were you...)",
        "contextNote": "Üst düzey iş sorgulaması.",
        "breakdownNote": "Why'dan sonra were ve ardından you öznesi gelmiştir."
      }
    ],
    "vocabulary": [
      {
        "word": "Briefing",
        "phonetic": "/ˈbriː.fɪŋ/",
        "partOfSpeech": "noun",
        "meaningTr": "Bilgilendirme toplantısı",
        "exampleSentence": "The captain gave a security briefing."
      },
      {
        "word": "Severe",
        "phonetic": "/sɪˈvɪər/",
        "partOfSpeech": "adjective",
        "meaningTr": "Şiddetli, ciddi",
        "exampleSentence": "He suffered from severe pain."
      },
      {
        "word": "Delegate",
        "phonetic": "/ˈdel.ɪ.ɡət/",
        "partOfSpeech": "noun",
        "meaningTr": "Delege, temsilci",
        "exampleSentence": "International delegates met in Geneva."
      },
      {
        "word": "Absent",
        "phonetic": "/ˈæb.sənt/",
        "partOfSpeech": "adjective",
        "meaningTr": "Yok, devamsız, bulunmayan",
        "exampleSentence": "Three students were absent today."
      }
    ],
    "quickCheck": {
      "question": "Aşağıdaki diyalogdaki boşluğa hangi kısa cevap getirilmelidir?\n'Were the negotiations successful yesterday?' - 'No, ___.'",
      "options": [
        "they weren't",
        "they didn't",
        "it wasn't",
        "they not were"
      ],
      "correctIndex": 0,
      "explanation": "'The negotiations' çoğuldur (they) ve soru 'Were' ile sorulduğu için olumsuz kısa cevap 'No, they weren't' olmalıdır."
    },
    "exercise": {
      "prompt": "Cümledeki boşluğa uygun soru dizilimini yerleştirin:",
      "sentence": "___ in London when the historic monument was inaugurated?",
      "options": [
        "Were you",
        "Did you be",
        "Was you",
        "Did you were"
      ],
      "correctAnswer": "Were you",
      "hint": "You öznesiyle geçmiş durum sorusu nasıl kurulur?",
      "explanation": "You öznesi 'were' alır ve soru yaparken 'Were you...?' başa geçer."
    },
    "sentenceBuilder": {
      "promptTr": "Hava dün yağmurlu değildi ama rüzgar çok soğuktu.",
      "targetEn": "The weather wasn't rainy yesterday but the wind was very cold",
      "availableWords": [
        "The",
        "weather",
        "wasn't",
        "rainy",
        "yesterday",
        "but",
        "the",
        "wind",
        "was",
        "very",
        "cold",
        "didn't",
        "weren't"
      ],
      "explanation": "The weather (tekil: wasn't) + zaman (yesterday) + the wind (tekil: was cold) dizilimi."
    },
    "summaryTakeaways": [
      "Was/Were olumsuz halleri 'wasn't' ve 'weren't'tir.",
      "Soru yaparken Was/Were cümlenin en başına geçer.",
      "Kısa cevaplar: 'Yes, I was. / No, I wasn't.' veya 'Yes, we were. / No, we weren't.'dir.",
      "Kesinlikle *didn't was veya *did you were kullanılmaz."
    ]
  },
  "90": {
    "skillType": "speaking",
    "concreteCompetency": "A2 Modül 1 Entegrasyonu: A2 düzeyindeki geçmiş zaman ünitesi boyunca öğrenilen tüm elementleri (düzenli fiiller -ed, düzensiz fiiller went/saw/bought/had, olumsuz form didn't + V1, soru yapıları Did you...?, zaman belirteçleri last summer / two weeks ago, durum fiilleri was/were) unutulmaz bir tatil gününü anlatan zengin, tutarlı, akıcı ve hatasız bir kişisel anlatıda birleştirebilmek.",
    "whyItMatters": "Geçmiş zamanı parça parça bilmek yetmez; bir yabancıya 'Geçen yaz ne yaptın?' sorusuna takılmadan 1-2 dakikalık baştan sona tutarlı bir hikaye anlatabilmek A2 seviyesinin taç giyme törenidir.",
    "linguisticLogic": "Başarılı bir geçmiş zaman tatil anlatısı 4 temel sütun üzerinde inşa edilir: 1) SAHNE VE ZAMAN KURULUMU (Setting the Scene): Zaman zarfı ve to be durumuyla başlar (Last summer, I went to Antalya. The weather was extremely hot and sunny). 2) DÜZENLİ VE DÜZENSİZ EYLEM AKIŞI (Chronological Actions): Sabahtan akşama eylemler V2 olarak sıralanır (In the morning we visited the historical castle, walked through the old harbor, and bought souvenirs. At noon we had lunch and swam in the turquoise sea). 3) ZITLIK VE OLUMSUZLUK (Contrast & Negation): didn't ve wasn't ile ayrıntı verilir (We didn't stay in an expensive hotel; we rented a cozy apartment. It wasn't crowded). 4) KİŞİSEL DEĞERLENDİRME (Final Reflection): Genel duygu özetlenir (It was an unforgettable trip and I loved every minute).",
    "stepBreakdown": [
      {
        "stepNumber": 1,
        "title": "1. Adım: Hikayeyi Başlatma ve Sahne Tasviri (Setting the Scene)",
        "content": "Anlatınıza kesin bir geçmiş zaman zarfıyla (last summer, two months ago) başlayın ve mekana nasıl gittiğinizi, oradaki havayı was/were ile tasvir edin.",
        "formula": "[Zaman Zarfı] + I went to [Yer] + The weather was [Sıfat]",
        "keyPhrase": "Last August, my family and I traveled to a picturesque coastal village.",
        "subPoints": [
          "went, traveled, arrived gibi giriş fiilleri kullanın.",
          "Hava durumunu 'The weather was sunny / windy' ile çizin."
        ],
        "rationale": "Dinleyiciye hikayenin zaman ve mekan koordinatlarını hissettirir."
      },
      {
        "stepNumber": 2,
        "title": "2. Adım: Günün Eylemlerini Çeşitli Fiillerle Sıralama",
        "content": "Sadece tek bir fiil tekrarı yapmayın. Hem düzenli (-ed) hem de düzensiz fiilleri peş peşe dizin: visited (ziyaret ettik), walked (yürüdük), swam (yüzdük), ate (yedik), saw (gördük), took photos (fotoğraf çektik).",
        "formula": "Özne + V2 (düzenli & düzensiz karışımı) + Zaman Bağlaçları",
        "keyPhrase": "In the morning we explored the ancient ruins, and in the evening we ate fresh seafood.",
        "subPoints": [
          "Düzenli: visited, explored, relaxed, walked.",
          "Düzensiz: swam, ate, bought, took, saw, met."
        ],
        "rationale": "Kelime ve gramer zenginliğini gösterir."
      },
      {
        "stepNumber": 3,
        "title": "3. Adım: Olumsuzluklar, Zıtlıklar ve Kapanış",
        "content": "Mükemmel hikaye sadece 'yaptık' demekten ibaret değildir; neleri yapmadığınızı (didn't) ve mekanın nasıl olmadığını (wasn't) da ekleyin: 'We didn't rent a car, we walked everywhere. The beach wasn't noisy'. Kapanışı 'It was the best vacation of my life' ile taçlandırın.",
        "formula": "didn't + V1  +  wasn't/weren't  +  Kapanış Duygusu",
        "keyPhrase": "We didn't want to leave because the local people were so hospitable.",
        "subPoints": [
          "Didn't sonrası fiili V1 yapmayı asla unutmayın!",
          "Son cümlede genel duygu değerlendirmesi yapın."
        ],
        "rationale": "Anlatıyı tekdüzelikten kurtarıp çok boyutlu ve gerçekçi kılar."
      }
    ],
    "ruleCards": [
      {
        "title": "Bütün Geçmiş Zaman Kurallarının Senfonisi",
        "rule": "Olumlu eylemde V2 (went, visited), olumsuzda didn't + V1 (didn't spend), durumda was/were (was lovely).",
        "example": "We went there, didn't pay much, and it was great.",
        "tip": "Cümle türüne göre doğru geçmiş zaman formunu seçtiğinizden emin olun!"
      },
      {
        "title": "Zaman Sıralayıcıları (Sequencers)",
        "rule": "In the morning, after lunch, later in the evening, on the last day.",
        "example": "First we unpacked our bags, then we walked to the beach.",
        "tip": "Zaman belirteçleri hikayenize profesyonel bir akış katar."
      }
    ],
    "commonMistakes": [
      {
        "wrongExample": "Last summer we *go to Bodrum and *we was very happy.",
        "correctExample": "Last summer we went to Bodrum and we were very happy.",
        "rootCause": "Geçmiş zaman zarfı (last summer) kullanmasına rağmen şimdiki zaman fiili (go) ve yanlış to be çekimi (we was) kullanmak.",
        "memoryTip": "Geçmiş anı anlatırken fiil 2. hal ister: WENT! We ile WERE!"
      },
      {
        "wrongExample": "We *didn't stayed in a hotel because it *was expensive.",
        "correctExample": "We didn't stay in a hotel because it was expensive.",
        "rootCause": "Didn't sonrasında -ed takısını unutmak.",
        "memoryTip": "Didn't varsa STAY yalın kalır!"
      }
    ],
    "realWorldContext": {
      "scenarioTitle": "Uluslararası Dil Okulunda 'Unutulmaz Tatilim' Sunumu",
      "description": "Öğrenci sınıfta arkadaşlarına geçen yaz yaptığı Ege tatilini anlatır.",
      "contextType": "social",
      "dialogue": [
        {
          "speaker": "Teacher",
          "textEn": "Can, tell the class about your summer vacation. Where did you go?",
          "textTr": "Can, sınıfa yaz tatilini anlat. Nereye gittin?"
        },
        {
          "speaker": "Can",
          "textEn": "Last July, my best friend and I traveled to Fethiye. The weather was wonderfully hot and clear.",
          "textTr": "Geçen Temmuz ayında en iyi arkadaşımla Fethiye'ye seyahat ettik. Hava harika derecede sıcak ve açıktı."
        },
        {
          "speaker": "Teacher",
          "textEn": "What activities did you do there?",
          "textTr": "Orada hangi aktiviteleri yaptınız?"
        },
        {
          "speaker": "Can",
          "textEn": "In the morning, we swam in the Blue Lagoon and paraglided from Babadağ mountain. In the evening, we ate delicious grilled fish. We didn't spend much money because we stayed in a tent.",
          "textTr": "Sabah Ölüdeniz'de yüzdük ve Babadağ'dan yamaç paraşütü yaptık. Akşam lezzetli ızgara balık yedik. Çadırda kaldığımız için çok para harcamadık."
        },
        {
          "speaker": "Teacher",
          "textEn": "Was it scary to jump from the mountain?",
          "textTr": "Dağdan atlamak korkutucu muydu?"
        },
        {
          "speaker": "Can",
          "textEn": "At first I was terrified, but the view was breathtaking. It was truly the most memorable week of my year!",
          "textTr": "İlk başta dehşete kapıldım ama manzara nefes kesiciydi. Gerçekten yılımın en unutulmaz haftasıydı!"
        }
      ],
      "culturalNote": "İngilizce sosyal ortamlarda tatil anısı anlatırken hem heyecan verici eylemleri (paraglided, swam) hem de duyguları (terrified, memorable) paylaşmak dinleyiciyi hikayeye bağlar."
    },
    "contrastiveAnalysis": {
      "title": "İngilizce Tatil Anlatımı vs Türkçe Anlatı",
      "englishConcept": "İngilizcede her cümle özne ile başlar ve eylemler düzenli/düzensiz fiil dönüşümünü takip eder.",
      "turkishDifference": "Türkçede özne gizli kalabilir (Gittik, yüzdük, eğlendik). İngilizcede her cümlenin öznesi (We went, we swam, we had fun) açıkça söylenmelidir.",
      "directComparison": [
        {
          "context": "Özne zorunluluğu",
          "en": "We swam in the sea",
          "trMeaning": "Denizde yüzdük",
          "commonErrorTr": "*Swam in the sea",
          "whyItMatters": "Özne 'We' mutlaka söylenmelidir."
        },
        {
          "context": "Zaman uyumu",
          "en": "The sea was warm",
          "trMeaning": "Deniz ılıktı",
          "commonErrorTr": "*The sea were warm",
          "whyItMatters": "The sea tekildir, was alır."
        }
      ]
    },
    "memoryHook": "4 AŞAMALI TATİL ŞABLONU: 1) Zaman & Mekan (went/was), 2) Eylemler (visited/swam/ate), 3) Zıtlıklar (didn't/wasn't), 4) Kapanış (It was unforgettable)!",
    "examples": [
      {
        "en": "Last summer we rented a traditional cottage near the lake and stayed there for two weeks.",
        "tr": "Geçen yaz göl kenarında geleneksel bir kır evi kiraladık ve iki hafta orada kaldık.",
        "highlightedWords": [
          "rented",
          "stayed"
        ],
        "grammarCategory": "Düzenli Geçmiş Zaman Fiilleri (rented, stayed)",
        "contextNote": "Tatil konaklaması.",
        "breakdownNote": "Rent -> rented ve stay -> stayed düzenli fiillerdir."
      },
      {
        "en": "We saw majestic dolphins in the ocean, took dozens of photos, and bought handmade gifts.",
        "tr": "Okyanusta görkemli yunuslar gördük, düzinelerce fotoğraf çektik ve el yapımı hediyeler aldık.",
        "highlightedWords": [
          "saw",
          "took",
          "bought"
        ],
        "grammarCategory": "Düzensiz Geçmiş Zaman Fiilleri (saw, took, bought)",
        "contextNote": "Tatil deneyimleri.",
        "breakdownNote": "See -> saw, take -> took, buy -> bought ardışık düzensiz fiillerdir."
      },
      {
        "en": "We didn't use our smartphones during dinner because the atmosphere was magical.",
        "tr": "Atmosfer büyüleyici olduğu için akşam yemeği boyunca akıllı telefonlarımızı kullanmadık.",
        "highlightedWords": [
          "didn't use",
          "was magical"
        ],
        "grammarCategory": "Olumsuzluk ve Durum Entegrasyonu (didn't + V1 & was)",
        "contextNote": "Farkındalık ve akşam yemeği ortamı.",
        "breakdownNote": "Didn't use (didn't + V1) ve was magical (to be geçmiş hali) birleşimidir."
      }
    ],
    "vocabulary": [
      {
        "word": "Picturesque",
        "phonetic": "/ˌpɪk.tʃərˈesk/",
        "partOfSpeech": "adjective",
        "meaningTr": "Resim gibi, kartpostal gibi güzel",
        "exampleSentence": "We stayed in a picturesque mountain town."
      },
      {
        "word": "Breathtaking",
        "phonetic": "/ˈbreθˌteɪ.kɪŋ/",
        "partOfSpeech": "adjective",
        "meaningTr": "Nefes kesici, büyüleyici",
        "exampleSentence": "The coastal view was breathtaking."
      },
      {
        "word": "Memorable",
        "phonetic": "/ˈmem.ər.ə.bəl/",
        "partOfSpeech": "adjective",
        "meaningTr": "Unutulmaz, hatırda kalıcı",
        "exampleSentence": "It was a truly memorable experience."
      },
      {
        "word": "Hospitable",
        "phonetic": "/hɒsˈpɪt.ə.bəl/",
        "partOfSpeech": "adjective",
        "meaningTr": "Misafirperver",
        "exampleSentence": "The local villagers were very hospitable."
      }
    ],
    "quickCheck": {
      "question": "Aşağıdaki tatil anlatımı paragrafında hangi fiil formu YANLIŞTIR?\n'Last summer we went to Greece. We *swimmed in the crystal sea, ate delicious salads, and didn't spend much money.'",
      "options": [
        "swimmed",
        "went",
        "ate",
        "didn't spend"
      ],
      "correctIndex": 0,
      "explanation": "'Swim' düzensiz bir fiildir; geçmiş zaman hali '-ed' almaz, 'swam' olmalıdır (*swimmed yanlıştır)."
    },
    "exercise": {
      "prompt": "Cümledeki boşlukları doğru geçmiş zaman formlarıyla tamamlayın:",
      "sentence": "Last year, they ___ to Paris, ___ the Eiffel Tower, but they ___ the Louvre museum.",
      "options": [
        "traveled / visited / didn't visit",
        "travel / visited / didn't visited",
        "traveled / visit / not visited",
        "traveled / visited / didn't visited"
      ],
      "correctAnswer": "traveled / visited / didn't visit",
      "hint": "Düzenli olumlu fiiller -ed alır, didn't sonrasındaki fiil yalın kalır.",
      "explanation": "Traveled (V2) / visited (V2) / didn't visit (didn't + V1) doğru geçmiş zaman dizilimidir."
    },
    "sentenceBuilder": {
      "promptTr": "Geçen yaz harika bir tatil geçirdik ve Akdeniz'de her gün yüzdük.",
      "targetEn": "We had a wonderful vacation last summer and we swam in the Mediterranean Sea every day",
      "availableWords": [
        "We",
        "had",
        "a",
        "wonderful",
        "vacation",
        "last",
        "summer",
        "and",
        "we",
        "swam",
        "in",
        "the",
        "Mediterranean",
        "Sea",
        "every",
        "day",
        "have",
        "swimmed"
      ],
      "explanation": "We had (düzensiz) + last summer + we swam (düzensiz) tatil anlatımı cümle yapısı."
    },
    "summaryTakeaways": [
      "Tatil anlatımına zaman belirteci ve mekan girişiyle başlanır (Last summer I went...).",
      "Düzenli (-ed) ve düzensiz (V2) fiiller ardışık olarak kullanılır.",
      "Didn't + V1 ve wasn't/weren't ile olumsuzluklar ve durumlar zenginleştirilir.",
      "Anlatı kişisel bir genel duygu cümlesiyle (It was unforgettable) tamamlanır."
    ]
  }
};
