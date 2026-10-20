import { getFullCurriculumLessons, CURRICULUM_MODULES } from '../src/data/curriculumData';

const lessons = getFullCurriculumLessons();
console.log('Total Lessons:', lessons.length);
console.log('Total Modules:', CURRICULUM_MODULES.length);

const byLevel: Record<string, number> = {};
lessons.forEach(l => {
  byLevel[l.level] = (byLevel[l.level] || 0) + 1;
});
console.log('By Level:', byLevel);

const moduleLessons: Record<string, typeof lessons> = {};
lessons.forEach(l => {
  if (!moduleLessons[l.moduleName]) moduleLessons[l.moduleName] = [];
  moduleLessons[l.moduleName].push(l);
});

console.log('\n--- ALL 49 MODULES AND LESSON RANGES ---');
Object.entries(moduleLessons).forEach(([modName, modLessons], idx) => {
  const first = modLessons[0];
  const last = modLessons[modLessons.length - 1];
  console.log(`${idx + 1}. [${first.level}] ${modName} (${modLessons.length} ders: #${first.id} - #${last.id})`);
});
