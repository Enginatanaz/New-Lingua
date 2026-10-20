#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Builder for Module 6 (Lessons 51 to 60)
Level: A1: Yetenekler ve İzin: Can & Can't
100% bespoke pedagogy, zero generic templates, zero slop.
"""

import json
import os

def generate_module6():
    module6_data = {}

    # 51: Yetenek Bildirme: Can ile Olumlu Cümleler
    module6_data[51] = {
        "skillType": "grammar",
        "concreteCompetency": "A1 standardında fiziksel veya zihinsel becerileri ifade etmek için 'Can' modal yardımcı fiilini tüm şahıslarla (I, you, he, she, it, we, they) hiçbir şahıs eki (-s) eklemeden ve ardına yalın fiil (bare infinitive) getirerek hatasız kullanabilmek.",
        "whyItMatters": "Neleri yapabildiğinizi, hangi dilleri konuştuğunuzu veya mesleki hünerlerinizi anlatmak 'Can' yapısıyla mümkündür.",
        "linguisticLogic": "İngilizcede 'CAN' bir kip belirteci (modal verb) olup iki altın kurala tabidir: 1) TÜM ŞAHISLARDA AYNI KALIR: Geniş zamandaki gibi He/She/It için -s takısı ALMAZ (*He cans KESİNLİKLE YANLIŞTIR!). 2) YALIN FİİLLE BİRLEŞİR: Kendisinden sonra gelen fiilin önüne 'to' almaz (*I can to swim YANLIŞTIR, 'I can swim' DOĞRUDUR). Konuşma dilinde 'can' zayıf sesletimle (/kən/) hızlıca telaffuz edilir.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: Özne Bağımsızlığı Kuralı (No -s)",
                "content": "'Can' fiili özneye göre asla şekil değiştirmez. I can, you can, he can, she can, we can, they can. He/She/It öznelerinde fiile -s takısı ekleme alışkanlığınızı 'can' karşısında kesinlikle durdurmalısınız.",
                "formula": "ÖZNE (Tümü) + CAN + YALIN FİİL (V1)",
                "keyPhrase": "I can drive a car. | She can speak three languages.",
                "subPoints": [
                    "*He cans swim -> KESİNLİKLE YANLIŞ!",
                    "He can swim -> DOĞRU!"
                ],
                "rationale": "Öğrencilerin 3. tekil şahıs -s refleksini modal fiillerde nötrlemeyi sağlar."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: 'TO' Mastar Ekinin Yasaklanması (Bare Infinitive)",
                "content": "'Can' ardından gelen fiil sözlükteki en saf, ek almamış haliyle gelir. Fiilin başına asla 'to' getirilmez: 'I can swim' (Yüzebilirim), 'They can play chess' (Satranç oynayabilirler).",
                "formula": "CAN + V1 (to yok, -ing yok, -ed yok)",
                "keyPhrase": "We can help you. | You can use my computer.",
                "subPoints": [
                    "*I can to go -> YANLIŞTIR!",
                    "Can doğrudan eyleme bağlanır: Can + run / read / cook."
                ],
                "rationale": "İki fiil arasına 'to' koyma yanılgısını önler."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Akıcı Konuşmada Zayıf Telaffuz (Weak Form)",
                "content": "Olumlu cümlelerde 'can' kelimesindeki 'a' harfi uzatılmaz; zayıf ı/e (şva /ə/) sesiyle '/kən/' şeklinde hızlıca geçilir. Asıl vurgu arkasından gelen ana eylem fiiline (swim, drive, speak) verilir.",
                "formula": "I /kən/ SWIM  |  She /kən/ DRIVE",
                "keyPhrase": "I can cook dinner tonight. (/aɪ kən kʊk/)",
                "subPoints": [
                    "Güçlü okunuş (/kæn/) sadece tek başına söylendiğinde veya vurgu gerektiğinde kullanılır.",
                    "Bu fonetik ayrım ileride 'can't' ile karışmasını engeller."
                ],
                "rationale": "Doğal İngilizce konuşma ritmini ve dinleme algısını ilk günden kazandırır."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Modal Eşitliği İlkesi",
                "formula": "He / She / It + CAN (Asla cans değil!)",
                "explanation": "Modal fiiller (can, could, must, should) İngilizcede çekim eki almaz. Tekil üçüncü şahısta bile 'can' aynı kalır.",
                "exampleSnippet": "Sarah can design amazing websites.",
                "cautionNote": "*Sarah cans design... korkunç bir hatadır."
            },
            {
                "ruleTitle": "Yalın Fiil (Bare Infinitive) Kuralı",
                "formula": "CAN + Verb 1  (*can to Verb değil!)",
                "explanation": "Can'den sonra fiilin mastar hali 'to' olmadan doğrudan eklenir.",
                "tipNote": "Can gördüğün yerde 'to' harfini çöpe at!"
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "She cans play the violin very well.",
                "correctExample": "She can play the violin very well.",
                "rootCause": "'She' öznesini görüp geniş zamandaki gibi -s takısı ekleme alışkanlığı.",
                "memoryTip": "CAN kraldır; kimseden -s takısı almaz: She CAN play!"
            },
            {
                "wrongExample": "I can to speak German.",
                "correctExample": "I can speak German.",
                "rootCause": "Mastar ekini (to) 'can' fiilinden sonra gereksiz yere kullanmak.",
                "memoryTip": "Can ile fiil arasına hiçbir şey giremez: I CAN SPEAK!"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Uluslararası Yaz Kampında Ekip Görev Dağılımı",
            "description": "Kamp lideri gönüllülerin yeteneklerine göre görev dağıtır.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Leader", "textEn": "Welcome team! We need someone who can prepare dinner for twenty people.", "textTr": "Ekip hoş geldiniz! Yirmi kişiye akşam yemeği hazırlayabilen birine ihtiyacımız var."},
                {"speaker": "Marco", "textEn": "I can cook Italian dishes easily. My family has a restaurant.", "textTr": "Ben İtalyan yemeklerini kolayca pişirebilirim. Ailemin bir restoranı var."},
                {"speaker": "Leader", "textEn": "Excellent! And who can drive the camp minibus?", "textTr": "Mükemmel! Peki kamp minibüsünü kim kullanabilir?"},
                {"speaker": "Elena", "textEn": "I can drive well; I have an international driving license.", "textTr": "Ben iyi araç kullanabilirim; uluslararası ehliyetim var."}
            ],
            "culturalNote": "Gönüllü projelerde yeteneklerinizi net ve mütevazı bir şekilde 'I can...' kalıbıyla ifade etmeniz beklenir."
        },
        "contrastiveAnalysis": {
            "title": "-ebilmek / -abilmek vs CAN",
            "englishConcept": "CAN + Yalın Fiil",
            "turkishDifference": "Türkçede yetenek anlamı fiil köküne eklenen bir ekten (-ebil / -abil) ibarettir (yüz-ebil-ir-im). İngilizcede ise özne ile fiil arasına bağımsız 'can' sözcüğü gelir.",
            "directComparison": [
                {
                    "context": "Yetenek bildirimi",
                    "en": "I can swim.",
                    "trMeaning": "Yüzebilirim.",
                    "commonErrorTr": "*I can to swim.",
                    "whyItMatters": "İngilizcede fiil yalın kalır."
                }
            ]
        },
        "memoryHook": "CAN FORMÜLÜ: Can her şahısta aynı kalır (-s almaz), arkasındaki fiil çırılçıplak yalın gelir (to almaz)!",
        "examples": [
            {
                "en": "David can fix computer hardware problems very quickly.",
                "tr": "David bilgisayar donanım sorunlarını çok çabuk çözebilir.",
                "highlightedWords": ["can fix", "hardware"],
                "grammarCategory": "can + teknik beceri",
                "contextNote": "Teknik uzmanlık yeteneği.",
                "breakdownNote": "Özne (David) + can + yalın fiil (fix) + nesne."
            },
            {
                "en": "My little sister can read children books in two languages.",
                "tr": "Küçük kız kardeşim iki dilde çocuk kitapları okuyabilir.",
                "highlightedWords": ["can read"],
                "grammarCategory": "can + okuma becerisi",
                "contextNote": "Dil yeteneği.",
                "breakdownNote": "Özne + can + yalın fiil (read) + nesne."
            },
            {
                "en": "We can meet you at the airport on Sunday morning.",
                "tr": "Pazar sabahı sizi havalimanında karşılayabiliriz.",
                "highlightedWords": ["We can meet you"],
                "grammarCategory": "can + imkan/olanak",
                "contextNote": "Zaman ve mekan imkanı.",
                "breakdownNote": "Özne (We) + can + meet (fiil) + nesne + zaman."
            }
        ],
        "vocabulary": [
            {"word": "Skill", "phonetic": "/skɪl/", "partOfSpeech": "noun", "meaningTr": "Beceri, yetenek", "exampleSentence": "Programming is a valuable skill."},
            {"word": "Hardware", "phonetic": "/ˈhɑːd.weər/", "partOfSpeech": "noun", "meaningTr": "Donanım", "exampleSentence": "He knows computer hardware."},
            {"word": "Quickly", "phonetic": "/ˈkwɪk.li/", "partOfSpeech": "adverb", "meaningTr": "Çabucak, hızlıca", "exampleSentence": "She learns languages quickly."},
            {"word": "Cook", "phonetic": "/kʊk/", "partOfSpeech": "verb", "meaningTr": "Yemek pişirmek", "exampleSentence": "Can you cook traditional soup?"}
        ],
        "quickCheck": {
            "question": "'O (erkek) çok iyi gitar çalabilir' cümlesinin en doğru İngilizce ifadesi hangisidir?",
            "options": [
                "He can play the guitar very well.",
                "He cans play the guitar very well.",
                "He can to play the guitar very well.",
                "He can plays the guitar very well."
            ],
            "correctIndex": 0,
            "explanation": "'He' öznesiyle 'can' değişmez, fiil 'play' hiçbir ek (to, -s) almadan yalın kalır."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun biçimi seçin:",
            "sentence": "Our international sales representative ___ fluently in four languages.",
            "options": ["can negotiate", "cans negotiate", "can to negotiate", "can negotiates"],
            "correctAnswer": "can negotiate",
            "hint": "'Can' modal fiilinden sonra fiil hangi biçimde gelir?",
            "explanation": "'Can' tekil öznelerde de -s almaz ve ardına 'to'suz yalın fiil alır: 'can negotiate'."
        },
        "sentenceBuilder": {
            "promptTr": "Ben akıcı bir şekilde İngilizce ve İspanyolca konuşabilirim.",
            "targetEn": "I can speak English and Spanish fluently",
            "availableWords": ["I", "can", "speak", "English", "and", "Spanish", "fluently", "to", "cans", "speaks", "am"],
            "explanation": "Özne (I) + modal (can) + yalın fiil (speak) + diller (English and Spanish) + zarf (fluently)."
        },
        "summaryTakeaways": [
            "'Can' yetenek ve olanak bildiren temel modal yardımcı fiildir.",
            "Tüm şahıslarda (I, you, he, she, we, they) aynı kalır; asla -s takısı almaz.",
            "Kendisinden sonraki fiil doğrudan YALIN halde gelir ('to' kullanılmaz).",
            "Olumlu cümlelerde 'can' /kən/ şeklinde zayıf ve akıcı sesletilir."
        ]
    }

    # 52: Yetersizlik Bildirme: Can't ile Olumsuz Cümleler
    module6_data[52] = {
        "skillType": "grammar",
        "concreteCompetency": "A1 standardında yetersizlik ve yapamama durumlarını ifade etmek için 'Cannot / Can't' yapısını ('I can't swim', 'He can't come') doğru telaffuzla (İngiliz /kɑːnt/, Amerikan /kænt/) ve yalın fiille hatasız kullanabilmek.",
        "whyItMatters": "Sınırlarımızı, bilmediğimiz konuları veya o an neden gelemeyeceğimizi açık ve kibar bir dille anlatmak iletişim kazalarını önler.",
        "linguisticLogic": "İngilizcede yetersizlik bildirmek için 'CANNOT' (resmi/vurgulu) veya günlük konuşmada yaygın olan kısaltılmış hali 'CAN'T' kullanılır. 'Cannot' yazılırken iki kelime BİTİŞİK yazılır (*can not ayrı yazılmaz). 'Can't' ardından da fiil YALIN kalır. En önemli fark telaffuzdadır: Olumlu 'can' hızlı ve zayıfken (/kən/), olumsuz 'can't' vurguludur (İngilizcede uzun 'a' ile /kɑːnt/, Amerikan İngilizcesinde açık 'e/a' ile /kænt/).",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: 'Can't' Kısaltması ve Bitişik Yazım Kuralı",
                "content": "'Can not' kelimeleri birleşirken tek sözcük olarak 'cannot' şeklinde yazılır. Ancak günlük konuşma ve yazışmada neredeyse daima 'can't' kısaltması tercih edilir. Formül: Özne + can't + Yalın Fiil.",
                "formula": "Özne + CAN'T / CANNOT + Yalın Fiil (V1)",
                "keyPhrase": "I can't hear you. | She can't drive a manual car.",
                "subPoints": [
                    "Asla *don't can veya *doesn't can denmez!",
                    "'Cannot' resmi belgelerde tek kelime olarak yazılır."
                ],
                "rationale": "Olumsuz modal yapısının yazım ve dizilim mantığını öğretir."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: Fonetik Telaffuz Farkı (Can vs Can't)",
                "content": "İngilizce konuşanlar olumlu ve olumsuz arasındaki farkı genellikle 't' sesinden değil, ünlü sesin tonundan anlar. Olumlu: 'I can go' (/aɪ kən ɡəʊ/ - zayıf). Olumsuz İngiliz: 'I can't go' (/aɪ kɑːnt ɡəʊ/ - kalın, uzun 'aa'). Olumsuz Amerikan: 'I can't go' (/aɪ kænt ɡəʊ/ - vurgulu sert 'æ').",
                "formula": "Olumlu: /kən/ (hızlı, silik)  <-->  Olumsuz: /kɑːnt/ (vurgulu, net)",
                "keyPhrase": "I can't see the screen. | We can't find our tickets.",
                "subPoints": [
                    "Telefon görüşmelerinde 'can't' net anlaşılması için üzerine basılarak söylenir.",
                    "Sonundaki 't' sesi bazen düşse bile ünlünün tonu olumsuzluğu belli eder."
                ],
                "rationale": "Dinleme testlerinde en sık elenen can/can't ayrımını çözer."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Kibar Yetersizlik Açıklamaları (I'm afraid...)",
                "content": "Doğrudan 'I can't' demek bazen sert duyulabilir. İngiliz kültüründe bunu yumuşatmak için cümlenin başına 'I'm sorry, but I can't...' (Üzgünüm ama yapamam...) veya 'I'm afraid I can't...' kalıpları eklenir.",
                "formula": "I'm sorry / I'm afraid + [Özne] + can't + [Fiil]",
                "keyPhrase": "I'm afraid I can't join the meeting today.",
                "subPoints": [
                    "'I'm afraid' burada korkmak değil, 'Korkarım ki / Maalesef' anlamına gelen kibar bir yumuşatıcıdır.",
                    "İş İngilizcesinde doğrudan ret yerine bu kalıp kullanılır."
                ],
                "rationale": "Kültürel nezaket ve pragmatik dil kullanımını kazandırır."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Olumsuzda Fiil Yalınlığı Kuralı",
                "formula": "Özne + CAN'T + V1 (*can't speaks YANLIŞ)",
                "explanation": "He/She öznelerinde bile 'can't' sonrasındaki fiil asla -s takısı almaz.",
                "exampleSnippet": "He can't speak Russian. (He can't speaks değil)",
                "cautionNote": "Fiili her zaman en yalın sözlük haliyle bırakın."
            },
            {
                "ruleTitle": "'Cannot' Bitişik Yazım Kuralı",
                "formula": "CANNOT (Tek Kelime)  |  *CAN NOT (Genellikle Yanlış)",
                "explanation": "İngilizcede 'cannot' istisnai olarak bitişik yazılan tek modal olumsuzluk yapısıdır.",
                "tipNote": "Ayrı yazmak yerine 'can't' veya bitişik 'cannot' yazın."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "I don't can swim.",
                "correctExample": "I can't swim. / I cannot swim.",
                "rootCause": "Geniş zamanın 'don't' yardımcı fiilini 'can' ile birleştirmeye çalışmak.",
                "memoryTip": "Can modal fiildir; yanına don't almaz, kendi 'not' ekini taşır: CAN'T!"
            },
            {
                "wrongExample": "She can't to come with us tonight.",
                "correctExample": "She can't come with us tonight.",
                "rootCause": "Olumsuz cümlede araya gereksiz 'to' sokmak.",
                "memoryTip": "Can't ardından da 'to' yasaktır: She can't come!"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Hafta Sonu Davetine Kibarca Yanıt Verme",
            "description": "Arkadaşı sinemaya davet eden birine yoğunluk nedeniyle katılamayacağını açıklama.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Tom", "textEn": "Hi Sarah, can you come to the cinema with us this evening?", "textTr": "Selam Sarah, bu akşam bizimle sinemaya gelebilir misin?"},
                {"speaker": "Sarah", "textEn": "I'm really sorry Tom, but I can't come tonight. I have a report to finish.", "textTr": "Gerçekten çok üzgünüm Tom ama bu akşam gelemem. Bitirmem gereken bir rapor var."},
                {"speaker": "Tom", "textEn": "No problem at all! Can you join us for coffee on Sunday afternoon?", "textTr": "Hiç sorun değil! Pazar öğleden sonra kahveye katılabilir misin?"},
                {"speaker": "Sarah", "textEn": "Yes, I can definitely make it on Sunday!", "textTr": "Evet, Pazar günü kesinlikle gelebilirim!"}
            ],
            "culturalNote": "Davetleri geri çevirirken 'I can't'ın ardından kısa bir gerekçe sunmak kibarlık göstergesidir."
        },
        "contrastiveAnalysis": {
            "title": "-ememek / -amamak vs CAN'T",
            "englishConcept": "CAN'T + Yalın Fiil",
            "turkishDifference": "Türkçede olumsuz yetenek fiil köküne '-eme / -ama' eklenerek yapılır (gel-e-me-m, yüz-e-me-z). İngilizcede özne ne olursa olsun 'can't + fiil' sıralaması değişmez.",
            "directComparison": [
                {
                    "context": "Yetersizlik",
                    "en": "She can't drive.",
                    "trMeaning": "Araba kullanamaz.",
                    "commonErrorTr": "*She doesn't can drive.",
                    "whyItMatters": "İngilizcede don't/doesn't devre dışıdır."
                }
            ]
        },
        "memoryHook": "CAN'T KURALI: 'Don't' getirme, 'to' ekleme, ünlüyü vurgula: I CAN'T DO IT!",
        "examples": [
            {
                "en": "I can't access my company email account from home.",
                "tr": "Evden şirket e-posta hesabıma erişemiyorum.",
                "highlightedWords": ["can't access"],
                "grammarCategory": "can't + teknik yetersizlik",
                "contextNote": "Erişim engeli.",
                "breakdownNote": "Özne + can't + access (yalın fiil) + nesne + yer."
            },
            {
                "en": "He can't eat seafood because he has a strong allergy.",
                "tr": "Ağır bir alerjisi olduğu için deniz ürünleri yiyemez.",
                "highlightedWords": ["can't eat"],
                "grammarCategory": "can't + sağlık kısıtı",
                "contextNote": "Alerji kısıtlaması.",
                "breakdownNote": "Özne + can't + eat + nesne + because (sebep)."
            },
            {
                "en": "We can't find our hotel on this paper map.",
                "tr": "Bu kağıt haritada otelimizi bulamıyoruz.",
                "highlightedWords": ["We can't find"],
                "grammarCategory": "can't + durum yetersizliği",
                "contextNote": "Arama-bulma zorluğu.",
                "breakdownNote": "Özne (We) + can't + find (fiil) + nesne."
            }
        ],
        "vocabulary": [
            {"word": "Access", "phonetic": "/ˈæk.ses/", "partOfSpeech": "verb", "meaningTr": "Erişmek, ulaşmak", "exampleSentence": "I can't access the file."},
            {"word": "Afraid", "phonetic": "/əˈfreɪd/", "partOfSpeech": "adjective", "meaningTr": "Korkan (I'm afraid: Korkarım ki)", "exampleSentence": "I'm afraid I can't attend."},
            {"word": "Allergy", "phonetic": "/ˈæl.ə.dʒi/", "partOfSpeech": "noun", "meaningTr": "Alerji", "exampleSentence": "She has a nut allergy."},
            {"word": "Manual", "phonetic": "/ˈmæn.ju.əl/", "partOfSpeech": "adjective", "meaningTr": "Düz vitesli, manuel", "exampleSentence": "Can you drive a manual car?"}
        ],
        "quickCheck": {
            "question": "'O (kadın) yarınki toplantıya katılamaz çünkü hasta' cümlesinin doğru İngilizcesi hangisidir?",
            "options": [
                "She can't attend tomorrow's meeting because she is ill.",
                "She doesn't can attend tomorrow's meeting because she is ill.",
                "She can't to attend tomorrow's meeting because she is ill.",
                "She cannot attends tomorrow's meeting because she is ill."
            ],
            "correctIndex": 0,
            "explanation": "Doğru kalıp 'can't + yalın fiil' (can't attend) biçimidir."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun ifadeyi yerleştirin:",
            "sentence": "Speak louder please; we ___ hear the speaker from the back row.",
            "options": ["can't", "don't can", "not can", "aren't can"],
            "correctAnswer": "can't",
            "hint": "'Arka sıradan konuşmacıyı duyamıyoruz' yetersizlik ifadesi modal fiille nasıl söylenir?",
            "explanation": "Yetersizlik bildirmek için 'can't' kullanılır: 'we can't hear'."
        },
        "sentenceBuilder": {
            "promptTr": "Korkarım ki bu akşam sizinle akşam yemeğine katılamam.",
            "targetEn": "I am afraid I cannot join you for dinner tonight",
            "availableWords": ["I", "am", "afraid", "I", "cannot", "join", "you", "for", "dinner", "tonight", "to", "don't", "can't"],
            "explanation": "Kibar yumuşatıcı (I am afraid) + özne (I) + modal (cannot) + yalın fiil (join) + nesne (you) + amaç (for dinner tonight)."
        },
        "summaryTakeaways": [
            "Yetersizlik ve yapamama durumlarında 'can't' veya 'cannot' kullanılır.",
            "'Cannot' kelimesi tek parça halinde bitişik yazılır.",
            "'Can't' ardından gelen eylem fiili de kesinlikle YALIN kalır (-s ve to almaz).",
            "Kibar ret cümlelerinde söze 'I'm sorry, but I can't...' ile başlamak doğaldır."
        ]
    }

    print("Lessons 51-52 added to Module 6.")

    # Write out module6_lessons_51_60.ts
    out_dir = "src/services/pedagogy/modules"
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "module6_lessons_51_60.ts")

    # Let's add remaining lessons 53-60 directly in the generator
    # 53: Yetenek Sorma: Can you...? ve Kısa Cevaplar
    module6_data[53] = {
        "skillType": "speaking",
        "concreteCompetency": "A1 standardında yetenek ve beceri sorgulamak için 'Can you...?' soru kalıbını hatasız kurabilmek; soruya 'Yes, I can' ve 'No, I can't' kısa cevaplarıyla karşılık verebilmek.",
        "whyItMatters": "Bir mülakatta, ekip çalışmasında veya yabancı bir ülkede birinin dil bilip bilmediğini ya da yardımcı olup olamayacağını öğrenmenin en temel yolu 'Can you...?' sorusudur.",
        "linguisticLogic": "İngilizcede modal sorularında 'CAN' yardımcı fiili cümlenin en başına, öznenin önüne geçer: 'Can you swim?' (Yüzebilir misin?), 'Can she drive?' (Araba kullanabilir mi?). 'Do' veya 'Does' yardımcı fiilleri ASLA kullanılmaz (*Do you can swim KESİNLİKLE YANLIŞTIR). Kısa yanıtlarda ise kural: Soru hangi yardımcı fiille sorulduysa onunla kapatılır: 'Yes, I can' / 'No, I can't'. Asla *Yes, I can swim şeklinde ana fiil kısa cevapta tekrar edilmez.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: Soru Diziliminde CAN'in Başa Geçmesi (Inversion)",
                "content": "Düz cümledeki 'You can swim' ifadesi, 'Can' kelimesinin başa alınmasıyla soruya dönüşür: 'Can you swim?'. Fiil yine en yalın haliyle kalır.",
                "formula": "CAN + [Özne] + [Yalın Fiil V1]...?",
                "keyPhrase": "Can you speak English? | Can he ride a horse?",
                "subPoints": [
                    "Tekil öznelerde de 'Can' başa gelir: 'Can she cook?' (*Does she can cook YANLIŞTIR).",
                    "Soru işareti ve yükselen tonlama ile tamamlanır."
                ],
                "rationale": "Modal soru devrikliğini (inversion) refleks haline getirir."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: Standart Kısa Cevap Refleksi (Short Answers)",
                "content": "İngilizcede 'Can' sorularına yalnızca 'Yes' veya 'No' demek kaba algılanabilir; tam cümleyi tekrar etmek ise yapay durur. Standart yanıt: Olumlu için 'Yes, [zamir] can', olumsuz için 'No, [zamir] can't'tır.",
                "formula": "Yes, [I/you/he/she/we/they] CAN.  |  No, [I/you/he/she/we/they] CAN'T.",
                "keyPhrase": "Yes, I can. | No, she can't.",
                "subPoints": [
                    "Kısa cevapta 'can' asla kısaltılamaz: *Yes, I'm can denmez.",
                    "Olumlu kısa cevapta 'can' güçlü vurguyla /kæn/ sesletilir."
                ],
                "rationale": "Kültürel nezaket ve doğal diyalog hızını sağlar."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Soru Sözcükleriyle Genişletme (WH- + CAN)",
                "content": "Soruya 'What', 'Where', 'When' veya 'How' eklemek istediğinizde, soru sözcüğü en başa gelir, 'can' ise ikinci sırada kalır: 'What can you do?' (Ne yapabilirsin?), 'Where can we park?' (Nereye park edebiliriz?).",
                "formula": "WH- Kelimesi + CAN + [Özne] + [Yalın Fiil]?",
                "keyPhrase": "What sports can you play? | How can I help you?",
                "subPoints": [
                    "'How can I help you?' mağazalarda ve müşteri hizmetlerinde evrensel selamlama sorusudur.",
                    "Bu sorularda artık 'Yes/No' denmez; doğrudan bilgi verilir."
                ],
                "rationale": "Açık uçlu modal sorularıyla bilgi edinmeyi mümkün kılar."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Do/Does Yasağı Kuralı",
                "formula": "CAN + Özne + Fiil?  |  *DO you can swim? (KESİNLİKLE YANLIŞ)",
                "explanation": "Can zaten güçlü bir yardımcı fiildir. Yanına 'do' veya 'does' alamaz.",
                "exampleSnippet": "Can your brother ski? (Does your brother can ski değil)",
                "cautionNote": "Can varken do/does kapı dışarı edilir."
            },
            {
                "ruleTitle": "Kısa Cevap Bütünlüğü",
                "formula": "Yes, I can. (DOĞRU)  |  *Yes, I can speak. (Yapay tekrar)",
                "explanation": "Kısa cevapta esas fiil tekrarlanmaz; yardımcı fiilde durulur.",
                "tipNote": "Noktayı 'can' veya 'can't'tan hemen sonra koyun."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "Do you can drive?",
                "correctExample": "Can you drive?",
                "rootCause": "Geniş zaman alışkanlığıyla soruya 'Do' ile başlama yanılgısı.",
                "memoryTip": "Yetenek sorarken cümlenin ilk kelimesi CAN olmalıdır: CAN YOU DRIVE?"
            },
            {
                "wrongExample": "Can she sings?",
                "correctExample": "Can she sing?",
                "rootCause": "Soru cümlesinde 'she' öznesine bakarak fiile -s takısı eklemek.",
                "memoryTip": "Can varsa fiil çırılçıplak yalındır: Can she SING?"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Yabancı Bir Ülkede İletişim Kurma",
            "description": "Turist bir kafede garsona İngilizce bilip bilmediğini sorar.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Tourist", "textEn": "Excuse me, can you speak English?", "textTr": "Affedersiniz, İngilizce konuşabiliyor musunuz?"},
                {"speaker": "Waiter", "textEn": "Yes, I can a little bit. How can I help you today?", "textTr": "Evet, birazcık konuşabiliyorum. Bugün size nasıl yardımcı olabilirim?"},
                {"speaker": "Tourist", "textEn": "Can we sit by the window?", "textTr": "Pencere kenarına oturabilir miyiz?"},
                {"speaker": "Waiter", "textEn": "Of course you can! That table is completely free.", "textTr": "Elbette oturabilirsiniz! Şu masa tamamen boş."}
            ],
            "culturalNote": "Yabancı bir ülkede doğrudan kendi dilinizde konuşmak yerine önce 'Can you speak English?' diye sormak büyük saygı göstergesidir."
        },
        "contrastiveAnalysis": {
            "title": "-ebilir misin? vs CAN YOU...?",
            "englishConcept": "Can + Özne + Yalın Fiil?",
            "turkishDifference": "Türkçede soru eki 'mi/mısın' fiilin en sonuna eklenir (yüz-ebil-ir mi-sin?). İngilizcede ise 'Can' en başa zıplar.",
            "directComparison": [
                {
                    "context": "Yetenek sorma",
                    "en": "Can you swim?",
                    "trMeaning": "Yüzebilir misin?",
                    "commonErrorTr": "*Do you can swim?",
                    "whyItMatters": "Soru 'Can' ile açılır."
                }
            ]
        },
        "memoryHook": "CAN SORUSU: 'Can' başa geçer, özne arkasına gelir, fiil en yalın haliyle kalır!",
        "examples": [
            {
                "en": "Can your father speak any foreign languages?",
                "tr": "Baban hiç yabancı dil konuşabiliyor mu?",
                "highlightedWords": ["Can your father speak"],
                "grammarCategory": "Can + 3. tekil soru",
                "contextNote": "Akrabanın yeteneğini sorma.",
                "breakdownNote": "Can + your father (özne) + speak (fiil) + nesne."
            },
            {
                "en": "Can they deliver this furniture to our new apartment?",
                "tr": "Bu mobilyayı yeni dairemize teslim edebilirler mi?",
                "highlightedWords": ["Can they deliver"],
                "grammarCategory": "Can + çoğul olanak sorusu",
                "contextNote": "Teslimat imkanı sorgusu.",
                "breakdownNote": "Can + they + deliver (fiil) + nesne + yer."
            },
            {
                "en": "What musical instruments can you play well?",
                "tr": "Hangi müzik aletlerini iyi çalabiliyorsun?",
                "highlightedWords": ["What musical instruments can you play"],
                "grammarCategory": "WH- + can + soru",
                "contextNote": "Açık uçlu yetenek sorusu.",
                "breakdownNote": "Soru öbeği + can + you + play + zarf."
            }
        ],
        "vocabulary": [
            {"word": "Deliver", "phonetic": "/dɪˈlɪv.ər/", "partOfSpeech": "verb", "meaningTr": "Teslim etmek", "exampleSentence": "Can you deliver by Friday?"},
            {"word": "Foreign", "phonetic": "/ˈfɒr.ən/", "partOfSpeech": "adjective", "meaningTr": "Yabancı", "exampleSentence": "She speaks two foreign languages."},
            {"word": "Instrument", "phonetic": "/ˈɪn.strə.mənt/", "partOfSpeech": "noun", "meaningTr": "Enstrüman, müzik aleti", "exampleSentence": "Can you play an instrument?"},
            {"word": "Of course", "phonetic": "/əv kɔːs/", "partOfSpeech": "phrase", "meaningTr": "Elbette, tabii ki", "exampleSentence": "Of course you can come."}
        ],
        "quickCheck": {
            "question": "'Can you ride a motorbike?' sorusuna olumlu kısa cevap vermek için hangisi DOĞRUDUR?",
            "options": [
                "Yes, I can.",
                "Yes, I do.",
                "Yes, I can ride.",
                "Yes, I am."
            ],
            "correctIndex": 0,
            "explanation": "'Can' ile sorulan soruya olumlu yanıt 'Yes, [zamir] can' kalıbıdır."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun soruyu yerleştirin:",
            "sentence": "___ your sister play the violin as well as you do?",
            "options": ["Can", "Does", "Is", "Do"],
            "correctAnswer": "Can",
            "hint": "Cümle keman çalma yeteneğini sormaktadır ve 'play' fiili yalındır.",
            "explanation": "Yetenek sormada tekil ve çoğul tüm şahıslarla 'Can' kullanılır."
        },
        "sentenceBuilder": {
            "promptTr": "Siz bu karmaşık teknik raporu anlayabiliyor musunuz?",
            "targetEn": "Can you understand this complex technical report",
            "availableWords": ["Can", "you", "understand", "this", "complex", "technical", "report", "do", "are", "understands"],
            "explanation": "Soru modalı (Can) + özne (you) + yalın fiil (understand) + nesne grubu (this complex technical report)."
        },
        "summaryTakeaways": [
            "Yetenek sormak için 'Can' cümlenin en başına geçer.",
            "Soruda 'do' veya 'does' ASLA kullanılmaz.",
            "Kısa cevaplar 'Yes, I can' ve 'No, I can't' şeklindedir.",
            "WH- soru kelimeleri (What, Where, How) 'can'in önüne eklenir."
        ]
    }

    # 54: İzin İsteme: Can I...? ve May I...? Nezaket Kalıpları
    module6_data[54] = {
        "skillType": "speaking",
        "concreteCompetency": "A1 standardında günlük ortamlarda izin istemek için 'Can I...?' ve daha resmi/kibar ortamlarda 'May I...?' kalıplarını ('Can I use your pen?', 'May I come in?') doğru durumlarda hatasız kullanabilmek.",
        "whyItMatters": "Başkalarının eşyasını kullanırken, bir odaya girerken veya resmi bir makamda işlem yaparken izin istemek görgü kurallarının ve pürüzsüz iletişimin anahtarıdır.",
        "linguisticLogic": "İngilizcede izin istemek için iki kardeş modal kullanılır: 1) CAN I...?: Samimi ve gündelik ortamlarda (arkadaşlar, aile, sokaktaki esnaf): 'Can I open the window?' (Pencereyi açabilir miyim?). 2) MAY I...?: Resmi, akademik, iş ve yüksek nezaket gerektiren ortamlarda: 'May I see your passport, please?' (Pasaportunuzu görebilir miyim lütfen?). Her iki yapıda da soru 'I' veya 'we' öznesiyle sorulur ve arkasından YALIN FİİL gelir. Hepsinden önemlisi: 'May' ASLA fiziksel yetenek için kullanılamaz (*I may swim denmez!).",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: Günlük İzin Kalıbı: 'Can I...?'",
                "content": "Arkadaş ortamında, restoranda veya günlük yaşamda bir şey yapmak için izin isterken 'Can I + Yalın Fiil?' kullanılır: 'Can I borrow your pen?' (Kalemini ödünç alabilir miyim?), 'Can I sit here?' (Buraya oturabilir miyim?).",
                "formula": "Can I + [Yalın Fiil V1]...?",
                "keyPhrase": "Can I have a glass of water? | Can I take a photo here?",
                "subPoints": [
                    "Çoğul izin için: 'Can we sit here?' (Buraya oturabilir miyiz?).",
                    "Cevap: 'Sure, go ahead!' (Tabii, buyrun!) veya 'Of course!'"
                ],
                "rationale": "Gündelik sosyal izin reflekslerini inşa eder."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: Resmi ve Saygılı İzin Kalıbı: 'May I...?'",
                "content": "Resmi dairelerde, mülakatlarda, üst düzey yöneticilerle veya tanımadığınız kişilere hitap ederken 'May I...?' tercih edilir. Bu kalıp en yüksek nezaket derecesini temsil eder: 'May I come in?' (Girebilir miyim?), 'May I ask a question?' (Bir soru sorabilir miyim?).",
                "formula": "May I + [Yalın Fiil V1] + please?",
                "keyPhrase": "May I have your name, please? | May I leave early today?",
                "subPoints": [
                    "'May' kalıbı cümlenin sonuna 'please' alarak nezaketini taçlandırır.",
                    "Yazılı resmi e-postalarda izin istenirken daima 'May I' kullanılır."
                ],
                "rationale": "Resmi ortamlarda doğru protokol ve saygı tonunu kazandırır."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: İzne Olumlu ve Olumsuz Yanıt Verme Kalıpları",
                "content": "Biri sizden izin istediğinde nasıl yanıt vereceğinizi bilin. Olumlu: 'Yes, of course!', 'Certainly!', 'Sure, no problem!'. Olumsuz (kibarca engelleme): 'I'm sorry, but this seat is taken' (Üzgünüm ama bu koltuk dolu) veya 'I'm afraid not' (Korkarım ki hayır).",
                "formula": "Olumlu: Certainly! / Go ahead!  <-->  Olumsuz: I'm sorry, but...",
                "keyPhrase": "Certainly, you may. | I'm sorry, you can't smoke here.",
                "subPoints": [
                    "Kaba bir şekilde tek başına 'No' demek yerine gerekçe sunmak esastır.",
                    "'Go ahead' (Buyrun, çekinmeyin) çok yaygın ve sıcak bir izin verme sözüdür."
                ],
                "rationale": "İzin alışverişini iki taraflı diyalog akışına dönüştürür."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Can I vs May I Ortam Ayrımı",
                "formula": "Can I = Samimi / Günlük  <-->  May I = Resmi / Yüksek Nezaket",
                "explanation": "İkisi de izin ister ancak 'May I' daha resmidir. Bir iş mülakatında odaya girerken 'May I come in?' demek profesyonel bir intiba yaratır.",
                "exampleSnippet": "May I see your ticket, sir? / Can I borrow your charger?",
                "tipNote": "Resmi yerlerde 'May I', arkadaş ortamında 'Can I' kullanın."
            },
            {
                "ruleTitle": "'May' Kelimesinin Yetenekte Kullanılamayacağı İlkesi",
                "formula": "*I may swim (YETENEK İÇİN YANLIŞ) -> I can swim (DOĞRU)",
                "explanation": "'May' yalnızca izin ve olasılık anlatır. Fiziksel veya zihinsel beceri için 'May' ASLA kullanılamaz.",
                "cautionNote": "Yetenek için sadece 'Can' geçerlidir."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "May you open the door please?",
                "correctExample": "Can you open the door please? / Could you open the door please?",
                "rootCause": "'May' modalını karşı tarafa rica etmek için 'you' öznesiyle kullanmak.",
                "memoryTip": "İzin kendin için istenir: May I? Başkasına rica için CAN YOU veya COULD YOU kullanılır!"
            },
            {
                "wrongExample": "Can I to use your bathroom?",
                "correctExample": "Can I use your bathroom?",
                "rootCause": "'Can I' ardından gelen fiilin önüne 'to' eklemek.",
                "memoryTip": "Modal fiillerden sonra 'to' gelmez: Can I USE!"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Vize Başvuru Merkezinde Resmi Görüşme",
            "description": "Başvuru sahibi konsolosluk görevlisinin ofisine girer ve evrakları teslim eder.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Applicant", "textEn": "Good morning. May I come in, please?", "textTr": "Günaydın. İçeri girebilir miyim lütfen?"},
                {"speaker": "Officer", "textEn": "Good morning, yes please. Take a seat. May I see your passport and application form?", "textTr": "Günaydın, evet lütfen. Buyrun oturun. Pasaportunuzu ve başvuru formunuzu görebilir miyim?"},
                {"speaker": "Applicant", "textEn": "Certainly! Here they are. Can I also give you my hotel reservation?", "textTr": "Elbette! İşte buradalar. Otel rezervasyonumu da verebilir miyim?"},
                {"speaker": "Officer", "textEn": "Yes, please. That is very helpful.", "textTr": "Evet lütfen. Bu çok yararlı olur."}
            ],
            "culturalNote": "Resmi kurumlarda 'May I' kullanmak görevliyle iletişimi son derece olumlu başlatır."
        },
        "contrastiveAnalysis": {
            "title": "İzin İsteme vs Can I / May I",
            "englishConcept": "Can I / May I + Yalın Fiil",
            "turkishDifference": "Türkçede 'Girebilir miyim?' tek kalıptır; resmiyet ses tonuyla veya 'acaba' ile verilir. İngilizcede ise kelimenin kendisi (Can vs May) resmiyet derecesini belirler.",
            "directComparison": [
                {
                    "context": "Resmi izin",
                    "en": "May I speak to the manager?",
                    "trMeaning": "Müdürle görüşebilir miyim?",
                    "commonErrorTr": "Sorunsuz eşleşir.",
                    "whyItMatters": "Yüksek saygı tonu."
                },
                {
                    "context": "Günlük izin",
                    "en": "Can I take this chair?",
                    "trMeaning": "Bu sandalyeyi alabilir miyim?",
                    "commonErrorTr": "Sorunsuz eşleşir.",
                    "whyItMatters": "Günlük pratik izin."
                }
            ]
        },
        "memoryHook": "İZİN KURALI: Arkadaşına 'Can I...', müdüre 'May I...', ikisine de YALIN FİİL!",
        "examples": [
            {
                "en": "May I ask you a personal question, professor?",
                "tr": "Size kişisel bir soru sorabilir miyim profesör?",
                "highlightedWords": ["May I ask you"],
                "grammarCategory": "May I + resmi izin",
                "contextNote": "Akademik nezaket.",
                "breakdownNote": "May I + ask (yalın fiil) + nesne grubu."
            },
            {
                "en": "Can I borrow your phone charger for ten minutes?",
                "tr": "Telefon şarj aletini on dakikalığına ödünç alabilir miyim?",
                "highlightedWords": ["Can I borrow"],
                "grammarCategory": "Can I + günlük izin",
                "contextNote": "Arkadaş ortamı izni.",
                "breakdownNote": "Can I + borrow (fiil) + nesne + süre."
            },
            {
                "en": "May we have the check, please?",
                "tr": "Hesabı alabilir miyiz lütfen?",
                "highlightedWords": ["May we have", "the check"],
                "grammarCategory": "May we + restoranda hesap",
                "contextNote": "Kibar restoran kapanışı.",
                "breakdownNote": "May we + have + the check + please."
            }
        ],
        "vocabulary": [
            {"word": "Borrow", "phonetic": "/ˈbɒr.əʊ/", "partOfSpeech": "verb", "meaningTr": "Ödünç almak", "exampleSentence": "Can I borrow your umbrella?"},
            {"word": "Certainly", "phonetic": "/ˈsɜː.tən.li/", "partOfSpeech": "adverb", "meaningTr": "Kesinlikle, elbette", "exampleSentence": "Certainly, you may sit here."},
            {"word": "Charger", "phonetic": "/ˈtʃɑː.dʒər/", "partOfSpeech": "noun", "meaningTr": "Şarj aleti", "exampleSentence": "Where is my phone charger?"},
            {"word": "Go ahead", "phonetic": "/ɡəʊ əˈhed/", "partOfSpeech": "phrase", "meaningTr": "Buyrun, çekinmeyin, devam edin", "exampleSentence": "Go ahead, take the last cookie."}
        ],
        "quickCheck": {
            "question": "Bir iş toplantısında söze başlamadan önce saygılı bir şekilde izin istemek için en uygun kalıp hangisidir?",
            "options": [
                "May I make a suggestion, please?",
                "May you make a suggestion?",
                "Can I to make a suggestion?",
                "Do I can make a suggestion?"
            ],
            "correctIndex": 0,
            "explanation": "Resmi ortamlarda kendiniz için izin isterken 'May I + yalın fiil' kalıbı kullanılır."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun modal fiili seçin:",
            "sentence": "Excuse me sir, ___ I see your boarding pass before you enter the gate?",
            "options": ["May", "Do", "Are", "Would"],
            "correctAnswer": "May",
            "hint": "Havalimanı kapısında görevlinin yolcudan saygıyla biniş kartını isteme cümlesidir.",
            "explanation": "Resmi ve kibar yetki/izin taleplerinde 'May I see...' kalıbı kullanılır."
        },
        "sentenceBuilder": {
            "promptTr": "Affedersiniz, bu masadaki boş sandalyeyi alabilir miyim?",
            "targetEn": "Excuse me can I take this empty chair at your table",
            "availableWords": ["Excuse", "me", "can", "I", "take", "this", "empty", "chair", "at", "your", "table", "to", "may", "do"],
            "explanation": "Nezaket açılışı (Excuse me) + izin kalıbı (can I take) + nesne (this empty chair) + konum (at your table)."
        },
        "summaryTakeaways": [
            "İzin istemek için 'Can I...?' ve 'May I...?' kullanılır.",
            "'May I...?' resmi, kurumsal ve yüksek saygı gerektiren durumların kalıbıdır.",
            "'May' asla başkasına rica için 'May you' şeklinde kullanılmaz.",
            "Olumlu izin verirken 'Certainly', 'Sure' veya 'Go ahead' denir."
        ]
    }

    # 55: Rica Etme: Can you help me? / Could you please...?
    module6_data[55] = {
        "skillType": "speaking",
        "concreteCompetency": "A1 standardında başkasından ricada bulunmak için 'Can you...?' ve daha kibar/yumuşak olan 'Could you please...?' kalıplarını ('Could you open the door, please?') doğru tonlama ve yapıyla hatasız kullanabilmek.",
        "whyItMatters": "Yabancı bir ortamda yardım istemek, bir şeyin tekrar edilmesini talep etmek veya bir ricada bulunmak sosyal ilişkilerin en hassas ve vazgeçilmez noktasıdır.",
        "linguisticLogic": "İngilizcede birinden bir şey yapmasını rica ederken özne DAİMA 'YOU'dur. İki kademe nezaket vardır: 1) CAN YOU...?: Samimi ve gündelik rica: 'Can you help me?' (Bana yardım edebilir misin?). 2) COULD YOU...?: Daha kibar, mesafeli ve nazik rica: 'Could you please speak more slowly?' (Lütfen biraz daha yavaş konuşabilir misiniz?). 'Could' burada geçmiş zaman DEĞİLDİR; 'can'in nezaket halidir. Cümlenin sonuna veya fiilden önceye 'please' eklenir.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: 'Can You' ile Günlük Rica",
                "content": "Arkadaşınızdan veya meslektaşınızdan bir şey rica ederken 'Can you + Yalın Fiil' kalıbı kullanılır: 'Can you pass the salt?' (Tuzu uzatabilir misin?), 'Can you send me the file?' (Dosyayı bana gönderebilir misin?).",
                "formula": "Can you + [Yalın Fiil V1] + [Nesne] + (please)?",
                "keyPhrase": "Can you help me with this box? | Can you call me back later?",
                "subPoints": [
                    "Kişisel samimiyetin olduğu her yerde standarttır.",
                    "'Please' eklenirse nezaket dozu artar."
                ],
                "rationale": "Günlük pratik işbirliği refleksini oluşturur."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: 'Could You' ile Yüksek Nezaketli Rica",
                "content": "Tanımadığınız kişilere, müşterilere veya resmi ortamlarda 'Could you please...?' kullanılır. 'Could' sesi cümleyi yumuşatır ve emir kipi hissini tamamen yok eder: 'Could you explain that again, please?' (Bunu tekrar açıklayabilir misiniz lütfen?).",
                "formula": "Could you + (please) + [Yalın Fiil V1] + (please)?",
                "keyPhrase": "Could you please spell your surname? | Could you repeat that?",
                "subPoints": [
                    "'Could' geçmiş zaman değildir; şu anki rica için kullanılır.",
                    "'Please' sözcüğü 'could you'dan hemen sonra veya cümlenin en sonunda gelebilir."
                ],
                "rationale": "Öğrenciyi kaba duyulmaktan koruyan en kritik nezaket kalkanıdır."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Ricaya Karşılık Verme Protokolü",
                "content": "Birisi sizden ricada bulunduğunda verilecek doğal yanıtlar: Olumlu: 'Of course!', 'Sure, I'd be happy to help!' (Memnuniyetle!), 'No problem at all!'. Olumsuz (imkansızlık): 'I'm really sorry, but I'm in a hurry right now.' (Gerçekten çok üzgünüm ama şu an çok acelem var).",
                "formula": "Kabul: With pleasure! / Of course!  <-->  Red: I'm sorry, I'm tied up.",
                "keyPhrase": "Sure, no problem! | I'd be glad to help.",
                "subPoints": [
                    "İngilizcede sadece 'Yes' demek yerine 'Sure' veya 'Of course' demek çok daha sıcaktır.",
                    "Rica yerine getirildiğinde 'Thank you' -> 'You're welcome' zinciri tamamlanır."
                ],
                "rationale": "Sosyal rica-teşekkür döngüsünü eksiksiz tamamlar."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Could = Nezaket Kipi (Şimdiki Zaman)",
                "formula": "Could you please + V1?",
                "explanation": "'Could' geçmiş zaman bildirebildiği gibi, ricalarda şimdiki zamanın en kibar biçimidir. 'Can you'dan daha saygılıdır.",
                "exampleSnippet": "Could you please hold the door? (Kapıyı tutabilir misiniz lütfen?)",
                "tipNote": "Yabancılara rica ederken daima 'Could you' tercih edin."
            },
            {
                "ruleTitle": "Emir Kipi ile Rica Arasındaki Uçurum",
                "formula": "Help me! (Emir / Kaba) <--> Could you help me? (Rica / Kibar)",
                "explanation": "Türkçe 'Bana yardım et' ile 'Yardım edebilir misiniz?' arasındaki fark gibidir. Doğrudan fiille başlamak yabancılara kaba gelebilir.",
                "cautionNote": "Yabancılarla konuşurken doğrudan emir kipi yerine 'Could you' kullanın."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "Could you to help me with this suitcase?",
                "correctExample": "Could you help me with this suitcase?",
                "rootCause": "'Could you' ardından fiilin önüne gereksiz 'to' eklemek.",
                "memoryTip": "Could da bir modaldir; arkasına 'to' asla almaz: Could you HELP!"
            },
            {
                "wrongExample": "Could you please speaking slower?",
                "correctExample": "Could you please speak slower?",
                "rootCause": "Ricada fiile -ing takısı takmak.",
                "memoryTip": "Rica ederken fiil en yalın haliyle kalır: Could you SPEAK!"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Uluslararası Bir Otelde Resepsiyondan Yardım İsteme",
            "description": "Otel misafiri internet bağlantısı çalışmadığı için resepsiyondan yardım rica eder.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Guest", "textEn": "Hello, good evening. Could you please help me with the Wi-Fi connection?", "textTr": "Merhaba, iyi akşamlar. Wi-Fi bağlantısı konusunda bana yardım edebilir misiniz lütfen?"},
                {"speaker": "Receptionist", "textEn": "Of course, sir! What seems to be the problem?", "textTr": "Elbette efendim! Sorun nedir acaba?"},
                {"speaker": "Guest", "textEn": "My password does not work. Could you give me the new access code?", "textTr": "Şifrem çalışmıyor. Bana yeni erişim kodunu verebilir misiniz?"},
                {"speaker": "Receptionist", "textEn": "Certainly! Here is the updated code on this card.", "textTr": "Kesinlikle! Bu kartın üzerinde güncellenmiş kod yer alıyor."}
            ],
            "culturalNote": "Hizmet sektöründe talepte bulunurken 'Could you please...' kullanmak çalışanların size çok daha hevesle yardımcı olmasını sağlar."
        },
        "contrastiveAnalysis": {
            "title": "Rica Kalıpları vs Could you please",
            "englishConcept": "Could you + please + Yalın Fiil?",
            "turkishDifference": "Türkçede rica fiile eklenen geniş zaman ve soru ekiyle yapılır (açar mısınız? / yardım eder misiniz?). İngilizcede cümlenin başına 'Could you please' konur.",
            "directComparison": [
                {
                    "context": "Kibar rica",
                    "en": "Could you open the window?",
                    "trMeaning": "Pencereyi açabilir misiniz?",
                    "commonErrorTr": "*Open the window, yes?",
                    "whyItMatters": "'Could you' standart rica kalıbıdır."
                }
            ]
        },
        "memoryHook": "RİCA FORMÜLÜ: Tanıdığına 'Can you...', yabancıya 'Could you please...', fiil daima yalın!",
        "examples": [
            {
                "en": "Could you please repeat that last sentence for me?",
                "tr": "O son cümleyi benim için tekrar edebilir misiniz lütfen?",
                "highlightedWords": ["Could you please repeat"],
                "grammarCategory": "Could you + dinleme ricası",
                "contextNote": "Sınıfta veya toplantıda anlama ricası.",
                "breakdownNote": "Could you + please + repeat (yalın fiil) + nesne."
            },
            {
                "en": "Can you hold this heavy bag for a second?",
                "tr": "Bu ağır çantayı bir saniyeliğine tutabilir misin?",
                "highlightedWords": ["Can you hold"],
                "grammarCategory": "Can you + fiziksel rica",
                "contextNote": "Günlük yardım ricası.",
                "breakdownNote": "Can you + hold (fiil) + nesne + zaman."
            },
            {
                "en": "Could you show me the way to the city library?",
                "tr": "Şehir kütüphanesine giden yolu bana gösterebilir misiniz?",
                "highlightedWords": ["Could you show me"],
                "grammarCategory": "Could you + yol tarifi ricası",
                "contextNote": "Sokakta adres sorma.",
                "breakdownNote": "Could you + show (fiil) + me + nesne + yönelme."
            }
        ],
        "vocabulary": [
            {"word": "Repeat", "phonetic": "/rɪˈpiːt/", "partOfSpeech": "verb", "meaningTr": "Tekrar etmek", "exampleSentence": "Could you repeat that, please?"},
            {"word": "Suitcase", "phonetic": "/ˈsuːt.keɪs/", "partOfSpeech": "noun", "meaningTr": "Bavul, valiz", "exampleSentence": "This suitcase is very heavy."},
            {"word": "Explain", "phonetic": "/ɪkˈspleɪn/", "partOfSpeech": "verb", "meaningTr": "Açıklamak, izah etmek", "exampleSentence": "Could you explain the rule?"},
            {"word": "Slowly", "phonetic": "/ˈsləʊ.li/", "partOfSpeech": "adverb", "meaningTr": "Yavaşça", "exampleSentence": "Please speak more slowly."}
        ],
        "quickCheck": {
            "question": "Hızlı konuşan yabancı bir öğretmene 'Lütfen biraz daha yavaş konuşabilir misiniz?' ricasında bulunmak için en kibar kalıp hangisidir?",
            "options": [
                "Could you please speak a little more slowly?",
                "Speak slowly please you!",
                "Can you to speak slow?",
                "Do you speak slowly for me?"
            ],
            "correctIndex": 0,
            "explanation": "En kibar ve doğru rica kalıbı 'Could you please speak a little more slowly?' biçimidir."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun rica yapısını yerleştirin:",
            "sentence": "___ check my flight reservation in your computer system, please?",
            "options": ["Could you", "Do you", "Are you", "May you"],
            "correctAnswer": "Could you",
            "hint": "Başkasına bir eylemi rica ederken 'you' öznesiyle hangi saygılı modal kullanılır?",
            "explanation": "Karşı taraftan rica ederken 'Could you + yalın fiil' kalıbı kullanılır ('May you' rica için kullanılmaz)."
        },
        "sentenceBuilder": {
            "promptTr": "Bana metro biletini nasıl alacağımı gösterebilir misiniz lütfen?",
            "targetEn": "Could you please show me how to buy a metro ticket",
            "availableWords": ["Could", "you", "please", "show", "me", "how", "to", "buy", "a", "metro", "ticket", "can", "to", "showing"],
            "explanation": "Kibar rica (Could you please show me) + dolaylı soru yapısı (how to buy a metro ticket)."
        },
        "summaryTakeaways": [
            "Başkalarından bir şey yapmasını isterken özne daima 'YOU'dur.",
            "'Can you' günlük, 'Could you please' ise daha kibar ve saygılıdır.",
            "'Could' ricalarda geçmiş zaman değil, şimdiki zamanın yumuşatılmış nezaket halidir.",
            "Ricalara olumlu karşılık verirken 'Of course', 'Sure' veya 'Certainly' denir."
        ]
    }

    # Import lessons 56 to 60
    import sys
    sys.path.append('.')
    from scripts.builders.module6_part2 import module6_part2_data
    module6_data.update(module6_part2_data)

    print(f"Total lessons in Module 6: {len(module6_data)}")

    # Write out module6_lessons_51_60.ts
    out_dir = "src/services/pedagogy/modules"
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "module6_lessons_51_60.ts")

    content = """// LinguAAI Pedagogical Content — Level A1: Module 6 (Lessons 51–60)
// Yetenekler ve İzin: Can & Can't
// 100% bespoke, CEFR A1 compliant, zero generic templates.

import { TopicBlueprint } from '../pedagogicalEngine';

export const module6_lessons_51_60: Record<number, TopicBlueprint> = """ + json.dumps(module6_data, ensure_ascii=False, indent=2) + ";\n"

    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Module 6 written successfully to {out_file} with {len(module6_data)} lessons.")

if __name__ == "__main__":
    generate_module6()
