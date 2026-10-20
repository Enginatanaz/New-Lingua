export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type LessonStepKey = 
  | 'intro'        // 1. Derse Giriş
  | 'lecture'      // 2. Öğretmen Anlatımı
  | 'examples'     // 3. Örnekler & Kurallar
  | 'exercises'    // 4. Alıştırmalar
  | 'sentence'     // 5. Kendi Cümleni Oluşturma
  | 'summary';     // 6. Ders Özeti

export interface LessonStepDef {
  key: LessonStepKey;
  stepNumber: number;
  label: string;
  shortLabel: string;
  description: string;
}

export type LessonSkillType = 
  | 'grammar'
  | 'vocabulary'
  | 'pronunciation'
  | 'listening'
  | 'reading'
  | 'speaking'
  | 'writing';

export interface LectureBreakdownStep {
  stepNumber?: number;
  title: string;
  content: string;
  keyPhrase?: string;
  formula?: string;
  subPoints?: string[];
  rationale?: string;
  warningNote?: string;
}

export interface LectureRuleCard {
  ruleTitle?: string;
  title?: string;
  rule?: string;
  formula?: string;
  explanation?: string;
  exampleSnippet?: string;
  example?: string;
  cautionNote?: string;
  tipNote?: string;
  tip?: string;
}

export interface CommonMistakeItem {
  wrongExample: string;
  correctExample: string;
  rootCause: string;
  memoryTip: string;
}

export interface RealWorldContext {
  scenarioTitle: string;
  description: string;
  dialogue?: { speaker?: string; textEn: string; textTr: string }[];
  contextType: 'daily' | 'workplace' | 'travel' | 'academic' | 'social' | 'work' | string;
  culturalNote?: string;
}

export interface ContrastiveAnalysis {
  title?: string;
  conceptA?: string;
  conceptB?: string;
  keyDifference?: string;
  exampleA?: string;
  exampleB?: string;
  englishConcept?: string;
  turkishDifference?: string;
  directComparison?: any[];
}

export interface LectureLearningGoals {
  targetObjective: string;
  keyStructures: string[];
  realLifeUtility: string;
}

export interface LectureCoreUnderstanding {
  simpleExplanation: string;
  linguisticLogic: string;
  whenAndWhy: string;
  prerequisiteConnection?: string;
}

export interface GuidedPracticeStep {
  tier: 1 | 2 | 3;
  label: string;
  promptTr: string;
  guidanceTr: string;
  targetEn: string;
  scaffoldWords?: string[];
  explanation: string;
}

export interface LectureGuidedPractice {
  title?: string;
  steps: GuidedPracticeStep[];
}

export interface LectureSummarySection {
  takeaways: string[];
  mostConfusedPoint: {
    trap: string;
    explanation: string;
  };
}

export type BlackboardLayoutType = 
  | 'grammar_table'
  | 'verb_transformation'
  | 'structure_table'
  | 'wh_question_table'
  | 'syntax_diagram'
  | 'comparison_table'
  | 'rule_bulletin';

export interface BlackboardRow {
  col1: string;
  highlightCol1?: boolean;
  col2: string;
  highlightCol2?: boolean;
  col3: string;
  highlightCol3?: boolean;
  col4?: string;
  highlightCol4?: boolean;
  note?: string;
}

export interface BlackboardSyntaxElement {
  label: string;
  code: string;
  role: string;
  color?: 'white' | 'yellow';
}

export interface TeacherBlackboardData {
  title: string;
  subtitle?: string;
  layoutType: BlackboardLayoutType;
  headers?: string[];
  rows?: BlackboardRow[];
  syntaxBlocks?: {
    formula: string;
    components: BlackboardSyntaxElement[];
    exampleEn: string;
    exampleTr: string;
    breakdownNote: string;
  };
  chalkNote: {
    yellowHighlight: string;
    whiteExplanation: string;
  };
  sideTip?: string;
}

export interface TeacherLectureData {
  introduction: string;
  skillType?: LessonSkillType;
  concreteCompetency?: string;
  learningGoals?: LectureLearningGoals;
  coreUnderstanding?: LectureCoreUnderstanding;
  blackboard?: TeacherBlackboardData;
  coreConcept: {
    title: string;
    explanation: string;
    whyItMatters: string;
  };
  breakdownSteps: LectureBreakdownStep[];
  ruleCards: LectureRuleCard[];
  specialCases?: {
    title: string;
    details: string;
    example: string;
  }[];
  commonMistakes?: CommonMistakeItem[];
  realWorldContext?: RealWorldContext;
  contrastiveAnalysis?: ContrastiveAnalysis;
  guidedPractice?: LectureGuidedPractice;
  memoryHook?: string;
  summarySection?: LectureSummarySection;
  quickCheck: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export type LectureData = TeacherLectureData;

export interface ExampleSentence {
  id: string;
  en: string;
  tr: string;
  highlightedWords: string[];
  grammarCategory?: string;
  contextNote?: string;
  breakdownNote?: string;
  alternativeForm?: { sentence: string; nuanceExplanation: string };
}

export interface VocabularyItem {
  id: string;
  word: string;
  phonetic?: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'pronoun' | 'preposition';
  meaningTr: string;
  exampleSentence: string;
}

export interface ExerciseItem {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'error-fix';
  prompt: string;
  sentence?: string; // with ___ for fill-in-the-blank
  options?: string[];
  correctAnswer: string;
  hint?: string;
  explanation: string;
}

export interface SentenceBuilderTask {
  id: string;
  promptTr: string;
  targetEn: string;
  availableWords: string[]; // scrambled words + potential distractor
  explanation: string;
}

export interface LessonData {
  id: number; // 1 to 488
  code: string; // e.g. "A1-01"
  level: CEFRLevel;
  moduleName: string;
  title: string;
  learningObjective: string;
  estimatedMinutes: number;
  xpReward: number;
  teacherLecture: TeacherLectureData;
  examples: ExampleSentence[];
  vocabulary: VocabularyItem[];
  exercises: ExerciseItem[];
  sentenceBuilderTask: SentenceBuilderTask;
  summaryTakeaways: string[];
}

export interface LessonProgressState {
  completed: boolean;
  score: number;
  currentStepIndex: number;
  completedSteps: number[]; // e.g. [0, 1]
  exerciseAnswers: Record<string, { userAnswer: string; isCorrect: boolean }>;
  sentenceBuilderCompleted: boolean;
  notes: string;
  lastStudiedAt: string;
}
