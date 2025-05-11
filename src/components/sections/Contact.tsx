'use client'

import { useState } from 'react'
import { 
  Send, 
  Mail, 
  MessageCircle, 
  Github, 
  Twitter,
  Briefcase,
  Globe,
  Clock,
  BrainCircuit,
  Sparkles,
  Calculator,
  CheckCircle,
  Zap
} from 'lucide-react'

// Componente personalizzato per l'icona LinkedIn
const LinkedInIcon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className || ""}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
};

const Contact = () => {
  // Stati per la gestione del form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    aiInterest: false, // NEW: interesse per AI
    estimatedTimeline: '' // NEW: timeline stimata
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Stato per il calculator - NEW
  const [showCalculator, setShowCalculator] = useState(false);
  const [projectScope, setProjectScope] = useState('medium');
  
  // Gestione della modifica degli input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  // Gestione dell'invio del form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Qui inserire la logica per l'invio del form (API call, email service, ecc.)
      // Per ora simuliamo un ritardo e un successo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulazione di successo
      setSubmitStatus('success');
      // Reset del form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        aiInterest: false,
        estimatedTimeline: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset dello stato dopo alcuni secondi
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  // Calculator function - NEW
  const calculateTimeSaving = () => {
    const timeSavings = {
      small: { traditional: 6, ai: 2, saving: 4 },
      medium: { traditional: 12, ai: 4, saving: 8 },
      large: { traditional: 24, ai: 8, saving: 16 }
    };
    return timeSavings[projectScope as keyof typeof timeSavings];
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium">
              Contatti
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hai un progetto <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AI-enhanced</span> in mente?
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Specializzato in sviluppo potenziato dall'AI, sono pronto a trasformare la tua idea in realtà con tempi ridotti e qualità superiore.
            </p>
          </div>

          {/* Time Saving Calculator - NEW */}
          <div className="mb-16 rounded-2xl border border-blue-600/30 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-lg p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-400" />
                  Calcola il tuo risparmio di tempo
                </h3>
                <p className="text-neutral-400">Scopri quanto tempo puoi risparmiare con lo sviluppo AI-enhanced</p>
              </div>
              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/30 hover:bg-blue-600/30 transition-all"
              >
                {showCalculator ? 'Chiudi' : 'Calcola'}
              </button>
            </div>
            
            {showCalculator && (
              <div className="border-t border-neutral-700 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <button
                    onClick={() => setProjectScope('small')}
                    className={`p-4 rounded-lg border transition-all ${
                      projectScope === 'small' 
                        ? 'border-blue-500 bg-blue-900/20' 
                        : 'border-neutral-700 bg-neutral-800/50'
                    }`}
                  >
                    <h4 className="font-bold text-white">Progetto Piccolo</h4>
                    <p className="text-sm text-neutral-400">Landing page, sito vetrina</p>
                  </button>
                  <button
                    onClick={() => setProjectScope('medium')}
                    className={`p-4 rounded-lg border transition-all ${
                      projectScope === 'medium' 
                        ? 'border-blue-500 bg-blue-900/20' 
                        : 'border-neutral-700 bg-neutral-800/50'
                    }`}
                  >
                    <h4 className="font-bold text-white">Progetto Medio</h4>
                    <p className="text-sm text-neutral-400">Sito aziendale, e-commerce</p>
                  </button>
                  <button
                    onClick={() => setProjectScope('large')}
                    className={`p-4 rounded-lg border transition-all ${
                      projectScope === 'large' 
                        ? 'border-blue-500 bg-blue-900/20' 
                        : 'border-neutral-700 bg-neutral-800/50'
                    }`}
                  >
                    <h4 className="font-bold text-white">Progetto Grande</h4>
                    <p className="text-sm text-neutral-400">Applicazione web complessa</p>
                  </button>
                </div>
                
                <div className="bg-neutral-900/50 rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-neutral-400 text-sm">Sviluppo Tradizionale</p>
                    <p className="text-2xl font-bold text-white">{calculateTimeSaving().traditional} settimane</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">Sviluppo AI-Enhanced</p>
                    <p className="text-2xl font-bold text-green-400">{calculateTimeSaving().ai} settimane</p>
                  </div>
                  <div>
                    <p className="text-neutral-400 text-sm">Tempo Risparmiato</p>
                    <p className="text-2xl font-bold text-blue-400">-{calculateTimeSaving().saving} settimane</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Sezione "Modalità di collaborazione" - AGGIORNATA */}
          <div className="mb-16 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/90 to-neutral-900/70 backdrop-blur-lg p-8 shadow-lg transform hover:scale-[1.01] transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                Collaborazione AI-Enhanced
              </h3>
              <p className="text-neutral-400">Progetti AI specializzati - Freelance o Full Remote</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Freelance AI */}
              <div className="relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/30 group-hover:opacity-100 opacity-70 transition-all duration-300"></div>
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white mb-4 mx-auto shadow-lg">
                    <BrainCircuit size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white text-center mb-3">Progetti AI Specializzati</h4>
                  <p className="text-center text-neutral-300">Sviluppo accelerato con funzionalità AI native</p>
                </div>
              </div>
              
              {/* Full Remote */}
              <div className="relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-teal-800/30 group-hover:opacity-100 opacity-70 transition-all duration-300"></div>
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-teal-600 text-white mb-4 mx-auto shadow-lg">
                    <Zap size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white text-center mb-3">Sviluppo Accelerato</h4>
                  <p className="text-center text-neutral-300">3x più veloce senza compromessi sulla qualità</p>
                </div>
              </div>
              
              {/* Team AI */}
              <div className="relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/30 group-hover:opacity-100 opacity-70 transition-all duration-300"></div>
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-purple-600 text-white mb-4 mx-auto shadow-lg">
                    <Sparkles size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white text-center mb-3">Innovazione AI</h4>
                  <p className="text-center text-neutral-300">Funzionalità smart che differenziano il tuo prodotto</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid con Informazioni di contatto e Form */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info di contatto - AGGIORNATA */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-sm p-6 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Informazioni di contatto</h3>
                
                {/* AI Specialist Badge - NEW */}
                <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-900/40 to-teal-900/40 border border-green-500/30">
                  <BrainCircuit className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-medium">Certified AI Specialist</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-900/30 text-blue-400">
                      <Mail size={20} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-neutral-500">Email</div>
                      <a href="mailto:contact@antoninodavi.com" className="text-white hover:text-blue-400 transition-colors">
                        contact@antoninodavi.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-purple-900/30 text-purple-400">
                      <MessageCircle size={20} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-neutral-500">WhatsApp / Telegram</div>
                      <p className="text-white">+39 XXX XXX XXXX</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-lg font-medium mb-4">Seguimi sui social</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/antoninodavi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-blue-900/30 hover:text-blue-400 transition-all"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon size={20} />
                    </a>
                    <a 
                      href="https://github.com/antoninodavi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://twitter.com/antoninodavi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-blue-600/30 hover:text-blue-400 transition-all"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form di contatto - AGGIORNATO */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-sm p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Inviami un messaggio
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="La tua email"
                      />
                    </div>
                  </div>
                  
                  {/* AI Interest Checkbox - NEW */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="aiInterest"
                      name="aiInterest"
                      checked={formData.aiInterest}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-neutral-800 border-neutral-700 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="aiInterest" className="ml-2 text-sm text-neutral-300">
                      Sono interessato/a a progetti <span className="text-blue-400 font-medium">AI-enhanced</span> con sviluppo accelerato
                    </label>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-400 mb-2">
                      Tipo di progetto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="" disabled>Seleziona il tipo di progetto</option>
                      <option value="ai-enhanced">🚀 Progetto AI-Enhanced</option>
                      <option value="website">🌐 Sito Web</option>
                      <option value="webapp">📱 Applicazione Web</option>
                      <option value="ai-integration">🧠 Integrazione AI</option>
                      <option value="consultation">💬 Consulenza</option>
                      <option value="other">📦 Altro</option>
                    </select>
                  </div>
                  
                  {/* Timeline Estimator - NEW */}
                  <div>
                    <label htmlFor="estimatedTimeline" className="block text-sm font-medium text-neutral-400 mb-2">
                      Timeline desiderata
                    </label>
                    <select
                      id="estimatedTimeline"
                      name="estimatedTimeline"
                      value={formData.estimatedTimeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Seleziona una timeline</option>
                      <option value="urgent">⚡ Urgente (1-2 settimane)</option>
                      <option value="fast">🚀 Veloce (2-4 settimane)</option>
                      <option value="standard">📅 Standard (1-2 mesi)</option>
                      <option value="flexible">🔄 Flessibile</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
                      Messaggio
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Descrivi il tuo progetto e come l'AI potrebbe accelerarlo..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 rounded-lg font-medium flex items-center justify-center transition-all ${
                        isSubmitting
                          ? 'bg-neutral-700 cursor-not-allowed text-neutral-400'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Invio in corso...
                        </>
                      ) : (
                        <>
                          Inizia il tuo progetto AI
                          <Send className="ml-2" size={18} />
                        </>
                      )}
                    </button>
                    
                    {/* Messaggi di stato */}
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-3 bg-green-900/20 border border-green-600/30 text-green-400 rounded-lg text-sm">
                        Messaggio inviato con successo! Discuteremo di come l'AI può accelerare il tuo progetto.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="mt-4 p-3 bg-red-900/20 border border-red-600/30 text-red-400 rounded-lg text-sm">
                        Si è verificato un errore. Per favore, riprova più tardi o contattami direttamente via email.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* LinkedIn CTA ottimizzata con maggiore stacco visivo */}
          <div className="mt-20 rounded-2xl border border-blue-600/30 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-md p-10 shadow-lg relative overflow-hidden">
            {/* Elementi decorativi di sfondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Scopri il portfolio AI
              </h3>
              <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                Vuoi vedere esempi concreti di progetti completati con il mio approccio AI-enhanced?
              </p>
              <a 
                href="https://linkedin.com/in/antonino-davi" 
                target="_blank" 
                rel="nofollow noopener"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-bold hover:from-blue-500 hover:to-purple-500 transition-all shadow-xl hover:shadow-blue-700/20 group"
              >
                <LinkedInIcon className="mr-3 text-blue-300 group-hover:text-white transition-colors" size={24} />
                Visualizza Portfolio AI
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;