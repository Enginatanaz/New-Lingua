import sys
sys.path.append('.')
from scripts.generators.common import make_available_words, validate_blueprint

print("Testing quality validator with a clean sample blueprint...")

sample_bp = {
    "skillType": "vocabulary",
    "concreteCompetency": "A1 standardında temel tanışma ifadelerini kullanarak kendini tanıtabilmek.",
    "whyItMatters": "Tanışma ifadeleri yabancı dilde ilk temasın ve iletişimin evrensel başlangıç noktasıdır.",
    "linguisticLogic": "İngilizcede tanışırken doğrudan soru sormak yerine önce selamlaşma ve kendini tanıtma jesti yapılır.",
    "stepBreakdown": [
        {"title": "1. Adım: Selamlaşma", "content": "I am veya My name is ile başlanır.", "formula": "Hello! My name is [İsim]"},
        {"title": "2. Adım: Ad Sorma", "content": "Nezaketle soru sorulur.", "formula": "What is your name?"},
        {"title": "3. Adım: Memnuniyet", "content": "Tanışma tamamlanırken söylenir.", "formula": "Nice to meet you!"}
    ],
    "ruleCards": [
        {"ruleTitle": "Temel Tanışma Zinciri", "formula": "Hello -> What is your name? -> Nice to meet you!", "explanation": "Doğal akış sağlar."},
        {"ruleTitle": "İsim Bildirimi", "formula": "My name is ... / I am ...", "explanation": "Doğru şahıs zamiri kullanılır."}
    ],
    "commonMistakes": [
        {"wrongExample": "I name is David.", "correctExample": "My name is David.", "rootCause": "Zamir hatası.", "memoryTip": "My name!"},
        {"wrongExample": "Nice to meet you -> Me too.", "correctExample": "Nice to meet you -> Nice to meet you, too.", "rootCause": "Eksik kalıp.", "memoryTip": "Sonuna too ekle!"}
    ],
    "realWorldContext": {
        "scenarioTitle": "İlk Gün Tanışması",
        "description": "Öğrenciler tanışır.",
        "contextType": "daily",
        "dialogue": [
            {"speaker": "David", "textEn": "Hello! My name is David. What is your name?", "textTr": "Merhaba! Benim adım David. Adınız nedir?"},
            {"speaker": "Sarah", "textEn": "Hi David! I am Sarah. Nice to meet you.", "textTr": "Selam David! Ben Sarah. Tanıştığıma memnun oldum."},
            {"speaker": "David", "textEn": "Nice to meet you, too, Sarah.", "textTr": "Ben de memnun oldum Sarah."}
        ]
    },
    "contrastiveAnalysis": {
        "conceptA": "Türkçe Tanışma",
        "conceptB": "İngilizce Tanışma",
        "keyDifference": "Memnun oldum tek fiil, Nice to meet you kalıptır.",
        "exampleA": "Tanıştığıma memnun oldum.",
        "exampleB": "Nice to meet you."
    },
    "memoryHook": "Hello + My name is + Nice to meet you!",
    "examples": [
        {"en": "Hello, my name is Lisa.", "tr": "Merhaba, benim adım Lisa.", "highlightedWords": ["Hello", "my name is"], "grammarCategory": "Tanışma", "contextNote": "Tanışma", "breakdownNote": "Selam + isim"},
        {"en": "What is your name, please?", "tr": "Adınız nedir lütfen?", "highlightedWords": ["What is your name"], "grammarCategory": "Soru", "contextNote": "Soru", "breakdownNote": "Soru"},
        {"en": "It is a pleasure to meet you.", "tr": "Tanışmak bir zevk.", "highlightedWords": ["pleasure to meet you"], "grammarCategory": "Nezaket", "contextNote": "Nezaket", "breakdownNote": "Nezaket"}
    ],
    "vocabulary": [
        {"word": "Introduce", "phonetic": "/ˌɪn.trəˈdjuːs/", "partOfSpeech": "verb", "meaningTr": "Tanıtmak", "exampleSentence": "Allow me to introduce myself."},
        {"word": "Pleasure", "phonetic": "/ˈpleʒ.ər/", "partOfSpeech": "noun", "meaningTr": "Zevk", "exampleSentence": "It is a pleasure to meet you."},
        {"word": "Surname", "phonetic": "/ˈsɜː.neɪm/", "partOfSpeech": "noun", "meaningTr": "Soyadı", "exampleSentence": "What is your surname?"},
        {"word": "Welcome", "phonetic": "/ˈwel.kəm/", "partOfSpeech": "phrase", "meaningTr": "Hoş geldiniz", "exampleSentence": "You are welcome."}
    ],
    "quickCheck": {
        "question": "Biri size 'Nice to meet you' dediğinde verilecek en kibar ve doğru karşılık hangisidir?",
        "options": ["Nice to meet you, too!", "Yes, I am fine.", "My name is John.", "Good night, see you."],
        "correctIndex": 0,
        "explanation": "Sonuna too eklenir."
    },
    "exercise": {
        "prompt": "Boşluğu tamamlayın:",
        "sentence": "Hello, my name is Alex. ___ to meet you!",
        "options": ["Nice", "Well", "Fine", "Goodly"],
        "correctAnswer": "Nice",
        "hint": "Tanışma kalıbı.",
        "explanation": "Nice to meet you."
    },
    "sentenceBuilder": {
        "promptTr": "Merhaba benim adım David ve ben bir öğretmenim.",
        "targetEn": "Hello my name is David and I am a teacher",
        "availableWords": make_available_words("Hello my name is David and I am a teacher", ["are", "you", "from", "she"]),
        "explanation": "Selam + isim + meslek."
    },
    "summaryTakeaways": [
        "Kendinizi tanıtırken My name is kullanın.",
        "Ad sorarken What is your name deyin.",
        "Nice to meet you too ile karşılık verin."
    ]
}

used_sb = set()
used_ex = set()
used_qc = set()

validate_blueprint(sample_bp, 1, used_sb, used_ex, used_qc)
print("Validation succeeded! Blueprint is clean and adheres to all strict quality gates.")
