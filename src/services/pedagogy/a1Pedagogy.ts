// LinguAAI V6.0 — Dedicated Pedagogical Database for Level A1 (Lessons 1–80)
// 100% handcrafted, bespoke CEFR A1 compliant pedagogy across all 8 modules.
// Zero generic templates, zero slop.

import { TopicBlueprint } from '../pedagogicalEngine';
import { module1_lessons_1_10 } from './modules/module1_lessons_1_10';
import { module2_lessons_11_20 } from './modules/module2_lessons_11_20';
import { module3_lessons_21_30 } from './modules/module3_lessons_21_30';
import { module4_lessons_31_40 } from './modules/module4_lessons_31_40';
import { module5_lessons_41_50 } from './modules/module5_lessons_41_50';
import { module6_lessons_51_60 } from './modules/module6_lessons_51_60';
import { module7_lessons_61_70 } from './modules/module7_lessons_61_70';
import { module8_lessons_71_80 } from './modules/module8_lessons_71_80';

export const a1Blueprints: Record<number, TopicBlueprint> = {
  ...module1_lessons_1_10,
  ...module2_lessons_11_20,
  ...module3_lessons_21_30,
  ...module4_lessons_31_40,
  ...module5_lessons_41_50,
  ...module6_lessons_51_60,
  ...module7_lessons_61_70,
  ...module8_lessons_71_80,
};
