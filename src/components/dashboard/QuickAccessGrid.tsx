import React from 'react';
import { 
  BookOpen, 
  BookmarkCheck, 
  BrainCircuit, 
  Headphones, 
  Compass, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { DashboardNavTab } from './AppSidebar';

interface QuickAccessGridProps {
  onNavigateTab: (tab: DashboardNavTab) => void;
  onOpenMistakeBank?: () => void;
  dueMistakeCount?: number;
}

export const QuickAccessGrid: React.FC<QuickAccessGridProps> = ({
  onNavigateTab,
  onOpenMistakeBank,
  dueMistakeCount = 0,
}) => {
  const cards = [
    {
      title: 'Tüm Dersler & Modüller',
      description: 'A1’den C2’ye 488 pedagojik ders ve sıralı öğrenme modülleri.',
      icon: BookOpen,
      iconBg: 'bg-blue-50 text-blue-600',
      actionLabel: 'Dersleri İncele',
      onClick: () => onNavigateTab('lessons'),
      badge: '488 Ders',
      badgeColor: 'bg-blue-100 text-blue-800',
    },
    {
      title: 'Öğrenme Yolu & Harita',
      description: 'CEFR seviyeleri boyunca adım adım ilerleme ve yeterlilik hedefleri.',
      icon: Compass,
      iconBg: 'bg-indigo-50 text-indigo-600',
      actionLabel: 'Haritaya Git',
      onClick: () => onNavigateTab('roadmap'),
      badge: 'A1–C2',
      badgeColor: 'bg-indigo-100 text-indigo-800',
    },
    {
      title: 'Kelime Bankası & Fonetik',
      description: 'Öğrendiğiniz tüm kelimeler, IPA telaffuzları ve hafıza durumları.',
      icon: BookmarkCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      actionLabel: 'Kelimeleri Gör',
      onClick: () => onNavigateTab('vocabulary'),
      badge: 'Aktif Takip',
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      title: 'Okuma & Anlama Merkezi',
      description: 'CEFR A1–C2 seviyelerine uygun otantik metinler, bağlamsal sözlük ve testler.',
      icon: BookOpen,
      iconBg: 'bg-cyan-50 text-cyan-600',
      actionLabel: 'Metinleri Oku',
      onClick: () => onNavigateTab('reading'),
      badge: 'A1–C2',
      badgeColor: 'bg-cyan-100 text-cyan-800',
    },
    {
      title: 'Tekrar & Telafi Bankası',
      description: 'Aralıklı tekrar (SRS) ve hatalardan öğrenme asistanı.',
      icon: BrainCircuit,
      iconBg: 'bg-amber-50 text-amber-600',
      actionLabel: dueMistakeCount > 0 ? `${dueMistakeCount} Hata Çöz` : 'Hafızayı Taze Tut',
      onClick: () => {
        if (onOpenMistakeBank) onOpenMistakeBank();
        else onNavigateTab('roadmap');
      },
      badge: dueMistakeCount > 0 ? `${dueMistakeCount} Tekrar` : 'Tam Güncel',
      badgeColor: dueMistakeCount > 0 ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-700',
    },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-slate-500">
          Hızlı Erişim Araçları
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4">
        {cards.map((c, idx) => {
          const Icon = c.icon;
          return (
            <button
              key={idx}
              onClick={c.onClick}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${c.badgeColor}`}>
                    {c.badge}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {c.title}
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed mt-1 line-clamp-2">
                  {c.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                <span>{c.actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
