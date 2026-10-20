import { CURRICULUM_LESSONS, getFullCurriculumLessons } from '../src/data/curriculumData';
import { getLessonById, getAllCurriculumLessons } from '../src/data/lessonsData';

/**
 * LINGUAAI — 488 DERS TAM DENETİM VE REGRESYON TESTİ
 * Tüm derslerin ID, kod, seviye, başlık, modül, soru ve cevap anahtarı eşleşmesini doğrular.
 */
export function runCurriculumIntegrityAudit() {
  console.log('======================================================================');
  console.log('LINGUAAI — 488 DERS ID-İÇERİK EŞLEŞMESİ & DOĞRULAMA DENETİMİ');
  console.log('======================================================================\n');

  const fullCurriculum = getFullCurriculumLessons();
  const allCurriculumSummary = getAllCurriculumLessons();

  console.log(`[1] Müfredat Veri Kaynağı:`);
  console.log(`  - Kayıtlı Toplam Ders Sayısı: ${fullCurriculum.length}`);
  console.log(`  - Özet Tablo Ders Sayısı: ${allCurriculumSummary.length}`);

  if (fullCurriculum.length !== 488) {
    throw new Error(`Beklenen 488 ders bulunamadı! Mevcut: ${fullCurriculum.length}`);
  }

  // Level Breakdown
  const levelCounts: Record<string, number> = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
  fullCurriculum.forEach(l => {
    levelCounts[l.level] = (levelCounts[l.level] || 0) + 1;
  });
  console.log(`  - Seviye Dağılımı:`, levelCounts);

  console.log('\n[2] ID Sürekliliği ve Benzersizlik Denetimi (1-488):');
  const seenIds = new Set<number>();
  for (let id = 1; id <= 488; id++) {
    const raw = fullCurriculum.find(l => l.id === id);
    if (!raw) {
      throw new Error(`Eksik ders ID tespit edildi: #${id}`);
    }
    if (seenIds.has(id)) {
      throw new Error(`Yinelenen ders ID tespit edildi: #${id}`);
    }
    seenIds.add(id);
  }
  console.log('  -> 1\'den 488\'e kadar kesintisiz ve tekrarsız ID bütünlüğü doğrulandı (GEÇTİ).');

  console.log('\n[3] 488 Dersin Tamamında ID–Başlık–İçerik Eşleşmesi ve Pedagojik Bütünlük Denetimi:');
  let titleErrors = 0;
  let levelErrors = 0;
  let qcErrors = 0;
  let exErrors = 0;
  let sbErrors = 0;
  let truncationErrors = 0;

  for (let id = 1; id <= 488; id++) {
    const expected = fullCurriculum.find(l => l.id === id)!;
    const lesson = getLessonById(id);

    // 1. ID Check
    if (lesson.id !== id) {
      console.error(`  [HATA] ID #${id}: lesson.id (${lesson.id}) eşleşmiyor.`);
      throw new Error(`ID Mismatch at #${id}`);
    }

    // 2. Title Check
    if (lesson.title !== expected.title) {
      console.error(`  [HATA] ID #${id}: Başlık uyuşmazlığı! Beklenen: "${expected.title}" | Bulunan: "${lesson.title}"`);
      titleErrors++;
    }

    // 3. Level Check
    if (lesson.level !== expected.level) {
      console.error(`  [HATA] ID #${id}: Seviye uyuşmazlığı! Beklenen: ${expected.level} | Bulunan: ${lesson.level}`);
      levelErrors++;
    }

    // 4. Truncation check
    if (lesson.title.includes('Sayılar (1') && !lesson.title.includes('100')) {
      console.error(`  [HATA] ID #${id}: Başlık hatalı kırpılmış: "${lesson.title}"`);
      truncationErrors++;
    }

    // 5. Quick Check question & options
    const qc = lesson.teacherLecture?.quickCheck;
    if (!qc || qc.correctIndex < 0 || qc.correctIndex >= qc.options.length) {
      console.error(`  [HATA] ID #${id}: Hızlı kontrol soru yapısı veya correctIndex hatalı.`);
      qcErrors++;
    }

    // 6. Exercises & Answer Keys
    if (!lesson.exercises || lesson.exercises.length === 0) {
      console.error(`  [HATA] ID #${id}: Alıştırma listesi boş!`);
      exErrors++;
    } else {
      lesson.exercises.forEach((ex, idx) => {
        if (!ex.correctAnswer || ex.correctAnswer.trim() === '') {
          console.error(`  [HATA] ID #${id} Alıştırma #${idx + 1}: Cevap anahtarı boş.`);
          exErrors++;
        }
        if (ex.type === 'multiple-choice' && !ex.options?.includes(ex.correctAnswer)) {
          console.error(`  [HATA] ID #${id} Alıştırma #${idx + 1}: Cevap anahtarı ("${ex.correctAnswer}") seçenekler arasında yok!`, ex.options);
          exErrors++;
        }
      });
    }

    // 7. Sentence Builder Target & Available Words
    const sb = lesson.sentenceBuilderTask;
    if (!sb || !sb.targetEn || !sb.availableWords || sb.availableWords.length === 0) {
      console.error(`  [HATA] ID #${id}: Cümle kurucu verisi eksik.`);
      sbErrors++;
    } else {
      const targetWords = sb.targetEn.split(/\s+/).map(w => w.replace(/[.,?!;:()'"]/g, '').toLowerCase()).filter(Boolean);
      const availWords = sb.availableWords.map(w => w.toLowerCase());
      const missing = targetWords.filter(w => !availWords.includes(w));
      if (missing.length > 0) {
        console.error(`  [HATA] ID #${id}: Cümle kurucu hedefinde bulunan ancak kelime havuzunda olmayan kelimeler var:`, missing);
        sbErrors++;
      }
    }
  }

  console.log(`\n--- DENETİM RAPORU VE ÖZET SONUÇLAR ---`);
  console.log(`Denetlenen Toplam Ders   : 488`);
  console.log(`ID Eşleşme Hataları     : 0`);
  console.log(`Başlık Uyuşmazlıkları   : ${titleErrors}`);
  console.log(`Seviye Uyuşmazlıkları   : ${levelErrors}`);
  console.log(`Başlık Kırpılma Hatası  : ${truncationErrors}`);
  console.log(`Hızlı Kontrol Hataları  : ${qcErrors}`);
  console.log(`Cevap Anahtarı Hataları : ${exErrors}`);
  console.log(`Cümle Kurucu Hataları   : ${sbErrors}`);

  const totalErrors = titleErrors + levelErrors + qcErrors + exErrors + sbErrors + truncationErrors;
  if (totalErrors > 0) {
    console.error(`\n[BAŞARISIZ] Toplam ${totalErrors} hata tespit edildi.`);
    process.exit(1);
  } else {
    console.log(`\n[BAŞARILI] 488 dersin tamamı ID–Başlık–İçerik–Soru–Cevap Anahtarı denetiminden %100 başarıyla geçti!`);
  }
}

// Execute immediately when run from terminal
if (typeof require !== 'undefined' && require.main === module) {
  runCurriculumIntegrityAudit();
} else {
  runCurriculumIntegrityAudit();
}
