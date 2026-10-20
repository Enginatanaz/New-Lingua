import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  Bookmark, 
  BookmarkCheck, 
  Sparkles, 
  RotateCcw, 
  ChevronRight, 
  Type, 
  Sun, 
  Moon, 
  Coffee,
  Quote,
  Check,
  Award,
  Clock,
  Loader2,
  RefreshCw,
  Play,
  Pause
} from 'lucide-react';
import { ReadingTextItem, ReadingQuestionItem } from '../../types/reading';
import { 
  saveReadingCompletion, 
  saveWordToReadingVocabulary, 
  isWordSaved, 
  removeSavedWord 
} from '../../services/readingEngine';
import { addMistake } from '../../services/srsEngine';
import { 
  readingAudioService, 
  ReadingAudioState, 
  ReadingVoice 
} from '../../services/readingAudioService';
import { 
  lookupWordDefinition, 
  cleanWordToken, 
  DictionaryLookupResult 
} from '../../services/dictionaryService';
import { SpeechRate } from '../../utils/speech';

interface ReadingReaderModalProps {
  text: ReadingTextItem;
  isOpen: boolean;
  onClose: () => void;
  onReadingCompleted?: (textId: string, score: number, xpEarned: number) => void;
}

type ReaderTheme = 'light' | 'sepia' | 'dark';
type ReaderFontSize = 'sm' | 'base' | 'lg' | 'xl';
type ReaderTab = 'text' | 'vocabulary' | 'quiz';

