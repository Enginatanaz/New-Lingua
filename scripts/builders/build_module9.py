# -*- coding: utf-8 -*-
"""
Builder for Module 9 (Lessons 81 to 90)
Level: A2: Geçmiş Zaman: Düzenli ve Düzensiz Fiiller (Past Simple)
100% bespoke, CEFR A2 compliant, zero generic templates, zero slop.
"""
import json
import os
import sys

sys.path.append('.')
from scripts.builders.module9_part1 import module9_part1_data
from scripts.builders.module9_part2 import module9_part2_data

def generate_module9():
    module9_data = {}
    module9_data.update(module9_part1_data)
    module9_data.update(module9_part2_data)

    print(f"Total lessons in Module 9: {len(module9_data)}")
    assert len(module9_data) == 10, f"Expected 10 lessons, got {len(module9_data)}"

    out_dir = "src/services/pedagogy/modules"
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "module9_lessons_81_90.ts")

    content = """// LinguAAI Pedagogical Content — Level A2: Module 9 (Lessons 81–90)
// Geçmiş Zaman: Düzenli ve Düzensiz Fiiller (Past Simple)
// 100% bespoke, CEFR A2 compliant, zero generic templates.

import { TopicBlueprint } from '../pedagogicalEngine';

export const module9_lessons_81_90: Record<number, TopicBlueprint> = """ + json.dumps(module9_data, ensure_ascii=False, indent=2) + ";\n"

    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Module 9 written successfully to {out_file} with {len(module9_data)} lessons.")

if __name__ == "__main__":
    generate_module9()
