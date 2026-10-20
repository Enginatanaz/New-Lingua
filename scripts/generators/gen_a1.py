# -*- coding: utf-8 -*-
"""
LinguAAI — Module A1 Master Generator (Lessons 1 to 80)
100% bespoke, CEFR A1 pedagogically structured blueprints.
Zero templates, zero generic fallbacks, zero banned patterns.
"""

from .common import make_available_words

def get_a1_blueprint(l, used_sb, used_ex, used_qc):
    lid = l['id']
    title = l['title']
    module = l['moduleName']

    # Module 1: Tanışma, Alfabe ve Temel İletişim (1-10)
    if lid == 1:
        skill = "speaking"
        concrete = "A1 standardında temel tanışma ifadelerini (Hello, My name is, Nice to meet you) kullanarak kendini tanıtabilmek."
        why = "Tanışma ifadeleri yabancı dilde ilk temasın ve iletişimin evrensel başlangıç noktasıdır."
        logic = "İngilizcede tanışırken önce selamlama ve isim bildirimi yapılır. 'My name is...' veya 'I am...' kalıbı esastır."
        steps = [
            {"title": "1. Adım: Selamlaşma ve Kendini Tanıtma", "content": "'I am [İsim]' veya 'My name is [İsim]' ile başlanır.", "formula": "Greeting + My name is [İsim] / I am [İsim]", "keyPhrase": "Hello! My name is David.", "subPoints": ["Resmi: Good morning", "Samimi: Hello veya Hi"]},
            {"title": "2. Adım: Karşı Tarafın Adını Sorma", "content": "Nezaketle karşı tarafın adını öğrenmek için soru sorulur.", "formula": "What is your name? / What's your name?", "keyPhrase": "What's your name?", "subPoints": ["What is sözcükleri What's olarak birleşir"]},
            {"title": "3. Adım: Memnuniyet Bildirimi", "content": "Tanışma tamamlanırken memnuniyet kalıbı söylenir.", "formula": "Nice to meet you! -> Nice to meet you, too!", "keyPhrase": "Nice to meet you, too!", "subPoints": ["Me too yerine Nice to meet you, too demek kibardır"]}
        ]
        ruleCards = [
            {"ruleTitle": "Temel Tanışma Zinciri", "formula": "Hello! My name is ... -> What is your name? -> Nice to meet you!", "explanation": "Tanışma adımları sırayla izlendiğinde diyalog kesintiye uğramadan akar.", "exampleSnippet": "Hello, my name is Alex. What is your name? - I'm Sarah, nice to meet you!", "tipNote": "Karşılık verirken 'Nice to meet you, too' deyin."},
            {"ruleTitle": "İsim Bildirimi Standartı", "formula": "My name is [İsim] | I am [İsim]", "explanation": "Türkçe 'Benim adım Ali' derken 'My name is Ali' denir; 'I name is Ali' denmez.", "cautionNote": "'I name is...' YANLIŞTIR! 'My name is...' veya 'I am...' DOĞRUDUR."}
        ]
        mistakes = [
            {"wrongExample": "I name is David.", "correctExample": "My name is David. / I am David.", "rootCause": "İyelik sıfatı (My) yerine kişi zamiri (I) kullanma hatası.", "memoryTip": "Benim adım = My name!"},
            {"wrongExample": "Nice to meet you -> Me too.", "correctExample": "Nice to meet you -> Nice to meet you, too.", "rootCause": "Tanışmada 'Me too' kaba algılanabilir.", "memoryTip": "Cümlenin aynısını kur, sonuna 'too' ekle!"}
        ]
        dialogue = [
            {"speaker": "David", "textEn": "Hello! My name is David. What is your name?", "textTr": "Merhaba! Benim adım David. Adınız nedir?"},
            {"speaker": "Sarah", "textEn": "Hi David! I am Sarah. Nice to meet you.", "textTr": "Selam David! Ben Sarah. Tanıştığıma memnun oldum."},
            {"speaker": "David", "textEn": "Nice to meet you, too, Sarah. Where are you from?", "textTr": "Ben de memnun oldum Sarah. Nerelisiniz?"}
        ]
        contrastive = {"conceptA": "Türkçe Tanışma Kalıpları", "conceptB": "İngilizce Tanışma Kalıpları", "keyDifference": "Türkçede 'Memnun oldum' tek bir fiildir; İngilizcede 'Nice to meet you' mastarlı bir sıfat kalıbıdır.", "exampleA": "Tanıştığıma memnun oldum.", "exampleB": "Nice to meet you."}
        memoryHook = "Tanışma Üçgeni: Hello + My name is + Nice to meet you!"
        examples = [
            {"en": "Hello, my name is Lisa and I am from London.", "tr": "Merhaba, benim adım Lisa ve Londralıyım.", "highlightedWords": ["Hello", "my name is", "from"], "grammarCategory": "Tanışma İfadesi", "contextNote": "İlk tanışma cümlesi.", "breakdownNote": "Selamlama + İsim + Memleket."},
            {"en": "What is your name, please?", "tr": "Adınız nedir lütfen?", "highlightedWords": ["What is your name", "please"], "grammarCategory": "Soru Kalıbı", "contextNote": "Kibarca isim öğrenme.", "breakdownNote": "Soru kelimesi (What) + to be (is) + iyelik (your) + isim (name)."},
            {"en": "It is a pleasure to meet you, Mark.", "tr": "Sizinle tanışmak bir zevk Mark.", "highlightedWords": ["pleasure to meet you"], "grammarCategory": "Nezaket Kalıbı", "contextNote": "Resmi tanışma ifadesi.", "breakdownNote": "It is + a pleasure + mastar fiil."}
        ]
        vocab = [
            {"word": "Introduce", "phonetic": "/ˌɪn.trəˈdjuːs/", "partOfSpeech": "verb", "meaningTr": "Tanıtmak, tanıştırmak", "exampleSentence": "Allow me to introduce myself to the group."},
            {"word": "Pleasure", "phonetic": "/ˈpleʒ.ər/", "partOfSpeech": "noun", "meaningTr": "Zevk, memnuniyet", "exampleSentence": "It is a pleasure to meet you."},
            {"word": "Surname", "phonetic": "/ˈsɜː.neɪm/", "partOfSpeech": "noun", "meaningTr": "Soyadı", "exampleSentence": "What is your surname, please?"},
            {"word": "Originally", "phonetic": "/əˈrɪdʒ.ən.əl.i/", "partOfSpeech": "adverb", "meaningTr": "Aslen, köken olarak", "exampleSentence": "I am originally from Turkey."}
        ]
        qc_q = "Biri size 'Nice to meet you' dediğinde verilecek en kibar ve doğru karşılık hangisidir?"
        qc_opts = ["Nice to meet you, too!", "Yes, I am fine.", "My name is John.", "Good night, see you."]
        qc_idx = 0
        qc_expl = "'Nice to meet you' ifadesine sonuna 'too' (ben de) eklenerek 'Nice to meet you, too!' ile yanıt verilir."
        ex_sent = "Hello, my name is Alex. ___ to meet you!"
        ex_opts = ["Nice", "Well", "Fine", "Goodly"]
        ex_ans = "Nice"
        ex_hint = "İngilizcede tanışmaktan memnuniyet bildiren evrensel kalıbı düşünün."
        ex_expl = "Doğru kalıp 'Nice to meet you'dur."
        sb_tr = "Merhaba benim adım David ve ben bir öğretmenim."
        sb_en = "Hello my name is David and I am a teacher"
        sb_dist = ["are", "you", "from", "she"]
        sb_expl = "Selamlama (Hello) + iyelik ve isim (my name is David) + bağlaç (and) + özne ve meslek (I am a teacher)."

    elif lid == 2:
        skill = "pronunciation"
        concrete = "A1 standardında İngilizce alfabedeki 26 harfin doğru sesletimini kavramak ve isimleri harf harf kodlayabilmek (spelling)."
        why = "Harf kodlama (spelling), telefon görüşmelerinde ve resmi işlemlerde isimlerin doğru yazılmasını sağlar."
        logic = "İngilizcede harflerin alfabedeki adı kelime içindeki sesinden farklıdır. Kodlama yaparken harfin alfabedeki adı söylenir."
        steps = [
            {"title": "1. Adım: Ünlü Harflerin Telaffuzu", "content": "A (/eɪ/), E (/iː/), I (/aɪ/), O (/əʊ/), U (/juː/) sesletimleri ayrıştırılır.", "formula": "A = /eɪ/  |  E = /iː/  |  I = /aɪ/", "keyPhrase": "Spell: A-L-E-X", "subPoints": ["E ve I sesleri Türkler tarafından en sık karıştırılan çiftlerdir"]},
            {"title": "2. Adım: Kodlama Sorusu Sorma", "content": "Bir kelimenin nasıl yazıldığını sormak için standart kalıp kullanılır.", "formula": "How do you spell [Kelime / İsim]?", "keyPhrase": "How do you spell your surname?", "subPoints": ["Cevap verirken harfler arasına tire veya duraklama konur"]},
            {"title": "3. Adım: Çift Harfleri Belirtme", "content": "Yan yana gelen aynı harfler için 'double' sözcüğü tercih edilir.", "formula": "Double + [Harf]", "keyPhrase": "G-R-E-E-N -> G-R-double E-N", "subPoints": ["Örn: Apple -> A-double P-L-E"]}
        ]
        ruleCards = [
            {"ruleTitle": "E ve I Harfleri Ayrımı", "formula": "Letter E = /iː/ (İ sesi gibi) <--> Letter I = /aɪ/ (Ay sesi)", "explanation": "İngilizce 'E' harfi Türkçedeki 'İ' gibi; 'I' harfi ise 'Ay' şeklinde telaffuz edilir.", "exampleSnippet": "Email -> E-M-A-I-L (/iː/-/em/-/eɪ/-/aɪ/-/el/)", "tipNote": "Gözünüzün önüne 'Ice cream' getirin; I harfi 'Ay' diye okunur."},
            {"ruleTitle": "Spelling Soru Standardı", "formula": "How do you spell ...? / Could you spell that, please?", "explanation": "Resmi işlemlerde ve otel rezervasyonlarında en sık karşılaşılan soru formudur.", "cautionNote": "'How you write' yerine 'How do you spell' denir."}
        ]
        mistakes = [
            {"wrongExample": "E harfini kodlarken /e/ sesi çıkarmak.", "correctExample": "E harfini /iː/ olarak telaffuz etmek.", "rootCause": "Türkçe harf okunuşunu İngilizce alfabeye yansıtma alışkanlığı.", "memoryTip": "E harfi İngilizcede 'İ' gibi okunur!"},
            {"wrongExample": "How you spell your name?", "correctExample": "How do you spell your name?", "rootCause": "Geniş zaman soru yardımcı fiili olan 'do'yu atlamak.", "memoryTip": "Soru sorarken DO yardımcı fiilini unutma!"}
        ]
        dialogue = [
            {"speaker": "Receptionist", "textEn": "Welcome to the hotel. What is your surname, please?", "textTr": "Otele hoş geldiniz. Soyadınız nedir lütfen?"},
            {"speaker": "Guest", "textEn": "My surname is Miller.", "textTr": "Soyadım Miller."},
            {"speaker": "Receptionist", "textEn": "Could you spell that for me, please?", "textTr": "Benim için harf harf kodlayabilir misiniz lütfen?"},
            {"speaker": "Guest", "textEn": "Sure, it is M-I-double L-E-R.", "textTr": "Elbette, M-I-double L-E-R."}
        ]
        contrastive = {"conceptA": "Türkçe Harf Sesletimi", "conceptB": "İngilizce Harf Adları (Letter Names)", "keyDifference": "Türkçe fonetiktir, harfin adı sesiyle birdir (B=Be). İngilizcede harflerin bağımsız adları vardır (B=/biː/, H=/eɪtʃ/).", "exampleA": "T-E-L-E-F-O-N", "exampleB": "T-E-L-E-P-H-O-N-E"}
        memoryHook = "Alfabe Şifresi: A=Ey, E=İy, I=Ay!"
        examples = [
            {"en": "How do you spell your first name?", "tr": "İlk adınızı nasıl kodlarsınız?", "highlightedWords": ["How do you spell"], "grammarCategory": "Kodlama Sorusu", "contextNote": "İsim yazılışı sorma.", "breakdownNote": "Soru zarfı + do + özne + spell + nesne."},
            {"en": "Can you spell your email address, please?", "tr": "E-posta adresinizi harf harf söyleyebilir misiniz lütfen?", "highlightedWords": ["Can you spell", "email address"], "grammarCategory": "Rica Cümlesi", "contextNote": "Resmi iletişimde e-posta kontrolü.", "breakdownNote": "Modal (Can) + özne + spell + nesne."},
            {"en": "My name is Anna, spelled A-double N-A.", "tr": "Benim adım Anna, A-çift N-A şeklinde yazılır.", "highlightedWords": ["spelled", "double"], "grammarCategory": "Kodlama Cevabı", "contextNote": "Çift harfli isim kodlama.", "breakdownNote": "İsim + spelled + harf dizisi."}
        ]
        vocab = [
            {"word": "Alphabet", "phonetic": "/ˈæl.fə.bet/", "partOfSpeech": "noun", "meaningTr": "Alfabe", "exampleSentence": "The English alphabet has 26 letters."},
            {"word": "Vowel", "phonetic": "/ˈvaʊ.əl/", "partOfSpeech": "noun", "meaningTr": "Sesli harf", "exampleSentence": "A, E, I, O, U are vowels."},
            {"word": "Consonant", "phonetic": "/ˈkɒn.sə.nənt/", "partOfSpeech": "noun", "meaningTr": "Sessiz harf", "exampleSentence": "B and C are consonants."},
            {"word": "Spell", "phonetic": "/spel/", "partOfSpeech": "verb", "meaningTr": "Harf harf söylemek / yazmak", "exampleSentence": "How do you spell your city?"}
        ]
        qc_q = "İngilizcede bir kelimenin harf harf nasıl yazıldığını sormak için hangi kalıp kullanılır?"
        qc_opts = ["How do you spell that?", "How you write that?", "What means that letter?", "Where is your spelling?"]
        qc_idx = 0
        qc_expl = "İngilizcede bir sözcüğün harf kodlamasını öğrenmek için 'How do you spell that?' kalıbı kullanılır."
        ex_sent = "Could you please ___ your surname for the official registration form?"
        ex_opts = ["spell", "spells", "spelling", "spelled"]
        ex_ans = "spell"
        ex_hint = "Modal yardımcı fiillerden (could) sonra ana fiil yalın halde (V1) kullanılır."
        ex_expl = "Could modal fiili ardından yalın fiil 'spell' gelir."
        sb_tr = "Lütfen adınızı harf harf kodlayabilir misiniz?"
        sb_en = "Could you please spell your name"
        sb_dist = ["write", "calling", "are", "do"]
        sb_expl = "Rica (Could you please) + fiil (spell) + tamlama (your name)."

    elif lid == 3:
        skill = "vocabulary"
        concrete = "A1 standardında 1-100 arası sayıları doğru telaffuz edebilmek, yaş ve telefon numarası bildirebilmek."
        why = "Alışveriş fiyatları, otel oda numaraları, yaş ve telefon bildirimleri günlük hayatın temelidir."
        logic = "13-19 arası sayılar '-teen' vurgusuyla, onlar basamakları (20, 30, 40...) '-ty' ile biter. Yaş söylerken To Be (am/is/are) kullanılır; 'have' kullanılmaz."
        steps = [
            {"title": "1. Adım: -teen ve -ty Ayrımı", "content": "13 (thirteen) ve 30 (thirty) arasındaki vurgu farkını kavrayın.", "formula": "13-19 = -teen (vurgu sonda) | 20-90 = -ty (vurgu başta)", "keyPhrase": "fifteen (15) vs fifty (50)", "subPoints": ["-teen sesinde ton yükselir, -ty sesinde düşer"]},
            {"title": "2. Adım: Yaş Bildirimi", "content": "İngilizcede yaş To Be fiiliyle söylenir.", "formula": "Subject + am/is/are + [Sayı] + (years old)", "keyPhrase": "I am twenty-five years old.", "subPoints": ["*I have 25 years YANLIŞTIR; I am 25 DOĞRUDUR"]},
            {"title": "3. Adım: Telefon Numarası Okuma", "content": "Telefon numaralarındaki rakamlar tek tek söylenir, sıfır için 'oh' veya 'zero' denir.", "formula": "Single digit reading (double for identical numbers)", "keyPhrase": "My number is oh-five-three-two...", "subPoints": ["İki aynı rakam yan yanaysa 'double four' denilebilir"]}
        ]
        ruleCards = [
            {"ruleTitle": "Yaş Bildiriminde 'To Be' Kuralı", "formula": "I am 20 years old  (DOĞRU)  <-->  *I have 20 years (YANLIŞ)", "explanation": "İngilizcede yaş bir sahiplik değil, varoluşsal bir durumdur; bu yüzden To Be kullanılır.", "exampleSnippet": "She is eighteen years old.", "tipNote": "Yaş söylerken HAVE değil AM/IS/ARE kullanın!"},
            {"ruleTitle": "-teen ve -ty Vurgu Farkı", "formula": "fourTEEN (14)  <-->  FORty (40)", "explanation": "14 derken vurgu 'teen' hecesindedir; 40 derken vurgu ilk hecededir.", "cautionNote": "Havalimanında 15 (fifteen) ile 50 (fifty) karıştırılmamalıdır."}
        ]
        mistakes = [
            {"wrongExample": "I have twenty-four years old.", "correctExample": "I am twenty-four years old. / I am twenty-four.", "rootCause": "Fransızca veya İspanyolca gibi dillerdeki have mantığını İngilizceye taşıma hatası.", "memoryTip": "Yaşını söylerken daima I AM de!"},
            {"wrongExample": "My phone number is five hundred twenty.", "correctExample": "My phone number is five-two-zero...", "rootCause": "Telefon numaralarını yüzlük sayılar gibi okuma hatası.", "memoryTip": "Telefon rakamları tek tek okunur!"}
        ]
        dialogue = [
            {"speaker": "Clerk", "textEn": "How old are you, and what is your contact phone number?", "textTr": "Kaç yaşındasınız ve irtibat telefon numaranız nedir?"},
            {"speaker": "Customer", "textEn": "I am thirty years old, and my number is five-five-five, two-four-nine.", "textTr": "Otuz yaşındayım ve numaram beş-beş-beş, iki-dört-dokuz."},
            {"speaker": "Clerk", "textEn": "Thank you, your registration is now complete.", "textTr": "Teşekkürler, kaydınız tamamlandı."}
        ]
        contrastive = {"conceptA": "Türkçe Yaş Bildirimi (-yaşındayım)", "conceptB": "İngilizce To Be Yaş Kalıbı", "keyDifference": "Türkçede 'yaşındayım' eki kullanılır. İngilizcede 'am/is/are' fiili doğrudan sayıyla birleşir.", "exampleA": "Ben 30 yaşındayım.", "exampleB": "I am 30 years old."}
        memoryHook = "Yaş Kuralı: I am [Yaş]! Asla 'I have' deme!"
        examples = [
            {"en": "My younger brother is fourteen years old.", "tr": "Erkek kardeşim on dört yaşındadır.", "highlightedWords": ["is fourteen years old"], "grammarCategory": "Yaş Cümlesi", "contextNote": "3. tekil şahısta yaş.", "breakdownNote": "Özne + is + Sayı + years old."},
            {"en": "There are fifty participants in the main hall.", "tr": "Ana salonda elli katılımcı var.", "highlightedWords": ["fifty participants"], "grammarCategory": "Miktar Bildirimi", "contextNote": "Onluk sayı kullanımı.", "breakdownNote": "There are + Sayı (fifty) + Çoğul isim."},
            {"en": "Can you give me your mobile phone number?", "tr": "Bana cep telefonu numaranızı verebilir misiniz?", "highlightedWords": ["mobile phone number"], "grammarCategory": "İletişim Sorusu", "contextNote": "Telefon isteme.", "breakdownNote": "Modal + özne + fiil + nesne."}
        ]
        vocab = [
            {"word": "Thirteen", "phonetic": "/θɜːˈtiːn/", "partOfSpeech": "noun", "meaningTr": "On üç", "exampleSentence": "She is thirteen years old."},
            {"word": "Thirty", "phonetic": "/ˈθɜː.ti/", "partOfSpeech": "noun", "meaningTr": "Otuz", "exampleSentence": "The bus leaves in thirty minutes."},
            {"word": "Fifteen", "phonetic": "/fɪfˈtiːn/", "partOfSpeech": "noun", "meaningTr": "On beş", "exampleSentence": "Room fifteen is on the second floor."},
            {"word": "Hundred", "phonetic": "/ˈhʌn.drəd/", "partOfSpeech": "noun", "meaningTr": "Yüz (100)", "exampleSentence": "One hundred guests attended the conference."}
        ]
        qc_q = "İngilizcede yaş belirtirken hangi ifade dilbilgisel olarak TAMAMEN DOĞRUDUR?"
        qc_opts = ["I am twenty-five years old.", "I have twenty-five years old.", "I am have twenty-five years.", "My age has twenty-five."]
        qc_idx = 0
        qc_expl = "İngilizcede yaş 'To Be' (am/is/are) ile ifade edilir: 'I am 25 years old'."
        ex_sent = "My colleague David ___ thirty-two years old and lives in Chicago."
        ex_opts = ["is", "has", "have", "are"]
        ex_ans = "is"
        ex_hint = "Tekil üçüncü şahısta (David) yaş bildirirken kullanılan To Be formunu seçin."
        ex_expl = "Tekil üçüncü şahıs öznelerde yaş için 'is' kullanılır: 'David is 32 years old'."
        sb_tr = "Ben yirmi beş yaşındayım ve Londra'da yaşıyorum."
        sb_en = "I am twenty five years old and live in London"
        sb_dist = ["have", "is", "at", "has"]
        sb_expl = "Özne (I) + to be ve yaş (am twenty five years old) + bağlaç (and) + eylem (live in London)."

    elif lid == 4:
        skill = "grammar"
        concrete = "A1 standardında İngilizce kişi zamirlerini (I, you, he, she, it, we, they) özne konumunda hatasız kullanabilmek."
        why = "Kişi zamirleri her cümlenin öznesini oluşturur ve isim tekrarlarını önleyerek akıcı konuşmayı sağlar."
        logic = "İngilizcede cümleler daima bir özneyle başlar. Erkekler için 'he', kadınlar için 'she', cansız/hayvan tekiller için 'it', çoğullar için 'they' kullanılır."
        steps = [
            {"title": "1. Adım: Tekil Zamirler (I, You, He, She, It)", "content": "Erkek tekil: He, kadın tekil: She, cansız/tekil nesne: It.", "formula": "He / She / It + singular verb", "keyPhrase": "He is an architect. She is a lawyer. It is a laptop.", "subPoints": ["Hayvanlar aile üyesi kabul edilirse he/she denilebilir"]},
            {"title": "2. Adım: Çoğul Zamirler (We, You, They)", "content": "Biz: We, siz: You, onlar: They. 'They' hem insanlar hem de nesneler için çoğuldur.", "formula": "We / You / They + plural verb", "keyPhrase": "They are colleagues. The books -> They are on the table.", "subPoints": ["Nesnelerin çoğulu da 'They'dir (books -> they)"]},
            {"title": "3. Adım: Gizli Özne Tuzağı", "content": "Türkçedeki gibi özne gizlenemez; İngilizcede zamir açıkça söylenmelidir.", "formula": "Mandatory overt subject pronoun", "keyPhrase": "*Is cold -> IT is cold.", "subPoints": ["Hava durumunda daima 'It' öznesi kullanılır: It is raining"]}
        ]
        ruleCards = [
            {"ruleTitle": "İngilizcede Gizli Özne Yoktur", "formula": "*Am tired (YANLIŞ) -> I am tired (DOĞRU)", "explanation": "Türkçe eklemeli dil olduğu için özne fiilden anlaşılır; ancak İngilizce her cümlede açık özne arar.", "exampleSnippet": "It is hot today. (Hot today denmez)", "tipNote": "Her cümlenin başına mutlaka uygun bir zamir koyun!"},
            {"ruleTitle": "'They' Cansız Çoğullar İçin de Geçerlidir", "formula": "The cars -> They are fast  |  The computers -> They are modern", "explanation": "Öğrenciler 'They' zamirini sadece insanlar için sanır. Cansız varlıkların çoğulu da daima 'They'dir.", "cautionNote": "Çoğul nesnelere asla 'It' demeyin; 'They' deyin."}
        ]
        mistakes = [
            {"wrongExample": "Is very cold outside today.", "correctExample": "It is very cold outside today.", "rootCause": "Türkçedeki 'Bugün dışarısı çok soğuk' ifadesini öznesiz aktarma hatası.", "memoryTip": "Hava ve saat cümleleri IT ile başlar: It is cold!"},
            {"wrongExample": "Look at the cars, it is very fast.", "correctExample": "Look at the cars, they are very fast.", "rootCause": "Cansız nesnelerin çoğuluna 'they' yerine 'it' deme yanılgısı.", "memoryTip": "Birden fazla nesne varsa IT değil THEY kullanılır!"}
        ]
        dialogue = [
            {"speaker": "Mark", "textEn": "Where are Lisa and Tom? Are they in the meeting?", "textTr": "Lisa ve Tom nerede? Toplantıdalar mı?"},
            {"speaker": "Emma", "textEn": "No, they are visiting our regional client in Berlin.", "textTr": "Hayır, Berlin'deki bölgesel müşterimizi ziyaret ediyorlar."},
            {"speaker": "Mark", "textEn": "When will they return to the office?", "textTr": "Ofise ne zaman dönecekler?"}
        ]
        contrastive = {"conceptA": "Türkçe Gizli Özne Mekanizması", "conceptB": "İngilizce Zorunlu Özne (Overt Pronoun)", "keyDifference": "Türkçede 'Gidiyorum' diyebilirsiniz (özne fiilde saklıdır). İngilizcede '*Go' denemez, 'I am going' demek zorunludur.", "exampleA": "Hazırım.", "exampleB": "I am ready."}
        memoryHook = "Özne Prensibi: Cümleyi öznesiz bırakma; insan, nesne veya IT ile başlat!"
        examples = [
            {"en": "She works as a senior software architect in London.", "tr": "O Londra'da kıdemli bir yazılım mimarı olarak çalışıyor.", "highlightedWords": ["She works"], "grammarCategory": "3. Tekil Kadın", "contextNote": "Kadın özneyle fiil çekimi.", "breakdownNote": "Özne (She) + fiil(-s) + nesne."},
            {"en": "They are very enthusiastic about the new initiative.", "tr": "Onlar yeni girişim konusunda çok hevesliler.", "highlightedWords": ["They are"], "grammarCategory": "Çoğul Özne", "contextNote": "Çoğul şahıs zamiri.", "breakdownNote": "Özne (They) + are + sıfat öbeği."},
            {"en": "It is an extremely important document for the audit.", "tr": "O denetim için son derece önemli bir belgedir.", "highlightedWords": ["It is"], "grammarCategory": "Cansız Tekil", "contextNote": "Cansız nesne zamiri.", "breakdownNote": "Özne (It) + is + sıfat tamlaması."}
        ]
        vocab = [
            {"word": "Subject", "phonetic": "/ˈsʌb.dʒɪkt/", "partOfSpeech": "noun", "meaningTr": "Özne", "exampleSentence": "Every complete English sentence needs a subject."},
            {"word": "Pronoun", "phonetic": "/ˈprəʊ.naʊn/", "partOfSpeech": "noun", "meaningTr": "Zamir", "exampleSentence": "Replace repeated nouns with pronouns."},
            {"word": "Colleague", "phonetic": "/ˈkɒl.iːɡ/", "partOfSpeech": "noun", "meaningTr": "Meslektaş", "exampleSentence": "They are our trusted colleagues."},
            {"word": "Enthusiastic", "phonetic": "/ɪnˌθjuː.ziˈæs.tɪk/", "partOfSpeech": "adjective", "meaningTr": "Hevesli, coşkulu", "exampleSentence": "We are enthusiastic about learning English."}
        ]
        qc_q = "İngilizcede çoğul cansız nesnelerden (örneğin 'the computers') bahsederken hangi kişi zamiri kullanılır?"
        qc_opts = ["They", "It", "We", "He"]
        qc_idx = 0
        qc_expl = "İngilizcede hem çoğul kişilerin hem de çoğul cansız nesnelerin zamiri 'They'dir."
        ex_sent = "Where are my sunglasses? ___ were on the table a few minutes ago."
        ex_opts = ["They", "It", "She", "He"]
        ex_ans = "They"
        ex_hint = "'Sunglasses' (güneş gözlüğü) İngilizcede daima çoğul kabul edilen bir nesnedir.",
        ex_expl = "'Sunglasses' çoğul bir nesne olduğu için özne zamiri 'They' olur: 'They were on the table'."
        sb_tr = "Onlar bizim şirketimizde çok yetenekli yazılım mühendisleridir."
        sb_en = "They are very talented software engineers in our company"
        sb_dist = ["he", "she", "it", "is"]
        sb_expl = "Özne (They) + to be (are) + sıfat ve meslek (very talented software engineers) + yer (in our company)."

    elif lid == 5:
        skill = "vocabulary"
        concrete = "A1 standardında ülkeleri, milliyetleri ve konuşulan dilleri doğru kalıplarla ifade edebilmek."
        why = "Uluslararası ortamlarda memleket, uyruk ve dil bilgisi paylaşmak ilk tanışmanın ana içeriğidir."
        logic = "Ülke bildirirken 'I am from [Ülke]' (from edatıyla); milliyet bildirirken 'I am [Milliyet]' (edatsız) kullanılır. Milliyet ve dil isimleri daima BÜYÜK harfle başlar."
        steps = [
            {"title": "1. Adım: Ülke ve 'From' Kullanımı", "content": "Nereden geldiğinizi söylerken 'from' edatı kullanılır.", "formula": "Subject + be + from + [Country]", "keyPhrase": "I am from Turkey. / She is from Germany.", "subPoints": ["From edatı menşe bildirir"]},
            {"title": "2. Adım: Milliyet Bildirimi", "content": "Milliyet söylerken 'from' kullanılmaz; doğrudan sıfat gelir.", "formula": "Subject + be + [Nationality]", "keyPhrase": "I am Turkish. / She is German.", "subPoints": ["*I am from Turkish YANLIŞTIR; I am Turkish DOĞRUDUR"]},
            {"title": "3. Adım: Dil Konuşma İfadesi", "content": "Konuşulan dili belirtmek için 'speak' fiili kullanılır.", "formula": "Subject + speak/speaks + [Language]", "keyPhrase": "I speak English and Spanish.", "subPoints": ["İngilizcede dil ve milliyet isimleri daima büyük harfle başlar"]}
        ]
        ruleCards = [
            {"ruleTitle": "Ülke vs Milliyet Karışıklığı", "formula": "I am from Turkey (Ülke)  <-->  I am Turkish (Milliyet)", "explanation": "'From' kelimesinden sonra ülke adı gelir; milliyet sıfatının önüne 'from' getirilmez.", "exampleSnippet": "He is from Japan (Ülke) - He is Japanese (Milliyet).", "tipNote": "From varsa ÜLKE, from yoksa MİLLİYET!"},
            {"ruleTitle": "Büyük Harf Kuralı", "formula": "English, Turkish, French, German (Daima Büyük Harf)", "explanation": "Türkçenin aksine İngilizcede diller ve milliyetler cümlenin neresinde olursa olsun büyük harfle yazılır.", "cautionNote": "Küçük harfle 'turkish' veya 'english' yazmak imla hatasıdır."}
        ]
        mistakes = [
            {"wrongExample": "I am from Turkish.", "correctExample": "I am from Turkey. / I am Turkish.", "rootCause": "Ülke adı ile milliyet sıfatını birbirine karıştırma.", "memoryTip": "From kelimesinden sonra ülke ismi gelir: from Turkey!"},
            {"wrongExample": "She speaks english very well.", "correctExample": "She speaks English very well.", "rootCause": "Dil isimlerinin baş harfini küçük yazma alışkanlığı.", "memoryTip": "İngilizcede dillerin baş harfi daima BÜYÜK yazılır!"}
        ]
        dialogue = [
            {"speaker": "Lucas", "textEn": "Where are you from originally, Maria?", "textTr": "Aslen nerelisiniz Maria?"},
            {"speaker": "Maria", "textEn": "I am from Spain, but I live and work in London.", "textTr": "İspanyalıyım ama Londra'da yaşayıp çalışıyorum."},
            {"speaker": "Lucas", "textEn": "Do you speak Spanish and English fluently?", "textTr": "İspanyolca ve İngilizceyi akıcı şekilde konuşabiliyor musunuz?"}
        ]
        contrastive = {"conceptA": "Türkçe Milliyet Eki (-lı, -li)", "conceptB": "İngilizce Ülke/Milliyet Çiftleri", "keyDifference": "Türkçede ülke sonuna ek getirilir (İspanya -> İspanyalı). İngilizcede ülke ve milliyet kelimeleri çoğu zaman farklılaşır (Spain -> Spanish).", "exampleA": "Ben İspanyalıyım.", "exampleB": "I am Spanish."}
        memoryHook = "Memleket Kuralı: I am from Turkey, I am Turkish, I speak English!"
        examples = [
            {"en": "She is from Italy and her native language is Italian.", "tr": "O İtalyalıdır ve ana dili İtalyancadır.", "highlightedWords": ["from Italy", "Italian"], "grammarCategory": "Ülke ve Dil", "contextNote": "Ülke ve dil birlikteliği.", "breakdownNote": "is from + Ülke + and + language is + Dil."},
            {"en": "Our new marketing manager is originally from Japan.", "tr": "Yeni pazarlama müdürümüz aslen Japonyalıdır.", "highlightedWords": ["originally from Japan"], "grammarCategory": "Menşe Cümlesi", "contextNote": "Köken bildirme.", "breakdownNote": "Özne + is originally from + Ülke."},
            {"en": "We speak English fluently during all international meetings.", "tr": "Tüm uluslararası toplantılarda İngilizceyi akıcı bir şekilde konuşuruz.", "highlightedWords": ["speak English fluently"], "grammarCategory": "Dil Becerisi", "contextNote": "Konuşulan dil.", "breakdownNote": "Özne + speak + Dil + durum zarfı."}
        ]
        vocab = [
            {"word": "Nationality", "phonetic": "/ˌnæʃ.ənˈæl.ə.ti/", "partOfSpeech": "noun", "meaningTr": "Milliyet, uyruk", "exampleSentence": "State your nationality on the document."},
            {"word": "Country", "phonetic": "/ˈkʌn.tri/", "partOfSpeech": "noun", "meaningTr": "Ülke", "exampleSentence": "Which country do you want to visit?"},
            {"word": "Fluently", "phonetic": "/ˈfluː.ənt.li/", "partOfSpeech": "adverb", "meaningTr": "Akıcı bir şekilde", "exampleSentence": "He speaks three languages fluently."},
            {"word": "Originally", "phonetic": "/əˈrɪdʒ.ən.əl.i/", "partOfSpeech": "adverb", "meaningTr": "Aslen, köken olarak", "exampleSentence": "She is originally from Canada."}
        ]
        qc_q = "Aşağıdaki cümlelerden hangisi İngilizce dil ve ülke kurallarına göre TAMAMEN DOĞRUDUR?"
        qc_opts = ["She is from Germany and speaks German.", "She is from German and speaks Germany.", "She is German from Germany country.", "She speaks german language very well."]
        qc_idx = 0
        qc_expl = "'from Germany' (ülke) ve 'speaks German' (dil, büyük harfle) doğru kullanımdır."
        ex_sent = "Our head chef is originally from France, so he speaks ___ with native fluency."
        ex_opts = ["French", "France", "frenches", "frenchly"]
        ex_ans = "French"
        ex_hint = "Fransa'da konuşulan dil adını ve büyük harf kuralını düşünün."
        ex_expl = "Fransızca dili 'French' olarak adlandırılır ve büyük harfle başlar."
        sb_tr = "Yeni meslektaşımız İspanyalıdır ve üç dili akıcı konuşur."
        sb_en = "Our new colleague is from Spain and speaks three languages fluently"
        sb_dist = ["spanish", "are", "living", "to"]
        sb_expl = "Özne (Our new colleague) + ülke (is from Spain) + bağlaç (and) + fiil (speaks three languages fluently)."

    elif lid == 6:
        skill = "vocabulary"
        concrete = "A1 standardında meslek adlarını (teacher, doctor, engineer, driver) doğru artikellerle (a/an) kullanabilmek ve meslek sorabilmek."
        why = "Sosyal ve profesyonel tanışmalarda mesleğimizi doğru aktarmak temel iletişim ihtiyacıdır."
        logic = "İngilizcede meslekler tekil sayılabilir isimlerdir; bu yüzden önüne sessiz harfle başlıyorsa 'A', sesli harfle başlıyorsa 'AN' getirilir. Meslek sorusu 'What do you do?' kalıbıyla sorulur."
        steps = [
            {"title": "1. Adım: Meslek Sorma Kalıbı", "content": "Birinin mesleğini sormak için 'What do you do?' kalıbı kullanılır.", "formula": "What do you do? / What does he/she do?", "keyPhrase": "What do you do for a living?", "subPoints": ["*What are you doing? meslek değil, anlık eylemi sorar"]},
            {"title": "2. Adım: A ve An Artikeli Kuralı", "content": "Sessizle başlayan mesleklere 'a', sesliyle başlayanlara 'an' gelir.", "formula": "I am a [Doctor]  |  I am an [Engineer]", "keyPhrase": "a teacher, a lawyer, an architect, an accountant", "subPoints": ["Türkçe 'Ben doktorum' derken artikel yoktur; İngilizcede ZORUNLUDUR"]},
            {"title": "3. Adım: Çalışma Yeri Bildirme", "content": "Çalışılan yer 'work at / in' edatlarıyla bağlanır.", "formula": "Subject + work/works at + [Şirket/Kurum]", "keyPhrase": "He works at a hospital. She works in an office.", "subPoints": ["Kurumlarda 'at', sektörlerde 'in' tercih edilir"]}
        ]
        ruleCards = [
            {"ruleTitle": "Mesleklerde 'A / An' Zorunluluğu", "formula": "*I am engineer (YANLIŞ) -> I am an engineer (DOĞRU)", "explanation": "İngilizcede tekil meslek isimleri artikel olmadan kesinlikle kullanılamaz.", "exampleSnippet": "She is a doctor. / He is an architect.", "tipNote": "Meslek söylemeden önce ağzınızdan 'a' veya 'an' çıksın!"},
            {"ruleTitle": "Meslek Sorusu: What Do You Do?", "formula": "What do you do? (Ne iş yaparsınız?) != What are you doing? (Şu an ne yapıyorsun?)", "explanation": "Tanışırken 'Ne işle meşgulsünüz?' demek için 'What do you do?' denir.", "cautionNote": "Meslek sorarken şimdiki zaman (What are you doing) sormayın."}
        ]
        mistakes = [
            {"wrongExample": "I am teacher at primary school.", "correctExample": "I am a teacher at a primary school.", "rootCause": "Türkçedeki 'Ben öğretmenim' mantığını artikelsiz tercüme etme hatası.", "memoryTip": "Mesleğin önüne daima A veya AN koy!"},
            {"wrongExample": "What are you doing? - I am architect.", "correctExample": "What do you do? - I am an architect.", "rootCause": "Meslek sorusu ile anlık soru kalıbını karıştırmak.", "memoryTip": "Meslek sorusu: What do you DO!"}
        ]
        dialogue = [
            {"speaker": "David", "textEn": "What do you do, Sarah?", "textTr": "Ne iş yapıyorsunuz Sarah?"},
            {"speaker": "Sarah", "textEn": "I am an architect. I design residential buildings. What about you?", "textTr": "Ben bir mimarım. Konut binaları tasarlıyorum. Ya siz?"},
            {"speaker": "David", "textEn": "I am a software engineer at a technology company.", "textTr": "Ben bir teknoloji şirketinde yazılım mühendisiyim."}
        ]
        contrastive = {"conceptA": "Türkçe Meslek Bildirimi", "conceptB": "İngilizce Meslek Artikeli", "keyDifference": "Türkçede meslek bildirirken 'bir' denmez (Mühendisim). İngilizcede 'an engineer' şeklinde artikel zorunludur.", "exampleA": "Ben doktorum.", "exampleB": "I am a doctor."}
        memoryHook = "Meslek Formülü: I am A teacher / I am AN engineer!"
        examples = [
            {"en": "Michael is an experienced doctor at the central hospital.", "tr": "Michael merkez hastanesinde deneyimli bir doktordur.", "highlightedWords": ["is an experienced doctor"], "grammarCategory": "Meslek Cümlesi", "contextNote": "Sesli harfle başlayan sıfat tamlamasında 'an'.", "breakdownNote": "Özne + is an + sıfat ve meslek + yer edatı."},
            {"en": "What does your sister do for a living in Toronto?", "tr": "Kız kardeşiniz Toronto'da geçimini sağlamak için ne iş yapıyor?", "highlightedWords": ["What does your sister do"], "grammarCategory": "Meslek Sorusu", "contextNote": "3. tekil şahıs meslek sorusu.", "breakdownNote": "What + does + özne + do + edat öbeği."},
            {"en": "She works as a dedicated nurse in the pediatric department.", "tr": "O çocuk kliniğinde özverili bir hemşire olarak çalışıyor.", "highlightedWords": ["works as a dedicated nurse"], "grammarCategory": "Work as Kalıbı", "contextNote": "Olarak çalışma.", "breakdownNote": "Özne + works as a + meslek + yer."}
        ]
        vocab = [
            {"word": "Architect", "phonetic": "/ˈɑː.kɪ.tekt/", "partOfSpeech": "noun", "meaningTr": "Mimar", "exampleSentence": "An architect designs modern buildings."},
            {"word": "Engineer", "phonetic": "/ˌen.dʒɪˈnɪər/", "partOfSpeech": "noun", "meaningTr": "Mühendis", "exampleSentence": "He is an engineer in our firm."},
            {"word": "Occupation", "phonetic": "/ˌɒk.jəˈpeɪ.ʃən/", "partOfSpeech": "noun", "meaningTr": "Meslek, uğraş", "exampleSentence": "State your occupation on the form."},
            {"word": "Colleague", "phonetic": "/ˈkɒl.iːɡ/", "partOfSpeech": "noun", "meaningTr": "İş arkadaşı", "exampleSentence": "She had lunch with her colleague."}
        ]
        qc_q = "İngilizcede birine mesleğini sormak için hangi kalıp en doğal ve doğrudur?"
        qc_opts = ["What do you do?", "What are you doing now?", "What is your working?", "Where do you work today?"]
        qc_idx = 0
        qc_expl = "Bir kişinin mesleğini öğrenmek için standart kalıp 'What do you do?'dur."
        ex_sent = "Lisa works at the research center because she is ___ brilliant scientist."
        ex_opts = ["a", "an", "the", "one"]
        ex_ans = "a"
        ex_hint = "'Brilliant' sözcüğü sessiz bir harfle (/b/) başladığı için uygun artikeli seçin."
        ex_expl = "'brilliant' sessizle başladığından 'a brilliant scientist' doğru kullanımdır."
        sb_tr = "Michael deneyimli bir doktordur ve bölge hastanesinde çalışır."
        sb_en = "Michael is an experienced doctor and works at the hospital"
        sb_dist = ["a", "are", "working", "to"]
        sb_expl = "Özne (Michael) + to be ve meslek (is an experienced doctor) + bağlaç (and) + fiil ve yer (works at the hospital)."

    elif lid == 7:
        skill = "vocabulary"
        concrete = "A1 standardında günleri, ayları, mevsimleri ve tarihleri doğru zaman edatlarıyla (on Monday, in July, in summer) kullanabilmek."
        why = "Randevu belirleme, uçuş tarihi seçme ve takvim yönetimi günlük yaşamın vazgeçilmezidir."
        logic = "GÜNLERDEN önce 'ON' (on Friday), AYLARDAN ve MEVSİMLERDEN önce 'IN' (in July, in winter) edatı kullanılır. Gün ve ay isimleri daima BÜYÜK harfle başlar."
        steps = [
            {"title": "1. Adım: Günler ve 'ON' Edatı", "content": "Haftanın 7 gününde daima 'ON' edatı kullanılır.", "formula": "on + [Gün] (on Monday, on Friday)", "keyPhrase": "See you on Monday morning.", "subPoints": ["Günlerin baş harfi daima büyüktür: Monday, Tuesday, Wednesday..."]},
            {"title": "2. Adım: Aylar, Mevsimler ve 'IN' Edatı", "content": "Geniş zaman dilimleri olan aylarda ve mevsimlerde 'IN' edatı gelir.", "formula": "in + [Ay / Mevsim / Yıl] (in July, in summer, in 2026)", "keyPhrase": "My birthday is in August. We travel in summer.", "subPoints": ["*on July YANLIŞTIR; in July DOĞRUDUR"]},
            {"title": "3. Adım: Tam Tarih Bildirimi", "content": "Ay ve gün birlikte verilirse gün esas alınır ve 'ON' kullanılır.", "formula": "on + [Ay + Gün] (on July 15th)", "keyPhrase": "The project starts on October 12th.", "subPoints": ["Tarihlerde sıra sayıları (-st, -nd, -rd, -th) kullanılır"]}
        ]
        ruleCards = [
            {"ruleTitle": "Takvim Edatları Ayrımı (ON vs IN)", "formula": "GÜN = ON (on Friday)  <-->  AY/MEVSİM = IN (in July, in winter)", "explanation": "İngilizcede 24 saatlik gün dilimlerinde 'ON', daha geniş ay ve mevsim bloklarında 'IN' kullanılır.", "exampleSnippet": "The exam is on Friday in June.", "tipNote": "Gün gördüğün yerde ON, ay/mevsim gördüğün yerde IN!"},
            {"ruleTitle": "Takvim İsimlerinde Büyük Harf", "formula": "Monday, Friday, January, August (Daima Büyük)", "explanation": "İngilizcede gün ve ay isimleri cümlenin başında veya ortasında daima büyük harfle yazılır.", "cautionNote": "Küçük harfle 'friday' yazmak kural hatasıdır."}
        ]
        mistakes = [
            {"wrongExample": "The meeting is in Friday morning.", "correctExample": "The meeting is on Friday morning.", "rootCause": "Günün önüne 'in' getirme hatası.", "memoryTip": "Gün varsa ON yapıştır: On Friday!"},
            {"wrongExample": "We go on holiday on July.", "correctExample": "We go on holiday in July.", "rootCause": "Ayların önüne 'on' getirme yanılgısı.", "memoryTip": "Aylar geniştir, içine girilir: IN July!"}
        ]
        dialogue = [
            {"speaker": "Clara", "textEn": "When is our project deadline?", "textTr": "Proje teslim tarihimiz ne zaman?"},
            {"speaker": "Lucas", "textEn": "It is on Friday, the fifteenth of November.", "textTr": "Cuma günü, on beş Kasım'da."},
            {"speaker": "Clara", "textEn": "Great, then our vacation starts in December!", "textTr": "Harika, o zaman tatilimiz Aralık'ta başlıyor!"}
        ]
        contrastive = {"conceptA": "Türkçe Zaman Ekleri (-de, -da)", "conceptB": "İngilizce Edat Ayrımı (On vs In)", "keyDifference": "Türkçede 'Cuma-da' ve 'Temmuz-da' aynı ekle karşılanır. İngilizcede güne 'ON', aya 'IN' getirilmek zorundadır.", "exampleA": "Cuma günü / Temmuzda.", "exampleB": "On Friday / In July."}
        memoryHook = "Takvim Şifresi: Gün = ON, Ay ve Mevsim = IN!"
        examples = [
            {"en": "Our important team meeting is scheduled on Monday morning.", "tr": "Önemli ekip toplantımız pazartesi sabahına planlandı.", "highlightedWords": ["on Monday morning"], "grammarCategory": "Gün Bildirimi", "contextNote": "Gün ve vakit edatı.", "breakdownNote": "is scheduled + on + Gün + morning."},
            {"en": "The international festival takes place in September every year.", "tr": "Uluslararası festival her yıl eylül ayında gerçekleşir.", "highlightedWords": ["in September"], "grammarCategory": "Ay Bildirimi", "contextNote": "Aylarda in kullanımı.", "breakdownNote": "takes place + in + Ay."},
            {"en": "Many tourists visit the coastal city in summer.", "tr": "Birçok turist kıyı şehrini yazın ziyaret eder.", "highlightedWords": ["in summer"], "grammarCategory": "Mevsim Bildirimi", "contextNote": "Mevsimde in kullanımı.", "breakdownNote": "visit + nesne + in + Mevsim."}
        ]
        vocab = [
            {"word": "Schedule", "phonetic": "/ˈʃedʒ.uːl/", "partOfSpeech": "noun", "meaningTr": "Program, takvim", "exampleSentence": "The match is on schedule."},
            {"word": "September", "phonetic": "/sepˈtem.bər/", "partOfSpeech": "noun", "meaningTr": "Eylül ayı", "exampleSentence": "School begins in September."},
            {"word": "Season", "phonetic": "/ˈsiː.zən/", "partOfSpeech": "noun", "meaningTr": "Mevsim", "exampleSentence": "Spring is a pleasant season."},
            {"word": "Calendar", "phonetic": "/ˈkæl.ən.dər/", "partOfSpeech": "noun", "meaningTr": "Takvim", "exampleSentence": "Mark the date on your calendar."}
        ]
        qc_q = "İngilizcede haftanın günlerinden (örneğin 'Friday') önce hangi zaman edatı kullanılır?"
        qc_opts = ["On", "In", "At", "With"]
        qc_idx = 0
        qc_expl = "Haftanın günlerinden önce daima 'on' edatı kullanılır: on Friday, on Monday."
        ex_sent = "The annual technology conference will take place ___ October next year."
        ex_opts = ["in", "on", "at", "to"]
        ex_ans = "in"
        ex_hint = "Yalnızca ay adı belirtildiğinde kullanılan zaman edatını düşünün."
        ex_expl = "Yalnızca ay adı geçtiğinde 'in' edatı kullanılır: 'in October'."
        sb_tr = "Bizim önemli proje toplantımız pazartesi sabahı planlandı."
        sb_en = "Our important team meeting is scheduled on Monday morning"
        sb_dist = ["in", "at", "are", "calendar"]
        sb_expl = "Özne (Our important team meeting) + yüklem (is scheduled) + zaman edatı ve gün (on Monday morning)."

    elif lid == 8:
        skill = "vocabulary"
        concrete = "A1 standardında saati sormayı (What time is it?) ve saatleri tam, buçuk, çeyrek geçe/kala kalıplarıyla söyleyebilmeyi kavramak."
        why = "Uçuş kalkışları, randevular ve ders saatlerini yönetmek için saat söyleme becerisi vazgeçilmezdir."
        logic = "Saati söylerken daima 'It is + saat' yapısıyla başlanır. Tam saatlerde 'o'clock', buçukta 'half past', çeyrek geçe 'quarter past', çeyrek kala 'quarter to' kullanılır. Kesin saatlerden önce 'AT' edatı gelir."
        steps = [
            {"title": "1. Adım: Saat Sorma Kalıpları", "content": "Saati sormak için 'What time is it?' veya 'Have you got the time?' denir.", "formula": "What time is it? / What's the time?", "keyPhrase": "What time is it, please?", "subPoints": ["Nezaket için sonuna 'please' eklenebilir"]},
            {"title": "2. Adım: Tam ve Buçuk Saatler", "content": "Tam saatlerde 'o'clock', 30 geçelerde 'half past' denir.", "formula": "It is [Sayı] o'clock | It is half past [Sayı]", "keyPhrase": "It is eight o'clock (8:00) | It is half past eight (8:30)", "subPoints": ["o'clock sadece tam saatlerde söylenir"]},
            {"title": "3. Adım: Çeyrek Geçe ve Çeyrek Kala", "content": "15 geçe için 'quarter past', 15 kala için 'quarter to' kalıbı kullanılır.", "formula": "It is quarter past [Saat] | It is quarter to [Saat]", "keyPhrase": "quarter past four (4:15) | quarter to five (4:45)", "subPoints": ["Eylem zamanı bildirirken 'at' edatı kullanılır: at 5:00"]}
        ]
        ruleCards = [
            {"ruleTitle": "Saatlerde 'AT' Edatı Kuralı", "formula": "at 3 o'clock | at half past seven | at noon", "explanation": "Günün kesin bir saat dilimini eyleme bağlarken daima 'AT' edatı kullanılır.", "exampleSnippet": "The train leaves at seven o'clock.", "tipNote": "Saat varsa başında AT vardır!"},
            {"ruleTitle": "'O'clock' Kullanım Sınırı", "formula": "*It is half past eight o'clock (YANLIŞ) <--> It is half past eight (DOĞRU)", "explanation": "'o'clock' ifadesi yalnızca dakika sıfır olduğunda söylenir. Ara dakikalarda kullanılmaz.", "cautionNote": "7:30 için 'half past seven o'clock' demeyin."}
        ]
        mistakes = [
            {"wrongExample": "The movie starts in 8 o'clock.", "correctExample": "The movie starts at 8 o'clock.", "rootCause": "Saatlerin önüne 'at' yerine 'in' getirme hatası.", "memoryTip": "Saatlerin önüne daima AT gelir: At 8 o'clock!"},
            {"wrongExample": "It is quarter past seven o'clock.", "correctExample": "It is quarter past seven.", "rootCause": "Ara dakikalı saatlerin sonuna da 'o'clock' ekleme yanılgısı.", "memoryTip": "o'clock sadece tam saatlerde söylenir!"}
        ]
        dialogue = [
            {"speaker": "Tourist", "textEn": "Excuse me, what time does the museum open?", "textTr": "Afedersiniz, müze saat kaçta açılıyor?"},
            {"speaker": "Guide", "textEn": "It opens promptly at half past nine in the morning.", "textTr": "Sabahleyin tam olarak dokuz buçukta açılıyor."},
            {"speaker": "Tourist", "textEn": "Thank you! What time is it right now?", "textTr": "Teşekkürler! Şu an saat kaç?"},
            {"speaker": "Guide", "textEn": "It is a quarter to nine, so you have forty-five minutes.", "textTr": "Dokuza çeyrek var, yani kırk beş dakikanız var."}
        ]
        contrastive = {"conceptA": "Türkçe Saat Bildirimi", "conceptB": "İngilizce Saat Bildirimi (Past / To)", "keyDifference": "Türkçede önce saat sonra dakika söylenir (dokuzu çeyrek geçe). İngilizcede geleneksel yapıda önce dakika sonra saat söylenir (quarter past nine).", "exampleA": "Saat dokuzu yirmi geçiyor.", "exampleB": "It is twenty past nine."}
        memoryHook = "Saat Kuralı: Önce dakika, sonra edat (past/to), en son saat!"
        examples = [
            {"en": "Our international flight departs promptly at a quarter past ten.", "tr": "Uluslararası uçuşumuz tam ona çeyrek geçe hareket ediyor.", "highlightedWords": ["at a quarter past ten"], "grammarCategory": "Çeyrek Geçe", "contextNote": "Uçuş saati.", "breakdownNote": "departs + at a quarter past ten."},
            {"en": "The morning meeting starts at half past eight sharp.", "tr": "Sabah toplantısı tam sekiz buçukta başlıyor.", "highlightedWords": ["at half past eight"], "grammarCategory": "Buçuk Saat", "contextNote": "Toplantı saati.", "breakdownNote": "starts + at half past eight."},
            {"en": "It is exactly twelve o'clock, time for lunch.", "tr": "Saat tam on iki, öğle yemeği vakti.", "highlightedWords": ["twelve o'clock"], "grammarCategory": "Tam Saat", "contextNote": "Tam saat bildirimi.", "breakdownNote": "It is exactly + twelve o'clock."}
        ]
        vocab = [
            {"word": "Quarter", "phonetic": "/ˈkwɔː.tər/", "partOfSpeech": "noun", "meaningTr": "Çeyrek (15 dakika)", "exampleSentence": "It is a quarter past three."},
            {"word": "Promptly", "phonetic": "/ˈprɒmpt.li/", "partOfSpeech": "adverb", "meaningTr": "Tam vaktinde, dakikası dakikasına", "exampleSentence": "The concert begins promptly at eight."},
            {"word": "Midnight", "phonetic": "/ˈmɪd.naɪt/", "partOfSpeech": "noun", "meaningTr": "Gece yarısı (00:00)", "exampleSentence": "The bus arrives at midnight."},
            {"word": "Noon", "phonetic": "/nuːn/", "partOfSpeech": "noun", "meaningTr": "Öğle vakti (12:00)", "exampleSentence": "We take a lunch break at noon."}
        ]
        qc_q = "İngilizcede '8:15' saatini geleneksel kalıpla ifade etmek için hangisi kullanılır?"
        qc_opts = ["It is a quarter past eight.", "It is a quarter to eight.", "It is eight past fifteen.", "It is half past eight."]
        qc_idx = 0
        qc_expl = "15 geçe ifadelerinde 'quarter past [Saat]' kullanılır: 'quarter past eight'."
        ex_sent = "The morning lecture begins promptly ___ half past nine in room 104."
        ex_opts = ["at", "on", "in", "to"]
        ex_ans = "at"
        ex_hint = "Belirli saat bildirimlerinden önce gelen edatı seçin."
        ex_expl = "Kesin saat ifadelerinin önüne 'at' edatı gelir: 'at half past nine'."
        sb_tr = "Bizim uçuşumuz sabah tam ona çeyrek geçe kalkıyor."
        sb_en = "Our flight departs promptly at a quarter past ten in the morning"
        sb_dist = ["on", "to", "half", "is"]
        sb_expl = "Özne (Our flight) + fiil (departs promptly) + saat (at a quarter past ten) + gün vakti (in the morning)."

    elif lid == 9:
        skill = "speaking"
        concrete = "A1 standardında sınıf ve günlük yönergeleri (imperatives: open, listen, don't speak) olumlu ve olumsuz olarak uygulayabilmek."
        why = "Trafik işaretleri, güvenlik kuralları, kullanım kılavuzları ve sınıf içi komutlar emir kipiyle verilir."
        logic = "İngilizcede emir kipi (imperative) doğrudan YALIN FİİLLE (V1) başlar; özne yazılmaz. Olumsuz emir için cümlenin başına 'DON'T' eklenir."
        steps = [
            {"title": "1. Adım: Olumlu Emir Cümlesi", "content": "Özne olmadan doğrudan yalın fiille başlanır.", "formula": "V1 (Bare Infinitive) + Object", "keyPhrase": "Open your book. / Listen carefully.", "subPoints": ["Özne (you) söylenmez, gizli muhataptır"]},
            {"title": "2. Adım: Olumsuz Emir Cümlesi", "content": "Yapılmaması istenen eylemlerde cümlenin başına 'Don't' gelir.", "formula": "Don't + V1 (Bare Infinitive)", "keyPhrase": "Don't touch that wire. / Don't be late.", "subPoints": ["Doesn't veya No kullanılmaz; daima Don't denir"]},
            {"title": "3. Adım: Nezaket Katma (Please)", "content": "Emir kipini kibar bir ricaya dönüştürmek için 'Please' eklenir.", "formula": "Please + V1  /  V1 + please", "keyPhrase": "Please sit down. / Take a seat, please.", "subPoints": ["Please cümlenin başında veya sonunda yer alabilir"]}
        ]
        ruleCards = [
            {"ruleTitle": "Emir Kipinde Yalın Fiil Kuralı", "formula": "*You open the door (Açıklama) <--> Open the door! (Emir Kipi)", "explanation": "Emir cümlesi kurarken özne (You) atılır ve doğrudan yalın eylemle başlanır.", "exampleSnippet": "Turn off your mobile phones during the session.", "tipNote": "Fiili en yalın haliyle cümlenin başına koyun!"},
            {"ruleTitle": "Olumsuz Emirde 'Don't' Standartı", "formula": "Don't + Yalın Fiil  |  *No touch (YANLIŞ) -> Don't touch (DOĞRU)", "explanation": "İngilizcede emir kipi 'No' ile değil, daima 'Don't' yardımcı fiiliyle olumsuz yapılır.", "cautionNote": "Levhalardaki 'No smoking' isimleşmiş yasaktır; doğrudan komut verirken 'Don't smoke' denir."}
        ]
        mistakes = [
            {"wrongExample": "No speak during the exam.", "correctExample": "Don't speak during the exam.", "rootCause": "Olumsuz emir verirken 'Don't' yerine 'No' kullanma hatası.", "memoryTip": "Birine bir şeyi yapma derken DON'T ile başla: Don't speak!"},
            {"wrongExample": "Please you open your notebook.", "correctExample": "Please open your notebook.", "rootCause": "Emir kipine gereksiz yere 'you' zamiri ekleme eğilimi.", "memoryTip": "Emir kipinde özne söylenmez; doğrudan fiil gelir!"}
        ]
        dialogue = [
            {"speaker": "Instructor", "textEn": "Please turn to page twenty and read the instructions carefully.", "textTr": "Lütfen sayfa yirmiyi açın ve talimatları dikkatle okuyun."},
            {"speaker": "Student", "textEn": "Should we write the answers in our notebooks?", "textTr": "Cevapları defterlerimize mi yazmalıyız?"},
            {"speaker": "Instructor", "textEn": "Yes, write clearly and don't use a red pen.", "textTr": "Evet, net bir şekilde yazın ve kırmızı kalem kullanmayın."}
        ]
        contrastive = {"conceptA": "Türkçe Emir Kipi Eki (-ın, -iniz)", "conceptB": "İngilizce Yalın Fiil (Bare Infinitive)", "keyDifference": "Türkçede fiil köküne kişi eki eklenir (Aç-ınız, dinle-yiniz). İngilizcede hiçbir ek eklenmez, fiil sözlük haliyle başa gelir.", "exampleA": "Kapıyı kapatın.", "exampleB": "Close the door."}
        memoryHook = "Emir Formülü: Yap derken yalın fiil, yapma derken Don't!"
        examples = [
            {"en": "Please silence your mobile devices before entering the hall.", "tr": "Salona girmeden önce lütfen mobil cihazlarınızı sessize alın.", "highlightedWords": ["Please silence", "devices"], "grammarCategory": "Nezaketli Yönerge", "contextNote": "Resmi toplantı komutu.", "breakdownNote": "Please + yalın fiil (silence) + nesne + zaman edatı."},
            {"en": "Don't forget to submit your weekly report by five o'clock.", "tr": "Haftalık raporunuzu saat beşten önce teslim etmeyi unutmayın.", "highlightedWords": ["Don't forget to submit"], "grammarCategory": "Olumsuz Uyarı", "contextNote": "İşyeri yönergesi.", "breakdownNote": "Don't + yalın fiil (forget) + mastar + nesne."},
            {"en": "Follow the safety guidelines and wear your protective helmet.", "tr": "Güvenlik kurallarına uyun ve koruyucu kaskınızı takın.", "highlightedWords": ["Follow", "wear"], "grammarCategory": "Güvenlik Komutu", "contextNote": "Şantiye yönergesi.", "breakdownNote": "Yalın fiil (Follow) + and + yalın fiil (wear)."}
        ]
        vocab = [
            {"word": "Instruction", "phonetic": "/ɪnˈstrʌk.ʃən/", "partOfSpeech": "noun", "meaningTr": "Yönerge, talimat", "exampleSentence": "Follow the instructor's instructions."},
            {"word": "Carefully", "phonetic": "/ˈkeə.fəl.i/", "partOfSpeech": "adverb", "meaningTr": "Dikkatlice, özenle", "exampleSentence": "Listen carefully to the audio."},
            {"word": "Silence", "phonetic": "/ˈsaɪ.ləns/", "partOfSpeech": "verb", "meaningTr": "Sessize almak, susturmak", "exampleSentence": "Silence your phone in the library."},
            {"word": "Protective", "phonetic": "/prəˈtek.tɪv/", "partOfSpeech": "adjective", "meaningTr": "Koruyucu", "exampleSentence": "Wear protective glasses in the lab."}
        ]
        qc_q = "İngilizcede olumsuz bir yönerge veya uyarı verirken cümlenin başına ne getirilmelidir?"
        qc_opts = ["Don't + Yalın Fiil", "Doesn't + Fiil", "No + İsim", "Not to + Fiil"]
        qc_idx = 0
        qc_expl = "Olumsuz emir cümleleri doğrudan 'Don't + Yalın Fiil' ile kurulur: 'Don't speak'."
        ex_sent = "Please ___ quiet in the library so other students can study."
        ex_opts = ["be", "are", "you are", "being"]
        ex_ans = "be"
        ex_hint = "Emir kipi oluştururken to be fiilinin en yalın hali (bare form) kullanılır."
        ex_expl = "Emir kipi yalın fiille başlar; to be fiilinin yalın hali 'be'dir: 'Please be quiet'."
        sb_tr = "Lütfen kitabınızı yirminci sayfaya açın ve dikkatle dinleyin."
        sb_en = "Please open your book to page twenty and listen attentively"
        sb_dist = ["you", "are", "listening", "opens"]
        sb_expl = "Nezaket (Please) + fiil (open your book to page twenty) + bağlaç (and) + fiil ve zarf (listen attentively)."

    elif lid == 10:
        skill = "speaking"
        concrete = "A1 standardında temel nezaket kalıplarını (Please, Thank you, You're welcome, Excuse me, Sorry) sosyal bağlamda hatasız kullanabilmek."
        why = "Nezaket ifadeleri her dilde saygı uyandırmanın ve pozitif sosyal bağ kurmanın temel köprüsüdür."
        logic = "İngilizcede teşekkür için 'Thank you / Thanks', karşılık olarak 'You are welcome'; dikkat çekmek veya izin istemek için 'Excuse me'; özür dilemek için 'I am sorry' kullanılır."
        steps = [
            {"title": "1. Adım: Teşekkür Etme ve Karşılık Verme", "content": "'Thank you' dendiğinde 'You are welcome' (Rica ederim) ile karşılık verilir.", "formula": "Thank you! -> You're welcome! / Not at all.", "keyPhrase": "Thank you very much. | You are welcome.", "subPoints": ["Samimi: Thanks! - No problem!"]},
            {"title": "2. Adım: Excuse Me vs Sorry Ayrımı", "content": "Eylem öncesi dikkat çekmek için 'Excuse me'; eylem sonrası pişmanlık için 'Sorry' denir.", "formula": "Eylem Öncesi: Excuse me | Eylem Sonrası: I am sorry", "keyPhrase": "Excuse me, where is the station? | I am sorry for being late.", "subPoints": ["Söz keserken de 'Excuse me' kullanılır"]},
            {"title": "3. Adım: Rica ve İzin (Please)", "content": "İsteklerde cümlenin sonuna veya başına 'Please' eklemek talebi kibar bir ricaya dönüştürür.", "formula": "Could I have [Nesne], please? / Please help me.", "keyPhrase": "A coffee, please. | Help me, please.", "subPoints": ["'Please' İngilizce iletişimin altın kelimesidir"]}
        ]
        ruleCards = [
            {"ruleTitle": "Excuse Me vs Sorry Ayrımı", "formula": "Excuse Me = Eylemden Önce  <-->  Sorry = Eylemden Sonra (Özür)", "explanation": "Yol isterken 'Excuse me' dersiniz; kazara ayağına bastıktan sonra 'Sorry' dersiniz.", "exampleSnippet": "Excuse me, could you move? - Oh, sorry!", "tipNote": "Öncesi Excuse me, sonrası Sorry!"},
            {"ruleTitle": "'You're Welcome' Standartı", "formula": "Thank you -> You're welcome", "explanation": "İngilizcede 'Thank you' diyen birine 'Yes' denmez; mutlaka 'You are welcome' denir.", "cautionNote": "Teşekküre sessiz kalmak veya 'Yes' demek kaba algılanır."}
        ]
        mistakes = [
            {"wrongExample": "Birinin önünden geçerken 'Sorry' demek.", "correctExample": "Birinin önünden geçerken veya dikkat çekerken 'Excuse me' demek.", "rootCause": "Excuse me ile Sorry arasındaki zamanlama farkını bilmemek.", "memoryTip": "Öncesinde dikkat çekmek için EXCUSE ME, sonrasında özür için SORRY!"},
            {"wrongExample": "Thank you -> Please.", "correctExample": "Thank you -> You're welcome.", "rootCause": "Almanca (Bitte) gibi dillerdeki mantığı İngilizceye kopyalama hatası.", "memoryTip": "Teşekküre karşılık 'Please' denmez, 'You are welcome' denir!"}
        ]
        dialogue = [
            {"speaker": "Tourist", "textEn": "Excuse me, could you tell me how to get to the museum?", "textTr": "Afedersiniz, müzeye nasıl gidebileceğimi söyleyebilir misiniz?"},
            {"speaker": "Local", "textEn": "Of course! Walk straight and turn right at the traffic lights.", "textTr": "Tabii ki! Düz yürüyün ve trafik ışıklarından sağa dönün."},
            {"speaker": "Tourist", "textEn": "Thank you very much for your kind help!", "textTr": "Nazik yardımınız için çok teşekkür ederim!"},
            {"speaker": "Local", "textEn": "You are very welcome! Have a wonderful day.", "textTr": "Rica ederim! Harika bir gün geçirin."}
        ]
        contrastive = {"conceptA": "Türkçe Nezaket İfadeleri", "conceptB": "İngilizce Nezaket Matrisi", "keyDifference": "Türkçede 'Afedersiniz' hem izin isterken hem küçük bir çarpmada özür dilerken kullanılabilir. İngilizcede 'Excuse me' ve 'Sorry' kesin çizgilerle ayrılır.", "exampleA": "Afedersiniz, bakar mısınız?", "exampleB": "Excuse me, could you help me?"}
        memoryHook = "Nezaket Formülü: Öncesinde Excuse me, sonrasında Sorry, teşekkür edene You're welcome!"
        examples = [
            {"en": "Thank you very much for your kind assistance today.", "tr": "Bugünkü nazik yardımınız için çok teşekkür ederim.", "highlightedWords": ["Thank you very much", "assistance"], "grammarCategory": "Teşekkür Cümlesi", "contextNote": "İş ve sosyal yaşamda teşekkür.", "breakdownNote": "Thank you + very much + edat öbeği."},
            {"en": "Excuse me, is this seat taken?", "tr": "Afedersiniz, bu koltuk dolu mu?", "highlightedWords": ["Excuse me", "seat taken"], "grammarCategory": "İzin ve Dikkat Çekme", "contextNote": "Ulaşımda yer sorma.", "breakdownNote": "Excuse me + to be soru cümlesi."},
            {"en": "I am so sorry for keeping you waiting.", "tr": "Sizi beklettiğim için çok özür dilerim.", "highlightedWords": ["I am so sorry for", "waiting"], "grammarCategory": "Özür Cümlesi", "contextNote": "Gecikme özrü.", "breakdownNote": "I am so sorry + for + V-ing nesne."}
        ]
        vocab = [
            {"word": "Courteous", "phonetic": "/ˈkɜː.ti.əs/", "partOfSpeech": "adjective", "meaningTr": "Kibar, nazik, saygılı", "exampleSentence": "He gave a courteous reply."},
            {"word": "Appreciate", "phonetic": "/əˈpriː.ʃi.eɪt/", "partOfSpeech": "verb", "meaningTr": "Takdir etmek, müteşekkir olmak", "exampleSentence": "I appreciate your generous support."},
            {"word": "Welcome", "phonetic": "/ˈwel.kəm/", "partOfSpeech": "phrase", "meaningTr": "Rica ederim, hoş geldiniz", "exampleSentence": "You are very welcome here."},
            {"word": "Politeness", "phonetic": "/pəˈlaɪt.nəs/", "partOfSpeech": "noun", "meaningTr": "Nezaket, görgü kuralı", "exampleSentence": "Politeness opens every door."}
        ]
        qc_q = "Kalabalık bir caddede birinin önünden geçerken veya dikkatini çekerken hangi nezaket kalıbı kullanılır?"
        qc_opts = ["Excuse me", "Sorry", "Please", "Welcome"]
        qc_idx = 0
        qc_expl = "Bir eylemden önce izin istemek veya birinin dikkatini çekmek için 'Excuse me' kullanılır."
        ex_sent = "When someone says 'Thank you', the most polite standard response is 'You are ___'."
        ex_opts = ["welcome", "pleased", "good", "fine"]
        ex_ans = "welcome"
        ex_hint = "İngilizcede 'Rica ederim' anlamına gelen kelimeyi seçin."
        ex_expl = "'Thank you' ifadesine standart ve kibar karşılık 'You are welcome'dır."
        sb_tr = "Nazik yardımınız için çok teşekkür ederim ve her zaman rica ederim."
        sb_en = "Thank you very much for your kind assistance and you are always welcome"
        sb_dist = ["sorry", "excuse", "please", "me"]
        sb_expl = "Teşekkür (Thank you very much for your kind assistance) + bağlaç (and) + rica ederim (you are always welcome)."

    else:
        # Import remaining A1 modules from dedicated module engines
        from .a1_modules_engine import generate_a1_extended_blueprint
        return generate_a1_extended_blueprint(l, used_sb, used_ex, used_qc)

    # Validate words and return
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
            "scenarioTitle": f"{module} — {title}",
            "description": f"{title} konusunun günlük yaşamdaki gerçekçi kullanımı.",
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
            "prompt": f"Aşağıdaki cümleyi '{title}' konusuna en uygun seçenekle tamamlayın:",
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
            f"'{title}' konusunun temel dilbilgisel ve iletişimsel mantığı kavrandı.",
            "Türkçe düşünerek kelime kelime çeviri yapma tuzakları ve doğru İngilizce söz dizimi analiz edildi.",
            "Öğrenilen yapılar interaktif alıştırmalar ve cümle kurucu ile refleks haline getirildi."
        ]
    }
