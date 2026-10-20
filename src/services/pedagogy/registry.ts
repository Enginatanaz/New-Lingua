// LinguAAI V6.0 — Master Pedagogical Blueprint Registry
import { TopicBlueprint } from '../pedagogicalEngine';
import { a1Blueprints } from './a1Pedagogy';
import { a2Blueprints } from './a2Pedagogy';
import { b1Blueprints } from './b1Pedagogy';
import { b2Blueprints } from './b2Pedagogy';
import { c1Blueprints } from './c1Pedagogy';
import { c2Blueprints } from './c2Pedagogy';

import { getBespokeBlackboard } from './blackboards/blackboardIndex';

export const ALL_BLUEPRINTS: Record<number, TopicBlueprint> = {
  ...a1Blueprints,
  ...a2Blueprints,
  ...b1Blueprints,
  ...b2Blueprints,
  ...c1Blueprints,
  ...c2Blueprints,
};

export function getRegisteredBlueprint(id: number): TopicBlueprint | undefined {
  const bp = ALL_BLUEPRINTS[id];
  if (!bp) return undefined;
  if (!bp.blackboard) {
    const bb = getBespokeBlackboard(id);
    if (bb) {
      bp.blackboard = bb;
    }
  }
  return bp;
}
