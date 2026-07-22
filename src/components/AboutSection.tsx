import React from 'react';
import { Sparkles, Heart, Users, MapPin, Zap } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';

export const AboutSection: React.FC = () => {
  return (
    <section id="over" className="py-20 md:py-28 bg-[#8DBD97] relative overflow-hidden">
      {/* Decorative Jungle Leaves & Background Shapes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2E5B33] text-[#FBF3D0] px-4 py-1.5 rounded-full font-typewriter text-xs sm:text-sm mb-4 shadow-md rotate-1">
            <Sparkles className="w-4 h-4 text-[#F5333F]" />
            <span>Het Verhaal Achter DDDAM</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            WAT IS <span className="text-[#2E5B33] underline decoration-[#F5333F]">DDDAM?</span>
          </h2>

          <p className="font-body text-lg sm:text-xl font-bold text-[#2E5B33] leading-relaxed">
            De Dag Dat Alles Mag (DDDAM) is hét verjaardagsfestival van Zaandam! Wat begon als een intiem verjaardagsfeestje is uitgegroeid tot een legendarische jungle-dag én -nacht vol verrassingen.
          </p>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story Card (Cutout Collage Style) */}
          <div className="lg:col-span-7 bg-[#FAF7EF] p-7 sm:p-10 rounded-3xl border-4 border-[#141414] shadow-2xl relative flex flex-col justify-between">
            <div className="absolute top-4 right-4 bg-[#F5333F] text-white font-typewriter text-xs font-bold px-3 py-1 rounded-full border border-[#141414] rotate-3 shadow-md">
              15.08.2026 Zaandam
            </div>

            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#141414] mb-4 leading-tight">
                "Geen regels, wel oneindig veel gezelligheid!"
              </h3>

              <div className="space-y-4 font-body text-base sm:text-lg text-[#141414]/90 leading-relaxed font-semibold">
                <p>
                  Op <strong className="text-[#2E5B33]">De Dag Dat Alles Mag</strong> vieren we het leven én de verjaardagen van onze hosts in de fantastische bamboejungle van <strong className="text-[#2E5B33]">De Jungle Zaandam</strong>.
                </p>
                <p>
                  Of je nu wilt meezingen op de Karaoke stage, je surfbalans wilt testen op het board van <strong className="text-[#2E5B33]">@surfisdesk</strong>, een gratis knipbeurt wilt scoren bij <strong className="text-[#2E5B33]">Ed (Cut the Crap)</strong>, of tot 02:00 wilt rammen op de psytrance van <strong className="text-[#F5333F]">Darzid b2b ExoPhoria</strong> — alles is goed, zolang je maar geniet!
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-[#141414]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#F5333F]" />
                <span className="font-typewriter text-sm text-[#2E5B33] font-bold">
                  De Jungle, Zaandam (@dejungle075)
                </span>
              </div>
              <a
                href={FESTIVAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-display font-black text-xs text-white bg-[#2E5B33] hover:bg-[#1f3f23] px-4 py-2 rounded-xl transition-colors shadow"
              >
                <span>Volg op Instagram</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Hosts Cards Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Host 1: Merijn */}
            <div className="bg-[#2E5B33] text-[#FAF7EF] p-6 rounded-3xl border-4 border-[#141414] shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#8DBD97] text-2xl flex items-center justify-center border-2 border-[#141414] shadow-md font-bold">
                  🎉
                </div>
                <div>
                  <span className="font-typewriter text-xs text-[#00E5FF] font-bold block">
                    {FESTIVAL_INFO.hosts[0].role}
                  </span>
                  <h4 className="font-display font-black text-xl text-white">
                    {FESTIVAL_INFO.hosts[0].name}
                  </h4>
                  <a
                    href={`https://instagram.com/${FESTIVAL_INFO.hosts[0].handle.replace('@', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-typewriter text-xs text-[#8DBD97] hover:text-[#F5333F] transition-colors"
                  >
                    {FESTIVAL_INFO.hosts[0].handle}
                  </a>
                </div>
              </div>
              <p className="font-body text-sm text-[#FBF3D0] mt-3 font-semibold">
                "Het idee ontstond toen mijn verjaardagsfeest uit z'n voegen barstte. Nu bouwen we elk jaar 't leukste feestje!"
              </p>
            </div>

            {/* Host 2: Myrthe */}
            <div className="bg-[#F5333F] text-white p-6 rounded-3xl border-4 border-[#141414] shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white text-[#F5333F] text-2xl flex items-center justify-center border-2 border-[#141414] shadow-md font-bold">
                  🌿
                </div>
                <div>
                  <span className="font-typewriter text-xs text-[#FBF3D0] font-bold block">
                    {FESTIVAL_INFO.hosts[1].role}
                  </span>
                  <h4 className="font-display font-black text-xl text-white">
                    {FESTIVAL_INFO.hosts[1].name}
                  </h4>
                  <a
                    href={`https://instagram.com/${FESTIVAL_INFO.hosts[1].handle.replace('@', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-typewriter text-xs text-[#FBF3D0]/80 hover:text-white transition-colors"
                  >
                    {FESTIVAL_INFO.hosts[1].handle}
                  </a>
                </div>
              </div>
              <p className="font-body text-sm text-[#FAF7EF] mt-3 font-semibold">
                "Een dag waarop niemand oordeelt en iedereen samen proost. Trek je gekste outfit aan!"
              </p>
            </div>

          </div>
        </div>

        {/* 4 Stat Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-[#2E5B33] text-white p-5 rounded-2xl border-2 border-[#141414] shadow-lg text-center">
            <div className="text-3xl mb-1">🌴</div>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#FBF3D0]">
              13:00 - 02:00
            </div>
            <div className="font-typewriter text-xs text-[#8DBD97] uppercase">Dag → Nacht Arc</div>
          </div>

          <div className="bg-[#FAF7EF] text-[#141414] p-5 rounded-2xl border-2 border-[#141414] shadow-lg text-center">
            <div className="text-3xl mb-1">🎶</div>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#2E5B33]">
              12+ Acts
            </div>
            <div className="font-typewriter text-xs text-[#5E9A5C] uppercase">House, Rave & Psytrance</div>
          </div>

          <div className="bg-[#FAF7EF] text-[#141414] p-5 rounded-2xl border-2 border-[#141414] shadow-lg text-center">
            <div className="text-3xl mb-1">🎯</div>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#F5333F]">
              7+ Activiteiten
            </div>
            <div className="font-typewriter text-xs text-[#141414]/70 uppercase">Karaoke, Surf & Games</div>
          </div>

          <div className="bg-[#2E5B33] text-white p-5 rounded-2xl border-2 border-[#141414] shadow-lg text-center">
            <div className="text-3xl mb-1">🎟️</div>
            <div className="font-display font-black text-2xl sm:text-3xl text-[#00E5FF]">
              100% Gratis
            </div>
            <div className="font-typewriter text-xs text-[#8DBD97] uppercase">Aanmelden Verplicht</div>
          </div>

        </div>

      </div>
    </section>
  );
};
