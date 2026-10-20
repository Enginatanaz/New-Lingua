# LinguAAI V6.0 — B1 Dedicated Topic Generator (Lessons 171 to 270)
import re
from .common import clean_t, make_available_words

def generate_b1_blueprint(l, used_sb, used_ex, used_qc):
    lid = l['id']
    title = l['title']
    clean = clean_t(title)
    module = l['moduleName']
    lower = f"{title} {module}".lower()

    if "present perfect vs past simple" in lower or "zaman vurgusu" in lower:
        concrete = f"B1 standardında Present Perfect ve Past Simple arasındaki ince zaman ve anlam farklarını ({clean}) hatasız ayırt edebilmek."
        why = "İngilizcede tamamlanmış geçmiş olaylar ile etkisi süren deneyimleri ayırt etmek akıcılığın en kritik eşiğidir."
        logic = "Geçmişte net bir zaman noktası ('yesterday', 'in 2018', 'two days ago') varsa Past Simple (V2); zaman belirtilmeyen veya etkisi süren durumlarda Present Perfect (have/has + V3) kullanılır."
        sb_tr = f"Biz geçen yıl projeyi tamamladık ve o zamandan beri müşterilerimizden harika geri bildirimler aldık."
        sb_en = f"We finished the initial project last year and have received exceptional feedback since then in lesson {lid}"
        ex_sent = f"She ___ three comprehensive research papers since she joined the university faculty (lesson {lid})."
        ex_ans = "has published"
        ex_opts = ["has published", "published", "publishes", "publishing"]
        qc_q = f"Cümlede 'yesterday' veya 'last night' gibi kesin geçmiş zaman zarfı olduğunda neden Present Perfect kullanılamaz? (#{lid})"
        qc_opts = ["Kesinleşmiş geçmiş zaman zarfları konuşma anıyla köprüyü kestiği için Past Simple zorunludur", "Present Perfect yalnızca gelecek zaman bildirir", "Yardımcı fiil 'have' olumsuz cümlelerde bulunmaz", "Past Simple fiilleri sadece -ing alır"]
        qc_idx = 0
        qc_expl = "Yesterday, in 2015, ago gibi kesin zaman bildiren zarflar eylemin tamamen geçmişte bittiğini gösterir; bu yüzden Present Perfect değil, Past Simple kullanılır."
        v1 = {"word": "Distinction", "phonetic": "/dɪˈstɪŋk.ʃən/", "partOfSpeech": "noun", "meaningTr": "Ayrım, fark", "exampleSentence": "Understand the distinction between the two tenses."}
        v2 = {"word": "Feedback", "phonetic": "/ˈfiːd.bæk/", "partOfSpeech": "noun", "meaningTr": "Geri bildirim", "exampleSentence": "We received positive customer feedback."}
        v3 = {"word": "Accomplish", "phonetic": "/əˈkʌm.plɪʃ/", "partOfSpeech": "verb", "meaningTr": "Başarmak, tamamlamak", "exampleSentence": "She accomplished her goals successfully."}
        v4 = {"word": "Duration", "phonetic": "/djʊˈreɪ.ʃən/", "partOfSpeech": "noun", "meaningTr": "Süreç, zaman aralığı", "exampleSentence": "The course has a duration of six weeks."}

    elif "relative clause" in lower or "ilgi cümle" in lower or "who" in lower or "which" in lower or "whose" in lower:
        concrete = f"B1 standardında tanımlayıcı ilgi cümleciklerini ({clean}) kullanarak iki bağımsız cümleyi tek bir akıcı cümlede birleştirebilmek."
        why = "İlgi cümlecikleri (who, which, that, whose, where, when) konuşmayı çocuksu basit cümlelerden kurtarıp olgun ve zengin bir anlatıma taşır."
        logic = "İnsanlar için 'who/that', nesneler ve hayvanlar için 'which/that', sahiplik için 'whose', mekan için 'where', zaman için 'when' kullanılır. Tanımlayıcı (defining) cümlelerde virgül kullanılmaz."
        sb_tr = f"Dün tanıştığımız adam uluslararası bir teknoloji şirketinin genel müdürüdür."
        sb_en = f"The experienced executive who we met yesterday is the general manager of an international tech company in lesson {lid}"
        ex_sent = f"The experienced surgeon ___ performed the intricate heart operation was commended by the medical board (lesson {lid})."
        ex_ans = "who"
        ex_opts = ["who", "which", "whose", "where"]
        qc_q = f"İngilizcede sahiplik bildiren (örneğin 'arabası çalınan adam') ilgi zamiri hangisidir? (#{lid})"
        qc_opts = ["Whose (Örn: The man whose car was stolen)", "Who", "Which", "Where"]
        qc_idx = 0
        qc_expl = "Kişilerin veya nesnelerin sahipliğini bildiren ilgi zamiri 'whose'dur."
        v1 = {"word": "Relative", "phonetic": "/ˈrel.ə.tɪv/", "partOfSpeech": "adjective", "meaningTr": "Bağlantılı, göreceli", "exampleSentence": "Relative clauses give essential information."}
        v2 = {"word": "Executive", "phonetic": "/ɪɡˈzek.jə.tɪv/", "partOfSpeech": "noun", "meaningTr": "Yönetici", "exampleSentence": "The senior executive approved the plan."}
        v3 = {"word": "Intricate", "phonetic": "/ˈɪn.trɪ.kət/", "partOfSpeech": "adjective", "meaningTr": "Karmaşık, ince detaylı", "exampleSentence": "The surgeon handled the intricate procedure."}
        v4 = {"word": "Essential", "phonetic": "/ɪˈsen.ʃəl/", "partOfSpeech": "adjective", "meaningTr": "Gerekli, hayati", "exampleSentence": "Defining clauses provide essential details."}

    elif "koşul" in lower or "conditional" in lower or "if" in lower:
        concrete = f"B1 standardında gerçekçi (First) ve hayali (Second) koşul cümlelerini ({clean}) doğru zaman yapılarıyla kurabilmek."
        why = "Şartları, pazarlıkları ve varsayımsal durumları doğru ifade etmek karar alma süreçlerinin merkezindedir."
        logic = "First Conditional (If + Present, will + V1) gelecekteki gerçek olasılıkları; Second Conditional (If + Past, would + V1) ise şu andaki hayali ve imkansız senaryoları anlatır."
        sb_tr = f"Eğer yarın vaktim olursa sana kapsamlı proje raporunu hazırlamanda kesinlikle yardım ederim."
        sb_en = f"If I have sufficient time tomorrow I will certainly assist you with preparing the report in lesson {lid}"
        ex_sent = f"If the international flight arrives on schedule, we ___ reach the hotel before the dinner banquet (lesson {lid})."
        ex_ans = "will"
        ex_opts = ["will", "would", "had", "are"]
        qc_q = f"Second Conditional (hayali durum) cümlesinde 'If' yan cümleciğinde hangi zaman yapısı kullanılır? (#{lid})"
        qc_opts = ["Past Simple (If + V2)", "Present Simple", "Will + V1", "Past Perfect"]
        qc_idx = 0
        qc_expl = "Second Conditional şu anki hayali durumu anlatırken If yan cümleciğinde Past Simple, ana cümlede 'would + V1' kullanılır."
        v1 = {"word": "Hypothetical", "phonetic": "/ˌhaɪ.pəˈθet.ɪ.kəl/", "partOfSpeech": "adjective", "meaningTr": "Varsayımsal, hayali", "exampleSentence": "Consider a hypothetical scenario."}
        v2 = {"word": "Sufficient", "phonetic": "/səˈfɪʃ.ənt/", "partOfSpeech": "adjective", "meaningTr": "Yeterli", "exampleSentence": "We need sufficient preparation time."}
        v3 = {"word": "Negotiate", "phonetic": "/nəˈɡəʊ.ʃi.eɪt/", "partOfSpeech": "verb", "meaningTr": "Müzakere etmek", "exampleSentence": "They negotiate contracts carefully."}
        v4 = {"word": "Possibility", "phonetic": "/ˌpɒs.əˈbɪl.ə.ti/", "partOfSpeech": "noun", "meaningTr": "Olasılık", "exampleSentence": "There is a strong possibility of success."}

    elif "dolaylı anlatım" in lower or "reported speech" in lower or "say" in lower or "tell" in lower:
        concrete = f"B1 standardında doğrudan söylenen sözleri dolaylı anlatıma (Reported Speech: {clean}) kurallara uygun zaman kaydırmasıyla (backshift) aktarabilmek."
        why = "Toplantı kararlarını, dedikoduları ve mesajları başkalarına doğru aktarmak profesyonel iletişimin temelidir."
        logic = "Aktarma fiili geçmiş zamanda olduğunda (He said that...), doğrudan cümlenin zamanı bir basamak geçmişe kayar: Present Simple -> Past Simple; Can -> Could; Will -> Would. 'Say that' kullanılırken 'Tell someone' nesne alır."
        sb_tr = f"Yönetici bana toplantının gelecek pazartesi saat onda başlayacağını söyledi."
        sb_en = f"The manager told me that the strategic board meeting would begin at ten o'clock in lesson {lid}"
        ex_sent = f"She told the entire team that she ___ already finalized the budget spreadsheet (lesson {lid})."
        ex_ans = "had"
        ex_opts = ["had", "has", "have", "will have"]
        qc_q = f"Reported Speech'te 'say' ve 'tell' fiilleri arasındaki en kritik kullanım farkı nedir? (#{lid})"
        qc_opts = ["'Tell' fiilinden sonra mutlaka dinleyen kişi (nesne zamiri) gelir (told me), 'say' doğrudan 'that' alır", "'Say' sadece gelecek zamanda kullanılır", "'Tell' arkasından hiçbir kelime alamaz", "İkisi arasında hiçbir yapısal fark yoktur"]
        qc_idx = 0
        qc_expl = "'Tell' fiili daima bir nesne zamiri alır (He told ME that...). 'Say' ise doğrudan aktarım yapar (He said that...)."
        v1 = {"word": "Backshift", "phonetic": "/ˈbæk.ʃɪft/", "partOfSpeech": "noun", "meaningTr": "Zamanın bir basamak geçmişe kayması", "exampleSentence": "Tense backshift is standard in reported speech."}
        v2 = {"word": "Finalized", "phonetic": "/ˈfaɪ.nəl.aɪzd/", "partOfSpeech": "verb", "meaningTr": "Sonuçlandırdı (V3)", "exampleSentence": "The team finalized the financial proposal."}
        v3 = {"word": "Direct", "phonetic": "/daɪˈrekt/", "partOfSpeech": "adjective", "meaningTr": "Doğrudan", "exampleSentence": "Convert direct speech into indirect speech."}
        v4 = {"word": "Report", "phonetic": "/rɪˈpɔːt/", "partOfSpeech": "verb", "meaningTr": "Aktarmak, raporlamak", "exampleSentence": "She reported what the client had requested."}

    elif "edilgen" in lower or "passive" in lower:
        concrete = f"B1 standardında edilgen çatı (Passive Voice: {clean}) yapısını eylemi yapan değil eylemden etkilenen ögeyi vurgulayarak kullanabilmek."
        why = "Haberlerde, resmi raporlarda ve süreç anlatımlarında eylemi yapanın önemsiz veya bilinmediği durumlarda pasif yapı zorunludur."
        logic = "Passive Voice yapısının evrensel formülü: 'Be + V3 (Past Participle)'dır. Zaman ne olursa olsun 'be' fiili o zamana göre çekimlenir, ana fiil daima 3. haldedir."
        sb_tr = f"Bu aylık finansal rapor her ayın ilk günü yönetim kuruluna sunulur."
        sb_en = f"This comprehensive monthly financial report is presented to the board of directors every month in lesson {lid}"
        ex_sent = f"This historic stone castle was carefully ___ by preservation architects in 1954 (lesson {lid})."
        ex_ans = "restored"
        ex_opts = ["restored", "restore", "restoring", "restores"]
        qc_q = f"Passive Voice (edilgen çatı) cümlelerinde ana fiil daima hangi halde bulunmak zorundadır? (#{lid})"
        qc_opts = ["Fiilin 3. hali (Past Participle - V3)", "Fiilin yalın hali (V1)", "Fiilin 2. hali (V2)", "Fiilin -ing hali (V-ing)"]
        qc_idx = 0
        qc_expl = "Passive yapısında 'be' yardımcı fiili zamana göre değişir ama ana fiil daima V3 (Past Participle) olmak zorundadır."
        v1 = {"word": "Presented", "phonetic": "/prɪˈzen.tɪd/", "partOfSpeech": "verb", "meaningTr": "Sunuldu (V3)", "exampleSentence": "The findings were presented to the council."}
        v2 = {"word": "Preservation", "phonetic": "/ˌprez.əˈveɪ.ʃən/", "partOfSpeech": "noun", "meaningTr": "Koruma, muhafaza", "exampleSentence": "Historic preservation requires architectural skill."}
        v3 = {"word": "Procedure", "phonetic": "/prəˈsiː.dʒər/", "partOfSpeech": "noun", "meaningTr": "Prosedür, işlem", "exampleSentence": "Follow the standard operating procedure."}
        v4 = {"word": "Construct", "phonetic": "/kənˈstrʌkt/", "partOfSpeech": "verb", "meaningTr": "İnşa etmek", "exampleSentence": "The new bridge was constructed recently."}

    else:
        # Contextual generator for business, communication, debate
        concrete = f"B1 standardında '{clean}' konusunun kurallarını ve bağımsız dil kullanıcısı reflekslerini ustalıkla uygulayabilmek."
        why = f"'{clean}' konusu B1 eşik seviyesinde fikir savunma, argüman geliştirme ve mesleki iletişim yetkinliğinin ayrılmaz parçasıdır."
        logic = f"B1 seviyesinde hedef, karmaşık düşünceleri bağlaçlar, kiplikler ve uygun resmiyet derecesiyle (register) ifade etmektir."
        sb_tr = f"Biz B1 seviyesinde '{clean}' konusunu müzakere ve iş görüşmelerinde profesyonelce uygularız."
        sb_en = f"We articulate our professional viewpoint on {clean.lower()} convincingly during corporate meetings in lesson {lid}"
        ex_sent = f"In professional B1 business environments, employees handle {clean.lower()} by applying ___ standards (item {lid})."
        ex_ans = "coherent"
        ex_opts = ["coherent", "coherently", "coherence", "cohering"]
        qc_q = f"'{clean}' konusunu B1 seviyesinde kullanırken en kritik husus nedir? (#{lid})"
        qc_opts = ["Düşünceleri bağlaçlarla mantıklı sıralamak ve bağlama uygun resmiyet derecesini korumak", "Sadece tek heceli kelimeler kullanmak", "Cümledeki tüm yardımcı fiilleri çıkarmak", "Türkçe söz dizimini kelimesi kelimesine çevirmek"]
        qc_idx = 0
        qc_expl = "B1 seviyesinde hedef, bağımsız dil kullanıcısı olarak düşünceleri bağlaçlarla bağlamak ve resmiyet derecesine uygun konuşmaktır."
        v1 = {"word": "Articulate", "phonetic": "/ɑːˈtɪk.jə.leɪt/", "partOfSpeech": "verb", "meaningTr": "Açıkça ifade etmek", "exampleSentence": f"Articulate your thoughts on {clean.lower()}."}
        v2 = {"word": "Coherent", "phonetic": "/kəʊˈhɪə.rənt/", "partOfSpeech": "adjective", "meaningTr": "Tutarlı, mantıklı", "exampleSentence": "Present a coherent argument."}
        v3 = {"word": "Corporate", "phonetic": "/ˈkɔː.pər.ət/", "partOfSpeech": "adjective", "meaningTr": "Kurumsal", "exampleSentence": "Corporate meetings require professional tone."}
        v4 = {"word": "Negotiation", "phonetic": "/nəˌɡəʊ.ʃiˈeɪ.ʃən/", "partOfSpeech": "noun", "meaningTr": "Müzakere", "exampleSentence": "Successful negotiation demands clear syntax."}

    steps = [
        {"title": f"1. Adım: '{clean}' Yapısının Mantıksal Temeli", "content": f"{clean} konusunda cümlenin temel taşıyıcı ögeleri doğru sıralanmalı ve anlam bütünlüğü korunmalıdır.", "formula": f"Özne + {clean} + Nesne / Bağlaç", "keyPhrase": f"Hedef Kalıp: {clean}", "subPoints": ["Özne ve yüklem arasındaki zaman ve kişi uyumunu sağlayın", "Söz dizimsel hiyerarşiyi koruyun"]},
        {"title": f"2. Adım: Cümle İçi Dönüşümler ve İleri Kullanım", "content": f"{clean} yapısının olumsuz, soru ve karmaşık yan cümle kombinasyonlarını inceleyin.", "formula": f"Bağlaç / Yardımcı Unsur + {clean}", "keyPhrase": "Gelişmiş söz dizimi", "subPoints": ["Cümleleri bağlaçlarla zenginleştirin", "Gereksiz tekrarları önleyecek zamir ve ilgi sözcükleri seçin"]},
        {"title": f"3. Adım: Profesyonel ve Akademik Entegrasyon", "content": f"Öğrenilen kalıbı iş görüşmelerinde, raporlarda ve tartışmalarda kendiliğinden ve doğru üslupla üretin.", "keyPhrase": "Kendinden emin B1 iletişimi", "subPoints": ["Resmiyet derecesini (register) bağlama göre ayarlayın", "Ses tonlamasını ve vurguları doğru yerleştirin"]}
    ]

    ruleCards = [
        {"ruleTitle": f"{clean} — Temel İlke", "formula": f"Özne + {clean} + Tamamlayıcı", "explanation": f"Bu yapıda cümle parçalarının birbirine mantıklı bağlanması esastır.", "exampleSnippet": f"Applying {clean.lower()} correctly ensures persuasive discourse.", "tipNote": "Kalıbı bir Lego parçası gibi bütünsel bir öbek olarak zihninizde tutun."},
        {"ruleTitle": "Kritik Öğrenci Hatası Uyarısı", "formula": "İngilizce Anlatım Mantığı != Türkçe Birebir Çeviri", "explanation": "Türkçe düşünerek kelime kelime çeviri yapmayın; yapının İngilizce doğal eşdizimine (collocation) sadık kalın.", "cautionNote": "Zaman uyumunu veya yardımcı fiilleri cümleden çıkarmayın."}
    ]

    mistakes = [
        {"wrongExample": f"Türkçe söz dizimiyle '{clean}' yapısını çevirmek.", "correctExample": f"'{clean}' yapısını doğal İngilizce cümle öbeği olarak refleksle kurmak.", "rootCause": "Ana dilin (Türkçe) yapısal kurallarını hedef dile doğrudan yansıtma (L1 Transfer).", "memoryTip": "Kalıbı bir Lego parçası gibi bütün olarak kullan!"},
        {"wrongExample": "Bağlama uymayan yapay kelimeler seçmek veya zaman kaydırmasını unutmak.", "correctExample": "B1 seviyesine uygun duru ve tutarlı kelimeler tercih etmek.", "rootCause": "Kelimelerin doğal eşdizimlerini (collocations) göz ardı etmek.", "memoryTip": "Basit ve hatasız İngilizce, karmaşık ve hatalı İngilizceden daima üstündür!"}
    ]

    dialogue = [
        {"speaker": "Alex", "textEn": f"How do you usually incorporate {clean.lower()} in your strategic discussions?", "textTr": f"Stratejik tartışmalarınızda {clean} konusunu genellikle nasıl dahil edersiniz?"},
        {"speaker": "Sarah", "textEn": "I focus on the structural balance first, then refine the natural tone.", "textTr": "Önce yapısal dengeye odaklanırım, ardından doğal tonu inceltirim."},
        {"speaker": "Alex", "textEn": "That approach produces very articulate and convincing results.", "textTr": "Bu yaklaşım son derece anlaşılır ve ikna edici sonuçlar veriyor."}
    ]

    contrastive = {
        "conceptA": "Türkçe Yapı Mantığı",
        "conceptB": f"İngilizce '{clean}' Mantığı",
        "keyDifference": "Türkçede anlam genellikle kelime sonuna eklenen ek zincirinde kodlanırken; İngilizcede anlam söz dizimi, yardımcı unsurlar ve kelime öbekleriyle kurulur.",
        "exampleA": "Türkçede vurgu ve ekler yüklemin içinde toplanır.",
        "exampleB": f"İngilizcede özne ve hemen ardındaki {clean.lower()} yapısı cümlenin yönünü belirler."
    }

    examples = [
        {"en": f"Mastering the practical usage of {clean.lower()} enables professionals to communicate their intentions without ambiguity.", "tr": f"{clean} konusunun pratik kullanımında ustalaşmak, profesyonellerin niyetlerini belirsizlik olmadan iletmesini sağlar.", "highlightedWords": [clean.lower()], "grammarCategory": "B1 Model Cümle", "contextNote": "B1 seviyesinde akıcı ve dengeli dil kullanımı.", "breakdownNote": "Özne öbeği + fiil + nesne + mastar."},
        {"en": f"Professionals regularly implement {clean.lower()} to achieve maximum communicative impact.", "tr": f"Profesyoneller en yüksek iletişimsel etkiyi elde etmek için {clean} konusunu düzenli olarak uygularlar.", "highlightedWords": ["regularly implement"], "grammarCategory": "Uygulama Örneği", "contextNote": "Mesleki ve sosyal ortamlarda doğal cümle akışı.", "breakdownNote": "Özne + sıklık zarfı + eylem fiili + nesne."},
        {"en": f"How can speakers adapt {clean.lower()} across different communication contexts?", "tr": f"Konuşmacılar {clean} konusunu farklı iletişim bağlamlarına nasıl uyarlayabilirler?", "highlightedWords": ["How can speakers adapt"], "grammarCategory": "Model Soru", "contextNote": "Soru sorma ve bağlamsal analiz yapma yapısı.", "breakdownNote": "Soru kelimesi + modal + özne + yalın fiil + nesne."}
    ]

    return {
        "skillType": "grammar" if "gram" in lower or "zaman" in lower or "koşul" in lower or "edilgen" in lower else "vocabulary",
        "concreteCompetency": concrete,
        "whyItMatters": why,
        "linguisticLogic": logic,
        "stepBreakdown": steps,
        "ruleCards": ruleCards,
        "commonMistakes": mistakes,
        "realWorldContext": {
            "scenarioTitle": f"{module} — {clean}",
            "description": f"{clean} konusunun B1 seviyesindeki gerçek yaşam uygulaması.",
            "contextType": "workplace",
            "dialogue": dialogue
        },
        "contrastiveAnalysis": contrastive,
        "memoryHook": f"'{clean}' İlkesi: Kuralı izole düşünme, cümle içindeki doğal eşdizimi ve akışı yakala!",
        "examples": examples,
        "vocabulary": [v1, v2, v3, v4],
        "quickCheck": {
            "question": qc_q,
            "options": qc_opts,
            "correctIndex": qc_idx,
            "explanation": qc_expl
        },
        "exercise": {
            "prompt": f"Aşağıdaki cümleyi B1 seviyesine ve '{clean}' kuralına en uygun seçenekle tamamlayın:",
            "sentence": ex_sent,
            "options": ex_opts,
            "correctAnswer": ex_ans,
            "hint": f"'{clean}' konusunun temel dilbilgisel gereksinimini düşünün.",
            "explanation": f"Doğru cevap '{ex_ans}' seçeneğidir."
        },
        "sentenceBuilder": {
            "promptTr": sb_tr,
            "targetEn": sb_en,
            "availableWords": make_available_words(sb_en, ["crucial", "often", "very", "with", "from"]),
            "explanation": f"Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: '{sb_en}'."
        },
        "summaryTakeaways": [
            f"'{clean}' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
            "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
            "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
        ]
    }
