import { getFullCurriculumLessons } from '../src/data/curriculumData';

const list = getFullCurriculumLessons();
console.log('Total lessons:', list.length);
console.log('Fields:', Object.keys(list[0]));

[0, 80, 170, 270, 370, 450].forEach(idx => {
  const l = list[idx];
  console.log(`\n[#${l.id}] (${l.level}) ${l.title}`);
  console.log(`  Module: ${l.moduleName}`);
  console.log(`  Subtopic: ${l.subtopic}`);
  console.log(`  Structures:`, l.targetStructures);
  console.log(`  Vocabulary:`, l.targetVocabulary);
  console.log(`  Skills:`, l.skills);
});
