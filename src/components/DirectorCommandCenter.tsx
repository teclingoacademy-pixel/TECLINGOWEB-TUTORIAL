import React, { useState, useEffect } from 'react';
import { TeclingoLogo } from './TeclingoLogo.tsx';
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  Languages,
  Library,
  UserCheck,
  BarChart3,
  Sliders,
  Database,
  FileText,
  Lock,
  Activity,
  CheckSquare,
  Terminal,
  Hash,
  ArrowLeft,
  X,
  Lightbulb,
  ExternalLink,
  Sparkles,
  Check,
  Copy,
  ChevronRight,
  Shield,
} from 'lucide-react';

export interface TutorialItem {
  id: number;
  slug: string;
  title: string;
  category: 'SOPORTE & GLOBAL' | 'ACADÉMICO' | 'OPERACIONES' | 'MONITOREO & INNOVACIÓN';
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  steps: string[];
  tip: string;
  codeId?: string;
}

// Custom WhatsApp SVG Icon
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

const TUTORIALS: TutorialItem[] = [
  // SOPORTE & GLOBAL (3)
  {
    id: 1,
    slug: 'command-center',
    title: 'COMMAND CENTER',
    category: 'SOPORTE & GLOBAL',
    icon: LayoutDashboard,
    description: 'Panel maestro con métricas en vivo de matrícula, retención IA y eficiencia docente.',
    steps: [
      'Ingresa a tu dashboard al iniciar sesión.',
      'Visualiza las 3 tarjetas principales: Matrícula, Retención IA, Eficiencia Docente.',
      'Haz clic en "Biblioteca" para acceder a recursos estratégicos.',
      'Monitorea el estado de los sistemas IA (Online/Offline).',
    ],
    tip: 'Revisa el Command Center cada mañana para detectar tendencias.',
  },
  {
    id: 2,
    slug: 'communication',
    title: 'COMMUNICATION',
    category: 'SOPORTE & GLOBAL',
    icon: MessageSquare,
    description: 'Sistema de mensajería institucional con canales grupales, DMs y broadcast global.',
    steps: [
      'Entra al módulo "Communication" desde el sidebar.',
      'Selecciona un canal existente o crea uno nuevo.',
      'Usa el botón "Broadcast" para enviar mensajes a toda la comunidad.',
      'Los destinatarios verán notificaciones con insignia de Director.',
    ],
    tip: 'Los mensajes de Director se marcan con 👑 dorado automáticamente.',
  },
  {
    id: 3,
    slug: 'settings',
    title: 'SETTINGS',
    category: 'SOPORTE & GLOBAL',
    icon: Settings,
    description: 'Configuración global de la plataforma e identidad institucional.',
    steps: [
      'Accede a "Settings" desde el menú.',
      'Edita el nombre de la institución, logo y slogan.',
      'Configura las carreras y turnos ofrecidos.',
      'Guarda los cambios con el botón "Confirmar".',
    ],
    tip: 'El Código Institucional se genera automáticamente y no es editable.',
  },

  // ACADÉMICO (5)
  {
    id: 4,
    slug: 'grados-y-grupos',
    title: 'GRADOS Y GRUPOS',
    category: 'ACADÉMICO',
    icon: Users,
    description: 'Gestión completa de la estructura académica de la institución.',
    steps: [
      'Abre "Grados y Grupos" y presiona "Crear Nuevo Grupo".',
      'Selecciona la carrera y el semestre correspondiente.',
      'Asigna la sección (A, B, C...) y el turno.',
      'Guarda — el sistema heredará automáticamente las materias de la malla.',
    ],
    tip: 'Puedes alternar entre vista Grid y Tabla para mejor organización.',
  },
  {
    id: 5,
    slug: 'grupos-ingles-cle',
    title: 'GRUPOS INGLÉS (CLE)',
    category: 'ACADÉMICO',
    icon: Languages,
    description: 'Creación de grupos de inglés con Code ID para inscripción autónoma de alumnos.',
    steps: [
      'Ingresa a "Grupos Inglés (CLE)".',
      'Presiona "+ Crear Grupo" y define módulo (I-VI), grupo, nivel y turno.',
      'Configura el horario y los días de clase.',
      'Copia el Code ID generado y compártelo con tus alumnos.',
    ],
    tip: 'El alumno se une al grupo desde su perfil → "Unirse a Grupo (CLE)".',
  },
  {
    id: 6,
    slug: 'biblioteca-directiva',
    title: 'BIBLIOTECA DIRECTIVA',
    category: 'ACADÉMICO',
    icon: Library,
    description: 'Repositorio central de planes de estudio y manuales oficiales.',
    steps: [
      'Accede a "Biblioteca Directiva".',
      'Elige la pestaña: Plan de Estudio, Cargas & Archivos, Libro Virtual.',
      'Sube archivos JSON para mallas curriculares o PDF para manuales.',
      'Descarga la malla completa con el botón "Descargar JSON".',
    ],
    tip: 'Solo se aceptan archivos .json y .pdf por seguridad.',
  },
  {
    id: 7,
    slug: 'plantilla-docente',
    title: 'PLANTILLA DOCENTE',
    category: 'ACADÉMICO',
    icon: UserCheck,
    description: 'Administración del personal docente, con sus grupos asignados y estado.',
    steps: [
      'Entra a "Plantilla Docente" desde el sidebar.',
      'Revisa el listado de docentes con filtros por estado.',
      'Haz clic en cualquier docente para ver su ficha completa.',
      'Actualiza la lista con el botón "Actualizar".',
    ],
    tip: 'Puedes filtrar por Activos, Inactivos o ver todos.',
  },
  {
    id: 8,
    slug: 'academic-bi',
    title: 'ACADEMIC BI',
    category: 'ACADÉMICO',
    icon: BarChart3,
    description: 'Business Intelligence académico con gráficas de progreso, skill mastery y alertas inteligentes.',
    steps: [
      'Abre "Academic BI" para acceder al panel analítico.',
      'Visualiza el progreso semanal vs planeación.',
      'Revisa el Skill Mastery (Speaking, Listening, Reading, Writing).',
      'Lee los insights de IA para decisiones estratégicas.',
    ],
    tip: 'Filtra por grupo específico para análisis granular.',
  },

  // OPERACIONES (4)
  {
    id: 9,
    slug: 'operations-control',
    title: 'OPERATIONS CONTROL',
    category: 'OPERACIONES',
    icon: Sliders,
    description: 'Monitor de operación diaria con scheduler inteligente y control de conflictos.',
    steps: [
      'Accede a "Operations Control".',
      'Revisa la línea de tiempo de clases del día.',
      'Detecta conflictos marcados en naranja automáticamente.',
      'Usa el "Smart Scheduler" para reorganizar horarios.',
    ],
    tip: 'Los conflictos de docente se marcan con ⚠️ en tiempo real.',
  },
  {
    id: 10,
    slug: 'user-master',
    title: 'USER MASTER',
    category: 'OPERACIONES',
    icon: Database,
    description: 'Gestión de jerarquías, roles y estados de todos los usuarios.',
    steps: [
      'Ingresa a "User Master".',
      'Filtra por rol: Admin, Docente, Alumno, Tutor, Director.',
      'Haz clic en un usuario para ver su expediente completo.',
      'Cambia su rol o suspende su cuenta según sea necesario.',
    ],
    tip: 'Los cambios se reflejan inmediatamente en toda la plataforma.',
  },
  {
    id: 11,
    slug: 'gestion-folios',
    title: 'GESTIÓN FOLIOS',
    category: 'OPERACIONES',
    icon: FileText,
    description: 'Creación, envío y firma de documentos oficiales con trazabilidad.',
    steps: [
      'Entra a "Gestión Folios".',
      'En "FolioConstructor", redacta el documento (título, asunto, cuerpo).',
      'Selecciona los destinatarios (docentes).',
      'Presiona "Enviar y Notificar" — recibirán la circular en su buzón.',
    ],
    tip: 'En "FolioMonitor" puedes rastrear quién ha firmado y quién no.',
  },
  {
    id: 12,
    slug: 'control-de-accesos',
    title: 'CONTROL DE ACCESOS',
    category: 'OPERACIONES',
    icon: Lock,
    description: 'Restricciones curriculares por alumno y nivel de avance.',
    steps: [
      'Abre "Control de Accesos".',
      'Selecciona un usuario de la lista izquierda.',
      'Elige el nivel (1-18) que quieres habilitar o bloquear.',
      'Usa el toggle "Habilitar/Bloquear" para aplicar el cambio.',
    ],
    tip: 'Puedes activar/desactivar el "siguiente nivel" con un solo clic.',
  },

  // MONITOREO & INNOVACIÓN (4)
  {
    id: 13,
    slug: 'real-time-monitor',
    title: 'REAL-TIME MONITOR',
    category: 'MONITOREO & INNOVACIÓN',
    icon: Activity,
    description: 'Telemetría en vivo de la infraestructura con latencia, uptime y logs.',
    steps: [
      'Ingresa a "Real-Time Monitor".',
      'Observa el pulso de latencia en ms, uptime y carga de CPU.',
      'Revisa el log de eventos en tiempo real (terminal).',
      'Ejecuta "Diagnóstico" para un análisis recursivo completo.',
    ],
    tip: 'El feed se actualiza cada 4.5 segundos automáticamente.',
  },
  {
    id: 14,
    slug: 'academic-audit',
    title: 'ACADEMIC AUDIT',
    category: 'MONITOREO & INNOVACIÓN',
    icon: CheckSquare,
    description: 'Auditoría de evidencia diaria y planeación didáctica.',
    steps: [
      'Entra a "Academic Audit".',
      'Revisa las gráficas de Avance Real vs Planeación.',
      'Identifica grupos en riesgo (color rojo/naranja).',
      'Consulta el visor de evidencia diaria (solo lectura).',
    ],
    tip: 'El insight de IA sugiere acciones correctivas por grupo.',
  },
  {
    id: 15,
    slug: 'innovation-logs',
    title: 'INNOVATION LOGS',
    category: 'MONITOREO & INNOVACIÓN',
    icon: Terminal,
    description: 'Registro de alertas tempranas y notificaciones del sistema.',
    steps: [
      'Accede a "Innovation Logs".',
      'Revisa las alertas de alumnos en riesgo.',
      'Lee los mensajes del "The Bridge" (chat IA institucional).',
      'Toma acción contactando a los tutores correspondientes.',
    ],
    tip: 'Las alertas de riesgo alto se marcan en rojo pulsante.',
  },
  {
    id: 16,
    slug: 'codigo-institucional',
    title: 'CÓDIGO INSTITUCIONAL',
    category: 'MONITOREO & INNOVACIÓN',
    icon: Hash,
    description: 'Código único que compartes con alumnos y docentes para vincularlos a tu institución.',
    steps: [
      'Encuéntralo en el Command Center (tarjeta destacada).',
      'Presiona el botón "Copiar" para copiarlo al portapapeles.',
      'Compártelo por WhatsApp, email o impreso.',
      'Los usuarios lo ingresan al registrarse o inscribirse a grupos.',
    ],
    tip: 'El código es único, inmutable y se genera al registrarte.',
    codeId: 'TECLINGO-PANUCO-2026',
  },
];

