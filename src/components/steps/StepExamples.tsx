import React, { useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  MessageSquareQuote, 
  ArrowRight, 
  Sparkles,
  Tag,
  Info
} from 'lucide-react';
import { LessonData, ExampleSentence } from '../../types/lesson';
import { AudioButton } from '../common/AudioButton';

interface StepExamplesProps {
  lesson: LessonData;
  onContinue: () => void;
}

export const StepExamples: React.FC<StepExamplesProps> = ({
  lesson,
  onContinue,
}) => {

  // Helper to render sentence with highlighted words
  const renderHighlightedSentence = (sentence: string, highlights: string[]) => {
    if (!highlights || highlights.length === 0) return sentence;

    // Build regex to split and highlight
    const escaped = highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const regex = new RegExp(`(${escaped})`, 'gi');
    const parts = sentence.split(regex);

    return parts.map((part, index) => {
      const isMatch = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
      if (isMatch) {
        return (
          <span
            key={index}
            className="text-indigo-600 bg-indigo-50/90 font-bold px-1.5 py-0.5 rounded-md border border-indigo-200/60 inline-block my-0.5"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
      {/* Intro Header */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2">
          <MessageSquareQuote className="w-4 h-4" />
          <span>Bölüm 3 — Pratik & Model Cümleler</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Gerçek Hayattan Model Örnekler
        </h2>

        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
          Cümleleri yüksek sesle tekrar edin, ses butonuna basarak telaffuzları dinleyin ve kuralın cümle içindeki doğal akışını inceleyin.
        </p>
      </div>

      {/* Examples Grid / List */}
      <div className="space-y-4">
        {lesson.examples.map((example, index) => {
          return (
            <div
              key={example.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:border-indigo-200 transition-all hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  {example.grammarCategory && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      <Tag className="w-3 h-3 text-slate-400" />
                      {example.grammarCategory}
                    </span>
                  )}
                </div>

                {/* Pronunciation Audio Button */}
                <AudioButton text={example.en} size="md" showSpeedToggle label="Dinle" />
              </div>

              {/* 3-Part Standard Format: İngilizce, Türkçe, Açıklama */}
              <div className="space-y-2 pt-1">
                {/* 1. İngilizce */}
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-bold text-indigo-600 uppercase shrink-0 w-20">
                    İngilizce:
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {renderHighlightedSentence(example.en, example.highlightedWords)}
                  </p>
                </div>

                {/* 2. Türkçe */}
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-bold text-slate-500 uppercase shrink-0 w-20">
                    Türkçe:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    {example.tr}
                  </p>
                </div>

                {/* 3. Açıklama */}
                <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-amber-600 uppercase shrink-0 w-20 mt-0.5">
                    Açıklama:
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      {example.breakdownNote || example.contextNote || 'Hedef yapı cümledeki konumuna ve şahıs uyumuna göre doğru çekimlenmiştir.'}
                    </p>
                    {example.contextNote && example.breakdownNote && (
                      <p className="text-[11px] text-slate-500 italic pl-1">
                        Bağlam: {example.contextNote}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Alternative Form & Nuance */}
              {example.alternativeForm && (
                <div className="mt-2.5 p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 text-xs text-purple-950">
                  <span className="font-bold text-purple-900">Alternatif Kullanım: </span>
                  <span className="italic">"{example.alternativeForm.sentence}"</span> — {example.alternativeForm.nuanceExplanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action CTA */}
      <div className="pt-2 flex justify-end">
        <button
          onClick={onContinue}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <span>Alıştırmalara Geç</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
