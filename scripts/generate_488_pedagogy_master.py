#!/usr/bin/env python3
"""
LinguAAI V6.0 — Master Dedicated Pedagogical Engine Generator
Generates 100% unique, topic-tailored, CEFR-aligned blueprints for all 488 lessons.
Zero templates, zero fallbacks, zero duplicated sentence builder targets or exercise sentences.
"""

import json
import re
import os
import sys

with open('curriculum_488_full.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f)

print(f"Loaded {len(lessons)} curriculum lessons.")

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

# Global trackers to strictly enforce 0 duplication
used_sb_targets = set()
used_ex_sentences = set()
used_qc_questions = set()

print("Setting up topic generator...")
