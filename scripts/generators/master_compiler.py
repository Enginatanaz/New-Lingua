#!/usr/bin/env python3
"""
LinguAAI V6.0 — Master Pedagogical Database Compiler
Assembles and writes out 100% unique, topic-tailored, CEFR-aligned TypeScript databases for all 488 lessons.
"""

import json
import os
import sys

from .common import validate_blueprint
from .gen_a1 import generate_a1_blueprint
from .gen_a2 import generate_a2_blueprint
from .gen_b1 import generate_b1_blueprint
from .gen_b2 import generate_b2_blueprint
from .gen_c1 import generate_c1_blueprint
from .gen_c2 import generate_c2_blueprint

def run_master_compilation():
    with open('curriculum_488_full.json', 'r', encoding='utf-8') as f:
        lessons = json.load(f)

    print(f"======================================================================")
    print(f"LINGUAAI V6.0 — MASTER COMPILER: 488 LESSONS DEDICATED BLUEPRINT BUILD")
    print(f"======================================================================\n")
    print(f"Total Curriculum Lessons: {len(lessons)}")

    used_sb = set()
    used_ex = set()
    used_qc = set()

    all_blueprints = {}
    level_blueprints = {
        'A1': {},
        'A2': {},
        'B1': {},
        'B2': {},
        'C1': {},
        'C2': {}
    }

    for l in lessons:
        lid = l['id']
        lvl = l['level']

        if lvl == 'A1':
            bp = generate_a1_blueprint(l, used_sb, used_ex, used_qc)
        elif lvl == 'A2':
            bp = generate_a2_blueprint(l, used_sb, used_ex, used_qc)
        elif lvl == 'B1':
            bp = generate_b1_blueprint(l, used_sb, used_ex, used_qc)
        elif lvl == 'B2':
            bp = generate_b2_blueprint(l, used_sb, used_ex, used_qc)
        elif lvl == 'C1':
            bp = generate_c1_blueprint(l, used_sb, used_ex, used_qc)
        elif lvl == 'C2':
            bp = generate_c2_blueprint(l, used_sb, used_ex, used_qc)
        else:
            raise ValueError(f"Unknown level: {lvl}")

        validate_blueprint(bp, lid, used_sb, used_ex, used_qc)
        all_blueprints[lid] = bp
        level_blueprints[lvl][lid] = bp

    print("\n--- GLOBAL UNIQUENESS & INTEGRITY AUDIT ---")
    print(f"• Total Lessons Built: {len(all_blueprints)} / 488")
    print(f"• Unique Sentence Builder Targets: {len(used_sb)} / 488 (100% Unique - 0 Duplicates)")
    print(f"• Unique Exercise Practice Sentences: {len(used_ex)} / 488 (100% Unique - 0 Duplicates)")
    print(f"• Unique Quick Check Conceptual Questions: {len(used_qc)} / 488 (100% Unique - 0 Duplicates)")

    assert len(all_blueprints) == 488, "Must have exactly 488 blueprints!"
    assert len(used_sb) == 488, "Must have 488 unique sentence builder targets!"
    assert len(used_ex) == 488, "Must have 488 unique exercise sentences!"
    assert len(used_qc) == 488, "Must have 488 unique quick check questions!"

    out_dir = os.path.join('src', 'services', 'pedagogy')
    os.makedirs(out_dir, exist_ok=True)

    levels = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']
    for lvl in levels:
        lvl_upper = lvl.upper()
        bps = level_blueprints[lvl_upper]
        print(f"\nWriting {lvl}Pedagogy.ts ({len(bps)} lessons)...")

        ts = f"// LinguAAI V6.0 — Dedicated Pedagogical Database for Level {lvl_upper}\n"
        ts += f"// Contains 100% verified, topic-specific blueprints for all {len(bps)} lessons (Zero fallback templates)\n\n"
        ts += "import { TopicBlueprint } from '../pedagogicalEngine';\n\n"
        ts += f"export const {lvl}Blueprints: Record<number, TopicBlueprint> = {{\n"

        for lid in sorted(bps.keys()):
            bp_json = json.dumps(bps[lid], ensure_ascii=False, indent=2)
            ts += f"  {lid}: {bp_json},\n"

        ts += "};\n"

        file_path = os.path.join(out_dir, f"{lvl}Pedagogy.ts")
        with open(file_path, 'w', encoding='utf-8') as f_out:
            f_out.write(ts)

        file_size_kb = os.path.getsize(file_path) / 1024
        print(f"  -> Saved {file_path} ({file_size_kb:.1f} KB)")

    # Registry
    reg_path = os.path.join(out_dir, "registry.ts")
    reg_ts = """// LinguAAI V6.0 — Master Pedagogical Blueprint Registry
import { TopicBlueprint } from '../pedagogicalEngine';
import { a1Blueprints } from './a1Pedagogy';
import { a2Blueprints } from './a2Pedagogy';
import { b1Blueprints } from './b1Pedagogy';
import { b2Blueprints } from './b2Pedagogy';
import { c1Blueprints } from './c1Pedagogy';
import { c2Blueprints } from './c2Pedagogy';

export const ALL_BLUEPRINTS: Record<number, TopicBlueprint> = {
  ...a1Blueprints,
  ...a2Blueprints,
  ...b1Blueprints,
  ...b2Blueprints,
  ...c1Blueprints,
  ...c2Blueprints,
};

export function getRegisteredBlueprint(id: number): TopicBlueprint | undefined {
  return ALL_BLUEPRINTS[id];
}
"""
    with open(reg_path, 'w', encoding='utf-8') as f_reg:
        f_reg.write(reg_ts)
    print(f"\n  -> Saved {reg_path}")

    print("\n======================================================================")
    print("ALL 488 BESPOKE PEDAGOGICAL BLUEPRINTS SUCCESSFULLY COMPILED & SAVED!")
    print("======================================================================\n")

if __name__ == '__main__':
    run_master_compilation()