export const ReadingReaderModal: React.FC<ReadingReaderModalProps> = ({
  text,
  isOpen,
  onClose,
  onReadingCompleted,
}) => {
  const [activeTab, setActiveTab] = useState<ReaderTab>('text');
  const [theme, setTheme] = useState<ReaderTheme>('light');
  const [fontSize, setFontSize] = useState<ReaderFontSize>('base');
  
  // Audio state from readingAudioService
  const [audioState, setAudioState] = useState<ReadingAudioState>(readingAudioService.getState());
  const [audioErrorDismissed, setAudioErrorDismissed] = useState(false);

  // Word Click/Lookup state
  const [selectedWord, setSelectedWord] = useState<{
    word: string;
    cleanWord: string;
    lemma?: string;
    tr: string;
    phonetic?: string;
    pos?: string;
    contextDef?: string;
    example?: string;
    isFound: boolean;
    isLoading: boolean;
    x: number;
    y: number;
  } | null>(null);
  const [isWordSavedState, setIsWordSavedState] = useState(false);

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [addedMistakeIds, setAddedMistakeIds] = useState<Record<string, boolean>>({});

  // Timer
  const startTimeRef = useRef<number>(Date.now());

  // Subscribe to readingAudioService lifecycle
  useEffect(() => {
    const unsubscribe = readingAudioService.subscribe((state) => {
      setAudioState(state);
      if (state.errorMessage) {
        setAudioErrorDismissed(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      startTimeRef.current = Date.now();
      setUserAnswers({});
      setIsQuizSubmitted(false);
      setQuizScore(null);
      setSelectedWord(null);
      setActiveTab('text');
      readingAudioService.stop();
    } else {
      readingAudioService.stop();
    }
  }, [isOpen, text.id]);

  if (!isOpen) return null;

  // Font size classes
  const fontClasses: Record<ReaderFontSize, { text: string; lead: string }> = {
    sm: { text: 'text-sm sm:text-base leading-relaxed', lead: 'leading-6' },
    base: { text: 'text-base sm:text-lg leading-relaxed sm:leading-8', lead: 'leading-7' },
    lg: { text: 'text-lg sm:text-xl leading-relaxed sm:leading-9', lead: 'leading-8' },
    xl: { text: 'text-xl sm:text-2xl leading-relaxed sm:leading-10', lead: 'leading-9' },
  };

  // Theme styles
  const themeClasses: Record<ReaderTheme, { bg: string; surface: string; text: string; textMuted: string; border: string }> = {
    light: {
      bg: 'bg-slate-100/90',
      surface: 'bg-white',
      text: 'text-slate-900',
      textMuted: 'text-slate-600',
      border: 'border-slate-200',
    },
    sepia: {
      bg: 'bg-[#F4ECD8]/80',
      surface: 'bg-[#FDF6E2]',
      text: 'text-[#433422]',
      textMuted: 'text-[#7D6B53]',
      border: 'border-[#E6D7B9]',
    },
    dark: {
      bg: 'bg-slate-950/90',
      surface: 'bg-slate-900',
      text: 'text-slate-100',
      textMuted: 'text-slate-400',
      border: 'border-slate-800',
    },
  };

  const currentTheme = themeClasses[theme];

  // Natural audio toggles using readingAudioService
  const handleToggleFullAudio = () => {
    if (audioState.status === 'playing') {
      readingAudioService.pause();
    } else if (audioState.status === 'paused') {
      readingAudioService.resume();
    } else {
      readingAudioService.playFullText(text.paragraphs);
    }
  };

  const handleToggleParagraphAudio = (paragraphIndex: number) => {
    if (audioState.status === 'playing' && audioState.currentParagraphIndex === paragraphIndex) {
      readingAudioService.stop();
    } else {
      readingAudioService.playParagraph(text.paragraphs[paragraphIndex], paragraphIndex);
    }
  };

  // Word Click Handler with contextual bilingual translation
  const handleWordClick = async (rawWord: string, e: React.MouseEvent, contextSentence?: string) => {
    e.stopPropagation();
    const clean = cleanWordToken(rawWord);
    if (!clean || clean.length < 1) return;

    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const popupX = Math.min(Math.max(16, rect.left), window.innerWidth - 320);
    const popupY = Math.min(rect.bottom + 8, window.innerHeight - 240);

    // Initial loading card
    setSelectedWord({
      word: rawWord,
      cleanWord: clean,
      tr: 'Türkçe anlamı aranıyor...',
      isFound: false,
      isLoading: true,
      x: popupX,
      y: popupY,
    });
    setIsWordSavedState(isWordSaved(clean));

    // Resolve dictionary definition
    const lookupResult: DictionaryLookupResult = await lookupWordDefinition(rawWord, {
      contextSentence: contextSentence || text.paragraphs[0],
      textVocabulary: text.vocabulary,
    });

    setSelectedWord({
      word: rawWord,
      cleanWord: clean,
      lemma: lookupResult.lemma,
      tr: lookupResult.tr,
      phonetic: lookupResult.phonetic,
      pos: lookupResult.pos,
      contextDef: lookupResult.contextDef,
      example: lookupResult.example,
      isFound: lookupResult.isFound,
      isLoading: false,
      x: popupX,
      y: popupY,
    });
  };

  const handleToggleSaveSelectedWord = () => {
    if (!selectedWord) return;
    if (isWordSavedState) {
      removeSavedWord(selectedWord.cleanWord);
      setIsWordSavedState(false);
    } else {
      saveWordToReadingVocabulary(
        selectedWord.cleanWord,
        selectedWord.tr || 'Öğrenilen kelime',
        selectedWord.phonetic,
        selectedWord.pos,
        text.id,
        text.title
      );
      setIsWordSavedState(true);
    }
  };

  // Quiz submission & scoring
  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (isQuizSubmitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    text.questions.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });

    const scorePct = Math.round((correctCount / text.questions.length) * 100);
    setQuizScore(scorePct);
    setIsQuizSubmitted(true);

    const timeSpent = Math.max(15, Math.round((Date.now() - startTimeRef.current) / 1000));
    const result = saveReadingCompletion(text.id, scorePct, timeSpent, userAnswers);

    if (onReadingCompleted) {
      onReadingCompleted(text.id, scorePct, result.xpAwarded);
    }
  };

  const handleAddToMistakeBank = (q: ReadingQuestionItem) => {
    addMistake({
      lessonId: 1,
      lessonTitle: `Reading: ${text.title}`,
      lessonCode: `READ-${text.level}`,
      level: text.level,
      exerciseId: q.id,
      prompt: q.question,
      sentence: q.evidenceSentence,
      userWrongAnswer: userAnswers[q.id] !== undefined ? q.options[userAnswers[q.id]] : 'Cevaplanmadı',
      correctAnswer: q.options[q.correctIndex],
      explanation: `${q.explanation} (Metindeki Kanıt: "${q.evidenceSentence}")`,
      errorCategory: 'pragmatic_nuance',
    });

    setAddedMistakeIds(prev => ({ ...prev, [q.id]: true }));
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setSelectedWord(null)}
    >
      <div 
        className={`w-full max-w-4xl h-[92vh] max-h-[860px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border ${currentTheme.border} ${currentTheme.surface} transition-colors duration-200`}
        onClick={e => e.stopPropagation()}
      >
        
        {/* HEADER TOOLBAR */}
        <header className={`px-5 py-4 border-b ${currentTheme.border} flex items-center justify-between gap-3 shrink-0`}>
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-2.5 py-1 rounded-xl text-xs font-black tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
              {text.level}
            </span>
            <div className="min-w-0">
              <h2 className={`font-black text-base sm:text-lg truncate ${currentTheme.text}`}>
                {text.title}
              </h2>
              <div className={`text-xs truncate ${currentTheme.textMuted}`}>
                {text.categoryTr} • {text.wordCount} kelime • ~{text.readingTimeMinutes} dk okuma
              </div>
            </div>
          </div>

          {/* Reader & Audio Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Theme switcher */}
            <div className="hidden sm:flex items-center gap-1 p-1 rounded-xl bg-slate-500/10">
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                  theme === 'light' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                }`}
                title="Açık Tema"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setTheme('sepia')}
                className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                  theme === 'sepia' ? 'bg-[#FDF6E2] text-[#433422] shadow-xs' : 'text-slate-500'
                }`}
                title="Sepya Tema"
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                  theme === 'dark' ? 'bg-slate-800 text-slate-100 shadow-xs' : 'text-slate-500'
                }`}
                title="Koyu Tema"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Font size toggle */}
            <button
              type="button"
              onClick={() => {
                const sizes: ReaderFontSize[] = ['sm', 'base', 'lg', 'xl'];
                const nextIdx = (sizes.indexOf(fontSize) + 1) % sizes.length;
                setFontSize(sizes[nextIdx]);
              }}
              className={`p-2 rounded-xl text-xs font-bold border ${currentTheme.border} ${currentTheme.text} cursor-pointer hover:bg-slate-200/50 dark:hover:bg-slate-800`}
              title="Yazı Boyutu"
            >
              <Type className="w-4 h-4" />
            </button>

            {/* Natural Audio Narration Button */}
            <button
              type="button"
              onClick={handleToggleFullAudio}
              disabled={audioState.status === 'loading'}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                audioState.status === 'playing'
                  ? 'bg-rose-600 text-white hover:bg-rose-700 animate-pulse'
                  : audioState.status === 'loading'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                  : audioState.status === 'paused'
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              title="Doğal Stüdyo Sesiyle Dinle"
            >
              {audioState.status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="hidden sm:inline">Hazırlanıyor...</span>
                </>
              ) : audioState.status === 'playing' ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Durdur</span>
                </>
              ) : audioState.status === 'paused' ? (
                <>
                  <Play className="w-4 h-4" />
                  <span>Devam Et</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>Doğal Sesle Dinle</span>
                </>
              )}
            </button>

            {/* Audio Speed Selector */}
            <select
              value={audioState.speed}
              onChange={(e) => readingAudioService.setSpeed(parseFloat(e.target.value) as SpeechRate)}
              className={`text-xs font-semibold px-2 py-1.5 rounded-xl border ${currentTheme.border} ${currentTheme.surface} ${currentTheme.text} cursor-pointer`}
              title="Doğal Ses Okuma Hızı"
            >
              <option value={0.8}>0.8x Sakin</option>
              <option value={1.0}>1.0x Doğal</option>
              <option value={1.2}>1.2x Akıcı</option>
            </select>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className={`p-2 rounded-xl transition-colors cursor-pointer hover:bg-slate-200/60 dark:hover:bg-slate-800 ${currentTheme.textMuted}`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* TABS NAVIGATION */}
        <div className={`px-5 py-2.5 border-b ${currentTheme.border} flex items-center justify-between gap-2 overflow-x-auto shrink-0 bg-slate-500/5`}>
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('text')}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'text'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : `${currentTheme.textMuted} hover:${currentTheme.text}`
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Metin & Dinleme</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('vocabulary')}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'vocabulary'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : `${currentTheme.textMuted} hover:${currentTheme.text}`
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hedef Kelimeler ({text.vocabulary.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('quiz')}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'quiz'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : `${currentTheme.textMuted} hover:${currentTheme.text}`
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Anlama Değerlendirmesi ({text.questions.length})</span>
              {isQuizSubmitted && quizScore !== null && (
                <span className="ml-1 px-1.5 py-0.5 rounded bg-emerald-500 text-white text-[10px]">
                  %{quizScore}
                </span>
              )}
            </button>
          </div>

          <span className="text-xs text-slate-400 hidden md:inline">
            Metindeki herhangi bir kelimeye tıklayarak bağlamsal Türkçe anlamını öğrenin
          </span>
        </div>

        {/* NATURAL AUDIO ERROR BANNER (STRICT TRANSPARENCY - NEVER SILENT FALLBACK) */}
        {audioState.errorMessage && !audioErrorDismissed && (
          <div className="px-5 py-2.5 bg-amber-500/10 border-b border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs flex items-center justify-between gap-3 animate-in fade-in shrink-0">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span className="font-medium">{audioState.errorMessage}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => readingAudioService.playFullText(text.paragraphs)}
                className="flex items-center gap-1 px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg cursor-pointer transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Yeniden Dene</span>
              </button>
              <button
                type="button"
                onClick={() => setAudioErrorDismissed(true)}
                className="p-1 hover:bg-amber-500/20 rounded cursor-pointer text-amber-800 dark:text-amber-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* MAIN BODY AREA */}
        <div className="flex-1 p-5 sm:p-8 overflow-y-auto min-h-[400px]">
          
          {/* TAB 1: READING TEXT CANVAS */}
          {activeTab === 'text' && (
            <article className="max-w-2xl mx-auto space-y-6">
              {/* Title & Subtitle */}
              <div className="border-b pb-4 border-slate-200/50">
                <div className="flex items-center justify-between gap-2">
                  <h1 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${currentTheme.text}`}>
                    {text.title}
                  </h1>
                </div>
                <p className={`text-sm sm:text-base mt-1 font-medium ${currentTheme.textMuted}`}>
                  {text.titleTr}
                </p>
                {text.summaryTr && (
                  <p className="text-xs sm:text-sm italic mt-2 text-blue-600/90 bg-blue-50/50 dark:bg-blue-950/20 p-2.5 rounded-xl border border-blue-100 dark:border-blue-900/40">
                    Özet: {text.summaryTr}
                  </p>
                )}
                {text.targetGrammar && (
                  <div className="mt-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Hedef Dil Yapısı: {text.targetGrammar}
                  </div>
                )}
              </div>

              {/* Paragraphs with Interactive Word Tap */}
              <div className="space-y-6">
                {text.paragraphs.map((para, pIdx) => {
                  const words = para.split(/\s+/);
                  const isParaActive = audioState.currentParagraphIndex === pIdx && (audioState.status === 'playing' || audioState.status === 'loading');

                  return (
                    <div 
                      key={pIdx} 
                      className={`relative p-3.5 rounded-2xl transition-all duration-200 ${
                        isParaActive 
                          ? 'ring-2 ring-blue-500/80 bg-blue-500/10 dark:bg-blue-500/20 shadow-sm' 
                          : 'hover:bg-slate-500/5'
                      }`}
                    >
                      {/* Paragraph audio helper */}
                      <button
                        type="button"
                        onClick={() => handleToggleParagraphAudio(pIdx)}
                        className={`absolute -left-3 top-3.5 transition-opacity p-1.5 rounded-lg cursor-pointer ${
                          isParaActive 
                            ? 'opacity-100 text-blue-600 bg-blue-100 dark:bg-blue-900/50' 
                            : 'opacity-0 hover:opacity-100 md:opacity-40 hover:md:opacity-100 text-slate-400 hover:text-blue-600'
                        }`}
                        title="Bu paragrafı doğal sesle dinle"
                      >
                        {isParaActive && audioState.status === 'playing' ? (
                          <Pause className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <p className={`${fontClasses[fontSize].text} ${currentTheme.text}`}>
                        {words.map((word, wIdx) => {
                          const clean = cleanWordToken(word);
                          const isKeyWord = text.vocabulary.some(v => cleanWordToken(v.word) === clean);

                          return (
                            <span
                              key={wIdx}
                              onClick={(e) => handleWordClick(word, e, para)}
                              className={`inline-block mx-0.5 rounded px-1 cursor-pointer transition-colors ${
                                isKeyWord 
                                  ? 'font-semibold underline decoration-blue-500/70 decoration-2 underline-offset-4 bg-blue-50/60 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-900/50' 
                                  : 'hover:bg-slate-200/70 dark:hover:bg-slate-800'
                              }`}
                              title="Tıkla: Türkçe anlamını gör"
                            >
                              {word}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA to quiz */}
              <div className={`pt-6 border-t ${currentTheme.border} flex flex-col sm:flex-row items-center justify-between gap-4`}>
                <div className={`text-xs ${currentTheme.textMuted}`}>
                  Metni tamamladınız mı? Anlama seviyenizi ölçmek için test sorularına geçin.
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('quiz')}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Anlama Değerlendirmesini Başlat</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          )}

          {/* TAB 2: VOCABULARY CANVAS */}
          {activeTab === 'vocabulary' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="flex items-center justify-between border-b pb-3 border-slate-200/50">
                <div>
                  <h3 className={`text-lg font-black ${currentTheme.text}`}>
                    Metnin Hedef Kelimeleri
                  </h3>
                  <p className={`text-xs ${currentTheme.textMuted} mt-0.5`}>
                    Bu metinde geçen önemli kelimeler, fonetik telaffuzları ve bağlamsal anlamları.
                  </p>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-xl">
                  {text.vocabulary.length} Kelime
                </span>
              </div>

              {/* Vocabulary Grid */}
              <div className="grid grid-cols-1 gap-4">
                {text.vocabulary.map((vocab, vIdx) => {
                  const saved = isWordSaved(vocab.word);

                  return (
                    <div 
                      key={vIdx}
                      className={`p-4 rounded-2xl border transition-all space-y-3 ${
                        saved 
                          ? 'border-emerald-300 dark:border-emerald-800/80 bg-emerald-500/5' 
                          : `${currentTheme.border} ${currentTheme.surface} hover:border-blue-300`
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-baseline gap-2">
                            <span className="font-extrabold text-base text-blue-600 dark:text-blue-400">
                              {vocab.word}
                            </span>
                            <span className="text-xs font-mono text-slate-400">
                              {vocab.phonetic}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {vocab.pos}
                          </span>
                        </div>

                        <div className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                          {vocab.tr}
                        </div>

                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {vocab.contextDef}
                        </p>

                        {vocab.example && (
                          <p className="text-xs italic text-slate-500 dark:text-slate-400 mt-2 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-200/50">
                            "{vocab.example}"
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                        <button
                          type="button"
                          onClick={() => readingAudioService.speakWord(vocab.word)}
                          className="flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 cursor-pointer font-bold"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                          <span>Doğal Sesle Dinle</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            if (saved) {
                              removeSavedWord(vocab.word);
                            } else {
                              saveWordToReadingVocabulary(
                                vocab.word,
                                vocab.tr,
                                vocab.phonetic,
                                vocab.pos,
                                text.id,
                                text.title
                              );
                            }
                            setIsWordSavedState(!saved);
                          }}
                          className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
                            saved 
                              ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30' 
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                          }`}
                        >
                          {saved ? (
                            <>
                              <BookmarkCheck className="w-3.5 h-3.5" />
                              <span>Kaydedildi</span>
                            </>
                          ) : (
                            <>
                              <Bookmark className="w-3.5 h-3.5" />
                              <span>Kelime Bankasına Kaydet</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: COMPREHENSION QUIZ */}
          {activeTab === 'quiz' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <h3 className={`text-xl font-extrabold ${currentTheme.text}`}>
                  Okuduğunu Anlama Değerlendirmesi
                </h3>
                <p className={`text-xs ${currentTheme.textMuted} mt-0.5`}>
                  Metne dayalı kanıt odaklı sorular. Doğru yanıtları seçin ve analizi inceleyin.
                </p>
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {text.questions.map((q, qIdx) => {
                  const selectedOption = userAnswers[q.id];
                  const isAnswered = selectedOption !== undefined;
                  const isCorrect = isAnswered && selectedOption === q.correctIndex;
                  const isWrong = isAnswered && selectedOption !== q.correctIndex;
                  const isSavedToMistakes = !!addedMistakeIds[q.id];

                  return (
                    <div 
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${currentTheme.surface} ${
                        isQuizSubmitted
                          ? isCorrect 
                            ? 'border-emerald-300 dark:border-emerald-800 bg-emerald-500/5'
                            : 'border-rose-300 dark:border-rose-800 bg-rose-500/5'
                          : `${currentTheme.border}`
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black shrink-0">
                            {qIdx + 1}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded">
                            {q.typeTr}
                          </span>
                        </div>

                        {isQuizSubmitted && (
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                            isCorrect 
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' 
                              : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                          }`}>
                            {isCorrect ? 'Doğru Yanıt' : 'Yanlış'}
                          </span>
                        )}
                      </div>

                      <h4 className={`text-sm sm:text-base font-bold ${currentTheme.text} mb-4 leading-snug`}>
                        {q.question}
                      </h4>

                      {/* Options */}
                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptionSelected = selectedOption === optIdx;
                          const isCorrectOption = optIdx === q.correctIndex;

                          let optionStyle = `${currentTheme.surface} ${currentTheme.border} ${currentTheme.text} hover:border-blue-400`;

                          if (isQuizSubmitted) {
                            if (isCorrectOption) {
                              optionStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                            } else if (isOptionSelected && !isCorrectOption) {
                              optionStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-400 text-rose-900 dark:text-rose-200 line-through';
                            } else {
                              optionStyle = 'opacity-50 border-slate-200 dark:border-slate-800';
                            }
                          } else if (isOptionSelected) {
                            optionStyle = 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold ring-2 ring-blue-500/20';
                          }

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              disabled={isQuizSubmitted}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${optionStyle}`}
                            >
                              <div className="flex items-center gap-3">
                                <span className={`w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0 border ${
                                  isOptionSelected 
                                    ? 'bg-blue-600 text-white border-blue-600' 
                                    : 'border-slate-300 text-slate-500'
                                }`}>
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span>{opt}</span>
                              </div>

                              {isQuizSubmitted && isCorrectOption && (
                                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                              {isQuizSubmitted && isOptionSelected && !isCorrectOption && (
                                <X className="w-4 h-4 text-rose-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation & Evidence on Submission */}
                      {isQuizSubmitted && (
                        <div className="mt-4 pt-4 border-t border-slate-200/50 space-y-2 text-xs">
                          <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-xl border border-blue-100 dark:border-blue-900/50">
                            <span className="font-bold text-blue-700 dark:text-blue-300 block mb-1">
                              Pedagojik Çözümleme:
                            </span>
                            <p className="text-slate-700 dark:text-slate-300">
                              {q.explanation}
                            </p>
                          </div>

                          <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200/50">
                            <span className="font-bold text-slate-500 dark:text-slate-400 block mb-1">
                              Metindeki Kanıt Cümlesi:
                            </span>
                            <blockquote className="italic text-slate-700 dark:text-slate-300 border-l-2 border-blue-500 pl-2">
                              "{q.evidenceSentence}"
                            </blockquote>
                          </div>

                          {/* Mistake bank integration on wrong answer */}
                          {isWrong && (
                            <div className="pt-2 flex justify-end">
                              <button
                                type="button"
                                onClick={() => handleAddToMistakeBank(q)}
                                disabled={isSavedToMistakes}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                                  isSavedToMistakes 
                                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 cursor-default' 
                                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                                }`}
                              >
                                {isSavedToMistakes ? (
                                  <>
                                    <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
                                    <span>Telafi Bankasına Eklendi</span>
                                  </>
                                ) : (
                                  <>
                                    <Bookmark className="w-3.5 h-3.5" />
                                    <span>Bu Soruyu Telafi Bankasına Ekle</span>
                                  </>
                                )}
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Quiz Submit Button & Score Summary */}
              {!isQuizSubmitted ? (
                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(userAnswers).length < text.questions.length}
                    className={`px-6 py-3 rounded-2xl font-black text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer ${
                      Object.keys(userAnswers).length === text.questions.length
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-slate-200 text-slate-400 dark:bg-slate-800 cursor-not-allowed'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Cevapları Onayla ve Değerlendir</span>
                  </button>
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                      Değerlendirme Tamamlandı
                    </span>
                    <h4 className="text-xl font-black mt-0.5">
                      Başarı Puanı: %{quizScore}
                    </h4>
                    <p className="text-xs text-blue-100 mt-1">
                      {quizScore && quizScore >= 80 
                        ? 'Harika! Metni ve ayrıntıları yüksek oranda kavradınız.' 
                        : 'Metni tekrar gözden geçirerek anahtar kelimeleri ve kanıt cümlelerini inceleyin.'}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsQuizSubmitted(false);
                      setUserAnswers({});
                      setQuizScore(null);
                    }}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0"
                  >
                    Yeniden Çöz
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

        {/* INTERACTIVE BILINGUAL DICTIONARY POPUP / TOOLTIP */}
        {selectedWord && (
          <div 
            className="fixed z-50 bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-4 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-xs sm:max-w-sm w-76 animate-in fade-in zoom-in-95 duration-150"
            style={{
              top: Math.min(selectedWord.y, window.innerHeight - 230),
              left: Math.max(16, selectedWord.x),
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-black text-base text-blue-600 dark:text-blue-400 truncate">
                    {selectedWord.cleanWord}
                  </span>
                  {selectedWord.phonetic && (
                    <span className="text-xs font-mono text-slate-400">
                      {selectedWord.phonetic}
                    </span>
                  )}
                </div>
                {selectedWord.pos && (
                  <span className="inline-block mt-0.5 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {selectedWord.pos}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedWord(null)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Translation Output (Guaranteed never to repeat English word as Turkish translation) */}
            <div className="mt-2.5">
              {selectedWord.isLoading ? (
                <div className="flex items-center gap-2 text-xs text-blue-600 font-semibold py-1">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Sözlükten çevriliyor...</span>
                </div>
              ) : selectedWord.isFound ? (
                <div className="text-sm font-black text-emerald-700 dark:text-emerald-400">
                  {selectedWord.tr}
                </div>
              ) : (
                <div className="text-xs font-bold text-rose-600 dark:text-rose-400">
                  {selectedWord.tr}
                </div>
              )}

              {selectedWord.contextDef && !selectedWord.isLoading && (
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {selectedWord.contextDef}
                </p>
              )}

              {selectedWord.example && !selectedWord.isLoading && (
                <p className="text-[11px] italic text-slate-500 dark:text-slate-400 mt-1.5 bg-slate-50 dark:bg-slate-800/40 p-2 rounded-lg border border-slate-200/50">
                  "{selectedWord.example}"
                </p>
              )}
            </div>

            {/* Actions: Pronounce & Save */}
            <div className="flex items-center justify-between gap-2 mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => readingAudioService.speakWord(selectedWord.cleanWord)}
                className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Telaffuz</span>
              </button>

              <button
                type="button"
                onClick={handleToggleSaveSelectedWord}
                disabled={selectedWord.isLoading || !selectedWord.isFound}
                className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-xl transition-colors cursor-pointer ${
                  !selectedWord.isFound
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : isWordSavedState 
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xs'
                }`}
              >
                {isWordSavedState ? (
                  <>
                    <BookmarkCheck className="w-3.5 h-3.5" />
                    <span>Kaydedildi</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Kelimeye Ekle</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
