import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  Languages,
  ClipboardList,
  BarChart3,
  Calendar,
  Mail,
  BookOpen,
  Map,
  Shield,
  Sparkles,
  Trophy,
  Dna,
  X,
  ArrowRight,
  Lightbulb,
  ListOrdered,
  MessageCircle,
  GraduationCap,
} from 'lucide-react';
import { TeclingoLogo } from './TeclingoLogo.tsx';

type BadgeType = 'IA' | 'NUEVO' | 'CONFIDENCIAL' | 'A1' | null;

export interface TutorialFunction {
  id: string;
  numId: number;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  category: 'SOPORTE' | 'ACADÉMICO' | 'OPERACIONES' | 'MONITOREO';
  badge?: BadgeType;
  shortDesc: string;
  longDesc: string;
  steps: string[];
  tip: string;
}

const ESTUDIANTE_FUNCTIONS: TutorialFunction[] = [
  // ─── SOPORTE & GLOBAL ───────────────────────────────────────
  {
    id: 'dashboard',
    numId: 1,
    title: 'Mi Dashboard',
    icon: LayoutDashboard,
    category: 'SOPORTE',
    shortDesc: 'Tu punto de partida diario',
    longDesc: 'Tu punto de partida con resumen personal del día: próxima clase, tareas pendientes, racha de asistencia y accesos rápidos.',
    steps: [
      'Ingresa a "Mi Dashboard" al iniciar sesión.',
      'Revisa tu próxima clase y las tareas del día.',
      'Consulta tu racha de asistencia y progreso general.',
      'Accede a tu ID Card con código QR para el campus.',
    ],
    tip: 'Tu racha de días consecutivos se muestra con una llama 🔥 animada.',
  },
  {
    id: 'mensajes',
    numId: 2,
    title: 'Mis Mensajes',
    icon: MessageSquare,
    category: 'SOPORTE',
    shortDesc: 'Comunicación con tu comunidad',
    longDesc: 'Chat con docentes, compañeros de grupo y comunicados oficiales.',
    steps: [
      'Entra a "Mis Mensajes" desde el sidebar.',
      'Selecciona un contacto o grupo existente.',
      'Los mensajes del Director aparecen con insignia 👑 dorada.',
      'Puedes enviar mensajes directos o participar en chats grupales.',
    ],
    tip: 'Los mensajes nuevos aparecen en la campana 🔔 superior derecha.',
  },
  {
    id: 'configuracion',
    numId: 3,
    title: 'Configuración',
    icon: Settings,
    category: 'SOPORTE',
    shortDesc: 'Tu perfil estudiantil',
    longDesc: 'Gestión de tu identidad estudiantil, datos académicos y contacto.',
    steps: [
      'Accede a "Configuración" desde el menú.',
      'Edita tu nombre, avatar, teléfono y CURP.',
      'Configura tu carrera, turno, semestre y módulo TEC.',
      'Guarda los cambios con el botón "Confirmar".',
    ],
    tip: 'El contacto de tu Docente Asignado aparece aquí para mensajería directa.',
  },

  // ─── ACADÉMICO ──────────────────────────────────────────────
  {
    id: 'mi-grupo',
    numId: 4,
    title: 'Mi Grupo',
    icon: Users,
    category: 'ACADÉMICO',
    shortDesc: 'Docente y compañeros',
    longDesc: 'Información de tu grupo académico, docente asignado y compañeros.',
    steps: [
      'Abre "Mi Grupo" para ver tu grupo actual.',
      'Revisa el horario, aula y nivel MCER.',
      'Consulta el listado de compañeros con mensajería directa.',
      'Contacta a tu docente con un solo clic.',
    ],
    tip: 'Puedes enviar mensajes directos a cualquier compañero o docente.',
  },
  {
    id: 'unirse-grupo',
    numId: 5,
    title: 'Unirse a Grupo (CLE)',
    icon: Languages,
    category: 'ACADÉMICO',
    shortDesc: 'Inscripción con Code ID',
    longDesc: 'Inscripción autónoma a un grupo de inglés con Code ID.',
    steps: [
      'Ingresa a "Unirse a Grupo (CLE)".',
      'Pide el Code ID a tu docente (formato CLE-AB12CD).',
      'Ingrésalo manualmente o selecciona un grupo de la lista.',
      'Presiona "Unirse" para vincular tu perfil.',
    ],
    tip: 'Puedes ver tus grupos inscritos en la sección "Mis Grupos CLE".',
  },
  {
    id: 'tareas',
    numId: 6,
    title: 'Tareas / Exámenes',
    icon: ClipboardList,
    category: 'ACADÉMICO',
    shortDesc: 'Actividades y evaluaciones',
    longDesc: 'Gestión de tareas y exámenes con recordatorios y prioridades.',
    steps: [
      'Abre "Tareas / Exámenes".',
      'Revisa las tareas pendientes con sus fechas límite.',
      'Filtra por tipo: TAREA o PROYECTO.',
      'Presiona "Entregar" cuando completes cada actividad.',
    ],
    tip: 'Los exámenes activos aparecen destacados con borde cian brillante.',
  },
  {
    id: 'calificaciones',
    numId: 7,
    title: 'Calificaciones',
    icon: BarChart3,
    category: 'ACADÉMICO',
    shortDesc: 'Notas y desempeño',
    longDesc: 'Consulta de tus notas y desempeño por habilidad y período.',
    steps: [
      'Entra a "Calificaciones".',
      'Revisa tu promedio general con gráfica circular.',
      'Consulta el detalle por habilidad (Speaking, Listening, Reading, Writing).',
      'Revisa el histórico de niveles y evaluaciones.',
    ],
    tip: 'Tu rango estudiantil (ELITE, AVANZADO) se muestra en tiempo real.',
  },
  {
    id: 'calendario',
    numId: 8,
    title: 'Mi Calendario',
    icon: Calendar,
    category: 'ACADÉMICO',
    shortDesc: 'Agenda personal',
    longDesc: 'Agenda personal con eventos académicos, feriados y fechas importantes.',
    steps: [
      'Abre "Mi Calendario".',
      'Revisa los eventos del mes por tipo.',
      'Haz clic en un evento para ver todos sus detalles.',
      'Filtra por visibilidad (Global/Docente/Alumno).',
    ],
    tip: 'Los eventos institucionales se marcan automáticamente con 🟢.',
  },
  {
    id: 'folios',
    numId: 9,
    title: 'Mis Folios',
    icon: Mail,
    category: 'ACADÉMICO',
    shortDesc: 'Comunicados oficiales',
    longDesc: 'Buzón de comunicados oficiales con firma digital estudiantil.',
    steps: [
      'Ingresa a "Mis Folios" para ver tu buzón.',
      'Lee la circular completa antes de firmar.',
      'Usa el panel táctil para trazar tu firma digital.',
      'Confirma el folio para certificarlo institucionalmente.',
    ],
    tip: 'Los folios pendientes aparecen marcados en naranja.',
  },
  {
    id: 'libro-virtual',
    numId: 10,
    title: 'Libro Virtual',
    icon: BookOpen,
    category: 'ACADÉMICO',
    badge: 'A1',
    shortDesc: 'Libro interactivo',
    longDesc: 'Libro interactivo con teoría, ejercicios y material auditivo.',
    steps: [
      'Abre "Libro Virtual".',
      'Navega entre las 18 semanas del Módulo 1.',
      'Selecciona modos de vista: Visor PDF o Tactile Booklet.',
      'Completa el trabajo de clase y la tarea en cada semana.',
    ],
    tip: 'Marca cada semana como "Leído" para llevar tu progreso personal.',
  },

  // ─── OPERACIONES ────────────────────────────────────────────
  {
    id: 'progress-map',
    numId: 11,
    title: 'Mapa de Progreso',
    icon: Map,
    category: 'OPERACIONES',
    badge: 'IA',
    shortDesc: 'Ruta visual de misiones',
    longDesc: 'Ruta visual de misiones con nodos 3D y logros desbloqueables.',
    steps: [
      'Entra al "Mapa de Progreso".',
      'Visualiza los nodos de tu ruta actual (Start Nexus → Goal Arch).',
      'Cada nodo representa una clase, examen o hito.',
      'Pasa el cursor sobre cada nodo para ver su detalle.',
    ],
    tip: 'Los nodos completados brillan en verde; los bloqueados en gris.',
  },
  {
    id: 'safe-zone',
    numId: 12,
    title: 'SafeZone AI',
    icon: Shield,
    category: 'OPERACIONES',
    badge: 'CONFIDENCIAL',
    shortDesc: 'Chat privado con IA',
    longDesc: 'Chat de práctica confidencial con IA en un entorno 100% privado y sin juicio.',
    steps: [
      'Ingresa a "SafeZone AI".',
      'Completa el onboarding de intereses (hobbies, redes, entretenimiento).',
      'Selecciona tu tipo de compañero (amigo o desconocido) y género.',
      'Chatea con IA en un entorno seguro y confidencial.',
    ],
    tip: 'Puedes ajustar la velocidad del audio con el "Velocity Cockpit" (0.60x a 1.00x).',
  },
  {
    id: 'pdp',
    numId: 13,
    title: 'Habilidades (PDP)',
    icon: BarChart3,
    category: 'OPERACIONES',
    shortDesc: 'Personal Development Plan',
    longDesc: 'Personal Development Plan con radar de 5 habilidades y estrategia de crecimiento IA.',
    steps: [
      'Abre "Habilidades (PDP)".',
      'Visualiza tu radar de habilidades (Speaking, Listening, Reading, Writing).',
      'Lee el análisis de precisión IA con recomendaciones personalizadas.',
      'Optimiza tu PDP con el botón "Optimizar PDP".',
    ],
    tip: 'Tu probabilidad de éxito se calcula en tiempo real.',
  },
  {
    id: 'ai-support',
    numId: 14,
    title: 'Soporte AI',
    icon: Sparkles,
    category: 'OPERACIONES',
    badge: 'NUEVO',
    shortDesc: 'Toolkit IA completo',
    longDesc: 'Toolkit completo con IA para cada habilidad: The Bridge, AR Portal, AI Tutor, Listening Lab, Grammar Fixer, Test Maker y Avatar Matrix.',
    steps: [
      'Ingresa a "Soporte AI".',
      'Revisa tu monitor de 5 skills y tu perfil estudiantil.',
      'Selecciona una herramienta del Ecosistema AI Alumno.',
      'Explora The Bridge, AR Portal, Test Maker, AI Tutor, Listening Lab, Grammar Fixer y Avatar Matrix.',
    ],
    tip: 'El módulo "Avatar AI" te permite regular la gestualidad y tono de tu tutor virtual.',
  },

  // ─── MONITOREO & INNOVACIÓN ─────────────────────────────────
  {
    id: 'logros',
    numId: 15,
    title: 'Logros',
    icon: Trophy,
    category: 'MONITOREO',
    shortDesc: 'Muro de medallas',
    longDesc: 'Muro de logros con medallas digitales y reconocimientos obtenidos.',
    steps: [
      'Abre "Logros" para ver tu muro personal.',
      'Revisa las medallas obtenidas con su métrica y descripción.',
      'Consulta el feed de últimos logros institucionales.',
      'Compite por el título de "Líder Semanal".',
    ],
    tip: 'Los logros con "Destacar en Cabecera" aparecen con aura brillante.',
  },
  {
    id: 'extracurricular',
    numId: 16,
    title: 'Extracurricular',
    icon: Sparkles,
    category: 'MONITOREO',
    shortDesc: 'Juegos y retos',
    longDesc: 'Zona de juegos inmersivos y retos de alto voltaje para practicar inglés con adrenalina pura.',
    steps: [
      'Accede a "Extracurricular" desde el sidebar.',
      'Explora los juegos disponibles: Memorama, Speed Word Hunt, Dictado Visual, Idiom Matcher, Shadowing Challenge y Context Master.',
      'Algunos juegos requieren acceso VIP (desbloqueado al 80% de progreso o con clave del Director).',
      '¡Juega y sube tu nivel de inmersión!',
    ],
    tip: 'El modo VIP se desbloquea automáticamente al alcanzar el 90% de progreso académico.',
  },
  {
    id: 'adn-test',
    numId: 17,
    title: 'ADN Test',
    icon: Dna,
    category: 'MONITOREO',
    shortDesc: 'Tu perfil de aprendizaje',
    longDesc: 'Evaluación inicial que calibra tu perfil de aprendizaje con IA (intereses, estilo, nivel académico).',
    steps: [
      'Abre el "ADN Test" desde tu dashboard.',
      'Completa el protocolo de honestidad.',
      'Selecciona tus intereses (tecnología, viajes, gaming, arte, etc.).',
      'Realiza el diagnóstico académico de 5 habilidades.',
    ],
    tip: 'Tu ADN define el contenido personalizado que la IA te asignará.',
  },
];

