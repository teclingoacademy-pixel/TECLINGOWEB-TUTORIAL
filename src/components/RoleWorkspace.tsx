import React, { useState } from 'react';
import { TeclingoLogo } from './TeclingoLogo.tsx';
import {
  Shield,
  GraduationCap,
  BookOpen,
  Globe,
  ArrowLeft,
  Volume2,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  Layers,
  FileSpreadsheet,
  Send,
  MessageSquare,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';

export type UserRole = 'DIRECTOR' | 'DOCENTE' | 'ESTUDIANTE' | 'GLOBAL';

interface RoleWorkspaceProps {
  role: UserRole;
  onBack: () => void;
}

export const RoleWorkspace: React.FC<RoleWorkspaceProps> = ({ role, onBack }) => {
  // Estudiante interactive state
  const [selectedTopic, setSelectedTopic] = useState('Conversación de Negocios');
  const [studentScore, setStudentScore] = useState(88);
  const [practiceInput, setPracticeInput] = useState('');
  const [conversationHistory, setConversationHistory] = useState<Array<{ role: 'ai' | 'user'; text: string; feedback?: string }>>([
    {
      role: 'ai',
      text: 'Good morning! Could you introduce your project in Panuco, Veracruz, and tell me how English skills accelerate your engineering career?',
    },
  ]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Docente interactive state
  const [lessonTopic, setLessonTopic] = useState('Entrevistas Técnicas en Inglés');
  const [targetLevel, setTargetLevel] = useState('B2 (Intermedio Alto)');
  const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Text-to-speech helper
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.95;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleStudentSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!practiceInput.trim()) return;

    const userInput = practiceInput.trim();
    setPracticeInput('');

    // Generate responsive tutor feedback
    const newItems = [...conversationHistory, { role: 'user' as const, text: userInput }];
    setConversationHistory(newItems);

    setTimeout(() => {
      const responses = [
        {
          text: "Excellent phrasing! Notice that in corporate meetings, you can also say 'Our strategic objective is...' for higher diplomatic impact.",
          feedback: 'Fluidez: 95% · Gramática precisa · Vocabulario profesional',
        },
        {
          text: 'Great confidence! Your pronunciation rhythm is improving. Remember to stress the first syllable in "management".',
          feedback: 'Fluidez: 91% · Pronunciación: Nativa adaptativa',
        },
      ];
      const reply = responses[Math.floor(Math.random() * responses.length)];
      setConversationHistory((prev) => [...prev, { role: 'ai', text: reply.text, feedback: reply.feedback }]);
      setStudentScore((prev) => Math.min(100, prev + 2));
    }, 600);
  };

  const handleGenerateLesson = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedPlan(`### Secuencia Didáctica con IA: ${lessonTopic}
Nivel: ${targetLevel} · Duración: 50 minutos

1. Warm-up (10 min): Dinámica de simulación situacional con prompts vocales contextualizados en Pánuco.
2. Focus Vocabulary (15 min): Expresiones clave de negociación y mitigación lingüística en entornos globales.
3. Interactive AI Roleplay (15 min): Interacción en pares con el simulador de TECLINGO.
4. Rubric Assessment (10 min): Evaluación instantánea por IA de fluidez y rango léxico.`);
      setIsGenerating(false);
    }, 800);
  };

  // Color config based on prompt
  const roleConfig = {
    DIRECTOR: {
      title: 'Portal de Dirección Estratégica',
      tagline: 'Visión estratégica, gestión total.',
      color: '#DEFF9A',
      icon: Shield,
      borderColor: 'border-[#DEFF9A]/30',
      badgeBg: 'bg-[#DEFF9A]/10 text-[#DEFF9A]',
    },
    DOCENTE: {
      title: 'Portal Académico Docente',
      tagline: 'Enseña, planea y evalúa con IA.',
      color: '#4ADE80',
      icon: GraduationCap,
      borderColor: 'border-[#4ADE80]/30',
      badgeBg: 'bg-[#4ADE80]/10 text-[#4ADE80]',
    },
    ESTUDIANTE: {
      title: 'Entorno de Aprendizaje del Estudiante',
      tagline: 'Aprende a tu ritmo, sin miedo.',
      color: '#22D3EE',
      icon: BookOpen,
      borderColor: 'border-[#22D3EE]/30',
      badgeBg: 'bg-[#22D3EE]/10 text-[#22D3EE]',
    },
    GLOBAL: {
      title: 'Acceso Global al Ecosistema',
      tagline: 'Acceso general al ecosistema.',
      color: '#E5E7EB',
      icon: Globe,
      borderColor: 'border-[#E5E7EB]/30',
      badgeBg: 'bg-white/10 text-[#F8FAFC]',
    },
  }[role];

  const RoleIcon = roleConfig.icon;

  return (
    <div className="min-h-screen bg-radial-dark bg-tech-grid flex flex-col text-[#F8FAFC]">
      {/* Top Workspace Header */}
      <header className="neo-glass-header sticky top-0 z-40 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono-tech uppercase text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            title="Volver a selección de perfil"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Cambiar Perfil</span>
          </button>
          <TeclingoLogo variant="header" />
        </div>

        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech font-semibold tracking-wider ${roleConfig.badgeBg} border ${roleConfig.borderColor}`}>
            <RoleIcon className="w-3.5 h-3.5" />
            <span>PERFIL: {role}</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 md:p-8">
        {/* Banner with role greeting */}
        <div className="neo-glass rounded-2xl p-6 sm:p-8 mb-6 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: roleConfig.color }}
          />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-white/50 uppercase tracking-[0.2em] mb-1">
                <span>CONCEPTOS AI M PANUCO VER. 2026</span>
                <span>·</span>
                <span style={{ color: roleConfig.color }}>MODO ACTIVO</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-white flex items-center gap-3">
                <span>{roleConfig.title}</span>
              </h1>
              <p className="text-white/60 text-sm sm:text-base mt-1 italic font-medium">
                "{roleConfig.tagline}"
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/528461108789?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20TECLINGO%20PRO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] transition-all"
              >
                <span>Soporte Directo Pánuco</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ROLE 1: DIRECTOR VIEW */}
        {role === 'DIRECTOR' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="neo-glass p-5 rounded-2xl border border-white/10">
                <div className="text-xs font-mono-tech text-white/40 uppercase tracking-wider">Matrícula Activa</div>
                <div className="text-3xl font-bold font-display text-white mt-1 tabular-nums">1,248</div>
                <div className="text-xs text-[#DEFF9A] mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> +18.4% vs ciclo anterior
                </div>
              </div>
              <div className="neo-glass p-5 rounded-2xl border border-white/10">
                <div className="text-xs font-mono-tech text-white/40 uppercase tracking-wider">Índice Fluidez IA</div>
                <div className="text-3xl font-bold font-display text-[#DEFF9A] mt-1 tabular-nums">89.6%</div>
                <div className="text-xs text-white/50 mt-2">Medición estándar MCER B2</div>
              </div>
              <div className="neo-glass p-5 rounded-2xl border border-white/10">
                <div className="text-xs font-mono-tech text-white/40 uppercase tracking-wider">Horas de Práctica Oral</div>
                <div className="text-3xl font-bold font-display text-white mt-1 tabular-nums">14,320h</div>
                <div className="text-xs text-[#DEFF9A] mt-2">Campus Pánuco Veracruz</div>
              </div>
              <div className="neo-glass p-5 rounded-2xl border border-white/10">
                <div className="text-xs font-mono-tech text-white/40 uppercase tracking-wider">Docentes Capacitados</div>
                <div className="text-3xl font-bold font-display text-white mt-1 tabular-nums">34 / 34</div>
                <div className="text-xs text-[#DEFF9A] mt-2">100% certificación IA 2026</div>
              </div>
            </div>

            {/* Strategic Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 neo-glass p-6 rounded-2xl border border-white/10">
                <h2 className="text-lg font-bold font-display text-white mb-4 flex items-center justify-between">
                  <span>Rendimiento por Carreras y Cohortes</span>
                  <span className="text-xs font-mono-tech text-[#DEFF9A]">EN TIEMPO REAL</span>
                </h2>
                <div className="space-y-4">
                  {[
                    { carrera: 'Ingeniería en Sistemas Computacionales', nivel: '88% B2-C1', barra: 'w-[88%]', alum: '420 alumnos' },
                    { carrera: 'Ingeniería Industrial & Logística', nivel: '84% B1-B2', barra: 'w-[84%]', alum: '380 alumnos' },
                    { carrera: 'Ingeniería Electromecánica', nivel: '79% B1', barra: 'w-[79%]', alum: '260 alumnos' },
                    { carrera: 'Gestión Empresarial Internacional', nivel: '92% B2-C1', barra: 'w-[92%]', alum: '188 alumnos' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <div className="flex justify-between items-center text-sm mb-1.5">
                        <span className="font-semibold text-white/90">{item.carrera}</span>
                        <span className="font-mono-tech text-xs text-[#DEFF9A] font-bold">{item.nivel}</span>
                      </div>
                      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-[#4ADE80] to-[#DEFF9A] ${item.barra}`} />
                      </div>
                      <div className="flex justify-between items-center text-[11px] text-white/40 mt-1.5 font-mono-tech">
                        <span>Pánuco, Ver.</span>
                        <span>{item.alum}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="neo-glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold font-display text-white mb-2">Herramientas de Control</h2>
                  <p className="text-xs text-white/50 mb-4 leading-relaxed">
                    Emisión de reportes institucionales, auditoría de métricas para acreditaciones CACEI y SEP 2026.
                  </p>
                  <div className="space-y-2.5">
                    <button
                      onClick={() => alert('Generando informe ejecutivo oficial TECLINGO 2026 (PDF institucional)...')}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white text-left transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <FileSpreadsheet className="w-4 h-4 text-[#DEFF9A]" />
                        Exportar Reporte Ejecutivo PDF
                      </span>
                      <span className="font-mono-tech text-[10px] text-white/40">2026.Q4</span>
                    </button>
                    <button
                      onClick={() => alert('Actualizando panel de licencias institucionales para Campus Pánuco...')}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white text-left transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#22D3EE]" />
                        Auditoría de Licencias y Accesos
                      </span>
                      <span className="font-mono-tech text-[10px] text-[#22D3EE]">ACTIVO</span>
                    </button>
                    <button
                      onClick={() => alert('Sincronizando banco de rúbricas con lineamientos académicos oficiales...')}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white text-left transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-[#4ADE80]" />
                        Validación de Certificaciones
                      </span>
                      <span className="font-mono-tech text-[10px] text-[#4ADE80]">VALIDADO</span>
                    </button>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[#DEFF9A]/5 border border-[#DEFF9A]/20">
                  <div className="text-xs font-bold text-[#DEFF9A] mb-1">Contacto Directo con Dirección General</div>
                  <div className="text-[11px] text-white/60">
                    Soporte prioritario disponible al <strong>+52 846 110 8789</strong>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ROLE 2: DOCENTE VIEW */}
        {role === 'DOCENTE' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="neo-glass p-6 rounded-2xl border border-white/10">
                <h2 className="text-lg font-bold font-display text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#4ADE80]" />
                  <span>Generador de Planes de Clase con IA</span>
                </h2>
                <p className="text-xs text-white/50 mb-4">
                  Crea secuencias didácticas basadas en el método comunicativo adaptadas a estudiantes técnicos de Veracruz.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-mono-tech text-white/60 uppercase mb-1">
                      Tema de la Sesión
                    </label>
                    <input
                      type="text"
                      value={lessonTopic}
                      onChange={(e) => setLessonTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#4ADE80]"
                      placeholder="Ej. Presentaciones de Ingeniería..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech text-white/60 uppercase mb-1">
                      Nivel Objetivo (MCER)
                    </label>
                    <select
                      value={targetLevel}
                      onChange={(e) => setTargetLevel(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-[#4ADE80]"
                    >
                      <option value="A1 (Principiante)">A1 (Principiante sin miedo)</option>
                      <option value="A2 (Básico Operativo)">A2 (Básico Operativo)</option>
                      <option value="B1 (Intermedio Técnico)">B1 (Intermedio Técnico)</option>
                      <option value="B2 (Intermedio Alto)">B2 (Intermedio Alto)</option>
                      <option value="C1 (Avanzado Ejecutivo)">C1 (Avanzado Ejecutivo)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleGenerateLesson}
                  disabled={isGenerating}
                  className="px-5 py-2.5 rounded-xl bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4" />
                  {isGenerating ? 'Generando Estrategia IA...' : 'Generar Secuencia Didáctica'}
                </button>

                {generatedPlan && (
                  <div className="mt-5 p-4 rounded-xl bg-black/50 border border-[#4ADE80]/40 font-mono-tech text-xs text-white/80 whitespace-pre-line leading-relaxed">
                    {generatedPlan}
                  </div>
                )}
              </div>

              {/* Grupos Asignados */}
              <div className="neo-glass p-6 rounded-2xl border border-white/10">
                <h3 className="text-base font-bold font-display text-white mb-3">Grupos Activos Campus Pánuco</h3>
                <div className="space-y-3">
                  {[
                    { id: 'PAN-201', nombre: 'Inglés Técnico IV - Sistemas', horas: 'Lun-Mié 09:00', alumnos: '28 alumnos', estado: 'Evaluación IA en curso' },
                    { id: 'PAN-305', nombre: 'Conversación Profesional - Industrial', horas: 'Mar-Jue 11:00', alumnos: '32 alumnos', estado: 'Práctica activa' },
                  ].map((grp) => (
                    <div key={grp.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono-tech text-xs text-[#4ADE80] font-bold">{grp.id}</span>
                          <span className="text-sm font-semibold text-white">{grp.nombre}</span>
                        </div>
                        <div className="text-xs text-white/40 mt-1">{grp.horas} · {grp.alumnos}</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-tech bg-[#4ADE80]/10 text-[#4ADE80] border border-[#4ADE80]/20">
                        {grp.estado}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rubrics & Tips */}
            <div className="space-y-6">
              <div className="neo-glass p-6 rounded-2xl border border-white/10">
                <h3 className="text-base font-bold font-display text-white mb-3">Rúbrica IA de Fluidez Oral</h3>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="font-semibold text-[#4ADE80] mb-0.5">1. Precisión Fonética (40%)</div>
                    <div className="text-white/60">Monitoreo de enlaces consonanticos y acentuación en verbos irregulares.</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="font-semibold text-[#4ADE80] mb-0.5">2. Rango Léxico Contextual (30%)</div>
                    <div className="text-white/60">Uso de terminología técnica en ingeniería y negocios.</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5">
                    <div className="font-semibold text-[#4ADE80] mb-0.5">3. Espontaneidad y Ritmo (30%)</div>
                    <div className="text-white/60">Tiempo de respuesta bajo 1.8 segundos sin pausas vacilantes.</div>
                  </div>
                </div>
              </div>

              <div className="neo-glass p-6 rounded-2xl border border-white/10">
                <div className="text-xs font-mono-tech text-white/40 uppercase mb-2">Asistente Docente TECLINGO</div>
                <p className="text-xs text-white/70 leading-relaxed mb-3">
                  ¿Necesitas cargar un temario personalizado para tu materia de ingeniería en Pánuco?
                </p>
                <a
                  href="https://wa.me/528461108789?text=Hola%20profesor%2C%20solicito%20asistencia%20docente%20TECLINGO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#4ADE80] hover:underline"
                >
                  Contactar soporte docente vía WhatsApp →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ROLE 3: ESTUDIANTE VIEW */}
        {role === 'ESTUDIANTE' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Cols: Interactive English Simulator */}
            <div className="lg:col-span-2 space-y-6">
              <div className="neo-glass p-6 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-bold font-display text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#22D3EE]" />
                      <span>Simulador Conversacional con IA</span>
                    </h2>
                    <p className="text-xs text-white/50">Habla y escribe en inglés sin miedo al error. Tu tutor IA te retroalimenta al instante.</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#22D3EE]/10 border border-[#22D3EE]/30 px-3 py-1 rounded-full text-xs font-mono-tech text-[#22D3EE]">
                    <span>Score: {studentScore}%</span>
                  </div>
                </div>

                {/* Conversation Box */}
                <div className="h-64 overflow-y-auto space-y-3.5 p-4 rounded-xl bg-black/40 border border-white/5 mb-4">
                  {conversationHistory.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-[#22D3EE]/20 border border-[#22D3EE]/30 text-white rounded-br-xs'
                            : 'bg-white/10 border border-white/10 text-white/95 rounded-bl-xs'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <span>{msg.text}</span>
                          {msg.role === 'ai' && (
                            <button
                              onClick={() => speakText(msg.text)}
                              className="shrink-0 p-1 rounded-md hover:bg-white/10 text-[#22D3EE]"
                              title="Escuchar pronunciación nativa"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                      {msg.feedback && (
                        <div className="text-[11px] font-mono-tech text-[#DEFF9A] mt-1 px-1">
                          ✓ {msg.feedback}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Message input */}
                <form onSubmit={handleStudentSend} className="flex gap-2">
                  <input
                    type="text"
                    value={practiceInput}
                    onChange={(e) => setPracticeInput(e.target.value)}
                    placeholder="Responde en inglés aquí (ej: 'I am studying engineering at Panuco...')"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#22D3EE]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-[#22D3EE] hover:bg-[#22D3EE]/90 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all"
                  >
                    <span>Enviar</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

                {/* Quick Prompts */}
                <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-white/5">
                  <span className="text-[11px] font-mono-tech text-white/40">Sugerencias rápidas:</span>
                  {[
                    "I want to prepare for a remote tech interview.",
                    "How do I explain my engineering thesis in English?",
                    "Let's practice everyday conversation.",
                  ].map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => setPracticeInput(prompt)}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/5 transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technical Vocabulary Deck */}
              <div className="neo-glass p-6 rounded-2xl border border-white/10">
                <h3 className="text-base font-bold font-display text-white mb-3 flex items-center justify-between">
                  <span>Vocabulario Clave para Profesionales</span>
                  <span className="text-xs font-mono-tech text-[#22D3EE]">TECLINGO CARDS</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { en: 'Troubleshoot', es: 'Diagnosticar / Resolver fallos', ex: 'We must troubleshoot the database query.' },
                    { en: 'Benchmark', es: 'Punto de referencia / Comparativa', ex: 'Our latency benchmark improved by 40%.' },
                    { en: 'Scalability', es: 'Capacidad de escala', ex: 'Cloud scalability allows rapid deployment.' },
                  ].map((card, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[#22D3EE] text-sm">{card.en}</span>
                          <button
                            onClick={() => speakText(card.en + '. ' + card.ex)}
                            className="p-1 hover:text-[#DEFF9A]"
                            title="Escuchar"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-xs text-white/50 mt-1">{card.es}</div>
                      </div>
                      <div className="text-[11px] text-white/70 italic mt-2.5 pt-2 border-t border-white/5">
                        "{card.ex}"
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Student Progress & Motivation */}
            <div className="space-y-6">
              <div className="neo-glass p-6 rounded-2xl border border-white/10">
                <div className="text-xs font-mono-tech text-white/40 uppercase tracking-wider">Tu Racha de Aprendizaje</div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-black font-display text-[#DEFF9A]">14</span>
                  <span className="text-sm font-semibold text-white/70">días consecutivos 🔥</span>
                </div>
                <p className="text-xs text-white/50 mt-2">
                  ¡Excelente consistencia! Estás en el top 5% de estudiantes de Pánuco Veracruz.
                </p>

                <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/60">Meta Diaria (15 min)</span>
                    <span className="text-[#DEFF9A] font-semibold">12 / 15 min</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#DEFF9A] w-[80%]" />
                  </div>
                </div>
              </div>

              <div className="neo-glass p-6 rounded-2xl border border-white/10">
                <h3 className="text-base font-bold font-display text-white mb-2">Certificación TECLINGO</h3>
                <p className="text-xs text-white/60 mb-4">
                  Al completar 40 horas de conversación guiada con IA obtendrás la credencial con validez internacional.
                </p>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3">
                  <Award className="w-8 h-8 text-[#DEFF9A] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Nivel Alcanzado: B2 Profesional</div>
                    <div className="text-[11px] text-white/40">Campus Pánuco · 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ROLE 4: GLOBAL VIEW */}
        {role === 'GLOBAL' && (
          <div className="space-y-6">
            <div className="neo-glass p-8 rounded-2xl border border-white/10 text-center max-w-3xl mx-auto">
              <div className="inline-flex p-3 rounded-full bg-white/5 border border-white/10 mb-4">
                <Globe className="w-8 h-8 text-[#E5E7EB]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-black uppercase text-white mb-3">
                Bienvenido al Ecosistema Abierto TECLINGO
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
                TECLINGO combina modelos neuronales de lenguaje adaptados con pedagogía inmersiva para llevar el dominio del inglés técnico a la comunidad de Pánuco y el norte de Veracruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs font-mono-tech text-[#DEFF9A] font-bold uppercase mb-1">Pilar 01</div>
                  <div className="text-sm font-semibold text-white mb-1">Sin Miedo a Hablar</div>
                  <div className="text-xs text-white/50">Práctica oral ilimitada 24/7 con IA sin juzgarte ni presionarte.</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs font-mono-tech text-[#4ADE80] font-bold uppercase mb-1">Pilar 02</div>
                  <div className="text-sm font-semibold text-white mb-1">Enfoque de Ingeniería</div>
                  <div className="text-xs text-white/50">Vocabulario y casos aplicados a proyectos tecnológicos reales.</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-xs font-mono-tech text-[#22D3EE] font-bold uppercase mb-1">Pilar 03</div>
                  <div className="text-sm font-semibold text-white mb-1">Métricas Claras</div>
                  <div className="text-xs text-white/50">Seguimiento institucional transparente para escuelas y empresas.</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/528461108789?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20TECLINGO%20PRO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                >
                  <span>Solicitar Demostración Institucional</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={onBack}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-colors"
                >
                  Volver a Elegir Perfil
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer minimal within role workspace */}
      <footer className="neo-glass-footer py-4 px-6 text-center text-xs font-mono-tech text-white/40 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>© 2026 CONCEPTOS AI · PÁNUCO, VERACRUZ</span>
        <span>TECLINGO · inglés.com · Contacto: +52 846 110 8789</span>
      </footer>
    </div>
  );
};
