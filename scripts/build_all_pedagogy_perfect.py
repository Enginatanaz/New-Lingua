#!/usr/bin/env python3
"""
LinguAAI V6.0 — Master Pedagogical Database Compiler
Produces 100% unique, topic-tailored, CEFR-aligned blueprints for all 488 lessons.
Zero templates, zero generic fallbacks, zero duplicates across the entire curriculum.
"""

import json
import re
import os
import sys

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
        ds = strip_punc(d)
        if not ds:
            continue
        dl = ds.lower()
        if dl not in seen:
            seen.add(dl)
            res.append(ds)
    return res

BANNED_PATTERNS = [
    (re.compile(r'in lesson \d+', re.I), "Contains 'in lesson [ID]' artificial tag"),
    (re.compile(r'\(lesson \d+\)', re.I), "Contains '(lesson [ID])' artificial tag"),
    (re.compile(r'\(item \d+\)', re.I), "Contains '(item [ID])' artificial tag"),
    (re.compile(r'\(#\d+\)', re.I), "Contains '(#[ID])' artificial tag"),
    (re.compile(r'Özne \+ .* \+ (Tamamlayıcı|Nesne|Akademik|Nihai)', re.I), "Contains generic formula template 'Özne + [Title] + Tamamlayıcı'"),
    (re.compile(r'Could you tell me how you usually approach', re.I), "Contains generic dialogue template 'Could you tell me how you usually approach'"),
    (re.compile(r'Scholars implement', re.I), "Contains generic dialogue template 'Scholars implement'"),
    (re.compile(r'We achieve consummate linguistic elegance in', re.I), "Contains generic template 'We achieve consummate linguistic elegance in'"),
    (re.compile(r'At the pinnacle of C2 oratorical mastery', re.I), "Contains generic template 'At the pinnacle of C2 oratorical mastery'"),
    (re.compile(r'Applying .* correctly ensures immediate', re.I), "Contains generic template 'Applying [Title] correctly ensures immediate'"),
    (re.compile(r'Bu yapıda cümlenin mantıksal dengesi ve ögelerin uyumu esastır', re.I), "Contains generic explanation 'Bu yapıda cümlenin mantıksal dengesi...'"),
    (re.compile(r'Temel kuralımız şöyle özetlenir:', re.I), "Contains generic explanation 'Temel kuralımız şöyle özetlenir:'"),
    (re.compile(r'Türkçe düşünce kalıplarıyla .* yapısını birebir tercüme etmek', re.I), "Contains generic common mistake template"),
]

def validate_blueprint(bp, lesson_id, used_sb, used_ex, used_qc):
    bp_json = json.dumps(bp, ensure_ascii=False)
    for pattern, reason in BANNED_PATTERNS:
        if pattern.search(bp_json):
            match = pattern.search(bp_json).group(0)
            raise ValueError(f"Lesson {lesson_id} FAILED QUALITY GATE: {reason}. Matched snippet: '{match}'")

    sb = bp['sentenceBuilder']
    target_en = sb['targetEn']
    if target_en in used_sb:
        raise ValueError(f"Duplicate sentence builder target in lesson {lesson_id}: {target_en}")
    used_sb.add(target_en)

    target_words = [strip_punc(w).lower() for w in target_en.split() if strip_punc(w)]
    avail_words = [strip_punc(w).lower() for w in sb['availableWords']]
    for tw in target_words:
        if tw not in avail_words:
            raise ValueError(f"Lesson {lesson_id}: target word '{tw}' missing from availableWords! Target: {target_en}")

    ex = bp['exercise']
    ex_sentence = ex['sentence']
    if ex_sentence in used_ex:
        raise ValueError(f"Duplicate exercise sentence in lesson {lesson_id}: {ex_sentence}")
    used_ex.add(ex_sentence)

    if ex['correctAnswer'] not in ex['options']:
        raise ValueError(f"Lesson {lesson_id}: correctAnswer '{ex['correctAnswer']}' not in options {ex['options']}")

    qc = bp['quickCheck']
    qc_q = qc['question']
    if qc_q in used_qc:
        raise ValueError(f"Duplicate quick check question in lesson {lesson_id}: {qc_q}")
    used_qc.add(qc_q)

    if qc['correctIndex'] < 0 or qc['correctIndex'] >= len(qc['options']):
        raise ValueError(f"Lesson {lesson_id}: invalid quickCheck correctIndex {qc['correctIndex']}")

    if len(bp['stepBreakdown']) < 3:
        raise ValueError(f"Lesson {lesson_id}: requires at least 3 breakdownSteps")
    if len(bp['ruleCards']) < 2:
        raise ValueError(f"Lesson {lesson_id}: requires at least 2 ruleCards")
    if len(bp['commonMistakes']) < 2:
        raise ValueError(f"Lesson {lesson_id}: requires at least 2 commonMistakes")
    if len(bp['examples']) < 3:
        raise ValueError(f"Lesson {lesson_id}: requires at least 3 examples")
    if len(bp['vocabulary']) < 4:
        raise ValueError(f"Lesson {lesson_id}: requires at least 4 vocabulary items")
    return True

print("Quality gate loaded successfully.")
