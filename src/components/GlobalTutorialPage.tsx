import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  Info,
  Sparkles,
  Trophy,
  BookOpen,
  GraduationCap,
  MapPin,
  MessageCircle,
  Shield,
  X,
  ArrowRight,
  Lightbulb,
  ListOrdered,
  Globe,
} from 'lucide-react';
import { TeclingoLogo } from './TeclingoLogo.tsx';

interface TutorialFunction {
  id: string;
  numId: number;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  category: 'DESCUBRIMIENTO' | 'ACADÉMICO' | 'CONTACTO & ACCESO';
  shortDesc: string;
  longDesc: string;
  steps: string[];
  tip: string;
}

const GLOBAL_FUNCTIONS: TutorialFunction[] = [
  // ─── DESCUBRIMIENTO ─────────────────────────────────────────
  {
    id: 'sobre-teclingo',
    numId: 1,
    title: 'Sobre TECLINGO',
    icon: Info,
    category: 'DESCUBRIMIENTO',
    shortDesc: 'Nuestra historia y misión',
    longDesc: 'Conoce la misión, visión y valores de TECLINGO PRO — la plataforma que fusiona inteligencia artificial, pedagogía y gestión académica.',
    steps: [
      'Lee la historia y origen del proyecto CONCEPTOS AI.',
      'Conoce nuestra misión: democratizar el aprendizaje de inglés en México.',
      'Revisa los valores institucionales y la visión a 2026.',
      'Descubre al equipo detrás de la plataforma.',
    ],
    tip: 'TECLINGO nació en Pánuco, Veracruz, con vocación nacional.',
  },
  {
    id: 'ecosistema',
    numId: 2,
    title: 'Nuestro Ecosistema',
    icon: Sparkles,
    category: 'DESCUBRIMIENTO',
    shortDesc: 'Los 4 roles del sistema',
    longDesc: 'Descubre los 4 roles (Director, Docente, Estudiante, Global) y cómo cada uno potencia el aprendizaje con IA.',
    steps: [
      'Explora cada rol y sus herramientas especializadas.',
      'Conoce cómo la IA personaliza el contenido por perfil.',
      'Revisa la integración con SafeZone, The Bridge y AR Portal.',
      'Comprende el flujo de datos entre los 4 roles.',
    ],
    tip: 'Cada rol tiene su propio color y centro de comando único.',
  },
  {
    id: 'muro-publico',
    numId: 3,
    title: 'Muro Público',
    icon: Trophy,
    category: 'DESCUBRIMIENTO',
    shortDesc: 'Logros destacados',
    longDesc: 'Showcase de logros destacados, medallas y reconocimientos de la comunidad TECLINGO.',
    steps: [
      'Explora las medallas digitales más destacadas del ciclo.',
      'Conoce a los "Líderes Semanales" y sus logros.',
      'Revisa las estadísticas globales de reconocimiento.',
      'Inspírate con casos de éxito de la comunidad.',
    ],
    tip: 'Los alumnos con logros públicos aparecen con aura brillante.',
  },

  // ─── ACADÉMICO ──────────────────────────────────────────────
  {
    id: 'catalogo',
    numId: 4,
    title: 'Catálogo de Cursos',
    icon: BookOpen,
    category: 'ACADÉMICO',
    shortDesc: 'Oferta académica',
    longDesc: 'Oferta académica completa con niveles MCER (A1 a C2) y modalidades disponibles.',
    steps: [
      'Explora los niveles disponibles: A1, A2, B1, B2, C1, C2.',
      'Revisa la duración y modalidad de cada curso.',
      'Consulta los objetivos pedagógicos por nivel.',
      'Encuentra el curso ideal para tu perfil.',
    ],
    tip: 'Todos los cursos integran IA para personalización automática.',
  },
  {
    id: 'niveles-mcer',
    numId: 5,
    title: 'Niveles MCER',
    icon: GraduationCap,
    category: 'ACADÉMICO',
    shortDesc: 'Estándar europeo',
    longDesc: 'Conoce el Marco Común Europeo de Referencia y cómo TECLINGO estructura sus niveles.',
    steps: [
      'Lee qué es el MCER y por qué es el estándar global.',
      'Revisa los 6 niveles y sus descriptores.',
      'Compara tu nivel actual con el estándar MCER.',
      'Conoce las certificaciones internacionales disponibles.',
    ],
    tip: 'TECLINGO está alineado 100% con el MCER europeo.',
  },
  {
    id: 'sedes',
    numId: 6,
    title: 'Sedes y Modalidades',
    icon: MapPin,
    category: 'ACADÉMICO',
    shortDesc: 'Cobertura nacional',
    longDesc: 'Información de las sedes físicas, modalidades (presencial, virtual, híbrida) y cobertura nacional.',
    steps: [
      'Consulta las sedes activas y próximas aperturas.',
      'Revisa las modalidades disponibles (presencial/virtual/híbrida).',
      'Conoce los horarios y turnos por sede.',
      'Verifica si hay cobertura en tu ciudad.',
    ],
    tip: 'El campus principal está en Pánuco, Veracruz, con cobertura nacional.',
  },

  // ─── CONTACTO & ACCESO ──────────────────────────────────────
  {
    id: 'contacto',
    numId: 7,
    title: 'Contacto Institucional',
    icon: MessageCircle,
    category: 'CONTACTO & ACCESO',
    shortDesc: 'Estamos para servirte',
    longDesc: 'Formulario de contacto, WhatsApp, correo institucional y redes sociales oficiales.',
    steps: [
      'Usa el botón de WhatsApp para atención inmediata (+52 846 110 8789).',
      'Envía un correo al equipo institucional.',
      'Completa el formulario para solicitar informes.',
      'Síguenos en redes sociales para novedades.',
    ],
    tip: 'La respuesta institucional promedio es menor a 24 horas.',
  },
  {
    id: 'acceso-admin',
    numId: 8,
    title: 'Acceso Administrativo',
    icon: Shield,
    category: 'CONTACTO & ACCESO',
    shortDesc: 'Área restringida',
    longDesc: 'Área restringida para auditores, aliados estratégicos y personal externo con credenciales especiales.',
    steps: [
      'Ingresa tu código de acceso institucional.',
      'Verifica tu identidad con la autenticación de 2 factores.',
      'Accede al panel de auditoría externa (solo lectura).',
      'Consulta reportes y estadísticas institucionales.',
    ],
    tip: 'El acceso administrativo requiere autorización previa del Director.',
  },
];

