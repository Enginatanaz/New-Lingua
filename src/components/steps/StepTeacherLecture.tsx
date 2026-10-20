import React, { useState, useRef } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight,
  Info,
  Check,
  X,
  Target,
  Brain,
  RotateCcw,
  Compass,
  Scale,
  ListOrdered,
  MessageSquareQuote,
  Flame,
  ChevronRight,
  Award,
  Layers,
  GraduationCap
} from 'lucide-react';
import { LessonData, ExampleSentence } from '../../types/lesson';
import { AudioButton } from '../common/AudioButton';
import { addMistake } from '../../services/srsEngine';
import { LiveTeacherStudio } from '../teacher/LiveTeacherStudio';
import { BlackboardView } from '../teacher/BlackboardView';
import { AdaptiveLessonSupplement } from '../../types/adaptive';
import { StepSimplifiedLecture } from './StepSimplifiedLecture';

interface StepTeacherLectureProps {
  lesson: LessonData;
  adaptiveSupplement?: AdaptiveLessonSupplement;
  onSelectProfilePreset?: (preset: 'a1_beginner' | 'b1_intermediate' | 'c1_advanced') => void;
  activePresetKey?: string;
  onContinue: () => void;
}

const skillTypeLabels: Record<string, { label: string; bg: string; text: string }> = {
  grammar: { label: 'Dilbilgisi & Yapı', bg: 'bg-indigo-50', text: 'text-indigo-700' },
  vocabulary: { label: 'Kelime & Eşdizim', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  pronunciation: { label: 'Telaffuz & Sesbilim', bg: 'bg-purple-50', text: 'text-purple-700' },
  listening: { label: 'Dinleme & Çıkarım', bg: 'bg-amber-50', text: 'text-amber-700' },
  reading: { label: 'Okuma & Anlam', bg: 'bg-teal-50', text: 'text-teal-700' },
  speaking: { label: 'Konuşma & İletişim', bg: 'bg-sky-50', text: 'text-sky-700' },
  writing: { label: 'Yazma & Kompozisyon', bg: 'bg-rose-50', text: 'text-rose-700' },
};

export const StepTeacherLecture: React.FC<StepTeacherLectureProps> = ({
  lesson,
  adaptiveSupplement,
  onSelectProfilePreset,
  activePresetKey = 'b1_intermediate',
  onContinue,
}) => {
  // For lessons 1 to 100, provide the streamlined, distraction-free pedagogical layout
  if (lesson.id <= 100) {
    return (
      <StepSimplifiedLecture
        lesson={lesson}
        adaptiveSupplement={adaptiveSupplement}
        onContinue={onContinue}
      />
    );
  }

  const lecture = lesson.teacherLecture;
  const skillMeta = skillTypeLabels[lecture.skillType || 'grammar'] || skillTypeLabels.grammar;

  // Active navigation anchor
  const [activeAnchor, setActiveAnchor] = useState<string>('section-a');

  // Quick Check Interactive State
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmittedCheck, setHasSubmittedCheck] = useState<boolean>(false);

  // Guided Practice (Section G) Interactive State
  const guidedSteps = lecture.guidedPractice?.steps || [];
  const [activeGuidedTier, setActiveGuidedTier] = useState<number>(0);
  const [guidedSelectedWords, setGuidedSelectedWords] = useState<string[]>([]);
  const [guidedChecked, setGuidedChecked] = useState<boolean>(false);
  const [guidedIsCorrect, setGuidedIsCorrect] = useState<boolean>(false);

  const currentGuidedStep = guidedSteps[activeGuidedTier];

  // Helper to render sentence with highlighted words
  const renderHighlightedSentence = (sentence: string, highlights?: string[]) => {
    if (!highlights || highlights.length === 0) return sentence;
    const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const regex = new RegExp(`(${escaped})`, 'gi');
    const parts = sentence.split(regex);

    return parts.map((part, index) => {
      const isMatch = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
      if (isMatch) {
        return (
          <span
            key={index}
            className="text-indigo-700 bg-indigo-100/90 font-bold px-1.5 py-0.5 rounded-md border border-indigo-200/80 inline-block my-0.5"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    setHasSubmittedCheck(true);

    if (idx !== lecture.quickCheck.correctIndex) {
      addMistake({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonCode: lesson.code,
        level: lesson.level,
        exerciseId: `qc-${lesson.id}`,
        prompt: lecture.quickCheck.question,
        userWrongAnswer: lecture.quickCheck.options[idx] || '',
        correctAnswer: lecture.quickCheck.options[lecture.quickCheck.correctIndex] || '',
        explanation: lecture.quickCheck.explanation,
      });
    }
  };

  const handleRetryCheck = () => {
    setSelectedOption(null);
    setHasSubmittedCheck(false);
  };

  // Guided practice word toggle
  const handleToggleWord = (word: string, index: number) => {
    if (guidedChecked) return;
    const wordKey = `${word}__${index}`;
    if (guidedSelectedWords.includes(wordKey)) {
      setGuidedSelectedWords(guidedSelectedWords.filter((w) => w !== wordKey));
    } else {
      setGuidedSelectedWords([...guidedSelectedWords, wordKey]);
    }
  };

  const handleCheckGuidedSentence = () => {
    if (!currentGuidedStep) return;
    const assembled = guidedSelectedWords.map((w) => w.split('__')[0]).join(' ').trim().toLowerCase();
    const cleanTarget = currentGuidedStep.targetEn.replace(/[.,!?;:"]/g, '').trim().toLowerCase();
    const isCorrect = assembled === cleanTarget || cleanTarget.startsWith(assembled);

    setGuidedChecked(true);
    setGuidedIsCorrect(isCorrect);
  };

  const handleNextGuidedTier = () => {
    if (activeGuidedTier < guidedSteps.length - 1) {
      setActiveGuidedTier(activeGuidedTier + 1);
      setGuidedSelectedWords([]);
      setGuidedChecked(false);
      setGuidedIsCorrect(false);
    }
  };

  const handleResetGuidedTier = () => {
    setGuidedSelectedWords([]);
    setGuidedChecked(false);
    setGuidedIsCorrect(false);
  };

  const scrollToSection = (id: string) => {
    setActiveAnchor(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const isCheckCorrect = selectedOption === lecture.quickCheck.correctIndex;

  const scaffoldLabels: Record<string, { label: string; badge: string }> = {
    heavy: { 
      label: 'Yoğun İskele (A1 Başlangıç)', 
      badge: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    moderate: { 
      label: 'Dengeli Destek (B1 Orta)', 
      badge: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    },
    light: { 
      label: 'İleri Seviye (C1 Nüans)', 
      badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    },
  };

  const activeScaffold = scaffoldLabels[adaptiveSupplement?.scaffoldingLevel || 'moderate'];

  // Quick navigation items matching required standard sections
  const navSections = [
    { id: 'section-a', label: 'A. Ne Öğreneceksin?' },
    { id: 'section-b', label: 'B. Konuyu Anlayalım' },
    { id: 'section-blackboard', label: '🎓 Siyah Tahta' },
    { id: 'section-c', label: 'C. Adım Adım Kurallar' },
    { id: 'section-d', label: 'D. Örneklerle Öğren' },
    { id: 'section-e', label: 'E. Doğru / Yanlış' },
    { id: 'section-f', label: 'F. Günlük Hayat' },
    { id: 'section-g', label: 'G. Kendin Uygula' },
    { id: 'section-h', label: 'H. Ders Özeti' },
  ];

  return (
    <article className="space-y-8 animate-fadeIn max-w-4xl mx-auto pb-12">
      {/* 0. ADAPTIVE STUDENT MEMORY BAR */}
      {adaptiveSupplement && (
        <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white rounded-3xl p-5 sm:p-6 shadow-md border border-indigo-500/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-indigo-800/60">
            <div className="flex items-center gap-3">
              <span className="text-3xl p-2 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/10">
                {adaptiveSupplement.studentProfile.avatar}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-extrabold text-white tracking-tight">
                    {adaptiveSupplement.personalizedTeacherNote.greeting}
                  </h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${activeScaffold.badge}`}>
                    {activeScaffold.label}
                  </span>
                </div>
                <p className="text-xs text-indigo-200/80 mt-0.5">
                  Öğrenci profiline ve geçmiş alıştırma hafızasına göre kişiselleştirildi
                </p>
              </div>
            </div>

            {onSelectProfilePreset && (
              <div className="flex items-center gap-1.5 bg-black/30 p-1.5 rounded-2xl border border-white/10 self-start sm:self-center">
                <span className="text-[10px] font-bold text-indigo-300 uppercase px-2 hidden sm:inline">
                  Öğrenci Modeli:
                </span>
                <button
                  onClick={() => onSelectProfilePreset('a1_beginner')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activePresetKey === 'a1_beginner'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-indigo-200 hover:text-white hover:bg-white/10'
                  }`}
                  title="A1 Başlangıç - Yoğun İskele & Temel Kelime"
                >
                  🌱 Emre (A1)
                </button>
                <button
                  onClick={() => onSelectProfilePreset('b1_intermediate')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activePresetKey === 'b1_intermediate'
                      ? 'bg-indigo-400 text-slate-950 shadow-sm'
                      : 'text-indigo-200 hover:text-white hover:bg-white/10'
                  }`}
                  title="B1 Orta - Telafi & Dengeli Destek"
                >
                  🎯 Selin (B1)
                </button>
                <button
                  onClick={() => onSelectProfilePreset('c1_advanced')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activePresetKey === 'c1_advanced'
                      ? 'bg-emerald-400 text-slate-950 shadow-sm'
                      : 'text-indigo-200 hover:text-white hover:bg-white/10'
                  }`}
                  title="C1 İleri - Nüans, Üslup & Söylem"
                >
                  🚀 Can (C1)
                </button>
              </div>
            )}
          </div>

          <div className="pt-4 space-y-3">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm leading-relaxed text-indigo-100 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p>
                  <strong className="text-white">Öğretmen Tavsiyesi: </strong>
                  {adaptiveSupplement.personalizedTeacherNote.contextWhy}
                </p>
                <p className="text-indigo-200/90 italic">
                  💡 {adaptiveSupplement.personalizedTeacherNote.focusTip}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* QUICK JUMP ANCHOR NAV (Sticky sub-bar for rapid scanning) */}
      <nav aria-label="Konu anlatımı bölümleri" className="sticky top-2 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm p-1.5 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1 min-w-max">
          {navSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeAnchor === sec.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-100'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </nav>

      {/* =========================================================================
          BÖLÜM A: BU DERSTE NE ÖĞRENECEKSİN?
          ========================================================================= */}
      <section 
        id="section-a" 
        className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 transition-all"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">
              A
            </span>
            <span className="text-xs font-bold text-indigo-700 tracking-wider uppercase">
              Hedef ve Genel Bakış
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-xl text-xs font-bold border ${skillMeta.bg} ${skillMeta.text} border-indigo-100`}>
              {skillMeta.label}
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-900 text-white font-mono">
              {lesson.level}
            </span>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-4">
          Bu Derste Ne Öğreneceksin?
        </h2>

        {/* 3 Pillar Grid: Target, Structures, Daily Usage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1. Hedef */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs uppercase tracking-wider mb-2">
                <Target className="w-4 h-4 text-indigo-600" />
                <span>1. Dersin Hedefi</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {lecture.learningGoals?.targetObjective || lecture.concreteCompetency || lesson.learningObjective}
              </p>
            </div>
          </div>

          {/* 2. Temel Yapılar ve Kelimeler */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>2. Temel Yapı ve Kelimeler</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {(lecture.learningGoals?.keyStructures || []).length > 0 ? (
                  lecture.learningGoals?.keyStructures.map((struct, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold"
                    >
                      {struct}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-slate-600">Dersin temel söz dizimi ve kalıpları</span>
                )}
              </div>
            </div>
          </div>

          {/* 3. Günlük Hayat */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider mb-2">
                <Compass className="w-4 h-4 text-emerald-600" />
                <span>3. Günlük Hayatta Kullanım</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                {lecture.learningGoals?.realLifeUtility || lecture.coreConcept.whyItMatters}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM B: KONUYU ANLAYALIM
          ========================================================================= */}
      <section 
        id="section-b" 
        className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-6"
      >
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">
            B
          </span>
          <span className="text-xs font-bold text-indigo-700 tracking-wider uppercase">
            Temel Mantık ve Dil Felsefesi
          </span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            Konuyu Anlayalım: Neden ve Nasıl Kullanılır?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Ezberlemek yerine anadili konuşucularının düşünme mekanizmasını kavrayın
          </p>
        </div>

        {/* 1. Basit Türkçe Açıklama */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>Basit ve Açık Türkçe Açıklama</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            {lecture.coreUnderstanding?.simpleExplanation || lecture.introduction}
          </p>
        </div>

        {/* 2. Dil Mantığı & Neden Kullanıldığı */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2">
            <h3 className="text-xs font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1.5">
              <Brain className="w-4 h-4 text-indigo-600" />
              <span>İngilizcedeki Mantığı</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {lecture.coreUnderstanding?.linguisticLogic || lecture.coreConcept.explanation}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
            <h3 className="text-xs font-bold text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Ne Zaman ve Neden İhtiyaç Duyulur?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {lecture.coreUnderstanding?.whenAndWhy || lecture.coreConcept.whyItMatters}
            </p>
          </div>
        </div>

        {/* 3. Önceki Bilgilerle Bağlantı */}
        {lecture.coreUnderstanding?.prerequisiteConnection && (
          <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">Önceki Derslerle Bağlantı: </span>
              <span>{lecture.coreUnderstanding.prerequisiteConnection}</span>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          ÖĞRETMEN YAZI TAHTASI — BLACKBOARD TEACHING SYSTEM
          ========================================================================= */}
      {lecture.blackboard && (
        <BlackboardView 
          blackboard={lecture.blackboard} 
          lessonTitle={lesson.title} 
          lessonLevel={lesson.level} 
        />
      )}

      {/* LIVE TEACHER AUDIO STUDIO (Doğal Çift Dilli Öğretmen Seslendirmesi) */}
      <LiveTeacherStudio lecture={lecture} lesson={lesson} />

      {/* =========================================================================
          BÖLÜM C: KURALI ADIM ADIM ÖĞREN
          ========================================================================= */}
      <section 
        id="section-c" 
        className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-6"
      >
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">
            C
          </span>
          <span className="text-xs font-bold text-indigo-700 tracking-wider uppercase">
            Adım Adım Pedagojik Kurallar
          </span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            Kuralı Adım Adım Öğren
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Her adımda kuralın nasıl kurulduğunu, formülünü ve dikkat edilmesi gereken ayrıntıları inceleyin
          </p>
        </div>

        <div className="space-y-4">
          {lecture.breakdownSteps.map((step, idx) => (
            <div 
              key={idx} 
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  {step.stepNumber || idx + 1}
                </div>

                <div className="flex-1 min-w-0 space-y-3">
                  <h3 className="font-bold text-slate-900 text-base">
                    {step.title}
                  </h3>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    {step.content}
                  </p>

                  {/* Syntax Formula */}
                  {step.formula && (
                    <div className="p-3.5 rounded-xl bg-slate-900 text-indigo-300 font-mono text-xs overflow-x-auto shadow-2xs flex items-center gap-2">
                      <span className="text-slate-400 font-sans font-bold text-[11px] uppercase shrink-0">Formül:</span>
                      <span className="font-semibold">{step.formula}</span>
                    </div>
                  )}

                  {/* Key Target Phrase */}
                  {step.keyPhrase && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-100/80 border border-indigo-200 text-indigo-900 font-semibold text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{step.keyPhrase}</span>
                    </div>
                  )}

                  {/* Pedagogical Rationale */}
                  {step.rationale && (
                    <div className="text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-800">Neden Böyle? </span>
                      {step.rationale}
                    </div>
                  )}

                  {/* Critical Warning / Exception */}
                  {step.warningNote && (
                    <div className="text-xs text-rose-800 bg-rose-50 p-3 rounded-xl border border-rose-200 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Dikkat Edilmesi Gereken Ayrıntı: </span>
                        <span>{step.warningNote}</span>
                      </div>
                    </div>
                  )}

                  {/* Bulleted Sub-points */}
                  {step.subPoints && step.subPoints.length > 0 && (
                    <ul className="space-y-1.5 pt-1">
                      {step.subPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-2" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM D: ÖRNEKLERLE ÖĞREN
          ========================================================================= */}
      <section 
        id="section-d" 
        className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-6"
      >
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">
            D
          </span>
          <span className="text-xs font-bold text-indigo-700 tracking-wider uppercase">
            Model Cümleler ve Anlatım
          </span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            Örneklerle Öğren
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Her örneği İngilizce söz dizimi, Türkçe karşılığı ve kuralın neden uygulandığı açıklamasıyla inceleyin
          </p>
        </div>

        <div className="space-y-4">
          {lesson.examples.map((example, eIdx) => (
            <div 
              key={example.id || eIdx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-indigo-300 transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-700 text-xs font-extrabold flex items-center justify-center">
                    {eIdx + 1}
                  </span>
                  {example.grammarCategory && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {example.grammarCategory}
                    </span>
                  )}
                </div>

                <AudioButton text={example.en} size="md" showSpeedToggle label="Dinle" />
              </div>

              {/* 3-Part Layout: İngilizce, Türkçe, Açıklama */}
              <div className="space-y-2 pt-1">
                {/* 1. İngilizce */}
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-bold text-indigo-600 uppercase shrink-0 w-20">
                    İngilizce:
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {renderHighlightedSentence(example.en, example.highlightedWords)}
                  </p>
                </div>

                {/* 2. Türkçe */}
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-bold text-slate-500 uppercase shrink-0 w-20">
                    Türkçe:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    {example.tr}
                  </p>
                </div>

                {/* 3. Açıklama */}
                <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-amber-600 uppercase shrink-0 w-20 mt-0.5">
                    Açıklama:
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex-1">
                    {example.breakdownNote || example.contextNote || 'Hedef yapı cümledeki konumuna ve şahıs uyumuna göre doğru çekimlenmiştir.'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          BÖLÜM E: DOĞRU VE YANLIŞ KULLANIMI KARŞILAŞTIR
          ========================================================================= */}
      {lecture.commonMistakes && lecture.commonMistakes.length > 0 && (
        <section 
          id="section-e" 
          className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-6"
        >
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-rose-600 text-white font-extrabold text-xs flex items-center justify-center">
              E
            </span>
            <span className="text-xs font-bold text-rose-700 tracking-wider uppercase">
              Hata Analizi ve Karşılaştırma
            </span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
              Doğru ve Yanlış Kullanımı Karşılaştır
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Türkçe düşünerek yapılan yaygın çeviri hatalarını ve doğru İngilizce refleksini inceleyin
            </p>
          </div>

          <div className="space-y-4">
            {lecture.commonMistakes.map((mistake, mIdx) => (
              <div 
                key={mIdx} 
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3.5"
              >
                {/* 2-Column Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Yanlış Örnek */}
                  <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 text-rose-950">
                    <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                      ❌ Yanlış Örnek
                    </span>
                    <span className="text-xs sm:text-sm font-semibold line-through">
                      "{mistake.wrongExample}"
                    </span>
                  </div>

                  {/* Doğru Örnek */}
                  <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                      ✅ Doğru Örnek
                    </span>
                    <span className="text-xs sm:text-sm font-bold">
                      "{mistake.correctExample}"
                    </span>
                  </div>
                </div>

                {/* Hatanın Nedeni */}
                <div className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900">Hatanın Nedeni: </span>
                  {mistake.rootCause}
                </div>

                {/* Nasıl Önlenir / Akılda Kalıcı İpucu */}
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Öğrencinin Benzer Hataları Önleme Yolu: </span>
                    <span>{mistake.memoryTip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================================
          BÖLÜM F: GÜNLÜK HAYATTA KULLAN
          ========================================================================= */}
      {lecture.realWorldContext && (
        <section 
          id="section-f" 
          className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-md scroll-mt-24 space-y-6"
        >
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-indigo-500 text-white font-extrabold text-xs flex items-center justify-center">
              F
            </span>
            <span className="text-xs font-bold text-indigo-300 tracking-wider uppercase">
              Gerçek Yaşam Sahnesi
            </span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
              Günlük Hayatta Kullan
            </h2>
            <p className="text-xs sm:text-sm text-indigo-200/90 mt-1">
              Bu yapının gerçek dünyada hangi durumda ve nasıl kullanıldığını canlı bir diyalogla görün
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-xs font-bold text-indigo-300 block uppercase tracking-wider">
              {lecture.realWorldContext.scenarioTitle}
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {lecture.realWorldContext.description}
            </p>
          </div>

          {lecture.realWorldContext.dialogue && lecture.realWorldContext.dialogue.length > 0 && (
            <div className="space-y-3">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block">
                Örnek Canlı Diyalog:
              </span>
              <div className="space-y-2.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                {lecture.realWorldContext.dialogue.map((turn, tIdx) => (
                  <div key={tIdx} className="text-xs sm:text-sm flex items-start justify-between gap-3 pb-2 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="flex-1 space-y-0.5">
                      <div className="flex items-baseline gap-2">
                        {turn.speaker && (
                          <span className="font-bold text-indigo-300 shrink-0">{turn.speaker}:</span>
                        )}
                        <span className="text-white font-medium">{turn.textEn}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 pl-4">
                        {turn.textTr}
                      </div>
                    </div>
                    <AudioButton text={turn.textEn} size="sm" showSpeedToggle={tIdx === 0} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* =========================================================================
          BÖLÜM G: KENDİN UYGULA (3 Aşamalı Kademeli İskele)
          ========================================================================= */}
      {guidedSteps.length > 0 && (
        <section 
          id="section-g" 
          className="bg-white rounded-3xl border-2 border-indigo-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-6"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">
                G
              </span>
              <span className="text-xs font-bold text-indigo-700 tracking-wider uppercase">
                Kademeli Alıştırma (İskele)
              </span>
            </div>

            <span className="text-xs font-bold text-slate-500">
              Adım {activeGuidedTier + 1} / {guidedSteps.length}
            </span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
              Kendin Uygula: Kademeli Cümle Kurma
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Öğrendiğiniz yapıyla kendi cümlenizi kurun: 1. adımda rehberlik alın, 2. adımda desteği azaltın, 3. adımda bağımsız uygulayın.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-3 gap-2">
            {guidedSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveGuidedTier(idx);
                  setGuidedSelectedWords([]);
                  setGuidedChecked(false);
                  setGuidedIsCorrect(false);
                }}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                  activeGuidedTier === idx
                    ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500/20'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-indigo-200'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-black ${
                    activeGuidedTier === idx ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold truncate">
                    {idx === 0 ? 'Tam Rehberli' : idx === 1 ? 'Azalan Destek' : 'Bağımsız'}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 line-clamp-1">
                  {step.label}
                </p>
              </button>
            ))}
          </div>

          {/* Active Tier Interactive Card */}
          {currentGuidedStep && (
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                  {currentGuidedStep.label}
                </span>

                <AudioButton text={currentGuidedStep.targetEn} size="sm" />
              </div>

              {/* Prompt */}
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                  Kurulacak Türkçe Cümle:
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-900">
                  "{currentGuidedStep.promptTr}"
                </p>
                <p className="text-xs text-indigo-700 mt-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span><strong>Rehberlik / İpucu: </strong>{currentGuidedStep.guidanceTr}</span>
                </p>
              </div>

              {/* Word Chips Bank */}
              {currentGuidedStep.scaffoldWords && currentGuidedStep.scaffoldWords.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">
                    Kelimelere tıklayarak cümlenizi oluşturun:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentGuidedStep.scaffoldWords.map((word, wIdx) => {
                      const wordKey = `${word}__${wIdx}`;
                      const isSelected = guidedSelectedWords.includes(wordKey);
                      return (
                        <button
                          key={wIdx}
                          disabled={guidedChecked}
                          onClick={() => handleToggleWord(word, wIdx)}
                          className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-600 text-white shadow-xs'
                              : 'bg-white border border-slate-300 text-slate-800 hover:border-indigo-400'
                          }`}
                        >
                          {word}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* User Assembled Workspace */}
              <div className="p-4 rounded-xl bg-white border border-dashed border-indigo-200 min-h-[52px] flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {guidedSelectedWords.length > 0 ? (
                    guidedSelectedWords.map((w, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-900 font-bold text-xs sm:text-sm"
                      >
                        {w.split('__')[0]}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-400 italic">
                      Yukarıdaki kelimelere tıklayarak cümlenizi buraya dizin...
                    </span>
                  )}
                </div>

                {guidedSelectedWords.length > 0 && !guidedChecked && (
                  <button
                    onClick={handleResetGuidedTier}
                    className="text-[11px] font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    Temizle
                  </button>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {!guidedChecked ? (
                  <button
                    disabled={guidedSelectedWords.length === 0}
                    onClick={handleCheckGuidedSentence}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm hover:bg-indigo-700 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    Cümleyi Kontrol Et
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleResetGuidedTier}
                      className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 cursor-pointer"
                    >
                      Tekrar Dene
                    </button>
                    {activeGuidedTier < guidedSteps.length - 1 && (
                      <button
                        onClick={handleNextGuidedTier}
                        className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Sonraki Aşamaya Geç</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </>
                )}
              </div>

              {/* Feedback Explanation */}
              {guidedChecked && (
                <div className={`p-4 rounded-xl text-xs sm:text-sm animate-fadeIn ${
                  guidedIsCorrect
                    ? 'bg-emerald-50 border border-emerald-300 text-emerald-950 font-medium'
                    : 'bg-amber-50 border border-amber-300 text-amber-950 font-medium'
                }`}>
                  <div className="font-bold flex items-center gap-2 mb-1.5">
                    {guidedIsCorrect ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Tebrikler! Cümleyi doğru inşa ettiniz.</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>Model Çözümü İnceleyin:</span>
                      </>
                    )}
                  </div>
                  <p className="font-mono font-bold text-slate-900 bg-white/70 p-2 rounded-lg border border-slate-200 mb-2">
                    {currentGuidedStep.targetEn}
                  </p>
                  <p className="leading-relaxed text-slate-700">
                    {currentGuidedStep.explanation}
                  </p>
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* =========================================================================
          BÖLÜM H: DERS ÖZETİ VE HIZLI KONTROL
          ========================================================================= */}
      <section 
        id="section-h" 
        className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-6"
      >
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center">
            H
          </span>
          <span className="text-xs font-bold text-indigo-700 tracking-wider uppercase">
            Özet ve Anlama Kontrolü
          </span>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
            Ders Özeti ve Hızlı Kontrol
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            En önemli altın kuralları gözden geçirin ve anlama kontrolüyle bilginizi ölçün
          </p>
        </div>

        {/* 3-5 Bullet Point Takeaways */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-indigo-600" />
            <span>En Önemli Noktalar (Dersin Özeti)</span>
          </h3>
          <ul className="space-y-2">
            {(lecture.summarySection?.takeaways || lesson.summaryTakeaways || []).map((point: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* En Sık Karıştırılan Nokta (Pitfall Callout) */}
        {lecture.summarySection?.mostConfusedPoint && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1.5">
            <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>En Sık Karıştırılan Nokta</span>
            </div>
            <p className="text-xs sm:text-sm text-rose-950 font-bold">
              {lecture.summarySection.mostConfusedPoint.trap}
            </p>
            <p className="text-xs text-rose-900 leading-relaxed">
              {lecture.summarySection.mostConfusedPoint.explanation}
            </p>
          </div>
        )}

        {/* Quick Comprehension Check */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 via-white to-slate-50 border-2 border-indigo-200 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Anlama Kontrol Sorusu
              </h3>
            </div>

            <AudioButton text={lecture.quickCheck.question} size="sm" showSpeedToggle />
          </div>

          <p className="text-sm sm:text-base font-semibold text-slate-800">
            {lecture.quickCheck.question}
          </p>

          <div className="space-y-2.5">
            {lecture.quickCheck.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectOption = idx === lecture.quickCheck.correctIndex;

              let buttonStyle = "bg-white border-slate-200 hover:border-indigo-300 text-slate-700";

              if (hasSubmittedCheck) {
                if (isCorrectOption) {
                  buttonStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold ring-2 ring-emerald-400/20";
                } else if (isSelected && !isCorrectOption) {
                  buttonStyle = "bg-rose-50 border-rose-300 text-rose-800 line-through";
                } else {
                  buttonStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                }
              } else if (isSelected) {
                buttonStyle = "bg-indigo-50 border-indigo-500 text-indigo-900 font-semibold";
              }

              return (
                <div
                  key={idx}
                  role="button"
                  tabIndex={hasSubmittedCheck ? -1 : 0}
                  aria-disabled={hasSubmittedCheck}
                  onClick={() => !hasSubmittedCheck && handleSelectOption(idx)}
                  onKeyDown={(e) => {
                    if (!hasSubmittedCheck && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleSelectOption(idx);
                    }
                  }}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${buttonStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <AudioButton text={option} size="sm" />
                    {hasSubmittedCheck && isCorrectOption && (
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {hasSubmittedCheck && isSelected && !isCorrectOption && (
                      <X className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {hasSubmittedCheck && (
            <div className={`mt-4 p-4 rounded-xl text-xs sm:text-sm animate-fadeIn ${
              isCheckCorrect 
                ? 'bg-emerald-100/70 border border-emerald-300 text-emerald-950 font-medium' 
                : 'bg-rose-100/70 border border-rose-300 text-rose-950 font-medium'
            }`}>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="font-bold flex items-center gap-1.5">
                  {isCheckCorrect ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-700" />
                      <span>🎉 Tebrikler! Doğru kavrayış.</span>
                    </>
                  ) : (
                    <>
                      <Brain className="w-4 h-4 text-rose-700" />
                      <span>💡 Hata Analizi (SRS Hata Bankasına Kaydedildi):</span>
                    </>
                  )}
                </div>

                {!isCheckCorrect && (
                  <button
                    onClick={handleRetryCheck}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-rose-300 text-rose-800 hover:bg-rose-50 font-bold text-xs transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Tekrar Dene</span>
                  </button>
                )}
              </div>
              <p className="leading-relaxed">{lecture.quickCheck.explanation}</p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          CONTINUE TO EXERCISES ACTION
          ========================================================================= */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 text-white shadow-lg">
        <div>
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
            Konu Anlatımı Tamamlandı
          </span>
          <p className="text-sm text-slate-300 mt-0.5">
            Öğrendiklerinizi pekiştirmek için interaktif alıştırmalara ve cümle kurucuya geçin.
          </p>
        </div>

        <button
          onClick={onContinue}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm transition-all shadow-md active:scale-98 cursor-pointer shrink-0"
        >
          <span>Alıştırmalara Geç (+{lesson.xpReward} XP)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
