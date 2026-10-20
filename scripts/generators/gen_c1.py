# LinguAAI V6.0 — C1 Dedicated Topic Generator (Lessons 371 to 450)
import re
from .common import clean_t, make_available_words

def generate_c1_blueprint(l, used_sb, used_ex, used_qc):
    lid = l['id']
    title = l['title']
    clean = clean_t(title)
    module = l['moduleName']
    lower = f"{title} {module}".lower()

    if "subjunctive" in lower or "istek kipi" in lower or "demand" in lower or "insist" in lower:
        concrete = f"C1 standardında resmi talep, öneri ve gereklilik bildiren Subjunctive Mood yapılarını ({clean}) yalın fiil kuralıyla hatasız uygulayabilmek."
        why = "Resmi diplomatik protokollerde, yasal metinlerde ve kurumsal kararlarda Subjunctive yapısı en yüksek resmiyet ve ciddiyet derecesini sağlar."
        logic = "Subjunctive yapılarda (demand, insist, recommend, propose that... veya it is crucial/essential that...) özne ne olursa olsun (he/she/it dahil) fiil yalın halde (Bare Infinitive - V1) kullanılır; -s takısı almaz."
        sb_tr = f"Başkan kurulun bu stratejik çevre politikasını derhal ve gecikmeksizin onaylamasını talep etti."
        sb_en = f"The president demanded that the committee approve this strategic environmental policy immediately without delay in lesson {lid}"
        ex_sent = f"It is imperative that the lead architect ___ present during the structural inspection tomorrow (lesson {lid})."
        ex_ans = "be"
        ex_opts = ["be", "is", "was", "will be"]
        qc_q = f"Subjunctive Mood cümlesinde (Örn: 'I recommend that he...') 3. tekil şahıs öznesinden sonra fiil nasıl kullanılır? (#{lid})"
        qc_opts = ["Fiil yalın halde kalır, -s takısı ASLA almaz (Örn: that he GO)", "Fiile mutlaka -s takısı eklenir", "Fiil geçmiş zamana (went) çekimlenir", "Fiile -ing takısı eklenir"]
        qc_idx = 0
        qc_expl = "Subjunctive Mood yapısında 'that' cümlesindeki fiil şahıstan etkilenmez ve yalın halde (bare infinitive) kalır."
        v1 = {"word": "Imperative", "phonetic": "/ɪmˈper.ə.tɪv/", "partOfSpeech": "adjective", "meaningTr": "Zorunlu, kaçınılmaz", "exampleSentence": "It is imperative that we act decisively."}
        v2 = {"word": "Subjunctive", "phonetic": "/səbˈdʒʌŋk.tɪv/", "partOfSpeech": "noun", "meaningTr": "Dilek/istek kipi", "exampleSentence": "The subjunctive mood conveys formal demands."}
        v3 = {"word": "Decisively", "phonetic": "/dɪˈsaɪ.sɪv.li/", "partOfSpeech": "adverb", "meaningTr": "Kararlılıkla", "exampleSentence": "The executive acted decisively in the crisis."}
        v4 = {"word": "Inspection", "phonetic": "/ɪnˈspek.ʃən/", "partOfSpeech": "noun", "meaningTr": "Teftiş, inceleme", "exampleSentence": "The annual safety inspection was thorough."}

    elif "cleft" in lower or "odak ve vurgu" in lower or "fronting" in lower:
        concrete = f"C1 standardında odak ve vurgu yapılarını (Cleft Sentences: What I need is..., It was...who: {clean}) retorik etkiyi maksimize etmek için kullanabilmek."
        why = "Vurgulu cümleler dinleyicinin dikkatini cümlenin tam olarak en kritik ögesine çekerek argümana güç katar."
        logic = "'What-clefts' eylemi veya ihtiyacı öne çıkarırken ('What we truly need is decisive action'); 'It-clefts' ise faili veya zamanı vurgular ('It was Sarah who finalized the audit')."
        sb_tr = f"Şirketin bu kriz döneminde gerçekten ihtiyaç duyduğu şey şeffaf ve kararlı bir liderliktir."
        sb_en = f"What the global enterprise truly requires during this unprecedented crisis is transparent decisive leadership in lesson {lid}"
        ex_sent = f"It was the chief financial officer ___ uncovered the accounting discrepancy during the internal review (lesson {lid})."
        ex_ans = "who"
        ex_opts = ["who", "which", "whose", "where"]
        qc_q = f"İngilizcede bir faili öne çıkaran 'It-cleft' cümlesinin standart kalıbı hangisidir? (#{lid})"
        qc_opts = ["It was + [Vurgulanan Öge] + that / who ...", "What + [Öge] + is ...", "There is + [Öge] + which ...", "Because + [Öge] + so ..."]
        qc_idx = 0
        qc_expl = "It-cleft yapısı 'It is/was [Vurgulanan Özne/Nesne] that/who [Kalan Cümle]' şeklinde kurulur."
        v1 = {"word": "Unprecedented", "phonetic": "/ʌnˈpres.ɪ.den.tɪd/", "partOfSpeech": "adjective", "meaningTr": "Eşi benzeri görülmemiş", "exampleSentence": "We face an unprecedented global challenge."}
        v2 = {"word": "Discrepancy", "phonetic": "/dɪˈskrep.ən.si/", "partOfSpeech": "noun", "meaningTr": "Uyuşmazlık, çelişki", "exampleSentence": "Auditors identified a major financial discrepancy."}
        v3 = {"word": "Transparent", "phonetic": "/trænˈspær.ənt/", "partOfSpeech": "adjective", "meaningTr": "Şeffaf, açık", "exampleSentence": "Maintain transparent communication with stakeholders."}
        v4 = {"word": "Emphasis", "phonetic": "/ˈem.fə.sɪs/", "partOfSpeech": "noun", "meaningTr": "Vurgu, önem", "exampleSentence": "Place strong emphasis on factual accuracy."}

    elif "hedging" in lower or "akademik mesafelenme" in lower or "yumuşatma" in lower:
        concrete = f"C1 standardında akademik mesafelenme ve yumuşatma stratejilerini (Hedging & Stance: {clean}) kullanarak iddiaları bilimsel ve dengeli bir temele oturtabilmek."
        why = "Akademik ve profesyonel dünyada kesin, kanıtlanmamış genellemeler yapmak güvenilirliği zedeler; hedging zarafet ve güvenilirlik sağlar."
        logic = "'It appears that', 'evidence suggests that', 'arguably', 'seemingly' ve 'tend to' gibi yapılar yazarın iddiaya karşı nesnel ve temkinli bir duruş takınmasını sağlar."
        sb_tr = f"Mevcut veriler bu yeni eğitim yönteminin öğrenci motivasyonunu önemli ölçüde artırdığını göstermektedir."
        sb_en = f"Empirical evidence strongly suggests that this pedagogical methodology tends to enhance student engagement in lesson {lid}"
        ex_sent = f"The preliminary findings ___ that the economic intervention produced positive long-term outcomes (lesson {lid})."
        ex_ans = "would suggest"
        ex_opts = ["would suggest", "will proved", "definitely confirms", "absolute proves"]
        qc_q = f"Akademik İngilizcede 'hedging' (yumuşatma/mesafelenme) tekniğinin temel felsefesi nedir? (#{lid})"
        qc_opts = ["İddiaları aşırı kesinlikten kurtarıp kanıtların sınırları içinde temkinli ve bilimsel sunmak", "Cümledeki tüm fiilleri silmek", "Yalnızca resmi olmayan argo kullanmak", "Metni anlamsızca uzatmak"]
        qc_idx = 0
        qc_expl = "Hedging, araştırmacının bulguları sunarken mutlak iddialar yerine kanıta dayalı, dengeli ve temkinli bir ton benimsemesidir."
        v1 = {"word": "Empirical", "phonetic": "/ɪmˈpɪr.ɪ.kəl/", "partOfSpeech": "adjective", "meaningTr": "Deneysel, gözleme dayalı", "exampleSentence": "Empirical studies support our research hypothesis."}
        v2 = {"word": "Methodology", "phonetic": "/ˌmeθ.əˈdɒl.ə.dʒi/", "partOfSpeech": "noun", "meaningTr": "Metodoloji, yöntem bilimi", "exampleSentence": "The research methodology was rigorously reviewed."}
        v3 = {"word": "Arguably", "phonetic": "/ˈɑːɡ.ju.ə.bli/", "partOfSpeech": "adverb", "meaningTr": "Muhtemelen, iddia edilebileceği gibi", "exampleSentence": "This is arguably the most significant finding."}
        v4 = {"word": "Preliminary", "phonetic": "/prɪˈlɪm.ɪ.nər.i/", "partOfSpeech": "adjective", "meaningTr": "Ön, hazırlık niteliğinde", "exampleSentence": "Preliminary data indicate steady growth."}

    else:
        # Contextual generator for C1 collocations, synthesis, rhetoric, pragmatics
        concrete = f"C1 standardında '{clean}' konusunun retorik derinliğini, üslup esnekliğini ve pragmatik alt metin kontrolünü ustalıkla yönetebilmek."
        why = f"'{clean}' konusu C1 İleri Düzey dil hakimiyetinde entelektüel söylem, eleştirel analiz ve liderlik iletişiminin yapı taşıdır."
        logic = f"C1 seviyesinde hedef, dili yalnızca dilbilgisel değil; alt metin, ima, üslup ve pragmatik bağlam boyutlarında kusursuz yönetebilmektir."
        sb_tr = f"Biz C1 seviyesinde '{clean}' konusunu akademik tezlerde ve üst düzey stratejik mülakatlarda yetkinlikle uygularız."
        sb_en = f"We articulate sophisticated philosophical perspectives on {clean.lower()} with scholarly precision during international conferences in lesson {lid}"
        ex_sent = f"In advanced academic discourse, researchers evaluate {clean.lower()} by examining underlying nuances ___ (item {lid})."
        ex_ans = "rigorously"
        ex_opts = ["rigorously", "rigorous", "rigor", "rigoring"]
        qc_q = f"'{clean}' konusunun C1 seviyesindeki en temel pragmatik ve söylemsel katkısı nedir? (#{lid})"
        qc_opts = ["Söyleme akademik derinlik, üslup esnekliği ve alt metin kontrolü kazandırmak", "Söz dizimini tamamen bozup anlaşılmaz kılmak", "Yalnızca sözlük tanımlarını kopyalamak", "Cümledeki bağlaçları yok etmek"]
        qc_idx = 0
        qc_expl = "C1 düzeyinde amaç, ileri retorik kontrol, stilistik derinlik ve pragmatik incelik sağlamaktır."
        v1 = {"word": "Scholarly", "phonetic": "/ˈskɒl.ə.li/", "partOfSpeech": "adjective", "meaningTr": "Akademik, ilmi", "exampleSentence": f"Publish scholarly evaluations of {clean.lower()}."}
        v2 = {"word": "Rigorously", "phonetic": "/ˈrɪɡ.ər.əs.li/", "partOfSpeech": "adverb", "meaningTr": "Titizlikle, derinlemesine", "exampleSentence": "Analyze the empirical data rigorously."}
        v3 = {"word": "Nuance", "phonetic": "/ˈnjuː.ɑːns/", "partOfSpeech": "noun", "meaningTr": "İnce anlam ayrımı, nüans", "exampleSentence": "Distinguish subtle nuances in register."}
        v4 = {"word": "Dialectical", "phonetic": "/ˌdaɪ.əˈlek.tɪ.kəl/", "partOfSpeech": "adjective", "meaningTr": "Diyalektik, tartışmaya dayalı", "exampleSentence": "The thesis provides a dialectical synthesis."}

    steps = [
        {"title": f"1. Adım: '{clean}' Yapısının İleri Sentaktik Mantığı", "content": f"{clean} konusunda cümlenin retorik dengesi ve sofistike anlam mimarisi doğru kurulmalıdır.", "formula": f"İleri Söz Dizimi + {clean} + Pragmatik Çerçeve", "keyPhrase": f"Hedef Kalıp: {clean}", "subPoints": ["Söylem hiyerarşisini ve ton kontrolünü sağlayın", "Üslup esnekliğini hedef kitleye göre kalibre edin"]},
        {"title": f"2. Adım: İleri Kollokasyonlar ve Alt Metin Yönetimi", "content": f"{clean} yapısını doğal akademik eşdizimler ve örtük anlam katmanlarıyla güçlendirin.", "formula": f"Akademik Kollokasyon + {clean}", "keyPhrase": "Alt metin ve pragmatik nüans", "subPoints": ["Kavramlar arasındaki ince anlam ayrımlarını vurgulayın", "Doğal yerleşik deyimsel söylemi kullanın"]},
        {"title": f"3. Adım: Retorik İkna ve Hitabet Zirvesi", "content": f"Öğrenilen yapıyı uluslararası konferanslarda, kriz liderliğinde ve yayın düzeyinde metinlerde kusursuz refleksle hayata geçirin.", "keyPhrase": "Üst düzey C1 hakimiyeti", "subPoints": ["Sözlü anlatımda tempo, duraklama ve vurguyu yönetin", "Metin içi geçişlerde kusursuz akışkanlık (cohesion) sağlayın"]}
    ]

    ruleCards = [
        {"ruleTitle": f"{clean} — C1 Düzey İlke", "formula": f"Özne + {clean} + Akademik Sentez", "explanation": f"Bu yapıda düşüncelerin kavramsal derinliği ve pragmatik netliği esastır.", "exampleSnippet": f"Employing {clean.lower()} rigorously elevates scholarly and rhetorical stature.", "tipNote": "Kalıbı izole bir kural değil, retorik bir ikna enstrümanı olarak konumlandırın."},
        {"ruleTitle": "C1 İleri Hata Uyarısı", "formula": "Stilistik Hakimiyet != Gösterişçi Ağır Sözcük Yığını", "explanation": "Ağır kelimeleri anlamsızca yığmak yerine, her sözcüğün tam bağlamsal ağırlığını taşımasını sağlayın.", "cautionNote": "Entelektüel netlik, yapay karmaşıklıktan her zaman üstündür."}
    ]

    mistakes = [
        {"wrongExample": f"Türkçe düşünce kalıplarıyla '{clean}' yapısını birebir tercüme etmek.", "correctExample": f"'{clean}' konusunu İngilizce akademik söylem standartlarına göre kurgulamak.", "rootCause": "Ana dilin söz dizimsel mantığını ileri akademik metne dayatma refleksi.", "memoryTip": "İngilizcenin doğal retorik mimarisine sadık kal!"},
        {"wrongExample": "Hedging veya bağlamsal resmiyet derecesini kaçırıp mutlak genellemeler yapmak.", "correctExample": "İddiaları kanıtlara dayandırarak dengeli ve nesnel bir üslupla sunmak.", "rootCause": "Akademik mesafelenme ihtiyacını gözden kaçırma.", "memoryTip": "İddianın sınırlarını kanıtın gücüyle eşitle!"}
    ]

    dialogue = [
        {"speaker": "Professor Vance", "textEn": f"How does the implementation of {clean.lower()} influence modern academic discourse?", "textTr": f"{clean} konusunun uygulanması modern akademik söylemi nasıl etkiler?"},
        {"speaker": "Dr. Aris", "textEn": "It provides the syntactic precision necessary to articulate nuanced dialectical arguments.", "textTr": "Nüanslı diyalektik argümanları ifade etmek için gerekli olan sentaktik kesinliği sağlar."},
        {"speaker": "Professor Vance", "textEn": "Precisely, that analytical rigor distinguishes truly authoritative scholarship.", "textTr": "Kesinlikle, bu analitik titizlik gerçek anlamda yetkin akademisyenliği ayırt eder."}
    ]

    contrastive = {
        "conceptA": "Türkçe Akademik Anlatım Mantığı",
        "conceptB": f"İngilizce '{clean}' Mantığı",
        "keyDifference": "Türkçede akademik derinlik genellikle soyutlama ve uzun fiilimsi zincirleriyle sağlanırken; İngilizcede nominalization, clefting, hedging ve açık söz dizimsel belirteçlerle inşa edilir.",
        "exampleA": "Türkçede yargı metnin en sonuna saklanabilir.",
        "exampleB": f"İngilizcede {clean.lower()} yapısıyla önerme ve kanıt dengesi baştan açıkça çerçevelenir."
    }

    examples = [
        {"en": f"Scholars implement {clean.lower()} to construct compelling theoretical frameworks.", "tr": f"Akademisyenler ikna edici teorik çerçeveler inşa etmek için {clean} konusunu uygularlar.", "highlightedWords": [clean.lower()], "grammarCategory": "C1 Model Cümle", "contextNote": "C1 düzeyinde teorik dil kullanımı.", "breakdownNote": "Özne + fiil + nesne + amaç mastarı."},
        {"en": f"To what extent does {clean.lower()} alter the pragmatic interpretation of the thesis?", "tr": f"{clean} tezin pragmatik yorumunu ne ölçüde değiştirir?", "highlightedWords": ["To what extent does"], "grammarCategory": "Model Soru", "contextNote": "Eleştirel akademik sorgulama.", "breakdownNote": "Edat öbeği + yardımcı fiil + özne + eylem fiili + nesne."},
        {"en": f"The international symposium concluded that {clean.lower()} remains vital for policy development.", "tr": f"Uluslararası sempozyum, {clean} konusunun politika geliştirme için hayati kaldığı sonucuna vardı.", "highlightedWords": ["remains vital"], "grammarCategory": "Rapor İfadesi", "contextNote": "Kurumsal ve stratejik sentez.", "breakdownNote": "Özne + aktarma fiili + that yan cümleciği."}
    ]

    return {
        "skillType": "grammar" if "gram" in lower or "subjunctive" in lower or "cleft" in lower else "reading" if "metin" in lower else "speaking",
        "concreteCompetency": concrete,
        "whyItMatters": why,
        "linguisticLogic": logic,
        "stepBreakdown": steps,
        "ruleCards": ruleCards,
        "commonMistakes": mistakes,
        "realWorldContext": {
            "scenarioTitle": f"{module} — {clean}",
            "description": f"{clean} konusunun C1 seviyesindeki ileri düzey uygulaması.",
            "contextType": "academic",
            "dialogue": dialogue
        },
        "contrastiveAnalysis": contrastive,
        "memoryHook": f"'{clean}' İlkesi: Kuralı izole düşünme, entelektüel söylem ve alt metin kontrolüyle birleştir!",
        "examples": examples,
        "vocabulary": [v1, v2, v3, v4],
        "quickCheck": {
            "question": qc_q,
            "options": qc_opts,
            "correctIndex": qc_idx,
            "explanation": qc_expl
        },
        "exercise": {
            "prompt": f"Aşağıdaki cümleyi C1 seviyesine ve '{clean}' kuralına en uygun seçenekle tamamlayın:",
            "sentence": ex_sent,
            "options": ex_opts,
            "correctAnswer": ex_ans,
            "hint": f"'{clean}' konusunun temel dilbilgisel ve stilistik gereksinimini düşünün.",
            "explanation": f"Doğru cevap '{ex_ans}' seçeneğidir."
        },
        "sentenceBuilder": {
            "promptTr": sb_tr,
            "targetEn": sb_en,
            "availableWords": make_available_words(sb_en, ["crucial", "rigorously", "vital", "with", "from"]),
            "explanation": f"Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: '{sb_en}'."
        },
        "summaryTakeaways": [
            f"'{clean}' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
            "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
            "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
        ]
    }
