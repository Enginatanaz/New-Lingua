import { LessonData, ExerciseItem, CEFRLevel } from '../types/lesson';
import { 
  StudentProfile, 
  AdaptiveLessonSupplement, 
  ScaffoldingLevel, 
  ScaffoldCallout, 
  PersonalizedTeacherNote,
  InterleavedRetrievalSet 
} from '../types/adaptive';
import { getActiveStudentProfile } from './studentMemoryEngine';
import { getAllMistakes } from './srsEngine';
import { getLessonById } from '../data/lessonsData';

export function getAdaptiveLessonSupplement(lesson: LessonData, customProfile?: StudentProfile): AdaptiveLessonSupplement {
  const profile = customProfile || getActiveStudentProfile();

  // 1. Personalized Teacher Note
  const personalizedTeacherNote = generatePersonalizedTeacherNote(profile, lesson);

  // 2. Scaffold Callouts based on student profile and errors
  const scaffoldCallouts = generateScaffoldCallouts(profile, lesson);

  // 3. Interleaved Retrieval (Past Mistakes & Spaced Repetition)
  const interleavedReview = generateInterleavedReview(profile, lesson);

  // 4. Adapt Exercises to current student difficulty & scaffolding
  const adaptedExercises = adaptExercises(lesson.exercises, profile.scaffoldingLevel);

  // 5. Skill Specific Supports
  const listeningSupport = {
    preListeningPromptTr: getPreListeningPrompt(lesson),
    keyVocabularyFocus: lesson.vocabulary ? lesson.vocabulary.slice(0, 3).map((v) => v.word) : [],
    suggestedSpeed: profile.skills.listening.speedPreference,
  };

  const readingSupport = {
    scanningPromptTr: `Metni okurken anahtar fiillere ve zaman bildiren ifadelere dikkat edin.`,
    deepComprehensionTipTr: `Cümlenin sadece kelime anlamına değil, eylemin konuşma anıyla kurduğu zamansal veya mantıksal köprüye odaklanın.`,
  };

  const speakingSupport = {
    targetPhonemes: profile.skills.speaking.weakPhonemes.slice(0, 2),
    stressBreakdown: (lesson.vocabulary || []).slice(0, 4).map((v) => ({
      word: v.word,
      stressedSyllable: getStressedSyllable(v.word),
      phonetic: v.phonetic || `/${v.word}/`,
    })),
  };

  return {
    studentProfile: profile,
    personalizedTeacherNote,
    scaffoldingLevel: profile.scaffoldingLevel,
    scaffoldCallouts,
    interleavedReview,
    adaptedExercises,
    listeningSupport,
    readingSupport,
    speakingSupport,
  };
}

function generatePersonalizedTeacherNote(profile: StudentProfile, lesson: LessonData): PersonalizedTeacherNote {
  const isBeginner = profile.currentLevel === 'A1' || profile.scaffoldingLevel === 'heavy';
  const isAdvanced = profile.currentLevel === 'C1' || profile.currentLevel === 'C2' || profile.scaffoldingLevel === 'light';

  let greeting = `Merhaba ${profile.name.split(' ')[0]}!`;
  let contextWhy = '';
  let scaffoldAdvice = '';
  let focusTip = '';

  if (isBeginner) {
    contextWhy = `${lesson.title} konusu İngilizce iletişiminizin temel yapı taşlarından biridir. Türkçe düşünme kalıplarından adım adım sıyrılarak somut ve günlük kullanımlarla ilerleyeceğiz.`;
    scaffoldAdvice = `Senin için her cümlenin altına Türkçe ipuçları ve kelime çözümlemeleri yerleştirdik. Acele etmeden, sesli telaffuz butonlarını dinleyerek tekrar et.`;
    focusTip = `Özellikle öznelerle fiillerin eşleşmesine ve telaffuzdaki sesletim vurgularına dikkat et.`;
  } else if (isAdvanced) {
    contextWhy = `${lesson.title} konusunda amacımız yalnızca kuralı bilmek değil; resmiyet derecesini, söylem akışını ve ana dili İngilizce olanların tercih ettiği doğal üslubu yakalamaktır.`;
    scaffoldAdvice = `Destek seviyesi en sade haline getirildi; doğrudan anlam çıkarma, devrik yapılar ve ince anlam ayrımları (nuance) üzerinde derinleşeceksin.`;
    focusTip = `Farklı bağlamlarda hangi alternatifin daha sofistike ve profesyonel durduğuna odaklan.`;
  } else {
    // Intermediate (B1 / B2)
    const hasPastError = profile.recentErrors.some(e => e.topic.includes('past') || e.topic.includes('perfect'));
    if (hasPastError) {
      contextWhy = `Önceki çalışmalarında zamanlar arası geçişte dikkat çeken noktalar oldu. ${lesson.title} dersinde bu köprüleri sağlamlaştıracak pratikler seni bekliyor.`;
    } else {
      contextWhy = `${lesson.title} konusunda hedefimiz cümlelerini daha zengin bağlaçlar, doğru eşdizimler ve akıcı bir ritimle kurabilmen.`;
    }
    scaffoldAdvice = `Dengeli destek modundasın: Temel ipuçları açık, ancak zorlandığın anlarda mikro-kural hatırlatıcıları devreye girecek.`;
    focusTip = `Cümledeki zaman ipuçlarını (yesterday, since, already vb.) ve fiil-isim eşdizimlerini gözden kaçırma.`;
  }

  return { greeting, contextWhy, scaffoldAdvice, focusTip };
}

