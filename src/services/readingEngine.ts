import { 
  ReadingProgressState, 
  ReadingAttemptRecord, 
  SavedReadingWord, 
  ReadingStats,
  ReadingTextItem
} from '../types/reading';
import { CEFRLevel } from '../types/lesson';
import { READING_TEXTS } from '../data/readingCurriculumData';

export const READING_STORAGE_KEY = 'linguaai_v7_reading_progress';

const defaultReadingProgress: ReadingProgressState = {
  completedTexts: {},
  savedWords: {},
  lastReadTextId: null,
  totalReadingTimeMinutes: 0,
};

export function getReadingProgress(): ReadingProgressState {
  if (typeof window === 'undefined') return defaultReadingProgress;
  try {
    const raw = localStorage.getItem(READING_STORAGE_KEY);
    if (!raw) return defaultReadingProgress;
    const parsed = JSON.parse(raw);
    return {
      completedTexts: parsed.completedTexts || {},
      savedWords: parsed.savedWords || {},
      lastReadTextId: parsed.lastReadTextId || null,
      totalReadingTimeMinutes: parsed.totalReadingTimeMinutes || 0,
    };
  } catch (err) {
    console.warn('Failed to parse reading progress:', err);
    return defaultReadingProgress;
  }
}

export function saveReadingProgress(state: ReadingProgressState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(READING_STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn('Failed to save reading progress:', err);
  }
}

export function saveReadingCompletion(
  textId: string, 
  score: number, 
  timeSpentSeconds: number, 
  userAnswers: Record<string, number>
): { state: ReadingProgressState; isNewCompletion: boolean; xpAwarded: number } {
  const current = getReadingProgress();
  const existing = current.completedTexts[textId];
  const isNewCompletion = !existing;

  const bestScore = existing ? Math.max(existing.bestScore, score) : score;
  const attempts = (existing?.attempts || 0) + 1;
  const prevTime = existing?.timeSpentSeconds || 0;
  
  const additionalMinutes = Math.max(1, Math.round(timeSpentSeconds / 60));

  const updatedRecord: ReadingAttemptRecord = {
    completedAt: Date.now(),
    bestScore,
    attempts,
    timeSpentSeconds: prevTime + timeSpentSeconds,
    userAnswers,
  };

  // Base +25 XP for reading completion, +10 XP bonus for >80% score
  const xpAwarded = (isNewCompletion ? 25 : 5) + (score >= 80 ? 10 : 0);

  const updatedState: ReadingProgressState = {
    ...current,
    completedTexts: {
      ...current.completedTexts,
      [textId]: updatedRecord,
    },
    lastReadTextId: textId,
    totalReadingTimeMinutes: current.totalReadingTimeMinutes + additionalMinutes,
  };

  saveReadingProgress(updatedState);
  return { state: updatedState, isNewCompletion, xpAwarded };
}

export function saveWordToReadingVocabulary(
  word: string, 
  tr: string, 
  phonetic?: string, 
  pos?: string, 
  sourceTextId: string = '', 
  sourceTextTitle: string = ''
): boolean {
  const state = getReadingProgress();
  const cleanWord = word.trim().toLowerCase();
  if (!cleanWord) return false;

  const newWord: SavedReadingWord = {
    word: cleanWord,
    tr,
    phonetic,
    pos,
    sourceTextId,
    sourceTextTitle,
    savedAt: Date.now(),
  };

  const updated: ReadingProgressState = {
    ...state,
    savedWords: {
      ...state.savedWords,
      [cleanWord]: newWord,
    },
  };

  saveReadingProgress(updated);
  return true;
}

export function removeSavedWord(word: string): void {
  const state = getReadingProgress();
  const cleanWord = word.trim().toLowerCase();
  if (!state.savedWords[cleanWord]) return;

  const nextWords = { ...state.savedWords };
  delete nextWords[cleanWord];

  saveReadingProgress({
    ...state,
    savedWords: nextWords,
  });
}

export function isWordSaved(word: string): boolean {
  const state = getReadingProgress();
  return Boolean(state.savedWords[word.trim().toLowerCase()]);
}

export function getSavedWordsList(): SavedReadingWord[] {
  const state = getReadingProgress();
  return Object.values(state.savedWords).sort((a, b) => b.savedAt - a.savedAt);
}

export function getReadingStats(): ReadingStats {
  const progress = getReadingProgress();
  const completedEntries = Object.entries(progress.completedTexts);
  const completedCount = completedEntries.length;
  const totalTextsCount = READING_TEXTS.length;

  let totalScoreSum = 0;
  completedEntries.forEach(([, record]) => {
    totalScoreSum += record.bestScore;
  });

  const averageScore = completedCount > 0 ? Math.round(totalScoreSum / completedCount) : 0;

  const levelBreakdown: Record<CEFRLevel, { completed: number; total: number }> = {
    A1: { completed: 0, total: 0 },
    A2: { completed: 0, total: 0 },
    B1: { completed: 0, total: 0 },
    B2: { completed: 0, total: 0 },
    C1: { completed: 0, total: 0 },
    C2: { completed: 0, total: 0 },
  };

  READING_TEXTS.forEach((txt) => {
    if (levelBreakdown[txt.level]) {
      levelBreakdown[txt.level].total += 1;
      if (progress.completedTexts[txt.id]) {
        levelBreakdown[txt.level].completed += 1;
      }
    }
  });

  return {
    completedCount,
    totalTextsCount,
    averageScore,
    totalReadingTimeMinutes: progress.totalReadingTimeMinutes,
    savedWordsCount: Object.keys(progress.savedWords).length,
    levelBreakdown,
  };
}

export function getRecommendedReading(preferredLevel: CEFRLevel = 'A1'): ReadingTextItem {
  const progress = getReadingProgress();
  
  // 1. If there's an unfinished text or next in preferredLevel
  const levelTexts = READING_TEXTS.filter(t => t.level === preferredLevel);
  const uncompletedInLevel = levelTexts.find(t => !progress.completedTexts[t.id]);
  if (uncompletedInLevel) return uncompletedInLevel;

  // 2. If all in preferredLevel completed, recommend any uncompleted text
  const anyUncompleted = READING_TEXTS.find(t => !progress.completedTexts[t.id]);
  if (anyUncompleted) return anyUncompleted;

  // 3. Fallback to first text
  return READING_TEXTS[0];
}

export function resetReadingProgress(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(READING_STORAGE_KEY);
  } catch (err) {
    console.warn('Failed to reset reading progress:', err);
  }
}
