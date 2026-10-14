import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Zap,
  Volume2,
  ShieldCheck,
  Brain,
  Headphones,
  Clock,
  Heart,
  ArrowRight,
  Play,
  X,
  Radio,
  Sliders,
  CheckCircle2,
  Users,
  Compass,
  Smile,
} from 'lucide-react';
import { TeclingoLogo } from './TeclingoLogo.tsx';

const AURIX_APP_URL = 'https://teclingo-chat.vercel.app';
const ACCENT_FUCSIA = '#E879F9';
const ACCENT_PURPLE = '#A855F7';
const ACCENT_PINK = '#F472B6';
const ACCENT_RGB = '232, 121, 249';

interface AurixTutorialPageProps {
  onBack: () => void;
}

const PERSONAJES = [
  {
    id: 'aurix',
    emoji: '💬',
    name: 'AURIX',
    role: 'Tu amiga de siempre',
    color: '#E879F9',
    situation: 'Habla de lo que quieras, sin contexto previo',
    sample: "Hey! What made you smile today? Tell me everything!",
  },
  {
    id: 'emily',
    emoji: '🌍',
    name: 'Emily',
    role: 'Viajera de Colorado',
    color: '#4ADE80',
    situation: 'Conoce a alguien en un hostel',
    sample: "I'm heading to the mountains tomorrow! Have you ever backpacked?",
  },
  {
    id: 'jennifer',
    emoji: '☕',
    name: 'Jennifer',
    role: 'Barista en Seattle',
    color: '#F59E0B',
    situation: 'Pide café en una cafetería',
    sample: "Good morning! Oat milk latte or caramel macchiato today?",
  },
  {
    id: 'amanda',
    emoji: '💼',
    name: 'Amanda',
    role: 'Colega en Nueva York',
    color: '#22D3EE',
    situation: 'Small talk en la oficina',
    sample: "Did you catch the tech briefing? The client loved our metrics.",
  },
  {
    id: 'rachel',
    emoji: '🎓',
    name: 'Rachel',
    role: 'Estudiante en Boston',
    color: '#EC4899',
    situation: 'Charla universitaria casual',
    sample: "Finals week is crazy! Want to study at the library together?",
  },
  {
    id: 'sofia',
    emoji: '🎉',
    name: 'Sofia',
    role: 'Fiesta en Los Ángeles',
    color: '#A855F7',
    situation: 'Conoce gente en una fiesta',
    sample: "The music here is incredible! Are you from around here?",
  },
  {
    id: 'free',
    emoji: '♾️',
    name: 'Modo Libre',
    role: 'Sin contexto',
    color: '#94A3B8',
    situation: 'Tú lideras la conversación al 100%',
    sample: "Start on any topic. I adapt dynamically to your pace.",
  },
];

const PASOS = [
  {
    n: '01',
    icon: Smile,
    title: 'Elige tu personaje',
    desc: 'AURIX, Emily, Jennifer, Amanda, Rachel, Sofia o modo libre.',
  },
  {
    n: '02',
    icon: Sliders,
    title: 'Ajusta el nivel',
    desc: 'Respuestas de 3-5, 4-8, 5-10 palabras o sin filtro (modo nativo).',
  },
  {
    n: '03',
    icon: Radio,
    title: 'Habla o escribe',
    desc: 'Usa el micrófono para hablar o el teclado. Tú eliges.',
  },
  {
    n: '04',
    icon: Sparkles,
    title: 'Aprende sin presión',
    desc: 'Botón de pánico para traducción + resumen con memoria IA al volver.',
  },
];

const CONTROLES = [
  {
    icon: Zap,
    title: '🎚 Regulador de Palabras',
    desc: 'Elige entre 3-5, 4-8, 5-10 palabras o modo nativo sin filtro. Tú decides qué tan largas quieres mis respuestas.',
    color: '#E879F9',
  },
  {
    icon: Volume2,
    title: '🎛 Velocidad de Voz',
    desc: 'Escúchame lento (0.5x), medio (0.7x) o normal (1.0x). Ideal para entrenar tu oído paso a paso.',
    color: '#A855F7',
  },
  {
    icon: ShieldCheck,
    title: '🚨 Botón de Pánico',
    desc: 'Si no entiendes una frase, tócalo y verás la traducción al español al instante. Sin juicios, sin presiones.',
    color: '#F472B6',
  },
  {
    icon: Brain,
    title: '🧠 Resumen con Memoria IA',
    desc: 'Al volver, AURIX recuerda tu última conversación y te la narra con voz natural. Continuidad real.',
    color: '#C084FC',
  },
];

