import { ReadingTextItem, ReadingCategory } from '../types/reading';
import { CEFRLevel } from '../types/lesson';

export const READING_CATEGORIES: { id: ReadingCategory; title: string; titleTr: string; icon: string }[] = [
  { id: 'short_stories', title: 'Short Stories', titleTr: 'Kısa Hikâyeler', icon: 'Book' },
  { id: 'daily_life', title: 'Daily Life', titleTr: 'Günlük Yaşam', icon: 'Sun' },
  { id: 'conversations', title: 'Conversations', titleTr: 'Diyaloglar & İletişim', icon: 'MessageCircle' },
  { id: 'travel_culture', title: 'Travel & Culture', titleTr: 'Seyahat ve Kültür', icon: 'Compass' },
  { id: 'work_career', title: 'Work & Career', titleTr: 'İş ve Kariyer', icon: 'Briefcase' },
  { id: 'science_tech', title: 'Science & Technology', titleTr: 'Bilim ve Teknoloji', icon: 'Cpu' },
  { id: 'news_articles', title: 'News & Articles', titleTr: 'Haberler ve Makaleler', icon: 'Newspaper' },
  { id: 'history_bio', title: 'History & Biography', titleTr: 'Tarih ve Biyografi', icon: 'Clock' },
  { id: 'opinions_arguments', title: 'Opinions & Arguments', titleTr: 'Görüşler ve Argümanlar', icon: 'Scale' },
  { id: 'literature_arts', title: 'Literature & Advanced', titleTr: 'Edebiyat ve İleri Metinler', icon: 'Palette' },
];

