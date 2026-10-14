import React, { useEffect, useState } from 'react';
import { TeclingoLogo } from './TeclingoLogo.tsx';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SplashPageProps {
  onComplete: () => void;
}

export const SplashPage: React.FC<SplashPageProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 3.4 seconds total duration
    const intervalTime = 35; // tick every 35ms
    const totalTicks = 100;
    let currentTick = 0;

    const timer = setInterval(() => {
      currentTick += 1;
      setProgress((prev) => {
        const next = Math.min(100, Math.round((currentTick / totalTicks) * 100));
        return next;
      });

      if (currentTick >= totalTicks) {
        clearInterval(timer);
        setIsFadingOut(true);
        setTimeout(() => {
          onComplete();
        }, 500); // 500ms fade transition
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between items-center p-6 select-none bg-radial-dark bg-tech-grid transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0 scale-[0.99] pointer-events-none' : 'opacity-100 scale-100'
      }`}
      role="dialog"
      aria-label="Pantalla de bienvenida TECLINGO"
    >
      {/* Top subtle badge/status */}
      <div className="w-full flex justify-between items-center max-w-6xl pt-2">
        <div className="flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-[0.2em] text-white/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DEFF9A] animate-pulse" />
          <span>PROCESADOR EDUCATIVO IA 2026</span>
        </div>
        <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-white/30">
          VERACRUZ · MÉXICO
        </div>
      </div>

      {/* Center Hero Block */}
      <div className="flex flex-col items-center justify-center my-auto relative">
        {/* Ambient neon radial glow */}
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#DEFF9A]/15 blur-3xl pointer-events-none -translate-y-8 animate-pulse duration-1000" />
        
        {/* Animated Main Logo */}
        <div className="relative z-10 animate-fade-in-scale">
          <TeclingoLogo variant="splash" size="xl" />
        </div>

        {/* Project Tagline with delay */}
        <div className="mt-6 flex flex-col items-center gap-1.5 relative z-10 animate-fade-in-up">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono-tech text-white/50 uppercase tracking-[0.25em]">
            <span>CONCEPTOS AI</span>
            <span className="text-[#DEFF9A]">·</span>
            <span>PÁNUCO, VERACRUZ</span>
            <span className="text-[#DEFF9A]">·</span>
            <span>2026</span>
          </div>
          <div className="text-[11px] font-sans text-white/35 font-medium tracking-wide">
            Next-Generation Adaptive English Learning
          </div>
        </div>
      </div>

      {/* Bottom Loading Progress & Skip Action */}
      <div className="w-full max-w-md pb-6 flex flex-col items-center gap-3 relative z-10">
        {/* Minimalist Progress Track */}
        <div className="w-full bg-white/10 rounded-full h-[3px] overflow-hidden backdrop-blur-sm p-0">
          <div
            className="h-full bg-gradient-to-r from-[#4ADE80] via-[#DEFF9A] to-[#22D3EE] transition-all duration-75 ease-out shadow-[0_0_12px_#DEFF9A]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text */}
        <div className="w-full flex justify-between items-center text-[11px] font-mono-tech text-white/40 tracking-wider">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#DEFF9A]" />
            Iniciando ecosistema...
          </span>
          <span className="text-[#DEFF9A]/90 font-semibold tabular-nums">{progress}%</span>
        </div>
      </div>

      {/* Skip button in bottom-right corner */}
      <button
        onClick={handleSkip}
        className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono-tech text-white/70 hover:text-[#DEFF9A] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#DEFF9A]/40 transition-all duration-200 backdrop-blur-md group"
        aria-label="Saltar bienvenida e ir directo a la landing page"
      >
        <span>Saltar</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
};
