import React from 'react';
import { Instagram, MapPin, Calendar, Heart, ArrowUp } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';
import { soundFx } from '../utils/audioSynth';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playStamp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2E5B33] text-[#FAF7EF] pt-16 pb-12 relative overflow-hidden border-t-4 border-[#141414]">
      {/* Decorative Bamboo Pattern Background Glow */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#8DBD97] via-[#F5333F] to-[#00E5FF]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Summary (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#F5333F] text-white flex items-center justify-center font-display font-black text-xl shadow-lg border-2 border-white">
                🌿
              </div>
              <div>
                <h3 className="font-display font-black text-2xl text-white">
                  De Dag Dat Alles Mag!
                </h3>
                <p className="font-typewriter text-xs text-[#8DBD97]">
                  DDDAM 2026 • Het Verjaardagsfestival
                </p>
              </div>
            </div>

            <p className="font-body text-sm text-[#FAF7EF]/80 font-semibold leading-relaxed max-w-sm">
              Een zonnige jungle-dag én nacht vol opzwepende muziek, comedy, karaoke, silent disco en psytrance bij De Jungle in Zaandam!
            </p>

            <div className="pt-2 flex flex-col gap-2 font-typewriter text-xs text-[#8DBD97]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#F5333F]" />
                <span>Zaterdag 15.08.2026 (13:00 - 02:00)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00E5FF]" />
                <span>De Jungle Zaandam (@dejungle075)</span>
              </div>
            </div>
          </div>

          {/* Quick Nav (3 Cols) */}
          <div className="md:col-span-3 space-y-3 font-semibold text-sm">
            <h4 className="font-display font-black text-base text-[#FBF3D0] uppercase tracking-wider mb-2">
              Navigatie
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#over" className="hover:text-[#F5333F] transition-colors">
                  Wat is DDDAM?
                </a>
              </li>
              <li>
                <a href="#lineup" className="hover:text-[#F5333F] transition-colors">
                  Line-up & Artiesten
                </a>
              </li>
              <li>
                <a href="#activiteiten" className="hover:text-[#F5333F] transition-colors">
                  "Mag!" Activiteiten
                </a>
              </li>
              <li>
                <a href="#programma" className="hover:text-[#F5333F] transition-colors">
                  Timetable Programma
                </a>
              </li>
              <li>
                <a href="#interactief" className="hover:text-[#F5333F] transition-colors">
                  Wat Mag Er Volgens Jou?
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F5333F] transition-colors">
                  Veelgestelde Vragen
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Hosts (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-black text-base text-[#FBF3D0] uppercase tracking-wider mb-2">
              Socials & Organisatie
            </h4>

            <div className="space-y-2 font-typewriter text-xs">
              <a
                href={FESTIVAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white"
              >
                <Instagram className="w-5 h-5 text-[#F5333F]" />
                <div>
                  <p className="font-bold">@dddamfestival</p>
                  <p className="text-[10px] text-[#8DBD97]">Officieel Instagram Kanaal</p>
                </div>
              </a>

              <a
                href={FESTIVAL_INFO.venueInstagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white"
              >
                <MapPin className="w-5 h-5 text-[#00E5FF]" />
                <div>
                  <p className="font-bold">@dejungle075</p>
                  <p className="text-[10px] text-[#8DBD97]">Locatie De Jungle Zaandam</p>
                </div>
              </a>
            </div>

            <div className="pt-2 text-xs font-typewriter text-[#8DBD97]">
              <span>Hosts: </span>
              <strong className="text-white">@merijntamboer</strong> & <strong className="text-white">@myrthedemunnik</strong>
            </div>
          </div>

        </div>

        {/* Copyright & Scroll Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-typewriter text-[#8DBD97]">
          <p>
            © 2026 De Dag Dat Alles Mag Festival • Made with <Heart className="w-3.5 h-3.5 inline text-[#F5333F]" /> in Zaandam.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-[#F5333F] transition-colors p-2 rounded-xl bg-white/5 border border-white/10"
          >
            <span>Terug naar boven</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
