import json

with open('curriculum_488_full.json', 'r', encoding='utf-8') as f:
    lessons = json.load(f)

print("Curriculum loaded successfully.")
