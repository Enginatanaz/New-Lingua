import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Award, 
  Play,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { CurriculumLessonDef } from '../../types/curriculum';
import { getFullCurriculumLessons, CEFR_LEVELS_INFO } from '../../data/curriculumData';

interface RecentLessonsProps {
  completedLessonIds: number[];
  currentLessonId: number;
  onOpenLesson: (id: number) => void;
}

export const RecentLessons: React.FC<RecentLessonsProps> = ({
  completedLessonIds,
  currentLessonId,
  onOpenLesson,
}) => {
  const allCurriculum = getFullCurriculumLessons();

  // Find recent completed lessons (reversed to show most recent first)
  const recentCompleted = completedLessonIds
    .map((id) => allCurriculum.find((l) => l.id === id))
    .filter((l): l is CurriculumLessonDef => !!l)
    .reverse()
    .slice(0, 3);

  // If no completed lessons, show the first three curriculum lessons as starter recommendations
  const recommendedStarters = recentCompleted.length === 0
    ? [allCurriculum[0], allCurriculum[1], allCurriculum[2]].filter(Boolean)
    : [];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500">
          {recentCompleted.length > 0 ? 'Son İşlediğin Dersler' : 'Öğrenmeye İlk Adım'}
        </h3>
        {recentCompleted.length > 0 && (
          <span className="text-xs font-semibold text-blue-600">
            {completedLessonIds.length} Ders Tamamlandı
          </span>
        )}
      </div>

      {recentCompleted.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {recentCompleted.map((lesson) => {
            const levelInfo = CEFR_LEVELS_INFO[lesson.level] || CEFR_LEVELS_INFO.A1;
            return (
              <div
                key={lesson.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-slate-300 shadow-xs flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      {lesson.code}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${levelInfo.colorScheme.bg} ${levelInfo.colorScheme.text}`}>
                      {lesson.level}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-1">
                    {lesson.title}
                  </h4>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {lesson.description}
                  </p>
                </div>

                <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Tamamlandı</span>
                  </div>

                  <button
                    onClick={() => onOpenLesson(lesson.id)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Tekrar Et</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty / Starter State */
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50/60 rounded-2xl p-5 sm:p-6 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>İlk Dersi Başlatmaya Hazır Mısınız?</span>
            </div>
            <h4 className="text-base sm:text-lg font-extrabold text-slate-900">
              #1 "Tanışma İfadeleri ve Kendini Tanıtma" (A1-01)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              İngilizce dünyasına ilk adımı atın. Günlük selamlama kalıplarını, adınızı söylemeyi ve temel diyalogları öğrenin.
            </p>
          </div>

          <button
            onClick={() => onOpenLesson(1)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer shrink-0"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Dersi Başlat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
