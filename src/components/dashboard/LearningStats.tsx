import React, { useMemo } from 'react';
import { 
  CheckCircle2, 
  Flame, 
  Award, 
  BookmarkCheck, 
  BrainCircuit,
  TrendingUp
} from 'lucide-react';
import { getAllWordRecords } from '../../services/studentMemoryEngine';
import { getSRSStats } from '../../services/srsEngine';

interface LearningStatsProps {
  completedCount: number;
  totalLessonCount: number;
  totalXp: number;
  streakDays: number;
  onOpenMistakeBank?: () => void;
}

export const LearningStats: React.FC<LearningStatsProps> = ({
  completedCount,
  totalLessonCount,
  totalXp,
  streakDays,
  onOpenMistakeBank,
}) => {
  const words = getAllWordRecords();
  const srsStats = getSRSStats();

  const masteredWordsCount = useMemo(() => {
    return words.filter((w) => w.status === 'mastered' || w.status === 'recalled').length;
  }, [words]);

  const percentCompleted = totalLessonCount > 0 
    ? Math.round((completedCount / totalLessonCount) * 100) 
    : 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
      {/* 1. Tamamlanan Dersler */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between">
        <div className="flex items-center justify-between text-slate-500 mb-2">
          <span className="text-xs font-semibold">Tamamlanan Ders</span>
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>

        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl sm:text-2xl font-black text-slate-900 tabular-nums">
              {completedCount}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              / {totalLessonCount}
            </span>
          </div>

          <div className="mt-2.5 flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(percentCompleted, 3)}%` }}
              />
            </div>
            <span className="text-[11px] font-bold text-blue-600 tabular-nums">
              %{percentCompleted}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Öğrenilen Kelimeler */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between">
        <div className="flex items-center justify-between text-slate-500 mb-2">
          <span className="text-xs font-semibold">Kelime Hafızası</span>
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <BookmarkCheck className="w-4 h-4" />
          </div>
        </div>

        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl sm:text-2xl font-black text-slate-900 tabular-nums">
              {masteredWordsCount}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              / {words.length} kelime
            </span>
          </div>

          <p className="mt-2 text-[11px] text-emerald-700 font-medium truncate">
            {words.length > 0 ? `${words.length} kelime takip ediliyor` : 'Derslerden kelime toplanıyor'}
          </p>
        </div>
      </div>

      {/* 3. Toplam Puan (XP) */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between">
        <div className="flex items-center justify-between text-slate-500 mb-2">
          <span className="text-xs font-semibold">Toplam Deneyim</span>
          <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Award className="w-4 h-4" />
          </div>
        </div>

        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-black text-slate-900 tabular-nums">
              {totalXp}
            </span>
            <span className="text-xs text-amber-600 font-bold">
              XP
            </span>
          </div>

          <p className="mt-2 text-[11px] text-slate-500 font-medium truncate">
            Başarı basamağı: Dil Kaşifi
          </p>
        </div>
      </div>

      {/* 4. Öğrenme Serisi */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between">
        <div className="flex items-center justify-between text-slate-500 mb-2">
          <span className="text-xs font-semibold">Öğrenme Serisi</span>
          <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <Flame className="w-4 h-4 fill-rose-500" />
          </div>
        </div>

        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-black text-slate-900 tabular-nums">
              {streakDays}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Gün
            </span>
          </div>

          <p className="mt-2 text-[11px] text-rose-600 font-semibold truncate flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block" />
            Alev söndürülmedi!
          </p>
        </div>
      </div>
    </div>
  );
};
