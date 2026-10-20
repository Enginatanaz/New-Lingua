import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Award, 
  CheckCircle2, 
  Bookmark, 
  Play, 
  Sparkles, 
  ChevronRight, 
  Layers, 
  Volume2, 
  Compass, 
  Target,
  GraduationCap,
  Trash2,
  Filter,
  Book,
  Sun,
  MessageCircle,
  Briefcase,
  Cpu,
  Newspaper,
  Scale,
  Palette,
  Check
} from 'lucide-react';
import { CEFRLevel } from '../../types/lesson';
import { 
  ReadingCategory, 
  ReadingTextItem, 
  SavedReadingWord 
} from '../../types/reading';
import { 
  READING_TEXTS, 
  READING_CATEGORIES, 
  getReadingTextById 
} from '../../data/readingCurriculumData';
import { 
  getReadingProgress, 
  getReadingStats, 
  getRecommendedReading, 
  getSavedWordsList, 
  removeSavedWord 
} from '../../services/readingEngine';
import { readingAudioService } from '../../services/readingAudioService';
import { ReadingReaderModal } from './ReadingReaderModal';

interface ReadingCenterViewProps {
  currentLevel: CEFRLevel;
  onAddXp?: (xp: number) => void;
}

type CompletionFilter = 'all' | 'unread' | 'completed';

// Category icon mapper
const CATEGORY_ICONS: Record<string, React.FC<{ className?: string }>> = {
  short_stories: Book,
  daily_life: Sun,
  conversations: MessageCircle,
  travel_culture: Compass,
  work_career: Briefcase,
  work_business: Briefcase,
  science_tech: Cpu,
  news_articles: Newspaper,
  history_bio: Clock,
  opinions_arguments: Scale,
  literature_arts: Palette,
  society_arts: Palette,
};

