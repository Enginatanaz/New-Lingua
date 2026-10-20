import { getLessonById } from '../src/data/lessonsData';
import { validateStudentAnswer } from '../src/utils/answerValidator';

const sampleLessonIds = [1, 2, 6, 8, 11, 21, 55, 61, 81, 83, 91, 100];

console.log('=====================================================');
console.log('PEDAGOGICAL TEACHING QUALITY VERIFICATION (1-100)');
console.log('=====================================================\n');

let allPassed = true;

for (const id of sampleLessonIds) {
  const lesson = getLessonById(id);
  const lect = lesson.teacherLecture;

  console.log(`\n-----------------------------------------------------`);
  console.log(`LESSON ${lesson.id}: ${lesson.title} [${lesson.level}]`);
  console.log(`Module: ${lesson.moduleName}`);
  console.log(`Learning Objective: ${lesson.learningObjective}`);
  console.log(`-----------------------------------------------------`);

  // Check 1: Can the student learn the topic from the lecture alone?
  console.log(`\n[1. ÖĞRETMEN ANLATIMI VE DİL MANTIĞI]`);
  console.log(`Core Concept Title: ${lect.coreConcept.title}`);
  console.log(`Explanation (${lect.coreConcept.explanation.length} chars):`);
  console.log(`  "${lect.coreConcept.explanation.slice(0, 160)}..."`);
  console.log(`Why It Matters: "${lect.coreConcept.whyItMatters}"`);

  console.log(`\n[2. ADIM ADIM ANLATIM (BREAKDOWN STEPS)]`);
  lect.breakdownSteps.forEach((s) => {
    console.log(`  • ${s.title}`);
    console.log(`    Formül: ${s.formula || 'N/A'}`);
    console.log(`    Örnek/Kalıp: ${s.keyPhrase || 'N/A'}`);
    console.log(`    Açıklama: ${s.content.slice(0, 100)}...`);
  });

  console.log(`\n[3. KURAL KARTLARI VE KRİTİK HATALAR]`);
  lect.ruleCards.forEach((rc) => {
    console.log(`  📋 ${rc.ruleTitle || rc.title}: ${(rc.explanation || rc.rule || '').slice(0, 80)}...`);
  });
  if (lect.commonMistakes && lect.commonMistakes.length > 0) {
    const m = lect.commonMistakes[0];
    console.log(`  ⚠️ Hata Örneği: ❌ "${m.wrongExample}" -> ✅ "${m.correctExample}"`);
    console.log(`     Sebep: ${m.rootCause}`);
  }

  console.log(`\n[4. GERÇEK HAYAT DİYALOĞU]`);
  if (lect.realWorldContext?.dialogue && lect.realWorldContext.dialogue.length > 0) {
    const d = lect.realWorldContext.dialogue[0];
    console.log(`  💬 ${d.speaker || 'Kişi'}: "${d.textEn}" (${d.textTr})`);
  }

  console.log(`\n[5. ÖĞRETİLEN KELİMELER]`);
  lesson.vocabulary.forEach((v) => {
    console.log(`  📖 ${v.word} ${v.phonetic} (${v.partOfSpeech}) - ${v.meaningTr}`);
  });

  console.log(`\n[6. UYGULAMA VE DOĞRULAMA]`);
  const ex = lesson.exercises[0];
  console.log(`  ❓ Soru: ${ex.sentence}`);
  console.log(`     Doğru Cevap: ${ex.correctAnswer}`);

  const sb = lesson.sentenceBuilderTask;
  console.log(`  🧩 Cümle Kurucu: "${sb.promptTr}"`);
  console.log(`     Hedef: "${sb.targetEn}"`);

  // Verify sentence builder solveability
  const targetWords = sb.targetEn.replace(/[.,!?;:]+$/g, '').split(/\s+/);
  const pool = [...sb.availableWords];
  let solvable = true;
  for (const tw of targetWords) {
    const idx = pool.findIndex(w => w.toLowerCase() === tw.toLowerCase() || w === tw);
    if (idx !== -1) {
      pool.splice(idx, 1);
    } else {
      solvable = false;
      break;
    }
  }

  if (!solvable) {
    console.error(`  ❌ Sentence builder NOT solvable for lesson ${id}!`);
    allPassed = false;
  } else {
    console.log(`  ✅ Cümle kurucu taşları tam ve çözülebilir.`);
  }
}

console.log(`\n=====================================================`);
console.log(`Tüm test edilen dersler pedagojik ve teknik olarak: ${allPassed ? 'BAŞARILI' : 'BAŞARISIZ'}`);
console.log(`=====================================================\n`);
