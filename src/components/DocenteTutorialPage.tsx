import React, { useState, useEffect } from 'react';
import { TeclingoLogo } from './TeclingoLogo.tsx';
import {
  BarChart3,
  MessageSquare,
  Settings,
  Users,
  Languages,
  ClipboardList,
  BookOpen,
  Activity,
  Calendar,
  Clock,
  FileText,
  Shield,
  Camera,
  Award,
  ArrowLeft,
  X,
  Lightbulb,
  Sparkles,
  ExternalLink,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';

export interface DocenteFunction {
  id: string;
  numId: number;
  title: string;
  category: 'SOPORTE & GLOBAL' | 'ACADÉMICO' | 'OPERACIONES' | 'MONITOREO & INNOVACIÓN';
  icon: React.ComponentType<{ className?: string; size?: number }>;
  shortDesc: string;
  longDesc: string;
  steps: string[];
  tip: string;
}

// WhatsApp Icon
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

const DOCENTE_FUNCTIONS: DocenteFunction[] = [
  // ─── SOPORTE & GLOBAL (3) ──────────────────────────────────
  {
    id: 'mi-clase',
    numId: 1,
    title: 'MI CLASE (DASHBOARD)',
    category: 'SOPORTE & GLOBAL',
    icon: BarChart3,
    shortDesc: 'Panel operativo del día con pase de lista QR y evidencia SMART.',
    longDesc: 'Panel operativo del día con pase de lista QR, monitor en vivo de asistencia y evidencia SMART.',
    steps: [
      'Ingresa a "Mi Clase" al iniciar sesión.',
      'Verás tu grupo activo con su horario, tema y aula.',
      'Usa el botón "Pase de Lista QR" para escanear credenciales.',
      'Sube la "Evidencia SMART" de la clase del día.',
    ],
    tip: 'Activa el "Reloj Horario" para que el sistema auto-avance al siguiente grupo al cumplir 50 min.',
  },
  {
    id: 'mensajes',
    numId: 2,
    title: 'MENSAJES',
    category: 'SOPORTE & GLOBAL',
    icon: MessageSquare,
    shortDesc: 'Sistema de comunicación con alumnos, dirección y grupos.',
    longDesc: 'Sistema de comunicación con alumnos, dirección y grupos.',
    steps: [
      'Entra a "Mensajes" desde el sidebar.',
      'Selecciona un chat existente o busca un contacto.',
      'Los mensajes de Director aparecen con insignia 👑 dorada.',
      'Puedes crear grupos con múltiples participantes.',
    ],
    tip: 'Los mensajes nuevos aparecen en la campana 🔔 superior derecha.',
  },
  {
    id: 'configuracion',
    numId: 3,
    title: 'CONFIGURACIÓN',
    category: 'SOPORTE & GLOBAL',
    icon: Settings,
    shortDesc: 'Gestión de tu perfil docente, grado académico y certificaciones.',
    longDesc: 'Gestión de tu perfil docente, grado académico y certificaciones.',
    steps: [
      'Accede a "Configuración" desde el menú.',
      'Edita tu nombre, avatar, teléfono y CURP.',
      'Actualiza tu grado académico y añade certificaciones.',
      'Guarda los cambios con el botón "Confirmar".',
    ],
    tip: 'Tu ID Empleado se genera automáticamente y no es editable.',
  },

  // ─── ACADÉMICO (5) ──────────────────────────────────────────
  {
    id: 'mis-grupos',
    numId: 4,
    title: 'MIS GRUPOS',
    category: 'ACADÉMICO',
    icon: Users,
    shortDesc: 'Gestión de asistencia y roster de tus grupos académicos.',
    longDesc: 'Gestión de asistencia y roster de tus grupos académicos.',
    steps: [
      'Abre "Mis Grupos" para ver todos tus grupos asignados.',
      'Haz clic en un grupo para ver su roster completo.',
      'Registra asistencia (Presente/Ausente/Retraso/Justificado).',
      'Guarda la asistencia diaria con fecha específica.',
    ],
    tip: 'Puedes contactar alumnos directamente desde cada registro.',
  },
  {
    id: 'grupos-ingles-cle',
    numId: 5,
    title: 'GRUPOS INGLÉS (CLE)',
    category: 'ACADÉMICO',
    icon: Languages,
    shortDesc: 'Tus grupos de inglés asignados por el Director con Code ID.',
    longDesc: 'Tus grupos de inglés asignados por el Director con Code ID.',
    steps: [
      'Ingresa a "Grupos Inglés (CLE)".',
      'Verás los grupos con su nivel MCER y horario.',
      'Usa los botones P/A/J/R para pase de lista rápido.',
      'Consulta la lista de miembros en cada grupo.',
    ],
    tip: 'El Code ID te permite invitar alumnos faltantes al grupo.',
  },
  {
    id: 'calificaciones',
    numId: 6,
    title: 'CALIFICACIONES',
    category: 'ACADÉMICO',
    icon: ClipboardList,
    shortDesc: 'Sistema de evaluación con sugerencias inteligentes de IA.',
    longDesc: 'Sistema de evaluación con sugerencias inteligentes de IA.',
    steps: [
      'Entra a "Calificaciones" y selecciona un grupo.',
      'La IA propone calificaciones basadas en evidencias y asistencia.',
      'Ajusta manualmente cualquier nota si lo consideras necesario.',
      'Presiona "Auditar AI" para ver el razonamiento detrás de cada nota.',
    ],
    tip: 'Las celdas editadas manualmente se marcan en verde esmeralda.',
  },
  {
    id: 'planeacion',
    numId: 7,
    title: 'PLANEACIÓN',
    category: 'ACADÉMICO',
    icon: BookOpen,
    shortDesc: 'Calendario y seguimiento de planeación didáctica con KPIs.',
    longDesc: 'Calendario y seguimiento de planeación didáctica con KPIs.',
    steps: [
      'Abre "Planeación" para ver el cronograma de 18 semanas.',
      'Cada semana muestra objetivo, KPI y entregables.',
      'Marca los checks de cumplimiento al completar cada tema.',
      'Añade comentarios y firmas oficiales.',
    ],
    tip: 'Filtra por "Aprobadas" o "Pendientes" para organizar tu semana.',
  },
  {
    id: 'libro-virtual-maestro',
    numId: 8,
    title: 'LIBRO VIRTUAL MAESTRO',
    category: 'ACADÉMICO',
    icon: BookOpen,
    shortDesc: 'Material didáctico completo con teoría, ejercicios y audios.',
    longDesc: 'Material didáctico completo con teoría, ejercicios y audios.',
    steps: [
      'Ingresa a "Libro Virtual Maestro".',
      'Navega entre las 18 semanas del Módulo 1.',
      'Selecciona modos de vista: Visor PDF o Tactile Booklet.',
      'Descarga material con el botón "Imprimir Guía A4".',
    ],
    tip: 'Puedes auditar las respuestas de cada alumno en tiempo real.',
  },

  // ─── OPERACIONES (6) ────────────────────────────────────────
  {
    id: 'actividad-de-mis-grupos',
    numId: 9,
    title: 'ACTIVIDAD DE MIS GRUPOS',
    category: 'OPERACIONES',
    icon: Activity,
    shortDesc: 'Análisis de progreso y rendimiento de tus grupos.',
    longDesc: 'Análisis de progreso y rendimiento de tus grupos.',
    steps: [
      'Accede a "Actividad de Mis Grupos".',
      'Visualiza el Skill Mastery (Speaking, Listening, Reading, Writing).',
      'Revisa la curva de aprendizaje por semanas.',
      'Lee las alertas de alumnos en riesgo.',
    ],
    tip: 'Filtra por grupo específico para análisis granular.',
  },
  {
    id: 'asistencias',
    numId: 10,
    title: 'ASISTENCIAS',
    category: 'OPERACIONES',
    icon: BarChart3,
    shortDesc: 'Reporte analítico de asistencia con heatmap mensual.',
    longDesc: 'Reporte analítico de asistencia con heatmap mensual.',
    steps: [
      'Entra a "Asistencias".',
      'Visualiza el rendimiento semanal en gráfica de barras.',
      'Revisa el heatmap de asistencia mensual.',
      'Consulta el trend individual de cada alumno.',
    ],
    tip: 'Los alumnos con menos del 80% aparecen marcados en rojo.',
  },
  {
    id: 'calendario',
    numId: 11,
    title: 'CALENDARIO',
    category: 'OPERACIONES',
    icon: Calendar,
    shortDesc: 'Agenda institucional con eventos académicos y globales.',
    longDesc: 'Agenda institucional con eventos académicos y globales.',
    steps: [
      'Abre "Calendario".',
      'Revisa los eventos del mes por tipo (Escolar/Feriado/Teclingo).',
      'Haz clic en un evento para ver sus detalles.',
      'Filtra por visibilidad (Global/Docente/Alumno).',
    ],
    tip: 'Los eventos con circulares pendientes se marcan con 📩.',
  },
  {
    id: 'horarios',
    numId: 12,
    title: 'HORARIOS',
    category: 'OPERACIONES',
    icon: Clock,
    shortDesc: 'Parrilla horaria semanal personal con vista de agenda.',
    longDesc: 'Parrilla horaria semanal personal con vista de agenda.',
    steps: [
      'Ingresa a "Horarios".',
      'Visualiza tu parrilla de Lunes a Sábado.',
      'En móvil cambia entre "Agenda Diaria" y "Parrilla 2D".',
      'Exporta tu horario en formato ICS.',
    ],
    tip: 'El indicador "Ahora" muestra la clase activa en este momento.',
  },
  {
    id: 'asesorias-slots',
    numId: 13,
    title: 'ASESORÍAS / SLOTS',
    category: 'OPERACIONES',
    icon: Clock,
    shortDesc: 'Gestión de disponibilidad para tutorías personalizadas.',
    longDesc: 'Gestión de disponibilidad para tutorías personalizadas.',
    steps: [
      'Accede a "Asesorías / Slots".',
      'Publica tus bloques de disponibilidad por día.',
      'Acepta o rechaza solicitudes de alumnos.',
      'Sincroniza automáticamente con Google Calendar y Teams.',
    ],
    tip: 'Cada slot se puede vincular a Google Meet o Microsoft Teams.',
  },
  {
    id: 'folios',
    numId: 14,
    title: 'FOLIOS',
    category: 'OPERACIONES',
    icon: FileText,
    shortDesc: 'Recepción y firma digital de documentos oficiales.',
    longDesc: 'Recepción y firma digital de documentos oficiales.',
    steps: [
      'Entra a "Folios" para ver tu buzón de comunicaciones.',
      'Lee la circular completa antes de firmar.',
      'Usa el panel de firma para validar con tu trazo digital.',
      'Puedes subir evidencias PDF vinculadas al folio.',
    ],
    tip: 'La firma queda sellada con IP y timestamp institucional.',
  },

  // ─── MONITOREO & INNOVACIÓN (3) ─────────────────────────────
  {
    id: 'auditoria-safezone',
    numId: 15,
    title: 'AUDITORÍA SAFEZONE',
    category: 'MONITOREO & INNOVACIÓN',
    icon: Shield,
    shortDesc: 'Monitoreo del entorno seguro de práctica con IA (datos agregados).',
    longDesc: 'Monitoreo del entorno seguro de práctica con IA (datos agregados).',
    steps: [
      'Abre "Auditoría SafeZone".',
      'Revisa los índices de ansiedad y engagement del grupo.',
      'Consulta el pasaporte de intereses cotidianos de alumnos.',
      'Monitorea el uso decreciente del "botón de pánico".',
    ],
    tip: 'El chat de SafeZone es PRIVADO — solo ves métricas agregadas.',
  },
  {
    id: 'evidencias',
    numId: 16,
    title: 'EVIDENCIAS',
    category: 'MONITOREO & INNOVACIÓN',
    icon: Camera,
    shortDesc: 'Carga fotográfica de clases como evidencia pedagógica.',
    longDesc: 'Carga fotográfica de clases como evidencia pedagógica.',
    steps: [
      'Ingresa a "Evidencias".',
      'Selecciona el folio firmado al que vincularás la evidencia.',
      'Arrastra tus archivos PDF o toca para seleccionar.',
      'El sistema vincula perpetuamente la evidencia al folio.',
    ],
    tip: 'Toda evidencia queda registrada para auditorías institucionales.',
  },
  {
    id: 'reconocimiento-muro',
    numId: 17,
    title: 'RECONOCIMIENTO / MURO',
    category: 'MONITOREO & INNOVACIÓN',
    icon: Award,
    shortDesc: 'Otorgamiento de logros y medallas digitales a alumnos.',
    longDesc: 'Otorgamiento de logros y medallas digitales a alumnos.',
    steps: [
      'Entra a "Reconocimiento / Muro".',
      'Selecciona el estudiante receptor del galardón.',
      'Elige una plantilla rápida o personaliza tu propio logro.',
      'Presiona "Emitir Reconocimiento" para publicarlo.',
    ],
    tip: 'Los logros con "Destacar en Cabecera" aparecen con aura brillante.',
  },
];

const CATEGORIES = [
  'SOPORTE & GLOBAL',
  'ACADÉMICO',
  'OPERACIONES',
  'MONITOREO & INNOVACIÓN',
] as const;

interface DocenteTutorialPageProps {
  onBack: () => void;
}

export const DocenteTutorialPage: React.FC<DocenteTutorialPageProps> = ({ onBack }) => {
  const [selectedTutorial, setSelectedTutorial] = useState<DocenteFunction | null>(null);
  const [appActionNotice, setAppActionNotice] = useState<string | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTutorial(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedTutorial) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedTutorial]);

  const handleOpenInApp = (tutorial: DocenteFunction) => {
    setAppActionNotice(`Iniciando herramienta docente [${tutorial.title}] en TECLINGO PRO 1.1...`);
    setTimeout(() => {
      setAppActionNotice(null);
    }, 2800);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-radial-dark bg-tech-grid text-[#F8FAFC] selection:bg-[#4ADE80] selection:text-[#061a1a]">
      {/* 1) HEADER (sticky top, fondo glass) */}
      <header className="neo-glass-header sticky top-0 z-40 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Left: Volver + Logo lockup */}
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-mono-tech font-bold uppercase tracking-wider text-white/80 hover:text-[#4ADE80] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#4ADE80]/40 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80]"
            aria-label="Volver a la selección de perfil"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>← VOLVER</span>
          </button>

          <TeclingoLogo variant="header" />
        </div>

        {/* Right: Badge DOCENTE en verde esmeralda #4ADE80 */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono-tech font-bold tracking-widest text-[#4ADE80] bg-[#4ADE80]/10 border border-[#4ADE80]/40 shadow-[0_0_15px_-3px_rgba(74,222,128,0.3)]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>DOCENTE</span>
          </div>
        </div>
      </header>

      {/* 2) HERO SECTION (Desktop base max-w-[1400px] px-12 py-20, adaptado max-md:px-4 py-10) */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-20 max-md:py-10 overflow-x-hidden">
        <div className="text-center max-w-4xl mx-auto mb-16 max-md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono-tech text-white/50 uppercase tracking-[0.2em] mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#4ADE80]" />
            <span>TUTORIALES OFICIALES · TECLINGO PRO 1.1</span>
          </div>

          <h1 className="text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-display font-black uppercase italic tracking-tighter leading-[0.95] break-words text-white flex flex-wrap items-center justify-center gap-3">
            <span>🎓 DOCENTE — OPERATIONS CENTER</span>
          </h1>

          <p className="mt-6 max-md:mt-4 text-lg max-md:text-sm text-white/60 font-semibold max-w-2xl mx-auto leading-relaxed">
            Enseña, planea y evalúa con IA.{' '}
            <span className="text-[#4ADE80] font-bold">17 herramientas</span> para potenciar tu enseñanza diaria.
          </p>

          {/* Barra decorativa verde esmeralda con glow */}
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-[#4ADE80] rounded-full shadow-[0_0_16px_#4ADE80]" />
          </div>
        </div>

        {/* 3) BLOQUE DE BOTONES (4 CATEGORÍAS) */}
        <div className="space-y-12 sm:space-y-16">
          {CATEGORIES.map((catName) => {
            const catItems = DOCENTE_FUNCTIONS.filter((t) => t.category === catName);

            return (
              <section key={catName} aria-labelledby={`cat-docente-${catName}`} className="space-y-5">
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/[0.07] pb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]" />
                  <h2
                    id={`cat-docente-${catName}`}
                    className="font-display font-black text-sm max-md:text-xs tracking-[0.2em] uppercase text-white/90"
                  >
                    ▸ {catName}
                  </h2>
                  <span className="text-xs font-mono-tech text-white/40">
                    ({catItems.length} {catItems.length === 1 ? 'módulo' : 'módulos'})
                  </span>
                </div>

                {/* Cards Grid: 4 cols desktop, 2 cols tablet, 1 col mobile */}
                <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-4">
                  {catItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedTutorial(item)}
                        className="group text-left p-7 max-md:p-5 rounded-[2rem] max-md:rounded-2xl neo-glass border border-white/10 hover:border-[#4ADE80] transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[230px] max-md:min-h-[190px] relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] hover:-translate-y-1.5 hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.3)]"
                      >
                        {/* Hover glow background */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-radial from-[#4ADE80]/10 to-transparent" />

                        {/* Top: Icon & Number ID */}
                        <div className="relative z-10 flex items-start justify-between">
                          <div className="w-12 h-12 max-md:w-10 max-md:h-10 rounded-xl flex items-center justify-center bg-[#4ADE80]/10 border border-[#4ADE80]/20 text-[#4ADE80] group-hover:scale-110 group-hover:bg-[#4ADE80] group-hover:text-black transition-all duration-300 shadow-sm">
                            <Icon className="w-6 h-6 max-md:w-5 max-md:h-5" />
                          </div>
                          <span className="font-mono-tech text-xs text-white/30 group-hover:text-[#4ADE80] transition-colors">
                            #{String(item.numId).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Middle: Title & Description */}
                        <div className="relative z-10 my-3 max-md:my-2">
                          <h3 className="font-display font-black text-lg max-md:text-base uppercase tracking-wider text-white group-hover:text-[#4ADE80] transition-colors break-words">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-xs text-white/50 line-clamp-2 leading-relaxed">
                            {item.shortDesc}
                          </p>
                        </div>

                        {/* Bottom: Action hint */}
                        <div className="relative z-10 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono-tech text-white/40 group-hover:text-white/80 transition-colors">
                          <span>Ver Tutorial Nivel 2</span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#4ADE80] group-hover:translate-x-1 transition-transform" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      {/* 4) FOOTER */}
      <footer className="neo-glass-footer relative z-20 w-full px-12 max-lg:px-8 max-md:px-4 py-8 max-md:py-6 safe-bottom">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-xs max-md:text-[10px] font-mono-tech text-white/40 uppercase tracking-[0.2em]">
            © 2026 CONCEPTOS AI · PÁNUCO, VERACRUZ
          </div>

          <div>
            <a
              href="https://wa.me/528461108789?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20TECLINGO%20PRO%20Docente"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp al +52 846 110 8789"
              className="inline-flex items-center gap-2.5 px-6 max-md:px-4 py-3 max-md:py-2.5 rounded-full text-xs font-semibold bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/70 text-[#25D366] transition-all duration-300 shadow-[0_0_15px_-3px_rgba(37,211,102,0.2)] hover:shadow-[0_0_22px_rgba(37,211,102,0.4)] group min-h-[44px]"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform filter drop-shadow-[0_0_4px_rgba(37,211,102,0.8)]" />
              <span className="font-mono-tech tracking-wider text-sm max-md:text-xs">+52 846 110 8789</span>
              <span className="text-[10px] uppercase font-mono-tech text-white/50 hidden sm:inline">
                · Soporte WhatsApp
              </span>
            </a>
          </div>
        </div>
      </footer>

      {/* 📖 MODAL DE TUTORIAL (NIVEL 2) */}
      {selectedTutorial && (
        <div
          className="fixed inset-0 z-[100] flex items-center max-md:items-end justify-center p-6 max-md:p-0 bg-black/80 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="docente-modal-title"
          onClick={() => setSelectedTutorial(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-md:max-w-full max-h-[90vh] max-md:max-h-[92dvh] bg-[#0a0f1a] border border-[#4ADE80]/40 rounded-3xl max-md:rounded-t-3xl max-md:rounded-b-none p-8 max-md:p-5 shadow-[0_0_50px_-10px_rgba(74,222,128,0.3)] overflow-hidden transition-all animate-scale-up flex flex-col justify-between"
          >
            {/* Ambient background glow inside modal */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ADE80]/10 rounded-full blur-3xl pointer-events-none -translate-y-12 translate-x-12" />

            {/* Modal Header */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 max-md:w-10 max-md:h-10 rounded-2xl flex items-center justify-center bg-[#4ADE80]/10 border border-[#4ADE80]/30 text-[#4ADE80] shadow-[0_0_15px_rgba(74,222,128,0.2)] shrink-0">
                    {React.createElement(selectedTutorial.icon, { className: 'w-6 h-6 max-md:w-5 max-md:h-5' })}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tech text-[10px] text-[#4ADE80] uppercase tracking-[0.2em] font-semibold">
                        TUTORIAL NIVEL 2 · {selectedTutorial.category}
                      </span>
                      <span className="text-white/20">|</span>
                      <span className="font-mono-tech text-[10px] text-white/40">
                        MOD #{String(selectedTutorial.numId).padStart(2, '0')}
                      </span>
                    </div>
                    <h2
                      id="docente-modal-title"
                      className="font-display font-black text-2xl max-md:text-xl uppercase tracking-wider text-white mt-0.5 break-words"
                    >
                      {selectedTutorial.title}
                    </h2>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedTutorial(null)}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4ADE80] cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Cerrar modal de tutorial"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-5 text-sm max-md:text-xs text-white/80 leading-relaxed">
                {selectedTutorial.longDesc}
              </div>
            </div>

            {/* Scrollable Middle: Pasos & Tips */}
            <div className="overflow-y-auto overscroll-contain custom-scrollbar pr-1 space-y-5 my-2 max-h-[calc(90vh-240px)] max-md:max-h-[calc(92dvh-180px)]">
              {/* Pasos Numerados */}
              <div>
                <h3 className="font-display font-bold text-xs uppercase tracking-[0.18em] text-white/50 mb-3 flex items-center gap-2">
                  <span>CÓMO SE USA (PASOS)</span>
                </h3>
                <ol className="space-y-2.5">
                  {selectedTutorial.steps.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-sm max-md:text-xs text-white/90"
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#4ADE80]/15 border border-[#4ADE80]/30 text-[#4ADE80] font-mono-tech font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Bloque de Tips */}
              <div className="p-4 rounded-xl bg-[#4ADE80]/[0.08] border border-[#4ADE80]/30 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[#4ADE80] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  <span className="font-bold text-[#4ADE80] uppercase font-mono-tech tracking-wider mr-1">
                    TIP PRO DOCENTE:
                  </span>
                  {selectedTutorial.tip}
                </div>
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="pt-4 mt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 safe-bottom">
              <div className="text-xs font-mono-tech text-white/40 hidden sm:block">
                TECLINGO PRO 1.1 · Módulo Docente · Campus Pánuco
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedTutorial(null)}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 text-xs font-semibold transition-colors cursor-pointer min-h-[44px]"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => handleOpenInApp(selectedTutorial)}
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all cursor-pointer min-h-[44px]"
                >
                  <span>Abrir en la App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Temporary Action Toast inside modal */}
            {appActionNotice && (
              <div className="absolute bottom-4 left-6 right-6 p-3 rounded-xl bg-black/90 border border-[#4ADE80] text-xs font-mono-tech text-[#4ADE80] flex items-center justify-center gap-2 shadow-2xl animate-fade-in">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>{appActionNotice}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
