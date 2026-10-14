/**
 * TTSService — Text-to-Speech nativo con Web Speech API.
 */

export interface TTSOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  lang?: string;
}

const FEMALE_VOICE_PRIORITY_ES = [
  'Microsoft Dalia Online (Natural) - Spanish (Mexico)',
  'Microsoft Dalia Online (Natural)',
  'Microsoft Sabina Online (Natural) - Spanish (Mexico)',
  'Microsoft Sabina Online (Natural)',
  'Microsoft Monica Online (Natural)',
  'Microsoft Elvira Online (Natural)',
  'Microsoft Helena Online (Natural)',
  'Microsoft Laura Online (Natural)',
  'Google espanol de Estados Unidos',
  'Google espanol',
  'Paulina',
  'Monica',
  'Marisol',
  'Angelica',
];

const FEMALE_VOICE_PRIORITY_EN = [
  'Microsoft Aria Online (Natural)',
  'Microsoft Jenny Online (Natural)',
  'Microsoft Michelle Online (Natural)',
  'Microsoft Ana Online (Natural)',
  'Google US English',
  'Samantha',
  'Karen',
  'Victoria',
];

class TTSService {
  private voice: SpeechSynthesisVoice | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeakingCallback: ((isSpeaking: boolean) => void) | null = null;
  private voicesLoaded = false;

  constructor() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    this.loadVoices();
    window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
  }

  private loadVoices(): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (voices.length === 0) return;
    this.voicesLoaded = true;
    const navLang = (navigator.language || 'es-MX').toLowerCase();
    const isSpanish = navLang.startsWith('es');
    const priorityList = isSpanish ? FEMALE_VOICE_PRIORITY_ES : FEMALE_VOICE_PRIORITY_EN;
    const targetLangPrefix = isSpanish ? 'es' : 'en';

    for (const voiceName of priorityList) {
      const found = voices.find((v) => v.name === voiceName);
      if (found) { this.voice = found; return; }
    }
    for (const voiceName of priorityList) {
      const partial = voiceName.split(' ')[0] + ' ' + (voiceName.split(' ')[1] || '');
      const found = voices.find(
        (v) => v.name.toLowerCase().includes(partial.toLowerCase()) && v.lang.startsWith(targetLangPrefix)
      );
      if (found) { this.voice = found; return; }
    }
    const femaleKeywords = ['female', 'mujer', 'femenina', 'dalia', 'sabina', 'monica', 'paulina', 'helena', 'laura', 'aria', 'jenny', 'samantha', 'victoria'];
    const femaleVoice = voices.find(
      (v) => v.lang.startsWith(targetLangPrefix) && femaleKeywords.some((kw) => v.name.toLowerCase().includes(kw))
    );
    if (femaleVoice) { this.voice = femaleVoice; return; }
    const anyVoice = voices.find((v) => v.lang.startsWith(targetLangPrefix));
    if (anyVoice) { this.voice = anyVoice; return; }
    this.voice = voices[0];
  }

  private sanitizeText(text: string): string {
    return text
      .replace(/API/g, 'A P I')
      .replace(/IA/g, 'I A')
      .replace(/QR/g, 'Q R')
      .replace(/TTS/g, 'T T S')
      .replace(/PDF/g, 'P D F')
      .replace(/JSON/g, 'Jason')
      .replace(/URL/g, 'U R L')
      .replace(/HTML/g, 'H T M L')
      .replace(/CSS/g, 'C S S')
      .replace(/\*\*/g, '')
      .replace(/#/g, '')
      .replace(/\n+/g, '. ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  speak(text: string, options: TTSOptions = {}): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (!this.voicesLoaded) this.loadVoices();
    this.stop();
    const { rate = 0.95, pitch = 1.05, volume = 1.0, lang = this.voice?.lang || 'es-MX' } = options;
    const cleanText = this.sanitizeText(text);
    if (!cleanText) return;
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    utterance.lang = lang;
    if (this.voice) utterance.voice = this.voice;
    utterance.onstart = () => { if (this.isSpeakingCallback) this.isSpeakingCallback(true); };
    utterance.onend = () => {
      this.currentUtterance = null;
      if (this.isSpeakingCallback) this.isSpeakingCallback(false);
    };
    utterance.onerror = () => {
      this.currentUtterance = null;
      if (this.isSpeakingCallback) this.isSpeakingCallback(false);
    };
    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  stop(): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    this.currentUtterance = null;
    if (this.isSpeakingCallback) this.isSpeakingCallback(false);
  }

  pause(): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.pause();
  }

  resume(): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.resume();
  }

  onSpeakingChange(callback: (isSpeaking: boolean) => void): () => void {
    this.isSpeakingCallback = callback;
    return () => { this.isSpeakingCallback = null; };
  }
}

export const ttsService = new TTSService();
