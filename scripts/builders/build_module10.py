# -*- coding: utf-8 -*-
"""
Builder for Module 10 (Lessons 91 to 100)
Level: A2: Geçmişte Süregelen Olaylar & Zaman Bağlaçları (Past Continuous & When/While)
100% bespoke, CEFR A2 compliant, zero generic templates, zero slop.
"""
import json
import os
import sys

sys.path.append('.')
from scripts.builders.module10_part1 import module10_part1_data
from scripts.builders.module10_part2 import module10_part2_data

def generate_module10():
    module10_data = {}
    module10_data.update(module10_part1_data)
    module10_data.update(module10_part2_data)

    print(f"Total lessons in Module 10: {len(module10_data)}")
    assert len(module10_data) == 10, f"Expected 10 lessons, got {len(module10_data)}"

    out_dir = "src/services/pedagogy/modules"
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "module10_lessons_91_100.ts")

    content = """// LinguAAI Pedagogical Content — Level A2: Module 10 (Lessons 91–100)
// Geçmişte Süregelen Olaylar & Zaman Bağlaçları: Past Continuous & When/While
// 100% bespoke, CEFR A2 compliant, zero generic templates.

import { TopicBlueprint } from '../pedagogicalEngine';

export const module10_lessons_91_100: Record<number, TopicBlueprint> = """ + json.dumps(module10_data, ensure_ascii=False, indent=2) + ";\n"

    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Module 10 written successfully to {out_file} with {len(module10_data)} lessons.")

if __name__ == "__main__":
    generate_module10()
