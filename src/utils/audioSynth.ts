// Web Audio API Sound Generator for Interactive Festival FX

class SoundFX {
  private ctx: AudioContext | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a satisfying stamp sound effect
  playStamp() {
    this.initCtx();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(40, now + 0.12);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.12);
  }

  // Play a celebratory confetti chime
  playChime() {
    this.initCtx();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      if (!this.ctx) return;
      const now = this.ctx.currentTime + idx * 0.06;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    });
  }

  // Play a quick psytrance bass kick preview
  playPsytranceSnippet() {
    this.initCtx();
    if (!this.ctx) return;

    const bpm = 142;
    const beatDuration = 60 / bpm;
    const beats = 8; // 2 measures

    for (let i = 0; i < beats; i++) {
      const now = this.ctx.currentTime + i * beatDuration;

      // Kick drum
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.08);

      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);

      // Offbeat rolling bass
      if (i % 1 === 0) {
        for (let sub = 1; sub <= 3; sub++) {
          const subNow = now + (sub * beatDuration) / 4;
          const bassOsc = this.ctx.createOscillator();
          const bassGain = this.ctx.createGain();

          bassOsc.type = 'sawtooth';
          bassOsc.frequency.setValueAtTime(65, subNow); // C2

          bassGain.gain.setValueAtTime(0.12, subNow);
          bassGain.gain.exponentialRampToValueAtTime(0.005, subNow + 0.06);

          bassOsc.connect(bassGain);
          bassGain.connect(this.ctx.destination);

          bassOsc.start(subNow);
          bassOsc.stop(subNow + 0.06);
        }
      }
    }
  }
}

export const soundFx = new SoundFX();
