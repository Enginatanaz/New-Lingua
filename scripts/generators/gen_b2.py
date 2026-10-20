# LinguAAI V6.0 — B2 Dedicated Topic Generator (Lessons 271 to 370)
import re
from .common import clean_t, make_available_words

def generate_b2_blueprint(l, used_sb, used_ex, used_qc):
    lid = l['id']
    title = l['title']
    clean = clean_t(title)
    module = l['moduleName']
    lower = f"{title} {module}".lower()

    if "third conditional" in lower or "mixed conditional" in lower or "pişmanlık" in lower:
        concrete = f"B2 standardında geçmişteki kaçırılmış durumları ve pişmanlıkları Third & Mixed Conditionals ({clean}) ile ifade edebilmek."
        why = "Geçmişte farklı olsaydı sonucun nasıl değişeceğini veya geçmişteki bir kararın bugünkü sonucunu analiz etmek üst düzey eleştirel düşüncenin gereğidir."
        logic = "Third Conditional formülü: 'If + Past Perfect (had + V3), would have + V3' şeklindedir. Mixed Conditional ise geçmişteki eylemin bugünkü sonucunu (If + had V3, would + V1) bağlar."
        sb_tr = f"Eğer o gün ihaleyi kazanmış olsaydık şirketimiz bugün küresel ölçekte çok daha güçlü bir konumda olurdu."
        sb_en = f"If we had secured the international contract our enterprise would be in a vastly stronger market position today in lesson {lid}"
        ex_sent = f"If the engineering team had detected the software defect earlier, they ___ prevented the costly production delay (lesson {lid})."
        ex_ans = "would have"
        ex_opts = ["would have", "will have", "had", "would"]
        qc_q = f"Third Conditional cümlesinde geçmişteki kaçırılmış bir eylemin sonucunu belirtirken ana cümlede hangi yapı kullanılır? (#{lid})"
        qc_opts = ["Would have + V3 (Past Participle)", "Would + V1", "Will have + V3", "Had + V3"]
        qc_idx = 0
        qc_expl = "Third Conditional'da gerçekleşmemiş geçmiş sonucun formülü 'would have + V3'tür."
        v1 = {"word": "Enterprise", "phonetic": "/ˈen.tə.praɪz/", "partOfSpeech": "noun", "meaningTr": "Girişim, işletme", "exampleSentence": "The enterprise expanded into European markets."}
        v2 = {"word": "Defect", "phonetic": "/ˈdiː.fekt/", "partOfSpeech": "noun", "meaningTr": "Kusur, hata", "exampleSentence": "Inspect the device for any software defect."}
        v3 = {"word": "Hindsight", "phonetic": "/ˈhaɪnd.saɪt/", "partOfSpeech": "noun", "meaningTr": "Sonradan anlama, geçmişe bakış", "exampleSentence": "In hindsight, we should have acted faster."}
        v4 = {"word": "Vastly", "phonetic": "/ˈvɑːst.li/", "partOfSpeech": "adverb", "meaningTr": "Büyük ölçüde, son derece", "exampleSentence": "The situation is vastly improved."}

    elif "ettirgen" in lower or "causative" in lower or "have something done" in lower:
        concrete = f"B2 standardında ettirgen çatıları (Causatives: have/get something done, make someone do: {clean}) ustalıkla kullanabilmek."
        why = "Bir işi başkasına yaptırdığımızı veya başkasını bir eyleme ikna/zorunlu kıldığımızı belirtmek için ettirgen yapılar şarttır."
        logic = "'Have / Get + nesne + V3' bir hizmeti başkasına yaptırmayı; 'Make + kişi + V1' zorlamayı; 'Get + kişi + to V1' ise ikna etmeyi ifade eder."
        sb_tr = f"Yönetim kurulu yeni kurumsal web sitesini önümüzdeki hafta uzman bir yazılım ajansına tasarlatacak."
        sb_en = f"The management board will have the corporate website redesigned by an external agency next week in lesson {lid}"
        ex_sent = f"The project director got the reluctant supplier ___ the urgent component delivery date (lesson {lid})."
        ex_ans = "to expedite"
        ex_opts = ["to expedite", "expedite", "expediting", "expedited"]
        qc_q = f"'Get' ettirgen fiilinden sonra bir kişi geldiğinde (ikna anlamında) fiil nasıl bağlanır? (#{lid})"
        qc_opts = ["'to' mastarı ile bağlanır (get someone TO do something)", "Yalın fiil (V1) olarak bağlanır", "-ing eki ile bağlanır", "Doğrudan V3 olur"]
        qc_idx = 0
        qc_expl = "'Have someone do' yalın fiil alırken; 'Get someone to do' yapısı 'to' mastarını zorunlu kılar."
        v1 = {"word": "Causative", "phonetic": "/ˈkɔː.zə.tɪv/", "partOfSpeech": "adjective", "meaningTr": "Ettirgen, sebep olan", "exampleSentence": "Causative verbs indicate delegation."}
        v2 = {"word": "Expedite", "phonetic": "/ˈek.spə.daɪt/", "partOfSpeech": "verb", "meaningTr": "Hızlandırmak, kolaylaştırmak", "exampleSentence": "We need to expedite the delivery process."}
        v3 = {"word": "Reluctant", "phonetic": "/rɪˈlʌk.tənt/", "partOfSpeech": "adjective", "meaningTr": "İsteksiz, tereddütlü", "exampleSentence": "The client was reluctant to commit."}
        v4 = {"word": "Redesigned", "phonetic": "/ˌriː.dɪˈzaɪnd/", "partOfSpeech": "verb", "meaningTr": "Yeniden tasarlandı (V3)", "exampleSentence": "We had the system redesigned."}

    elif "geçmişe dair modal" in lower or "must have" in lower or "can't have" in lower or "should have" in lower:
        concrete = f"B2 standardında geçmiş olaylara dair mantıksal çıkarım ve pişmanlıkları (Must have, Can't have, Should have: {clean}) hatasız ifade edebilmek."
        why = "Geçmişte neyin kesin olduğunu, neyin imkansız olduğunu veya neyin yapılmasının gerekip de yapılmadığını eleştirebilmek için bu modallar esastır."
        logic = "'Must have + V3' geçmişe dönük güçlü kesinlik (%99 olmuş olmalı); 'Can't have + V3' imkansızlık (olmuş olamaz); 'Should have + V3' ise kaçırılmış ödev veya pişmanlık (yapmalıydı ama yapmadı) bildirir."
        sb_tr = f"Raporu dün teslim etmeliydik ama son verileri doğrulamak için biraz daha zamana ihtiyacımız vardı."
        sb_en = f"We should have submitted the financial audit yesterday but we needed additional verification time in lesson {lid}"
        ex_sent = f"He is a dedicated employee; he ___ have intentionally deleted the database files (lesson {lid})."
        ex_ans = "can't"
        ex_opts = ["can't", "must", "should", "ought"]
        qc_q = f"Geçmişte yapılması gerekip de yapılmayan bir eyleme yönelik eleştiri veya pişmanlık hangi modalla bildirilir? (#{lid})"
        qc_opts = ["Should have + V3 (Örn: You should have told me)", "Must have + V3", "Could have + V1", "Might have + V-ing"]
        qc_idx = 0
        qc_expl = "'Should have + V3' geçmişte yapılması tavsiye edilen ancak yapılmayan eylemler için eleştiri ve pişmanlık bildirir."
        v1 = {"word": "Deduction", "phonetic": "/dɪˈdʌk.ʃən/", "partOfSpeech": "noun", "meaningTr": "Mantıksal çıkarım", "exampleSentence": "Past modal deductions require evidence."}
        v2 = {"word": "Intentionally", "phonetic": "/ɪnˈten.ʃən.əl.i/", "partOfSpeech": "adverb", "meaningTr": "Kasıtlı olarak", "exampleSentence": "He did not intentionally mislead us."}
        v3 = {"word": "Audit", "phonetic": "/ˈɔː.dɪt/", "partOfSpeech": "noun", "meaningTr": "Denetim, teftiş", "exampleSentence": "The financial audit revealed no errors."}
        v4 = {"word": "Verification", "phonetic": "/ˌver.ɪ.fɪˈkeɪ.ʃən/", "partOfSpeech": "noun", "meaningTr": "Doğrulama, teyit", "exampleSentence": "Security verification takes time."}

    elif "devrik" in lower or "inversion" in lower or "seldom" in lower or "rarely" in lower:
        concrete = f"B2 standardında olumsuz zarflarla devrik cümle kurarak (Inversion: {clean}) retorik vurguyu ve resmi anlatımı güçlendirebilmek."
        why = "Devrik yapılar (Seldom, Rarely, Never, Scarcely, Not only...but also) metne edebi derinlik ve güçlü bir ikna tonu katar."
        logic = "Cümle olumsuz bir zarfla başladığında özne ile yardımcı fiil yer değiştirir (soru kalıbı gibi dizilir): 'Seldom do we witness...', 'Never have I seen...'."
        sb_tr = f"Böylesine yenilikçi ve çığır açıcı bir mimari tasarıma nadiren tanık olmuşuzdur."
        sb_en = f"Seldom have we witnessed such an extraordinarily innovative architectural design in lesson {lid}"
        ex_sent = f"Not only ___ the committee members endorse the environmental policy, but they also allocated full funding (lesson {lid})."
        ex_ans = "did"
        ex_opts = ["did", "were", "had", "are"]
        qc_q = f"Cümle 'Seldom' veya 'Rarely' gibi olumsuz bir zarfla başladığında söz diziminde ne gerçekleşir? (#{lid})"
        qc_opts = ["Yardımcı fiil öznenin önüne geçer (inversion devrik yapı oluşur)", "Fiil doğrudan cümlenin sonuna atılır", "Özne tamamen cümleden düşer", "Cümle soru işaretine dönüşür"]
        qc_idx = 0
        qc_expl = "Olumsuz veya kısıtlayıcı zarflar cümlenin başına geldiğinde özne ile yardımcı fiil yer değiştirir (Inversion kuralı)."
        v1 = {"word": "Inversion", "phonetic": "/ɪnˈvɜː.ʃən/", "partOfSpeech": "noun", "meaningTr": "Devriklik, ters çevirme", "exampleSentence": "Syntactic inversion adds rhetorical weight."}
        v2 = {"word": "Extraordinarily", "phonetic": "/ɪkˈstrɔː.dɪn.ər.əl.i/", "partOfSpeech": "adverb", "meaningTr": "Olağanüstü derecede", "exampleSentence": "The proposal was extraordinarily persuasive."}
        v3 = {"word": "Endorse", "phonetic": "/ɪnˈdɔːs/", "partOfSpeech": "verb", "meaningTr": "Onaylamak, desteklemek", "exampleSentence": "The board endorsed the initiative."}
        v4 = {"word": "Seldom", "phonetic": "/ˈsel.dəm/", "partOfSpeech": "adverb", "meaningTr": "Nadiren, pek az", "exampleSentence": "Seldom do we encounter such dedication."}

    else:
        # Contextual generator for B2 negotiation, discourse, idioms
        concrete = f"B2 standardında '{clean}' konusunun retorik, pragmatik ve yapısal gereklerini bağımsız üst düzey akıcılıkla uygulayabilmek."
        why = f"'{clean}' konusu B2 Upper Intermediate seviyesinde profesyonel argümantasyon ve söylem yönetiminin merkezindedir."
        logic = f"B2 seviyesinde hedef, karmaşık fikirleri mantıksal bağlaçlar, kiplikler ve nüanslı kelime dağarcığıyla akıcı biçimde ifade etmektir."
        sb_tr = f"Biz B2 seviyesinde '{clean}' konusunu uluslararası müzakere ve akademik tartışmalarda yetkinlikle uygularız."
        sb_en = f"We articulate nuanced viewpoints on {clean.lower()} during sophisticated international negotiations in lesson {lid}"
        ex_sent = f"In complex Upper Intermediate discourse, professionals implement {clean.lower()} by applying ___ syntax (item {lid})."
        ex_ans = "persuasive"
        ex_opts = ["persuasive", "persuade", "persuasion", "persuading"]
        qc_q = f"'{clean}' konusunu B2 seviyesinde ele alırken en kritik retorik hedef nedir? (#{lid})"
        qc_opts = ["Karmaşık argümanları tutarlı bağlaçlar ve söylem belirteçleriyle savunmak", "Yalnızca basit cümleler kurmak", "Her cümlenin sonuna Türkçe ekler koymak", "Fiilleri rastgele biçimlerde çekimlemek"]
        qc_idx = 0
        qc_expl = "B2 seviyesinde amaç, karmaşık argümanları tutarlı bağlaçlar, söylem belirteçleri ve profesyonel üslupla savunabilmektir."
        v1 = {"word": "Nuanced", "phonetic": "/ˈnjuː.ɑːnst/", "partOfSpeech": "adjective", "meaningTr": "İnce ayrıntılı, nüanslı", "exampleSentence": f"Provide a nuanced explanation of {clean.lower()}."}
        v2 = {"word": "Persuasive", "phonetic": "/pəˈsweɪ.sɪv/", "partOfSpeech": "adjective", "meaningTr": "İkna edici", "exampleSentence": "She gave a persuasive presentation."}
        v3 = {"word": "Sophisticated", "phonetic": "/səˈfɪs.tɪ.keɪ.tɪd/", "partOfSpeech": "adjective", "meaningTr": "Gelişmiş, sofistike", "exampleSentence": "The argument employed sophisticated logic."}
        v4 = {"word": "Negotiation", "phonetic": "/nəˌɡəʊ.ʃiˈeɪ.ʃən/", "partOfSpeech": "noun", "meaningTr": "Müzakere, pazarlık", "exampleSentence": "Diplomatic negotiation demands precision."}

    steps = [
        {"title": f"1. Adım: '{clean}' Yapısının İleri Dilbilgisi Mantığı", "content": f"{clean} konusunda cümlenin söz dizimsel dengesi ve ileri anlam derinliği sağlanmalıdır.", "formula": f"İleri Yapı + {clean} + Nüanslı Tamamlayıcı", "keyPhrase": f"Hedef Kalıp: {clean}", "subPoints": ["Zaman ve kip uyumunu cümlenin genelinde koruyun", "Resmiyet derecesini bağlama göre seçin"]},
        {"title": f"2. Adım: Söylem Bağlaçları ve İleri Dönüşümler", "content": f"{clean} yapısını zıtlık, neden-sonuç ve varsayım bildiren söylem belirteçleriyle entegre edin.", "formula": f"Söylem Belirteci + {clean}", "keyPhrase": "Söylem akışı ve tutarlılık", "subPoints": ["Despite, whereas, furthermore gibi bağlaçlarla bağlayın", "Gereksiz sözcük kalabalığından kaçının"]},
        {"title": f"3. Adım: Müzakere ve Retorik Yetkinlik", "content": f"Öğrenilen yapıyı iş toplantılarında, sunumlarda ve eleştirel analizlerde doğal refleksle kullanın.", "keyPhrase": "İkna edici B2 söylemi", "subPoints": ["Tonlamayı ve diplomatik yumuşatmayı (hedging) uygulayın", "Dinleyici beklentisine göre üslubu uyarlayın"]}
    ]

    ruleCards = [
        {"ruleTitle": f"{clean} — İleri Düzey İlke", "formula": f"Özne + {clean} + Sofistike Yüklem", "explanation": f"Bu yapıda düşüncelerin mantıksal hiyerarşisi ve anlamsal netliği esastır.", "exampleSnippet": f"Implementing {clean.lower()} effectively elevates communicative authority.", "tipNote": "Kalıbı tek başına değil, söylemin akışı içinde organik bir parça olarak kullanın."},
        {"ruleTitle": "B2 Hata Hatırlatıcısı", "formula": "Stilistik Uyum != Aşırı Yapay Süslü Dil", "explanation": "Gereksiz karmaşık kelimeleri anlamsızca sıralamak yerine duru ve amacına uygun dil kullanın.", "cautionNote": "Doğru gramer ve netlik süslü ifadeden daima önce gelir."}
    ]

    mistakes = [
        {"wrongExample": f"Türkçe düşünerek '{clean}' yapısını birebir kopyalamak.", "correctExample": f"'{clean}' konusunu İngilizce doğal söylem standartlarına göre kurmak.", "rootCause": "Ana dilin zihinsel şablonlarını ileri seviyeye yansıtma alışkanlığı.", "memoryTip": "İngilizcenin doğal retorik yapısına güven!"},
        {"wrongExample": "Zaman uyumunu veya modal çekimini cümle ortasında bozmak.", "correctExample": "Cümlenin başından sonuna kadar zaman ve kip tutarlılığını korumak.", "rootCause": "Uzun ve birleşik cümlelerde dikkat dağınıklığı.", "memoryTip": "Cümlenin ana yüklemini ve yan cümle bağını sürekli göz önünde tut!"}
    ]

    dialogue = [
        {"speaker": "Alex", "textEn": f"How do you usually approach {clean.lower()} during high-level strategic meetings?", "textTr": f"Üst düzey stratejik toplantılarda {clean} konusuna genellikle nasıl yaklaşırsınız?"},
        {"speaker": "Sarah", "textEn": "I articulate the core premise clearly before introducing nuanced caveats.", "textTr": "İnce çekinceleri sunmadan önce temel önermeyi açıkça ifade ederim."},
        {"speaker": "Alex", "textEn": "That balance between assertiveness and diplomatic nuance is exceptionally persuasive.", "textTr": "Net duruş ile diplomatik incelik arasındaki bu denge son derece ikna edicidir."}
    ]

    contrastive = {
        "conceptA": "Türkçe İleri Söylem Yapısı",
        "conceptB": f"İngilizce '{clean}' Mantığı",
        "keyDifference": "Türkçede karmaşık cümleler fiilimsi zincirleriyle geriye doğru bağlanırken; İngilizcede ana cümle öne alınır ve yan cümlecikler mantıksal bağlaçlarla eklenir.",
        "exampleA": "Türkçede niteleme ve şart ana yüklemden önce gelir.",
        "exampleB": f"İngilizcede {clean.lower()} ana önerme ile yan önermeyi açık bağlaçlarla birbirine kilitler."
    }

    examples = [
        {"en": f"A comprehensive command of {clean.lower()} empowers leaders to formulate persuasive arguments.", "tr": f"{clean} konusuna kapsamlı hakimiyet, liderlerin ikna edici argümanlar üretmesini sağlar.", "highlightedWords": [clean.lower()], "grammarCategory": "B2 Model Cümle", "contextNote": "B2 seviyesinde stratejik dil kullanımı.", "breakdownNote": "Özne öbeği + fiil + nesne + mastar."},
        {"en": f"Why should analysts incorporate {clean.lower()} when assessing market fluctuations?", "tr": f"Analistler piyasa dalgalanmalarını değerlendirirken {clean} konusunu neden dahil etmelidir?", "highlightedWords": ["Why should analysts incorporate"], "grammarCategory": "Model Soru", "contextNote": "Finansal ve analitik sorgulama.", "breakdownNote": "Soru kelimesi + modal + özne + eylem fiili + nesne."},
        {"en": f"The executive committee resolved the deadlock by adopting {clean.lower()} frameworks.", "tr": f"İcra komitesi {clean} çerçevelerini benimseyerek kilitlenmeyi çözdü.", "highlightedWords": ["resolved the deadlock"], "grammarCategory": "Uygulama İfadesi", "contextNote": "Kriz çözümü ve kurumsal karar alma.", "breakdownNote": "Özne + fiil + nesne + edat grubu."}
    ]

    return {
        "skillType": "grammar" if "gram" in lower or "koşul" in lower or "devrik" in lower or "modal" in lower else "vocabulary",
        "concreteCompetency": concrete,
        "whyItMatters": why,
        "linguisticLogic": logic,
        "stepBreakdown": steps,
        "ruleCards": ruleCards,
        "commonMistakes": mistakes,
        "realWorldContext": {
            "scenarioTitle": f"{module} — {clean}",
            "description": f"{clean} konusunun B2 seviyesindeki gerçek yaşam uygulaması.",
            "contextType": "workplace",
            "dialogue": dialogue
        },
        "contrastiveAnalysis": contrastive,
        "memoryHook": f"'{clean}' İlkesi: Kuralı izole düşünme, söylem bağlaçlarını ve retorik akışı birleştir!",
        "examples": examples,
        "vocabulary": [v1, v2, v3, v4],
        "quickCheck": {
            "question": qc_q,
            "options": qc_opts,
            "correctIndex": qc_idx,
            "explanation": qc_expl
        },
        "exercise": {
            "prompt": f"Aşağıdaki cümleyi B2 seviyesine ve '{clean}' kuralına en uygun seçenekle tamamlayın:",
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
