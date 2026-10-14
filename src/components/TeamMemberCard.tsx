import React from 'react';
import { User } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.487-8.412z" />
  </svg>
);

interface TeamMemberCardProps {
  name: string;
  role: string;
  phoneRaw: string;
  phoneDisplay: string;
  whatsappMessage?: string;
  accent?: string;
  initials?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  phoneRaw,
  phoneDisplay,
  whatsappMessage = 'Hola, me interesa conocer más sobre TECLINGO PRO',
  accent = '#DEFF9A',
  initials,
}) => {
  const displayInitials = initials || name
    .split(' ')
    .filter((w) => w.length > 2)
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  const whatsappUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contactar por WhatsApp a ${name}, ${role}, al ${phoneDisplay}`}
      className="group relative flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#25D366]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(37,211,102,0.3)] cursor-pointer min-w-[260px] max-w-[320px]"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(37,211,102,0.1) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex items-start gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black shrink-0 border shadow-lg"
          style={{
            background: `${accent}15`,
            borderColor: `${accent}40`,
            color: accent,
          }}
        >
          {displayInitials || <User size={20} />}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-white text-xs font-black uppercase tracking-tight leading-tight">
            {name}
          </h4>
          <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">
            {role}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/5">
        <span className="text-[11px] font-mono text-white/40 group-hover:text-white/70 transition-colors">
          {phoneDisplay}
        </span>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-[9px] font-black uppercase tracking-wider group-hover:bg-[#25D366] group-hover:text-black transition-all">
          <WhatsAppIcon className="w-3 h-3" />
          <span>Contactar</span>
        </div>
      </div>
    </a>
  );
};