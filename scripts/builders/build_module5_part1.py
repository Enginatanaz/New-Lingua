#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Builder for Module 5: Soru Sorma Becerileri ve Bilgi Edinme (Lessons 41 to 50)
Level: A1
100% bespoke pedagogy, zero generic templates, natural English and accurate Turkish.
"""

import json

module5_data = {
    41: {
        "skillType": "grammar",
        "concreteCompetency": "A1 standardında 'What' soru kelimesini nesneleri, durumları ve eylemleri sormak için ('What is this?', 'What do you do?') ve isimlerle sıfat tamlaması olarak ('What color...?', 'What time...?') hatasız kullanabilmek.",
        "whyItMatters": "Bir dilin en temel öğrenme aracı soru sormaktır. Bilmediğiniz bir eşyanın adını, karşınızdakinin mesleğini veya saati öğrenmek için ilk başvuracağınız kelime 'What'tır.",
        "linguisticLogic": "İngilizcede 'What' iki şekilde kullanılır: 1) Zamir olarak tek başına: 'What is your name?' veya 'What do you study?'. 2) Sıfat olarak bir ismin önünde: 'What music do you like?'. İngilizce soru diziliminde soru kelimesi daima en başa gelir, ardından yardımcı fiil (is/are/do/does), sonra özne ve varsa asıl fiil sıralanır.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: Durum Soruları (What + to be)",
                "content": "Bir nesnenin veya kavramın ne olduğunu sorarken 'What is' veya 'What are' kullanılır. Günlük konuşmada 'What is' sözcükleri kaynaşarak 'What's' haline gelir: 'What's this?' (Bu nedir?), 'What's your phone number?' (Telefon numaran nedir?).",
                "formula": "What + is / are + [Özne]?",
                "keyPhrase": "What is your job? | What's your email address?",
                "subPoints": [
                    "Tekillerde 'What is' (What's), çoğullarda 'What are' kullanılır: 'What are these?' (Bunlar nedir?).",
                    "'What is your job?' sorusu 'Mesleğin nedir?' demektir."
                ],
                "rationale": "Durum sorularında eylem fiili bulunmadığından 'to be' yardımcı fiili köprü kurar."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: Eylem Soruları (What + do/does)",
                "content": "Karşı tarafın ne yaptığını, ne yediğini veya ne istediğini sorarken 'do' veya 'does' yardımcı fiili devreye girer. Formül: What + do/does + Özne + Yalın Fiil? 'What do you do?' sorusu hem 'Ne yapıyorsun?' hem de kalıp olarak 'Ne iş yapıyorsun?' anlamına gelir.",
                "formula": "What + do/does + [Özne] + [Yalın Fiil V1]?",
                "keyPhrase": "What do you want? | What does she study?",
                "subPoints": [
                    "I, You, We, They için 'do'; He, She, It için 'does' kullanılır.",
                    "'does' kullanıldığında asıl fiil asla -s takısı almaz: 'What does he want?' (What does he wants YANLIŞTIR)."
                ],
                "rationale": "Geniş zamanda eylem sorularının standart yardımcı fiil mekanizmasını kurar."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: İsimle Birlikte Kullanım (What + İsim)",
                "content": "'What' kelimesi 'Hangi' veya 'Ne tür' anlamında bir ismin hemen önüne gelebilir: 'What sports do you play?' (Hangi sporları yaparsın?), 'What color is your car?' (Araban ne renk?).",
                "formula": "What + [İsim] + [Yardımcı Fiil] + [Özne]...?",
                "keyPhrase": "What music do you listen to? | What size do you wear?",
                "subPoints": [
                    "Burada 'What' soru sıfatı görevindedir ve doğrudan nitelediği isimle öbekleşir.",
                    "Seçenekler sınırsız olduğunda 'What', belirli seçenekler arasından seçim yaparken 'Which' tercih edilir."
                ],
                "rationale": "Soru kelimelerinin sıfat tamlaması işlevini kavramak ifade zenginliği katar."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Soru Diziliminde Yardımcı Fiil Şartı",
                "formula": "What + Yardımcı Fiil (do/does/is/are) + Özne + Fiil",
                "explanation": "Türkçede soru kelimesi fiilden önce gelirken ('Sen ne istiyorsun?'), İngilizcede 'What' en başa gelir ve ardına MUTLAKA bir yardımcı fiil almak zorundadır.",
                "exampleSnippet": "*What you want? (YANLIŞ) -> What do you want? (DOĞRU)",
                "cautionNote": "Yardımcı fiili asla atlamayın; *What you eat? bozuk bir yapıdır."
            },
            {
                "ruleTitle": "'What do you do?' Çift Anlamı",
                "formula": "What do you do? = Mesleğiniz nedir? / Ne işle meşgulsünüz?",
                "explanation": "Bu soru günlük hayatta 'Mesleğiniz nedir?' anlamında en yaygın kullanılan kalıptır. Yanıt verirken mesleğinizi söylersiniz: 'I am a software developer.'",
                "tipNote": "Şu an ne yaptığınızı sormak için ise 'What are you doing?' (Present Continuous) kullanılır."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "What you do at the weekend?",
                "correctExample": "What do you do at the weekend?",
                "rootCause": "Soru cümlesinde 'do' yardımcı fiilini unutarak doğrudan özne ve fiili yan yana getirmek.",
                "memoryTip": "İngilizcede WH- sorularında öznenin önünde bir yardımcı fiil bekçisi durmalıdır: What DO you do!"
            },
            {
                "wrongExample": "What does he likes?",
                "correctExample": "What does he like?",
                "rootCause": "'Does' yardımcı fiilinin zaten -s takısını taşıdığını unutup asıl fiile de -s eklemek.",
                "memoryTip": "Does hırsız gibidir, fiilin -s takısını çalar ve fiili yalın bırakır!"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Uluslararası Bir Konferansta Tanışma ve Sohbet",
            "description": "İki katılımcı mola sırasında meslekleri ve projeleri hakkında soru sorar.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "David", "textEn": "Hello! What is your name and where are you from?", "textTr": "Merhaba! Adınız nedir ve nerelisiniz?"},
                {"speaker": "Aylin", "textEn": "Hi, my name is Aylin and I'm from Istanbul. What do you do, David?", "textTr": "Selam, adım Aylin ve İstanbulluyum. Ne işle meşgulsünüz David?"},
                {"speaker": "David", "textEn": "I am a graphic designer. What company do you work for?", "textTr": "Ben grafik tasarımcısıyım. Hangi şirkette çalışıyorsunuz?"},
                {"speaker": "Aylin", "textEn": "I work for a green technology firm in Kadikoy.", "textTr": "Kadıköy'de bir yeşil teknoloji firmasında çalışıyorum."}
            ],
            "culturalNote": "İngilizce konuşulan ülkelerde tanışmalarda 'What do you do?' sorusu en yaygın buz kırıcı sorudur."
        },
        "contrastiveAnalysis": {
            "title": "Türkçe vs İngilizce Soru Söz Dizimi",
            "englishConcept": "WH- Kelimesi + Yardımcı Fiil + Özne + Esas Fiil",
            "turkishDifference": "Türkçede soru kelimesi vurgulanan yere taşınabilir ('Ne yapıyorsun?' / 'Sen ne yapıyorsun?'). İngilizcede ise What en başa sabitlenir ve ardından yardımcı fiil gelmek zorundadır.",
            "directComparison": [
                {
                    "context": "Meslek sorma",
                    "en": "What do you do?",
                    "trMeaning": "Ne iş yapıyorsun?",
                    "commonErrorTr": "*What you do?",
                    "whyItMatters": "Yardımcı fiilsiz soru İngilizcede dilbilgisel çöküş yaratır."
                }
            ]
        },
        "memoryHook": "WH-SORU KURALI: 'What' başa geçer, arkasına yardımcı fiili (do/does/is) koruma olarak alır!",
        "examples": [
            {
                "en": "What is your favorite book?",
                "tr": "En sevdiğin kitap hangisidir?",
                "highlightedWords": ["What is", "favorite book"],
                "grammarCategory": "What + to be",
                "contextNote": "Kişisel beğeni sorusu.",
                "breakdownNote": "What + is (to be) + your favorite book (özne öbeği)."
            },
            {
                "en": "What do they usually eat for breakfast?",
                "tr": "Kahvaltıda genellikle ne yerler?",
                "highlightedWords": ["What do they", "eat"],
                "grammarCategory": "What + do + eylem",
                "contextNote": "Rutin beslenme alışkanlığı.",
                "breakdownNote": "What + do (yardımcı fiil) + they (özne) + usually + eat (fiil)."
            },
            {
                "en": "What language does she speak at home?",
                "tr": "Evde hangi dili konuşuyor?",
                "highlightedWords": ["What language", "does she speak"],
                "grammarCategory": "What + isim + does",
                "contextNote": "Sıfat tamlamalı soru.",
                "breakdownNote": "What language (soru öbeği) + does + she + speak (yalın fiil)."
            }
        ],
        "vocabulary": [
            {"word": "Favorite", "phonetic": "/ˈfeɪ.vər.ɪt/", "partOfSpeech": "adjective", "meaningTr": "En sevilen, favori", "exampleSentence": "What is your favorite color?"},
            {"word": "Breakfast", "phonetic": "/ˈbrek.fəst/", "partOfSpeech": "noun", "meaningTr": "Kahvaltı", "exampleSentence": "We have breakfast at eight."},
            {"word": "Meaning", "phonetic": "/ˈmiː.nɪŋ/", "partOfSpeech": "noun", "meaningTr": "Anlam", "exampleSentence": "What is the meaning of this word?"},
            {"word": "Information", "phonetic": "/ˌɪn.fəˈmeɪ.ʃən/", "partOfSpeech": "noun", "meaningTr": "Bilgi", "exampleSentence": "What information do you need?"}
        ],
        "quickCheck": {
            "question": "İngilizcede birine 'Ne iş yapıyorsun / Mesleğin nedir?' diye sormak için en doğal ve doğru kalıp hangisidir?",
            "options": [
                "What do you do?",
                "What are you doing?",
                "What you do?",
                "What is your doing?"
            ],
            "correctIndex": 0,
            "explanation": "'What do you do?' geniş zamanda meslek sormanın standart ve evrensel İngilizce kalıbıdır."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun yardımcı fiili yerleştirin:",
            "sentence": "What ___ your brother study at university?",
            "options": ["does", "do", "is", "are"],
            "correctAnswer": "does",
            "hint": "'Your brother' tekil üçüncü şahıstır (He). Eylem fiili 'study' ile hangi yardımcı fiil kullanılır?",
            "explanation": "Tekil üçüncü şahıs (He/She) geniş zaman sorularında eylem fiilleriyle 'does' yardımcı fiilini alır."
        },
        "sentenceBuilder": {
            "promptTr": "Hafta sonları boş zamanında ne yaparsın?",
            "targetEn": "What do you do in your free time at weekends",
            "availableWords": ["What", "do", "you", "do", "in", "your", "free", "time", "at", "weekends", "does", "is", "doing"],
            "explanation": "Soru kelimesi (What) + yardımcı fiil (do) + özne (you) + asıl fiil (do) + yer/zaman tamlayıcıları."
        },
        "summaryTakeaways": [
            "'What' nesne, kavram ve eylem sormak için en temel soru kelimesidir.",
            "Durum cümlelerinde 'What is/are', eylem cümlelerinde 'What do/does' sıralaması uygulanır.",
            "'What do you do?' doğrudan meslek sorma refleksidir.",
            "'What' bir ismin önüne gelerek 'What color', 'What size' gibi sıfat işlevi görebilir."
        ]
    },
    42: {
        "skillType": "grammar",
        "concreteCompetency": "A1 standardında 'Where' (Nerede / Nereye) soru kelimesiyle konum, mekan ve yön soruları kurabilmek ('Where is...?', 'Where do you live?') ve yanıtlarda doğru yer edatlarını (in, at, on) uygulayabilmek.",
        "whyItMatters": "Yabancı bir şehirde yön bulurken, bir dükkanın nerede olduğunu öğrenirken veya yeni tanıştığınız birinin memleketini sorarken 'Where' hayati önemdedir.",
        "linguisticLogic": "Türkçede 'Nerede?' (bulunma) ve 'Nereye?' (yönelme) iki ayrı kelimedir; ancak İngilizcede her ikisi de tek bir sözcükle, 'WHERE' ile karşılanır. 'Where are you?' (Neredesin?) ve 'Where do you go?' (Nereye gidersin?) aynı soru kelimesiyle başlar. Cümledeki fiil ve edatlar bulunma veya yönelme anlamını netleştirir.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: Konum ve Bulunma Soruları (Where is / are)",
                "content": "Bir kişinin, yerin veya eşyanın nerede olduğunu sormak için 'Where is' (tekiller) veya 'Where are' (çoğullar) kullanılır. 'Where is' günlük konuşmada 'Where's' şeklinde kaynaşır: 'Where's the bathroom?' (Tuvalet nerede?).",
                "formula": "Where + is / are + [Özne]?",
                "keyPhrase": "Where is the train station? | Where are my glasses?",
                "subPoints": [
                    "Where's the bus stop? (Otobüs durağı nerede?)",
                    "Cevap verirken yer edatları (in, on, at, near, behind) kullanılır: 'It is near the bank.'"
                ],
                "rationale": "Gündelik hayatta kayıp eşyaları ve şehir mekanlarını sormanın en kestirme yoludur."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: Köken ve Memleket Sorma (Where are you from?)",
                "content": "Birinin nereli olduğunu sormak İngilizcede 'to be + from' yapısıyla kurulur: 'Where are you from?' (Nerelisin?). Soru kelimesi 'Where' başa gelir, 'from' (den/dan) ise cümlenin sonuna yerleşir.",
                "formula": "Where + am/is/are + [Özne] + from?",
                "keyPhrase": "Where are you from? - I am from Turkey.",
                "subPoints": [
                    "Where is he from? - He is from Germany.",
                    "İngilizcede edatlar sorularda sık sık cümlenin sonuna gider (preposition stranding)."
                ],
                "rationale": "Kültürel tanışma protokolünün vazgeçilmez temel sorusudur."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Eylem Mekanını Sorma (Where + do/does)",
                "content": "Bir eylemin nerede gerçekleştiğini, birinin nerede yaşadığını veya çalıştığını sorarken 'do' veya 'does' kullanılır: 'Where do you live?' (Nerede yaşıyorsun?), 'Where does she work?' (O nerede çalışıyor?).",
                "formula": "Where + do/does + [Özne] + [Yalın Fiil V1]?",
                "keyPhrase": "Where do you live? | Where does Tom buy his books?",
                "subPoints": [
                    "Özneye göre do/does seçimi kuralına harfiyen uyun.",
                    "Cevapta geniş zaman kullanılır: 'I live in London', 'She works in a hospital.'"
                ],
                "rationale": "Kişisel yaşam alanlarını ve rutin mekanları sorgulama becerisini pekiştirir."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Edatın Cümle Sonuna Gitmesi (Preposition Stranding)",
                "formula": "Where + are you + FROM? (Nerelisin?)",
                "explanation": "Türkçe 'Nereden' derken ek kelimenin içine girer. İngilizcede ise 'Where' tek başınadır, 'from' edatı ise cümlenin en sonuna bırakılır.",
                "exampleSnippet": "Where do you come from? / Where are you from?",
                "tipNote": "Asla *From where are you? demeyin; konuşma dilinde doğalı 'Where are you from?'dur."
            },
            {
                "ruleTitle": "'Where' Eylem Sorularında 'do/does' Zorunluluğu",
                "formula": "Where + DO/DOES + Özne + Yalın Fiil",
                "explanation": "Eğer cümlede bir eylem (live, work, stay) varsa 'Where are you live?' YANLIŞTIR. 'Where DO you live?' DOĞRUDUR.",
                "cautionNote": "*Where are you live? hatasına kesinlikle düşmeyin; live fiili varken 'do' gelir."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "Where are you live?",
                "correctExample": "Where do you live?",
                "rootCause": "'To be' (are) ile eylem fiilini (live) bir arada kullanma kafa karışıklığı.",
                "memoryTip": "Cümlede eylem varsa 'DO' yardıma koşar: Where do you live!"
            },
            {
                "wrongExample": "Where is the keys?",
                "correctExample": "Where are the keys?",
                "rootCause": "Çoğul bir özneyle (the keys) tekil yardımcı fiil (is) kullanmak.",
                "memoryTip": "Anahtarlar çoğuldur; çoğullar 'ARE' sever: Where are the keys?"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Havalimanında ve Otel Girişinde Adres Öğrenme",
            "description": "Yolcu danışma masasına giderek otobüs durağının yerini sorar.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Tourist", "textEn": "Excuse me, where is the airport bus to the city center?", "textTr": "Affedersiniz, şehir merkezine giden havalimanı otobüsü nerede?"},
                {"speaker": "Officer", "textEn": "It is outside terminal two, just near gate B.", "textTr": "İkinci terminalin dışında, tam B kapısının yanında."},
                {"speaker": "Tourist", "textEn": "Thank you! And where do I buy the tickets?", "textTr": "Teşekkürler! Peki biletleri nereden alabilirim?"},
                {"speaker": "Officer", "textEn": "You can buy them from the yellow machine next to the door.", "textTr": "Kapının yanındaki sarı makineden satın alabilirsiniz."}
            ],
            "culturalNote": "Yabancı birine yer sorarken söze mutlaka 'Excuse me' ile başlamak temel nezaket kuralıdır."
        },
        "contrastiveAnalysis": {
            "title": "Nerede vs Nereye: Türkçeden Farkı",
            "englishConcept": "WHERE tek kelimeyle hem bulunma hem yönelme anlatır.",
            "turkishDifference": "Türkçe bulunma için '-de' (Nerede), yönelme için '-e' (Nereye) eklerini kullanır. İngilizcede iki durum için de 'Where' başa gelir.",
            "directComparison": [
                {
                    "context": "Bulunma",
                    "en": "Where are you?",
                    "trMeaning": "Neredesin?",
                    "commonErrorTr": "Sorunsuz çevrilir.",
                    "whyItMatters": "To be ile bulunma konumu sorgulanır."
                },
                {
                    "context": "Yönelme",
                    "en": "Where do you go on holidays?",
                    "trMeaning": "Tatillerde nereye gidersin?",
                    "commonErrorTr": "*To where do you go?",
                    "whyItMatters": "Başa gereksiz 'to' eklenmemelidir."
                }
            ]
        },
        "memoryHook": "WHERE HARİTASI: Konum sorarken 'Where is/are?', eylemin yerini sorarken 'Where do/does?'!",
        "examples": [
            {
                "en": "Where is the nearest pharmacy?",
                "tr": "En yakın eczane nerede?",
                "highlightedWords": ["Where is", "nearest pharmacy"],
                "grammarCategory": "Where + is + tekil yer",
                "contextNote": "Şehir içinde yön sorma.",
                "breakdownNote": "Where + is + the nearest pharmacy (özne)."
            },
            {
                "en": "Where do your parents live?",
                "tr": "Anne baban nerede yaşıyorlar?",
                "highlightedWords": ["Where do", "parents live"],
                "grammarCategory": "Where + do + çoğul eylem",
                "contextNote": "İkametgah sorgulama.",
                "breakdownNote": "Where + do (yardımcı) + your parents (çoğul özne) + live (fiil)."
            },
            {
                "en": "Where does Mark park his car every morning?",
                "tr": "Mark her sabah arabasını nereye park eder?",
                "highlightedWords": ["Where does", "park"],
                "grammarCategory": "Where + does + 3. tekil",
                "contextNote": "Rutin park yeri.",
                "breakdownNote": "Where + does + Mark + park (yalın fiil) + nesne + zaman."
            }
        ],
        "vocabulary": [
            {"word": "Nearest", "phonetic": "/ˈnɪə.rɪst/", "partOfSpeech": "adjective", "meaningTr": "En yakın", "exampleSentence": "Where is the nearest bank?"},
            {"word": "Pharmacy", "phonetic": "/ˈfɑː.mə.si/", "partOfSpeech": "noun", "meaningTr": "Eczane", "exampleSentence": "The pharmacy is closed on Sundays."},
            {"word": "Outside", "phonetic": "/ˌaʊtˈsaɪd/", "partOfSpeech": "preposition", "meaningTr": "Dışında, dışarıda", "exampleSentence": "Wait for me outside the hotel."},
            {"word": "Center", "phonetic": "/ˈsen.tər/", "partOfSpeech": "noun", "meaningTr": "Merkez", "exampleSentence": "Our office is in the city center."}
        ],
        "quickCheck": {
            "question": "Bir otelde resepsiyon görevlisine kahvaltı salonunun yerini sormak için hangi cümle dilbilgisel olarak DOĞRUDUR?",
            "options": [
                "Where is the breakfast room?",
                "Where does the breakfast room?",
                "Where the breakfast room is?",
                "Where are breakfast room?"
            ],
            "correctIndex": 0,
            "explanation": "Tekil bir mekanın yerini sorarken 'Where is [Mekan]?' kalıbı kullanılır."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun ifadeyi yerleştirin:",
            "sentence": "Where ___ your manager work during the week?",
            "options": ["does", "is", "do", "are"],
            "correctAnswer": "does",
            "hint": "'Your manager' tekil üçüncü şahıstır (He/She) ve cümlede eylem fiili 'work' vardır.",
            "explanation": "Eylem fiili (work) ve tekil özne (manager) varlığında soru 'does' ile kurulur."
        },
        "sentenceBuilder": {
            "promptTr": "Pardon, en yakın metro istasyonu nerede?",
            "targetEn": "Excuse me where is the nearest metro station",
            "availableWords": ["Excuse", "me", "where", "is", "the", "nearest", "metro", "station", "are", "do", "does"],
            "explanation": "Nezaket ünlemi (Excuse me) + soru kelimesi (where) + to be (is) + nesne grubu (the nearest metro station)."
        },
        "summaryTakeaways": [
            "'Where' hem 'Nerede?' (konum) hem de 'Nereye?' (yönelme) anlamlarını taşır.",
            "Varlıkların konumunda 'Where is/are', eylemlerin yerinde 'Where do/does' kullanılır.",
            "'Where are you from?' köken sormanın evrensel kalıbıdır ve 'from' sonda yer alır.",
            "Cevap verirken yer edatları (in, on, at, next to, opposite) devreye girer."
        ]
    }
}

print("Module 5 Part 1 defined successfully.")