function generateScaffoldCallouts(profile: StudentProfile, lesson: LessonData): ScaffoldCallout[] {
  const callouts: ScaffoldCallout[] = [];
  const textContext = `${lesson.title} ${lesson.learningObjective}`.toLowerCase();

  // If student struggles with specific grammar topics, add targeted reassurance & micro-scaffold
  if (profile.strugglingTopics.some(t => t.toLowerCase().includes('to be') || t.toLowerCase().includes('am / is / are'))) {
    callouts.push({
      triggerTopic: 'To Be Şahıs Uyumu',
      titleTr: 'Mikro Destek: Özne & To Be Uyumu',
      guidanceTr: 'Unutma: I -> am, tekil özneler (He/She/It/The cat) -> is, çoğullar ve You -> are alır.',
      quickExample: 'Sarah IS ready. / They ARE here.',
      reassuranceTr: 'Tek bir hata seviyeni etkilemez; bu küçük kuralı hatırlaman yeterli!'
    });
  }

  if (profile.strugglingTopics.some(t => t.toLowerCase().includes('past') || t.toLowerCase().includes('perfect'))) {
    callouts.push({
      triggerTopic: 'Past Simple vs Present Perfect',
      titleTr: 'Mikro Destek: Zaman Köprüsü',
      guidanceTr: 'Geçmişte net bir zaman ("yesterday", "in 2020", "last week") varsa Past Simple (V2); etkisi şimdi süren veya zamanı belirtilmeyen deneyimlerde Present Perfect (have/has + V3) kullanılır.',
      quickExample: 'I SAW him yesterday. vs I HAVE SEEN this movie before.',
      reassuranceTr: 'Bu iki zaman arasındaki farkı kavradığında B1 seviyesindeki akıcılığın iki katına çıkacaktır.'
    });
  }

  return callouts;
}

const RECENT_REVIEW_STORAGE_KEY = 'linguaai_v6_recent_reviews';

export function getCompletedLessonIds(): number[] {
  if (typeof window === 'undefined' && typeof localStorage === 'undefined') return [];
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem('linguaai_v6_progress') : null;
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed.completedLessonIds) ? parsed.completedLessonIds : [];
  } catch (e) {
    return [];
  }
}

export function getRecentReviewQuestionIds(): string[] {
  if (typeof window === 'undefined' && typeof localStorage === 'undefined') return [];
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(RECENT_REVIEW_STORAGE_KEY) : null;
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

export function recordReviewQuestionServed(qId: string): void {
  if (typeof window === 'undefined' && typeof localStorage === 'undefined') return;
  try {
    const current = getRecentReviewQuestionIds();
    const updated = [qId, ...current.filter(id => id !== qId)].slice(0, 15);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(RECENT_REVIEW_STORAGE_KEY, JSON.stringify(updated));
    }
  } catch (e) {
    console.warn('Failed to record review question history:', e);
  }
}