export const READING_TEXTS: ReadingTextItem[] = [
// ================= A1 TEXTS =================
  {
    id: 'reading-a1-01',
    title: 'A Quiet Morning at the Riverside Cafe',
    titleTr: 'Nehir Kenarındaki Kafede Sakin Bir Sabah',
    level: 'A1',
    category: 'daily_life',
    categoryTr: 'Günlük Yaşam',
    wordCount: 145,
    readingTimeMinutes: 2,
    summaryTr: 'Ahmet her pazar nehir kenarındaki kafeye gider, sıcak kahve içer ve sakin sabahın tadını çıkarır.',
    targetGrammar: 'Present Simple (Geniş Zaman), Basic daily routine verbs',
    paragraphs: [
      'Every Sunday morning, Ahmet wakes up early at seven o’clock. The city is still asleep, and the streets are very quiet.',
      'He puts on his favorite blue jacket and walks to the small cafe near the river. The name of the cafe is Riverside Books. The waiters are always friendly and smile warmly.',
      'Ahmet orders a hot black coffee and a fresh butter croissant. He sits by the large window overlooking the water. Small white birds fly over the calm river.',
      'He opens his English notebook and writes three new sentences. This quiet hour gives him energy for the whole busy week.'
    ],
    vocabulary: [
      {
        word: 'quiet',
        phonetic: '/ˈkwaɪ.ət/',
        pos: 'adj',
        tr: 'sakin, sessiz',
        contextDef: 'Making very little noise or peaceful',
        example: 'The streets are very quiet on Sunday morning.'
      },
      {
        word: 'friendly',
        phonetic: '/ˈfrend.li/',
        pos: 'adj',
        tr: 'arkadaş canlısı, güler yüzlü',
        contextDef: 'Behaving in a kind and pleasant way',
        example: 'The waiters are always friendly to guests.'
      },
      {
        word: 'overlooking',
        phonetic: '/ˌoʊ.vɚˈlʊk.ɪŋ/',
        pos: 'verb',
        tr: '...ye bakan, manzaralı',
        contextDef: 'Having a view of something from above',
        example: 'He sits by the window overlooking the river.'
      },
      {
        word: 'fresh',
        phonetic: '/freʃ/',
        pos: 'adj',
        tr: 'taze, yeni pişmiş',
        contextDef: 'Recently made or baked, not stale',
        example: 'He orders a fresh butter croissant.'
      }
    ],
    questions: [
      {
        id: 'q-a1-01-1',
        type: 'main_idea',
        typeTr: 'Ana Fikir',
        question: 'What is the main topic of this passage?',
        options: [
          'Ahmet’s Sunday morning routine at a peaceful cafe',
          'How to make black coffee and croissants',
          'The history of Riverside Books cafe',
          'Ahmet’s busy office job during weekdays'
        ],
        correctIndex: 0,
        explanation: 'The passage describes Ahmet’s calm habit of waking up early on Sundays, going to the riverside cafe, and preparing for the week.',
        evidenceSentence: 'Every Sunday morning, Ahmet wakes up early at seven o’clock... This quiet hour gives him energy for the whole busy week.'
      },
      {
        id: 'q-a1-01-2',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'What does Ahmet order at the cafe?',
        options: [
          'Tea and strawberry cake',
          'A hot black coffee and a fresh butter croissant',
          'Orange juice and toast',
          'Water and a cheese sandwich'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 3 explicitly states: "Ahmet orders a hot black coffee and a fresh butter croissant."',
        evidenceSentence: 'Ahmet orders a hot black coffee and a fresh butter croissant.'
      },
      {
        id: 'q-a1-01-3',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'Where does Ahmet sit inside the cafe?',
        options: [
          'In the dark corner near the kitchen',
          'Outside in the garden',
          'By the large window overlooking the water',
          'Next to the busy entrance door'
        ],
        correctIndex: 2,
        explanation: 'Paragraph 3 mentions: "He sits by the large window overlooking the water."',
        evidenceSentence: 'He sits by the large window overlooking the water.'
      },
      {
        id: 'q-a1-01-4',
        type: 'inference',
        typeTr: 'Çıkarım Yapma',
        question: 'Why does Ahmet enjoy this quiet Sunday hour?',
        options: [
          'Because he hates his friends',
          'Because it charges him with positive energy for the entire week',
          'Because the cafe gives free meals on Sundays',
          'Because he must study for university entrance exams'
        ],
        correctIndex: 1,
        explanation: 'The final line clarifies: "This quiet hour gives him energy for the whole busy week."',
        evidenceSentence: 'This quiet hour gives him energy for the whole busy week.'
      }
    ]
  },
  {
    id: 'reading-a1-02',
    title: 'Meeting My New Neighbor, Elena',
    titleTr: 'Yeni Komşum Elena ile Tanışma',
    level: 'A1',
    category: 'conversations',
    categoryTr: 'Diyaloglar & İletişim',
    wordCount: 160,
    readingTimeMinutes: 2,
    summaryTr: 'Kiralık daireye yeni taşınan İspanyol tasarımcı Elena ile apartman koridorunda ilk tanışma sohbeti.',
    targetGrammar: 'Greetings, personal pronouns, to be, country and origin',
    paragraphs: [
      'Yesterday afternoon, I met my new neighbor in front of the elevator. She carried two big cardboard boxes, so I held the door for her.',
      '“Thank you so much!” she said with a bright smile. “My name is Elena. I moved into apartment 4B this morning.”',
      '“Nice to meet you, Elena. I am Can from apartment 4A. Welcome to our building!” I replied.',
      'Elena is from Valencia, Spain. She is a graphic designer and works for an international magazine. She speaks Spanish and English, and she wants to learn Turkish.',
      'I offered to show her the local supermarket and the nearest subway station. It is wonderful to have friendly neighbors in a big city.'
    ],
    vocabulary: [
      {
        word: 'neighbor',
        phonetic: '/ˈneɪ.bɚ/',
        pos: 'noun',
        tr: 'komşu',
        contextDef: 'A person living near or next door',
        example: 'I met my new neighbor in front of the elevator.'
      },
      {
        word: 'elevator',
        phonetic: '/ˈel.ə.veɪ.t̬ɚ/',
        pos: 'noun',
        tr: 'asansör',
        contextDef: 'A platform or compartment used to carry people between floors',
        example: 'She carried two boxes in front of the elevator.'
      },
      {
        word: 'offered',
        phonetic: '/ˈɑː.fɚd/',
        pos: 'verb',
        tr: 'teklif etti, önerdi',
        contextDef: 'Presented something for someone to accept or refuse',
        example: 'I offered to show her the local supermarket.'
      },
      {
        word: 'international',
        phonetic: '/ˌɪn.t̬ɚˈnæʃ.nəl/',
        pos: 'adj',
        tr: 'uluslararası',
        contextDef: 'Involving two or more nations',
        example: 'She works for an international magazine.'
      }
    ],
    questions: [
      {
        id: 'q-a1-02-1',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'Where is Elena originally from?',
        options: [
          'Rome, Italy',
          'Valencia, Spain',
          'London, England',
          'Berlin, Germany'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 4 states: "Elena is from Valencia, Spain."',
        evidenceSentence: 'Elena is from Valencia, Spain.'
      },
      {
        id: 'q-a1-02-2',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'What is Elena’s profession?',
        options: [
          'A doctor at the central hospital',
          'A graphic designer for an international magazine',
          'An English teacher at high school',
          'A cafe manager'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 4 states: "She is a graphic designer and works for an international magazine."',
        evidenceSentence: 'She is a graphic designer and works for an international magazine.'
      },
      {
        id: 'q-a1-02-3',
        type: 'true_false',
        typeTr: 'Doğru / Yanlış',
        question: 'Can helped Elena because she had two heavy cardboard boxes.',
        options: [
          'True (Doğru)',
          'False (Yanlış)',
          'Not mentioned (Metinde belirtilmemiş)'
        ],
        correctIndex: 0,
        explanation: 'Paragraph 1 explains: "She carried two big cardboard boxes, so I held the door for her."',
        evidenceSentence: 'She carried two big cardboard boxes, so I held the door for her.'
      }
    ]
  },

  // ================= A2 TEXTS =================
  {
    id: 'reading-a2-01',
    title: 'The Lost Train Ticket in Florence',
    titleTr: 'Floransa’da Kaybolan Tren Bileti',
    level: 'A2',
    category: 'travel_culture',
    categoryTr: 'Seyahat ve Kültür',
    wordCount: 220,
    readingTimeMinutes: 3,
    summaryTr: 'İtalya seyahatinde istasyonda biletini bulamayan Selin’in yaşadığı kısa panik ve yardımsever görevli sayesinde sorunu çözüşü.',
    targetGrammar: 'Past Simple (Geçmiş Zaman) and travel prepositions',
    paragraphs: [
      'Last summer, Selin traveled to Italy for the first time. On Thursday morning, she arrived at the historical Santa Maria Novella train station in Florence to catch the 10:15 express train to Venice.',
      'The station hall was crowded with tourists from all over the world. People were buying sandwiches, looking at departure monitors, and dragging heavy suitcases across the marble floor.',
      'Selin reached into her backpack to find her printed ticket, but her fingers touched only an empty pocket. Her heart started beating fast. “Did I leave it on the kitchen table in my hotel?” she wondered anxiously.',
      'She walked quickly to the customer information desk. The officer, an elderly Italian man named Marco, listened calmly. “Do not worry, signorina,” Marco said with a reassuring nod. “If you bought it online, your booking code on your phone is completely sufficient.”',
      'Selin unlocked her smartphone, showed the confirmation email, and Marco printed a duplicate ticket in less than thirty seconds. Relieved, she boarded platform 4 just five minutes before departure.'
    ],
    vocabulary: [
      {
        word: 'departure',
        phonetic: '/dɪˈpɑːr.tʃɚ/',
        pos: 'noun',
        tr: 'kalkış, hareket',
        contextDef: 'The act of leaving a place, especially to start a journey',
        example: 'Passengers watched the departure monitors carefully.'
      },
      {
        word: 'anxiously',
        phonetic: '/ˈæŋk.ʃəs.li/',
        pos: 'adv',
        tr: 'endişeyle, kaygıyla',
        contextDef: 'In a manner resulting from nervousness or fear',
        example: 'She checked her pockets anxiously.'
      },
      {
        word: 'sufficient',
        phonetic: '/səˈfɪʃ.ənt/',
        pos: 'adj',
        tr: 'yeterli, kafi',
        contextDef: 'Enough to meet the needs of a situation',
        example: 'Your booking code on your phone is completely sufficient.'
      },
      {
        word: 'relieved',
        phonetic: '/rɪˈliːvd/',
        pos: 'adj',
        tr: 'rahatlamış, içi ferahlamış',
        contextDef: 'Experiencing relief after nervousness or pain',
        example: 'Relieved, she boarded the train.'
      }
    ],
    questions: [
      {
        id: 'q-a2-01-1',
        type: 'main_idea',
        typeTr: 'Ana Fikir',
        question: 'What is the central conflict in this story?',
        options: [
          'Selin lost her passport and was arrested in Italy',
          'Selin couldn’t find her printed train ticket and feared missing her train to Venice',
          'The train to Venice was completely cancelled due to rain',
          'Marco refused to help tourists at the station'
        ],
        correctIndex: 1,
        explanation: 'The story revolves around Selin discovering she doesn’t have her printed ticket and resolving the issue before departure.',
        evidenceSentence: 'Selin reached into her backpack to find her printed ticket, but her fingers touched only an empty pocket.'
      },
      {
        id: 'q-a2-01-2',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'How did the station officer, Marco, resolve Selin’s problem?',
        options: [
          'He made her pay a heavy penalty fee',
          'He gave her a free ticket because he knew her family',
          'He used her online booking code from her smartphone to reprint the ticket',
          'He told her to take a bus instead of the train'
        ],
        correctIndex: 2,
        explanation: 'Marco told her that her digital confirmation code was sufficient and printed a replacement ticket immediately.',
        evidenceSentence: 'Marco printed a duplicate ticket in less than thirty seconds after viewing the confirmation email.'
      },
      {
        id: 'q-a2-01-3',
        type: 'vocabulary',
        typeTr: 'Bağlamdan Kelime',
        question: 'In paragraph 4, what does the word "sufficient" mean?',
        options: [
          'Expensive and rare',
          'Enough and acceptable for the purpose',
          'Incomplete and invalid',
          'Dangerous and forbidden'
        ],
        correctIndex: 1,
        explanation: '"Sufficient" means adequate or enough to fulfill the requirement.',
        evidenceSentence: '“If you bought it online, your booking code on your phone is completely sufficient.”'
      },
      {
        id: 'q-a2-01-4',
        type: 'inference',
        typeTr: 'Çıkarım Yapma',
        question: 'What can be inferred about Selin’s punctuality at the end of the text?',
        options: [
          'She missed the train and had to wait for three hours',
          'She arrived on the train just in time, with five minutes to spare',
          'She decided to cancel her trip and stay in Florence',
          'The train had left five minutes before she reached the platform'
        ],
        correctIndex: 1,
        explanation: 'The text notes: "she boarded platform 4 just five minutes before departure."',
        evidenceSentence: 'Relieved, she boarded platform 4 just five minutes before departure.'
      }
    ]
  },
  {
    id: 'reading-a2-02',
    title: 'A Job Interview for a Graphic Designer',
    titleTr: 'Grafik Tasarımcı İçin İş Mülakatı',
    level: 'A2',
    category: 'work_business',
    categoryTr: 'İş Dünyası & Kariyer',
    wordCount: 210,
    readingTimeMinutes: 3,
    summaryTr: 'Genç tasarımcı Kerem’in yenilikçi bir teknoloji şirketinde katıldığı ilk İngilizce iş mülakatı deneyimi.',
    targetGrammar: 'Modal verbs (can, could, should) and workplace vocabulary',
    paragraphs: [
      'At ten o’clock on Tuesday, Kerem sat in the bright reception room of NovaTech, a modern software company in Istanbul. He wore a crisp navy shirt and carried his design portfolio on an iPad.',
      'He had prepared for this interview for two whole weeks. Although he felt confident about his digital skills, speaking English in a formal business interview made his palms sweat.',
      'The door opened, and Ms. Davies, the creative director from Dublin, greeted him warmly. “Good morning, Kerem. Thank you for coming today. Please make yourself comfortable.”',
      'During the meeting, Ms. Davies asked him to explain his favorite branding project. Kerem demonstrated how he designed a minimalist logo and chose a clean typography system for an organic food startup.',
      'Ms. Davies listened attentively and praised his creative thinking. “Your portfolio shows both technical precision and visual elegance,” she remarked with an encouraging smile.'
    ],
    vocabulary: [
      {
        word: 'confident',
        phonetic: '/ˈkɑːn.fə.dənt/',
        pos: 'adj',
        tr: 'kendine güvenen, emin',
        contextDef: 'Feeling sure about one’s abilities or qualities',
        example: 'He felt confident about his digital skills.'
      },
      {
        word: 'portfolio',
        phonetic: '/pɔːrtˈfoʊ.li.oʊ/',
        pos: 'noun',
        tr: 'portfolyo, çalışma dosyası',
        contextDef: 'A set of pieces of creative work collected by someone to display their skills',
        example: 'He carried his design portfolio on an iPad.'
      },
      {
        word: 'precision',
        phonetic: '/prəˈsɪʒ.ən/',
        pos: 'noun',
        tr: 'kesinlik, titizlik, hassasiyet',
        contextDef: 'The quality of being exact and accurate',
        example: 'Your portfolio shows technical precision.'
      },
      {
        word: 'praised',
        phonetic: '/preɪzd/',
        pos: 'verb',
        tr: 'övdü, takdir etti',
        contextDef: 'Expressed approval or admiration of someone’s work',
        example: 'She praised his creative thinking.'
      }
    ],
    questions: [
      {
        id: 'q-a2-02-1',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'What made Kerem nervous before the interview?',
        options: [
          'He forgot his iPad and portfolio at home',
          'He was not confident in his graphic design abilities',
          'Speaking English in a formal business setting',
          'The company office was extremely cold'
        ],
        correctIndex: 2,
        explanation: 'Paragraph 2 explains: "Although he felt confident about his digital skills, speaking English in a formal business interview made his palms sweat."',
        evidenceSentence: 'speaking English in a formal business interview made his palms sweat.'
      },
      {
        id: 'q-a2-02-2',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'What specific project did Kerem present to Ms. Davies?',
        options: [
          'A mobile video game for teenagers',
          'A minimalist logo and typography system for an organic food startup',
          'A website for a luxury car dealer',
          'A digital brochure for an airline'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 4 states: "Kerem demonstrated how he designed a minimalist logo and chose a clean typography system for an organic food startup."',
        evidenceSentence: 'how he designed a minimalist logo and chose a clean typography system for an organic food startup.'
      },
      {
        id: 'q-a2-02-3',
        type: 'inference',
        typeTr: 'Çıkarım Yapma',
        question: 'How did the interview conclude according to the final paragraph?',
        options: [
          'Very negatively, as Ms. Davies was disappointed',
          'Positively, as Ms. Davies praised his precision and visual elegance',
          'Kerem walked out of the room before finishing',
          'Ms. Davies canceled the meeting immediately'
        ],
        correctIndex: 1,
        explanation: 'Ms. Davies praised him, saying: "Your portfolio shows both technical precision and visual elegance."',
        evidenceSentence: 'Ms. Davies listened attentively and praised his creative thinking.'
      }
    ]
  },

  // ================= B1 TEXTS =================
  {
    id: 'reading-b1-01',
    title: 'The Sustainable Rooftop Garden Project',
    titleTr: 'Sürdürülebilir Çatı Bahçesi Projesi',
    level: 'B1',
    category: 'science_tech',
    categoryTr: 'Bilim ve Teknoloji',
    wordCount: 290,
    readingTimeMinutes: 4,
    summaryTr: 'Metropollerde betonlaşmanın etkilerini azaltmak için başlatılan kentsel tarım ve çatı bahçesi girişimlerinin çevreye ve topluma katkıları.',
    targetGrammar: 'Present Perfect, Passive Voice, Cause and Effect connectors',
    paragraphs: [
      'In modern metropolises where concrete skyscrapers dominate the horizon, green spaces have become a precious luxury. To counter the escalating urban heat island effect, a group of environmental architects and local citizens launched the "SkyGreens" initiative three years ago.',
      'The primary objective was simple yet transformative: converting abandoned flat rooftops into flourishing vegetable gardens and pollinator sanctuaries. By utilizing lightweight soil substrates and automated rainwater harvesting reservoirs, the team successfully transformed twelve commercial roofs in the city center.',
      'The ecological benefits have surpassed initial expectations. Recent thermal satellite imagery demonstrated that buildings equipped with rooftop flora experienced a temperature decrease of up to four degrees Celsius on scorching summer afternoons, significantly reducing electricity consumption for air conditioning.',
      'Beyond environmental gains, the project has cultivated a vibrant sense of community. Every Saturday morning, neighboring families gather to prune heirloom tomato vines, harvest organic herbs, and attend workshops on compost recycling. What began as an experimental conservation project has evolved into a thriving social movement.'
    ],
    vocabulary: [
      {
        word: 'escalating',
        phonetic: '/ˈes.kə.leɪ.t̬ɪŋ/',
        pos: 'adj',
        tr: 'tırmanan, giderek artan',
        contextDef: 'Increasing rapidly in intensity, scale, or extent',
        example: 'To counter the escalating urban heat island effect.'
      },
      {
        word: 'sanctuaries',
        phonetic: '/ˈsæŋk.tʃu.er.iz/',
        pos: 'noun',
        tr: 'sığınaklar, korunaklı alanlar',
        contextDef: 'Places of refuge, safety, or protection for living organisms',
        example: 'Converting flat rooftops into pollinator sanctuaries.'
      },
      {
        word: 'surpassed',
        phonetic: '/sɚˈpæst/',
        pos: 'verb',
        tr: 'aştı, geride bıraktı',
        contextDef: 'Exceeded or went beyond an expectation or limit',
        example: 'The ecological benefits have surpassed initial expectations.'
      },
      {
        word: 'cultivated',
        phonetic: '/ˈkʌl.tə.veɪ.t̬ɪd/',
        pos: 'verb',
        tr: 'geliştirdi, yetiştirdi',
        contextDef: 'Fostered, nurtured, or brought into existence through effort',
        example: 'The project has cultivated a vibrant sense of community.'
      }
    ],
    questions: [
      {
        id: 'q-b1-01-1',
        type: 'main_idea',
        typeTr: 'Ana Fikir',
        question: 'Which statement best summarizes the core message of the text?',
        options: [
          'Rooftop gardens are too expensive and dangerous for private homeowners',
          'The SkyGreens initiative successfully tackles urban heat while strengthening neighborhood social bonds',
          'Cities should replace all parks with commercial skyscrapers',
          'Rainwater harvesting is the only reliable way to grow vegetables'
        ],
        correctIndex: 1,
        explanation: 'The passage highlights both the environmental reduction in heat and the community cohesion brought by rooftop gardens.',
        evidenceSentence: 'Beyond environmental gains, the project has cultivated a vibrant sense of community... What began as an experimental conservation project has evolved into a thriving social movement.'
      },
      {
        id: 'q-b1-01-2',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'According to thermal satellite data, what measurable impact did rooftop gardens have?',
        options: [
          'They increased rainfall by fifty percent over the city',
          'They lowered building temperatures by up to four degrees Celsius on hot afternoons',
          'They eliminated the need for solar panels completely',
          'They doubled the market value of apartment rents'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 3 notes: "buildings equipped with rooftop flora experienced a temperature decrease of up to four degrees Celsius on scorching summer afternoons."',
        evidenceSentence: 'experienced a temperature decrease of up to four degrees Celsius on scorching summer afternoons, significantly reducing electricity consumption'
      },
      {
        id: 'q-b1-01-3',
        type: 'vocabulary',
        typeTr: 'Bağlamdan Kelime',
        question: 'What is the closest synonym for "surpassed" as used in paragraph 3?',
        options: [
          'Fell short of',
          'Exceeded',
          'Ignored',
          'Delayed'
        ],
        correctIndex: 1,
        explanation: '"Surpass" means to exceed or be greater than expected.',
        evidenceSentence: 'The ecological benefits have surpassed initial expectations.'
      },
      {
        id: 'q-b1-01-4',
        type: 'inference',
        typeTr: 'Çıkarım Yapma',
        question: 'Why did the team use lightweight soil substrates rather than standard garden earth?',
        options: [
          'Because commercial rooftops have load-bearing limits that cannot support heavy wet soil',
          'Because standard earth contains too much gold and silver',
          'Because insects refuse to live in regular garden dirt',
          'Because traditional soil cannot be delivered by trucks'
        ],
        correctIndex: 0,
        explanation: 'On building rooftops, structural engineers require lightweight materials to avoid exceeding roof weight limits.',
        evidenceSentence: 'By utilizing lightweight soil substrates and automated rainwater harvesting reservoirs, the team successfully transformed twelve commercial roofs'
      }
    ]
  },
  {
    id: 'reading-b1-02',
    title: 'The Midnight Mystery in the Old Bookshop',
    titleTr: 'Eski Kitapçıdaki Gece Yarısı Gizemi',
    level: 'B1',
    category: 'short_stories',
    categoryTr: 'Kısa Hikâyeler',
    wordCount: 285,
    readingTimeMinutes: 4,
    summaryTr: 'Antika kitap dükkanında çalışan üniversite öğrencisi David’in, ciltli bir günlükte bulduğu gizemli mektup ve eski bir dostluğun izleri.',
    targetGrammar: 'Narrative tenses (Past Continuous, Past Perfect) and descriptive adjectives',
    paragraphs: [
      'David had been cataloging second-hand volumes at "The Oak & Quill" bookstore for nearly six months. Tucked away in a narrow cobblestone alley in Edinburgh, the shop smelled richly of dried lavender, cedar shelves, and centuries of aged paper.',
      'One rainy October midnight, as he was shelving a collection of Victorian travel memoirs, a leather-bound journal slipped from the upper shelf. As it fell open against the floorboards, a folded parchment envelope fluttered out from between the pages.',
      'The envelope was addressed in elegant faded ink to “Clara, 1894”. Inside lay an unsent letter written by a maritime navigator describing an undiscovered island off the Scottish coast, along with a hand-drawn nautical map marked with tiny constellations.',
      'Instead of putting it back unnoticed, David decided to research the captain’s name in the university archives the following morning. Little did he realize that this dusty document would unlock a family secret that had remained unspoken for four generations.'
    ],
    vocabulary: [
      {
        word: 'cataloging',
        phonetic: '/ˈkæt̬.əl.ɑː.ɡɪŋ/',
        pos: 'verb',
        tr: 'kataloglamak, dizine kaydetmek',
        contextDef: 'Making a systematic list of items of the same type',
        example: 'David had been cataloging second-hand volumes.'
      },
      {
        word: 'parchment',
        phonetic: '/ˈpɑːrtʃ.mənt/',
        pos: 'noun',
        tr: 'parşömen kağıdı',
        contextDef: 'A stiff, flat, thin material made from prepared animal skin, used for writing',
        example: 'A folded parchment envelope fluttered out.'
      },
      {
        word: 'maritime',
        phonetic: '/ˈmer.ə.taɪm/',
        pos: 'adj',
        tr: 'denizcilikle ilgili, bahri',
        contextDef: 'Connected with the sea, seafaring, or nautical navigation',
        example: 'An unsent letter written by a maritime navigator.'
      },
      {
        word: 'constellations',
        phonetic: '/ˌkɑːn.stəˈleɪ.ʃənz/',
        pos: 'noun',
        tr: 'takımyıldızları',
        contextDef: 'Recognizable patterns or groupings of stars in the night sky',
        example: 'A map marked with tiny constellations.'
      }
    ],
    questions: [
      {
        id: 'q-b1-02-1',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'Where is "The Oak & Quill" bookstore situated?',
        options: [
          'In a bustling shopping mall in central London',
          'In a narrow cobblestone alley in Edinburgh',
          'Near a busy port in Dublin',
          'Inside a university library in Oxford'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 1 specifies: "Tucked away in a narrow cobblestone alley in Edinburgh."',
        evidenceSentence: 'Tucked away in a narrow cobblestone alley in Edinburgh, the shop smelled richly of dried lavender'
      },
      {
        id: 'q-b1-02-2',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'What fell out when the leather-bound journal hit the floor?',
        options: [
          'A stack of silver coins from 1894',
          'A folded parchment envelope containing an unsent letter and a nautical map',
          'A gold pocket watch with a broken glass',
          'A photograph of a Victorian family'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 2 and 3 describe the folded parchment envelope containing an unsent letter and a hand-drawn nautical map.',
        evidenceSentence: 'a folded parchment envelope fluttered out from between the pages... Inside lay an unsent letter written by a maritime navigator'
      },
      {
        id: 'q-b1-02-3',
        type: 'inference',
        typeTr: 'Çıkarım Yapma',
        question: 'What is hinted by the final sentence: "Little did he realize that this dusty document would unlock a family secret"?',
        options: [
          'David will immediately burn the letter in the fireplace',
          'The discovery will lead to an unexpected historical and personal revelation',
          'The bookstore owner will fire David for dropping the book',
          'The document was a fake replica made by tourists'
        ],
        correctIndex: 1,
        explanation: 'The literary idiom "little did he realize..." signals a major upcoming plot development and profound revelation.',
        evidenceSentence: 'Little did he realize that this dusty document would unlock a family secret that had remained unspoken for four generations.'
      }
    ]
  },

  // ================= B2 TEXTS =================
  {
    id: 'reading-b2-01',
    title: 'The Psychology of Habits and Daily Routines',
    titleTr: 'Alışkanlıkların Psikolojisi ve Günlük Rutinler',
    level: 'B2',
    category: 'science_tech',
    categoryTr: 'Bilim ve Teknoloji',
    wordCount: 350,
    readingTimeMinutes: 4,
    summaryTr: 'Nörobilimsel araştırmaların ışığında alışkanlık döngüsü: İşaret (cue), rutin ve ödül üçgeni ile kalıcı davranış değişikliğinin anahtarları.',
    targetGrammar: 'Conditionals (Third & Mixed), Cleft sentences, Advanced discourse markers',
    paragraphs: [
      'Neuroscientists estimate that approximately forty percent of our daily behaviors are driven not by deliberate conscious decisions, but by automated neural pathways known as habit loops. When an action is repeated consistently within the same environmental context, the brain gradually shifts cognitive processing from the energy-hungry prefrontal cortex to the basal ganglia.',
      'According to modern behavioral psychology, every habit consists of three interconnected components: the cue, the routine, and the reward. The cue serves as an environmental trigger that prompts the brain to initiate a predictable behavior. The routine represents the physical, mental, or emotional action performed. Finally, the reward reinforces the loop by releasing a micro-dose of dopamine, signaling to the brain that the sequence is worth preserving.',
      'A widespread misconception suggests that breaking an unproductive habit requires ironclad willpower alone. In reality, empirical studies demonstrate that willpower acts like a finite muscle; as mental fatigue accumulates throughout a demanding workday, conscious resistance steadily deteriorates.',
      'A far more effective paradigm involves habit substitution rather than outright suppression. By keeping the familiar cue and the desired reward intact while deliberately inserting an alternative, constructive routine, individuals can rewire deeply ingrained neural patterns without triggering cognitive friction.'
    ],
    vocabulary: [
      {
        word: 'deliberate',
        phonetic: '/dɪˈlɪb.ɚ.ət/',
        pos: 'adj',
        tr: 'kasıtlı, bilinçli, planlı',
        contextDef: 'Done consciously and intentionally rather than by chance',
        example: 'Driven not by deliberate conscious decisions.'
      },
      {
        word: 'reinforces',
        phonetic: '/ˌriː.ɪnˈfɔːr.sɪz/',
        pos: 'verb',
        tr: 'pekiştirir, güçlendirir',
        contextDef: 'Strengthens or supports an existing pattern or structure',
        example: 'The reward reinforces the loop by releasing dopamine.'
      },
      {
        word: 'empirical',
        phonetic: '/ɪmˈpɪr.ɪ.kəl/',
        pos: 'adj',
        tr: 'deneysel, ampirik, gözleme dayalı',
        contextDef: 'Based on observation or experiment rather than theory or pure logic',
        example: 'Empirical studies demonstrate that willpower is finite.'
      },
      {
        word: 'ingrained',
        phonetic: '/ɪnˈɡreɪnd/',
        pos: 'adj',
        tr: 'kökleşmiş, yerleşmiş',
        contextDef: 'Firmly fixed or established, difficult to change',
        example: 'Rewire deeply ingrained neural patterns.'
      }
    ],
    questions: [
      {
        id: 'q-b2-01-1',
        type: 'main_idea',
        typeTr: 'Ana Fikir',
        question: 'What is the primary thesis of the author regarding habit transformation?',
        options: [
          'Habits can only be broken by completely isolating oneself from society',
          'Replacing the routine while maintaining the cue and reward is substantially more effective than relying solely on willpower',
          'Willpower is an infinite biological resource that never depletes',
          'The prefrontal cortex controls ninety percent of our daily unconscious actions'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 4 emphasizes habit substitution (keeping the cue and reward while changing the routine) as the superior scientific approach.',
        evidenceSentence: 'A far more effective paradigm involves habit substitution rather than outright suppression. By keeping the familiar cue and the desired reward intact while deliberately inserting an alternative, constructive routine'
      },
      {
        id: 'q-b2-01-2',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'Which brain region assumes control as an action becomes automated into a habit?',
        options: [
          'The visual cortex',
          'The basal ganglia',
          'The auditory canal',
          'The spinal cord'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 1 explains: "the brain gradually shifts cognitive processing from the energy-hungry prefrontal cortex to the basal ganglia."',
        evidenceSentence: 'the brain gradually shifts cognitive processing from the energy-hungry prefrontal cortex to the basal ganglia.'
      },
      {
        id: 'q-b2-01-3',
        type: 'vocabulary',
        typeTr: 'Bağlamdan Kelime',
        question: 'What does "ironclad" mean in the context of "ironclad willpower" in paragraph 3?',
        options: [
          'Fragile and temporary',
          'Rigid, unbreakable, and extremely strict',
          'Metallic and electric',
          'Dangerous and harmful'
        ],
        correctIndex: 1,
        explanation: '"Ironclad" metaphorically denotes something unbreakable or unyielding.',
        evidenceSentence: 'A widespread misconception suggests that breaking an unproductive habit requires ironclad willpower alone.'
      },
      {
        id: 'q-b2-01-4',
        type: 'inference',
        typeTr: 'Çıkarım Yapma',
        question: 'Why are people more prone to relapsing into bad habits late in the evening?',
        options: [
          'Because dopamine is only produced before noon',
          'Because willpower functions like a muscle and suffers fatigue after daytime exertion',
          'Because the basal ganglia shuts down completely during nighttime',
          'Because bad habits are strictly nocturnal biological functions'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 3 notes: "willpower acts like a finite muscle; as mental fatigue accumulates throughout a demanding workday, conscious resistance steadily deteriorates."',
        evidenceSentence: 'as mental fatigue accumulates throughout a demanding workday, conscious resistance steadily deteriorates.'
      }
    ]
  },
  {
    id: 'reading-b2-02',
    title: 'Remote Work: Balancing Autonomy and Collaboration',
    titleTr: 'Uzaktan Çalışma: Özerklik ve İş Birliği Dengesini Kurmak',
    level: 'B2',
    category: 'work_business',
    categoryTr: 'İş Dünyası & Kariyer',
    wordCount: 340,
    readingTimeMinutes: 4,
    summaryTr: 'Esnek çalışma modellerinin sağladığı kişisel özgürlük ile ekip aidiyeti ve senkronize iletişim arasındaki hassas dengenin analizi.',
    targetGrammar: 'Subjunctive mood, Inversion structures, Hedging language',
    paragraphs: [
      'The sudden global proliferation of remote and hybrid work models has permanently altered organizational dynamics. Proponents frequently laud the unprecedented autonomy afforded to knowledge workers: the elimination of exhausting daily commutes, heightened schedule flexibility, and the ability to design an optimized domestic workspace tailored to deep focus.',
      'Nevertheless, this geographical decentralization introduces nuanced psychological and operational hurdles. Chief among these is the erosion of spontaneous serendipitous encounters—the informal "watercooler conversations" that historically sparked cross-departmental innovation and fostered unspoken social capital.',
      'Furthermore, the boundary separating professional obligations from domestic sanctuary has become perilously porous. When laptops remain permanently illuminated on the dining table, employees report an insidious pressure to maintain round-the-clock responsiveness, accelerating the onset of burnout.',
      'To flourish sustainably, forward-thinking enterprises are discarding obsolete presence-based monitoring in favor of outcome-oriented benchmarks. Simultaneously, they are codifying explicit communication protocols: favoring asynchronous documentation for complex deliberation while preserving synchronous meetings exclusively for strategic alignment and creative synergy.'
    ],
    vocabulary: [
      {
        word: 'proliferation',
        phonetic: '/prəˌlɪf.əˈreɪ.ʃən/',
        pos: 'noun',
        tr: 'hızlı artış, yayılma',
        contextDef: 'Rapid increase in the number or amount of something',
        example: 'The sudden global proliferation of remote work models.'
      },
      {
        word: 'serendipitous',
        phonetic: '/ˌser.ənˈdɪp.ə.t̬əs/',
        pos: 'adj',
        tr: 'tesadüfi ve mutlu, şans eseri olan',
        contextDef: 'Occurring or discovered by chance in a happy or beneficial way',
        example: 'The erosion of spontaneous serendipitous encounters.'
      },
      {
        word: 'porous',
        phonetic: '/ˈpɔːr.əs/',
        pos: 'adj',
        tr: 'geçirgen, delikli (mecazen: sınırları silikleşmiş)',
        contextDef: 'Allowing liquid or gas (or metaphorically boundaries) to pass through easily',
        example: 'The boundary has become perilously porous.'
      },
      {
        word: 'asynchronous',
        phonetic: '/eɪˈsɪŋ.krə.nəs/',
        pos: 'adj',
        tr: 'eşzamansız, asenkron',
        contextDef: 'Not occurring at the same time or requiring immediate simultaneous interaction',
        example: 'Favoring asynchronous documentation for complex deliberation.'
      }
    ],
    questions: [
      {
        id: 'q-b2-02-1',
        type: 'main_idea',
        typeTr: 'Ana Fikir',
        question: 'What is the primary paradox of remote work analyzed in this essay?',
        options: [
          'It saves office rent but increases electricity costs for individuals',
          'It offers valuable autonomy and focus, yet risks eroding spontaneous collaboration and work-life boundaries',
          'It makes computers faster while slowing down internet connections',
          'It forces employees to work exclusively during night shifts'
        ],
        correctIndex: 1,
        explanation: 'The passage explores how greater personal freedom conflicts with boundary blurring and the loss of spontaneous team connection.',
        evidenceSentence: 'Proponents frequently laud the unprecedented autonomy... Nevertheless, this geographical decentralization introduces nuanced psychological and operational hurdles.'
      },
      {
        id: 'q-b2-02-2',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'What management philosophy are modern enterprises adopting instead of presence monitoring?',
        options: [
          'Mandatory 24-hour webcam surveillance',
          'Outcome-oriented benchmarks and clear asynchronous communication protocols',
          'Daily paper timesheets submitted by mail',
          'A total ban on emails after 2:00 PM'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 4 states: "forward-thinking enterprises are discarding obsolete presence-based monitoring in favor of outcome-oriented benchmarks."',
        evidenceSentence: 'favor of outcome-oriented benchmarks. Simultaneously, they are codifying explicit communication protocols'
      },
      {
        id: 'q-b2-02-3',
        type: 'inference',
        typeTr: 'Çıkarım Yapma',
        question: 'What danger arises when the boundary between professional duties and home life becomes "porous"?',
        options: [
          'People forget how to cook dinner',
          'Employees feel compelled to be constantly reachable, increasing burnout vulnerability',
          'Offices become overcrowded on weekends',
          'Companies refuse to pay salaries online'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 3 directly links porous boundaries to "insidious pressure to maintain round-the-clock responsiveness, accelerating the onset of burnout."',
        evidenceSentence: 'employees report an insidious pressure to maintain round-the-clock responsiveness, accelerating the onset of burnout.'
      }
    ]
  },

  // ================= C1 TEXTS =================
  {
    id: 'reading-c1-01',
    title: 'The Ethics of Artificial Intelligence in Healthcare',
    titleTr: 'Yapay Zekânın Sağlık Hizmetlerindeki Etik Boyutları',
    level: 'C1',
    category: 'science_tech',
    categoryTr: 'Bilim ve Teknoloji',
    wordCount: 420,
    readingTimeMinutes: 5,
    summaryTr: 'Derin öğrenme algoritmalarının klinik teşhislerdeki yüksek başarısı karşısında şeffaflık, hekim sorumluluğu ve algoritmik önyargı sorunlarının felsefi ve hukuki analizi.',
    targetGrammar: 'Nominalization, Complex participial clauses, Advanced academic vocabulary',
    paragraphs: [
      'The integration of deep neural networks into radiological diagnostics and oncology staging represents an epochal leap in clinical medicine. Machine learning architectures now routinely detect nascent malignant lesions in mammograms with sensitivities that rival, and occasionally eclipse, seasoned clinicians. However, the rapid clinical deployment of these predictive systems has outpaced the establishment of robust normative frameworks, provoking contentious bioethical debates regarding epistemic opacity and moral accountability.',
      'At the nexus of this controversy lies the notoriously opaque "black box" problem. Deep learning models arrive at diagnostic classifications by computing millions of non-linear parameter weights across convoluted latent spaces. Consequently, even the computer scientists who author the algorithms cannot delineate the precise causal trajectory leading to a specific clinical prognosis. When an autonomous system recommends a radical mastectomy or declines an experimental immunotherapy, the inability to interrogate the machine’s underlying rationale fundamentally undermines the doctrine of informed consent.',
      'Moreover, algorithms are inherently reflective of the epistemological biases embedded within their training corpora. When diagnostic datasets predominantly reflect affluent, demographically homogenous patient cohorts, systemic diagnostic disparities become codified under a veneer of mathematical objectivity. Far from functioning as neutral arbiters, uncalibrated AI risks perpetuating and amplifying entrenched historical inequities.',
      'Ultimately, the ethical integration of diagnostic algorithms necessitates a paradigm of augmented intelligence rather than wholesale cognitive substitution. The sovereign therapeutic relationship between physician and patient must remain sovereign; algorithmic outputs must be operationalized strictly as secondary evidentiary inputs subject to human clinical discernment.'
    ],
    vocabulary: [
      {
        word: 'nascent',
        phonetic: '/ˈneɪ.sənt/',
        pos: 'adj',
        tr: 'yeni başlayan, henüz oluşum halindeki',
        contextDef: 'Just coming into existence and beginning to display signs of future potential',
        example: 'Detect nascent malignant lesions in mammograms.'
      },
      {
        word: 'epistemic',
        phonetic: '/ˌep.əˈstiː.mɪk/',
        pos: 'adj',
        tr: 'bilgisel, bilgiye ilişkin',
        contextDef: 'Relating to knowledge or to the degree of its validation',
        example: 'Bioethical debates regarding epistemic opacity.'
      },
      {
        word: 'delineate',
        phonetic: '/dɪˈlɪn.i.eɪt/',
        pos: 'verb',
        tr: 'net bir şekilde betimlemek, sınırlarını çizmek',
        contextDef: 'Describe, portray, or outline with precision and detail',
        example: 'Cannot delineate the precise causal trajectory.'
      },
      {
        word: 'veneer',
        phonetic: '/vəˈnɪr/',
        pos: 'noun',
        tr: 'yüzeysel örtü, cila (mecazen aldatıcı dış görünüş)',
        contextDef: 'An attractive appearance that covers or disguises someone’s or something’s true nature',
        example: 'Under a veneer of mathematical objectivity.'
      }
    ],
    questions: [
      {
        id: 'q-c1-01-1',
        type: 'main_idea',
        typeTr: 'Ana Fikir',
        question: 'Which of the following encapsulates the author’s primary argument in this treatise?',
        options: [
          'AI systems must be banned completely from hospitals due to inherent mathematical flaws',
          'While AI diagnostic prowess is formidable, its opaque reasoning and demographic biases require it to serve strictly as an aid to human clinical judgement',
          'Physicians will inevitably be replaced by automated algorithms within the next decade',
          'Informed consent is an obsolete medical doctrine that hinders technological innovation'
        ],
        correctIndex: 1,
        explanation: 'The author balances recognition of AI’s analytical power with a strong ethical insistence on human oversight and transparency.',
        evidenceSentence: 'algorithmic outputs must be operationalized strictly as secondary evidentiary inputs subject to human clinical discernment.'
      },
      {
        id: 'q-c1-01-2',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'According to paragraph 2, why does the "black box" problem conflict with the doctrine of informed consent?',
        options: [
          'Because hospitals charge extra fees for algorithmic reports',
          'Because clinicians and patients cannot examine or question the specific causal logic behind the recommendation',
          'Because computer scientists refuse to share patents with medical universities',
          'Because patients generally refuse to speak with doctors who use computers'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 2 highlights that when clinicians cannot explain how the machine calculated a radical verdict, patients cannot provide genuine informed consent.',
        evidenceSentence: 'the inability to interrogate the machine’s underlying rationale fundamentally undermines the doctrine of informed consent.'
      },
      {
        id: 'q-c1-01-3',
        type: 'inference',
        typeTr: 'Çıkarım Yapma',
        question: 'What consequence does the author foresee if algorithms are trained primarily on affluent demographic cohorts?',
        options: [
          'Diagnostic software will become too inexpensive to distribute',
          'Historical healthcare disparities will become reinforced under the false pretext of objective math',
          'The algorithms will fail to operate on digital hospital networks',
          'Radiological equipment will suffer mechanical breakdown'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 3 notes that biased datasets lead to disparities being "codified under a veneer of mathematical objectivity."',
        evidenceSentence: 'systemic diagnostic disparities become codified under a veneer of mathematical objectivity. Far from functioning as neutral arbiters, uncalibrated AI risks perpetuating and amplifying entrenched historical inequities.'
      },
      {
        id: 'q-c1-01-4',
        type: 'vocabulary',
        typeTr: 'Bağlamdan Kelime',
        question: 'In the final sentence, what is the precise meaning of "discernment"?',
        options: [
          'Careless guessing',
          'The ability to judge well, with wisdom and keen perception',
          'Mechanical data copying',
          'Financial bargaining'
        ],
        correctIndex: 1,
        explanation: '"Discernment" denotes astute perception and nuanced evaluative judgement.',
        evidenceSentence: 'subject to human clinical discernment.'
      }
    ]
  },
  {
    id: 'reading-c1-02',
    title: 'Cognitive Biases in Economic Decision-Making',
    titleTr: 'Ekonomik Karar Alma Süreçlerinde Bilişsel Yanılgılar',
    level: 'C1',
    category: 'work_business',
    categoryTr: 'İş Dünyası & Kariyer',
    wordCount: 410,
    readingTimeMinutes: 5,
    summaryTr: 'Geleneksel iktisat teorisinin rasyonel insan (homo economicus) varsayımına karşı davranışsal iktisadın sunduğu deneysel kanıtlar ve kayıptan kaçınma psikolojisi.',
    targetGrammar: 'Inverted conditionals, Compound prepositional idioms, Abstract nominalizations',
    paragraphs: [
      'Classical macroeconomic orthodoxy long predicated its models upon the hypothetical construct of "Homo economicus"—an idealized economic agent postulated to possess infinite computational acuity, unyielding self-control, and a single-minded mandate to maximize expected utility. Yet, the systematic empirical observations pioneered by behavioral economists have dismantled this pristine axiom, revealing that human financial decisions are relentlessly mediated by pervasive cognitive heuristics.',
      'Foremost among these psychological vulnerabilities is the phenomenon of loss aversion, famously formulated by Daniel Kahneman and Amos Tversky. Experimental trials consistently demonstrate an asymmetric emotional response: the psychological visceral agony of surrendering a thousand dollars exerts approximately double the intensity of the pleasure derived from acquiring an identical sum. This profound asymmetry induces investors to hold plummeting equities far past the threshold of prudence—desperately dreading the realization of paper losses—while precipitously liquidating winning stocks to prematurely secure marginal gains.',
      'Equally pernicious is the sunk cost fallacy, wherein decision-makers justify allocating further resources into a flailing venture solely on the grounds of cumulative historical expenditure, rather than dispassionate future utility. In corporate boardrooms as well as sovereign fiscal policy, billions are routinely squandered defending moribund infrastructural initiatives simply because executives cannot stomach the reputational ignominy of publicly writing down unrecoverable outlays.',
      'De-biasing institutional decision architecture thus requires deliberate structural scaffolds: pre-mortems, anonymous contrarian panels, and algorithmic circuit breakers designed to insulate capital deployment from our evolved evolutionary impulses.'
    ],
    vocabulary: [
      {
        word: 'predicated',
        phonetic: '/ˈpred.ə.keɪ.t̬ɪd/',
        pos: 'verb',
        tr: 'temellendirilmiş, dayandırılmış',
        contextDef: 'Found or based something on a particular premise or foundation',
        example: 'Predicated its models upon the construct of Homo economicus.'
      },
      {
        word: 'pernicious',
        phonetic: '/pɚˈnɪʃ.əs/',
        pos: 'adj',
        tr: 'sinsi ve zararlı, yıkıcı',
        contextDef: 'Having a harmful effect, especially in a gradual or subtle way',
        example: 'Equally pernicious is the sunk cost fallacy.'
      },
      {
        word: 'ignominy',
        phonetic: '/ˈɪɡ.nə.mɪn.i/',
        pos: 'noun',
        tr: 'aşağılanma, yüz kızartıcı durum, utanç',
        contextDef: 'Public shame or disgrace resulting from dishonorable conduct',
        example: 'The reputational ignominy of publicly writing down outlays.'
      },
      {
        word: 'scaffolds',
        phonetic: '/ˈskæf.oʊldz/',
        pos: 'noun',
        tr: 'iskeleler, destek yapıları',
        contextDef: 'Temporary or modular support frameworks enabling constructive tasks',
        example: 'Deliberate structural scaffolds such as pre-mortems.'
      }
    ],
    questions: [
      {
        id: 'q-c1-02-1',
        type: 'main_idea',
        typeTr: 'Ana Fikir',
        question: 'What is the primary objective of the author in this critique?',
        options: [
          'To argue that human beings are incapable of doing arithmetic',
          'To expose how cognitive biases like loss aversion and sunk cost invalidate the classical assumption of purely rational financial actors',
          'To convince people to stop investing money in the stock market entirely',
          'To prove that Kahneman and Tversky were mistaken in their experiments'
        ],
        correctIndex: 1,
        explanation: 'The text demonstrates how behavioral heuristics systematically refute classical neoclassical economic models of rational behavior.',
        evidenceSentence: 'the systematic empirical observations pioneered by behavioral economists have dismantled this pristine axiom, revealing that human financial decisions are relentlessly mediated by pervasive cognitive heuristics.'
      },
      {
        id: 'q-c1-02-2',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'How do investors typically behave under the influence of loss aversion as described in paragraph 2?',
        options: [
          'They sell losing assets immediately and hold profitable ones forever',
          'They hold losing stocks too long to avoid acknowledging loss, while hurriedly selling winning stocks',
          'They give all their profits away to philanthropic foundations',
          'They trade only government bonds during market crashes'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 2 highlights that fear of loss causes investors to hold plunging stocks while prematurely locking in gains from winning equities.',
        evidenceSentence: 'induces investors to hold plummeting equities far past the threshold of prudence... while precipitously liquidating winning stocks to prematurely secure marginal gains.'
      },
      {
        id: 'q-c1-02-3',
        type: 'vocabulary',
        typeTr: 'Bağlamdan Kelime',
        question: 'What does "moribund" describe in paragraph 3 ("moribund infrastructural initiatives")?',
        options: [
          'Rapidly growing and highly lucrative',
          'Stagnant, failing, or on the verge of obsolescence and collapse',
          'Subterranean and hidden',
          'Freshly inaugurated'
        ],
        correctIndex: 1,
        explanation: '"Moribund" means at the point of death, failing, or lacking vitality.',
        evidenceSentence: 'billions are routinely squandered defending moribund infrastructural initiatives'
      }
    ]
  },

  // ================= C2 TEXTS =================
  {
    id: 'reading-c2-01',
    title: 'Epistemological Shifts in Modern Linguistic Theory',
    titleTr: 'Modern Dilbilim Teorisinde Epistemolojik Kırılmalar',
    level: 'C2',
    category: 'society_arts',
    categoryTr: 'Toplum ve Sanat',
    wordCount: 460,
    readingTimeMinutes: 6,
    summaryTr: 'Chomskyci evrensel dilbilgisinin nativist kabullerinden çağdaş bilişsel ve kullanıma dayalı dilbilimin dinamik, sosyo-kültürel ağ modeline geçişin felsefi sorgusu.',
    targetGrammar: 'High academic register, Archaisms, Latinate syntax, Complex nested clauses',
    paragraphs: [
      'For the better part of five decades, structural and generative linguistics remained beholden to the Cartesian postulate that human language capability constitutes an innate, species-specific cognitive organ—the venerable "Universal Grammar" paradigm promulgated by Noam Chomsky. Under this formalist dispensation, natural language was conceptualized as a modular, autonomous deductive apparatus, insulated from the messy vicissitudes of sensorimotor embodiment, cultural acculturation, and communicative exigencies.',
      'However, the dawn of the twenty-first century has witnessed an epistemological insurrection spearheaded by cognitive and usage-based linguistics. Far from being governed by a genetically hardwired algebraic matrix, language is increasingly understood by contemporary theorists as an emergent, dynamic complex adaptive system. In this reimagined ontology, linguistic structure does not precede communicative practice; rather, syntactic regularities crystallize ex nihilo through iterated intersubjective discourse, sedimented by the domain-general cognitive mechanisms of analogical reasoning, statistical distributional learning, and joint attentional intention-reading.',
      'This conceptual recalibration fundamentally destabilizes the classical dichotomy between synchrony and diachrony that had cast a monolithic shadow over linguistic scholarship since Ferdinand de Saussure. If grammatical categories are inherently gradient, polycentric, and perpetually renegotiated in the crucible of semiotic exchange, the quixotic pursuit of an invariant, Platonic "competence" distinct from contingent "performance" loses its theoretical coherence.',
      'Thus, language ceases to be an immutable internal algorithm; it reveals itself as an ever-evolving communal artifact—a living cathedral whose architecture is continuously reconfigured by the breath of those who dwell within its sanctuary.'
    ],
    vocabulary: [
      {
        word: 'dispensation',
        phonetic: '/ˌdɪs.pənˈseɪ.ʃən/',
        pos: 'noun',
        tr: 'düzen, idare biçimi, sistem',
        contextDef: 'A general state of affairs, era, or ruling religious/philosophical system',
        example: 'Under this formalist dispensation.'
      },
      {
        word: 'vicissitudes',
        phonetic: '/vɪˈsɪs.ə.tuːdz/',
        pos: 'noun',
        tr: 'iniş çıkışlar, değişken durumlar, hayatın dalgalanmaları',
        contextDef: 'Alternations or changes of fortune, typically unwelcome',
        example: 'Insulated from the messy vicissitudes of sensorimotor embodiment.'
      },
      {
        word: 'recalibration',
        phonetic: '/ˌriː.kæl.əˈbreɪ.ʃən/',
        pos: 'noun',
        tr: 'yeniden kalibre etme, yeniden ayarlama',
        contextDef: 'The act of re-evaluating or making fresh adjustments to parameters or assumptions',
        example: 'This conceptual recalibration fundamentally destabilizes.'
      },
      {
        word: 'quixotic',
        phonetic: '/kwɪkˈsɑː.t̬ɪk/',
        pos: 'adj',
        tr: 'hayalperest, beyhude, donkişotvari',
        contextDef: 'Exceedingly idealistic; unrealistic and impractical',
        example: 'The quixotic pursuit of an invariant, Platonic competence.'
      }
    ],
    questions: [
      {
        id: 'q-c2-01-1',
        type: 'main_idea',
        typeTr: 'Ana Fikir',
        question: 'Which overarching paradigm shift does the text elucidate?',
        options: [
          'The transition from linguistic analysis to computer code translation',
          'The transition from Chomskyan innate generative formalism to usage-based emergent linguistic models',
          'The complete rejection of Saussure in favor of Latin grammatical structures',
          'The victory of generative phonology over neurological brain scanning'
        ],
        correctIndex: 1,
        explanation: 'The essay traces the theoretical progression from Chomsky’s autonomous Universal Grammar organ to cognitive, usage-based emergentist models.',
        evidenceSentence: 'cognitive and usage-based linguistics... Far from being governed by a genetically hardwired algebraic matrix, language is increasingly understood by contemporary theorists as an emergent, dynamic complex adaptive system.'
      },
      {
        id: 'q-c2-01-2',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'According to usage-based linguistics, how do syntactic structures originate?',
        options: [
          'Through a sudden divine mutation 50,000 years ago',
          'Through iterated intersubjective interaction supported by general cognitive mechanisms like analogy and statistical pattern learning',
          'Exclusively through formal instruction in elementary grammar schools',
          'By reading dictionary definitions in early childhood'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 2 explains that syntactic regularities crystallize through repeated intersubjective discourse via domain-general cognitive mechanisms.',
        evidenceSentence: 'syntactic regularities crystallize ex nihilo through iterated intersubjective discourse, sedimented by the domain-general cognitive mechanisms of analogical reasoning'
      },
      {
        id: 'q-c2-01-3',
        type: 'inference',
        typeTr: 'Çıkarım Yapma',
        question: 'What philosophical implication does the author draw in the lyrical concluding sentence?',
        options: [
          'Language is a dead artifact preserved exclusively in glass library cases',
          'Language is dynamic, participatory, and continually reshaped through live human usage',
          'Chomsky should be appointed the eternal president of the International Phonetic Association',
          'Grammar books should be burned to preserve free speech'
        ],
        correctIndex: 1,
        explanation: 'The metaphor of a living cathedral reconfigured by speakers portrays language as an evolving, human-shaped cultural continuum.',
        evidenceSentence: 'language ceases to be an immutable internal algorithm; it reveals itself as an ever-evolving communal artifact—a living cathedral whose architecture is continuously reconfigured'
      }
    ]
  },
  {
    id: 'reading-c2-02',
    title: 'The Nuances of Diplomatic Ambiguity in Global Treaties',
    titleTr: 'Küresel Antlaşmalarda Diplomatik Müphemliğin İncelikleri',
    level: 'C2',
    category: 'society_arts',
    categoryTr: 'Toplum ve Sanat',
    wordCount: 450,
    readingTimeMinutes: 6,
    summaryTr: 'Uluslararası antlaşmalarda bilinçli olarak kullanılan yoruma açık dilin (constructive ambiguity) barışı tesis etmedeki rolü ve gelecekteki olası jeopolitik sürtüşme riskleri.',
    targetGrammar: 'Conditional subtleties, Rhetorical antithesis, Diplomatic nomenclature',
    paragraphs: [
      'In the lexicon of multilateral statecraft, precision is celebrated as a cardinal virtue; yet, the consummate diplomat understands that dogmatic semantic clarity can prove catastrophic to negotiation. When irreconcilable ideological doctrines, historical grievances, or territorial prerogatives collide at the summit table, the calculated deployment of "constructive ambiguity" often represents the sole viable bridge across the chasm of diplomatic impasse.',
      'Constructive ambiguity involves the deliberate formulation of treaty provisions using deliberately elastic phrasing, thereby permitting opposing signatories to claim disparate, self-serving interpretations to their domestic constituencies. By deferring intractable substantive disagreements while securing operational consensus on urgent interim measures, negotiators prevent total collapse and manufacture a fragile veneer of accord.',
      'Classic manifestations of this stratagem are inscribed throughout twentieth-century diplomatic history, notably in United Nations Security Council Resolution 242. The purposeful omission of the definite article in the English clause concerning the withdrawal of armed forces from territories occupied during the conflict enabled conflicting parties to ratify the parchment without explicitly capitulating on fundamental sovereign claims.',
      'Yet, this diplomatic gambit carries profound existential liabilities. What functions as a brilliant palliative during high-stakes midnight parleys often metastasizes into an intractable point of contention years later, when asymmetric power dynamics invite one faction to exploit linguistic indeterminacy as pretext for unilateral abrogation.'
    ],
    vocabulary: [
      {
        word: 'consummate',
        phonetic: '/ˈkɑːn.sə.mət/',
        pos: 'adj',
        tr: 'mükemmel, usta, yetkin',
        contextDef: 'Showing a high degree of skill, mastery, and flair',
        example: 'The consummate diplomat understands that dogmatic clarity can prove catastrophic.'
      },
      {
        word: 'intractable',
        phonetic: '/ɪnˈtræk.tə.bəl/',
        pos: 'adj',
        tr: 'çözümsüz gibi görünen, inatçı, başa çıkılmaz',
        contextDef: 'Hard to control, manage, or deal with',
        example: 'By deferring intractable substantive disagreements.'
      },
      {
        word: 'palliative',
        phonetic: '/ˈpæl.i.ə.t̬ɪv/',
        pos: 'noun',
        tr: 'geçici dindirici, yatıştırıcı çare',
        contextDef: 'A remedy that alleviates pain or symptoms without curing the underlying disease',
        example: 'Functions as a brilliant palliative during high-stakes parleys.'
      },
      {
        word: 'abrogation',
        phonetic: '/ˌæb.rəˈɡeɪ.ʃən/',
        pos: 'noun',
        tr: 'fesih, hükümsüz kılma, yürürlükten kaldırma',
        contextDef: 'The repeal or abolition of a law, rule, or customary treaty obligation',
        example: 'A pretext for unilateral abrogation.'
      }
    ],
    questions: [
      {
        id: 'q-c2-02-1',
        type: 'main_idea',
        typeTr: 'Ana Fikir',
        question: 'What double-edged nature of "constructive ambiguity" does the author examine?',
        options: [
          'It translates well into French but poorly into Spanish',
          'It rescues deadlocked negotiations in the short term, but risks sparking future conflict due to latent disagreements',
          'It is illegal under international maritime law',
          'It is only practiced by autocratic dictatorships'
        ],
        correctIndex: 1,
        explanation: 'The author shows that while ambiguity allows immediate signing, the unresolved tension can later metastasize into dangerous friction.',
        evidenceSentence: 'What functions as a brilliant palliative during high-stakes midnight parleys often metastasizes into an intractable point of contention years later'
      },
      {
        id: 'q-c2-02-2',
        type: 'detail',
        typeTr: 'Detay Tespiti',
        question: 'What historical example from the United Nations does the author cite?',
        options: [
          'The Treaty of Versailles in 1919',
          'UN Security Council Resolution 242 and the omitted definite article',
          'The Kyoto Climate Protocol',
          'The Geneva Convention on Prisoners of War'
        ],
        correctIndex: 1,
        explanation: 'Paragraph 3 explicitly discusses UN Security Council Resolution 242 and the deliberate omission of "the" in the English draft.',
        evidenceSentence: 'notably in United Nations Security Council Resolution 242. The purposeful omission of the definite article in the English clause'
      },
      {
        id: 'q-c2-02-3',
        type: 'vocabulary',
        typeTr: 'Bağlamdan Kelime',
        question: 'What is the closest meaning of "elastic phrasing" in paragraph 2?',
        options: [
          'Sentences printed on rubber paper',
          'Flexible wording open to multiple interpretations',
          'Overly brief expressions',
          'Poetic rhyming couplets'
        ],
        correctIndex: 1,
        explanation: '"Elastic phrasing" refers to adaptable or ambiguous wording that can stretch to fit varying interpretations.',
        evidenceSentence: 'the deliberate formulation of treaty provisions using deliberately elastic phrasing'
      }
    ]
  },

{
  "id": "reading-a1-03",
  "title": "A Saturday Visit to the Farmer’s Market",
  "titleTr": "Çiftçi Pazarına Cumartesi Ziyareti",
  "level": "A1",
  "category": "conversations",
  "categoryTr": "Diyaloglar & İletişim",
  "wordCount": 152,
  "readingTimeMinutes": 2,
  "summaryTr": "Maria ve arkadaşı yerel pazara gidip taze meyve alırlar ve satıcıyla basit İngilizce alışveriş cümleleri kullanırlar.",
  "targetGrammar": "How much / How many, Present Simple, Demonstratives (this/these)",
  "paragraphs": [
    "On Saturday morning, Maria and her friend Sara walk to the neighborhood farmer’s market. The square is colorful and lively.",
    "“Look at these red apples,” Maria says. “They look very fresh.” She smiles and approaches the fruit stand.",
    "“Good morning! How much are these apples?” Sara asks the friendly vendor. The vendor replies, “They are two dollars a kilo.”",
    "Maria buys two kilos of apples and a small bottle of fresh orange juice. “Thank you very much. Have a wonderful day!” she says happily as they walk home."
  ],
  "vocabulary": [
    {
      "word": "market",
      "phonetic": "/ˈmɑːr.kɪt/",
      "pos": "noun",
      "tr": "pazar, çarşı",
      "contextDef": "A regular gathering of people for buying and selling food and goods",
      "example": "They go to the local market every weekend."
    },
    {
      "word": "vendor",
      "phonetic": "/ˈven.dər/",
      "pos": "noun",
      "tr": "satıcı, esnaf",
      "contextDef": "A person who sells food or goods at a stall or shop",
      "example": "The vendor smiled and weighed the fruit."
    },
    {
      "word": "replies",
      "phonetic": "/rɪˈplaɪz/",
      "pos": "verb",
      "tr": "cevap verir, yanıtlar",
      "contextDef": "Answers someone in conversation",
      "example": "She replies politely to every question."
    },
    {
      "word": "approaches",
      "phonetic": "/əˈproʊ.tʃɪz/",
      "pos": "verb",
      "tr": "yaklaşır, yanına gider",
      "contextDef": "Comes near or nearer to someone or something",
      "example": "Maria approaches the fruit stand."
    },
    {
      "word": "wonderful",
      "phonetic": "/ˈwʌn.dər.fəl/",
      "pos": "adj",
      "tr": "harika, mükemmel",
      "contextDef": "Extremely good and pleasant",
      "example": "We had a wonderful walk this morning."
    }
  ],
  "questions": [
    {
      "id": "q-a1-03-1",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the main topic of this passage?",
      "options": [
        "Maria buying clothes at a large shopping mall",
        "Maria and Sara shopping for fresh fruit at a farmer’s market",
        "Sara cooking dinner for her family at home",
        "A farmer planting apple trees in his garden"
      ],
      "correctIndex": 1,
      "explanation": "Metin, Maria ve Sara’nın pazar yerine gidip satıcıyla görüşerek taze elma ve portakal suyu almasını anlatmaktadır.",
      "evidenceSentence": "Maria and her friend Sara walk to the neighborhood farmer’s market."
    },
    {
      "id": "q-a1-03-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "How much are the red apples per kilo?",
      "options": [
        "One dollar",
        "Two dollars",
        "Five dollars",
        "Ten dollars"
      ],
      "correctIndex": 1,
      "explanation": "Satıcı elmaların kilosunun iki dolar olduğunu açıkça ifade etmiştir.",
      "evidenceSentence": "The vendor replies, “They are two dollars a kilo.”"
    },
    {
      "id": "q-a1-03-3",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "What else does Maria buy besides two kilos of apples?",
      "options": [
        "A loaf of bread",
        "A bottle of fresh orange juice",
        "A bag of green tea",
        "Three chocolate cakes"
      ],
      "correctIndex": 1,
      "explanation": "Maria elmaların yanında küçük bir şişe taze portakal suyu satın almıştır.",
      "evidenceSentence": "Maria buys two kilos of apples and a small bottle of fresh orange juice."
    },
    {
      "id": "q-a1-03-4",
      "type": "true_false",
      "typeTr": "Doğru / Yanlış",
      "question": "According to the text, the vendor at the market was rude and unfriendly.",
      "options": [
        "True",
        "False"
      ],
      "correctIndex": 1,
      "explanation": "Metinde satıcının “friendly vendor” (arkadaş canlısı satıcı) olduğu belirtilmiştir; kaba değildir.",
      "evidenceSentence": "Sara asks the friendly vendor."
    }
  ]
},

{
  "id": "reading-a1-04",
  "title": "The Cat on Elm Street",
  "titleTr": "Elm Sokağındaki Kedi",
  "level": "A1",
  "category": "short_stories",
  "categoryTr": "Kısa Hikâyeler",
  "wordCount": 160,
  "readingTimeMinutes": 2,
  "summaryTr": "Yağmurlu bir günde kapının önünde ıslanan küçük bir kedi ve ona yardım eden Leo’nun hikayesi.",
  "targetGrammar": "Past Simple basics (was, saw, gave), Adjectives of feeling",
  "paragraphs": [
    "Yesterday afternoon, it was raining heavily outside. Leo looked out of his living room window and saw a tiny gray cat under the wooden porch.",
    "The cat was wet and shaking from the cold. Leo opened the front door slowly. “Hello, little friend,” he whispered gently.",
    "He went into the warm kitchen and found a small bowl. He poured warm milk and placed two pieces of cooked chicken inside.",
    "He put the bowl near the porch. The cat stepped forward carefully, smelled the food, and began to eat. Leo felt very happy to help."
  ],
  "vocabulary": [
    {
      "word": "porch",
      "phonetic": "/pɔːrtʃ/",
      "pos": "noun",
      "tr": "veranda, kapı önü sundurması",
      "contextDef": "A covered entrance to the front of a house",
      "example": "The cat was sitting under the porch."
    },
    {
      "word": "tiny",
      "phonetic": "/ˈtaɪ.ni/",
      "pos": "adj",
      "tr": "küçücük, minik",
      "contextDef": "Extremely small in size",
      "example": "He saw a tiny gray kitten."
    },
    {
      "word": "shaking",
      "phonetic": "/ˈʃeɪ.kɪŋ/",
      "pos": "verb",
      "tr": "titreyen, titremek",
      "contextDef": "Moving with quick, short trembling movements because of cold or fear",
      "example": "The kitten was wet and shaking."
    },
    {
      "word": "whispered",
      "phonetic": "/ˈwɪs.pərd/",
      "pos": "verb",
      "tr": "fısıldadı",
      "contextDef": "Spoke very softly using one’s breath",
      "example": "He whispered gently to the frightened animal."
    },
    {
      "word": "carefully",
      "phonetic": "/ˈker.fəl.i/",
      "pos": "adv",
      "tr": "dikkatlice, özenle",
      "contextDef": "With great care and caution",
      "example": "The cat approached the bowl carefully."
    }
  ],
  "questions": [
    {
      "id": "q-a1-04-1",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the central event in this story?",
      "options": [
        "A boy losing his pet dog in a big park",
        "A boy helping a cold and hungry cat during a rainstorm",
        "A cat chasing mice inside a warm kitchen",
        "A family moving into a new house on Elm Street"
      ],
      "correctIndex": 1,
      "explanation": "Hikayenin ana konusu, yağmurda ıslanan ve üşüyen minik bir kediye Leo’nun yardım edip yiyecek vermesidir.",
      "evidenceSentence": "Leo looked out of his living room window and saw a tiny gray cat under the wooden porch."
    },
    {
      "id": "q-a1-04-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "What did Leo put in the bowl for the cat?",
      "options": [
        "Cold water and bread crumbs",
        "Warm milk and pieces of cooked chicken",
        "Dry cat biscuits and tuna fish",
        "Hot vegetable soup"
      ],
      "correctIndex": 1,
      "explanation": "Leo mutfaktan ılık süt ve pişmiş tavuk parçaları hazırlamıştır.",
      "evidenceSentence": "He poured warm milk and placed two pieces of cooked chicken inside."
    },
    {
      "id": "q-a1-04-3",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "Why did the cat step forward “carefully”?",
      "options": [
        "Because it wanted to jump into the garden",
        "Because it was cautious and unsure if Leo was safe",
        "Because it was not hungry at all",
        "Because the floor was wet and slippery"
      ],
      "correctIndex": 1,
      "explanation": "Yabani ya da sahipsiz hayvanlar tanımadıkları insanlara karşı temkinli (carefully) yaklaşırlar.",
      "evidenceSentence": "The cat stepped forward carefully, smelled the food, and began to eat."
    },
    {
      "id": "q-a1-04-4",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "How did Leo feel at the end of the text?",
      "options": [
        "Very tired and angry",
        "Very happy to help",
        "Bored and sleepy",
        "Worried about the rain"
      ],
      "correctIndex": 1,
      "explanation": "Metnin son cümlesinde Leo’nun yardım ettiği için çok mutlu hissettiği belirtilmektedir.",
      "evidenceSentence": "Leo felt very happy to help."
    }
  ]
},

{
  "id": "reading-a1-05",
  "title": "Meet My International Roommate",
  "titleTr": "Uluslararası Oda Arkadaşımla Tanışın",
  "level": "A1",
  "category": "daily_life",
  "categoryTr": "Günlük Yaşam",
  "wordCount": 168,
  "readingTimeMinutes": 2,
  "summaryTr": "Kenan, üniversite yurdundaki Japon oda arkadaşı Kenji’yi, günlük rutinlerini ve ortak ilgi alanlarını anlatıyor.",
  "targetGrammar": "Present Simple third person -s, Nationalities, Routine adverbs",
  "paragraphs": [
    "My name is Kenan, and I study architecture at university. This semester, I share a bright student dormitory room with Kenji.",
    "Kenji is from Osaka, Japan. He is twenty years old and studies international business. He speaks Japanese, English, and a little Turkish.",
    "Every weekday, Kenji wakes up at six o’clock. He drinks green tea and practices speaking new English words for thirty minutes before breakfast.",
    "In the evenings, we often cook dinner together. Kenji teaches me how to make authentic rice balls, and I teach him how to prepare Turkish lentil soup. We are great friends."
  ],
  "vocabulary": [
    {
      "word": "dormitory",
      "phonetic": "/ˈdɔːr.mə.tɔːr.i/",
      "pos": "noun",
      "tr": "öğrenci yurdu",
      "contextDef": "A large bedroom or building providing sleeping quarters for university students",
      "example": "They live in the university dormitory."
    },
    {
      "word": "practices",
      "phonetic": "/ˈpræk.tɪ.sɪz/",
      "pos": "verb",
      "tr": "pratik yapar, çalışır",
      "contextDef": "Performs an activity repeatedly to improve a skill",
      "example": "He practices speaking English every single day."
    },
    {
      "word": "authentic",
      "phonetic": "/ɔːˈθen.tɪk/",
      "pos": "adj",
      "tr": "otantik, aslına uygun",
      "contextDef": "Real and traditional, not copied",
      "example": "She knows how to cook authentic Italian pasta."
    },
    {
      "word": "semester",
      "phonetic": "/səˈmes.tər/",
      "pos": "noun",
      "tr": "dönem, sömestr",
      "contextDef": "A half-year term in a university or school",
      "example": "This semester, they share a dorm room."
    },
    {
      "word": "together",
      "phonetic": "/təˈɡeð.ər/",
      "pos": "adv",
      "tr": "birlikte, beraber",
      "contextDef": "With each other or in one group",
      "example": "They cook delicious dinners together."
    }
  ],
  "questions": [
    {
      "id": "q-a1-05-1",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "Where is Kenji originally from?",
      "options": [
        "Tokyo, Japan",
        "Osaka, Japan",
        "Seoul, South Korea",
        "Kyoto, Japan"
      ],
      "correctIndex": 1,
      "explanation": "Metinde Kenji’nin Japonya’nın Osaka kentinden olduğu açıkça yazmaktadır.",
      "evidenceSentence": "Kenji is from Osaka, Japan."
    },
    {
      "id": "q-a1-05-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "What does Kenji do before having breakfast every weekday?",
      "options": [
        "He goes for a five-kilometer run",
        "He drinks green tea and practices speaking new English words for thirty minutes",
        "He plays video games on his laptop",
        "He sleeps until nine o’clock"
      ],
      "correctIndex": 1,
      "explanation": "Kenji sabah 6’da uyanır, yeşil çay içer ve 30 dakika İngilizce kelimeler çalışır.",
      "evidenceSentence": "He drinks green tea and practices speaking new English words for thirty minutes before breakfast."
    },
    {
      "id": "q-a1-05-3",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "What Turkish dish does Kenan teach Kenji to make?",
      "options": [
        "Baklava",
        "Lentil soup",
        "Stuffed peppers",
        "Kebab"
      ],
      "correctIndex": 1,
      "explanation": "Kenan, Kenji’ye Türk mercimek çorbası (lentil soup) yapmayı öğretmektedir.",
      "evidenceSentence": "...and I teach him how to prepare Turkish lentil soup."
    },
    {
      "id": "q-a1-05-4",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the main message of the reading passage?",
      "options": [
        "Living in a dormitory is always stressful and noisy",
        "Two students from different cultures share a room and build a warm friendship",
        "Architecture is harder to study than business administration",
        "Japanese cuisine is superior to Mediterranean cooking"
      ],
      "correctIndex": 1,
      "explanation": "Metin, farklı kültürlerden iki öğrencinin oda arkadaşı olup birlikte uyum ve dostluk kurmasını anlatır.",
      "evidenceSentence": "We are great friends."
    }
  ]
},

{
  "id": "reading-a2-03",
  "title": "Packing for a Weekend Mountain Hike",
  "titleTr": "Hafta Sonu Dağ Yürüyüşü İçin Hazırlık",
  "level": "A2",
  "category": "travel_culture",
  "categoryTr": "Seyahat ve Kültür",
  "wordCount": 210,
  "readingTimeMinutes": 3,
  "summaryTr": "Deniz ve dağcılık kulübü arkadaşları, Kaçkar dağlarındaki yürüyüş için gerekli ekipmanları, hava durumunu ve güvenlik kurallarını planlarlar.",
  "targetGrammar": "Modal verbs of necessity (must, have to, should), Future with going to",
  "paragraphs": [
    "Preparing for a high-altitude mountain hike requires careful planning. This Friday, Deniz and her university outdoor club are going to hike along the Kaçkar mountain trails.",
    "“You should never pack at the last minute,” Deniz told the new club members. “The mountain weather can change in just fifteen minutes from bright sunshine to cold rain.”",
    "Each hiker must carry a waterproof jacket, a lightweight thermal fleece, and durable hiking boots with ankle support. Deniz also checked everyone’s water supply; every hiker has to carry at least two liters of water and energy bars.",
    "Before setting off, the team downloaded offline maps onto their mobile devices. They know that safety and preparation make every outdoor adventure both memorable and secure."
  ],
  "vocabulary": [
    {
      "word": "altitude",
      "phonetic": "/ˈæl.tə.tuːd/",
      "pos": "noun",
      "tr": "rakım, yükseklik",
      "contextDef": "The height of an object or point in relation to sea level",
      "example": "Hikes at high altitude demand warm clothing."
    },
    {
      "word": "waterproof",
      "phonetic": "/ˈwɔː.tər.pruːf/",
      "pos": "adj",
      "tr": "su geçirmez",
      "contextDef": "Preventing water from entering or soaking through",
      "example": "You must bring a reliable waterproof jacket."
    },
    {
      "word": "durable",
      "phonetic": "/ˈdʊr.ə.bəl/",
      "pos": "adj",
      "tr": "dayanıklı, sağlam",
      "contextDef": "Able to withstand wear, pressure, or damage over time",
      "example": "Durable boots protect your feet on rocky terrain."
    },
    {
      "word": "secure",
      "phonetic": "/səˈkjʊr/",
      "pos": "adj",
      "tr": "güvenli, emniyetli",
      "contextDef": "Protected against danger, harm, or risk",
      "example": "Good gear keeps the expedition secure."
    },
    {
      "word": "requires",
      "phonetic": "/rɪˈkwaɪ.ərz/",
      "pos": "verb",
      "tr": "gerektirir, istemek",
      "contextDef": "Needs something for a particular purpose",
      "example": "Mountain climbing requires discipline and patience."
    }
  ],
  "questions": [
    {
      "id": "q-a2-03-1",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "Why does Deniz advise against packing at the last minute?",
      "options": [
        "Because the bus leaves very early in the morning",
        "Because mountain weather can change rapidly from sunshine to cold rain",
        "Because hiking gear is very heavy to carry",
        "Because shops on the mountain close early"
      ],
      "correctIndex": 1,
      "explanation": "Deniz, dağ havasının 15 dakika içinde güneşten dondurucu yağmura dönüşebileceğini vurgulamıştır.",
      "evidenceSentence": "The mountain weather can change in just fifteen minutes from bright sunshine to cold rain."
    },
    {
      "id": "q-a2-03-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "How much water must each hiker carry at minimum?",
      "options": [
        "Half a liter",
        "At least two liters",
        "Five liters",
        "Only one small cup"
      ],
      "correctIndex": 1,
      "explanation": "Metinde her yürüyüşçünün en az 2 litre su taşıması gerektiği belirtilmektedir.",
      "evidenceSentence": "...every hiker has to carry at least two liters of water and energy bars."
    },
    {
      "id": "q-a2-03-3",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "Why did the team download offline maps onto their mobile devices?",
      "options": [
        "To save battery life while listening to music",
        "Because internet connections are often unavailable on remote mountain trails",
        "To share photos on social media quickly",
        "Because printed paper maps are illegal in national parks"
      ],
      "correctIndex": 1,
      "explanation": "Dağlarda internet çekmeyebileceği için çevrimdışı (offline) haritalar güvenlik açısından önceden indirilir.",
      "evidenceSentence": "Before setting off, the team downloaded offline maps onto their mobile devices."
    },
    {
      "id": "q-a2-03-4",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the primary purpose of this passage?",
      "options": [
        "To teach tourists how to buy expensive mountain shoes",
        "To describe essential safety preparations and equipment needed for a mountain hike",
        "To explain the geological formation of the Kaçkar mountains",
        "To argue that university students should not participate in outdoor sports"
      ],
      "correctIndex": 1,
      "explanation": "Metnin amacı, dağ yürüyüşü öncesinde gereken hazırlıkları, güvenlik önlemlerini ve ekipmanları açıklamaktır.",
      "evidenceSentence": "They know that safety and preparation make every outdoor adventure both memorable and secure."
    }
  ]
},

{
  "id": "reading-a2-04",
  "title": "Organizing a Surprise Birthday Celebration",
  "titleTr": "Sürpriz Doğum Günü Kutlaması Organize Etmek",
  "level": "A2",
  "category": "conversations",
  "categoryTr": "Diyaloglar & İletişim",
  "wordCount": 195,
  "readingTimeMinutes": 3,
  "summaryTr": "Aylin ve çalışma arkadaşları, ekip liderleri Selim Bey için gizli bir kutlama planlarken görev dağılımı yaparlar.",
  "targetGrammar": "Past continuous vs past simple, Future intentions, Polite requests",
  "paragraphs": [
    "Yesterday, while Selim was attending a client meeting on the second floor, his coworkers were whispering quietly in the break room.",
    "“Selim’s birthday is this Thursday,” Aylin reminded everyone. “He always organizes thoughtful celebrations for us, so this time we should surprise him.”",
    "The team quickly divided the tasks. Burak promised to pick up a dark chocolate berry cake from the patisserie near the metro station. Zeynep volunteered to design a personalized greeting card signed by all team members.",
    "“Remember, nobody can mention this on our group chat,” Aylin warned with a smile. “We want him to walk into Conference Room B on Thursday at noon thinking it is an ordinary project review.”"
  ],
  "vocabulary": [
    {
      "word": "thoughtful",
      "phonetic": "/ˈθɔːt.fəl/",
      "pos": "adj",
      "tr": "düşünceli, ince fikirli",
      "contextDef": "Showing consideration and care for the needs of other people",
      "example": "He is known for his thoughtful gifts."
    },
    {
      "word": "volunteered",
      "phonetic": "/ˌvɑː.lənˈtɪrd/",
      "pos": "verb",
      "tr": "gönüllü oldu",
      "contextDef": "Freely offered to do something without being forced",
      "example": "She volunteered to coordinate the event."
    },
    {
      "word": "ordinary",
      "phonetic": "/ˈɔːr.dən.er.i/",
      "pos": "adj",
      "tr": "sıradan, olağan",
      "contextDef": "With no special or distinctive features; normal",
      "example": "It looked like an ordinary Tuesday morning."
    },
    {
      "word": "celebration",
      "phonetic": "/ˌsel.əˈbreɪ.ʃən/",
      "pos": "noun",
      "tr": "kutlama",
      "contextDef": "A social gathering or enjoyable activity held to celebrate an occasion",
      "example": "The team prepared a joyful celebration."
    },
    {
      "word": "reminded",
      "phonetic": "/rɪˈmaɪn.dɪd/",
      "pos": "verb",
      "tr": "hatırlattı",
      "contextDef": "Caused someone to remember a fact or event",
      "example": "She reminded him about the scheduled meeting."
    }
  ],
  "questions": [
    {
      "id": "q-a2-04-1",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "What was Selim doing while his coworkers were planning the surprise?",
      "options": [
        "He was having lunch at a restaurant",
        "He was attending a client meeting on the second floor",
        "He was on holiday in Antalya",
        "He was writing an email at his desk"
      ],
      "correctIndex": 1,
      "explanation": "Selim o esnada ikinci katta bir müşteri toplantısındaydı.",
      "evidenceSentence": "Yesterday, while Selim was attending a client meeting on the second floor..."
    },
    {
      "id": "q-a2-04-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "Who volunteered to pick up the chocolate cake?",
      "options": [
        "Aylin",
        "Burak",
        "Zeynep",
        "The receptionist"
      ],
      "correctIndex": 1,
      "explanation": "Burak metro yakınındaki pastaneden çikolatalı pastayı alacağına söz vermiştir.",
      "evidenceSentence": "Burak promised to pick up a dark chocolate berry cake from the patisserie near the metro station."
    },
    {
      "id": "q-a2-04-3",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "Why did Aylin warn everyone not to post on the group chat?",
      "options": [
        "Because company rules prohibit group chats",
        "Because Selim is in the group and would see the secret plan",
        "Because the internet in the office was disconnected",
        "Because they wanted to send formal letters instead"
      ],
      "correctIndex": 1,
      "explanation": "Sürprizin bozulmaması için Selim’in de bulunduğu grup sohbetinde bu konunun yazılmaması istenmiştir.",
      "evidenceSentence": "“Remember, nobody can mention this on our group chat,” Aylin warned with a smile."
    },
    {
      "id": "q-a2-04-4",
      "type": "vocabulary",
      "typeTr": "Bağlamsal Kelime",
      "question": "What does the word “ordinary” mean in the last sentence?",
      "options": [
        "Unusual and weird",
        "Normal and routine",
        "Emergency",
        "Extremely expensive"
      ],
      "correctIndex": 1,
      "explanation": "“Ordinary” sıradan, olağan, normal anlamına gelmektedir.",
      "evidenceSentence": "...thinking it is an ordinary project review."
    }
  ]
},

{
  "id": "reading-a2-05",
  "title": "Teenager Invents Low-Cost Solar Lamp",
  "titleTr": "Genç Mucit Düşük Maliyetli Güneş Lambası Geliştirdi",
  "level": "A2",
  "category": "news_articles",
  "categoryTr": "Haberler ve Makaleler",
  "wordCount": 205,
  "readingTimeMinutes": 3,
  "summaryTr": "16 yaşındaki lise öğrencisi Tariq, elektrik kesintisi yaşayan kırsal köyler için geri dönüştürülmüş plastik şişelerden güneş lambası üretti.",
  "targetGrammar": "Past Simple regular/irregular verbs, Passive voice introduction (was created, was built)",
  "paragraphs": [
    "A sixteen-year-old student named Tariq has received an international environmental innovation award for designing an affordable solar light bulb.",
    "Tariq grew up in a rural village where electrical power cuts frequently interrupted students during their evening study hours. Many families used expensive kerosene lanterns, which produced unpleasant fumes and smoke.",
    "Using recycled plastic soda bottles, a miniature solar panel, and rechargeable lithium batteries, Tariq assembled fifty portable lamps. The lamps charge under direct sunlight during the daytime and provide clean, bright LED light for up to seven hours at night.",
    "“Access to light should not be a luxury,” Tariq said at the award ceremony in Geneva. “When children have light, they can read, learn, and build a brighter future for their communities.”"
  ],
  "vocabulary": [
    {
      "word": "affordable",
      "phonetic": "/əˈfɔːr.də.bəl/",
      "pos": "adj",
      "tr": "uygun fiyatlı, hesaplı",
      "contextDef": "Reasonably priced; not too expensive to buy",
      "example": "They created an affordable solution for rural areas."
    },
    {
      "word": "fumes",
      "phonetic": "/fjuːmz/",
      "pos": "noun",
      "tr": "duman, zehirli gaz",
      "contextDef": "Gas, smoke, or vapor that smells strongly or is dangerous to inhale",
      "example": "Kerosene lamps produce harmful fumes."
    },
    {
      "word": "interrupted",
      "phonetic": "/ˌɪn.təˈrʌp.tɪd/",
      "pos": "verb",
      "tr": "böldü, kesintiye uğrattı",
      "contextDef": "Stopped the continuous progress of an activity",
      "example": "The blackouts interrupted their homework."
    },
    {
      "word": "recycled",
      "phonetic": "/ˌriːˈsaɪ.kəld/",
      "pos": "adj",
      "tr": "geri dönüştürülmüş",
      "contextDef": "Converted into reusable material",
      "example": "The lamp body was made from recycled plastic."
    },
    {
      "word": "luxury",
      "phonetic": "/ˈlʌk.ʃər.i/",
      "pos": "noun",
      "tr": "lüks, gösteriş",
      "contextDef": "A state of great comfort or elegance, usually expensive and not strictly necessary",
      "example": "Basic education should never be a luxury."
    }
  ],
  "questions": [
    {
      "id": "q-a2-05-1",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the main subject of this news article?",
      "options": [
        "The dangerous effects of plastic bottles on ocean wildlife",
        "A teenage inventor building low-cost solar lamps to help students in rural villages",
        "How Geneva became the most expensive city in Europe",
        "The history of electrical grids in modern cities"
      ],
      "correctIndex": 1,
      "explanation": "Haberin odağı, 16 yaşındaki Tariq’in kırsal bölgelerdeki öğrencilerin çalışabilmesi için ucuz güneş lambaları tasarlaması ve ödül almasıdır.",
      "evidenceSentence": "A sixteen-year-old student named Tariq has received an international environmental innovation award for designing an affordable solar light bulb."
    },
    {
      "id": "q-a2-05-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "Why were kerosene lanterns problematic for families?",
      "options": [
        "They attracted dangerous animals",
        "They produced unpleasant fumes and smoke and were costly",
        "They broke easily when touched by children",
        "They could only be used outdoors"
      ],
      "correctIndex": 1,
      "explanation": "Gaz yağı fenerleri pahalıydı ve sağlığa zararlı duman ve koku yayıyordu.",
      "evidenceSentence": "Many families used expensive kerosene lanterns, which produced unpleasant fumes and smoke."
    },
    {
      "id": "q-a2-05-3",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "For how long can the solar lamp provide light at night after charging?",
      "options": [
        "Only thirty minutes",
        "Two hours",
        "Up to seven hours",
        "Exactly twenty-four hours"
      ],
      "correctIndex": 2,
      "explanation": "Metinde lambaların geceleri 7 saate kadar ışık sağladığı belirtilmektedir.",
      "evidenceSentence": "...and provide clean, bright LED light for up to seven hours at night."
    },
    {
      "id": "q-a2-05-4",
      "type": "author_purpose",
      "typeTr": "Yazarın Amacı",
      "question": "What inspiring message does Tariq express in his quote?",
      "options": [
        "Scientists should make millions of dollars from their patents",
        "Access to basic light should be available to all children so they can study and build better lives",
        "Solar energy is too difficult for ordinary people to understand",
        "Students should not study late at night"
      ],
      "correctIndex": 1,
      "explanation": "Tariq, ışığa erişimin bir lüks olmaması gerektiğini ve çocukların okuyabilmesinin toplulukların geleceğini aydınlatacağını vurgulamıştır.",
      "evidenceSentence": "“When children have light, they can read, learn, and build a brighter future for their communities.”"
    }
  ]
},

{
  "id": "reading-b1-03",
  "title": "Navigating Job Interviews in an International Firm",
  "titleTr": "Uluslararası Bir Firmada İş Mülakatlarını Yönetmek",
  "level": "B1",
  "category": "work_career",
  "categoryTr": "İş ve Kariyer",
  "wordCount": 265,
  "readingTimeMinutes": 3,
  "summaryTr": "Çok uluslu şirketlerdeki iş mülakatlarında STAR tekniği, şirket kültürü araştırması ve etkili iletişim stratejileri.",
  "targetGrammar": "Present Perfect for experience, Conditionals (Type 1 and 2), Gerunds and infinitives",
  "paragraphs": [
    "Applying for positions in multinational corporations has become increasingly competitive. Candidates often possess impressive technical credentials, yet recruitment panels frequently evaluate behavioral adaptability and cross-cultural communication above purely theoretical knowledge.",
    "Career advisors strongly recommend utilizing the STAR method (Situation, Task, Action, Result) when responding to situational inquiries. Rather than simply asserting that you are a collaborative problem-solver, this structural approach compels you to delineate a concrete past challenge, outline your decisive contributions, and quantify the observable outcomes.",
    "Furthermore, prospective employees should thoroughly investigate an enterprise’s recent milestones, philanthropic initiatives, and core values before stepping into the interview chamber. Posing well-calibrated questions at the conclusion of the dialogue demonstrates authentic intellectual curiosity.",
    "If you prepare authentic narratives and listen attentively without interrupting the assessors, you will distinguish yourself from competitors who rely merely on rehearsed platitudes."
  ],
  "vocabulary": [
    {
      "word": "credentials",
      "phonetic": "/krəˈden.ʃəlz/",
      "pos": "noun",
      "tr": "nitelikler, yetkinlik belgeleri",
      "contextDef": "Qualifications, achievements, or documents demonstrating suitability for a role",
      "example": "Her academic credentials impressed the hiring committee."
    },
    {
      "word": "delineate",
      "phonetic": "/dɪˈlɪn.i.eɪt/",
      "pos": "verb",
      "tr": "ayrıntılarıyla açıklamak, betimlemek",
      "contextDef": "To describe or outline something precisely",
      "example": "Candidates must delineate their exact role in the project."
    },
    {
      "word": "quantify",
      "phonetic": "/ˈkwɑːn.t̬ə.faɪ/",
      "pos": "verb",
      "tr": "ölçmek, sayısallaştırmak",
      "contextDef": "To express or measure the quantity of something in numbers",
      "example": "She was able to quantify the financial savings generated."
    },
    {
      "word": "platitudes",
      "phonetic": "/ˈplæt̬.ə.tuːdz/",
      "pos": "noun",
      "tr": "basmakalıp sözler, klişeler",
      "contextDef": "Remarks or statements that have been used too often to be interesting or thoughtful",
      "example": "Avoid relying on hollow interview platitudes."
    },
    {
      "word": "adaptability",
      "phonetic": "/əˌdæp.təˈbɪl.ə.t̬i/",
      "pos": "noun",
      "tr": "uyum yeteneği, esneklik",
      "contextDef": "The quality of being able to adjust to new conditions",
      "example": "Modern employers value emotional resilience and adaptability."
    }
  ],
  "questions": [
    {
      "id": "q-b1-03-1",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the central focus of this career guidance article?",
      "options": [
        "How to demand higher starting salaries in multinational firms",
        "Strategic frameworks like the STAR method and cultural research to excel in modern international interviews",
        "Why remote work is replacing traditional corporate hiring procedures",
        "The historical evolution of business administration degrees"
      ],
      "correctIndex": 1,
      "explanation": "Metin, uluslararası mülakatlarda STAR tekniği, somut örnekler verme ve şirket araştırması yaparak öne çıkma stratejilerini anlatır.",
      "evidenceSentence": "Career advisors strongly recommend utilizing the STAR method when responding to situational inquiries."
    },
    {
      "id": "q-b1-03-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "What does the acronym STAR stand for according to the text?",
      "options": [
        "Strategy, Talent, Assessment, Reward",
        "Situation, Task, Action, Result",
        "System, Team, Achievement, Review",
        "Skill, Training, Accuracy, Reputation"
      ],
      "correctIndex": 1,
      "explanation": "STAR yönteminin açılımı metinde parantez içinde (Situation, Task, Action, Result) olarak verilmiştir.",
      "evidenceSentence": "...utilizing the STAR method (Situation, Task, Action, Result) when responding to situational inquiries."
    },
    {
      "id": "q-b1-03-3",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "Why is it beneficial for a candidate to pose thoughtful questions at the end of the interview?",
      "options": [
        "It delays the interview so assessors forget earlier mistakes",
        "It displays genuine intellectual curiosity and sincere engagement with the firm",
        "It forces the company to immediately make an employment offer",
        "It proves that the candidate has memorized the entire company handbook"
      ],
      "correctIndex": 1,
      "explanation": "Mülakat sonunda iyi düşünülmüş sorular sormak, şirkete ve role duyulan samimi entelektüel merakı gösterir.",
      "evidenceSentence": "Posing well-calibrated questions at the conclusion of the dialogue demonstrates authentic intellectual curiosity."
    },
    {
      "id": "q-b1-03-4",
      "type": "vocabulary",
      "typeTr": "Bağlamsal Kelime",
      "question": "What does the phrase “quantify the observable outcomes” imply in paragraph 2?",
      "options": [
        "To guess random figures without evidence",
        "To describe results using concrete, measurable data and numbers",
        "To blame teammates for project failures",
        "To write long artistic essays about emotions"
      ],
      "correctIndex": 1,
      "explanation": "“Quantify” sayısal ve ölçülebilir değerlerle sonuçları ortaya koymak anlamına gelir.",
      "evidenceSentence": "...and quantify the observable outcomes."
    }
  ]
},

{
  "id": "reading-b1-04",
  "title": "Amelia Earhart: The Audacity of Flight",
  "titleTr": "Amelia Earhart: Gökyüzündeki Cesaret",
  "level": "B1",
  "category": "history_bio",
  "categoryTr": "Tarih ve Biyografi",
  "wordCount": 280,
  "readingTimeMinutes": 3,
  "summaryTr": "Havacılık tarihinin öncüsü Amelia Earhart’ın Atlantik’i tek başına geçen ilk kadın pilot olma mücadelesi ve mirası.",
  "targetGrammar": "Past Perfect (had accomplished), Concession clauses (although, despite), Passive structures",
  "paragraphs": [
    "In an era when aviation was predominantly viewed as an exclusive domain for daring men, Amelia Earhart defied prevailing social conventions. Born in Kansas in 1897, she developed an unquenchable fascination with motorized flight after attending an aerial exhibition in Long Beach.",
    "Her most celebrated milestone occurred in May 1932. Battling torrential storms, mechanical vulnerabilities, and bitter sub-zero temperatures, Earhart piloted her single-engine Lockheed Vega across the vast Atlantic Ocean in just under fifteen hours. With that historic landing in Northern Ireland, she became the first woman ever to accomplish a solo transatlantic voyage.",
    "Beyond her remarkable aeronautical records, Earhart was an outspoken champion for gender equality and higher education. She served as an advisor at Purdue University, counseling young female undergraduates to embrace engineering, mathematics, and technological pursuits.",
    "Although her mysterious disappearance over the Pacific in 1937 remains one of history’s enduring enigmas, her fearless resilience continues to motivate generations of explorers."
  ],
  "vocabulary": [
    {
      "word": "defied",
      "phonetic": "/dɪˈfaɪd/",
      "pos": "verb",
      "tr": "meydan okudu, karşı geldi",
      "contextDef": "Openly resisted or refused to obey societal rules or authorities",
      "example": "She defied societal limitations to become a pilot."
    },
    {
      "word": "torrential",
      "phonetic": "/təˈren.ʃəl/",
      "pos": "adj",
      "tr": "şiddetli, bardaktan boşanırcasına",
      "contextDef": "Falling rapidly and in abundant quantities, particularly rain",
      "example": "The small airplane endured torrential downpours."
    },
    {
      "word": "aeronautical",
      "phonetic": "/ˌer.əˈnɑː.t̬ə.kəl/",
      "pos": "adj",
      "tr": "havacılıkla ilgili",
      "contextDef": "Relating to the science or practice of aircraft travel",
      "example": "Earhart set multiple aeronautical records."
    },
    {
      "word": "enigma",
      "phonetic": "/əˈnɪɡ.mə/",
      "pos": "noun",
      "tr": "muamma, gizem",
      "contextDef": "A person or thing that is mysterious or difficult to understand",
      "example": "Her disappearance remains an unresolved enigma."
    },
    {
      "word": "resilience",
      "phonetic": "/rɪˈzɪl.jəns/",
      "pos": "noun",
      "tr": "direnç, pes etmeme gücü",
      "contextDef": "The capacity to recover swiftly from difficulties; toughness",
      "example": "Her enduring resilience inspired aspiring aviators."
    }
  ],
  "questions": [
    {
      "id": "q-b1-04-1",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "What historical feat did Earhart accomplish in May 1932?",
      "options": [
        "She founded the first international commercial airline",
        "She became the first woman to complete a solo transatlantic flight",
        "She designed the first jet propulsion engine in Germany",
        "She flew non-stop around the entire equator without refueling"
      ],
      "correctIndex": 1,
      "explanation": "1932 Mayıs ayında Atlantik Okyanusu’nu tek başına uçarak geçen ilk kadın pilot olmuştur.",
      "evidenceSentence": "...she became the first woman ever to accomplish a solo transatlantic voyage."
    },
    {
      "id": "q-b1-04-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "What causes did Earhart advocate for outside her piloting career?",
      "options": [
        "Military expansion and submarine manufacturing",
        "Gender equality, higher education, and women entering technical fields",
        "Traditional domestic roles for young women in Kansas",
        "Banning international tourism flights"
      ],
      "correctIndex": 1,
      "explanation": "Earhart cinsiyet eşitliği ve kadınların mühendislik ve matematik gibi teknik alanlara girmesini hararetle savunmuştur.",
      "evidenceSentence": "...counseling young female undergraduates to embrace engineering, mathematics, and technological pursuits."
    },
    {
      "id": "q-b1-04-3",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "Why does the author use the phrase “enduring enigmas” regarding her 1937 flight?",
      "options": [
        "Because the exact location and circumstances of her disappearance were never solved",
        "Because her aircraft was immediately put into an air museum",
        "Because nobody cared about what happened to her plane",
        "Because she decided to retire quietly in Hawaii under another name"
      ],
      "correctIndex": 0,
      "explanation": "Enigma gizem anlamına gelir; 1937’deki kayboluşunun detayları günümüze kadar tam olarak çözülememiştir.",
      "evidenceSentence": "Although her mysterious disappearance over the Pacific in 1937 remains one of history’s enduring enigmas..."
    },
    {
      "id": "q-b1-04-4",
      "type": "author_purpose",
      "typeTr": "Yazarın Amacı",
      "question": "What overall tone does the author maintain toward Amelia Earhart?",
      "options": [
        "Critical and dismissive of her reckless choices",
        "Admiration for her courage, pioneering spirit, and social impact",
        "Neutral and purely statistical with no qualitative judgment",
        "Skeptical about the authenticity of her flight records"
      ],
      "correctIndex": 1,
      "explanation": "Yazar metin boyunca Earhart’ın cesaretini, öncülüğünü ve toplumsal etkisini büyük bir hayranlıkla aktarmaktadır.",
      "evidenceSentence": "...her fearless resilience continues to motivate generations of explorers."
    }
  ]
},

{
  "id": "reading-b1-05",
  "title": "Why Daily Walking Reshapes the Brain",
  "titleTr": "Günlük Yürüyüş Beyni Neden Yeniden Şekillendirir?",
  "level": "B1",
  "category": "opinions_arguments",
  "categoryTr": "Görüşler ve Argümanlar",
  "wordCount": 250,
  "readingTimeMinutes": 3,
  "summaryTr": "Nörobilimsel araştırmalar, her gün yapılan tempolu yürüyüşlerin hafızayı, yaratıcılığı ve zihinsel berraklığı nasıl artırdığını gösteriyor.",
  "targetGrammar": "Cause and effect connectors (consequently, due to, as a result), Relative clauses",
  "paragraphs": [
    "In our hyper-connected digital landscape, human beings spend unprecedented hours anchored to ergonomic office chairs and glowing monitors. While high-intensity interval training garners widespread media attention, cognitive neuroscientists increasingly emphasize an ancient, accessible practice: brisk daily walking.",
    "Recent brain imaging investigations reveal that thirty minutes of purposeful aerobic walking stimulates the release of Brain-Derived Neurotrophic Factor (BDNF). This biological protein acts like fertilizer for cerebral neurons, fostering synaptic plasticity and fortifying the hippocampus—the epicenter of memory consolidation and spatial orientation.",
    "Moreover, divergent thinking and innovative problem-solving peak not during strenuous mental strain, but during rhythmic locomotion. Renowned philosophers from Friedrich Nietzsche to Henry David Thoreau famously observed that their most luminous insights crystallized while wandering along forest paths.",
    "Consequently, carving out time for an afternoon stroll is not an indulgence or procrastination; it is an evidence-based cognitive strategy to restore focus, lower cortisol levels, and cultivate long-term mental resilience."
  ],
  "vocabulary": [
    {
      "word": "unprecedented",
      "phonetic": "/ʌnˈpres.ə.den.t̬ɪd/",
      "pos": "adj",
      "tr": "eşi benzeri görülmemiş",
      "contextDef": "Never having happened or existed before in history",
      "example": "Humans face unprecedented hours of screen exposure."
    },
    {
      "word": "fortifying",
      "phonetic": "/ˈfɔːr.t̬ə.faɪ.ɪŋ/",
      "pos": "verb",
      "tr": "güçlendiren, tahkim eden",
      "contextDef": "Making a structure or mental capacity stronger and more resilient",
      "example": "Regular aerobic activity is fortifying the memory centers."
    },
    {
      "word": "locomotion",
      "phonetic": "/ˌloʊ.kəˈmoʊ.ʃən/",
      "pos": "noun",
      "tr": "hareket etme, yer değiştirme",
      "contextDef": "Movement or the ability to move from one place to another",
      "example": "Rhythmic locomotion stimulates creative flow."
    },
    {
      "word": "crystallized",
      "phonetic": "/ˈkrɪs.təl.aɪzd/",
      "pos": "verb",
      "tr": "netleşti, somutlaştı",
      "contextDef": "Became definite, clear, and distinct in form",
      "example": "Her key concepts crystallized while walking outside."
    },
    {
      "word": "indulgence",
      "phonetic": "/ɪnˈdʌl.dʒəns/",
      "pos": "noun",
      "tr": "lüks, kendini şımartma",
      "contextDef": "An inclination to yield to wishes or engage in a luxury",
      "example": "Taking a brisk break is a necessity, not an indulgence."
    }
  ],
  "questions": [
    {
      "id": "q-b1-05-1",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "According to neuroscientists, what beneficial protein is released during aerobic walking?",
      "options": [
        "Hemoglobin",
        "Brain-Derived Neurotrophic Factor (BDNF)",
        "High-density lipoprotein (HDL)",
        "Synthetic adrenaline"
      ],
      "correctIndex": 1,
      "explanation": "Metinde yürüyüşün BDNF (Brain-Derived Neurotrophic Factor) proteininin salınımını tetiklediği belirtilmiştir.",
      "evidenceSentence": "Recent brain imaging investigations reveal that thirty minutes of purposeful aerobic walking stimulates the release of Brain-Derived Neurotrophic Factor (BDNF)."
    },
    {
      "id": "q-b1-05-2",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "Why did philosophers like Nietzsche and Thoreau wander on foot according to paragraph 3?",
      "options": [
        "Because they could not afford carriage transportation",
        "Because rhythmic walking helped their most profound thoughts and ideas crystallize",
        "Because walking was required by university authorities",
        "To test their outdoor survival equipment"
      ],
      "correctIndex": 1,
      "explanation": "Filozofların en parlak fikirleri ritmik yürüyüş esnasında netleşmiş ve somutlaşmıştır.",
      "evidenceSentence": "Renowned philosophers from Friedrich Nietzsche to Henry David Thoreau famously observed that their most luminous insights crystallized while wandering along forest paths."
    },
    {
      "id": "q-b1-05-3",
      "type": "vocabulary",
      "typeTr": "Bağlamsal Kelime",
      "question": "What does the metaphor “acts like fertilizer for cerebral neurons” mean in paragraph 2?",
      "options": [
        "It poisons brain cells and slows thinking",
        "It nourishes and stimulates the growth and strength of brain cells",
        "It causes physical fatigue in the body",
        "It cleanses the stomach and liver"
      ],
      "correctIndex": 1,
      "explanation": "Gübre (fertilizer) benzetmesi, nöronların beslenip gelişmesini ve güçlenmesini sağladığını vurgular.",
      "evidenceSentence": "This biological protein acts like fertilizer for cerebral neurons, fostering synaptic plasticity..."
    },
    {
      "id": "q-b1-05-4",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the main argument made in the conclusion of the text?",
      "options": [
        "Walking is only beneficial if one runs at maximum speed",
        "Taking time for daily walking is an evidence-based cognitive investment rather than a waste of time",
        "Office workers should never stand up during business hours",
        "Brain exercises on computer screens are superior to physical movement"
      ],
      "correctIndex": 1,
      "explanation": "Yazar yürüyüş yapmanın bir boş zaman kaybı değil, odaklanmayı artıran ve beyni koruyan bilimsel bir strateji olduğunu savunur.",
      "evidenceSentence": "Consequently, carving out time for an afternoon stroll is not an indulgence or procrastination; it is an evidence-based cognitive strategy..."
    }
  ]
},

{
  "id": "reading-b2-03",
  "title": "The Microgrid Revolution and Decentralized Energy",
  "titleTr": "Mikroşebeke Devrimi ve Dağıtık Enerji",
  "level": "B2",
  "category": "science_tech",
  "categoryTr": "Bilim ve Teknoloji",
  "wordCount": 320,
  "readingTimeMinutes": 4,
  "summaryTr": "Yerel yenilenebilir enerji kaynakları, akıllı batarya depolama ve merkezi şebekeden bağımsız çalışan mikroşebekelerin geleceği.",
  "targetGrammar": "Mixed conditionals, Complex noun phrases, Discourse markers of contrast (nevertheless, conversely)",
  "paragraphs": [
    "For over a century, electrical grids operated under a monolithic paradigm: colossal coal, gas, or nuclear power plants generated megawatts of electricity and transmitted it over hundreds of kilometers of high-voltage transmission corridors to passive end consumers. However, escalating climate instability, recurrent wildfires, and severe storms have exposed the acute vulnerability of centralized distribution architectures.",
    "Enter the microgrid: a localized, intelligent energy cluster consisting of distributed generation assets—such as rooftop solar photovoltaics, small wind turbines, and advanced lithium-iron-phosphate battery storage—capable of operating both synchronously with the primary utility grid and autonomously in “islanded” mode during systemic blackouts.",
    "During catastrophic meteorological events, when traditional overhead power lines collapse under fallen trees or excessive grid overloads, a hospital or residential community fortified with a microgrid can decouple within milliseconds. Critical life-support machinery, refrigerated medical dispensaries, and emergency communication nodes remain fully energized without interruption.",
    "Nevertheless, widespread deployment confronts regulatory inertia and antiquated utility tariff structures designed primarily to protect legacy monopolies. Transitioning to democratized, bi-directional energy networks will necessitate not merely technological refinement, but profound legislative overhauls."
  ],
  "vocabulary": [
    {
      "word": "monolithic",
      "phonetic": "/ˌmɑː.nəˈlɪθ.ɪk/",
      "pos": "adj",
      "tr": "tek parça, yekpare, merkezi",
      "contextDef": "Constituting a massive, uniform, and indivisible structure or system",
      "example": "The traditional utility followed a monolithic model."
    },
    {
      "word": "islanded",
      "phonetic": "/ˈaɪ.lən.dɪd/",
      "pos": "adj",
      "tr": "ada modunda, bağımsız çalışan",
      "contextDef": "Operating independently from the main grid during outages",
      "example": "The microgrid operated seamlessly in islanded mode."
    },
    {
      "word": "decouple",
      "phonetic": "/diːˈkʌp.əl/",
      "pos": "verb",
      "tr": "bağlantıyı kesmek, ayrılmak",
      "contextDef": "To separate, disengage, or disconnect from a larger network",
      "example": "The system can decouple from the damaged regional grid."
    },
    {
      "word": "inertia",
      "phonetic": "/ɪˈnɝː.ʃə/",
      "pos": "noun",
      "tr": "atalet, hareketsizlik, direnç",
      "contextDef": "A tendency to remain unchanged or to resist progress",
      "example": "Bureaucratic inertia delayed the solar microgrid installation."
    },
    {
      "word": "antiquated",
      "phonetic": "/ˈæn.t̬ə.kweɪ.t̬ɪd/",
      "pos": "adj",
      "tr": "çağ dışı, eskimiş",
      "contextDef": "Old-fashioned, out of date, and no longer suitable for modern demands",
      "example": "Antiquated regulations impede clean energy integration."
    }
  ],
  "questions": [
    {
      "id": "q-b2-03-1",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the primary thesis articulated in this analysis?",
      "options": [
        "Centralized coal plants are the only reliable way to guarantee hospital power",
        "Decentralized microgrids provide vital resilience against climate shocks, yet face institutional and regulatory hurdles",
        "Solar panels do not function during severe winter storms",
        "Battery manufacturing has become ecologically unsustainable worldwide"
      ],
      "correctIndex": 1,
      "explanation": "Metin, mikroşebekelerin iklim krizlerine ve kesintilere karşı kritik bir esneklik sağladığını ancak eski yasal mevzuat ve tekelci yapılarla karşılaştığını açıklar.",
      "evidenceSentence": "Transitioning to democratized, bi-directional energy networks will necessitate not merely technological refinement, but profound legislative overhauls."
    },
    {
      "id": "q-b2-03-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "What happens when a microgrid enters “islanded” mode?",
      "options": [
        "It completely shuts down to prevent battery overheating",
        "It disconnects from the collapsed main utility grid and operates autonomously using local generation and storage",
        "It exports excess electricity to neighboring continents",
        "It converts all electrical energy into thermal heat"
      ],
      "correctIndex": 1,
      "explanation": "Ada (islanded) modunda mikroşebeke ana şebekeden ayrılarak kendi batarya ve güneş kaynaklarıyla bağımsız çalışmaya devam eder.",
      "evidenceSentence": "...capable of operating both synchronously with the primary utility grid and autonomously in “islanded” mode during systemic blackouts."
    },
    {
      "id": "q-b2-03-3",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "Why are hospitals singled out in paragraph 3 as prime beneficiaries of microgrids?",
      "options": [
        "Hospitals consume less energy than ordinary suburban households",
        "Continuous electrical power is literally a matter of life and death for critical medical equipment",
        "Hospitals are legally required to own wind turbines",
        "Doctors prefer solar energy for cosmetic surgery clinics"
      ],
      "correctIndex": 1,
      "explanation": "Hastanelerdeki yaşam destek üniteleri ve aşı soğutucuları kesintisiz güce hayati derecede muhtaçtır.",
      "evidenceSentence": "Critical life-support machinery, refrigerated medical dispensaries, and emergency communication nodes remain fully energized without interruption."
    },
    {
      "id": "q-b2-03-4",
      "type": "vocabulary",
      "typeTr": "Bağlamsal Kelime",
      "question": "What does “regulatory inertia” signify in the closing paragraph?",
      "options": [
        "Rapid technological advancement in solar chemistry",
        "Sluggish bureaucratic resistance to updating legal frameworks and utility rules",
        "A decrease in electrical transmission voltage",
        "The physics of rotating turbines"
      ],
      "correctIndex": 1,
      "explanation": "“Regulatory inertia”, yasal ve bürokratik düzenlemelerin değişime ve yeniliğe karşı gösterdiği yavaşlık ve dirençtir.",
      "evidenceSentence": "Nevertheless, widespread deployment confronts regulatory inertia and antiquated utility tariff structures..."
    }
  ]
},

{
  "id": "reading-b2-04",
  "title": "The Silk Road: Commerce as the Catalyst of Civilizations",
  "titleTr": "İpek Yolu: Medeniyetlerin Katalizörü Olarak Ticaret",
  "level": "B2",
  "category": "history_bio",
  "categoryTr": "Tarih ve Biyografi",
  "wordCount": 310,
  "readingTimeMinutes": 4,
  "summaryTr": "Antik Avrasya ticaret yollarının sadece ipek ve baharat değil; felsefe, astronomi, tıp ve kağıt üretimini nasıl kıtalararası yaydığı.",
  "targetGrammar": "Inversion structures (Not only did it facilitate...), Complex participial clauses, Passive reporting verbs",
  "paragraphs": [
    "Popular imagination frequently conceptualizes the historical Silk Road as a singular, well-paved highway connecting imperial Chang’an directly to the Mediterranean ports. In reality, it comprised a shifting, labyrinthine network of mountain passes, caravan oases, and maritime conduits spanning thousands of treacherous leagues.",
    "Not only did this sprawling commercial artery facilitate the exchange of high-value commodities—such as Chinese mulberry silk, Indian black pepper, Roman glassware, and Persian lapis lazuli—it functioned as an unprecedented transmission mechanism for intellectual paradigms.",
    "Astronomical tables formulated in Samarkand influenced European navigators; paper-making methodologies, transmitted through Central Asian craftsmen following the Battle of Talas in 751 CE, fundamentally revolutionized administration and literary literacy in the Islamic world and subsequent Renaissance Europe.",
    "The merchants who braved the Taklamakan dunes were rarely globetrotting individuals undertaking the entire transcontinental trek; rather, commodities and philosophical concepts moved organically along regional relay hubs. In this sense, the Silk Road demonstrated that human interconnectivity has always been multi-polar, adaptive, and driven by mutual economic interdependence."
  ],
  "vocabulary": [
    {
      "word": "labyrinthine",
      "phonetic": "/ˌlæb.əˈrɪn.θiːn/",
      "pos": "adj",
      "tr": "labirent gibi, karmaşık",
      "contextDef": "Irregular, twisting, and extremely complicated like a maze",
      "example": "The caravan traveled through labyrinthine mountain pathways."
    },
    {
      "word": "conduits",
      "phonetic": "/ˈkɑːn.duː.ɪts/",
      "pos": "noun",
      "tr": "kanallar, iletim yolları",
      "contextDef": "Channels or passages for conveying water or transmitting information and goods",
      "example": "Maritime routes served as vital commercial conduits."
    },
    {
      "word": "commodities",
      "phonetic": "/kəˈmɑː.də.t̬iz/",
      "pos": "noun",
      "tr": "ticari mallar, emtia",
      "contextDef": "Raw materials or agricultural products that can be bought and sold",
      "example": "Traders bartered silk and spices as primary commodities."
    },
    {
      "word": "interdependence",
      "phonetic": "/ˌɪn.t̬ɚ.dɪˈpen.dəns/",
      "pos": "noun",
      "tr": "karşılıklı bağımlılık",
      "contextDef": "The mutual reliance between two or more groups or nations",
      "example": "Global stability rests on economic interdependence."
    },
    {
      "word": "paradigms",
      "phonetic": "/ˈper.ə.daɪmz/",
      "pos": "noun",
      "tr": "paradigmalar, düşünce kalıpları",
      "contextDef": "Typical examples, models, or overarching frameworks of thought",
      "example": "Trade routes enabled the dissemination of scientific paradigms."
    }
  ],
  "questions": [
    {
      "id": "q-b2-04-1",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "According to the first paragraph, what is a common misconception about the Silk Road?",
      "options": [
        "That it was invented by Marco Polo in Venice",
        "That it was a single continuous paved highway rather than a complex shifting network",
        "That only Roman emperors were permitted to purchase silk",
        "That ships were strictly prohibited from participating in trade"
      ],
      "correctIndex": 1,
      "explanation": "İlk paragrafta, İpek Yolu’nun tek bir düz otoyol değil, dağ geçitleri ve vahalardan oluşan karmaşık bir ağ olduğu vurgulanır.",
      "evidenceSentence": "Popular imagination frequently conceptualizes the historical Silk Road as a singular, well-paved highway... In reality, it comprised a shifting, labyrinthine network..."
    },
    {
      "id": "q-b2-04-2",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "What historical technological breakthrough was transmitted westward following the Battle of Talas?",
      "options": [
        "Steam turbine engines",
        "Paper-making methodologies",
        "Magnetic compass manufacturing",
        "Gunpowder cannons"
      ],
      "correctIndex": 1,
      "explanation": "Metinde Talas Savaşı sonrasında kağıt yapım tekniklerinin (paper-making methodologies) İslam dünyasına ve oradan Avrupa’ya geçtiği yazılıdır.",
      "evidenceSentence": "...paper-making methodologies, transmitted through Central Asian craftsmen following the Battle of Talas in 751 CE..."
    },
    {
      "id": "q-b2-04-3",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the broader philosophical takeaway presented in the conclusion?",
      "options": [
        "Ancient travelers always completed entire continental journeys alone",
        "Human globalization and cultural exchange have deep, ancient multi-polar roots driven by commerce",
        "Civilizations developed entirely in total isolation from one another",
        "Silks and gemstones were far more important than scientific books"
      ],
      "correctIndex": 1,
      "explanation": "Sonuç bölümü, insanlığın küresel karşılıklı bağımlılığının çok kutuplu ve köklü bir geçmişe dayandığını gösterir.",
      "evidenceSentence": "In this sense, the Silk Road demonstrated that human interconnectivity has always been multi-polar, adaptive, and driven by mutual economic interdependence."
    },
    {
      "id": "q-b2-04-4",
      "type": "vocabulary",
      "typeTr": "Bağlamsal Kelime",
      "question": "What does the word “catalyst” in the title symbolize?",
      "options": [
        "An obstacle that slows down progress",
        "A force or substance that accelerates and triggers profound transformation",
        "A military weapon used in siege warfare",
        "A financial currency used in desert markets"
      ],
      "correctIndex": 1,
      "explanation": "Katalizör (catalyst), olayları hızlandıran, değişimi ve dönüşümü tetikleyen unsur anlamına gelir.",
      "evidenceSentence": "The Silk Road: Commerce as the Catalyst of Civilizations"
    }
  ]
},

{
  "id": "reading-b2-05",
  "title": "Constructive Journalism: Beyond Catastrophism",
  "titleTr": "Yapıcı Gazetecilik: Felaket Tellallığının Ötesinde",
  "level": "B2",
  "category": "news_articles",
  "categoryTr": "Haberler ve Makaleler",
  "wordCount": 300,
  "readingTimeMinutes": 4,
  "summaryTr": "Medyada sürekli felaket ve skandal pompalamanın yol açtığı haber yorgunluğuna karşı çözüm odaklı yapıcı gazetecilik akımı.",
  "targetGrammar": "Cleft sentences (It is this chronic negativity that...), Gerund phrases as subjects, Modals of deduction",
  "paragraphs": [
    "The foundational adage of twentieth-century sensationalist journalism—“If it bleeds, it leads”—has precipitated a global crisis of public trust. Algorithmic news feeds, meticulously engineered to exploit human evolutionary negativity bias for engagement metrics, bombard readers with an incessant torrent of corruption scandals, environmental collapse, and violent conflict.",
    "Sociological surveys demonstrate that this chronic deluge produces widespread “news fatigue” and learned helplessness. Citizens do not become better informed; rather, feeling profoundly overwhelmed and powerless, millions deliberately disengage from civic participation altogether.",
    "In response, the international “constructive journalism” movement advocates a rigorous paradigm shift. Pioneered by media researchers in Scandinavia, this approach does not downplay genuine societal problems or produce superficial feel-good puff pieces. Instead, it expands traditional investigative rigor to interrogate actionable responses.",
    "By asking not merely “What has broken down?” but systematically investigating “Who is making progress, and how can their successful methodology be scaled?”, constructive journalists empower audiences, revitalize public discourse, and restore faith in institutional renewal."
  ],
  "vocabulary": [
    {
      "word": "precipitated",
      "phonetic": "/prɪˈsɪp.ə.teɪ.t̬ɪd/",
      "pos": "verb",
      "tr": "tetikledi, hızlandırdı, yol açtı",
      "contextDef": "Caused an event or situation (typically an undesirable one) to happen prematurely",
      "example": "Unchecked cynicism precipitated a collapse in public trust."
    },
    {
      "word": "incessant",
      "phonetic": "/ɪnˈses.ənt/",
      "pos": "adj",
      "tr": "aralıksız, dur durak bilmeyen",
      "contextDef": "Continuing without pause or interruption",
      "example": "The public is weary of incessant negative headlines."
    },
    {
      "word": "downplay",
      "phonetic": "/ˌdaʊnˈpleɪ/",
      "pos": "verb",
      "tr": "önemsiz gibi göstermek, hafifsetmek",
      "contextDef": "To make something appear less important or serious than it really is",
      "example": "Constructive reporting does not downplay grave crises."
    },
    {
      "word": "revitalize",
      "phonetic": "/riːˈvaɪ.t̬əl.aɪz/",
      "pos": "verb",
      "tr": "yeniden canlandırmak, diriltmek",
      "contextDef": "To imbue something with fresh vitality and vigor",
      "example": "Solutions-focused reporting can revitalize democratic dialogue."
    },
    {
      "word": "helplessness",
      "phonetic": "/ˈhelp.ləs.nəs/",
      "pos": "noun",
      "tr": "çaresizlik, acizlik",
      "contextDef": "Inability to defend oneself or to act effectively in a situation",
      "example": "Constant crisis stories induce learned helplessness."
    }
  ],
  "questions": [
    {
      "id": "q-b2-05-1",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What central problem does this critique of contemporary media identify?",
      "options": [
        "Newspapers are too expensive for the average working-class family",
        "Chronic negativity and sensationalism induce public fatigue and apathy rather than constructive civic action",
        "Journalists do not use enough photographs in their articles",
        "Artificial intelligence has replaced all human reporters"
      ],
      "correctIndex": 1,
      "explanation": "Yazar, sürekli felaket ve skandal odaklı haberciliğin halkta çaresizlik, haber yorgunluğu ve toplumsal ilgisizlik yarattığını belirtir.",
      "evidenceSentence": "Sociological surveys demonstrate that this chronic deluge produces widespread “news fatigue” and learned helplessness."
    },
    {
      "id": "q-b2-05-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "How does “constructive journalism” differ from superficial “feel-good” reporting?",
      "options": [
        "It only publishes celebrity gossip and luxury fashion reviews",
        "It maintains investigative rigor while examining viable solutions and scalable methodologies",
        "It ignores all government corruption entirely",
        "It is funded exclusively by social media corporations"
      ],
      "correctIndex": 1,
      "explanation": "Yapıcı gazetecilik pembe tablolar çizmez; araştırma ciddiyetini koruyarak işe yarayan somut çözümleri ve ölçeklenebilir başarı modellerini sorgular.",
      "evidenceSentence": "Instead, it expands traditional investigative rigor to interrogate actionable responses."
    },
    {
      "id": "q-b2-05-3",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "Why do algorithmic social feeds favor sensationalist and negative headlines?",
      "options": [
        "Because negative content exploits innate psychological biases to drive user engagement and clicks",
        "Because positive news is prohibited by law",
        "Because algorithms cannot read positive vocabulary",
        "Because negative articles cost less to host on computer servers"
      ],
      "correctIndex": 0,
      "explanation": "Algoritmalar, insan psikolojisindeki olumsuzluğa meyletme eğilimini (negativity bias) tıklanma ve etkileşim için suistimal eder.",
      "evidenceSentence": "Algorithmic news feeds, meticulously engineered to exploit human evolutionary negativity bias for engagement metrics..."
    },
    {
      "id": "q-b2-05-4",
      "type": "vocabulary",
      "typeTr": "Bağlamsal Kelime",
      "question": "What does the term “deluge” signify in paragraph 2?",
      "options": [
        "A total absence of information",
        "An overwhelming and relentless flood of content",
        "A specialized mathematical formula",
        "A quiet confidential whisper"
      ],
      "correctIndex": 1,
      "explanation": "“Deluge” kelimesi mecazi olarak boğucu ve durmak bilmeyen bir sel/akın anlamına gelmektedir.",
      "evidenceSentence": "Sociological surveys demonstrate that this chronic deluge produces widespread “news fatigue”..."
    }
  ]
},

{
  "id": "reading-c1-03",
  "title": "The Architecture of Choice: Behavioral Economics and Public Policy",
  "titleTr": "Tercih Mimarisi: Davranışsal İktisat ve Kamu Politikası",
  "level": "C1",
  "category": "opinions_arguments",
  "categoryTr": "Görüşler ve Argümanlar",
  "wordCount": 360,
  "readingTimeMinutes": 4,
  "summaryTr": "Richard Thaler ve Cass Sunstein’ın “Dürtme” (Nudge) teorisi, rasyonel insan varsayımının çöküşü ve paternalist tercihler üzerine analitik bir inceleme.",
  "targetGrammar": "Subjunctive constructions, Advanced conditional inversions (Had classical economists conceded...), Nominalization",
  "paragraphs": [
    "Classical macroeconomic orthodoxy long operated under the convenient fiction of *Homo economicus*—an impeccably rational agent who evaluates probabilistic outcomes with crystalline dispassion, maximizes expected utility, and remains immune to cognitive biases. Behavioral economics has thoroughly dismantled this neoclassical caricature.",
    "Championed by Nobel laureate Richard Thaler and legal scholar Cass Sunstein, the paradigm of “choice architecture” asserts that there is no such thing as a neutral presentation of alternatives. The configuration of default options, physical proximity of nutritious foods in cafeterias, or the visual framing of organ donation consent forms inescapably steers decision-makers toward specific trajectories.",
    "This concept underpins “libertarian paternalism”—the premise that institutions may legitimately design choice environments to encourage welfare-enhancing outcomes (such as automated retirement savings contributions) while scrupulously preserving an individual’s formal freedom to opt out.",
    "Critics, however, raise cogent democratic objections. When technocratic architects orchestrate subtle behavioral “nudges” without explicit public deliberation, they risk infantilizing citizens and operating beneath the threshold of conscious awareness. The fundamental dilemma of choice architecture lies in adjudicating where benevolent guidance ends and insidious social engineering begins."
  ],
  "vocabulary": [
    {
      "word": "dispassion",
      "phonetic": "/dɪsˈpæʃ.ən/",
      "pos": "noun",
      "tr": "tarafsızlık, soğukkanlılık",
      "contextDef": "Freedom from personal passion, bias, or emotional involvement",
      "example": "He evaluated the data with philosophical dispassion."
    },
    {
      "word": "infantilizing",
      "phonetic": "/ɪnˈfæn.t̬əl.aɪ.zɪŋ/",
      "pos": "verb",
      "tr": "çocuk yerine koyan, erginliğini elinden alan",
      "contextDef": "Treating someone as if they were a child and incapable of mature choice",
      "example": "Nudge policies risk infantilizing the adult populace."
    },
    {
      "word": "cogent",
      "phonetic": "/ˈkoʊ.dʒənt/",
      "pos": "adj",
      "tr": "inandırıcı, ikna edici, kuvvetli",
      "contextDef": "Clear, logical, and convincing in an argument",
      "example": "She presented a cogent critique of algorithmic nudging."
    },
    {
      "word": "scrupulously",
      "phonetic": "/ˈskruː.pjə.ləs.li/",
      "pos": "adv",
      "tr": "titizlikle, kılı kırk yararcasına",
      "contextDef": "In a very careful, thorough, and conscientious manner",
      "example": "The program scrupulously maintained the option to opt out."
    },
    {
      "word": "insidious",
      "phonetic": "/ɪnˈsɪd.i.əs/",
      "pos": "adj",
      "tr": "sinsi, gizlice zarar veren",
      "contextDef": "Proceeding in a gradual, subtle way, but with harmful consequences",
      "example": "They warned against insidious psychological manipulation."
    }
  ],
  "questions": [
    {
      "id": "q-c1-03-1",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the central philosophical tension explored in this essay?",
      "options": [
        "Whether governments should abolish retirement pension funds entirely",
        "The ethical boundary between benevolent behavioral nudges and non-consensual technocratic manipulation",
        "Why neoclassical economics is superior in mathematical precision to psychology",
        "The technical logistics of school cafeteria meal preparation"
      ],
      "correctIndex": 1,
      "explanation": "Metin, insanların refahını artırmayı hedefleyen dürtme politikaları ile bilinçaltı manipülasyon arasındaki etik ve demokratik gerilimi inceler.",
      "evidenceSentence": "The fundamental dilemma of choice architecture lies in adjudicating where benevolent guidance ends and insidious social engineering begins."
    },
    {
      "id": "q-c1-03-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "What fundamental assumption of *Homo economicus* was overturned by behavioral economics?",
      "options": [
        "That people prefer leisure over physical labor",
        "That human agents are flawlessly rational maximizers immune to cognitive biases",
        "That supply curves slope upward in agricultural economies",
        "That legal contracts require written notarization"
      ],
      "correctIndex": 1,
      "explanation": "Davranışsal iktisat, insanın her kararı kusursuz bir rasyonellikle alan bir makine (*Homo economicus*) olduğu yanılgısını yıkmıştır.",
      "evidenceSentence": "...an impeccably rational agent who evaluates probabilistic outcomes with crystalline dispassion... Behavioral economics has thoroughly dismantled this neoclassical caricature."
    },
    {
      "id": "q-c1-03-3",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "Why do proponents call this governance model “libertarian paternalism”?",
      "options": [
        "Because it forces all citizens to join the Libertarian political party",
        "Because it encourages welfare-enhancing outcomes while strictly maintaining an individual’s liberty to opt out",
        "Because it abolishes taxation and private property rights simultaneously",
        "Because parents are granted total legal sovereignty over adult offspring"
      ],
      "correctIndex": 1,
      "explanation": "Özgürlükçü (libertarian) tarafı tercih hakkını saklı tutmasından; paternalist (babacan) tarafı ise iyi olan tercihi varsayılan olarak sunmasından gelir.",
      "evidenceSentence": "...encourage welfare-enhancing outcomes... while scrupulously preserving an individual’s formal freedom to opt out."
    },
    {
      "id": "q-c1-03-4",
      "type": "author_purpose",
      "typeTr": "Yazarın Amacı",
      "question": "What warning does the author issue in the concluding remarks?",
      "options": [
        "That governments will soon outlaw supermarket candy displays",
        "That subtle technocratic nudging without transparent public scrutiny risks undermining democratic maturity",
        "That behavioral economists should be banned from advising political leaders",
        "That citizens are unable to understand complex economic concepts"
      ],
      "correctIndex": 1,
      "explanation": "Yazar, kamu denetimi olmaksızın uygulanan dürtmelerin vatandaşları çocuklaştırabileceği ve sinsi bir manipülasyona dönüşebileceği uyarısını yapar.",
      "evidenceSentence": "When technocratic architects orchestrate subtle behavioral “nudges” without explicit public deliberation, they risk infantilizing citizens..."
    }
  ]
},

{
  "id": "reading-c1-04",
  "title": "The Florentine Crucible: Humanism, Patronage, and Spatial Geometry",
  "titleTr": "Floransa Potası: Hümanizm, Hamilik ve Mekânsal Geometri",
  "level": "C1",
  "category": "history_bio",
  "categoryTr": "Tarih ve Biyografi",
  "wordCount": 375,
  "readingTimeMinutes": 4,
  "summaryTr": "15. yüzyıl Floransasında Medici hanedanının hamiliği, Alberti ve Brunelleschi’nin matematiksel perspektifi ve Rönesans hümanizminin doğuşu.",
  "targetGrammar": "Historical inversion, Participle clauses indicating instrument, Elevated scholarly rhetoric",
  "paragraphs": [
    "The dramatic intellectual convulsions that swept fifteenth-century Florence were neither spontaneous nor serendipitous; they were forged in a unique socio-political crucible where mercantile capital intersected with rediscovered classical antiquity. In this vibrant Tuscan republic, the guild oligarchy—spearheaded by the banking dynasty of Cosimo de’ Medici—recognized aesthetic patronage not merely as pious philanthropy, but as an indispensable instrument of ideological legitimation.",
    "Crucially, this cultural renaissance was underpinned by an epistemological breakthrough: the mathematical codification of linear perspective. When Filippo Brunelleschi demonstrated the geometric principles of vanishing points on the steps of the Duomo, and Leon Battista Alberti subsequently codified them in *De Pictura*, they did not merely bequeath painters a technical apparatus for depicting three-dimensional illusions upon flat surfaces.",
    "Rather, linear perspective radically re-anchored human consciousness. By designating the individual human eye as the sovereign, organizing vantage point from which all spatial vectors emanate, Renaissance perspective dethroned the medieval hierarchical cosmos in favor of a rationalized, measurable world open to human agency and scientific inquiry.",
    "Thus, Florentine humanism achieved a profound synthesis: classical philology and empirical geometry merged to articulate a defiant new doctrine—that man is the conscious architect of his own destiny."
  ],
  "vocabulary": [
    {
      "word": "crucible",
      "phonetic": "/ˈkruː.sə.bəl/",
      "pos": "noun",
      "tr": "pota, çetin sınav yeri",
      "contextDef": "A severe test or a place/situation where concentrated forces interact to produce change",
      "example": "Florence was the artistic crucible of early modernity."
    },
    {
      "word": "philanthropy",
      "phonetic": "/fɪˈlæn.θrə.pi/",
      "pos": "noun",
      "tr": "hayırseverlik, insan sevgisi",
      "contextDef": "The desire to promote the welfare of others, expressed especially by the donation of money",
      "example": "Artistic patronage exceeded simple religious philanthropy."
    },
    {
      "word": "vantage",
      "phonetic": "/ˈvæn.t̬ɪdʒ/",
      "pos": "noun",
      "tr": "bakış noktası, avantajlı konum",
      "contextDef": "A place or position affording a good view of something",
      "example": "The human observer became the central vantage point."
    },
    {
      "word": "serendipitous",
      "phonetic": "/ˌser.ənˈdɪp.ə.t̬əs/",
      "pos": "adj",
      "tr": "tesadüfi, şans eseri olan",
      "contextDef": "Occurring or discovered by chance in a happy or beneficial way",
      "example": "The cultural explosion was deliberate, not serendipitous."
    },
    {
      "word": "dethroned",
      "phonetic": "/diːˈθroʊnd/",
      "pos": "verb",
      "tr": "tahtından indirdi, yerinden etti",
      "contextDef": "Removed a monarch or established hierarchy from power or central authority",
      "example": "Mathematical perspective dethroned medieval cosmological mysticism."
    }
  ],
  "questions": [
    {
      "id": "q-c1-04-1",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "Why did the Medici banking family invest so heavily in artistic patronage?",
      "options": [
        "To hide illegal counterfeit currency from civic magistrates",
        "Because patronage served as an indispensable vehicle for ideological legitimation and political prestige",
        "Because Renaissance painters worked for free as indentured servants",
        "To prevent foreign tourists from entering Tuscany"
      ],
      "correctIndex": 1,
      "explanation": "Medici ailesi sanatsal hamiliği yalnızca dini bir hayır işi olarak değil, siyasi meşruiyet ve güç gösterisi için kullanmıştır.",
      "evidenceSentence": "...the guild oligarchy—spearheaded by the banking dynasty of Cosimo de’ Medici—recognized aesthetic patronage not merely as pious philanthropy, but as an indispensable instrument of ideological legitimation."
    },
    {
      "id": "q-c1-04-2",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "What profound philosophical revolution was enacted by Brunelleschi’s linear perspective?",
      "options": [
        "It compelled architects to construct buildings solely out of marble",
        "It re-anchored human perception by positioning the individual viewer’s eye as the organizing center of reality",
        "It proved that the earth revolves around the sun without mathematical equations",
        "It proved that religious paintings should be outlawed across Europe"
      ],
      "correctIndex": 1,
      "explanation": "Doğrusal perspektif insan gözünü merkez alan bir bakış noktası tanımlayarak orta çağın hiyerarşik kozmolojisini akılcı ve ölçülebilir bir dünya anlayışıyla değiştirmiştir.",
      "evidenceSentence": "By designating the individual human eye as the sovereign, organizing vantage point from which all spatial vectors emanate, Renaissance perspective dethroned the medieval hierarchical cosmos..."
    },
    {
      "id": "q-c1-04-3",
      "type": "vocabulary",
      "typeTr": "Bağlamsal Kelime",
      "question": "What does the term “epistemological breakthrough” convey in paragraph 2?",
      "options": [
        "A military victory won through cavalry tactics",
        "A profound leap forward in the theory and structure of human knowledge and perception",
        "A catastrophic collapse of commercial banks",
        "An architectural defect causing church towers to lean"
      ],
      "correctIndex": 1,
      "explanation": "Epistemolojik kırılma, bilginin doğası ve insanın dünyayı anlama/kavrama biçimindeki devrimsel ilerlemedir.",
      "evidenceSentence": "Crucially, this cultural renaissance was underpinned by an epistemological breakthrough: the mathematical codification of linear perspective."
    },
    {
      "id": "q-c1-04-4",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What overarching thesis does the author defend in this cultural history?",
      "options": [
        "The Italian Renaissance was purely a financial accident without intellectual coherence",
        "The Florentine synthesis of commerce, classical antiquity, and geometric perspective gave birth to modern human autonomy",
        "Brunelleschi was primarily an engineer with no interest in philosophy",
        "The Medici bank collapsed because of excessive expenditure on cathedral construction"
      ],
      "correctIndex": 1,
      "explanation": "Metin, Floransa’daki ticaret, antik felsefe ve matematiksel geometrinin birleşerek modern insan özerkliğini doğurduğunu savunur.",
      "evidenceSentence": "Thus, Florentine humanism achieved a profound synthesis: classical philology and empirical geometry merged to articulate a defiant new doctrine—that man is the conscious architect of his own destiny."
    }
  ]
},

{
  "id": "reading-c1-05",
  "title": "The Critical Minerals Dilemma: The Geopolitics of the Clean Energy Transition",
  "titleTr": "Kritik Mineraller İkilemi: Temiz Enerjiye Geçişin Jeopolitiği",
  "level": "C1",
  "category": "news_articles",
  "categoryTr": "Haberler ve Makaleler",
  "wordCount": 355,
  "readingTimeMinutes": 4,
  "summaryTr": "Lityum, kobalt, nikel ve nadir toprak elementleri tedarik zincirlerindeki jeostratejik yoğunlaşma ve yeşil enerji çağında kaynak rekabeti.",
  "targetGrammar": "Complex passive modals (must be reconceptualized), Antithetical parallelism, Advanced geopolitical terminology",
  "paragraphs": [
    "The international community’s accelerating transition away from fossil fuel combustion is frequently heralded as a triumphant emancipation from petro-state extortion. Yet this triumphalist narrative elides a sobering material reality: the clean energy economy is not dematerialized; it is profoundly, voraciously mineral-intensive.",
    "A typical electric passenger vehicle requires six times the mineral inputs of an internal combustion predecessor; an offshore wind turbine demands nine times the copper and rare-earth alloys of an equivalent megawatt-class natural gas combined-cycle turbine. Consequently, global vulnerabilities are shifting from the choke points of crude oil tankers to the opaque refining hubs of lithium, cobalt, nickel, and neodymium.",
    "Unlike hydrocarbon reservoirs, which are distributed across dozens of sovereign nations, the processing and chemical refining of critical transition minerals are characterized by extreme geographic concentration. A single sovereign actor currently refines over sixty percent of global lithium and ninety percent of rare earth magnets.",
    "As Western democracies scramble to establish domestic refining capacity and negotiate bilateral “friend-shoring” alliances, they confront a fraught trade-off between rigorous environmental safeguards and strategic resource sovereignty. Decarbonization will not inaugurate an era of frictionless international harmony; rather, it will reconfigure the tectonic fault lines of twenty-first-century global power."
  ],
  "vocabulary": [
    {
      "word": "elides",
      "phonetic": "/ɪˈlaɪdz/",
      "pos": "verb",
      "tr": "göz ardı eder, üstünü örter",
      "contextDef": "Omits, suppresses, or joins together while ignoring vital distinctions",
      "example": "The rhetoric elides the harsh ecological costs of extraction."
    },
    {
      "word": "voraciously",
      "phonetic": "/vəˈreɪ.ʃəs.li/",
      "pos": "adv",
      "tr": "doymak bilmezcesine, oburca",
      "contextDef": "Exceedingly eager or having an immense, insatiable appetite",
      "example": "Clean technology is voraciously dependent on scarce minerals."
    },
    {
      "word": "friend-shoring",
      "phonetic": "/ˈfrendˌʃɔːr.ɪŋ/",
      "pos": "noun",
      "tr": "dost ülkelerden tedarik, müttefik üretimi",
      "contextDef": "Relocating supply chains to countries with shared geopolitical values",
      "example": "Western governments are promoting friend-shoring in semiconductor supply."
    },
    {
      "word": "sovereignty",
      "phonetic": "/ˈsɑːv.rən.t̬i/",
      "pos": "noun",
      "tr": "egemenlik, tam bağımsızlık",
      "contextDef": "Supreme power, authority, or freedom from external subjugation",
      "example": "Resource sovereignty has become an urgent security priority."
    },
    {
      "word": "emancipation",
      "phonetic": "/iˌmæn.səˈpeɪ.ʃən/",
      "pos": "noun",
      "tr": "kurtuluş, özgürleşme",
      "contextDef": "The fact or process of being set free from legal, social, or political restrictions",
      "example": "The transition promises emancipation from fossil fuel dependency."
    }
  ],
  "questions": [
    {
      "id": "q-c1-05-1",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "According to the second paragraph, how does the mineral consumption of an electric vehicle compare to a conventional vehicle?",
      "options": [
        "An electric vehicle uses fifty percent fewer metals than a gas car",
        "An electric vehicle requires approximately six times the mineral inputs of an internal combustion predecessor",
        "Both vehicle types utilize identical amounts of raw materials",
        "Electric vehicles use no copper or nickel whatsoever"
      ],
      "correctIndex": 1,
      "explanation": "Elektrikli bir aracın üretimi, geleneksel bir içten yanmalı araca kıyasla yaklaşık 6 kat daha fazla mineral girdisi gerektirmektedir.",
      "evidenceSentence": "A typical electric passenger vehicle requires six times the mineral inputs of an internal combustion predecessor..."
    },
    {
      "id": "q-c1-05-2",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "Why does the author argue that the clean energy transition will not eliminate geopolitical tension?",
      "options": [
        "Because coal mining companies will launch military invasions",
        "Because dependency is simply transferring from crude oil exporters to monopolistic mineral processing nations",
        "Because rare earth elements are toxic to solar panel operators",
        "Because electric grids cannot survive lightning storms"
      ],
      "correctIndex": 1,
      "explanation": "Fosil yakıtlardan kurtulunsa bile bağımlılık bu kez lityum, kobalt ve nadir toprak elementlerini tekelinde tutan ülkelere kaymaktadır.",
      "evidenceSentence": "Decarbonization will not inaugurate an era of frictionless international harmony; rather, it will reconfigure the tectonic fault lines of twenty-first-century global power."
    },
    {
      "id": "q-c1-05-3",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the primary thesis of this geopolitical analysis?",
      "options": [
        "Governments should abandon renewable energy and return exclusively to coal",
        "The clean energy transition is physically material-intensive and creates new strategic dependencies around critical mineral refining",
        "Electric vehicles are completely unviable for long-distance transport",
        "All mineral refining should take place on offshore oceanic platforms"
      ],
      "correctIndex": 1,
      "explanation": "Metnin ana fikri, yeşil dönüşümün maddeden bağımsız olmadığını, aksine nadir minerallere olan yoğun ihtiyaç yüzünden yeni jeopolitik kırılmalar yarattığıdır.",
      "evidenceSentence": "...the clean energy economy is not dematerialized; it is profoundly, voraciously mineral-intensive."
    },
    {
      "id": "q-c1-05-4",
      "type": "vocabulary",
      "typeTr": "Bağlamsal Kelime",
      "question": "What is meant by “fraught trade-off” in the final paragraph?",
      "options": [
        "A quick, frictionless monetary transaction",
        "A tense, difficult compromise involving competing, mutually conflicting priorities",
        "A complete failure to sign any commercial treaties",
        "A peaceful agreement signed without any debates"
      ],
      "correctIndex": 1,
      "explanation": "“Fraught trade-off”, birbiriyle çelişen zorlu öncelikler (çevre standartları vs. hammadde egemenliği) arasında yapılan sancılı bir ödünleşimdir.",
      "evidenceSentence": "...they confront a fraught trade-off between rigorous environmental safeguards and strategic resource sovereignty."
    }
  ]
},

{
  "id": "reading-c2-03",
  "title": "The Palimpsest of Collective Memory: Historiography and the Politics of Erasure",
  "titleTr": "Kolektif Belleğin Palimpsesti: Tarihyazımı ve Silme Siyaseti",
  "level": "C2",
  "category": "history_bio",
  "categoryTr": "Tarih ve Biyografi",
  "wordCount": 420,
  "readingTimeMinutes": 5,
  "summaryTr": "Tarihsel anlatıların ve kamusal anıtların nasıl yeniden yazıldığı, kolektif unutuş ve arşivsel otoritenin felsefi yapısökümü.",
  "targetGrammar": "Chiasmus and antithesis, Subjunctive mood with archaic elegance, Nominalized abstraction",
  "paragraphs": [
    "To conceive of history as an inert sediment of verifiable occurrences is to succumb to a naive positivist teleology. The historical record functions not as an immaculate mirror of antiquity, but as a contested palimpsest—an parchment repeatedly scraped, overwritten, and redacted according to the ideological exigencies of emergent hegemonic orders.",
    "From the ritual desecration of Pharaonic cartouches in the Nile Valley to the contemporary toppling of imperial statuary in post-colonial metropolises, societies perennially perform what Friedrich Nietzsche diagnosed as “critical history”—the surgical excision of past mythologies to render the present politically navigable. Yet in this perpetual renegotiation between preservation and oblivion, erasure is never ideologically neutral.",
    "State-sanctioned historiography routinely operates through structured silences. What is systematically omitted from national curricula and consecrated archives often bears a far heavier semiotic weight than the triumphant narratives ostentatiously inscribed upon triumphal arches. These curated lacunae serve to manufacture civic cohesion by foreclosing uncomfortable reckonings with ancestral complicity, colonial predation, or institutional disenfranchisement.",
    "A mature democratic polity must resist the seductive allure of sanitized mythology. To inhabit historical consciousness with philosophical rigor requires embracing dissonant memory—recognizing that the archive is inherently precarious, partial, and irreducibly plural. Only when a society interrogates the violent contingencies of its own commemorative monuments does it achieve true intellectual emancipation."
  ],
  "vocabulary": [
    {
      "word": "palimpsest",
      "phonetic": "/ˈpæl.ɪmp.sest/",
      "pos": "noun",
      "tr": "palimpsest (üstü silinip yeniden yazılmış parşömen/bellek)",
      "contextDef": "Something reused or altered but still bearing visible traces of its earlier form",
      "example": "Collective memory is a layered cultural palimpsest."
    },
    {
      "word": "exigencies",
      "phonetic": "/ˈek.sə.dʒən.siz/",
      "pos": "noun",
      "tr": "zorunluluklar, acil gereksinimler",
      "contextDef": "Urgent needs, demands, or requirements intrinsic to a circumstance",
      "example": "History is rewritten to satisfy current political exigencies."
    },
    {
      "word": "lacunae",
      "phonetic": "/ləˈkjuː.niː/",
      "pos": "noun",
      "tr": "boşluklar, eksik parçalar",
      "contextDef": "Unfilled spaces, gaps, or missing portions in a manuscript or narrative",
      "example": "The historical archive is riddled with deliberate lacunae."
    },
    {
      "word": "desecration",
      "phonetic": "/ˌdes.əˈkreɪ.ʃən/",
      "pos": "noun",
      "tr": "kutsallığı bozma, saygısızlık etme",
      "contextDef": "The act of treating something sacred or revered with violent disrespect",
      "example": "The public witnessed the ritual desecration of royal statues."
    },
    {
      "word": "teleology",
      "phonetic": "/ˌtiː.liˈɑː.lə.dʒi/",
      "pos": "noun",
      "tr": "teleoloji, amaçsallık kuramı",
      "contextDef": "The explanation of phenomena by the purpose they serve rather than by postulated causes",
      "example": "He rejected naive historical teleology."
    }
  ],
  "questions": [
    {
      "id": "q-c2-03-1",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the overarching epistemological thesis of this essay?",
      "options": [
        "History is an objective, unchanging record of factual events that can never be questioned",
        "History is a dynamic, ideologically contested palimpsest where forgetting and omissions are actively manufactured by dominant powers",
        "Statues and monuments should never be erected in modern cities",
        "Nietzsche was the only philosopher who correctly understood Egyptian pharaohs"
      ],
      "correctIndex": 1,
      "explanation": "Yazar tarihin sabit ve nesnel bir kayıt olmadığını, egemen güçlerin kendi çıkarlarına göre silip yeniden yazdığı bir bellek palimpsesti olduğunu savunur.",
      "evidenceSentence": "The historical record functions not as an immaculate mirror of antiquity, but as a contested palimpsest—an parchment repeatedly scraped, overwritten, and redacted..."
    },
    {
      "id": "q-c2-03-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "What role do “curated lacunae” (deliberate silences/gaps) play in state-sanctioned historiography?",
      "options": [
        "They save printing paper in school textbook production",
        "They manufacture artificial civic cohesion by systematically suppressing uncomfortable historical crimes and complicities",
        "They help archaeologists discover lost gold treasures",
        "They ensure that historical dates are memorized accurately"
      ],
      "correctIndex": 1,
      "explanation": "Bilinçli boşluklar ve sessizlikler, geçmişteki sömürü ve suçlarla yüzleşmeyi engelleyerek yapay bir toplumsal uyum üretmeye hizmet eder.",
      "evidenceSentence": "These curated lacunae serve to manufacture civic cohesion by foreclosing uncomfortable reckonings with ancestral complicity..."
    },
    {
      "id": "q-c2-03-3",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "What does the author suggest a mature democratic society must embrace?",
      "options": [
        "Total destruction of all libraries and physical archives",
        "Dissonant, pluralistic memory that confronts the violent contingencies of its own commemorative history",
        "Absolute obedience to official national myths without dispute",
        "Replacing history departments with computerized sentiment analysis"
      ],
      "correctIndex": 1,
      "explanation": "Olgun bir demokrasi, sterilize edilmiş efsanelere kapılmak yerine çoğulcu, çelişkili ve eleştirel bir tarihsel hafızayı kucaklamalıdır.",
      "evidenceSentence": "To inhabit historical consciousness with philosophical rigor requires embracing dissonant memory—recognizing that the archive is inherently precarious, partial, and irreducibly plural."
    },
    {
      "id": "q-c2-03-4",
      "type": "vocabulary",
      "typeTr": "Bağlamsal Kelime",
      "question": "What does the metaphor of the “palimpsest” fundamentally convey about collective memory?",
      "options": [
        "That ancient paper is fragile and susceptible to water damage",
        "That historical memory consists of layered, continually overwritten narratives where earlier traces remain subtly embedded beneath current versions",
        "That monarchs used secret invisible inks in medieval diplomacy",
        "That history repeats itself in identical twenty-year cycles"
      ],
      "correctIndex": 1,
      "explanation": "Palimpsest metaforu, belleğin katmanlı olduğunu, silinip yeniden yazılsa bile eski izlerin yeni anlatıların altında varlığını sürdürdüğünü simgeler.",
      "evidenceSentence": "...an parchment repeatedly scraped, overwritten, and redacted according to the ideological exigencies of emergent hegemonic orders."
    }
  ]
},

{
  "id": "reading-c2-04",
  "title": "Quantum Decoherence and the Epistemological Limits of Measurement",
  "titleTr": "Kuantum Eşevresizliği ve Ölçümün Epistemolojik Sınırları",
  "level": "C2",
  "category": "science_tech",
  "categoryTr": "Bilim ve Teknoloji",
  "wordCount": 410,
  "readingTimeMinutes": 5,
  "summaryTr": "Kuantum süperpozisyonu, çevreyle etkileşim sonucu dalga fonksiyonunun çökmesi ve nesnel gerçeklik felsefesi üzerine üst düzey bir fizik analizi.",
  "targetGrammar": "Hypothetical modal chains, Substantive abstract nominalizations, High-density academic syntax",
  "paragraphs": [
    "The foundational paradox that haunted the founding luminaries of quantum mechanics—the irreconcilable fissure between the linear, deterministic unitary evolution of the Schrödinger wave function and the discontinuous, probabilistic reduction observed during macroscopic measurement—has undergone a profound re-conceptualization through the apparatus of environmental decoherence theory.",
    "Pioneered by H. Dieter Zeh and Wojciech Zurek, decoherence dispenses with the mystical ad-hoc postulates of classical Copenhagen collapse models. It demonstrates that quantum systems never exist in pristine, isolated hermeticism; rather, they remain inextricably entangled with an omnipresent macroscopic environment comprising trillions of unmonitored photonic and thermal degrees of freedom.",
    "Through continuous, irreversible environmental entanglement, the delicate phase coherence between superposed quantum states is ruthlessly dissipated into the surrounding bath within sub-femtosecond timescales. This process does not select a preferred ontological outcome from the outside; rather, it renders alternative interference terms practically unobservable, effectively simulating classical determinism to any macroscopic observer.",
    "Yet decoherence stops short of resolving the ontological quandary of quantum reality. While it eloquently explains *why* macroscopic superpositions appear phenomenologically prohibited, it leaves the definitive transition from probability to actuality fiercely contested—poising modern physics on the knife-edge between the Many-Worlds interpretation and post-quantum metaphysical agnosticism."
  ],
  "vocabulary": [
    {
      "word": "decoherence",
      "phonetic": "/diː.koʊˈhɪr.əns/",
      "pos": "noun",
      "tr": "eşevresizlik, faz uyumsuzluğu",
      "contextDef": "The loss of quantum coherence where a system interacts with its environment to behave classically",
      "example": "Environmental decoherence accounts for the classical appearance of our world."
    },
    {
      "word": "hermeticism",
      "phonetic": "/hɜːrˈmet̬.ə.sɪz.əm/",
      "pos": "noun",
      "tr": "tam yalıtılmışlık, kapalılık",
      "contextDef": "The state of being completely airtight, isolated, or insulated from outside influence",
      "example": "Quantum experiments cannot maintain complete hermeticism."
    },
    {
      "word": "ontological",
      "phonetic": "/ˌɑːn.t̬əˈlɑː.dʒɪ.kəl/",
      "pos": "adj",
      "tr": "ontolojik, varoluşsal",
      "contextDef": "Relating to the branch of metaphysics dealing with the nature of being or reality",
      "example": "The ontological status of the wave function remains unsettled."
    },
    {
      "word": "phenomenologically",
      "phonetic": "/fəˌnɑː.mə.nəˈlɑː.dʒɪ.kəl.i/",
      "pos": "adv",
      "tr": "fenomenolojik olarak, algısal düzeyde",
      "contextDef": "In a manner relating to conscious experience and observable phenomena rather than ultimate essence",
      "example": "The world appears phenomenologically classical to human senses."
    },
    {
      "word": "entangled",
      "phonetic": "/ɪnˈtæŋ.ɡəld/",
      "pos": "adj",
      "tr": "dolaşık, kuantum dolanıklığı içinde olan",
      "contextDef": "Interconnected such that the state of one entity cannot be described independently of another",
      "example": "The particle becomes entangled with ambient thermal photons."
    }
  ],
  "questions": [
    {
      "id": "q-c2-04-1",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "According to decoherence theory, why do macroscopic quantum superpositions seem impossible in everyday life?",
      "options": [
        "Because gravity destroys all subatomic particles immediately",
        "Because continuous, irreversible environmental entanglement dissipates phase coherence into surrounding thermal degrees of freedom",
        "Because human consciousness emits a spiritual ray that forces particles to stop moving",
        "Because quantum mechanics only applies inside nuclear reactors"
      ],
      "correctIndex": 1,
      "explanation": "Kuantum eşevresizliği kuramı, çevresel etkileşim ve dolanıklığın faz uyumunu femtosaniyeler içinde çevreye dağıtarak klasik davranışı simüle ettiğini açıklar.",
      "evidenceSentence": "Through continuous, irreversible environmental entanglement, the delicate phase coherence between superposed quantum states is ruthlessly dissipated into the surrounding bath..."
    },
    {
      "id": "q-c2-04-2",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "What philosophical puzzle does decoherence leave fundamentally unresolved according to the final paragraph?",
      "options": [
        "The speed of light in a vacuum",
        "The definitive transition from quantum probability to unique observed actuality (the measurement problem)",
        "How to build electric batteries with lithium ions",
        "Whether mathematics is a useful tool for physics"
      ],
      "correctIndex": 1,
      "explanation": "Eşevresizlik faz uyumsuzluğunu açıklasa da olasılıktan tekil somut gerçekliğe geçişin ontolojik gizemini (ölçüm problemini) nihai olarak çözemez.",
      "evidenceSentence": "While it eloquently explains why macroscopic superpositions appear phenomenologically prohibited, it leaves the definitive transition from probability to actuality fiercely contested..."
    },
    {
      "id": "q-c2-04-3",
      "type": "vocabulary",
      "typeTr": "Bağlamsal Kelime",
      "question": "What does the word “quandary” signify in the concluding paragraph?",
      "options": [
        "A state of perplexity or deep philosophical uncertainty",
        "A triumphantly completed mathematical calculation",
        "A physical laboratory instrument used to count photons",
        "A financial grant given to quantum researchers"
      ],
      "correctIndex": 0,
      "explanation": "“Quandary” çelişki, içinden çıkılmaz ikilem, derin teorik açmaz anlamına gelir.",
      "evidenceSentence": "Yet decoherence stops short of resolving the ontological quandary of quantum reality."
    },
    {
      "id": "q-c2-04-4",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What is the primary scientific purpose of Wojciech Zurek and Dieter Zeh’s decoherence framework?",
      "options": [
        "To replace quantum physics with nineteenth-century Newtonian clockwork mechanics",
        "To explain the emergence of classical-looking phenomena from quantum substrates through environmental interaction rather than ad-hoc collapse postulates",
        "To prove that parallel universes can be traveled to via wormholes",
        "To demonstrate that measuring devices must be made of pure gold"
      ],
      "correctIndex": 1,
      "explanation": "Kuram, mistik çöküş varsayımlarına gerek kalmadan çevreyle etkileşim yoluyla kuantum dünyasından klasik gerçeklik illüzyonunun nasıl doğduğunu modeller.",
      "evidenceSentence": "Pioneered by H. Dieter Zeh and Wojciech Zurek, decoherence dispenses with the mystical ad-hoc postulates of classical Copenhagen collapse models."
    }
  ]
},

{
  "id": "reading-c2-05",
  "title": "The Irony of Modern Satire: Subversion Versus Cynical Catharsis",
  "titleTr": "Modern Hicvin İronisi: Yıkıcılık ve Kinik Katarsis Arasında",
  "level": "C2",
  "category": "literature_arts",
  "categoryTr": "Edebiyat ve İleri Metinler",
  "wordCount": 395,
  "readingTimeMinutes": 5,
  "summaryTr": "Jonathan Swift ve Juvenal’den çağdaş televizyon parodilerine hicvin siyasal gücü; sistem eleştirisi mi yoksa öfkeyi ehlileştiren bir emniyet sübabı mı?",
  "targetGrammar": "Paradoxical antithesis, Elliptical conditional clauses, Complex rhetorical balance",
  "paragraphs": [
    "Since the caustic verses of Juvenal and the surgical provocations of Jonathan Swift, satire has proclaimed itself the supreme literary scalpel of democratic dissent. By transmuting sanctimonious hypocrisy, hubris, and authoritarian ambition into objects of searing ridicule, the satirist supposedly punctures the mystique of power, awakening dormant civic conscience.",
    "Yet late modern capitalist culture has revealed a profoundly disquieting paradox: far from subverting systemic iniquities, mass-market satire frequently functions as an ideological shock absorber. In an era where political absurdity routinely outpaces parody, consumerist mockery generates what cultural theorist Mark Fisher identified as a cynical catharsis.",
    "When televised satirical spectacles expose institutional corruption for nightly entertainment, they provide audiences with an instantaneous, low-cost moral discharge. The viewer laughs, congratulates themselves on being intellectually superior to the caricatured politicians, and retires to bed—having discharged their ethical indignation without undertaking a single act of actual political resistance.",
    "The modern satirical enterprise thus finds itself entangled in structural complicity. When irony becomes the lingua franca of the status quo, the radical sting of mockery is neutralized; parody no longer threatens power, but rather operates as its indispensable safety valve, domesticating outrage into lucrative entertainment."
  ],
  "vocabulary": [
    {
      "word": "caustic",
      "phonetic": "/ˈkɑː.stɪk/",
      "pos": "adj",
      "tr": "yakıcı, zehir zemberek, iğneleyici",
      "contextDef": "Sarcastic in a scathing, bitter, and corrosive manner",
      "example": "His caustic commentary stripped away the politician’s pretense."
    },
    {
      "word": "sanctimonious",
      "phonetic": "/ˌsæŋk.təˈmoʊ.ni.əs/",
      "pos": "adj",
      "tr": "kendini beğenmiş, sahte dindarlık taslayan",
      "contextDef": "Making a show of being morally superior to other people",
      "example": "Satire targets sanctimonious posturing in public discourse."
    },
    {
      "word": "catharsis",
      "phonetic": "/kəˈθɑːr.sɪs/",
      "pos": "noun",
      "tr": "katarsis, arınma, rahatlama",
      "contextDef": "The process of releasing, and thereby providing relief from, strong or repressed emotions",
      "example": "Cynical laughter provided an empty emotional catharsis."
    },
    {
      "word": "domesticating",
      "phonetic": "/dəˈmes.tə.keɪ.t̬ɪŋ/",
      "pos": "verb",
      "tr": "ehlileştiren, uysallaştıran",
      "contextDef": "Taming, controlling, or adapting something unruly to serve conventional ends",
      "example": "Commercial television ends up domesticating genuine outrage."
    },
    {
      "word": "complicity",
      "phonetic": "/kəmˈplɪs.ə.t̬i/",
      "pos": "noun",
      "tr": "suç ortaklığı, işbirlikçilik",
      "contextDef": "The state of being involved with others in an illegal, unethical, or compromising activity",
      "example": "Irony masked a deeper complicity with the reigning establishment."
    }
  ],
  "questions": [
    {
      "id": "q-c2-05-1",
      "type": "main_idea",
      "typeTr": "Ana Fikir",
      "question": "What constitutes the “disquieting paradox” of modern satire analyzed in this text?",
      "options": [
        "Modern satirists do not make enough money from streaming platforms",
        "Instead of undermining power, mass-market satire often acts as a safety valve that discharges public outrage without causing real change",
        "Audiences have forgotten how to read Latin poetry from the era of Juvenal",
        "Politicians have become immune to humor because of speechwriters"
      ],
      "correctIndex": 1,
      "explanation": "Metnin ana fikri, kitlelere sunulan hicvin gücü sarsmak yerine izleyicinin ahlaki öfkesini tüketip onu ehlileştiren bir emniyet sübabı (safety valve) haline gelmesidir.",
      "evidenceSentence": "...far from subverting systemic iniquities, mass-market satire frequently functions as an ideological shock absorber."
    },
    {
      "id": "q-c2-05-2",
      "type": "detail",
      "typeTr": "Ayrıntı Bulma",
      "question": "What concept did theorist Mark Fisher coin to describe this consumerist mockery?",
      "options": [
        "Aesthetic indifference",
        "Cynical catharsis",
        "Revolutionary consciousness",
        "Authoritarian dissonance"
      ],
      "correctIndex": 1,
      "explanation": "Metinde Mark Fisher’ın tanımladığı kavram “cynical catharsis” (kinik katarsis) olarak geçmektedir.",
      "evidenceSentence": "...consumerist mockery generates what cultural theorist Mark Fisher identified as a cynical catharsis."
    },
    {
      "id": "q-c2-05-3",
      "type": "inference",
      "typeTr": "Çıkarım Yapma",
      "question": "Why does viewing television satire give viewers an “instantaneous, low-cost moral discharge”?",
      "options": [
        "Because viewers feel ethically superior and satisfied simply by laughing, thereby substituting comedy for political engagement",
        "Because viewers are required to donate money to political candidates during the broadcast",
        "Because the jokes are so simplistic that no mental effort is needed",
        "Because commercial television broadcasts are free of advertisements"
      ],
      "correctIndex": 0,
      "explanation": "İzleyici ekranda alay edilen politikacıdan kendisini daha üstün ve duyarlı hisseder, öfkesini gülerek boşaltır ve hiçbir somut direniş göstermeden rahatlar.",
      "evidenceSentence": "The viewer laughs, congratulates themselves on being intellectually superior... having discharged their ethical indignation without undertaking a single act of actual political resistance."
    },
    {
      "id": "q-c2-05-4",
      "type": "author_purpose",
      "typeTr": "Yazarın Amacı",
      "question": "What is the tone and critique of the author regarding modern irony?",
      "options": [
        "Celebratory of how jokes have toppled modern dictatorships",
        "Sobering, analytical critique of how ubiquitous irony neutralizes genuine radical dissent",
        "Humorous and lighthearted, imitating the late-night comedy format",
        "Pessimistic, demanding a total censorship of comedic arts"
      ],
      "correctIndex": 1,
      "explanation": "Yazar ironinin bir yaşam biçimi ve pazarlama aracına dönüşerek muhalefetin dişlerini nasıl söktüğünü derin ve eleştirel bir dille çözümler.",
      "evidenceSentence": "When irony becomes the lingua franca of the status quo, the radical sting of mockery is neutralized..."
    }
  ]
}
];

export function getReadingTextById(id: string): ReadingTextItem | undefined {
  return READING_TEXTS.find(t => t.id === id);
}

export function getReadingTextsByLevel(level: CEFRLevel): ReadingTextItem[] {
  return READING_TEXTS.filter(t => t.level === level);
}

export function getReadingTextsByCategory(category: ReadingCategory): ReadingTextItem[] {
  return READING_TEXTS.filter(t => t.category === category);
}

export function getRecommendedReading(currentLevel: CEFRLevel): ReadingTextItem {
  const levelTexts = getReadingTextsByLevel(currentLevel);
  return levelTexts[0] || READING_TEXTS[0];
}
