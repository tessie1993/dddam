import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/festivalData';
import { soundFx } from '../utils/audioSynth';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');

  const toggleFaq = (id: string) => {
    soundFx.playStamp();
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FBF3D0] relative border-b-4 border-[#2E5B33]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#2E5B33] text-[#FAF7EF] px-4 py-1.5 rounded-full font-typewriter text-xs sm:text-sm mb-4 shadow-md rotate-[-1deg]">
            <HelpCircle className="w-4 h-4 text-[#00E5FF]" />
            <span>Alles Wat Je Moet Weten</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            VEELGESTELDE <span className="text-[#F5333F] underline decoration-[#2E5B33]">VRAGEN</span>
          </h2>

          <p className="font-body text-base sm:text-lg font-bold text-[#2E5B33]">
            Heb je vragen over locatie, tickets, bereikbaarheid of de regels? Wij hebben de antwoorden!
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-[#FAF7EF] rounded-2xl border-3 border-[#141414] shadow-md overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#F5333F] min-h-[56px]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-black text-lg sm:text-xl text-[#141414]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#2E5B33] text-white flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#F5333F]' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-body text-base font-semibold text-[#141414]/90 leading-relaxed border-t border-[#141414]/10 animate-stamp">
                    <p>{faq.answer}</p>
                    <div className="mt-3 inline-block bg-[#8DBD97]/30 text-[#2E5B33] font-typewriter text-xs font-bold px-3 py-1 rounded-full border border-[#2E5B33]/20">
                      Categorie: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
