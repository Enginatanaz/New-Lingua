import React from 'react';
import { Sparkles, Volume2, Info, Check, HelpCircle } from 'lucide-react';
import { TeacherBlackboardData, BlackboardRow } from '../../types/lesson';
import { AudioButton } from '../common/AudioButton';

interface BlackboardViewProps {
  blackboard: TeacherBlackboardData;
  lessonTitle?: string;
  lessonLevel?: string;
  streamlined?: boolean;
}

export const BlackboardView: React.FC<BlackboardViewProps> = ({
  blackboard,
  lessonTitle,
  lessonLevel,
  streamlined = false,
}) => {
  if (streamlined) {
    return (
      <section 
        id="section-blackboard"
        aria-label="Öğretmen Siyah Yazı Tahtası"
        className="scroll-mt-20"
      >
        <div className="rounded-2xl p-4 sm:p-6 bg-[#0c1322] border border-slate-800 text-white shadow-sm relative">
          {/* Header */}
          <div className="border-b border-slate-800/90 pb-3 mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300">
                  SİYAH TAHTA • ÖZET ŞEMA
                </span>
                {lessonLevel && (
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 font-mono">
                    {lessonLevel}
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-xl font-black text-white tracking-tight">
                {blackboard.title}
              </h3>
              {blackboard.subtitle && (
                <p className="text-xs text-slate-400 font-medium">
                  {blackboard.subtitle}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-amber-300 font-semibold">Sarı: Kritik Yapı</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-200" />
                <span className="text-slate-300">Beyaz: Örnek</span>
              </span>
            </div>
          </div>

          {/* Table Layout */}
          {blackboard.rows && blackboard.rows.length > 0 && (
            <div className="space-y-3">
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
                <table className="w-full text-left text-xs sm:text-sm border-collapse font-sans">
                  {blackboard.headers && blackboard.headers.length > 0 && (
                    <thead>
                      <tr className="border-b border-slate-700/80 bg-slate-900 text-amber-300 font-mono text-xs uppercase tracking-wider">
                        {blackboard.headers.map((header, hIdx) => (
                          <th key={hIdx} className="p-3 font-bold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody className="divide-y divide-slate-800/80">
                    {blackboard.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                        <td className={`p-3 font-semibold font-mono ${
                          row.highlightCol1 ? 'text-amber-300' : 'text-slate-100'
                        }`}>
                          {row.col1}
                        </td>
                        <td className={`p-3 font-bold font-mono ${
                          row.highlightCol2 ? 'text-amber-300 text-sm' : 'text-white'
                        }`}>
                          {row.col2}
                        </td>
                        <td className={`p-3 ${
                          row.highlightCol3 ? 'text-amber-300 font-semibold' : 'text-slate-200'
                        }`}>
                          <div className="flex items-center justify-between gap-2">
                            <span>{row.col3}</span>
                            {row.col3 && /^[A-Z][a-zA-Z\s,.'?!-]{4,}$/.test(row.col3.trim()) && (
                              <AudioButton text={row.col3} size="sm" />
                            )}
                          </div>
                        </td>
                        {row.col4 && (
                          <td className={`p-3 text-xs ${
                            row.highlightCol4 ? 'text-amber-300 font-bold' : 'text-slate-300'
                          }`}>
                            {row.col4}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Adaptive Stacked Cards */}
              <div className="md:hidden space-y-2.5">
                {blackboard.rows.map((row, rIdx) => (
                  <div key={rIdx} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5">
                    <div className="flex items-baseline justify-between gap-2 border-b border-slate-800/70 pb-1.5">
                      <span className={`font-mono font-bold text-xs ${
                        row.highlightCol1 ? 'text-amber-300' : 'text-slate-200'
                      }`}>
                        {blackboard.headers?.[0] ? `${blackboard.headers[0]}: ` : ''}{row.col1}
                      </span>
                      <span className={`font-mono font-bold text-xs px-2 py-0.5 rounded bg-slate-800 ${
                        row.highlightCol2 ? 'text-amber-300' : 'text-white'
                      }`}>
                        {row.col2}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-0.5">
                      <p className={`text-xs ${
                        row.highlightCol3 ? 'text-amber-300 font-semibold' : 'text-slate-100'
                      }`}>
                        {row.col3}
                      </p>
                      {row.col3 && /^[A-Z][a-zA-Z\s,.'?!-]{4,}$/.test(row.col3.trim()) && (
                        <AudioButton text={row.col3} size="sm" />
                      )}
                    </div>

                    {row.col4 && (
                      <p className="text-[11px] text-slate-400 font-sans border-t border-slate-800/50 pt-1">
                        {row.col4}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Syntax Diagram Layout */}
          {blackboard.syntaxBlocks && (
            <div className="space-y-3 my-2">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center font-mono text-xs sm:text-sm font-bold text-amber-300 tracking-wide">
                {blackboard.syntaxBlocks.formula}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {blackboard.syntaxBlocks.components.map((comp, cIdx) => (
                  <div key={cIdx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      {comp.label}
                    </span>
                    <span className={`font-mono font-bold text-sm block ${
                      comp.color === 'yellow' ? 'text-amber-300' : 'text-white'
                    }`}>
                      {comp.code}
                    </span>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {comp.role}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-mono text-amber-300 uppercase font-bold">Örnek:</span>
                    <span className="text-sm sm:text-base font-bold text-white font-sans">{blackboard.syntaxBlocks.exampleEn}</span>
                  </div>
                  <p className="text-xs text-slate-400">{blackboard.syntaxBlocks.exampleTr}</p>
                </div>
                <AudioButton text={blackboard.syntaxBlocks.exampleEn} size="sm" />
              </div>
            </div>
          )}

          {/* Chalk Note */}
          {blackboard.chalkNote && (
            <div className="mt-4 pt-3 border-t border-slate-800 space-y-1">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <span className="text-amber-400 text-sm mt-0.5">★</span>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-amber-300 font-mono">
                    {blackboard.chalkNote.yellowHighlight}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {blackboard.chalkNote.whiteExplanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Side Tip */}
          {blackboard.sideTip && (
            <div className="mt-2 text-right">
              <span className="text-[11px] font-mono text-amber-300/80 italic">
                💡 {blackboard.sideTip}
              </span>
            </div>
          )}
        </div>
      </section>
    );
  }
  return (
    <section 
      id="section-blackboard"
      aria-label="Öğretmen Siyah Yazı Tahtası"
      className="scroll-mt-24 transition-all"
    >
      {/* Outer Wooden/Metallic Chalkboard Frame */}
      <div className="rounded-3xl p-2.5 sm:p-4 bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900 border-4 sm:border-[6px] border-slate-700/80 shadow-2xl relative overflow-hidden">
        
        {/* Subtle chalkboard texture & matte dark surface */}
        <div className="rounded-2xl bg-[#111720] border border-slate-800/80 p-5 sm:p-7 text-white relative">
          
          {/* Subtle chalk dust radial lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent pointer-events-none rounded-2xl" />

          {/* Top Chalkboard Header */}
          <div className="relative z-10 border-b border-slate-800/80 pb-4 mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md border border-white/20 text-slate-300 font-mono text-[10px] tracking-widest uppercase">
                  TEACHER'S BLACKBOARD
                </span>
                {lessonLevel && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 font-mono">
                    {lessonLevel}
                  </span>
                )}
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight font-sans drop-shadow-xs">
                {blackboard.title}
              </h3>
              {blackboard.subtitle && (
                <p className="text-xs sm:text-sm font-semibold text-amber-300/90 font-mono">
                  {blackboard.subtitle}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 hidden sm:flex">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Sarı: Kritik Yapı</span>
              <span className="w-2 h-2 rounded-full bg-white ml-2" />
              <span>Beyaz: Açıklama / Örnek</span>
            </div>
          </div>

          {/* =========================================================================
              1. TABLE LAYOUT (Grammar, Verbs, WH-, Structure)
              ========================================================================= */}
          {blackboard.rows && blackboard.rows.length > 0 && (
            <div className="relative z-10 space-y-4">
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40">
                <table className="w-full text-left text-xs sm:text-sm border-collapse font-sans">
                  {blackboard.headers && blackboard.headers.length > 0 && (
                    <thead>
                      <tr className="border-b border-slate-700/80 bg-slate-900/80 text-amber-300 font-mono text-xs uppercase tracking-wider">
                        {blackboard.headers.map((header, hIdx) => (
                          <th key={hIdx} className="p-3.5 font-bold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody className="divide-y divide-slate-800/80">
                    {blackboard.rows.map((row, rIdx) => (
                      <tr 
                        key={rIdx} 
                        className="hover:bg-white/[0.03] transition-colors"
                      >
                        {/* Col 1 */}
                        <td className={`p-3.5 font-semibold font-mono ${
                          row.highlightCol1 ? 'text-amber-300' : 'text-slate-100'
                        }`}>
                          {row.col1}
                        </td>

                        {/* Col 2 */}
                        <td className={`p-3.5 font-bold font-mono ${
                          row.highlightCol2 ? 'text-amber-300 text-sm' : 'text-white'
                        }`}>
                          {row.col2}
                        </td>

                        {/* Col 3 (Example or Definition) */}
                        <td className={`p-3.5 ${
                          row.highlightCol3 ? 'text-amber-300 font-semibold' : 'text-slate-200'
                        }`}>
                          <div className="flex items-center justify-between gap-2">
                            <span>{row.col3}</span>
                            {/* Pronunciation audio if looks like an English sentence */}
                            {row.col3 && /^[A-Z][a-zA-Z\s,.'?!-]{4,}$/.test(row.col3.trim()) && (
                              <AudioButton text={row.col3} size="sm" />
                            )}
                          </div>
                        </td>

                        {/* Col 4 (Optional Turkish meaning or note) */}
                        {row.col4 && (
                          <td className={`p-3.5 text-xs ${
                            row.highlightCol4 ? 'text-amber-300 font-bold' : 'text-slate-300'
                          }`}>
                            {row.col4}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Adaptive Stacked Cards (Zero horizontal scroll clipping) */}
              <div className="md:hidden space-y-3">
                {blackboard.rows.map((row, rIdx) => (
                  <div 
                    key={rIdx} 
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 space-y-2"
                  >
                    <div className="flex items-baseline justify-between gap-2 border-b border-slate-800/80 pb-2">
                      <span className={`font-mono font-bold text-xs ${
                        row.highlightCol1 ? 'text-amber-300' : 'text-slate-200'
                      }`}>
                        {blackboard.headers?.[0] ? `${blackboard.headers[0]}: ` : ''}{row.col1}
                      </span>

                      <span className={`font-mono font-bold text-xs px-2 py-0.5 rounded bg-slate-850 ${
                        row.highlightCol2 ? 'text-amber-300' : 'text-white'
                      }`}>
                        {row.col2}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-1">
                      <p className={`text-xs sm:text-sm ${
                        row.highlightCol3 ? 'text-amber-300 font-semibold' : 'text-slate-100'
                      }`}>
                        {row.col3}
                      </p>
                      {row.col3 && /^[A-Z][a-zA-Z\s,.'?!-]{4,}$/.test(row.col3.trim()) && (
                        <AudioButton text={row.col3} size="sm" />
                      )}
                    </div>

                    {row.col4 && (
                      <p className="text-[11px] text-slate-400 font-sans border-t border-slate-800/60 pt-1.5">
                        {row.col4}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              2. SYNTAX DIAGRAM LAYOUT (Cümle Kuruluş Şeması)
              ========================================================================= */}
          {blackboard.syntaxBlocks && (
            <div className="relative z-10 space-y-4 my-2">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center font-mono text-xs sm:text-sm font-bold text-amber-300 tracking-wider">
                {blackboard.syntaxBlocks.formula}
              </div>

              {/* Component Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {blackboard.syntaxBlocks.components.map((comp, cIdx) => (
                  <div 
                    key={cIdx} 
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5"
                  >
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      {comp.label}
                    </span>
                    <span className={`font-mono font-bold text-sm sm:text-base block ${
                      comp.color === 'yellow' ? 'text-amber-300' : 'text-white'
                    }`}>
                      {comp.code}
                    </span>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {comp.role}
                    </p>
                  </div>
                ))}
              </div>

              {/* Model Sentence Application */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-mono text-amber-300 uppercase font-bold">
                      Örnek Cümle:
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white tracking-tight font-sans">
                      {blackboard.syntaxBlocks.exampleEn}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 pl-4 sm:pl-0">
                    {blackboard.syntaxBlocks.exampleTr}
                  </p>
                </div>
                <AudioButton text={blackboard.syntaxBlocks.exampleEn} size="md" />
              </div>
            </div>
          )}

          {/* =========================================================================
              3. CHALK NOTE / ALTIN KURAL (Tahtanın Altındaki Tebeşir Notu)
              ========================================================================= */}
          {blackboard.chalkNote && (
            <div className="relative z-10 mt-6 pt-5 border-t border-slate-800/90 space-y-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xl shrink-0 mt-0.5">✏️</span>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-amber-300 font-mono tracking-tight">
                    {blackboard.chalkNote.yellowHighlight}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {blackboard.chalkNote.whiteExplanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Side Tip or Reminder */}
          {blackboard.sideTip && (
            <div className="relative z-10 mt-3 text-right">
              <span className="inline-block text-[11px] font-mono text-amber-300/80 italic">
                💡 {blackboard.sideTip}
              </span>
            </div>
          )}

        </div>

        {/* Realistic Wooden/Metal Chalk Tray Ledge with Chalk Sticks */}
        <div className="mt-2 pt-2 border-t border-slate-700/60 flex items-center justify-between px-2 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            {/* White chalk stick */}
            <span className="w-8 h-2.5 rounded-xs bg-slate-100 shadow-xs inline-block" title="Beyaz Tebeşir" />
            {/* Yellow chalk stick */}
            <span className="w-8 h-2.5 rounded-xs bg-amber-300 shadow-xs inline-block" title="Sarı Tebeşir" />
            <span className="text-[10px] text-slate-500 hidden sm:inline ml-1">
              Öğretmen Tebeşirliği
            </span>
          </div>

          <span className="text-[10px] text-slate-400">
            LinguAAI Interactive Chalkboard
          </span>
        </div>
      </div>
    </section>
  );
};
