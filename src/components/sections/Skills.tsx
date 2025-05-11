'use client'

import {
  Code2,
  BrainCircuit,
  Layers,
  Database,
  Globe,
  CloudCog,
  LayoutGrid,
  LineChart,
  Paintbrush,
  Bot,
  Sparkles,
  Search,
  MessageSquare,
  Cpu,
  Eye,
  Zap,
  Palette,
  GitBranch
} from 'lucide-react'

// Definizione del tipo di competenza
type Skill = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  aiEnhancement?: string; // NEW: come l'AI potenzia questa skill
  aiMetric?: string; // NEW: metrica di miglioramento
};

// Definizione tipo AI Tool
type AITool = {
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  color: string;
};

const Skills = () => {
  // Array delle competenze - AGGIORNATO con AI enhancements
  const skills: Skill[] = [
    {
      title: 'Sviluppo Frontend',
      description: 'Interfacce moderne e responsive con React, Next.js e TailwindCSS.',
      icon: <LayoutGrid size={24} />,
      color: 'from-blue-600 to-teal-500',
      aiEnhancement: 'AI-assisted coding per sviluppo 3x più veloce',
      aiMetric: '3x più veloce'
    },
    {
      title: 'Sviluppo Backend',
      description: 'API robuste e scalabili con Node.js, Express e architetture serverless.',
      icon: <Database size={24} />,
      color: 'from-purple-600 to-blue-600',
      aiEnhancement: 'Architetture ottimizzate con AI code review',
      aiMetric: '60% meno bug'
    },
    {
      title: 'Integrazione AI',
      description: 'Implementazione di modelli AI per potenziare applicazioni e automatizzare processi.',
      icon: <BrainCircuit size={24} />,
      color: 'from-teal-500 to-blue-500',
      aiEnhancement: 'Native expertise con Claude, GPT-4 e custom models',
      aiMetric: 'Feature esclusive'
    },
    {
      title: 'Architettura Cloud',
      description: 'Progettazione di soluzioni scalabili su AWS, Azure e GCP.',
      icon: <CloudCog size={24} />,
      color: 'from-blue-500 to-purple-600',
      aiEnhancement: 'Ottimizzazione automatica con AI ops',
      aiMetric: '40% più efficiente'
    },
    {
      title: 'Development DevOps',
      description: 'CI/CD, containerizzazione e orchestrazione con Docker e Kubernetes.',
      icon: <Code2 size={24} />,
      color: 'from-purple-500 to-pink-500',
      aiEnhancement: 'Pipeline automatizzate con AI monitoring',
      aiMetric: '50% meno deployment issues'
    },
    {
      title: 'Data Visualization',
      description: 'Rappresentazioni grafiche interattive di dati complessi con D3.js e Recharts.',
      icon: <LineChart size={24} />,
      color: 'from-teal-400 to-emerald-500',
      aiEnhancement: 'Insights automatici e dashboard intelligenti',
      aiMetric: 'Insights 2x più profondi'
    },
    {
      title: 'UX/UI Design',
      description: 'Progettazione di interfacce intuitive e d\'impatto visivo.',
      icon: <Paintbrush size={24} />,
      color: 'from-pink-500 to-orange-500',
      aiEnhancement: 'Design AI-optimized per massima conversione',
      aiMetric: '+35% conversioni'
    },
    {
      title: 'Applicazioni Web Progressive',
      description: 'Sviluppo di PWA per esperienze native su tutti i dispositivi.',
      icon: <Globe size={24} />,
      color: 'from-blue-600 to-indigo-500',
      aiEnhancement: 'Ottimizzazione automatica performance',
      aiMetric: '98% Lighthouse score'
    },
    {
      title: 'Architettura Software',
      description: 'Progettazione di sistemi scalabili, manutenibili e robusti.',
      icon: <Layers size={24} />,
      color: 'from-indigo-600 to-purple-600',
      aiEnhancement: 'Refactoring intelligente e code optimization',
      aiMetric: '70% più manutenibile'
    },
  ];

  // Array dei tool AI - NEW
  const aiTools: AITool[] = [
    {
      name: 'Claude AI',
      description: 'Assistant principale per analysis e coding',
      icon: <Bot size={20} />,
      category: 'Development',
      color: 'from-blue-600 to-blue-500'
    },
    {
      name: 'Cursor IDE',
      description: 'AI-powered coding environment',
      icon: <Code2 size={20} />,
      category: 'Development',
      color: 'from-purple-600 to-purple-500'
    },
    {
      name: 'GitHub Copilot',
      description: 'AI pair programmer',
      icon: <GitBranch size={20} />,
      category: 'Development',
      color: 'from-green-600 to-green-500'
    },
    {
      name: 'Midjourney',
      description: 'AI design e UI/UX',
      icon: <Palette size={20} />,
      category: 'Design',
      color: 'from-pink-600 to-pink-500'
    },
    {
      name: 'Perplexity',
      description: 'Research e documentazione',
      icon: <Search size={20} />,
      category: 'Research',
      color: 'from-orange-600 to-orange-500'
    },
    {
      name: 'ChatGPT-4',
      description: 'Problem solving avanzato',
      icon: <MessageSquare size={20} />,
      category: 'General',
      color: 'from-teal-600 to-teal-500'
    },
    {
      name: 'Custom GPTs',
      description: 'Modelli specializzati',
      icon: <BrainCircuit size={20} />,
      category: 'Specialized',
      color: 'from-indigo-600 to-indigo-500'
    },
    {
      name: 'AI Analytics',
      description: 'Data insights automatici',
      icon: <LineChart size={20} />,
      category: 'Analytics',
      color: 'from-blue-500 to-teal-500'
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium">
            Competenze AI-Amplified
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ogni skill <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">potenziata dall'AI</span>
          </h2>
          <p className="text-lg text-neutral-400">
            Non utilizzo solo tecnologie moderne, ma le combino con intelligenza artificiale per risultati che superano gli standard tradizionali.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-6 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300 overflow-hidden"
            >
              {/* AI Enhancement Badge - NEW */}
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30">
                <Sparkles className="w-3 h-3 text-green-400" />
                <span className="text-xs text-green-400">AI</span>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ 
                backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))` 
              }}></div>
              
              {/* Icon container */}
              <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} p-2 text-white shadow-lg`}>
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">{skill.title}</h3>
              <p className="text-neutral-400 mb-4">{skill.description}</p>
              
              {/* AI Enhancement details - NEW */}
              <div className="border-t border-neutral-800 pt-4">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">{skill.aiMetric}</span>
                </div>
                <p className="text-xs text-neutral-500">{skill.aiEnhancement}</p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ 
                backgroundImage: `linear-gradient(to right, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[2]})` 
              }}></div>
            </div>
          ))}
        </div>

        {/* AI Tools Stack Section - NEW */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Il Mio <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AI Arsenal</span>
            </h3>
            <p className="text-lg text-neutral-400">
              Utilizzo i tool AI più avanzati per amplificare ogni aspetto del mio lavoro
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aiTools.map((tool, index) => (
              <div 
                key={index}
                className="group relative rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-4 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-3 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${tool.color} p-2 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{tool.name}</h4>
                  <span className="text-xs text-neutral-400 mb-2">{tool.category}</span>
                  <p className="text-xs text-neutral-500">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tool Categories Summary - NEW */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Development', 'Design', 'Research', 'Analytics'].map((category) => (
              <div key={category} className="px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700/50">
                <span className="text-sm text-neutral-400">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;