import React, { useState, useMemo } from 'react';
import { 
  BookmarkCheck, 
  Search, 
  Volume2, 
  CheckCircle2, 
  Clock, 
  Filter, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { getAllWordRecords } from '../../services/studentMemoryEngine';
import { CEFRLevel } from '../../types/lesson';
import { audioEngine } from '../../services/audioEngine';

interface VocabularyViewProps {
  onOpenLesson?: (id: number) => void;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({ onOpenLesson }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  const wordRecords = getAllWordRecords();

  const filteredWords = useMemo(() => {
    return wordRecords.filter((w) => {
      const matchQuery = 
        w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.meaningTr.toLowerCase().includes(searchQuery.toLowerCase());
      const matchStatus = selectedStatus === 'all' || w.status === selectedStatus;
      return matchQuery && matchStatus;
    });
  }, [wordRecords, searchQuery, selectedStatus]);

  const handlePlayAudio = (word: string) => {
    setPlayingWord(word);
    audioEngine.speakSingle(word, {
      lang: 'en',
      onEnd: () => setPlayingWord(null),
    });
  };

  const statusLabels: Record<string, { label: string; color: string }> = {
    mastered: { label: 'Ustalaşıldı', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    recalled: { label: 'Hatırlandı', color: 'bg-teal-50 text-teal-700 border-teal-200' },
    recognized: { label: 'Tanınıyor', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    encountered: { label: 'Görüldü', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    needs_review: { label: 'Tekrar Gerekli', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    unseen: { label: 'Görülmedi', color: 'bg-slate-50 text-slate-600 border-slate-200' },
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
            <BookmarkCheck className="w-4 h-4" />
            <span>Kişisel Kelime Bankası</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Öğrenilen Kelimeler ve Fonetik Telaffuz
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Derslerde karşılaştığınız kelimelerin anlamları, telaffuzları ve aralıklı tekrar hafıza durumları.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-center">
          <div className="px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div className="text-[11px] font-semibold text-slate-500">Kayıtlı Kelime</div>
            <div className="text-lg font-black text-slate-900 tabular-nums">{wordRecords.length}</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Kelime veya Türkçe anlam ara..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-hidden"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {[
            { id: 'all', label: 'Tümü' },
            { id: 'mastered', label: 'Ustalaşılan' },
            { id: 'needs_review', label: 'Tekrar Bekleyen' },
            { id: 'recognized', label: 'Öğrenilen' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedStatus(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                selectedStatus === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Words Grid */}
      {filteredWords.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredWords.map((record) => {
            const statusConfig = statusLabels[record.status] || statusLabels.unseen;
            const isPlaying = playingWord === record.word;

            return (
              <div
                key={record.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-blue-200 shadow-xs flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                      {record.word}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${statusConfig.color}`}>
                      {statusConfig.label}
                    </span>
                  </div>

                  {record.phonetic && (
                    <div className="text-xs font-mono text-slate-400 mb-1">
                      {record.phonetic}
                    </div>
                  )}

                  <div className="text-xs font-bold text-blue-700 mb-2">
                    {record.meaningTr}
                  </div>

                  {record.exampleSentence && (
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 italic leading-relaxed">
                      "{record.exampleSentence}"
                    </div>
                  )}
                </div>

                <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[10px] font-semibold text-slate-400">
                    Ders: {record.associatedLessonCode}
                  </div>

                  <button
                    onClick={() => handlePlayAudio(record.word)}
                    disabled={isPlaying}
                    className="p-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors cursor-pointer"
                    title="Telaffuzu Dinle"
                    aria-label={`${record.word} telaffuzunu dinle`}
                  >
                    <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-bounce text-blue-700' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/90 shadow-xs space-y-3">
          <BookmarkCheck className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            {searchQuery ? 'Eşleşen kelime bulunamadı' : 'Henüz kelime kaydı yok'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
            Dersleri işledikçe öğrendiğiniz kelimeler otomatik olarak buraya eklenir ve aralıklı tekrar motoruyla takip edilir.
          </p>
        </div>
      )}
    </div>
  );
};
