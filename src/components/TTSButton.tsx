import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { ttsService } from '../services/ttsService';

interface TTSButtonProps {
  text: string;
  accent?: string;
  label?: string;
}

export const TTSButton: React.FC<TTSButtonProps> = ({
  text,
  accent = '#DEFF9A',
  label = 'Escuchar',
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }
    const unsubscribe = ttsService.onSpeakingChange((speaking) => {
      setIsSpeaking(speaking);
      if (!speaking) setIsPaused(false);
    });
    return () => {
      unsubscribe();
      ttsService.stop();
    };
  }, []);

  const handleClick = () => {
    if (isSpeaking && !isPaused) {
      ttsService.pause();
      setIsPaused(true);
    } else if (isSpeaking && isPaused) {
      ttsService.resume();
      setIsPaused(false);
    } else {
      ttsService.speak(text, { rate: 0.95, pitch: 1.05, volume: 1.0 });
    }
  };

  const handleStop = (e: React.MouseEvent) => {
    e.stopPropagation();
    ttsService.stop();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  if (!isSupported) {
    return <span className="text-[10px] font-mono text-white/30 italic">TTS no soportado</span>;
  }

  const getIcon = () => {
    if (isSpeaking && !isPaused) return <Pause size={14} fill="currentColor" />;
    if (isSpeaking && isPaused) return <Play size={14} fill="currentColor" />;
    return <Volume2 size={14} />;
  };

  const getLabel = () => {
    if (isSpeaking && !isPaused) return 'Pausar';
    if (isSpeaking && isPaused) return 'Reanudar';
    return label;
  };

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={handleClick}
        aria-label={getLabel()}
        className="flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all hover:scale-105 active:scale-95 cursor-pointer border min-h-[40px]"
        style={{ background: accent + '15', borderColor: accent + '40', color: accent }}
      >
        {getIcon()}
        <span>{getLabel()}</span>
        {isSpeaking && !isPaused && (
          <span className="flex gap-0.5 ml-1">
            <span className="w-0.5 h-3 rounded-full animate-pulse" style={{ background: accent, animationDelay: '0ms' }} />
            <span className="w-0.5 h-3 rounded-full animate-pulse" style={{ background: accent, animationDelay: '150ms' }} />
            <span className="w-0.5 h-3 rounded-full animate-pulse" style={{ background: accent, animationDelay: '300ms' }} />
          </span>
        )}
      </button>
      {isSpeaking && (
        <button
          type="button"
          onClick={handleStop}
          aria-label="Detener narracion"
          className="p-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
        >
          <VolumeX size={14} />
        </button>
      )}
    </div>
  );
};
