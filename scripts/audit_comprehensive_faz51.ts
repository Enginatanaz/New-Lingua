import { getFullCurriculumLessons } from '../src/data/curriculumData';
import { getLessonById } from '../src/data/lessonsData';
import { ALL_BLUEPRINTS } from '../src/services/pedagogy/registry';
import { getAdaptiveLessonSupplement } from '../src/services/adaptiveLessonEngine';

interface AuditResult {
  totalLessons: number;
  levelCounts: Record<string, number>;
  totalQuickChecks: number;
  totalExercises: number;
  totalSentenceBuilders: number;
  totalWarmupQuestions: number;
  totalQuestions: number;
  totalOptions: number;
  depthCounts: Record<number, number>;
  qcErrors: string[];
  exErrors: string[];
  sbErrors: string[];
  duplicateExercises: { sentence: string; ids: number[] }[];
  duplicateSentenceBuilders: { target: string; ids: number[] }[];
  duplicateQuickChecks: { question: string; ids: number[] }[];
}

export function runComprehensiveAudit(): AuditResult {
  const allLessons = getFullCurriculumLessons();
  const res: AuditResult = {
    totalLessons: allLessons.length,
    levelCounts: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 },
    totalQuickChecks: 0,
    totalExercises: 0,
    totalSentenceBuilders: 0,
    totalWarmupQuestions: 0,
    totalQuestions: 0,
    totalOptions: 0,
    depthCounts: { 1: 0, 2: 0, 3: 0, 4: 0 },
    qcErrors: [],
    exErrors: [],
    sbErrors: [],
    duplicateExercises: [],
    duplicateSentenceBuilders: [],
    duplicateQuickChecks: [],
  };

  const exMap = new Map<string, number[]>();
  const sbMap = new Map<string, number[]>();
  const qcMap = new Map<string, number[]>();

  for (const item of allLessons) {
    const id = item.id;
    res.levelCounts[item.level] = (res.levelCounts[item.level] || 0) + 1;
    const lesson = getLessonById(id);
    const lecture = lesson.teacherLecture;

    // Depth check
    const hasCore = !!lecture.coreConcept;
    const stepsCount = lecture.breakdownSteps?.length ?? 0;
    const rulesCount = lecture.ruleCards?.length ?? 0;
    const mistakesCount = lecture.commonMistakes?.length ?? 0;
    const dialogueCount = lecture.realWorldContext?.dialogue?.length ?? 0;

    if (hasCore && stepsCount >= 3 && rulesCount >= 2 && mistakesCount >= 2 && dialogueCount >= 2) {
      res.depthCounts[4]++;
    } else if (stepsCount >= 2 && rulesCount >= 1) {
      res.depthCounts[3]++;
    } else if (lecture.introduction) {
      res.depthCounts[2]++;
    } else {
      res.depthCounts[1]++;
    }

    // Quick Check
    const qc = lecture.quickCheck;
    if (qc) {
      res.totalQuickChecks++;
      res.totalQuestions++;
      res.totalOptions += qc.options.length;

      if (!qc.options || qc.options.length < 2) {
        res.qcErrors.push(`Lesson #${id}: Quick Check has fewer than 2 options.`);
      }
      if (qc.correctIndex < 0 || qc.correctIndex >= qc.options.length) {
        res.qcErrors.push(`Lesson #${id}: Quick Check correctIndex (${qc.correctIndex}) out of bounds [0, ${qc.options.length - 1}].`);
      }
      const uniqueOpts = new Set(qc.options.map(o => o.trim().toLowerCase()));
      if (uniqueOpts.size !== qc.options.length) {
        res.qcErrors.push(`Lesson #${id}: Quick Check has duplicate options: ${qc.options.join(' | ')}`);
      }

      const qList = qcMap.get(qc.question.trim()) || [];
      qList.push(id);
      qcMap.set(qc.question.trim(), qList);
    } else {
      res.qcErrors.push(`Lesson #${id}: Missing Quick Check.`);
    }

    // Practice Exercises
    if (!lesson.exercises || lesson.exercises.length === 0) {
      res.exErrors.push(`Lesson #${id}: Missing exercises.`);
    } else {
      lesson.exercises.forEach((ex, idx) => {
        res.totalExercises++;
        res.totalQuestions++;
        res.totalOptions += ex.options?.length || 0;

        if (!ex.correctAnswer || ex.correctAnswer.trim() === '') {
          res.exErrors.push(`Lesson #${id} Ex #${idx + 1}: Empty correctAnswer.`);
        }
        if (ex.type === 'multiple-choice') {
          if (!ex.options || ex.options.length < 2) {
            res.exErrors.push(`Lesson #${id} Ex #${idx + 1}: Fewer than 2 options.`);
          } else if (!ex.options.includes(ex.correctAnswer)) {
            res.exErrors.push(`Lesson #${id} Ex #${idx + 1}: correctAnswer "${ex.correctAnswer}" not in options [${ex.options.join(', ')}].`);
          }
          const uniqueOpts = new Set(ex.options?.map(o => o.trim().toLowerCase()) || []);
          if (uniqueOpts.size !== (ex.options?.length || 0)) {
            res.exErrors.push(`Lesson #${id} Ex #${idx + 1}: Duplicate options: ${ex.options?.join(' | ')}`);
          }
        }

        if (ex.sentence) {
          const sList = exMap.get(ex.sentence.trim()) || [];
          sList.push(id);
          exMap.set(ex.sentence.trim(), sList);
        }
      });
    }

    // Sentence Builder Task
    const sb = lesson.sentenceBuilderTask;
    if (sb) {
      res.totalSentenceBuilders++;
      if (!sb.targetEn || sb.targetEn.trim() === '') {
        res.sbErrors.push(`Lesson #${id}: Sentence Builder has empty targetEn.`);
      }
      if (!sb.availableWords || sb.availableWords.length === 0) {
        res.sbErrors.push(`Lesson #${id}: Sentence Builder has empty availableWords.`);
      } else {
        const targetWords = sb.targetEn.split(/\s+/).map(w => w.replace(/[.,?!;:()'"]/g, '').toLowerCase()).filter(Boolean);
        const availWords = sb.availableWords.map(w => w.toLowerCase());
        const missing = targetWords.filter(w => !availWords.includes(w));
        if (missing.length > 0) {
          res.sbErrors.push(`Lesson #${id}: Sentence Builder target words missing in pool: ${missing.join(', ')} (Target: "${sb.targetEn}")`);
        }
      }

      const sbList = sbMap.get(sb.targetEn.trim()) || [];
      sbList.push(id);
      sbMap.set(sb.targetEn.trim(), sbList);
    } else {
      res.sbErrors.push(`Lesson #${id}: Missing sentenceBuilderTask.`);
    }

    // Warmup / Interleaved Retrieval
    const adapt = getAdaptiveLessonSupplement(lesson);
    if (adapt.interleavedReview?.questions) {
      res.totalWarmupQuestions += adapt.interleavedReview.questions.length;
    }
  }

  // Check duplications
  qcMap.forEach((ids, q) => {
    if (ids.length > 1) res.duplicateQuickChecks.push({ question: q, ids });
  });
  exMap.forEach((ids, s) => {
    if (ids.length > 1) res.duplicateExercises.push({ sentence: s, ids });
  });
  sbMap.forEach((ids, t) => {
    if (ids.length > 1) res.duplicateSentenceBuilders.push({ target: t, ids });
  });

  return res;
}

const audit = runComprehensiveAudit();
console.log('--- COMPREHENSIVE AUDIT RESULT ---');
console.log(`Total Lessons: ${audit.totalLessons}`);
console.log(`Levels:`, audit.levelCounts);
console.log(`Total Quick Checks: ${audit.totalQuickChecks}`);
console.log(`Total Exercises: ${audit.totalExercises}`);
console.log(`Total Sentence Builders: ${audit.totalSentenceBuilders}`);
console.log(`Total Warmup / SRS Questions: ${audit.totalWarmupQuestions}`);
console.log(`Total Questions (QC + Ex): ${audit.totalQuestions}`);
console.log(`Total Interactive Assessment Activities: ${audit.totalQuickChecks + audit.totalExercises + audit.totalSentenceBuilders + audit.totalWarmupQuestions}`);
console.log(`Total Options Checked: ${audit.totalOptions}`);
console.log(`Depth Scores:`, audit.depthCounts);
console.log(`Quick Check Errors: ${audit.qcErrors.length}`);
if (audit.qcErrors.length > 0) console.log(audit.qcErrors.slice(0, 10));
console.log(`Exercise Errors: ${audit.exErrors.length}`);
if (audit.exErrors.length > 0) console.log(audit.exErrors.slice(0, 10));
console.log(`Sentence Builder Errors: ${audit.sbErrors.length}`);
if (audit.sbErrors.length > 0) console.log(audit.sbErrors.slice(0, 10));
console.log(`Duplicate Quick Checks: ${audit.duplicateQuickChecks.length}`);
if (audit.duplicateQuickChecks.length > 0) console.log(audit.duplicateQuickChecks);
console.log(`Duplicate Exercises: ${audit.duplicateExercises.length}`);
if (audit.duplicateExercises.length > 0) console.log(audit.duplicateExercises);
console.log(`Duplicate Sentence Builders: ${audit.duplicateSentenceBuilders.length}`);
if (audit.duplicateSentenceBuilders.length > 0) console.log(audit.duplicateSentenceBuilders);
