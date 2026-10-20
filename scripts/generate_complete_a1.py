import json
import os
import re

# Load curriculum
with open('curriculum_488_full.json', 'r', encoding='utf-8') as f:
    curriculum = json.load(f)

a1_lessons = {l['id']: l for l in curriculum if l['level'] == 'A1'}
print(f"Loaded {len(a1_lessons)} A1 lessons.")
