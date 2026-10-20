# LinguAAI V6.0 — Master Pedagogical Topic Rules & Domain Data Engine
# Provides rich, authentic, CEFR-aligned topic data for all 49 curriculum modules.

import re

def clean_t(title):
    t = re.sub(r'\s+[—–]\s+.*$', '', title).strip()
    return re.sub(r'\(.*\)', '', t).strip()

def strip_punc(w):
    return re.sub(r'[.,?!;:()\'"’]', '', w)

def make_available_words(target_en, distractors):
    words = [strip_punc(w) for w in target_en.split() if strip_punc(w)]
    res = []
    seen = set()
    for w in words:
        wl = w.lower()
        if wl not in seen:
            seen.add(wl)
            res.append(w)
    for d in distractors:
        dl = d.lower()
        if dl not in seen:
            seen.add(dl)
            res.append(d)
    return res

# Base vocabulary catalog by domain
VOCAB_CATALOG = {
    "greeting": [
        {"word": "Introduce", "phonetic": "/ˌɪn.trəˈdjuːs/", "partOfSpeech": "verb", "meaningTr": "Tanıtmak, tanıştırmak", "exampleSentence": "Allow me to introduce myself to the group."},
        {"word": "Pleasure", "phonetic": "/ˈpleʒ.ər/", "partOfSpeech": "noun", "meaningTr": "Zevk, memnuniyet", "exampleSentence": "It is a pleasure to meet you today."},
        {"word": "Surname", "phonetic": "/ˈsɜː.neɪm/", "partOfSpeech": "noun", "meaningTr": "Soyadı", "exampleSentence": "Could you please tell me your surname?"},
        {"word": "Originally", "phonetic": "/əˈrɪdʒ.ən.əl.i/", "partOfSpeech": "adverb", "meaningTr": "Aslen, köken olarak", "exampleSentence": "I am originally from Ankara, Turkey."}
    ],
    "alphabet": [
        {"word": "Alphabet", "phonetic": "/ˈæl.fə.bet/", "partOfSpeech": "noun", "meaningTr": "Alfabe", "exampleSentence": "There are 26 letters in the English alphabet."},
        {"word": "Vowel", "phonetic": "/ˈvaʊ.əl/", "partOfSpeech": "noun", "meaningTr": "Sesli harf (A, E, I, O, U)", "exampleSentence": "English has five written vowels."},
        {"word": "Consonant", "phonetic": "/ˈkɒn.sə.nənt/", "partOfSpeech": "noun", "meaningTr": "Sessiz harf", "exampleSentence": "The letter B is a consonant."},
        {"word": "Spell", "phonetic": "/spel/", "partOfSpeech": "verb", "meaningTr": "Harf harf söylemek / yazmak", "exampleSentence": "How do you spell your surname?"}
    ],
    "numbers": [
        {"word": "Number", "phonetic": "/ˈnʌm.bər/", "partOfSpeech": "noun", "meaningTr": "Sayı, numara", "exampleSentence": "Can you give me your phone number?"},
        {"word": "Thirteen", "phonetic": "/θɜːˈtiːn/", "partOfSpeech": "noun", "meaningTr": "On üç", "exampleSentence": "My sister is thirteen years old."},
        {"word": "Thirty", "phonetic": "/ˈθɜː.ti/", "partOfSpeech": "noun", "meaningTr": "Otuz", "exampleSentence": "The bus arrives in thirty minutes."},
        {"word": "Hundred", "phonetic": "/ˈhʌn.drəd/", "partOfSpeech": "noun", "meaningTr": "Yüz (100)", "exampleSentence": "There are one hundred pages in the book."}
    ],
    "pronouns": [
        {"word": "Subject", "phonetic": "/ˈsʌb.dʒɪkt/", "partOfSpeech": "noun", "meaningTr": "Özne", "exampleSentence": "Every complete English sentence needs a subject."},
        {"word": "Pronoun", "phonetic": "/ˈprəʊ.naʊn/", "partOfSpeech": "noun", "meaningTr": "Zamir", "exampleSentence": "He and she are third-person pronouns."},
        {"word": "Replace", "phonetic": "/rɪˈpleɪs/", "partOfSpeech": "verb", "meaningTr": "Yerine geçmek, değiştirmek", "exampleSentence": "Pronouns replace nouns to avoid repetition."},
        {"word": "Singular", "phonetic": "/ˈsɪŋ.ɡjə.lər/", "partOfSpeech": "adjective", "meaningTr": "Tekil", "exampleSentence": "The pronoun 'it' is third-person singular."}
    ],
    "countries": [
        {"word": "Country", "phonetic": "/ˈkʌn.tri/", "partOfSpeech": "noun", "meaningTr": "Ülke", "exampleSentence": "Which country are you from?"},
        {"word": "Nationality", "phonetic": "/ˌnæʃ.ənˈæl.ə.ti/", "partOfSpeech": "noun", "meaningTr": "Milliyet, uyruk", "exampleSentence": "My nationality is Turkish."},
        {"word": "Language", "phonetic": "/ˈlæŋ.ɡwɪdʒ/", "partOfSpeech": "noun", "meaningTr": "Dil, lisan", "exampleSentence": "English is a global language."},
        {"word": "Capital", "phonetic": "/ˈkæp.ɪ.təl/", "partOfSpeech": "noun", "meaningTr": "Başkent", "exampleSentence": "Ankara is the capital of Turkey."}
    ],
    "jobs": [
        {"word": "Occupation", "phonetic": "/ˌɒk.jəˈpeɪ.ʃən/", "partOfSpeech": "noun", "meaningTr": "Meslek, iş", "exampleSentence": "What is your current occupation?"},
        {"word": "Engineer", "phonetic": "/ˌen.dʒɪˈnɪər/", "partOfSpeech": "noun", "meaningTr": "Mühendis", "exampleSentence": "David works as a software engineer."},
        {"word": "Teacher", "phonetic": "/ˈtiː.tʃər/", "partOfSpeech": "noun", "meaningTr": "Öğretmen", "exampleSentence": "She is an experienced English teacher."},
        {"word": "Colleague", "phonetic": "/ˈkɒl.iːɡ/", "partOfSpeech": "noun", "meaningTr": "İş arkadaşı", "exampleSentence": "I had lunch with my new colleague today."}
    ],
    "time_calendar": [
        {"word": "Schedule", "phonetic": "/ˈʃedʒ.uːl/", "partOfSpeech": "noun", "meaningTr": "Program, takvim", "exampleSentence": "Check the flight schedule carefully."},
        {"word": "Quarter", "phonetic": "/ˈkwɔː.tər/", "partOfSpeech": "noun", "meaningTr": "Çeyrek (15 dakika)", "exampleSentence": "It is a quarter past three."},
        {"word": "Weekend", "phonetic": "/ˌwiːkˈend/", "partOfSpeech": "noun", "meaningTr": "Hafta sonu", "exampleSentence": "What are your plans for the weekend?"},
        {"word": "Calendar", "phonetic": "/ˈkæl.ən.dər/", "partOfSpeech": "noun", "meaningTr": "Takvim", "exampleSentence": "Mark the meeting date on your calendar."}
    ],
    "classroom": [
        {"word": "Instruction", "phonetic": "/ɪnˈstrʌk.ʃən/", "partOfSpeech": "noun", "meaningTr": "Yönerge, talimat", "exampleSentence": "Listen carefully to the teacher's instruction."},
        {"word": "Imperative", "phonetic": "/ɪmˈper.ə.tɪv/", "partOfSpeech": "noun", "meaningTr": "Emir kipi", "exampleSentence": "Stand up and open your book are imperatives."},
        {"word": "Attention", "phonetic": "/əˈten.ʃən/", "partOfSpeech": "noun", "meaningTr": "Dikkat", "exampleSentence": "Pay attention to the pronunciation details."},
        {"word": "Politely", "phonetic": "/pəˈlaɪt.li/", "partOfSpeech": "adverb", "meaningTr": "Kibarca, nazikçe", "exampleSentence": "Always ask questions politely in class."}
    ],
    "politeness": [
        {"word": "Courteous", "phonetic": "/ˈkɜː.ti.əs/", "partOfSpeech": "adjective", "meaningTr": "Kibar, saygılı", "exampleSentence": "He gave a courteous reply to the customer."},
        {"word": "Appreciate", "phonetic": "/əˈpriː.ʃi.eɪt/", "partOfSpeech": "verb", "meaningTr": "Takdir etmek, müteşekkir olmak", "exampleSentence": "I appreciate your generous assistance."},
        {"word": "Apologize", "phonetic": "/əˈpɒl.ə.dʒaɪz/", "partOfSpeech": "verb", "meaningTr": "Özür dilemek", "exampleSentence": "I apologize for being five minutes late."},
        {"word": "Welcome", "phonetic": "/ˈwel.kəm/", "partOfSpeech": "phrase", "meaningTr": "Rica ederim, hoş geldiniz", "exampleSentence": "You are always welcome here."}
    ]
}

print("Loaded base vocab catalog.")
