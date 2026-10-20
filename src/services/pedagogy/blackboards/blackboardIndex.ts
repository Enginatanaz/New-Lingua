// LinguAAI V8.0 — Master Blackboard Registry for Lessons 1–100
// Unifies the 100% handcrafted bespoke pedagogical blackboard datasets for all 100 lessons.

import { TeacherBlackboardData } from '../../../types/lesson';
import { BLACKBOARDS_1_TO_20 } from './blackboards_1_20';
import { BLACKBOARDS_21_TO_40 } from './blackboards_21_40';
import { BLACKBOARDS_41_TO_60 } from './blackboards_41_60';
import { BLACKBOARDS_61_TO_80 } from './blackboards_61_80';
import { BLACKBOARDS_81_TO_100 } from './blackboards_81_100';

export const ALL_100_BESPOKE_BLACKBOARDS: Record<number, TeacherBlackboardData> = {
  ...BLACKBOARDS_1_TO_20,
  ...BLACKBOARDS_21_TO_40,
  ...BLACKBOARDS_41_TO_60,
  ...BLACKBOARDS_61_TO_80,
  ...BLACKBOARDS_81_TO_100,
};

/**
 * Retrieves the bespoke, topic-accurate blackboard for lessons 1 to 100.
 */
export function getBespokeBlackboard(lessonId: number): TeacherBlackboardData | undefined {
  return ALL_100_BESPOKE_BLACKBOARDS[lessonId];
}

/**
 * Checks if a lesson has a bespoke blackboard registered.
 */
export function hasBespokeBlackboard(lessonId: number): boolean {
  return lessonId in ALL_100_BESPOKE_BLACKBOARDS;
}
