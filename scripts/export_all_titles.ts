import { getFullCurriculumLessons } from '../src/data/curriculumData';
import fs from 'fs';

const lessons = getFullCurriculumLessons();

const report = lessons.map(l => ({
  id: l.id,
  code: l.code,
  level: l.level,
  moduleName: l.moduleName,
  title: l.title,
  subtopic: l.subtopic,
  learningObjective: l.learningObjectives?.[0] || l.description
}));

fs.writeFileSync('all_488_titles.json', JSON.stringify(report, null, 2), 'utf-8');
console.log('Exported all_488_titles.json successfully. Total:', report.length);