const CATEGORIES = [
  { key: 'SOPORTE', label: 'Soporte & Global' },
  { key: 'ACADÉMICO', label: 'Académico' },
  { key: 'OPERACIONES', label: 'Operaciones' },
  { key: 'MONITOREO', label: 'Monitoreo & Innovación' },
] as const;

const ACCENT = '#22D3EE';
const ACCENT_RGB = '34,211,238';

interface EstudianteTutorialPageProps {
  onBack: () => void;
}

export function EstudianteTutorialPage({ onBack }: EstudianteTutorialPageProps) {
  const [selectedFunction, setSelectedFunction] = useState<TutorialFunction | null>(null);

  return (
    <div
      className="min-h-screen w-full text-white overflow-y-auto selection:bg-[#22D3EE] selection:text-[#061a1a]"
      style={{ background: 'linear-gradient(135deg, #061a1a 0%, #0a0f1a 100%)' }}
    >
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#061a1a]/75 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-4 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition-all text-xs font-black uppercase tracking-widest group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">← Volver</span>
          </button>

          <TeclingoLogo variant="header" />

          <div className="px-4 py-2 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/30 text-[#22D3EE] text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_-3px_rgba(34,211,238,0.3)] flex items-center gap-1.5">
            <GraduationCap size={14} />
            <span>ESTUDIANTE</span>
          </div>
        </div>
      </header>

      {/* 2) HERO SECTION (Desktop base max-w-[1400px] px-12 py-20, adaptado max-md:px-4 py-10) */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-20 max-md:py-10 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 max-md:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22D3EE]/5 border border-[#22D3EE]/20 text-[#22D3EE] text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm">
            <Sparkles size={12} />
            Tutorial Interactivo
          </div>

          <h1 className="text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-display font-black uppercase italic tracking-tighter leading-[0.95] break-words text-white">
            <span>📘 Estudiante —</span>
            <br />
            <span
              className="text-[#22D3EE]"
              style={{ textShadow: '0 0 40px rgba(34,211,238,0.4)' }}
            >
              Learning Hub
            </span>
          </h1>

          <p className="mt-6 max-md:mt-4 text-lg max-md:text-sm text-white/50 font-medium leading-relaxed max-w-2xl mx-auto">
            Tu viaje. Tu velocidad. Tu éxito. <span className="text-white font-bold">17 herramientas</span> para
            aprender inglés con IA, sin miedo al error.
          </p>

          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent shadow-[0_0_20px_#22D3EE]" />
          </div>
        </motion.div>

        {/* CATEGORIES & CARDS */}
        <div className="space-y-12 sm:space-y-16">
          {CATEGORIES.map((cat, catIdx) => {
            const items = ESTUDIANTE_FUNCTIONS.filter((f) => f.category === cat.key);
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#22D3EE]/40 to-transparent" />
                  <h2 className="text-sm max-md:text-xs font-black uppercase tracking-[0.4em] text-[#22D3EE]/90">
                    {cat.label}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-l from-[#22D3EE]/40 to-transparent" />
                </div>

                <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-4">
                  {items.map((fn, idx) => {
                    const Icon = fn.icon;
                    return (
                      <motion.button
                        key={fn.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: catIdx * 0.1 + idx * 0.05 }}
                        whileHover={{ y: -6 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedFunction(fn)}
                        className="group relative text-left p-7 max-md:p-5 rounded-[2rem] max-md:rounded-2xl backdrop-blur-xl bg-white/[0.03] border border-white/10 hover:border-[#22D3EE]/50 transition-all duration-300 overflow-hidden cursor-pointer min-h-[230px] max-md:min-h-[190px] flex flex-col justify-between"
                        style={{
                          boxShadow: 'inset 0 0 20px rgba(34,211,238,0.02)',
                        }}
                      >
                        {/* Glow hover */}
                        <div
                          className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{ background: `rgba(${ACCENT_RGB},0.25)` }}
                        />

                        {/* Badge if exists */}
                        {fn.badge && (
                          <span
                            className="absolute top-4 right-4 px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest"
                            style={{
                              background:
                                fn.badge === 'CONFIDENCIAL'
                                  ? 'rgba(239,68,68,0.15)'
                                  : fn.badge === 'NUEVO'
                                  ? 'rgba(222,255,154,0.15)'
                                  : `rgba(${ACCENT_RGB},0.15)`,
                              color:
                                fn.badge === 'CONFIDENCIAL'
                                  ? '#F87171'
                                  : fn.badge === 'NUEVO'
                                  ? '#DEFF9A'
                                  : ACCENT,
                              border: `1px solid ${
                                fn.badge === 'CONFIDENCIAL'
                                  ? 'rgba(239,68,68,0.3)'
                                  : fn.badge === 'NUEVO'
                                  ? 'rgba(222,255,154,0.3)'
                                  : `rgba(${ACCENT_RGB},0.3)`
                              }`,
                            }}
                          >
                            {fn.badge}
                          </span>
                        )}

                        <div className="relative z-10 space-y-4">
                          <div className="w-12 h-12 max-md:w-10 max-md:h-10 rounded-2xl bg-[#22D3EE]/10 border border-[#22D3EE]/20 flex items-center justify-center text-[#22D3EE] group-hover:bg-[#22D3EE] group-hover:text-black transition-all duration-300 shadow-sm">
                            <Icon size={22} className="max-md:size-5" />
                          </div>

                          <div className="space-y-1">
                            <h3 className="text-white text-base max-md:text-sm font-black uppercase tracking-tight group-hover:text-[#22D3EE] transition-colors break-words">
                              {fn.title}
                            </h3>
                            <p className="text-white/40 text-xs max-md:text-[11px] font-medium leading-snug line-clamp-2">
                              {fn.shortDesc}
                            </p>
                          </div>

                          <div className="flex items-center gap-1.5 text-[#22D3EE]/70 group-hover:text-[#22D3EE] text-[9px] font-black uppercase tracking-widest transition-colors pt-2 border-t border-white/5">
                            <span>Ver tutorial</span>
                            <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 bg-[#0a0f1a]/80 backdrop-blur-xl px-12 max-lg:px-8 max-md:px-4 py-8 max-md:py-6 safe-bottom">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs max-md:text-[10px] font-mono text-white/30 uppercase tracking-widest text-center sm:text-left">
            © 2026 CONCEPTOS AI · PÁNUCO, VERACRUZ
          </p>
          <a
            href="https://wa.me/528461108789?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20TECLINGO%20PRO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 max-md:px-4 py-3 max-md:py-2.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all text-xs font-black tracking-wider min-h-[44px]"
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
        {/* Glow superior */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full blur-[100px] opacity-30 pointer-events-none"
          style={{ background: ACCENT }}
        />

        {/* Header del modal */}
        <div className="relative z-10 p-8 max-md:p-5 border-b border-white/5 flex items-start gap-4">
          <div
            className="w-14 h-14 max-md:w-11 max-md:h-11 rounded-2xl flex items-center justify-center shrink-0 border"
            style={{
              background: `rgba(${ACCENT_RGB},0.1)`,
              borderColor: `rgba(${ACCENT_RGB},0.3)`,
              color: ACCENT,
            }}
          >
            <Icon size={26} className="max-md:size-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-[9px] font-black uppercase tracking-[0.3em] mb-1" style={{ color: ACCENT }}>
              Tutorial · {fn.category}
            </div>
            <h2 className="text-2xl max-md:text-xl font-black uppercase tracking-tight text-white leading-tight break-words">
              {fn.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 max-md:w-10 max-md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all shrink-0 cursor-pointer min-h-[44px] min-w-[44px]"
            aria-label="Cerrar tutorial"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body del modal */}
        <div className="relative z-10 p-8 max-md:p-5 space-y-6 overflow-y-auto overscroll-contain custom-scrollbar max-h-[calc(90vh-220px)] max-md:max-h-[calc(92dvh-170px)]">
          <p className="text-white/70 text-base max-md:text-sm leading-relaxed font-medium">
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
                  <span className="text-white/80 text-sm max-md:text-xs leading-relaxed pt-1">
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
              <p className="text-white/70 text-sm max-md:text-xs leading-relaxed">{fn.tip}</p>
            </div>
          </div>
        </div>

        {/* Footer del modal */}
        <div className="relative z-10 p-6 max-md:p-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 safe-bottom">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest text-center sm:text-left hidden sm:block">
            TECLINGO PRO 1.1 · Módulo Estudiante
          </p>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 max-md:px-5 py-3.5 max-md:py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 cursor-pointer min-h-[44px]"
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
