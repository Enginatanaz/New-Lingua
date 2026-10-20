// scripts/enhance_batch_2.ts
// Pedagogical Enhancement Engine for Module 2 (Lessons 11-20)
import fs from 'fs';
import { module2_lessons_11_20 } from '../src/services/pedagogy/modules/module2_lessons_11_20';
import { TopicBlueprint } from '../src/services/pedagogicalEngine';

const batch2Enhancements: Record<number, Partial<TopicBlueprint>> = {
  11: {
    introduction: "İngilizce dilbilgisinin mutlak kalbine, en temel direğine hoş geldiniz: 'To Be' (Olmak) fiili. Türkçede 'Ben mutluyum', 'O bir doktor' veya 'Hava soğuk' derken bir eylem fiili kullanmayız; durum ekleriyle cümleyi bağlarız. Oysa İngilizcede fiilsiz bir cümle KESİNLİKLE var olamaz! İngilizce mantığında bir eylem (koşmak, yemek, gitmek) yoksa, cümlenin öznesi ile onun durumunu, kimliğini veya konumunu birbirine bağlayan sihirli bir köprüye ihtiyaç duyarız. İşte bu köprü 'To Be' fiilidir ve şimdiki zamanda karşımıza 3 farklı kılıkta çıkar: 'am', 'is' ve 'are'. Bu derste hangi zamirle hangi biçimin eşleştiğini, neden her isim ve sıfat cümlesinde To Be kullanmak zorunda olduğumuzu ve günlük konuşmanın vazgeçilmezi olan kısaltmaları (I'm, he's, they're) öğreneceksiniz.",
    linguisticLogic: "İngilizcede her tam bağımsız cümlenin bir 'finite verb' (çekimli yüklem) barındırması yapısal bir zorunluluktur. Sıfatlar (happy, cold, tired) veya isimler (doctor, student, teacher) tek başlarına yüklem olamazlar; özneye bağlanmak için bir 'kopula' (bağlayıcı fiil) ararlar. 'To Be' fiili öznenin şahsına ve sayısına göre bükümlenir: 1. tekil şahıs için 'am' (I am); 3. tekil şahıslar için 'is' (He is, She is, It is); tüm çoğullar ve 'sen/siz' için 'are' (You are, We are, They are). Türkçedeki '-dir/-dır', '-im/-sin' eklerinin İngilizce karşılığı tam olarak bu üç sözcüktür.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Şahıs ve 'To Be' Eşleşme Matrisi (am, is, are)",
        content: "İngilizcede özneler ile 'To Be' çekimleri arasında katı bir uyum vardır ve bu eşleşmeler asla birbirinin yerine geçemez. Birinci tekil şahıs olan 'I' daima 'am' ile eşleşir: 'I am' (Ben ...-im). Üçüncü tekil şahıslar olan 'He' (erkek), 'She' (kadın) ve 'It' (cansız/hayvan) ile tekil isimler (my brother, the car) daima 'is' alır: 'He is', 'She is', 'It is'. İkinci şahıs olan 'You' (sen/siz) ile çoğul şahıslar 'We' (biz) ve 'They' (onlar) ve tüm çoğul isimler (the students, my friends) daima 'are' alır: 'You are', 'We are', 'They are'. Bu matrisi bir şarkı ritmi gibi zihninize kazıyın.",
        formula: "I + AM  |  He / She / It + IS  |  You / We / They + ARE",
        keyPhrase: "I am ready, he is a doctor, and they are our guests.",
        subPoints: [
          "'I' zamiriyle asla 'is' veya 'are' kullanılamaz; daima 'I am'.",
          "Tekil her isim 'is' alır: 'The coffee is hot', 'My father is at home'.",
          "Çoğul her isim 'are' alır: 'The books are on the table', 'Children are happy'."
        ],
        rationale: "Özne-yüklem uyumu İngilizce tümce kuruluşunun temel omurgasıdır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: To Be Hangi 5 Temel Durumda Kullanılır?",
        content: "'To Be' fiili koşmak, yemek veya okumak gibi bir hareket bildirmez. Şu 5 temel alanda özneyi tamamlayıcısına bağlar: 1) İSİM / KİMLİK: 'I am David', 'She is a lawyer'. 2) YAŞ: 'He is twenty years old'. 3) DUYGU VE FİZİKSEL DURUM: 'We are tired', 'I am happy', 'They are cold'. 4) MİLLİYET VE KÖKEN: 'I am Turkish', 'She is from France'. 5) MEKAN VE KONUM: 'The keys are in my bag', 'We are at work'. Eğer cümlenizde bu beş alandan biri varsa, To Be fiili kesinlikle cümlenin merkezinde olmalıdır.",
        formula: "Özne + am / is / are + [İsim / Sıfat / Yaş / Milliyet / Konum]",
        keyPhrase: "She is a talented engineer (Kimlik) and she is very happy (Durum).",
        subPoints: [
          "Fiil içermeyen her Türkçe isim ve durum cümlesinde To Be şarttır.",
          "Asla *I teacher veya *He happy demeyin; aradaki 'am/is' köprüsünü atlamayın.",
          "Yaş söylerken 'have' değil To Be kullanılır: 'I am 30'."
        ],
        rationale: "Öğrencinin Türkçe düşünerek fiilsiz cümle kurma hatasını kökten engeller."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Konuşma Dilinde Hayati Kısaltmalar (Contractions)",
        content: "Günlük İngilizce konuşmalarda ve gayriresmi yazışmalarda 'I am', 'He is' gibi uzun biçimler kulağa yapay ve aşırı resmi gelir. Anadili konuşucuları bu kelimeleri kesme işaretiyle (apostrophe ') birleştirerek kısaltır: 'I am' -> 'I'm' (/aɪm/); 'He is' -> 'He's' (/hiːz/); 'She is' -> 'She's'; 'It is' -> 'It's' (/ɪts/); 'You are' -> 'You're' (/jʊər/); 'We are' -> 'We're' (/wɪər/); 'They are' -> 'They're' (/ðeər/). Bu kısaltmaları hem dinlerken hemen ayırt edebilmeli hem de konuşurken akıcı bir şekilde sesletebilmelisiniz.",
        formula: "I'm  |  He's  |  She's  |  It's  |  You're  |  We're  |  They're",
        keyPhrase: "I'm tired, but he's energetic and they're ready to leave.",
        subPoints: [
          "'They're' (Onlar...), 'Their' (Onların) ve 'There' (Orada) kelimeleri tamamen aynı sesletilir (/ðeər/).",
          "'It's' (It is kısaltması), iyelik sıfatı olan 'Its' (onun) ile karıştırılmamalıdır.",
          "Resmi akademik makalelerde ve resmi başvurularda kısaltmalar yerine tam biçimler tercih edilir."
        ],
        rationale: "Konuşma akıcılığı ve dinlediğini anlama hızını anında iki katına çıkarır."
      }
    ]
  },
  12: {
    introduction: "İngilizcede bir durumun veya kimliğin geçerli olmadığını söylemek; yani olumsuz bir cümle kurmak son derece düzenli ve basittir. Türkçede 'değil' kelimesini cümlenin en sonuna ekleriz: 'Ben yorgun değilim', 'O evde değil'. İngilizcede ise bu 'değil' anlamını 'NOT' kelimesi sağlar. Ancak İngilizcenin söz dizimi kuralı gereği 'not' kelimesi cümlenin sonuna değil; 'am / is / are' fiilinin HEMEN SAĞINA yerleşir! Günlük hayatta ise bu kalıplar 'isn't' ve 'aren't' şeklinde kısalarak konuşmayı çok daha akıcı hale getirir. Bu derste olumsuzluk ekinin tam yerini, günlük kısaltmaları ve birinci tekil şahıstaki çok ilginç 'amn't' yasağını öğreneceksiniz.",
    linguisticLogic: "İngilizcede olumsuzluk prensibi yardımcı veya bağlayıcı fiilin üzerine 'NOT' eklenmesiyle çalışır. 'To Be' cümlelerinde yapı: 'Özne + am/is/are + NOT + Tamamlayıcı'. Türkçede 'değil' sözcüğü cümlenin en sonunda yer alırken, İngilizcede yüklemin gövdesine yapışır. Konuşma dilinde 'is + not' kaynaşarak 'isn't' (/ˈɪz.ənt/); 'are + not' kaynaşarak 'aren't' (/ɑːnt/) olur. İngilizcenin en kendine has fonetik kurallarından biri şudur: 'am + not' ASLA birleşerek *amn't OLAMAZ! Ağız yapısının 'm' ve 'n' seslerini peş peşe patlatmasındaki zorluk nedeniyle dilde *amn't biçimi yasaklanmıştır; sadece 'I'm not' denir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: 'NOT' Olumsuzluk Ekinin Cümledeki Kesin Yeri",
        content: "Olumsuz cümle kurarken altın formülümüz: 'Özne + am / is / are + NOT + Sıfat / İsim / Mekan'. 'Not' kelimesi To Be fiilinin hemen arkasına yapışır: 'I am not hungry' (Aç değilim), 'He is not a doctor' (O doktor değil), 'We are not at home' (Evde değiliz). Türkçeden çeviri yaparken 'not' kelimesini cümlenin sonuna atmak en yaygın başlangıç hatasıdır (Asla *I hungry not denmez!). Unutmayın, 'not' kelimesi 'am/is/are' olmadan tek başına bir isim veya sıfat cümlesini olumsuz yapamaz.",
        formula: "Özne + am / is / are + NOT + [Tamamlayıcı]",
        keyPhrase: "He is not late, and we are not angry.",
        subPoints: [
          "'Not' daima To Be fiilinden sonra gelir: 'is not', 'are not', 'am not'.",
          "Türkçedeki 'değil' kelimesinin doğrudan yapısal karşılığıdır.",
          "Cümlede başka bir eylem fiili yokken olumsuzluğu To Be + not üstlenir."
        ],
        rationale: "İngilizce olumsuzluk söz diziminin yerleşim mantığını kalıcı olarak yerleştirir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Standart Kısaltmalar: 'isn't' ve 'aren't' Kullanımı",
        content: "Konuşma dilinde neredeyse hiç kimse 'He is not' veya 'They are not' demez; bunun yerine kısaltmalar kullanılır. Burada iki farklı kısaltma yolu vardır: 1) To Be ile not birleşir: 'is not' -> 'isn't' (He isn't busy), 'are not' -> 'aren't' (They aren't here). 2) Özne ile To Be birleşir, not ayrı kalır: 'He's not busy', 'They're not here'. Her iki kullanım da %100 doğrudur ve anadili konuşucuları tarafından eşit sıklıkla kullanılır. 'isn't' ve 'aren't' sesletiminde 't' harfi sertçe değil, doğal bir nefesle telaffuz edilir.",
        formula: "is not = isn't (veya 's not)  |  are not = aren't (veya 're not)",
        keyPhrase: "She isn't at work today, and they aren't at school.",
        subPoints: [
          "'He isn't' ile 'He's not' anlamca tamamen aynıdır.",
          "'aren't' telaffuz edilirken İngiliz aksanında /ɑːnt/, Amerikan aksanında /ɑːrnt/ denir.",
          "Çoğul isimlerle: 'The shops aren't open' (Dükkanlar açık değil)."
        ],
        rationale: "Öğrenciye konuşma dilindeki her iki doğal kısaltma varyasyonunu da refleks olarak kazandırır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: 'I am not' İstisnası: Neden *amn't Yoktur?",
        content: "İngilizce öğrenenlerin en sık sorduğu sorulardan biri şudur: 'is not' isn't oluyorsa, 'are not' aren't oluyorsa, 'am not' neden *amn't olmuyor? Cevap tamamen fonetiktir (dil ve dudak anatomisi). 'M' sesi dudaklar kapanarak çıkarılır, 'N' sesi ise dil damağa değerek çıkarılır; bu iki sesi '-t' ile ardı ardına tek bir hecede birleştirmek insan ağzı için çok zordur. Bu yüzden İngilizce bu formu reddetmiştir! Birinci tekil şahısta TEK BİR kısaltma vardır: Özne ile 'am' birleşir ve 'I'm not' denir: 'I'm not ready' (Hazır değilim), 'I'm not sure' (Emin değilim).",
        formula: "I am not = I'm not (Asla *I amn't DEĞİL!)",
        keyPhrase: "I'm not tired, I'm just relaxed.",
        subPoints: [
          "Asla ama asla '*amn't' diye bir kelime kullanmayın; böyle bir kelime İngilizcede yoktur.",
          "Tek doğru kısaltma: 'I'm not' (/aɪm nɒt/).",
          "İrlanda ve bazı bölgesel diyalektlerde görülen 'ain't' standart dilde kabul edilmez ve kaba sayılır."
        ],
        rationale: "Dilin fonetik mantığını açıklayarak öğrencilerin ezberden kaçınmasını ve hata yapmamasını sağlar."
      }
    ]
  },
  13: {
    introduction: "Yabancı bir dilde iletişim kurabilmenin %50'si soru sorabilmektir. Birinin kim olduğunu, nerede olduğunu, nasıl hissettiğini veya bir durumun doğru olup olmadığını öğrenmek için soru sormak zorundayız. Türkçede soru sormak için cümlenin sonuna '-mı / -mi' eki ekleriz ('Sen öğrencisin' -> 'Sen öğrenci misin?'). Ancak İngilizcede böyle bir soru eki yoktur! İngilizce soru sormak için muazzam bir mantık mekanizması kullanır: 'Ters Çevirme' (Inversion). Düz cümledeki özne ile yardımcı fiilin yerini ters çevirdiğiniz anda cümle kendiliğinden bir soruya dönüşür. Bu derste To Be ile 'Evet/Hayır' soruları sormayı, kısa cevap verme kurallarını ve olumlu cevaplardaki hayati kısaltma yasağını öğreneceksiniz.",
    linguisticLogic: "İngilizcede soru yapmanın evrensel ilkesi 'Yardımcı Fiil + Özne' yer değiştirmesidir (Subject-Auxiliary Inversion). Düz cümle 'Özne + Fiil' (You are a student) iken; soru cümlesi 'Fiil + Özne' (Are you a student?) haline gelir. Bu sorulara 'Yes/No Questions' denir çünkü cevabı doğrudan 'Evet' ya da 'Hayır'dır. İngilizce nezaket kültüründe bir soruya sadece tek kelimeyle 'Yes' veya 'No' demek sert ve kaba bulunabilir. Bu yüzden 'Kısa Cevap' (Short Answer) mekanizması kullanılır: 'Yes, I am' / 'No, I'm not'. En kritik dil kuralı: Olumlu kısa cevaplarda ASLA kısaltma yapılamaz (*Yes, I'm denmez); çünkü cümlenin sonunda güçlü bir vurgu gereklidir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Soru Yapma Mekanizması: Ters Çevirme (Inversion)",
        content: "To Be ile soru sormak çocuk oyuncağıdır: Düz cümledeki 'am / is / are' fiilini cümlenin en başına, yani öznenin önüne taşıyın! Düz cümle: 'You are ready' (Hazırsın). Soru: 'Are you ready?' (Hazır mısın?). Düz cümle: 'He is at home' (O evde). Soru: 'Is he at home?' (O evde mi?). Düz cümle: 'They are Turkish' (Onlar Türk). Soru: 'Are they Turkish?' (Onlar Türk mü?). Cümlenin geri kalan tüm ögeleri (sıfat, mekan, isim) olduğu gibi yerinde kalır. Cümle sonundaki ses tonunuzu da hafifçe yukarı kaldırmayı unutmayın.",
        formula: "Am / Is / Are + Özne + [Tamamlayıcı]?",
        keyPhrase: "Are you ready? Is he the new manager? Are they at the hotel?",
        subPoints: [
          "Soru eki yoktur; 'am/is/are' başa geçer ve cümlenin soru olduğunu ilan eder.",
          "'I am' sorusu kendi kendine sorulduğunda 'Am I late?' (Geç mi kaldım?) olur.",
          "Tekil isimlerde 'Is' (Is your car new?), çoğul isimlerde 'Are' (Are your friends here?) başa gelir."
        ],
        rationale: "Ters çevirme mantığını kavratarak öğrencinin soru kalıplarını güvenle üretmesini sağlar."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Olumlu Kısa Cevaplar ve 'Asla Kısaltmama' Kuralı",
        content: "Bir To Be sorusuna 'Evet' demek istediğinizde formül: 'Yes, + [Özne Zamiri] + am / is / are'. Örneğin: 'Are you tired?' -> 'Yes, I am.' / 'Is she a doctor?' -> 'Yes, she is.' / 'Are they ready?' -> 'Yes, they are.'. İŞTE BURADA İNGİLİZCENİN EN BÜYÜK KURALLARINDAN BİRİ DEVREYE GİRER: Olumlu kısa cevaplarda To Be fiili ASLA kısaltılamaz! Kesinlikle '*Yes, I'm', '*Yes, he's' veya '*Yes, they're' diyemezsiniz! Çünkü İngilizcede cümlenin bittiği son kelime havada bırakılamaz; tam vurgulu bir sesletim şarttır.",
        formula: "Yes, + Özne Zamiri + am / is / are (Kısaltma KESİNLİKLE YASAK!)",
        keyPhrase: "Are you sure? - Yes, I am. (Asla *Yes, I'm değil!)",
        subPoints: [
          "Cevapta isim yerine daima ZAMİR kullanılır: 'Is Tom here?' -> 'Yes, HE is' (Yes, Tom is değil).",
          "Olumlu kısa cevapta 'am / is / are' tam ve net seslendirilir.",
          "*Yes, I'm veya *Yes, she's İngilizcede kabul edilemez bir dilbilgisi hatasıdır."
        ],
        rationale: "İngilizceye yeni başlayanların en sık yaptığı '*Yes, I'm' hatasını kökten temizler."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Olumsuz Kısa Cevaplar (Kısaltma Serbesttir)",
        content: "Sorulan soruya 'Hayır' cevabı verirken formül: 'No, + [Özne Zamiri] + am/is/are + not'. Olumlu cevapların aksine, olumsuz kısa cevaplarda kısaltma yapmak tamamen serbesttir ve hatta çok daha doğaldır! Örneğin: 'Are you tired?' -> 'No, I'm not.' / 'Is he Turkish?' -> 'No, he isn't' (veya 'No, he's not') / 'Are they ready?' -> 'No, they aren't' (veya 'No, they're not'). Sadece tek kelimeyle 'No' demek yerine bu kalıbı kullanmak karşınızdaki kişiye saygı duyduğunuzu gösterir.",
        formula: "No, + Özne Zamiri + am not / isn't / aren't",
        keyPhrase: "Are they late? - No, they aren't. They are right on time.",
        subPoints: [
          "'No, I'm not' tek alternatiftir (*amn't yoktur).",
          "'No, he isn't' veya 'No, he's not' ikisi de mükemmeldir.",
          "Cevaptan sonra kibarca doğru bilgiyi eklemek konuşmayı geliştirir: 'No, I'm not. I'm a student.'"
        ],
        rationale: "Sosyal diyaloglarda nezaketi ve pürüzsüz yanıt verme refleksini pekiştirir."
      }
    ]
  },
  14: {
    introduction: "Bir şehri tanıtırken, otelde oda özelliklerini sorarken, yeni bir evi gezdirirken veya çantanızda ne olduğunu söylerken en sık başvurduğunuz ifade Türkçedeki 'VAR' kelimesidir: 'Masanın üzerinde bir kitap var', 'Sokakta üç araba var', 'Buzdolabında süt var'. Ancak İngilizceye başlarken Türk öğrencilerin zihninde büyük bir karışıklık yaşanır: 'Have' (sahip olmak) ile 'There is / There are' (ortamda var olmak) birbirine karışır. Bir insanın bir şeye sahip olması ile bir ortamda bir nesnenin mevcut olması İngilizcede tamamen farklı yapılardır! Bu derste tekiller ve sayılamayanlar için 'There is', çoğullar için 'There are' kullanımını ve 'Have' tuzağından nasıl kurtulacağınızı öğreneceksiniz.",
    linguisticLogic: "İngilizcede varlık bildirmek için 'There + be' yapısı kullanılır. Buradaki 'There' kelimesi tek başına 'orada' anlamına gelmez; Türkçedeki 'var' kavramının gramatik karşılığıdır. Yüklem To Be olduğu için kendisinden sonra gelen ismin tekillik veya çoğulluk durumuna göre bükümlenir: 1) Tekil sayılabilen isimler (a car, an apple) ve sayılamayan isimler (water, money, milk) için 'THERE IS' (kısaca 'There's'); 2) Çoğul isimler (two cars, five students) için 'THERE ARE' kullanılır. 'Have' bir öznenin sahipliğidir (I have a car); 'There is' ise mekanın içindeki mevcudiyettir (There is a car in the garage).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: 'There is' ile Tekil ve Sayılamayan Varlıkların Tasviri",
        content: "Ortamda tek bir nesne varsa 'There is a / an + [İsim]' kalıbı kullanılır: 'There is a bank near here' (Buraya yakın bir banka var), 'There is an apple on the table' (Masanın üzerinde bir elma var). Konuşma dilinde 'There is' birleşerek 'There's' (/ðeəz/) olur. Ayrıca sıvı, gaz, para veya soyut kavramlar gibi sayılamayan (uncountable) isimler de İngilizcede daima TEKİL kabul edilir ve 'There is' ile kullanılır: 'There is some water in the glass' (Bardakta biraz su var), 'There is milk in the fridge' (Buzdolabında süt var).",
        formula: "There is (There's) + a / an + Tekil İsim  |  There is + Sayılamayan İsim",
        keyPhrase: "There is a supermarket across the street, and there is fresh coffee in the kitchen.",
        subPoints: [
          "Konuşma dilinde kısaltma çok yaygındır: 'There's a problem' (Bir sorun var).",
          "Tekil sayılabilir isimlerin önüne 'a' veya 'an' gelmek zorundadır: 'There is A park'.",
          "Sayılamayanlar (water, bread, money) çoğul eki almaz ve 'There is' ile kullanılır."
        ],
        rationale: "Tekil ve sayılamayan isimlerin mevcudiyet kuralını net bir şekilde temellendirir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: 'There are' ile Çoğul Varlıkların Bildirimi",
        content: "Ortamda birden fazla nesne, insan veya mekan varsa formülümüz 'There are + [Çoğul İsim]' şeklindedir: 'There are three bedrooms in this flat' (Bu dairede üç yatak odası var), 'There are many tourists in Istanbul' (İstanbul'da çok sayıda turist var). Nesne çoğul olduğu için çoğul eki '-s' alır (cars, books) veya düzensiz çoğul olur (people, children). Önemli fonetik kural: 'There are' yazıda asla kısaltılamaz (*There're diye bir yazılış standart dilde yoktur; her zaman ayrı yazılır).",
        formula: "There are + [Sayı / Many / A lot of] + Çoğul İsim (-s)",
        keyPhrase: "There are five students in the classroom, and there are many books on the shelf.",
        subPoints: [
          "İsim mutlaka çoğul olmalıdır: 'There are two cars' (*There are two car YANLIŞTIR).",
          "'There are' yazıda kısaltılmaz, daima iki kelime olarak yazılır.",
          "Düzensiz çoğullarla: 'There are twenty people' (Yirmi kişi var)."
        ],
        rationale: "Çoğul isim morfolojisi ile 'There are' uyumunu eksiksiz kurmayı sağlar."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Hayati Dilbilgisel Ayrım: 'There is' vs 'Have'",
        content: "Türkçede 'Evde iki banyo var' da deriz; 'Benim iki banyom var' da deriz. Her ikisinde de 'var' sözcüğü geçtiği için Türk öğrencilerin %80'i 'There is' yerine yanlışlıkla 'Have' kullanır! Ayrım şudur: Bir şahıs bir nesneye mülkiyet olarak sahipse 'HAVE' kullanılır: 'I have a computer' (Benim bir bilgisayarım var). Ancak bir odada, bir mekanda veya dünyada bir şey mevcutsa ve kime ait olduğu önemli değilse 'THERE IS / ARE' kullanılır: 'There is a computer in the office' (Ofiste bir bilgisayar var). Asla '*In the office has a computer' demeyin; bu Türkçe kafa yapısının İngilizceye yanlış tercümesidir!",
        formula: "Şahıs Sahipliği: Özne + have / has  |  Mekandaki Varlık: There is / There are",
        keyPhrase: "I have a car (Sahiplik), but there is no parking space here (Mekansal Varlık).",
        subPoints: [
          "Asla mekanları özne yapıp 'has' demeyin: *The city has -> 'There are in the city'.",
          "İnsan sahipliği: 'She has two cats'.",
          "Ortamdaki mevcudiyet: 'There are two cats under the table'."
        ],
        rationale: "Türkçeden İngilizceye doğrudan çeviriden kaynaklanan en kritik mülkiyet hatasını yok eder."
      }
    ]
  },
  15: {
    introduction: "Yeni bir şehre gittiğinizde en çok soracağınız sorular varlık sorularıdır: 'Buralarda bir eczane var mı?', 'Otelde havuz var mı?', 'Buzdolabında hiç süt var mı?'. Varlık sormak ve bir şeyin olmadığını (yokluğunu) belirtmek günlük hayatta yön bulmanın ve alışveriş yapmanın temelidir. 'There is' ve 'There are' kalıplarını soruya dönüştürmek, daha önce öğrendiğimiz To Be ters çevirme kuralıyla birebir aynıdır: 'Is' veya 'Are' kelimesini alıp cümlenin en başına koyarız! Ancak olumsuz ve soru cümlelerinde İngilizcenin çok zarif bir kuralı devreye girer: Çoğul ve sayılamayan nesnelerde 'hiç' anlamına gelen 'ANY' sözcüğü kullanılır. Bu derste varlık sormayı, 'yok' demeyi ve 'any' kelimesinin doğru kullanımını öğreneceksiniz.",
    linguisticLogic: "Varlık sorgulamasında 'There is' -> 'Is there...?' (tekiller ve sayılamayanlar için); 'There are' -> 'Are there...?' (çoğullar için) şeklinde ters çevrilir. Olumsuzluk için To Be fiiline 'not' eklenir: 'There isn't' (tekil yok) ve 'There aren't' (çoğul yok). En kritik semantik kural 'ANY' (hiç) belirtecidir. İngilizcede 'some' (birkaç/biraz) olumlu cümlelerde kullanılırken; 'any' kelimesi olumsuz ve soru cümlelerinin ayrılmaz parçasıdır: 'Are there ANY questions?' (Hiç soru var mı?) / 'There aren't ANY chairs' (Hiç sandalye yok). Kısa cevaplarda yine olumlu cevap kısaltılamaz: 'Yes, there is' (Asla *Yes, there's denmez).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Varlık Sorma: 'Is there...?' ve 'Are there...?'",
        content: "Bir yerde bir şeyin var olup olmadığını sormak için 'is' veya 'are' kelimesini 'there'in önüne alın. Tekil bir yer veya nesne soruyorsanız: 'Is there a / an + [Tekil İsim]?' kalıbı kullanılır: 'Is there a pharmacy near here?' (Buralarda bir eczane var mı?), 'Is there a Wi-Fi connection?' (Wi-Fi bağlantısı var mı?). Birden fazla nesne soruyorsanız: 'Are there any + [Çoğul İsim]?' kalıbı kullanılır: 'Are there any clean towels?' (Hiç temiz havlu var mı?), 'Are there any ATMs on this street?' (Bu caddede hiç ATM var mı?).",
        formula: "Tekil Soru: Is there a / an + Tekil İsim?  |  Çoğul Soru: Are there any + Çoğul İsim?",
        keyPhrase: "Excuse me, is there a hospital nearby? - Yes, there is.",
        subPoints: [
          "Tekil sorularda 'a/an', çoğul sorularda genellikle 'any' (hiç) kullanılır.",
          "Sayılamayan maddelerde de 'Is there' kullanılır: 'Is there any water?' (Hiç su var mı?).",
          "Cümle sonundaki tonlama soru olduğunu hissettirecek şekilde yükselir."
        ],
        rationale: "Varlık sorgulama yapısını tekillik-çoğulluk ayrımıyla kusursuz inşa eder."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Olumsuz Cümle: 'There isn't' ve 'There aren't any' (Yokluk Bildirme)",
        content: "Bir şeyin ortamda bulunmadığını, yani 'yok' olduğunu söylemek için iki formül vardır: 1) Tekil veya sayılamayan bir şey yoksa: 'There is not' veya kısaca 'There isn't': 'There isn't a balcony in this room' (Bu odada balkon yok), 'There isn't any milk left' (Hiç süt kalmadı). 2) Çoğul nesneler yoksa: 'There are not' veya kısaca 'There aren't any': 'There aren't any chairs in the garden' (Bahçede hiç sandalye yok). Alternatif olarak güçlü bir yokluk vurgusu için doğrudan 'no' kelimesi de kullanılabilir: 'There is no time' (Hiç vakit yok), 'There are no cars' (Hiç araba yok).",
        formula: "There isn't a/an [Tekil]  |  There aren't any [Çoğul]  |  There is/are NO [İsim]",
        keyPhrase: "There isn't a lift in the building, and there aren't any vacant rooms.",
        subPoints: [
          "'There aren't any' kalıbı çoğullarda 'hiç yok' anlamını tam verir.",
          "Eğer 'no' kullanırsanız cümledeki 'not' eki kalkar: 'There is no milk' (There isn't no milk YANLIŞTIR!).",
          "İngilizcede çifte olumsuzluk (double negative) kural dışıdır."
        ],
        rationale: "Yokluk bildiriminde 'isn't', 'aren't any' ve 'no' yapılarını doğru kullanmayı öğretir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Kısa Cevap Standartları ve Kısaltma Yasakları",
        content: "Bir 'Is there / Are there' sorusuna cevap verirken uzun uzun bütün cümleyi tekrarlamak yerine kısa cevap verilir. Olumlu cevaplar: 'Yes, there is' (tekil için) veya 'Yes, there are' (çoğul için). BURADA DA KISALTMA KESİNLİKLE YASAKTIR: Asla '*Yes, there's' denmez! Olumsuz cevaplar: 'No, there isn't' (tekil için) veya 'No, there aren't' (çoğul için). Eğer isterseniz olumsuz cevabın peşine alternatif bir açıklama ekleyebilirsiniz: 'Is there a bank? - No, there isn't, but there is an ATM next door.'",
        formula: "Olumlu: Yes, there is. / Yes, there are.  |  Olumsuz: No, there isn't. / No, there aren't.",
        keyPhrase: "Are there any tickets left? - Yes, there are, but only a few.",
        subPoints: [
          "'Yes, there is' cümlesinde 'there is' asla birleşip *there's olmaz.",
          "'Are there' sorusuna tekil cevap verilmez: 'Are there tickets?' -> 'Yes, there ARE'.",
          "Kısa cevabın ardına bilgi eklemek iletişimi doğal ve yardımsever kılar."
        ],
        rationale: "Konuşma sınavlarında ve gerçek diyaloglarda kısa cevap refleksini kusursuzlaştırır."
      }
    ]
  },
  16: {
    introduction: "Kayıp bir eşyanızı ararken ('Anahtarlarım nerede?'), adres tarif ederken ('Eczane postanenin hemen yanında') veya çalışma masanızı düzenlerken nesnelerin uzaydaki yerini tam olarak belirtmeniz gerekir. Bu konumları anlatan kelimelere İngilizcede 'Prepositions of Place' (Konum Edatları) denir: in, on, under, behind, in front of, next to, between. Türkçede 'masada', 'kutuda', 'duvarda' derken hep aynı '-de/-da' ekini kullanırız; oysa İngilizce mantığı fiziksel uzamsal ilişkiye göre çok hassas ayrımlar yapar! Bir şey yüzeyin üzerinde mi, sınırların içinde mi, yoksa bir şeyin altında mı? Bu derste 7 temel konum edatını görsel ve mantıksal ayrımlarıyla öğreneceksiniz.",
    linguisticLogic: "İngilizcede konum edatları nesnenin referans noktasıyla olan geometrik ilişkisine göre seçilir: 1) 'IN' (İçinde): 3 boyutlu kapalı bir alanın veya sınırları çizilmiş bir sınırın içindedir (in the box, in the room, in Istanbul). 2) 'ON' (Üzerinde / Yüzeyinde): Fiziksel olarak bir yüzeye temas eder ve o yüzey tarafından taşınır (on the table, on the wall, on the floor). 3) 'UNDER' (Altında): Bir nesnenin düşey olarak altındaki konumdur (under the bed). 4) 'BEHIND' (Arkada) vs 'IN FRONT OF' (Önde): Bakış yönüne göre arka ve ön konumlar. 5) 'NEXT TO' (Yanında): Bitişik yan yana olma. 6) 'BETWEEN' (Arasında): Açıkça belirtilmiş İKİ şeyin tam ortasında bulunma.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Hayati İkili: 'IN' (İçinde) ve 'ON' (Yüzeyinde) Ayrımı",
        content: "Türkçede 'Cüzdanım masada' derken de '-de' deriz; 'Cüzdanım çekmecede' derken de '-de' deriz. Ama İngilizcede bu ikisi tamamen farklı dünyalardır! Çekmece kapalı 3 boyutlu bir alandır; bu yüzden cüzdan çekmecenin 'İÇİNDEDİR' -> 'in the drawer'. Masa ise açık, düz bir yüzeydir; cüzdan masanın 'YÜZEYİNDEDİR' -> 'on the table'. Benzer şekilde duvara asılı bir tablo duvara temas ettiği için 'on the wall' denir; bir parkın veya şehrin sınırları içinde bulunurken 'in the park', 'in London' denir.",
        formula: "IN = 3 boyutlu sınırların içinde (in the room)  |  ON = 2 boyutlu yüzeye temas (on the table)",
        keyPhrase: "The milk is in the fridge, and the cups are on the counter.",
        subPoints: [
          "Masa, zemin, duvar, tavan: temas yüzeyi olduğu için 'ON' alır (on the floor, on the wall).",
          "Kutu, çanta, cep, oda, araba: kapalı hacim olduğu için 'IN' alır (in my pocket, in the car).",
          "Duvardaki resim için 'on the wall' denir, asla *in the wall denmez."
        ],
        rationale: "Türkçe '-de/-da' alışkanlığının yarattığı 'in/on' karmaşasını geometrik mantıkla çözer."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Düşey ve Yatay Konumlar: Under, Behind ve In Front of",
        content: "Nesnelerin birbirine göre düşey ve yatay konumlarını bildiren üç edat: 1) 'UNDER' (Altında): Bir şeyin altındaki boşlukta veya örtüsü altında bulunmayı anlatır: 'The cat is sleeping under the bed' (Kedi yatağın altında uyuyor). 2) 'BEHIND' (/bɪˈhaɪnd/ - Arkasında): Bir nesnenin veya kişinin arka tarafında kalmayı ifade eder: 'The hotel is behind the bank' (Otel bankanın arkasında). 3) 'IN FRONT OF' (Önünde): Üç kelimelik bu kalıp bir şeyin hemen ön cephesinde olmayı anlatır: 'There is a bus stop in front of the school' (Okulun önünde bir otobüs durağı var). Dikkat: 'In front of' kalıbındaki 'of' edatını asla unutmayın.",
        formula: "under + [Nesne]  |  behind + [Nesne]  |  in front of + [Nesne]",
        keyPhrase: "My car is parked in front of the building, not behind it.",
        subPoints: [
          "'In front of' kalıbı üç sözcüktür: 'in' + 'front' + 'of' (asla *in front the school denmez).",
          "'Behind' kelimesinde vurgu ikinci hecededir (/bɪˈhaɪnd/).",
          "'Under the tree' (ağacın altında), 'under the table' (masanın altında)."
        ],
        rationale: "Yön, adres ve mekan tasvirlerinde doğru nesne hiyerarşisi kurmayı sağlar."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Yanında (Next to) ve İki Şeyin Arasında (Between)",
        content: "Yan yana olma durumunu anlatırken en popüler edat 'NEXT TO' (/nekst tuː/) kalıbıdır: 'The pharmacy is next to the supermarket' (Eczane süpermarketin hemen yanında). 'Next' kelimesinden sonraki 'to' zorunludur (Alternatif olarak 'beside' da kullanılabilir). 'BETWEEN' (/bɪˈtwiːn/) ise açıkça belirtilen İKİ nesne veya yerin tam ortasında bulunmayı ifade eder ve formülü şöyledir: 'between [A] AND [B]'. Örneğin: 'The cafe is between the library and the cinema' (Kafe kütüphane ile sinemanın arasındadır).",
        formula: "next to + [Tek Nesne]  |  between + [Nesne 1] + AND + [Nesne 2]",
        keyPhrase: "I am sitting between David and Sarah, next to the window.",
        subPoints: [
          "'Next to' kalıbında 'to' edatını asla unutmayın: 'next to the door'.",
          "'Between' daima iki nesne arasına 'and' bağlacı ister: 'between the bank and the post office'.",
          "İkiden fazla şeyin arasında olmak için 'among' kelimesi kullanılır (örnek: among the trees)."
        ],
        rationale: "Adres sorma, harita okuma ve nesne bulma senaryolarında kesin konum bildirme refleksi verir."
      }
    ]
  },
  17: {
    introduction: "Dünyayı sadece isimlerle anlatamazsınız; onu renklendirmek, detaylandırmak ve hissettirmek için sıfatlara (adjectives) ihtiyacınız vardır: 'hızlı araba', 'lezzetli kahve', 'küçük ev', 'pahalı saat'. Ancak İngilizcede sıfatların cümle içindeki yeri ve dilbilgisel davranışları Türk öğrencileri bazen şaşırtır. İngilizcede sıfatlar nereye konur? İsimden önce mi, sonra mı? Ve en önemlisi: İsimler çoğul olduğunda (arabalar -> cars), sıfatlar da çoğul olur mu? Dünyanın pek çok dilinde sıfatlar çoğul eki alırken, İngilizcede sıfatlar TAŞ GİBİ SABİTTİR; asla ve asla çoğul eki (-s) almazlar! Bu derste sıfatların iki temel söz dizimsel yerini ve sıfat kullanımının altın kurallarını öğreneceksiniz.",
    linguisticLogic: "İngilizcede sıfatların iki temel söz dizimsel konumu vardır: 1) NİTELEME KONUMU (Attributive): Sıfat doğrudan ismin HEMEN ÖNÜNE gelir. Tıpkı Türkçede olduğu gibi: 'a red car' (kırmızı bir araba), 'cold water' (soğuk su). Eğer isim tekil sayılabilirse, 'a/an' belirteci sıfatın önüne geçer: 'an expensive watch'. 2) YÜKLEM KONUMU (Predicative): Sıfat To Be veya durum fiillerinin (look, seem, smell) arkasına geçerek özneyi niteler: 'The car is red', 'The soup smells delicious'. İngilizce sıfatların ALTIN KURALI: Sıfatların cinsiyeti veya çoğul hali YOKTUR! Bir araba da 'red car'dır; on araba da 'ten red cars'dır (Asla *reds cars olmaz!).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Sıfatın İsmin Önüne Gelmesi ve 'a / an' Belirteci",
        content: "Türkçede olduğu gibi İngilizcede de sıfat nitelediği ismin ÖNÜNE oturur: 'new car' (yeni araba), 'big house' (büyük ev), 'tall man' (uzun boylu adam). Burada Türk öğrencilerin en sık yanıldığı kural 'a / an' belirtecinin yeridir. Türkçede 'güzel bir ev' derken 'bir' kelimesi sıfatla isim arasına girer. ANCAK İNGİLİZCE BÖYLE YAPMAZ! 'a / an' belirteci sıfatın da EN BAŞINA gelir: 'a beautiful house' (Asla *beautiful a house denmez!). Eğer sıfat sesli bir harfle başlıyorsa 'an' olur: 'an old car' (eski bir araba), 'an interesting book' (ilginç bir kitap).",
        formula: "A / AN + [Sıfat] + [Tekil İsim]  |  [Sıfat] + [Çoğul / Sayılamayan İsim]",
        keyPhrase: "She bought an expensive leather jacket and a small bag.",
        subPoints: [
          "'a / an' belirteci sıfattan ÖNCE gelir: 'a modern flat' (*modern a flat YANLIŞTIR).",
          "Belirteç sıfatın ilk harfine göre seçilir: 'a car' ama 'an old car'; 'an apple' ama 'a red apple'.",
          "İsim çoğulsa 'a/an' düşer: 'expensive shoes' (pahalı ayakkabılar)."
        ],
        rationale: "Türkçe 'güzel bir ev' söz dizimi alışkanlığının İngilizceye yanlış aktarılmasını engeller."
      },
      {
        stepNumber: 2,
        title: "2. Adım: To Be Fiilinden Sonra Kullanım (Yüklem Konumu)",
        content: "Sıfat tek başına bir cümlenin ana fikri ve yüklemi olacaksa 'To Be' (am / is / are) fiilinin sağına yerleşir. Bu kullanımda sıfattan sonra hiçbir isim gelmez ve bu yüzden başına 'a / an' KESİNLİKLE GELMEZ: 'The car is fast' (Araba hızlıdır), 'This coffee is hot' (Bu kahve sıcaktır), 'They are happy' (Onlar mutludur). En ölümcül öğrenci hatası: İsmin olmadığı yere 'a' koymaktır (Asla *The car is a fast denmez!). Bir cümlenin sıfatında 'a' olması için arkasında mutlaka tekil bir isim bulunmalıdır: 'The car is fast' VEYA 'It is a fast car'.",
        formula: "Özne + am / is / are + [Sıfat] (İsim YOK, 'a/an' YOK!)",
        keyPhrase: "The hotel was wonderful, but the rooms were quite small.",
        subPoints: [
          "Arkasında isim yoksa 'a / an' asla kullanılmaz: 'He is strong' (*He is a strong KESİNLİKLE YANLIŞTIR).",
          "İsim varsa 'a' geri gelir: 'He is A strong man'.",
          "İki cümleyi karşılaştırın: 'London is expensive' (Sıfat) vs 'London is an expensive city' (Sıfat + İsim)."
        ],
        rationale: "Sıfatların yüklem konumundaki 'a/an' tuzağını kalıcı olarak temizler."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Altın Kural: Sıfatlar Asla Ama Asla Çoğul Eki Almaz!",
        content: "Fransızca, İspanyolca ve birçok Avrupa dilinde isim çoğul olunca sıfat da çoğul eki alır. Ancak İngilizce bu konuda inanılmaz derecede minimalist ve katıdır: İNGİLİZCEDE SIFATLAR ASLA ÇOĞUL YAPILAMAZ! İster tek bir şeyden bahsedin, ister bir milyon şeyden bahsedin; sıfatın şekli milimetre oynamaz. Tekil: 'a green apple' (yeşil bir elma). Çoğul: 'five green apples' (beş yeşil elma - Sadece 'apple' çoğul olur, sıfata asla *-s gelmez: *five greens apples DİL KURALINA AYKIRIDIR). Sıfatlar taş gibidir, asla bükülmez.",
        formula: "[Sayı / Many] + [Yalın Sıfat] + [Çoğul İsim]-s",
        keyPhrase: "We visited three old castles and took many beautiful photos.",
        subPoints: [
          "Asla sıfatın sonuna '-s' eklemeyin: *youngs people değil, 'young people'.",
          "İsim çoğul eki alır: 'new cars', 'tall buildings', 'clever students'.",
          "Sıfatların eril/dişil ayrımı da yoktur; erkek için de 'good', kadın için de 'good'."
        ],
        rationale: "Öğrencilerin diğer dillerden veya aşırı kurallardan kaynaklanan çoğul sıfat hatasını önler."
      }
    ]
  },
  18: {
    introduction: "İnsanoğlunun en temel biyolojik ve duygusal ihtiyaçlarını ifade etmek günlük iletişimin özüdür: 'Çok acıktım', 'Susadım', 'Yorgunum', 'Mutluyum', 'Korkuyorum'. Ancak İngilizceye adım atan Türk öğrencilerin karşısına burada devasa bir zihinsel tuzak çıkar! Türkçede 'Açım' veya 'Uykum var' deriz; Fransızca veya İspanyolcada ise 'Açlığa sahibim' (I have hunger) denir. Peki İngilizcede nasıl denir? İngilizcede açlık, susuzluk, yorgunluk veya üşüme bir nesne veya mülkiyet DEĞİLDİR; kişinin o andaki 'varoluş hali ve sıfatıdır'! Bu yüzden İngilizcede asla 'have' denmez; To Be (am/is/are) kullanılır! Bu derste temel duyguları, fiziksel durumları ve şiddet derecelerini (very, so, a bit) doğru ifade etmeyi öğreneceksiniz.",
    linguisticLogic: "İngilizce dünya görüşünde açlık (hungry), susuzluk (thirsty), yorgunluk (tired), üşüme (cold) ve sıcaklama (hot) birer NİTELEME SIFATIDIR. Sıfatlar To Be fiiliyle bağlanır: 'I am hungry' (Ben aç durumdayım), 'She is thirsty' (O susamış durumda). Türkçedeki 'Uykum var' cümlesi İngilizceye kelimesi kelimesine '*I have sleep' diye çevrilemez; 'Ben uykuluyum' mantığıyla 'I am sleepy' denir. Bu duyguların ve durumların şiddetini belirtmek için sıfatın hemen önüne 'derece zarfları' (intensifiers) getirilir: 'a bit' (biraz), 'very' (çok), 'extremely' (son derece), 'so' (öylesine).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Fiziksel Durumlar: Neden 'HAVE' Değil de 'AM / IS / ARE'?",
        content: "Bu kuralı zihninize bir mühür gibi basın: İngilizcede fiziksel durumlar sıfattır ve daima 'To Be' (am / is / are) ile söylenir! 'Açım' -> 'I am hungry' (Asla *I have hunger değil!). 'Susadım' -> 'I am thirsty'. 'Yorgunum' -> 'I am tired'. 'Uykum var' -> 'I am sleepy'. 'Üşüdüm / Soğuk' -> 'I am cold' (Asla *I have cold demeyin; 'have a cold' grip olmak demektir!). 'Sıcakladım' -> 'I am hot'. Karşınızdakine durumunu sormak için To Be başa geçer: 'Are you hungry?' (Aç mısın?), 'Are you cold?' (Üşüdün mü?).",
        formula: "Özne + am / is / are + [Fiziksel Sıfat] (hungry, thirsty, tired, cold, hot, sleepy)",
        keyPhrase: "I am really thirsty. Can I have a glass of water, please?",
        subPoints: [
          "Asla 'I have hungry' veya 'I have cold' demeyin; daima 'I am hungry', 'I am cold'.",
          "'I am cold' = Üşüdüm; 'I have a cold' = Nezle/grip oldum (anlam tamamen değişir!).",
          "Soru sorarken: 'Are you tired?' (Yorgun musun?)."
        ],
        rationale: "Diller arasındaki kavramsal varoluş farkını öğreterek en yaygın hata kaynağını kurutur."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Temel Duygular: Ruh Halini Doğru Sıfatla İfade Etme",
        content: "Ruhsal durumları ve duyguları anlatırken de aynı 'To Be + Sıfat' formülü kusursuz çalışır. En temel duygu sıfatlarımız: 'happy' (mutlu), 'sad' (üzgün), 'angry' (kızgın), 'nervous' (gergin / heyecanlı), 'worried' (endişeli), 'excited' (heyecanlı / coşkulu), 'bored' (canı sıkılmış), 'afraid / scared' (korkmuş). Örneğin: 'He is angry because the train is late' (Kızgın çünkü tren gecikti), 'We are very excited about our holiday' (Tatilimiz için çok heyecanlıyız). Korku bildirirken 'be afraid of' kalıbı kullanılır: 'She is afraid of dogs' (O köpeklerden korkar).",
        formula: "Özne + am / is / are + [Duygu Sıfatı]  |  be afraid of + [Korkulan Şey]",
        keyPhrase: "She is not angry, she is just worried about the exam results.",
        subPoints: [
          "'bored' (canı sıkılmış insan) ile 'boring' (sıkıcı film/ders) asla karıştırılmamalıdır.",
          "'I am afraid of...' kalıbında To Be şarttır: 'I am afraid of spiders'.",
          "Olumsuz ruh halleri: 'I am not nervous; I am confident' (Gergin değilim; özgüvenliyim)."
        ],
        rationale: "Duygu kelimelerini doğru cümle kalıbıyla birleştirerek ifade derinliği kazandırır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Derecelendirme Zarfları: 'Very', 'So', 'Really' ve 'A bit'",
        content: "Duygunuzun veya fiziksel durumunuzun derecesini belirtmek konuşmanızı çok daha insani ve doğal kılar. Bu derecelendirme kelimeleri sıfatın HEMEN ÖNÜNE yerleşir: 1) 'a bit / a little' (biraz / azıcık): 'I am a bit tired' (Biraz yorgunum). 2) 'very' (çok): 'She is very happy' (O çok mutlu). 3) 'really' (gerçekten): 'We are really hungry' (Gerçekten çok açız). 4) 'so' (öylesine / o kadar): 'I am so excited!' (Öylesine heyecanlıyım ki!). Sıralama: Özne + To Be + Zarfta Derece + Sıfat.",
        formula: "Özne + am / is / are + [a bit / very / really / so] + Sıfat",
        keyPhrase: "I am a bit cold, so I will close the window. I am really hungry, too.",
        subPoints: [
          "Zarf daima sıfatın ÖNÜNE gelir: 'very tired' (*tired very YANLIŞTIR).",
          "'a bit' olumsuz veya nötr durumlarda yumuşatma sağlar: 'I am a bit nervous'.",
          "'so' konuşma dilinde duyguya güçlü bir samimiyet ve vurgu katar."
        ],
        rationale: "Duyguların şiddetini nüanslı bir şekilde anlatma becerisi kazandırır."
      }
    ]
  },
  19: {
    introduction: "İngilizlerle sohbet başlatmanın dünyaca ünlü bir numaralı konusu nedir biliyor musunuz? Hava durumu! Bir asansörde, otobüs durağında veya bir İngiliz meslektaşınızla toplantı öncesinde sohbeti ısıtmanın en güvenli yolu havadan bahsetmektir. Ancak hava durumundan bahsederken Türk öğrencileri bekleyen ilginç bir dil kuralı vardır: Türkçede 'Güneşli' veya 'Yağmur yağıyor' deriz; özne kullanmayız. Oysa İngilizcede öznesiz cümle kurulamaz! Peki gökyüzü veya yağmur eylemi için özne kimdir? İngilizce bu durumlarda doğanın sesi olarak gizemli 'IT' zamirini devreye sokar: 'IT IS sunny' (Hava güneşli). Bu derste hava durumu sormayı, sıfatlarla hava tasvirini ve yağış bildiren eylemleri öğreneceksiniz.",
    linguisticLogic: "İngilizcede hava olayları, saat ve mesafe gibi doğrudan bir insan veya nesne öznesi bulunmayan durumlarda 'Dummy It' (Sözde Özne 'It') kullanılır. Cümle daima 'IT IS' (kısaca 'It's') ile başlar: 1) SIFATLARLA TASVİR: 'It is + Sıfat' -> It is sunny (güneşli), It is cloudy (bulutlu), It is windy (rüzgarlı), It is cold (soğuk). 2) YAĞIŞ EYLEMLERİ: Yağmur ve kar İngilizcede hem isim hem de fiildir; tam şu an yağıyorsa şimdiki zaman eki (-ing) alırlar: 'It is raining' (Yağmur yağıyor), 'It is snowing' (Kar yağıyor). Havayı sormak için evrensel kalıp 'What is the weather like?' şeklindedir (Buradaki 'like' sevmek değil, 'gibi/nasıl' demektir).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Hava Durumu Sorma Kalıpları: 'What is the weather like?'",
        content: "Birine havanın nasıl olduğunu sormanın en yaygın ve standart yolu 'What is the weather like?' kalıbıdır. Bu cümledeki 'like' kelimesi sevmek fiili DEĞİLDİR; 'ne gibi / nasıl' anlamına gelen edattır. Alternatif ve daha kısa bir soru kalıbı ise 'How is the weather?' şeklindedir. Belirli bir şehirdeki veya gündeki havayı sormak için cümlenin sonuna mekan veya zaman eklenir: 'What is the weather like in London today?' (Bugün Londra'da hava nasıl?), 'What is the weather like in summer?' (Yazın hava nasıldır?).",
        formula: "What is the weather like (in [Şehir] / today)?  |  How is the weather?",
        keyPhrase: "What is the weather like in Istanbul today? - It's sunny and warm.",
        subPoints: [
          "'What is the weather like?' kalıbındaki 'like' edattır; asıl fiil 'is'tir.",
          "Asla *How is the weather like? demeyin! Ya 'What ... like' ya da sadece 'How' kullanılır.",
          "Cevap verirken daima 'It is...' veya 'It's...' kalıbıyla başlanır."
        ],
        rationale: "Hava durumu sorma kalıplarındaki klasik 'how...like' hatasını önler."
      },
      {
        stepNumber: 2,
        title: "2. Adım: 'It is + Sıfat' ile Hava Durumu Tasviri",
        content: "Hava durumunu anlatırken cümlenin başında mutlaka 'It is' veya kısaca 'It's' bulunur. Sıfatların çoğu isim köklerine '-y' eki getirilerek türetilir: Sun (güneş) -> sunny (güneşli); Cloud (bulut) -> cloudy (bulutlu); Wind (rüzgar) -> windy (rüzgarlı); Fog (sis) -> foggy (sisli); Rain (yağmur) -> rainy (yağmurlu). Sıcaklık dereceleri için ise temel sıfatlarımız şunlardır: 'hot' (sıcak), 'warm' (ılık / tatlı sıcak), 'cool' (serin), 'cold' (soğuk), 'freezing' (dondurucu soğuk). İki sıfatı birleştirebilirsiniz: 'It is cold and windy today' (Bugün hava soğuk ve rüzgarlı).",
        formula: "It is (It's) + [Hava Sıfatı] (+ and + [Sıcaklık Sıfatı])",
        keyPhrase: "It is freezing cold outside; take your coat and scarf.",
        subPoints: [
          "Asla cümleye öznesiz başlamayın: *Sunny today değil, 'It is sunny today'.",
          "Sun -> sunny (çift n), Fog -> foggy (çift g) imla kurallarına dikkat edin.",
          "'warm' (ılık/hoş) ve 'cool' (serin/ferahlatıcı) olumlu çağrışımlı hava durumlarıdır."
        ],
        rationale: "Sözde özne 'It' kullanımıyla hava sıfatlarının üretim mantığını kavratır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Yağış Eylemleri: 'It is raining / snowing' ve Sıcaklık Bildirme",
        content: "Eğer tam şu an pencereden baktığınızda yağmur veya kar yağıyorsa, bu bir durum değil 'anlık bir eylemdir'! İngilizcede yağmur yağmak 'rain', kar yağmak 'snow' fiilleridir ve şimdiki zamanda To Be + '-ing' alırlar: 'It is raining' (Yağmur yağıyor), 'It is snowing heavily' (Yoğun kar yağıyor). Eğer havanın genel olarak yağmurlu olduğunu söylüyorsanız sıfat olan 'It is rainy' dersiniz; ama damlalar düşüyorsa 'It is raining' denir. Sıcaklık derecesi söylerken: 'It is 22 degrees (Celsius)' (Hava 22 derece) denir; sıfırın altı için 'minus' veya 'below zero' kullanılır: 'It is minus five degrees'.",
        formula: "Yağış Eylemi: It is raining / snowing  |  Sıcaklık: It is [Sayı] degrees (Celsius)",
        keyPhrase: "Look outside, it is raining cats and dogs! (Bardaktan boşanırcasına yağıyor).",
        subPoints: [
          "Anlık yağış eylemi: 'It is raining' (Yağmur yağıyor) / 'It is snowing' (Kar yağıyor).",
          "Genel durum: 'London is very rainy in autumn' (Sonbaharda çok yağmurludur).",
          "Sıcaklık bildirirken: 'It's twenty-five degrees' (Yirmi beş derece)."
        ],
        rationale: "Durum sıfatı ile anlık yağış fiili arasındaki ince nüansı netleştirir."
      }
    ]
  },
  20: {
    introduction: "Tebrikler! A1 seviyesinin en önemli yapı taşlarını barındıran 2. Modülün büyük zirvesine ulaştınız. Bu entegrasyon dersinde, son 9 derste tek tek öğrendiğiniz tüm araçları — To Be fiilini, sıfatları, varlık bildiren 'There is / There are' yapılarını, konum edatlarını (in, on, under, behind, next to) ve renkleri — birleştirerek eksiksiz bir mekan ve oda tasviri yapacaksınız. Yurt dışında bir ev kiralarken ev sahibine evi anlatmak, otel odanızı resepsiyona tarif etmek veya bir arkadaşınıza yeni dairenizi tanıtmak akıcı bir mekan tasviri gerektirir. Bu derste parça parça cümleler kurmak yerine, bir anadili konuşucusu gibi zengin, tutarlı ve profesyonel bir tasvir paragrafı inşa etmeyi öğreneceksiniz.",
    linguisticLogic: "Başarılı bir mekan tasviri pedagojik olarak 4 temel sütunun sentezidir: 1) GENEL TASVİR (To Be + Sıfat): Mekanın atmosferi ve genel boyutu (My flat is modern and very cosy). 2) BÖLÜM VE ODALARI SAYMA (There is / There are): Mekanın içindeki bölümler (There are two bedrooms and there is a large living room). 3) EŞYA YERLEŞİMİ (There is + Nesne + Konum Edatı): Odadaki mobilyaların düzeni (There is a big sofa next to the window). 4) RENK VE NİTELEME (Sıfat + İsim): Detaylar (There is a soft blue rug on the wooden floor). Bu dört sütun ardı ardına geldiğinde tasvir bir fotoğraf gibi gözler önüne serilir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Genel Mekan Girişi ve Atmosfer (To Be + Sıfatlar)",
        content: "Mekan tasvirinize evin, odanın veya otelin genel büyüklüğü, aydınlığı ve konumuyla başlayın. Burada ana yüklemimiz 'To Be' fiilidir: 'I live in a modern flat in Istanbul' (İstanbul'da modern bir dairede yaşıyorum), 'My room is bright and spacious' (Odam aydınlık ve ferah), 'The living room is small but very cosy' (Oturma odası küçük ama çok sıcaktır). Mekanın genel havasını birkaç güçlü sıfatla çizmek dinleyicinin zihninde sahneyi hemen canlandırır.",
        formula: "Mekan + is / are + [Genel Sıfatlar] (spacious, cosy, bright, comfortable, modern)",
        keyPhrase: "My apartment is very cosy, bright and close to the city centre.",
        subPoints: [
          "Girişte mekanı genel hatlarıyla tanıtın: 'It is a large house with a beautiful garden'.",
          "Zıtlık bağlacı 'but' ile denge kurun: 'small but very comfortable' (küçük ama çok rahat).",
          "Konum ekleyin: 'It is on the third floor' (Üçüncü kattadır)."
        ],
        rationale: "Tasvire geniş açıdan başlayarak zihinsel sahne kurulumunu organize eder."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Odaları ve Varlıkları Sayma (There is / There are)",
        content: "Genel atmosferi belirledikten sonra evin bölümlerini ve odalarını tek tek sayın. Burada tekiller için 'There is', çoğullar için 'There are' devreye girer: 'In my flat, there is a large kitchen, a sunny living room, and there are two bedrooms' (Dairemde geniş bir mutfak, güneşli bir oturma odası ve iki yatak odası var). Sayılamayan veya genel eşyalar için de 'There is' kullanılır: 'There is plenty of sunlight in the morning' (Sabahları bolca güneş ışığı var).",
        formula: "There is + [Tekil Oda / Bölüm]  |  There are + [Çoğul Odalar]",
        keyPhrase: "There are three rooms in the apartment, and there is a balcony overlooking the park.",
        subPoints: [
          "Odalar tekilse 'There is a...', çoğulsa 'There are two...' deyin.",
          "Odaları 'and' bağlacıyla bağlayın.",
          "Asla *The flat has rooms yerine varlık yapısı olan 'There are'ı önceliklendirin."
        ],
        rationale: "Mekanın mimari planını İngilizce varlık kalıplarıyla hatasız aktarmayı sağlar."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Eşya Yerleşimi ve Detaylı Konumlandırma (Edatlar + Sıfatlar)",
        content: "Şimdi odanın içine adım atın ve mobilyaların konumlarını edatlar (in, on, next to, under, behind, between) ve sıfatlarla tasvir edin. Formül: 'There is a + [Sıfat] + [Mobilya] + [Konum Edatı] + [Referans Noktası]'. Örneğin: 'There is a comfortable grey sofa in the centre of the room' (Odanın ortasında rahat gri bir kanepe var). 'Next to the sofa, there is a small wooden table' (Kanepenin yanında küçük ahşap bir masa var). 'On the table, there is an antique lamp' (Masanın üzerinde antika bir lamba var). Bu adımda tüm modülün bilgisi kusursuz bir uyumla birleşir.",
        formula: "There is a + [Sıfat] + [Eşya] + [Edat: next to / on / between] + [Konum]",
        keyPhrase: "There is a wooden desk under the window, and there are two armchairs near the fireplace.",
        subPoints: [
          "Sıfatı ismin önüne koyun: 'wooden desk', 'soft rug', 'large wardrobe'.",
          "Edatla konumu netleştirin: 'between the door and the window', 'on the wall'.",
          "Işık ve ferahlık katan detaylar ekleyin: 'There is a big mirror on the wall'."
        ],
        rationale: "Öğrenciye çok katmanlı, akıcı ve eksiksiz bir A1 entegrasyon çıktısı ürettirir."
      }
    ]
  }
};

// Apply enhancements to module2
for (const [idStr, enh] of Object.entries(batch2Enhancements)) {
  const id = parseInt(idStr, 10);
  if (module2_lessons_11_20[id]) {
    Object.assign(module2_lessons_11_20[id], enh);
  }
}

// Write back to module2_lessons_11_20.ts
const targetFile = './src/services/pedagogy/modules/module2_lessons_11_20.ts';
const fileContent = `// LinguAAI Pedagogical Content — Level A1: Module 2 (Lessons 11–20)
// To Be Fiili, Zamirler, Varlık ve Mekan Tasviri
// 100% bespoke, CEFR A1 compliant, deep pedagogical masterclass.

import { TopicBlueprint } from '../../pedagogicalEngine';

export const module2_lessons_11_20: Record<number, TopicBlueprint> = ${JSON.stringify(module2_lessons_11_20, null, 2)};
`;

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log('Successfully updated module2_lessons_11_20.ts with deep pedagogical content!');
