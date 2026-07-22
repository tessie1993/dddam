import React, { useState } from 'react';
import { Sparkles, CheckCircle2, HeartHandshake } from 'lucide-react';
import { ACTIVITIES } from '../data/festivalData';
import { soundFx } from '../utils/audioSynth';

export const ActivitiesBento: React.FC = () => {
  const [stampedIds, setStampedIds] = useState<Record<string, boolean>>({});

  const handleStampClick = (id: string) => {
    soundFx.playStamp();
    setStampedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="activiteiten" className="py-20 md:py-28 bg-[#8DBD97] relative overflow-hidden border-b-4 border-[#2E5B33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2E5B33] text-[#FBF3D0] px-4 py-1.5 rounded-full font-typewriter text-xs sm:text-sm mb-4 shadow-md rotate-1">
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <span>Onbeperkt Plezier & Doe-Dingen</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            ACTIVITEITEN: <span className="text-[#F5333F] underline decoration-[#2E5B33]">MAG!</span>
          </h2>

          <p className="font-body text-base sm:text-lg font-bold text-[#2E5B33]">
            Klik of tik op een kaart om het officiële stempel op te drukken!
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {ACTIVITIES.map((act, index) => {
            const isLarge = index === 0 || index === 3;
            const isStamped = stampedIds[act.id];

            return (
              <div
                key={act.id}
                onClick={() => handleStampClick(act.id)}
                className={`bg-[#FAF7EF] rounded-3xl p-6 sm:p-8 border-4 border-[#141414] shadow-xl relative overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Stamp Overlay Animation */}
                {isStamped && (
                  <div className="absolute top-4 right-4 z-20 animate-stamp pointer-events-none">
                    <div className="bg-[#F5333F] text-white font-display font-black text-xs sm:text-sm px-4 py-1.5 rounded-xl border-2 border-white shadow-2xl rotate-[-12deg] tracking-widest flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>MAG! ✅</span>
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#8DBD97]/30 border-2 border-[#141414] flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform">
                      {act.icon}
                    </div>

                    <div className="flex items-center gap-2">
                      {act.partner && (
                        <span className="bg-[#2E5B33] text-white font-typewriter text-[11px] font-bold px-3 py-1 rounded-full border border-[#141414] flex items-center gap-1">
                          <HeartHandshake className="w-3 h-3 text-[#00E5FF]" />
                          {act.partner}
                        </span>
                      )}
                      <span className="bg-[#FAF7EF] text-[#2E5B33] font-typewriter text-xs font-bold px-3 py-1 rounded-full border border-[#2E5B33]">
                        #{act.tag}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#141414] mb-2 group-hover:text-[#F5333F] transition-colors">
                    {act.formula}
                  </h3>

                  <p className="font-body text-base text-[#141414]/90 font-semibold leading-relaxed mb-6">
                    {act.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#141414]/10 flex items-center justify-between text-xs font-typewriter">
                  <span className="text-[#2E5B33] font-bold">
                    {isStamped ? '✓ Goedgekeurd stempel actief' : 'Tik voor goedkeuring!'}
                  </span>
                  <span className="font-display font-bold text-[#F5333F] group-hover:translate-x-1 transition-transform">
                    {isStamped ? '✅ GOEDGEKEURD' : 'STEMPEL DAN! →'}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
