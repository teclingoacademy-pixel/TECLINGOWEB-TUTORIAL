import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronLeft,
  GraduationCap,
  Sparkles,
  Trophy,
  Clock,
  Mic,
  FileCheck2,
  ListOrdered,
  Lightbulb,
  ArrowRight,
  Shield,
  Layers,
  Award,
  BookOpen,
  Volume2,
  FileSpreadsheet,
  Moon,
  Eye,
  Languages,
  PenTool,
  Download,
  MessageCircle,
} from 'lucide-react';
import { TeclingoLogo } from './TeclingoLogo.tsx';

const ACCENT = '#F59E0B';
const ACCENT_RGB = '245,158,11';

const PASOS = [
  { n: 1, title: 'Elige el modo de examen', desc: 'ITP 3-Skills completo, sección individual (Listening, Structure, Reading) o iBT Speaking por tarea.' },
  { n: 2, title: 'Pantalla de instrucciones oficiales', desc: 'Revisa las condiciones temporales, las rúbricas de evaluación y calibra tu micrófono o audífonos.' },
  { n: 3, title: 'Simulacro con timer en vivo', desc: 'Responde contra el reloj oficial de ETS, utiliza banderas de revisión (flags) y navega libremente.' },
  { n: 4, title: 'Algoritmo de cálculo instantáneo', desc: 'Recibe tu puntaje estandarizado al instante: 310-677 para ITP o 0-30 puntos para cada tarea iBT.' },
  { n: 5, title: 'Modo auditoría post-examen', desc: 'Revisa pregunta por pregunta las respuestas correctas con justificación gramatical y semántica.' },
];

const EXTRAS = [
  { icon: Moon, title: 'Modo Oscuro / Claro', desc: 'Optimizado para sesiones prolongadas de estudio con contraste adaptable.' },
  { icon: Eye, title: 'Alto Contraste', desc: 'Tipografía escalable y accesibilidad WCAG AAA para baja visión.' },
  { icon: Languages, title: 'Soporte Bilingüe ES/EN', desc: 'Instrucciones en español para despejar dudas de examen sin penalización.' },
  { icon: Volume2, title: 'TTS con Mute', desc: 'Control de volumen y repetición auditiva para práctica de Listening.' },
  { icon: PenTool, title: 'Bloc de Notas Digital', desc: 'Toma apuntes en tiempo real durante los audios tal como en el examen real.' },
  { icon: Download, title: 'Exportar Reporte HTML', desc: 'Descarga tu boleta de resultados para presentarla en tu escuela o campus.' },
];

const TIPS = [
  { text: 'Realiza al menos 1 simulacro completo por semana para entrenar tu resistencia mental de 115 minutos.' },
  { text: 'Usa el bloc de notas digital para estructurar ideas clave, no para transcribir todo el audio.' },
  { text: 'Analiza cada respuesta fallada en el modo revisión — es ahí donde se desbloquea el salto de B1 a C1.' },
];

interface ToeflTutorialPageProps {
  onBack: () => void;
}

