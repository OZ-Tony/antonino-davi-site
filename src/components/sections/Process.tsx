'use client'

import {
  Lightbulb,
  Search,
  Code,
  FileCode,
  Radar,
  Zap,
  Sparkles,
  Rocket,
  ArrowRight,
  BrainCircuit,
  Clock,
  Bot,
  Eye,
  Wrench
} from 'lucide-react'

// Definizione del tipo per una fase del processo
type ProcessStep = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  aiEnhanced?: boolean; // NEW: indica se la fase è potenziata dall'AI
  aiMetric?: string; // NEW: metrica di miglioramento AI
  aiTools?: string[]; // NEW: tool AI usati in questa fase
};

const Process = () => {
  // Array delle fasi del processo - AGGIORNATO con info AI
  const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: 'Scoperta e Analisi',
      description: 'Comprensione approfondita dei tuoi obiettivi, utenti e contesto di business.',
      icon: <Search size={24} />,
      color: 'from-blue-600 to-blue-400',
      aiEnhanced: true,
      aiMetric: '60% più veloce',
      aiTools: ['Claude Analysis', 'Perplexity Research']
    },
    {
      number: 2,
      title: 'Concept e Strategia',
      description: 'Elaborazione di una strategia ottimale e definizione dell\'architettura più adatta.',
      icon: <Lightbulb size={24} />,
      color: 'from-blue-400 to-teal-500',
      aiEnhanced: true,
      aiMetric: '2x più ideazioni',
      aiTools: ['ChatGPT-4', 'Custom AI Models']
    },
    {
      number: 3,
      title: 'Design AI-Enhanced',
      description: 'Progettazione dell\'esperienza utente e dell\'interfaccia con supporto AI.',
      icon: <Sparkles size={24} />,
      color: 'from-teal-500 to-green-500',
      aiEnhanced: true,
      aiMetric: '3x più varianti',
      aiTools: ['Midjourney', 'Figma AI', 'Framer']
    },
    {
      number: 4,
      title: 'Sviluppo Agile',
      description: 'Implementazione iterativa con cicli di feedback continui per massima flessibilità.',
      icon: <Code size={24} />,
      color: 'from-green-500 to-yellow-500',
      aiEnhanced: true,
      aiMetric: '3x più veloce',
      aiTools: ['Cursor IDE', 'GitHub Copilot', 'V0']
    },
    {
      number: 5,
      title: 'Integrazione AI',
      description: 'Implementazione di soluzioni AI personalizzate per potenziare l\'esperienza utente.',
      icon: <BrainCircuit size={24} />,
      color: 'from-yellow-500 to-orange-500',
      aiEnhanced: true,
      aiMetric: 'Features esclusive',
      aiTools: ['OpenAI API', 'Claude API', 'Custom Models']
    },
    {
      number: 6,
      title: 'Test e Ottimizzazione',
      description: 'Validazione completa con utenti reali e ottimizzazione per performance eccellenti.',
      icon: <Radar size={24} />,
      color: 'from-orange-500 to-red-500',
      aiEnhanced: true,
      aiMetric: '60% meno bug',
      aiTools: ['AI Testing', 'Automated QA']
    },
    {
      number: 7,
      title: 'Lancio e Deployment',
      description: 'Rilascio della soluzione con monitoraggio in tempo reale e supporto immediato.',
      icon: <Rocket size={24} />,
      color: 'from-red-500 to-purple-600',
      aiEnhanced: false, // Non direttamente potenziato dall'AI
    },
    {
      number: 8,
      title: 'Analisi e Miglioramento',
      description: 'Raccolta dati, analisi delle performance e miglioramento continuo nel tempo.',
      icon: <Zap size={24} />,
      color: 'from-purple-600 to-blue-600',
      aiEnhanced: true,
      aiMetric: 'Insights automatici',
      aiTools: ['AI Analytics', 'Predictive Models']
    },
  ];
  
  // Suddividiamo i passaggi per creare due colonne
  const leftSteps = processSteps.slice(0, Math.ceil(processSteps.length / 2));
  const rightSteps = processSteps.slice(Math.ceil(processSteps.length / 2));

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute -bottom-20 right-10 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"></div>
        
        {/* Connective dots pattern (subtle background) */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium">
            Processo AI-Enhanced
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Metodologia <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AI-driven</span> per risultati eccellenti
          </h2>
          <p className="text-lg text-neutral-400">
            Un approccio strutturato dove l'intelligenza artificiale accelera ogni fase, garantendo qualità superiore in metà del tempo.
          </p>
          
          {/* Metric Summary - NEW */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30">
              <Clock className="w-3 h-3 text-green-400" />
              <span className="text-green-400 text-sm">40% tempo risparmiato</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30">
              <BrainCircuit className="w-3 h-3 text-blue-400" />
              <span className="text-blue-400 text-sm">7 fasi AI-powered</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span className="text-purple-400 text-sm">Qualità superiore</span>
            </div>
          </div>
        </div>
        
        {/* Timeline for large screens */}
        <div className="hidden lg:block relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 transform -translate-x-1/2"></div>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Left column */}
            <div className="space-y-12">
              {leftSteps.map((step) => (
                <div key={step.number} className="relative">
                  {/* Connector to center line */}
                  <div className="absolute right-0 top-8 w-8 h-0.5 bg-neutral-700"></div>
                  
                  {/* Step card */}
                  <div className="mr-8 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-sm p-6 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300 relative">
                    
                    {/* AI Badge - NEW */}
                    {step.aiEnhanced && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30">
                        <Bot className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-green-400">AI</span>
                      </div>
                    )}
                    
                    <div className="flex items-start mb-4">
                      <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} p-2 text-white shadow-lg`}>
                        {step.icon}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-neutral-500">Fase {step.number}</div>
                        <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-neutral-400 mb-4">{step.description}</p>
                    
                    {/* AI Enhancement details - NEW */}
                    {step.aiEnhanced && (
                      <div className="border-t border-neutral-800 pt-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-green-400 font-medium">{step.aiMetric}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {step.aiTools?.map((tool, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 rounded bg-blue-900/30 text-blue-300">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right column */}
            <div className="space-y-12 mt-24">
              {rightSteps.map((step) => (
                <div key={step.number} className="relative">
                  {/* Connector to center line */}
                  <div className="absolute left-0 top-8 w-8 h-0.5 bg-neutral-700"></div>
                  
                  {/* Step card */}
                  <div className="ml-8 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-sm p-6 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300 relative">
                    
                    {/* AI Badge - NEW */}
                    {step.aiEnhanced && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30">
                        <Bot className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-green-400">AI</span>
                      </div>
                    )}
                    
                    <div className="flex items-start mb-4">
                      <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} p-2 text-white shadow-lg`}>
                        {step.icon}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-neutral-500">Fase {step.number}</div>
                        <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-neutral-400 mb-4">{step.description}</p>
                    
                    {/* AI Enhancement details - NEW */}
                    {step.aiEnhanced && (
                      <div className="border-t border-neutral-800 pt-4 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-green-400 font-medium">{step.aiMetric}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {step.aiTools?.map((tool, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 rounded bg-blue-900/30 text-blue-300">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Vertical timeline for mobile/tablet */}
        <div className="lg:hidden relative">
          {/* Central line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600"></div>
          
          <div className="space-y-12 ml-8">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                {/* Connector dot */}
                <div className={`absolute left-0 top-8 w-4 h-4 rounded-full border-4 transform -translate-x-1/2 ${
                  step.aiEnhanced 
                    ? 'bg-green-400 border-green-500' 
                    : 'bg-white border-blue-500'
                }`}></div>
                
                {/* Step card */}
                <div className="ml-8 rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-sm p-6 relative">
                  
                  {/* AI Badge - NEW */}
                  {step.aiEnhanced && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30">
                      <Bot className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-green-400">AI</span>
                    </div>
                  )}
                  
                  <div className="flex items-start mb-4">
                    <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} p-2 text-white shadow-lg`}>
                      {step.icon}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-neutral-500">Fase {step.number}</div>
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-neutral-400 mb-4">{step.description}</p>
                  
                  {/* AI Enhancement details - NEW */}
                  {step.aiEnhanced && (
                    <div className="border-t border-neutral-800 pt-4 mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400 font-medium">{step.aiMetric}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {step.aiTools?.map((tool, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 rounded bg-blue-900/30 text-blue-300">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <h3 className="text-2xl font-bold mb-6">
            Pronto per un processo <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">più veloce e intelligente</span>?
          </h3>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg group"
          >
            Discutiamo del tuo progetto AI
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process;