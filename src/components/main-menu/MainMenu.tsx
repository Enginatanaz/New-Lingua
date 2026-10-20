import React, { useState } from 'react';
import { CEFRLevel, LessonData } from '../../types/lesson';
import { LessonDisplayStatus } from '../../types/curriculum';
import { AppSidebar, DashboardNavTab } from '../dashboard/AppSidebar';
import { DashboardHeader } from '../dashboard/DashboardHeader';
import { LearningStats } from '../dashboard/LearningStats';
import { QuickAccessGrid } from '../dashboard/QuickAccessGrid';
import { RecentLessons } from '../dashboard/RecentLessons';
import { RightStudyPanel } from '../dashboard/RightStudyPanel';
import { VocabularyView } from '../dashboard/VocabularyView';
import { ContinueLearningCard } from './ContinueLearningCard';
import { LevelRoadmap } from './LevelRoadmap';
import { ModulesLessonList } from './ModulesLessonList';
import { PersonalStatsSection } from './PersonalStatsSection';
import { LearningPathView } from '../learning-path/LearningPathView';
import { ReadingCenterView } from '../reading/ReadingCenterView';
import { getFullCurriculumLessons } from '../../data/curriculumData';
import { getSRSStats } from '../../services/srsEngine';
import { RotateCcw } from 'lucide-react';