function generateInterleavedReview(profile: StudentProfile, lesson: LessonData): InterleavedRetrievalSet | undefined {
  const allMistakes = getAllMistakes();
  const completedIds = getCompletedLessonIds();
  const recentServedIds = getRecentReviewQuestionIds();

  // 1. Lesson 1 Warm-up: Introductory greeting (No prior knowledge expected)
  if (lesson.id === 1) {
    return {
      titleTr: 'Derse Isınma & İlk Selamlaşma',
      badgeTr: 'Başlangıç Isınması',
      descriptionTr: 'İngilizce dünyasına ilk adımınızı atarken temel selamlama mantığına hızlı bir göz atalım:',
      questions: [
        {
          id: `warmup-1-1`,
          type: 'multiple-choice',
          prompt: 'Yeni biriyle tanışırken günün her saatinde samimi ve doğal olarak hangi selamlama ifadesi kullanılır?',
          sentence: '___! My name is David. Nice to meet you.',
          options: ['Hello', 'Yesterday', 'Book', 'Clock'],
          correctAnswer: 'Hello',
          hint: 'İngilizcede evrensel selamlaşma kelimesini düşünün.',
          explanation: 'Harika! "Hello" (veya "Hi") İngilizcede ilk tanışmanın ve iletişimin evrensel anahtarıdır.'
        }
      ]
    };
  }

  // 2. MistakeBank integration: Target due mistakes from strictly prior completed topics
  const eligibleMistakes = allMistakes.filter((m) => {
    if (m.status !== 'due' || m.lessonId >= lesson.id) return false;
    // If student has explicit completion records, ensure they encountered this lesson
    if (completedIds.length > 0 && !completedIds.includes(m.lessonId)) return false;
    return true;
  });

  if (eligibleMistakes.length > 0) {
    // Pick first eligible mistake that hasn't been served in immediate recent session
    const target = eligibleMistakes.find(m => !recentServedIds.includes(`review-mistake-${m.id}`)) || eligibleMistakes[0];
    const defaultDistractors = ['Neither', 'Both', 'None of the above'];
    const opts = target.remedialQuestion?.options || Array.from(new Set([
      target.correctAnswer,
      target.userWrongAnswer,
      ...defaultDistractors
    ])).slice(0, 4);

    recordReviewQuestionServed(`review-mistake-${target.id}`);

    return {
      titleTr: 'Hafıza Yoklama: Önceki Dersteki Pürüzü Giderelim',
      badgeTr: 'Akıllı Telafi & Tekrar',
      descriptionTr: `"${target.lessonTitle}" dersinde kaydedilen yapıyı hatırlayalım ve neural hafızayı tazeleyelim:`,
      questions: [
        {
          id: `review-mistake-${target.id}`,
          type: 'multiple-choice',
          prompt: target.prompt,
          sentence: target.sentence || '___',
          options: opts,
          correctAnswer: target.correctAnswer,
          hint: target.ruleSnippet || 'Kuralı hatırla ve dikkatlice seç.',
          explanation: target.explanation || `Doğru cevap: ${target.correctAnswer}`
        }
      ]
    };
  }

  // 3. Select appropriate prior lesson: Check completed lessons and prerequisites
  const validCompletedPrior = completedIds.filter(id => id < lesson.id);
  let priorLessonId = lesson.id > 1 ? lesson.id - 1 : 1;

  if (validCompletedPrior.length > 0) {
    // Prioritize direct pedagogical prerequisite if student has completed it
    const priorLessonDef = getLessonById(lesson.id);
    // If current lesson has prerequisite lessons in valid completed set, use that
    const prereqMatch = validCompletedPrior.find(id => id === lesson.id - 1) || validCompletedPrior[validCompletedPrior.length - 1];
    priorLessonId = prereqMatch;
  }

  const priorLesson = getLessonById(priorLessonId);

  // 4. Gather multiple candidate questions to avoid hardcoding only exercises[0]
  interface Candidate {
    id: string;
    prompt: string;
    sentence?: string;
    options: string[];
    correctAnswer: string;
    hint: string;
    explanation: string;
  }

  const candidates: Candidate[] = [];

  if (priorLesson.exercises && priorLesson.exercises.length > 0) {
    priorLesson.exercises.forEach((ex, idx) => {
      candidates.push({
        id: `review-${lesson.id}-${priorLesson.id}-ex${idx + 1}`,
        prompt: ex.prompt,
        sentence: ex.sentence,
        options: ex.options || ['is', 'are', 'am', 'be'],
        correctAnswer: ex.correctAnswer,
        hint: ex.hint || `Önceki dersin (${priorLesson.title}) kuralını hatırlayın.`,
        explanation: ex.explanation,
      });
    });
  }

  if (priorLesson.teacherLecture?.quickCheck) {
    const qc = priorLesson.teacherLecture.quickCheck;
    candidates.push({
      id: `review-${lesson.id}-${priorLesson.id}-qc`,
      prompt: qc.question,
      sentence: '___',
      options: qc.options,
      correctAnswer: qc.options[qc.correctIndex],
      hint: `Önceki dersteki (${priorLesson.title}) ana kuralı hatırlayın.`,
      explanation: qc.explanation,
    });
  }

  // Fallback candidate if none found
  if (candidates.length === 0) {
    candidates.push({
      id: `review-${lesson.id}-${priorLesson.id}-default`,
      prompt: `Önceki derste öğrenilen yapıyı hatırlayalım:`,
      sentence: '___',
      options: ['is', 'are', 'am', 'be'],
      correctAnswer: 'is',
      hint: `Önceki dersin (${priorLesson.title}) kuralını hatırlayın.`,
      explanation: `Harika! "${priorLesson.title}" konusunu başarıyla pekiştirdiniz.`
    });
  }

  // 5. Pick candidate that was NOT served recently
  const chosenCandidate = candidates.find(c => !recentServedIds.includes(c.id)) || candidates[0];
  recordReviewQuestionServed(chosenCandidate.id);

  return {
    titleTr: `Hafıza Yoklama: #${priorLesson.id} "${priorLesson.title}" Konusunu Hatırlayalım`,
    badgeTr: 'Aralıklı Tekrar (SRS)',
    descriptionTr: `Önceki dersiniz olan "${priorLesson.title}" konusunda öğrendiğiniz yapıyı hızlıca hatırlayalım ve hafızayı taze tutalım:`,
    questions: [
      {
        id: chosenCandidate.id,
        type: 'multiple-choice',
        prompt: chosenCandidate.prompt,
        sentence: chosenCandidate.sentence,
        options: chosenCandidate.options,
        correctAnswer: chosenCandidate.correctAnswer,
        hint: chosenCandidate.hint,
        explanation: chosenCandidate.explanation,
      }
    ]
  };
}