export const ReadingCenterView: React.FC<ReadingCenterViewProps> = ({
  currentLevel,
  onAddXp,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ReadingCategory | 'all'>('all');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<CEFRLevel | 'all'>('all');
  const [completionFilter, setCompletionFilter] = useState<CompletionFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeReadingText, setActiveReadingText] = useState<ReadingTextItem | null>(null);
  const [activeTab, setActiveTab] = useState<'catalog' | 'vocabulary'>('catalog');

  // Reading Engine State
  const [readingProgress, setReadingProgress] = useState(getReadingProgress());
  const [readingStats, setReadingStats] = useState(getReadingStats());
  const [savedWords, setSavedWords] = useState<SavedReadingWord[]>(getSavedWordsList());

  const refreshState = () => {
    setReadingProgress(getReadingProgress());
    setReadingStats(getReadingStats());
    setSavedWords(getSavedWordsList());
  };

  useEffect(() => {
    refreshState();
  }, []);

  // Category counts based on real content
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    READING_CATEGORIES.forEach(c => {
      counts[c.id] = 0;
    });

    READING_TEXTS.forEach(t => {
      const cat = t.category;
      if (counts[cat] !== undefined) {
        counts[cat] += 1;
      } else if (cat === 'work_business' && counts['work_career'] !== undefined) {
        counts['work_career'] += 1;
      } else if (cat === 'society_arts' && counts['literature_arts'] !== undefined) {
        counts['literature_arts'] += 1;
      }
    });

    return counts;
  }, []);

  // Level counts
  const levelCounts = useMemo(() => {
    const counts: Record<string, number> = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
    READING_TEXTS.forEach(t => {
      if (counts[t.level] !== undefined) {
        counts[t.level] += 1;
      }
    });
    return counts;
  }, []);

  // Recommended / Continue Reading Text
  const recommendedText = useMemo(() => {
    if (readingProgress.lastReadTextId) {
      const lastText = getReadingTextById(readingProgress.lastReadTextId);
      if (lastText) return lastText;
    }
    return getRecommendedReading(currentLevel);
  }, [readingProgress.lastReadTextId, currentLevel]);

  // Filtered Texts
  const filteredTexts = useMemo(() => {
    return READING_TEXTS.filter(item => {
      // Level filter
      if (selectedLevelFilter !== 'all' && item.level !== selectedLevelFilter) {
        return false;
      }

      // Category filter (handling aliases)
      if (selectedCategory !== 'all') {
        const matchesCat = 
          item.category === selectedCategory ||
          (selectedCategory === 'work_career' && item.category === 'work_business') ||
          (selectedCategory === 'literature_arts' && item.category === 'society_arts');
        if (!matchesCat) return false;
      }

      // Completion status filter
      const isCompleted = !!readingProgress.completedTexts[item.id];
      if (completionFilter === 'completed' && !isCompleted) {
        return false;
      }
      if (completionFilter === 'unread' && isCompleted) {
        return false;
      }

      // Search query across title, Turkish title, summary and vocabulary
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(query) || item.titleTr.toLowerCase().includes(query);
        const matchesSummary = item.summaryTr.toLowerCase().includes(query);
        const matchesVocab = item.vocabulary.some(v => v.word.toLowerCase().includes(query) || v.tr.toLowerCase().includes(query));
        return matchesTitle || matchesSummary || matchesVocab;
      }

      return true;
    });
  }, [selectedCategory, selectedLevelFilter, completionFilter, searchQuery, readingProgress]);

  const handleReadingCompleted = (textId: string, score: number, xpEarned: number) => {
    refreshState();
    if (onAddXp && xpEarned > 0) {
      onAddXp(xpEarned);
    }
  };

  const levelColorMap: Record<CEFRLevel, { bg: string; text: string; border: string }> = {
    A1: { bg: 'bg-emerald-50 dark:bg-emerald-950/30', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-200 dark:border-emerald-800' },
    A2: { bg: 'bg-teal-50 dark:bg-teal-950/30', text: 'text-teal-700 dark:text-teal-300', border: 'border-teal-200 dark:border-teal-800' },
    B1: { bg: 'bg-blue-50 dark:bg-blue-950/30', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800' },
    B2: { bg: 'bg-indigo-50 dark:bg-indigo-950/30', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-800' },
    C1: { bg: 'bg-purple-50 dark:bg-purple-950/30', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800' },
    C2: { bg: 'bg-rose-50 dark:bg-rose-950/30', text: 'text-rose-700 dark:text-rose-300', border: 'border-rose-200 dark:border-rose-800' },
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* 1. ÜST BAŞLIK VE HEDEF ALANI */}
      <div className="bg-gradient-to-br from-[#102344] via-[#162D55] to-[#1E3A8A] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
        <div className="absolute right-48 -bottom-16 w-56 h-56 rounded-full bg-indigo-500/10 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-200 uppercase tracking-widest">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>LinguAAI Okuma & Anlama Akademisi</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              İngilizce Okuma Merkezi
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-medium">
              Oku, anla, kelimeleri keşfet ve İngilizceni geliştir. CEFR uyumlu otantik metinler, bağlamsal sözlük ve kanıt odaklı anlama değerlendirmesi.
            </p>
          </div>

          {/* Gerçek İlerleme İstatistikleri */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 self-stretch md:self-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
              <div className="text-[11px] font-medium text-blue-200">Okuma Seviyesi</div>
              <div className="text-xl font-black text-white">{currentLevel}</div>
              <div className="text-[10px] text-blue-200/80">{READING_TEXTS.length} Metin Hazır</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
              <div className="text-[11px] font-medium text-blue-200">Tamamlanan</div>
              <div className="text-xl font-black text-emerald-300">
                {readingStats.completedCount} / {readingStats.totalTextsCount}
              </div>
              <div className="text-[10px] text-blue-200/80">
                %{Math.round((readingStats.completedCount / Math.max(1, readingStats.totalTextsCount)) * 100)} İlerleme
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center col-span-2 sm:col-span-1">
              <div className="text-[11px] font-medium text-blue-200">Öğrenilen Kelime</div>
              <div className="text-xl font-black text-amber-300">{readingStats.savedWordsCount}</div>
              <div className="text-[10px] text-blue-200/80">Kayıtlı Sözlük</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. DEVAM ET / TAVSİYE EDİLEN METİN KARTI */}
      {recommendedText && (
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                  {readingProgress.lastReadTextId ? 'Kaldığın Yerden Devam Et' : 'Tavsiye Edilen Okuma'}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  {recommendedText.level}
                </span>
                <span className="text-xs text-slate-500">
                  {recommendedText.categoryTr}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                {recommendedText.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                {recommendedText.titleTr}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  <span>~{recommendedText.readingTimeMinutes} dakika okuma</span>
                </span>
                <span className="text-slate-300">·</span>
                <span>{recommendedText.wordCount} kelime</span>
                <span className="text-slate-300">·</span>
                <span>{recommendedText.questions.length} anlama sorusu</span>
                {readingProgress.completedTexts[recommendedText.id] && (
                  <>
                    <span className="text-slate-300">·</span>
                    <span className="font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Son Skor: %{readingProgress.completedTexts[recommendedText.id].bestScore}</span>
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Launch Button */}
            <div className="shrink-0 flex items-center">
              <button
                type="button"
                onClick={() => setActiveReadingText(recommendedText)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-black text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{readingProgress.completedTexts[recommendedText.id] ? 'Metni Tekrar Oku' : 'Okumaya Başla'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. TÜM 10 KATEGORİ GÖRSEL KARTLARI */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
              Okuma Kategorileri ({READING_CATEGORIES.length})
            </h2>
          </div>
          {selectedCategory !== 'all' && (
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
            >
              Filtreyi Temizle
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {READING_CATEGORIES.map(cat => {
            const IconComponent = CATEGORY_ICONS[cat.id] || BookOpen;
            const count = categoryCounts[cat.id] || 0;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? 'all' : cat.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2.5 ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/40 shadow-sm ring-2 ring-blue-500/20'
                    : 'border-slate-200/90 bg-white hover:border-blue-300 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className={`text-[11px] font-black px-2 py-0.5 rounded-md ${
                    count > 0 ? 'bg-slate-100 text-slate-700' : 'bg-slate-50 text-slate-400'
                  }`}>
                    {count} Metin
                  </span>
                </div>

                <div>
                  <div className="text-xs font-black text-slate-900 truncate">
                    {cat.titleTr}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {cat.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. MERKEZİ TABLAR (Okuma Kataloğu vs. Kelime Defteri) */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('catalog')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'catalog'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Okuma Kataloğu ({READING_TEXTS.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('vocabulary')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'vocabulary'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Kaydedilen Kelimeler ({savedWords.length})</span>
          </button>
        </div>

        {/* Level Stats Summary */}
        <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
          {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as CEFRLevel[]).map(lvl => (
            <span 
              key={lvl}
              className={`px-2 py-0.5 rounded-md ${
                readingStats.levelBreakdown[lvl].completed > 0 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {lvl}: {readingStats.levelBreakdown[lvl].completed}/{levelCounts[lvl] || 5}
            </span>
          ))}
        </div>
      </div>

      {/* TAB 1: OKUMA METİNLERİ KATALOĞU */}
      {activeTab === 'catalog' && (
        <div className="space-y-6">
          
          {/* FİLTRE VE ARAMA KONTROLLERİ */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-4">
            
            {/* Search Input & Level Filter */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Başlık, konu veya kelime ara..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400"
                />
              </div>

              {/* CEFR Level Selector with real counts */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl overflow-x-auto shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedLevelFilter('all')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    selectedLevelFilter === 'all'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tümü ({READING_TEXTS.length})
                </button>
                {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as CEFRLevel[]).map(lvl => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSelectedLevelFilter(lvl)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      selectedLevelFilter === lvl
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lvl} ({levelCounts[lvl] || 0})
                  </button>
                ))}
              </div>
            </div>

            {/* Durum Filtresi: Tümü / Okunmamış / Tamamlanan */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-500">Durum:</span>
                <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setCompletionFilter('all')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                      completionFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Tümü
                  </button>
                  <button
                    type="button"
                    onClick={() => setCompletionFilter('unread')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                      completionFilter === 'unread' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Okunmamış
                  </button>
                  <button
                    type="button"
                    onClick={() => setCompletionFilter('completed')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer ${
                      completionFilter === 'completed' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Tamamlanan
                  </button>
                </div>
              </div>

              <div className="text-xs text-slate-500">
                <span className="font-bold text-slate-900">{filteredTexts.length}</span> metin listeleniyor
              </div>
            </div>
          </div>

          {/* METİN LİSTESİ GRİDİ */}
          {filteredTexts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">
                Aramanıza uygun metin bulunamadı
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Farklı bir arama terimi deneyebilir veya seviye / kategori filtrelerini sıfırlayabilirsiniz.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedLevelFilter('all');
                  setSelectedCategory('all');
                  setCompletionFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold cursor-pointer"
              >
                Filtreleri Temizle
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTexts.map((item) => {
                const record = readingProgress.completedTexts[item.id];
                const isCompleted = !!record;
                const colors = levelColorMap[item.level];

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between gap-4 group"
                  >
                    <div className="space-y-3">
                      {/* Level & Category badges */}
                      <div className="flex items-center justify-between gap-2">
                        <span className={`px-2.5 py-0.5 rounded-lg text-xs font-black border ${colors.bg} ${colors.text} ${colors.border}`}>
                          {item.level}
                        </span>

                        <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                          <span>{item.categoryTr}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <div>
                        <h4 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                          {item.title}
                        </h4>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">
                          {item.titleTr}
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {item.summaryTr}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium pt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>~{item.readingTimeMinutes} dk</span>
                        </span>
                        <span>•</span>
                        <span>{item.wordCount} kelime</span>
                        <span>•</span>
                        <span>{item.questions.length} soru</span>
                      </div>
                    </div>

                    {/* Bottom Action Area */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      {isCompleted ? (
                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Skor: %{record.bestScore}</span>
                        </div>
                      ) : (
                        <span className="text-[11px] font-semibold text-slate-400">
                          Henüz okunmadı
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() => setActiveReadingText(item)}
                        className="px-3.5 py-1.5 rounded-xl font-bold text-xs bg-slate-900 hover:bg-blue-600 text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <span>{isCompleted ? 'Tekrar Oku' : 'Metni Oku'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: KAYDEDİLEN KELİMELER DEFTERİ */}
      {activeTab === 'vocabulary' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-xl font-black text-slate-900">
                Okuma Sırasında Kaydedilen Kelimeler
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Metinleri okurken veya kelimeye tıklayarak defterinize eklediğiniz İngilizce kelimeler.
              </p>
            </div>
            <div className="px-3.5 py-1 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs self-start sm:self-auto">
              Toplam: {savedWords.length} Kelime
            </div>
          </div>

          {savedWords.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <Bookmark className="w-10 h-10 mx-auto mb-2 text-slate-300" />
              <p className="text-sm font-semibold text-slate-600">Henüz kaydedilmiş kelimeniz yok.</p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Okuma metinlerini incelerken anlamadığınız herhangi bir kelimeye tıklayarak buraya kaydedebilirsiniz.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedWords.map((item) => (
                <div 
                  key={item.word}
                  className="p-4 rounded-2xl border border-slate-200/90 hover:border-blue-300 transition-all flex flex-col justify-between gap-3 bg-slate-50/50"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-black text-base text-blue-600">
                          {item.word}
                        </span>
                        {item.phonetic && (
                          <span className="ml-2 text-xs font-mono text-slate-400">
                            {item.phonetic}
                          </span>
                        )}
                      </div>
                      {item.pos && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">
                          {item.pos}
                        </span>
                      )}
                    </div>

                    <div className="text-sm font-bold text-slate-800 mt-1">
                      {item.tr}
                    </div>

                    <div className="text-[11px] text-slate-400 mt-1 truncate">
                      Kaynak: {item.sourceTextTitle}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
                    <button
                      type="button"
                      onClick={() => readingAudioService.speakWord(item.word)}
                      className="flex items-center gap-1 text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Telaffuz</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        removeSavedWord(item.word);
                        refreshState();
                      }}
                      className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer transition-colors"
                      title="Defterden Kaldır"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* READING MODAL */}
      {activeReadingText && (
        <ReadingReaderModal
          text={activeReadingText}
          isOpen={!!activeReadingText}
          onClose={() => {
            setActiveReadingText(null);
            refreshState();
          }}
          onReadingCompleted={handleReadingCompleted}
        />
      )}
    </div>
  );
};
