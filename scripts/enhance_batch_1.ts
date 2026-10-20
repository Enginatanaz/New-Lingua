// scripts/enhance_batch_1.ts
// Pedagogical Enhancement Engine for Module 1 (Lessons 1-10)
import fs from 'fs';
import { module1_lessons_1_10 } from '../src/services/pedagogy/modules/module1_lessons_1_10';
import { TopicBlueprint } from '../src/services/pedagogicalEngine';

const batch1Enhancements: Record<number, Partial<TopicBlueprint>> = {
  1: {
    introduction: "İngilizce öğrenme yolculuğunuzun en heyecan verici ilk adımına hoş geldiniz! Yeni bir dille ilk temas kurduğunuz an, karşınızdaki kişiye sadece bilgi aktarmaz; aynı zamanda saygı, özgüven ve sıcaklık iletirsiniz. Günlük hayatta havaalanında, otelde, bir kafede ya da iş toplantısında bir yabancıyla karşılaştığınızda kuracağınız ilk 3 cümle tüm iletişimin seyrini belirler. Bu derste birisiyle karşılaştığınızda ortama uygun doğru selamı vermeyi, kendinizi doğal ve pürüzsüz bir şekilde tanıtmayı, karşınızdakinin adını nezaketle öğrenmeyi ve tanışma anının evrensel nezaket cümlesi olan 'Nice to meet you' kalıbını doğru bir refleksle kullanmayı öğreneceksiniz.",
    linguisticLogic: "İngilizcede tanışma süreci üç aşamalı kesin bir zincire dayanır: 1) Selamlama (Greeting), 2) Kimlik Bildirimi (Self-identification) ve 3) Memnuniyet İfadesi (Pleasure formula). Türkçede 'Benim adım...' dediğimizde iyelik kullanırız; İngilizcede de 'My name is...' tam olarak buna denktir. Ancak konuşma dilinde daha yaygın olan 'Ben Ali' karşılığı 'I am Ali' veya kısaca 'I'm Ali' kalıbıdır. En kritik nokta, karşınızdaki kişi 'Nice to meet you' (Tanıştığıma memnun oldum) dediğinde, Türkçe 'Ben de' alışkanlığıyla 'Me too' demek yerine 'Nice to meet you, too' diyerek cümleyi aynen tekrarlayıp sonuna 'too' (de/da) eklemektir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Ortama ve Zamana Göre Doğru Selamı Seçme",
        content: "İngilizcede selamlaşma rastgele seçilmez; günün saatine ve karşınızdaki kişiyle olan resmiyet derecenize göre değişir. Arkadaş ortamında, sokakta veya samimi mekanlarda 'Hello' ya da 'Hi' en doğal tercihtir. Ancak bir otel resepsiyonunda, iş görüşmesinde veya tanımadığınız birine hitap ederken günün saatine uygun selamlama kullanılır: Sabah uyanıştan öğlen 12:00'ye kadar 'Good morning' (Günaydın); 12:00'den akşam 17:00-18:00 civarına kadar 'Good afternoon' (Tünaydın / İyi günler); akşam saatlerinde ise 'Good evening' (İyi akşamlar) denir. Unutmayın: 'Good night' ASLA bir selamlama değildir; sadece ayrılırken veya gece yatarken 'İyi geceler' anlamında kullanılır.",
        formula: "Samimi: Hello / Hi  |  Resmi: Good morning (Sabah) / Good afternoon (Öğlen) / Good evening (Akşam)",
        keyPhrase: "Good morning! My name is Sarah.",
        subPoints: [
          "'Good night' ile konuşma başlatılmaz; vedalaşırken veya uyumadan önce söylenir.",
          "'Hi' resmi iş toplantılarında değil, sosyal ve gayriresmi ortamlarda tercih edilir.",
          "Sabah 11:59'da 'Good morning', 12:01'de ise 'Good afternoon' denir."
        ],
        rationale: "Zamana ve ortama uygun selamlama, İngilizce kültüründe temel sosyal zarafet kuralıdır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Kendini Tanıtma ve Karşı Tarafın Adını Sorma",
        content: "Adınızı söylerken iki temel alternatifiniz vardır: Daha resmi ve net olan 'My name is [İsim]' (Benim adım...) veya konuşma dilinde son derece yaygın ve pratik olan 'I am [İsim]' ya da kısaltılmış haliyle 'I'm [İsim]' (Ben...). Karşınızdaki kişinin adını öğrenmek istediğinizde ise soru kalıbımız 'What is your name?' şeklindedir. Doğal konuşma akışında anadili konuşucuları kelimeleri tek tek telaffuz etmez; 'What is' birleşerek 'What's' (/wʌts/) olur: 'What's your name?'. Kendinizi tanıtırken adınızın önüne asla unvan veya Türkçe ekler eklemeyin; doğrudan isminizi söyleyin.",
        formula: "My name is [İsim]  |  I'm [İsim]  |  What's your name?",
        keyPhrase: "Hello, I'm David. What's your name?",
        subPoints: [
          "Konuşma dilinde 'What is' yerine 'What's' kaynaşması neredeyse standarttır.",
          "'My name is' biraz daha vurgulu ve resmi tanıtımlarda, 'I'm' ise günlük tanışmalarda öne çıkar.",
          "Asla 'I name is...' demeyin; 'I' (ben) bir özne zamiridir, 'My' (benim) ise iyelik sıfatıdır."
        ],
        rationale: "Konuşma akıcılığı için kısaltmaları (contractions) ve doğru iyelik kalıbını ilk günden refleks haline getirmek gerekir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Tanışma Memnuniyetini Bildirme ve Karşılık Verme Zinciri",
        content: "Birisi adını söyledikten sonra tanışmayı tamamlayan altın cümle 'Nice to meet you' (Tanıştığıma memnun oldum) veya daha kibar ortamlarda 'Pleased to meet you' kalıbıdır. Bu ifade size söylendiğinde, Türkçedeki 'Ben de' refleksini İngilizceye doğrudan 'Me too' olarak aktarmak yaygın bir acemi hatasıdır. Doğru ve kibar olan karşılık, cümlenin aynısını koruyup sonuna 'too' (de/da) eklemektir: 'Nice to meet you, too!' (Ben de sizinle tanıştığıma memnun oldum). Çok önemli bir kural: 'Nice to meet you' yalnızca bir kişiyle HAYATINIZDA İLK KEZ tanıştığınızda söylenir. Daha önce tanıdığınız birini sokakta tekrar görürseniz 'Nice to see you' (Seni görmek ne güzel) demelisiniz.",
        formula: "A: Nice to meet you! -> B: Nice to meet you, too!",
        keyPhrase: "It's a pleasure. Nice to meet you, too!",
        subPoints: [
          "'Nice to meet you' ilk tanışmada; 'Nice to see you' ise önceden tanınan biri tekrar görüldüğünde kullanılır.",
          "'Me too' tek başına acemice ve kaba durur; 'Nice to meet you, too' tam sosyal reflekstir.",
          "Cümledeki 'too' kelimesi cümlenin en sonuna gelir ve önünde hafif bir duraklama yapılır."
        ],
        rationale: "Kültürel nezaket formüllerini eksiksiz uygulamak karşınızdaki kişide derin bir güven ve sempati yaratır."
      }
    ]
  },
  2: {
    introduction: "İngilizce öğrenirken alfabeyi bilmek sadece çocukça bir şarkı ezberlemek değildir; tam tersine uluslararası iletişimde hayat kurtaran stratejik bir beceridir. Yurt dışına seyahat ettiğinizde otel rezervasyonunda, havaalanında pasaport kontrolünde, bankada hesap açarken veya müşteri hizmetleriyle telefonda görüşürken Türkçe isim ve soyadınızı harf harf kodlamanız (spelling) istenecektir. İngilizce alfabede Türkçeden farklı olarak 26 harf bulunur ve en kritik nokta şudur: Bir harfin alfabedeki resmi adı ile kelime içinde çıkardığı ses birbirinden çok farklıdır. Bu derste Türk öğrencilerin en sık yanıldığı sesli harf tuzaklarını (A, E, I) çözecek, çift harfleri (double) ve e-posta işaretlerini profesyonelce telaffuz etmeyi öğreneceksiniz.",
    linguisticLogic: "İngilizcede 26 harf yaklaşık 44 farklı ses (fonem) üretir. Türkçede harfler neredeyse tamamen yazıldığı gibi sesletilirken, İngilizcede harfin alfabedeki adı ('letter name') ile kelime içindeki fonetik değeri ayrıdır. Harf kodlarken (spelling) harfin alfabedeki adı söylenir. Türk öğrenciler için en büyük tuzak sesli harflerdir: Türkçedeki 'E' harfinin sesi İngilizcede 'A' (/eɪ/) harfinin adıdır; Türkçedeki 'İ' harfinin sesi ise İngilizcede 'E' (/iː/) harfinin adıdır; 'I' harfi ise 'Ay' (/aɪ/) diye okunur. Bu üçlü karışıklığı zihinsel olarak çözmek tüm harf kodlama sürecini hatasız hale getirir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Kritik 5 Sesli Harfin (Vowels) Kodlanması ve Akıl Şifresi",
        content: "İngilizce alfabede 5 sesli harf vardır: A, E, I, O, U. Bu beş harfin okunuşunu zihninizde netleştirin: A harfi 'Ey' (/eɪ/), E harfi 'İi' (/iː/), I harfi 'Ay' (/aɪ/), O harfi 'Ou' (/oʊ/) ve U harfi 'Yuu' (/juː/). Türk öğrencilerin en çok yaptığı ölümcül hata, 'E' harfini görünce Türkçe düşünüp 'Ee' demektir; oysa İngilizcede 'Ee' sesi 'A' harfine aittir. Kendi isminizi kodlarken örneğin 'Emre' ismini kodluyorsanız: E (/iː/) - M (/em/) - R (/ɑːr/) - E (/iː/) şeklinde sesletmelisiniz.",
        formula: "A = /eɪ/ (Ey)  |  E = /iː/ (İi)  |  I = /aɪ/ (Ay)  |  O = /oʊ/ (Ou)  |  U = /juː/ (Yuu)",
        keyPhrase: "A (/eɪ/), E (/iː/), I (/aɪ/): Email starts with E, Ice cream starts with I.",
        subPoints: [
          "'A' harfi 'Ey' diye okunur; 'April' veya 'Apple' derken alfabedeki adı 'Ey'dir.",
          "'E' harfi 'İi' diye okunur; 'Email' kelimesinin başındaki harftir.",
          "'I' harfi 'Ay' diye okunur; İngilizcedeki göz ('eye') kelimesiyle birebir aynı sesletimdedir.",
          "'U' harfi 'Yuu' diye okunur; 'University' kelimesinin başındaki sestir."
        ],
        rationale: "Sesli harf telaffuzları oturmadan hiçbir yabancı resmi kayıt sisteminde isminizi doğru yazdıramazsınız."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Kolayca Karışan Sessiz Harf Çiftleri (G vs J, C vs S, B vs P, V vs W)",
        content: "Sessiz harflerde Türk öğrencileri en çok zorlayan harf çiftleri şunlardır: G ve J harfleri; G alfabede 'Cii' (/dʒiː/) diye okunurken, J harfi 'Cey' (/dʒeɪ/) diye okunur (Gmail G ile başlar, Jeans J ile başlar). C harfi 'Sii' (/siː/), S harfi 'Es' (/es/) olarak kodlanır. V harfinde üst ön dişler alt dudağa değer ve hafif bir titreşim oluşur (/viː/); W harfinde ise dudaklar öne uzatılarak yuvarlanır ve 'Dabılyu' (/ˈdʌb.əl.juː/) denir. Ayrıca H harfinin 'Eytç' (/eɪtʃ/) olduğunu unutmayın.",
        formula: "G = /dʒiː/ (Cii) vs J = /dʒeɪ/ (Cey)  |  C = /siː/ vs S = /es/  |  V = /viː/ vs W = /ˈdʌb.əl.juː/",
        keyPhrase: "G as in Google, J as in Jacket; V as in Victor, W as in Water.",
        subPoints: [
          "'G' harfine asla Türkçe 'Ge' demeyin; 'Cii' sesi çıkarın.",
          "'J' harfine asla 'Je' demeyin; 'Cey' sesi çıkarın.",
          "'H' harfi 'Eytç' okunur; 'Haç' veya 'He' şeklinde telaffuz edilmez.",
          "'Z' harfi İngiliz İngilizcesinde 'Zed' (/zed/), Amerikan İngilizcesinde 'Zii' (/ziː/) olarak sesletilir."
        ],
        rationale: "Karışan sessiz harfler pasaport ve rezervasyon işlemlerinde isim karışıklıklarının temel kaynağıdır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Harf Kodlama İstemek, Çift Harfler ve E-posta Standartları",
        content: "Karşınızdaki kişiden ismini veya bir kelimeyi kodlamasını istemek için en kibar kalıp 'Could you spell that, please?' (Bunu harf harf kodlayabilir misiniz lütfen?) veya 'How do you spell your surname?' (Soyadınızı nasıl yazıyorsunuz?) şeklindedir. Kodlama yaparken peş peşe gelen aynı harfler için her birini ayrı söylemek yerine 'double' (çift) kelimesini kullanmak profesyoneldir; örneğin 'Anna' kodlanırken 'A - double N - A' denir. E-posta adreslerinde ise '@' sembolü 'at' (/æt/), '.' sembolü ise 'dot' (/dɒt/) olarak sesletilir (asla 'point' veya 'comma' denmez).",
        formula: "Could you spell that, please?  |  Double [Harf]  |  [isim] AT [domain] DOT com",
        keyPhrase: "It is spelled: E-L-I-F, double T-E-K-I-N.",
        subPoints: [
          "Ardışık iki aynı harf varsa: 'double L' (çift L), 'double O' (çift O).",
          "E-posta adreslerinde '@' işareti 'at' diye okunur; örneğin 'info at gmail dot com'.",
          "Alt çizgi için 'underscore' (_), kısa çizgi için 'hyphen' veya 'dash' (-) denir."
        ],
        rationale: "Uluslararası iletişimde e-posta ve telefon üzerinden bilgi aktarırken küresel protokole uyum sağlar."
      }
    ]
  },
  3: {
    introduction: "Sayılar sadece matematik için değil, günlük hayatın her anında hayatta kalabilmek için gereklidir. Alışverişte fiyat sormak ve anlamak, saati öğrenmek, yaşınızı söylemek, otel oda numaranızı bulmak veya bir arkadaşınızla telefon numaranızı paylaşmak sayıları eksiksiz bilmeye dayanır. İngilizcede 1'den 100'e kadar saymak belirli bir mantık silsilesi takip eder. Ancak Türk öğrencilerin sıklıkla düştüğü kritik bir fonetik tuzak vardır: 13-19 arasındaki '-teen' sayıları ile 20, 30, 40 gibi onluk katlar olan '-ty' sayıları kulakta çok benzer yankılanabilir. Vurguyu yanlış heceye koyduğunuzda 15 (fifteen) yerine 50 (fifty) anlaşılabilir! Bu derste sayıların mantığını, hayati vurgu kuralını, yaş ve telefon numarası söyleme inceliklerini öğreneceksiniz.",
    linguisticLogic: "İngilizcede 1-12 arası sayılar tamamen kendine has köklere sahiptir (one, two ... eleven, twelve). 13-19 arası ergenlik/gençlik sayıları '-teen' ekiyle biter ve kelime vurgusu daima son hecededir (thir-TEEN, fif-TEEN). 20-90 arası onluk katlar ise '-ty' ekiyle biter ve vurgu İLK hecede toplanır (THIR-ty, FIF-ty). Yaş söylerken İngilizcede Türkçeden farklı olarak 'sahip olmak' fiili kullanılmaz; yaş bir durum ve varoluş kabul edildiği için 'To Be' (am/is/are) fiili kullanılır: 'I am 25 years old'. Telefon numaraları söylerken ise sayılar yüzlük veya binlik gruplar halinde değil, tek tek rakam olarak okunur; sıfır için ise genellikle harf olan 'O' (/oʊ/) veya 'zero' denir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: 1-20 Arası Sayılar ve '-teen' Vurgusu",
        content: "İlk olarak 1'den 12'ye kadar olan temel sayıları ezberleyin: one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve. 13'ten 19'a kadar olan sayılar ise '-teen' ile biter: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen. Burada dikkat edilmesi gereken iki imla ve telaffuz değişimi vardır: 3 sayısı 'three' iken 13 'thirteen' olur; 5 sayısı 'five' iken 15 'fifteen' olur (asla *fiveteen denmez). En kritik telaffuz kuralı: '-teen' sayılarında ses tonunuzu ve vurgunuzu kelimenin SONUNA koyun: four-TEEN, seven-TEEN.",
        formula: "1-12: Özgün kökler  |  13-19: [Kök] + TEEN (Vurgu sonda: thir-TEEN, fif-TEEN)",
        keyPhrase: "She is fourteen (14) years old, not forty (40).",
        subPoints: [
          "3 -> three ama 13 -> thirteen (thir- kökü kullanılır).",
          "5 -> five ama 15 -> fifteen (fif- kökü kullanılır).",
          "'-teen' ekindeki iki 'e' harfi uzun bir 'ii' sesi verir (/tiːn/)."
        ],
        rationale: "Ergenlik sayıları ile onlukların karışmaması için fonetik vurgunun son heceye yerleşmesi şarttır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Onluklar (20-90) ve Hayati Vurgu Ayrımı (-teen vs -ty)",
        content: "Onluk katlar '-ty' ekiyle yapılır: twenty (20), thirty (30), forty (40 - 'u' harfi düşer!), fifty (50), sixty (60), seventy (70), eighty (80), ninety (90), one hundred (100). Onluklardan sonra bir basamak eklerken araya kısa çizgi (hyphen) konur: twenty-one (21), thirty-five (35), ninety-nine (99). Hayati dinleme kuralı: '-ty' sayılarında vurgu İLK hecededir ve son hece kısa ve sönük biter: FIF-ty (50) vs fif-TEEN (15); THIR-ty (30) vs thir-TEEN (13). Mağazada satıcıya 15 dolar mı yoksa 50 dolar mı ödeyeceğinizi bu vurgu belirler!",
        formula: "Onluklar: [Kök] + TY (Vurgu başta)  |  Bileşik: Onluk + Tire (-) + Birlik (twenty-five)",
        keyPhrase: "Room forty (40) is on the left; room fourteen (14) is on the right.",
        subPoints: [
          "40 yazılırken 'forty' şeklinde yazılır, 'fourty' YANLIŞTIR ('u' düşer).",
          "13-19: thir-TEEN, four-TEEN (vurgu sonda, uzun 'in' sesi).",
          "30-90: THIR-ty, FOR-ty, FIF-ty (vurgu başta, kısa 'ti' sesi)."
        ],
        rationale: "Fiyat, oda ve uçuş kapısı numaralarında telafisi zor maddi hataları önler."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Yaş Söyleme ve Telefon Numarası Kodlama Standartları",
        content: "İngilizcede yaş söylerken asla 'I have 20 years' denmez; Türkçedeki '20 yaşındayım' anlamında 'To Be' fiili kullanılır: 'I am 25' veya 'I am 25 years old'. Cümlenin sonuna sadece '*I am 25 years' demek kural dışıdır; ya doğrudan sayıyı söyleyip bitirin ('I am 25') ya da 'years old' kalıbını eksiksiz ekleyin. Telefon numarası söylerken ise rakamlar tek tek okunur: 0532 için 'oh-five-three-two' veya 'zero-five-three-two' denir. Yan yana iki aynı rakam varsa 'double' kullanılır: 55 için 'double five' demek anadili konuşucularının en sık tercih ettiği yöntemdir.",
        formula: "Yaş: I am [Sayı] (years old)  |  Telefon: Rakam rakam okuma (0 = oh / zero, 77 = double seven)",
        keyPhrase: "I am thirty years old. My phone number is oh-five-four-one...",
        subPoints: [
          "'I am 20' DOĞRU, 'I am 20 years old' DOĞRU; 'I am 20 years' YANLIŞTIR.",
          "Yaşta asla 'have / has' kullanılmaz; yaş sahip olunan bir eşya değil, varoluş halidir.",
          "Telefon numarasında duraklamalar 3'er veya 4'er rakamlık bloklar halinde yapılır."
        ],
        rationale: "Kişisel bilgi formlarını doldururken ve sözlü teyitlerde uluslararası standarda uyum sağlar."
      }
    ]
  },
  4: {
    introduction: "İngilizce cümle kurmanın en temel yapı taşı öznelerdir. Türkçede fiillerin sonundaki şahıs ekleri sayesinde 'Gidiyorum' dediğimizde cümlenin kim tarafından yapıldığını anlarız ve 'ben' sözcüğünü kullanmasak da cümle tam olur. Ancak İngilizcede böyle bir zengin şahıs eki sistemi yoktur! İngilizce bir cümlede eylemi yapan kişi (özne) cümlenin başında açıkça belirtilmek ZORUNDADIR. Özne olmadan kurulan bir cümle, motoru olmayan bir arabaya benzer; hareket edemez. Bu derste İngilizcedeki 7 temel kişi zamirini (I, You, He, She, It, We, They), Türkçede olmayan 3. tekil şahıs cinsiyet ayrımını (He / She / It) ve 'You' zamirinin hem 'sen' hem de 'siz' olarak üstlendiği çift rolü öğreneceksiniz.",
    linguisticLogic: "Türkçe sondan eklemeli bir dildir; fiil çekimi özneyi taşır (Örnek: 'Geld-im'). İngilizce ise bükümlü/analitik bir dildir; fiiller şahsa göre çok az değişir (I go, you go, we go, they go). Bu yüzden eylemi kimin yaptığını bilmenin tek yolu cümlenin başında bir 'Subject Pronoun' (Özne Zamiri) kullanmaktır. Zamirlerin mantığı, bir ismi sürekli tekrar etmek yerine onun yerine geçmektir (Ali is a doctor -> He is a doctor). En önemli ayrımlardan biri, İngilizcede nesneler ve hayvanlar için cinsiyetsiz 'It' zamirinin bulunması; erkekler için 'He', kadınlar için ise 'She' zamirinin katı biçimde ayrılmasıdır.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: İngilizcede Neden Her Cümlede Özne Şarttır? 'I' ve 'You'",
        content: "İngilizcede birinci tekil şahıs 'I' (Ben) zamiridir ve bu harf cümlenin neresinde olursa olsun (başta, ortada veya sonda) DAİMA BÜYÜK HARFLE ('I') yazılır; asla küçük 'i' olarak yazılmaz. İkinci şahıs ise 'You' zamiridir. Çok ilginç bir dil gerçeği: İngilizcede 'sen' ve 'siz' için iki ayrı kelime yoktur! Karşınızda tek bir arkadaşınız varken de 'You' dersiniz, yüz kişilik bir sınıfa hitap ederken de 'You' dersiniz. Resmiyet veya samimiyet ayrımı kelimeyle değil, hitap tonlaması ve nezaket ifadeleriyle sağlanır.",
        formula: "I = Ben (Daima büyük 'I')  |  You = Sen VEYA Siz (Tekil ve çoğul ortak)",
        keyPhrase: "I am a student, and you are my teacher.",
        subPoints: [
          "'I' zamiri cümle ortasında bile olsa asla küçük harfle 'i' yazılmaz.",
          "'You' hem 'sen' hem 'siz' demektir; fiil çekiminde daima çoğul kabul edilir (You are).",
          "İngilizcede öznesiz cümle kurulamaz; fiilden önce mutlaka bir zamir gelmelidir."
        ],
        rationale: "Öznenin zorunlu olması İngilizce söz diziminin temel taşıdır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: 3. Tekil Şahıs Cinsiyet Ayrımı: He, She ve It",
        content: "Türkçede sadece tek bir 3. şahıs zamiri vardır: 'O'. Oysa İngilizcede 'O' demek istediğinizde varlığın cinsiyetine ve türüne bakmak zorundasınız. Erkek insanlar veya erkek olarak bilinen varlıklar için 'He' (Ali -> He, my father -> He); kadın insanlar için 'She' (Ayşe -> She, my sister -> She); insan dışındaki tüm tekil nesneler, hayvanlar, soyut kavramlar ve hava durumu için ise 'It' (the table -> It, the dog -> It, the weather -> It) kullanılır. Evcil hayvanınız ailenin bir ferdi gibi görülüyorsa ona sevgiyle 'he' veya 'she' denebilir, ancak standart kural insan dışı varlıklar için 'It' kullanmaktır.",
        formula: "He = O (Erkek insan)  |  She = O (Kadın insan)  |  It = O (Tekil nesne / hayvan / kavram)",
        keyPhrase: "David is tired; he is sleeping. Maria is ready; she is waiting.",
        subPoints: [
          "Masa, araba, şehir, fikir gibi tekil cansız varlıklar daima 'It' zamirini alır.",
          "Cinsiyetini bilmediğiniz bir bebekten veya hayvandan bahsederken 'It' kullanılabilir.",
          "İngilizcede nesnelerin gramatik cinsiyeti (eril/dişil) yoktur; sadece 'It' vardır."
        ],
        rationale: "Türkçedeki tekil 'O' alışkanlığını 3 farklı İngilizce zamire doğru dağıtma becerisi kazandırır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Çoğul Zamirler: We, You ve They",
        content: "Birden fazla kişiyi veya nesneyi anlatırken çoğul zamirler devreye girer. Konuşan kişinin de içinde bulunduğu grup için 'We' (Biz) denir (Tom and I -> We). Karşınızdaki grup için daha önce gördüğümüz gibi 'You' (Siz) kullanılır. Cümlenin üçüncü şahıs çoğulu ise 'They' (Onlar) zamiridir. Burada hayati bir kural vardır: 'They' zamiri SADECE İNSANLAR İÇİN DEĞİLDİR! Birden fazla masa (tables), birden fazla köpek (dogs) veya birden fazla araba (cars) için de 'They' kullanılır. Tekil bir masa 'It' iken, iki masa 'They' olur!",
        formula: "We = Biz (Ben + Diğerleri)  |  You = Siz  |  They = Onlar (İnsanlar VE Çoğul Nesneler!)",
        keyPhrase: "The cars are outside; they are very expensive.",
        subPoints: [
          "'Tom and I' (Tom ve ben) zamir olarak 'We' (Biz) olur.",
          "'Tom and Sarah' (Tom ve Sarah) zamir olarak 'They' (Onlar) olur.",
          "'The books' (Kitaplar) çoğul olduğu için zamir olarak 'They' olur, asla *It olmaz!"
        ],
        rationale: "'They' zamirinin hem insanlar hem de cansız çoğullar için geçerli olduğunu anlamak kilit bir kırılma noktasıdır."
      }
    ]
  },
  5: {
    introduction: "Küreselleşen dünyada tanıştığınız insanlarla sohbet ederken en çok sorulan ve cevaplanan konulardan biri kökeninizdir: 'Nerelisiniz? Hangi dili konuşuyorsunuz?'. Ancak İngilizcede ülke adı, milliyet ve konuşulan dil arasında Türkçedekinden farklı dilbilgisel ve imla kuralları vardır. Örneğin 'Türkiye' bir ülke adı iken, 'Turkish' hem milliyeti (Türk) hem de konuşulan dili (Türkçe) temsil eder. Ayrıca İngilizcede tüm milliyet ve dil isimleri istisnasız büyük harfle başlar! Bu derste 'Where are you from?' sorusuna 'from' edatıyla doğru cevap vermeyi, milliyetinizi sıfat olarak ifade etmeyi ve dillerden bahsederken 'speak' fiilini pürüzsüzce kullanmayı öğreneceksiniz.",
    linguisticLogic: "İngilizcede köken üç farklı boyutta ifade edilir: 1) ÜLKE (Country): Coğrafi bir mekan bildirir ve 'nereden geldiğinizi' anlatan 'FROM' edatıyla kullanılır: 'I am from Turkey / Spain / Germany'. 2) MİLLİYET (Nationality): Kişiyi tanımlayan bir niteleme sıfatıdır ve edatsız olarak doğrudan To Be fiilinden sonra gelir: 'I am Turkish / Spanish / German'. 3) DİL (Language): Genellikle milliyet sıfatıyla aynı kelimedir ve 'speak' (konuşmak) eylemiyle kullanılır: 'I speak Turkish and English'. En kritik imla kuralı: İngilizcede milliyet ve dil isimleri (Turkish, English, French, German) cümle başında, ortasında veya sonunda nerede olursa olsun DAİMA BÜYÜK HARFLE başlar.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Ülke Bildirimi ve 'FROM' Edatının Mekanizması",
        content: "Birine nereli olduğunu sormak için evrensel kalıp 'Where are you from?' şeklindedir. Bu soruya cevap verirken formülümüz: 'I am from + [Ülke Adı]'. Buradaki 'from' kelimesi Türkçedeki '-den / -dan' ayrılma hal ekidir ve kökeninizin hangi coğrafyadan çıktığını gösterir. Örneğin 'I am from Turkey' (Ben Türkiye'denim / Türkiyeliyim), 'He is from Italy' (O İtalya'dan). Birleşik Krallık ve Amerika Birleşik Devletleri gibi ülkelerin başında 'the' artikeli kullanılır: 'the UK', 'the USA'.",
        formula: "Soru: Where are you from?  |  Cevap: I am from + [Ülke Adı]",
        keyPhrase: "Where are you from? - I am from Canada.",
        subPoints: [
          "'from' edatından sonra ÜLKE adı gelir, milliyet gelmez: 'from Turkey' DOĞRU, *from Turkish YANLIŞTIR.",
          "'the UK' (Birleşik Krallık) ve 'the USA' (Amerika) ülkelerinin başında 'the' şarttır.",
          "Sorudaki 'from' edatı İngilizcede genellikle cümlenin en sonuna yerleşir."
        ],
        rationale: "Ülke adı ile milliyet sıfatının edat kullanımını kesin çizgilerle birbirinden ayırır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Milliyet Bildirimi (Doğrudan Sıfat Kullanımı)",
        content: "Milliyetinizi söylerken artık 'from' edatını KULLANMAZSINIZ. Milliyet bir sıfattır ve To Be fiilinin hemen arkasına doğrudan yerleşir: 'I am Turkish' (Ben Türküm), 'She is Italian' (O İtalyan), 'They are Japanese' (Onlar Japon). Milliyet sıfatlarının son ekleri belirli gruplara ayrılır: -ish (Turkish, British, Spanish), -an / -ian (German, Italian, American, Canadian), -ese (Japanese, Chinese). Asla 'I am from Turkish' demeyin; bu ifade 'Ben Türkçedenim' gibi anlamsız bir hataya yol açar.",
        formula: "Özne + To Be (am / is / are) + [Milliyet Sıfatı] (Edat YOK!)",
        keyPhrase: "I am from Germany, so I am German.",
        subPoints: [
          "Milliyet bildirirken asla 'from' kullanılmaz: 'I am Turkish' (from yok!).",
          "Milliyet kelimeleri İngilizcede daima büyük harfle başlar (Spanish, French, Turkish).",
          "Milliyet sıfatı bir ismi niteleyebilir: 'Turkish coffee', 'Italian car'."
        ],
        rationale: "Türk öğrencilerin en sık yaptığı 'I am from Turkish' köken hatasını kalıcı olarak yok eder."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Konuşulan Diller, 'Speak' Fiili ve Büyük Harf Kuralı",
        content: "Hangi dili veya dilleri konuştuğunuzu belirtmek için 'speak' (konuşmak) fiili kullanılır: 'I speak English and Turkish' (Ben İngilizce ve Türkçe konuşuyorum). Karşınızdakine dil sormak için 'Do you speak English?' kalıbı kullanılır. Çoğu dilde milliyet kelimesi ile dil kelimesi aynıdır (Spanish = İspanyol / İspanyolca). İngilizce yazım kurallarında dil isimleri de tıpkı milliyetler gibi DAİMA büyük harfle yazılır (English, German, Arabic). Küçük harfle yazmak (örneğin *english) ciddi bir imla hatasıdır.",
        formula: "Özne + speak / speaks + [Dil İsmi]  |  Soru: Do you speak [Dil]?",
        keyPhrase: "She speaks three languages: English, French and Turkish.",
        subPoints: [
          "Dil isimleri istisnasız büyük harfle başlar: 'English', 'Turkish', 'Russian'.",
          "Dilden önce 'the' gelmez: 'I speak English' denir, asla *I speak the English denmez.",
          "Birkaç dil sayarken araya virgül ve son dile 'and' bağlacı eklenir."
        ],
        rationale: "Uluslararası yazışmalarda ve günlük diyaloglarda dil yeterliliğini doğru gramer ve imlayla ifade etmeyi sağlar."
      }
    ]
  },
  6: {
    introduction: "Bir insanla tanıştıktan hemen sonra sohbetin ikinci cümlesi neredeyse her zaman mesleğe gelir: 'Ne iş yapıyorsunuz?'. İngilizcede meslekler sosyal kimliğin en önemli parçalarından biridir ve meslek söylerken Türkçeden çok farklı, hayati bir kural vardır: İngilizcede meslek isimlerinin önüne tekil sayılabilir oldukları için MUTLAKA 'a' veya 'an' artikeli gelmek zorundadır! Türkçede 'Ben doktorum' deriz, ancak İngilizcede kelimesi kelimesine 'Ben BİR doktorum' (I am a doctor) demek zorundasınız. 'a' artikelini unutmak İngilizce bir cümlede kulağı anında tırmalar. Bu derste en yaygın meslek isimlerini, doğru meslek sorma kalıplarını ve nerede çalıştığınızı anlatırken kullanılan 'work in / at / for' edatlarını öğreneceksiniz.",
    linguisticLogic: "İngilizce mantığında meslekler somut ve sayılabilen tekil isimlerdir (countable singular nouns). Kural gereği hiçbir tekil sayılabilir isim cümle içinde başında bir artikel (a/an/the) veya iyelik sıfatı olmadan çıplak kalamaz. Eğer meslek sessiz bir harfle başlıyorsa 'a' (a doctor, a teacher, a lawyer); sesli bir harfle başlıyorsa telaffuz akıcılığı için 'an' (an engineer, an architect, an accountant) alır. Meslek sorarken Türkçedeki 'Mesleğin ne?' karşılığı 'What is your job?' olsa da, doğal İngilizcede anadili konuşucuları %90 oranında 'What do you do?' (Ne işle meşgulsünüz?) sorusunu tercih eder.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Hayati 'a / an' Kuralı: Meslek Asla Çıplak Kalamaz!",
        content: "Mesleğinizi söylerken formülümüz: 'I am + a / an + [Meslek]'. Eğer meslek kelimesi sessiz bir sesle başlıyorsa 'a' gelir: 'I am a teacher' (Ben öğretmenim), 'He is a doctor' (O bir doktor). Eğer meslek kelimesi sesli bir sesle (a, e, i, o) başlıyorsa araya 'n' sesi girer ve 'an' olur: 'She is an engineer' (O bir mühendis), 'I am an architect' (Ben bir mimarım). Eğer çoğul şahıslardan bahsediyorsanız (We / They) artık 'a/an' kalkar ve mesleğin sonuna çoğul eki '-s' gelir: 'We are teachers' (Biz öğretmeniz), 'They are doctors' (Onlar doktordur).",
        formula: "Tekil: I am / He is / She is + A / AN + [Meslek]  |  Çoğul: We / They are + [Meslek]-s",
        keyPhrase: "I am an engineer, and my wife is a lawyer.",
        subPoints: [
          "Asla *I am doctor denmez; mutlaka 'I am A doctor' denmelidir.",
          "Sesliyle başlayanlar: an accountant (muhasebeci), an artist (sanatçı), an actor (aktör).",
          "Çoğullarda 'a/an' düşer: 'They are engineers' (Mühendistirler)."
        ],
        rationale: "İngilizcenin en temel isim belirteç mekanizmasını meslek bağlamında kalıcı olarak pekiştirir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Doğal Meslek Sorma Kalıpları: 'What do you do?'",
        content: "Karşınızdaki kişinin ne iş yaptığını sormanın en yaygın ve doğal yolu 'What do you do?' kalıbıdır. Bu cümle kelime kelime 'Sen ne yaparsın?' gibi görünse de, İngilizce kültüründe doğrudan 'Ne işle meşgulsün? / Mesleğin ne?' anlamına gelen standart deyimsel sorudur. Alternatif olarak biraz daha doğrudan olan 'What is your job?' veya 'What do you do for a living?' (Geçiminizi nasıl sağlıyorsunuz?) kalıpları da kullanılır. Üçüncü bir şahsın mesleğini sorarken 'do' yardımcı fiili 'does' olur: 'What does he do?' (O ne iş yapıyor?).",
        formula: "Standart: What do you do?  |  Alternatif: What do you do for a living?  |  3. Şahıs: What does he/she do?",
        keyPhrase: "What do you do? - I am a software developer.",
        subPoints: [
          "'What do you do?' sorusu 'Şu an ne yapıyorsun?' demek DEĞİLDİR; meslek sorusudur.",
          "Şu an ne yaptığını sormak için 'What are you doing?' denir.",
          "Cevap verirken doğrudan mesleğinizi 'I am a/an...' kalıbıyla söylersiniz."
        ],
        rationale: "Geniş zamanın meslek sorgulama fonksiyonunu anlık şimdiki zamandan net olarak ayırır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Çalışma Yeri ve Şirket Bildirme: 'work in / at / for'",
        content: "Mesleğinizi söyledikten sonra nerede çalıştığınızı anlatırken üç temel edat kullanılır: 1) 'work for + [Şirket Adı]': Belirli bir şirket veya kurum için çalışıyorsanız kullanılır: 'I work for Google / Siemens'. 2) 'work in + [Sektör / Bina Türü]': Bir sektör veya kapalı alan belirtiyorsanız kullanılır: 'I work in finance' (finansta çalışıyorum), 'I work in a hospital' (hastanede çalışıyorum). 3) 'work at + [Özel Mekan]': Belirli bir çalışma noktasını gösterir: 'I work at a local school'. Eğer emekliyseniz 'I am retired', iş arıyorsanız kibarca 'I am currently looking for a job' diyebilirsiniz.",
        formula: "work for [Şirket]  |  work in [Sektör / Bina]  |  work at [Mekan]",
        keyPhrase: "I am an accountant and I work for an international bank in London.",
        subPoints: [
          "Şirket ismiyle 'for' tercih edilir: 'I work for Apple'.",
          "Sektör ismiyle 'in' tercih edilir: 'I work in IT / education / healthcare'.",
          "İşsiz olduğunuzu kibarca söylemek için: 'I am in between jobs' veya 'I am unemployed'."
        ],
        rationale: "Profesyonel kimlik tanıtımını zenginleştirerek iş dünyasında akıcı diyalog kurmayı sağlar."
      }
    ]
  },
  7: {
    introduction: "Zamanı doğru yönetmek ve randevuları planlamak iş ve sosyal hayatın merkezindedir. Bir arkadaşınızla buluşma ayarlarken, uçak bileti alırken, doğum gününüzü kutlarken veya teslim tarihlerini konuşurken günleri, ayları, mevsimleri ve tarihleri hatasız telaffuz etmeniz gerekir. Ancak İngilizcede zaman bildiren kelimelerin önüne gelen edatlar (prepositions of time) Türk öğrencilerin en çok karıştırdığı konulardan biridir. Günlerin önüne neden 'ON' gelir de ayların ve mevsimlerin önüne neden 'IN' gelir? Tarih söylerken normal sayılar yerine neden sıra sayıları (first, second, third) kullanılır? Bu derste bu zaman matrisini mantığıyla çözecek ve İngilizce bir takvimi baştan sona yönetebileceksiniz.",
    linguisticLogic: "İngilizcede zaman edatları büyüklük-küçüklük piramidine göre çalışır: 1) Büyük ve geniş zaman dilimleri (Yıllar, Mevsimler, Aylar) için 'IN' kullanılır (in summer, in July, in 2026). Çünkü ay veya mevsim, içine girdiğiniz geniş bir zaman zarfıdır. 2) Belirli, tekil ve 24 saatlik GÜNLER için 'ON' kullanılır (on Monday, on Friday). Tarihler de gün bildirdiği için 'ON' alır (on May 15th). En önemli imla kuralı: İngilizcede tüm gün ve ay isimleri (Monday, Friday, January, August) cümledeki yeri neresi olursa olsun DAİMA BÜYÜK HARFLE başlar (mevsim isimleri ise özel bir durum olmadıkça küçük harfle yazılabilir). Tarih söylerken '1 Mayıs' için 'one May' denmez; sıra sayısı olan 'first of May' kullanılır.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Haftanın Günleri (Days of the Week) ve 'ON' Edatı",
        content: "Haftanın 7 günü şunlardır: Monday (Pazartesi), Tuesday (Salı), Wednesday (Çarşamba - 'd' harfi okunmaz: /ˈwenz.deɪ/), Thursday (Perşembe - 'th' peltek: /ˈθɜːz.deɪ/), Friday (Cuma), Saturday (Cumartesi), Sunday (Pazar). Hafta içi günlerine 'weekdays', hafta sonuna ise 'weekend' denir. Gün bildiren bir eylemin önüne daima 'ON' edatı getirilir: 'on Monday' (Pazartesi günü), 'on Friday morning' (Cuma sabahı). Eğer bir eylemi her Pazartesi düzenli yapıyorsanız günün sonuna '-s' ekleyebilirsiniz: 'on Mondays' (Pazartesileri).",
        formula: "ON + [Gün İsmi]  |  Düzenli tekrar: ON + [Gün İsmi]-s",
        keyPhrase: "The meeting is on Wednesday at 10 AM.",
        subPoints: [
          "Gün isimleri istisnasız BÜYÜK HARFLE başlar: Monday, Tuesday...",
          "Wednesday kelimesindeki ilk 'd' harfi sessizdir; 'Venzdey' okunur.",
          "Hafta sonu için İngiliz İngilizcesinde 'at the weekend', Amerikan İngilizcesinde 'on the weekend' denir."
        ],
        rationale: "Haftalık planlama ve toplantı ajandalarında doğru edat kullanımını otomatikleştirir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Aylar (Months), Mevsimler (Seasons) ve 'IN' Edatı",
        content: "Yılın 12 ayı ve 4 mevsimi geniş birer zaman zarfı olduğu için daima 'IN' edatıyla kullanılır: in January, in August, in spring (ilkbaharda), in summer (yazın), in autumn / fall (sonbaharda), in winter (kışın). Aylar da tıpkı günler gibi daima BÜYÜK HARFLE başlar: January, February, March, April, May, June, July, August, September, October, November, December. Unutmayın: Eğer sadece ayı söylüyorsanız 'in July' dersiniz; ancak ayın yanına belirli bir gün sayısı eklerseniz artık o bir gün olduğu için edat 'ON'a dönüşür: 'on July 20th'!",
        formula: "IN + [Ay] (in July)  |  IN + [Mevsim] (in summer)  |  ON + [Ay + Gün] (on July 20th)",
        keyPhrase: "My birthday is in August, and I love going on vacation in summer.",
        subPoints: [
          "Aylar daima büyük harfle başlar: March, October.",
          "Mevsimler özel isim değildir, cümle içinde küçük harfle yazılır (in winter).",
          "Sadece ay: IN May  |  Belirli günle ay: ON May 12th."
        ],
        rationale: "Zaman ölçeği büyüdükçe 'in', güne indikçe 'on' edatının kullanıldığını kavratır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Tarih Söyleme ve Sıra Sayıları (Ordinal Numbers: 1st, 2nd, 3rd...)",
        content: "İngilizcede tarih söylerken düz sayılar (one, two, three) kullanılmaz; sıra sayıları (birinci, ikinci, üçüncü) kullanılır. İlk üç sıra sayısı düzensizdir: 1st (first), 2nd (second), 3rd (third). 4'ten itibaren sonuna '-th' eki gelir: 4th (fourth), 5th (fifth), 21st (twenty-first), 22nd (twenty-second), 31st (thirty-first). Yazarken '15 May' veya 'May 15th' yazabilirsiniz; ancak okurken mutlaka 'the' ve 'of' eklenerek 'the fifteenth of May' ya da 'May the fifteenth' şeklinde sesletilir. Tarihlerin önüne gün kuralı gereği 'ON' edatı gelir: 'I was born on the fifth of May'.",
        formula: "Yazılış: 15 May / May 15th  |  Okunuş: the fifteenth of May / May the fifteenth",
        keyPhrase: "Our flight is on the twenty-first of September.",
        subPoints: [
          "1st = first, 2nd = second, 3rd = third; diğerleri genellikle '-th' alır.",
          "Tarihlerin önüne daima 'ON' edatı gelir: 'on April 23rd'.",
          "Yıllar ikişerli okunur: 1995 -> nineteen ninety-five; 2026 -> twenty twenty-six."
        ],
        rationale: "Resmi evrak, biletleme ve vize tarihlerini doğru okuma ve telaffuz etme yetkinliği kazandırır."
      }
    ]
  },
  8: {
    introduction: "Saat sormak ve söylemek yabancı bir ülkede en sık başvuracağınız hayatta kalma reflekslerinden biridir. Uçağınızın kalkış saati, tren hareket saati, iş toplantınızın başlangıcı veya sinema seansı daima saatle ifade edilir. İngilizcede saat söylemenin iki farklı yolu vardır: Birincisi, anadili konuşucularının günlük hayatta çok sık kullandığı geleneksel yöntem olan 'kala' (to) ve 'geçe' (past) ifadeleri; ikincisi ise tıpkı dijital bir saat ekranını okur gibi doğrudan rakamları yan yana söyleyen modern ve pratik yöntemdir. Ayrıca saatlerin önüne MUTLAKA 'AT' edatının gelmesi dilbilgisinin sarsılmaz kuralıdır. Bu derste saat sormayı, çeyrek ve buçukları hatasız ifade etmeyi ve randevu saatlerini netleştirmeyi öğreneceksiniz.",
    linguisticLogic: "İngilizce saat mantığı akrebin yelkovanla olan ilişkisine göre iki yarıya bölünür: Saatin ilk 30 dakikası için 'geçiyor' anlamında 'PAST' (Amerikan İngilizcesinde 'after'); 30 dakikadan sonraki kısım için ise bir sonraki saate 'var/kala' anlamında 'TO' edatı kullanılır. Çeyrek geçe için 'quarter past' (15 dakika geçiyor), buçuk için 'half past' (yarım saat geçti), çeyrek kala için ise 'quarter to' (15 dakika var) kalıpları standarttır. Saat kaçta bir eylem yapılacağını söylerken zaman piramidinin en sivri, en nokta atışı ucu olan 'AT' edatı devreye girer: 'at 8 o'clock', 'at 3:30'.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Saat Sorma Kalıpları ve Tam Saatler ('o'clock')",
        content: "Birisinden saati öğrenmek için en yaygın soru: 'What time is it?' veya biraz daha samimi/İngiliz tarzı olan 'Have you got the time?' (Saatiniz var mı?) kalıbıdır. Sokakta tanımadığınız birine sorarken başına mutlaka 'Excuse me' eklemelisiniz: 'Excuse me, what time is it, please?'. Tam saatleri söylerken formülümüz: 'It is + [Sayı] + o'clock'. Örneğin: 'It is eight o'clock' (Saat sekiz). Önemli kural: 'o'clock' kelimesi SADECE ve SADECE tam saatlerde kullanılır; dakikalı saatlerde (örneğin 8:15'te) asla 'o'clock' denmez!",
        formula: "Soru: What time is it?  |  Tam Saat: It is + [Saat] + o'clock",
        keyPhrase: "Excuse me, what time is it? - It is exactly five o'clock.",
        subPoints: [
          "'o'clock' ('of the clock' kısaltması) yalnızca tam saatlerde (1:00, 2:00) kullanılır.",
          "Dakika varsa asla o'clock denmez: '8:30 o'clock' KESİNLİKLE YANLIŞTIR.",
          "Sabah ve akşam ayrımı için 'AM' (gece 00:00 - öğlen 12:00) ve 'PM' (öğlen 12:00 - gece 00:00) kullanılır."
        ],
        rationale: "Saat sorma görgüsünü ve tam saatlerdeki 'o'clock' kuralının sınırlarını netleştirir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Buçuk (Half Past) ve Çeyrek (Quarter Past / To) Mantığı",
        content: "Geleneksel saat sisteminde önce dakika, sonra saat söylenir: 'Dakika + PAST / TO + Saat'. 30 dakika geçtiğinde 'half past' (yarım geçti) denir: 8:30 için 'It is half past eight' (Sekizi yarım geçiyor). 15 dakika geçtiğinde 'quarter past' (çeyrek geçiyor) denir: 7:15 için 'It is quarter past seven'. 15 dakika kaldığında ise 'quarter to' (çeyrek var) denir: 7:45 için bir sonraki saate bakılarak 'It is quarter to eight' (Sekize çeyrek var) denir. 1'den 29'a kadar olan dakikalarda 'past', 31'den 59'a kadar olan dakikalarda sonraki saate 'to' kullanılır.",
        formula: "Buçuk: It is half past [Saat]  |  Çeyrek geçe: It is quarter past [Saat]  |  Çeyrek kala: It is quarter to [Sonraki Saat]",
        keyPhrase: "The train leaves at half past nine (9:30).",
        subPoints: [
          "7:30 -> 'half past seven' (İngilizcede yedi buçuk denirken yedi geçiyor mantığı işler).",
          "9:45 -> 'quarter to ten' (Ona çeyrek var; saat bir artırılır!).",
          "'Quarter' kelimesinden önce 'a' da gelebilir: 'It is a quarter past six'."
        ],
        rationale: "Klasik saat dilini öğrenerek anadili konuşucularının doğal zaman tasvirlerini anlama becerisi kazandırır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Pratik Dijital Saat Okunuşu ve Nokta Atışı 'AT' Edatı",
        content: "Modern dünyada özellikle havalimanlarında, biletlerde ve hızlı konuşmalarda dijital saat okunuşu hayat kurtarır. Dijital okunuşta hiçbir 'past' veya 'to' kuralına gerek yoktur; sadece saat ve dakikayı yan yana düz sayı olarak okursunuz: 8:15 -> 'eight fifteen'; 9:30 -> 'nine thirty'; 10:45 -> 'ten forty-five'. Saat 8:05 gibi sıfırlı dakikalarda sıfır için 'oh' denir: 'eight oh five'. Bir eylemin saat kaçta gerçekleşeceğini söylerken ise saatlerin önüne daima ve istisnasız 'AT' edatı gelir: 'The class starts AT nine o'clock', 'I wake up AT seven thirty'.",
        formula: "Dijital: It is [Saat Sayısı] + [Dakika Sayısı]  |  Eylem Saati: AT + [Saat]",
        keyPhrase: "The movie starts at eight forty-five (8:45 PM).",
        subPoints: [
          "Dijital okuma en pratik yoldur: 6:20 -> 'six twenty', 2:40 -> 'two forty'.",
          "Dakika tek haneliyse (örnek 7:05): 'seven oh five' denir.",
          "Saatlerin önüne DAİMA 'AT' edatı gelir: 'at 5 PM', 'at noon' (öğlen 12'de), 'at midnight' (gece yarısı)."
        ],
        rationale: "Öğrenciye hem hızlı konuşma pratikliği sağlar hem de zaman edatları arasında 'at' kuralını sağlamlaştırır."
      }
    ]
  },
  9: {
    introduction: "İngilizce öğrenirken sınıf içinde öğretmeninizin verdiği talimatları ('Kitaplarınızı açın', 'Dinleyin', 'Tahtaya bakın') veya günlük hayatta tabelalarda, havaalanı yönlendirmelerinde ve yemek tariflerinde gördüğünüz komutları anlamak zorundasınız. Bu cümle türüne dilbilgisinde 'Emir Cümleleri' (Imperatives) denir. Emir cümleleri korkutucu veya kaba olmak zorunda değildir; bir tavsiye, bir yön tarifi, bir yazılım talimatı veya kibar bir rica da emir kipiyle kurulur. İngilizcede emir cümlesi kurmak inanılmaz derecede kolaydır çünkü hiçbir özne (I, you, he) kullanılmaz; doğrudan fiilin yalın haliyle başlanır! Bu derste olumlu ve olumsuz emir kurmayı, talimatları ve 'Please' ile nezaket katmayı öğreneceksiniz.",
    linguisticLogic: "İngilizcede emir kipi (Imperative mood), muhatabın doğrudan karşınızdaki 'You' (sen/siz) olduğu varsayımına dayanır. Bu nedenle özne zamiri tamamen atılır ve cümle doğrudan fiilin mastar/yalın haliyle (Base form / V1) başlatılır: 'Open the door' (Kapıyı aç). Eğer eylemin yapılmamasını istiyorsanız cümlenin en başına 'Don't' (veya resmi yazılı uyarılarda 'Do not') getirilir: 'Don't touch' (Dokunma). Emir cümleleri sert ve otoriter algılanabileceği için sosyal hayatta cümlenin başına veya sonuna 'Please' (Lütfen) kelimesi eklenerek kibar bir rica veya talimata dönüştürülür.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Olumlu Emir Cümlesi Kurma (Doğrudan Yalın Fiil: V1)",
        content: "Birine bir eylemi yapmasını söylemek için cümlenin başına hiçbir zamir (I, you, we vb.) koymadan doğrudan fiilin 1. halini (yalın halini) yerleştirin. Örneğin: 'Listen!' (Dinle!), 'Open your book' (Kitabını aç), 'Turn left' (Sola dön), 'Take this medicine' (Bu ilacı al). Cümleye özne koyarsanız (örneğin *You open the door), bu artık bir emir değil, düz bir geniş zaman cümlesi ('Sen kapıyı açarsın') haline gelir. Bu yapı yön tariflerinde ('Go straight'), tariflerde ('Mix the eggs') ve acil durumlarda ('Help me!') en temel araçtır.",
        formula: "Fiilin Yalın Hali (V1) + Nesne / Tamamlayıcı",
        keyPhrase: "Look at the whiteboard and write down these notes.",
        subPoints: [
          "Özne KULLANILMAZ: 'Sit down' denir, asla *You sit down denmez.",
          "Fiile hiçbir ek (-s, -ing, -ed) gelmez; fiil en saf haliyle kalır.",
          "Sınıf içi yaygın talimatlar: Stand up, read the text, speak louder, be quiet."
        ],
        rationale: "Öğrenciye İngilizcede öznesiz kurulan yegane yapı olan emir kipinin mantığını kavratır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Olumsuz Emir Cümlesi Kurma ('Don't + V1')",
        content: "Bir eylemin yapılmamasını, yasak olduğunu veya durdurulması gerektiğini söylemek için cümlenin en başına 'Don't' (Do not kısaltması) yerleştirilir ve ardından yine fiilin yalın hali gelir: 'Don't + V1'. Örneğin: 'Don't speak!' (Konuşma!), 'Don't touch the screen' (Ekrana dokunma), 'Don't worry' (Endişelenme), 'Don't be late' (Geç kalma). Dikkat: Karşınızdaki kişi kim olursa olsun (tekil veya çoğul), olumsuz emirde ASLA *Doesn't kullanılmaz! Her zaman ve herkes için kural 'Don't'tır. Müzelerde veya sokak tabelalarında daha resmi bir ton için kısaltma yapılmadan 'Do not enter' (Girilmez) şeklinde yazılır.",
        formula: "Don't (Do not) + Fiilin Yalın Hali (V1) + Nesne",
        keyPhrase: "Don't use your mobile phone during the exam.",
        subPoints: [
          "Olumsuz emirde asla *Doesn't kullanılmaz; daima 'Don't' kullanılır.",
          "'To Be' fiiliyle olumsuz emir: 'Don't be afraid' (Korkma), 'Don't be late' (Geç kalma).",
          "Resmi uyarılarda ve tabelalarda: 'Do not smoke' (Sigara içmeyiniz)."
        ],
        rationale: "Yasak ve uyarı ifadelerini hatasız formüle etmeyi ve 'doesn't' tuzağına düşmemeyi sağlar."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Nezaket Katma ve Rica Oluşturma: 'Please' Kullanımı",
        content: "Yalın emir cümleleri doğrudan söylendiğinde emrivaki, kaba veya sert algılanabilir. Bunu yumuşatmanın ve sosyal açıdan kabul edilebilir kılmanın en kolay yolu cümleye 'Please' (Lütfen) kelimesini eklemektir. 'Please' kelimesini cümlenin başına veya sonuna koyabilirsiniz: 1) Başa gelirse: 'Please sit down' (Lütfen oturun - virgül gerekmez). 2) Sona gelirse: 'Sit down, please' (Oturun, lütfen - önüne bir virgül konur). Bir kafede sipariş verirken veya birinden kapıyı kapatmasını isterken 'Close the door, please' demek iletişimi anında dostane ve saygılı kılar.",
        formula: "Please + V1 + Nesne  VEYA  V1 + Nesne + , please",
        keyPhrase: "Please take a seat, the doctor will see you shortly.",
        subPoints: [
          "'Please' cümlenin sonuna geldiğinde önünde hafif bir duraklama yapılır ve virgül konur.",
          "Olumsuz emirde: 'Please don't smoke here' veya 'Don't smoke here, please'.",
          "Sosyal hayatta bir garsona veya görevliye hitap ederken 'Please' hayatidir."
        ],
        rationale: "Emir kipini nezaketle dengeleyerek günlük sosyal iletişimde saygılı ve etkili olmayı sağlar."
      }
    ]
  },
  10: {
    introduction: "İngilizce konuşulan bir ülkeye adım attığınız anda en çok duyacağınız kelimeler dilbilgisi kuralları değil, nezaket formülleridir: 'Excuse me', 'Thank you', 'Sorry', 'You're welcome', 'Have a nice day'. İngiliz ve Amerikan kültürlerinde nezaket kurallarına uymamak sadece bilgisizlik değil, doğrudan kabalık ve saygısızlık olarak algılanır. Türk öğrencilerin en sık yaşadığı ikilem, sokakta birinin dikkatini çekerken mi yoksa yanlışlıkla birine çarptığında mı 'Excuse me' ya da 'Sorry' diyeceğidir. Bu iki kelimenin ayrımı İngilizcede hayati bir sosyal reflekstir. Bu derste durumsal nezaket kalıplarını, teşekkür etme ve karşılık verme yollarını, hapşırana ne deneceğini ve vedalaşma formüllerini öğreneceksiniz.",
    linguisticLogic: "İngilizcede nezaket kalıpları durumsal (situational) kesin kurallarla yönetilir: 1) 'EXCUSE ME' (Afedersiniz / Bakar mısınız): Henüz bir hata veya kaza OLMADAN ÖNCE kullanılır. Birine adres sorarken, kalabalık bir otobüste birinin önünden geçerken veya garsonu çağırırken söylenir. 2) 'SORRY / I'M SORRY' (Özür dilerim): Bir hata veya istenmeyen durum GERÇEKLEŞTİKTEN SONRA pişmanlık ve telafi için söylenir (birinin ayağına bastığınızda veya geç kaldığınızda). Teşekkür edildiğinde (Thank you) sessiz kalmak veya sadece kafa sallamak kabalık sayılır; mutlaka 'You're welcome' (Rica ederim) veya 'No problem' ile karşılık verilmelidir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Hayati Sosyal İkili: 'Excuse me' vs 'I'm sorry'",
        content: "Bu ayrımı bir altın kural olarak zihninize kazıyın: 'Excuse me' eylemden ÖNCE, 'Sorry' ise eylemden SONRA kullanılır! Sokakta bir yabancıya saati sormadan önce 'Excuse me, what time is it?' dersiniz (Burada henüz bir kabalık yoktur, sadece izin istersiniz). Ancak yürürken yanlışlıkla birinin omzuna çarparsanız artık 'Excuse me' diyemezsiniz; kaza gerçekleştiği için 'Oh, I'm so sorry!' (Çok özür dilerim) demelisiniz. Kalabalık bir asansörden inerken insanlardan yol istemek için yine 'Excuse me' kullanılır.",
        formula: "Eylemden Önce / İzin: Excuse me  |  Eylemden Sonra / Kaza-Pişmanlık: (I'm) sorry",
        keyPhrase: "Excuse me, could you tell me where the station is? - Oh, sorry, I don't know.",
        subPoints: [
          "Garson çağırmak, adres sormak, izin istemek: daima 'Excuse me!'.",
          "Ayağa basmak, geç kalmak, bir şeyi kırmak, kötü habere üzülmek: daima 'Sorry!'.",
          "Birinin söylediğini duyamadığınızda soru tonlamasıyla: 'Excuse me?' veya 'Sorry?' denir."
        ],
        rationale: "İngilizce kültürünün en temel iki sosyal refleksini doğru bağlamda ayırmayı sağlar."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Teşekkür Etmek ve Karşılık Vermek: 'You're welcome'",
        content: "Biri size bir iyilik yaptığında, kapıyı tuttuğunda veya siparişinizi getirdiğinde teşekkür etmenin dereceleri vardır: Samimi ve hızlı ortamlarda 'Thanks', standart ve kibar ortamlarda 'Thank you', minnetinizi vurgulamak istediğinizde 'Thank you very much' veya 'Thanks a lot'. Ancak İngilizcede teşekkür edildiğinde asla sessiz kalınmaz; mutlaka karşılık verilir. En standart karşılık 'You're welcome' (Rica ederim) ifadesidir. Günlük ve samimi konuşmalarda 'No problem' (Sorun değil), 'Not at all' veya 'My pleasure' (Benim için bir zevk) da son derece yaygındır.",
        formula: "Teşekkür: Thanks / Thank you (very much)  ->  Karşılık: You're welcome / No problem",
        keyPhrase: "Thank you for your help! - You're very welcome.",
        subPoints: [
          "'You're welcome' ifadesindeki 'welcome' kelimesi 'hoş geldiniz' değil, 'rica ederim' demektir.",
          "Gençler ve samimi arkadaşlar arasında 'No problem' veya 'Anytime' çok popülerdir.",
          "Resmi iş ortamlarında 'My pleasure' (Memnuniyetle) çok prestijli bir yanıttır."
        ],
        rationale: "Teşekkür-karşılık zincirini eksiksiz tamamlayarak konuşmayı medeni bir şekilde sonlandırmayı sağlar."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Günlük Sosyal Refleksler: Hapşırma, Kadeh Kaldırma ve Vedalaşma",
        content: "Günlük yaşamda refleks olarak söylenen hazır formüller vardır: 1) Biri hapşırdığında Türkçedeki 'Çok yaşa' karşılığı İngilizcede 'Bless you!' (Tanrı seni korusun / kutlu olsun) denir; hapşıran kişi ise 'Thank you' diye karşılık verir. 2) Bir restoranda kadeh kaldırırken veya kutlama anında 'Cheers!' (Şerefe!) denir. 3) Bir dükkandan veya otelden ayrılırken kasiyer veya görevli 'Have a nice day!' (İyi günler!) veya 'Have a good weekend!' dediğinde 'Thanks, you too!' (Teşekkürler, size de!) diye yanıt verilir. Vedalaşırken ise 'Goodbye', 'See you later' veya 'Take care' (Kendine iyi bak) kullanılır.",
        formula: "Hapşırma: Bless you! -> Thank you!  |  İyi dilek: Have a nice day! -> You too!  |  Veda: See you later / Take care",
        keyPhrase: "Have a great weekend! - Thanks, you too! Take care.",
        subPoints: [
          "Biri hapşırdığında sessiz kalmak kabalık sayılır; hemen 'Bless you' deyin.",
          "'Have a nice day' dendiğinde uzun uzun cevap vermeyin; 'You too!' (Siz de!) en doğal cevaptır.",
          "'Cheers' hem şerefe demek hem de İngiltere'de gayriresmi olarak 'teşekkürler/hoşça kal' demektir."
        ],
        rationale: "Öğrenciyi anadili konuşucularının günlük reflekslerine sahip doğal bir konuşmacı seviyesine taşır."
      }
    ]
  }
};

// Apply enhancements to module1
for (const [idStr, enh] of Object.entries(batch1Enhancements)) {
  const id = parseInt(idStr, 10);
  if (module1_lessons_1_10[id]) {
    Object.assign(module1_lessons_1_10[id], enh);
  }
}

// Write back to module1_lessons_1_10.ts
const targetFile = './src/services/pedagogy/modules/module1_lessons_1_10.ts';
const fileContent = `// LinguAAI Pedagogical Content — Level A1: Module 1 (Lessons 1–10)
// Tanışma, Alfabe ve Temel İletişim
// 100% bespoke, CEFR A1 compliant, deep pedagogical masterclass.

import { TopicBlueprint } from '../../pedagogicalEngine';

export const module1_lessons_1_10: Record<number, TopicBlueprint> = ${JSON.stringify(module1_lessons_1_10, null, 2)};
`;

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log('Successfully updated module1_lessons_1_10.ts with deep pedagogical content!');
