# LinguAAI V6.0 — Master Domain Pedagogy Engine for All 488 Curriculum Lessons
# Provides authentic, topic-accurate pedagogical blueprints with zero generic templates.

import re
from .common import clean_t, make_available_words

def get_lesson_domain(lid, level, title, module, subtopic):
    full = f"{title} {module} {subtopic}".lower()
    
    def has(*terms):
        return any(t in full for t in terms)

    # Level A1 domains
    if lid == 1 or has("tanışma", "kendini tanıtma"): return "greetings"
    if lid == 2 or has("alfabe", "spelling", "harf kodlama"): return "alphabet"
    if lid == 3 or has("sayılar", "yaş ve telefon"): return "numbers_age"
    if lid == 4 or (has("kişi zamir", "subject pronoun") and not has("nesne", "iyelik")): return "subject_pronouns"
    if lid == 5 or has("ülkeler", "milliyetler", "diller"): return "countries"
    if lid == 6 or has("meslekler ve günlük", "meslekler ve çalışma"): return "jobs_professions"
    if lid == 7 or has("günler, aylar", "mevsimler"): return "days_months"
    if lid == 8 or has("saatler ve zaman", "what time is it"): return "clocks_time"
    if lid == 9 or has("sınıf ve günlük", "imperative", "yönerge"): return "imperatives"
    if lid == 10 or has("nezaket kuralları", "sosyal formül"): return "politeness"
    if lid in (11, 12, 13) or has("to be (am / is / are)", "to be: olumsuz", "to be: soru"): return "to_be"
    if lid in (14, 15) or has("there is & there are", "there is / are"): return "there_is_are"
    if lid == 16 or has("konum edatları", "in, on, under", "behind"): return "prepositions_place"
    if lid == 17 or has("renkler ve temel niteleme"): return "colors_adjectives"
    if lid == 18 or has("duygular ve fiziksel"): return "feelings_emotions"
    if lid == 19 or has("hava durumu ve sıcaklık"): return "weather"
    if lid == 20 or has("evim ve odamı"): return "home_rooms"
    if lid in (21, 22, 23, 24) or has("geniş zaman", "present simple", "-s/-es/-ies"): return "present_simple"
    if lid == 25 or has("sıklık zarfları", "always, usually"): return "frequency_adverbs"
    if lid in (26, 27) or has("rutini fiilleri", "akşam rutinleri"): return "daily_routines"
    if lid == 28 or has("zaman edatları: at, on, in"): return "prepositions_time"
    if lid == 29 or has("hobiler", "like / love + v-ing"): return "hobbies"
    if lid == 30 or has("bir günümü baştan"): return "routine_integration"
    if lid in (31, 32) or has("this & that", "these & those", "işaret sıfatları"): return "demonstratives"
    if lid in (33, 34) or has("çoğul isimler", "düzenli çoğul", "düzensiz çoğul"): return "plural_nouns"
    if lid in (35, 36) or has("iyelik sıfatları", "apostrophe 's"): return "possession"
    if lid in (37, 38) or has("have got / has got", "have / has ile sahiplik"): return "have_got"
    if lid == 39 or has("aile bireyleri"): return "family"
    if lid == 40 or has("kişisel eşyalar ve aile"): return "family_integration"
    if lid in range(41, 51) or has("wh- soruları", "how often", "how many", "how much"): return "wh_questions"
    if lid in range(51, 61) or has("can & can't", "can ile", "yetenek", "may i"): return "can_ability"
    if lid in range(61, 71) or has("present continuous", "şimdiki zaman", "stative verbs"): return "present_continuous"
    if lid in range(71, 81) or has("countable", "sayılabilen", "some ve any", "much, many", "restoranda sipariş", "giysiler"): return "food_shopping"

    # Level A2 domains (81-170)
    if lid in range(81, 91) or has("geçmiş zaman", "past simple", "düzenli fiiller", "düzensiz fiiller", "did yardımcı"): return "past_simple"
    if lid in range(91, 101) or has("past continuous", "geçmişte süregelen", "when & while", "when / while"): return "past_continuous"
    if lid in range(101, 111) or has("comparative", "superlative", "karşılaştırma", "üstünlük", "as... as"): return "comparatives"
    if lid in range(111, 121) or has("going to", "will ile", "gelecek planları", "tahminler"): return "future_forms"
    if lid in range(121, 131) or has("have to", "must", "should", "zorunluluk", "tavsiye"): return "modals_obligation"
    if lid in range(131, 141) or has("present perfect", "have/has + v3", "ever, never", "just", "already", "yet"): return "present_perfect_basic"
    if lid in range(141, 151) or has("seyahat", "havalimanında", "yol ve yön", "bilet alma", "otel"): return "travel_directions"
    if lid in range(151, 161) or has("too (aşırı)", "enough", "belgisiz zamirler", "nesne zamirleri", "dönüşlü zamirler"): return "quantifiers_pronouns"
    if lid in range(161, 171) or has("a2 kapsamlı", "a2 seviye sonu", "a2 iletişimsel"): return "a2_synthesis"

    # Level B1 domains (171-270)
    if lid in range(171, 181) or has("present perfect vs past simple", "zaman vurgusu karşılaştırması"): return "perfect_vs_past"
    if lid in range(181, 191) or has("present perfect continuous", "for/since", "for & since", "süreç ve etki"): return "present_perfect_cont"
    if lid in range(191, 201) or has("used to", "would", "eski alışkanlıklar", "geçmiş haller"): return "used_to_would"
    if lid in range(201, 211) or has("relative clause", "tanımlayıcı ilgi", "who ve that", "defining"): return "relative_clauses"
    if lid in range(211, 221) or has("zero conditional", "first conditional", "second conditional", "koşul cümleleri"): return "conditionals_b1"
    if lid in range(221, 231) or has("reported speech", "dolaylı anlatım", "say vs tell", "indirect question"): return "reported_speech"
    if lid in range(231, 241) or has("passive voice", "edilgen çatı", "be + v3", "by + agent"): return "passive_voice"
    if lid in range(241, 251) or has("may, might", "could", "ihtimal ve çıkarım", "modal fiillerle"): return "modals_deduction_b1"
    if lid in range(251, 261) or has("iş dünyası", "özgeçmiş", "mülakat becerileri", "cv"): return "business_b1"
    if lid in range(261, 271) or has("b1 bağımsız", "fikir savunma", "fikir belirtme zarfları"): return "b1_synthesis"

    # Level B2 domains (271-370)
    if lid in range(271, 281) or has("third conditional", "mixed conditional", "ileri koşul"): return "conditionals_b2"
    if lid in range(281, 291) or has("causative", "ettirgen", "have / get something done", "advanced passive"): return "causatives"
    if lid in range(291, 301) or has("must have", "can't have", "geçmişe dair modal", "modal deduction"): return "past_modals"
    if lid in range(301, 311) or has("wish", "if only", "keşkeler", "varsayımlar"): return "wish_hypothetical"
    if lid in range(311, 321) or has("non-defining", "participle clause", "virgül arası"): return "participle_clauses"
    if lid in range(321, 331) or has("inversion", "devrik", "vurgu stratejileri", "seldom", "hardly"): return "inversion"
    if lid in range(331, 341) or has("cohesion", "discourse", "akademik ve profesyonel bağlaçlar", "however"): return "discourse_markers"
    if lid in range(341, 351) or has("e-posta diplomasisi", "müzakere", "softening", "yumuşatma"): return "email_negotiation"
    if lid in range(351, 361) or has("phrasal verb", "iş hayatında deyimler", "think outside the box"): return "phrasal_idioms"
    if lid in range(361, 371) or has("b2 akıcı", "medya analizi", "seviye sentezi"): return "b2_synthesis"

    # Level C1 domains (371-450)
    if lid in range(371, 381) or has("subjunctive", "istek kipi", "yalın fiil zorunluluğu"): return "subjunctive"
    if lid in range(381, 391) or has("cleft sentence", "fronting", "bölünmüş cümle", "odak ve vurgu"): return "cleft_fronting"
    if lid in range(391, 401) or has("hedging", "akademik mesafelenme", "stance", "önlem"): return "hedging"
    if lid in range(401, 411) or has("kavramsal metafor", "ileri deyimsel", "kollokasyon"): return "metaphor_collocation"
    if lid in range(411, 421) or has("karmaşık argüman", "eleştirel düşünce", "critical thinking"): return "argument_synthesis"
    if lid in range(421, 431) or has("retorik", "üçleme kuralı", "tricolon", "hitabet", "ethos"): return "rhetoric_oratory"
    if lid in range(431, 441) or has("pragmatik", "grice", "conversational implicature", "ima ve alt metin"): return "pragmatics"
    if lid in range(441, 451) or has("c1 ileri düzey", "c1 advanced yeterlilik", "söylem bütünlüğü"): return "c1_synthesis"

    # Level C2 domains (451-488)
    if lid in range(451, 461) or has("üslup değişimi", "stylistic shift", "edebi düzyazı", "aforizma"): return "stylistic_shift"
    if lid in range(461, 471) or has("ironi", "hiciv", "understatement", "satire", "deadpan"): return "irony_satire"
    if lid in range(471, 481) or has("hukuk", "latince", "force majeure", "felsefi", "paradoks"): return "legal_philosophical"
    if lid in range(481, 489) or has("spontane hitabet", "simültane", "c2 ustalık", "mastery"): return "c2_mastery"

    return "general_pedagogy"

print("Domain classifier ready.")
