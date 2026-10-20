import { ALL_BLUEPRINTS } from '../src/services/pedagogy/registry';

const report: string[] = [];

for (let id = 1; id <= 100; id++) {
  const bp = ALL_BLUEPRINTS[id];
  const prefix = `L${id}: `;

  if (!bp) {
    report.push(`${prefix}MISSING BLUEPRINT`);
    continue;
  }

  // Check exercise
  if (!bp.exercise) {
    report.push(`${prefix}Missing exercise`);
  } else {
    if (!bp.exercise.sentence) {
      report.push(`${prefix}Missing exercise.sentence`);
    } else if (!bp.exercise.sentence.includes('___')) {
      report.push(`${prefix}exercise.sentence missing blank ___: "${bp.exercise.sentence}"`);
    }
    if (!bp.exercise.options || bp.exercise.options.length !== 4) {
      report.push(`${prefix}exercise.options length is ${bp.exercise.options?.length}`);
    }
    if (!bp.exercise.options?.includes(bp.exercise.correctAnswer)) {
      report.push(`${prefix}exercise.correctAnswer "${bp.exercise.correctAnswer}" not in options [${bp.exercise.options?.join(', ')}]`);
    }
  }

  // Check quickCheck
  if (!bp.quickCheck) {
    report.push(`${prefix}Missing quickCheck`);
  } else {
    if (!bp.quickCheck.options || bp.quickCheck.options.length !== 4) {
      report.push(`${prefix}quickCheck.options length is ${bp.quickCheck.options?.length}`);
    }
    if (typeof bp.quickCheck.correctIndex !== 'number' || bp.quickCheck.correctIndex < 0 || bp.quickCheck.correctIndex > 3) {
      report.push(`${prefix}quickCheck.correctIndex invalid: ${bp.quickCheck.correctIndex}`);
    }
  }

  // Check sentenceBuilder
  if (!bp.sentenceBuilder) {
    report.push(`${prefix}Missing sentenceBuilder`);
  } else {
    const targetWords = bp.sentenceBuilder.targetEn.replace(/[.,!?;:]+$/g, '').split(/\s+/).filter(Boolean);
    const avail = new Set(bp.sentenceBuilder.availableWords || []);
    const missingWords = targetWords.filter(w => !avail.has(w));
    if (missingWords.length > 0) {
      report.push(`${prefix}sentenceBuilder missing words in availableWords: ${missingWords.join(', ')}`);
    }
  }

  // Check vocabulary
  if (!bp.vocabulary || bp.vocabulary.length < 4) {
    report.push(`${prefix}vocabulary items < 4`);
  }

  // Check examples
  if (!bp.examples || bp.examples.length < 3) {
    report.push(`${prefix}examples < 3`);
  }

  // Check steps
  if (!bp.stepBreakdown || bp.stepBreakdown.length < 3) {
    report.push(`${prefix}steps < 3`);
  }
}

console.log(`Total audit findings across 1..100: ${report.length}`);
for (const r of report) {
  console.log(r);
}