const CATEGORIES = [
  'SOPORTE & GLOBAL',
  'ACADÉMICO',
  'OPERACIONES',
  'MONITOREO & INNOVACIÓN',
] as const;

interface DirectorCommandCenterProps {
  onBack: () => void;
}

export const DirectorCommandCenter: React.FC<DirectorCommandCenterProps> = ({ onBack }) => {
  const [selectedTutorial, setSelectedTutorial] = useState<TutorialItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [appActionNotice, setAppActionNotice] = useState<string | null>(null);

  // Close modal on Escape key press
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

  const handleCopyCode = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleOpenInApp = (tutorial: TutorialItem) => {
    setAppActionNotice(`Iniciando módulo [${tutorial.title}] en el entorno TECLINGO PRO 1.1...`);
    setTimeout(() => {
      setAppActionNotice(null);
    }, 2800);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-radial-dark bg-tech-grid text-[#F8FAFC] selection:bg-[#DEFF9A] selection:text-[#061a1a]">
      {/* 1) HEADER (sticky top, fondo glass) */}
      <header className="neo-glass-header sticky top-0 z-40 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Left: Volver button + Logo lockup */}
        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-mono-tech font-bold uppercase tracking-wider text-white/80 hover:text-[#DEFF9A] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#DEFF9A]/40 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DEFF9A]"
            aria-label="Volver a la landing de selección de perfil"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>← VOLVER</span>
          </button>

          <TeclingoLogo variant="header" />
        </div>

        {/* Right: Badge DIRECTOR in neon green */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono-tech font-bold tracking-widest text-[#DEFF9A] bg-[#DEFF9A]/10 border border-[#DEFF9A]/40 shadow-[0_0_15px_-3px_rgba(222,255,154,0.3)]">
            <Shield className="w-3.5 h-3.5" />
            <span>DIRECTOR</span>
          </div>
        </div>
      </header>

      {/* 2) HERO SECTION & 3) BLOQUE DE BOTONES (Desktop base max-w-[1400px] px-12 py-20, adaptado max-md:px-4 py-10) */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-20 max-md:py-10 overflow-x-hidden">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 max-md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono-tech text-white/50 uppercase tracking-[0.2em] mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#DEFF9A]" />
            <span>TUTORIALES OFICIALES · TECLINGO PRO 1.1</span>
          </div>

          <h1 className="text-7xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-display font-black uppercase italic tracking-tighter leading-[0.95] break-words text-white text-glow-title flex flex-wrap items-center justify-center gap-3">
            <span>🛡️ DIRECTOR — COMMAND CENTER</span>
          </h1>

          <p className="mt-6 max-md:mt-4 text-lg max-md:text-sm text-white/60 font-semibold max-w-2xl mx-auto leading-relaxed">
            Visión estratégica, gestión total.{' '}
            <span className="text-[#DEFF9A] font-bold">16 herramientas</span> para gobernar tu institución.
          </p>

          {/* Barra decorativa verde neón con glow */}
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-[#DEFF9A] rounded-full shadow-[0_0_16px_#DEFF9A]" />
          </div>
        </div>

        {/* 3) Categorías de Botones */}
        <div className="space-y-12 sm:space-y-16">
          {CATEGORIES.map((catName) => {
            const catItems = TUTORIALS.filter((t) => t.category === catName);

            return (
              <section key={catName} aria-labelledby={`cat-${catName}`} className="space-y-5">
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-white/[0.07] pb-3">
                  <span className="w-2 h-2 rounded-full bg-[#DEFF9A] shadow-[0_0_8px_#DEFF9A]" />
                  <h2
                    id={`cat-${catName}`}
                    className="font-display font-black text-sm sm:text-base tracking-[0.2em] uppercase text-white/90"
                  >
                    ▸ {catName}
                  </h2>
                  <span className="text-xs font-mono-tech text-white/40">
                    ({catItems.length} {catItems.length === 1 ? 'módulo' : 'módulos'})
                  </span>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                  {catItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedTutorial(item)}
                        className="group text-left p-6 rounded-2xl neo-glass border border-white/10 hover:border-[#DEFF9A] transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[220px] relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DEFF9A] hover:-translate-y-1.5 hover:shadow-[0_0_30px_-5px_rgba(222,255,154,0.3)]"
                      >
                        {/* Hover glow background */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-radial from-[#DEFF9A]/10 to-transparent" />

                        {/* Top: Icon & Number ID */}
                        <div className="relative z-10 flex items-start justify-between">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#DEFF9A]/10 border border-[#DEFF9A]/20 text-[#DEFF9A] group-hover:scale-110 group-hover:bg-[#DEFF9A]/20 transition-all duration-300 shadow-sm">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="font-mono-tech text-xs text-white/30 group-hover:text-[#DEFF9A] transition-colors">
                            #{String(item.id).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Middle: Title & Description */}
                        <div className="relative z-10 my-3">
                          <h3 className="font-display font-black text-lg uppercase tracking-wider text-white group-hover:text-[#DEFF9A] transition-colors">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-xs text-white/50 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Bottom: Action hint */}
                        <div className="relative z-10 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono-tech text-white/40 group-hover:text-white/80 transition-colors">
                          <span>Ver Tutorial Nivel 2</span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#DEFF9A] group-hover:translate-x-1 transition-transform" />
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
      <footer className="neo-glass-footer relative z-20 w-full px-6 sm:px-10 py-5 sm:py-6 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-[11px] font-mono-tech text-white/40 uppercase tracking-[0.2em]">
            © 2026 CONCEPTOS AI · PÁNUCO, VERACRUZ
          </div>

          <div>
            <a
              href="https://wa.me/528461108789?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20TECLINGO%20PRO%20Director"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp al +52 846 110 8789"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/70 text-[#25D366] transition-all duration-300 shadow-[0_0_15px_-3px_rgba(37,211,102,0.2)] hover:shadow-[0_0_22px_rgba(37,211,102,0.4)] group"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform filter drop-shadow-[0_0_4px_rgba(37,211,102,0.8)]" />
              <span className="font-mono-tech tracking-wider text-sm">+52 846 110 8789</span>
              <span className="text-[10px] uppercase font-mono-tech text-white/50 hidden sm:inline">
                · Soporte WhatsApp
              </span>
            </a>
          </div>
        </div>
      </footer>

      {/* 📖 MODAL DE TUTORIAL (NIVEL 2) Adaptado: Centrado en desktop, Bottom Sheet en 9:16 móvil */}
      {selectedTutorial && (
        <div
          className="fixed inset-0 z-[100] flex items-center max-md:items-end justify-center p-6 max-md:p-0 bg-black/80 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tutorial-modal-title"
          onClick={() => setSelectedTutorial(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-md:max-w-full max-h-[90vh] max-md:max-h-[92dvh] bg-[#0a0f1a] border border-[#DEFF9A]/40 rounded-3xl max-md:rounded-t-3xl max-md:rounded-b-none p-8 max-md:p-5 shadow-[0_0_50px_-10px_rgba(222,255,154,0.3)] overflow-hidden transition-all animate-scale-up flex flex-col justify-between"
          >
            {/* Ambient background glow inside modal */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#DEFF9A]/10 rounded-full blur-3xl pointer-events-none -translate-y-12 translate-x-12" />

            {/* Modal Header */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 max-md:w-10 max-md:h-10 rounded-2xl flex items-center justify-center bg-[#DEFF9A]/10 border border-[#DEFF9A]/30 text-[#DEFF9A] shadow-[0_0_15px_rgba(222,255,154,0.2)] shrink-0">
                    {React.createElement(selectedTutorial.icon, { className: 'w-6 h-6 max-md:w-5 max-md:h-5' })}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tech text-[10px] text-[#DEFF9A] uppercase tracking-[0.2em] font-semibold">
                        TUTORIAL NIVEL 2 · {selectedTutorial.category}
                      </span>
                      <span className="text-white/20">|</span>
                      <span className="font-mono-tech text-[10px] text-white/40">
                        MOD #{String(selectedTutorial.id).padStart(2, '0')}
                      </span>
                    </div>
                    <h2
                      id="tutorial-modal-title"
                      className="font-display font-black text-2xl max-md:text-xl uppercase tracking-wider text-white mt-0.5 break-words"
                    >
                      {selectedTutorial.title}
                    </h2>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedTutorial(null)}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DEFF9A] cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Cerrar modal de tutorial"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Description */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-5 text-sm max-md:text-xs text-white/80 leading-relaxed">
                {selectedTutorial.description}
              </div>
            </div>

            {/* Scrollable Middle: Pasos & Tips (con overscroll-contain) */}
            <div className="overflow-y-auto overscroll-contain custom-scrollbar pr-1 space-y-5 my-2 max-h-[calc(90vh-240px)] max-md:max-h-[calc(92dvh-180px)]">
              {/* Special code display if available (e.g. Código Institucional) */}
              {selectedTutorial.codeId && (
                <div className="p-4 rounded-xl bg-[#DEFF9A]/10 border border-[#DEFF9A]/30 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-mono-tech text-[#DEFF9A] uppercase font-bold tracking-wider">
                      Código Institucional Oficial
                    </div>
                    <div className="text-lg font-mono-tech font-bold text-white tracking-widest mt-0.5">
                      {selectedTutorial.codeId}
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopyCode(selectedTutorial.codeId!)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#DEFF9A] text-black font-semibold text-xs transition-transform active:scale-95 cursor-pointer min-h-[44px]"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? '¡Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
              )}

              {/* Pasos Numerados */}
              <div>
                <h3 className="font-display font-bold text-xs uppercase tracking-[0.18em] text-white/50 mb-3 flex items-center gap-2">
                  <span>PASOS DE IMPLEMENTACIÓN</span>
                </h3>
                <ol className="space-y-2.5">
                  {selectedTutorial.steps.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-sm max-md:text-xs text-white/90"
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#DEFF9A]/15 border border-[#DEFF9A]/30 text-[#DEFF9A] font-mono-tech font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Bloque de Tips */}
              <div className="p-4 rounded-xl bg-amber-400/[0.08] border border-amber-400/30 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                  <span className="font-bold text-amber-300 uppercase font-mono-tech tracking-wider mr-1">
                    TIP ESTRATÉGICO:
                  </span>
                  {selectedTutorial.tip}
                </div>
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="pt-4 mt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 safe-bottom">
              <div className="text-xs font-mono-tech text-white/40 hidden sm:block">
                TECLINGO PRO 1.1 · Campus Pánuco, Ver.
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
                  className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#DEFF9A] hover:bg-[#DEFF9A]/90 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(222,255,154,0.4)] transition-all cursor-pointer min-h-[44px]"
                >
                  <span>Abrir en la App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Temporary Action Toast inside modal */}
            {appActionNotice && (
              <div className="absolute bottom-4 left-6 right-6 p-3 rounded-xl bg-black/90 border border-[#DEFF9A] text-xs font-mono-tech text-[#DEFF9A] flex items-center justify-center gap-2 shadow-2xl animate-fade-in">
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
