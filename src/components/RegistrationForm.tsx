import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Ticket, CheckCircle2, QrCode, Share2, Printer, PartyPopper } from 'lucide-react';
import { Registration } from '../types';
import { soundFx } from '../utils/audioSynth';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    bringingItem: '',
  });

  const [activeTicket, setActiveTicket] = useState<Registration | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user already registered previously in localStorage
    const saved = localStorage.getItem('dddam_registration_2026');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setActiveTicket(parsed);
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    soundFx.playChime();
    soundFx.playStamp();

    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#F5333F', '#8DBD97', '#00E5FF', '#FBF3D0', '#7C3AED'],
    });

    const ticketCode = `DDDAM-2026-JUNGLE-${Math.floor(1000 + Math.random() * 9000)}`;
    const registration: Registration = {
      id: Date.now().toString(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      guests: parseInt(formData.guests, 10),
      bringingItem: formData.bringingItem.trim() || 'Heel veel goeie vibes! 🌴',
      registeredAt: new Date().toLocaleDateString('nl-NL'),
      ticketCode,
    };

    localStorage.setItem('dddam_registration_2026', JSON.stringify(registration));
    setActiveTicket(registration);
    setShowModal(true);
  };

  return (
    <section id="aanmelden" className="py-20 md:py-28 bg-[#8DBD97] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Registration Card Container */}
        <div className="bg-[#2E5B33] text-[#FAF7EF] rounded-3xl p-8 sm:p-12 border-4 border-[#141414] shadow-2xl relative animate-border-beam">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 bg-[#F5333F] text-white px-4 py-1.5 rounded-full font-typewriter text-xs sm:text-sm mb-4 shadow-md rotate-[-2deg]">
              <Sparkles className="w-4 h-4 text-[#FBF3D0]" />
              <span>Gratis Toegang • Beperkt Aantal Plekken</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
              MELD JE <span className="text-[#00E5FF] underline decoration-[#F5333F]">GRATIS AAN!</span>
            </h2>

            <p className="font-body text-base sm:text-lg text-[#8DBD97] font-semibold">
              Verzeker jezelf van een plekje bij De Dag Dat Alles Mag Festival 2026 op 15 Augustus in De Jungle Zaandam.
            </p>
          </div>

          {activeTicket ? (
            <div className="bg-[#FAF7EF] text-[#141414] p-6 sm:p-8 rounded-2xl border-3 border-[#141414] text-center shadow-xl">
              <div className="w-16 h-16 rounded-full bg-[#8DBD97] text-white flex items-center justify-center mx-auto mb-4 text-3xl shadow">
                🎟️
              </div>
              <h3 className="font-display font-black text-2xl text-[#2E5B33] mb-1">
                Je Bent Al Aangemeld, {activeTicket.name}!
              </h3>
              <p className="font-typewriter text-xs text-[#F5333F] font-bold mb-4">
                Ticketcode: {activeTicket.ticketCode}
              </p>
              <p className="font-body text-sm font-bold text-[#141414]/80 mb-6">
                Zaterdag 15.08.2026 • De Jungle Zaandam • {activeTicket.guests} personen
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-6 py-3 rounded-xl font-display font-black text-sm text-white bg-[#F5333F] hover:bg-[#d8222d] shadow transition-colors flex items-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Bekijk Mijn Digital Ticket</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
              <div>
                <label className="block font-typewriter text-xs text-[#8DBD97] font-bold mb-1.5 uppercase">
                  Volledige Naam *
                </label>
                <input
                  type="text"
                  required
                  placeholder="bijv. Merijn Tamboer"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white text-[#141414] font-body font-bold border-2 border-[#141414] focus:outline-none focus:ring-2 focus:ring-[#F5333F]"
                />
              </div>

              <div>
                <label className="block font-typewriter text-xs text-[#8DBD97] font-bold mb-1.5 uppercase">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  required
                  placeholder="bijv. merijn@dddam.nl"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white text-[#141414] font-body font-bold border-2 border-[#141414] focus:outline-none focus:ring-2 focus:ring-[#F5333F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-typewriter text-xs text-[#8DBD97] font-bold mb-1.5 uppercase">
                    Aantal Personen
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white text-[#141414] font-body font-bold border-2 border-[#141414] focus:outline-none focus:ring-2 focus:ring-[#F5333F]"
                  >
                    <option value="1">1 Persoon (Alleen ik)</option>
                    <option value="2">2 Personen (+1 guest)</option>
                    <option value="3">3 Personen (+2 guests)</option>
                    <option value="4">4+ Personen (Feestgroep)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-typewriter text-xs text-[#8DBD97] font-bold mb-1.5 uppercase">
                    Wat Neem Je Mee?
                  </label>
                  <input
                    type="text"
                    placeholder="bijv. Gekke hoed, Goede zin..."
                    value={formData.bringingItem}
                    onChange={(e) => setFormData({ ...formData, bringingItem: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white text-[#141414] font-body font-bold border-2 border-[#141414] focus:outline-none focus:ring-2 focus:ring-[#F5333F]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-display font-black text-lg text-white bg-[#F5333F] hover:bg-[#d8222d] shadow-2xl transition-all duration-200 border-2 border-[#141414] flex items-center justify-center gap-2 transform hover:scale-[1.02] min-h-[52px]"
              >
                <PartyPopper className="w-5 h-5 text-white animate-bounce" />
                <span>Claim Mijn Gratis Ticket Badge! 🔥</span>
              </button>
            </form>
          )}

        </div>

      </div>

      {/* Digital Ticket Modal */}
      {showModal && activeTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-stamp">
          <div className="bg-[#FAF7EF] text-[#141414] border-4 border-[#141414] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#141414] hover:text-[#F5333F] bg-black/5 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
              aria-label="Sluit ticket"
            >
              ✕
            </button>

            {/* Ticket Header */}
            <div className="bg-[#2E5B33] text-white p-5 rounded-2xl border-2 border-[#141414] mb-6 text-center relative overflow-hidden">
              <div className="font-display font-black text-xl text-[#FBF3D0] mb-1">
                OFFICIEEL FESTIVAL TICKET
              </div>
              <div className="font-typewriter text-xs text-[#8DBD97]">
                DE DAG DAT ALLES MAG 2026
              </div>
              <div className="mt-2 inline-block bg-[#F5333F] text-white font-typewriter text-xs font-bold px-3 py-1 rounded-full border border-white">
                15.08.2026 • De Jungle Zaandam
              </div>
            </div>

            {/* Ticket Body */}
            <div className="space-y-3 font-body text-sm font-semibold mb-6">
              <div className="flex justify-between py-2 border-b border-[#141414]/10">
                <span className="text-[#141414]/60">Naam:</span>
                <span className="font-bold text-[#141414]">{activeTicket.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#141414]/10">
                <span className="text-[#141414]/60">E-mail:</span>
                <span className="font-bold text-[#141414]">{activeTicket.email}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#141414]/10">
                <span className="text-[#141414]/60">Aantal Personen:</span>
                <span className="font-bold text-[#F5333F]">{activeTicket.guests} Persoon/Personen</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#141414]/10">
                <span className="text-[#141414]/60">Meegebracht:</span>
                <span className="font-bold text-[#2E5B33]">{activeTicket.bringingItem}</span>
              </div>
            </div>

            {/* Simulated QR Code & Barcode */}
            <div className="bg-white p-4 rounded-xl border-2 border-[#141414] text-center mb-6 flex flex-col items-center justify-center">
              <QrCode className="w-24 h-24 text-[#141414] mb-2" />
              <span className="font-typewriter text-xs font-bold text-[#2E5B33]">
                CODE: {activeTicket.ticketCode}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 py-3 rounded-xl bg-[#2E5B33] text-white font-display font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#1f3f23]"
              >
                <Printer className="w-4 h-4" />
                <span>Print Ticket</span>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('Festival link gecopieerd naar klembord!');
                }}
                className="flex-1 py-3 rounded-xl bg-[#F5333F] text-white font-display font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#d8222d]"
              >
                <Share2 className="w-4 h-4" />
                <span>Deel DDDAM</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
