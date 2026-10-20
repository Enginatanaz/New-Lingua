# -*- coding: utf-8 -*-
"""
Builder for Module 9 Part 2 (Lessons 86 to 90)
Level: A2: Geçmiş Zaman: Soru Cümleleri, Zaman Belirteçleri, Was/Were ve Tatil Anlatımı
100% bespoke, CEFR A2 compliant, zero generic templates, zero slop.
"""

module9_part2_data = {
    86: {
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
                {"speaker": "Officer", "textEn": "Good evening sir. Where did you fly from today?", "textTr": "İyi akşamlar efendim. Bugün nereden uçtunuz?"},
                {"speaker": "Traveler", "textEn": "I flew from Istanbul on flight TK1985.", "textTr": "TK1985 sefer sayılı uçuşla İstanbul'dan uçtum."},
                {"speaker": "Officer", "textEn": "Did you pack your luggage yourself?", "textTr": "Bavulunuzu kendiniz mi hazırladınız?"},
                {"speaker": "Traveler", "textEn": "Yes, I did.", "textTr": "Evet, kendim hazırladım."},
                {"speaker": "Officer", "textEn": "Did anyone give you any packages to carry for them?", "textTr": "Biri size kendisi için taşımanız üzere paket verdi mi?"},
                {"speaker": "Traveler", "textEn": "No, they didn't. Nobody gave me anything.", "textTr": "Hayır, vermedi. Kimse bana bir şey vermedi."}
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
                "highlightedWords": ["Did your company launch"],
                "grammarCategory": "Geçmiş Zaman Evet/Hayır Sorusu",
                "contextNote": "İş dünyasında ürün lansmanı.",
                "breakdownNote": "Did başa gelmiş, launch fiili yalın kalmıştır."
            },
            {
                "en": "Why did the train arrive forty minutes late this morning?",
                "tr": "Tren bu sabah neden kırk dakika geç geldi?",
                "highlightedWords": ["Why did the train arrive"],
                "grammarCategory": "Wh- Bilgi Sorusu (Why + did + Özne + V1)",
                "contextNote": "Ulaşım gecikmesi sorgulama.",
                "breakdownNote": "Why'dan sonra did gelmiş, arrive fiili ek almamıştır."
            },
            {
                "en": "How much money did you spend on your vacation in Spain?",
                "tr": "İspanya'daki tatilinizde ne kadar para harcadınız?",
                "highlightedWords": ["How much money did you spend"],
                "grammarCategory": "Miktar Sorusu (How much + did + Özne + V1)",
                "contextNote": "Tatil bütçesi sorusu.",
                "breakdownNote": "Spend fiilinin 2. hali spent olmasına rağmen soru did içerdiği için spend kalmıştır."
            }
        ],
        "vocabulary": [
            {"word": "Luggage", "phonetic": "/ˈlʌɡ.ɪdʒ/", "partOfSpeech": "noun", "meaningTr": "Bagaj, bavul", "exampleSentence": "Did you pack your luggage yourself?"},
            {"word": "Flight", "phonetic": "/flaɪt/", "partOfSpeech": "noun", "meaningTr": "Uçuş, uçak seferi", "exampleSentence": "Our flight departed on schedule."},
            {"word": "Launch", "phonetic": "/lɔːntʃ/", "partOfSpeech": "verb", "meaningTr": "Piyasaya sürmek, başlatmak", "exampleSentence": "They launched a new product yesterday."},
            {"word": "Customs", "phonetic": "/ˈkʌs.təmz/", "partOfSpeech": "noun", "meaningTr": "Gümrük", "exampleSentence": "We passed through customs smoothly."}
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
            "options": ["Did your director go", "Did your director went", "Went your director", "Did go your director"],
            "correctAnswer": "Did your director go",
            "hint": "Formül: Did + Özne + V1",
            "explanation": "'Did' + Özne (your director) + V1 (go) sıralaması tam doğrudur."
        },
        "sentenceBuilder": {
            "promptTr": "Dün akşam müdürün gönderdiği önemli e-postayı aldın mı?",
            "targetEn": "Did you receive the important email that the manager sent yesterday evening",
            "availableWords": ["Did", "you", "receive", "the", "important", "email", "that", "the", "manager", "sent", "yesterday", "evening", "received", "do"],
            "explanation": "Did + you + receive (V1) + nesne öbeği + zaman belirteci."
        },
        "summaryTakeaways": [
            "Past Simple soru yapısı: 'DID + Özne + Yalın Fiil (V1)...?' şeklindedir.",
            "Wh- sorularında soru kelimesi en başa gelir: 'Where did you go?'.",
            "Kısa cevaplar 'Yes, I did. / No, I didn't.' şeklindedir; ana fiil söylenmez.",
            "Soruda 'did' varken ana fiile asla -ed eklenmez veya 2. hali kullanılmaz."
        ]
    },

    87: {
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
                {"speaker": "Customer", "textEn": "Hello, I ordered a winter jacket two weeks ago, but it hasn't arrived.", "textTr": "Merhaba, iki hafta önce bir kışlık ceket sipariş ettim ama ulaşmadı."},
                {"speaker": "Agent", "textEn": "Let me check your tracking number. Ah, our warehouse dispatched it last Thursday.", "textTr": "Takip numaranızı kontrol edeyim. Ah, depomuz ürünü geçen Perşembe sevk etmiş."},
                {"speaker": "Customer", "textEn": "Did the courier attempt delivery yesterday?", "textTr": "Kurye dün teslimatı denedi mi?"},
                {"speaker": "Agent", "textEn": "Yes, they arrived yesterday afternoon at 3 PM, but nobody answered the doorbell.", "textTr": "Evet, dün öğleden sonra saat 3'te gelmişler ama kapı ziline kimse cevap vermemiş."}
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
                "highlightedWords": ["three days ago"],
                "grammarCategory": "Zaman Belirteci (Süre + ago)",
                "contextNote": "Hükümet duyurusu.",
                "breakdownNote": "Three days (süre) + ago dizilimi cümlenin sonundadır."
            },
            {
                "en": "Our CEO traveled to Tokyo on business last month.",
                "tr": "İcra kurulu başkanımız geçen ay iş için Tokyo'ya seyahat etti.",
                "highlightedWords": ["last month"],
                "grammarCategory": "Zaman Belirteci (Last + zaman birimi)",
                "contextNote": "İş seyahati.",
                "breakdownNote": "Last month önüne in veya at almadan doğrudan yer almıştır."
            },
            {
                "en": "A heavy thunderstorm damaged the coastal bridge last night.",
                "tr": "Dün gece şiddetli bir fırtına kıyı köprüsüne zarar verdi.",
                "highlightedWords": ["last night"],
                "grammarCategory": "Zaman Belirteci (Last night)",
                "contextNote": "Doğa olayı haberi.",
                "breakdownNote": "Dün gece anlamında doğru kalıp olan 'last night' kullanılmıştır."
            }
        ],
        "vocabulary": [
            {"word": "Dispatch", "phonetic": "/dɪˈspætʃ/", "partOfSpeech": "verb", "meaningTr": "Sevk etmek, yollamak", "exampleSentence": "The warehouse dispatched the goods."},
            {"word": "Courier", "phonetic": "/ˈkʊr.i.ər/", "partOfSpeech": "noun", "meaningTr": "Kurye, kargo görevlisi", "exampleSentence": "The courier delivered the parcel."},
            {"word": "Thunderstorm", "phonetic": "/ˈθʌn.də.stɔːm/", "partOfSpeech": "noun", "meaningTr": "Gök gürültülü fırtına", "exampleSentence": "A thunderstorm started last night."},
            {"word": "Warehouse", "phonetic": "/ˈweə.haʊs/", "partOfSpeech": "noun", "meaningTr": "Depo, ambar", "exampleSentence": "Products are stored in the warehouse."}
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
            "options": ["twenty minutes ago", "ago twenty minutes", "yesterday night", "in last hour"],
            "correctAnswer": "twenty minutes ago",
            "hint": "Süre + ago dizilimi aranmaktadır.",
            "explanation": "Doğru zaman tamlaması süre ardından gelen 'ago'dur: 'twenty minutes ago'."
        },
        "sentenceBuilder": {
            "promptTr": "Ailemiz iki yıl önce İtalya'daki küçük bir kasabaya taşındı.",
            "targetEn": "Our family moved to a small town in Italy two years ago",
            "availableWords": ["Our", "family", "moved", "to", "a", "small", "town", "in", "Italy", "two", "years", "ago", "last", "in"],
            "explanation": "Özne (Our family) + V2 (moved) + yönelme (to a small town in Italy) + zaman belirteci (two years ago)."
        },
        "summaryTakeaways": [
            "Dün sabah/öğle/akşam: yesterday morning/afternoon/evening.",
            "Dün gece KESİNLİKLE 'last night'tır (*yesterday night yanlıştır).",
            "'Last' önüne edat almaz: last week, last month, last year.",
            "'Ago' sürenin arkasına gelir: two days ago, five years ago."
        ]
    },

    88: {
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
                {"speaker": "Receptionist", "textEn": "Good morning Mrs. Brown. How was your stay with us?", "textTr": "Günaydın Bayan Brown. Bizimle konaklamanız nasıldı?"},
                {"speaker": "Guest", "textEn": "It was wonderful! The room was very spacious and clean.", "textTr": "Harikaydı! Oda çok geniş ve temizdi."},
                {"speaker": "Receptionist", "textEn": "Were the breakfast options satisfactory?", "textTr": "Kahvaltı seçenekleri tatmin edici miydi?"},
                {"speaker": "Guest", "textEn": "Yes, they were fresh and delicious. My children were very happy.", "textTr": "Evet, taze ve lezzetliydi. Çocuklarım çok mutlu oldular."}
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
                "highlightedWords": ["was very satisfied"],
                "grammarCategory": "Geçmiş Durum Cümlesi (Was + Sıfat)",
                "contextNote": "İş performansı değerlendirmesi.",
                "breakdownNote": "The project manager tekil (he/she) olduğu için 'was' almıştır."
            },
            {
                "en": "The roads were icy and dangerous because of the sudden frost.",
                "tr": "Ani don nedeniyle yollar buzlu ve tehlikeliydi.",
                "highlightedWords": ["were icy and dangerous"],
                "grammarCategory": "Geçmiş Durum Cümlesi (Were + Sıfatlar)",
                "contextNote": "Hava ve yol durumu.",
                "breakdownNote": "The roads çoğul (they) olduğu için 'were' almıştır."
            },
            {
                "en": "We were in Rome for an international architectural symposium last spring.",
                "tr": "Geçen bahar uluslararası bir mimarlık sempozyumu için Roma'daydık.",
                "highlightedWords": ["were in Rome"],
                "grammarCategory": "Geçmiş Mekan Cümlesi (Were + Yer Edatı)",
                "contextNote": "Konferans seyahati.",
                "breakdownNote": "We öznesi çoğuldur ve 'were' ile mekansal bulunma bildirir."
            }
        ],
        "vocabulary": [
            {"word": "Spacious", "phonetic": "/ˈspeɪ.ʃəs/", "partOfSpeech": "adjective", "meaningTr": "Geniş, ferah", "exampleSentence": "The hotel suite was very spacious."},
            {"word": "Satisfied", "phonetic": "/ˈsæt.ɪs.faɪd/", "partOfSpeech": "adjective", "meaningTr": "Memnun, tatmin olmuş", "exampleSentence": "The client was satisfied with the design."},
            {"word": "Frost", "phonetic": "/frɒst/", "partOfSpeech": "noun", "meaningTr": "Don, kırağı", "exampleSentence": "Morning frost covered the grass."},
            {"word": "Symposium", "phonetic": "/sɪmˈpəʊ.zi.əm/", "partOfSpeech": "noun", "meaningTr": "Sempozyum, bilimsel toplantı", "exampleSentence": "We attended a physics symposium."}
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
            "options": ["were", "was", "did", "are"],
            "correctAnswer": "were",
            "hint": "'The museum tickets' çoğul bir öznedir (they). Hangi durum fiili gelir?",
            "explanation": "Çoğul öznelerle (tickets) geçmiş zamanda 'were' kullanılır."
        },
        "sentenceBuilder": {
            "promptTr": "Dün hava karlıydı ve trenler çok kalabalıktı.",
            "targetEn": "The weather was snowy and the trains were very crowded yesterday",
            "availableWords": ["The", "weather", "was", "snowy", "and", "the", "trains", "were", "very", "crowded", "yesterday", "did", "is"],
            "explanation": "The weather (tekil: was) + the trains (çoğul: were) geçmiş zaman durum dizilimi."
        },
        "summaryTakeaways": [
            "I, He, She, It ile WAS kullanılır.",
            "You, We, They ile WERE kullanılır.",
            "Eylem içermeyen durum, sıfat ve mekan cümlelerinde kullanılır.",
            "Was/Were cümlelerinde kesinlikle DID yardımcı fiili KULLANILMAZ."
        ]
    },

    89: {
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
                "title": "Soru Başına Was/Were",
                "rule": "Was he...? Were you...? Were they...?",
                "example": "Were you at the meeting yesterday morning?",
                "tip": "Did kullanma; Was/Were'ü başa al!"
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
                {"speaker": "Team Lead", "textEn": "Good morning Daniel. You weren't at the emergency client briefing yesterday afternoon. Where were you?", "textTr": "Günaydın Daniel. Dün öğleden sonra acil müşteri bilgilendirme toplantısında yoktun. Neredeydin?"},
                {"speaker": "Daniel", "textEn": "Good morning. I am so sorry. I wasn't in the office because I had a severe dental appointment.", "textTr": "Günaydın. Çok üzgünüm. Şiddetli bir diş randevum olduğu için ofiste değildim."},
                {"speaker": "Team Lead", "textEn": "Oh, I see. Was it painful?", "textTr": "Ah, anlıyorum. Çok mu ağrılıydı?"},
                {"speaker": "Daniel", "textEn": "Yes, it was quite painful, but the dentist was excellent.", "textTr": "Evet, oldukça ağrılıydı ama diş hekimi mükemmeldi."}
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
                "highlightedWords": ["wasn't ready", "was offline"],
                "grammarCategory": "Wasn't Olumsuz Durum Cümlesi",
                "contextNote": "Şirket denetimi.",
                "breakdownNote": "The financial audit tekil olduğu için wasn't almıştır."
            },
            {
                "en": "Were the delegates satisfied with the accommodation and conference facilities?",
                "tr": "Delegeler konaklama ve konferans imkanlarından memnun kaldılar mı?",
                "highlightedWords": ["Were the delegates satisfied"],
                "grammarCategory": "Were Soru Cümlesi",
                "contextNote": "Uluslararası organizasyon geri bildirimi.",
                "breakdownNote": "The delegates çoğul olduğu için soru cümlenin başında 'Were' ile kurulmuştur."
            },
            {
                "en": "Why were you absent from the critical board meeting yesterday morning?",
                "tr": "Dün sabahki kritik yönetim kurulu toplantısında neden yoktunuz?",
                "highlightedWords": ["Why were you absent"],
                "grammarCategory": "Wh- Soru Cümlesi (Why were you...)",
                "contextNote": "Üst düzey iş sorgulaması.",
                "breakdownNote": "Why'dan sonra were ve ardından you öznesi gelmiştir."
            }
        ],
        "vocabulary": [
            {"word": "Briefing", "phonetic": "/ˈbriː.fɪŋ/", "partOfSpeech": "noun", "meaningTr": "Bilgilendirme toplantısı", "exampleSentence": "The captain gave a security briefing."},
            {"word": "Severe", "phonetic": "/sɪˈvɪər/", "partOfSpeech": "adjective", "meaningTr": "Şiddetli, ciddi", "exampleSentence": "He suffered from severe pain."},
            {"word": "Delegate", "phonetic": "/ˈdel.ɪ.ɡət/", "partOfSpeech": "noun", "meaningTr": "Delege, temsilci", "exampleSentence": "International delegates met in Geneva."},
            {"word": "Absent", "phonetic": "/ˈæb.sənt/", "partOfSpeech": "adjective", "meaningTr": "Yok, devamsız, bulunmayan", "exampleSentence": "Three students were absent today."}
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
            "options": ["Were you", "Did you be", "Was you", "Did you were"],
            "correctAnswer": "Were you",
            "hint": "You öznesiyle geçmiş durum sorusu nasıl kurulur?",
            "explanation": "You öznesi 'were' alır ve soru yaparken 'Were you...?' başa geçer."
        },
        "sentenceBuilder": {
            "promptTr": "Hava dün yağmurlu değildi ama rüzgar çok soğuktu.",
            "targetEn": "The weather wasn't rainy yesterday but the wind was very cold",
            "availableWords": ["The", "weather", "wasn't", "rainy", "yesterday", "but", "the", "wind", "was", "very", "cold", "didn't", "weren't"],
            "explanation": "The weather (tekil: wasn't) + zaman (yesterday) + the wind (tekil: was cold) dizilimi."
        },
        "summaryTakeaways": [
            "Was/Were olumsuz halleri 'wasn't' ve 'weren't'tir.",
            "Soru yaparken Was/Were cümlenin en başına geçer.",
            "Kısa cevaplar: 'Yes, I was. / No, I wasn't.' veya 'Yes, we were. / No, we weren't.'dir.",
            "Kesinlikle *didn't was veya *did you were kullanılmaz."
        ]
    },

    90: {
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
                {"speaker": "Teacher", "textEn": "Can, tell the class about your summer vacation. Where did you go?", "textTr": "Can, sınıfa yaz tatilini anlat. Nereye gittin?"},
                {"speaker": "Can", "textEn": "Last July, my best friend and I traveled to Fethiye. The weather was wonderfully hot and clear.", "textTr": "Geçen Temmuz ayında en iyi arkadaşımla Fethiye'ye seyahat ettik. Hava harika derecede sıcak ve açıktı."},
                {"speaker": "Teacher", "textEn": "What activities did you do there?", "textTr": "Orada hangi aktiviteleri yaptınız?"},
                {"speaker": "Can", "textEn": "In the morning, we swam in the Blue Lagoon and paraglided from Babadağ mountain. In the evening, we ate delicious grilled fish. We didn't spend much money because we stayed in a tent.", "textTr": "Sabah Ölüdeniz'de yüzdük ve Babadağ'dan yamaç paraşütü yaptık. Akşam lezzetli ızgara balık yedik. Çadırda kaldığımız için çok para harcamadık."},
                {"speaker": "Teacher", "textEn": "Was it scary to jump from the mountain?", "textTr": "Dağdan atlamak korkutucu muydu?"},
                {"speaker": "Can", "textEn": "At first I was terrified, but the view was breathtaking. It was truly the most memorable week of my year!", "textTr": "İlk başta dehşete kapıldım ama manzara nefes kesiciydi. Gerçekten yılımın en unutulmaz haftasıydı!"}
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
                "highlightedWords": ["rented", "stayed"],
                "grammarCategory": "Düzenli Geçmiş Zaman Fiilleri (rented, stayed)",
                "contextNote": "Tatil konaklaması.",
                "breakdownNote": "Rent -> rented ve stay -> stayed düzenli fiillerdir."
            },
            {
                "en": "We saw majestic dolphins in the ocean, took dozens of photos, and bought handmade gifts.",
                "tr": "Okyanusta görkemli yunuslar gördük, düzinelerce fotoğraf çektik ve el yapımı hediyeler aldık.",
                "highlightedWords": ["saw", "took", "bought"],
                "grammarCategory": "Düzensiz Geçmiş Zaman Fiilleri (saw, took, bought)",
                "contextNote": "Tatil deneyimleri.",
                "breakdownNote": "See -> saw, take -> took, buy -> bought ardışık düzensiz fiillerdir."
            },
            {
                "en": "We didn't use our smartphones during dinner because the atmosphere was magical.",
                "tr": "Atmosfer büyüleyici olduğu için akşam yemeği boyunca akıllı telefonlarımızı kullanmadık.",
                "highlightedWords": ["didn't use", "was magical"],
                "grammarCategory": "Olumsuzluk ve Durum Entegrasyonu (didn't + V1 & was)",
                "contextNote": "Farkındalık ve akşam yemeği ortamı.",
                "breakdownNote": "Didn't use (didn't + V1) ve was magical (to be geçmiş hali) birleşimidir."
            }
        ],
        "vocabulary": [
            {"word": "Picturesque", "phonetic": "/ˌpɪk.tʃərˈesk/", "partOfSpeech": "adjective", "meaningTr": "Resim gibi, kartpostal gibi güzel", "exampleSentence": "We stayed in a picturesque mountain town."},
            {"word": "Breathtaking", "phonetic": "/ˈbreθˌteɪ.kɪŋ/", "partOfSpeech": "adjective", "meaningTr": "Nefes kesici, büyüleyici", "exampleSentence": "The coastal view was breathtaking."},
            {"word": "Memorable", "phonetic": "/ˈmem.ər.ə.bəl/", "partOfSpeech": "adjective", "meaningTr": "Unutulmaz, hatırda kalıcı", "exampleSentence": "It was a truly memorable experience."},
            {"word": "Hospitable", "phonetic": "/hɒsˈpɪt.ə.bəl/", "partOfSpeech": "adjective", "meaningTr": "Misafirperver", "exampleSentence": "The local villagers were very hospitable."}
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
            "availableWords": ["We", "had", "a", "wonderful", "vacation", "last", "summer", "and", "we", "swam", "in", "the", "Mediterranean", "Sea", "every", "day", "have", "swimmed"],
            "explanation": "We had (düzensiz) + last summer + we swam (düzensiz) tatil anlatımı cümle yapısı."
        },
        "summaryTakeaways": [
            "Tatil anlatımına zaman belirteci ve mekan girişiyle başlanır (Last summer I went...).",
            "Düzenli (-ed) ve düzensiz (V2) fiiller ardışık olarak kullanılır.",
            "Didn't + V1 ve wasn't/weren't ile olumsuzluklar ve durumlar zenginleştirilir.",
            "Anlatı kişisel bir genel duygu cümlesiyle (It was unforgettable) tamamlanır."
        ]
    }
}
