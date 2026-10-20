import { CEFRLevel } from './lesson';

export type ReadingCategory = 
  | 'short_stories'
  | 'daily_life'
  | 'conversations'
  | 'travel_culture'
  | 'work_career'
  | 'work_business' // backward compatibility alias
  | 'science_tech'
  | 'news_articles'
  | 'history_bio'
  | 'opinions_arguments'
  | 'literature_arts'
  | 'society_arts'; // backward compatibility alias

export type QuestionType = 
  | 'main_idea'
  | 'detail'
  | 'vocabulary'
  | 'inference'
  | 'author_purpose'
  | 'true_false';

export interface ReadingWordItem {
  word: string;
  phonetic: string;
  pos: 'noun' | 'verb' | 'adj' | 'adv' | 'phrase';
  tr: string;
  contextDef: string;
  example: string;
}

export interface ReadingQuestionItem {
  id: string;
  type: QuestionType;
  typeTr: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  evidenceSentence: string;
}

export interface ReadingTextItem {
  id: string;
  title: string;
  titleTr: string;
  level: CEFRLevel;
  category: ReadingCategory;
  categoryTr: string;
  wordCount: number;
  readingTimeMinutes: number;
  summaryTr: string;
  targetGrammar?: string;
  paragraphs: string[];
  vocabulary: ReadingWordItem[];
  questions: ReadingQuestionItem[];
}

export interface ReadingAttemptRecord {
  completedAt: number;
  bestScore: number; // 0 - 100
  attempts: number;
  timeSpentSeconds: number;
  userAnswers: Record<string, number>;
}

export interface SavedReadingWord {
  word: string;
  tr: string;
  phonetic?: string;
  pos?: string;
  sourceTextId: string;
  sourceTextTitle: string;
  savedAt: number;
}

export interface ReadingProgressState {
  completedTexts: Record<string, ReadingAttemptRecord>;
  savedWords: Record<string, SavedReadingWord>;
  lastReadTextId: string | null;
  totalReadingTimeMinutes: number;
}

export interface ReadingStats {
  completedCount: number;
  totalTextsCount: number;
  averageScore: number;
  totalReadingTimeMinutes: number;
  savedWordsCount: number;
  levelBreakdown: Record<CEFRLevel, { completed: number; total: number }>;
}
