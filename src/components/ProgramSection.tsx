import React, { useState } from 'react';
import { Sparkles, Sun, Moon, Clock, MapPin, Flame } from 'lucide-react';
import { SCHEDULE } from '../data/festivalData';
import { soundFx } from '../utils/audioSynth';

export const ProgramSection: React.FC = () => {
  const [filterMode, setFilterMode] = useState<'all' | 'day' | 'night'>('all');

  const filteredSchedule = SCHEDULE.filter((item) => {
    if (filterMode === 'day') return !item.isNight;
    if (filterMode === 'night') return item.isNight;
    return true;
  });

  const handleTabChange = (mode: 'all' | 'day' | 'night') => {
    soundFx.playStamp();
    setFilterMode(mode);
  };

  return (
    <section id="programma" className="py-20 md:py-28 bg-[#FBF3D0] relative border-b-4 border-[#2E5B33]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2E5B33] text-[#FAF7EF] px-4 py-1.5 rounded-full font-typewriter text-xs sm:text-sm mb-4 shadow-md rotate-[-1deg]">
            <Clock className="w-4 h-4 text-[#00E5FF]" />
            <span>Timetable & Blokkenschema</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            PROGRAMMA: <span className="text-[#2E5B33] underline decoration-[#F5333F]">DAG & NACHT</span>
          </h2>

          <p className="font-body text-base sm:text-lg font-bold text-[#2E5B33]">
            Van vrolijk daglicht onder de bamboe tot het dak eraf in de nacht!
          </p>
        </div>

        {/* Filter Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#2E5B33] p-1.5 rounded-2xl border-3 border-[#141414] shadow-xl inline-flex gap-2">
            <button
              onClick={() => handleTabChange('all')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-display font-black text-xs sm:text-sm transition-all duration-200 min-h-[44px] ${
                filterMode === 'all'
                  ? 'bg-[#FBF3D0] text-[#141414] shadow'
                  : 'text-[#FAF7EF] hover:bg-white/10'
              }`}
            >
              Volledige Dag & Nacht
            </button>
            <button
              onClick={() => handleTabChange('day')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-display font-black text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 min-h-[44px] ${
                filterMode === 'day'
                  ? 'bg-[#8DBD97] text-[#141414] shadow'
                  : 'text-[#FAF7EF] hover:bg-white/10'
              }`}
            >
              <Sun className="w-4 h-4 text-[#F5333F]" />
              Dagprogramma
            </button>
            <button
              onClick={() => handleTabChange('night')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-display font-black text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 min-h-[44px] ${
                filterMode === 'night'
                  ? 'bg-[#7C3AED] text-white shadow'
                  : 'text-[#FAF7EF] hover:bg-white/10'
              }`}
            >
              <Moon className="w-4 h-4 text-[#4CC9F0]" />
              🚨 DAK ERAF Nacht
            </button>
          </div>
        </div>

        {/* Timeline Items List */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-[2.25rem] sm:before:left-[8.5rem] before:w-1 before:bg-[#2E5B33]/20">
          {filteredSchedule.map((item) => (
            <div
              key={item.id}
              className={`relative pl-14 sm:pl-40 pr-4 sm:pr-8 py-5 rounded-3xl border-3 transition-all duration-300 shadow-md hover:shadow-xl ${
                item.isNight
                  ? 'bg-[#1D0E2B] text-white border-[#7C3AED]'
                  : item.highlight
                  ? 'bg-[#2E5B33] text-[#FAF7EF] border-[#141414]'
                  : 'bg-[#FAF7EF] text-[#141414] border-[#141414]'
              }`}
            >
              {/* Time Circle Marker */}
              <div
                className={`absolute left-2 sm:left-6 top-6 w-12 sm:w-28 font-display font-black text-xs sm:text-sm px-2 py-1.5 rounded-xl text-center border-2 shadow ${
                  item.isNight
                    ? 'bg-[#7C3AED] text-white border-[#4CC9F0]'
                    : item.highlight
                    ? 'bg-[#F5333F] text-white border-[#141414]'
                    : 'bg-[#2E5B33] text-white border-[#141414]'
                }`}
              >
                {item.time}
              </div>

              {/* Event Content */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`font-typewriter text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        item.isNight
                          ? 'bg-[#7C3AED]/40 text-[#4CC9F0] border-[#4CC9F0]/30'
                          : 'bg-[#2E5B33]/10 text-[#2E5B33] border-[#2E5B33]/20'
                      }`}
                    >
                      {item.isNight ? '🚨 DAK ERAF' : '☀️ DAGPROGRAMMA'}
                    </span>
                    <span className="text-xs font-typewriter flex items-center gap-1 opacity-80">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl tracking-tight flex items-center gap-2">
                    <span>{item.title}</span>
                    {item.highlight && <Flame className="w-5 h-5 text-[#F5333F] animate-pulse" />}
                  </h3>

                  <p className="font-body text-sm font-bold opacity-90 mt-1">
                    {item.subtitle} — {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
