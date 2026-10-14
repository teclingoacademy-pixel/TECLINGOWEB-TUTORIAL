import React from 'react';
import { TeamMemberCard } from './TeamMemberCard.tsx';

export const SupportFooter: React.FC = () => (
  <footer className="neo-glass-footer relative z-20 w-full px-6 sm:px-10 py-8 sm:py-10 mt-16">
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Fila 1: Equipo de soporte */}
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-[10px] font-mono-tech text-white/40 uppercase tracking-[0.3em]">
          Equipo de Soporte Directo
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <TeamMemberCard
            name="ING. IND. JESUS RODRIGUEZ"
            role="Coordinación General"
            phoneRaw="528451012063"
            phoneDisplay="+52 845 101 2063"
            whatsappMessage="Hola Ing. Jesus Rodriguez, me interesa conocer mas sobre TECLINGO PRO"
            accent="#DEFF9A"
            initials="JR"
          />
          <TeamMemberCard
            name="SOPORTE TECLINGO"
            role="Atención Institucional"
            phoneRaw="528461108789"
            phoneDisplay="+52 846 110 8789"
            whatsappMessage="Hola, me interesa conocer mas sobre TECLINGO PRO"
            accent="#4ADE80"
            initials="ST"
          />
        </div>
      </div>

      {/* Fila 2: Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 text-center md:text-left">
        <div className="text-[11px] font-mono-tech text-white/40 uppercase tracking-[0.2em]">
          &copy; 2026 CONCEPTOS AI &middot; PÁNUCO, VERACRUZ
        </div>
        <div className="text-[11px] font-mono-tech text-white/30 uppercase tracking-[0.2em]">
          TECLINGO &middot; inglés.com
        </div>
      </div>
    </div>
  </footer>
);