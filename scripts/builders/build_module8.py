# -*- coding: utf-8 -*-
"""
Builder for Module 8 (Lessons 71 to 80)
"""
import os
import json
import sys

sys.path.append('.')
from scripts.builders.module8_part1 import module8_part1_data
from scripts.builders.module8_part2 import module8_part2_data

def generate_module8():
    module8_data = {}
    module8_data.update(module8_part1_data)
    module8_data.update(module8_part2_data)

    print(f"Total lessons in Module 8: {len(module8_data)}")
    assert len(module8_data) == 10, f"Expected 10 lessons, got {len(module8_data)}"

    out_dir = "src/services/pedagogy/modules"
    os.makedirs(out_dir, exist_ok=True)
    out_file = os.path.join(out_dir, "module8_lessons_71_80.ts")

    content = """// LinguAAI Pedagogical Content — Level A1: Module 8 (Lessons 71–80)
// Yiyecek, İçecek ve Miktar Belirteçleri: Countable & Uncountable, Quantifiers, Ordering Food
// 100% bespoke, CEFR A1 compliant, zero generic templates.

import { TopicBlueprint } from '../pedagogicalEngine';

export const module8_lessons_71_80: Record<number, TopicBlueprint> = """ + json.dumps(module8_data, ensure_ascii=False, indent=2) + ";\n"

    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Module 8 written successfully to {out_file} with {len(module8_data)} lessons.")

if __name__ == "__main__":
    generate_module8()
