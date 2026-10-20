#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Builder for Module 5 (Lessons 41 to 50)
Level: A1
100% bespoke pedagogy, zero generic templates.
"""

import json
import os
import sys
sys.path.append('.')

def generate_module5():
    from scripts.builders.build_module5_part1 import module5_data
    
    # 43: Who (Kim) ve Whose (Kimin) Kullanımı
    module5_data[43] = {
        "skillType": "grammar",
        "concreteCompetency": "A1 standardında insanları sormak için 'Who' (Kim) ve aidiyet/sahiplik sormak için 'Whose' (Kimin) soru kelimelerini hatasız ayırt edebilmek; 'Who's' ile 'Whose' sesteş karışıklığını giderebilmek.",
        "whyItMatters": "Sosyal bir ortamda birinin kim olduğunu sormak ('Who is that?') veya kayıp bir eşyanın kime ait olduğunu öğrenmek ('Whose phone is this?') gündelik iletişimin en temel gereksinimidir.",
        "linguisticLogic": "İngilizcede 'Who' insan şahıslarını sorar. İki türlü sorulabilir: 1) Özne olarak (Who lives here? - Kim burada yaşıyor?). 2) Nesne olarak (Who do you know? - Kimi tanıyorsun?). 'Whose' ise sahiplik sıfatıdır; arkasından genellikle nitelediği isim gelir: 'Whose bag is this?'. En kritik tuzak: 'Who's' (Who is kısaltması) ile 'Whose' (Kimin) aynı telaffuza (/huːz/) sahiptir ancak anlamları tamamen farklıdır.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: 'WHO' ile Kişi Sorma (Who is / Who are)",
                "content": "Bir kişinin kimliğini sormak için 'Who is [Kişi]?' (Who's...) kullanılır: 'Who is your English teacher?' (İngilizce öğretmenin kim?), 'Who are those people?' (Şu insanlar kim?).",
                "formula": "Who + is / are + [Özne]?",
                "keyPhrase": "Who is your manager? | Who is that man?",
                "subPoints": [
                    "Tekillerde 'Who is' (Who's /huːz/), çoğullarda 'Who are' kullanılır.",
                    "Cevapta kişi ve sıfatı belirtilir: 'She is my sister.'"
                ],
                "rationale": "İnsanları tanıtma ve üçüncü şahısları sorgulama refleksini oluşturur."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: 'WHOSE' ile Sahiplik ve Aidiyet Sorma",
                "content": "Bir nesnenin kime ait olduğunu sormak için 'Whose' kullanılır. Genellikle 'Whose + İsim + is/are...?' yapısı kurulur: 'Whose jacket is this?' (Bu ceket kimin?), 'Whose keys are these?' (Bu anahtarlar kimin?).",
                "formula": "Whose + [İsim] + is / are + [this / that / these / those]?",
                "keyPhrase": "Whose coat is this? | Whose glasses are on the table?",
                "subPoints": [
                    "Cevap verirken iyelik eki (-'s) veya iyelik zamiri (mine, yours, his, hers) kullanılır: 'It's Mark's coat' veya 'It's mine.'",
                    "İsim çoğulsa 'are' kullanılır: 'Whose shoes are these?'"
                ],
                "rationale": "Mülkiyet ve eşya sahipliği kavramını pekiştirir."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Sesteş Tuzak: Who's vs Whose",
                "content": "Kulağa tamamen aynı gelen iki kelimeyi yazıda ve anlamda asla karıştırmayın: 1) 'Who's' = 'Who is' veya 'Who has' kısaltmasıdır (Kimdir). 2) 'Whose' = 'Kimin' anlamına gelen sahiplik kelimesidir.",
                "formula": "Who's = Who is (Kimdir)  <-->  Whose = Sahiplik (Kimin)",
                "keyPhrase": "Who's coming tonight? (Kim geliyor?) vs Whose turn is it? (Kimin sırası?)",
                "subPoints": [
                    "Kontrol yöntemi: Cümleye 'Who is' koyun; mantıklıysa kesmeli 'Who's', anlamsızsa 'Whose' yazılır.",
                    "*Who's car is this? YANLIŞTIR -> Whose car is this? DOĞRUDUR."
                ],
                "rationale": "İngilizce yazımda ve testlerde en sık yapılan ortografik hatayı kökten çözer."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Who's ile Whose Ayırt Etme Kuralı",
                "formula": "Who's [adjectival/verb] = Who is | Whose + Noun = Kimin",
                "explanation": "Eğer kelimeden sonra bir isim geliyorsa (car, pen, book) 'Whose' kullanılır. Eğer kelimeden sonra sıfat veya fiil geliyorsa 'Who's' (Who is) kullanılır.",
                "exampleSnippet": "Who's that girl? (O kız kim?) | Whose bag is that? (O çanta kimin?)",
                "tipNote": "İsimden önce daima 'Whose' arayın!"
            },
            {
                "ruleTitle": "'Whose' Sorusuna Cevap Verme Kalıpları",
                "formula": "It is + [İsim]'s  VEYA  It is + [İyelik Zamiri: mine/yours/hers]",
                "explanation": "'Whose pen is this?' sorusuna 'It is Ali's pen' veya doğrudan 'It is Ali's' ya da 'It is mine' diyerek yanıt verilir.",
                "cautionNote": "Cevapta özne zamiri kullanılmaz: *It is he YANLIŞTIR; 'It is his' denir."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "Who's notebook is on the table?",
                "correctExample": "Whose notebook is on the table?",
                "rootCause": "'Who is' (Who's) ile iyelik bildiren 'Whose' kelimelerini karıştırmak.",
                "memoryTip": "Defter bir kişiye aittir, kimin olduğunu soruyorsan 'WHOSE' seç!"
            },
            {
                "wrongExample": "Who do you live with him?",
                "correctExample": "Who do you live with?",
                "rootCause": "Soru kelimesi 'Who' varken cümlenin sonuna gereksizce zamir (him) eklemek.",
                "memoryTip": "Edat sonda yalnız kalır; arkasına tekrar zamir ekleme: Who do you live WITH?"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Ofiste Unutulan Eşyayı Sahibine Ulaştırma",
            "description": "Toplantı odasında unutulan bir dizüstü bilgisayarın sahibi aranır.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Emma", "textEn": "Excuse me, whose laptop is this on the conference table?", "textTr": "Affedersiniz, konferans masasındaki bu dizüstü bilgisayar kimin?"},
                {"speaker": "Jack", "textEn": "I think it is Sarah's. Who's the person in the red jacket next to the printer?", "textTr": "Sanırım Sarah'nın. Yazıcının yanındaki kırmızı ceketli kişi kim?"},
                {"speaker": "Emma", "textEn": "That's Lisa, our new project assistant.", "textTr": "O Lisa, yeni proje asistanımız."},
                {"speaker": "Jack", "textEn": "Alright, let's ask Sarah if this is her computer.", "textTr": "Pekala, Sarah'ya bu bilgisayarın onun olup olmadığını soralım."}
            ],
            "culturalNote": "İş ortamında kayıp bir eşya bulunurken 'Whose is this?' yerine eşyanın adıyla 'Whose laptop is this?' demek daha nettir."
        },
        "contrastiveAnalysis": {
            "title": "Kim vs Kimin (Who vs Whose)",
            "englishConcept": "Who (Kişi kimliği) vs Whose (Mülkiyet/Aidiyet)",
            "turkishDifference": "Türkçede 'Kim' kelimesine '-in' tamlayan eki eklenerek 'Kimin' yapılır. İngilizcede ise kelime kökü değişerek 'Whose' olur.",
            "directComparison": [
                {
                    "context": "Kişiyi sorma",
                    "en": "Who is the project manager?",
                    "trMeaning": "Proje müdürü kim?",
                    "commonErrorTr": "Karışmaz.",
                    "whyItMatters": "Kişi tanımlama."
                },
                {
                    "context": "Aidiyet sorma",
                    "en": "Whose project is this?",
                    "trMeaning": "Bu proje kimin?",
                    "commonErrorTr": "*Who project is this?",
                    "whyItMatters": "Who tek başına sahiplik soramaz; Whose şarttır."
                }
            ]
        },
        "memoryHook": "KİMLİK vs AİDİYET: Kişiyi soruyorsan WHO, eşyanın sahibini arıyorsan WHOSE!",
        "examples": [
            {
                "en": "Who is your favorite actor?",
                "tr": "En sevdiğin aktör kim?",
                "highlightedWords": ["Who is", "favorite actor"],
                "grammarCategory": "Who + to be",
                "contextNote": "Kişi kimliği sorma.",
                "breakdownNote": "Who + is + your favorite actor (tamlayıcı öbek)."
            },
            {
                "en": "Whose umbrella is this by the door?",
                "tr": "Kapının yanındaki bu şemsiye kimin?",
                "highlightedWords": ["Whose umbrella", "is this"],
                "grammarCategory": "Whose + isim",
                "contextNote": "Kayıp eşya aidiyeti.",
                "breakdownNote": "Whose umbrella (soru öbeği) + is this + yer edatı."
            },
            {
                "en": "Who do you usually travel with on vacations?",
                "tr": "Tatillerde genellikle kiminle seyahat edersin?",
                "highlightedWords": ["Who do you", "travel with"],
                "grammarCategory": "Who + edat sonda",
                "contextNote": "Eşlikçi sorma.",
                "breakdownNote": "Who + do + you + usually + travel + with (edat sonda)."
            }
        ],
        "vocabulary": [
            {"word": "Belong", "phonetic": "/bɪˈlɒŋ/", "partOfSpeech": "verb", "meaningTr": "Ait olmak", "exampleSentence": "Who does this belong to?"},
            {"word": "Colleague", "phonetic": "/ˈkɒl.iːɡ/", "partOfSpeech": "noun", "meaningTr": "Meslektaş", "exampleSentence": "Who is your new colleague?"},
            {"word": "Umbrella", "phonetic": "/ʌmˈbrel.ə/", "partOfSpeech": "noun", "meaningTr": "Şemsiye", "exampleSentence": "Whose umbrella is this?"},
            {"word": "Passport", "phonetic": "/ˈpɑːs.pɔːt/", "partOfSpeech": "noun", "meaningTr": "Pasaport", "exampleSentence": "Whose passport is on the counter?"}
        ],
        "quickCheck": {
            "question": "Masada unutulan bir cüzdanın kime ait olduğunu sormak için hangi cümle KESİNLİKLE doğrudur?",
            "options": [
                "Whose wallet is this on the table?",
                "Who's wallet is this on the table?",
                "Who wallet is this on the table?",
                "Whom wallet is this on the table?"
            ],
            "correctIndex": 0,
            "explanation": "Sahiplik ve aidiyet sormak için ismin hemen önüne 'Whose' gelir: 'Whose wallet is this?'"
        },
        "exercise": {
            "prompt": "Cümledeki boşluğu anlam ve kurala göre tamamlayın:",
            "sentence": "___ calling at this late hour?",
            "options": ["Who's", "Whose", "Who", "Whom"],
            "correctAnswer": "Who's",
            "hint": "Cümle 'Kim arıyor?' anlamındadır; 'Who is' ifadesinin kısaltması aranmaktadır.",
            "explanation": "'Who is calling' ifadesinin kısaltılmış doğru biçimi kesme işaretli 'Who's'dur."
        },
        "sentenceBuilder": {
            "promptTr": "Resepsiyon masasındaki bu anahtarlar kimin?",
            "targetEn": "Whose keys are these on the reception desk",
            "availableWords": ["Whose", "keys", "are", "these", "on", "the", "reception", "desk", "Who's", "is", "this"],
            "explanation": "Soru kelimesi (Whose) + çoğul isim (keys) + çoğul fiil (are) + işaret zamiri (these) + yer öbeği (on the reception desk)."
        },
        "summaryTakeaways": [
            "'Who' kişilerin kimliğini sormak için kullanılır: 'Who is he?'.",
            "'Whose' bir nesnenin kime ait olduğunu sorgulamak için kullanılır: 'Whose book is this?'.",
            "'Who's' ile 'Whose' sesteştir ancak 'Who's' = 'Who is' demektir.",
            "'Whose' sorusunun cevabında iyelik eki (-'s) veya iyelik zamirleri (mine, yours, his) kullanılır."
        ]
    }

    # 44: WH- Soruları: When (Ne Zaman) ve What Time (Saat Kaçta)
    module5_data[44] = {
        "skillType": "grammar",
        "concreteCompetency": "A1 standardında genel zamanı sormak için 'When' (Ne zaman) ile kesin saat noktasını sormak için 'What time' (Saat kaçta) kalıplarını doğru ayırt edebilmek; yanıtlarda 'at', 'on', 'in' zaman edatlarını kuralına göre kullanabilmek.",
        "whyItMatters": "Randevuları kaçırmamak, uçak ve tren saatlerini öğrenmek, etkinlik günlerini planlamak zaman sorularını eksiksiz sormaya ve anlamaya bağlıdır.",
        "linguisticLogic": "İngilizcede zaman iki ölçekte sorulur: 1) Geniş zaman dilimleri (gün, ay, mevsim, yıl veya genel zaman): 'WHEN'. Örnek: 'When is your birthday?' (Doğum günün ne zaman? - In July / On Friday). 2) Saatin gösterdiği kesin nokta: 'WHAT TIME'. Örnek: 'What time does the train leave?' (Tren saat kaçta kalkıyor? - At 3:15). Her iki soru kalıbı da eylem cümlelerinde 'do/does', durum cümlelerinde 'is/are' yardımcı fiilleriyle kurulur.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: 'When' ile Genel Zamanı Sorma",
                "content": "'When' geniş bir zaman aralığını kapsar; bir olayın hangi gün, ay veya tarihte gerçekleştiğini sorar. Formül: When + is/are (durum) veya When + do/does (eylem).",
                "formula": "When + is/are + [Özne]?  |  When + do/does + [Özne] + [Fiil]?",
                "keyPhrase": "When is your birthday? | When do you go to gym?",
                "subPoints": [
                    "Cevap gün ise 'on' (on Monday), ay veya mevsim ise 'in' (in June, in summer) edatı kullanılır.",
                    "'When' kesin saat için de genel olarak kullanılabilir ancak saat vurgusu varsa 'What time' tercih edilir."
                ],
                "rationale": "Zaman hiyerarşisinde geniş ölçekli planlamayı yönetmeyi sağlar."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: 'What Time' ile Kesin Saat Noktası Sorma",
                "content": "Doğrudan saati ve dakikayı öğrenmek istediğinizde 'What time' kullanılır. 'What time is it?' (Saat kaç?) doğrudan saati sorarken; 'What time does the store open?' bir eylemin başlayacağı kesin saati sorar.",
                "formula": "What time + is it?  |  What time + do/does + [Özne] + [Fiil]?",
                "keyPhrase": "What time does the film start? | What time do you wake up?",
                "subPoints": [
                    "Cevap verirken kesin saatlerin önüne DAİMA 'AT' edatı gelir: 'At half past seven', 'At 9 o'clock'.",
                    "Asla *in 9 o'clock veya *on 9 o'clock denmez!"
                ],
                "rationale": "Dakik programlama ve randevu teyidinde hayati doğruluk sağlar."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Cevaplarda 'IN - ON - AT' Edat Matrisi",
                "content": "Zaman sorularına yanıt verirken doğru edatı seçin: 1) AT: Kesin saatler ve gece (at 5:00, at noon, at night). 2) ON: Günler ve tarihler (on Friday, on 15th May, on my birthday). 3) IN: Aylar, mevsimler, yıllar ve gün bölümleri (in August, in summer, in 2025, in the morning).",
                "formula": "AT + Saat  |  ON + Gün/Tarih  |  IN + Ay/Yıl/Mevsim",
                "keyPhrase": "At 8:00 AM  |  On Monday  |  In September",
                "subPoints": [
                    "Günün bölümlerinde: in the morning, in the afternoon, in the evening; ANCAK 'at night'!",
                    "Hafta sonu İngiliz İngilizcesinde 'at the weekend', Amerikan İngilizcesinde 'on the weekend' olarak kullanılır."
                ],
                "rationale": "İngilizcenin en temel üç zaman edatını mantıksal bir üçgenle kalıcı kılar."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "When vs What Time Ayrımı",
                "formula": "When = Hangi gün/ay/zaman  <-->  What time = Saat kaçta (Kesin saat)",
                "explanation": "'When does the meeting start?' sorusuna hem 'On Wednesday' hem 'At 10:00' denebilir. Ancak 'What time does the meeting start?' sorusuna YALNIZCA saatle (At 10:00) yanıt verilebilir.",
                "exampleSnippet": "When do you arrive? - On Friday. | What time do you arrive? - At 4 PM.",
                "tipNote": "Saat öğrenmek istiyorsanız doğrudan 'What time' sorun."
            },
            {
                "ruleTitle": "Saatlerin Önüne 'AT' Edatı Kuralı",
                "formula": "AT + [Saat / o'clock / dakika]",
                "explanation": "Belirli bir eylemin saatini söylerken önüne daima 'at' edatı konur. Edatsız bırakmak veya 'in' koymak yanlıştır.",
                "cautionNote": "*The class starts in 9 o'clock YANLIŞTIR; 'at 9 o'clock' DOĞRUDUR."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "The concert starts in 8 o'clock.",
                "correctExample": "The concert starts at 8 o'clock.",
                "rootCause": "Saat bildiren ifadenin önüne 'at' yerine 'in' edatı koyma hatası.",
                "memoryTip": "Saat bir noktadır; noktasal zamanlarda AT kullanılır: AT 8 o'clock!"
            },
            {
                "wrongExample": "What time you finish work?",
                "correctExample": "What time do you finish work?",
                "rootCause": "Soru cümlesinde 'do' yardımcı fiilini atlamak.",
                "memoryTip": "Zaman sorarken de yardımcı fiili unutma: What time DO you finish?"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Tren İstasyonunda Sefer Saati Öğrenme",
            "description": "Yolcu bilet gişesindeki görevliye trenin kalkış saatini ve varış gününü sorar.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Passenger", "textEn": "Excuse me, what time does the next express train to Oxford leave?", "textTr": "Affedersiniz, Oxford'a gidecek bir sonraki ekspres tren saat kaçta kalkıyor?"},
                {"speaker": "Agent", "textEn": "It departs promptly at ten past four from platform three.", "textTr": "Tam dördü on geçe üçüncü perondan kalkıyor."},
                {"speaker": "Passenger", "textEn": "And when does the exhibition in Oxford open?", "textTr": "Peki Oxford'daki sergi ne zaman açılıyor?"},
                {"speaker": "Agent", "textEn": "The exhibition opens on Thursday morning.", "textTr": "Sergi Perşembe sabahı açılıyor."}
            ],
            "culturalNote": "İngiltere'de tren seferleri için dakiklik çok önemlidir; kalkış saatleri daima 'at' ile belirtilir."
        },
        "contrastiveAnalysis": {
            "title": "Ne Zaman vs Saat Kaçta",
            "englishConcept": "When (Geniş aralık) vs What time (Saat noktası)",
            "turkishDifference": "Türkçede saat için 'Saat kaçta?' denir, İngilizce 'What time' bunu karşılar. 'Ne zaman' ise 'When' ile örtüşür.",
            "directComparison": [
                {
                    "context": "Kesin saat",
                    "en": "What time does the store close?",
                    "trMeaning": "Mağaza saat kaçta kapanıyor?",
                    "commonErrorTr": "Sorunsuz eşleşir.",
                    "whyItMatters": "Saat sormada standart kalıp."
                },
                {
                    "context": "Tarih/gün",
                    "en": "When is the next meeting?",
                    "trMeaning": "Sonraki toplantı ne zaman?",
                    "commonErrorTr": "Sorunsuz eşleşir.",
                    "whyItMatters": "Gün/tarih öğrenmede standart kalıp."
                }
            ]
        },
        "memoryHook": "ZAMAN ÜÇGENİ: Geniş zamanlar WHEN ile, saatin kolları WHAT TIME ile sorulur; saat cevabında AT unutulmaz!",
        "examples": [
            {
                "en": "When does the spring semester begin?",
                "tr": "Bahar dönemi ne zaman başlıyor?",
                "highlightedWords": ["When does", "begin"],
                "grammarCategory": "When + does + eylem",
                "contextNote": "Tarih/dönem sorma.",
                "breakdownNote": "When + does + the spring semester (özne) + begin (yalın fiil)."
            },
            {
                "en": "What time do you usually eat dinner with your family?",
                "tr": "Ailenle genellikle saat kaçta akşam yemeği yersin?",
                "highlightedWords": ["What time do you", "eat dinner"],
                "grammarCategory": "What time + do + eylem",
                "contextNote": "Rutin saat sorgulama.",
                "breakdownNote": "What time + do + you + usually + eat dinner + edat öbeği."
            },
            {
                "en": "Our international flight lands at a quarter to six in the evening.",
                "tr": "Uluslararası uçuşumuz akşam altıya çeyrek kala iniyor.",
                "highlightedWords": ["lands at a quarter to six", "in the evening"],
                "grammarCategory": "at + saat, in the evening",
                "contextNote": "Kesin zaman bildirimi.",
                "breakdownNote": "Özne + fiil (lands) + at [saat] + in the evening."
            }
        ],
        "vocabulary": [
            {"word": "Depart", "phonetic": "/dɪˈpɑːt/", "partOfSpeech": "verb", "meaningTr": "Kalkmak, hareket etmek", "exampleSentence": "The bus departs at nine."},
            {"word": "Arrive", "phonetic": "/əˈraɪv/", "partOfSpeech": "verb", "meaningTr": "Varmak, ulaşmak", "exampleSentence": "When do you arrive in London?"},
            {"word": "Semester", "phonetic": "/sɪˈmes.tər/", "partOfSpeech": "noun", "meaningTr": "Dönem, yarıyıl", "exampleSentence": "The semester begins in September."},
            {"word": "Appointment", "phonetic": "/əˈpɔɪnt.mənt/", "partOfSpeech": "noun", "meaningTr": "Randevu", "exampleSentence": "What time is your doctor appointment?"}
        ],
        "quickCheck": {
            "question": "Arkadaşınıza akşamki filmin tam olarak saat kaçta başladığını sormak için en uygun kalıp hangisidir?",
            "options": [
                "What time does the movie start?",
                "When is the movie start?",
                "What time the movie starts?",
                "At what time does the movie starts?"
            ],
            "correctIndex": 0,
            "explanation": "Eylem fiili (start) ve tekil özne (the movie) ile saat sorarken 'What time does the movie start?' denir."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun edatı seçin:",
            "sentence": "Our weekly project meeting takes place ___ Friday morning at ten.",
            "options": ["on", "in", "at", "to"],
            "correctAnswer": "on",
            "hint": "Cümlede gün adı (Friday) geçmektedir. Günlerin önünde hangi edat kullanılır?",
            "explanation": "Haftanın günlerinden (Friday, Monday vb.) önce daima 'on' edatı kullanılır."
        },
        "sentenceBuilder": {
            "promptTr": "Sabahları ilk dersiniz saat kaçta başlıyor?",
            "targetEn": "What time does your first lesson start in the morning",
            "availableWords": ["What", "time", "does", "your", "first", "lesson", "start", "in", "the", "morning", "do", "at", "is"],
            "explanation": "Soru kalıbı (What time) + yardımcı fiil (does) + özne grubu (your first lesson) + yalın fiil (start) + zaman öbeği (in the morning)."
        },
        "summaryTakeaways": [
            "'When' genel tarihleri, ayları ve günleri sormada kullanılır.",
            "'What time' kesin saati öğrenmek için özelleşmiş soru kalıbıdır.",
            "Saat yanıtlarında daima 'AT' (at 8:30) edatı yer alır.",
            "Günlerde 'ON' (on Sunday), aylarda ve yıllarda 'IN' (in May, in 2026) kullanılır."
        ]
    }

    # 45: WH- Soruları: Why (Neden) ve Because ile Sebep Bildirme
    module5_data[45] = {
        "skillType": "grammar",
        "concreteCompetency": "A1 standardında eylemlerin ve durumların nedenini sormak için 'Why' (Neden / Niçin) soru kelimesini ve gerekçe sunmak için 'Because' (Çünkü) bağlacını hatasız kullanabilmek.",
        "whyItMatters": "Bir durumun, kararın veya duygunun gerekçesini sormak ve açıklamak iletişimi basit kelimelerden derin fikir alışverişine taşıyan köprüdür.",
        "linguisticLogic": "İngilizcede sebep sormak için 'WHY' başa gelir: 'Why are you late?' (Neden geç kaldın?), 'Why do you study English?' (Neden İngilizce öğreniyorsun?). Bu sorulara yanıt verirken gerekçe bildiren 'BECAUSE' bağlacı kullanılır: 'Because the traffic was terrible' (Çünkü trafik berbattı). Türkçe 'Neden... Çünkü' çifti, İngilizcede tam olarak 'Why... Because' ikilisiyle karşılanır.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: 'Why' ile Sebep Sorma Dizilimi",
                "content": "'Why' soru kelimesi en başa gelir, ardından kural gereği yardımcı fiil (is/are veya do/does) ve özne sıralanır. Formül: Why + is/are + Özne + Sıfat? VEYA Why + do/does + Özne + Fiil?",
                "formula": "Why + is/are + [Özne] + Sıfat?  |  Why + do/does + [Özne] + [Fiil]?",
                "keyPhrase": "Why are you tired? | Why do you wake up so early?",
                "subPoints": [
                    "Why are they sad? (Neden üzgünler? - Durum sorusu)",
                    "Why does she work late? (Neden geç saatlere kadar çalışıyor? - Eylem sorusu)"
                ],
                "rationale": "Neden-sonuç sorgusunun dilbilgisel omurgasını oturtur."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: 'Because' ile Gerekçe Açıklama",
                "content": "'Why' ile sorulan bir soruya yanıt verirken söze 'Because...' ile başlanır veya ana cümlenin ardına eklenir. 'Because' kendisinden sonra tam bir cümle (Özne + Fiil + Nesne) ister.",
                "formula": "Because + [Özne] + [Fiil] + [Nesne / Tamamlayıcı]",
                "keyPhrase": "Because I have an exam tomorrow. | Because it is very cold.",
                "subPoints": [
                    "Kısa yanıtlarda: 'Why are you happy?' -> 'Because I passed my test.'",
                    "Tam cümlede: 'I study English because I want to work abroad.'"
                ],
                "rationale": "Cümleleri sebep-sonuç ilişkisiyle birbirine bağlama yetisi kazandırır."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Cümle İçi Bağlaç Görevi (Sebep Cümlesi)",
                "content": "'Because' iki bağımsız cümleyi birbirine bağlayan bir bağlaçtır (conjunction). Sonuç cümlesi önce gelir, ardından 'because' ve sebep cümlesi gelir: [Sonuç] + because + [Sebep]. Örnek: 'We stay at home because it is raining.'",
                "formula": "[Sonuç Cümlesi] + because + [Sebep Cümlesi]",
                "keyPhrase": "I drink water because I am thirsty. | She sleeps early because she is tired.",
                "subPoints": [
                    "Cümle başında da gelebilir: 'Because it is raining, we stay at home.' (Virgülle ayrılır).",
                    "Konuşma dilinde 'because' bazen 'cuz' / 'cause' şeklinde kısaltılır, ancak resmi yazıda 'because' yazılır."
                ],
                "rationale": "Bileşik cümle kurmanın ilk adımı olan sebep bağlacını öğretir."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Why ve Because İkilisi İlkesi",
                "formula": "Soru: WHY ...?  -->  Cevap: BECAUSE + [Tam Cümle]",
                "explanation": "'Why' sorusuna Türkçe 'şunun için' diyerek tek başına isimle yanıt verilemez. 'Because' ardına mutlaka özne ve yüklemli tam bir cümle alır.",
                "exampleSnippet": "Why are you late? - Because the bus was delayed.",
                "tipNote": "'Why' sorusuna 'Because' ile cevap vermek en doğal refleksiniz olmalıdır."
            },
            {
                "ruleTitle": "Soru Diziliminde Yardımcı Fiil Şartı",
                "formula": "Why + [Yardımcı Fiil] + Özne + Fiil",
                "explanation": "Türkçe düşünerek *Why you study English? denemez. 'Why DO you study English?' şeklinde yardımcı fiil öznenin önüne konmalıdır.",
                "cautionNote": "*Why you are sad? YANLIŞTIR; 'Why ARE you sad?' DOĞRUDUR."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "Why you are late today?",
                "correctExample": "Why are you late today?",
                "rootCause": "Soru cümlesinde 'to be' yardımcı fiilini öznenin ardına koymak.",
                "memoryTip": "Soruda yardımcı fiil başa koşar: Why ARE you late?"
            },
            {
                "wrongExample": "Why do you run? - For I am in a hurry.",
                "correctExample": "Why do you run? - Because I am in a hurry.",
                "rootCause": "Sebep bildirmek için Türkçedeki 'için' kelimesini doğrudan 'for' ile çevirmeye çalışmak.",
                "memoryTip": "'Why' sorusuna 'For' değil, 'BECAUSE' ile yanıt verilir!"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "İş Yerinde Proje Gecikmesi Hakkında Konuşma",
            "description": "Yönetici ve çalışan toplantıya neden geç kalındığını görüşür.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Manager", "textEn": "Hello Alex, why are you out of breath?", "textTr": "Merhaba Alex, neden nefes nefesesin?"},
                {"speaker": "Alex", "textEn": "Because the elevator is out of order and I walked up the stairs.", "textTr": "Çünkü asansör arızalı ve merdivenlerden yukarı yürüdüm."},
                {"speaker": "Manager", "textEn": "I see. And why does the team need more time for the report?", "textTr": "Anlıyorum. Peki ekip neden rapor için daha fazla zamana ihtiyaç duyuyor?"},
                {"speaker": "Alex", "textEn": "Because we are waiting for the final financial figures.", "textTr": "Çünkü son mali rakamları bekliyoruz."}
            ],
            "culturalNote": "İş ortamında 'Why' sorusu suçlama gibi algılanmaması için nazik bir ses tonuyla sorulur."
        },
        "contrastiveAnalysis": {
            "title": "Neden / Niçin vs Çünkü (Why vs Because)",
            "englishConcept": "Why (Sebep sorusu) -> Because (Sebep gerekçesi)",
            "turkishDifference": "Türkçede 'Neden... Çünkü' çiftiyle birebir aynı mantıkta çalışır. Tek fark söz diziminde yardımcı fiilin başa geçmesidir.",
            "directComparison": [
                {
                    "context": "Sebep sorma",
                    "en": "Why do you like this job?",
                    "trMeaning": "Bu işi neden seviyorsun?",
                    "commonErrorTr": "*Why you like this job?",
                    "whyItMatters": "'do' yardımcı fiili soruda şarttır."
                },
                {
                    "context": "Gerekçe sunma",
                    "en": "Because it is very creative.",
                    "trMeaning": "Çünkü çok yaratıcı.",
                    "commonErrorTr": "Sorunsuz çevrilir.",
                    "whyItMatters": "'Because' tam cümleyle bağlanır."
                }
            ]
        },
        "memoryHook": "SEBEP ÇİFTİ: 'Why' soruyu açar, 'Because' cevabı bağlar!",
        "examples": [
            {
                "en": "Why is the shop closed today?",
                "tr": "Dükkan bugün neden kapalı?",
                "highlightedWords": ["Why is", "closed today"],
                "grammarCategory": "Why + is + durum",
                "contextNote": "Durum gerekçesi sorma.",
                "breakdownNote": "Why + is + the shop (özne) + closed + zaman."
            },
            {
                "en": "She eats healthy food because she wants to stay fit.",
                "tr": "Sağlıklı yiyecekler yiyor çünkü zinde kalmak istiyor.",
                "highlightedWords": ["because she wants"],
                "grammarCategory": "because + sebep cümlesi",
                "contextNote": "Bileşik sebep cümlesi.",
                "breakdownNote": "Sonuç cümlesi + because + sebep cümlesi."
            },
            {
                "en": "Why do they study German every evening?",
                "tr": "Neden her akşam Almanca çalışıyorlar?",
                "highlightedWords": ["Why do they study"],
                "grammarCategory": "Why + do + eylem",
                "contextNote": "Alışkanlığın nedenini sorma.",
                "breakdownNote": "Why + do + they + study + nesne + zaman."
            }
        ],
        "vocabulary": [
            {"word": "Reason", "phonetic": "/ˈriː.zən/", "partOfSpeech": "noun", "meaningTr": "Sebep, gerekçe", "exampleSentence": "What is the reason for this decision?"},
            {"word": "Tired", "phonetic": "/taɪəd/", "partOfSpeech": "adjective", "meaningTr": "Yorgun", "exampleSentence": "Why are you so tired?"},
            {"word": "Healthy", "phonetic": "/ˈhel.θi/", "partOfSpeech": "adjective", "meaningTr": "Sağlıklı", "exampleSentence": "He eats healthy meals."},
            {"word": "Abroad", "phonetic": "/əˈbrɔːd/", "partOfSpeech": "adverb", "meaningTr": "Yurt dışında, yurt dışına", "exampleSentence": "I want to live abroad."}
        ],
        "quickCheck": {
            "question": "'Why are you learning English?' sorusuna verilecek en uygun ve dilbilgisel olarak doğru yanıt hangisidir?",
            "options": [
                "Because I want to work in an international company.",
                "For I want to work in an international company.",
                "Why I want to work in an international company.",
                "Because of I want to work in an international company."
            ],
            "correctIndex": 0,
            "explanation": "'Why' sorusuna gerekçe sunarken tam cümle önüne 'Because' bağlacı gelir."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun soru kelimesini yerleştirin:",
            "sentence": "___ do you carry an umbrella when the sky is completely clear?",
            "options": ["Why", "Where", "Who", "Whose"],
            "correctAnswer": "Why",
            "hint": "Cümle bir mantıksızlığın veya eylemin nedenini sormaktadır ('Gökyüzü tamamen açıkken neden...?').",
            "explanation": "Bir eylemin gerekçesini veya amacını sormak için 'Why' soru kelimesi kullanılır."
        },
        "sentenceBuilder": {
            "promptTr": "Ben erken kalkıyorum çünkü sabahları yürümeyi seviyorum.",
            "targetEn": "I wake up early because I like walking in the morning",
            "availableWords": ["I", "wake", "up", "early", "because", "like", "walking", "in", "the", "morning", "why", "for", "is"],
            "explanation": "Sonuç cümlesi (I wake up early) + bağlaç (because) + sebep cümlesi (I like walking in the morning)."
        },
        "summaryTakeaways": [
            "'Why' durum veya eylemlerin nedenini sorgulayan temel soru sözcüğüdür.",
            "Soruda 'Why'dan hemen sonra yardımcı fiil (is/are veya do/does) gelir.",
            "'Because' gerekçe bildirir ve ardına daima tam bir cümle alır.",
            "İki cümle 'because' ile bağlandığında sonuç önce, gerekçe sonra gelir."
        ]
    }

    # 46: WH- Soruları: How (Nasıl) ve Durum Sorma
    module5_data[46] = {
        "skillType": "grammar",
        "concreteCompetency": "A1 standardında durum, hal-hatır, yöntem ve ulaşım şeklini sormak için 'How' (Nasıl) soru kelimesini ('How are you?', 'How do you go to work?') hatasız kullanabilmek ve 'by' ulaşım edatıyla yanıtlayabilmek.",
        "whyItMatters": "Sosyal ilişkilerde birinin halini hatırını sormak ('How are you?'), bir işin nasıl yapıldığını öğrenmek veya yol tarifi almak 'How' kelimesiyle mümkündür.",
        "linguisticLogic": "İngilizcede 'How' iki temel sahası olan çok işlevli bir soru sözcüğüdür: 1) Durum ve Nitelik sorma: 'How are you?' (Nasılsın? - I am fine), 'How was the film?' (Film nasıldı? - It was great). 2) Yöntem ve Ulaşım sorma: 'How do you go to school?' (Okula nasıl gidersin? - By bus). Ulaşım araçlarıyla 'by' edatı kullanılır: by car, by bus, by train, by plane; ANCAK yürüyerek gitmek 'on foot' kalıbıdır.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: Hal-Hatır ve Durum Sorma (How + to be)",
                "content": "Birinin sağlığını, keyfini veya bir şeyin niteliğini sormak için 'How is' (How's) veya 'How are' kullanılır: 'How are you?' (Nasılsın?), 'How is your new job?' (Yeni işin nasıl?), 'How are your parents?' (Anne baban nasıl?).",
                "formula": "How + is / are + [Özne]?",
                "keyPhrase": "How are you? - I'm good, thanks! | How is the weather?",
                "subPoints": [
                    "How's everything? (Her şey nasıl gidiyor? - Samimi kalıp)",
                    "How's life? (Hayat nasıl?)"
                ],
                "rationale": "Evrensel sosyal karşılama ve sohbet başlatma refleksidir."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: Yöntem ve Eylem Biçimi Sorma (How + do/does)",
                "content": "Bir eylemin hangi yöntemle yapıldığını sormak için 'do/does' yardımcı fiiliyle soru kurulur: 'How do you spell your surname?' (Soyadını nasıl kodlarsın?), 'How do you cook this fish?' (Bu balığı nasıl pişirirsin?).",
                "formula": "How + do/does + [Özne] + [Yalın Fiil V1]?",
                "keyPhrase": "How do you pronounce this word? | How do you make coffee?",
                "subPoints": [
                    "'How do you say [Kelime] in English?' (Bu İngilizcede nasıl denir? - Dil öğrencinin cankurtaran sorusu)",
                    "Yardımcı fiil 'do' asla unutulmamalıdır."
                ],
                "rationale": "Uygulama ve yöntem bilgisi edinme becerisini kazandırır."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Ulaşım Şekli Sorma ve 'BY' Edatı",
                "content": "Bir yere nasıl gidildiğini sorarken 'How do you travel / commute / go...?' denir. Yanıtta taşıtların önüne 'BY' edatı gelir: by bus (otobüsle), by train (trenle), by car (arabayla). Ancak yürüyerek için 'ON FOOT' denir!",
                "formula": "How do you go to [Yer]? -> By bus / car / train  |  On foot (Yürüyerek)",
                "keyPhrase": "How do you go to work? - I go by metro.",
                "subPoints": [
                    "Taşıtla giderken araya 'a/the' girmez: by car (DOĞRU), *by the car (genellikle kullanılmaz).",
                    "*By foot YANLIŞTIR; ayaklar üzerinde yüründüğü için 'ON FOOT' denir!"
                ],
                "rationale": "Şehir içi ve seyahat iletişiminde doğru edat refleksini kurar."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Ulaşım Araçlarında 'BY' ve 'ON FOOT' Kuralı",
                "formula": "BY + [Taşıt Adı]  |  ON + FOOT",
                "explanation": "Tüm mekanik ulaşım vasıtalarında 'by' kullanılır (by taxi, by ferry, by plane). Sadece yürüyerek derken istisna olarak 'on foot' kalıbı kullanılır.",
                "exampleSnippet": "He goes to work by subway. / She walks on foot.",
                "cautionNote": "*By foot İngilizcede kabul edilmeyen yaygın bir öğrenci hatasıdır; 'on foot' deyin."
            },
            {
                "ruleTitle": "'How do you say...?' Cankurtaran Kalıbı",
                "formula": "How do you say [Türkçe Sözcük] in English?",
                "explanation": "Yabancı dil öğrenirken bilmediğiniz bir kelimeyi öğretmeninize sormanın en kibar ve doğru yolu bu kalıptır.",
                "tipNote": "Örnek: 'How do you say 'hesap' in English?' -> 'Bill'."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "I go to university by foot.",
                "correctExample": "I go to university on foot. / I walk to university.",
                "rootCause": "Taşıtlardaki 'by' edatını 'foot' (ayak) kelimesine de uygulama yanılgısı.",
                "memoryTip": "Ayakların üstünde yürürsün; 'ON' foot de!"
            },
            {
                "wrongExample": "How you spell your name?",
                "correctExample": "How do you spell your name?",
                "rootCause": "Soru cümlesinde 'do' yardımcı fiilini eksik bırakmak.",
                "memoryTip": "Soru yaparken 'How' ile özne arasına 'DO' koymayı unutma!"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Yeni Bir Şehirde İşe Ulaşımı Planlama",
            "description": "Yeni işe başlayan iki çalışma arkadaşı sabah işe nasıl geldiklerini konuşur.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Oliver", "textEn": "Good morning! How are you doing today?", "textTr": "Günaydın! Bugün nasılsın?"},
                {"speaker": "Selin", "textEn": "I am great, thank you! How do you travel to the office, Oliver?", "textTr": "Harikayım, teşekkürler! Sen ofise nasıl geliyorsun Oliver?"},
                {"speaker": "Oliver", "textEn": "I usually come by bicycle, but when it rains I take the bus.", "textTr": "Genellikle bisikletle gelirim ama yağmur yağdığında otobüse binerim."},
                {"speaker": "Selin", "textEn": "I live very close, so I always come on foot.", "textTr": "Ben çok yakın oturuyorum, bu yüzden her zaman yürüyerek gelirim."}
            ],
            "culturalNote": "Avrupa şehirlerinde işe bisikletle veya yürüyerek gitmek çok yaygındır."
        },
        "contrastiveAnalysis": {
            "title": "Nasıl Sorusu ve Ulaşım Edatları",
            "englishConcept": "How (Yöntem) + By [Taşıt] / On foot",
            "turkishDifference": "Türkçede taşıt isimlerinin sonuna '-le / -la' vasıta eki eklenir (otobüsle, arabayla, yürüyerek). İngilizcede ise kelimenin önüne bağımsız 'by' edatı gelir.",
            "directComparison": [
                {
                    "context": "Taşıtla ulaşım",
                    "en": "We travel by train.",
                    "trMeaning": "Trenle seyahat ediyoruz.",
                    "commonErrorTr": "*We travel with train.",
                    "whyItMatters": "Ulaşımda 'with' değil, 'by' kullanılır."
                },
                {
                    "context": "Yürüyerek",
                    "en": "I go on foot.",
                    "trMeaning": "Yürüyerek gidiyorum.",
                    "commonErrorTr": "*I go by foot.",
                    "whyItMatters": "'on foot' kalıplaşmış istisnadır."
                }
            ]
        },
        "memoryHook": "NASIL KURALI: Hal-hatır ve yöntem HOW ile sorulur, vasıtalar BY alır, ayaklar ON FOOT yürür!",
        "examples": [
            {
                "en": "How do you pronounce your family name?",
                "tr": "Soyadınızı nasıl telaffuz ediyorsunuz?",
                "highlightedWords": ["How do you pronounce"],
                "grammarCategory": "How + do + yöntem",
                "contextNote": "Telaffuz yöntemi sorma.",
                "breakdownNote": "How + do + you + pronounce + nesne."
            },
            {
                "en": "How is the weather in London right now?",
                "tr": "Londra'da hava şu an nasıl?",
                "highlightedWords": ["How is the weather"],
                "grammarCategory": "How + is + hava durumu",
                "contextNote": "Durum ve ortam sorma.",
                "breakdownNote": "How + is + the weather + yer + zaman."
            },
            {
                "en": "My brother goes to his office by metro every morning.",
                "tr": "Kardeşim her sabah ofisine metroyla gider.",
                "highlightedWords": ["by metro"],
                "grammarCategory": "by + ulaşım aracı",
                "contextNote": "Ulaşım yöntemi.",
                "breakdownNote": "Özne + fiil (goes) + yer + by metro + zaman."
            }
        ],
        "vocabulary": [
            {"word": "Commute", "phonetic": "/kəˈmjuːt/", "partOfSpeech": "verb", "meaningTr": "İşe gidip gelmek", "exampleSentence": "How do you commute to work?"},
            {"word": "Pronounce", "phonetic": "/prəˈnaʊns/", "partOfSpeech": "verb", "meaningTr": "Telaffuz etmek, sesletmek", "exampleSentence": "How do you pronounce this name?"},
            {"word": "Bicycle", "phonetic": "/ˈbaɪ.sɪ.kəl/", "partOfSpeech": "noun", "meaningTr": "Bisiklet", "exampleSentence": "He rides his bicycle to the park."},
            {"word": "Weather", "phonetic": "/ˈweð.ər/", "partOfSpeech": "noun", "meaningTr": "Hava durumu", "exampleSentence": "How is the weather today?"}
        ],
        "quickCheck": {
            "question": "'İşe yürüyerek giderim' cümlesinin en doğru İngilizce çevirisi hangisidir?",
            "options": [
                "I go to work on foot.",
                "I go to work by foot.",
                "I go to work with foot.",
                "I go to work for walking."
            ],
            "correctIndex": 0,
            "explanation": "Yürüyerek gitmek İngilizcede kalıplaşmış olarak 'on foot' edat grubuyla söylenir."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun edatı seçin:",
            "sentence": "Many professionals in Tokyo travel to work ___ high-speed train.",
            "options": ["by", "with", "on", "in"],
            "correctAnswer": "by",
            "hint": "Ulaşım araçlarının (train, bus, plane) önünde hangi edat yer alır?",
            "explanation": "Mekanik ulaşım vasıtalarında vasıta edatı 'by' kullanılır: 'by high-speed train'."
        },
        "sentenceBuilder": {
            "promptTr": "Bu kelimeyi İngilizcede nasıl doğru telaffuz edersiniz?",
            "targetEn": "How do you pronounce this word correctly in English",
            "availableWords": ["How", "do", "you", "pronounce", "this", "word", "correctly", "in", "English", "does", "is", "by"],
            "explanation": "Soru kelimesi (How) + yardımcı fiil (do) + özne (you) + fiil (pronounce) + nesne (this word) + zarf (correctly) + edat öbeği (in English)."
        },
        "summaryTakeaways": [
            "'How' hem durum (hal-hatır) hem de yöntem (yapılış biçimi) sorar.",
            "'How are you?' en temel selamlama ve hal sorma kalıbıdır.",
            "Ulaşım araçlarında 'BY' (by car, by bus, by train) edatı kullanılır.",
            "Yürüyerek gitmek 'ON FOOT' kalıbıyla söylenir, asla 'by foot' denmez."
        ]
    }

    # 47: How Often ile Eylem Sıklığı Sorma
    module5_data[47] = {
        "skillType": "grammar",
        "concreteCompetency": "A1 standardında eylemlerin tekrarlanma sıklığını sormak için 'How often' kalıbını ('How often do you exercise?') hatasız kurabilmek; yanıtlarda sıklık zarflarını (always, usually, sometimes, never) ve zaman öbeklerini (once a week, twice a month) doğru kullanabilmek.",
        "whyItMatters": "Sağlıklı yaşam alışkanlıklarından iş rutinlerine kadar hayatımızın ritmini anlatmak sıklık sorularını sormaya ve yanıtlamaya bağlıdır.",
        "linguisticLogic": "İngilizcede bir eylemin ne sıklıkla yapıldığını sormak için 'HOW OFTEN' (Ne sıklıkla) kalıbı kullanılır. 'How' tek başına nasıldır; yanına 'often' (sık) geldiğinde ayrılmaz bir sıklık soru öbeğine dönüşür. Cümle dizilimi: How often + do/does + Özne + Yalın Fiil? Cevaplarda iki temel yapı kullanılır: 1) Fiilden önce gelen sıklık zarfları: 'I ALWAYS eat breakfast'. 2) Cümlenin en sonuna giden zaman periyotları: 'I exercise TWICE A WEEK'.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: 'How Often' Soru Dizilimi",
                "content": "'How often' kalıbı cümlenin başına gelir, ardından geniş zaman yardımcı fiili (do veya does) ve özne sıralanır: 'How often do you visit your grandparents?' (Büyükanne ve büyükbabanı ne sıklıkla ziyaret edersin?).",
                "formula": "How often + do/does + [Özne] + [Yalın Fiil V1]...?",
                "keyPhrase": "How often do you go to the gym? | How often does it rain here?",
                "subPoints": [
                    "I, You, We, They için 'do'; He, She, It için 'does' kullanılır.",
                    "'often' kelimesi hem İngiliz hem Amerikan İngilizcesinde 't' harfi okunmadan (/ˈɒf.ən/) veya okunarak (/ˈɒf.tən/) sesletilebilir; ikisi de doğrudur."
                ],
                "rationale": "Rutin ve alışkanlıkların sıklığını sorgulama mekanizmasını öğretir."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: Yüzdelik Sıklık Zarflarıyla Cevap Verme",
                "content": "Cevap verirken fiilin hemen önüne yerleşen sıklık zarfları kullanılır: Always (%100 - her zaman), Usually (%80 - genellikle), Often (%70 - sık sık), Sometimes (%50 - bazen), Rarely/Seldom (%10 - nadiren), Never (%0 - asla).",
                "formula": "Özne + [Sıklık Zarfı] + [Asıl Fiil V1]",
                "keyPhrase": "I usually drink coffee. | She never eats fast food.",
                "subPoints": [
                    "Sıklık zarfları asıl fiilden ÖNCE, ancak 'to be' (am/is/are) fiilinden SONRA gelir: 'He is always late.'",
                    "'Never' zaten olumsuzluk taşıdığı için cümle 'don't/doesn't' almaz: *I don't never eat YANLIŞTIR!"
                ],
                "rationale": "Sıklık zarflarının cümle içindeki pozisyonunu netleştirir."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Periyodik Zaman Öbekleriyle Cevap Verme",
                "content": "Kesin periyot bildirmek için 'Once' (bir kez), 'Twice' (iki kez), 'Three times' (üç kez) sözcükleri 'a day / a week / a month / a year' ile birleştirilir ve cümlenin en sonuna konur.",
                "formula": "Once / Twice / Three times + a [day / week / month / year]",
                "keyPhrase": "Once a week (Haftada bir) | Twice a month (Ayda iki kez)",
                "subPoints": [
                    "Bir ve iki için özel kelimeler vardır: 'once' ve 'twice' (asla *one time veya *two times denmez).",
                    "Üç ve sonrasında 'times' eklenir: three times, four times a week."
                ],
                "rationale": "Zaman sıklığını matematiksel netlikle ifade etmeyi sağlar."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Sıklık Zarfı Yerleşim Kuralı",
                "formula": "Özne + [ALWAYS/USUALLY/SOMETIMES] + Esas Fiil",
                "explanation": "Sıklık zarfları özne ile esas fiilin arasına girer. Ancak cümlede 'to be' varsa ardına geçer.",
                "exampleSnippet": "I always sleep early. (Esas fiil öncesi)  |  I am always busy. (To be sonrası)",
                "tipNote": "Fiilin hemen önüne koyun!"
            },
            {
                "ruleTitle": "Periyot Kalıplarında 'A' Belirteci",
                "formula": "once A week  |  twice A month  |  three times A year",
                "explanation": "Türkçe 'haftada bir kez' derken İngilizce 'hafta başına bir' mantığıyla 'once A week' kalıbını kullanır. 'A' belirteci burada 'başına' anlamı katar.",
                "cautionNote": "*Once the week YANLIŞTIR; 'once a week' kalıptır."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "How often you go to swimming?",
                "correctExample": "How often do you go swimming?",
                "rootCause": "'How often' soru kalıbında 'do' yardımcı fiilini unutmak ve 'go swimming' arasına gereksiz 'to' sokmak.",
                "memoryTip": "How often'dan sonra DO gelmelidir: How often DO you go swimming?"
            },
            {
                "wrongExample": "I go to cinema two times a month.",
                "correctExample": "I go to the cinema twice a month.",
                "rootCause": "'Twice' kelimesi yerine Türkçe mantıkla 'two times' demek.",
                "memoryTip": "Bir = ONCE, İki = TWICE! Bu ikisini ezberle!"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Spor Salonunda Eğitmen ile Antrenman Planlama",
            "description": "Fitness eğitmeni yeni üyeye egzersiz ve su içme alışkanlıklarını sorar.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Trainer", "textEn": "Welcome to our gym! How often do you exercise in a normal week?", "textTr": "Spor salonumuza hoş geldiniz! Normal bir haftada ne sıklıkla egzersiz yaparsınız?"},
                {"speaker": "Member", "textEn": "I usually work out twice a week, but I want to increase it.", "textTr": "Genellikle haftada iki kez antrenman yaparım ama bunu artırmak istiyorum."},
                {"speaker": "Trainer", "textEn": "Great! And how often do you drink water during workouts?", "textTr": "Harika! Peki antrenman sırasında ne sıklıkla su içersiniz?"},
                {"speaker": "Member", "textEn": "I always drink water after every exercise set.", "textTr": "Her egzersiz setinden sonra mutlaka su içerim."}
            ],
            "culturalNote": "İngilizcede kişisel rutinleri sorarken 'How often' çok yaygın ve kibar bir sorudur."
        },
        "contrastiveAnalysis": {
            "title": "Ne Sıklıkla vs How Often",
            "englishConcept": "How often (Sıklık) -> Once/twice a week VEYA always/usually",
            "turkishDifference": "Türkçede 'Ne sıklıkla' sorusuna 'Haftada bir' veya 'Her zaman' denir. İngilizcede periyot için 'once a week', genel alışkanlık için fiil önüne gelen zarflar (always) kullanılır.",
            "directComparison": [
                {
                    "context": "Soru sorma",
                    "en": "How often do you read books?",
                    "trMeaning": "Ne sıklıkla kitap okursun?",
                    "commonErrorTr": "*How many often...?",
                    "whyItMatters": "'How often' kalıplaşmış bir bütündür."
                },
                {
                    "context": "Periyot yanıtı",
                    "en": "Three times a week.",
                    "trMeaning": "Haftada üç kez.",
                    "commonErrorTr": "*Three times in week.",
                    "whyItMatters": "Edat yerine 'a' belirteci gelir."
                }
            ]
        },
        "memoryHook": "SIKLIK MERDİVENİ: Always (%100) -> Usually (%80) -> Sometimes (%50) -> Never (%0) / 1: Once, 2: Twice!",
        "examples": [
            {
                "en": "How often does your sister travel abroad for work?",
                "tr": "Kız kardeşin iş için ne sıklıkla yurt dışına seyahat eder?",
                "highlightedWords": ["How often does", "travel"],
                "grammarCategory": "How often + does + 3. tekil",
                "contextNote": "İş seyahati sıklığı.",
                "breakdownNote": "How often + does + your sister + travel + amaç."
            },
            {
                "en": "We rarely eat junk food because we care about our health.",
                "tr": "Sağlığımıza önem verdiğimiz için nadiren abur cubur yeriz.",
                "highlightedWords": ["rarely eat"],
                "grammarCategory": "rarely + fiil",
                "contextNote": "Düşük sıklık alışkanlığı.",
                "breakdownNote": "Özne + rarely (zarf) + eat (fiil) + nesne + sebep."
            },
            {
                "en": "I check my work emails three times a day.",
                "tr": "İş e-postalarımı günde üç kez kontrol ederim.",
                "highlightedWords": ["three times a day"],
                "grammarCategory": "three times a day",
                "contextNote": "Günde üç kez periyodu.",
                "breakdownNote": "Cümle sonuna yerleşen periyodik sıklık öbeği."
            }
        ],
        "vocabulary": [
            {"word": "Exercise", "phonetic": "/ˈek.sə.saɪz/", "partOfSpeech": "verb", "meaningTr": "Egzersiz yapmak", "exampleSentence": "How often do you exercise?"},
            {"word": "Rarely", "phonetic": "/ˈreə.li/", "partOfSpeech": "adverb", "meaningTr": "Nadiren", "exampleSentence": "He rarely watches television."},
            {"word": "Dental", "phonetic": "/ˈden.təl/", "partOfSpeech": "adjective", "meaningTr": "Diş ile ilgili", "exampleSentence": "I visit the dentist twice a year."},
            {"word": "Regularly", "phonetic": "/ˈreɡ.jə.lə.li/", "partOfSpeech": "adverb", "meaningTr": "Düzenli olarak", "exampleSentence": "They clean the office regularly."}
        ],
        "quickCheck": {
            "question": "'Haftada iki kez diş hekimine kontrole giderim' ifadesinin en doğru İngilizce karşılığı hangisidir?",
            "options": [
                "I visit the dentist twice a week.",
                "I visit the dentist two times a week.",
                "I visit the dentist twice the week.",
                "I visit the dentist two times in week."
            ],
            "correctIndex": 0,
            "explanation": "Haftada iki kez demek için 'twice a week' standart ve doğal İngilizce kalıbıdır."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun zarfı yerleştirin:",
            "sentence": "Sarah is very vegetarian; she ___ eats meat or chicken.",
            "options": ["never", "always", "usually", "often"],
            "correctAnswer": "never",
            "hint": "Vejetaryen biri et veya tavuğu hangi sıklıkla (%0) yer?",
            "explanation": "Vejetaryen biri et ürünlerini asla (%0 sıklıkla) yemez; bu nedenle 'never' kullanılır."
        },
        "sentenceBuilder": {
            "promptTr": "Siz ne sıklıkla ailenizle birlikte akşam yemeği yersiniz?",
            "targetEn": "How often do you have dinner together with your family",
            "availableWords": ["How", "often", "do", "you", "have", "dinner", "together", "with", "your", "family", "does", "is", "are"],
            "explanation": "Soru kalıbı (How often) + yardımcı fiil (do) + özne (you) + fiil öbeği (have dinner together) + edat grubu (with your family)."
        },
        "summaryTakeaways": [
            "'How often' eylemlerin tekrarlanma sıklığını sorar.",
            "Yüzdelik sıklık zarfları (always, usually, sometimes, never) fiilden önce gelir.",
            "Periyot bildiren öbekler (once a week, twice a month) cümlenin sonunda yer alır.",
            "Bir kez için 'once', iki kez için 'twice' kullanılır; 'times' üçe kadar gelmez."
        ]
    }

    print("Lessons 43-47 added to Module 5.")

    # 48: How Many ile Sayılabilen Nesne Sayısı Sorma
    module5_data[48] = {
        "skillType": "grammar",
        "concreteCompetency": "A1 standardında sayılabilen (countable) çoğul isimlerin miktarını sormak için 'How many' kalıbını ('How many books do you have?', 'How many students are there?') hatasız kurabilmek; 'How many' sonrasına daima çoğul isim getirme kuralını uygulayabilmek.",
        "whyItMatters": "Alışveriş yaparken kaç adet ürün istediğinizi, bir grupta kaç kişinin olduğunu veya kaç kardeşiniz olduğunu sormak sayısal iletişimin temelidir.",
        "linguisticLogic": "İngilizcede varlıklar 'Sayılabilen' (Countable) ve 'Sayılamayan' (Uncountable) olarak ikiye ayrılır. Sayılabilen nesneler tane tane sayılabilen varlıklardır (elma, araba, öğrenci, kitap). Bunların sayısını sormak için 'HOW MANY' kullanılır. EN TEMEL VE KESİN KURAL: 'How many'den sonra gelen isim MUTLAKA ÇOĞUL (-s takılı) olmak zorundadır! 'How many book' YANLIŞTIR; 'How many BOOKS' DOĞRUDUR.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: 'How Many + Çoğul İsim' Şartı",
                "content": "'How many' soru kalıbının hemen arkasına sorulan nesnenin çoğul hali gelir. Formül: How many + [Çoğul İsim]. Örnekler: 'How many languages...?' (Kaç dil?), 'How many rooms...?' (Kaç oda?), 'How many cars...?' (Kaç araba?).",
                "formula": "How many + [ÇOĞUL İSİM (-s / düzensiz)]",
                "keyPhrase": "How many books...? | How many people...? | How many children...?",
                "subPoints": [
                    "Düzenli isimlerde -s takısı: books, cups, cities, chairs.",
                    "Düzensiz çoğullarda: people (person çoğulu), children (child çoğulu), men, women."
                ],
                "rationale": "Türkçe düşünerek 'Kaç kitap' derken ismi tekil bırakma tuzağını kırar."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: Varlık Sorusu (How many ... are there?)",
                "content": "Bir yerde kaç tane nesne veya kişi bulunduğunu sorarken 'are there' kalıbı kullanılır: 'How many students are there in the classroom?' (Sınıfta kaç öğrenci var?).",
                "formula": "How many + [Çoğul İsim] + ARE THERE + [Yer/Mekan]?",
                "keyPhrase": "How many apples are there in the basket? | How many days are there in a week?",
                "subPoints": [
                    "Çoğul sorulduğu için daima 'are there' kullanılır, asla *is there denmez.",
                    "Cevap verirken: 'There are twenty students' veya tek bir tane ise 'There is only one student' denir."
                ],
                "rationale": "Mekanlardaki mevcudiyeti sorgulama standardını öğretir."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Sahip Olunan Adet Sorusu (How many ... do you have?)",
                "content": "Birinin kaç tane eşyaya, kardeşe veya imkana sahip olduğunu sorarken 'do you have' kullanılır: 'How many brothers do you have?' (Kaç erkek kardeşin var?), 'How many credit cards do you have?' (Kaç kredi kartın var?).",
                "formula": "How many + [Çoğul İsim] + DO/DOES + [Özne] + have?",
                "keyPhrase": "How many siblings do you have? | How many languages does he speak?",
                "subPoints": [
                    "He/She için: 'How many cars DOES he have?' (does varken fiil yalın 'have' kalır).",
                    "Cevapta: 'I have two brothers', 'She speaks three languages.'"
                ],
                "rationale": "Kişisel aidiyet ve adet sorgulama becerisini tamamlar."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "How Many Ardından Çoğul İsim İlkesi",
                "formula": "How many + NOUNS (Çoğul İsim) -> *How many student (YANLIŞ) -> How many students (DOĞRU)",
                "explanation": "Türkçede 'Kaç öğrenci?' derken isim tekil kalır. Ancak İngilizcede adet sorulurken isim mutlaka çoğul eki almalıdır.",
                "exampleSnippet": "How many languages do you speak? (Kaç dil konuşuyorsunuz?)",
                "cautionNote": "Asla tekil isim kullanmayın; *How many child? YANLIŞTIR, 'How many children?' DOĞRUDUR."
            },
            {
                "ruleTitle": "Düzensiz Çoğullara Dikkat",
                "formula": "person -> PEOPLE  |  child -> CHILDREN",
                "explanation": "Bazı kelimeler -s almaz; şekil değiştirerek çoğul olur. 'How many people are there?' cümlesinde 'people' zaten çoğuldur, *peoples denmez.",
                "tipNote": "İnsan sayarken 'How many people' deyin."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "How many apple do you want?",
                "correctExample": "How many apples do you want?",
                "rootCause": "Türkçe düşünerek 'Kaç elma' çevirisinde elmayı tekil bırakmak.",
                "memoryTip": "How many'den sonra çoğul şarttır: How many APPLE-S!"
            },
            {
                "wrongExample": "How many person are in the room?",
                "correctExample": "How many people are in the room?",
                "rootCause": "'Person' kelimesinin çoğulunun 'people' olduğunu unutmak.",
                "memoryTip": "Birden fazla insan = PEOPLE! How many people?"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Otel Rezervasyonunda Oda ve Misafir Sayısı Bildirme",
            "description": "Müşteri resepsiyoniste tatil için kaç kişilik odaya ihtiyaç duyduğunu anlatır.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Receptionist", "textEn": "Good afternoon! How many nights do you plan to stay with us?", "textTr": "Tünaydın! Bizimle kaç gece kalmayı planlıyorsunuz?"},
                {"speaker": "Guest", "textEn": "We want to stay for four nights. How many rooms are available on the sea side?", "textTr": "Dört gece kalmak istiyoruz. Deniz tarafında kaç oda müsait?"},
                {"speaker": "Receptionist", "textEn": "We have two sea-view suites available. How many guests are there in your group?", "textTr": "Müsait iki deniz manzaralı süitimiz var. Grubunuzda kaç misafir var?"},
                {"speaker": "Guest", "textEn": "There are three adults and one child.", "textTr": "Üç yetişkin ve bir çocuk var."}
            ],
            "culturalNote": "Otel ve restoran rezervasyonlarında misafir sayısı sorulurken 'How many guests' standart ifadedir."
        },
        "contrastiveAnalysis": {
            "title": "Kaç Tane vs How Many",
            "englishConcept": "How many + ÇOĞUL İSİM",
            "turkishDifference": "Türkçede sayı sıfatlarından ve soru kelimelerinden sonra isim daima TEKİL kalır ('üç elma', 'kaç kişi?'). İngilizcede ise 'How many' sonrası MUTLAKA ÇOĞUL yapılır ('three apples', 'how many people?').",
            "directComparison": [
                {
                    "context": "Miktar sorma",
                    "en": "How many cars do you see?",
                    "trMeaning": "Kaç araba görüyorsun?",
                    "commonErrorTr": "*How many car do you see?",
                    "whyItMatters": "Türk öğrencinin en temel otomatik transfer hatasıdır."
                }
            ]
        },
        "memoryHook": "SAYILABİLEN ÇOĞUL KURALI: 'How many' gördüğün an arkasındaki isme -S takısını yapıştır!",
        "examples": [
            {
                "en": "How many cups of coffee do you drink every day?",
                "tr": "Her gün kaç fincan kahve içersin?",
                "highlightedWords": ["How many cups"],
                "grammarCategory": "How many + çoğul kap",
                "contextNote": "Adet sorgulama.",
                "breakdownNote": "How many cups (çoğul) + of coffee + do you drink + zaman."
            },
            {
                "en": "How many countries did she visit last year?",
                "tr": "Geçen yıl kaç ülke ziyaret etti?",
                "highlightedWords": ["How many countries"],
                "grammarCategory": "How many + çoğul isim",
                "contextNote": "Ülke adedi sorma.",
                "breakdownNote": "How many countries (çoğul) + did she visit + zaman."
            },
            {
                "en": "There are fifty-two cards in a standard deck.",
                "tr": "Standart bir destede elli iki kart vardır.",
                "highlightedWords": ["There are fifty-two cards"],
                "grammarCategory": "There are + sayı + çoğul",
                "contextNote": "Net adet bildirme.",
                "breakdownNote": "There are + sayı + çoğul isim + yer."
            }
        ],
        "vocabulary": [
            {"word": "Country", "phonetic": "/ˈkʌn.tri/", "partOfSpeech": "noun", "meaningTr": "Ülke", "exampleSentence": "How many countries do you know?"},
            {"word": "Language", "phonetic": "/ˈlæŋ.ɡwɪdʒ/", "partOfSpeech": "noun", "meaningTr": "Dil, lisan", "exampleSentence": "How many languages do you speak?"},
            {"word": "Sibling", "phonetic": "/ˈsɪb.lɪŋ/", "partOfSpeech": "noun", "meaningTr": "Kardeş (kız veya erkek)", "exampleSentence": "Do you have any siblings?"},
            {"word": "Available", "phonetic": "/əˈveɪ.lə.bəl/", "partOfSpeech": "adjective", "meaningTr": "Müsait, boşta", "exampleSentence": "How many seats are available?"}
        ],
        "quickCheck": {
            "question": "Sınıfta kaç tane öğrenci olduğunu sormak için aşağıdaki cümlelerden hangisi DİLBİLGİSEL OLARAK DOĞRUDUR?",
            "options": [
                "How many students are there in the class?",
                "How many student is there in the class?",
                "How many student are there in the class?",
                "How much students are there in the class?"
            ],
            "correctIndex": 0,
            "explanation": "Öğrenci sayılabilir olduğu için 'How many', ardından çoğul isim 'students' ve çoğul varlık yapısı 'are there' gelir."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğu doğru kelimeyle tamamlayın:",
            "sentence": "How many ___ does the company employ at the headquarters?",
            "options": ["people", "person", "man", "human"],
            "correctAnswer": "people",
            "hint": "'How many' arkasından çoğul bir kelime ister. 'Person' kelimesinin çoğulu nedir?",
            "explanation": "'How many' sonrasında çoğul isim gerekir. 'Person' kelimesinin çoğul hali 'people'dır."
        },
        "sentenceBuilder": {
            "promptTr": "Bu uluslararası projede kaç tane mühendis çalışıyor?",
            "targetEn": "How many engineers work in this international project",
            "availableWords": ["How", "many", "engineers", "work", "in", "this", "international", "project", "much", "engineer", "is", "works"],
            "explanation": "Soru grubu (How many engineers) + fiil (work) + edat öbeği (in this international project)."
        },
        "summaryTakeaways": [
            "'How many' sayılabilen nesnelerin sayısını sormada kullanılır.",
            "'How many' ifadesinden sonra gelen isim DAİMA ÇOĞULDUR (-s veya düzensiz çoğul).",
            "Mekandaki adet sorulurken 'are there' kullanılır: 'How many chairs are there?'.",
            "Kişiler sorulurken 'How many people' kalıbı kullanılır."
        ]
    }

    # 49: How Much ile Fiyat ve Sayılamayan Miktar Sorma
    module5_data[49] = {
        "skillType": "grammar",
        "concreteCompetency": "A1 standardında sayılamayan (uncountable) maddelerin miktarını ('How much water...?', 'How much time...?') ve ürünlerin fiyatını ('How much is this shirt?', 'How much are these shoes?') hatasız sorabilmek; 'How many' ile 'How much' ayrımını yapabilmek.",
        "whyItMatters": "Mağazada bir ürünün fiyatını öğrenmek, yemek tarifinde malzeme miktarını sormak veya bir işlem için ne kadar zaman kaldığını anlamak 'How much' kalıbıyla gerçekleşir.",
        "linguisticLogic": "İngilizcede 'HOW MUCH' iki temel alanda hüküm sürer: 1) FİYAT SORMA: Nesne ister sayılabilir ister sayılamaz olsun, fiyat sorarken daima 'How much' kullanılır: 'How much is this?' (Bu ne kadar?), 'How much are these shoes?' (Bu ayakkabılar ne kadar?). 2) SAYILAMAYAN MİKTAR SORMA: Sıvılar (water, milk), taneli kütleler (rice, sugar), soyut kavramlar (time, information, patience) ve para (money) gibi tane tane sayılamayan isimlerin miktarı sorulurken 'How much + Sayılamayan Tekil İsim' kullanılır. Asla -s takısı almazlar!",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: Fiyat Sorma Kalıpları (How much is / are...?)",
                "content": "Bir eşyanın fiyatını öğrenmek için tekillerde 'How much is [Eşya]?', çoğul veya çift olan eşyalarda 'How much are [Eşyalar]?' sorulur. 'How much does it cost?' da aynı anlama gelen alternatif bir eylem kalıbıdır.",
                "formula": "How much + is + [Tekil Nesne]?  |  How much + are + [Çoğul Nesne]?",
                "keyPhrase": "How much is this ticket? | How much are these glasses?",
                "subPoints": [
                    "Tekil ürünlerde: 'It is fifteen pounds' ($15 / £15).",
                    "Çoğul ürünlerde: 'They are forty euros' (€40)."
                ],
                "rationale": "Günlük alışverişte fiyat öğrenmenin tartışmasız bir numaralı kalıbıdır."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: Sayılamayan İsimlerle Miktar Sorma",
                "content": "Sayılamayan kütle veya soyut kavramların miktarını sorarken 'How much + Tekil Sayılamayan İsim' dizilimi uygulanır: 'How much water do you drink?' (Ne kadar su içersin?), 'How much sugar do you want?' (Ne kadar şeker istersin?).",
                "formula": "How much + [Sayılamayan İsim (Tekil)] + do/does + Özne + Fiil?",
                "keyPhrase": "How much time do we have? | How much money do you need?",
                "subPoints": [
                    "'Money' (para) kelimesi İngilizcede sayılamaz (uncountable) kabul edilir: 'How much money', asla *how many money denmez!",
                    "'Time' (zaman) sayılamaz: 'How much time'. Ancak 'kaç kez' derken 'How many times' (kez/defa) sayılabilir!"
                ],
                "rationale": "Sayılamayan isimlerin dil mantığını ve para/zaman ayrımlarını kavratır."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: How Many vs How Much Karşılaştırma Matrisi",
                "content": "Basit test: Eğer varlığın önüne 1, 2, 3 koyup çoğul yapabiliyorsanız (one bottle, two bottles) -> 'HOW MANY'. Eğer koyamıyorsanız ve bir kapla/ölçüyle ölçülüyorsa (water, bread, cheese) -> 'HOW MUCH'.",
                "formula": "How many + ÇOĞUL (sayılabilen)  <-->  How much + TEKİL (sayılamayan / fiyat)",
                "keyPhrase": "How many apples? vs How much milk?",
                "subPoints": [
                    "How many cups of tea? (Kaç fincan çay? - fincan sayılır, many alır).",
                    "How much tea? (Ne kadar çay? - çay sıvıdır, much alır)."
                ],
                "rationale": "İki kalıp arasındaki tüm olası kafa karışıklıklarını sonlandırır."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Fiyatta Sayılamazlık Kuralı",
                "formula": "How much + is/are [Nesne]?",
                "explanation": "Ürün elma veya araba gibi sayılabilir bir nesne olsa bile FİYATINI sorarken 'How many' denemez; fiyat genel bir değer olduğu için daima 'How much' sorulur.",
                "exampleSnippet": "How much is this jacket? (Bu ceket ne kadar?)",
                "tipNote": "Fiyat eşittir HOW MUCH!"
            },
            {
                "ruleTitle": "'Money' Kelimesinin Gramer Durumu",
                "formula": "How much money  |  *How many money (KESİNLİKLE YANLIŞ)",
                "explanation": "Kuruşlar ve liralar (coins, dollars) sayılabilir ancak 'money' genel kavramı sayılamaz. Bu yüzden 'How much money' kalıptır.",
                "cautionNote": "*How many money do you have? demek büyük bir dilbilgisi hatasıdır."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "How many money does this computer cost?",
                "correctExample": "How much does this computer cost? / How much money do you need?",
                "rootCause": "'Money' kelimesini sayılabilir sanarak 'How many' ile kullanmak.",
                "memoryTip": "Para sayılamaz bir kavramdır; miktarını ve fiyatını 'HOW MUCH' ile sor!"
            },
            {
                "wrongExample": "How much are this jacket?",
                "correctExample": "How much is this jacket?",
                "rootCause": "Tekil bir ceket için çoğul 'are' yardımcı fiilini kullanmak.",
                "memoryTip": "Tek bir ürün soruyorsan: How much IS this!"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Bir Giyim Mağazasında Fiyat ve Kumaş Bilgisi Sorma",
            "description": "Müşteri tezgahtara beğendiği montun ve pantolonun fiyatını sorar.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Customer", "textEn": "Excuse me, how much is this dark blue winter coat?", "textTr": "Affedersiniz, bu koyu mavi kışlık mont ne kadar?"},
                {"speaker": "Shop Assistant", "textEn": "It is on sale today; it is eighty-five pounds.", "textTr": "Bugün indirimde; seksen beş sterlin."},
                {"speaker": "Customer", "textEn": "That is a good price. And how much are these leather boots?", "textTr": "Bu iyi bir fiyat. Peki bu deri çizmeler ne kadar?"},
                {"speaker": "Shop Assistant", "textEn": "They are one hundred and twenty pounds.", "textTr": "Onlar yüz yirmi sterlin."}
            ],
            "culturalNote": "İngiltere'de fiyat etiketinde 'sale' yazıyorsa indirimli fiyat geçerlidir."
        },
        "contrastiveAnalysis": {
            "title": "Ne Kadar (Fiyat/Miktar) vs How Much",
            "englishConcept": "How much (Fiyat / Sayılamayan Miktar)",
            "turkishDifference": "Türkçede 'Ne kadar?' sorusu hem fiyat hem de miktar için kullanılır. İngilizcede 'How much' tam olarak bu 'Ne kadar?' sorusuna karşılık gelirken, 'Kaç tane?' için 'How many' ayrımı yapılır.",
            "directComparison": [
                {
                    "context": "Fiyat",
                    "en": "How much is the coffee?",
                    "trMeaning": "Kahve ne kadar?",
                    "commonErrorTr": "Sorunsuz eşleşir.",
                    "whyItMatters": "Fiyat sorgulama standardı."
                },
                {
                    "context": "Sayılamayan madde",
                    "en": "How much sugar do you take?",
                    "trMeaning": "Ne kadar şeker alırsın?",
                    "commonErrorTr": "*How many sugar...?",
                    "whyItMatters": "Şeker sayılamaz maddedir, much alır."
                }
            ]
        },
        "memoryHook": "MİKTAR ÖLÇER: Tane tane sayıyorsan HOW MANY, tartıyla ölçüyor veya fiyat soruyorsan HOW MUCH!",
        "examples": [
            {
                "en": "How much luggage can I take on the airplane?",
                "tr": "Uçağa ne kadar bagaj alabilirim?",
                "highlightedWords": ["How much luggage"],
                "grammarCategory": "How much + sayılamayan isim",
                "contextNote": "Bagaj ağırlığı ve hacmi.",
                "breakdownNote": "How much luggage (sayılamaz) + can I take + yer."
            },
            {
                "en": "How much are these organic apples per kilo?",
                "tr": "Bu organik elmaların kilosu ne kadar?",
                "highlightedWords": ["How much are these", "per kilo"],
                "grammarCategory": "How much are + çoğul fiyat",
                "contextNote": "Kilo başına fiyat sorma.",
                "breakdownNote": "How much + are + these organic apples (özne) + per kilo."
            },
            {
                "en": "How much free time do you have this afternoon?",
                "tr": "Bu öğleden sonra ne kadar boş vaktin var?",
                "highlightedWords": ["How much free time"],
                "grammarCategory": "How much + time",
                "contextNote": "Zaman miktarı sorma.",
                "breakdownNote": "How much free time + do you have + zaman."
            }
        ],
        "vocabulary": [
            {"word": "Luggage", "phonetic": "/ˈlʌɡ.ɪdʒ/", "partOfSpeech": "noun", "meaningTr": "Bagaj, bavul yükü", "exampleSentence": "How much luggage do you have?"},
            {"word": "Price", "phonetic": "/praɪs/", "partOfSpeech": "noun", "meaningTr": "Fiyat", "exampleSentence": "What is the price of this jacket?"},
            {"word": "Leather", "phonetic": "/ˈleð.ər/", "partOfSpeech": "noun", "meaningTr": "Deri", "exampleSentence": "These leather boots are expensive."},
            {"word": "Expensive", "phonetic": "/ɪkˈspen.sɪv/", "partOfSpeech": "adjective", "meaningTr": "Pahalı", "exampleSentence": "This watch is very expensive."}
        ],
        "quickCheck": {
            "question": "Bir restoranda garsona iki fincan kahve ve pastanın toplam tutarını sormak için en doğal kalıp hangisidir?",
            "options": [
                "How much is the total bill, please?",
                "How many is the total bill, please?",
                "How much are the total bill, please?",
                "How many money is the bill, please?"
            ],
            "correctIndex": 0,
            "explanation": "Hesap tutarı tekil ve fiyat bildirimi olduğundan 'How much is the total bill, please?' kalıbı kullanılır."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun soru kelimesini yerleştirin:",
            "sentence": "___ coffee do you drink during long working hours?",
            "options": ["How much", "How many", "How often", "How long"],
            "correctAnswer": "How much",
            "hint": "'Coffee' sıvıdır ve doğrudan sayılamayan (uncountable) bir maddedir.",
            "explanation": "Sayılamayan maddelerin miktarı 'How much' soru kalıbıyla sorulur: 'How much coffee'."
        },
        "sentenceBuilder": {
            "promptTr": "Vitlindeki bu siyah deri ceket ne kadar?",
            "targetEn": "How much is this black leather jacket in the window",
            "availableWords": ["How", "much", "is", "this", "black", "leather", "jacket", "in", "the", "window", "are", "many", "does"],
            "explanation": "Fiyat sorusu (How much is) + nesne grubu (this black leather jacket) + konum (in the window)."
        },
        "summaryTakeaways": [
            "'How much' hem fiyat sormada hem de sayılamayan isimlerin miktarında kullanılır.",
            "Fiyat sorarken tekil nesneler için 'How much is', çoğullar için 'How much are' denir.",
            "'Money', 'water', 'time', 'sugar' gibi kelimeler sayılamaz ve 'How much' ile sorulur.",
            "Tane tane sayılabilen nesneler 'How many' (-s çoğul ekiyle) sorulur."
        ]
    }

    # 50: A1 Modül 5 Entegrasyonu: Tanınmış Biriyle Röportaj Yapma
    module5_data[50] = {
        "skillType": "speaking",
        "concreteCompetency": "A1 Modül 5'te öğrenilen tüm WH- soru kalıplarını (What, Where, Who, When, What time, Why, How, How often, How much, How many) birleştirerek tanınmış bir mimar veya sanatçıyla gerçekçi bir röportaj gerçekleştirebilmek ve akıcı diyalog sürdürebilmek.",
        "whyItMatters": "Soru sorma kalıpları tek tek bilindiğinde birer kuraldır; ancak bir röportajda birleştiğinde gerçek bir iletişim gücüne ve akıcılığa dönüşür. Modülün nihai hedefi bu entegrasyonu başarmaktır.",
        "linguisticLogic": "Başarılı bir röportaj yapısal bir mantık akışı izler: 1) Kimlik ve köken (Who are you? Where are you from?). 2) Meslek ve projeler (What do you do? What project are you working on?). 3) Günlük rutin ve zamanlama (When do you start work? What time do you wake up?). 4) Sıklık ve alışkanlıklar (How often do you travel?). 5) Motivasyon ve sebepler (Why do you choose sustainable materials?). 6) Sayısal başarılar (How many buildings have you designed?). Tüm bu sorular geniş zaman ve durum yardımcı fiilleriyle harmanlanır.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: Röportaj Girişi ve Kimlik Soruları",
                "content": "Röportajı kibar bir karşılamayla açın ve temel kimlik/çalışma alanını sorgulayın: 'Thank you for joining us today. What is your current project?' (Bugün bize katıldığınız için teşekkürler. Şu anki projeniz nedir?).",
                "formula": "Welcome / Thank you + What / Where soru kalıpları",
                "keyPhrase": "Where are you originally from? | What inspired you?",
                "subPoints": [
                    "Nezaket ifadeleri (Thank you for your time, Welcome to our studio) röportajın havasını belirler.",
                    "Giriş soruları kişiyi rahatlatır."
                ],
                "rationale": "Resmi ve yarı resmi mülakat açılış protokolünü kazandırır."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: Rutin, Sıklık ve Zamanlama Soruları",
                "content": "Konuğun bir gününü ve çalışma temposunu öğrenmek için 'What time', 'When' ve 'How often' sorularını art arda yöneltin: 'What time do you usually start working in the morning?' (Sabahları genellikle saat kaçta çalışmaya başlarsınız?), 'How often do you visit your construction sites?' (Şantiyelerinizi ne sıklıkla ziyaret edersiniz?).",
                "formula": "What time do you...?  |  How often do you...?",
                "keyPhrase": "What time do you wake up? | How often do you design new projects?",
                "subPoints": [
                    "Konuk geniş zaman ve sıklık zarflarıyla cevap verir: 'I always start at 8:00 AM', 'I visit twice a week.'",
                    "Zaman edatlarına (at, on) dikkatle kulak verin."
                ],
                "rationale": "Farklı zaman ve sıklık sorularını arka arkaya akıcı bağlama yetisi kazandırır."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Neden ve Miktar Sorularıyla Derinleşme",
                "content": "Röportajı etkileyici kılmak için 'Why' (gerekçe) ve 'How many / How much' (sayısal veriler) sorularını devreye sokun: 'Why do you prefer wooden materials?' (Neden ahşap malzemeleri tercih ediyorsunuz?), 'How many international awards do you have?' (Kaç tane uluslararası ödülünüz var?).",
                "formula": "Why do you...? -> Because...  |  How many [İsimler] do you have?",
                "keyPhrase": "Why do you love architecture? | How many buildings do you have in London?",
                "subPoints": [
                    "Konuğun 'Because...' ile gerekçe sunmasını takip edin.",
                    "Kapanışta: 'Thank you very much for this wonderful interview' diyerek tamamlayın."
                ],
                "rationale": "Sebep ve miktar sorularını profesyonel bir diyalog içinde taçlandırır."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Mülakat Akışında Soru Çeşitliliği Kuralı",
                "formula": "Kimlik (Who/What) -> Konum (Where) -> Zaman (When/What time) -> Sebep (Why) -> Miktar (How many)",
                "explanation": "Tek tip soru kalıbına takılı kalmayın. Konuğa önce ne yaptığını, sonra nerede ve ne zaman çalıştığını, en son neden bu işi seçtiğini sorarak zengin bir soru dizisi kurun.",
                "exampleSnippet": "Where do you work? -> What time do you begin? -> Why do you enjoy it?",
                "tipNote": "Her soruda yardımcı fiilin doğru seçildiğinden emin olun (do/does/is/are)."
            },
            {
                "ruleTitle": "Röportajda Nezaket Çerçevesi",
                "formula": "Could you tell us + [Soru]  |  Thank you for your time",
                "explanation": "Soruların başına zaman zaman 'Could you tell us...' (Bize söyler misiniz...) gibi nezaket öbekleri eklemek mülakata profesyonel bir hava katar.",
                "cautionNote": "Soru ardına soru dizerken konuğun yanıtını onaylamayı ('I see', 'That's interesting') unutmayın."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "Why you choose this profession in your life?",
                "correctExample": "Why do you choose this profession in your life?",
                "rootCause": "Röportaj heyecanıyla 'Why' ardındaki 'do' yardımcı fiilini atlamak.",
                "memoryTip": "Her soru kelimesinin peşine yardımcı fiil korumasını ekle: Why DO you choose!"
            },
            {
                "wrongExample": "How many award do you have?",
                "correctExample": "How many awards do you have?",
                "rootCause": "'How many' sonrası çoğul takısını (-s) unutmak.",
                "memoryTip": "How many gördün mü çoğul yap: How many award-S!"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Mimarlık Dergisi İçin Ödüllü Mimar ile Özel Söyleşi",
            "description": "Gazeteci Michael, ünlü sürdürülebilir mimar Elena Vance ile stüdyosunda röportaj yapar.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Michael", "textEn": "Welcome Elena! What is the main philosophy behind your green building projects?", "textTr": "Hoş geldiniz Elena! Yeşil bina projelerinizin arkasındaki temel felsefe nedir?"},
                {"speaker": "Elena", "textEn": "We design buildings that protect nature. We always use solar energy and recycled materials.", "textTr": "Doğayı koruyan binalar tasarlıyoruz. Her zaman güneş enerjisi ve geri dönüştürülmüş malzemeler kullanıyoruz."},
                {"speaker": "Michael", "textEn": "That is fascinating. How many buildings do you design in a year?", "textTr": "Bu büyüleyici. Yılda kaç tane bina tasarlıyorsunuz?"},
                {"speaker": "Elena", "textEn": "We usually complete about four or five major projects every year.", "textTr": "Her yıl genellikle yaklaşık dört veya beş büyük projeyi tamamlıyoruz."},
                {"speaker": "Michael", "textEn": "And why do you prefer working in Istanbul?", "textTr": "Peki neden İstanbul'da çalışmayı tercih ediyorsunuz?"},
                {"speaker": "Elena", "textEn": "Because Istanbul has a unique history and wonderful architecture.", "textTr": "Çünkü İstanbul benzersiz bir tarihe ve harika bir mimariye sahip."}
            ],
            "culturalNote": "Gazetecilikte soru sormadan önce 'That is fascinating' gibi aktif dinleme cümleleri kurmak çok değerlidir."
        },
        "contrastiveAnalysis": {
            "title": "A1 Soru Sorma Becerilerinin Bütüncül Özeti",
            "englishConcept": "WH- Soru Kelimesi + Yardımcı Fiil + Özne + Esas Fiil + Tamamlayıcılar",
            "turkishDifference": "Türkçede soru ekleri ve kelimeleri cümlenin farklı yerlerine dağılabilirken, İngilizcede soru sözcüğü en başta, yardımcı fiil hemen ardından gelerek sarsılmaz bir blok oluşturur.",
            "directComparison": [
                {
                    "context": "Mülakat sorusu",
                    "en": "How often do you travel abroad?",
                    "trMeaning": "Ne sıklıkla yurt dışına seyahat edersiniz?",
                    "commonErrorTr": "*How often you travel abroad?",
                    "whyItMatters": "Soru kalıbının eksiksiz uygulanması profesyonel intiba bırakır."
                }
            ]
        },
        "memoryHook": "RÖPORTAJ PUSULASI: 5N1K İngilizcesi: What (Ne), Where (Nerede), When (Ne zaman), Why (Neden), Who (Kim), How (Nasıl)!",
        "examples": [
            {
                "en": "What advice do you have for young architecture students?",
                "tr": "Genç mimarlık öğrencileri için ne gibi tavsiyeleriniz var?",
                "highlightedWords": ["What advice do you have"],
                "grammarCategory": "Röportaj kapanış sorusu",
                "contextNote": "Tavsiye isteme sorusu.",
                "breakdownNote": "What advice (soru grubu) + do + you + have + yönelme öbeği."
            },
            {
                "en": "How much time do you spend on each architectural project?",
                "tr": "Her bir mimari proje için ne kadar zaman harcıyorsunuz?",
                "highlightedWords": ["How much time do you spend"],
                "grammarCategory": "How much time + do",
                "contextNote": "Zaman miktarı sorgulama.",
                "breakdownNote": "How much time + do + you + spend + edat öbeği."
            },
            {
                "en": "Who inspires your modern eco-friendly designs?",
                "tr": "Modern çevre dostu tasarımlarınıza kim ilham veriyor?",
                "highlightedWords": ["Who inspires"],
                "grammarCategory": "Who + özne sorusu",
                "contextNote": "İlham kaynağı kişi sorgusu.",
                "breakdownNote": "Who + inspires (fiil doğrudan özne yerine) + nesne."
            }
        ],
        "vocabulary": [
            {"word": "Interview", "phonetic": "/ˈɪn.tə.vjuː/", "partOfSpeech": "noun", "meaningTr": "Röportaj, mülakat", "exampleSentence": "Thank you for this interview."},
            {"word": "Inspire", "phonetic": "/ɪnˈspaɪər/", "partOfSpeech": "verb", "meaningTr": "İlham vermek", "exampleSentence": "Nature inspires her work."},
            {"word": "Sustainable", "phonetic": "/səˈsteɪ.nə.bəl/", "partOfSpeech": "adjective", "meaningTr": "Sürdürülebilir, çevre dostu", "exampleSentence": "We build sustainable houses."},
            {"word": "Philosophy", "phonetic": "/fɪˈlɒs.ə.fi/", "partOfSpeech": "noun", "meaningTr": "Felsefe, anlayış", "exampleSentence": "What is your work philosophy?"}
        ],
        "quickCheck": {
            "question": "Röportaj yaptığınız bir ünlüye 'Güne saat kaçta başlarsınız ve ne sıklıkla spor yaparsınız?' sorularını yöneltirken hangi ikili TAMAMEN DOĞRUDUR?",
            "options": [
                "What time do you start your day and how often do you exercise?",
                "When time do you start your day and how many do you exercise?",
                "What time you start your day and how often you exercise?",
                "At what do you start day and how much do you exercise?"
            ],
            "correctIndex": 0,
            "explanation": "Saat sormak için 'What time do you start', eylem sıklığı sormak için 'how often do you exercise' hatasız kalıplardır."
        },
        "exercise": {
            "prompt": "Röportaj diyaloğundaki boşluğu en uygun soru ifadesiyle tamamlayın:",
            "sentence": "Journalist: '___ do you prefer wooden structures over concrete ones?' - Architect: 'Because wood breathes and stores carbon.'",
            "options": ["Why", "How", "Where", "What"],
            "correctAnswer": "Why",
            "hint": "Cevap 'Because' (Çünkü) ile başladığına göre gazeteci hangi soru kelimesiyle sebebi sormuştur?",
            "explanation": "'Because' ile verilen gerekçe yanıtının soru kelimesi daima 'Why'dır."
        },
        "sentenceBuilder": {
            "promptTr": "Gelecek için kaç tane yeni proje planlıyorsunuz?",
            "targetEn": "How many new projects do you plan for the future",
            "availableWords": ["How", "many", "new", "projects", "do", "you", "plan", "for", "the", "future", "much", "does", "is", "planning"],
            "explanation": "Soru kalıbı (How many new projects) + yardımcı fiil (do) + özne (you) + fiil (plan) + zaman/hedef öbeği (for the future)."
        },
        "summaryTakeaways": [
            "A1 Modül 5 boyunca öğrenilen tüm WH- soru kalıpları gerçekçi bir röportajda birleşti.",
            "Soru sorarken yardımcı fiil (do/does/is/are) öznenin önünde yer almalıdır.",
            "Fiyat ve sayılamayan miktar için 'How much', sayılabilen adet için 'How many' kuralı pekiştirildi.",
            "Sebep sorma 'Why' ile, gerekçe sunma 'Because' ile birbirine bağlandı."
        ]
    }

    # Write out module5_lessons_41_50.ts
    out_dir = "src/services/pedagogy/modules"
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "module5_lessons_41_50.ts")

    content = """// LinguAAI Pedagogical Content — Level A1: Module 5 (Lessons 41–50)
// Soru Sorma Becerileri ve Bilgi Edinme
// 100% bespoke, CEFR A1 compliant, zero generic templates.

import { TopicBlueprint } from '../pedagogicalEngine';

export const module5_lessons_41_50: Record<number, TopicBlueprint> = """ + json.dumps(module5_data, ensure_ascii=False, indent=2) + ";\n"

    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Module 5 written successfully to {out_file} with {len(module5_data)} lessons.")

if __name__ == "__main__":
    generate_module5()