const PERFILES = [
  {
    emoji: '🎓',
    rol: 'Alumno',
    desc: 'Practica speaking sin miedo',
    color: '#22D3EE',
  },
  {
    emoji: '👨‍🏫',
    rol: 'Docente',
    desc: 'Recomienda AURIX a tus alumnos',
    color: '#4ADE80',
  },
  {
    emoji: '🛡',
    rol: 'Director',
    desc: 'Monitorea el uso y progreso',
    color: '#DEFF9A',
  },
  {
    emoji: '🌐',
    rol: 'Invitado',
    desc: 'Prueba AURIX sin registro',
    color: '#E5E7EB',
  },
];

const TIPS = [
  {
    icon: Headphones,
    text: 'Usa audífonos para mejor reconocimiento de voz y una experiencia auditiva cristalina.',
  },
  {
    icon: Clock,
    text: 'Practica 15 minutos al día para ver resultados reales y automatizar tu fluidez mental.',
  },
  {
    icon: Heart,
    text: 'No tengas miedo de equivocarte — AURIX nunca juzga, nunca califica y celebra cada intento.',
  },
];

export function AurixTutorialPage({ onBack }: AurixTutorialPageProps) {
  const [selectedPersona, setSelectedPersona] = useState<string>('aurix');
  const [activeVoiceSpeed, setActiveVoiceSpeed] = useState<number>(1.0);
  const [panicModeActive, setPanicModeActive] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);

  const activePersonaObj = PERSONAJES.find((p) => p.id === selectedPersona) || PERSONAJES[0];

  const handleTestVoice = (sampleText: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(sampleText);
      utterance.lang = 'en-US';
      utterance.rate = activeVoiceSpeed;
      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen w-full bg-radial-dark bg-tech-grid text-[#F8FAFC] overflow-x-hidden selection:bg-[#E879F9] selection:text-[#061a1a]">
      {/* Dynamic ambient background glow in AURIX fucsia */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-1/4 -right-20 w-[600px] h-[600px] max-md:w-64 max-md:h-64 rounded-full blur-[160px] max-md:blur-[90px] opacity-25 transition-all duration-1000"
          style={{ background: 'radial-gradient(circle, #E879F9 0%, #A855F7 60%, transparent 80%)' }}
        />
        <div
          className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] max-md:w-60 max-md:h-60 rounded-full blur-[140px] max-md:blur-[80px] opacity-20 transition-all duration-1000"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, #E879F9 70%, transparent 80%)' }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          1) HEADER (sticky, desktop-first h-20, mobile h-14)
         ═══════════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-40 w-full h-20 max-md:h-14 backdrop-blur-2xl bg-[#061a1a]/80 border-b border-[#E879F9]/20 transition-all">
        <div className="max-w-[1400px] h-full mx-auto px-12 max-lg:px-8 max-md:px-4 flex items-center justify-between gap-4">
          {/* Botón Volver */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 max-md:px-3 py-2.5 max-md:py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#E879F9]/50 text-white/70 hover:text-[#E879F9] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 group cursor-pointer min-h-[44px]"
            aria-label="Volver a la selección de perfil"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">← Volver</span>
          </button>

          {/* Logo central */}
          <TeclingoLogo variant="header" />

          {/* Badge AURIX a la derecha */}
          <div className="flex items-center gap-2 px-4 max-md:px-2.5 py-2 max-md:py-1.5 rounded-full bg-[#E879F9]/10 border border-[#E879F9]/40 text-[#E879F9] text-xs max-md:text-[10px] font-mono font-bold tracking-widest shadow-[0_0_20px_-3px_rgba(232,121,249,0.4)]">
            <span className="w-2 h-2 rounded-full bg-[#E879F9] animate-ping" />
            <span className="hidden md:inline">AURIX · HERRAMIENTA ESTRELLA</span>
            <span className="md:hidden">AURIX</span>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════
          2) HERO CINEMATOGRÁFICO (Desktop 2 columnas, Móvil apilado)
         ═══════════════════════════════════════════════════════════════ */}
      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 pt-16 max-md:pt-8 pb-20 max-md:pb-12">
        <div className="grid grid-cols-12 gap-12 max-lg:gap-8 items-center min-h-[600px] max-md:min-h-0">
          {/* Columna izquierda (60% en desktop: col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="col-span-7 max-lg:col-span-12 space-y-6 max-md:space-y-4 text-left max-lg:text-center"
          >
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E879F9]/15 border border-[#E879F9]/40 text-[#E879F9] text-[11px] font-mono font-bold uppercase tracking-[0.25em] shadow-[0_0_15px_rgba(232,121,249,0.3)]">
              <span className="w-2 h-2 rounded-full bg-[#E879F9] animate-pulse" />
              <span>🔥 IA EN VIVO · TUTOR CONVERSACIONAL</span>
            </div>

            {/* Título gigante AURIX */}
            <h1
              className="text-8xl md:text-9xl max-lg:text-7xl max-md:text-5xl max-sm:text-4xl font-display font-black uppercase italic tracking-tighter leading-[0.9] text-white"
              style={{
                textShadow: '0 0 70px rgba(232,121,249,0.6), 0 0 30px rgba(232,121,249,0.4)',
              }}
            >
              AURIX
            </h1>

            {/* Subtítulo */}
            <p className="text-2xl max-md:text-xl font-display font-bold text-white/95 uppercase tracking-tight leading-snug">
              Habla inglés sin miedo, con una amiga IA que se adapta a ti
            </p>

            {/* Descripción */}
            <p className="text-lg max-md:text-base text-white/65 font-medium leading-relaxed max-w-2xl max-lg:mx-auto">
              Conversación libre con inteligencia artificial empática, sin reglas rígidas, sin exámenes intimidantes y sin juicios.
              Solo tú y una compañera virtual que escucha tu voz, responde con fluidez nativa y evoluciona con tu nivel.
            </p>

            {/* 2 CTAs en fila en Desktop, apilados en móvil */}
            <div className="flex flex-row max-md:flex-col items-center max-lg:justify-center gap-4 pt-4">
              {/* CTA PRINCIPAL: Abre la app real */}
              <a
                href={AURIX_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 max-md:w-full max-md:px-6 max-md:py-4 rounded-2xl bg-[#E879F9] text-[#061a1a] text-xs font-black uppercase tracking-widest shadow-[0_0_40px_rgba(232,121,249,0.55)] hover:scale-105 active:scale-95 hover:shadow-[0_0_60px_rgba(232,121,249,0.8)] transition-all duration-300 min-h-[52px]"
              >
                <span>Probar AURIX Ahora</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Botón Secundario: Sandbox / Demo interactivo */}
              <button
                onClick={() => setDemoModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-5 max-md:w-full max-md:px-6 max-md:py-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#E879F9]/50 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer min-h-[52px]"
              >
                <Play size={15} fill="currentColor" className="text-[#E879F9] group-hover:scale-110 transition-transform" />
                <span>Ver Demo Interactivo</span>
              </button>
            </div>

            <p className="text-white/40 text-xs font-mono max-lg:text-center pt-1">
              ↗ Abre la aplicación oficial en <span className="text-[#E879F9]">{AURIX_APP_URL}</span>
            </p>
          </motion.div>

          {/* Columna derecha (40% en desktop: col-span-5) — Orbe neural + KPIs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="col-span-5 max-lg:col-span-12 flex flex-col items-center justify-center relative py-8"
          >
            {/* Visualización abstracta: Orbe neural con anillos concéntricos rotando */}
            <div className="relative w-80 h-80 max-md:w-60 max-md:h-60 flex items-center justify-center">
              {/* Glow exterior ultra fuerte */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E879F9]/30 via-[#A855F7]/30 to-transparent blur-[60px] animate-pulse" />

              {/* Anillo concéntrico 1 (exterior, rotando a la derecha) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#E879F9]/30"
              />

              {/* Anillo concéntrico 2 (medio, rotando a la izquierda) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-6 rounded-full border border-dotted border-[#A855F7]/50"
              />

              {/* Anillo concéntrico 3 (interior brillante con pulso) */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-12 rounded-full border border-[#E879F9]/60 shadow-[0_0_30px_rgba(232,121,249,0.4)]"
              />

              {/* Centro: Icono de AURIX MessageSquare con aura neural */}
              <div className="relative z-10 w-32 h-32 max-md:w-24 max-md:h-24 rounded-3xl bg-gradient-to-br from-[#E879F9]/20 via-[#A855F7]/20 to-black/60 border-2 border-[#E879F9] flex items-center justify-center shadow-[0_0_50px_rgba(232,121,249,0.5)] backdrop-blur-xl">
                <MessageSquare size={52} className="text-[#E879F9] max-md:size-9 filter drop-shadow-[0_0_15px_#E879F9]" />
              </div>

              {/* Pequeñas partículas orbitando */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 pointer-events-none"
              >
                <span className="absolute top-2 left-1/2 w-3 h-3 rounded-full bg-[#E879F9] shadow-[0_0_12px_#E879F9]" />
                <span className="absolute bottom-4 right-10 w-2 h-2 rounded-full bg-[#22D3EE] shadow-[0_0_10px_#22D3EE]" />
              </motion.div>
            </div>

            {/* 3 KPIs flotantes */}
            <div className="grid grid-cols-3 max-md:grid-cols-3 gap-4 max-md:gap-2 mt-8 w-full max-w-md">
              {[
                { val: '7', lbl: 'Personajes', sub: 'Contextos Reales' },
                { val: '3', lbl: 'Niveles', sub: 'Regulación' },
                { val: '∞', lbl: 'Temas', sub: 'Sin Límite' },
              ].map((kpi, idx) => (
                <div
                  key={idx}
                  className="p-4 max-md:p-3 rounded-2xl bg-white/[0.03] border border-[#E879F9]/25 backdrop-blur-xl text-center shadow-lg hover:border-[#E879F9] transition-all"
                >
                  <p className="text-3xl max-md:text-2xl font-black text-[#E879F9] font-display">{kpi.val}</p>
                  <p className="text-xs max-md:text-[10px] font-bold text-white uppercase tracking-wider mt-0.5">{kpi.lbl}</p>
                  <p className="text-[10px] max-md:text-[8px] text-white/40 font-mono mt-0.5 hidden sm:block">{kpi.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════
            3) SECCIÓN "ASÍ FUNCIONA" (4 pasos visuales con línea conectora)
           ═══════════════════════════════════════════════════════════════ */}
        <section className="pt-28 max-md:pt-16 pb-12">
          <div className="text-center max-w-3xl mx-auto mb-16 max-md:mb-8 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#E879F9]">
              METODOLOGÍA INMERSIVA
            </span>
            <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl font-display font-black uppercase italic tracking-tighter text-white">
              ▸ Así Funciona AURIX
            </h2>
            <p className="text-white/60 text-base max-md:text-sm">
              Cuatro pilares de ingeniería conversacional para desbloquear tu inglés sin fricción.
            </p>
          </div>

          <div className="relative">
            {/* Línea conectora horizontal en desktop */}
            <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#E879F9]/30 to-transparent -translate-y-8 hidden lg:block pointer-events-none" />

            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-4 relative z-10">
              {PASOS.map((paso, idx) => {
                const Icon = paso.icon;
                return (
                  <motion.div
                    key={paso.n}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 max-md:p-6 rounded-[2rem] max-md:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#E879F9]/60 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6 max-md:mb-4">
                        <span className="text-3xl font-display font-black text-[#E879F9] tracking-tighter">
                          {paso.n}
                        </span>
                        <div className="w-12 h-12 rounded-2xl bg-[#E879F9]/10 border border-[#E879F9]/30 flex items-center justify-center text-[#E879F9] group-hover:scale-110 group-hover:bg-[#E879F9] group-hover:text-black transition-all">
                          <Icon size={22} />
                        </div>
                      </div>

                      <h3 className="text-xl max-md:text-lg font-display font-black uppercase tracking-tight text-white mb-2 group-hover:text-[#E879F9] transition-colors">
                        {paso.title}
                      </h3>
                      <p className="text-sm max-md:text-xs text-white/65 leading-relaxed">
                        {paso.desc}
                      </p>
                    </div>

                    <div className="pt-6 max-md:pt-4 mt-6 max-md:mt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-[#E879F9]/70">
                      <CheckCircle2 size={12} className="text-[#E879F9]" />
                      <span>Listo en segundos</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            4) SECCIÓN "PERSONAJES DISPONIBLES" (Grid de 7 tarjetas)
           ═══════════════════════════════════════════════════════════════ */}
        <section className="pt-28 max-md:pt-16 pb-12">
          <div className="text-center max-w-3xl mx-auto mb-16 max-md:mb-8 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#E879F9]">
              ENTRENAMIENTO SITUACIONAL
            </span>
            <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl font-display font-black uppercase italic tracking-tighter text-white">
              ▸ Elige tu Compañero de Conversación
            </h2>
            <p className="text-white/60 text-base max-md:text-sm">
              Cada personaje simula un contexto social y cultural diferente. Toca cualquiera para escuchar su sample vocal.
            </p>
          </div>

          {/* Grid de 7 tarjetas (4 en primera fila, 3 en segunda fila centrada) */}
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-2 gap-6 max-md:gap-3">
            {PERSONAJES.map((personaje) => {
              const isSelected = selectedPersona === personaje.id;
              return (
                <button
                  key={personaje.id}
                  onClick={() => {
                    setSelectedPersona(personaje.id);
                    handleTestVoice(personaje.sample);
                  }}
                  className={`group relative text-left p-7 max-md:p-4 rounded-[2rem] max-md:rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white/[0.08] border-2 shadow-[0_0_35px_-5px_rgba(232,121,249,0.4)] -translate-y-1.5'
                      : 'bg-white/[0.02] border border-white/10 hover:border-white/30 hover:-translate-y-1'
                  }`}
                  style={{
                    borderColor: isSelected ? personaje.color : undefined,
                  }}
                >
                  {/* Glow individual en hover */}
                  <div
                    className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"
                    style={{ background: personaje.color }}
                  />

                  <div>
                    {/* Emoji grande 48px */}
                    <div className="text-5xl max-md:text-3xl mb-4 max-md:mb-2">{personaje.emoji}</div>

                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className="text-2xl max-md:text-base font-display font-black uppercase tracking-tight"
                        style={{ color: personaje.color }}
                      >
                        {personaje.name}
                      </h3>
                      {isSelected && (
                        <span className="text-[10px] font-mono uppercase font-bold text-white px-2 py-0.5 rounded-full bg-white/10">
                          {isPlayingAudio ? '🔊' : 'Activo'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs max-md:text-[11px] font-bold text-white/80">{personaje.role}</p>
                    <p className="text-xs max-md:text-[10px] text-white/50 italic mt-2 leading-relaxed">
                      "{personaje.situation}"
                    </p>
                  </div>

                  {/* Sample vocal previo */}
                  <div className="pt-4 max-md:pt-2 mt-4 max-md:mt-2 border-t border-white/5 flex items-center justify-between text-[11px] max-md:text-[9px] font-mono text-white/40 group-hover:text-white/80 transition-colors">
                    <span className="line-clamp-1 italic">"{personaje.sample}"</span>
                    <Volume2 size={12} className="shrink-0 ml-1 text-white/60" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Voice Speed Switcher */}
          <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/10 max-w-xl mx-auto flex items-center justify-between gap-4 text-xs font-mono">
            <span className="text-white/60 flex items-center gap-2">
              <Volume2 size={14} className="text-[#E879F9]" />
              Velocidad de voz de muestra:
            </span>
            <div className="flex items-center gap-1.5">
              {[0.6, 0.8, 1.0].map((rate) => (
                <button
                  key={rate}
                  onClick={() => {
                    setActiveVoiceSpeed(rate);
                    handleTestVoice(activePersonaObj.sample);
                  }}
                  className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    activeVoiceSpeed === rate
                      ? 'bg-[#E879F9] text-black shadow-sm'
                      : 'bg-white/5 text-white/60 hover:text-white'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            5) SECCIÓN "CONTROLES DE PODER" (4 tarjetas grandes, 2x2)
           ═══════════════════════════════════════════════════════════════ */}
        <section className="pt-28 max-md:pt-16 pb-12">
          <div className="text-center max-w-3xl mx-auto mb-16 max-md:mb-8 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#E879F9]">
              AUTONOMÍA TOTAL
            </span>
            <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl font-display font-black uppercase italic tracking-tighter text-white">
              ▸ Tú Controlas la Experiencia
            </h2>
            <p className="text-white/60 text-base max-md:text-sm">
              Herramientas de ingeniería diseñadas para darte seguridad absoluta en cada segundo de interacción.
            </p>
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-4">
            {CONTROLES.map((control) => {
              const Icon = control.icon;
              return (
                <div
                  key={control.title}
                  className="p-8 max-md:p-6 rounded-[2.5rem] max-md:rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#E879F9]/50 transition-all duration-300 flex items-start gap-6 max-md:gap-4 shadow-xl group"
                >
                  <div
                    className="w-16 h-16 max-md:w-12 max-md:h-12 rounded-2xl flex items-center justify-center shrink-0 border shadow-md group-hover:scale-105 transition-transform"
                    style={{
                      background: `${control.color}15`,
                      borderColor: `${control.color}40`,
                      color: control.color,
                    }}
                  >
                    <Icon size={30} className="max-md:size-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl max-md:text-lg font-display font-black uppercase tracking-tight text-white group-hover:text-[#E879F9] transition-colors">
                      {control.title}
                    </h3>
                    <p className="text-sm max-md:text-xs text-white/65 leading-relaxed">
                      {control.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            6) SECCIÓN "DISPONIBLE EN TODOS LOS PERFILES" (4 tarjetas)
           ═══════════════════════════════════════════════════════════════ */}
        <section className="pt-28 max-md:pt-16 pb-12">
          <div className="text-center max-w-3xl mx-auto mb-16 max-md:mb-8 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#E879F9]">
              ECOSISTEMA UNIFICADO
            </span>
            <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl font-display font-black uppercase italic tracking-tighter text-white">
              ▸ Un Tutor Para Todos
            </h2>
            <p className="text-white/60 text-base max-md:text-sm">
              AURIX se integra de forma transversal en los 4 perfiles de TECLINGO PRO 1.1.
            </p>
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-2 gap-5 max-md:gap-3">
            {PERFILES.map((perfil) => (
              <div
                key={perfil.rol}
                className="p-6 max-md:p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#E879F9]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl max-md:text-2xl mb-2">{perfil.emoji}</div>
                  <h3
                    className="text-lg max-md:text-sm font-display font-black uppercase tracking-tight mb-1"
                    style={{ color: perfil.color }}
                  >
                    {perfil.rol}
                  </h3>
                  <p className="text-xs max-md:text-[10px] text-white/60 leading-snug">
                    "{perfil.desc}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            7) SECCIÓN "TIPS PRO" (3 tarjetas)
           ═══════════════════════════════════════════════════════════════ */}
        <section className="pt-28 max-md:pt-16 pb-12">
          <div className="text-center max-w-3xl mx-auto mb-16 max-md:mb-8 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#E879F9]">
              CONSEJOS DE APRENDIZAJE ACELERADO
            </span>
            <h2 className="text-5xl max-lg:text-4xl max-md:text-3xl font-display font-black uppercase italic tracking-tighter text-white">
              ▸ Tips Pro para Sacarle el Máximo Provecho
            </h2>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-6 max-md:gap-4">
            {TIPS.map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <div
                  key={idx}
                  className="p-8 max-md:p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#E879F9]/40 transition-all flex items-start gap-4 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E879F9]/15 border border-[#E879F9]/30 flex items-center justify-center text-[#E879F9] shrink-0 mt-0.5">
                    <Icon size={18} />
                  </div>
                  <p className="text-white/80 text-sm max-md:text-xs leading-relaxed font-medium">
                    {tip.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            8) CTA FINAL (El más importante: Gigante, con link real)
           ═══════════════════════════════════════════════════════════════ */}
        <section className="pt-24 max-md:pt-16 pb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-14 max-md:p-8 rounded-[3.5rem] max-md:rounded-3xl border-2 border-[#E879F9]/50 overflow-hidden text-center shadow-[0_0_80px_rgba(232,121,249,0.35)]"
            style={{
              background: 'linear-gradient(135deg, rgba(232,121,249,0.18) 0%, rgba(168,85,247,0.12) 50%, rgba(6,26,26,0.96) 100%)',
            }}
          >
            {/* Glow fucsia central */}
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] max-md:w-64 max-md:h-64 rounded-full blur-[140px] opacity-40 pointer-events-none"
              style={{ background: '#E879F9' }}
            />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#E879F9] text-xs font-mono font-bold uppercase tracking-widest shadow-sm">
                <Sparkles size={14} className="animate-spin" />
                <span>ACCESO INMEDIATO SIN FRICCIÓN</span>
              </div>

              <h2 className="text-6xl max-lg:text-5xl max-md:text-3xl font-display font-black uppercase italic tracking-tighter text-white leading-tight">
                ¿Listo para tu primera conversación?
              </h2>

              <p className="text-white/70 text-lg max-md:text-sm font-medium leading-relaxed max-w-xl mx-auto">
                No necesitas micrófono. Puedes escribir. Pero si lo tienes, la experiencia es transformadora.
              </p>

              {/* Botón Central GIGANTE que abre la app real */}
              <div className="pt-4 flex flex-col items-center">
                <a
                  href={AURIX_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-4 px-12 py-6 max-md:w-full max-md:px-6 max-md:py-5 rounded-3xl bg-gradient-to-r from-[#E879F9] to-[#A855F7] text-white text-base max-md:text-sm font-black uppercase tracking-widest shadow-[0_0_60px_rgba(232,121,249,0.6)] hover:scale-105 hover:shadow-[0_0_80px_rgba(232,121,249,0.8)] active:scale-95 transition-all duration-300 border-2 border-[#E879F9]/40 min-h-[56px]"
                >
                  <Sparkles size={22} className="animate-pulse" />
                  <span>Abrir AURIX Ahora</span>
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </a>

                <p className="text-white/40 text-[11px] font-mono uppercase tracking-widest mt-4">
                  ↗ Se abrirá en una nueva pestaña ({AURIX_APP_URL})
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════════════════════════
          9) FOOTER OFICIAL
         ═══════════════════════════════════════════════════════════════ */}
      <footer className="relative z-10 border-t border-white/5 bg-[#0a0f1a]/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-8 max-md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-white/40 uppercase tracking-widest text-center sm:text-left">
            © 2026 CONCEPTOS AI · PÁNUCO, VERACRUZ
          </p>
          <a
            href="https://wa.me/528461108789?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20AURIX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all text-xs font-bold tracking-wider min-h-[44px]"
          >
            <MessageSquare size={14} />
            <span>+52 846 110 8789</span>
          </a>
        </div>
      </footer>

      {/* ═══════════════════════════════════════════════════════════════
          MODAL DE DEMO INTERACTIVO / VIDEO PLACEHOLDER
         ═══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {demoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 max-md:p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setDemoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0a0f1a] border-2 border-[#E879F9]/50 rounded-3xl p-8 max-md:p-6 shadow-[0_0_60px_rgba(232,121,249,0.3)] space-y-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#E879F9]/10 border border-[#E879F9]/30 flex items-center justify-center text-[#E879F9]">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-black uppercase text-white">
                      AURIX Live Demo
                    </h3>
                    <p className="text-xs font-mono text-[#E879F9]">
                      TECLINGO AI ENGINE 2026
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setDemoModalOpen(false)}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Interactive preview box */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-white/60">
                  <span>Personaje activo: <strong className="text-[#E879F9]">{activePersonaObj.name}</strong></span>
                  <span>{activePersonaObj.emoji}</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-[#E879F9]/30 text-sm font-medium text-white italic">
                  "{panicModeActive ? '¡Hola! ¿Qué te hizo sonreír hoy? ¡Cuéntamelo todo!' : activePersonaObj.sample}"
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => setPanicModeActive(!panicModeActive)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      panicModeActive
                        ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                        : 'bg-white/5 text-white/70 hover:text-white border border-white/10'
                    }`}
                  >
                    🚨 {panicModeActive ? 'Traducción ON' : 'Probar Botón de Pánico'}
                  </button>

                  <button
                    onClick={() => handleTestVoice(activePersonaObj.sample)}
                    className="px-4 py-2 rounded-xl bg-[#E879F9] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                  >
                    <Volume2 size={14} />
                    <span>{isPlayingAudio ? 'Reproduciendo...' : 'Escuchar Voz Nativa'}</span>
                  </button>
                </div>
              </div>

              {/* Botón para ir a la app real desde el modal */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setDemoModalOpen(false)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-white/60 hover:text-white cursor-pointer"
                >
                  Cerrar
                </button>
                <a
                  href={AURIX_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E879F9] text-[#061a1a] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(232,121,249,0.4)] hover:scale-105 transition-all"
                >
                  <span>Abrir App Completa</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
