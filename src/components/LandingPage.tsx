import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TeclingoLogo } from './TeclingoLogo.tsx';
import { UserRole } from './RoleWorkspace.tsx';
import { SupportFooter } from './SupportFooter.tsx';
import {
  Shield,
  GraduationCap,
  BookOpen,
  Globe,
  Sparkles,
  ArrowRight,
  RotateCcw,
  MessageSquare,
  Trophy,
} from 'lucide-react';

interface LandingPageProps {
  onSelectRole: (role: UserRole) => void;
  onReplaySplash: () => void;
  onOpenAurix: () => void;
  onOpenToefl: () => void;
}

interface ProfileOption {
  id: UserRole;
  title: string;
  description: string;
  accent: string;
  accentClass: string;
  borderHover: string;
  glowHover: string;
  iconBg: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onSelectRole,
  onReplaySplash,
  onOpenAurix,
  onOpenToefl,
}) => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [hoveredRole, setHoveredRole] = useState<UserRole | null>(null);

  const profiles: ProfileOption[] = [
    {
      id: 'DIRECTOR',
      title: 'DIRECTOR',
      description: 'Visión estratégica, gestión total.',
      accent: '#DEFF9A',
      accentClass: 'text-[#DEFF9A]',
      borderHover: 'hover:border-[#DEFF9A] hover:shadow-[0_0_35px_-5px_rgba(222,255,154,0.35)]',
      glowHover: 'rgba(222, 255, 154, 0.15)',
      iconBg: 'bg-[#DEFF9A]/10 text-[#DEFF9A]',
      icon: Shield,
      features: ['Métricas Institucionales', 'Reportes Ejecutivos', 'Campus Pánuco'],
    },
    {
      id: 'DOCENTE',
      title: 'DOCENTE',
      description: 'Enseña, planea y evalúa con IA.',
      accent: '#4ADE80',
      accentClass: 'text-[#4ADE80]',
      borderHover: 'hover:border-[#4ADE80] hover:shadow-[0_0_35px_-5px_rgba(74,222,128,0.35)]',
      glowHover: 'rgba(74, 222, 128, 0.15)',
      iconBg: 'bg-[#4ADE80]/10 text-[#4ADE80]',
      icon: GraduationCap,
      features: ['Generador de Clases IA', 'Rúbricas de Fluidez', 'Gestión de Cohortes'],
    },
    {
      id: 'ESTUDIANTE',
      title: 'ESTUDIANTE',
      description: 'Aprende a tu ritmo, sin miedo.',
      accent: '#22D3EE',
      accentClass: 'text-[#22D3EE]',
      borderHover: 'hover:border-[#22D3EE] hover:shadow-[0_0_35px_-5px_rgba(34,211,238,0.35)]',
      glowHover: 'rgba(34, 211, 238, 0.15)',
      iconBg: 'bg-[#22D3EE]/10 text-[#22D3EE]',
      icon: BookOpen,
      features: ['Simulador Conversacional', 'Audio Feedback Nativo', 'Racha de Práctica'],
    },
    {
      id: 'GLOBAL',
      title: 'GLOBAL',
      description: 'Acceso general al ecosistema.',
      accent: '#E5E7EB',
      accentClass: 'text-[#E5E7EB]',
      borderHover: 'hover:border-[#E5E7EB] hover:shadow-[0_0_35px_-5px_rgba(229,231,235,0.3)]',
      glowHover: 'rgba(229, 231, 235, 0.12)',
      iconBg: 'bg-white/10 text-[#E5E7EB]',
      icon: Globe,
      features: ['Metodología Abierta', 'Exploración de Niveles', 'Contacto Directo'],
    },
  ];

  const handleCardClick = (role: UserRole) => {
    setSelectedRole(role);
    setTimeout(() => {
      onSelectRole(role);
    }, 250);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-radial-dark bg-tech-grid text-[#F8FAFC] relative overflow-x-hidden">
      {/* Dynamic ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] max-md:w-64 max-md:h-64 rounded-full blur-[140px] max-md:blur-[80px] transition-all duration-700 opacity-25"
          style={{
            backgroundColor:
              hoveredRole === 'DIRECTOR'
                ? '#DEFF9A'
                : hoveredRole === 'DOCENTE'
                ? '#4ADE80'
                : hoveredRole === 'ESTUDIANTE'
                ? '#22D3EE'
                : hoveredRole === 'GLOBAL'
                ? '#E5E7EB'
                : '#DEFF9A',
          }}
        />
      </div>

      {/* 1) HEADER */}
      <header className="relative z-20 w-full px-12 max-lg:px-8 max-md:px-4 py-6 max-md:py-4 border-b border-white/[0.05] flex items-center justify-between gap-4 sticky top-0 backdrop-blur-xl bg-[#061a1a]/70">
        <TeclingoLogo variant="header" />

        <div className="flex items-center gap-3">
          <button
            onClick={onReplaySplash}
            className="flex items-center gap-2 px-4 max-md:px-3 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider text-white/60 hover:text-[#DEFF9A] bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all group cursor-pointer min-h-[44px]"
            title="Ver animación de introducción"
            aria-label="Ver animación de introducción"
          >
            <RotateCcw className="w-3.5 h-3.5 group-hover:-rotate-90 transition-transform duration-300" />
            <span className="hidden sm:inline">Ver Intro</span>
          </button>
        </div>
      </header>

      {/* 2) CONTENEDOR PRINCIPAL */}
      <main className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-20 max-md:py-10 flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mb-16 max-md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono-tech text-white/60 uppercase tracking-[0.2em] mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#DEFF9A]" />
            <span>PORTAL INSTITUCIONAL &middot; VERACRUZ 2026</span>
          </div>

          <h1 className="text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-display font-black uppercase italic tracking-tighter leading-[0.95] break-words text-white text-glow-title">
            ¿QUIÉN ERES HOY?
          </h1>

          <p className="mt-6 max-md:mt-4 text-lg max-md:text-sm text-white/60 font-semibold max-w-2xl mx-auto leading-relaxed">
            Bienvenido a tu ecosistema de aprendizaje.
            <br />
            <span className="text-white/80 font-normal">
              Cuéntanos quién eres para ofrecerte la experiencia perfecta.
            </span>
          </p>
        </div>

        {/* 3) SECCIÓN HERRAMIENTAS ESTRELLA */}
        <div className="w-full mb-16 max-md:mb-10">
          <div className="flex items-center gap-3 mb-8 max-md:mb-5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DEFF9A] shadow-[0_0_10px_#DEFF9A]" />
            <h2 className="font-display font-black text-sm max-md:text-xs tracking-[0.25em] uppercase text-white/90">
              &rsaquo; HERRAMIENTAS ESTRELLA DEL ECOSISTEMA
            </h2>
            <span className="text-[10px] font-mono-tech text-[#DEFF9A] bg-[#DEFF9A]/10 border border-[#DEFF9A]/20 px-2.5 py-0.5 rounded-full">
              ACCESO DESTACADO
            </span>
          </div>

          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 max-md:gap-5">
            {/* TARJETA 1: AURIX */}
            <motion.button
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenAurix}
              className="group relative text-left p-10 max-md:p-6 rounded-[2.5rem] max-md:rounded-2xl backdrop-blur-2xl overflow-hidden border-2 border-[#E879F9]/30 hover:border-[#E879F9] transition-all duration-300 cursor-pointer min-h-[300px] max-md:min-h-[240px] flex flex-col justify-between"
              style={{
                background:
                  'linear-gradient(135deg, rgba(232,121,249,0.08) 0%, rgba(168,85,247,0.04) 50%, rgba(6,26,26,0.92) 100%)',
                boxShadow:
                  '0 25px 50px -12px rgba(232,121,249,0.18), inset 0 0 60px rgba(232,121,249,0.05)',
              }}
            >
              <div
                className="absolute -top-20 -right-20 w-64 h-64 max-md:w-40 max-md:h-40 rounded-full blur-[100px] max-md:blur-[60px] opacity-35 group-hover:opacity-70 transition-opacity pointer-events-none"
                style={{ background: '#E879F9' }}
              />

              <div className="relative z-10 space-y-5 max-md:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E879F9]/15 border border-[#E879F9]/40 text-[#E879F9] text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#E879F9] animate-pulse" />
                    IA EN VIVO
                  </span>
                  <div className="w-14 h-14 max-md:w-11 max-md:h-11 rounded-2xl bg-[#E879F9]/10 border border-[#E879F9]/30 flex items-center justify-center text-[#E879F9] group-hover:scale-110 transition-transform">
                    <MessageSquare size={28} className="max-md:size-5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-4xl max-lg:text-3xl max-md:text-2xl font-black uppercase italic tracking-tighter text-white group-hover:text-[#E879F9] transition-colors break-words">
                    AURIX
                  </h3>
                  <p className="text-[#E879F9] text-sm max-md:text-xs font-bold uppercase tracking-wider">
                    Tu amiga virtual para hablar inglés sin miedo
                  </p>
                </div>

                <p className="text-white/60 text-sm max-md:text-xs leading-relaxed max-w-lg">
                  Conversación libre con IA adaptativa. 7 personajes, velocidad ajustable,
                  traducción al instante y resumen de sesión. Practica speaking como si
                  hablaras con un amigo real.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {['Voz real', 'Panico ES', 'Velocidad', 'Memory IA'].map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-white/70 text-[10px] font-mono font-bold"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-6 max-md:pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="px-6 max-md:px-4 py-3 max-md:py-2.5 rounded-full bg-[#E879F9] text-black text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(232,121,249,0.4)] group-hover:scale-105 transition-transform min-h-[44px]">
                  <span>PROBAR AURIX</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs font-mono text-[#E879F9]/70 hidden sm:inline">
                  Tutorial Interactivo
                </span>
              </div>
            </motion.button>

            {/* TARJETA 2: TOEFL SIMULATOR */}
            <motion.button
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenToefl}
              className="group relative text-left p-10 max-md:p-6 rounded-[2.5rem] max-md:rounded-2xl backdrop-blur-2xl overflow-hidden border-2 border-[#F59E0B]/30 hover:border-[#F59E0B] transition-all duration-500 cursor-pointer min-h-[300px] max-md:min-h-[240px] flex flex-col justify-between"
              style={{
                background:
                  'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(251,191,36,0.04) 50%, rgba(6,26,26,0.92) 100%)',
                boxShadow:
                  '0 25px 50px -12px rgba(245,158,11,0.18), inset 0 0 60px rgba(245,158,11,0.05)',
              }}
            >
              <div
                className="absolute -top-20 -right-20 w-64 h-64 max-md:w-40 max-md:h-40 rounded-full blur-[100px] max-md:blur-[60px] opacity-35 group-hover:opacity-70 transition-opacity pointer-events-none"
                style={{ background: '#F59E0B' }}
              />

              <div className="relative z-10 space-y-5 max-md:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#F59E0B] text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm">
                    <Trophy size={11} />
                    CERTIFICACION
                  </span>
                  <div className="w-14 h-14 max-md:w-11 max-md:h-11 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] group-hover:scale-110 transition-transform">
                    <GraduationCap size={28} className="max-md:size-5" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-4xl max-lg:text-3xl max-md:text-2xl font-black uppercase italic tracking-tighter text-white group-hover:text-[#F59E0B] transition-colors break-words">
                    TOEFL SIMULATOR
                  </h3>
                  <p className="text-[#F59E0B] text-sm max-md:text-xs font-bold uppercase tracking-wider">
                    Simulacro profesional ITP 3-Skills + iBT Speaking
                  </p>
                </div>

                <p className="text-white/60 text-sm max-md:text-xs leading-relaxed max-w-lg">
                  Examen TOEFL completo con timer oficial, cálculo de puntaje
                  (310-677 ITP / 0-30 iBT), sistema de flags, modo revisión y
                  exportación de resultados. La mejor preparación del mercado.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {['ITP 3-Skills', 'iBT Speaking', 'Timer oficial', 'Score real'].map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-white/70 text-[10px] font-mono font-bold"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-6 max-md:pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="px-6 max-md:px-4 py-3 max-md:py-2.5 rounded-full bg-[#F59E0B] text-black text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform min-h-[44px]">
                  <span>INICIAR SIMULACRO</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs font-mono text-[#F59E0B]/70 hidden sm:inline">
                  Tutorial Interactivo
                </span>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Separador */}
        <div className="w-full flex items-center gap-4 mb-10 max-md:mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="text-white/40 text-xs max-md:text-[10px] font-black uppercase tracking-[0.4em] font-mono">
            O EXPLORA POR PERFIL
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* 4) GRID DE PERFILES */}
        <div className="w-full grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 max-md:gap-4">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            const isSelected = selectedRole === profile.id;
            const isHovered = hoveredRole === profile.id;

            return (
              <button
                key={profile.id}
                onClick={() => handleCardClick(profile.id)}
                onMouseEnter={() => setHoveredRole(profile.id)}
                onMouseLeave={() => setHoveredRole(null)}
                aria-label={`Seleccionar perfil de ${profile.title}: ${profile.description}`}
                className={`profile-card group relative text-left p-8 max-md:p-6 rounded-[2.5rem] max-md:rounded-2xl neo-glass border border-white/10 ${profile.borderHover} min-h-[290px] max-md:min-h-[200px] flex flex-col justify-between overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DEFF9A] ${
                  isSelected ? 'scale-[0.98] ring-2 ring-white' : ''
                }`}
                style={{
                  boxShadow: isHovered
                    ? `0 20px 40px -15px ${profile.glowHover}`
                    : 'none',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2.5rem] max-md:rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${profile.glowHover} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className={`w-14 h-14 max-md:w-11 max-md:h-11 rounded-2xl flex items-center justify-center ${profile.iconBg} border border-white/10 transition-transform duration-300 group-hover:scale-110 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 max-md:w-5 max-md:h-5" />
                  </div>

                  <span className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-white/30 group-hover:text-white/60 transition-colors">
                    PERFIL
                  </span>
                </div>

                <div className="relative z-10 my-4 max-md:my-2">
                  <h3
                    className={`font-display font-black text-2xl max-md:text-xl uppercase tracking-wider text-white transition-colors duration-200 group-hover:${profile.accentClass} break-words`}
                  >
                    {profile.title}
                  </h3>

                  <p className="mt-2 text-sm max-md:text-xs text-white/70 font-medium leading-snug">
                    "{profile.description}"
                  </p>
                </div>

                <div className="relative z-10 pt-4 max-md:pt-2 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs max-md:text-[11px] font-mono-tech text-white/40 group-hover:text-white/80 transition-colors flex items-center gap-1">
                    <span>Acceder al portal</span>
                  </span>

                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.04] group-hover:bg-white/20 transition-all duration-300 min-h-[32px] min-w-[32px]"
                    style={{
                      color: profile.accent,
                    }}
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-6 right-6 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                  style={{
                    backgroundColor: profile.accent,
                    boxShadow: `0 0 10px ${profile.accent}`,
                  }}
                />
              </button>
            );
          })}
        </div>
      </main>

      {/* 5) FOOTER (con el equipo de soporte) */}
      <SupportFooter />
    </div>
  );
};