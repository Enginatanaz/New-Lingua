import React from 'react';
import { 
  Home, 
  BookOpen, 
  Compass, 
  Layers, 
  BrainCircuit, 
  BarChart3, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Flame, 
  X,
  GraduationCap,
  BookmarkCheck,
  Headphones,
  BookMarked
} from 'lucide-react';
import { CEFRLevel } from '../../types/lesson';

export type DashboardNavTab = 
  | 'dashboard'
  | 'lessons'
  | 'roadmap'
  | 'reading'
  | 'vocabulary'
  | 'progress'
  | 'settings';

interface AppSidebarProps {
  activeTab: DashboardNavTab;
  onSelectTab: (tab: DashboardNavTab) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
  onOpenMistakeBank?: () => void;
  streakDays: number;
  totalXp: number;
  completedCount: number;
  selectedLevel: CEFRLevel;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  activeTab,
  onSelectTab,
  isCollapsed,
  onToggleCollapse,
  isMobileOpen,
  onCloseMobile,
  onOpenMistakeBank,
  streakDays,
  totalXp,
  completedCount,
  selectedLevel,
}) => {
  const navItems = [
    {
      id: 'dashboard' as DashboardNavTab,
      label: 'Ana Sayfa',
      icon: Home,
      badge: undefined,
    },
    {
      id: 'lessons' as DashboardNavTab,
      label: 'Dersler',
      icon: BookOpen,
      badge: '488',
    },
    {
      id: 'roadmap' as DashboardNavTab,
      label: 'Öğrenme Yolu',
      icon: Compass,
      badge: selectedLevel,
    },
    {
      id: 'reading' as DashboardNavTab,
      label: 'Okuma',
      icon: BookMarked,
      badge: 'A1-C2',
    },
    {
      id: 'vocabulary' as DashboardNavTab,
      label: 'Kelime Bankası',
      icon: BookmarkCheck,
      badge: undefined,
    },
    {
      id: 'progress' as DashboardNavTab,
      label: 'İlerleme Raporu',
      icon: BarChart3,
      badge: `${completedCount}`,
    },
    {
      id: 'settings' as DashboardNavTab,
      label: 'Ayarlar',
      icon: Settings,
      badge: undefined,
    },
  ];

  const handleNavClick = (tabId: DashboardNavTab) => {
    onSelectTab(tabId);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/70 z-40 lg:hidden backdrop-blur-xs transition-opacity"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-[#102344] text-white transition-all duration-300 ease-in-out border-r border-[#18345B] ${
          isMobileOpen ? 'translate-x-0 w-72' : '-translate-x-full lg:translate-x-0'
        } ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}`}
      >
        {/* Brand Area */}
        <div className="h-20 flex items-center justify-between px-5 border-b border-[#18345B] shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-md ring-2 ring-blue-400/20">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            
            {(!isCollapsed || isMobileOpen) && (
              <div className="min-w-0">
                <div className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5 truncate">
                  <span>LinguAAI</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    v8
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium truncate">
                  Learn · Practice · Speak
                </div>
              </div>
            )}
          </div>

          {/* Close on mobile */}
          <button
            onClick={onCloseMobile}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Menüyü Kapat"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Desktop Collapse Toggle */}
          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title={isCollapsed ? 'Menüyü Genişlet' : 'Menüyü Daralt'}
            aria-label={isCollapsed ? 'Menüyü Genişlet' : 'Menüyü Daralt'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-6 px-3 space-y-1.5 overflow-y-auto">
          <div className={`px-3 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider ${
            isCollapsed && !isMobileOpen ? 'text-center' : ''
          }`}>
            {isCollapsed && !isMobileOpen ? '•••' : 'Öğrenme Alanı'}
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                } ${isCollapsed && !isMobileOpen ? 'justify-center px-2' : ''}`}
                title={isCollapsed && !isMobileOpen ? item.label : undefined}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                
                {(!isCollapsed || isMobileOpen) && (
                  <div className="flex-1 flex items-center justify-between min-w-0">
                    <span className="truncate">{item.label}</span>
                    {item.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : 'bg-[#18345B] text-slate-300'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}

          {/* Direct SRS Action */}
          {onOpenMistakeBank && (
            <div className="pt-3 mt-3 border-t border-[#18345B]/60">
              <button
                onClick={() => {
                  onOpenMistakeBank();
                  onCloseMobile();
                }}
                className={`w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer text-amber-300 hover:text-amber-200 hover:bg-amber-400/10 ${
                  isCollapsed && !isMobileOpen ? 'justify-center px-2' : ''
                }`}
                title="Tekrar & Telafi Bankası (SRS)"
              >
                <BrainCircuit className="w-5 h-5 shrink-0 text-amber-400" />
                {(!isCollapsed || isMobileOpen) && (
                  <span className="truncate">Tekrar & Hafıza</span>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Bottom Motivation Card */}
        {(!isCollapsed || isMobileOpen) ? (
          <div className="p-4 m-3 rounded-2xl bg-[#18345B]/70 border border-[#234b82] space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{streakDays} Günlük Seri</span>
              </div>
              <span className="text-[11px] font-bold text-blue-200">
                {totalXp} XP
              </span>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              "Her gün küçük bir adım büyük akıcılık getirir."
            </p>
          </div>
        ) : (
          <div className="p-3 text-center border-t border-[#18345B]">
            <div className="w-10 h-10 mx-auto rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center" title={`${streakDays} Günlük Seri`}>
              <Flame className="w-5 h-5 fill-amber-400" />
            </div>
          </div>
        )}
      </aside>
    </>
  );
};
