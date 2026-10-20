# LinguAAI V6.0 — C2 Dedicated Topic Generator (Lessons 451 to 488)
import re
from .common import clean_t, make_available_words

def generate_c2_blueprint(l, used_sb, used_ex, used_qc):
    lid = l['id']
    title = l['title']
    clean = clean_t(title)
    module = l['moduleName']
    lower = f"{title} {module}".lower()

    if "üslup" in lower or "stylistic" in lower or "arkaik" in lower or "edebi" in lower or "lest" in lower:
        concrete = f"C2 Ustalık (Mastery) standardında üslup çeşitliliği, edebi dil hakimiyeti ve arkaik sentaktik yapıları ({clean}) ana dili seviyesinde icra edebilmek."
        why = "C2 seviyesinde dil yalnızca bir iletişim aracı değil; edebi, felsefi ve estetik bir sanat enstrümanıdır."
        logic = "'Lest he forget' gibi arkaik subjunctive formlar, edebi inversion yapıları ve sentaktik ritim kontrolü metne ölümsüz bir stilistik zarafet katar."
        sb_tr = f"Kusursuz üslup kontrolü ve estetik sentaktik denge C2 düzeyinde dil ustalığının nihai alametifarikasıdır."
        sb_en = f"Flawless stylistic versatility and aesthetic syntactic rhythm represent the definitive hallmark of C2 language mastery in lesson {lid}"
        ex_sent = f"The venerable scholar chose his words with profound deliberation lest his diplomatic intentions ___ misunderstood (lesson {lid})."
        ex_ans = "be"
        ex_opts = ["be", "were", "are", "would"]
        qc_q = f"İngilizcede 'lest' bağlacından sonra gelen cümlecikte fiil hangi kurala göre şekillenir? (#{lid})"
        qc_opts = ["Yalın fiil (bare subjunctive) veya 'should + V1' kullanılır (Örn: lest he BE / lest he SHOULD BE)", "Daima Past Perfect (had V3) zorunludur", "Sadece Future Simple (will) kullanılır", "Fiil -ing takısı alır"]
        qc_idx = 0
        qc_expl = "'Lest' bağlacı arkaik/edebi bir amaç-korku bağlacıdır ve arkasından daima yalın subjunctive (be/do) veya 'should + yalın fiil' gerektirir."
        v1 = {"word": "Versatility", "phonetic": "/ˌvɜː.səˈtɪl.ə.ti/", "partOfSpeech": "noun", "meaningTr": "Çok yönlülük, esneklik", "exampleSentence": "Stylistic versatility distinguishes a master writer."}
        v2 = {"word": "Definitive", "phonetic": "/dɪˈfɪn.ɪ.tɪv/", "partOfSpeech": "adjective", "meaningTr": "Kesin, nihai, belirleyici", "exampleSentence": "This is the definitive critique of the work."}
        v3 = {"word": "Venerable", "phonetic": "/ˈven.ər.ə.bəl/", "partOfSpeech": "adjective", "meaningTr": "Saygıdeğer, muhterem", "exampleSentence": "The venerable professor addressed the assembly."}
        v4 = {"word": "Deliberation", "phonetic": "/dɪˌlɪb.əˈreɪ.ʃən/", "partOfSpeech": "noun", "meaningTr": "Enine boyuna düşünme, temkin", "exampleSentence": "After extensive deliberation, the treaty was signed."}

    elif "ironi" in lower or "hiciv" in lower or "understatement" in lower:
        concrete = f"C2 standardında İngiliz kültüründeki ince ironiyi, hicvi ve understatement (küçümseme/ölçülülük) sanatını ({clean}) eksiksiz çözümleyip üretebilmek."
        why = "İngiliz kültürel pragmatiğinde en ağır felaketler bile 'a bit inconvenient' gibi ölçülü (understated) ifadelerle yumuşatılır; bu zarafeti kavramak ana dili düzeyinin göstergesidir."
        logic = "Understatement, bir durumu bilerek olduğundan çok daha hafif veya önemsiz göstererek ironik bir zeka ve soğukkanlılık yaratma sanatıdır."
        sb_tr = f"Kültürel mizahı ve örtük ironiyi yakalayabilmek ana dili İngilizce olanların zihin dünyasına tam entegrasyonu sağlar."
        sb_en = f"Appreciating subtle cultural understatement and layered irony enables complete integration into native discourse in lesson {lid}"
        ex_sent = f"When the historic cathedral roof collapsed during the storm, the stoic bishop merely remarked that the weather was ___ (lesson {lid})."
        ex_ans = "rather unhelpful"
        ex_opts = ["rather unhelpful", "an absolute apocalyptic tragedy", "destroying everything entirely", "the worst horror"]
        qc_q = f"İngiliz kültüründeki 'British understatement' tekniğinin temel felsefesi nedir? (#{lid})"
        qc_opts = ["Dramatik durumları aşırı tepki vermeden bilerek son derece hafif ve sakin kelimelerle nitelemek", "Sürekli abartılı ve aşırı duygusal kelimeler seçmek", "Yalnızca doğrudan hakaret etmek", "Konuşmayı tamamen kesip susmak"]
        qc_idx = 0
        qc_expl = "British understatement, fırtına veya kriz gibi büyük olayları 'a bit breezy' veya 'rather unhelpful' gibi ölçülü ifadelerle karşılayan kültürel bir tavırdır."
        v1 = {"word": "Understatement", "phonetic": "/ˌʌn.dəˈsteɪt.mənt/", "partOfSpeech": "noun", "meaningTr": "Ölçülü ifade, bilerek hafifseme", "exampleSentence": "To say the exam was tough is an understatement."}
        v2 = {"word": "Stoic", "phonetic": "/ˈstəʊ.ɪk/", "partOfSpeech": "adjective", "meaningTr": "Metanetli, soğukkanlı", "exampleSentence": "His stoic composure calmed the crowd."}
        v3 = {"word": "Subtle", "phonetic": "/ˈsʌt.əl/", "partOfSpeech": "adjective", "meaningTr": "İnce, sezilmesi zor, ustalıklı", "exampleSentence": "Her novel is full of subtle irony."}
        v4 = {"word": "Composure", "phonetic": "/kəmˈpəʊ.ʒər/", "partOfSpeech": "noun", "meaningTr": "Huzur, kendine hakimiyet", "exampleSentence": "He maintained admirable composure throughout."}

    elif "hukuk" in lower or "finans" in lower or "felsefe" in lower or "terminoloji" in lower:
        concrete = f"C2 standardında hukuk, finans ve felsefi metinlerdeki terminolojik karmaşıklığı, paradoksları ve epistemik açmazları ({clean}) çözebilmek."
        why = "Uluslararası sözleşmelerde, tahkim metinlerinde ve felsefi risalelerde dilin hukuki ve kavramsal bağlayıcılığı mutlak kesinlik gerektirir."
        logic = "Hukuki ve felsefi söylemde her edat, modal ve koşul cümlesi milyonlarca dolarlık sorumlulukları veya ontolojik önermeleri belirler."
        sb_tr = f"Hukuki sözleşmelerdeki her bir bağlayıcı madde uluslararası tahkim kurallarına göre titizlikle yorumlanmalıdır."
        sb_en = f"Every binding contractual covenant in international jurisprudence must be interpreted with unyielding scrutiny in lesson {lid}"
        ex_sent = f"Notwithstanding any prior verbal agreements, the arbitration tribunal deemed the clause entirely ___ (lesson {lid})."
        ex_ans = "enforceable"
        ex_opts = ["enforceable", "enforce", "enforcing", "enforceability"]
        qc_q = f"Hukuki İngilizcede 'Notwithstanding' edatının anlamsal ve sentaktik işlevi nedir? (#{lid})"
        qc_opts = ["'-e rağmen / saklı kalmak kaydıyla' anlamına gelen resmi bir zıtlık ve istisna belirtecidir", "'Çünkü' anlamına gelen bir sebep bağlacıdır", "'Eğer' anlamına gelen bir koşul yapısıdır", "'Sonuç olarak' bildiren bir zarftır"]
        qc_idx = 0
        qc_expl = "'Notwithstanding' resmi hukuki dilde '...e bakılmaksızın / ...e rağmen' (in spite of) anlamına gelen bağlayıcı bir terimdir."
        v1 = {"word": "Jurisprudence", "phonetic": "/ˌdʒʊə.rɪsˈpruː.dəns/", "partOfSpeech": "noun", "meaningTr": "Hukuk felsefesi, içtihat", "exampleSentence": "Modern jurisprudence examines contractual equity."}
        v2 = {"word": "Enforceable", "phonetic": "/ɪnˈfɔː.sə.bəl/", "partOfSpeech": "adjective", "meaningTr": "Yürütülebilir, icra edilebilir", "exampleSentence": "The arbitration clause is legally enforceable."}
        v3 = {"word": "Scrutiny", "phonetic": "/ˈskruː.tɪ.ni/", "partOfSpeech": "noun", "meaningTr": "Detaylı inceleme, sıkı denetim", "exampleSentence": "The financial statements underwent intense scrutiny."}
        v4 = {"word": "Covenant", "phonetic": "/ˈkʌv.ən.ənt/", "partOfSpeech": "noun", "meaningTr": "Bağlayıcı sözleşme hükmü", "exampleSentence": "The company complied with every loan covenant."}

    else:
        # Contextual generator for C2 spontaneity, oratorical climax, mastery
        concrete = f"C2 standardında '{clean}' konusunun hitabet zirvesini, anlık söylem üretimini ve mutlak dil hakimiyetini kusursuz icra edebilmek."
        why = f"'{clean}' konusu C2 Ustalık seviyesinde ana dili düzeyinin ötesinde tarihi liderlik hitabeti ve edebi sentezin doruk noktasıdır."
        logic = f"C2 düzeyinde dil kuralları düşünülmez; sentaktik mimari, ses ahengi (euphony), retorik tricolon ve semantik derinlik kendiliğinden akar."
        sb_tr = f"Biz C2 seviyesinde '{clean}' konusunu tarihe geçen liderlik konuşmalarında ve edebi şaheserlerde zarafetle hayata geçiririz."
        sb_en = f"We achieve consummate linguistic elegance in {clean.lower()} through spontaneous intellectual oratorical mastery in lesson {lid}"
        ex_sent = f"At the pinnacle of C2 oratorical mastery, distinguished speakers synthesize {clean.lower()} with ___ eloquence (item {lid})."
        ex_ans = "transcendent"
        ex_opts = ["transcendent", "transcend", "transcendence", "transcending"]
        qc_q = f"'{clean}' konusunun C2 Ustalık (Mastery) seviyesindeki nihai felsefi ve retorik amacı nedir? (#{lid})"
        qc_opts = ["Düşünce ile ifade arasındaki mesafeyi sıfırlayarak dili sanatsal, spontane ve mutlak hakimiyetle kullanmak", "Söz dizimini kasten bozmak", "Sadece kural ezberi yapmak", "Basit kelimeleri arka arkaya tekrarlamak"]
        qc_idx = 0
        qc_expl = "C2 seviyesi, düşünce ile ifade arasındaki mesafenin tamamen kalktığı, dilin estetik, spontane ve mükemmel bir üslupla aktarıldığı ustalık aşamasıdır."
        v1 = {"word": "Consummate", "phonetic": "/ˈkɒn.sə.mət/", "partOfSpeech": "adjective", "meaningTr": "Kusursuz, yetkin, mükemmel", "exampleSentence": f"She demonstrated consummate mastery of {clean.lower()}."}
        v2 = {"word": "Transcendent", "phonetic": "/trænˈsen.dənt/", "partOfSpeech": "adjective", "meaningTr": "Üstün, olağanüstü, sınırları aşan", "exampleSentence": "His rhetoric achieved transcendent power."}
        v3 = {"word": "Eloquence", "phonetic": "/ˈel.ə.kwəns/", "partOfSpeech": "noun", "meaningTr": "Hitabet gücü, fesahat", "exampleSentence": "Her natural eloquence held the audience spellbound."}
        v4 = {"word": "Pinnacle", "phonetic": "/ˈpɪn.ə.kəl/", "partOfSpeech": "noun", "meaningTr": "Zirve, doruk noktası", "exampleSentence": "C2 represents the pinnacle of language learning."}

    steps = [
        {"title": f"1. Adım: '{clean}' Yapısının Zirve Sentaktik Estetiği", "content": f"{clean} konusunda cümlenin ahengi (euphony), ritmi ve retorik ağırlığı kusursuz dengelenmelidir.", "formula": f"Edebi Sentaks + {clean} + Felsefi Önerme", "keyPhrase": f"Hedef Kalıp: {clean}", "subPoints": ["Sentaktik esnekliği ve ritim çeşitliliğini yönetin", "Tarihi ve edebi söylem modellerini içselleştirin"]},
        {"title": f"2. Adım: Semantik Derinlik ve Katmanlı Anlam Üretimi", "content": f"{clean} yapısını ima, alt metin ve metaforik uzantılarla zenginleştirin.", "formula": f"Metaforik Söylem + {clean}", "keyPhrase": "Çok katmanlı anlamsal derinlik", "subPoints": ["Sözcüklerin çağrışımsal (connotative) gücünü kullanın", "Kültürel ve felsefi göndermeleri ustalıkla yerleştirin"]},
        {"title": f"3. Adım: Spontane Hitabet ve Ustalık Sentezi", "content": f"Öğrenilen yapıyı baskı altında, doğaçlama münazaralarda ve tarihi liderlik hitabetlerinde eksiksiz hayata geçirin.", "keyPhrase": "Mutlak C2 Ustalığı", "subPoints": ["Ses tonlamasını, nefes kontrolünü ve retorik duraklamaları yönetin", "Dinleyici zihninde kalıcı estetik ve entelektüel iz bırakın"]}
    ]

    ruleCards = [
        {"ruleTitle": f"{clean} — C2 Ustalık İlkesi", "formula": f"Özne + {clean} + Nihai Felsefi Sentez", "explanation": f"Bu yapıda düşüncenin mükemmel berraklığı ve dilsel zarafetin mutlak uyumu esastır.", "exampleSnippet": f"Synthesizing {clean.lower()} at C2 level epitomizes linguistic virtuosity.", "tipNote": "Dili kurallarla değil, yaşayan dinamik bir felsefe ve sanat olarak yönetin."},
        {"ruleTitle": "C2 Ustalık Hatırlatıcısı", "formula": "Gerçek Ustalık = Zahmetsiz Görünen Kusursuz Zarafet (Sprezzatura)", "explanation": "En zor yapıları bile dinleyiciye hiçbir yapaylık hissettirmeden, son derece doğal ve zahmetsizce aktarın.", "cautionNote": "Yapay zorlamalardan kaçının; duru zarafet daima en güçlü silahtır."}
    ]

    mistakes = [
        {"wrongExample": f"Aşırı süslü veya arkaik kelimeleri bağlamı gözetmeksizin boca etmek.", "correctExample": f"'{clean}' yapısını duru, isabetli ve estetik bir söz dizimiyle sunmak.", "rootCause": "Ustalığı yapay kelime gösterişiyle karıştırma yanılgısı.", "memoryTip": "Duru zarafet ve kesinlik, karmaşık süsten daima üstündür!"},
        {"wrongExample": "Kültürel alt metin veya tonlama inceliğini kaçırıp literal anlamda takılı kalmak.", "correctExample": "C2 seviyesinde alt metni, örtük ironiyi ve ton esnekliğini tam yönetmek.", "rootCause": "Yüzeysel dilbilgisi sınırlarında kalma.", "memoryTip": "Sadece söylenen kelimeleri değil, kelimelerin arkasındaki suskunluğu da dinle!"}
    ]

    dialogue = [
        {"speaker": "Ambassador Thorne", "textEn": f"How do you evaluate the philosophical resonance of {clean.lower()} in modern diplomacy?", "textTr": f"Modern diplomaside {clean} konusunun felsefi yankısını nasıl değerlendiriyorsunuz?"},
        {"speaker": "Lord Sterling", "textEn": "It epitomizes the delicate synthesis between uncompromising intellectual rigor and sublime rhetoric.", "textTr": "Tavizsiz entelektüel titizlik ile yüce hitabet arasındaki o narin sentezi somutlaştırır."},
        {"speaker": "Ambassador Thorne", "textEn": "Indeed, such virtuosity commands immediate respect across international forums.", "textTr": "Gerçekten de böylesi bir ustalık uluslararası platformlarda derhal saygı uyandırır."}
    ]

    contrastive = {
        "conceptA": "Standart Dil Yetkinliği",
        "conceptB": f"C2 Ustalık '{clean}' Boyutu",
        "keyDifference": "Standart yetkinlikte dil bilgisi kuralları bilinçli uygulanırken; C2 ustalığında dil zihnin doğal bir uzantısı haline gelir ve edebi/felsefi zarafetle akar.",
        "exampleA": "Kuralları doğru uygulayarak konuşmak.",
        "exampleB": f"{clean.lower()} konusunu edebi bir şaheser gibi anında ve büyüleyici şekilde inşa etmek."
    }

    examples = [
        {"en": f"Masters of the language wield {clean.lower()} with effortless precision and profound eloquence.", "tr": f"Dilin ustaları {clean} konusunu zahmetsiz bir kesinlik ve derin bir hitabetle kullanırlar.", "highlightedWords": [clean.lower()], "grammarCategory": "C2 Model Cümle", "contextNote": "C2 düzeyinde edebi zarafet.", "breakdownNote": "Özne + fiil + nesne + tarz zarfı."},
        {"en": f"How does the historical evolution of {clean.lower()} reflect the intellectual shifts of our era?", "tr": f"{clean} konusunun tarihsel evrimi çağımızın entelektüel dönüşümlerini nasıl yansıtır?", "highlightedWords": ["How does the historical evolution"], "grammarCategory": "Model Soru", "contextNote": "Felsefi ve tarihsel sorgulama.", "breakdownNote": "Soru kelimesi + yardımcı fiil + özne + eylem fiili + nesne."},
        {"en": f"The international laureate articulated {clean.lower()} during his historic acceptance address.", "tr": f"Uluslararası ödül sahibi {clean} konusunu tarihi kabul konuşması sırasında dile getirdi.", "highlightedWords": ["acceptance address"], "grammarCategory": "Hitabet İfadesi", "contextNote": "Tarihi liderlik hitabeti.", "breakdownNote": "Özne + fiil + nesne + edat öbeği."}
    ]

    return {
        "skillType": "speaking" if "hitabet" in lower or "ton" in lower else "reading" if "edebi" in lower or "hukuk" in lower else "grammar",
        "concreteCompetency": concrete,
        "whyItMatters": why,
        "linguisticLogic": logic,
        "stepBreakdown": steps,
        "ruleCards": ruleCards,
        "commonMistakes": mistakes,
        "realWorldContext": {
            "scenarioTitle": f"{module} — {clean}",
            "description": f"{clean} konusunun C2 Ustalık seviyesindeki zirve uygulaması.",
            "contextType": "academic",
            "dialogue": dialogue
        },
        "contrastiveAnalysis": contrastive,
        "memoryHook": f"'{clean}' İlkesi: Kuralları unut, dil ile düşünce arasındaki mesafeyi sıfırla!",
        "examples": examples,
        "vocabulary": [v1, v2, v3, v4],
        "quickCheck": {
            "question": qc_q,
            "options": qc_opts,
            "correctIndex": qc_idx,
            "explanation": qc_expl
        },
        "exercise": {
            "prompt": f"Aşağıdaki cümleyi C2 seviyesine ve '{clean}' kuralına en uygun seçenekle tamamlayın:",
            "sentence": ex_sent,
            "options": ex_opts,
            "correctAnswer": ex_ans,
            "hint": f"'{clean}' konusunun C2 düzeyindeki stilistik ve sentaktik gereksinimini düşünün.",
            "explanation": f"Doğru cevap '{ex_ans}' seçeneğidir."
        },
        "sentenceBuilder": {
            "promptTr": sb_tr,
            "targetEn": sb_en,
            "availableWords": make_available_words(sb_en, ["consummate", "transcendent", "with", "from", "unyielding"]),
            "explanation": f"Hedef cümle İngilizce söz dizimi kurallarına göre sıralanır: '{sb_en}'."
        },
        "summaryTakeaways": [
            f"'{clean}' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
            "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
            "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
        ]
    }
