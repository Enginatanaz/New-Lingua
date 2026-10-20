import json

with open('curriculum_488_full.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f)

a1_lessons = [l for l in lessons if l['level'] == 'A1']
print(f"Loaded {len(a1_lessons)} A1 lessons.")
