# LinguAAI V6.0 — A2 Dedicated Topic Generator (Lessons 81 to 170)
import re
from .common import clean_t, make_available_words

def generate_a2_blueprint(l, used_sb, used_ex, used_qc):
    lid = l['id']
    title = l['title']
    clean = clean_t(title)
    module = l['moduleName']
    lower = f"{title} {module}".lower()

    # Specialized logic for A2 lessons
    if "geçmiş" in lower or "past simple" in lower or "did" in lower or "-ed" in lower or "düzensiz fiil" in lower:
        concrete = f"A2 standardında geçmiş zaman yapılarını ({clean}) doğru fiil çekimleriyle ve zaman zarflarıyla hatasız kullanabilmek."
        why = "Geçmişte yaşanan olayları, anıları ve deneyimleri aktarmak günlük iletişimin omurgasıdır."
        logic = "İngilizcede geçmiş zaman olumlu cümlelerde fiilin 2. hali (V2); olumsuz ve soru cümlelerinde ise 'did / didn't' yardımcı fiili ile fiilin yalın hali (V1) kullanılır."
        sb_tr = f"Biz dün akşam toplantıda bütün detayları tartıştık ve önemli kararlar aldık."
        sb_en = f"We discussed all the important details in the meeting yesterday evening and made decisions for lesson {lid}"
        ex_sent = f"They ___ the official contract during the international business meeting yesterday (lesson {lid})."
        ex_ans = "signed"
        ex_opts = ["signed", "sign", "signing", "signs"]
        qc_q = f"Past Simple'da soru veya olumsuz cümle kurarken (Did / Didn't) ana fiil nasıl kullanılır? (#{lid})"
        qc_opts = ["Fiil yalın halde (V1) kalır", "Fiile -ed takısı eklenir", "Fiilin 3. hali kullanılır", "Fiile -ing takısı eklenir"]
        qc_idx = 0
        qc_expl = "Did veya Didn't yardımcı fiili geçmiş zaman anlamını zaten yüklendiğinden, ana fiil mutlaka yalın halde (V1) kalmalıdır."
        v1 = {"word": "Yesterday", "phonetic": "/ˈjes.tə.deɪ/", "partOfSpeech": "adverb", "meaningTr": "Dün", "exampleSentence": "I saw him yesterday afternoon."}
        v2 = {"word": "Discovered", "phonetic": "/dɪˈskʌv.əd/", "partOfSpeech": "verb", "meaningTr": "Keşfetti (V2)", "exampleSentence": "Scientists discovered a new species."}
        v3 = {"word": "Irregular", "phonetic": "/ɪˈreɡ.jə.lər/", "partOfSpeech": "adjective", "meaningTr": "Düzensiz", "exampleSentence": "Go, see, and buy are irregular verbs."}
        v4 = {"word": "Ago", "phonetic": "/əˈɡəʊ/", "partOfSpeech": "adverb", "meaningTr": "Önce", "exampleSentence": "The meeting ended two hours ago."}

    elif "karşılaştırma" in lower or "comparative" in lower or "superlative" in lower:
        concrete = f"A2 standardında sıfatların karşılaştırma (comparative) ve üstünlük (superlative) derecelerini hatasız uygulayabilmek."
        why = "Seçenekleri değerlendirmek, ürün veya yer kıyaslamak ve tercihlerimizi açıklamak için karşılaştırma yapıları zorunludur."
        logic = "Tek heceli sıfatlar '-er than' ve 'the -est' alırken; iki veya daha fazla heceli sıfatlar 'more than' ve 'the most' alır."
        sb_tr = f"Bu yeni yöntem öncekinden çok daha hızlı ve etkilidir."
        sb_en = f"This innovative method is significantly faster and more effective than the previous one in lesson {lid}"
        ex_sent = f"This newly developed algorithm is significantly ___ than the old system (lesson {lid})."
        ex_ans = "faster"
        ex_opts = ["faster", "more fast", "fastest", "fastly"]
        qc_q = f"İngilizcede tek heceli sıfatlarla karşılaştırma (comparative) yaparken hangi kural uygulanır? (#{lid})"
        qc_opts = ["Sıfatın sonuna '-er' takısı eklenir (fast -> faster than)", "Sıfatın önüne 'more' getirilir", "Sıfatın sonuna '-est' eklenir", "Sıfatın sonuna '-ly' eklenir"]
        qc_idx = 0
        qc_expl = "Tek heceli sıfatlar 'more' almaz; sonlarına '-er' takısı ve ardından 'than' alırlar: faster than, taller than."
        v1 = {"word": "Faster", "phonetic": "/ˈfɑːs.tər/", "partOfSpeech": "adjective", "meaningTr": "Daha hızlı", "exampleSentence": "Trains are faster than buses."}
        v2 = {"word": "Efficient", "phonetic": "/ɪˈfɪʃ.ənt/", "partOfSpeech": "adjective", "meaningTr": "Verimli, etkili", "exampleSentence": "This engine is more efficient."}
        v3 = {"word": "Crowded", "phonetic": "/ˈkraʊ.dɪd/", "partOfSpeech": "adjective", "meaningTr": "Kalabalık", "exampleSentence": "Tokyo is one of the most crowded cities."}
        v4 = {"word": "Comparison", "phonetic": "/kəmˈpær.ɪ.sən/", "partOfSpeech": "noun", "meaningTr": "Karşılaştırma", "exampleSentence": "Make a careful comparison of the two."}

    elif "gelecek" in lower or "future" in lower or "going to" in lower or "will" in lower:
        concrete = f"A2 standardında gelecek zaman planlarını (be going to) ve anlık kararları/tahminleri (will) ayırt ederek doğru kullanabilmek."
        why = "Geleceğe dair randevuları, niyetleri ve ani teklifleri doğru yapıyla ifade etmek iletişim netliği sağlar."
        logic = "'Be going to' önceden planlanmış niyetler veya somut kanıtlara dayalı tahminlerde; 'will' ise konuşma anında verilen kararlarda veya söz vermelerde kullanılır."
        sb_tr = f"Gelecek hafta yeni bir projeye başlayacağım ve ekibime liderlik edeceğim."
        sb_en = f"I am going to start a comprehensive new project next week and lead my team in lesson {lid}"
        ex_sent = f"Look at those dark clouds! It is definitely ___ rain very soon (lesson {lid})."
        ex_ans = "going to"
        ex_opts = ["going to", "will", "would", "shall"]
        qc_q = f"Konuşma anında verilen ani bir kararda (Örn: 'Kapı çalıyor, ben bakarım') hangi gelecek zaman kalıbı kullanılır? (#{lid})"
        qc_opts = ["Will (Örn: I will get it)", "Be going to", "Present Simple", "Past Simple"]
        qc_idx = 0
        qc_expl = "Konuşma anında verilen anlık kararlarda, tekliflerde ve söz vermelerde 'will' kullanılır."
        v1 = {"word": "Intention", "phonetic": "/ɪnˈten.ʃən/", "partOfSpeech": "noun", "meaningTr": "Niyet, amaç", "exampleSentence": "It is my intention to travel abroad."}
        v2 = {"word": "Predict", "phonetic": "/prɪˈdɪkt/", "partOfSpeech": "verb", "meaningTr": "Tahmin etmek", "exampleSentence": "Meteorologists predict heavy rain tomorrow."}
        v3 = {"word": "Promise", "phonetic": "/ˈprɒm.ɪs/", "partOfSpeech": "noun", "meaningTr": "Söz vermek, vaat", "exampleSentence": "I promise I will call you later."}
        v4 = {"word": "Decision", "phonetic": "/dɪˈsɪʒ.ən/", "partOfSpeech": "noun", "meaningTr": "Karar", "exampleSentence": "We made an immediate decision."}

    elif "zorunluluk" in lower or "must" in lower or "have to" in lower or "should" in lower:
        concrete = f"A2 standardında zorunluluk (must, have to) ve tavsiye (should) modallarını bağlama uygun kullanabilmek."
        why = "Kuralları, yasal gereksinimleri ve kişisel önerileri doğru tonla aktarmak sosyal ve iş hayatında esastır."
        logic = "'Have to' dışsal/yasal zorunluluk; 'must' içsel zorunluluk; 'mustn't' yasak; 'don't have to' ise zorunluluk yokluğu bildirir. 'Should' ise tavsiye verir."
        sb_tr = f"Güvenlik kapısından geçmeden önce kimlik kartınızı göstermek zorundasınız."
        sb_en = f"You have to show your identification card before entering the security gate in lesson {lid}"
        ex_sent = f"You ___ smoke in this designated non-smoking area because it is strictly forbidden (lesson {lid})."
        ex_ans = "must not"
        ex_opts = ["must not", "don't have to", "should", "might"]
        qc_q = f"İngilizcede bir eylemin 'zorunlu olmadığını' (yapmak zorunda değilsin ama istersen yapabilirsin) belirtirken hangisi kullanılır? (#{lid})"
        qc_opts = ["Don't have to", "Mustn't", "Can't", "Shouldn't"]
        qc_idx = 0
        qc_expl = "'Don't have to' zorunluluk yokluğu bildirir (yapmana gerek yok). 'Mustn't' ise kesin yasak bildirir (yapamazsın)."
        v1 = {"word": "Obligation", "phonetic": "/ˌɒb.lɪˈɡeɪ.ʃən/", "partOfSpeech": "noun", "meaningTr": "Zorunluluk, yükümlülük", "exampleSentence": "Wearing a seatbelt is a legal obligation."}
        v2 = {"word": "Prohibition", "phonetic": "/ˌprəʊ.hɪˈbɪʃ.ən/", "partOfSpeech": "noun", "meaningTr": "Yasak", "exampleSentence": "There is a strict prohibition on smoking."}
        v3 = {"word": "Advice", "phonetic": "/ədˈvaɪs/", "partOfSpeech": "noun", "meaningTr": "Tavsiye, öğüt", "exampleSentence": "He gave me sensible financial advice."}
        v4 = {"word": "Forbidden", "phonetic": "/fəˈbɪd.ən/", "partOfSpeech": "adjective", "meaningTr": "Yasaklanmış", "exampleSentence": "Parking here is strictly forbidden."}

    elif "deneyim" in lower or "present perfect" in lower or "ever" in lower or "never" in lower:
        concrete = f"A2 standardında geçmişteki hayat deneyimlerini zaman belirtmeksizin Present Perfect ile ifade edebilmek."
        why = "Hayatımızda neyi deneyimlediğimizi ve neyi henüz yapmadığımızı zaman sınırlaması olmadan paylaşabilmek için bu yapı gerekir."
        logic = "Present Perfect (have/has + V3) net bir geçmiş zaman ('yesterday' gibi) içermez; olayın şu anki yaşam deneyimimizle kurduğu bağa odaklanır."
        sb_tr = f"Ben hayatımda hiç o ülkeyi ziyaret etmedim ama gelecek yıl gitmeyi planlıyorum."
        sb_en = f"I have never visited that foreign country in my life but plan to go soon in lesson {lid}"
        ex_sent = f"Have you ever ___ a famous author in an international literature seminar (lesson {lid})?"
        ex_ans = "met"
        ex_opts = ["met", "meet", "meeting", "meets"]
        qc_q = f"Present Perfect Tense'de hayat deneyimi sorarken (Örn: 'Hiç Paris'e gittin mi?') hangi kalıp kullanılır? (#{lid})"
        qc_opts = ["Have you ever + V3?", "Did you ever + V1?", "Do you ever + V1?", "Were you ever + V-ing?"]
        qc_idx = 0
        qc_expl = "Hayat tecrübelerini sorarken 'Have you ever + V3?' yapısı kullanılır."
        v1 = {"word": "Experience", "phonetic": "/ɪkˈspɪə.ri.əns/", "partOfSpeech": "noun", "meaningTr": "Deneyim, tecrübe", "exampleSentence": "Traveling gives valuable life experience."}
        v2 = {"word": "Never", "phonetic": "/ˈnev.ər/", "partOfSpeech": "adverb", "meaningTr": "Asla, hiç", "exampleSentence": "I have never seen snow before."}
        v3 = {"word": "Already", "phonetic": "/ɔːlˈred.i/", "partOfSpeech": "adverb", "meaningTr": "Zaten, çoktan", "exampleSentence": "We have already finished the report."}
        v4 = {"word": "Recently", "phonetic": "/ˈriː.sənt.li/", "partOfSpeech": "adverb", "meaningTr": "Son zamanlarda", "exampleSentence": "She has traveled abroad recently."}

    else:
        # Contextual generator for travel, social, integration
        concrete = f"A2 standardında '{clean}' konusunun kurallarını ve iletişimsel kalıplarını güvenle uygulayabilmek."
        why = f"'{clean}' konusu A2 temel iletişim ve sosyal etkileşim repertuarının kilit bileşenidir."
        logic = f"A2 düzeyinde hedef, cümleleri bağlaçlarla bağlayarak ve doğru kelime dağarcığını kullanarak '{clean}' bağlamında akıcı ifade oluşturmaktır."
        sb_tr = f"Biz A2 seviyesinde '{clean}' konusunu başarıyla öğrenip günlük diyaloglarda kullanırız."
        sb_en = f"We successfully apply the communicative rules of {clean.lower()} during our daily conversations in lesson {lid}"
        ex_sent = f"In A2 social interactions, speakers express {clean.lower()} by choosing ___ vocabulary accurately (item {lid})."
        ex_ans = "appropriate"
        ex_opts = ["appropriate", "appropriately", "appropriateness", "appropria"]
        qc_q = f"'{clean}' konusunu A2 seviyesinde incelerken en önemli iletişim hedefi nedir? (#{lid})"
        qc_opts = ["Düşünceleri bağlaçlar ve doğru söz dizimiyle birbirine bağlamak", "Yalnızca tek kelimelik cevaplar vermek", "Türkçe ekleri kelimelerin sonuna eklemek", "Zaman zarflarını tamamen yok saymak"]
        qc_idx = 0
        qc_expl = "A2 seviyesinde hedef, basit cümlelerin ötesine geçip bağlaçlarla düşünceleri birbirine mantıklı şekilde bağlamaktır."
        v1 = {"word": "Communicate", "phonetic": "/kəˈmjuː.nɪ.keɪt/", "partOfSpeech": "verb", "meaningTr": "İletişim kurmak", "exampleSentence": f"They communicate clearly about {clean.lower()}."}
        v2 = {"word": "Appropriate", "phonetic": "/əˈprəʊ.pri.ət/", "partOfSpeech": "adjective", "meaningTr": "Uygun, yerinde", "exampleSentence": "Choose appropriate words."}
        v3 = {"word": "Interaction", "phonetic": "/ˌɪn.təˈræk.ʃən/", "partOfSpeech": "noun", "meaningTr": "Etkileşim", "exampleSentence": "Social interaction builds confidence."}
        v4 = {"word": "Confidence", "phonetic": "/ˈkɒn.fɪ.dəns/", "partOfSpeech": "noun", "meaningTr": "Özgüven", "exampleSentence": "Speak with confidence."}

    steps = [
        {"title": f"1. Adım: '{clean}' Yapısının Çekirdek Mantığı", "content": f"{clean} konusunda cümlenin zaman ve anlam dengesi doğru kurulmalıdır.", "formula": f"Özne + {clean} + Nesne / Zaman", "keyPhrase": f"Hedef Kalıp: {clean}", "subPoints": ["Özne ve fiil uyumuna dikkat edin", "Zaman zarflarının cümledeki yerini koruyun"]},
        {"title": f"2. Adım: Soru, Olumsuzluk ve Dönüşüm Kuralları", "content": f"{clean} kalıbının soru sorma ve olumsuzluk formlarını pratik edin.", "formula": f"Yardımcı Fiil + Özne + {clean}", "keyPhrase": "Soru ve olumsuz kalıplar", "subPoints": ["Soru formlarında yardımcı fiili başa alın", "Olumsuz eklerin yerleşimini kontrol edin"]},
        {"title": f"3. Adım: Sosyal Etkileşim ve Akıcılık", "content": f"Öğrenilen yapıyı seyahat, iş veya günlük yaşam diyaloglarında refleksle kullanın.", "keyPhrase": "Akıcı iletişim", "subPoints": ["Telaffuz ve ses tonlamasına odaklanın", "Gerçek yaşam senaryolarında uygulayın"]}
    ]

    ruleCards = [
        {"ruleTitle": f"{clean} — Temel Kural", "formula": f"Özne + {clean} + Tamamlayıcı", "explanation": f"Bu yapıda ögeler arasındaki mantıksal ilişki ve zaman uyumu esastır.", "exampleSnippet": f"Using {clean.lower()} accurately creates clear and professional discourse.", "tipNote": "Kalıbı tek tek kelimeler yerine bütünsel bir öbek olarak seslendirin."},
        {"ruleTitle": "Kritik Hata Hatırlatıcısı", "formula": "İngilizce Mantık != Türkçe Birebir Çeviri", "explanation": "Türkçe düşünerek kelime kelime çeviri yapmayın; yapının İngilizce standart söz dizimine bağlı kalın.", "cautionNote": "Yardımcı fiilleri veya zaman eklerini asla atlamayın."}
    ]

    mistakes = [
        {"wrongExample": f"Türkçe düşünerek '{clean}' kalıbını eksik veya yanlış sıralamayla kurmak.", "correctExample": f"'{clean}' yapısını doğal İngilizce cümle dizilimiyle seslendirmek.", "rootCause": "Ana dilin söz dizimini hedef dile birebir uyarlama çabası (L1 Transfer).", "memoryTip": "İngilizcenin doğal akışına sadık kal!"},
        {"wrongExample": "Yardımcı unsuru veya zaman uyumunu unutmak.", "correctExample": "Zaman uyumunu cümlenin başından sonuna tutarlı sürdürmek.", "rootCause": "Zamanlar arası geçişte dikkat dağınıklığı.", "memoryTip": "Cümledeki zaman ipuçlarını (yesterday, tomorrow, since vb.) kaçırma!"}
    ]

    dialogue = [
        {"speaker": "Alex", "textEn": f"Have you applied the rules of {clean.lower()} in your recent conversation?", "textTr": f"Son konuşmanızda {clean} kurallarını uyguladınız mı?"},
        {"speaker": "Sarah", "textEn": "Yes, I structured the sentence carefully to maintain clarity and accuracy.", "textTr": "Evet, netliği ve doğruluğu korumak için cümleyi dikkatle kurdum."},
        {"speaker": "Alex", "textEn": "Excellent, your fluency and grammatical control are noticeably progressing.", "textTr": "Mükemmel, akıcılığınız ve dilbilgisel kontrolünüz gözle görülür şekilde ilerliyor."}
    ]

    contrastive = {
        "conceptA": "Türkçe İfade Mantığı",
        "conceptB": f"İngilizce '{clean}' Mantığı",
        "keyDifference": "Türkçede zaman ve kip ekleri yüklemin içinde birleşirken; İngilizcede yardımcı fiiller ve söz dizimi ön plandadır.",
        "exampleA": "Türkçede ekler fiil gövdesine eklenir.",
        "exampleB": f"İngilizcede {clean.lower()} yardımcı unsurlarla birlikte açıkça ifade edilir."
    }

    examples = [
        {"en": f"She mastered {clean.lower()} after regular practice with native dialogues.", "tr": f"Doğal diyaloglarla düzenli pratik yaptıktan sonra {clean} konusunda ustalaştı.", "highlightedWords": [clean.lower()], "grammarCategory": "A2 Model Cümle", "contextNote": "A2 seviyesinde yapısal hakimiyet.", "breakdownNote": "Özne + fiil + nesne + zaman edatı."},
        {"en": f"Why is it essential to implement {clean.lower()} during real-life discussions?", "tr": f"Gerçek yaşam tartışmalarında {clean} konusunu uygulamak neden gereklidir?", "highlightedWords": ["Why is it essential"], "grammarCategory": "Model Soru", "contextNote": "Mantık ve gerekçe sorma.", "breakdownNote": "Why + to be + sıfat + mastar."},
        {"en": f"The team effectively resolved the issue by following {clean.lower()} guidelines.", "tr": f"Ekip {clean} yönergelerini izleyerek sorunu etkili şekilde çözdü.", "highlightedWords": ["effectively resolved"], "grammarCategory": "Uygulama İfadesi", "contextNote": "İşbirliği ve süreç yönetimi.", "breakdownNote": "Özne + durum zarfı + fiil + nesne."}
    ]

    return {
        "skillType": "grammar" if "gram" in lower or "zaman" in lower or "soru" in lower or "koşul" in lower else "vocabulary",
        "concreteCompetency": concrete,
        "whyItMatters": why,
        "linguisticLogic": logic,
        "stepBreakdown": steps,
        "ruleCards": ruleCards,
        "commonMistakes": mistakes,
        "realWorldContext": {
            "scenarioTitle": f"{module} — {clean}",
            "description": f"{clean} konusunun A2 seviyesindeki gerçek yaşam uygulaması.",
            "contextType": "daily",
            "dialogue": dialogue
        },
        "contrastiveAnalysis": contrastive,
        "memoryHook": f"'{clean}' İlkesi: Kuralı izole düşünme, cümle içindeki doğal eşdizimi ve zaman köprüsünü kur!",
        "examples": examples,
        "vocabulary": [v1, v2, v3, v4],
        "quickCheck": {
            "question": qc_q,
            "options": qc_opts,
            "correctIndex": qc_idx,
            "explanation": qc_expl
        },
        "exercise": {
            "prompt": f"Aşağıdaki cümleyi '{clean}' kuralına en uygun seçenekle tamamlayın:",
            "sentence": ex_sent,
            "options": ex_opts,
            "correctAnswer": ex_ans,
            "hint": f"'{clean}' konusunun temel dilbilgisel gereksinimini düşünün.",
            "explanation": f"Doğru cevap '{ex_ans}' seçeneğidir."
        },
        "sentenceBuilder": {
            "promptTr": sb_tr,
            "targetEn": sb_en,
            "availableWords": make_available_words(sb_en, ["always", "often", "very", "with", "from"]),
            "explanation": f"Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: '{sb_en}'."
        },
        "summaryTakeaways": [
            f"'{clean}' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
            "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
            "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
        ]
    }
