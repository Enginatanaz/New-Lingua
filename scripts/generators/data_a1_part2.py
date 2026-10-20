# -*- coding: utf-8 -*-
"""
LinguAAI — A1 Level Master Pedagogical Builder: Part 2 (Lessons 21 to 50)
Modules 3, 4, 5
Zero templates, zero generic fallbacks, 100% bespoke pedagogy.
"""

def get_a1_part2_topics():
    topics = {}

    # -------------------------------------------------------------
    # MODULE 3: Geniş Zaman ve Günlük Rutinler (Lessons 21-30)
    # -------------------------------------------------------------
    topics[21] = {
        "skill": "grammar",
        "concrete": "A1 standardında Geniş Zaman (Present Simple) olumlu cümlelerini rutinler ve alışkanlıklar için (I wake up, We work) hatasız kurabilmek.",
        "why": "Günlük alışkanlıkları, iş rutinlerini ve genel gerçekleri anlatmak dilin temel omurgasıdır.",
        "logic": "İngilizcede I, you, we, they özneleriyle fiil doğrudan sözlük haliyle (V1 - Bare Infinitive) kullanılır; ek almaz.",
        "steps": [
            {"title": "1. Adım: Özne ve Fiil Dizilimi", "content": "I, You, We, They öznelerinden sonra fiil yalın halde gelir.", "formula": "Subject (I/You/We/They) + V1 + Object", "keyPhrase": "I drink coffee every morning.", "subPoints": ["Özne ile fiil arasına 'am/is/are' ASLA konmaz"]},
            {"title": "2. Adım: Zaman Belirteçleri", "content": "Cümle sonuna 'every day', 'in the morning' gibi zaman zarfları eklenir.", "formula": "Subject + V1 + Object + [every day / on weekdays]", "keyPhrase": "We start work at nine o'clock every day.", "subPoints": ["Zaman ifadeleri cümlenin ritmini belirler"]},
            {"title": "3. Adım: Genel Gerçekler", "content": "Değişmeyen doğa ve bilim gerçekleri de bu zamanla anlatılır.", "formula": "Water boils at 100 degrees Celsius.", "keyPhrase": "The sun rises in the east.", "subPoints": ["Genel doğrular her zaman Present Simple gerektirir"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Geniş Zamanda 'To Be' Yasağı", "formula": "*I am drink coffee (YANLIŞ) -> I drink coffee (DOĞRU)", "explanation": "Geniş zamanda eylem fiili (drink, go, work) varken öznenin yanına am/is/are eklenemez.", "exampleSnippet": "They live in London. / I work at a bank.", "tipNote": "Eylem varsa am/is/are yok!"},
            {"ruleTitle": "Rutin Zaman Belirteçleri", "formula": "every day / every week / on Mondays / in the morning", "explanation": "Tekrarlanan alışkanlıklar zaman zarflarıyla pekiştirilir.", "cautionNote": "Zaman zarfları genellikle cümlenin en sonuna konur."}
        ],
        "mistakes": [
            {"wrongExample": "I am work in a hospital.", "correctExample": "I work in a hospital.", "rootCause": "Türkçe 'çalışıyorum' veya durum eki alışkanlığıyla eylemin önüne am/is/are ekleme hatası.", "memoryTip": "Eylem fiili varsa am/is/are kapı dışarı: I WORK!"},
            {"wrongExample": "We lives in Istanbul.", "correctExample": "We live in Istanbul.", "rootCause": "'We' çoğul öznesine yanlışlıkla -s takısı eklemek.", "memoryTip": "-s takısı sadece 3. tekil şahsa (he/she/it) aittir; WE takı almaz!"}
        ],
        "dialogue": [
            {"speaker": "Colleague", "textEn": "What time do you usually start work in the morning?", "textTr": "Sabahları genelde saat kaçta işe başlarsın?"},
            {"speaker": "Emma", "textEn": "I arrive at the office at half past eight and drink a cup of coffee.", "textTr": "Ofise sekiz buçukta varırım ve bir fincan kahve içerim."},
            {"speaker": "Colleague", "textEn": "Do you check your emails before the morning meeting?", "textTr": "Sabah toplantısından önce e-postalarını kontrol eder misin?"},
            {"speaker": "Emma", "textEn": "Yes, I reply to urgent client inquiries first.", "textTr": "Evet, önce acil müşteri taleplerine yanıt veririm."}
        ],
        "contrastive": {"conceptA": "Türkçe Geniş Zaman Eki (-r, -ar, -er)", "conceptB": "İngilizce Yalın Fiil (V1)", "keyDifference": "Türkçede fiil köküne zaman eki eklenir (çalış-ır-ım). İngilizcede I, you, we, they için fiil sözlük haliyle kalır (work).", "exampleA": "Her gün erken kalkarım.", "exampleB": "I wake up early every day."},
        "memoryHook": "Geniş Zaman Formülü: I, You, We, They + YALIN FİİL (V1)!",
        "examples": [
            {"en": "Our software developers write clean efficient code every single day.", "tr": "Yazılım geliştiricilerimiz her gün temiz ve verimli kod yazar.", "highlightedWords": ["write clean efficient code"], "grammarCategory": "Çoğul Rutin", "contextNote": "İş rutini bildirimi.", "breakdownNote": "Çoğul özne (developers) + yalın fiil (write) + nesne + zaman zarfı."},
            {"en": "I drink two cups of green tea before my morning workout.", "tr": "Sabah antrenmanımdan önce iki fincan yeşil çay içerim.", "highlightedWords": ["drink two cups of green tea"], "grammarCategory": "1. Tekil Rutin", "contextNote": "Kişisel sabah rutini.", "breakdownNote": "Özne (I) + yalın fiil (drink) + miktar ve nesne + zaman edatı."},
            {"en": "They commute to the central business district by underground train.", "tr": "Onlar merkezi iş bölgesine metro treniyle gidip gelirler.", "highlightedWords": ["commute to", "by underground train"], "grammarCategory": "Ulaşım Alışkanlığı", "contextNote": "Günlük işe gidiş gelişi.", "breakdownNote": "Özne (They) + fiil (commute) + yer + vasıta edatı."}
        ],
        "vocab": [
            {"word": "Commute", "phonetic": "/kəˈmjuːt/", "partOfSpeech": "verb", "meaningTr": "İşe gidip gelmek", "exampleSentence": "I commute to work by bus."},
            {"word": "Inquiry", "phonetic": "/ɪnˈkwaɪə.ri/", "partOfSpeech": "noun", "meaningTr": "Soru, bilgi talebi", "exampleSentence": "We received a client inquiry."},
            {"word": "Routine", "phonetic": "/ruːˈtiːn/", "partOfSpeech": "noun", "meaningTr": "Rutin, alışılmış düzen", "exampleSentence": "Exercise is part of my daily routine."},
            {"word": "Urgent", "phonetic": "/ˈɜː.dʒənt/", "partOfSpeech": "adjective", "meaningTr": "Acil, ivedi", "exampleSentence": "This is an urgent email message."}
        ],
        "qc_q": "Present Simple'da 'I, You, We, They' özneleriyle olumlu cümle kurarken fiil nasıl kullanılır?",
        "qc_opts": ["Fiil hiçbir ek almadan yalın halde (V1) kalır", "Fiile mutlaka -s takısı eklenir", "Fiilin önüne am/is/are konur", "Fiile -ing takısı eklenir"],
        "qc_idx": 0,
        "qc_expl": "Present Simple'da I, You, We, They özneleriyle fiil en yalın sözlük halinde (V1) kullanılır.",
        "ex_sent": "Most financial analysts in our department ___ their daily reports before noon.",
        "ex_opts": ["complete", "completes", "are complete", "completing"],
        "ex_ans": "complete",
        "ex_hint": "'Most financial analysts' çoğul bir öznedir (They).",
        "ex_expl": "Çoğul öznelerde fiil yalın halde gelir: 'analysts complete'.",
        "sb_tr": "Yazılım geliştiricilerimiz her sabah dokuzda temiz kod yazar ve toplantı yapar.",
        "sb_en": "Our software developers write clean code and attend meetings every morning at nine",
        "sb_dist": ["writes", "are", "attending", "to"],
        "sb_expl": "Çoğul özne (Our software developers) + fiiller (write clean code and attend meetings) + zaman (every morning at nine)."
    }

    topics[22] = {
        "skill": "grammar",
        "concrete": "A1 standardında 3. tekil şahıslarda (He, She, It) fiile eklenen -s, -es ve -ies takısı kurallarını hatasız uygulayabilmek.",
        "why": "İngilizce konuşurken Türk öğrencilerin en yaygın yaptığı hata 3. tekil şahıstaki '-s' takısını unutmaktır.",
        "logic": "İngilizcede özne tekil bir üçüncü şahıs (He, She, It, Tom, the doctor) olduğunda geniş zamanda fiilin sonuna '-s' takısı eklenir.",
        "steps": [
            {"title": "1. Adım: Standart -s Takısı", "content": "Çoğu fiilin sonuna doğrudan '-s' eklenir: work -> works, live -> lives.", "formula": "He / She / It + Verb-s", "keyPhrase": "She works hard. He lives here.", "subPoints": ["Özne tekil kişi veya nesne olmalıdır"]},
            {"title": "2. Adım: -es Takısı Alan Fiiller", "content": "-ch, -sh, -ss, -x, -o ile biten fiillere '-es' eklenir: watch -> watches, go -> goes.", "formula": "Verb ending in -ch/-sh/-ss/-x/-o + -es", "keyPhrase": "He watches the news. She goes to school.", "subPoints": ["Telaffuzda /ɪz/ sesi çıkar"]},
            {"title": "3. Adım: Sessiz + Y ile Biten Fiiller (-ies)", "content": "Sessiz harf + y ile bitenlerde y düşer, '-ies' gelir: study -> studies, fly -> flies.", "formula": "Consonant + y -> -ies (study -> studies)", "keyPhrase": "He studies law at university.", "subPoints": ["Sesli + y olanlarda sadece -s gelir: play -> plays"]}
        ],
        "ruleCards": [
            {"ruleTitle": "3. Tekil Şahıs -s Kuralı", "formula": "He / She / It / Tekil İsim + Verb + -s / -es / -ies", "explanation": "Geniş zamanda özne he/she/it ise fiil çıplak kalamaz; mutlaka -s sesini almalıdır.", "exampleSnippet": "Alex speaks fluent English. / Sarah watches documentaries.", "tipNote": "3. tekil şahıs gördüğün an fiilin sonuna -s takısını kondur!"},
            {"ruleTitle": "Study vs Play Kuralı", "formula": "study -> studies (sessiz+y)  <-->  play -> plays (sesli+y)", "explanation": "'y'den önceki harf sessizse y düşer 'ies' olur; sesliyse y kalır sadece 's' eklenir.", "cautionNote": "*plaies YANLIŞTIR; 'plays' DOĞRUDUR."}
        ],
        "mistakes": [
            {"wrongExample": "He work in a big company.", "correctExample": "He works in a big company.", "rootCause": "3. tekil şahısta fiilin sonundaki -s takısını unutma refleksi.", "memoryTip": "He, She, It gördüysen fiile -S takısını tak!"},
            {"wrongExample": "She watch TV every evening.", "correctExample": "She watches TV every evening.", "rootCause": "-ch ile biten fiile -es getirmeyi atlamak.", "memoryTip": "Watch, wash, pass, go fiillerine -ES ekle: watches!"}
        ],
        "dialogue": [
            {"speaker": "Manager", "textEn": "How does Lisa manage her daily responsibilities?", "textTr": "Lisa günlük sorumluluklarını nasıl yönetir?"},
            {"speaker": "Assistant", "textEn": "She arrives early, reviews all reports, and organizes the team schedule.", "textTr": "Erken gelir, tüm raporları inceler ve ekip programını organize eder."},
            {"speaker": "Manager", "textEn": "Does she also communicate directly with international clients?", "textTr": "Uluslararası müşterilerle de doğrudan iletişim kurar mı?"},
            {"speaker": "Assistant", "textEn": "Yes, she speaks German fluently and handles all European accounts.", "textTr": "Evet, akıcı Almanca konuşur ve tüm Avrupa hesaplarını yönetir."}
        ],
        "contrastive": {"conceptA": "Türkçe 3. Tekil Şahıs Çekimi (Eksiz)", "conceptB": "İngilizce Zorunlu -s Takısı", "keyDifference": "Türkçede 3. şahısta fiile ek gelmez (O gel-ir, o oku-r). İngilizcede ise tam aksine diğer şahıslar eksizken, 3. şahıs zorunlu '-s' takısı alır.", "exampleA": "O her gün koşar.", "exampleB": "He runs every day."},
        "memoryHook": "3. Tekil Kuralı: He, She, It fiile -S takar: He works, she reads, it runs!",
        "examples": [
            {"en": "Dr. Miller analyzes financial market trends with extreme precision every morning.", "tr": "Dr. Miller her sabah finansal piyasa trendlerini son derece titizlikle analiz eder.", "highlightedWords": ["analyzes financial market trends"], "grammarCategory": "3. Tekil Şahıs", "contextNote": "Uzman iş rutini.", "breakdownNote": "Tekil özne (Dr. Miller) + fiil-s (analyzes) + nesne + zaman zarfı."},
            {"en": "The senior architect designs energy-efficient residential complexes in Stockholm.", "tr": "Kıdemli mimar Stockholm'de enerji tasarruflu konut kompleksleri tasarlar.", "highlightedWords": ["designs energy-efficient complexes"], "grammarCategory": "Mesleki Eylem", "contextNote": "Mimarın çalışması.", "breakdownNote": "Tekil özne + fiil-s (designs) + sıfat tamlaması + yer edatı."},
            {"en": "She teaches advanced academic writing to international postgraduate students.", "tr": "O uluslararası lisansüstü öğrencilerine ileri akademik yazım dersi verir.", "highlightedWords": ["teaches advanced academic writing"], "grammarCategory": "-es Alan Fiil", "contextNote": "Öğretim faaliyeti.", "breakdownNote": "Özne (She) + teach-es + nesne + kitle edatı."}
        ],
        "vocab": [
            {"word": "Analyze", "phonetic": "/ˈæn.əl.aɪz/", "partOfSpeech": "verb", "meaningTr": "Analiz etmek, incelemek", "exampleSentence": "She analyzes sales data daily."},
            {"word": "Precision", "phonetic": "/prɪˈsɪʒ.ən/", "partOfSpeech": "noun", "meaningTr": "Kesinlik, hassasiyet, titizlik", "exampleSentence": "Work with extreme precision."},
            {"word": "Residential", "phonetic": "/ˌrez.ɪˈden.ʃəl/", "partOfSpeech": "adjective", "meaningTr": "Yerleşimle ilgili, konut", "exampleSentence": "This is a quiet residential area."},
            {"word": "Postgraduate", "phonetic": "/ˌpəʊstˈɡrædʒ.u.ət/", "partOfSpeech": "noun", "meaningTr": "Lisansüstü öğrenci", "exampleSentence": "She is a postgraduate researcher."}
        ],
        "qc_q": "Aşağıdaki cümlelerin hangisinde 3. tekil şahıs -s/-es kuralı TAMAMEN DOĞRU uygulanmıştır?",
        "qc_opts": ["My brother watches international news and reads economic articles.", "My brother watch international news and read economic articles.", "My brother watchs international news.", "My brother is watch international news."],
        "qc_idx": 0,
        "qc_expl": "'My brother' tekil üçüncü şahıstır (He); 'watch' fiili -es alarak 'watches', 'read' fiili -s alarak 'reads' olur.",
        "ex_sent": "The lead software engineer carefully ___ all security protocols before deployment.",
        "ex_opts": ["checks", "check", "checking", "are check"],
        "ex_ans": "checks",
        "ex_hint": "'The lead software engineer' 3. tekil şahıstır (He/She).",
        "ex_expl": "Üçüncü tekil şahıslarda fiilin sonuna -s takısı gelir: 'engineer checks'.",
        "sb_tr": "Kıdemli mimar enerji tasarruflu evler tasarlar ve şantiyeyi her gün denetler.",
        "sb_en": "The senior architect designs energy efficient homes and inspects the construction site daily",
        "sb_dist": ["design", "inspect", "are", "designing"],
        "sb_expl": "Tekil özne (The senior architect) + fiil-s (designs energy efficient homes) + bağlaç ve fiil-s (and inspects the construction site daily)."
    }

    topics[23] = {
        "skill": "grammar",
        "concrete": "A1 standardında Geniş Zaman olumsuz cümlelerini don't ve doesn't yardımcı fiilleriyle hatasız kurabilmek.",
        "why": "Neleri yapmadığımızı, rutinlerimizin dışındaki durumları ve sevmediğimiz şeyleri net bir şekilde ifade etmek temel gereksinimdir.",
        "logic": "Present Simple olumsuz yapılırken 'don't' (I, you, we, they) veya 'doesn't' (he, she, it) kullanılır. 'Doesn't' kullanıldığında fiildeki '-s' takısı DÜŞER, fiil yalın kalır.",
        "steps": [
            {"title": "1. Adım: I, You, We, They ile 'Don't'", "content": "I, You, We, They öznelerinden sonra 'don't + V1' gelir.", "formula": "Subject (I/You/We/They) + don't + V1", "keyPhrase": "I don't drink coffee after 6 PM.", "subPoints": ["don't = do not kısaltmasıdır"]},
            {"title": "2. Adım: He, She, It ile 'Doesn't'", "content": "3. tekil şahıslarda 'doesn't + V1' kullanılır.", "formula": "Subject (He/She/It) + doesn't + V1", "keyPhrase": "He doesn't eat meat. She doesn't drive.", "subPoints": ["doesn't = does not kısaltmasıdır"]},
            {"title": "3. Adım: -s Takısının Düşme Kuralı", "content": "'Doesn't' zaten '-es' takısını taşıdığından, ana fiile bir daha -s takısı ASLA eklenmez.", "formula": "*He doesn't works (YANLIŞ) -> He doesn't work (DOĞRU)", "keyPhrase": "She doesn't like spicy food.", "subPoints": ["İki kere -s kullanılmaz"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Doesn't Sonrası Yalın Fiil Kuralı", "formula": "*She doesn't drinks (YANLIŞ) -> She doesn't drink (DOĞRU)", "explanation": "Does/Doesn't yardımcı fiili -s takısını bünyesine almıştır. Bu yüzden ana fiil daima sözlük haline (V1) döner.", "exampleSnippet": "He doesn't work on Sundays. (doesn't works DENMEZ!)", "tipNote": "Cümlede DOESN'T varsa ana fiil tertemiz ve yalındır!"},
            {"ruleTitle": "Don't vs Doesn't Şahıs Eşleşmesi", "formula": "I / You / We / They = DON'T  <-->  He / She / It = DOESN'T", "explanation": "Öznenin sayısına ve şahsına göre doğru yardımcı fiil seçilmelidir.", "cautionNote": "*He don't know YANLIŞTIR; 'He doesn't know' DOĞRUDUR."}
        ],
        "mistakes": [
            {"wrongExample": "He doesn't works here.", "correctExample": "He doesn't work here.", "rootCause": "Doesn't kullanıldığı halde fiile hala -s takısı takmaya devam etme hatası.", "memoryTip": "Doesn't -s takısını yutar, fiil çıplak kalır: Doesn't work!"},
            {"wrongExample": "She don't know the answer.", "correctExample": "She doesn't know the answer.", "rootCause": "3. tekil şahısta 'doesn't' yerine 'don't' kullanmak.", "memoryTip": "He, She, It için DOESN'T kullanılır!"}
        ],
        "dialogue": [
            {"speaker": "Colleague", "textEn": "Does Sarah take the company shuttle bus to the office?", "textTr": "Sarah ofise şirket servis otobüsüyle mi gelir?"},
            {"speaker": "David", "textEn": "No, she doesn't use the shuttle because she prefers cycling.", "textTr": "Hayır, servisi kullanmaz çünkü bisiklete binmeyi tercih eder."},
            {"speaker": "Colleague", "textEn": "And what about Alex and Mark? Do they cycle too?", "textTr": "Peki ya Alex ve Mark? Onlar da mı bisiklet sürer?"},
            {"speaker": "David", "textEn": "No, they don't cycle; they take the underground train together.", "textTr": "Hayır, bisiklet sürmezler; birlikte metroya binerler."}
        ],
        "contrastive": {"conceptA": "Türkçe Fiil Olumsuzluk Eki (-me, -ma)", "conceptB": "İngilizce Don't / Doesn't Yardımcı Fiili", "keyDifference": "Türkçede olumsuzluk eki fiilin içine yerleşir (bil-mi-yor). İngilizcede özne ile fiil arasına bağımsız 'don't / doesn't' sözcüğü girer.", "exampleA": "O kahve içmez.", "exampleB": "He doesn't drink coffee."},
        "memoryHook": "Olumsuz Formülü: I/You/We/They DON'T + V1, He/She/It DOESN'T + V1!",
        "examples": [
            {"en": "Our lead researcher doesn't publish unverified data in scientific journals.", "tr": "Baş araştırmacımız bilimsel dergilerde doğrulanmamış veri yayımlamaz.", "highlightedWords": ["doesn't publish unverified data"], "grammarCategory": "3. Tekil Olumsuz", "contextNote": "Akademik titizlik ilkesi.", "breakdownNote": "Tekil özne + doesn't + yalın fiil (publish) + nesne + yer."},
            {"en": "We don't accept cash payments for online international transactions.", "tr": "Çevrim içi uluslararası işlemler için nakit ödeme kabul etmiyoruz.", "highlightedWords": ["don't accept cash payments"], "grammarCategory": "Çoğul Olumsuz", "contextNote": "Şirket ödeme kuralı.", "breakdownNote": "Özne (We) + don't + yalın fiil (accept) + nesne + edat öbeği."},
            {"en": "The corporate library doesn't lend rare archival manuscripts to the public.", "tr": "Kurumsal kütüphane nadir arşiv el yazmalarını halka ödünç vermez.", "highlightedWords": ["doesn't lend rare archival manuscripts"], "grammarCategory": "Kurum Olumsuzu", "contextNote": "Kütüphane kuralı.", "breakdownNote": "Tekil özne (library) + doesn't + yalın fiil (lend) + nesne."}
        ],
        "vocab": [
            {"word": "Unverified", "phonetic": "/ˌʌnˈver.ɪ.faɪd/", "partOfSpeech": "adjective", "meaningTr": "Doğrulanmamış, kanıtlanmamış", "exampleSentence": "Do not share unverified rumors."},
            {"word": "Transaction", "phonetic": "/trænˈzæk.ʃən/", "partOfSpeech": "noun", "meaningTr": "İşlem, muamele", "exampleSentence": "The bank transaction is complete."},
            {"word": "Archival", "phonetic": "/ɑːˈkaɪ.vəl/", "partOfSpeech": "adjective", "meaningTr": "Arşivsel, arşiv niteliğinde", "exampleSentence": "We examined archival documents."},
            {"word": "Manuscript", "phonetic": "/ˈmæn.jə.skrɪpt/", "partOfSpeech": "noun", "meaningTr": "El yazması eser", "exampleSentence": "The ancient manuscript is protected."}
        ],
        "qc_q": "'O hafta sonları çalışmaz' cümlesinin dilbilgisel olarak EN DOĞRU İngilizce karşılığı hangisidir?",
        "qc_opts": ["He doesn't work on weekends.", "He doesn't works on weekends.", "He don't work on weekends.", "He not works on weekends."],
        "qc_idx": 0,
        "qc_expl": "3. tekil şahısta olumsuzluk 'doesn't + yalın fiil' ile kurulur: 'doesn't work'.",
        "ex_sent": "Dr. Davis is very strict about safety; he ___ allow unauthorized personnel into the laboratory.",
        "ex_opts": ["doesn't", "don't", "isn't", "not"],
        "ex_ans": "doesn't",
        "ex_hint": "'Dr. Davis' 3. tekil şahıstır (He) ve fiil yalın haldedir (allow).",
        "ex_expl": "Üçüncü tekil şahısta geniş zaman olumsuzu 'doesn't' ile yapılır.",
        "sb_tr": "Biz çevrim içi uluslararası işlemler için nakit ödeme kabul etmiyoruz.",
        "sb_en": "We do not accept cash payments for online international transactions",
        "sb_dist": ["does", "accepts", "are", "not accept"],
        "sb_expl": "Çoğul özne ve olumsuz (We do not accept) + nesne (cash payments) + edat öbeği (for online international transactions)."
    }

    topics[24] = {
        "skill": "grammar",
        "concrete": "A1 standardında Geniş Zaman soru cümlelerini Do ve Does yardımcı fiilleriyle kurabilmek ve kısa cevapları hatasız verebilmek.",
        "why": "Alışkanlıkları, rutinleri ve tercihleri sormak günlük iletişimin en temel bilgi edinme aracıdır.",
        "logic": "Geniş zamanda soru yaparken cümlenin en başına 'Do' (I/you/we/they) veya 'Does' (he/she/it) yardımcı fiili gelir. 'Does' geldiğinde ana fiildeki '-s' takısı DÜŞER ve fiil yalın kalır.",
        "steps": [
            {"title": "1. Adım: Do ile Soru Sorma (Do you...?)", "content": "I, you, we, they özneleri için cümlenin başına 'Do' konur.", "formula": "Do + Subject (you/we/they) + V1 + Object?", "keyPhrase": "Do you live in London? / Do they speak English?", "subPoints": ["Kısa cevap: Yes, I do. / No, I don't."]},
            {"title": "2. Adım: Does ile Soru Sorma (Does he/she...?)", "content": "He, she, it özneleri için cümlenin başına 'Does' gelir.", "formula": "Does + Subject (he/she/it) + V1 + Object?", "keyPhrase": "Does he work here? / Does she drive?", "subPoints": ["Kısa cevap: Yes, he does. / No, he doesn't."]},
            {"title": "3. Adım: Ana Fiilin Yalın Kalma Kuralı", "content": "'Does' sorusunda ana fiile asla '-s' takısı eklenmez.", "formula": "*Does he works? (YANLIŞ) -> Does he work? (DOĞRU)", "keyPhrase": "Does she like classical music?", "subPoints": ["-s takısı 'does' sözcüğünün içine taşınmıştır"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Does Sorusunda Fiil Yalındır!", "formula": "*Does she speaks English? (YANLIŞ) -> Does she speak English? (DOĞRU)", "explanation": "Soru cümlesinde 'Does' varsa ana fiil mutlaka yalın halde (V1) kalmalıdır.", "exampleSnippet": "Does Tom live in Paris? - Yes, he does.", "tipNote": "DOES başa geçtiyse fiildeki -S uçar gider!"},
            {"ruleTitle": "Kısa Cevap Formülü", "formula": "Yes, I do / No, I don't  <-->  Yes, she does / No, she doesn't", "explanation": "Kısa cevaplarda ana fiil tekrarlanmaz; sadece yardımcı fiil (do/does) kullanılır.", "cautionNote": "'Do you smoke? - Yes, I smoke' yerine 'Yes, I do' demek çok daha doğaldır."}
        ],
        "mistakes": [
            {"wrongExample": "Does he works in an office?", "correctExample": "Does he work in an office?", "rootCause": "'Does' kullanıldığı halde fiile hala -s takısı ekleme hatası.", "memoryTip": "Does varsa ana fiil yalındır: Does he work?"},
            {"wrongExample": "Do she speak Italian?", "correctExample": "Does she speak Italian?", "rootCause": "3. tekil şahıs için 'do' yardımcı fiilini seçme hatası.", "memoryTip": "He, She, It ile soru sorarken başına DOES getir!"}
        ],
        "dialogue": [
            {"speaker": "Recruiter", "textEn": "Do you commute to work by public transport every day?", "textTr": "Her gün işe toplu taşımayla mı gidip gelirsiniz?"},
            {"speaker": "Applicant", "textEn": "Yes, I do. I take the underground train directly to the center.", "textTr": "Evet, öyle yaparım. Doğrudan merkeze giden metroya binerim."},
            {"speaker": "Recruiter", "textEn": "Does your current role require international travel?", "textTr": "Mevcut göreviniz uluslararası seyahat gerektiriyor mu?"},
            {"speaker": "Applicant", "textEn": "No, it doesn't. Most of our meetings are conducted online.", "textTr": "Hayır, gerektirmiyor. Toplantılarımızın çoğu çevrim içi yapılıyor."}
        ],
        "contrastive": {"conceptA": "Türkçe Soru Eki (-mı, -mi)", "conceptB": "İngilizce Do / Does Yardımcı Fiili", "keyDifference": "Türkçede cümle sonuna soru eki gelir (İşe gider misin?). İngilizcede cümlenin başına 'Do / Does' yardımcı fiili konur.", "exampleA": "Sen kahve içer misin?", "exampleB": "Do you drink coffee?"},
        "memoryHook": "Soru Formülü: DO you V1? / DOES he V1?",
        "examples": [
            {"en": "Does your organization offer specialized training programs for new interns?", "tr": "Kurumunuz yeni stajyerler için özel eğitim programları sunuyor mu?", "highlightedWords": ["Does your organization offer"], "grammarCategory": "3. Tekil Soru", "contextNote": "Kurumsal imkan sorma.", "breakdownNote": "Does + tekil özne (organization) + yalın fiil (offer) + nesne."},
            {"en": "Do all department heads attend the weekly strategic alignment meeting?", "tr": "Tüm bölüm başkanları haftalık stratejik uyum toplantısına katılır mı?", "highlightedWords": ["Do all department heads attend"], "grammarCategory": "Çoğul Soru", "contextNote": "Toplantı katılımı.", "breakdownNote": "Do + çoğul özne (heads) + yalın fiil (attend) + nesne."},
            {"en": "How often do you review your personal and professional development goals?", "tr": "Kişisel ve profesyonel gelişim hedeflerinizi ne sıklıkla gözden geçirirsiniz?", "highlightedWords": ["do you review your personal goals"], "grammarCategory": "Soru Kalıbı", "contextNote": "Gelişim sorgulama.", "breakdownNote": "How often + do + özne (you) + yalın fiil (review) + nesne."}
        ],
        "vocab": [
            {"word": "Intern", "phonetic": "/ˈɪn.tɜːn/", "partOfSpeech": "noun", "meaningTr": "Stajyer", "exampleSentence": "The summer intern did a great job."},
            {"word": "Alignment", "phonetic": "/əˈlaɪn.mənt/", "partOfSpeech": "noun", "meaningTr": "Uyum, aynı çizgiye gelme", "exampleSentence": "We need strategic alignment."},
            {"word": "Commute", "phonetic": "/kəˈmjuːt/", "partOfSpeech": "verb", "meaningTr": "İşe gidip gelmek", "exampleSentence": "Do you commute every morning?"},
            {"word": "Specialized", "phonetic": "/ˈspeʃ.əl.aɪzd/", "partOfSpeech": "adjective", "meaningTr": "Özelleşmiş, uzmanlaşmış", "exampleSentence": "They offer specialized courses."}
        ],
        "qc_q": "'Kardeşin İspanyolca konuşur mu?' sorusunun dilbilgisel olarak TAMAMEN DOĞRU hali hangisidir?",
        "qc_opts": ["Does your brother speak Spanish?", "Does your brother speaks Spanish?", "Do your brother speak Spanish?", "Is your brother speak Spanish?"],
        "qc_idx": 0,
        "qc_expl": "3. tekil şahıs sorusunda cümlenin başına 'Does' gelir ve ana fiil yalın halde (speak) kalır.",
        "ex_sent": "___ the senior project manager approve budget adjustments without executive consent?",
        "ex_opts": ["Does", "Do", "Is", "Are"],
        "ex_ans": "Does",
        "ex_hint": "'the senior project manager' 3. tekil şahıstır (He/She) ve eylem fiili vardır (approve).",
        "ex_expl": "Geniş zamanda 3. tekil şahısla soru sormak için 'Does' kullanılır.",
        "sb_tr": "Bölüm başkanınız haftalık stratejik toplantılara bizzat katılır mı?",
        "sb_en": "Does your department head personally attend the weekly strategic meetings",
        "sb_dist": ["do", "attends", "is", "attending"],
        "sb_expl": "Soru yardımcı fiili (Does) + tekil özne (your department head) + zarf ve yalın fiil (personally attend) + nesne (the weekly strategic meetings)."
    }

    topics[25] = {
        "skill": "vocabulary",
        "concrete": "A1 standardında sıklık zarflarını (always, usually, often, sometimes, hardly ever, never) cümle içindeki doğru konumlarıyla kullanabilmek.",
        "why": "Bir eylemi ne sıklıkla yaptığımızı aktarmak rutinlerin ve alışkanlıkların doğallığını yansıtır.",
        "logic": "Sıklık zarfları normal eylem fiillerinden ÖNCE (I always wake up), ancak 'To Be' (am/is/are) fiilinden SONRA (She is always happy) gelir.",
        "steps": [
            {"title": "1. Adım: Sıklık Dereceleri", "content": "Always (%100) -> Usually (%80) -> Often (%60) -> Sometimes (%50) -> Hardly ever (%10) -> Never (%0).", "formula": "Always > Usually > Often > Sometimes > Never", "keyPhrase": "I always drink tea. I never smoke.", "subPoints": ["Never zaten olumsuzdur, yanına 'not' almaz"]},
            {"title": "2. Adım: Ana Fiilden Önce Gelme Kuralı", "content": "Normal eylemlerde sıklık zarfı özne ile fiilin arasına girer.", "formula": "Subject + [Sıklık Zarfı] + Verb + Object", "keyPhrase": "He usually walks to work.", "subPoints": ["*I walk usually to work YANLIŞTIR"]},
            {"title": "3. Adım: To Be Fiilinden Sonra Gelme Kuralı", "content": "Cümlede am/is/are varsa sıklık zarfı hemen ardına yerleşir.", "formula": "Subject + am/is/are + [Sıklık Zarfı] + Adjective", "keyPhrase": "She is always punctual. They are never late.", "subPoints": ["To be'nin önüne geçemez"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Sıklık Zarfının Konumu Kuralı", "formula": "Özne + ZARF + Normal Fiil  <-->  Özne + TO BE + ZARF", "explanation": "Eylem fiillerinden önce (I always read), to be fiillerinden sonra (I am always happy) gelir.", "exampleSnippet": "He often exercises. / He is often tired.", "tipNote": "Fiilden önce, To Be'den sonra!"},
            {"ruleTitle": "'Never' Çift Olumsuzluk Yasağı", "formula": "*I don't never eat meat (YANLIŞ) -> I never eat meat (DOĞRU)", "explanation": "'Never' sözcüğü cümlenin anlamını tek başına olumsuz yapar; yanına don't/doesn't eklenemez.", "cautionNote": "İngilizcede iki olumsuzluk eki yan yana gelemez."}
        ],
        "mistakes": [
            {"wrongExample": "I go always to the gym on Mondays.", "correctExample": "I always go to the gym on Mondays.", "rootCause": "Sıklık zarfını fiilden sonraya atma hatası.", "memoryTip": "Sıklık zarfı fiilin önüne yapışır: ALWAYS GO!"},
            {"wrongExample": "She is late never.", "correctExample": "She is never late.", "rootCause": "Sıklık zarfını sıfattan sonraya atma hatası.", "memoryTip": "To Be'den hemen sonra söyle: IS NEVER LATE!"}
        ],
        "dialogue": [
            {"speaker": "Interviewer", "textEn": "How do you maintain work-life balance during busy project weeks?", "textTr": "Yoğun proje haftalarında iş-yaşam dengesini nasıl korursunuz?"},
            {"speaker": "Engineer", "textEn": "I usually leave the office by six and I never take work home on weekends.", "textTr": "Genelde saat altıda ofisten ayrılırım ve hafta sonları eve asla iş götürmem."},
            {"speaker": "Interviewer", "textEn": "Are you always able to disconnect from work completely?", "textTr": "İşten tamamen kopmayı her zaman başarabiliyor musunuz?"},
            {"speaker": "Engineer", "textEn": "Yes, I often exercise in the evening, which helps me relax.", "textTr": "Evet, akşamları sık sık spor yaparım, bu da rahatlamama yardımcı olur."}
        ],
        "contrastive": {"conceptA": "Türkçe Sıklık Zarfı Konumu", "conceptB": "İngilizce Sabit Sıklık Zarfı Konumu", "keyDifference": "Türkçede sıklık zarfı cümlenin başında, ortasında veya sonunda serbestçe gezebilir. İngilizcede ana fiilin hemen önüne veya To Be'nin hemen arkasına sabitlenir.", "exampleA": "Her zaman erken kalkarım. / Erken kalkarım her zaman.", "exampleB": "I always wake up early."},
        "memoryHook": "Konum Şifresi: Normal fiilden ÖNCE, To Be'den SONRA!",
        "examples": [
            {"en": "Our lead auditor always verifies primary financial documents before signing off.", "tr": "Baş denetçimiz onay vermeden önce birincil finansal belgeleri her zaman doğrular.", "highlightedWords": ["always verifies primary financial documents"], "grammarCategory": "Always + Fiil", "contextNote": "Denetim rutini.", "breakdownNote": "Özne + always + fiil-s (verifies) + nesne + zaman edatı."},
            {"en": "The corporate shuttle bus is rarely delayed by morning motorway traffic.", "tr": "Şirket servis otobüsü sabah otoyol trafiği nedeniyle nadiren gecikir.", "highlightedWords": ["is rarely delayed"], "grammarCategory": "To Be + Rarely", "contextNote": "Ulaşım dakikliği.", "breakdownNote": "Özne + is + rarely + edilgen fiil + edat öbeği."},
            {"en": "Senior executives seldom disclose strategic acquisition plans to the media prematurely.", "tr": "Üst düzey yöneticiler stratejik satın alma planlarını medyaya vaktinden önce nadiren açıklar.", "highlightedWords": ["seldom disclose strategic acquisition plans"], "grammarCategory": "Seldom + Fiil", "contextNote": "Kurumsal gizlilik.", "breakdownNote": "Çoğul özne + seldom + yalın fiil (disclose) + nesne + zarf."}
        ],
        "vocab": [
            {"word": "Disclose", "phonetic": "/dɪˈskləʊz/", "partOfSpeech": "verb", "meaningTr": "Açıklamak, ifşa etmek", "exampleSentence": "Do not disclose confidential data."},
            {"word": "Prematurely", "phonetic": "/ˌprem.əˈtʃʊə.li/", "partOfSpeech": "adverb", "meaningTr": "Vaktinden önce, erkenden", "exampleSentence": "The project ended prematurely."},
            {"word": "Punctual", "phonetic": "/ˈpʌŋk.tʃu.əl/", "partOfSpeech": "adjective", "meaningTr": "Dakik, tam vaktinde gelen", "exampleSentence": "He is always punctual for meetings."},
            {"word": "Acquisition", "phonetic": "/ˌæk.wɪˈzɪʃ.ən/", "partOfSpeech": "noun", "meaningTr": "Şirket satın alma, edinim", "exampleSentence": "The company announced an acquisition."}
        ],
        "qc_q": "'O hiçbir zaman toplantılara geç kalmaz' cümlesinin en doğru İngilizce söz dizimi hangisidir?",
        "qc_opts": ["She is never late for meetings.", "She never is late for meetings.", "She is late never for meetings.", "She doesn't never be late for meetings."],
        "qc_idx": 0,
        "qc_expl": "To Be fiili olan cümlelerde sıklık zarfı to be'den (is) hemen sonra gelir: 'She is never late'.",
        "ex_sent": "Dr. Miller is extremely disciplined; he ___ misses an opportunity to mentor junior researchers.",
        "ex_opts": ["rarely", "rare", "is rarely", "rarely is"],
        "ex_ans": "rarely",
        "ex_hint": "Eylem fiilinden (misses) hemen önce gelen sıklık zarfını seçin.",
        "ex_expl": "Eylem fiillerinden önce doğrudan sıklık zarfı gelir: 'he rarely misses'.",
        "sb_tr": "Baş denetçimiz resmi onay vermeden önce tüm finansal raporları her zaman doğrular.",
        "sb_en": "Our lead auditor always verifies all financial reports before giving official approval",
        "sb_dist": ["verifies always", "is always", "never", "verifying"],
        "sb_expl": "Özne (Our lead auditor) + sıklık zarfı ve fiil (always verifies) + nesne (all financial reports) + edat öbeği (before giving official approval)."
    }

    return topics
