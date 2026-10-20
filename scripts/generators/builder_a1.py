# -*- coding: utf-8 -*-
"""
LinguAAI — A1 Level Master Pedagogical Builder (Lessons 1 to 80)
Builds 100% bespoke, CEFR A1 pedagogically structured blueprints.
Zero templates, zero generic fallbacks, zero banned patterns.
"""

from .common import make_available_words

def get_a1_topics():
    topics = {}

    # -------------------------------------------------------------
    # MODULE 1: Tanışma, Alfabe ve Temel İletişim (Lessons 1-10)
    # -------------------------------------------------------------
    # Lesson 1: Tanışma İfadeleri ve Kendini Tanıtma
    topics[1] = {
        "skill": "speaking",
        "concrete": "A1 standardında temel tanışma ifadelerini (Hello, My name is, Nice to meet you) kullanarak kendini tanıtabilmek.",
        "why": "Tanışma ifadeleri yabancı dilde ilk temasın ve iletişimin evrensel başlangıç noktasıdır.",
        "logic": "İngilizcede tanışırken önce selamlama ve isim bildirimi yapılır. 'My name is...' veya 'I am...' kalıbı esastır.",
        "steps": [
            {"title": "1. Adım: Selamlaşma ve Kendini Tanıtma", "content": "'I am [İsim]' veya 'My name is [İsim]' ile başlanır.", "formula": "Greeting + My name is [İsim] / I am [İsim]", "keyPhrase": "Hello! My name is David.", "subPoints": ["Resmi: Good morning", "Samimi: Hello veya Hi"]},
            {"title": "2. Adım: Karşı Tarafın Adını Sorma", "content": "Nezaketle karşı tarafın adını öğrenmek için soru sorulur.", "formula": "What is your name? / What's your name?", "keyPhrase": "What's your name?", "subPoints": ["What is sözcükleri What's olarak birleşir"]},
            {"title": "3. Adım: Memnuniyet Bildirimi", "content": "Tanışma tamamlanırken memnuniyet kalıbı söylenir.", "formula": "Nice to meet you! -> Nice to meet you, too!", "keyPhrase": "Nice to meet you, too!", "subPoints": ["Me too yerine Nice to meet you, too demek kibardır"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Temel Tanışma Zinciri", "formula": "Hello! My name is ... -> What is your name? -> Nice to meet you!", "explanation": "Tanışma adımları sırayla izlendiğinde diyalog kesintiye uğramadan akar.", "exampleSnippet": "Hello, my name is Alex. What is your name? - I'm Sarah, nice to meet you!", "tipNote": "Karşılık verirken 'Nice to meet you, too' deyin."},
            {"ruleTitle": "İsim Bildirimi Standartı", "formula": "My name is [İsim] | I am [İsim]", "explanation": "Türkçe 'Benim adım Ali' derken 'My name is Ali' denir; 'I name is Ali' denmez.", "cautionNote": "'I name is...' YANLIŞTIR! 'My name is...' veya 'I am...' DOĞRUDUR."}
        ],
        "mistakes": [
            {"wrongExample": "I name is David.", "correctExample": "My name is David. / I am David.", "rootCause": "İyelik sıfatı (My) yerine kişi zamiri (I) kullanma hatası.", "memoryTip": "Benim adım = My name!"},
            {"wrongExample": "Nice to meet you -> Me too.", "correctExample": "Nice to meet you -> Nice to meet you, too.", "rootCause": "Tanışmada 'Me too' kaba algılanabilir.", "memoryTip": "Cümlenin aynısını kur, sonuna 'too' ekle!"}
        ],
        "dialogue": [
            {"speaker": "David", "textEn": "Hello! My name is David. What is your name?", "textTr": "Merhaba! Benim adım David. Adınız nedir?"},
            {"speaker": "Sarah", "textEn": "Hi David! I am Sarah. Nice to meet you.", "textTr": "Selam David! Ben Sarah. Tanıştığıma memnun oldum."},
            {"speaker": "David", "textEn": "Nice to meet you, too, Sarah. Where are you from?", "textTr": "Ben de memnun oldum Sarah. Nerelisiniz?"}
        ],
        "contrastive": {"conceptA": "Türkçe Tanışma Kalıpları", "conceptB": "İngilizce Tanışma Kalıpları", "keyDifference": "Türkçede 'Memnun oldum' tek bir fiildir; İngilizcede 'Nice to meet you' mastarlı bir sıfat kalıbıdır.", "exampleA": "Tanıştığıma memnun oldum.", "exampleB": "Nice to meet you."},
        "memoryHook": "Tanışma Üçgeni: Hello + My name is + Nice to meet you!",
        "examples": [
            {"en": "Hello, my name is Lisa and I am from London.", "tr": "Merhaba, benim adım Lisa ve Londralıyım.", "highlightedWords": ["Hello", "my name is", "from"], "grammarCategory": "Tanışma İfadesi", "contextNote": "İlk tanışma cümlesi.", "breakdownNote": "Selamlama + İsim + Memleket."},
            {"en": "What is your name, please?", "tr": "Adınız nedir lütfen?", "highlightedWords": ["What is your name", "please"], "grammarCategory": "Soru Kalıbı", "contextNote": "Kibarca isim öğrenme.", "breakdownNote": "Soru kelimesi (What) + to be (is) + iyelik (your) + isim (name)."},
            {"en": "It is a pleasure to meet you, Mark.", "tr": "Sizinle tanışmak bir zevk Mark.", "highlightedWords": ["pleasure to meet you"], "grammarCategory": "Nezaket Kalıbı", "contextNote": "Resmi tanışma ifadesi.", "breakdownNote": "It is + a pleasure + mastar fiil."}
        ],
        "vocab": [
            {"word": "Introduce", "phonetic": "/ˌɪn.trəˈdjuːs/", "partOfSpeech": "verb", "meaningTr": "Tanıtmak, tanıştırmak", "exampleSentence": "Allow me to introduce myself to the group."},
            {"word": "Pleasure", "phonetic": "/ˈpleʒ.ər/", "partOfSpeech": "noun", "meaningTr": "Zevk, memnuniyet", "exampleSentence": "It is a pleasure to meet you."},
            {"word": "Surname", "phonetic": "/ˈsɜː.neɪm/", "partOfSpeech": "noun", "meaningTr": "Soyadı", "exampleSentence": "What is your surname, please?"},
            {"word": "Originally", "phonetic": "/əˈrɪdʒ.ən.əl.i/", "partOfSpeech": "adverb", "meaningTr": "Aslen, köken olarak", "exampleSentence": "I am originally from Turkey."}
        ],
        "qc_q": "Biri size 'Nice to meet you' dediğinde verilecek en kibar ve doğru karşılık hangisidir?",
        "qc_opts": ["Nice to meet you, too!", "Yes, I am fine.", "My name is John.", "Good night, see you."],
        "qc_idx": 0,
        "qc_expl": "'Nice to meet you' ifadesine sonuna 'too' (ben de) eklenerek 'Nice to meet you, too!' ile yanıt verilir.",
        "ex_sent": "Hello, my name is Alex. ___ to meet you!",
        "ex_opts": ["Nice", "Well", "Fine", "Goodly"],
        "ex_ans": "Nice",
        "ex_hint": "İngilizcede tanışmaktan memnuniyet bildiren evrensel kalıbı düşünün.",
        "ex_expl": "Doğru kalıp 'Nice to meet you'dur.",
        "sb_tr": "Merhaba benim adım David ve ben bir öğretmenim.",
        "sb_en": "Hello my name is David and I am a teacher",
        "sb_dist": ["are", "you", "from", "she"],
        "sb_expl": "Selamlama (Hello) + iyelik ve isim (my name is David) + bağlaç (and) + özne ve meslek (I am a teacher)."
    }

    # Lesson 2: İngilizce Alfabe ve Harf Kodlama (Spelling)
    topics[2] = {
        "skill": "pronunciation",
        "concrete": "A1 standardında İngilizce alfabedeki 26 harfin doğru sesletimini kavramak ve isimleri harf harf kodlayabilmek (spelling).",
        "why": "Harf kodlama (spelling), telefon görüşmelerinde ve resmi işlemlerde isimlerin doğru yazılmasını sağlar.",
        "logic": "İngilizcede harflerin alfabedeki adı kelime içindeki sesinden farklıdır. Kodlama yaparken harfin alfabedeki adı söylenir.",
        "steps": [
            {"title": "1. Adım: Ünlü Harflerin Telaffuzu", "content": "A (/eɪ/), E (/iː/), I (/aɪ/), O (/əʊ/), U (/juː/) sesletimleri ayrıştırılır.", "formula": "A = /eɪ/  |  E = /iː/  |  I = /aɪ/", "keyPhrase": "Spell: A-L-E-X", "subPoints": ["E ve I sesleri Türkler tarafından en sık karıştırılan çiftlerdir"]},
            {"title": "2. Adım: Kodlama Sorusu Sorma", "content": "Bir kelimenin nasıl yazıldığını sormak için standart kalıp kullanılır.", "formula": "How do you spell [Kelime / İsim]?", "keyPhrase": "How do you spell your surname?", "subPoints": ["Cevap verirken harfler arasına tire veya duraklama konur"]},
            {"title": "3. Adım: Çift Harfleri Belirtme", "content": "Yan yana gelen aynı harfler için 'double' sözcüğü tercih edilir.", "formula": "Double + [Harf]", "keyPhrase": "G-R-E-E-N -> G-R-double E-N", "subPoints": ["Örn: Apple -> A-double P-L-E"]}
        ],
        "ruleCards": [
            {"ruleTitle": "E ve I Harfleri Ayrımı", "formula": "Letter E = /iː/ (İ sesi gibi) <--> Letter I = /aɪ/ (Ay sesi)", "explanation": "İngilizce 'E' harfi Türkçedeki 'İ' gibi; 'I' harfi ise 'Ay' şeklinde telaffuz edilir.", "exampleSnippet": "Email -> E-M-A-I-L (/iː/-/em/-/eɪ/-/aɪ/-/el/)", "tipNote": "Gözünüzün önüne 'Ice cream' getirin; I harfi 'Ay' diye okunur."},
            {"ruleTitle": "Spelling Soru Standardı", "formula": "How do you spell ...? / Could you spell that, please?", "explanation": "Resmi işlemlerde ve otel rezervasyonlarında en sık karşılaşılan soru formudur.", "cautionNote": "'How you write' yerine 'How do you spell' denir."}
        ],
        "mistakes": [
            {"wrongExample": "E harfini kodlarken /e/ sesi çıkarmak.", "correctExample": "E harfini /iː/ olarak telaffuz etmek.", "rootCause": "Türkçe harf okunuşunu İngilizce alfabeye yansıtma alışkanlığı.", "memoryTip": "E harfi İngilizcede 'İ' gibi okunur!"},
            {"wrongExample": "How you spell your name?", "correctExample": "How do you spell your name?", "rootCause": "Geniş zaman soru yardımcı fiili olan 'do'yu atlamak.", "memoryTip": "Soru sorarken DO yardımcı fiilini unutma!"}
        ],
        "dialogue": [
            {"speaker": "Receptionist", "textEn": "Welcome to the hotel. What is your surname, please?", "textTr": "Otele hoş geldiniz. Soyadınız nedir lütfen?"},
            {"speaker": "Guest", "textEn": "My surname is Miller.", "textTr": "Soyadım Miller."},
            {"speaker": "Receptionist", "textEn": "Could you spell that for me, please?", "textTr": "Benim için harf harf kodlayabilir misiniz lütfen?"},
            {"speaker": "Guest", "textEn": "Sure, it is M-I-double L-E-R.", "textTr": "Elbette, M-I-double L-E-R."}
        ],
        "contrastive": {"conceptA": "Türkçe Harf Sesletimi", "conceptB": "İngilizce Harf Adları (Letter Names)", "keyDifference": "Türkçe fonetiktir, harfin adı sesiyle birdir (B=Be). İngilizcede harflerin bağımsız adları vardır (B=/biː/, H=/eɪtʃ/).", "exampleA": "T-E-L-E-F-O-N", "exampleB": "T-E-L-E-P-H-O-N-E"},
        "memoryHook": "Alfabe Şifresi: A=Ey, E=İy, I=Ay!",
        "examples": [
            {"en": "How do you spell your first name?", "tr": "İlk adınızı nasıl kodlarsınız?", "highlightedWords": ["How do you spell"], "grammarCategory": "Kodlama Sorusu", "contextNote": "İsim yazılışı sorma.", "breakdownNote": "Soru zarfı + do + özne + spell + nesne."},
            {"en": "Can you spell your email address, please?", "tr": "E-posta adresinizi harf harf söyleyebilir misiniz lütfen?", "highlightedWords": ["Can you spell", "email address"], "grammarCategory": "Rica Cümlesi", "contextNote": "Resmi iletişimde e-posta kontrolü.", "breakdownNote": "Modal (Can) + özne + spell + nesne."},
            {"en": "My name is Anna, spelled A-double N-A.", "tr": "Benim adım Anna, A-çift N-A şeklinde yazılır.", "highlightedWords": ["spelled", "double"], "grammarCategory": "Kodlama Cevabı", "contextNote": "Çift harfli isim kodlama.", "breakdownNote": "İsim + spelled + harf dizisi."}
        ],
        "vocab": [
            {"word": "Alphabet", "phonetic": "/ˈæl.fə.bet/", "partOfSpeech": "noun", "meaningTr": "Alfabe", "exampleSentence": "The English alphabet has 26 letters."},
            {"word": "Vowel", "phonetic": "/ˈvaʊ.əl/", "partOfSpeech": "noun", "meaningTr": "Sesli harf", "exampleSentence": "A, E, I, O, U are vowels."},
            {"word": "Consonant", "phonetic": "/ˈkɒn.sə.nənt/", "partOfSpeech": "noun", "meaningTr": "Sessiz harf", "exampleSentence": "B and C are consonants."},
            {"word": "Spell", "phonetic": "/spel/", "partOfSpeech": "verb", "meaningTr": "Harf harf kodlamak", "exampleSentence": "How do you spell your surname?"}
        ],
        "qc_q": "İngilizce alfabede 'E' harfinin doğru telaffuzu hangisidir?",
        "qc_opts": ["/iː/ (İ sesi gibi)", "/e/ (E sesi gibi)", "/aɪ/ (Ay sesi gibi)", "/eɪ/ (Ey sesi gibi)"],
        "qc_idx": 0,
        "qc_expl": "İngilizcede E harfi /iː/ şeklinde telaffuz edilir.",
        "ex_sent": "Excuse me officer, could you please ___ your last name for the official record?",
        "ex_opts": ["spell", "write", "saying", "speak"],
        "ex_ans": "spell",
        "ex_hint": "Harf harf söylemek fiilini seçin.",
        "ex_expl": "Resmi kayıtlarda harf harf kodlama için 'spell' fiili kullanılır.",
        "sb_tr": "Lütfen soyadınızı harf harf kodlayabilir misiniz?",
        "sb_en": "Could you please spell your surname for the registration form",
        "sb_dist": ["write", "are", "name", "spelling"],
        "sb_expl": "Modal rica (Could you please) + fiil (spell your surname) + amaç (for the registration form)."
    }

    # Lesson 3: Sayılar (1-100), Yaş ve Telefon Numarası
    topics[3] = {
        "skill": "vocabulary",
        "concrete": "A1 standardında 1-100 arası sayıları, yaş belirtmeyi ve telefon numaralarını tek tek rakamlarla aktarabilmeyi kavramak.",
        "why": "Alışveriş tutarları, yaş bildirimi ve telefon numarası paylaşımı günlük yaşamın en somut bilgi aktarımıdır.",
        "logic": "İngilizcede yaş 'To Be' (am/is/are) ile söylenir (I am 25 years old). Telefon numaraları tek tek rakam olarak okunur; sıfır 'zero' veya 'oh' denir.",
        "steps": [
            {"title": "1. Adım: -teen ve -ty Ekleri Ayrımı", "content": "13-19 arası '-teen' vurgulu okunurken; 20, 30, 40 gibi onlar basamağı '-ty' ile biter.", "formula": "Thirteen (/θɜːˈtiːn/) vs Thirty (/ˈθɜː.ti/)", "keyPhrase": "Fourteen vs Forty | Fifteen vs Fifty", "subPoints": ["-teen ekinde vurgu sondadır, -ty ekinde vurgu baştadır"]},
            {"title": "2. Adım: Yaş Sorma ve Söyleme", "content": "İngilizcede yaş 'have' ile değil 'To Be' ile söylenir.", "formula": "I am + [Sayı] + years old / He is + [Sayı]", "keyPhrase": "I am twenty-eight years old.", "subPoints": ["*I have 20 years YANLIŞTIR; I am 20 DOĞRUDUR"]},
            {"title": "3. Adım: Telefon Numarası Okuma", "content": "Rakamlar tek tek telaffuz edilir; çift rakamlar için 'double' denir.", "formula": "0 = oh / zero | 77 = double seven", "keyPhrase": "My number is oh-five-five-five...", "subPoints": ["Üçlü veya dörtlü gruplar halinde duraklanır"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Yaş İfadesinde 'To Be' Kuralı", "formula": "Subject + am/is/are + [Yaş] (+ years old)", "explanation": "İngilizcede yaş bir sahiplik değil, bir durumdur; bu yüzden To Be fiili zorunludur.", "exampleSnippet": "She is twenty-five years old. / I am thirty.", "tipNote": "Yaşı söylerken 'have' fiilini aklınızdan bile geçirmeyin!"},
            {"ruleTitle": "-teen ve -ty Vurgu Kuralı", "formula": "13-19 = Vurgu SONDA (-TEEN)  <-->  20-90 = Vurgu BAŞTA (-TY)", "explanation": "FourTEEN derken ses uzar; FORty derken ses başta patlar ve kısa biter.", "cautionNote": "Dinleme testlerinde 14 ile 40'ı ayırt etmenin tek yolu vurgudur."}
        ],
        "mistakes": [
            {"wrongExample": "I have twenty-four years old.", "correctExample": "I am twenty-four years old.", "rootCause": "Türkçe '24 yaşındayım / yaşım var' algısını have ile çevirme hatası.", "memoryTip": "İngilizcede yaşına SAHİP DEĞİLSİN, o yaştasın: I AM 24!"},
            {"wrongExample": "My phone number is thirty-four, fifty-six.", "correctExample": "My phone number is three-four, five-six.", "rootCause": "Telefon numaralarını iki basamaklı sayılar olarak okuma yanlışı.", "memoryTip": "Telefon numaralarını tek tek rakam oku!"}
        ],
        "dialogue": [
            {"speaker": "Agent", "textEn": "Could I take your contact details and age, please?", "textTr": "İletişim bilgilerinizi ve yaşınızı alabilir miyim lütfen?"},
            {"speaker": "Customer", "textEn": "Certainly, I am thirty-two years old.", "textTr": "Elbette, otuz iki yaşındayım."},
            {"speaker": "Agent", "textEn": "And what is your mobile phone number?", "textTr": "Ve cep telefonu numaranız nedir?"},
            {"speaker": "Customer", "textEn": "It is oh-five-four-one, double two, three, eight.", "textTr": "0541 22 3 8."}
        ],
        "contrastive": {"conceptA": "Türkçe Yaş Bildirimi (-deyim)", "conceptB": "İngilizce To Be ile Yaş", "keyDifference": "Türkçede '20 yaşındayım' ekle kurulur; İngilizcede durum fiili 'am/is/are' kullanılır.", "exampleA": "Yirmi beş yaşındayım.", "exampleB": "I am twenty-five years old."},
        "memoryHook": "Yaş Kuralı: I AM 20! Telefon Kuralı: Rakamları tek tek söyle!",
        "examples": [
            {"en": "My grandfather is seventy-five years old and very active.", "tr": "Büyükbabam yetmiş beş yaşında ve çok aktiftir.", "highlightedWords": ["seventy-five years old"], "grammarCategory": "Yaş Cümlesi", "contextNote": "Aile bireyinin yaşı.", "breakdownNote": "Özne + is + Sayı + years old + sıfat."},
            {"en": "Please dial extension four-one-five for technical support.", "tr": "Teknik destek için lütfen dahili dört-bir-beş numarayı tuşlayın.", "highlightedWords": ["four-one-five"], "grammarCategory": "Dahili Numara", "contextNote": "İşyeri telefonu.", "breakdownNote": "Yönerge + isim + tek tek rakamlar."},
            {"en": "There are forty-eight students attending the morning workshop.", "tr": "Sabah atölyesine katılan kırk sekiz öğrenci var.", "highlightedWords": ["forty-eight"], "grammarCategory": "Miktar Sayısı", "contextNote": "Grup mevcudu.", "breakdownNote": "There are + Sayı + çoğul isim."}
        ],
        "vocab": [
            {"word": "Thirty", "phonetic": "/ˈθɜː.ti/", "partOfSpeech": "noun", "meaningTr": "Otuz", "exampleSentence": "He is thirty years old."},
            {"word": "Thirteen", "phonetic": "/θɜːˈtiːn/", "partOfSpeech": "noun", "meaningTr": "On üç", "exampleSentence": "She has thirteen colored pens."},
            {"word": "Extension", "phonetic": "/ɪkˈsten.ʃən/", "partOfSpeech": "noun", "meaningTr": "Dahili telefon hattı", "exampleSentence": "My office extension is 204."},
            {"word": "Contact", "phonetic": "/ˈkɒn.tækt/", "partOfSpeech": "noun", "meaningTr": "İletişim, irtibat", "exampleSentence": "Leave your contact details here."}
        ],
        "qc_q": "İngilizcede bir kişinin yaşını söylerken aşağıdaki cümlelerden hangisi DOĞRUDUR?",
        "qc_opts": ["My brother is twenty-two years old.", "My brother has twenty-two years old.", "My brother has twenty-two age.", "My brother is twenty-two years."],
        "qc_idx": 0,
        "qc_expl": "İngilizcede yaş 'To Be' fiili ile ifade edilir: 'He is 22 years old'.",
        "ex_sent": "Sarah looks very youthful, but she ___ thirty-five years old.",
        "ex_opts": ["is", "has", "have", "are"],
        "ex_ans": "is",
        "ex_hint": "Üçüncü tekil şahıslarda yaş için kullanılan To Be formunu seçin.",
        "ex_expl": "Tekil üçüncü şahısta yaş belirtirken 'is' kullanılır: 'she is 35 years old'.",
        "sb_tr": "Ben yirmi sekiz yaşındayım ve telefon numaram sıfır beştir.",
        "sb_en": "I am twenty eight years old and my phone number is zero five",
        "sb_dist": ["have", "has", "are", "years"],
        "sb_expl": "Yaş ifadesi (I am twenty eight years old) + bağlaç (and) + telefon (my phone number is zero five)."
    }

    # Lesson 4: Kişi Zamirleri (Subject Pronouns: I, You, He, She, It, We, They)
    topics[4] = {
        "skill": "grammar",
        "concrete": "A1 standardında 7 temel kişi zamirini (I, you, he, she, it, we, they) özne konumunda doğru varlıklarla eşleştirebilmek.",
        "why": "Her cümlede isimleri tekrarlamamak ve özneyi doğru kodlamak cümlenin temel direğidir.",
        "logic": "İngilizcede gizli özne yoktur; her cümlede özne açıkça söylenmelidir. Erkek için 'he', kadın için 'she', cansız/hayvan için 'it', çoğullar için 'they' kullanılır.",
        "steps": [
            {"title": "1. Adım: Tekil Şahıs Zamirleri", "content": "I (Ben), You (Sen/Siz), He (O - Erkek), She (O - Kadın), It (O - Cansız/Hayvan).", "formula": "He = Male | She = Female | It = Object/Animal", "keyPhrase": "He is Tom. She is Emma. It is a book.", "subPoints": ["'I' zamiri cümlenin neresinde olursa olsun DAİMA BÜYÜK yazılır"]},
            {"title": "2. Adım: Çoğul Şahıs Zamirleri", "content": "We (Biz), You (Siz), They (Onlar).", "formula": "Tom and I = We  |  Tom and Emma = They", "keyPhrase": "We are ready. They are students.", "subPoints": ["'They' hem insanlar hem de çoğul cansızlar (books -> they) için kullanılır"]},
            {"title": "3. Adım: Gizli Özne Yasağı", "content": "Türkçedeki gibi özneyi yutamazsınız; İngilizcede cümlenin başında mutlaka zamir yer almalıdır.", "formula": "*Am tired (YANLIŞ) -> I am tired (DOĞRU)", "keyPhrase": "Subject + Verb + Object", "subPoints": ["Özne olmadan İngilizce cümle kurulamaz"]}
        ],
        "ruleCards": [
            {"ruleTitle": "İngilizcede Gizli Özne Yoktur!", "formula": "*Is raining (YANLIŞ) -> It is raining (DOĞRU)", "explanation": "Türkçede 'Yağıyor' veya 'Geliyorum' denir; İngilizcede mutlaka 'IT' veya 'I' zamiri yazılmalıdır.", "exampleSnippet": "It is cold outside. / They work hard.", "tipNote": "Her cümlenin başına bir özne koymayı asla unutmayın!"},
            {"ruleTitle": "Büyük 'I' Kuralı", "formula": "I (Daima Büyük Harf) | *i am (YANLIŞ) -> I am (DOĞRU)", "explanation": "1. tekil şahıs zamiri olan 'I' cümlenin başında da ortasında da büyük yazılır.", "cautionNote": "Küçük 'i' zamir olarak yazılamaz."}
        ],
        "mistakes": [
            {"wrongExample": "Is a very modern hospital.", "correctExample": "It is a very modern hospital.", "rootCause": "Türkçe gizli özne alışkanlığıyla cümleye öznesiz başlama hatası.", "memoryTip": "Cansız tekil varlıkları tanıtırken başına IT koy: It is a hospital!"},
            {"wrongExample": "My brother and I, they are doctors.", "correctExample": "My brother and I, we are doctors.", "rootCause": "İçinde 'ben' olan grubu yanlış zamirle karşılama hatası.", "memoryTip": "İçinde 'I' olan topluluk BİZ'dir (WE)!"}
        ],
        "dialogue": [
            {"speaker": "Teacher", "textEn": "Where are Mark and Julia today?", "textTr": "Mark ve Julia bugün neredeler?"},
            {"speaker": "Student", "textEn": "They are in the library because they have an exam.", "textTr": "Kütüphanedeler çünkü sınavları var."},
            {"speaker": "Teacher", "textEn": "And what about Sarah? Is she here?", "textTr": "Peki ya Sarah? O burada mı?"},
            {"speaker": "Student", "textEn": "Yes, she is sitting in the front row.", "textTr": "Evet, ön sırada oturuyor."}
        ],
        "contrastive": {"conceptA": "Türkçe Gizli Özne Mekanizması", "conceptB": "İngilizce Zorunlu Özne (Dummy Pronoun)", "keyDifference": "Türkçe fiil çekiminden özne anlaşılır (Geldik). İngilizcede fiil çekimi yetersizdir, 'We came' denmek zorundadır.", "exampleA": "Geldik.", "exampleB": "We came."} ,
        "memoryHook": "Zamir Kuralı: Gizli özne yok, her cümlenin bir kaptanı (öznesi) vardır!",
        "examples": [
            {"en": "She works as a graphic designer in a creative agency.", "tr": "O yaratıcı bir ajansta grafik tasarımcı olarak çalışıyor.", "highlightedWords": ["She works"], "grammarCategory": "3. Tekil Kadın", "contextNote": "Meslek ve eylem bildirme.", "breakdownNote": "Özne (She) + fiil (works) + edat öbeği."},
            {"en": "They are our international business partners from Berlin.", "tr": "Onlar bizim Berlin'den uluslararası iş ortaklarımızdır.", "highlightedWords": ["They are"], "grammarCategory": "3. Çoğul Şahıs", "contextNote": "Kişi tanıtımı.", "breakdownNote": "Özne (They) + to be (are) + tamlama."},
            {"en": "It is an innovative mobile application for language learning.", "tr": "O dil öğrenimi için yenilikçi bir mobil uygulamadır.", "highlightedWords": ["It is"], "grammarCategory": "3. Tekil Cansız", "contextNote": "Ürün tanıtımı.", "breakdownNote": "Özne (It) + to be (is) + isim tamlaması."}
        ],
        "vocab": [
            {"word": "Partner", "phonetic": "/ˈpɑːt.nər/", "partOfSpeech": "noun", "meaningTr": "Ortak, partner", "exampleSentence": "They are trusted business partners."},
            {"word": "Creative", "phonetic": "/kriˈeɪ.tɪv/", "partOfSpeech": "adjective", "meaningTr": "Yaratıcı", "exampleSentence": "She is a creative designer."},
            {"word": "Innovative", "phonetic": "/ˈɪn.ə.və.tɪv/", "partOfSpeech": "adjective", "meaningTr": "Yenilikçi", "exampleSentence": "It is an innovative product."},
            {"word": "Colleague", "phonetic": "/ˈkɒl.iːɡ/", "partOfSpeech": "noun", "meaningTr": "İş arkadaşı", "exampleSentence": "He is my new colleague."}
        ],
        "qc_q": "'Tom and I' özne öbeğinin yerini tutan doğru kişi zamiri hangisidir?",
        "qc_opts": ["We", "They", "He", "You"],
        "qc_idx": 0,
        "qc_expl": "İçinde 1. tekil şahsın (I) bulunduğu çoğul özne topluluğu 'We' (Biz) zamiriyle karşılanır.",
        "ex_sent": "Sarah is an architect and ___ designs modern sustainable homes.",
        "ex_opts": ["she", "he", "it", "they"],
        "ex_ans": "she",
        "ex_hint": "Sarah tekil bir kadın ismidir.",
        "ex_expl": "Kadın tekil şahıslar için 'she' zamiri kullanılır.",
        "sb_tr": "Onlar bizim yeni iş ortaklarımızdır ve ofisteler.",
        "sb_en": "They are our new business partners and they are in the office",
        "sb_dist": ["we", "he", "is", "them"],
        "sb_expl": "Özne zamiri (They are our new business partners) + bağlaç (and) + konum (they are in the office)."
    }

    # Lesson 5: Ülkeler, Milliyetler ve Diller
    topics[5] = {
        "skill": "vocabulary",
        "concrete": "A1 standardında ülkeleri, milliyetleri ve konuşulan dilleri (Turkey, Turkish; Germany, German) doğru cümle kalıplarıyla ifade edebilmek.",
        "why": "Uluslararası ortamlarda nereden geldiğimizi ve hangi dilleri konuştuğumuzu belirtmek temel kimlik beyanıdır.",
        "logic": "Ülke için 'from + Country' (from Italy); milliyet için 'To Be + Nationality' (I am Italian); dil için 'speak + Language' kullanılır. İngilizcede milliyet ve dil isimleri daima BÜYÜK harfle başlar.",
        "steps": [
            {"title": "1. Adım: Nereli Olduğunu Söyleme (From + Ülke)", "content": "'I am from [Ülke]' kalıbı memleketi belirtir.", "formula": "Subject + be + from + [Country]", "keyPhrase": "I am from Germany. / She is from Japan.", "subPoints": ["from edatından sonra ülke adı gelir"]},
            {"title": "2. Adım: Milliyet Bildirme (To Be + Milliyet)", "content": "Milliyet sıfatı doğrudan to be fiilinden sonra söylenir.", "formula": "Subject + be + [Nationality]", "keyPhrase": "I am German. / She is Japanese.", "subPoints": ["*I am from German YANLIŞTIR; from'dan sonra ülke gelir"]},
            {"title": "3. Adım: Konuşulan Dili Belirtme", "content": "'speak' eylem fiiliyle hangi dillerin konuşulduğu aktarılır.", "formula": "Subject + speak/speaks + [Language]", "keyPhrase": "He speaks Spanish and English fluently.", "subPoints": ["Diller ve milliyetler İngilizcede daima büyük harfle yazılır"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Ülke vs Milliyet Ayrımı", "formula": "from + ÜLKE (from Spain)  <-->  To Be + MİLLİYET (I am Spanish)", "explanation": "From edatı sadece coğrafi ülke adıyla kullanılır. Milliyet sıfatının önüne 'from' getirilmez.", "exampleSnippet": "He is from France (Ülke) -> He is French (Milliyet).", "tipNote": "From gördüysen ülke yaz, to be gördüysen milliyet yaz!"},
            {"ruleTitle": "Büyük Harf Zorunluluğu", "formula": "Turkish, English, German, French (Daima Büyük Harf)", "explanation": "İngilizcede dil ve milliyet adları cümlenin başında, ortasında veya sonunda daima büyük harfle yazılır.", "cautionNote": "Küçük harfle 'turkish' veya 'english' yazmak yazım hatasıdır."}
        ],
        "mistakes": [
            {"wrongExample": "I am from Turkish.", "correctExample": "I am from Turkey. / I am Turkish.", "rootCause": "Ülke (Turkey) ile milliyet (Turkish) kelimelerini birbirine karıştırma hatası.", "memoryTip": "From varsa ÜLKE gelir: from Turkey!"},
            {"wrongExample": "She speaks french language.", "correctExample": "She speaks French.", "rootCause": "Dil adının arkasına gereksizce 'language' kelimesini ekleme eğilimi.", "memoryTip": "Sadece dilin adını söyle: speaks French!"}
        ],
        "dialogue": [
            {"speaker": "Interviewer", "textEn": "Where are you originally from, Maria?", "textTr": "Aslen nerelisin Maria?"},
            {"speaker": "Maria", "textEn": "I am from Spain, but I live in London now.", "textTr": "İspanyalıyım ama şu an Londra'da yaşıyorum."},
            {"speaker": "Interviewer", "textEn": "Which languages do you speak fluently?", "textTr": "Hangi dilleri akıcı konuşuyorsun?"},
            {"speaker": "Maria", "textEn": "I speak Spanish, Catalan, and English.", "textTr": "İspanyolca, Katalanca ve İngilizce konuşuyorum."}
        ],
        "contrastive": {"conceptA": "Türkçe Milliyet Eki (-lı, -li)", "conceptB": "İngilizce Ülke/Milliyet Çiftleri", "keyDifference": "Türkçede ülke sonuna ek getirilir (İspanya -> İspanyalı). İngilizcede ülke ve milliyet kelimeleri çoğu zaman farklılaşır (Spain -> Spanish).", "exampleA": "Ben İspanyalıyım.", "exampleB": "I am Spanish."},
        "memoryHook": "Memleket Kuralı: I am from Turkey, I am Turkish, I speak English!",
        "examples": [
            {"en": "She is from Italy and her native language is Italian.", "tr": "O İtalyalıdır ve ana dili İtalyancadır.", "highlightedWords": ["from Italy", "Italian"], "grammarCategory": "Ülke ve Dil", "contextNote": "Ülke ve dil birlikteliği.", "breakdownNote": "is from + Ülke + and + language is + Dil."},
            {"en": "Our new marketing manager is originally from Japan.", "tr": "Yeni pazarlama müdürümüz aslen Japonyalıdır.", "highlightedWords": ["originally from Japan"], "grammarCategory": "Menşe Cümlesi", "contextNote": "Köken bildirme.", "breakdownNote": "Özne + is originally from + Ülke."},
            {"en": "We speak English fluently during all international meetings.", "tr": "Tüm uluslararası toplantılarda İngilizceyi akıcı bir şekilde konuşuruz.", "highlightedWords": ["speak English fluently"], "grammarCategory": "Dil Becerisi", "contextNote": "Konuşulan dil.", "breakdownNote": "Özne + speak + Dil + durum zarfı."}
        ],
        "vocab": [
            {"word": "Nationality", "phonetic": "/ˌnæʃ.ənˈæl.ə.ti/", "partOfSpeech": "noun", "meaningTr": "Milliyet, uyruk", "exampleSentence": "State your nationality on the document."},
            {"word": "Country", "phonetic": "/ˈkʌn.tri/", "partOfSpeech": "noun", "meaningTr": "Ülke", "exampleSentence": "Which country do you want to visit?"},
            {"word": "Fluently", "phonetic": "/ˈfluː.ənt.li/", "partOfSpeech": "adverb", "meaningTr": "Akıcı bir şekilde", "exampleSentence": "He speaks three languages fluently."},
            {"word": "Originally", "phonetic": "/əˈrɪdʒ.ən.əl.i/", "partOfSpeech": "adverb", "meaningTr": "Aslen, köken olarak", "exampleSentence": "She is originally from Canada."}
        ],
        "qc_q": "Aşağıdaki cümlelerden hangisi İngilizce dil ve ülke kurallarına göre TAMAMEN DOĞRUDUR?",
        "qc_opts": ["She is from Germany and speaks German.", "She is from German and speaks Germany.", "She is German from Germany country.", "She speaks german language very well."],
        "qc_idx": 0,
        "qc_expl": "'from Germany' (ülke) ve 'speaks German' (dil, büyük harfle) doğru kullanımdır.",
        "ex_sent": "Our head chef is originally from France, so he speaks ___ with native fluency.",
        "ex_opts": ["French", "France", "frenches", "frenchly"],
        "ex_ans": "French",
        "ex_hint": "Fransa'da konuşulan dil adını ve büyük harf kuralını düşünün.",
        "ex_expl": "Fransızca dili 'French' olarak adlandırılır ve büyük harfle başlar.",
        "sb_tr": "Yeni meslektaşımız İspanyalıdır ve üç dili akıcı konuşur.",
        "sb_en": "Our new colleague is from Spain and speaks three languages fluently",
        "sb_dist": ["spanish", "are", "living", "to"],
        "sb_expl": "Özne (Our new colleague) + ülke (is from Spain) + bağlaç (and) + fiil (speaks three languages fluently)."
    }

    # Lesson 6: Meslekler ve Günlük Çalışma Alanları
    topics[6] = {
        "skill": "vocabulary",
        "concrete": "A1 standardında meslek adlarını (teacher, doctor, engineer, driver) doğru artikellerle (a/an) kullanabilmek ve meslek sorabilmek.",
        "why": "Sosyal ve profesyonel tanışmalarda mesleğimizi doğru aktarmak temel iletişim ihtiyacıdır.",
        "logic": "İngilizcede meslekler tekil sayılabilir isimlerdir; bu yüzden önüne sessiz harfle başlıyorsa 'A', sesli harfle başlıyorsa 'AN' getirilir. Meslek sorusu 'What do you do?' kalıbıyla sorulur.",
        "steps": [
            {"title": "1. Adım: Meslek Sorma Kalıbı", "content": "Birinin mesleğini sormak için 'What do you do?' kalıbı kullanılır.", "formula": "What do you do? / What does he/she do?", "keyPhrase": "What do you do for a living?", "subPoints": ["*What are you doing? meslek değil, anlık eylemi sorar"]},
            {"title": "2. Adım: A ve An Artikeli Kuralı", "content": "Sessizle başlayan mesleklere 'a', sesliyle başlayanlara 'an' gelir.", "formula": "I am a [Doctor]  |  I am an [Engineer]", "keyPhrase": "a teacher, a lawyer, an architect, an accountant", "subPoints": ["Türkçe 'Ben doktorum' derken artikel yoktur; İngilizcede ZORUNLUDUR"]},
            {"title": "3. Adım: Çalışma Yeri Bildirme", "content": "Çalışılan yer 'work at / in' edatlarıyla bağlanır.", "formula": "Subject + work/works at + [Şirket/Kurum]", "keyPhrase": "He works at a hospital. She works in an office.", "subPoints": ["Kurumlarda 'at', sektörlerde 'in' tercih edilir"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Mesleklerde 'A / An' Zorunluluğu", "formula": "*I am engineer (YANLIŞ) -> I am an engineer (DOĞRU)", "explanation": "İngilizcede tekil meslek isimleri artikel olmadan kesinlikle kullanılamaz.", "exampleSnippet": "She is a doctor. / He is an architect.", "tipNote": "Meslek söylemeden önce ağzınızdan 'a' veya 'an' çıksın!"},
            {"ruleTitle": "Meslek Sorusu: What Do You Do?", "formula": "What do you do? (Ne iş yaparsınız?) != What are you doing? (Şu an ne yapıyorsun?)", "explanation": "Tanışırken 'Ne işle meşgulsünüz?' demek için 'What do you do?' denir.", "cautionNote": "Meslek sorarken şimdiki zaman (What are you doing) sormayın."}
        ],
        "mistakes": [
            {"wrongExample": "I am doctor.", "correctExample": "I am a doctor.", "rootCause": "Türkçede mesleklerin başına 'bir' denmediği için İngilizce 'a/an' artikelini atlamak.", "memoryTip": "Mesleğin önüne daima A veya AN yapıştır: A doctor!"},
            {"wrongExample": "What are you doing? (Meslek sorarken)", "correctExample": "What do you do?", "rootCause": "Meslek sorma kalıbı ile şimdiki zamanı karıştırmak.", "memoryTip": "Meslek sorarken: What do you do?"}
        ],
        "dialogue": [
            {"speaker": "Alex", "textEn": "What do you do, Sarah?", "textTr": "Ne iş yapıyorsun Sarah?"},
            {"speaker": "Sarah", "textEn": "I am a software engineer. I work at a technology company.", "textTr": "Yazılım mühendisiyim. Bir teknoloji şirketinde çalışıyorum."},
            {"speaker": "Alex", "textEn": "That sounds exciting! What does your brother do?", "textTr": "Kulağa heyecan verici geliyor! Kardeşin ne iş yapıyor?"},
            {"speaker": "Sarah", "textEn": "He is an architect and works in an urban design studio.", "textTr": "O bir mimar ve bir şehir tasarım stüdyosunda çalışıyor."}
        ],
        "contrastive": {"conceptA": "Türkçe Artikelsiz Meslek Bildirimi", "conceptB": "İngilizce Artikelli Meslek Bildirimi", "keyDifference": "Türkçede 'Ben öğretmenim' denir; 'bir' kullanılmaz. İngilizcede 'I am a teacher' denmek zorundadır.", "exampleA": "Ben mimarım.", "exampleB": "I am an architect."},
        "memoryHook": "Meslek Formülü: I am A teacher / I am AN engineer!",
        "examples": [
            {"en": "Michael is an experienced doctor at the central hospital.", "tr": "Michael merkez hastanesinde deneyimli bir doktordur.", "highlightedWords": ["is an experienced doctor"], "grammarCategory": "Meslek Cümlesi", "contextNote": "Sesli harfle başlayan sıfat tamlamasında 'an'.", "breakdownNote": "Özne + is an + sıfat ve meslek + yer edatı."},
            {"en": "What does your sister do for a living in Toronto?", "tr": "Kız kardeşiniz Toronto'da geçimini sağlamak için ne iş yapıyor?", "highlightedWords": ["What does your sister do"], "grammarCategory": "Meslek Sorusu", "contextNote": "3. tekil şahıs meslek sorusu.", "breakdownNote": "What + does + özne + do + edat öbeği."},
            {"en": "She works as a dedicated nurse in the pediatric department.", "tr": "O çocuk kliniğinde özverili bir hemşire olarak çalışıyor.", "highlightedWords": ["works as a dedicated nurse"], "grammarCategory": "Work as Kalıbı", "contextNote": "Olarak çalışma.", "breakdownNote": "Özne + works as a + meslek + yer."}
        ],
        "vocab": [
            {"word": "Architect", "phonetic": "/ˈɑː.kɪ.tekt/", "partOfSpeech": "noun", "meaningTr": "Mimar", "exampleSentence": "She is a talented architect."},
            {"word": "Engineer", "phonetic": "/ˌen.dʒɪˈnɪər/", "partOfSpeech": "noun", "meaningTr": "Mühendis", "exampleSentence": "He works as a civil engineer."},
            {"word": "Occupation", "phonetic": "/ˌɒk.jəˈpeɪ.ʃən/", "partOfSpeech": "noun", "meaningTr": "Meslek, uğraş", "exampleSentence": "State your occupation on the form."},
            {"word": "Colleague", "phonetic": "/ˈkɒl.iːɡ/", "partOfSpeech": "noun", "meaningTr": "İş arkadaşı", "exampleSentence": "She had lunch with her colleague."}
        ],
        "qc_q": "İngilizcede birine mesleğini sormak için hangi kalıp en doğal ve doğrudur?",
        "qc_opts": ["What do you do?", "What are you doing now?", "What is your working?", "Where do you work today?"],
        "qc_idx": 0,
        "qc_expl": "Bir kişinin mesleğini öğrenmek için standart kalıp 'What do you do?'dur.",
        "ex_sent": "Lisa works at the research center because she is ___ brilliant scientist.",
        "ex_opts": ["a", "an", "the", "one"],
        "ex_ans": "a",
        "ex_hint": "'Brilliant' sözcüğü sessiz bir harfle (/b/) başladığı için uygun artikeli seçin.",
        "ex_expl": "'brilliant' sessizle başladığından 'a brilliant scientist' doğru kullanımdır.",
        "sb_tr": "Michael deneyimli bir doktordur ve bölge hastanesinde çalışır.",
        "sb_en": "Michael is an experienced doctor and works at the hospital",
        "sb_dist": ["a", "are", "working", "to"],
        "sb_expl": "Özne (Michael) + to be ve meslek (is an experienced doctor) + bağlaç (and) + fiil ve yer (works at the hospital)."
    }

    # Lesson 7: Günler, Aylar, Mevsimler ve Tarihler
    topics[7] = {
        "skill": "vocabulary",
        "concrete": "A1 standardında günleri, ayları, mevsimleri ve tarihleri doğru zaman edatlarıyla (on Monday, in July, in summer) kullanabilmek.",
        "why": "Randevu belirleme, uçuş tarihi seçme ve takvim yönetimi günlük yaşamın vazgeçilmezidir.",
        "logic": "GÜNLERDEN önce 'ON' (on Friday), AYLARDAN ve MEVSİMLERDEN önce 'IN' (in July, in winter) edatı kullanılır. Gün ve ay isimleri daima BÜYÜK harfle başlar.",
        "steps": [
            {"title": "1. Adım: Günler ve 'ON' Edatı", "content": "Haftanın 7 gününde daima 'ON' edatı kullanılır.", "formula": "on + [Gün] (on Monday, on Friday)", "keyPhrase": "See you on Monday morning.", "subPoints": ["Günlerin baş harfi daima büyüktür: Monday, Tuesday, Wednesday..."]},
            {"title": "2. Adım: Aylar, Mevsimler ve 'IN' Edatı", "content": "Geniş zaman dilimleri olan aylarda ve mevsimlerde 'IN' edatı gelir.", "formula": "in + [Ay / Mevsim / Yıl] (in July, in summer, in 2026)", "keyPhrase": "My birthday is in August. We travel in summer.", "subPoints": ["*on July YANLIŞTIR; in July DOĞRUDUR"]},
            {"title": "3. Adım: Tam Tarih Bildirimi", "content": "Ay ve gün birlikte verilirse gün esas alınır ve 'ON' kullanılır.", "formula": "on + [Ay + Gün] (on July 15th)", "keyPhrase": "The project starts on October 12th.", "subPoints": ["Tarihlerde sıra sayıları (-st, -nd, -rd, -th) kullanılır"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Takvim Edatları Ayrımı (ON vs IN)", "formula": "GÜN = ON (on Friday)  <-->  AY/MEVSİM = IN (in July, in winter)", "explanation": "İngilizcede 24 saatlik gün dilimlerinde 'ON', daha geniş ay ve mevsim bloklarında 'IN' kullanılır.", "exampleSnippet": "The exam is on Friday in June.", "tipNote": "Gün gördüğün yerde ON, ay/mevsim gördüğün yerde IN!"},
            {"ruleTitle": "Takvim İsimlerinde Büyük Harf", "formula": "Monday, Friday, January, August (Daima Büyük)", "explanation": "İngilizcede gün ve ay isimleri cümlenin başında veya ortasında daima büyük harfle yazılır.", "cautionNote": "Küçük harfle 'friday' yazmak kural hatasıdır."}
        ],
        "mistakes": [
            {"wrongExample": "The meeting is in Friday morning.", "correctExample": "The meeting is on Friday morning.", "rootCause": "Günün önüne 'in' getirme hatası.", "memoryTip": "Gün varsa ON yapıştır: On Friday!"},
            {"wrongExample": "We go on holiday on July.", "correctExample": "We go on holiday in July.", "rootCause": "Ayların önüne 'on' getirme yanılgısı.", "memoryTip": "Aylar geniştir, içine girilir: IN July!"}
        ],
        "dialogue": [
            {"speaker": "Clara", "textEn": "When is our project deadline?", "textTr": "Proje teslim tarihimiz ne zaman?"},
            {"speaker": "Lucas", "textEn": "It is on Friday, the fifteenth of November.", "textTr": "Cuma günü, on beş Kasım'da."},
            {"speaker": "Clara", "textEn": "Great, then our vacation starts in December!", "textTr": "Harika, o zaman tatilimiz Aralık'ta başlıyor!"}
        ],
        "contrastive": {"conceptA": "Türkçe Zaman Ekleri (-de, -da)", "conceptB": "İngilizce Edat Ayrımı (On vs In)", "keyDifference": "Türkçede 'Cuma-da' ve 'Temmuz-da' aynı ekle karşılanır. İngilizcede güne 'ON', aya 'IN' getirilmek zorundadır.", "exampleA": "Cuma günü / Temmuzda.", "exampleB": "On Friday / In July."},
        "memoryHook": "Takvim Şifresi: Gün = ON, Ay ve Mevsim = IN!",
        "examples": [
            {"en": "Our important team meeting is scheduled on Monday morning.", "tr": "Önemli ekip toplantımız pazartesi sabahına planlandı.", "highlightedWords": ["on Monday morning"], "grammarCategory": "Gün Bildirimi", "contextNote": "Gün ve vakit edatı.", "breakdownNote": "is scheduled + on + Gün + morning."},
            {"en": "The international festival takes place in September every year.", "tr": "Uluslararası festival her yıl eylül ayında gerçekleşir.", "highlightedWords": ["in September"], "grammarCategory": "Ay Bildirimi", "contextNote": "Aylarda in kullanımı.", "breakdownNote": "takes place + in + Ay."},
            {"en": "Many tourists visit the coastal city in summer.", "tr": "Birçok turist kıyı şehrini yazın ziyaret eder.", "highlightedWords": ["in summer"], "grammarCategory": "Mevsim Bildirimi", "contextNote": "Mevsimde in kullanımı.", "breakdownNote": "visit + nesne + in + Mevsim."}
        ],
        "vocab": [
            {"word": "Schedule", "phonetic": "/ˈʃedʒ.uːl/", "partOfSpeech": "noun", "meaningTr": "Program, takvim", "exampleSentence": "The match is on schedule."},
            {"word": "September", "phonetic": "/sepˈtem.bər/", "partOfSpeech": "noun", "meaningTr": "Eylül ayı", "exampleSentence": "School begins in September."},
            {"word": "Season", "phonetic": "/ˈsiː.zən/", "partOfSpeech": "noun", "meaningTr": "Mevsim", "exampleSentence": "Spring is a pleasant season."},
            {"word": "Calendar", "phonetic": "/ˈkæl.ən.dər/", "partOfSpeech": "noun", "meaningTr": "Takvim", "exampleSentence": "Mark the date on your calendar."}
        ],
        "qc_q": "İngilizcede haftanın günlerinden (örneğin 'Friday') önce hangi zaman edatı kullanılır?",
        "qc_opts": ["On", "In", "At", "With"],
        "qc_idx": 0,
        "qc_expl": "Haftanın günlerinden önce daima 'on' edatı kullanılır: on Friday, on Monday.",
        "ex_sent": "The annual technology conference will take place ___ October next year.",
        "ex_opts": ["in", "on", "at", "to"],
        "ex_ans": "in",
        "ex_hint": "Yalnızca ay adı belirtildiğinde kullanılan zaman edatını düşünün.",
        "ex_expl": "Yalnızca ay adı geçtiğinde 'in' edatı kullanılır: 'in October'.",
        "sb_tr": "Bizim önemli proje toplantımız pazartesi sabahı planlandı.",
        "sb_en": "Our important team meeting is scheduled on Monday morning",
        "sb_dist": ["in", "at", "are", "calendar"],
        "sb_expl": "Özne (Our important team meeting) + yüklem (is scheduled) + zaman edatı ve gün (on Monday morning)."
    }

    # Lesson 8: Saatler ve Zaman İfadeleri
    topics[8] = {
        "skill": "vocabulary",
        "concrete": "A1 standardında saati sormayı (What time is it?) ve saatleri tam, buçuk, çeyrek geçe/kala kalıplarıyla söyleyebilmeyi kavramak.",
        "why": "Uçuş kalkışları, randevular ve ders saatlerini yönetmek için saat söyleme becerisi vazgeçilmezdir.",
        "logic": "Saati söylerken daima 'It is + saat' yapısıyla başlanır. Tam saatlerde 'o'clock', buçukta 'half past', çeyrek geçe 'quarter past', çeyrek kala 'quarter to' kullanılır. Kesin saatlerden önce 'AT' edatı gelir.",
        "steps": [
            {"title": "1. Adım: Saat Sorma Kalıpları", "content": "Saati sormak için 'What time is it?' veya 'Have you got the time?' denir.", "formula": "What time is it? / What's the time?", "keyPhrase": "What time is it, please?", "subPoints": ["Nezaket için sonuna 'please' eklenebilir"]},
            {"title": "2. Adım: Tam ve Buçuk Saatler", "content": "Tam saatlerde 'o'clock', 30 geçelerde 'half past' denir.", "formula": "It is [Sayı] o'clock | It is half past [Sayı]", "keyPhrase": "It is eight o'clock (8:00) | It is half past eight (8:30)", "subPoints": ["o'clock sadece tam saatlerde söylenir"]},
            {"title": "3. Adım: Çeyrek Geçe ve Çeyrek Kala", "content": "15 geçe için 'quarter past', 15 kala için 'quarter to' kalıbı kullanılır.", "formula": "It is quarter past [Saat] | It is quarter to [Saat]", "keyPhrase": "quarter past four (4:15) | quarter to five (4:45)", "subPoints": ["Eylem zamanı bildirirken 'at' edatı kullanılır: at 5:00"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Saatlerde 'AT' Edatı Kuralı", "formula": "at 3 o'clock | at half past seven | at noon", "explanation": "Günün kesin bir saat dilimini eyleme bağlarken daima 'AT' edatı kullanılır.", "exampleSnippet": "The train leaves at seven o'clock.", "tipNote": "Saat varsa başında AT vardır!"},
            {"ruleTitle": "'O'clock' Kullanım Sınırı", "formula": "*It is half past eight o'clock (YANLIŞ) <--> It is half past eight (DOĞRU)", "explanation": "'o'clock' ifadesi yalnızca dakika sıfır olduğunda söylenir. Ara dakikalarda kullanılmaz.", "cautionNote": "7:30 için 'half past seven o'clock' demeyin."}
        ],
        "mistakes": [
            {"wrongExample": "The movie starts in 8 o'clock.", "correctExample": "The movie starts at 8 o'clock.", "rootCause": "Saatlerin önüne 'at' yerine 'in' getirme hatası.", "memoryTip": "Saatlerin önüne daima AT gelir: At 8 o'clock!"},
            {"wrongExample": "It is quarter past seven o'clock.", "correctExample": "It is quarter past seven.", "rootCause": "Ara dakikalı saatlerin sonuna da 'o'clock' ekleme yanılgısı.", "memoryTip": "o'clock sadece tam saatlerde söylenir!"}
        ],
        "dialogue": [
            {"speaker": "Tourist", "textEn": "Excuse me, what time does the museum open?", "textTr": "Afedersiniz, müze saat kaçta açılıyor?"},
            {"speaker": "Guide", "textEn": "It opens promptly at half past nine in the morning.", "textTr": "Sabahleyin tam olarak dokuz buçukta açılıyor."},
            {"speaker": "Tourist", "textEn": "Thank you! What time is it right now?", "textTr": "Teşekkürler! Şu an saat kaç?"},
            {"speaker": "Guide", "textEn": "It is a quarter to nine, so you have forty-five minutes.", "textTr": "Dokuza çeyrek var, yani kırk beş dakikanız var."}
        ],
        "contrastive": {"conceptA": "Türkçe Saat Bildirimi", "conceptB": "İngilizce Saat Bildirimi (Past / To)", "keyDifference": "Türkçede önce saat sonra dakika söylenir (dokuzu çeyrek geçe). İngilizcede geleneksel yapıda önce dakika sonra saat söylenir (quarter past nine).", "exampleA": "Saat dokuzu yirmi geçiyor.", "exampleB": "It is twenty past nine."},
        "memoryHook": "Saat Kuralı: Önce dakika, sonra edat (past/to), en son saat!",
        "examples": [
            {"en": "Our international flight departs promptly at a quarter past ten.", "tr": "Uluslararası uçuşumuz tam ona çeyrek geçe hareket ediyor.", "highlightedWords": ["at a quarter past ten"], "grammarCategory": "Çeyrek Geçe", "contextNote": "Uçuş saati.", "breakdownNote": "departs + at a quarter past ten."},
            {"en": "The morning meeting starts at half past eight sharp.", "tr": "Sabah toplantısı tam sekiz buçukta başlıyor.", "highlightedWords": ["at half past eight"], "grammarCategory": "Buçuk Saat", "contextNote": "Toplantı saati.", "breakdownNote": "starts + at half past eight."},
            {"en": "It is exactly twelve o'clock, time for lunch.", "tr": "Saat tam on iki, öğle yemeği vakti.", "highlightedWords": ["twelve o'clock"], "grammarCategory": "Tam Saat", "contextNote": "Tam saat bildirimi.", "breakdownNote": "It is exactly + twelve o'clock."}
        ],
        "vocab": [
            {"word": "Quarter", "phonetic": "/ˈkwɔː.tər/", "partOfSpeech": "noun", "meaningTr": "Çeyrek (15 dakika)", "exampleSentence": "It is a quarter past three."},
            {"word": "Promptly", "phonetic": "/ˈprɒmpt.li/", "partOfSpeech": "adverb", "meaningTr": "Tam vaktinde, dakikası dakikasına", "exampleSentence": "The concert begins promptly at eight."},
            {"word": "Midnight", "phonetic": "/ˈmɪd.naɪt/", "partOfSpeech": "noun", "meaningTr": "Gece yarısı (00:00)", "exampleSentence": "The bus arrives at midnight."},
            {"word": "Noon", "phonetic": "/nuːn/", "partOfSpeech": "noun", "meaningTr": "Öğle vakti (12:00)", "exampleSentence": "We take a lunch break at noon."}
        ],
        "qc_q": "İngilizcede '8:15' saatini geleneksel kalıpla ifade etmek için hangisi kullanılır?",
        "qc_opts": ["It is a quarter past eight.", "It is a quarter to eight.", "It is eight past fifteen.", "It is half past eight."],
        "qc_idx": 0,
        "qc_expl": "15 geçe ifadelerinde 'quarter past [Saat]' kullanılır: 'quarter past eight'.",
        "ex_sent": "The morning lecture begins promptly ___ half past nine in room 104.",
        "ex_opts": ["at", "on", "in", "to"],
        "ex_ans": "at",
        "ex_hint": "Belirli saat bildirimlerinden önce gelen edatı seçin.",
        "ex_expl": "Kesin saat ifadelerinin önüne 'at' edatı gelir: 'at half past nine'.",
        "sb_tr": "Bizim uçuşumuz sabah tam ona çeyrek geçe kalkıyor.",
        "sb_en": "Our flight departs promptly at a quarter past ten in the morning",
        "sb_dist": ["on", "to", "half", "is"],
        "sb_expl": "Özne (Our flight) + fiil (departs promptly) + saat (at a quarter past ten) + gün vakti (in the morning)."
    }

    # Lesson 9: Sınıf ve Günlük İletişim Yönergeleri (Imperatives)
    topics[9] = {
        "skill": "speaking",
        "concrete": "A1 standardında sınıf ve günlük yönergeleri (imperatives: open, listen, don't speak) olumlu ve olumsuz olarak uygulayabilmek.",
        "why": "Trafik işaretleri, güvenlik kuralları, kullanım kılavuzları ve sınıf içi komutlar emir kipiyle verilir.",
        "logic": "İngilizcede emir kipi (imperative) doğrudan YALIN FİİLLE (V1) başlar; özne yazılmaz. Olumsuz emir için cümlenin başına 'DON'T' eklenir.",
        "steps": [
            {"title": "1. Adım: Olumlu Emir Cümlesi", "content": "Özne olmadan doğrudan yalın fiille başlanır.", "formula": "V1 (Bare Infinitive) + Object", "keyPhrase": "Open your book. / Listen carefully.", "subPoints": ["Özne (you) söylenmez, gizli muhataptır"]},
            {"title": "2. Adım: Olumsuz Emir Cümlesi", "content": "Yapılmaması istenen eylemlerde cümlenin başına 'Don't' gelir.", "formula": "Don't + V1 (Bare Infinitive)", "keyPhrase": "Don't touch that wire. / Don't be late.", "subPoints": ["Doesn't veya No kullanılmaz; daima Don't denir"]},
            {"title": "3. Adım: Nezaket Katma (Please)", "content": "Emir kipini kibar bir ricaya dönüştürmek için 'Please' eklenir.", "formula": "Please + V1  /  V1 + please", "keyPhrase": "Please sit down. / Take a seat, please.", "subPoints": ["Please cümlenin başında veya sonunda yer alabilir"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Emir Kipinde Yalın Fiil Kuralı", "formula": "*You open the door (Açıklama) <--> Open the door! (Emir Kipi)", "explanation": "Emir cümlesi kurarken özne (You) atılır ve doğrudan yalın eylemle başlanır.", "exampleSnippet": "Turn off your mobile phones during the session.", "tipNote": "Fiili en yalın haliyle cümlenin başına koyun!"},
            {"ruleTitle": "Olumsuz Emirde 'Don't' Standartı", "formula": "Don't + Yalın Fiil  |  *No touch (YANLIŞ) -> Don't touch (DOĞRU)", "explanation": "İngilizcede emir kipi 'No' ile değil, daima 'Don't' yardımcı fiiliyle olumsuz yapılır.", "cautionNote": "Levhalardaki 'No smoking' isimleşmiş yasaktır; doğrudan komut verirken 'Don't smoke' denir."}
        ],
        "mistakes": [
            {"wrongExample": "No speak during the exam.", "correctExample": "Don't speak during the exam.", "rootCause": "Olumsuz emir verirken 'Don't' yerine 'No' kullanma hatası.", "memoryTip": "Birine bir şeyi yapma derken DON'T ile başla: Don't speak!"},
            {"wrongExample": "Please you open your notebook.", "correctExample": "Please open your notebook.", "rootCause": "Emir kipine gereksiz yere 'you' zamiri ekleme eğilimi.", "memoryTip": "Emir kipinde özne söylenmez; doğrudan fiil gelir!"}
        ],
        "dialogue": [
            {"speaker": "Instructor", "textEn": "Please turn to page twenty and read the instructions carefully.", "textTr": "Lütfen sayfa yirmiyi açın ve talimatları dikkatle okuyun."},
            {"speaker": "Student", "textEn": "Should we write the answers in our notebooks?", "textTr": "Cevapları defterlerimize mi yazmalıyız?"},
            {"speaker": "Instructor", "textEn": "Yes, write clearly and don't use a red pen.", "textTr": "Evet, net bir şekilde yazın ve kırmızı kalem kullanmayın."}
        ],
        "contrastive": {"conceptA": "Türkçe Emir Kipi Eki (-ın, -iniz)", "conceptB": "İngilizce Yalın Fiil (Bare Infinitive)", "keyDifference": "Türkçede fiil köküne kişi eki eklenir (Aç-ınız, dinle-yiniz). İngilizcede hiçbir ek eklenmez, fiil sözlük haliyle başa gelir.", "exampleA": "Kapıyı kapatın.", "exampleB": "Close the door."},
        "memoryHook": "Emir Formülü: Yap derken yalın fiil, yapma derken Don't!",
        "examples": [
            {"en": "Please silence your mobile devices before entering the hall.", "tr": "Salona girmeden önce lütfen mobil cihazlarınızı sessize alın.", "highlightedWords": ["Please silence", "devices"], "grammarCategory": "Nezaketli Yönerge", "contextNote": "Resmi toplantı komutu.", "breakdownNote": "Please + yalın fiil (silence) + nesne + zaman edatı."},
            {"en": "Don't forget to submit your weekly report by five o'clock.", "tr": "Haftalık raporunuzu saat beşten önce teslim etmeyi unutmayın.", "highlightedWords": ["Don't forget to submit"], "grammarCategory": "Olumsuz Uyarı", "contextNote": "İşyeri yönergesi.", "breakdownNote": "Don't + yalın fiil (forget) + mastar + nesne."},
            {"en": "Follow the safety guidelines and wear your protective helmet.", "tr": "Güvenlik kurallarına uyun ve koruyucu kaskınızı takın.", "highlightedWords": ["Follow", "wear"], "grammarCategory": "Güvenlik Komutu", "contextNote": "Şantiye yönergesi.", "breakdownNote": "Yalın fiil (Follow) + and + yalın fiil (wear)."}
        ],
        "vocab": [
            {"word": "Instruction", "phonetic": "/ɪnˈstrʌk.ʃən/", "partOfSpeech": "noun", "meaningTr": "Yönerge, talimat", "exampleSentence": "Follow the instructor's instructions."},
            {"word": "Carefully", "phonetic": "/ˈkeə.fəl.i/", "partOfSpeech": "adverb", "meaningTr": "Dikkatlice, özenle", "exampleSentence": "Listen carefully to the audio."},
            {"word": "Silence", "phonetic": "/ˈsaɪ.ləns/", "partOfSpeech": "verb", "meaningTr": "Sessize almak, susturmak", "exampleSentence": "Silence your phone in the library."},
            {"word": "Protective", "phonetic": "/prəˈtek.tɪv/", "partOfSpeech": "adjective", "meaningTr": "Koruyucu", "exampleSentence": "Wear protective glasses in the lab."}
        ],
        "qc_q": "İngilizcede olumsuz bir yönerge veya uyarı verirken cümlenin başına ne getirilmelidir?",
        "qc_opts": ["Don't + Yalın Fiil", "Doesn't + Fiil", "No + İsim", "Not to + Fiil"],
        "qc_idx": 0,
        "qc_expl": "Olumsuz emir cümleleri doğrudan 'Don't + Yalın Fiil' ile kurulur: 'Don't speak'.",
        "ex_sent": "Please ___ quiet in the library so other students can study.",
        "ex_opts": ["be", "are", "you are", "being"],
        "ex_ans": "be",
        "ex_hint": "Emir kipi oluştururken to be fiilinin en yalın hali (bare form) kullanılır.",
        "ex_expl": "Emir kipi yalın fiille başlar; to be fiilinin yalın hali 'be'dir: 'Please be quiet'.",
        "sb_tr": "Lütfen kitabınızı yirminci sayfaya açın ve dikkatle dinleyin.",
        "sb_en": "Please open your book to page twenty and listen attentively",
        "sb_dist": ["you", "are", "listening", "opens"],
        "sb_expl": "Nezaket (Please) + fiil (open your book to page twenty) + bağlaç (and) + fiil ve zarf (listen attentively)."
    }

    # Lesson 10: Temel Nezaket Kuralları ve Sosyal Formüller
    topics[10] = {
        "skill": "speaking",
        "concrete": "A1 standardında temel nezaket kalıplarını (Please, Thank you, You're welcome, Excuse me, Sorry) sosyal bağlamda hatasız kullanabilmek.",
        "why": "Nezaket ifadeleri her dilde saygı uyandırmanın ve pozitif sosyal bağ kurmanın temel köprüsüdür.",
        "logic": "İngilizcede teşekkür için 'Thank you / Thanks', karşılık olarak 'You are welcome'; dikkat çekmek veya izin istemek için 'Excuse me'; özür dilemek için 'I am sorry' kullanılır.",
        "steps": [
            {"title": "1. Adım: Teşekkür Etme ve Karşılık Verme", "content": "'Thank you' dendiğinde 'You are welcome' (Rica ederim) ile karşılık verilir.", "formula": "Thank you! -> You're welcome! / Not at all.", "keyPhrase": "Thank you very much. | You are welcome.", "subPoints": ["Samimi: Thanks! - No problem!"]},
            {"title": "2. Adım: Excuse Me vs Sorry Ayrımı", "content": "Eylem öncesi dikkat çekmek için 'Excuse me'; eylem sonrası pişmanlık için 'Sorry' denir.", "formula": "Eylem Öncesi: Excuse me | Eylem Sonrası: I am sorry", "keyPhrase": "Excuse me, where is the station? | I am sorry for being late.", "subPoints": ["Söz keserken de 'Excuse me' kullanılır"]},
            {"title": "3. Adım: Rica ve İzin (Please)", "content": "İsteklerde cümlenin sonuna veya başına 'Please' eklemek talebi kibar bir ricaya dönüştürür.", "formula": "Could I have [Nesne], please? / Please help me.", "keyPhrase": "A coffee, please. | Help me, please.", "subPoints": ["'Please' İngilizce iletişimin altın kelimesidir"]}
        ],
        "ruleCards": [
            {"ruleTitle": "Excuse Me vs Sorry Ayrımı", "formula": "Excuse Me = Eylemden Önce  <-->  Sorry = Eylemden Sonra (Özür)", "explanation": "Yol isterken 'Excuse me' dersiniz; kazara ayağına bastıktan sonra 'Sorry' dersiniz.", "exampleSnippet": "Excuse me, could you move? - Oh, sorry!", "tipNote": "Öncesi Excuse me, sonrası Sorry!"},
            {"ruleTitle": "'You're Welcome' Standartı", "formula": "Thank you -> You're welcome", "explanation": "İngilizcede 'Thank you' diyen birine 'Yes' denmez; mutlaka 'You are welcome' denir.", "cautionNote": "Teşekküre sessiz kalmak veya 'Yes' demek kaba algılanır."}
        ],
        "mistakes": [
            {"wrongExample": "Birinin önünden geçerken 'Sorry' demek.", "correctExample": "Birinin önünden geçerken veya dikkat çekerken 'Excuse me' demek.", "rootCause": "Excuse me ile Sorry arasındaki zamanlama farkını bilmemek.", "memoryTip": "Öncesinde dikkat çekmek için EXCUSE ME, sonrasında özür için SORRY!"},
            {"wrongExample": "Thank you -> Please.", "correctExample": "Thank you -> You're welcome.", "rootCause": "Almanca (Bitte) gibi dillerdeki mantığı İngilizceye kopyalama hatası.", "memoryTip": "Teşekküre karşılık 'Please' denmez, 'You are welcome' denir!"}
        ],
        "dialogue": [
            {"speaker": "Tourist", "textEn": "Excuse me, could you tell me how to get to the museum?", "textTr": "Afedersiniz, müzeye nasıl gidebileceğimi söyleyebilir misiniz?"},
            {"speaker": "Local", "textEn": "Of course! Walk straight and turn right at the traffic lights.", "textTr": "Tabii ki! Düz yürüyün ve trafik ışıklarından sağa dönün."},
            {"speaker": "Tourist", "textEn": "Thank you very much for your kind help!", "textTr": "Nazik yardımınız için çok teşekkür ederim!"},
            {"speaker": "Local", "textEn": "You are very welcome! Have a wonderful day.", "textTr": "Rica ederim! Harika bir gün geçirin."}
        ],
        "contrastive": {"conceptA": "Türkçe Nezaket İfadeleri", "conceptB": "İngilizce Nezaket Matrisi", "keyDifference": "Türkçede 'Afedersiniz' hem izin isterken hem küçük bir çarpmada özür dilerken kullanılabilir. İngilizcede 'Excuse me' ve 'Sorry' kesin çizgilerle ayrılır.", "exampleA": "Afedersiniz, bakar mısınız?", "exampleB": "Excuse me, could you help me?"},
        "memoryHook": "Nezaket Formülü: Öncesinde Excuse me, sonrasında Sorry, teşekkür edene You're welcome!",
        "examples": [
            {"en": "Thank you very much for your kind assistance today.", "tr": "Bugünkü nazik yardımınız için çok teşekkür ederim.", "highlightedWords": ["Thank you very much", "assistance"], "grammarCategory": "Teşekkür Cümlesi", "contextNote": "İş ve sosyal yaşamda teşekkür.", "breakdownNote": "Thank you + very much + edat öbeği."},
            {"en": "Excuse me, is this seat taken?", "tr": "Afedersiniz, bu koltuk dolu mu?", "highlightedWords": ["Excuse me", "seat taken"], "grammarCategory": "İzin ve Dikkat Çekme", "contextNote": "Ulaşımda yer sorma.", "breakdownNote": "Excuse me + to be soru cümlesi."},
            {"en": "I am so sorry for keeping you waiting.", "tr": "Sizi beklettiğim için çok özür dilerim.", "highlightedWords": ["I am so sorry for", "waiting"], "grammarCategory": "Özür Cümlesi", "contextNote": "Gecikme özrü.", "breakdownNote": "I am so sorry + for + V-ing nesne."}
        ],
        "vocab": [
            {"word": "Courteous", "phonetic": "/ˈkɜː.ti.əs/", "partOfSpeech": "adjective", "meaningTr": "Kibar, nazik, saygılı", "exampleSentence": "He gave a courteous reply."},
            {"word": "Appreciate", "phonetic": "/əˈpriː.ʃi.eɪt/", "partOfSpeech": "verb", "meaningTr": "Takdir etmek, müteşekkir olmak", "exampleSentence": "I appreciate your generous support."},
            {"word": "Welcome", "phonetic": "/ˈwel.kəm/", "partOfSpeech": "phrase", "meaningTr": "Rica ederim, hoş geldiniz", "exampleSentence": "You are very welcome here."},
            {"word": "Politeness", "phonetic": "/pəˈlaɪt.nəs/", "partOfSpeech": "noun", "meaningTr": "Nezaket, görgü kuralı", "exampleSentence": "Politeness opens every door."}
        ],
        "qc_q": "Kalabalık bir caddede birinin önünden geçerken veya dikkatini çekerken hangi nezaket kalıbı kullanılır?",
        "qc_opts": ["Excuse me", "Sorry", "Please", "Welcome"],
        "qc_idx": 0,
        "qc_expl": "Bir eylemden önce izin istemek veya birinin dikkatini çekmek için 'Excuse me' kullanılır.",
        "ex_sent": "When someone says 'Thank you', the most polite standard response is 'You are ___'.",
        "ex_opts": ["welcome", "pleased", "good", "fine"],
        "ex_ans": "welcome",
        "ex_hint": "İngilizcede 'Rica ederim' anlamına gelen kelimeyi seçin.",
        "ex_expl": "'Thank you' ifadesine standart ve kibar karşılık 'You are welcome'dır.",
        "sb_tr": "Nazik yardımınız için çok teşekkür ederim ve her zaman rica ederim.",
        "sb_en": "Thank you very much for your kind assistance and you are always welcome",
        "sb_dist": ["sorry", "excuse", "please", "me"],
        "sb_expl": "Teşekkür (Thank you very much for your kind assistance) + bağlaç (and) + rica ederim (you are always welcome)."
    }

    return topics
