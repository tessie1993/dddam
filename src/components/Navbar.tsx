import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Volume2, VolumeX, Calendar, MapPin } from 'lucide-react';
import { soundFx } from '../utils/audioSynth';

interface NavbarProps {
  onOpenAudioModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudioModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Wat is DDDAM?', href: '#over' },
    { name: 'Line-up', href: '#lineup' },
    { name: 'Activiteiten', href: '#activiteiten' },
    { name: 'Programma', href: '#programma' },
    { name: 'Wat Mag Er?', href: '#interactief' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleSoundToggle = () => {
    if (!audioEnabled) {
      soundFx.playChime();
    }
    setAudioEnabled(!audioEnabled);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      if (audioEnabled) soundFx.playStamp();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2E5B33]/95 backdrop-blur-md text-white shadow-xl rounded-full px-5 py-2.5 border border-[#8DBD97]/30'
            : 'bg-[#8DBD97]/80 backdrop-blur-sm text-[#141414] rounded-2xl px-6 py-3 border border-[#2E5B33]/20'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            onClick={(e) => scrollToSection(e, '#')}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-black text-lg transition-transform duration-300 group-hover:scale-110 ${
                isScrolled ? 'bg-[#F5333F] text-white shadow-md' : 'bg-[#2E5B33] text-[#FBF3D0]'
              }`}
            >
              🌿
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-tight leading-none group-hover:text-[#F5333F] transition-colors">
                DDDAM <span className="text-[#F5333F]">'26</span>
              </span>
              <span
                className={`font-typewriter text-[10px] tracking-widest uppercase font-semibold ${
                  isScrolled ? 'text-[#8DBD97]' : 'text-[#2E5B33]'
                }`}
              >
                15.08 · Zaandam
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`transition-colors duration-200 hover:text-[#F5333F] py-1 relative group ${
                  isScrolled ? 'text-[#FAF7EF]' : 'text-[#141414]'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F5333F] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleSoundToggle}
              title={audioEnabled ? 'Geluidseffecten ingeschakeld' : 'Geluidseffecten uitgeschakeld'}
              className={`p-2 rounded-full transition-all duration-200 focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center ${
                isScrolled
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-[#2E5B33]/10 hover:bg-[#2E5B33]/20 text-[#2E5B33]'
              }`}
            >
              {audioEnabled ? <Volume2 className="w-4 h-4 text-[#00E5FF]" /> : <VolumeX className="w-4 h-4 opacity-60" />}
            </button>

            {/* CTA Button */}
            <a
              href="#aanmelden"
              onClick={(e) => scrollToSection(e, '#aanmelden')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full font-display font-black text-sm text-white bg-[#F5333F] hover:bg-[#d8222d] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 min-h-[44px]"
            >
              <Sparkles className="w-4 h-4 mr-1.5 animate-pulse" />
              Meld Je Aan!
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-[#141414] focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Open navigatiemenu"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-[#141414]'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-[#141414]'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-7xl mx-auto bg-[#2E5B33] text-[#FAF7EF] rounded-2xl p-6 shadow-2xl border border-[#8DBD97]/40 animate-stamp">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#F5333F]" />
              <span className="font-typewriter text-xs text-[#8DBD97]">15.08.2026</span>
              <span className="text-xs text-white/40">|</span>
              <MapPin className="w-4 h-4 text-[#00E5FF]" />
              <span className="font-typewriter text-xs text-[#8DBD97]">De Jungle, Zaandam</span>
            </div>
          </div>
          <nav className="flex flex-col gap-3 mb-6 font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg py-2 border-b border-white/5 hover:text-[#F5333F] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#8DBD97] text-sm">→</span>
              </a>
            ))}
          </nav>
          <a
            href="#aanmelden"
            onClick={(e) => scrollToSection(e, '#aanmelden')}
            className="w-full flex items-center justify-center py-3.5 rounded-xl font-display font-black text-white bg-[#F5333F] hover:bg-[#d8222d] shadow-lg text-center text-base"
          >
            🔥 Meld Je Nu Gratis Aan!
          </a>
        </div>
      )}
    </header>
  );
};