interface MainMenuProps {
  currentLesson: LessonData;
  currentStepIndex: number;
  isCurrentLessonCompleted: boolean;
  selectedLevel: CEFRLevel;
  onSelectLevel: (level: CEFRLevel) => void;
  onOpenLesson: (lessonId: number) => void;
  completedLessonIds: number[];
  totalXp: number;
  streakDays: number;
  unlockAllMode: boolean;
  onToggleUnlockMode: () => void;
  getLessonStatus: (lessonId: number) => LessonDisplayStatus;
  getLevelStats: (level: CEFRLevel) => {
    totalCount: number;
    completedCount: number;
    percent: number;
    isUnlocked: boolean;
    isCompleted: boolean;
  };
  onOpenMistakeBank?: () => void;
  onResetStudentAccount?: () => void;
  onAddXp?: (xp: number) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  currentLesson,
  currentStepIndex,
  isCurrentLessonCompleted,
  selectedLevel,
  onSelectLevel,
  onOpenLesson,
  completedLessonIds,
  totalXp,
  streakDays,
  unlockAllMode,
  onToggleUnlockMode,
  getLessonStatus,
  getLevelStats,
  onOpenMistakeBank,
  onResetStudentAccount,
  onAddXp,
}) => {
  const [activeTab, setActiveTab] = useState<DashboardNavTab>('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const allCurriculum = getFullCurriculumLessons();
  const srsStats = getSRSStats();

  return (
    <div className="min-h-screen bg-[#F5F8FD] flex text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 1. SOL NAVİGASYON MENÜSÜ (Koyu Lacivert #102344) */}
      <AppSidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
        onOpenMistakeBank={onOpenMistakeBank}
        streakDays={streakDays}
        totalXp={totalXp}
        completedCount={completedLessonIds.length}
        selectedLevel={selectedLevel}
      />

      {/* 2. MERKEZİ ÇALIŞMA ALANI & SAĞ PANEL TAŞIYICI (Responsive Layout) */}
      <div 
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
          isSidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'
        }`}
      >
        {/* Üst Bilgi ve Kullanıcı Başlığı */}
        <DashboardHeader
          selectedLevel={selectedLevel}
          totalXp={totalXp}
          streakDays={streakDays}
          unlockAllMode={unlockAllMode}
          onToggleUnlockMode={onToggleUnlockMode}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onOpenLesson={onOpenLesson}
          onOpenMistakeBank={onOpenMistakeBank}
          mistakeCount={srsStats.dueCount}
          onResetStudentAccount={onResetStudentAccount}
        />

        {/* Ana İçerik Gövdesi */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col xl:flex-row items-start gap-8">
            
            {/* ORTA ANA ÇALIŞMA ALANI */}
            <div className="flex-1 w-full min-w-0 space-y-8">
              {activeTab === 'dashboard' && (
                <>
                  {/* Günün Dersi / Derse Devam Et Hero Kartı */}
                  <ContinueLearningCard
                    lesson={currentLesson}
                    currentStepIndex={currentStepIndex}
                    isCompleted={isCurrentLessonCompleted}
                    onContinue={() => onOpenLesson(currentLesson.id)}
                  />

                  {/* Öğrenme İstatistikleri Şeridi */}
                  <LearningStats
                    completedCount={completedLessonIds.length}
                    totalLessonCount={allCurriculum.length}
                    totalXp={totalXp}
                    streakDays={streakDays}
                    onOpenMistakeBank={onOpenMistakeBank}
                  />

                  {/* Hızlı Erişim Kartları */}
                  <QuickAccessGrid
                    onNavigateTab={setActiveTab}
                    onOpenMistakeBank={onOpenMistakeBank}
                    dueMistakeCount={srsStats.dueCount}
                  />

                  {/* Son İşlenen Dersler */}
                  <RecentLessons
                    completedLessonIds={completedLessonIds}
                    currentLessonId={currentLesson.id}
                    onOpenLesson={onOpenLesson}
                  />

                  {/* CEFR Seviye Yol Haritası */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                        CEFR Seviye Haritası & İlerleme
                      </h3>
                      <button
                        onClick={() => setActiveTab('roadmap')}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
                      >
                        Tam Haritayı Aç →
                      </button>
                    </div>
                    <LevelRoadmap
                      selectedLevel={selectedLevel}
                      onSelectLevel={onSelectLevel}
                      getLevelStats={getLevelStats}
                    />
                  </div>

                  {/* Seçili Seviyenin Dersleri */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                        {selectedLevel} Seviyesi Modül ve Dersleri
                      </h3>
                      <button
                        onClick={() => setActiveTab('lessons')}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
                      >
                        Tümünü Listele →
                      </button>
                    </div>
                    <ModulesLessonList
                      selectedLevel={selectedLevel}
                      getLessonStatus={getLessonStatus}
                      onSelectLesson={onOpenLesson}
                      unlockAllMode={unlockAllMode}
                      onToggleUnlockMode={onToggleUnlockMode}
                    />
                  </div>
                </>
              )}

              {/* SEKME 2: 488 DERS VE MODÜLLER */}
              {activeTab === 'lessons' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        Müfredat ve Ders Kataloğu (488 Ders)
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        A1'den C2'ye Avrupa Dilleri Çerçevesi (CEFR) uyumlu yapılandırılmış modüller
                      </p>
                    </div>
                    <LevelRoadmap
                      selectedLevel={selectedLevel}
                      onSelectLevel={onSelectLevel}
                      getLevelStats={getLevelStats}
                    />
                  </div>

                  <ModulesLessonList
                    selectedLevel={selectedLevel}
                    getLessonStatus={getLessonStatus}
                    onSelectLesson={onOpenLesson}
                    unlockAllMode={unlockAllMode}
                    onToggleUnlockMode={onToggleUnlockMode}
                  />
                </div>
              )}

              {/* SEKME 3: CEFR ÖĞRENME YOLU (FAZ 6 Premium Visual Learning Path) */}
              {activeTab === 'roadmap' && (
                <LearningPathView
                  selectedLevel={selectedLevel}
                  onSelectLevel={onSelectLevel}
                  onOpenLesson={onOpenLesson}
                  completedLessonIds={completedLessonIds}
                  getLessonStatus={getLessonStatus}
                  getLevelStats={getLevelStats}
                  unlockAllMode={unlockAllMode}
                  onToggleUnlockMode={onToggleUnlockMode}
                  onResetStudentAccount={onResetStudentAccount}
                  onOpenMistakeBank={onOpenMistakeBank}
                  dueMistakeCount={srsStats.dueCount}
                  streakDays={streakDays}
                  totalXp={totalXp}
                />
              )}

              {/* SEKME 4: OKUMA VE ANLAMA MERKEZİ (FAZ 7 Reading & Reading Comprehension) */}
              {activeTab === 'reading' && (
                <ReadingCenterView
                  currentLevel={selectedLevel}
                  onAddXp={onAddXp}
                />
              )}

              {/* SEKME 5: KELİME BANKASI */}
              {activeTab === 'vocabulary' && (
                <VocabularyView onOpenLesson={onOpenLesson} />
              )}

              {/* SEKME 5: İLERLEME VE HAFIZA RAPORU */}
              {activeTab === 'progress' && (
                <div className="space-y-6">
                  <PersonalStatsSection
                    completedLessonIds={completedLessonIds}
                    onOpenLesson={onOpenLesson}
                    onOpenMistakeBank={onOpenMistakeBank}
                    onResetStudentAccount={onResetStudentAccount}
                  />
                </div>
              )}

              {/* SEKME 6: AYARLAR VE SİMÜLASYON */}
              {activeTab === 'settings' && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Platform Ayarları ve Sıfırlama Tercihleri
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Öğrenme modu, profil simülasyonu ve sıfırdan öğrenci durumuna dönme seçenekleri.
                    </p>
                  </div>

                  {/* Mode Card */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        {unlockAllMode ? 'Serbest Keşif Modu (Tüm Dersler Açık)' : 'Sıralı İlerleme Modu'}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {unlockAllMode
                          ? 'Dilediğiniz dersi sıra gözetmeksizin doğrudan açabilir ve pedagojik yapısını inceleyebilirsiniz.'
                          : 'Dersler pedagojik sırasıyla ve önkoşul kurallarına bağlı olarak kilitleri açılarak ilerler.'}
                      </div>
                    </div>

                    <button
                      onClick={onToggleUnlockMode}
                      className={`px-4 py-2.5 rounded-xl font-bold text-xs shrink-0 transition-all cursor-pointer ${
                        unlockAllMode
                          ? 'bg-purple-600 text-white shadow-md'
                          : 'bg-slate-900 text-white'
                      }`}
                    >
                      {unlockAllMode ? 'Sıralı Moda Geç' : 'Serbest Modu Aç'}
                    </button>
                  </div>

                  {/* Sıfırdan Öğrenci Durumu (Zero State Reset) */}
                  {onResetStudentAccount && (
                    <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-bold text-rose-950 flex items-center gap-2">
                          <RotateCcw className="w-4 h-4 text-rose-600" />
                          <span>Öğrenci Profilini Sıfırdan Başlat (Sıfır Durumu)</span>
                        </div>
                        <div className="text-xs text-rose-700/80 mt-0.5">
                          Tüm tamamlanan dersleri, XP puanını, aralıklı tekrar hata kayıtlarını ve kelimeleri temizleyerek A1 Seviyesi Ders 1 ilk gün öğrenci durumuna getirir.
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          if (window.confirm('Öğrenci hesabını sıfırlamak ve Ders 1 başlangıç durumuna dönmek istediğinize emin misiniz?')) {
                            onResetStudentAccount();
                          }
                        }}
                        className="px-4 py-2.5 rounded-xl font-bold text-xs shrink-0 bg-rose-600 hover:bg-rose-700 text-white shadow-xs transition-colors cursor-pointer"
                      >
                        Sıfırdan Başla
                      </button>
                    </div>
                  )}

                  <PersonalStatsSection
                    completedLessonIds={completedLessonIds}
                    onOpenLesson={onOpenLesson}
                    onOpenMistakeBank={onOpenMistakeBank}
                  />
                </div>
              )}

              {/* Footer */}
              <footer className="pt-6 pb-12 border-t border-slate-200 text-center text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-slate-500">
                  LinguAAI v8 — Avrupa Dilleri Ortak Çerçeve Programı (CEFR A1–C2) Standart Müfredatı
                </p>
                <p>488 benzersiz ders · Doğal telaffuz · Uyarlanabilir iskeleleme · Aralıklı tekrar (SRS)</p>
              </footer>
            </div>

            {/* 3. SAĞ ÖĞRENME VE İSTATİSTİK PANELİ */}
            <div className="w-full xl:w-80 shrink-0">
              <RightStudyPanel
                currentLesson={currentLesson}
                isCurrentLessonCompleted={isCurrentLessonCompleted}
                streakDays={streakDays}
                totalXp={totalXp}
                completedLessonCount={completedLessonIds.length}
                onOpenMistakeBank={onOpenMistakeBank}
                onNavigateTab={setActiveTab}
                onOpenLesson={onOpenLesson}
              />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};