const CATEGORIES = [
  { key: 'DESCUBRIMIENTO', label: 'Descubrimiento' },
  { key: 'ACADÉMICO', label: 'Académico' },
  { key: 'CONTACTO & ACCESO', label: 'Contacto & Acceso' },
] as const;

const ACCENT = '#E5E7EB';
const ACCENT_RGB = '229,231,235';

interface GlobalTutorialPageProps {
  onBack: () => void;
}

export function GlobalTutorialPage({ onBack }: GlobalTutorialPageProps) {
  const [selectedFunction, setSelectedFunction] = useState<TutorialFunction | null>(null);

  return (
    <div
      className="min-h-screen w-full text-white overflow-y-auto selection:bg-[#E5E7EB] selection:text-[#061a1a]"
      style={{ background: 'linear-gradient(135deg, #061a1a 0%, #0a0f1a 100%)' }}
    >
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(229,231,235,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(229,231,235,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#061a1a]/75 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-4 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-[#E5E7EB] hover:border-[#E5E7EB]/40 transition-all text-xs font-black uppercase tracking-widest group cursor-pointer"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">← Volver</span>
          </button>

          <TeclingoLogo variant="header" />

          <div className="px-4 py-2 rounded-full bg-[#E5E7EB]/10 border border-[#E5E7EB]/30 text-[#E5E7EB] text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_-3px_rgba(229,231,235,0.3)] flex items-center gap-1.5">
            <Globe size={14} />
            <span>GLOBAL</span>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 pt-16 max-md:pt-10 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5E7EB]/5 border border-[#E5E7EB]/20 text-[#E5E7EB] text-[10px] font-black uppercase tracking-[0.3em]">
            <Sparkles size={12} />
            Institutional Overview
          </div>

          <h1 className="text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-display font-black uppercase italic tracking-tighter leading-[0.95] break-words text-white">
            <span>🌐 Global —</span>
            <br />
            <span
              className="relative inline-block text-[#E5E7EB]"
              style={{ textShadow: '0 0 40px rgba(229,231,235,0.3)' }}
            >
              Institutional Hub
              {/* Shine effect */}
              <motion.span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.7) 50%, transparent 70%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
              >
                Institutional Hub
              </motion.span>
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-white/50 text-base max-md:text-sm font-medium leading-relaxed">
            Conoce TECLINGO PRO. <span className="text-white font-bold">Acceso universal</span> al
            ecosistema educativo que está redefiniendo el aprendizaje de inglés en México.
          </p>

          <div className="flex justify-center">
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent shadow-[0_0_20px_#E5E7EB]" />
          </div>
        </motion.div>
      </section>

      {/* CATEGORIES & CARDS (3 COLUMNS ON DESKTOP, 1 ON 9:16) */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 pb-20 space-y-12">
        {CATEGORIES.map((cat, catIdx) => {
          const items = GLOBAL_FUNCTIONS.filter((f) => f.category === cat.key);
          return (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-[#E5E7EB]/40 to-transparent" />
                <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-[#E5E7EB]/90">
                  {cat.label}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-[#E5E7EB]/40 to-transparent" />
              </div>

              {/* 3-column elegant grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((fn, idx) => {
                  const Icon = fn.icon;
                  return (
                    <motion.button
                      key={fn.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: catIdx * 0.1 + idx * 0.05 }}
                      whileHover={{ y: -6 }}
                      onClick={() => setSelectedFunction(fn)}
                      className="group relative text-left p-8 rounded-3xl backdrop-blur-xl bg-white/[0.03] border border-white/10 hover:border-[#E5E7EB]/50 transition-all duration-300 overflow-hidden cursor-pointer"
                      style={{
                        boxShadow: 'inset 0 0 20px rgba(229,231,235,0.02)',
                      }}
                    >
                      {/* Glow hover */}
                      <div
                        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `rgba(${ACCENT_RGB},0.25)` }}
                      />

                      <div className="relative z-10 space-y-5">
                        <div className="w-14 h-14 rounded-2xl bg-[#E5E7EB]/10 border border-[#E5E7EB]/20 flex items-center justify-center text-[#E5E7EB] group-hover:bg-[#E5E7EB] group-hover:text-black transition-all duration-300 shadow-sm">
                          <Icon size={26} />
                        </div>

                        <div className="space-y-1.5">
                          <h3 className="text-white text-base font-black uppercase tracking-tight group-hover:text-[#E5E7EB] transition-colors">
                            {fn.title}
                          </h3>
                          <p className="text-white/40 text-xs font-medium leading-snug">
                            {fn.shortDesc}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 text-[#E5E7EB]/70 group-hover:text-[#E5E7EB] text-[10px] font-black uppercase tracking-widest transition-colors pt-3 border-t border-white/5">
                          <span>Ver tutorial</span>
                          <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 bg-[#0a0f1a]/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-6 max-md:py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest text-center sm:text-left">
            © 2026 CONCEPTOS AI · PÁNUCO, VERACRUZ
          </p>
          <a
            href="https://wa.me/528461108789?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20TECLINGO%20PRO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all text-[11px] font-black tracking-wider min-h-[44px]"
          >
            <MessageCircle size={14} />
            <span>+52 846 110 8789</span>
          </a>
        </div>
      </footer>

      {/* MODAL DE TUTORIAL */}
      <AnimatePresence>
        {selectedFunction && (
          <TutorialModal
            fn={selectedFunction}
            onClose={() => setSelectedFunction(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

interface TutorialModalProps {
  fn: TutorialFunction;
  onClose: () => void;
}

function TutorialModal({ fn, onClose }: TutorialModalProps) {
  const Icon = fn.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center max-md:items-end justify-center p-6 max-md:p-0"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-md:max-w-full max-h-[90vh] max-md:max-h-[92dvh] overflow-hidden rounded-3xl max-md:rounded-t-3xl max-md:rounded-b-none border border-white/10 shadow-2xl flex flex-col justify-between"
        style={{
          background: 'linear-gradient(135deg, #0a0f1a 0%, #061a1a 100%)',
          boxShadow: `0 25px 50px -12px rgba(${ACCENT_RGB},0.15), 0 0 60px rgba(${ACCENT_RGB},0.08)`,
        }}
      >
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full blur-[100px] opacity-20 pointer-events-none"
          style={{ background: ACCENT }}
        />

        {/* Header del modal */}
        <div className="relative z-10 p-6 sm:p-8 border-b border-white/5 flex items-start gap-4">
          <div
            className="w-14 h-14 max-md:w-11 max-md:h-11 rounded-2xl flex items-center justify-center shrink-0 border"
            style={{
              background: `rgba(${ACCENT_RGB},0.1)`,
              borderColor: `rgba(${ACCENT_RGB},0.3)`,
              color: ACCENT,
            }}
          >
            <Icon size={26} />
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-[9px] font-black uppercase tracking-[0.3em] mb-1" style={{ color: ACCENT }}>
              Tutorial · {fn.category}
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight break-words">
              {fn.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all shrink-0 cursor-pointer min-h-[44px] min-w-[44px]"
            aria-label="Cerrar tutorial"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body del modal */}
        <div className="relative z-10 p-6 sm:p-8 space-y-6 overflow-y-auto overscroll-contain custom-scrollbar max-h-[calc(90vh-220px)] max-md:max-h-[calc(92dvh-170px)]">
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-medium">
            {fn.longDesc}
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
              <ListOrdered size={14} />
              Cómo se usa
            </div>

            <ol className="space-y-3">
              {fn.steps.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-black"
                    style={{
                      background: `rgba(${ACCENT_RGB},0.15)`,
                      color: ACCENT,
                      border: `1px solid rgba(${ACCENT_RGB},0.3)`,
                    }}
                  >
                    {idx + 1}
                  </div>
                  <span className="text-white/80 text-sm leading-relaxed pt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div
            className="p-5 rounded-2xl border flex items-start gap-3"
            style={{
              background: `rgba(${ACCENT_RGB},0.05)`,
              borderColor: `rgba(${ACCENT_RGB},0.2)`,
            }}
          >
            <Lightbulb size={18} className="shrink-0 mt-0.5" style={{ color: ACCENT }} />
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                Tip Pro
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{fn.tip}</p>
            </div>
          </div>
        </div>

        {/* Footer del modal */}
        <div className="relative z-10 p-6 sm:p-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 safe-bottom">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest text-center sm:text-left hidden sm:block">
            TECLINGO PRO 1.1 · Módulo Global
          </p>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 cursor-pointer min-h-[44px]"
            style={{
              background: ACCENT,
              color: '#061a1a',
              boxShadow: `0 10px 30px rgba(${ACCENT_RGB},0.3)`,
            }}
          >
            Entendido
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
