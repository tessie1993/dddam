import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Sparkles, Play, Clock, ArrowDown, PartyPopper } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';
import { soundFx } from '../utils/audioSynth';

export const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const target = new Date(FESTIVAL_INFO.targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOpenModal = () => {
    soundFx.playChime();
    setIsVideoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#FBF3D0] overflow-hidden border-b-4 border-[#2E5B33]">
      {/* Decorative Jungle Background Glows & Floating Collage Items */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#8DBD97]/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F5333F]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Floating Collage Badges (Aardvark Cutout Aesthetic) */}
      <div className="absolute top-20 left-[5%] hidden lg:block animate-float-slow pointer-events-none select-none z-10">
        <div className="bg-[#2E5B33] text-[#FBF3D0] p-3 rounded-2xl rotate-[-8deg] shadow-xl border-2 border-[#141414] font-typewriter text-xs flex items-center gap-2">
          <span className="text-2xl">🪩</span>
          <div>
            <p className="font-bold text-white">Silent Disco</p>
            <p className="text-[10px] text-[#8DBD97]">3 Kanalen!</p>
          </div>
        </div>
      </div>

      <div className="absolute top-48 right-[6%] hidden lg:block animate-float-reverse pointer-events-none select-none z-10">
        <div className="bg-[#F5333F] text-white p-3.5 rounded-2xl rotate-[12deg] shadow-xl border-2 border-[#141414] font-display text-xs flex items-center gap-2.5">
          <span className="text-3xl">🐅</span>
          <div>
            <p className="font-black">Darzid b2b ExoPhoria</p>
            <p className="font-typewriter text-[10px] text-[#FBF3D0]">Night Psytrance!</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-[8%] hidden lg:block animate-float-slow pointer-events-none select-none z-10">
        <div className="bg-[#FAF7EF] text-[#141414] p-3 rounded-2xl rotate-[6deg] shadow-lg border-2 border-[#2E5B33] font-typewriter text-xs flex items-center gap-2">
          <span className="text-2xl">✂️</span>
          <div>
            <p className="font-bold">Cut the Crap</p>
            <p className="text-[10px] text-[#5E9A5C]">Gratis Knipbeurt Ed!</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 right-[10%] hidden lg:block animate-float-reverse pointer-events-none select-none z-10">
        <div className="bg-[#2E5B33] text-white p-3 rounded-2xl rotate-[-10deg] shadow-xl border-2 border-[#141414] font-typewriter text-xs flex items-center gap-2">
          <span className="text-2xl">🏄</span>
          <div>
            <p className="font-bold text-[#FBF3D0]">Surf Desk</p>
            <p className="text-[10px] text-[#8DBD97]">@surfisdesk</p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        
        {/* Typewriter Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-[#2E5B33] text-[#FAF7EF] px-4 py-1.5 rounded-full font-typewriter text-xs sm:text-sm shadow-md border border-[#8DBD97]/50 mb-6 rotate-[-1deg]">
          <Sparkles className="w-4 h-4 text-[#00E5FF] animate-spin" />
          <span>"De dag dat <strong className="text-[#F5333F]">… mag!</strong>"</span>
          <span className="text-[#8DBD97]">| Het Verjaardagsfestival</span>
        </div>

        {/* Giant Live Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-[#141414] tracking-tight leading-[1.05] mb-6">
          DE DAG DAT{' '}
          <span className="inline-block relative px-3 py-1 bg-[#F5333F] text-white rounded-2xl rotate-[-2deg] shadow-xl border-4 border-[#141414] glitch-hover transition-transform hover:scale-105 my-1">
            ALLES
          </span>{' '}
          <span className="inline-block relative text-[#2E5B33] underline decoration-[#F5333F] decoration-wavy decoration-4">
            MAG!
          </span>
        </h1>

        {/* Subtitle / Hosts */}
        <p className="font-body text-lg sm:text-2xl font-bold text-[#2E5B33] max-w-2xl mx-auto mb-8 leading-relaxed">
          Het meest chaotische, feestelijke verjaardagsfestival van Zaandam! Hosted by{' '}
          <span className="bg-[#8DBD97]/50 px-2 py-0.5 rounded-md font-extrabold text-[#141414]">
            @merijntamboer
          </span>{' '}
          &{' '}
          <span className="bg-[#8DBD97]/50 px-2 py-0.5 rounded-md font-extrabold text-[#141414]">
            @myrthedemunnik
          </span>
        </p>

        {/* Date & Venue Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-sm sm:text-base font-bold">
          <div className="flex items-center gap-2 bg-white/90 text-[#141414] px-4 py-2 rounded-xl border-2 border-[#2E5B33] shadow-md">
            <Calendar className="w-5 h-5 text-[#F5333F]" />
            <span>Zaterdag 15.08.2026</span>
          </div>
          <div className="flex items-center gap-2 bg-white/90 text-[#141414] px-4 py-2 rounded-xl border-2 border-[#2E5B33] shadow-md">
            <MapPin className="w-5 h-5 text-[#2E5B33]" />
            <span>De Jungle, Zaandam</span>
          </div>
        </div>

        {/* Live Countdown Timer Block */}
        <div className="bg-[#2E5B33] text-[#FAF7EF] p-5 sm:p-7 rounded-3xl border-4 border-[#141414] shadow-2xl max-w-3xl mx-auto mb-10 transform transition-transform hover:scale-[1.01]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-[#00E5FF] animate-pulse" />
            <span className="font-typewriter text-xs sm:text-sm text-[#8DBD97] uppercase tracking-widest font-bold">
              Countdown Tot De Poorten Openen (15 Aug '26 13:00)
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 font-display">
            <div className="bg-[#141414] p-3 sm:p-4 rounded-2xl border-2 border-[#8DBD97]">
              <span className="block text-2xl sm:text-4xl font-black text-[#FBF3D0]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="font-typewriter text-[10px] sm:text-xs text-[#8DBD97] uppercase">Dagen</span>
            </div>
            <div className="bg-[#141414] p-3 sm:p-4 rounded-2xl border-2 border-[#8DBD97]">
              <span className="block text-2xl sm:text-4xl font-black text-[#FBF3D0]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="font-typewriter text-[10px] sm:text-xs text-[#8DBD97] uppercase">Uren</span>
            </div>
            <div className="bg-[#141414] p-3 sm:p-4 rounded-2xl border-2 border-[#8DBD97]">
              <span className="block text-2xl sm:text-4xl font-black text-[#FBF3D0]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="font-typewriter text-[10px] sm:text-xs text-[#8DBD97] uppercase">Minuten</span>
            </div>
            <div className="bg-[#141414] p-3 sm:p-4 rounded-2xl border-2 border-[#8DBD97]">
              <span className="block text-2xl sm:text-4xl font-black text-[#F5333F]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="font-typewriter text-[10px] sm:text-xs text-[#F5333F] uppercase">Seconden</span>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#aanmelden"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-display font-black text-lg text-white bg-[#F5333F] hover:bg-[#d8222d] shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 border-2 border-[#141414] flex items-center justify-center gap-2 group min-h-[48px]"
          >
            <span>Meld Je Gratis Aan!</span>
            <PartyPopper className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>

          <button
            onClick={handleOpenModal}
            className="w-full sm:w-auto px-6 py-4 rounded-full font-display font-black text-base text-[#141414] bg-white hover:bg-[#FAF7EF] shadow-md hover:shadow-lg transition-all duration-200 border-2 border-[#2E5B33] flex items-center justify-center gap-2.5 min-h-[48px]"
          >
            <div className="w-7 h-7 rounded-full bg-[#2E5B33] text-white flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
            <span>Bekijk Festival Vibe 🎬</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center justify-center text-[#2E5B33] opacity-80 hover:opacity-100 transition-opacity">
          <a href="#over" className="flex flex-col items-center gap-1 font-typewriter text-xs">
            <span>Scroll voor het programma</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#F5333F]" />
          </a>
        </div>
      </div>

      {/* Promo & Vibe Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-stamp">
          <div className="bg-[#2E5B33] text-[#FAF7EF] border-4 border-[#141414] rounded-3xl max-w-2xl w-full p-6 relative shadow-2xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white hover:text-[#F5333F] bg-black/40 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors"
              aria-label="Sluit video"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌴</span>
              <h3 className="font-display font-black text-2xl text-[#FBF3D0]">
                De Dag Dat Alles Mag Vibe Trailer
              </h3>
            </div>

            <p className="font-body text-sm text-[#8DBD97] mb-4">
              Impulsen uit De Jungle Zaandam · Muziek, Silent Disco, Comedy & Psytrance Night!
            </p>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border-2 border-[#8DBD97] mb-4 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
                alt="DDDAM Festival atmosphere"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#F5333F] text-white flex items-center justify-center shadow-2xl mb-3 animate-pulse">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <p className="font-display font-black text-xl text-white mb-1">
                  15 AUGUSTUS 2026
                </p>
                <p className="font-typewriter text-xs text-[#00E5FF]">
                  De Jungle Zaandam · Tropical Day → Psytrance Night
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-typewriter text-[#8DBD97] pt-2 border-t border-white/10">
              <span>Hosted by @merijntamboer & @myrthedemunnik</span>
              <button
                onClick={() => {
                  soundFx.playPsytranceSnippet();
                }}
                className="px-3 py-1.5 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold transition-colors flex items-center gap-1.5"
              >
                <span>🔊 Beluister Psytrance Beat Preview</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
