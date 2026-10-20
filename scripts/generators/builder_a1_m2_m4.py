# -*- coding: utf-8 -*-
"""
LinguAAI — A1 Level Master Pedagogical Builder: Modules 2, 3, 4 (Lessons 11 to 40)
Zero templates, zero generic fallbacks, 100% bespoke pedagogy.
"""

def get_a1_m2_m4_topics():
    topics = {}

    # -------------------------------------------------------------
    # MODULE 2: Durum Cümleleri ve Varlık Bildirimi (Lessons 11-20)
    # -------------------------------------------------------------
    # Lesson 11: To Be (Am / Is / Are) — Olmak Fiili ve Temel Tanımlamalar
    topics[11] = {
        "skill": "grammar",
        "concrete": "A1 standardında To Be (am/is/are) durum fiilini meslek, kimlik, konum ve niteleme sıfatlarıyla hatasız kullanabilmek.",
        "why": "İngilizcede hareket bildiren bir fiil yoksa cümle yüklemsiz kalamaz. 'Ben öğretmenim' derken özne ile meslek arasına 'am/is/are' köprüsü konur.",
        "logic": "İngilizce her tam cümlede bir 'finite verb' arar. İsim ve sıfatlar tek başlarına yüklem olamayacağından To Be köprü görevi görür: I am, He/She/It is, We/You/They are.",
        "steps": [
            {"title": "1. Adım: Şahıs ve To Be Eşleşmesi", "content": "I ile 'am'; He, She, It ile 'is'; We, You, They ile 'are' kullanılır.", "formula": "I am | He/She/It is | We/You/They are", "keyPhrase": "I am ready. / She is happy. / We are here.", "subPoints": ["Sarah is -> tekil özne is alır", "The students are -> çoğul özne are alır"]},
            {"title": "2. Adım: Durum ve Konum Bildirimi", "content": "To Be fiili bir eylem değil; durum, meslek, yaş, duygu veya konum anlatır.", "formula": "Subject + am/is/are + [Adjective / Noun / Place]", "keyPhrase": "Alex is at the office.", "subPoints": ["Eylem fiilleriyle (go, work) to be yan yana yalın halde gelemez"]},
            {"title": "3. Adım: Kısaltmalar (Contractions)", "content": "Konuşma dilinde I am -> I'm, She is -> She's, They are -> They're şeklinde kaynaşır.", "formula": "I'm / You're / He's / She's / It's / We're / They're", "keyPhrase": "He's an engineer.", "subPoints": ["Resmi yazılarda açık hali (He is), konuşmada kısaltma (He's) tercih edilir"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Eylem Fiili ile Karıştırmama İlkesi", "formula": "*I am work here (YANLIŞ) -> I work here (DOĞRU)", "explanation": "To Be durumu bildirir; eylemlerle (go, eat, work) yalın halde yan yana gelemez.", "exampleSnippet": "She is a doctor (Durum)  |  She works in Ankara (Eylem).", "tipNote": "Cümlede iş/hareket varsa am/is/are koymayın!"},
            {"ruleTitle": "Şahıs Uyumu Standartı", "formula": "Tekil Özne = is  |  Çoğul Özne = are", "explanation": "Özne tek bir kişi veya varlıksa 'is', birden fazla ise 'are' kullanılır.", "cautionNote": "'My brother and I' iki kişi olduğu için 'are' alır."}
        ],
        "mistakes": [
            {"wrongExample": "I am agree with you.", "correctExample": "I agree with you.", "rootCause": "Türkçe 'aynı fikirdeyim' sıfat gibi algılandığı için to be ekleme yanılgısı. Oysa 'agree' İngilizcede tam bir fiildir.", "memoryTip": "'Agree' bir eylemdir; başına am/is/are almaz!"},
            {"wrongExample": "My friend and I is very busy.", "correctExample": "My friend and I are very busy.", "rootCause": "'I' zamirini görüp 'am' veya tekil sanıp 'is' kullanmak. İki kişi çoğuldur (We -> are).", "memoryTip": "İki kişi yan yana geldiyse çoğuldur: ARE kullan!"}
        ],
        "dialogue": [
            {"speaker": "David", "textEn": "Hello Sarah, are you ready for the team briefing?", "textTr": "Merhaba Sarah, ekip brifingi için hazır mısın?"},
            {"speaker": "Sarah", "textEn": "Yes, I am completely ready. The project documents are on your desk.", "textTr": "Evet, tamamen hazırım. Proje belgeleri masanızın üzerinde."},
            {"speaker": "David", "textEn": "Wonderful, Alex is already in the conference room.", "textTr": "Harika, Alex zaten konferans salonunda."}
        ],
        "contrastive": {"conceptA": "Türkçe Ek Fiil (-dir, -dır, -im)", "conceptB": "İngilizce To Be Fiili", "keyDifference": "Türkçede durum yüklemi kelimenin sonuna eklenir (öğretmen-im, hazır-ız). İngilizcede özne ile kelime arasına bağımsız 'am/is/are' fiili gelir.", "exampleA": "Biz çok mutluyuz.", "exampleB": "We are very happy."},
        "memoryHook": "To Be Asma Köprüsü: Özne ile Sıfat/İsim birbirine 'am/is/are' köprüsü olmadan bağlanamaz!",
        "examples": [
            {"en": "Alex is confident about the upcoming presentation.", "tr": "Alex yaklaşan sunum konusunda kendinden emin.", "highlightedWords": ["is", "confident"], "grammarCategory": "Sıfatla Durum", "contextNote": "Tekil şahısla 'is' kullanımı.", "breakdownNote": "Özne (Alex) + is + Sıfat (confident)."},
            {"en": "Our colleagues are very supportive and professional.", "tr": "Meslektaşlarımız son derece destekleyici ve profesyoneller.", "highlightedWords": ["are", "supportive"], "grammarCategory": "Çoğul Durum", "contextNote": "Çoğul şahısla 'are' kullanımı.", "breakdownNote": "Özne (Our colleagues) + are + Sıfatlar."},
            {"en": "I am delighted to meet the new department manager.", "tr": "Yeni departman müdürüyle tanıştığıma çok memnunum.", "highlightedWords": ["am delighted"], "grammarCategory": "1. Tekil Şahıs", "contextNote": "'I am' kalıbı.", "breakdownNote": "Özne (I) + am + Sıfat (delighted) + mastar."}
        ],
        "vocab": [
            {"word": "Confident", "phonetic": "/ˈkɒn.fɪ.dənt/", "partOfSpeech": "adjective", "meaningTr": "Kendinden emin, özgüvenli", "exampleSentence": "She is confident in her skills."},
            {"word": "Available", "phonetic": "/əˈveɪ.lə.bəl/", "partOfSpeech": "adjective", "meaningTr": "Müsait, uygun", "exampleSentence": "The doctor is available now."},
            {"word": "Colleague", "phonetic": "/ˈkɒl.iːɡ/", "partOfSpeech": "noun", "meaningTr": "İş arkadaşı, meslektaş", "exampleSentence": "My colleagues are very helpful."},
            {"word": "Delighted", "phonetic": "/dɪˈlaɪ.tɪd/", "partOfSpeech": "adjective", "meaningTr": "Çok memnun, sevinçli", "exampleSentence": "We are delighted with the result."}
        ],
        "qc_q": "Aşağıdaki cümlelerden hangisi To Be (am/is/are) kuralına göre TAMAMEN DOĞRUDUR?",
        "qc_opts": ["Sarah and Michael are ready for the presentation.", "Sarah and Michael is ready for the presentation.", "I are very happy today.", "She am an experienced engineer."],
        "qc_idx": 0,
        "qc_expl": "'Sarah and Michael' çoğul bir özne (They) olduğu için 'are' fiiliyle kullanılır.",
        "ex_sent": "Our new project coordinator ___ available in the main conference room right now.",
        "ex_opts": ["is", "are", "am", "be"],
        "ex_ans": "is",
        "ex_hint": "'Our new project coordinator' tekil üçüncü şahıstır (He/She).",
        "ex_expl": "Tekil üçüncü şahıs öznelerde 'is' kullanılır: 'coordinator is available'.",
        "sb_tr": "Yeni proje koordinatörü şu anda toplantı odasında müsaittir.",
        "sb_en": "The new project coordinator is available in the conference room",
        "sb_dist": ["are", "am", "being", "were"],
        "sb_expl": "Özne (The new project coordinator) + to be (is) + sıfat (available) + yer (in the conference room)."
    }

    # Lesson 12: To Be: Olumsuz Cümleler ve Kısaltmalar (isn't, aren't)
    topics[12] = {
        "skill": "grammar",
        "concrete": "A1 standardında To Be olumsuz cümlelerini 'not' eki ve kısaltmalarıyla (isn't, aren't, I'm not) hatasız kurabilmek.",
        "why": "Bir durumun, niteliğin veya konumun geçerli olmadığını belirtmek günlük iletişimde sıkça gerekir.",
        "logic": "To Be olumsuz yapılırken 'am/is/are' sonrasına doğrudan 'NOT' eklenir. 'is not' -> 'isn't', 'are not' -> 'aren't' olur; 'am not' ise 'I'm not' kalır.",
        "steps": [
            {"title": "1. Adım: 'NOT' Olumsuzluk Ekinin Konumu", "content": "'not' kelimesi daima yardımcı fiilin (am/is/are) hemen ardına gelir.", "formula": "Subject + am/is/are + not + [Tamamlayıcı]", "keyPhrase": "He is not -> He isn't", "subPoints": ["Türkçedeki 'değil' kelimesinin karşılığıdır"]},
            {"title": "2. Adım: Doğal Kısaltma Biçimleri", "content": "Konuşma dilinde 'is not' -> 'isn't', 'are not' -> 'aren't' olarak birleşir.", "formula": "isn't = is not  |  aren't = are not", "keyPhrase": "She isn't at home. / They aren't tired.", "subPoints": ["'am not' birleşerek *amn't olmaz; daima 'I'm not' denir"]},
            {"title": "3. Adım: Kısa Cevaplarda Olumsuzluk", "content": "Olumsuz yanıtlarda 'No, I'm not' veya 'No, she isn't' kalıpları kullanılır.", "formula": "No, [Zamir] + isn't / aren't / 'm not", "keyPhrase": "Is he ready? - No, he isn't.", "subPoints": ["Kısa cevaplarda kısaltma formu esastır"]}
        ],
        "ruleCards": [
            {"ruleTitle": "'Amn't' Diye Bir Sözcük Yoktur!", "formula": "*I amn't ready (YANLIŞ) -> I'm not ready (DOĞRU)", "explanation": "İngilizcede 'am' ile 'not' birleşmez. Sadece özne ile am birleşir: 'I'm not'.", "exampleSnippet": "I'm not worried about the exam.", "tipNote": "1. tekil şahısta daima 'I'm not' deyin!"},
            {"ruleTitle": "Olumsuzlukta Söz Dizimi", "formula": "Özne + isn't/aren't + Sıfat/İsim", "explanation": "İngilizcede 'not' kelimesi fiilden sonraya atılmaz; To Be'nin parçasıdır.", "cautionNote": "'He not is doctor' YANLIŞTIR; 'He isn't a doctor' DOĞRUDUR."}
        ],
        "mistakes": [
            {"wrongExample": "I amn't satisfied with this result.", "correctExample": "I am not satisfied with this result. / I'm not satisfied.", "rootCause": "isn't ve aren't kısaltmalarına özenip 'am' için de uydurma kısaltma yapma hatası.", "memoryTip": "'Amn't' diye bir kelime yoktur; 'I'm not' de!"},
            {"wrongExample": "They not are ready yet.", "correctExample": "They are not ready yet. / They aren't ready yet.", "rootCause": "'Not' kelimesini fiilden önceye yerleştirme yanlışı.", "memoryTip": "'Not' To Be fiilinin hemen sağına yapışır: are not / aren't!"}
        ],
        "dialogue": [
            {"speaker": "Oliver", "textEn": "Is your manager at the office today?", "textTr": "Müdürünüz bugün ofiste mi?"},
            {"speaker": "Emma", "textEn": "No, he isn't in London today. He is attending a seminar in Manchester.", "textTr": "Hayır, bugün Londra'da değil. Manchester'da bir seminere katılıyor."},
            {"speaker": "Oliver", "textEn": "Are the other team members available for a brief call?", "textTr": "Diğer ekip üyeleri kısa bir görüşme için müsait mi?"},
            {"speaker": "Emma", "textEn": "No, they aren't available right now, but they will be free at three.", "textTr": "Hayır, şu anda müsait değiller ama saat üçte serbest olacaklar."}
        ],
        "contrastive": {"conceptA": "Türkçe 'Değil' Kelimesi", "conceptB": "İngilizce 'Not' Olumsuzluk Eki", "keyDifference": "Türkçede 'öğrenci değilim' derken 'değil' sona gelir. İngilizcede ise 'am/is/are not' yapısı sıfattan veya isimden önce gelir.", "exampleA": "Ben yorgun değilim.", "exampleB": "I am not tired."},
        "memoryHook": "Olumsuzluk Kuralı: isn't ve aren't kullanılır ama am ile not asla birleşmez; daima I'M NOT denir!",
        "examples": [
            {"en": "We aren't ready to make a final decision yet.", "tr": "Henüz nihai bir karar vermeye hazır değiliz.", "highlightedWords": ["aren't ready", "yet"], "grammarCategory": "Çoğul Olumsuz", "contextNote": "Çoğul şahısla 'aren't' kullanımı.", "breakdownNote": "Özne (We) + aren't + Sıfat (ready) + mastar."},
            {"en": "He isn't satisfied with the draft proposal.", "tr": "Taslak tekliften memnun değil.", "highlightedWords": ["isn't satisfied"], "grammarCategory": "Tekil Olumsuz", "contextNote": "3. tekil şahısla 'isn't' kullanımı.", "breakdownNote": "Özne (He) + isn't + Sıfat (satisfied) + edat öbeği."},
            {"en": "I'm not anxious about tomorrow's job interview.", "tr": "Yarınki iş mülakatı konusunda endişeli değilim.", "highlightedWords": ["I'm not anxious"], "grammarCategory": "1. Tekil Olumsuz", "contextNote": "'I'm not' kullanımı.", "breakdownNote": "Özne (I) + 'm not + Sıfat (anxious)."}
        ],
        "vocab": [
            {"word": "Satisfied", "phonetic": "/ˈsæt.ɪs.faɪd/", "partOfSpeech": "adjective", "meaningTr": "Memnun, tatmin olmuş", "exampleSentence": "He is satisfied with the report."},
            {"word": "Anxious", "phonetic": "/ˈæŋk.ʃəs/", "partOfSpeech": "adjective", "meaningTr": "Endişeli, kaygılı", "exampleSentence": "She is not anxious about tests."},
            {"word": "Decision", "phonetic": "/dɪˈsɪʒ.ən/", "partOfSpeech": "noun", "meaningTr": "Karar", "exampleSentence": "We need a quick decision."},
            {"word": "Available", "phonetic": "/əˈveɪ.lə.bəl/", "partOfSpeech": "adjective", "meaningTr": "Müsait, boşta", "exampleSentence": "The rooms aren't available today."}
        ],
        "qc_q": "İngilizcede 1. tekil şahısta (I) To Be olumsuz yaparken hangisi DOĞRUDUR?",
        "qc_opts": ["I'm not (Örn: I'm not tired)", "I amn't", "I not am", "I aren't"],
        "qc_idx": 0,
        "qc_expl": "İngilizcede 'am' ile 'not' birleşmez, 'amn't' diye bir kelime yoktur; doğru biçim 'I'm not'tur.",
        "ex_sent": "The senior partners ___ ready to sign the contract until tomorrow morning.",
        "ex_opts": ["aren't", "isn't", "am not", "not are"],
        "ex_ans": "aren't",
        "ex_hint": "'The senior partners' çoğul bir öznedir (They).",
        "ex_expl": "Çoğul öznelerde olumsuzluk 'aren't' ile kurulur: 'partners aren't ready'.",
        "sb_tr": "Biz henüz nihai sözleşmeyi imzalamaya hazır değiliz.",
        "sb_en": "We are not ready to sign the final contract yet",
        "sb_dist": ["is", "am", "being", "signing"],
        "sb_expl": "Özne (We) + to be olumsuz (are not) + sıfat (ready) + mastar (to sign the final contract) + zaman zarfı (yet)."
    }

    # Lesson 13: To Be: Soru Cümleleri ve Kısa Cevaplar
    topics[13] = {
        "skill": "grammar",
        "concrete": "A1 standardında To Be soru cümlelerini başa alma kuralıyla (Is he...? / Are you...?) kurabilmek ve kısa cevapları hatasız verebilmek.",
        "why": "Karşı tarafın durumunu, konumunu veya hazır olup olmadığını öğrenmek için soru sorma refleksi şarttır.",
        "logic": "To Be soru yapılırken 'am / is / are' fiili öznenin önüne geçer (Subject-Verb Inversion). Kısa olumlu cevaplarda kısaltma yapılmaz ('Yes, I am' denir; 'Yes, I'm' denmez).",
        "steps": [
            {"title": "1. Adım: Başa Alma (Inversion) Kuralı", "content": "Düz cümledeki am/is/are öznenin başına taşınarak soruya dönüşür.", "formula": "Am / Is / Are + Subject + [Adjective/Noun]?", "keyPhrase": "Are you ready? / Is he at home?", "subPoints": ["Soru işaretinden önce tonlama hafifçe yükselir"]},
            {"title": "2. Adım: Kısa Olumlu Cevap Kuralı", "content": "Kısa olumlu cevaplarda yardımcı fiil asla kısaltılamaz.", "formula": "Yes, I am. (DOĞRU)  <-->  *Yes, I'm. (YANLIŞ)", "keyPhrase": "Yes, he is. | Yes, they are.", "subPoints": ["Cümlenin sonundaki yardımcı fiil vurgulu okunur"]},
            {"title": "3. Adım: Kısa Olumsuz Cevap Kuralı", "content": "Kısa olumsuz cevaplarda kısaltma formu standarttır.", "formula": "No, I'm not. | No, he isn't. | No, they aren't.", "keyPhrase": "Are you busy? - No, I'm not.", "subPoints": ["Kısa cevap iletişime dinamizm katar"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Kısa Olumlu Cevapta Kısaltma Yasağı", "formula": "*Yes, I'm (YANLIŞ) -> Yes, I am (DOĞRU)", "explanation": "İngilizcede cümlenin bittiği yerde tek başına kısaltılmış yardımcı fiil kalamaz.", "exampleSnippet": "Is she a doctor? - Yes, she is. (Yes, she's DENMEZ!)", "tipNote": "Olumlu kısa cevapta açık yaz: Yes, I am / Yes, he is!"},
            {"ruleTitle": "Soru Cümlesi Söz Dizimi", "formula": "Yardımcı Fiil (Is/Are) + Özne + Sıfat/İsim?", "explanation": "Soru yaparken Türkçedeki gibi 'mi/mı' eklenmez; fiil doğrudan en başa geçer.", "cautionNote": "'You are ready?' sadece şaşırma tonudur; dilbilgisel standart soru 'Are you ready?'dir."}
        ],
        "mistakes": [
            {"wrongExample": "Are you ready? -> Yes, I'm.", "correctExample": "Are you ready? -> Yes, I am.", "rootCause": "Kısa olumlu cevapta da kısaltma yapabileceğini sanma hatası.", "memoryTip": "Cümle 'Yes' ile bitiyorsa açık söyle: YES, I AM!"},
            {"wrongExample": "Is your parents at home?", "correctExample": "Are your parents at home?", "rootCause": "'Parents' çoğul olduğu halde tekil yardımcı fiil (is) kullanma hatası.", "memoryTip": "Özne çoğulsa ARE başa geçer: Are your parents...?"}
        ],
        "dialogue": [
            {"speaker": "Interviewer", "textEn": "Are you comfortable with working in international teams?", "textTr": "Uluslararası ekiplerle çalışmak konusunda rahat mısınız?"},
            {"speaker": "Candidate", "textEn": "Yes, I am. I have experience in multicultural environments.", "textTr": "Evet, öyleyim. Çok kültürlü ortamlarda deneyimim var."},
            {"speaker": "Interviewer", "textEn": "Is your previous manager available as a reference?", "textTr": "Önceki müdürünüz referans olarak müsait mi?"},
            {"speaker": "Candidate", "textEn": "Yes, he is. His contact details are on my resume.", "textTr": "Evet, müsait. İletişim bilgileri özgeçmişimde yer alıyor."}
        ],
        "contrastive": {"conceptA": "Türkçe Soru Eki (-mı, -mi)", "conceptB": "İngilizce Başa Alma (Inversion)", "keyDifference": "Türkçede cümlenin sırası bozulmaz, sonuna soru eki gelir. İngilizcede ise yardımcı fiil cümlenin en başına taşınır.", "exampleA": "Sen hazır mısın?", "exampleB": "Are you ready?"},
        "memoryHook": "To Be Soru Kuralı: Yardımcı fiili fırlat en başa, soru hazır!",
        "examples": [
            {"en": "Are you satisfied with the current project timeline?", "tr": "Mevcut proje takviminden memnun musunuz?", "highlightedWords": ["Are you satisfied with"], "grammarCategory": "Soru Cümlesi", "contextNote": "Memnuniyet sorma.", "breakdownNote": "Are + özne (you) + sıfat (satisfied) + edat öbeği."},
            {"en": "Is the new regional branch open on weekends?", "tr": "Yeni bölge şubesi hafta sonları açık mı?", "highlightedWords": ["Is", "open on weekends"], "grammarCategory": "Tekil Soru", "contextNote": "İşyeri çalışma saatleri.", "breakdownNote": "Is + tekil özne + sıfat (open) + zaman edatı."},
            {"en": "Are all team members present in the main conference room?", "tr": "Tüm ekip üyeleri ana konferans salonunda mevcut mu?", "highlightedWords": ["Are all team members present"], "grammarCategory": "Çoğul Soru", "contextNote": "Toplantı mevcudu sorma.", "breakdownNote": "Are + çoğul özne + sıfat (present) + yer edatı."}
        ],
        "vocab": [
            {"word": "Comfortable", "phonetic": "/ˈkʌm.fə.tə.bəl/", "partOfSpeech": "adjective", "meaningTr": "Rahat, huzurlu", "exampleSentence": "Are you comfortable here?"},
            {"word": "Multicultural", "phonetic": "/ˌmʌl.tiˈkʌl.tʃər.əl/", "partOfSpeech": "adjective", "meaningTr": "Çok kültürlü", "exampleSentence": "London is a multicultural city."},
            {"word": "Reference", "phonetic": "/ˈref.ər.əns/", "partOfSpeech": "noun", "meaningTr": "Referans", "exampleSentence": "Provide two professional references."},
            {"word": "Candidate", "phonetic": "/ˈkæn.dɪ.dət/", "partOfSpeech": "noun", "meaningTr": "Aday", "exampleSentence": "He is the leading candidate."}
        ],
        "qc_q": "'Is your sister a university student?' sorusuna verilecek DOĞRU kısa olumlu cevap hangisidir?",
        "qc_opts": ["Yes, she is.", "Yes, she's.", "Yes, is.", "Yes, she does."],
        "qc_idx": 0,
        "qc_expl": "Kısa olumlu cevaplarda kısaltma yapılmaz ve özneyle to be açıkça söylenir: 'Yes, she is.'",
        "ex_sent": "___ your international colleagues ready for the video conference this afternoon?",
        "ex_opts": ["Are", "Is", "Am", "Do"],
        "ex_ans": "Are",
        "ex_hint": "'your international colleagues' çoğul bir öznedir (They).",
        "ex_expl": "Çoğul öznelerle soru yaparken cümlenin başına 'Are' gelir.",
        "sb_tr": "Siz yarınki uluslararası konferans sunumu için tamamen hazır mısınız?",
        "sb_en": "Are you completely ready for the international conference presentation tomorrow",
        "sb_dist": ["is", "do", "being", "you are"],
        "sb_expl": "Soru fiili (Are) + özne (you) + zarf ve sıfat (completely ready) + amaç ve zaman (for the presentation tomorrow)."
    }

    # Lesson 14: There is & There are — Varlık Bildirimi
    topics[14] = {
        "skill": "grammar",
        "concrete": "A1 standardında 'There is' (tekiller) ve 'There are' (çoğullar) kalıplarıyla bir yerde bir şeyin varlığını hatasız ifade edebilmek.",
        "why": "Bir odada, bir şehirde veya bir listede ne olduğunu anlatmak temel tasvir becerisidir.",
        "logic": "İngilizcede varlık bildirirken cümlenin başına sözde özne olarak 'There' gelir. Devamında gelen nesne tekilse 'is', çoğulsa 'are' kullanılır.",
        "steps": [
            {"title": "1. Adım: Tekil Varlık Bildirimi (There is)", "content": "Tekil bir nesne veya sayılamayan bir kavram varsa 'There is a/an' kullanılır.", "formula": "There is + a/an + [Tekil İsim] + [Yer Edatı]", "keyPhrase": "There is a printer on the desk.", "subPoints": ["There's şeklinde kısaltılabilir"]},
            {"title": "2. Adım: Çoğul Varlık Bildirimi (There are)", "content": "Birden fazla nesne varsa 'There are' ve çoğul isim kullanılır.", "formula": "There are + [Sayı / Many / Some] + [Çoğul İsim]", "keyPhrase": "There are four chairs in the room.", "subPoints": ["There are kısaltılamaz; *there're denmez"]},
            {"title": "3. Adım: Sayılamayan İsimlerle Kullanım", "content": "Su, çay, süt gibi sayılamayan isimlerle daima 'There is' gelir.", "formula": "There is + some + [Sayılamayan İsim]", "keyPhrase": "There is some water in the bottle.", "subPoints": ["Sayılamayan isimler tekil muamelesi görür"]}
        ],
        "ruleCards": [
            {"ruleTitle": "There is vs There are Seçim İlkesi", "formula": "Tekil İsim = There is (There's)  <-->  Çoğul İsim = There are", "explanation": "Fiilin seçimi 'there' sözcüğüne değil, ardından gelen ilk ismin tekil mi çoğul mu olduğuna bağlıdır.", "exampleSnippet": "There is a book on the table. / There are three books.", "tipNote": "Gözünü ardından gelen ilk isme dik: Tekilse IS, çoğulsa ARE!"},
            {"ruleTitle": "Have Fiili ile Karıştırmama Uyarısı", "formula": "*In my city has a park (YANLIŞ) -> There is a park in my city (DOĞRU)", "explanation": "Bir yerde bir şeyin 'var olduğunu' söylerken 'have' kullanılmaz; 'There is / are' kullanılır.", "cautionNote": "Türkçe 'Şehrimde bir park var' cümlesini 'has a park' diye çevirmeyin."}
        ],
        "mistakes": [
            {"wrongExample": "In our office has a big meeting room.", "correctExample": "There is a big meeting room in our office.", "rootCause": "Türkçe 'ofisimizde var' yapısını have ile karşılama hatası.", "memoryTip": "Bir yerde bir şey 'VAR' derken THERE IS ile başla!"},
            {"wrongExample": "There is many people in the square.", "correctExample": "There are many people in the square.", "rootCause": "'People' kelimesinin çoğul olduğunu gözden kaçırıp 'is' kullanmak.", "memoryTip": "People çoğuldur; THERE ARE people denir!"}
        ],
        "dialogue": [
            {"speaker": "Guest", "textEn": "Excuse me, what amenities are available on this floor?", "textTr": "Afedersiniz, bu katta hangi olanaklar mevcut?"},
            {"speaker": "Staff", "textEn": "There is a business lounge at the end of the corridor.", "textTr": "Koridorun sonunda bir iş salonu var."},
            {"speaker": "Guest", "textEn": "Are there any quiet private workstations there?", "textTr": "Orada sessiz özel çalışma alanları var mı?"},
            {"speaker": "Staff", "textEn": "Yes, there are six individual soundproof booths.", "textTr": "Evet, altı tane bireysel ses yalıtımlı kabin var."}
        ],
        "contrastive": {"conceptA": "Türkçe 'Var' Sözcüğü", "conceptB": "İngilizce 'There is / There are'", "keyDifference": "Türkçede tekil için de çoğul için de 'var' denir (Kitap var / Kitaplar var). İngilizcede tekile 'there is', çoğula 'there are' denmek zorundadır.", "exampleA": "Masanın üstünde üç elma var.", "exampleB": "There are three apples on the table."},
        "memoryHook": "Varlık Formülü: Tek bir şey varsa There is, çok şey varsa There are!",
        "examples": [
            {"en": "There is a dedicated consultation desk on the ground floor.", "tr": "Zemin katta özel bir danışma masası var.", "highlightedWords": ["There is a dedicated consultation desk"], "grammarCategory": "Tekil Varlık", "contextNote": "Bina içi konum tasviri.", "breakdownNote": "There is + tekil isim + yer edatı."},
            {"en": "There are multiple international flights arriving this evening.", "tr": "Bu akşam iniş yapan birden fazla uluslararası uçuş var.", "highlightedWords": ["There are multiple flights"], "grammarCategory": "Çoğul Varlık", "contextNote": "Havalimanı bilgilendirmesi.", "breakdownNote": "There are + çoğul isim + eylemsi öbeği."},
            {"en": "There is some confidential information in this quarterly report.", "tr": "Bu üç aylık raporda bazı gizli bilgiler var.", "highlightedWords": ["There is some confidential information"], "grammarCategory": "Sayılamayan İsim", "contextNote": "İş raporu içeriği.", "breakdownNote": "There is + some + sayılamayan isim (information)."}
        ],
        "vocab": [
            {"word": "Corridor", "phonetic": "/ˈkɒr.ɪ.dɔːr/", "partOfSpeech": "noun", "meaningTr": "Koridor", "exampleSentence": "Walk down the long corridor."},
            {"word": "Amenity", "phonetic": "/əˈmiː.nə.ti/", "partOfSpeech": "noun", "meaningTr": "Hizmet olanağı, konfor unsuru", "exampleSentence": "The hotel offers many amenities."},
            {"word": "Confidential", "phonetic": "/ˌkɒn.fɪˈden.ʃəl/", "partOfSpeech": "adjective", "meaningTr": "Gizli, mahrem", "exampleSentence": "This document is strictly confidential."},
            {"word": "Individual", "phonetic": "/ˌɪn.dɪˈvɪdʒ.u.əl/", "partOfSpeech": "adjective", "meaningTr": "Bireysel, tekil", "exampleSentence": "Each student has an individual desk."}
        ],
        "qc_q": "'Masanın üzerinde üç önemli dosya var' cümlesinin en doğru İngilizce çevirisi hangisidir?",
        "qc_opts": ["There are three important files on the desk.", "There is three important files on the desk.", "On the desk has three important files.", "They are three important files on desk."],
        "qc_idx": 0,
        "qc_expl": "'Three important files' çoğul bir öge olduğu için 'There are' kullanılır.",
        "ex_sent": "In our modern training center, there ___ twenty high-performance computers for students.",
        "ex_opts": ["are", "is", "have", "has"],
        "ex_ans": "are",
        "ex_hint": "'twenty computers' çoğuldur.",
        "ex_expl": "Çoğul nesnelerin varlığını bildirirken 'there are' kullanılır.",
        "sb_tr": "Koridorun sonunda sessiz bir çalışma odası ve iki bilgisayar var.",
        "sb_en": "There is a quiet study room and two computers at the end of the corridor",
        "sb_dist": ["are", "have", "has", "there are"],
        "sb_expl": "Varlık bildirme (There is a quiet study room and two computers) + konum (at the end of the corridor)."
    }

    # Lesson 15: There is / are: Olumsuz ve Soru Halleri (Is there? / Are there?)
    topics[15] = {
        "skill": "grammar",
        "concrete": "A1 standardında 'Is there...?' ve 'Are there any...?' soru kalıplarını ve olumsuz hallerini (there isn't / there aren't) hatasız kullanabilmek.",
        "why": "Otelde, restoranda veya yabancı bir şehirde bir hizmetin veya eşyanın var olup olmadığını sormak en sık ihtiyaç duyulan konuşma refleksidir.",
        "logic": "Soru yaparken 'is/are' 'there'in önüne geçer: 'Is there a...?' veya 'Are there any...?'. Çoğul soru ve olumsuzlarda 'any' (hiç) belirteci kullanılır.",
        "steps": [
            {"title": "1. Adım: Tekil Varlık Sorusu (Is there a...?)", "content": "Tek bir nesnenin varlığı sorulurken 'Is there a/an...?' denir.", "formula": "Is there + a/an + [Tekil İsim]? -> Yes, there is. / No, there isn't.", "keyPhrase": "Is there a pharmacy near here?", "subPoints": ["Kısa cevapta 'Yes, there is' veya 'No, there isn't' denir"]},
            {"title": "2. Adım: Çoğul Varlık Sorusu (Are there any...?)", "content": "Birden fazla nesnenin olup olmadığını sorarken 'any' ile çoğul isim kullanılır.", "formula": "Are there + any + [Çoğul İsim]? -> Yes, there are. / No, there aren't.", "keyPhrase": "Are there any available seats?", "subPoints": ["Soruda 'any' hiç anlamına gelir"]},
            {"title": "3. Adım: Olumsuz Varlık Bildirimi", "content": "Olumsuz cümlelerde 'There isn't a...' veya 'There aren't any...' kalıbı kullanılır.", "formula": "There isn't a [Tekil] | There aren't any [Çoğul]", "keyPhrase": "There aren't any tickets left.", "subPoints": ["Hiç olmadığını vurgulamak için 'There are no tickets' da denilebilir"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Çoğul Soru ve Olumsuzda 'ANY' Zorunluluğu", "formula": "Soru: Are there ANY chairs?  |  Olumsuz: There aren't ANY chairs.", "explanation": "İngilizcede çoğul varlık sorarken veya 'hiç yok' derken 'any' sözcüğü standarttır.", "exampleSnippet": "Are there any clean towels? - No, there aren't any.", "tipNote": "Çoğul soru ve olumsuz gördüğün yere ANY yerleştir!"},
            {"ruleTitle": "Yer Değiştirme (Inversion) Kuralı", "formula": "Düz Cümle: There is a bank.  <-->  Soru: Is there a bank?", "explanation": "Varlık sorusunda 'is' veya 'are' kelimesi 'there'in soluna geçer.", "cautionNote": "*There is a bank? (düz tonlama) yerine 'Is there a bank?' deyin."}
        ],
        "mistakes": [
            {"wrongExample": "Is there any chairs in the room?", "correctExample": "Are there any chairs in the room?", "rootCause": "'Chairs' çoğul olduğu halde tekil soru kalıbı 'Is there' kullanmak.", "memoryTip": "Çoğul nesne soruyorsan ARE THERE ile başla!"},
            {"wrongExample": "There aren't some books on the shelf.", "correctExample": "There aren't any books on the shelf.", "rootCause": "Olumsuz cümlede 'some' kullanma hatası.", "memoryTip": "Olumsuzda SOME kullanılmaz, ANY kullanılır!"}
        ],
        "dialogue": [
            {"speaker": "Tourist", "textEn": "Excuse me, is there a currency exchange office near the station?", "textTr": "Afedersiniz, istasyonun yakınında bir döviz bürosu var mı?"},
            {"speaker": "Clerk", "textEn": "No, there isn't one inside the station, but there is one opposite the square.", "textTr": "Hayır, istasyonun içinde yok ama meydanın karşısında bir tane var."},
            {"speaker": "Tourist", "textEn": "Are there any ATMs that accept international cards?", "textTr": "Uluslararası kartları kabul eden hiç ATM var mı?"},
            {"speaker": "Clerk", "textEn": "Yes, there are three ATMs right beside the ticket counters.", "textTr": "Evet, bilet gişelerinin hemen yanında üç tane ATM var."}
        ],
        "contrastive": {"conceptA": "Türkçe 'Hiç ... var mı?'", "conceptB": "İngilizce 'Are there any...?'", "keyDifference": "Türkçede 'hiç sandalye var mı' derken sandalye tekil kalabilir. İngilizcede 'any' çoğul isim gerektirir (any chairs).", "exampleA": "Hiç boş oda var mı?", "exampleB": "Are there any vacant rooms?"},
        "memoryHook": "Soru Kuralı: Tekile Is there, çoğula Are there any!",
        "examples": [
            {"en": "Is there a direct shuttle bus from the airport to the city center?", "tr": "Havalimanından şehir merkezine direkt servis otobüsü var mı?", "highlightedWords": ["Is there a direct shuttle bus"], "grammarCategory": "Tekil Soru", "contextNote": "Ulaşım imkanı sorma.", "breakdownNote": "Is there + a + tekil isim + edat öbeği."},
            {"en": "There aren't any vacant rooms available for tonight.", "tr": "Bu gece için müsait hiç boş oda yok.", "highlightedWords": ["There aren't any vacant rooms"], "grammarCategory": "Çoğul Olumsuz", "contextNote": "Otel doluluk durumu.", "breakdownNote": "There aren't + any + çoğul isim + zaman zarfı."},
            {"en": "Are there any vegetarian options on the lunch menu?", "tr": "Öğle yemeği menüsünde vejetaryen seçenekler var mı?", "highlightedWords": ["Are there any vegetarian options"], "grammarCategory": "Çoğul Soru", "contextNote": "Restoran siparişi.", "breakdownNote": "Are there + any + çoğul isim + yer edatı."}
        ],
        "vocab": [
            {"word": "Vacant", "phonetic": "/ˈveɪ.kənt/", "partOfSpeech": "adjective", "meaningTr": "Boş, müsait", "exampleSentence": "Are there any vacant seats?"},
            {"word": "Shuttle", "phonetic": "/ˈʃʌt.əl/", "partOfSpeech": "noun", "meaningTr": "Servis aracı, mekik", "exampleSentence": "Take the airport shuttle bus."},
            {"word": "Counter", "phonetic": "/ˈkaʊn.tər/", "partOfSpeech": "noun", "meaningTr": "Gişe, tezgah", "exampleSentence": "Go to the check-in counter."},
            {"word": "Opposite", "phonetic": "/ˈɒp.ə.zɪt/", "partOfSpeech": "preposition", "meaningTr": "Karşısında", "exampleSentence": "The bank is opposite the station."}
        ],
        "qc_q": "Bir otelde hiç boş oda olup olmadığını sormak için hangisi dilbilgisel olarak DOĞRUDUR?",
        "qc_opts": ["Are there any vacant rooms available?", "Is there any vacant rooms available?", "Are there some vacant room available?", "Is there vacant rooms?"],
        "qc_idx": 0,
        "qc_expl": "Çoğul nesnelerin varlığını sorgularken 'Are there any + çoğul isim' kalıbı kullanılır.",
        "ex_sent": "Excuse me, ___ a 24-hour pharmacy within walking distance of this hotel?",
        "ex_opts": ["is there", "are there", "there is", "there are"],
        "ex_ans": "is there",
        "ex_hint": "'a 24-hour pharmacy' tekil bir nesnedir ve cümle soru formundadır.",
        "ex_expl": "Tekil nesne sorulduğunda 'is there a...' kullanılır.",
        "sb_tr": "Bu otelin yakınında hiç uluslararası döviz bürosu var mı?",
        "sb_en": "Are there any international currency exchange offices near this hotel",
        "sb_dist": ["is", "there", "some", "was"],
        "sb_expl": "Çoğul soru kalıbı (Are there any international currency exchange offices) + konum (near this hotel)."
    }

    # Lesson 16: Temel Konum Edatları: In, On, Under, Next to, Behind
    topics[16] = {
        "skill": "vocabulary",
        "concrete": "A1 standardında nesnelerin ve yerlerin konumunu temel edatlarla (in, on, under, next to, behind, in front of) doğru tarif edebilmek.",
        "why": "Kayıp bir eşyayı bulmak, yol tarif etmek veya bir nesnenin yerini söylemek için konum edatları şarttır.",
        "logic": "'IN' bir şeyin içinde; 'ON' temas eden yüzeyinde; 'UNDER' altında; 'NEXT TO' hemen yanında; 'BEHIND' arkasında; 'IN FRONT OF' önünde anlamını verir.",
        "steps": [
            {"title": "1. Adım: In ve On Ayrımı", "content": "Kutu, oda, bina gibi üç boyutlu kapalı alanlarda 'IN'; masa, duvar gibi yüzeylerde 'ON' kullanılır.", "formula": "in the box / in the room  <-->  on the table / on the wall", "keyPhrase": "The keys are on the desk, not in the drawer.", "subPoints": ["Yüzeye temas varsa 'ON', içine girilmişse 'IN'"]},
            {"title": "2. Adım: Under ve Behind", "content": "Bir şeyin tam altında kalma durumunda 'under'; arkasında kalma durumunda 'behind' gelir.", "formula": "under the bed / behind the door", "keyPhrase": "The cat is sleeping under the sofa.", "subPoints": ["Behind arkasında, In front of ise önünde demektir"]},
            {"title": "3. Adım: Next to ve Between", "content": "Bitişiğinde olma 'next to'; iki nesnenin ortasında olma 'between A and B' ile ifade edilir.", "formula": "next to the bank | between the bakery and the bank", "keyPhrase": "The pharmacy is next to the post office.", "subPoints": ["Between iki unsur gerektirir"]}
        ],
        "ruleCards": [
            {"ruleTitle": "In vs On Temas İlkesi", "formula": "Yüzeyde Temas = ON (on the table)  |  Kapalı Alan İçi = IN (in the drawer)", "explanation": "Nesne masanın veya duvarın yüzeyindeyse 'on'; çekmecenin veya kutunun içindeyse 'in' kullanılır.", "exampleSnippet": "The laptop is on the desk. / The passport is in my pocket.", "tipNote": "Üstünde ve temas ediyorsa ON, içindeyse IN!"},
            {"ruleTitle": "Next to vs Near Farkı", "formula": "next to = tam bitişiğinde (yan yana)  |  near = yakınında (mesafe var)", "explanation": "'Next to' fiziksel bitişikliği bildirirken 'near' genel bir yakınlık mesafesini ifade eder.", "cautionNote": "Bitişik komşu binalar için 'next to' daha kesindir."}
        ],
        "mistakes": [
            {"wrongExample": "The documents are in the table.", "correctExample": "The documents are on the table.", "rootCause": "Masanın üst yüzeyinde duran eşya için 'in' kullanma hatası.", "memoryTip": "Masa yüzeyine konan her şey ON alır: On the table!"},
            {"wrongExample": "The car is behind of the building.", "correctExample": "The car is behind the building.", "rootCause": "'Behind' edatının arkasına gereksiz yere 'of' eklemek.", "memoryTip": "'In front of' of alır ama 'behind' asla OF ALMAZ!"}
        ],
        "dialogue": [
            {"speaker": "Mark", "textEn": "Where did you leave the project folder?", "textTr": "Proje dosyasını nereye bıraktın?"},
            {"speaker": "Sophie", "textEn": "It is on the conference table, next to the projector.", "textTr": "Konferans masasının üzerinde, projeksiyon cihazının yanında."},
            {"speaker": "Mark", "textEn": "I cannot see it. Is it under those notebooks?", "textTr": "Göremiyorum. O defterlerin altında mı?"},
            {"speaker": "Sophie", "textEn": "Oh, sorry! Yes, it is behind the monitor.", "textTr": "Ah, özür dilerim! Evet, monitörün arkasında."}
        ],
        "contrastive": {"conceptA": "Türkçe Konum Ekleri (-de, -da, -nin altında)", "conceptB": "İngilizce Bağımsız Konum Edatları", "keyDifference": "Türkçede yer bildiren kelimeye ek eklenir (masada / masanın altında). İngilizcede edat ismin önüne bağımsız kelime olarak gelir (on the desk / under the desk).", "exampleA": "Masanın üstünde.", "exampleB": "On the desk."},
        "memoryHook": "Konum Formülü: Yüzeyde ON, içinde IN, altında UNDER, yanında NEXT TO!",
        "examples": [
            {"en": "The confidential files are securely stored in the metal cabinet.", "tr": "Gizli dosyalar metal dolabın içinde güvenli bir şekilde saklanıyor.", "highlightedWords": ["in the metal cabinet"], "grammarCategory": "İçinde (In)", "contextNote": "Dolap içi muhafaza.", "breakdownNote": "Özne + are stored + in + yer tamlaması."},
            {"en": "There is a visitor parking area behind the main headquarters.", "tr": "Ana merkez binasının arkasında bir ziyaretçi otoparkı var.", "highlightedWords": ["behind the main headquarters"], "grammarCategory": "Arkasında (Behind)", "contextNote": "Bina çevresi tarifi.", "breakdownNote": "There is + isim + behind + bina."},
            {"en": "The corporate cafeteria is located next to the executive boardroom.", "tr": "Şirket kafeteryası yönetim kurulu odasının hemen yanında yer almaktadır.", "highlightedWords": ["next to the executive boardroom"], "grammarCategory": "Yanında (Next to)", "contextNote": "Ofis içi yer tarifi.", "breakdownNote": "Özne + is located + next to + yer."}
        ],
        "vocab": [
            {"word": "Cabinet", "phonetic": "/ˈkæb.ɪ.nət/", "partOfSpeech": "noun", "meaningTr": "Dolap, kabin", "exampleSentence": "The files are in the cabinet."},
            {"word": "Headquarters", "phonetic": "/ˌhedˈkwɔː.təz/", "partOfSpeech": "noun", "meaningTr": "Genel merkez", "exampleSentence": "The company headquarters is in London."},
            {"word": "Monitor", "phonetic": "/ˈmɒn.ɪ.tər/", "partOfSpeech": "noun", "meaningTr": "Ekran, monitör", "exampleSentence": "Look at the computer monitor."},
            {"word": "Projector", "phonetic": "/prəˈdʒek.tər/", "partOfSpeech": "noun", "meaningTr": "Projeksiyon cihazı", "exampleSentence": "Turn on the video projector."}
        ],
        "qc_q": "'Araba anahtarları sehpanın üzerinde duruyor' cümlesindeki 'üzerinde' için hangi edat kullanılmalıdır?",
        "qc_opts": ["On", "In", "Under", "Behind"],
        "qc_idx": 0,
        "qc_expl": "Masa, sehpa gibi yüzeylerin üstünde durma durumunda temas bildiren 'on' edatı kullanılır.",
        "ex_sent": "The backup hard drive is safely kept ___ the top drawer of my desk.",
        "ex_opts": ["in", "on", "at", "under"],
        "ex_ans": "in",
        "ex_hint": "Çekmece (drawer) kapalı bir iç hacimdir.",
        "ex_expl": "Çekmecenin içinde bulunma durumunu belirtmek için 'in' edatı kullanılır.",
        "sb_tr": "Önemli proje belgeleri masanın üzerinde ve bilgisayarın hemen yanındadır.",
        "sb_en": "The important project documents are on the desk next to the computer",
        "sb_dist": ["in", "under", "behind of", "at"],
        "sb_expl": "Özne (The important project documents) + to be (are) + yüzey edatı (on the desk) + bitişiklik edatı (next to the computer)."
    }

    # Lesson 17: Renkler ve Temel Niteleme Sıfatları
    topics[17] = {
        "skill": "vocabulary",
        "concrete": "A1 standardında nesneleri temel renkler ve niteleme sıfatlarıyla (big, small, expensive, cheap, new, old) isim tamlaması içinde doğru sırayla kullanabilmek.",
        "why": "Eşyaları ayırt etmek, beğeni belirtmek ve alışveriş yaparken doğru ürünü seçmek sıfat kullanımıyla mümkündür.",
        "logic": "İngilizcede niteleme sıfatları daima NİTELEDİKLERİ İSİMDEN ÖNCE gelir ('a red car', 'an expensive watch'). Sıfatlar çoğul eki (-s) ASLA almaz.",
        "steps": [
            {"title": "1. Adım: Sıfatın Cümle İçi Konumu", "content": "Sıfat ismin önüne yerleştirilir: a/an + Sıfat + İsim.", "formula": "a/an + [Adjective] + [Noun]", "keyPhrase": "a modern office, a blue shirt, an expensive phone", "subPoints": ["İsimden sonra sıfat gelmez (*a car red YANLIŞTIR)"]},
            {"title": "2. Adım: Sıfatlarda Çoğulluk Yasağı", "content": "İsim çoğul olsa bile sıfat tekil kalır; sıfata -s takısı eklenemez.", "formula": "*expensive cars (DOĞRU) <--> *expensives cars (YANLIŞ)", "keyPhrase": "two red cars, three young doctors", "subPoints": ["Sıfatlar İngilizcede çekimlenemez"]},
            {"title": "3. Adım: To Be Sonrası Yüklem Olarak Sıfat", "content": "Sıfat tek başına yüklem olarak da to be fiilinden sonra gelebilir.", "formula": "Subject + be + [Adjective]", "keyPhrase": "The car is red. The house is spacious.", "subPoints": ["Bu durumda isim olmadığı için artikel (a/an) gelmez"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Sıfat İsimden Önce Gelir Kuralı", "formula": "*a coat black (YANLIŞ) -> a black coat (DOĞRU)", "explanation": "İngilizcede niteleme sıfatları ismin daima soluna (önüne) geçer.", "exampleSnippet": "She bought an elegant black dress.", "tipNote": "Önce sıfatı söyle, sonra nesneyi söyle!"},
            {"ruleTitle": "Sıfata Asla -s Eklenmez!", "formula": "*differents books (YANLIŞ) -> different books (DOĞRU)", "explanation": "İsim çoğul olsa bile İngilizce sıfatlar değişmez ve hiçbir zaman çoğul eki almaz.", "cautionNote": "Sıfatların çoğulu yoktur; sadece isme -s gelir."}
        ],
        "mistakes": [
            {"wrongExample": "I bought two news shoes.", "correctExample": "I bought two new shoes.", "rootCause": "İsim çoğul diye sıfata da -s ekleme hatası.", "memoryTip": "Sıfatlara asla -s ekleme: New shoes!"},
            {"wrongExample": "She has a bag leather black.", "correctExample": "She has a black leather bag.", "rootCause": "Sıfatları Fransızca veya Türkçe mantığıyla ismin arkasına yerleştirme hatası.", "memoryTip": "Sıfatlar ismin önünde toplanır: A black leather bag!"}
        ],
        "dialogue": [
            {"speaker": "Customer", "textEn": "Excuse me, do you have this wool sweater in a darker color?", "textTr": "Afedersiniz, bu yün kazağın daha koyu bir rengi var mı?"},
            {"speaker": "Assistant", "textEn": "Yes, we have it in deep navy blue and classic black.", "textTr": "Evet, koyu lacivert ve klasik siyah renklerinde mevcut."},
            {"speaker": "Customer", "textEn": "The navy blue one looks very elegant. Is it available in a medium size?", "textTr": "Lacivert olan çok şık görünüyor. Orta bedeni var mı?"},
            {"speaker": "Assistant", "textEn": "Let me check... Yes, here is a brand new medium one.", "textTr": "Kontrol edeyim... Evet, işte yepyeni bir orta beden."}
        ],
        "contrastive": {"conceptA": "Türkçe Sıfat Tamlaması", "conceptB": "İngilizce Sıfat Tamlaması (Adjective + Noun)", "keyDifference": "Her iki dilde de sıfat isimden önce gelir (Kırmızı araba = Red car). Ancak İngilizcede artikel (a/an) sıfatın da önüne gelir (A red car).", "exampleA": "Kırmızı bir araba.", "exampleB": "A red car."},
        "memoryHook": "Sıfat Kuralı: a/an + SIFAT + İSİM! Sıfat asla çoğul eki almaz!",
        "examples": [
            {"en": "Our company purchased fifteen brand new ergonomic chairs.", "tr": "Şirketimiz on beş adet yepyeni ergonomik sandalye satın aldı.", "highlightedWords": ["brand new ergonomic chairs"], "grammarCategory": "Çoğul İsimli Sıfat", "contextNote": "Ofis mobilyası alımı.", "breakdownNote": "Sayı + sıfatlar + çoğul isim (sandalyeler)."},
            {"en": "She wears an elegant dark grey business suit for formal presentations.", "tr": "Resmi sunumlar için şık koyu gri bir iş takımı giyer.", "highlightedWords": ["an elegant dark grey business suit"], "grammarCategory": "Sıfat Dizisi", "contextNote": "Kıyafet tasviri.", "breakdownNote": "Artikel (an) + niteleme sıfatları + isim."},
            {"en": "The modern glass building in the city center is our regional headquarters.", "tr": "Şehir merkezindeki modern cam bina bizim bölge merkezimizdir.", "highlightedWords": ["The modern glass building"], "grammarCategory": "Niteleme ve Malzeme", "contextNote": "Mimari tasvir.", "breakdownNote": "The + modern + malzeme sıfatı (glass) + isim."}
        ],
        "vocab": [
            {"word": "Ergonomic", "phonetic": "/ˌɜː.ɡəˈnɒm.ɪk/", "partOfSpeech": "adjective", "meaningTr": "Ergonomik, kullanışlı", "exampleSentence": "Use an ergonomic keyboard."},
            {"word": "Elegant", "phonetic": "/ˈel.ɪ.ɡənt/", "partOfSpeech": "adjective", "meaningTr": "Şık, zarif", "exampleSentence": "She wore an elegant dress."},
            {"word": "Spacious", "phonetic": "/ˈspeɪ.ʃəs/", "partOfSpeech": "adjective", "meaningTr": "Geniş, ferah", "exampleSentence": "The new office is very spacious."},
            {"word": "Brand-new", "phonetic": "/ˌbrænd ˈnjuː/", "partOfSpeech": "adjective", "meaningTr": "Yepyeni, sıfır", "exampleSentence": "We bought a brand-new car."}
        ],
        "qc_q": "İngilizcede çoğul bir ismi sıfatla nitelerken hangisi dilbilgisel olarak DOĞRUDUR?",
        "qc_opts": ["Expensive modern laptops", "Expensives moderns laptops", "Laptops expensives modern", "Modern laptops expensives"],
        "qc_idx": 0,
        "qc_expl": "İngilizcede sıfatlar ismin önüne gelir ve isim çoğul olsa bile sıfatlara asla -s takısı eklenmez.",
        "ex_sent": "The executive team works in a ___ office on the top floor of the skyscraper.",
        "ex_opts": ["spacious modern", "spaciouses moderns", "modern spaciouses", "office spacious"],
        "ex_ans": "spacious modern",
        "ex_hint": "Sıfatlar ismin solunda yer alır ve tekil formdadır.",
        "ex_expl": "Doğru dizilim: 'spacious modern office'." ,
        "sb_tr": "Şirketimiz tüm yöneticiler için yepyeni ergonomik dizüstü bilgisayarlar satın aldı.",
        "sb_en": "Our company purchased brand new ergonomic laptops for all senior managers",
        "sb_dist": ["newly", "laptops brand", "are", "buying"],
        "sb_expl": "Özne (Our company) + fiil (purchased) + sıfat tamlaması (brand new ergonomic laptops) + edat öbeği (for all senior managers)."
    }

    # Lesson 18: Duygular ve Fiziksel Durumlar (Happy, Tired, Hungry)
    topics[18] = {
        "skill": "vocabulary",
        "concrete": "A1 standardında duyguları ve fiziksel durumları (happy, tired, hungry, thirsty, cold, hot) To Be fiiliyle doğru ifade edebilmek.",
        "why": "Kişisel ihtiyaçlarımızı, nasıl hissettiğimizi ve sağlık/ruh halimizi dile getirmek temel insan iletişiminin çekirdeğidir.",
        "logic": "İngilizcede açlık, susuzluk, sıcaklık ve soğukluk hissi 'have' ile değil; 'To Be' (am/is/are) durum fiiliyle anlatılır: 'I am hungry' (açım), 'I am cold' (üşüyorum).",
        "steps": [
            {"title": "1. Adım: To Be ile Fiziksel Durum Bildirimi", "content": "Açlık ve susuzluk durumlarında sıfat kullanılır ve özneye to be bağlanır.", "formula": "Subject + am/is/are + [hungry / thirsty / tired / exhausted]", "keyPhrase": "I am very hungry. / He is exhausted.", "subPoints": ["*I have hunger YANLIŞTIR; I am hungry DOĞRUDUR"]},
            {"title": "2. Adım: Sıcaklık ve Üşüme Durumu", "content": "İnsanın üşümesi veya sıcaklaması 'I am cold / hot' ile söylenir.", "formula": "I am cold (Üşüyorum) | I am hot (Sıcak bastı / Terledim)", "keyPhrase": "Are you cold? Close the window.", "subPoints": ["'I have cold' nezle oldum demektir, üşüyorum demek değildir"]},
            {"title": "3. Adım: Duygusal Durumlar (Happy, Sad, Angry)", "content": "Ruhsal durumlar niteleme sıfatı olarak özneye to be ile bağlanır.", "formula": "Subject + be + [happy / excited / nervous / worried]", "keyPhrase": "She is excited about her new job.", "subPoints": ["Hissiyatın nedeni 'about' veya 'because' ile eklenebilir"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Açlık ve Susuzlukta 'To Be' Zorunluluğu", "formula": "*I have hungry (YANLIŞ) -> I am hungry (DOĞRU)", "explanation": "İngilizcede açlık ve susuzluk bir nesne değil, vücudun durumudur; bu yüzden to be kullanılır.", "exampleSnippet": "The children are thirsty after playing football.", "tipNote": "Açım derken 'have' fiilini unut, I AM HUNGRY de!"},
            {"ruleTitle": "I am cold vs I have a cold", "formula": "I am cold = Üşüyorum  <-->  I have a cold = Soğuk algınlığım / nezlem var", "explanation": "'To be cold' vücut ısısını bildirir; 'to have a cold' ise bir hastalığı bildirir.", "cautionNote": "Üşüdüğünüzde 'I have a cold' derseniz karşınızdaki hasta olduğunuzu sanır."}
        ],
        "mistakes": [
            {"wrongExample": "I have very hungry now.", "correctExample": "I am very hungry now.", "rootCause": "Türkçe 'açlığım var' benzeri kurguyu have fiiliyle İngilizceye aktarma hatası.", "memoryTip": "Açlık bir sıfattır: I am hungry!"},
            {"wrongExample": "She is very anger today.", "correctExample": "She is very angry today.", "rootCause": "İsim (anger: öfke) ile sıfatı (angry: öfkeli) birbirine karıştırma.", "memoryTip": "To be'den sonra sıfat gelir: She is angry!"}
        ],
        "dialogue": [
            {"speaker": "Host", "textEn": "You look quite exhausted after the long international flight. Are you hungry?", "textTr": "Uzun uluslararası uçuştan sonra oldukça bitkin görünüyorsunuz. Aç mısınız?"},
            {"speaker": "Guest", "textEn": "I am not very hungry, but I am extremely thirsty.", "textTr": "Çok aç değilim ama aşırı derecede susadım."},
            {"speaker": "Host", "textEn": "Let me get you a glass of cold mineral water right away.", "textTr": "Hemen size bir bardak soğuk maden suyu getireyim."},
            {"speaker": "Guest", "textEn": "Thank you so much, that would be wonderful.", "textTr": "Çok teşekkür ederim, harika olur."}
        ],
        "contrastive": {"conceptA": "Türkçe 'Açım / Susadım'", "conceptB": "İngilizce 'I am hungry / thirsty'", "keyDifference": "Türkçede durum ekle (aç-ım) veya eylemle (susadı-m) anlatılır. İngilizcede durum sıfatı özneye 'am/is/are' ile bağlanır.", "exampleA": "Çok susadım.", "exampleB": "I am very thirsty."},
        "memoryHook": "Durum Formülü: I am hungry, I am thirsty, I am tired! Asla HAVE deme!",
        "examples": [
            {"en": "The research team was exhausted after conducting the twenty-four-hour experiment.", "tr": "Yirmi dört saatlik deneyi yürüttükten sonra araştırma ekibi bitkindi.", "highlightedWords": ["was exhausted"], "grammarCategory": "Fiziksel Durum", "contextNote": "Aşırı yorgunluk bildirimi.", "breakdownNote": "Özne + was + sıfat (exhausted) + edat öbeği."},
            {"en": "She feels nervous before giving high-profile keynote addresses.", "tr": "Önemli açılış konuşmaları yapmadan önce gergin hisseder.", "highlightedWords": ["feels nervous"], "grammarCategory": "Duygusal Durum", "contextNote": "Heyecan ve gerginlik.", "breakdownNote": "Özne + duygu fiili (feels) + sıfat (nervous)."},
            {"en": "We are extremely delighted with the positive feedback from our global clients.", "tr": "Küresel müşterilerimizden gelen olumlu geri bildirimlerden son derece memnunuz.", "highlightedWords": ["are extremely delighted"], "grammarCategory": "Memnuniyet Durumu", "contextNote": "Kurumsal memnuniyet.", "breakdownNote": "Özne + are + derece zarfı + sıfat (delighted)."}
        ],
        "vocab": [
            {"word": "Exhausted", "phonetic": "/ɪɡˈzɔː.stɪd/", "partOfSpeech": "adjective", "meaningTr": "Tükenmiş, aşırı yorgun", "exampleSentence": "I am exhausted after the marathon."},
            {"word": "Thirsty", "phonetic": "/ˈθɜː.sti/", "partOfSpeech": "adjective", "meaningTr": "Susamış", "exampleSentence": "Drink water if you are thirsty."},
            {"word": "Delighted", "phonetic": "/dɪˈlaɪ.tɪd/", "partOfSpeech": "adjective", "meaningTr": "Çok mutlu, memnun", "exampleSentence": "We are delighted with your visit."},
            {"word": "Anxious", "phonetic": "/ˈæŋk.ʃəs/", "partOfSpeech": "adjective", "meaningTr": "Kaygılı, endişeli", "exampleSentence": "She feels anxious about the test."}
        ],
        "qc_q": "İngilizcede 'Çok acıktım ve susadım' demek için hangi cümle TAMAMEN DOĞRUDUR?",
        "qc_opts": ["I am very hungry and thirsty.", "I have very hungry and thirsty.", "I feel hunger and thirstiness.", "I am having hunger."],
        "qc_idx": 0,
        "qc_expl": "Fiziksel durumlar To Be fiili ve sıfatla ifade edilir: 'I am hungry and thirsty'.",
        "ex_sent": "After hiking for six hours up the mountain, all the climbers were completely ___.",
        "ex_opts": ["exhausted", "exhausting", "exhaust", "exhaustion"],
        "ex_ans": "exhausted",
        "ex_hint": "Kişilerin hissettiği yorgunluk durumunu bildiren sıfatı seçin.",
        "ex_expl": "Kişilerin durumunu bildiren doğru sıfat 'exhausted'dır.",
        "sb_tr": "Uzun yürüyüşten sonra hepimiz son derece yorgun ve çok açtık.",
        "sb_en": "We were extremely tired and very hungry after the long walk",
        "sb_dist": ["had", "are", "hunger", "having"],
        "sb_expl": "Özne ve to be (We were) + derece zarfı ve sıfat (extremely tired and very hungry) + zaman edatı (after the long walk)."
    }

    # Lesson 19: Hava Durumu ve Sıcaklık İfadeleri
    topics[19] = {
        "skill": "vocabulary",
        "concrete": "A1 standardında hava durumunu ve sıcaklığı 'It is + [sıfat]' (sunny, rainy, windy, cold, hot) kalıbıyla doğru sorup söyleyebilmek.",
        "why": "Güne başlarken, kıyafet seçerken veya seyahat planı yaparken hava durumu ilk konuşulan konudur.",
        "logic": "İngilizcede hava durumunu anlatırken özne daima 'IT' zamiridir: 'It is sunny', 'It is raining'. 'Bugün hava nasıl?' sorusu 'What is the weather like today?' ile sorulur.",
        "steps": [
            {"title": "1. Adım: Hava Durumu Sorma Kalıbı", "content": "Havanın nasıl olduğunu sormak için standart kalıp 'What is the weather like?'dir.", "formula": "What is the weather like (+ in [Şehir] / today)?", "keyPhrase": "What is the weather like in London today?", "subPoints": ["Alternatif: How is the weather?"]},
            {"title": "2. Adım: 'It is + Sıfat' ile Cevap Verme", "content": "Hava durumu sıfatları 'It is' öznesiyle birleşir.", "formula": "It is + [sunny / rainy / windy / cloudy / snowy / foggy]", "keyPhrase": "It is sunny and warm today.", "subPoints": ["The weather is sunny demek de doğrudur ama 'It is sunny' daha doğaldır"]},
            {"title": "3. Adım: Sıcaklık ve Derece Bildirme", "content": "Hava sıcaklığı derece (degrees Celsius) olarak aktarılır.", "formula": "It is + [Sayı] + degrees (Celsius)", "keyPhrase": "It is twenty-two degrees in Istanbul.", "subPoints": ["Sıfırın altı için 'minus five degrees' denir"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Hava Durumunda 'IT' Zamiri Zorunluluğu", "formula": "*Is raining (YANLIŞ) -> It is raining (DOĞRU)", "explanation": "Doğa olaylarında fail belli olmadığı için İngilizce zorunlu özne olarak 'IT' kullanır.", "exampleSnippet": "It is freezing cold outside this morning.", "tipNote": "Hava anlatırken cümleye daima IT IS ile başla!"},
            {"ruleTitle": "İsim vs Sıfat Ayrımı (Rain vs Rainy)", "formula": "Rain = Yağmur (İsim)  <-->  Rainy = Yağmurlu (Sıfat)", "explanation": "'It is' yapısından sonra sıfat gelir: 'It is rainy'. Eylem devam ediyorsa 'It is raining' denir.", "cautionNote": "*It is rain YANLIŞTIR; 'It is rainy' veya 'It is raining' DOĞRUDUR."}
        ],
        "mistakes": [
            {"wrongExample": "The weather has rainy today.", "correctExample": "It is rainy today. / The weather is rainy today.", "rootCause": "Hava durumu için have fiili kullanma hatası.", "memoryTip": "Hava bir şeye sahip değildir, o durumdadır: IT IS RAINY!"},
            {"wrongExample": "How is the weather like? (Hatalı birleşim)", "correctExample": "What is the weather like? / How is the weather?", "rootCause": "'How' ile 'like' sözcüklerini aynı soruda yanlış kaynaştırma.", "memoryTip": "Ya WHAT ... LIKE de ya da sadece HOW de; ikisini karıştırma!"}
        ],
        "dialogue": [
            {"speaker": "Traveler", "textEn": "What is the weather like in Edinburgh right now?", "textTr": "Şu anda Edinburgh'da hava nasıl?"},
            {"speaker": "Local", "textEn": "It is quite chilly and rainy, typical Scottish weather.", "textTr": "Oldukça serin ve yağmurlu, tipik İskoç havası."},
            {"speaker": "Traveler", "textEn": "What is the temperature today?", "textTr": "Bugün sıcaklık kaç derece?"},
            {"speaker": "Local", "textEn": "It is about eleven degrees Celsius, so bring a warm waterproof jacket.", "textTr": "Yaklaşık on bir derece, o yüzden sıcak tutan su geçirmez bir ceket getirin."}
        ],
        "contrastive": {"conceptA": "Türkçe 'Hava yağmurlu / Yağmur var'", "conceptB": "İngilizce 'It is rainy / raining'", "keyDifference": "Türkçede 'Hava soğuk' veya 'Yağmur var' denir. İngilizcede hava kelimesi yerine genellikle genel zamir 'IT' kullanılır.", "exampleA": "Bugün hava çok rüzgarlı.", "exampleB": "It is very windy today."},
        "memoryHook": "Hava Formülü: What is the weather like? -> It is sunny, cold, rainy!",
        "examples": [
            {"en": "It is bright and sunny in Madrid with an expected high of twenty-eight degrees.", "tr": "Madrid'de hava açık ve güneşli, beklenen en yüksek sıcaklık yirmi sekiz derece.", "highlightedWords": ["It is bright and sunny"], "grammarCategory": "Güneşli Hava", "contextNote": "Meteoroloji raporu.", "breakdownNote": "It is + sıfatlar + yer edatı + edat öbeği."},
            {"en": "Dense fog caused major flight delays at the regional international airport.", "tr": "Yoğun sis bölgesel uluslararası havalimanında büyük uçuş rötarlarına yol açtı.", "highlightedWords": ["Dense fog caused"], "grammarCategory": "Hava Olayı (İsim)", "contextNote": "Havacılık bülteni.", "breakdownNote": "Sıfat tamlaması (Dense fog) + fiil (caused) + nesne."},
            {"en": "Don't forget your umbrella because it is pouring with rain outside.", "tr": "Şemsiyenizi unutmayın çünkü dışarıda sağanak yağmur yağıyor.", "highlightedWords": ["it is pouring with rain"], "grammarCategory": "Şiddetli Yağmur", "contextNote": "Günlük uyarı.", "breakdownNote": "Emir cümlesi + bağlaç (because) + it is + eylemsi öbeği."}
        ],
        "vocab": [
            {"word": "Temperature", "phonetic": "/ˈtem.prə.tʃər/", "partOfSpeech": "noun", "meaningTr": "Sıcaklık", "exampleSentence": "The temperature dropped to zero."},
            {"word": "Waterproof", "phonetic": "/ˈwɔː.tə.pruːf/", "partOfSpeech": "adjective", "meaningTr": "Su geçirmez", "exampleSentence": "Wear a waterproof jacket."},
            {"word": "Chilly", "phonetic": "/ˈtʃɪl.i/", "partOfSpeech": "adjective", "meaningTr": "Serin, ayaz", "exampleSentence": "It is a chilly autumn morning."},
            {"word": "Forecast", "phonetic": "/ˈfɔː.kɑːst/", "partOfSpeech": "noun", "meaningTr": "Hava tahmini", "exampleSentence": "Check the weather forecast."}
        ],
        "qc_q": "'Hava bugün çok rüzgarlı ve soğuk' ifadesinin en doğru İngilizce karşılığı hangisidir?",
        "qc_opts": ["It is very windy and cold today.", "The weather has very wind and cold today.", "It is very wind and cold today.", "It have cold weather today."],
        "qc_idx": 0,
        "qc_expl": "Hava durumu anlatılırken 'It is + sıfatlar' kalıbı kullanılır: 'It is windy and cold'.",
        "ex_sent": "According to the morning meteorological report, it will be ___ with occasional rain showers.",
        "ex_opts": ["cloudy", "cloud", "clouding", "cloudful"],
        "ex_ans": "cloudy",
        "ex_hint": "Havanın bulutlu olduğunu bildiren sıfat biçimini seçin.",
        "ex_expl": "Bulutlu anlamına gelen sıfat 'cloudy'dir.",
        "sb_tr": "Bugün hava oldukça serin ve rüzgarlı bu yüzden kalın bir ceket giy.",
        "sb_en": "It is quite chilly and windy today so wear a warm jacket",
        "sb_dist": ["has", "weather is have", "being", "coldly"],
        "sb_expl": "Hava durumu (It is quite chilly and windy today) + bağlaç ve tavsiye (so wear a warm jacket)."
    }

    # Lesson 20: A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme
    topics[20] = {
        "skill": "speaking",
        "concrete": "A1 standardında bir evi, odayı ve mobilyaları 'There is/are', konum edatları ve niteleme sıfatlarıyla bütünleşik olarak tasvir edebilmek.",
        "why": "Kiralık ev ararken, evimizi bir misafire anlatırken veya yaşam alanımızı tarif ederken tüm durum yapılarını birleştirmek gerekir.",
        "logic": "Bu entegrasyon dersinde To Be (is/are), There is/are, sıfat tamlamaları (spacious room) ve konum edatları (next to the window) tek bir tutarlı anlatıda birleşir.",
        "steps": [
            {"title": "1. Adım: Evin Genel Yapısını Tanıtma", "content": "Evin oda sayısı ve genel büyüklüğü aktarılır.", "formula": "There are + [Sayı] + rooms: a living room, a bedroom and a kitchen.", "keyPhrase": "My apartment has three rooms.", "subPoints": ["Genel hatlardan özele doğru anlatım kurulur"]},
            {"title": "2. Adım: Odanın Mobilyalarını Tasvir Etme", "content": "Odada bulunan eşyalar 'There is / are' ile sıralanır.", "formula": "In the bedroom, there is a large bed and there are two wardrobes.", "keyPhrase": "There is a wooden desk next to the window.", "subPoints": ["Mobilyaların malzemesi ve rengi sıfatlarla zenginleştirilir"]},
            {"title": "3. Adım: Eşyaların Konumlarını Bağlama", "content": "Eşyaların birbirine göre konumları edatlarla detaylandırılır.", "formula": "The desk is between the bookshelf and the window.", "keyPhrase": "Opposite the door, there is a comfortable sofa.", "subPoints": ["Konum edatları odayı zihinde canlandırmayı sağlar"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Entegrasyon Kuralı: Bütünden Parçaya Anlatım", "formula": "Genel Tanım (Apartment) -> Odalar (Rooms) -> Mobilyalar ve Konumlar", "explanation": "Ev anlatırken önce dairenin genelini, sonra belirli bir odayı, en son eşyaların konumunu anlatın.", "exampleSnippet": "It is a modern apartment. There is a bright living room with a large sofa.", "tipNote": "Anlatımı mantıksal bir sıra halinde adım adım ilerletin!"},
            {"ruleTitle": "Sıfat ve Edat Uyumu", "formula": "There is a [SIFAT + İSİM] + [KONUM EDATI] + [YER]", "explanation": "There is a comfortable armchair next to the fireplace yapısı tam bir profesyonel tasvir cümlesidir.", "cautionNote": "Eşyaları tek tek sıralarken sadece 'and' demek yerine konum edatlarını kullanın."}
        ],
        "mistakes": [
            {"wrongExample": "My bedroom has a bed, has a desk, has a chair.", "correctExample": "In my bedroom, there is a comfortable bed, a wooden desk, and an ergonomic chair.", "rootCause": "Sürekli 'has' kelimesini tekrarlayarak monoton ve yapay cümleler kurmak.", "memoryTip": "'There is' ve 'there are' ile akıcı ve zengin tasvir yap!"},
            {"wrongExample": "There are a big television on the wall.", "correctExample": "There is a big television on the wall.", "rootCause": "Tekil nesne (a television) için 'there are' kullanma hatası.", "memoryTip": "Tekil eşyada THERE IS de!"}
        ],
        "dialogue": [
            {"speaker": "Tenant", "textEn": "Could you describe the layout of the furnished studio apartment?", "textTr": "Eşyalı stüdyo dairenin yerleşimini tarif edebilir misiniz?"},
            {"speaker": "Landlord", "textEn": "Certainly! There is a bright open-plan living room with a modern kitchenette.", "textTr": "Elbette! Modern bir açık mutfağa sahip aydınlık bir yaşam alanı var."},
            {"speaker": "Tenant", "textEn": "What furniture is there in the study area?", "textTr": "Çalışma alanında hangi mobilyalar var?"},
            {"speaker": "Landlord", "textEn": "There is a sturdy wooden desk beside the window and an ergonomic chair.", "textTr": "Pencerenin yanında sağlam ahşap bir masa ve ergonomik bir sandalye var."}
        ],
        "contrastive": {"conceptA": "Türkçe Ev Tasviri", "conceptB": "İngilizce Mekan Tasviri Matrisi", "keyDifference": "Türkçede 'Evde iki oda var' veya 'Masanın yanında sandalye duruyor' denir. İngilizcede 'There is/are' ve konum edatı iskeletiyle aktarılır.", "exampleA": "Odamda geniş bir yatak var.", "exampleB": "There is a spacious bed in my room."},
        "memoryHook": "Tasvir Formülü: Genel Tanım + There is/are + Konum Edatları!",
        "examples": [
            {"en": "In the master bedroom, there is a king-size bed between two elegant nightstands.", "tr": "Ebeveyn yatak odasında iki şık komodinin arasında büyük boy bir yatak var.", "highlightedWords": ["between two elegant nightstands"], "grammarCategory": "Entegre Tasvir", "contextNote": "Yatak odası tasviri.", "breakdownNote": "Yer edatı + there is + tekil isim + konum edatı (between)."},
            {"en": "The modern open-plan kitchen is equipped with stainless steel appliances.", "tr": "Modern açık mutfak paslanmaz çelik beyaz eşyalarla donatılmıştır.", "highlightedWords": ["is equipped with"], "grammarCategory": "Donanım Tasviri", "contextNote": "Mutfak tanıtımı.", "breakdownNote": "Özne + to be + sıfat/katılımcı + edat öbeği."},
            {"en": "Opposite the main entrance, there is a spacious balcony overlooking the garden.", "tr": "Ana girişin karşısında bahçeye bakan ferah bir balkon var.", "highlightedWords": ["Opposite the main entrance", "spacious balcony"], "grammarCategory": "Konum ve Manzara", "contextNote": "Daire manzarası.", "breakdownNote": "Konum edatı + there is + sıfat tamlaması + niteleyici eylemsi."}
        ],
        "vocab": [
            {"word": "Furnished", "phonetic": "/ˈfɜː.nɪʃt/", "partOfSpeech": "adjective", "meaningTr": "Eşyalı, döşeli", "exampleSentence": "She rented a fully furnished flat."},
            {"word": "Spacious", "phonetic": "/ˈspeɪ.ʃəs/", "partOfSpeech": "adjective", "meaningTr": "Ferah, geniş", "exampleSentence": "The living room is very spacious."},
            {"word": "Wardrobe", "phonetic": "/ˈwɔː.drəʊb/", "partOfSpeech": "noun", "meaningTr": "Gardırop, giysi dolabı", "exampleSentence": "Hang your coat in the wardrobe."},
            {"word": "Appliance", "phonetic": "/əˈplaɪ.əns/", "partOfSpeech": "noun", "meaningTr": "Ev aleti, cihaz", "exampleSentence": "Modern kitchen appliances save energy."}
        ],
        "qc_q": "Evin oturma odasını tasvir ederken aşağıdaki cümlelerden hangisi dilbilgisel ve stilistik olarak EN UYGUNDUR?",
        "qc_opts": ["There is a comfortable sofa and two armchairs in the living room.", "In living room has one sofa and two armchair.", "There are a comfortable sofa in living room.", "Living room is having comfortable sofa."],
        "qc_idx": 0,
        "qc_expl": "İngilizcede mekan ve eşya tasviri 'There is / There are' ve yer edatlarıyla kurulur.",
        "ex_sent": "In the guest bedroom, there ___ two single beds next to the large wardrobe.",
        "ex_opts": ["are", "is", "have", "has"],
        "ex_ans": "are",
        "ex_hint": "'two single beds' çoğul bir öznedir.",
        "ex_expl": "Çoğul nesneler için 'there are' kullanılır.",
        "sb_tr": "Ferah oturma odasında büyük bir kanepe ve pencerenin yanında ahşap bir masa var.",
        "sb_en": "There is a large sofa in the spacious living room and a wooden desk next to the window",
        "sb_dist": ["are", "have", "has", "sitting"],
        "sb_expl": "Entegre tasvir: Varlık (There is a large sofa in the spacious living room) + bağlaç ve konum (and a wooden desk next to the window)."
    }

    return topics
