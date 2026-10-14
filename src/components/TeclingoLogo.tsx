import React from 'react';

interface TeclingoLogoProps {
  variant?: 'splash' | 'header' | 'monogram' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const TeclingoLogo: React.FC<TeclingoLogoProps> = ({
  variant = 'splash',
  size = 'lg',
  className = '',
}) => {
  // SVG Monogram TC with 3D metallic chrome finish
  const renderMonogram = (svgSize: number) => (
    <div className="relative flex items-center justify-center shrink-0">
      {/* Background ambient neon glow behind monogram */}
      <div 
        className="absolute inset-0 rounded-full blur-xl pointer-events-none opacity-40 bg-[#DEFF9A]"
        style={{ transform: 'scale(0.85)' }}
      />
      <svg
        width={svgSize}
        height={svgSize * 0.9}
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
      >
        <defs>
          {/* Metallic Chrome Gradient for face */}
          <linearGradient id="metalFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="20%" stopColor="#C8CCD0" />
            <stop offset="45%" stopColor="#9BA1A8" />
            <stop offset="55%" stopColor="#E2E5E8" />
            <stop offset="80%" stopColor="#7B828B" />
            <stop offset="100%" stopColor="#DDE1E5" />
          </linearGradient>

          {/* Brushed highlight angle */}
          <linearGradient id="metalHighlight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#555E68" />
            <stop offset="40%" stopColor="#B4BAC2" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="65%" stopColor="#8A929B" />
            <stop offset="100%" stopColor="#4A525C" />
          </linearGradient>

          {/* Chamfer Edge Stroke */}
          <linearGradient id="metalStroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#6C757D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1E232A" stopOpacity="0.9" />
          </linearGradient>

          {/* Deep Emboss Shadow */}
          <filter id="metalRelief" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.85" />
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#FFFFFF" floodOpacity="0.35" />
          </filter>
        </defs>

        <g filter="url(#metalRelief)">
          {/* The "T" shape: sleek top crossbar + dynamic slanted central stem */}
          {/* T Base Stroke / Body */}
          <path
            d="M 22 26 
               C 34 26, 42 21, 56 21 
               L 80 21 
               C 83 21, 85 23, 84 26 
               L 81 37 
               C 80 40, 78 41, 74 41 
               L 61 41 
               L 41 106 
               C 39 112, 35 116, 29 116 
               L 26 116 
               C 22 116, 20 113, 22 109 
               L 39 49 
               L 22 49 
               C 18 49, 15 45, 17 40 
               L 20 29 
               C 21 27, 22 26, 22 26 Z"
            fill="url(#metalFace)"
            stroke="url(#metalStroke)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* T Interior Brushed Sheen */}
          <path
            d="M 26 28 
               L 76 28 
               L 74 34 
               L 55 34 
               L 37 98 
               C 36 102, 33 105, 30 105 
               L 28 105 
               L 43 45 
               L 24 45 Z"
            fill="url(#metalHighlight)"
            opacity="0.55"
          />

          {/* The "C" shape: sweeping dynamic curved letter wrapping around and extending right */}
          <path
            d="M 85 21 
               C 100 21, 116 22, 134 27 
               C 140 29, 142 34, 138 39 
               L 134 44 
               C 130 48, 125 47, 119 45 
               C 107 41, 99 41, 90 44 
               C 82 47, 76 54, 73 63 
               L 68 81 
               C 66 87, 68 93, 73 97 
               C 78 100, 86 101, 95 101 
               L 134 101 
               C 139 101, 142 104, 141 109 
               L 138 119 
               C 137 123, 133 126, 128 126 
               L 88 126 
               C 74 126, 62 121, 55 112 
               C 48 102, 47 89, 52 74 
               L 57 56 
               C 62 39, 71 27, 85 21 Z"
            fill="url(#metalFace)"
            stroke="url(#metalStroke)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* C Interior Brushed Sheen */}
          <path
            d="M 88 28 
               C 103 28, 117 30, 128 34 
               L 125 38 
               C 114 35, 103 35, 93 38 
               C 85 41, 80 47, 78 55 
               L 73 72 
               L 78 72 
               L 81 60 
               C 84 52, 90 48, 98 48 
               L 126 48 
               L 122 56 
               L 96 56 
               C 92 56, 89 59, 88 63 
               L 76 107 
               C 81 113, 89 116, 98 116 
               L 131 116 
               L 129 120 
               L 91 120 
               C 80 120, 71 116, 65 109 
               C 59 101, 58 91, 62 77 
               L 67 59 
               C 71 44, 79 33, 88 28 Z"
            fill="url(#metalHighlight)"
            opacity="0.45"
          />

          {/* Highlight Specular Edge Accents */}
          <path
            d="M 23 26 L 80 21"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M 88 21 C 105 21, 120 23, 134 27"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M 68 126 L 128 126"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>
      </svg>
    </div>
  );

  if (variant === 'monogram') {
    const pxSize = size === 'sm' ? 36 : size === 'md' ? 48 : size === 'lg' ? 64 : 80;
    return <div className={`inline-flex items-center ${className}`}>{renderMonogram(pxSize)}</div>;
  }

  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-3.5 select-none ${className}`}>
        {renderMonogram(48)}
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline gap-2">
            <span className="font-display font-black tracking-[0.22em] text-[#F8FAFC] text-xl sm:text-2xl uppercase">
              TECLINGO
            </span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-script font-bold text-[#DEFF9A] text-lg sm:text-xl tracking-wide glow-neon-sm -rotate-2 origin-left">
              inglés.com
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/20" />
            <span className="hidden sm:inline-block font-mono-tech text-[10px] text-white/40 tracking-[0.16em] uppercase">
              CONCEPTOS AI M PANUCO VER. 2026
            </span>
          </div>
          <span className="sm:hidden font-mono-tech text-[9px] text-white/40 tracking-[0.12em] uppercase mt-0.5">
            CONCEPTOS AI M PANUCO VER. 2026
          </span>
        </div>
      </div>
    );
  }

  // Default: splash / full visual presentation
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {/* Central TC Monogram */}
      <div className="mb-4 transition-transform duration-700 hover:scale-105">
        {renderMonogram(130)}
      </div>

      {/* Brand Name */}
      <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.25em] text-[#E5E7EB] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        TECLINGO
      </h1>

      {/* Tagline */}
      <div className="mt-1 font-script font-bold text-3xl sm:text-4xl text-[#DEFF9A] tracking-wider text-glow-neon -rotate-2 transform">
        inglés.com
      </div>
    </div>
  );
};
