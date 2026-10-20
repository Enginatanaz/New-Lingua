#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Builder for Module 7 (Lessons 61 to 70)
Level: A1: Şimdiki Zaman: Present Continuous
100% bespoke pedagogy, zero generic templates.
"""

import json
import os

def generate_module7():
    module7_data = {}

    # 61: Şimdiki Zaman (Present Continuous): Formülü ve Mantığı
    module7_data[61] = {
        "skillType": "grammar",
        "concreteCompetency": "A1 standardında konuşma anında devam eden eylemleri anlatmak için Present Continuous zamanını iki parçalı formülüyle (am/is/are + Fiil-ing) hatasız kurabilmek; yardımcı fiili veya -ing takısını eksik bırakmama kuralını uygulamak.",
        "whyItMatters": "Şu an ne yaptığınızı, etrafınızda o anda nelerin olup bittiğini anlatabilmek dilin en canlı ve dinamik iletişim boyutudur.",
        "linguisticLogic": "Present Continuous yapısı ayrılmaz İKİ PARÇADAN oluşan bir yapboz gibidir: 1) To Be Yardımcı Fiili (am / is / are) + 2) Asıl fiilin sonuna eklenen '-ING' takısı. Bu iki parçadan biri bile eksik olursa cümle çöker. *I working YANLIŞTIR ('am' eksik); *I am work YANLIŞTIR ('-ing' eksik); 'I am working' DOĞRUDUR. Türkçe '-yor' şimdiki zaman ekinin tam karşılığıdır.",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: İki Parçalı Çift Motor Kuralı",
                "content": "Şimdiki zaman cümlesi kurarken zihninizde iki motoru aynı anda çalıştırın: Motor 1 = am/is/are, Motor 2 = -ing. Özneye göre yardımcı fiil seçilir: I am, He/She/It is, We/You/They are. Ardından eyleme -ing eklenir.",
                "formula": "Özne + AM / IS / ARE + FİİL-ING",
                "keyPhrase": "I am studying now. | She is cooking dinner. | They are playing outside.",
                "subPoints": [
                    "I am listening to the teacher.",
                    "The phone is ringing.",
                    "We are waiting for the bus."
                ],
                "rationale": "Yardımcı fiil ile -ing ekinin ayrılmaz ikili olduğunu zihne kazar."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: Konuşma Dilinde Kısaltmalar (Contractions)",
                "content": "Günlük konuşmada özne ile to be kaynaşır: I am -> I'm, He is -> He's, She is -> She's, It is -> It's, We are -> We're, They are -> They're. Akıcılık için kısaltmalı telaffuzu benimseyin.",
                "formula": "I'm working / He's reading / We're coming",
                "keyPhrase": "I'm writing an email. | They're having lunch.",
                "subPoints": [
                    "I'm (/aɪm/) tek hecede hızlı söylenir.",
                    "We're (/wɪər/) ve They're (/ðeər/) kaynaşmış seslerdir."
                ],
                "rationale": "Doğal İngilizce konuşma hızını ve refleksini kazandırır."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: Kullanım Sahası (Konuşma Anı)",
                "content": "Present Continuous tam şu anda, kelimeler ağzınızdan dökülürken gerçekleşen eylemleri anlatır: 'Look! It is snowing' (Bak! Kar yağıyor), 'Listen! Someone is knocking on the door' (Dinle! Biri kapıyı çalıyor).",
                "formula": "Look! / Listen! + [Present Continuous Cümlesi]",
                "keyPhrase": "Look, the train is coming! | Be quiet, the baby is sleeping.",
                "subPoints": [
                    "'Look!' ve 'Listen!' gibi uyarı ünlemleri daima bu zamanı çağırır.",
                    "Şu an devam eden süreçlerde kullanılır."
                ],
                "rationale": "Zaman kipi ile bağlam arasındaki görsel ve işitsel bağı kurar."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "İki Bileşen Zorunluluğu Kuralı",
                "formula": "To Be (am/is/are) + Verb-ING",
                "explanation": "Ne 'am/is/are' tek başına şimdiki zaman yapar ne de '-ing' tek başına yeterlidir. İkisi bir araya geldiğinde şimdiki zaman oluşur.",
                "exampleSnippet": "*I reading a book (YANLIŞ) -> I am reading a book (DOĞRU)",
                "cautionNote": "'Am/is/are'ı sakın unutmayın!"
            },
            {
                "ruleTitle": "'Look!' ve 'Listen!' İpucu Kuralı",
                "formula": "Look! / Listen! -> DAİMA Present Continuous",
                "explanation": "Biri size 'Bak!' veya 'Dinle!' diyorsa eylem o saniyede olmaktadır. Ardından daima am/is/are + V-ing gelir.",
                "tipNote": "Bu iki ünlem şimdiki zamanın en büyük habercisidir."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "She working in the garden right now.",
                "correctExample": "She is working in the garden right now.",
                "rootCause": "Yardımcı fiil 'is'i atlayıp doğrudan -ing'li fiili öznenin ardına koymak.",
                "memoryTip": "Köprüyü unutma! She ile working arasına 'IS' koy: She IS working!"
            },
            {
                "wrongExample": "I am work at my computer.",
                "correctExample": "I am working at my computer.",
                "rootCause": "'am' yardımcı fiilini koyup fiilin sonuna '-ing' eklemeyi unutmak.",
                "memoryTip": "'am' varsa fiile -ing kanadını tak: I am WORK-ING!"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Evde Aile Üyelerinin Anlık Eylemlerini Telefonda Anlatma",
            "description": "Dışarıdaki kişi evdeki eşini arayıp evdeki herkesin o an ne yaptığını sorar.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Mark", "textEn": "Hi honey, I'm at the grocery store. What are you doing right now?", "textTr": "Selam hayatım, marketteyim. Şu an ne yapıyorsun?"},
                {"speaker": "Lisa", "textEn": "I am preparing vegetables for dinner, and the children are doing their homework in the living room.", "textTr": "Akşam yemeği için sebzeleri hazırlıyorum, çocuklar da oturma odasında ödevlerini yapıyorlar."},
                {"speaker": "Mark", "textEn": "Is your father still repairing the garage door?", "textTr": "Baban hala garaj kapısını mı tamir ediyor?"},
                {"speaker": "Lisa", "textEn": "No, he is resting on the sofa and watching the news.", "textTr": "Hayır, kanepede dinleniyor ve haberleri izliyor."}
            ],
            "culturalNote": "Telefon açışlarında 'What are you doing?' anlık meşguliyet durumunu öğrenmek için en yaygın sorudur."
        },
        "contrastiveAnalysis": {
            "title": "-yor Eki vs AM/IS/ARE + V-ing",
            "englishConcept": "am/is/are + Verb-ing",
            "turkishDifference": "Türkçede '-yor' eki tek bir ek olarak fiilin sonuna gelir (gel-i-yor-um). İngilizcede ise iki parça vardır: başa gelen 'am/is/are' ve sona eklenen '-ing'. İki taraf da eksiksiz olmak zorundadır.",
            "directComparison": [
                {
                    "context": "Şimdiki zaman",
                    "en": "I am coming.",
                    "trMeaning": "Geliyorum.",
                    "commonErrorTr": "*I coming.",
                    "whyItMatters": "'am' motorunu unutmamak şarttır."
                }
            ]
        },
        "memoryHook": "ŞİMDİKİ ZAMAN FORMÜLÜ: AM/IS/ARE + FİİL-ING! İki bacağı da sağlam basmalı, biri eksik olursa cümle düşer!",
        "examples": [
            {
                "en": "The software engineer is testing the new security update right now.",
                "tr": "Yazılım mühendisi şu anda yeni güvenlik güncellemesini test ediyor.",
                "highlightedWords": ["is testing", "right now"],
                "grammarCategory": "is + V-ing (tekil)",
                "contextNote": "Tekil şahıs anlık eylemi.",
                "breakdownNote": "Özne + is + testing (fiil-ing) + nesne + zaman."
            },
            {
                "en": "We are preparing our luggage for tomorrow morning's flight.",
                "tr": "Yarın sabahki uçuş için valizlerimizi hazırlıyoruz.",
                "highlightedWords": ["are preparing"],
                "grammarCategory": "are + V-ing (çoğul)",
                "contextNote": "Çoğul şahıs anlık hazırlığı.",
                "breakdownNote": "Özne (We) + are + preparing + nesne + edat öbeği."
            },
            {
                "en": "Look! The heavy rain is starting and people are opening their umbrellas.",
                "tr": "Bak! Şiddetli yağmur başlıyor ve insanlar şemsiyelerini açıyorlar.",
                "highlightedWords": ["Look!", "is starting", "are opening"],
                "grammarCategory": "Look! + Present Continuous",
                "contextNote": "Görsel anlık olay akışı.",
                "breakdownNote": "Ünlem + Cümle 1 (is starting) + and + Cümle 2 (are opening)."
            }
        ],
        "vocabulary": [
            {"word": "Prepare", "phonetic": "/prɪˈpeər/", "partOfSpeech": "verb", "meaningTr": "Hazırlamak", "exampleSentence": "She is preparing the report."},
            {"word": "Luggage", "phonetic": "/ˈlʌɡ.ɪdʒ/", "partOfSpeech": "noun", "meaningTr": "Bagaj, valizler", "exampleSentence": "We are packing our luggage."},
            {"word": "Knock", "phonetic": "/nɒk/", "partOfSpeech": "verb", "meaningTr": "Kapı çalmak, vurmak", "exampleSentence": "Someone is knocking on the door."},
            {"word": "Security", "phonetic": "/sɪˈkjʊə.rə.ti/", "partOfSpeech": "noun", "meaningTr": "Güvenlik", "exampleSentence": "Security is our top priority."}
        ],
        "quickCheck": {
            "question": "'Dinle! Biri alt katta piyano çalıyor' cümlesinin doğru İngilizce çevirisi hangisidir?",
            "options": [
                "Listen! Someone is playing the piano downstairs.",
                "Listen! Someone playing the piano downstairs.",
                "Listen! Someone is play piano downstairs.",
                "Listen! Someone does play the piano downstairs."
            ],
            "correctIndex": 0,
            "explanation": "'Someone' tekildir ('is' alır), fiil -ing alır ('playing') ve müzik aleti 'the' alır ('the piano')."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa uygun eylem biçimini yerleştirin:",
            "sentence": "Be quiet please, our manager ___ an important conference call with Tokyo.",
            "options": ["is having", "having", "has having", "are having"],
            "correctAnswer": "is having",
            "hint": "Tekil özne (our manager) konuşma anında bir toplantı yapmaktadır.",
            "explanation": "Tekil üçüncü şahısta Present Continuous 'is + V-ing' biçimindedir: 'is having'."
        },
        "sentenceBuilder": {
            "promptTr": "Öğrenciler şu anda kütüphanede sınavları için ders çalışıyorlar.",
            "targetEn": "The students are studying for their exams in the library right now",
            "availableWords": ["The", "students", "are", "studying", "for", "their", "exams", "in", "the", "library", "right", "now", "is", "study"],
            "explanation": "Çoğul özne (The students) + yardımcı fiil (are) + fiil-ing (studying) + amaç (for their exams) + yer (in the library) + zaman (right now)."
        },
        "summaryTakeaways": [
            "Present Continuous konuşma anında devam eden eylemleri anlatır.",
            "Formül mutlaka iki parçalıdır: AM/IS/ARE + FİİL-ING.",
            "Konuşma dilinde 'I'm, He's, They're' kısaltmaları kullanılır.",
            "'Look!' ve 'Listen!' ünlemleri anlık eylemlerin kesin göstergesidir."
        ]
    }

    # 62: Fiil Sonuna -ing Ekleme Kuralları ve İmla Değişimleri
    module7_data[62] = {
        "skillType": "writing",
        "concreteCompetency": "A1 standardında fiillere '-ing' takısı eklerken ortaya çıkan 3 temel yazım (spelling) kuralını (sessiz -e düşmesi, tek heceli sessiz-sesli-sessiz çift ünsüz kuralı, -ie'nin -y'ye dönüşmesi) hatasız uygulayabilmek.",
        "whyItMatters": "Yazışmalarda, sınavlarda ve e-postalarda 'writeing' veya 'runing' yazmak temel imla hatasıdır. Kuralları bilmek yazınızı anında profesyonel seviyeye taşır.",
        "linguisticLogic": "İngilizcede fiillere '-ing' eklenirken harflerin yan yana geliş fonetiğine göre imla değişimleri gerçekleşir: 1) SESSİZ -E DÜŞMESİ: Fiil okunmayan bir '-e' ile bitiyorsa o '-e' atılır ve '-ing' eklenir (write -> writing, make -> making). 2) ÇİFT ÜNSÜZ KURALI (CVC): Tek heceli bir fiil 'Ünsüz + Sesli + Ünsüz' (Consonant-Vowel-Consonant) sırasıyla bitiyorsa son harf İKİZLEŞİR (run -> running, sit -> sitting, swim -> swimming). 3) -IE DÖNÜŞÜMÜ: '-ie' ile biten fiillerde bu iki harf '-y'ye dönüşür (lie -> lying, die -> dying). 4) DOKUNULMAZ HARFLER: 'w, x, y' harfleri asla ikizleşmez (play -> playing, fix -> fixing).",
        "stepBreakdown": [
            {
                "stepNumber": 1,
                "title": "1. Adım: Sessiz '-e' Harfinin Düşmesi Kuralı",
                "content": "Eğer fiilin son harfi okunmayan bir '-e' ise, '-ing' eklenirken o '-e' harfi silinir: write -> writing, make -> making, drive -> driving, dance -> dancing, come -> coming.",
                "formula": "Fiil sonu -e -> [-e'yi AT] + ing",
                "keyPhrase": "write -> writing  |  make -> making  |  drive -> driving",
                "subPoints": [
                    "*writeing -> KESİNLİKLE YANLIŞ!",
                    "İstisna: Çift 'ee' varsa düşmez: see -> seeing, agree -> agreeing."
                ],
                "rationale": "İngilizcedeki en yaygın imla hatasını ortadan kaldırır."
            },
            {
                "stepNumber": 2,
                "title": "2. Adım: CVC (Sessiz-Sesli-Sessiz) Çiftleme Kuralı",
                "content": "Tek heceli kısa fiillerin son 3 harfine bakın: Sessiz + Sesli + Sessiz ise, son harf iki kez yazılır: run -> running, swim -> swimming, sit -> sitting, get -> getting, stop -> stopping, plan -> planning.",
                "formula": "Ünsüz + Ünlü + Ünsüz -> SON HARFİ ÇİFTLE + ing",
                "keyPhrase": "run -> running  |  swim -> swimming  |  stop -> stopping",
                "subPoints": [
                    "*swiming veya *runing YANLIŞTIR!",
                    "Sesli harfin kısa kalmasını sağlamak için İngilizce çift ünsüz koyar."
                ],
                "rationale": "Fonetik dengenin imlaya yansımasını kavratır."
            },
            {
                "stepNumber": 3,
                "title": "3. Adım: 'W, X, Y' İstisnası ve '-ie -> -y' Değişimi",
                "content": "Kelimelerin sonundaki 'w, x, y' harfleri CVC kuralına uysa bile ASLA çiftlenmez: play -> playing (*playying değil), snow -> snowing, fix -> fixing. '-ie' ile biten fiiller ise '-y' olur: lie -> lying, die -> dying.",
                "formula": "play -> playing  |  fix -> fixing  |  lie -> lying",
                "keyPhrase": "He is lying on the beach. | She is fixing the printer.",
                "subPoints": [
                    "'Y' harfi zaten yarı seslidir, çiftlenmez.",
                    "'Lie' (yalan söylemek veya uzanmak) -> 'lying' olur."
                ],
                "rationale": "İstisnai durumları netleştirerek kuralların aşırı genellenmesini önler."
            }
        ],
        "ruleCards": [
            {
                "ruleTitle": "Son -e Harfini Atma İlkesi",
                "formula": "come + ing = COMING (*comeing değil)",
                "explanation": "Fiil sonunda tek bir -e varsa -ing gelince o e harfi buharlaşır.",
                "exampleSnippet": "She is making coffee. / He is driving home.",
                "tipNote": "Gözün -e görüyorsa -ing eklerken sil!"
            },
            {
                "ruleTitle": "CVC Çiftleme Kuralı",
                "formula": "S-W-I-M -> SWIMMING  |  R-U-N -> RUNNING",
                "explanation": "Kısa tek heceli fiilde son harf iki kez yazılır. Swim -> swimming.",
                "cautionNote": "*stoping YANLIŞTIR; 'stopping' DOĞRUDUR."
            }
        ],
        "commonMistakes": [
            {
                "wrongExample": "She is writeing an email to her boss.",
                "correctExample": "She is writing an email to her boss.",
                "rootCause": "'Write' fiilinin sonundaki -e harfini silmeden doğrudan -ing eklemek.",
                "memoryTip": "Write'taki -e harfi -ing görünce kaçar: WRITING!"
            },
            {
                "wrongExample": "The children are swiming in the pool.",
                "correctExample": "The children are swimming in the pool.",
                "rootCause": "'Swim' fiilindeki CVC kuralını unutup tek 'm' ile yazmak.",
                "memoryTip": "Yüzerken iki kolun gibi iki 'M' harfi gerekir: SWIMMING!"
            }
        ],
        "realWorldContext": {
            "scenarioTitle": "Yazı Atölyesinde E-Posta İmla Kontrolü",
            "description": "Öğretmen öğrencilerin yazdığı şimdiki zaman cümlelerindeki yazım hatalarını düzeltir.",
            "contextType": "daily",
            "dialogue": [
                {"speaker": "Teacher", "textEn": "Look at sentence number two: 'He is runing in the park'. What is wrong here?", "textTr": "İkinci cümleye bakın: 'He is runing in the park'. Burada ne yanlış?"},
                {"speaker": "Student", "textEn": "'Run' ends with consonant-vowel-consonant, so we must double the letter 'n': running!", "textTr": "'Run' ünsüz-ünlü-ünsüz ile bitiyor, bu yüzden 'n' harfini çiftlemeliyiz: running!"},
                {"speaker": "Teacher", "textEn": "Exactly right! And what about 'take'?", "textTr": "Kesinlikle doğru! Peki ya 'take' fiili?"},
                {"speaker": "Student", "textEn": "We drop the final 'e' and write 'taking'.", "textTr": "Sondaki 'e' harfini atarız ve 'taking' yazarız."}
            ],
            "culturalNote": "İngilizce yazışmalarda doğru imla ciddiyet ve özen göstergesidir."
        },
        "contrastiveAnalysis": {
            "title": "İngilizce İmla Değişimleri vs Türkçe",
            "englishConcept": "Writing (e düşer), Running (n çiftleşir), Lying (ie -> y)",
            "turkishDifference": "Türkçede kelime kökü neredeyse hiç değişmez (yaz-ıyor, koş-uyor). İngilizcede ise harflerin düşmesi ve ikizleşmesi kuraldır.",
            "directComparison": [
                {
                    "context": "-e düşmesi",
                    "en": "making",
                    "trMeaning": "yapıyor",
                    "commonErrorTr": "*makeing",
                    "whyItMatters": "-e harfi mutlaka düşer."
                },
                {
                    "context": "harf çiftlemesi",
                    "en": "running",
                    "trMeaning": "koşuyor",
                    "commonErrorTr": "*runing",
                    "whyItMatters": "n harfi çift yazılır."
                }
            ]
        },
        "memoryHook": "İMLA ÜÇGENİ: -e varsa SİL (writing), CVC ise ÇİFTLE (running), -ie ise Y YAP (lying)!",
        "examples": [
            {
                "en": "They are planning an international conference for next spring.",
                "tr": "Gelecek bahar için uluslararası bir konferans planlıyorlar.",
                "highlightedWords": ["are planning"],
                "grammarCategory": "plan -> planning (çift n)",
                "contextNote": "Planlama eylemi.",
                "breakdownNote": "Plan (CVC) -> planning (çift 'n')."
            },
            {
                "en": "My colleague is driving to the regional office right now.",
                "tr": "Meslektaşım şu anda bölge ofisine arabayla gidiyor.",
                "highlightedWords": ["is driving"],
                "grammarCategory": "drive -> driving (-e düşmesi)",
                "contextNote": "Araç kullanma eylemi.",
                "breakdownNote": "Drive (-e ile biter) -> driving (-e düştü)."
            },
            {
                "en": "The mechanic is fixing the broken cooling system.",
                "tr": "Tamirci bozuk soğutma sistemini tamir ediyor.",
                "highlightedWords": ["is fixing"],
                "grammarCategory": "fix -> fixing (x çiftlenmez)",
                "contextNote": "Tamirat eylemi.",
                "breakdownNote": "Fix ('x' ile biter, çiftlenmez) -> fixing."
            }
        ],
        "vocabulary": [
            {"word": "Spelling", "phonetic": "/ˈspel.ɪŋ/", "partOfSpeech": "noun", "meaningTr": "Yazım, imla", "exampleSentence": "Check the spelling of this word."},
            {"word": "Consonant", "phonetic": "/ˈkɒn.sə.nənt/", "partOfSpeech": "noun", "meaningTr": "Ünsüz (sessiz) harf", "exampleSentence": "'B' is a consonant."},
            {"word": "Vowel", "phonetic": "/vaʊəl/", "partOfSpeech": "noun", "meaningTr": "Ünlü (sesli) harf", "exampleSentence": "English has five vowel letters."},
            {"word": "Mechanic", "phonetic": "/məˈkæn.ɪk/", "partOfSpeech": "noun", "meaningTr": "Tamirci, teknisyen", "exampleSentence": "The mechanic is inspecting the car."}
        ],
        "quickCheck": {
            "question": "Aşağıdaki fiillerden hangisine '-ing' takısı TAMAMEN DOĞRU eklenmiştir?",
            "options": [
                "sitting, writing, lying, playing",
                "siting, writeing, lieing, playying",
                "sitting, writting, lying, plaing",
                "sitting, writing, lyeing, playying"
            ],
            "correctIndex": 0,
            "explanation": "Sit -> sitting (çift t), write -> writing (e düşer), lie -> lying (ie->y), play -> playing (y çiftlenmez)."
        },
        "exercise": {
            "prompt": "Cümledeki boşluğa doğru imla ile yazılmış kelimeyi yerleştirin:",
            "sentence": "The athletes are ___ around the Olympic stadium tracks.",
            "options": ["running", "runing", "runnnig", "runneing"],
            "correctAnswer": "running",
            "hint": "'Run' tek heceli ve sessiz-sesli-sessiz (CVC) ile biter. Son harf ne olur?",
            "explanation": "'Run' fiilinde son harf çiftlenerek 'running' şeklinde yazılır."
        },
        "sentenceBuilder": {
            "promptTr": "Mimar şu anda yeni bina için modern planlar çiziyor.",
            "targetEn": "The architect is drawing modern plans for the new building right now",
            "availableWords": ["The", "architect", "is", "drawing", "modern", "plans", "for", "the", "new", "building", "right", "now", "are", "drawwing"],
            "explanation": "Özne (The architect) + is + fiil-ing (drawing - w çiftlenmez) + nesne (modern plans) + amaç (for the new building) + zaman (right now)."
        },
        "summaryTakeaways": [
            "Fiil sonunda okunmayan tek '-e' varsa silinir: write -> writing, drive -> driving.",
            "Tek heceli CVC (ünsüz-ünlü-ünsüz) fiillerde son harf ikizleşir: run -> running, swim -> swimming.",
            "'W, X, Y' harfleri CVC olsa bile ASLA çiftlenmez: play -> playing, fix -> fixing.",
            "'-ie' ile biten fiiller '-y'ye dönüşür: lie -> lying, die -> dying."
        ]
    }

    # Import lessons 63 to 70
    import sys
    sys.path.append('.')
    from scripts.builders.module7_part2 import module7_part2_data
    from scripts.builders.module7_part3 import module7_part3_data
    module7_data.update(module7_part2_data)
    module7_data.update(module7_part3_data)

    print(f"Total lessons in Module 7: {len(module7_data)}")

    # Write out module7_lessons_61_70.ts
    out_dir = "src/services/pedagogy/modules"
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "module7_lessons_61_70.ts")

    content = """// LinguAAI Pedagogical Content — Level A1: Module 7 (Lessons 61–70)
// Şimdiki Zaman: Present Continuous
// 100% bespoke, CEFR A1 compliant, zero generic templates.

import { TopicBlueprint } from '../pedagogicalEngine';

export const module7_lessons_61_70: Record<number, TopicBlueprint> = """ + json.dumps(module7_data, ensure_ascii=False, indent=2) + ";\n"

    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Module 7 written successfully to {out_file} with {len(module7_data)} lessons.")

if __name__ == "__main__":
    generate_module7()
