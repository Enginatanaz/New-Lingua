import React, { useState } from 'react';
import { 
  Check, 
  X, 
  RotateCcw, 
  ArrowRight, 
  Sparkles, 
  HelpCircle, 
  Info, 
  CheckCircle2 
} from 'lucide-react';
import { LessonData } from '../../types/lesson';
import { AdaptiveLessonSupplement } from '../../types/adaptive';
import { BlackboardView } from '../teacher/BlackboardView';
import { AudioButton } from '../common/AudioButton';
import { addMistake } from '../../services/srsEngine';

interface StepSimplifiedLectureProps {
  lesson: LessonData;
  adaptiveSupplement?: AdaptiveLessonSupplement | null;
  onContinue: () => void;
}

export const StepSimplifiedLecture: React.FC<StepSimplifiedLectureProps> = ({
  lesson,
  adaptiveSupplement,
  onContinue,
}) => {
  const lecture = lesson.teacherLecture;

  // Quick Check Interactive State
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmittedCheck, setHasSubmittedCheck] = useState<boolean>(false);

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

  const isCheckCorrect = selectedOption === lecture.quickCheck.correctIndex;

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
            className="text-amber-800 bg-amber-100 font-bold px-1.5 py-0.5 rounded-sm inline-block"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Select top 2-3 most representative examples without clutter
  const keyExamples = (lesson.examples || []).slice(0, 3);

  // Select top 1-2 most critical common mistakes without overwhelming
  const keyMistakes = (lecture.commonMistakes || []).slice(0, 2);

  // Key takeaway bullets
  const takeaways = (lecture.summarySection?.takeaways || lesson.summaryTakeaways || []).slice(0, 3);

  return (
    <article className="space-y-6 max-w-4xl mx-auto pb-10 animate-fadeIn">
      {/* =========================================================================
          1. DERS BAŞLIĞI (Küçük, Net ve Belirgin)
          ========================================================================= */}
      <header className="border-b border-slate-200 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200">
              Ders {lesson.id} • {lesson.level}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {lesson.moduleName}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              +{lesson.xpReward} XP
            </span>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {lesson.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              {lecture.learningGoals?.targetObjective || lecture.concreteCompetency || lesson.learningObjective}
            </p>
          </div>

          <AudioButton text={lesson.title} size="md" label="Dinle" />
        </div>
      </header>

      {/* =========================================================================
          2. KISA KONU ANLATIMI (Kısa Paragraflar ve Maddeler)
          ========================================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-indigo-700 mb-1 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Konunun Özü ve Temel Mantığı</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
            {lecture.coreUnderstanding?.simpleExplanation || lecture.introduction}
          </p>
        </div>

        {/* 2-3 Bullet points combining usage & logic */}
        <div className="pt-2 border-t border-slate-100 space-y-2 text-xs sm:text-sm">
          {lecture.coreUnderstanding?.whenAndWhy && (
            <div className="flex items-start gap-2 text-slate-700">
              <span className="font-bold text-slate-900 shrink-0">🎯 Ne Zaman:</span>
              <span>{lecture.coreUnderstanding.whenAndWhy}</span>
            </div>
          )}

          {lecture.coreUnderstanding?.linguisticLogic && (
            <div className="flex items-start gap-2 text-slate-700">
              <span className="font-bold text-slate-900 shrink-0">💡 Dil Mantığı:</span>
              <span>{lecture.coreUnderstanding.linguisticLogic}</span>
            </div>
          )}

          {lecture.learningGoals?.keyStructures && lecture.learningGoals.keyStructures.length > 0 && (
            <div className="flex items-center gap-2 pt-1">
              <span className="font-bold text-slate-900 text-xs shrink-0">🔑 Temel Yapı:</span>
              <div className="flex flex-wrap gap-1.5">
                {lecture.learningGoals.keyStructures.map((struct, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 font-mono text-[11px] font-semibold"
                  >
                    {struct}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          3. SİYAH TAHTA (Dersin En Önemli Kuralı veya Tablosu — Tek Ana Alan)
          ========================================================================= */}
      {lecture.blackboard && (
        <BlackboardView 
          blackboard={lecture.blackboard} 
          lessonTitle={lesson.title} 
          lessonLevel={lesson.level} 
          streamlined={true}
        />
      )}

      {/* =========================================================================
          4. GEREKLİ AÇIKLAMA VE MODEL ÖRNEKLER (Tek Birleşik Kart)
          ========================================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-5">
        {/* Step Breakdown (Concise 1-3 steps without nested duplicate boxes) */}
        {lecture.breakdownSteps && lecture.breakdownSteps.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Adım Adım Kural
            </h3>

            <div className="space-y-2.5">
              {lecture.breakdownSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                  <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1 space-y-1">
                    <p className="leading-relaxed">
                      <strong className="text-slate-900">{step.title}: </strong>
                      {step.content}
                    </p>

                    {step.formula && (
                      <div className="font-mono text-xs text-indigo-900 bg-indigo-50/80 px-2.5 py-1 rounded-md border border-indigo-100 inline-block font-semibold">
                        Formül: {step.formula}
                      </div>
                    )}

                    {step.warningNote && (
                      <div className="text-xs text-amber-900 bg-amber-50/80 p-2 rounded-md border border-amber-200/70 flex items-start gap-1.5 mt-1">
                        <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>Dikkat: </strong>{step.warningNote}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected Model Sentences */}
        {keyExamples.length > 0 && (
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Model Cümleler
            </h3>

            <div className="divide-y divide-slate-100">
              {keyExamples.map((ex, eIdx) => (
                <div key={ex.id || eIdx} className="py-2.5 first:pt-0 last:pb-0 flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold text-indigo-600 shrink-0">
                        {eIdx + 1}.
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 font-sans">
                        {renderHighlightedSentence(ex.en, ex.highlightedWords)}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 pl-4">
                      {ex.tr}
                    </p>
                    {ex.breakdownNote && (
                      <p className="text-[11px] text-slate-500 italic pl-4">
                        💡 {ex.breakdownNote}
                      </p>
                    )}
                  </div>

                  <AudioButton text={ex.en} size="sm" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Common Pitfall Comparison (Clean side-by-side or stacked) */}
        {keyMistakes.length > 0 && (
          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Sık Yapılan Hata ve Doğrusu
            </h3>

            <div className="space-y-2">
              {keyMistakes.map((m, mIdx) => (
                <div key={mIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <div className="flex items-center gap-2 text-rose-700">
                      <span className="font-bold">❌ Yanlış:</span>
                      <span className="line-through">{m.wrongExample}</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                      <span className="font-bold">✅ Doğru:</span>
                      <span>{m.correctExample}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 pt-0.5">
                    <strong>Neden? </strong>{m.rootCause} {m.memoryTip && `(İpucu: ${m.memoryTip})`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          5. KISA UYGULAMA VEYA ÖZET & DEVAM BUTONU
          ========================================================================= */}
      <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-5">
        {/* Quick Summary Takeaways */}
        {takeaways.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ders Özeti</span>
            </h3>
            <ul className="space-y-1.5">
              {takeaways.map((point: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-2" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Quick Check Question */}
        {lecture.quickCheck && (
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Hızlı Kontrol Sorusu
                </h4>
              </div>
              <AudioButton text={lecture.quickCheck.question} size="sm" />
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              {lecture.quickCheck.question}
            </p>

            <div className="space-y-2">
              {lecture.quickCheck.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectOption = idx === lecture.quickCheck.correctIndex;

                let optStyle = "bg-white border-slate-200 hover:border-indigo-300 text-slate-700";

                if (hasSubmittedCheck) {
                  if (isCorrectOption) {
                    optStyle = "bg-emerald-50 border-emerald-400 text-emerald-900 font-semibold ring-1 ring-emerald-400";
                  } else if (isSelected && !isCorrectOption) {
                    optStyle = "bg-rose-50 border-rose-300 text-rose-800 line-through";
                  } else {
                    optStyle = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                  }
                } else if (isSelected) {
                  optStyle = "bg-indigo-50 border-indigo-500 text-indigo-900 font-semibold";
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={hasSubmittedCheck}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <AudioButton text={option} size="sm" />
                      {hasSubmittedCheck && isCorrectOption && (
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {hasSubmittedCheck && isSelected && !isCorrectOption && (
                        <X className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {hasSubmittedCheck && (
              <div className={`p-3 rounded-xl text-xs sm:text-sm animate-fadeIn ${
                isCheckCorrect 
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium' 
                  : 'bg-rose-50 border border-rose-200 text-rose-950 font-medium'
              }`}>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold">
                    {isCheckCorrect ? '🎉 Doğru cevap!' : '💡 Açıklama:'}
                  </span>
                  {!isCheckCorrect && (
                    <button
                      onClick={handleRetryCheck}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-rose-300 text-rose-800 hover:bg-rose-50 font-bold text-xs cursor-pointer"
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
        )}

        {/* Continue to Exercises Action */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Konuyu kavradıysanız interaktif alıştırmalarla pekiştirmeye geçebilirsiniz.
          </div>

          <button
            onClick={onContinue}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-98 cursor-pointer shrink-0"
          >
            <span>Alıştırmalara Geç (+{lesson.xpReward} XP)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
};
