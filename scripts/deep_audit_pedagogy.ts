import { ALL_BLUEPRINTS } from '../src/services/pedagogy/registry';
import { getFullCurriculumLessons } from '../src/data/curriculumData';

const lessons = getFullCurriculumLessons();
console.log(`Total lessons in curriculum: ${lessons.length}`);
console.log(`Total blueprints in registry: ${Object.keys(ALL_BLUEPRINTS).length}`);

// Check specific patterns
const patterns = [
  'in lesson',
  '(lesson',
  '(#',
  'Özne + ',
  'Temel kuralımız',
  'Bu yapıda cümlenin mantıksal',
  'L1 Transfer',
  'Lego parçası',
  'Could you tell me how you usually approach',
  'Clear understanding of',
  'Learners comprehend the underlying logic',
  'express their thoughts',
  'Regular practice is the most reliable way',
  'çeviri yapma tuzakları'
];

const counts: Record<string, number> = {};
patterns.forEach(p => counts[p] = 0);

const lessonMatches: Record<string, number[]> = {};
patterns.forEach(p => lessonMatches[p] = []);

for (const l of lessons) {
  const bp = ALL_BLUEPRINTS[l.id];
  if (!bp) continue;
  const str = JSON.stringify(bp);
  patterns.forEach(p => {
    if (str.includes(p)) {
      counts[p]++;
      lessonMatches[p].push(l.id);
    }
  });
}

console.log('\n--- PATTERN OCCURRENCES ACROSS BLUEPRINTS ---');
patterns.forEach(p => {
  console.log(`Pattern "${p}": found in ${counts[p]} lessons. Example IDs: ${lessonMatches[p].slice(0, 5).join(', ')}`);
});

// Let's sample a few lessons from different levels:
const sampleIds = [1, 4, 6, 7, 15, 30, 81, 150, 200, 250, 300, 350, 400, 450, 488];
console.log('\n--- SAMPLE LESSON AUDIT ---');
for (const id of sampleIds) {
  const l = lessons.find(x => x.id === id);
  const bp = ALL_BLUEPRINTS[id];
  if (!l || !bp) {
    console.log(`Lesson ${id}: NOT FOUND`);
    continue;
  }
  console.log(`\n================== LESSON ${id} [${l.level}] ${l.title} ==================`);
  console.log(`Module: ${l.moduleName}`);
  console.log(`Competency: ${bp.concreteCompetency}`);
  console.log(`Why It Matters: ${bp.whyItMatters}`);
  console.log(`Linguistic Logic: ${bp.linguisticLogic}`);
  console.log(`Steps (${bp.stepBreakdown.length}):`);
  bp.stepBreakdown.forEach((s, i) => console.log(`  Step ${i+1}: ${s.title} | formula: ${s.formula || 'none'} | keyPhrase: ${s.keyPhrase || 'none'}`));
  console.log(`Rule Cards (${bp.ruleCards.length}):`);
  bp.ruleCards.forEach((r, i) => console.log(`  Rule ${i+1}: ${r.ruleTitle} | formula: ${r.formula || 'none'}`));
  console.log(`Common Mistakes (${bp.commonMistakes.length}):`);
  bp.commonMistakes.forEach((m, i) => console.log(`  Mistake ${i+1}: WRONG="${m.wrongExample}" -> RIGHT="${m.correctExample}" | Cause="${m.rootCause}"`));
  console.log(`Real World Context Dialogue (${bp.realWorldContext?.dialogue?.length || 0}):`);
  bp.realWorldContext?.dialogue?.forEach(d => console.log(`  ${d.speaker}: "${d.textEn}" / "${d.textTr}"`));
  console.log(`Examples (${bp.examples.length}):`);
  bp.examples.slice(0, 2).forEach(e => console.log(`  EN: "${e.en}" / TR: "${e.tr}"`));
  console.log(`Exercise: "${bp.exercise?.sentence}" (Ans: ${bp.exercise?.correctAnswer})`);
  console.log(`Sentence Builder: "${bp.sentenceBuilder?.targetEn}" (TR: "${bp.sentenceBuilder?.promptTr}")`);
}
