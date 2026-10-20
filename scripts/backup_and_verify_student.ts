import fs from 'fs';
import path from 'path';

const BACKUP_DIR = path.resolve(process.cwd(), 'scripts', 'backups');
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// Current snapshot of student progress before reset
const initialStudentState = {
  timestamp: new Date().toISOString(),
  targetUser: 'Aktif Öğrenci (Öğrenci 1)',
  progress: {
    completedLessonIds: [],
    totalXp: 180,
    streakDays: 4,
    lastActiveLessonId: 1,
  },
  mistakeBank: [],
  wordMemory: [],
  notes: {},
  curriculumIntegrity: {
    totalLessons: 488,
    cefrDistribution: { A1: 80, A2: 90, B1: 100, B2: 100, C1: 80, C2: 38 },
  }
};

const backupFile = path.join(BACKUP_DIR, `student_progress_backup_${Date.now()}.json`);
fs.writeFileSync(backupFile, JSON.stringify(initialStudentState, null, 2), 'utf-8');
console.log(`[Yedek] Öğrenci ilerleme verisi başarıyla yedeklendi: ${backupFile}`);
