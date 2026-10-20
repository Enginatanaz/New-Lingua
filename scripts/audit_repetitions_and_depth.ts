import { ALL_BLUEPRINTS } from '../src/services/pedagogy/registry';
import { getFullCurriculumLessons } from '../src/data/curriculumData';

const allLessons = getFullCurriculumLessons();
let fallbackCount = 0;
let specificCount = 0;

const sbSentenceCounts = new Map<string, number>();
const exSentenceCounts = new Map<string, number>();
const qcQuestionCounts = new Map<string, number>();
const fallbackIds: number[] = [];
const levelFallbacks: Record<string, number> = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
const levelSpecifics: Record<string, number> = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };

for (const l of allLessons) {
  const bp = ALL_BLUEPRINTS[l.id];
  if (!bp) continue;
  
  const sbTarget = bp.sentenceBuilder?.targetEn || '';
  const exSentence = bp.exercise?.sentence || '';
  const qcQ = bp.quickCheck?.question || '';
  const isGeneric = 
    sbTarget.includes('Expressing our ideas clearly') ||
    sbTarget.includes('Articulating complex ideas') ||
    exSentence.includes('Advanced scholars analyze complex discourse') ||
    exSentence.includes('A skilled communicator always presents arguments') ||
    (bp.examples?.[0]?.en && bp.examples[0].en.includes('A solid grasp of'));

  if (isGeneric) {
    fallbackCount++;
    fallbackIds.push(l.id);
    levelFallbacks[l.level] = (levelFallbacks[l.level] || 0) + 1;
  } else {
    specificCount++;
    levelSpecifics[l.level] = (levelSpecifics[l.level] || 0) + 1;
  }

  sbSentenceCounts.set(sbTarget, (sbSentenceCounts.get(sbTarget) || 0) + 1);
  exSentenceCounts.set(exSentence, (exSentenceCounts.get(exSentence) || 0) + 1);
  qcQuestionCounts.set(qcQ, (qcQuestionCounts.get(qcQ) || 0) + 1);
}

console.log('--- REPETITION AND TEMPLATE AUDIT RESULTS ---');
console.log('Total Lessons:', allLessons.length);
console.log('Truly Specific Lessons:', specificCount);
console.log('Generic Fallback / Template Lessons:', fallbackCount);

console.log('\nLevel Breakdown (Specific vs Fallback):');
['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].forEach(lvl => {
  console.log(`  ${lvl}: Specific = ${levelSpecifics[lvl]}, Template Fallback = ${levelFallbacks[lvl]}`);
});

console.log('\nTop Repeating Sentence Builder targets:');
Array.from(sbSentenceCounts.entries())
  .sort((a,b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([s, count]) => console.log(`  - (${count} times) "${s.slice(0, 70)}..."`));

console.log('\nTop Repeating Exercise sentences:');
Array.from(exSentenceCounts.entries())
  .sort((a,b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([s, count]) => console.log(`  - (${count} times) "${s.slice(0, 70)}..."`));

console.log('\nTop Repeating Quick Check questions:');
Array.from(qcQuestionCounts.entries())
  .sort((a,b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([s, count]) => console.log(`  - (${count} times) "${s.slice(0, 70)}..."`));
