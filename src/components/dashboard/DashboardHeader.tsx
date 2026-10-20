import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  Search, 
  Bell, 
  Menu, 
  Lock, 
  Unlock, 
  GraduationCap, 
  ChevronDown, 
  Check, 
  Sparkles,
  BookOpen,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { CEFRLevel } from '../../types/lesson';
import { CEFR_LEVELS_INFO, getFullCurriculumLessons } from '../../data/curriculumData';
import { getActiveStudentProfile, switchProfilePreset, getActiveProfilePresetKey } from '../../services/studentMemoryEngine';

interface DashboardHeaderProps {
  selectedLevel: CEFRLevel;
  totalXp: number;
  streakDays: number;
  unlockAllMode: boolean;
  onToggleUnlockMode: () => void;
  onOpenMobileMenu: () => void;
  onOpenLesson: (id: number) => void;
  onOpenMistakeBank?: () => void;
  mistakeCount?: number;
  onResetStudentAccount?: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  selectedLevel,
  totalXp,
  streakDays,
  unlockAllMode,
  onToggleUnlockMode,
  onOpenMobileMenu,
  onOpenLesson,
  onOpenMistakeBank,
  mistakeCount = 0,
  onResetStudentAccount,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  const studentProfile = getActiveStudentProfile();
  const activePresetKey = getActiveProfilePresetKey();
  const levelInfo = CEFR_LEVELS_INFO[selectedLevel] || CEFR_LEVELS_INFO.A1;
  const allCurriculum = getFullCurriculumLessons();

  // Instant curriculum search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.trim().length < 2) return [];
    const query = searchQuery.trim().toLowerCase();
    return allCurriculum
      .filter((l) => 
        l.title.toLowerCase().includes(query) ||
        l.code.toLowerCase().includes(query) ||
        l.moduleName.toLowerCase().includes(query)
      )
      .slice(0, 6);
  }, [searchQuery, allCurriculum]);

  // Click outside listener for search & profile dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(e.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectSearchResult = (lessonId: number) => {
    onOpenLesson(lessonId);
    setSearchQuery('');
    setIsSearchFocused(false);
  };

  const handleSwitchPreset = (preset: 'a1_beginner' | 'b1_intermediate' | 'c1_advanced') => {
    switchProfilePreset(preset);
    setIsProfileDropdownOpen(false);
  };

  const presetLabels = {
    a1_beginner: { name: 'Emre', level: 'A1', role: 'Başlangıç Seviyesi', avatar: '🌱' },
    b1_intermediate: { name: 'Selin', level: 'B1', role: 'Orta Düzey Kullanıcı', avatar: '🎯' },
    c1_advanced: { name: 'Can', level: 'C1', role: 'İleri Düzey & Profesyonel', avatar: '⚡' },
  };

  const currentPreset = presetLabels[activePresetKey as keyof typeof presetLabels] || presetLabels.a1_beginner;

  return (
    <header className="bg-white border-b border-slate-200/90 sticky top-0 z-30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Mobile Menu Trigger + Greeting */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0"
              aria-label="Menüyü Aç"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-xl font-extrabold text-slate-900 tracking-tight truncate">
                  Merhaba, {studentProfile.name.split(' ')[0]}! 👋
                </h1>
                <span className={`hidden sm:inline-flex text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${levelInfo.colorScheme.bg} ${levelInfo.colorScheme.text} ${levelInfo.colorScheme.border}`}>
                  {levelInfo.titleTr.split('—')[0].trim()}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block truncate">
                İngilizce hedeflerine ulaşmak için bugün harika bir gün.
              </p>
            </div>
          </div>

          {/* Center/Right: Search Bar */}
          <div ref={searchContainerRef} className="relative flex-1 max-w-xs md:max-w-md hidden md:block">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="488 ders içinde ara (Örn: Past Simple, A1-02)..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-3 focus:ring-blue-100 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-hidden"
              />
            </div>

            {/* Instant Search Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-fadeIn">
                <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Müfredat Arama Sonuçları ({searchResults.length})
                </div>
                {searchResults.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => handleSelectSearchResult(lesson.id)}
                    className="w-full px-3.5 py-2.5 flex items-center justify-between gap-3 hover:bg-blue-50/80 transition-colors text-left cursor-pointer group"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono">
                          {lesson.code}
                        </span>
                        <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 truncate">
                          {lesson.title}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 truncate mt-0.5">
                        {lesson.moduleName}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Actions & User Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Exploration Mode Button */}
            <button
              onClick={onToggleUnlockMode}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
                unlockAllMode
                  ? 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
              title={unlockAllMode ? 'Serbest Keşif Modu Aktif (Tüm Dersler Açık)' : 'Sıralı İlerleme Modu Aktif'}
            >
              {unlockAllMode ? (
                <>
                  <Unlock className="w-3.5 h-3.5 text-purple-600" />
                  <span className="hidden xl:inline">Serbest Mod</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden xl:inline">Sıralı Mod</span>
                </>
              )}
            </button>

            {/* Notification / Due Mistake Alert */}
            {onOpenMistakeBank && (
              <button
                onClick={onOpenMistakeBank}
                className="relative p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                title={mistakeCount > 0 ? `${mistakeCount} adet aralıklı tekrar bekliyor` : 'Tekrar & Hata Bankası'}
                aria-label="Tekrar Bildirimi"
              >
                <Bell className="w-5 h-5" />
                {mistakeCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white animate-pulse" />
                )}
              </button>
            )}

            {/* Profile Preset Switcher Dropdown */}
            <div ref={profileDropdownRef} className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-2 p-1 sm:pl-2.5 sm:pr-2 sm:py-1.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all cursor-pointer"
                aria-label="Öğrenci Profili Seç"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">
                  {currentPreset.avatar}
                </div>
                <div className="text-left hidden sm:block">
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    {currentPreset.name}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-500">
                    {currentPreset.level}
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-fadeIn">
                  <div className="px-3 py-1.5 border-b border-slate-100">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Öğrenci Profil Simülasyonu
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      Farklı seviyedeki öğrencilerin adaptif iskele deneyimini test edin:
                    </div>
                  </div>

                  <div className="p-1 space-y-1">
                    {(['a1_beginner', 'b1_intermediate', 'c1_advanced'] as const).map((key) => {
                      const p = presetLabels[key];
                      const isSelected = activePresetKey === key;
                      return (
                        <button
                          key={key}
                          onClick={() => handleSwitchPreset(key)}
                          className={`w-full px-3 py-2 rounded-xl flex items-center justify-between text-left transition-colors cursor-pointer ${
                            isSelected ? 'bg-blue-50 text-blue-900' : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-base">{p.avatar}</span>
                            <div>
                              <div className="text-xs font-bold text-slate-900">
                                {p.name} ({p.level})
                              </div>
                              <div className="text-[10px] text-slate-500">
                                {p.role}
                              </div>
                            </div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {onResetStudentAccount && (
                    <div className="p-2 border-t border-slate-100 mt-1">
                      <button
                        onClick={() => {
                          if (window.confirm('Öğrenci hesabını sıfırlamak ve Ders 1 başlangıç durumuna dönmek istediğinize emin misiniz?')) {
                            onResetStudentAccount();
                            setIsProfileDropdownOpen(false);
                          }
                        }}
                        className="w-full px-2.5 py-1.5 rounded-xl flex items-center gap-2 text-rose-600 hover:bg-rose-50 text-xs font-bold transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
                        <span>Sıfırdan Başla (Sıfırla)</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
