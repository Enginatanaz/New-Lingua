import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Lock, 
  Unlock, 
  Play, 
  Sparkles, 
  Compass, 
  Flag, 
  Trophy, 
  Award,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Search,
  BookOpen,
  Target,
  Flame,
  Clock,
  RotateCcw,
  Check,
  Star,
  Layers,
  GraduationCap,
  MessageSquare,
  Globe,
  Briefcase,
  Coffee,
  HelpCircle
} from 'lucide-react';
import { CEFRLevel, LessonData } from '../../types/lesson';
import { LessonDisplayStatus, CurriculumLessonDef } from '../../types/curriculum';
import { CEFR_LEVELS_INFO, CURRICULUM_MODULES, getFullCurriculumLessons } from '../../data/curriculumData';

interface LearningPathViewProps {
  selectedLevel: CEFRLevel;
  onSelectLevel: (level: CEFRLevel) => void;
  onOpenLesson: (lessonId: number) => void;
  completedLessonIds: number[];
  getLessonStatus: (lessonId: number) => LessonDisplayStatus;
  getLevelStats: (level: CEFRLevel) => {
    totalCount: number;
    completedCount: number;
    percent: number;
    isUnlocked: boolean;
    isCompleted: boolean;
  };
  unlockAllMode: boolean;
  onToggleUnlockMode: () => void;
  onResetStudentAccount?: () => void;
  onOpenMistakeBank?: () => void;
  dueMistakeCount?: number;
  streakDays: number;
  totalXp: number;
}

const levels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

// Module visual metadata with theme icons & descriptors
const MODULE_THEME_ICONS: Record<string, React.ElementType> = {
  'mod-a1-1': MessageSquare,
  'mod-a1-2': Coffee,
  'mod-a1-3': Clock,
  'mod-a1-4': Globe,
  'mod-a1-5': BookOpen,
  'mod-a1-6': Briefcase,
  'mod-a1-7': Target,
  'mod-a1-8': Award,
  'mod-a2-1': GraduationCap,
  'mod-a2-2': Compass,
  'mod-b1-1': Sparkles,
  'mod-b2-1': Trophy,
  'mod-c1-1': Star,
  'mod-c2-1': Award,
};