function adaptExercises(exercises: ExerciseItem[], scaffoldingLevel: ScaffoldingLevel): ExerciseItem[] {
  return exercises.map((ex) => {
    if (scaffoldingLevel === 'heavy') {
      // Heavy scaffolding: ensure rich hints and structured options
      return {
        ...ex,
        hint: ex.hint || `İpucu: Cümledeki zaman kelimesine veya özne uyumuna dikkat edin.`,
      };
    } else if (scaffoldingLevel === 'light') {
      // Light scaffolding: minimal initial hints, encouraging independent synthesis
      return {
        ...ex,
        hint: undefined, // hides hint until user explicitly requests
      };
    }
    return ex;
  });
}

function getPreListeningPrompt(lesson: LessonData): string {
  const title = lesson.title.toLowerCase();
  if (title.includes('tanışma') || title.includes('greeting')) {
    return 'Ön Dinleme Odağı: Konuşmacıların birbirlerine hangi resmiyet derecesiyle hitap ettiğine dikkat edin.';
  }
  if (title.includes('zaman') || title.includes('tense')) {
    return 'Ön Dinleme Odağı: Konuşmacının olayın geçmişte mi yoksa şu an mı gerçekleştiğini hangi yardımcı fiille belirttiğine odaklanın.';
  }
  return 'Ön Dinleme Odağı: Cümledeki ana vurgu kelimesine ve tonlamanın cümlenin sonundaki yükselişine/düşüşüne kulak verin.';
}

function getStressedSyllable(word: string): string {
  if (word.length <= 4) return word.toUpperCase();
  // Simple heuristic for display
  return word.slice(0, Math.ceil(word.length / 2)).toUpperCase() + word.slice(Math.ceil(word.length / 2));
}
