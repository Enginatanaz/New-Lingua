import React from 'react';
import { 
  CheckCircle2, 
  Lock, 
  Unlock, 
  Sparkles, 
  Compass, 
  Flag, 
  Trophy, 
  Award,
  ChevronRight
} from 'lucide-react';
import { CEFRLevel } from '../../types/lesson';
import { CEFR_LEVELS_INFO } from '../../data/curriculumData';

interface VisualLearningMapProps {
  selectedLevel: CEFRLevel;
  onSelectLevel: (level: CEFRLevel) => void;
  getLevelStats: (level: CEFRLevel) => {
    totalCount: number;
    completedCount: number;
    percent: number;
    isUnlocked: boolean;
    isCompleted: boolean;
  };
}

const levels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export const VisualLearningMap: React.FC<VisualLearningMapProps> = ({
  selectedLevel,
  onSelectLevel,
  getLevelStats,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#102344] via-[#162f58] to-[#102344] text-white rounded-3xl p-6 sm:p-8 border border-[#1e3e6d] shadow-lg relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute right-0 top-0 translate-x-20 -translate-y-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 translate-y-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4 text-blue-400" />
            <span>İnteraktif CEFR Yol Haritası</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            A1’den C2’ye İngilizce Yolculuğun
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Seviye duraklarına tıklayarak ilgili seviyenin modüllerini ve 488 derslik müfredatını inceleyin.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15">
          <Flag className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-bold text-slate-200">
            Hedef: C2 Ustalık (488 Ders)
          </span>
        </div>
      </div>

      {/* Visual Journey Roadmap (Desktop Winding Strip / Mobile Scrollable Track) */}
      <div className="relative z-10 pt-8 pb-4 overflow-x-auto">
        <div className="min-w-[760px] relative px-4">
          
          {/* Background Connecting Path Line */}
          <div className="absolute left-12 right-12 top-11 h-1.5 bg-white/15 rounded-full pointer-events-none">
            {/* Dynamic progress fill line */}
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

          {/* Stops along the journey */}
          <div className="grid grid-cols-6 gap-4 relative">
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
                  {/* Stop Circle Node */}
                  <div className="relative mb-3.5">
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

                    {/* Active Pulse Ring */}
                    {isSelected && (
                      <span className="absolute -inset-1 rounded-2xl border-2 border-blue-400 animate-ping pointer-events-none opacity-40" />
                    )}

                    {/* Step Index Badge */}
                    <span className="absolute -bottom-1 -right-1 text-[9px] font-black px-1.5 py-0.2 rounded-md bg-[#102344] text-slate-300 border border-white/20">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Level Name & Subtitle */}
                  <div className="w-full">
                    <div className={`text-xs font-black tracking-tight transition-colors ${
                      isSelected ? 'text-blue-300' : 'text-white'
                    }`}>
                      {info.name}
                    </div>

                    <div className="text-[10px] text-slate-400 font-medium truncate mt-0.5">
                      {stats.totalCount} Ders
                    </div>

                    {/* Mini Progress pill */}
                    <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold text-slate-200">
                      {stats.isCompleted ? (
                        <span className="text-emerald-300 font-bold">Tamam</span>
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

      {/* Bottom Milestone Info */}
      <div className="relative z-10 mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-300 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span>Şu an incelenen seviye:</span>
          <span className="font-extrabold text-white">
            {selectedLevel} ({CEFR_LEVELS_INFO[selectedLevel].name})
          </span>
        </div>

        <div className="text-slate-400 text-[11px]">
          İpucu: Seviye duraklarına dokunarak ders listesini anında değiştirebilirsiniz.
        </div>
      </div>
    </div>
  );
};