export function ToeflTutorialPage({ onBack }: ToeflTutorialPageProps) {
  const [selectedModule, setSelectedModule] = useState<'itp' | 'ibt'>('itp');

  return (
    <div
      className="min-h-screen w-full text-white overflow-y-auto selection:bg-[#F59E0B] selection:text-[#061a1a]"
      style={{ background: 'linear-gradient(135deg, #061a1a 0%, #0a0f1a 100%)' }}
    >
      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* 1) HEADER (sticky) */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#061a1a]/75 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-4 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-[#F59E0B] hover:border-[#F59E0B]/40 transition-all text-xs font-black uppercase tracking-widest group cursor-pointer"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">← Volver a la Landing</span>
          </button>

          <TeclingoLogo variant="header" />

          <div className="px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_-3px_rgba(245,158,11,0.4)]">
            <Trophy size={12} />
            <span>TOEFL SIMULATOR · HERRAMIENTA ESTRELLA</span>
          </div>
        </div>
      </header>

      {/* 2) HERO CINEMATOGRÁFICO */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 pt-16 sm:pt-24 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Animated Trophy Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full blur-3xl"
                style={{ background: ACCENT }}
              />
              <div className="relative w-28 h-28 rounded-[2.5rem] border-2 border-[#F59E0B]/50 flex items-center justify-center bg-[#F59E0B]/10 shadow-[0_0_50px_rgba(245,158,11,0.3)]">
                <GraduationCap size={56} className="text-[#F59E0B]" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-[10px] font-mono font-bold uppercase tracking-[0.3em]">
              CERTIFICACIÓN PROFESIONAL ETS STANDARDS
            </div>

            <h1
              className="text-5xl sm:text-7xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.95] text-white"
              style={{ textShadow: `0 0 60px rgba(${ACCENT_RGB},0.55)` }}
            >
              TOEFL SIMULATOR
            </h1>

            <p className="text-xl sm:text-3xl font-black text-white/90 uppercase tracking-tight max-w-3xl mx-auto leading-tight">
              Tu pasaporte al mundo: simula el TOEFL ITP y el iBT Speaking como un profesional
            </p>

            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Examen TOEFL completo con temporizador oficial, algoritmos de cálculo de escala real (310-677 ITP / 0-30 iBT),
              sistema de marcado de preguntas (flags), grabadora de voz integrada y exportación para titulación.
            </p>
          </div>

          {/* 3 KPIs */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {[
              { label: '310–677', sub: 'Puntaje Oficial ITP' },
              { label: '0–30', sub: 'Escala iBT Speaking' },
              { label: '8 Secciones', sub: 'Batería Completa' },
            ].map((kpi) => (
              <div
                key={kpi.sub}
                className="px-7 py-4 rounded-2xl bg-white/5 border border-[#F59E0B]/20 backdrop-blur-xl shadow-lg"
              >
                <p className="text-4xl font-black text-[#F59E0B] leading-none">{kpi.label}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mt-1.5">{kpi.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3) SECCIÓN "DOS MÓDULOS, UNA PLATAFORMA" */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-12 sm:py-16">
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setSelectedModule('itp')}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                selectedModule === 'itp'
                  ? 'bg-[#F59E0B] text-black shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Módulo ITP · 3 Skills
            </button>
            <button
              onClick={() => setSelectedModule('ibt')}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                selectedModule === 'ibt'
                  ? 'bg-[#F59E0B] text-black shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Módulo iBT · Speaking
            </button>
          </div>
        </div>

        {/* 4) & 5) TARJETAS DE MÓDULOS */}
        {selectedModule === 'itp' ? (
          <motion.div
            key="itp-card"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 sm:p-12 rounded-[2.5rem] bg-white/[0.03] border-2 border-[#F59E0B]/40 backdrop-blur-xl space-y-6 shadow-[0_0_50px_rgba(245,158,11,0.15)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#F59E0B] text-[10px] font-mono font-bold uppercase tracking-widest">
                  ESTÁNDAR INSTITUCIONAL
                </span>
                <h3 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tight text-white mt-2">
                  TOEFL ITP — 3-SKILLS ASSESSMENT
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-white/40 block">Escala de Calificación</span>
                <span className="text-3xl font-black text-[#F59E0B]">310 – 677 pts</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[#F59E0B] font-mono font-bold text-xs uppercase">Sección 01</div>
                <div className="text-lg font-bold text-white">Listening Comprehension</div>
                <p className="text-xs text-white/50 leading-relaxed">
                  50 preguntas · 35 minutos. Diálogos cortos, conversaciones extensas y conferencias académicas reales con audio HD.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[#F59E0B] font-mono font-bold text-xs uppercase">Sección 02</div>
                <div className="text-lg font-bold text-white">Structure & Written Expression</div>
                <p className="text-xs text-white/50 leading-relaxed">
                  40 preguntas · 25 minutos. Identificación de errores sintácticos, paralelismo y completado gramatical de nivel universitario.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="text-[#F59E0B] font-mono font-bold text-xs uppercase">Sección 03</div>
                <div className="text-lg font-bold text-white">Reading Comprehension</div>
                <p className="text-xs text-white/50 leading-relaxed">
                  50 preguntas · 55 minutos. Artículos científicos, vocabulario en contexto e inferencia semántica con textos auténticos.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/5 text-xs text-white/70 font-mono">
              <span className="text-[#F59E0B]">✓ Timer estricto por sección</span>
              <span>·</span>
              <span className="text-[#F59E0B]">✓ Banderas de revisión (Flag Questions)</span>
              <span>·</span>
              <span className="text-[#F59E0B]">✓ Auditoría post-examen con respuestas razonadas</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="ibt-card"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 sm:p-12 rounded-[2.5rem] bg-white/[0.03] border-2 border-[#F59E0B]/40 backdrop-blur-xl space-y-6 shadow-[0_0_50px_rgba(245,158,11,0.15)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/40 text-[#F59E0B] text-[10px] font-mono font-bold uppercase tracking-widest">
                  EVALUACIÓN ORAL INTERNACIONAL
                </span>
                <h3 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tight text-white mt-2">
                  TOEFL iBT — SPEAKING SIMULATION
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-white/40 block">Escala de Calificación</span>
                <span className="text-3xl font-black text-[#F59E0B]">0 – 30 pts (4 Tareas)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
              {[
                { task: 'Task 1: Independent', time: '15s prep · 45s resp', desc: 'Expresa y defiende una postura personal con fluidez y argumentos convincentes.' },
                { task: 'Task 2: Campus Integrated', time: '30s prep · 60s resp', desc: 'Lectura de aviso universitario + conversación en audio + síntesis oral del conflicto.' },
                { task: 'Task 3: Academic Concept', time: '30s prep · 60s resp', desc: 'Lectura conceptual + cátedra magistral + explicación de ejemplos experimentales.' },
                { task: 'Task 4: Academic Lecture', time: '20s prep · 60s resp', desc: 'Escucha de una lección compleja y síntesis de puntos clave sin soporte de texto.' },
              ].map((t) => (
                <div key={t.task} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="text-[#F59E0B] font-mono text-xs font-bold">{t.task}</div>
                  <div className="text-[11px] font-mono text-white/50">{t.time}</div>
                  <p className="text-xs text-white/70 leading-relaxed pt-1">{t.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/5 text-xs text-white/70 font-mono">
              <span className="text-[#F59E0B]">✓ Grabación de audio en navegador</span>
              <span>·</span>
              <span className="text-[#F59E0B]">✓ Countdown audible de inicio/fin</span>
              <span>·</span>
              <span className="text-[#F59E0B]">✓ Reintentos ilimitados para entrenamiento vocal</span>
            </div>
          </motion.div>
        )}
      </section>

      {/* 6) SECCIÓN "ASÍ FUNCIONA" (5 PASOS) */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-12 sm:py-16">
        <h2 className="text-center text-xs font-black uppercase tracking-[0.4em] text-[#F59E0B]/80 mb-10">
          ▸ Protocolo de Examen en 5 Pasos
        </h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {PASOS.map((p) => (
            <div
              key={p.n}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#F59E0B]/40 transition-all flex items-start gap-5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#F59E0B] font-mono font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                0{p.n}
              </div>
              <div>
                <h3 className="text-white text-base font-black uppercase tracking-tight mb-1">{p.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7) SECCIÓN "EXTRAS INCLUIDOS" */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-12 sm:py-16">
        <h2 className="text-center text-xs font-black uppercase tracking-[0.4em] text-[#F59E0B]/80 mb-10">
          ▸ Entorno Tecnológico y Extras Incluidos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EXTRAS.map((e) => {
            const Icon = e.icon;
            return (
              <div
                key={e.title}
                className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#F59E0B]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-white text-base font-black uppercase tracking-tight mb-2">{e.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{e.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8) SECCIÓN "PARA TODOS LOS PERFILES" */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-12 sm:py-16 text-center">
        <h2 className="text-center text-xs font-black uppercase tracking-[0.4em] text-[#F59E0B]/80 mb-4">
          ▸ Impacto por Rol Institucional
        </h2>
        <p className="text-white/50 text-sm mb-8 max-w-lg mx-auto">
          ¿Cómo interactúa cada actor con el módulo de certificación TOEFL?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { role: '🎓 Estudiante', desc: 'Simulación libre sin límite de intentos para alcanzar el puntaje requerido de titulación.' },
            { role: '👨‍🏫 Docente', desc: 'Asignación de simulacros como examen parcial y visualización de debilidades grupales.' },
            { role: '🛡 Director', desc: 'Reporte oficial de índice de acreditación CACEI y SEP para el campus Pánuco.' },
            { role: '🌐 Invitado', desc: 'Diagnóstico rápido de 15 minutos para calibrar nivel previo a inscripción.' },
          ].map((item) => (
            <div key={item.role} className="p-6 rounded-2xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 text-left">
              <div className="text-[#F59E0B] text-xs font-black uppercase tracking-widest">{item.role}</div>
              <div className="text-white/60 text-xs mt-2 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 9) SECCIÓN "TIPS PRO" */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-center text-xs font-black uppercase tracking-[0.4em] text-[#F59E0B]/80 mb-8">
          ▸ Estrategias de Alto Rendimiento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIPS.map((tip, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#F59E0B]/5 border border-[#F59E0B]/20 flex items-start gap-4 shadow-sm"
            >
              <Lightbulb size={22} className="text-[#F59E0B] shrink-0 mt-0.5" />
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10) CTA FINAL GRANDE */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-10 sm:p-16 rounded-[3rem] border-2 border-[#F59E0B]/50 overflow-hidden text-center shadow-[0_0_60px_rgba(245,158,11,0.25)]"
          style={{
            background: `linear-gradient(135deg, rgba(${ACCENT_RGB},0.15), rgba(251,191,36,0.08), rgba(6,26,26,0.95))`,
          }}
        >
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] opacity-40 pointer-events-none"
            style={{ background: ACCENT }}
          />
          <div className="relative z-10 space-y-6">
            <Trophy size={40} className="text-[#F59E0B] mx-auto opacity-90" />
            <h3 className="text-3xl sm:text-5xl font-black uppercase italic tracking-tighter text-white leading-tight">
              ¿Listo para certificarte?
            </h3>
            <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto">
              Simula con rigor, conoce tus puntos débiles hoy y asegura tu puntaje para tu titulación y movilidad global.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={onBack}
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-[#F59E0B] text-[#061a1a] text-xs font-black uppercase tracking-widest shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:scale-105 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                Explorar en la Plataforma <ArrowRight size={16} />
              </button>
              <button
                onClick={onBack}
                className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white/70 text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all cursor-pointer"
              >
                Volver a la Selección
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 11) FOOTER */}
      <footer className="relative z-10 border-t border-white/5 bg-[#0a0f1a]/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-12 max-lg:px-8 max-md:px-4 py-6 max-md:py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest text-center sm:text-left">
            © 2026 CONCEPTOS AI · PÁNUCO, VERACRUZ
          </p>
          <a
            href="https://wa.me/528461108789?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20TOEFL%20Simulator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all text-[11px] font-black tracking-wider min-h-[44px]"
          >
            <MessageCircle size={14} />
            <span>+52 846 110 8789</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
