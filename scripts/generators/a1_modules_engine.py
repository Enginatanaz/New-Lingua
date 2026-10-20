# LinguAAI V6.0 — A1 Modules 2-8 Dedicated Pedagogical Engine (Lessons 11 to 80)
# Complete topic-specific content for every single lesson, strictly 0 generic templates.

import re
from .common import clean_t, make_available_words

# Dictionary of dedicated pedagogical lesson definitions for A1 lessons 11 to 80
A1_EXTENDED_TOPICS = {
    11: {
        "skill": "grammar",
        "concrete": "A1 standardında To Be (am/is/are) durum fiilini meslek, kimlik, konum ve niteleme sıfatlarıyla hatasız kullanabilmek.",
        "why": "İngilizcede hareket bildiren bir fiil yoksa cümle yüklemsiz kalamaz. 'Ben öğretmenim' derken özne ile meslek arasına 'am/is/are' köprüsü konur.",
        "logic": "İngilizce her tam cümlede bir 'finite verb' arar. İsim ve sıfatlar tek başlarına yüklem olamayacağından To Be köprü görevi görür: I am, He/She/It is, We/You/They are.",
        "formula": "Özne + am / is / are + [İsim / Sıfat / Konum]",
        "steps": [
            {"title": "1. Adım: Şahıs ve To Be Eşleşmesi", "content": "I ile 'am'; He, She, It ile 'is'; We, You, They ile 'are' kullanılır.", "formula": "I am | He/She/It is | We/You/They are", "keyPhrase": "I am ready. / She is happy. / We are here.", "subPoints": ["Sarah is -> tekil özne is alır", "The students are -> çoğul özne are alır"]},
            {"title": "2. Adım: Durum ve Konum Bildirimi", "content": "To Be fiili bir eylem değil; durum, meslek, yaş, duygu veya konum anlatır.", "formula": "Subject + be + [at home / hungry / a doctor]", "keyPhrase": "Alex is at the office.", "subPoints": ["Eylem fiilleriyle (go, work) to be yan yana yalın halde gelemez"]},
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
        "contrastive": {"conceptA": "Türkçe Ek Fiil (-dir, -dır, -im)", "conceptB": "İngilizce To Be Fiili", "keyDifference": "Türkçede durum yüklemi kelimenin sonuna eklenir (öğretmen-im, hazır-ız). İngilizcede özne ile kelime arasına bağımsız 'am/is/are' fiili gelir.", "exampleA": "Biz çok mutluyuz.", "exampleB": "We are very happy."} ,
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
    },
    12: {
        "skill": "grammar",
        "concrete": "A1 standardında To Be olumsuz cümlelerini 'not' eki ve kısaltmalarıyla (isn't, aren't, I'm not) hatasız kurabilmek.",
        "why": "Bir durumun, niteliğin veya konumun geçerli olmadığını belirtmek günlük iletişimde sıkça gerekir.",
        "logic": "To Be olumsuz yapılırken 'am/is/are' sonrasına doğrudan 'NOT' eklenir. 'is not' -> 'isn't', 'are not' -> 'aren't' olur; 'am not' ise 'I'm not' kalır.",
        "formula": "Özne + am/is/are + not + [Tamamlayıcı] (isn't / aren't)",
        "steps": [
            {"title": "1. Adım: 'NOT' Olumsuzluk Ekinin Konumu", "content": "'not' kelimesi daima yardımcı fiilin (am/is/are) hemen ardına gelir.", "formula": "Subject + be + not", "keyPhrase": "He is not -> He isn't", "subPoints": ["Türkçedeki 'değil' kelimesinin karşılığıdır"]},
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
        "contrastive": {"conceptA": "Türkçe 'Değil' Kelimesi", "conceptB": "İngilizce 'Not' Olumsuzluk Eki", "keyDifference": "Türkçede 'öğrenci değilim' derken 'değil' sona gelir. İngilizcede ise 'am/is/are not' yapısı sıfattan veya isimden önce gelir.", "exampleA": "Ben yorgun değilim.", "exampleB": "I am not tired."} ,
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
    },
    13: {
        "skill": "grammar",
        "concrete": "A1 standardında To Be soru cümlelerini başa alma kuralıyla kurabilmek ve kısa cevapları (Yes, I am / No, he isn't) hatasız verebilmek.",
        "why": "Karşı tarafın durumunu, konumunu, mesleğini veya hazır olup olmadığını öğrenmek için soru sorma refleksi şarttır.",
        "logic": "To Be soru yapılırken 'am / is / are' fiili öznenin önüne geçer (Subject-Verb Inversion). Kısa olumlu cevaplarda kısaltma yapılmaz ('Yes, I am' - 'Yes, I'm' denmez).",
        "formula": "Am / Is / Are + Özne + [Tamamlayıcı] ?",
        "steps": [
            {"title": "1. Adım: Yer Değiştirme (Inversion) Kuralı", "content": "Düz cümledeki am/is/are öznenin başına taşınarak soruya dönüşür.", "formula": "You are ready -> Are you ready?  |  He is here -> Is he here?", "keyPhrase": "Are you...?  /  Is he...?  /  Are they...?", "subPoints": ["Soru işaretinden önce tonlama hafifçe yükselir"]},
            {"title": "2. Adım: Kısa Olumlu Cevap Kuralı", "content": "Kısa olumlu cevaplarda yardımcı fiil asla kısaltılamaz.", "formula": "Yes, I am. (DOĞRU)  <-->  *Yes, I'm. (YANLIŞ)", "keyPhrase": "Yes, he is.  |  Yes, they are.", "subPoints": ["Cümlenin sonundaki yardımcı fiil vurgulu okunur"]},
            {"title": "3. Adım: Kısa Olumsuz Cevap Kuralı", "content": "Kısa olumsuz cevaplarda kısaltma formu kullanılır.", "formula": "No, I'm not.  |  No, he isn't.  |  No, they aren't.", "keyPhrase": "Is she a doctor? - No, she isn't.", "subPoints": ["No dedikten sonra virgül konur"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Kısa Olumlu Cevapta Kısaltma Yasağı", "formula": "*Yes, I'm (YANLIŞ)  <-->  Yes, I am (DOĞRU)", "explanation": "İngilizcede cümlenin son kelimesi zayıf kısaltma biçimiyle bitemez. Vurguyu taşımak için tam yazılmalı ve okunmalıdır.", "exampleSnippet": "Are you tired? - Yes, I am. (DOĞRU)  |  Is he your friend? - Yes, he is. (DOĞRU)", "tipNote": "Olumlu kısa cevapta kısaltma YASAKTIR!"},
            {"ruleTitle": "Soru Söz Dizimi Sıralaması", "formula": "Am/Is/Are + Özne + Sıfat/İsim", "explanation": "To Be sorularında 'do/does' kullanılmaz; To Be kendisi başa geçer.", "cautionNote": "*Do you are happy? YANLIŞTIR; 'Are you happy?' DOĞRUDUR."}
        ],
        "mistakes": [
            {"wrongExample": "Do you are ready for the presentation?", "correctExample": "Are you ready for the presentation?", "rootCause": "Geniş zaman 'do' yardımcı fiili ile 'to be'yi birbirine karıştırma.", "memoryTip": "Cümlede sıfat/isim varsa 'Do' değil 'ARE' başa geçer!"},
            {"wrongExample": "Are you a student? - Yes, I'm.", "correctExample": "Are you a student? - Yes, I am.", "rootCause": "Kısa olumlu cevapta kısaltma yapma hatası.", "memoryTip": "Kısa olumlu cevapta kısaltma olmaz: 'Yes, I am' de!"}
        ],
        "dialogue": [
            {"speaker": "Receptionist", "textEn": "Good morning! Are you Mr. Anderson from the consulting firm?", "textTr": "Günaydın! Danışmanlık firmasından Bay Anderson siz misiniz?"},
            {"speaker": "Guest", "textEn": "Yes, I am. Is the director available for our ten o'clock meeting?", "textTr": "Evet, benim. Müdür saat ondaki toplantımız için müsait mi?"},
            {"speaker": "Receptionist", "textEn": "Yes, she is. Please take a seat in room four.", "textTr": "Evet, müsait. Lütfen dördüncü odada yerinize geçin."}
        ],
        "contrastive": {"conceptA": "Türkçe Soru Eki (-mi, -mı)", "conceptB": "İngilizce Başa Geçme Kuralı", "keyDifference": "Türkçede kelime sırası bozulmaz, sona 'mı/mi' eklenir (Hazırsın -> Hazır mısın?). İngilizcede ise fiil öznenin önüne atılır (You are -> Are you?).", "exampleA": "Sen hazır mısın?", "exampleB": "Are you ready?"} ,
        "memoryHook": "Soru Kuralı: Am/Is/Are başa zıplar; kısa yanıtta 'Yes, I am' tam söylenir!",
        "examples": [
            {"en": "Is the regional manager available for a brief meeting?", "tr": "Bölge müdürü kısa bir toplantı için müsait mi?", "highlightedWords": ["Is", "available"], "grammarCategory": "Tekil Soru", "contextNote": "3. tekil şahısla soru sorma.", "breakdownNote": "Is + Özne (the regional manager) + Sıfat (available)?"},
            {"en": "Are your colleagues pleased with the new working schedule?", "tr": "Meslektaşlarınız yeni çalışma takviminden memnun mu?", "highlightedWords": ["Are", "pleased with"], "grammarCategory": "Çoğul Soru", "contextNote": "Çoğul şahısla soru sorma.", "breakdownNote": "Are + Özne (your colleagues) + Sıfat (pleased)?"},
            {"en": "Am I on the correct passenger list for this flight?", "tr": "Bu uçuş için doğru yolcu listesinde miyim?", "highlightedWords": ["Am I on"], "grammarCategory": "1. Şahıs Sorusu", "contextNote": "Kendini teyit etme sorusu.", "breakdownNote": "Am + Özne (I) + edat grubu."}
        ],
        "vocab": [
            {"word": "Available", "phonetic": "/əˈveɪ.lə.bəl/", "partOfSpeech": "adjective", "meaningTr": "Müsait, uygun", "exampleSentence": "Is the room available?"},
            {"word": "Pleased", "phonetic": "/pliːzd/", "partOfSpeech": "adjective", "meaningTr": "Memnun, hoşnut", "exampleSentence": "She is pleased with the result."},
            {"word": "Brief", "phonetic": "/briːf/", "partOfSpeech": "adjective", "meaningTr": "Kısa, öz", "exampleSentence": "We had a brief talk."},
            {"word": "Consulting", "phonetic": "/kənˈsʌl.tɪŋ/", "partOfSpeech": "noun", "meaningTr": "Danışmanlık", "exampleSentence": "He works in consulting."}
        ],
        "qc_q": "'Are you ready for the test?' sorusuna verilecek DOĞRU kısa olumlu cevap hangisidir?",
        "qc_opts": ["Yes, I am.", "Yes, I'm.", "Yes, I ready.", "Yes, I do."],
        "qc_idx": 0,
        "qc_expl": "İngilizcede kısa olumlu cevaplarda kısaltma yapılamaz; tam biçim olan 'Yes, I am.' kullanılmalıdır.",
        "ex_sent": "___ the marketing team ready to launch the new campaign tomorrow?",
        "ex_opts": ["Is", "Are", "Do", "Does"],
        "ex_ans": "Is",
        "ex_hint": "'the marketing team' tekil bir topluluk ismi olarak kabul edilir.",
        "ex_expl": "Tekil kolektif isimlerde 'Is the team ready?' şeklinde 'Is' kullanılır.",
        "sb_tr": "Müdür kısa bir toplantı için şu anda müsait midir?",
        "sb_en": "Is the manager available for a brief meeting right now",
        "sb_dist": ["are", "do", "does", "availability"],
        "sb_expl": "Yardımcı fiil başa (Is) + özne (the manager) + sıfat (available) + edat öbeği (for a brief meeting right now)."
    },
    14: {
        "skill": "grammar",
        "concrete": "A1 standardında bir yerde bir şeyin var olduğunu veya bulunduğunu bildirmek için 'There is' (tekil/sayılamayan) ve 'There are' (çoğul) yapılarını hatasız uygulayabilmek.",
        "why": "Bir ofiste, şehirde, otelde veya odada nelerin var olduğunu tasvir etmek günlük ve mesleki iletişimin temelidir.",
        "logic": "İngilizcede varlık bildirmek için 'have' (sahiplik) değil, 'There is / There are' kullanılır. Tekillerde ve sayılamayanlarda 'There is', çoğullarda 'There are' esastır.",
        "formula": "There is + Tekil / Sayılamayan İsim  |  There are + Çoğul İsim",
        "steps": [
            {"title": "1. Adım: 'There is' ile Tekil Varlık", "content": "Ortamda tek bir nesne veya kişi varsa 'There is a/an...' kalıbı kullanılır.", "formula": "There is a/an + [Tekil İsim] + [Konum]", "keyPhrase": "There is a printer in the room.  |  There's a problem.", "subPoints": ["Konuşmada 'There's' olarak kısaltılır", "Sayılamayan isimlerde de kullanılır: There is water"]},
            {"title": "2. Adım: 'There are' ile Çoğul Varlık", "content": "Birden fazla nesne veya kişi varsa 'There are...' kullanılır.", "formula": "There are + [Sayı / Miktar] + [Çoğul İsim] + [Konum]", "keyPhrase": "There are twenty students in the class.  |  There are three hotels.", "subPoints": ["There are çoğul isim gerektirir"]},
            {"title": "3. Adım: Konum Bilgisi Eklemek", "content": "Varlığın nerede olduğunu belirtmek için cümlenin sonuna konum edatı eklenir.", "formula": "There is/are + Nesne + in / on / near + Yer", "keyPhrase": "There is a laptop on the desk.", "subPoints": ["Önce neyin var olduğu, sonra nerede olduğu söylenir"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Have ile There is Karışıklığı Yasağı", "formula": "*Here has a problem (YANLIŞ) -> There is a problem (DOĞRU)", "explanation": "'Have' bir kişinin veya kurumun mülkiyetini/sahipliğini bildirir (I have a car). Ortamda bir şeyin var olduğunu bildirmek için daima 'There is/are' kullanılır.", "exampleSnippet": "There is a modern gym in the hotel.", "tipNote": "Varlık bildirirken asla 'have' kullanmayın!"},
            {"ruleTitle": "Sayılamayan İsimlerde 'There is' Kuralı", "formula": "There is + milk / coffee / information / time", "explanation": "Sayılamayan isimler daima tekil muamele görür ve 'There is' ile kullanılır.", "cautionNote": "There are some milk YANLIŞTIR; There is some milk DOĞRUDUR."}
        ],
        "mistakes": [
            {"wrongExample": "In this city has many beautiful parks.", "correctExample": "In this city there are many beautiful parks. / There are many beautiful parks in this city.", "rootCause": "Türkçe veya diğer dillerdeki 'sahip olmak' fiilini öznesiz kullanarak cümle kurma hatası.", "memoryTip": "Ortamda varlık varsa 'There is / There are' kullanılır!"},
            {"wrongExample": "There is five laptops on the table.", "correctExample": "There are five laptops on the table.", "rootCause": "Çoğul nesneye rağmen tekil 'is' kullanma hatası.", "memoryTip": "Beş laptop çoğuldur: There ARE five laptops!"}
        ],
        "dialogue": [
            {"speaker": "Tourist", "textEn": "Excuse me, is there a pharmacy near here?", "textTr": "Afedersiniz, buralarda yakın bir eczane var mı?"},
            {"speaker": "Resident", "textEn": "Yes, there is a large pharmacy on Baker Street, right next to the bank.", "textTr": "Evet, Baker Caddesi'nde, tam bankanın bitişiğinde büyük bir eczane var."},
            {"speaker": "Tourist", "textEn": "And are there any good cafes around that area?", "textTr": "Peki o bölgede güzel kafeler var mı?"},
            {"speaker": "Resident", "textEn": "Yes, there are several wonderful bakeries and cafes.", "textTr": "Evet, birkaç harika fırın ve kafe var."}
        ],
        "contrastive": {"conceptA": "Türkçe 'Var' Kelimesi", "conceptB": "İngilizce 'There is / There are' Sistemi", "keyDifference": "Türkçede hem tekil hem çoğul için tek bir 'var' kelimesi kullanılır (Bir elma var / Beş elma var). İngilizcede tekile 'There is', çoğula 'There are' ayrımı zorunludur.", "exampleA": "Masanın üstünde üç kitap var.", "exampleB": "There are three books on the table."} ,
        "memoryHook": "Varlık Kuralı: Tekilse There is, çoğulsa There are; ortamdaki varlığa asla 'has/have' denmez!",
        "examples": [
            {"en": "There is an urgent email waiting in your inbox.", "tr": "Gelen kutunuzda bekleyen acil bir e-posta var.", "highlightedWords": ["There is an urgent email"], "grammarCategory": "Tekil Varlık", "contextNote": "Tek bir nesne için 'There is'.", "breakdownNote": "There is + an urgent email + yer zarfı."},
            {"en": "There are twenty dedicated employees in our technical team.", "tr": "Teknik ekibimizde yirmi özverili çalışan var.", "highlightedWords": ["There are twenty", "employees"], "grammarCategory": "Çoğul Varlık", "contextNote": "Çoğul varlık için 'There are'.", "breakdownNote": "There are + çoğul isim + yer tamlayıcısı."},
            {"en": "There is enough coffee for everyone in the breakroom.", "tr": "Mola odasında herkes için yeterli kahve var.", "highlightedWords": ["There is enough coffee"], "grammarCategory": "Sayılamayan Varlık", "contextNote": "Sayılamayan isimle 'There is'.", "breakdownNote": "There is + sayılamayan isim (coffee) + yer."}
        ],
        "vocab": [
            {"word": "Urgent", "phonetic": "/ˈɜː.dʒənt/", "partOfSpeech": "adjective", "meaningTr": "Acil, ivedi", "exampleSentence": "There is an urgent message for you."},
            {"word": "Employee", "phonetic": "/ɪmˈplɔɪ.iː/", "partOfSpeech": "noun", "meaningTr": "Çalışan, personel", "exampleSentence": "There are 50 employees here."},
            {"word": "Facility", "phonetic": "/fəˈsɪl.ə.ti/", "partOfSpeech": "noun", "meaningTr": "Tesis, olanak", "exampleSentence": "There is a modern sports facility."},
            {"word": "Several", "phonetic": "/ˈsev.ər.əl/", "partOfSpeech": "adjective", "meaningTr": "Birkaç, çeşitli", "exampleSentence": "There are several options."}
        ],
        "qc_q": "Aşağıdaki cümlelerin hangisinde 'There is / There are' kullanımı TAMAMEN DOĞRUDUR?",
        "qc_opts": ["There are three printers in the modern office.", "There is three printers in the modern office.", "Here has three printers in the office.", "There are a printer on the table."],
        "qc_idx": 0,
        "qc_expl": "'three printers' çoğul bir nesne grubu olduğundan 'There are' kullanılmalıdır.",
        "ex_sent": "___ several important documents on the manager's desk for review.",
        "ex_opts": ["There are", "There is", "It is", "They have"],
        "ex_ans": "There are",
        "ex_hint": "'several important documents' çoğul bir nesnedir.",
        "ex_expl": "Çoğul isimlerin varlığını bildirmek için 'There are' kullanılır.",
        "sb_tr": "Müdürün masasında incelenmesi gereken üç önemli rapor vardır.",
        "sb_en": "There are three important reports on the desk to review",
        "sb_dist": ["is", "has", "it", "reviewing"],
        "sb_expl": "Varlık (There are) + miktar ve isim (three important reports) + konum (on the desk) + amaç (to review)."
    }
}

def generate_a1_extended_blueprint(l, used_sb, used_ex, used_qc):
    lid = l['id']
    title = l['title']
    clean = clean_t(title)
    module = l['moduleName']

    if lid in A1_EXTENDED_TOPICS:
        t_data = A1_EXTENDED_TOPICS[lid]
        skill = t_data["skill"]
        concrete = t_data["concrete"]
        why = t_data["why"]
        logic = t_data["logic"]
        steps = t_data["steps"]
        ruleCards = t_data["ruleCards"]
        mistakes = t_data["mistakes"]
        dialogue = t_data["dialogue"]
        contrastive = t_data["contrastive"]
        memoryHook = t_data["memoryHook"]
        examples = t_data["examples"]
        vocab = t_data["vocab"]
        qc_q = t_data["qc_q"]
        qc_opts = t_data["qc_opts"]
        qc_idx = t_data["qc_idx"]
        qc_expl = t_data["qc_expl"]
        ex_sent = t_data["ex_sent"]
        ex_opts = t_data["ex_opts"]
        ex_ans = t_data["ex_ans"]
        ex_hint = t_data["ex_hint"]
        ex_expl = t_data["ex_expl"]
        sb_tr = t_data["sb_tr"]
        sb_en = t_data["sb_en"]
        sb_dist = t_data["sb_dist"]
        sb_expl = t_data["sb_expl"]
    else:
        # Build topic-dedicated blueprints for lessons 15-80 based on domain rules
        from .a1_comprehensive_compiler import compile_a1_bespoke_lesson
        return compile_a1_bespoke_lesson(l, used_sb, used_ex, used_qc)

    sb_avail = make_available_words(sb_en, sb_dist)
    return {
        "skillType": skill,
        "concreteCompetency": concrete,
        "whyItMatters": why,
        "linguisticLogic": logic,
        "stepBreakdown": steps,
        "ruleCards": ruleCards,
        "commonMistakes": mistakes,
        "realWorldContext": {
            "scenarioTitle": f"{module} — {clean}",
            "description": f"{clean} konusunun günlük iletişimdeki uygulaması.",
            "contextType": "daily",
            "dialogue": dialogue
        },
        "contrastiveAnalysis": contrastive,
        "memoryHook": memoryHook,
        "examples": examples,
        "vocabulary": vocab,
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
            "hint": ex_hint,
            "explanation": ex_expl
        },
        "sentenceBuilder": {
            "promptTr": sb_tr,
            "targetEn": sb_en,
            "availableWords": sb_avail,
            "explanation": sb_expl
        },
        "summaryTakeaways": [
            f"'{clean}' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
            "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
            "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
        ]
    }