export const LearningPathView: React.FC<LearningPathViewProps> = ({
  selectedLevel,
  onSelectLevel,
  onOpenLesson,
  completedLessonIds,
  getLessonStatus,
  getLevelStats,
  unlockAllMode,
  onToggleUnlockMode,
  onResetStudentAccount,
  onOpenMistakeBank,
  dueMistakeCount = 0,
  streakDays,
  totalXp,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'next' | 'completed' | 'locked'>('all');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'mod-a1-1': true,
    'mod-a1-2': true,
    'mod-a2-1': true,
    'mod-b1-1': true,
    'mod-b2-1': true,
    'mod-c1-1': true,
    'mod-c2-1': true,
  });

  const levelInfo = CEFR_LEVELS_INFO[selectedLevel] || CEFR_LEVELS_INFO.A1;
  const levelStats = getLevelStats(selectedLevel);
  const allCurriculumLessons = useMemo(() => getFullCurriculumLessons(), []);

  // Filter modules for this level
  const currentModules = useMemo(() => {
    return CURRICULUM_MODULES.filter((m) => m.level === selectedLevel);
  }, [selectedLevel]);

  // Lessons grouped by module
  const lessonsByModule = useMemo(() => {
    const map = new Map<string, CurriculumLessonDef[]>();
    for (const mod of currentModules) {
      const lessons = allCurriculumLessons.filter((l) => l.moduleId === mod.id);
      map.set(mod.id, lessons);
    }
    return map;
  }, [currentModules, allCurriculumLessons]);

  // Next recommended lesson to study
  const nextTargetLesson = useMemo(() => {
    const levelLessons = allCurriculumLessons.filter((l) => l.level === selectedLevel);
    const uncompleted = levelLessons.find((l) => !completedLessonIds.includes(l.id));
    return uncompleted || levelLessons[0];
  }, [allCurriculumLessons, selectedLevel, completedLessonIds]);

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: prev[modId] === undefined ? false : !prev[modId],
    }));
  };

  const expandAll = () => {
    const next: Record<string, boolean> = {};
    currentModules.forEach((m) => { next[m.id] = true; });
    setExpandedModules(next);
  };

  const collapseAll = () => {
    const next: Record<string, boolean> = {};
    currentModules.forEach((m) => { next[m.id] = false; });
    setExpandedModules(next);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. INTERAKTIF CEFR YOL HARITASI & SEVIYE GECIS SERIDI (Top Navigation Strip) */}
      <div className="bg-gradient-to-br from-[#102344] via-[#162f58] to-[#102344] text-white rounded-3xl p-6 sm:p-8 border border-[#1e3e6d] shadow-lg relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute right-0 top-0 translate-x-20 -translate-y-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-0 translate-y-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header bar */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4 text-blue-400" />
              <span>Avrupa Dilleri Çerçevesi (CEFR) Öğrenme Yolu</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              A1’den C2’ye Kapsamlı İngilizce Yolculuğu
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Uluslararası standartlarda yapılandırılmış 488 derslik pedagojik müfredat. İlgili seviye durağına tıklayarak modül ve dersleri görüntüleyin.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15">
              <Flag className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-slate-200">
                Hedef: C2 Ustalık (488 Ders)
              </span>
            </div>

            {onResetStudentAccount && (
              <button
                onClick={() => {
                  if (window.confirm('Öğrenci hesabını sıfırlamak ve A1 Seviyesi Ders 1 sıfır durumuna dönmek istediğinize emin misiniz?')) {
                    onResetStudentAccount();
                  }
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/10 hover:bg-rose-500/20 text-slate-300 hover:text-rose-200 border border-white/15 text-xs font-bold transition-all cursor-pointer"
                title="Sıfırdan Öğrenci Durumuna Getir"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sıfırdan Başla</span>
              </button>
            )}
          </div>
        </div>

        {/* CEFR Level Track */}
        <div className="relative z-10 pt-8 pb-3 overflow-x-auto">
          <div className="min-w-[740px] relative px-4">
            {/* Connecting progress track line */}
            <div className="absolute left-10 right-10 top-11 h-1.5 bg-white/15 rounded-full pointer-events-none">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-400 rounded-full transition-all duration-700"
                style={{
                  width: selectedLevel === 'A1' ? '12%' :
                         selectedLevel === 'A2' ? '28%' :
                         selectedLevel === 'B1' ? '48%' :
                         selectedLevel === 'B2' ? '68%' :
                         selectedLevel === 'C1' ? '84%' : '100%'
                }}
              />
            </div>

            {/* 6 Level Stops */}
            <div className="grid grid-cols-6 gap-3 relative">
              {levels.map((lvl, idx) => {
                const info = CEFR_LEVELS_INFO[lvl];
                const stats = getLevelStats(lvl);
                const isSelected = selectedLevel === lvl;

                return (
                  <button
                    key={lvl}
                    onClick={() => onSelectLevel(lvl)}
                    className="flex flex-col items-center text-center group cursor-pointer transition-transform hover:-translate-y-1 outline-hidden"
                  >
                    {/* Node circle */}
                    <div className="relative mb-3">
                      <div 
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-300 shadow-md ${
                          isSelected
                            ? 'bg-blue-500 text-white ring-4 ring-blue-400/50 scale-110 shadow-blue-500/40'
                            : stats.isCompleted
                            ? 'bg-emerald-500 text-white ring-2 ring-emerald-300 shadow-emerald-500/30'
                            : stats.isUnlocked
                            ? 'bg-white text-slate-900 ring-2 ring-white/50 group-hover:ring-blue-400'
                            : 'bg-[#18345B] text-slate-400 border border-white/15 opacity-70 group-hover:opacity-100'
                        }`}
                      >
                        {stats.isCompleted ? (
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        ) : !stats.isUnlocked ? (
                          <Lock className="w-5 h-5 text-slate-400" />
                        ) : (
                          <span className="text-base font-extrabold">{lvl}</span>
                        )}
                      </div>

                      {/* Animated beacon ring on selected */}
                      {isSelected && (
                        <span className="absolute -inset-1 rounded-2xl border-2 border-blue-400 animate-ping pointer-events-none opacity-40" />
                      )}

                      <span className="absolute -bottom-1 -right-1 text-[9px] font-black px-1.5 py-0.2 rounded-md bg-[#102344] text-slate-300 border border-white/20">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Level name & info */}
                    <div className="w-full">
                      <div className={`text-xs font-black tracking-tight transition-colors ${
                        isSelected ? 'text-blue-300' : 'text-white'
                      }`}>
                        {info.name}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
                        {stats.totalCount} Ders
                      </div>

                      {/* Mini percent pill */}
                      <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold text-slate-200">
                        {stats.isCompleted ? (
                          <span className="text-emerald-300">Tamam</span>
                        ) : (
                          <span className="tabular-nums">%{stats.percent}</span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Milestone Footer */}
        <div className="relative z-10 mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-300 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Aktif İncelenen Seviye:</span>
            <span className="font-extrabold text-white">
              {selectedLevel} — {levelInfo.name} ({levelStats.completedCount}/{levelStats.totalCount} Ders Tamamlandı)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleUnlockMode}
              className={`text-xs font-bold px-2.5 py-1 rounded-xl border transition-colors cursor-pointer flex items-center gap-1.5 ${
                unlockAllMode
                  ? 'bg-purple-500/20 text-purple-200 border-purple-400/40'
                  : 'bg-white/10 text-slate-300 border-white/15 hover:bg-white/15'
              }`}
            >
              {unlockAllMode ? <Unlock className="w-3.5 h-3.5 text-purple-300" /> : <Lock className="w-3.5 h-3.5 text-slate-300" />}
              <span>{unlockAllMode ? 'Serbest Keşif Açık' : 'Sıralı Mod'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. SEÇİLİ SEVİYE HERO KARTI (Objectives, Progress, Fast Start) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className={`px-3 py-1 rounded-xl text-xs font-black text-white ${levelInfo.colorScheme.badgeBg} shadow-2xs`}>
                {levelInfo.id} DÜZEYİ
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {levelInfo.name} Müfredatı
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {levelInfo.titleTr}
            </h3>

            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              {levelInfo.description}
            </p>
          </div>

          {/* Quick Action & Progress Box */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-72">
            {nextTargetLesson && (
              <button
                onClick={() => onOpenLesson(nextTargetLesson.id)}
                className="w-full px-5 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-between gap-3 group cursor-pointer"
              >
                <div className="text-left min-w-0">
                  <div className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">
                    Sıradaki Adım
                  </div>
                  <div className="text-xs font-black truncate max-w-[170px]">
                    {nextTargetLesson.code} · {nextTargetLesson.title}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                  <Play className="w-4 h-4 fill-white" />
                </div>
              </button>
            )}

            {/* Level Progress Gauge */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-600">Seviye İlerlemesi</span>
                <span className="text-blue-600 font-extrabold">
                  {levelStats.completedCount} / {levelStats.totalCount} (%{levelStats.percent})
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${levelStats.percent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Can-Do Learning Objectives */}
        <div className="pt-6">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            {selectedLevel} Yeterlilik ve Kazanımları (Can-Do Statements)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {levelInfo.learningObjectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50/80 border border-slate-100 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. ARAMA VE FILTRELEME KONTROLLERİ */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`${selectedLevel} seviyesinde ders, konu veya kural ara...`}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-3 focus:ring-blue-100 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all shadow-xs outline-hidden"
          />
        </div>

        {/* Filter pills & Collapse Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="p-1 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-1 text-xs font-bold text-slate-600">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
                filterMode === 'all' ? 'bg-blue-600 text-white' : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              Tümü
            </button>
            <button
              onClick={() => setFilterMode('next')}
              className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
                filterMode === 'next' ? 'bg-blue-600 text-white' : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              Sıradaki
            </button>
            <button
              onClick={() => setFilterMode('completed')}
              className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
                filterMode === 'completed' ? 'bg-emerald-600 text-white' : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              Tamamlananlar
            </button>
            <button
              onClick={() => setFilterMode('locked')}
              className={`px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
                filterMode === 'locked' ? 'bg-slate-800 text-white' : 'hover:bg-slate-100 text-slate-600'
              }`}
            >
              Kilitliler
            </button>
          </div>

          <button
            onClick={expandAll}
            className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
          >
            Tümünü Aç
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
          >
            Tümünü Daralt
          </button>
        </div>
      </div>

      {/* 4. MODÜLLER VE DERSLERİN GÖRSEL ÖĞRENME YOLU (Visual Roadmap Modules) */}
      <div className="space-y-6">
        {currentModules.map((module, mIdx) => {
          const modLessons = lessonsByModule.get(module.id) || [];
          const isExpanded = expandedModules[module.id] !== false;
          const completedInMod = modLessons.filter((l) => completedLessonIds.includes(l.id)).length;
          const modPercent = modLessons.length > 0 ? Math.round((completedInMod / modLessons.length) * 100) : 0;
          const isModCompleted = modLessons.length > 0 && completedInMod === modLessons.length;

          // Filter lessons according to search and status filter
          const filteredLessons = modLessons.filter((l) => {
            const status = getLessonStatus(l.id);
            if (filterMode === 'completed' && status !== 'completed') return false;
            if (filterMode === 'next' && status !== 'next' && status !== 'in_progress') return false;
            if (filterMode === 'locked' && status !== 'locked') return false;

            if (searchQuery.trim()) {
              const q = searchQuery.toLowerCase();
              return (
                l.title.toLowerCase().includes(q) ||
                l.code.toLowerCase().includes(q) ||
                l.description.toLowerCase().includes(q) ||
                (l.subtopic && l.subtopic.toLowerCase().includes(q))
              );
            }
            return true;
          });

          const ThemeIcon = MODULE_THEME_ICONS[module.id] || BookOpen;

          return (
            <div 
              key={module.id}
              className={`bg-white rounded-3xl border transition-all duration-300 shadow-xs overflow-hidden ${
                isModCompleted 
                  ? 'border-emerald-200' 
                  : 'border-slate-200/90'
              }`}
            >
              {/* Module Header Bar */}
              <div 
                onClick={() => toggleModule(module.id)}
                className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors select-none"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-2xs ${
                    isModCompleted
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-blue-50 text-blue-600'
                  }`}>
                    <ThemeIcon className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                        Modül {mIdx + 1}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-[11px] font-bold text-slate-400">
                        {modLessons.length} Ders
                      </span>
                      {isModCompleted && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black">
                          ✓ Tamamlandı
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                      {module.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {module.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end md:self-center shrink-0">
                  {/* Module progress indicator */}
                  <div className="text-right">
                    <div className="text-xs font-black text-slate-800">
                      {completedInMod} / {modLessons.length} Ders
                    </div>
                    <div className="w-28 h-2 bg-slate-100 rounded-full mt-1 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          isModCompleted ? 'bg-emerald-500' : 'bg-blue-600'
                        }`}
                        style={{ width: `${modPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Module Lesson Path Body */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 bg-[#FAFBFD]">
                  {filteredLessons.length === 0 ? (
                    <div className="py-8 text-center text-xs text-slate-400 font-medium">
                      Bu arama ve filtre kriterlerine uygun ders bulunamadı.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5 pt-3">
                      {filteredLessons.map((lesson, lIdx) => {
                        const status = getLessonStatus(lesson.id);
                        const isCompleted = status === 'completed';
                        const isNext = status === 'next' || status === 'in_progress';
                        const isLocked = status === 'locked';

                        return (
                          <div
                            key={lesson.id}
                            onClick={() => {
                              if (!isLocked || unlockAllMode) {
                                onOpenLesson(lesson.id);
                              }
                            }}
                            className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between group ${
                              isCompleted
                                ? 'bg-emerald-50/30 border-emerald-200/80 hover:border-emerald-400 hover:bg-emerald-50/60 cursor-pointer shadow-2xs'
                                : isNext
                                ? 'bg-white border-blue-500 ring-2 ring-blue-500/20 shadow-md cursor-pointer hover:border-blue-600'
                                : isLocked && !unlockAllMode
                                ? 'bg-slate-50/70 border-slate-200/60 opacity-70 cursor-not-allowed'
                                : 'bg-white border-slate-200/80 hover:border-blue-300 hover:shadow-xs cursor-pointer'
                            }`}
                          >
                            <div>
                              {/* Top Bar: Code badge, status icon, XP */}
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <div className="flex items-center gap-1.5">
                                  <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black font-mono ${
                                    isCompleted
                                      ? 'bg-emerald-100 text-emerald-800'
                                      : isNext
                                      ? 'bg-blue-100 text-blue-800'
                                      : 'bg-slate-200 text-slate-700'
                                  }`}>
                                    {lesson.code}
                                  </span>

                                  <span className="text-[10px] font-bold text-slate-400">
                                    #{lesson.id}
                                  </span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                  <span className="text-[10px] font-extrabold text-amber-600 flex items-center gap-0.5">
                                    <Sparkles className="w-3 h-3 text-amber-500" />
                                    +50 XP
                                  </span>

                                  {isCompleted ? (
                                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                                      <Check className="w-3 h-3 stroke-[3]" />
                                    </span>
                                  ) : isNext ? (
                                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold animate-pulse">
                                      <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                                    </span>
                                  ) : (
                                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center text-[10px]">
                                      <Lock className="w-3 h-3" />
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Title */}
                              <h4 className={`text-xs sm:text-sm font-black tracking-tight leading-snug mb-1 transition-colors ${
                                isNext ? 'text-blue-900 group-hover:text-blue-600' : 'text-slate-900'
                              }`}>
                                {lesson.title}
                              </h4>

                              {/* Subtitle / Grammar tag */}
                              <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                                {lesson.subtopic || lesson.description}
                              </p>
                            </div>

                            {/* Bottom Card Bar: Duration and Action */}
                            <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                              <span className="text-slate-400 font-semibold flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {lesson.estimatedDuration || 8} dk
                              </span>

                              {isCompleted ? (
                                <span className="font-bold text-emerald-700 flex items-center gap-1 group-hover:underline">
                                  Tekrar Et
                                  <ChevronRight className="w-3 h-3" />
                                </span>
                              ) : isNext ? (
                                <span className="font-extrabold text-blue-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                                  Derse Başla
                                  <ChevronRight className="w-3 h-3" />
                                </span>
                              ) : (
                                <span className="font-medium text-slate-400">
                                  Kilitli
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Module Milestone Checkpoint */}
                  <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100/80 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white text-blue-600 shadow-xs flex items-center justify-center font-bold shrink-0">
                        <Trophy className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-900">
                          Modül {mIdx + 1} Pekiştirme ve Yeterlilik Kontrolü
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {isModCompleted
                            ? 'Tebrikler! Bu modüldeki tüm dersleri başarıyla tamamladınız.'
                            : `${modLessons.length} dersi tamamlayarak modül yeterlilik rozetini kazanın.`}
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <span className={`px-3 py-1.5 rounded-xl text-xs font-black ${
                        isModCompleted
                          ? 'bg-emerald-600 text-white shadow-2xs'
                          : 'bg-white text-slate-600 border border-slate-200'
                      }`}>
                        {isModCompleted ? 'Kazanıldı ★' : `%${modPercent}`}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 5. GÜNLÜK HEDEF VE SPUR MOTIVASYON ŞERİDİ (Bottom Info Bar) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
          </div>
          <div>
            <div className="text-xs font-black text-slate-900">
              {streakDays} Günlük Öğrenme Serisi · {totalXp} Toplam XP
            </div>
            <div className="text-[11px] text-slate-500">
              Her gün düzenli bir ders tamamlayarak kalıcı hafıza oluşturun.
            </div>
          </div>
        </div>

        {onOpenMistakeBank && (
          <button
            onClick={onOpenMistakeBank}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 self-start sm:self-center shrink-0"
          >
            <span>Hata & Aralıklı Tekrar</span>
            {dueMistakeCount > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 font-black text-[10px]">
                {dueMistakeCount}
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
