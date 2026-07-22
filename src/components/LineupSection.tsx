import React, { useState } from 'react';
import { Sparkles, Music, Mic, Volume2, ExternalLink, Info, Play, Flame } from 'lucide-react';
import { ARTISTS, FESTIVAL_INFO } from '../data/festivalData';
import { Artist } from '../types';
import { soundFx } from '../utils/audioSynth';

export const LineupSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'headliner' | 'dj' | 'comedy'>('all');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const filteredArtists = ARTISTS.filter((artist) => {
    if (filter === 'all') return true;
    if (filter === 'headliner') return artist.category === 'headliner';
    if (filter === 'dj') return artist.category === 'dj';
    if (filter === 'comedy') return artist.category === 'comedy';
    return true;
  });

  const handleArtistClick = (artist: Artist) => {
    soundFx.playStamp();
    setSelectedArtist(artist);
  };

  const handlePlayPsytrancePreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playPsytranceSnippet();
  };

  return (
    <section id="lineup" className="py-20 md:py-28 bg-[#FBF3D0] relative border-b-4 border-[#2E5B33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2E5B33] text-[#FAF7EF] px-4 py-1.5 rounded-full font-typewriter text-xs sm:text-sm mb-4 shadow-md rotate-[-1deg]">
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <span>Muziek, Beats & Stand-up Comedy</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#141414] tracking-tight mb-4">
            LINE-UP & <span className="text-[#F5333F] underline decoration-[#2E5B33]">ARTIESTEN</span>
          </h2>

          <p className="font-body text-base sm:text-lg font-bold text-[#2E5B33]">
            Van zonnige villa-grooves in de middag tot beukende psytrance in de nacht!
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'Alles' },
            { id: 'headliner', label: '🐅 Night Headliner' },
            { id: 'dj', label: '🎧 DJs & Producers' },
            { id: 'comedy', label: '🎤 Comedy' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundFx.playStamp();
                setFilter(tab.id as any);
              }}
              className={`px-5 py-2.5 rounded-full font-display font-black text-sm transition-all duration-200 border-2 border-[#141414] shadow-sm min-h-[44px] ${
                filter === tab.id
                  ? 'bg-[#F5333F] text-white shadow-md scale-105'
                  : 'bg-white text-[#141414] hover:bg-[#8DBD97]/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Featured Headliner Section: Darzid b2b ExoPhoria */}
        {(filter === 'all' || filter === 'headliner') && (
          <div className="mb-12">
            <div
              onClick={() => handleArtistClick(ARTISTS[0])}
              className="bg-[#1D0E2B] text-white rounded-3xl p-6 sm:p-10 border-4 border-[#7C3AED] shadow-2xl relative overflow-hidden group cursor-pointer animate-border-beam transition-transform duration-300 hover:scale-[1.01]"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/30 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left image column */}
                <div className="lg:col-span-5 relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#4CC9F0] shadow-xl relative">
                    <img
                      src={ARTISTS[0].image}
                      alt={ARTISTS[0].name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D0E2B] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-[#F5333F] text-white font-display text-xs font-black px-3 py-1 rounded-full border border-white shadow">
                      🚨 DAK ERAF CLOSING
                    </span>
                  </div>
                </div>

                {/* Right info column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 font-typewriter text-xs text-[#4CC9F0]">
                    <span className="bg-[#7C3AED]/50 px-3 py-1 rounded-full border border-[#4CC9F0]/40 font-bold">
                      {ARTISTS[0].time}
                    </span>
                    <span>•</span>
                    <span className="text-[#FBF3D0]">{ARTISTS[0].stage}</span>
                  </div>

                  <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight flex items-center gap-3">
                    <span>{ARTISTS[0].name}</span>
                    <Flame className="w-8 h-8 text-[#F5333F] animate-bounce" />
                  </h3>

                  <p className="font-body text-base sm:text-lg text-[#FBF3D0]/90 leading-relaxed font-semibold">
                    {ARTISTS[0].bio}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {ARTISTS[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 text-[#4CC9F0] text-xs font-typewriter px-3 py-1 rounded-full border border-[#4CC9F0]/30"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={handlePlayPsytrancePreview}
                      className="px-5 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-display font-black text-sm transition-colors flex items-center gap-2 border border-[#4CC9F0]"
                    >
                      <Volume2 className="w-4 h-4 text-[#4CC9F0] animate-pulse" />
                      <span>Speel Psytrance Beat Preview</span>
                    </button>

                    <span className="font-typewriter text-xs text-[#8DBD97] flex items-center gap-1">
                      <Info className="w-4 h-4" />
                      <span>Klik op kaart voor volledige biografie</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArtists.slice(1).map((artist) => (
            <div
              key={artist.id}
              onClick={() => handleArtistClick(artist)}
              className="bg-[#FAF7EF] rounded-3xl p-5 border-3 border-[#141414] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 border-2 border-[#141414] relative">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2 right-2 bg-[#2E5B33] text-[#FAF7EF] text-[10px] font-typewriter font-bold px-2.5 py-1 rounded-full border border-white">
                    {artist.time}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  {artist.category === 'comedy' ? (
                    <Mic className="w-4 h-4 text-[#F5333F]" />
                  ) : (
                    <Music className="w-4 h-4 text-[#2E5B33]" />
                  )}
                  <span className="font-typewriter text-xs text-[#2E5B33] font-bold">
                    {artist.stage}
                  </span>
                </div>

                <h4 className="font-display font-black text-xl text-[#141414] mb-2 group-hover:text-[#F5333F] transition-colors">
                  {artist.name}
                </h4>

                <p className="font-body text-sm text-[#141414]/80 font-semibold line-clamp-2 mb-3">
                  {artist.description}
                </p>

                {artist.quote && (
                  <p className="font-typewriter text-xs text-[#F5333F] bg-[#F5333F]/10 p-2 rounded-xl border border-[#F5333F]/20 mb-3 italic">
                    "{artist.quote}"
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-[#141414]/10 flex items-center justify-between">
                <span className="text-xs font-typewriter text-[#2E5B33] font-bold">
                  {artist.role}
                </span>
                <span className="text-xs font-bold text-[#F5333F] group-hover:translate-x-1 transition-transform">
                  Details →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Artist Bio Modal */}
      {selectedArtist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-stamp">
          <div className="bg-[#FAF7EF] text-[#141414] border-4 border-[#141414] rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArtist(null)}
              className="absolute top-4 right-4 text-[#141414] hover:text-[#F5333F] bg-black/5 w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors"
              aria-label="Sluit artiest bio"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">
                {selectedArtist.category === 'headliner' ? '🐅' : selectedArtist.category === 'comedy' ? '🎤' : '🎧'}
              </span>
              <div>
                <span className="font-typewriter text-xs text-[#F5333F] font-bold block">
                  {selectedArtist.stage} • {selectedArtist.time}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#141414]">
                  {selectedArtist.name}
                </h3>
              </div>
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 border-2 border-[#141414]">
              <img
                src={selectedArtist.image}
                alt={selectedArtist.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 font-body text-base text-[#141414]/90 font-semibold mb-6">
              <p>{selectedArtist.bio || selectedArtist.description}</p>
              {selectedArtist.quote && (
                <div className="bg-[#2E5B33] text-[#FAF7EF] p-4 rounded-2xl font-typewriter text-sm border-2 border-[#141414]">
                  "{selectedArtist.quote}"
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedArtist.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#2E5B33]/10 text-[#2E5B33] text-xs font-typewriter px-3 py-1 rounded-full border border-[#2E5B33]/20 font-bold"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-[#141414]/10 flex flex-wrap items-center justify-between gap-3">
              {selectedArtist.category === 'headliner' && (
                <button
                  onClick={() => soundFx.playPsytranceSnippet()}
                  className="px-4 py-2 rounded-xl bg-[#7C3AED] text-white font-display font-bold text-xs flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Speel Beat Preview</span>
                </button>
              )}

              <a
                href={FESTIVAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="ml-auto px-4 py-2 rounded-xl bg-[#2E5B33] text-white font-display font-bold text-xs flex items-center gap-1.5 hover:bg-[#1f3f23] transition-colors"
              >
                <span>Insta Updates</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
