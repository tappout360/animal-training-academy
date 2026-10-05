// WarrenWise Animal Academy - Web Audio API Sound Effects Synthesizer
// Zero external asset dependencies - generates soft, pleasant, kid-friendly chimes and fanfares.
// Automatically respects user mute preferences and reduced-motion / sensory-friendly modes.

class SoundEffectsController {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
  }

  getAudioContext() {
    if (this.isMuted) return null;
    if (typeof window === 'undefined') return null;
    try {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtxClass) return null;
      if (!this.audioCtx) {
        this.audioCtx = new AudioCtxClass();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      return this.audioCtx;
    } catch (e) {
      return null;
    }
  }

  setMuted(muted) {
    this.isMuted = !!muted;
  }

  getMuted() {
    return this.isMuted;
  }

  // Soft melodic success chime (C5 - E5 - G5 - C6)
  playSuccessChime() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });
    } catch (e) {
      // Audio error safe ignore
    }
  }

  // Triumphant Level-Up Fanfare
  playLevelUpFanfare() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx === notes.length - 1 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);

        gain.gain.setValueAtTime(0, now + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.1 + 0.03);
        const duration = idx === notes.length - 1 ? 0.7 : 0.25;
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + duration + 0.05);
      });
    } catch (e) {
      // Ignore
    }
  }

  // Treasure Chest Pop Sparkle
  playChestPop() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      // Gentle wooden pop
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);

      // Sparkles
      [1200, 1500, 1800, 2200].forEach((freq, i) => {
        const sparkOsc = ctx.createOscillator();
        const sparkGain = ctx.createGain();
        sparkOsc.type = 'sine';
        sparkOsc.frequency.setValueAtTime(freq, now + 0.08 + i * 0.05);
        sparkGain.gain.setValueAtTime(0, now + 0.08 + i * 0.05);
        sparkGain.gain.linearRampToValueAtTime(0.08, now + 0.08 + i * 0.05 + 0.01);
        sparkGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08 + i * 0.05 + 0.2);
        sparkOsc.connect(sparkGain);
        sparkGain.connect(ctx.destination);
        sparkOsc.start(now + 0.08 + i * 0.05);
        sparkOsc.stop(now + 0.08 + i * 0.05 + 0.22);
      });
    } catch (e) {
      // Ignore
    }
  }

  // Gentle UI Click / Tap
  playTap() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {
      // Ignore
    }
  }
}

export const soundEffects = new SoundEffectsController();
