import React, { useMemo } from 'react';
import { 
  Target, 
  Flame, 
  CheckCircle2, 
  Circle, 
  BrainCircuit, 
  BookmarkCheck, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Award,
  AlertCircle
} from 'lucide-react';
import { LessonData } from '../../types/lesson';
import { getActiveStudentProfile, getAllWordRecords } from '../../services/studentMemoryEngine';
import { getSRSStats } from '../../services/srsEngine';

interface RightStudyPanelProps {
  currentLesson: LessonData;
  isCurrentLessonCompleted: boolean;
  streakDays: number;
  totalXp: number;
  completedLessonCount: number;
  onOpenMistakeBank?: () => void;
  onNavigateTab: (tab: any) => void;
  onOpenLesson: (id: number) => void;
}

export const RightStudyPanel: React.FC<RightStudyPanelProps> = ({
  currentLesson,
  isCurrentLessonCompleted,
  streakDays,
  totalXp,
  completedLessonCount,
  onOpenMistakeBank,
  onNavigateTab,
  onOpenLesson,
}) => {
  const studentProfile = getActiveStudentProfile();
  const wordRecords = getAllWordRecords();
  const srsStats = getSRSStats();

  const masteredCount = useMemo(() => {
    return wordRecords.filter((w) => w.status === 'mastered' || w.status === 'recalled').length;
  }, [wordRecords]);

  const needsReviewCount = useMemo(() => {
    return wordRecords.filter((w) => w.status === 'needs_review').length;
  }, [wordRecords]);

  // Daily goals computation
  const dailyGoals = [
    {
      id: 'lesson_complete',
      title: 'Bugünkü dersi tamamla',
      isCompleted: isCurrentLessonCompleted,
      detail: currentLesson.code,
    },
    {
      id: 'vocab_review',
      title: 'En az 5 kelime çalış',
      isCompleted: wordRecords.length >= 5,
      detail: `${Math.min(wordRecords.length, 5)} / 5`,
    },
    {
      id: 'srs_check',
      title: 'Aralıklı tekrarı temiz tut',
      isCompleted: srsStats.dueCount === 0,
      detail: srsStats.dueCount > 0 ? `${srsStats.dueCount} telafi bekliyor` : 'Temiz',
    },
  ];

  const completedGoalsCount = dailyGoals.filter((g) => g.isCompleted).length;

  // Days of week for streak
  const daysOfWeek = [
    { key: 'pzt', label: 'P' },
    { key: 'sal', label: 'S' },
    { key: 'car', label: 'Ç' },
    { key: 'per', label: 'P' },
    { key: 'cum', label: 'C' },
    { key: 'cmt', label: 'C' },
    { key: 'paz', label: 'P' },
  ];

  // Active days simulated based on streak
  const activeDayCount = Math.min(streakDays, 7);

  return (
    <aside className="w-full space-y-4">
      {/* 1. Günlük Hedefler Kartı */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Target className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Bugünün Hedefleri
            </h4>
          </div>
          <span className="text-[11px] font-bold text-blue-600 tabular-nums">
            {completedGoalsCount} / {dailyGoals.length}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${(completedGoalsCount / dailyGoals.length) * 100}%` }}
          />
        </div>

        {/* Checklist */}
        <div className="space-y-2.5">
          {dailyGoals.map((goal) => (
            <div 
              key={goal.id}
              className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${
                goal.isCompleted 
                  ? 'bg-emerald-50/60 border-emerald-200/70 text-emerald-900' 
                  : 'bg-slate-50 border-slate-200/70 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                {goal.isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-400 shrink-0" />
                )}
                <span className={`truncate font-medium ${goal.isCompleted ? 'line-through text-emerald-800/80' : ''}`}>
                  {goal.title}
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 shrink-0 ml-1">
                {goal.detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Öğrenme Serisi (Weekly Streak Strip) */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Haftalık Seri
              </h4>
              <span className="text-[11px] font-semibold text-amber-600">
                {streakDays} Gün Kesintisiz
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1.5 pt-1">
          {daysOfWeek.map((day, idx) => {
            const isCompletedDay = idx < activeDayCount;
            return (
              <div key={idx} className="flex flex-col items-center gap-1">
                <span className="text-[10px] font-semibold text-slate-400">
                  {day.label}
                </span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs transition-all ${
                  isCompletedDay 
                    ? 'bg-amber-500 text-white shadow-xs' 
                    : 'bg-slate-100 text-slate-400'
                }`}>
                  {isCompletedDay ? '✓' : '·'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Kelime Ustalık Dağılımı */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <BookmarkCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              Kelime Durumu
            </h4>
          </div>
          <button 
            onClick={() => onNavigateTab('vocabulary')}
            className="text-[11px] font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
          >
            Tümü
          </button>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Ustalaşılan Kelime
            </span>
            <span className="font-bold text-slate-900 tabular-nums">{masteredCount}</span>
          </div>

          <div className="flex items-center justify-between text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Takip Edilen Kelime
            </span>
            <span className="font-bold text-slate-900 tabular-nums">{wordRecords.length}</span>
          </div>

          <div className="flex items-center justify-between text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Tekrar Bekleyen
            </span>
            <span className="font-bold text-amber-700 tabular-nums">{needsReviewCount}</span>
          </div>
        </div>
      </div>

      {/* 4. Aralıklı Tekrar & Hata Bankası Widget'ı */}
      <div className="bg-gradient-to-br from-indigo-900 to-[#102344] text-white rounded-2xl p-5 shadow-xs space-y-3 border border-indigo-800/80">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-indigo-300" />
            <h4 className="text-sm font-bold text-white">
              Tekrar & SRS Motoru
            </h4>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/10 text-indigo-200">
            Akıllı Telafi
          </span>
        </div>

        <p className="text-xs text-indigo-100/90 leading-relaxed">
          {srsStats.dueCount > 0 
            ? `${srsStats.dueCount} adet soru için unutma eğrisi eşiği aşıldı. Şimdi tekrar edin.`
            : 'Şu an telafi bekleyen hata yok. Neural hafızanız taze!'}
        </p>

        {onOpenMistakeBank && (
          <button
            onClick={onOpenMistakeBank}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            <span>{srsStats.dueCount > 0 ? 'Hataları Tekrar Et' : 'Hata Bankasını İncele'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* 5. Öğrenci Profil Rehberi */}
      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-1.5">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span>Öğretmen İpucu ({studentProfile.name})</span>
          <span className="text-[10px] text-slate-500 font-semibold uppercase">{studentProfile.currentLevel}</span>
        </div>
        <p className="text-[11px] text-slate-600 leading-relaxed">
          "Öğrendiğiniz cümleleri ses butonuna basarak yüksek sesle en az iki kez tekrar edin."
        </p>
      </div>
    </aside>
  );
};
