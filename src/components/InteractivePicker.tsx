import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, ThumbsUp, PlusCircle, CheckCircle, MessageSquare } from 'lucide-react';
import { INITIAL_SUGGESTIONS } from '../data/festivalData';
import { Suggestion } from '../types';
import { soundFx } from '../utils/audioSynth';

export const InteractivePicker: React.FC = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>(INITIAL_SUGGESTIONS);
  const [votedIds, setVotedIds] = useState<Record<string, boolean>>({});
  const [newRuleText, setNewRuleText] = useState('');
  const [newAuthorText, setNewAuthorText] = useState('');
  const [submittedCustom, setSubmittedCustom] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F5333F', '#8DBD97', '#FBF3D0', '#00E5FF', '#7C3AED'],
    });
  };

  const handleVote = (id: string) => {
    if (votedIds[id]) return;

    soundFx.playChime();
    triggerConfetti();

    setVotedIds((prev) => ({ ...prev, [id]: true }));
    setSuggestions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, votes: item.votes + 1 } : item))
    );
  };

  const handleSubmitCustomRule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRuleText.trim()) return;

    soundFx.playChime();
    soundFx.playStamp();
    triggerConfetti();

    const newSuggestion: Suggestion = {
      id: Date.now().toString(),
      text: newRuleText.trim(),
      author: newAuthorText.trim() || 'Jungle Feestganger',
      votes: 1,
      approved: true,
      isCustom: true,
    };

    setSuggestions([newSuggestion, ...suggestions]);
    setVotedIds((prev) => ({ ...prev, [newSuggestion.id]: true }));
    setNewRuleText('');
    setNewAuthorText('');
    setSubmittedCustom(true);

    setTimeout(() => setSubmittedCustom(false), 4000);
  };

  return (
    <section id="interactief" className="py-20 md:py-28 bg-[#8DBD97] relative border-b-4 border-[#2E5B33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2E5B33] text-[#FBF3D0] px-4 py-1.5 rounded-full font-typewriter text-xs sm:text-sm mb-4 shadow-md rotate-1">
            <Sparkles className="w-4 h-4 text-[#F5333F]" />
            <span>Jouw Ideeën & Regels</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            WAT MAG ER VOLGENS <span className="text-[#F5333F] underline decoration-[#2E5B33]">JOU?</span>
          </h2>

          <p className="font-body text-base sm:text-lg font-bold text-[#2E5B33]">
            Breng je stem uit of verzin je eigen gekke regel! Klik op een kaart voor confetti.
          </p>
        </div>

        {/* 2-Column Grid: Left Ideas Wall, Right Add Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Suggestions List (8 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {suggestions.map((item) => {
              const hasVoted = votedIds[item.id];

              return (
                <div
                  key={item.id}
                  onClick={() => handleVote(item.id)}
                  className={`p-5 sm:p-6 rounded-3xl border-3 border-[#141414] shadow-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer flex items-center justify-between gap-4 ${
                    item.isCustom
                      ? 'bg-[#FBF3D0] border-[#F5333F]'
                      : 'bg-[#FAF7EF]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl mt-0.5">💬</span>
                    <div>
                      <h3 className="font-display font-black text-lg sm:text-xl text-[#141414] leading-snug">
                        "{item.text}" <span className="text-[#F5333F]">? MAG!</span>
                      </h3>
                      <p className="font-typewriter text-xs text-[#2E5B33] font-bold mt-1">
                        Ingezonden door: {item.author}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVote(item.id);
                    }}
                    className={`px-4 py-2.5 rounded-2xl font-display font-black text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 border-2 border-[#141414] shadow min-h-[44px] shrink-0 ${
                      hasVoted
                        ? 'bg-[#2E5B33] text-white'
                        : 'bg-[#F5333F] text-white hover:bg-[#d8222d]'
                    }`}
                  >
                    <ThumbsUp className={`w-4 h-4 ${hasVoted ? 'fill-current' : ''}`} />
                    <span>{item.votes} Stemmen</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Submission Form (5 Cols) */}
          <div className="lg:col-span-5 bg-[#2E5B33] text-[#FAF7EF] p-7 sm:p-9 rounded-3xl border-4 border-[#141414] shadow-2xl relative">
            <div className="flex items-center gap-2 mb-4">
              <PlusCircle className="w-6 h-6 text-[#00E5FF]" />
              <h3 className="font-display font-black text-2xl text-white">
                Verzin Een Regel!
              </h3>
            </div>

            <p className="font-body text-sm text-[#8DBD97] mb-6 font-semibold">
              Wat moet er volgens jou zéker mogen op De Dag Dat Alles Mag 2026?
            </p>

            <form onSubmit={handleSubmitCustomRule} className="space-y-4">
              <div>
                <label className="block font-typewriter text-xs text-[#8DBD97] font-bold mb-1">
                  Jouw Regel / Idee:
                </label>
                <input
                  type="text"
                  required
                  placeholder="bijv. Pannenkoeken met discobollen om 21:00..."
                  value={newRuleText}
                  onChange={(e) => setNewRuleText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white text-[#141414] font-body font-bold border-2 border-[#141414] focus:outline-none focus:ring-2 focus:ring-[#F5333F]"
                />
              </div>

              <div>
                <label className="block font-typewriter text-xs text-[#8DBD97] font-bold mb-1">
                  Jouw Naam / Handle:
                </label>
                <input
                  type="text"
                  placeholder="bijv. Sanne / @sanne.jungle"
                  value={newAuthorText}
                  onChange={(e) => setNewAuthorText(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white text-[#141414] font-body font-bold border-2 border-[#141414] focus:outline-none focus:ring-2 focus:ring-[#F5333F]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-display font-black text-base text-white bg-[#F5333F] hover:bg-[#d8222d] shadow-lg transition-all duration-200 border-2 border-[#141414] flex items-center justify-center gap-2 min-h-[48px]"
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span>Plaats Regel On Muren! 🎉</span>
              </button>

              {submittedCustom && (
                <div className="p-3 bg-[#FAF7EF] text-[#2E5B33] rounded-xl font-typewriter text-xs font-bold border border-[#00E5FF] flex items-center gap-2 animate-stamp">
                  <CheckCircle className="w-4 h-4 text-[#F5333F]" />
                  <span>Jouw regel staat live op de muur! 🎉</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
