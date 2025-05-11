import { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowLeft, 
  CheckCircle, 
  BrainCircuit, 
  Sparkles,
  Code,
  Zap,
  Database,
  Cloud,
  Layers,
  ArrowRight,
  Bot,
  Eye,
  TrendingUp,
  MessageCircle,
  BarChart3,
  Activity,
  Cog,
  Wrench,
  Target,
  CheckCircle2,
  Clock,
  Cpu,
  Gauge,
  RefreshCw,
  Settings,
  Users,
  Shield,
  Workflow,
  GitBranch,
  Monitor,
  Palette,
  Layout,
  Calculator
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sviluppo Potenziato dall\'AI | Antonino Daví - Soluzioni Digitali Intelligenti',
  description: 'Combino sviluppo full-stack e intelligenza artificiale per creare soluzioni digitali più veloci, eleganti e performanti. AI-enhanced development per risultati straordinari.',
  keywords: 'AI-enhanced development, sviluppo intelligente, automazione sviluppo, AI-driven solutions, Claude AI, GPT-4',
  openGraph: {
    title: 'Sviluppo Potenziato dall\'AI - Soluzioni Digitali Intelligenti',
    description: 'Quando sviluppo tradizionale incontra l\'AI: soluzioni più veloci, eleganti e performanti',
    type: 'article',
    url: 'https://antoninodavi.com/services/ai-integration',
    images: ['/images/og-ai-integration.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sviluppo Potenziato dall\'AI - Antonino Daví',
    description: 'AI-driven solutions per il tuo business',
  },
  alternates: {
    canonical: 'https://antoninodavi.com/services/ai-integration',
  },
}

export default function AIEnhancedDevelopment() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-24 relative overflow-hidden" style={{ colorScheme: 'dark' }}>
      {/* Background effects - consistent with other pages */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-40 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/20 via-purple-500/10 to-orange-600/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-500/10 via-purple-600/20 to-blue-600/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb - consistent style */}
        <div className="mb-6 md:mb-8">
          <Link 
            href="/#services" 
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 text-sm md:text-base
            bg-gradient-to-r from-neutral-800/80 to-neutral-800/60 
            border border-neutral-700/50 rounded-lg 
            text-neutral-400 hover:text-white hover:border-blue-500/50
            transition-all duration-200 group 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
            aria-label="Torna alla sezione servizi"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Torna ai servizi</span>
            <span className="sm:hidden">Servizi</span>
            <div className="hidden md:inline text-xs text-neutral-600">→ Sviluppo AI-Enhanced</div>
          </Link>
        </div>

        {/* Schema.org Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Sviluppo Potenziato dall'AI",
              "provider": {
                "@type": "Person",
                "name": "Antonino Daví"
              },
              "description": "Sviluppo full-stack potenziato dall'intelligenza artificiale per soluzioni digitali più veloci ed eleganti",
              "serviceType": "AI-Enhanced Development",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://antoninodavi.com/services/ai-integration"
              }
            })
          }}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-24">
          <div>
            <div className="inline-block px-4 py-1 mb-2 rounded-full bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-orange-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium animate-scale-in">
              AI-Enhanced Development
            </div>
            
            {/* Aggiungiamo badge metric - NEW */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-gradient-to-r from-green-900/40 to-teal-900/40 border border-green-500/30 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Gauge className="w-3 h-3 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Sviluppo 3x più veloce</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Il Mio <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">Superpotere</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl text-neutral-300">è l'AI</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 mb-8 max-w-xl">
              Non sono solo uno sviluppatore che usa l'AI. Sono uno sviluppatore <strong>amplificato</strong> dall'AI, in grado di consegnare progetti in <span className="text-white">metà tempo</span> con qualità superiore.
            </p>

            <div className="space-y-4">
              {[
                'Architetto soluzioni 3x più velocemente',
                'Codice di qualità con 60% meno bug',
                'Design UI/UX ottimizzato per conversioni',
                'Testing automatizzato con AI',
                'Funzionalità smart native (chatbot, predizioni)',
                'ROI superiore del 35% rispetto a sviluppo tradizionale'
              ].map((feature, index) => (
                <div key={index} className="flex items-start animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="ml-3 text-neutral-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* AI-Enhanced Development Studio - Stesso della homepage */}
            <div className="relative rounded-xl sm:rounded-2xl border border-blue-600/20 bg-gradient-to-br from-neutral-900/95 via-neutral-900/95 to-neutral-900/95 backdrop-blur-sm overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96 group">
              
              {/* IDE Header */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 sm:px-6 py-2 sm:py-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-b border-blue-500/20">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Code className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
                  <span className="text-white font-medium text-sm sm:text-base">AI-Enhanced IDE</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">Claude Active</span>
                  </div>
                  <BrainCircuit className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
                </div>
              </div>
              
              {/* Code Editor with AI Assistance */}
              <div className="absolute inset-0 top-10 sm:top-14 md:top-16 flex">
                {/* File Explorer */}
                <div className="w-16 sm:w-20 bg-neutral-900/80 border-r border-neutral-700/50 p-2">
                  <div className="space-y-1">
                    {['src/', 'api/', 'ui/', '.ai/'].map((folder, i) => (
                      <div key={i} className="flex items-center gap-1 text-xs text-neutral-400 py-1">
                        {folder.includes('.ai') ? (
                          <BrainCircuit className="w-3 h-3 text-blue-400" />
                        ) : (
                          <div className="w-3 h-3" />
                        )}
                        <span className={folder.includes('.ai') ? 'text-blue-400' : ''}>{folder}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Code Area */}
                <div className="flex-1 p-3 sm:p-4 space-y-3">
                  {/* AI Suggestion */}
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded p-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-center gap-2 mb-1">
                      <Bot className="w-3 h-3 text-blue-400" />
                      <span className="text-xs text-blue-300">Claude Suggestion</span>
                    </div>
                    <pre className="text-xs text-neutral-300 font-mono">
{`// AI-optimized component architecture
const SmartComponent = () => {
  // Auto-generated business logic
  const { data, loading } = useAIQuery()
}`}
                    </pre>
                  </div>
                  
                  {/* Live AI Features */}
                  <div className="grid grid-cols-2 gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    <div className="bg-green-900/20 border border-green-500/30 rounded p-2">
                      <div className="flex items-center gap-1 mb-1">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-green-300">Automated Tests</span>
                      </div>
                      <div className="text-xs text-neutral-400">98% coverage</div>
                    </div>
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded p-2">
                      <div className="flex items-center gap-1 mb-1">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                        <span className="text-xs text-purple-300">AI Refactoring</span>
                      </div>
                      <div className="text-xs text-neutral-400">Optimizing...</div>
                    </div>
                  </div>
                  
                  {/* Performance Metrics */}
                  <div className="bg-neutral-900/80 rounded p-2 animate-fade-in" style={{ animationDelay: '1.1s' }}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-400">Development Speed</span>
                      <span className="text-green-400 font-medium">+275%</span>
                    </div>
                    <div className="w-full bg-neutral-800 rounded-full h-1.5 mt-1">
                      <div className="bg-gradient-to-r from-green-600 to-blue-600 h-1.5 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Tools Floating */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                {[
                  { icon: BrainCircuit, label: 'Claude', color: 'text-blue-400' },
                  { icon: Code, label: 'Cursor', color: 'text-green-400' },
                  { icon: Palette, label: 'Midjourney', color: 'text-purple-400' }
                ].map((tool, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-1 bg-neutral-900/80 backdrop-blur-sm px-2 py-1 rounded border border-neutral-700/30 hover:border-neutral-600 transition-colors"
                  >
                    <tool.icon className={`w-3 h-3 ${tool.color}`} />
                    <span className="text-xs text-neutral-300">{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Workflow Comparison - NEW */}
        <section className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-in">
            Sviluppo Tradizionale <span className="text-neutral-600">vs</span> <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">AI-Enhanced</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Development */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <h3 className="text-xl font-bold text-neutral-400 mb-6 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Sviluppo Tradizionale
              </h3>
              <div className="space-y-4">
                {[
                  { task: 'Research & Planning', time: '2-3 giorni' },
                  { task: 'Architecture Design', time: '3-4 giorni' },
                  { task: 'Development', time: '10-15 giorni' },
                  { task: 'Testing & Debugging', time: '3-5 giorni' },
                  { task: 'Optimization', time: '2-3 giorni' },
                  { task: 'Documentation', time: '1-2 giorni' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-neutral-400">{item.task}</span>
                    <span className="text-white font-medium">{item.time}</span>
                  </div>
                ))}
                <div className="border-t border-neutral-800 pt-4 mt-4">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-white">Totale:</span>
                    <span className="text-red-400">21-32 giorni</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI-Enhanced Development */}
            <div className="rounded-2xl border border-blue-600/30 bg-gradient-to-br from-blue-900/10 to-purple-900/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-blue-400" />
                Sviluppo AI-Enhanced
              </h3>
              <div className="space-y-4">
                {[
                  { task: 'AI Research & Strategy', time: '4-6 ore', ai: 'Claude, Perplexity' },
                  { task: 'AI Architecture Design', time: '6-8 ore', ai: 'Cursor, Claude' },
                  { task: 'AI-Assisted Development', time: '4-5 giorni', ai: 'Copilot, Cursor' },
                  { task: 'Automated Testing', time: '6-8 ore', ai: 'AI Testing Suites' },
                  { task: 'AI Optimization', time: '4-6 ore', ai: 'Performance AI' },
                  { task: 'Auto Documentation', time: '2-3 ore', ai: 'AI Docs Gen' }
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-300">{item.task}</span>
                      <span className="text-green-400 font-medium">{item.time}</span>
                    </div>
                    <div className="text-xs text-blue-400 pl-4">{item.ai}</div>
                  </div>
                ))}
                <div className="border-t border-green-600/30 pt-4 mt-4">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-white">Totale:</span>
                    <span className="text-green-400">7-10 giorni</span>
                  </div>
                  <div className="text-sm text-green-400 mt-1 text-center">70% più veloce!</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My AI Arsenal - AGGIORNATO */}
        <section className="mb-24" aria-labelledby="tools-heading">
          <h2 id="tools-heading" className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
            Il Mio <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">AI Arsenal</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Claude AI', icon: Bot, color: 'text-blue-500', desc: 'Assistant principale', usage: 'Quotidiano' },
              { name: 'Cursor IDE', icon: Code, color: 'text-purple-500', desc: 'AI-powered coding', usage: 'Core tool' },
              { name: 'GitHub Copilot', icon: GitBranch, color: 'text-green-500', desc: 'Code suggestions', usage: 'Daily coding' },
              { name: 'Midjourney', icon: Palette, color: 'text-pink-500', desc: 'UI/UX design', usage: 'Design phase' },
              { name: 'Perplexity', icon: Target, color: 'text-orange-500', desc: 'Research & docs', usage: 'Research' },
              { name: 'OpenAI API', icon: BrainCircuit, color: 'text-blue-600', desc: 'Custom integration', usage: 'Development' },
              { name: 'DeepL', icon: MessageCircle, color: 'text-teal-500', desc: 'Translations', usage: 'Localization' },
              { name: 'Custom GPTs', icon: Sparkles, color: 'text-indigo-500', desc: 'Specialized tasks', usage: 'Specialized' }
            ].map((tool, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-neutral-800/50 via-neutral-800/30 to-transparent border border-neutral-700/50 hover:border-neutral-600 hover:from-neutral-800/70 transition-all duration-300 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center ${tool.color} group-hover:scale-110 transition-transform relative`}>
                  <tool.icon className="w-6 h-6" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-center">
                  <span className="text-white text-sm font-medium block">{tool.name}</span>
                  <span className="text-xs text-neutral-500 block">{tool.desc}</span>
                  <span className="text-xs text-blue-400 mt-1 block">{tool.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI-Enhanced Features - AGGIORNATO */}
        <section className="mb-24" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">Funzionalità Smart</span> che Posso Integrare
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageCircle />,
                title: 'Chatbot Intelligenti',
                description: 'Assistant AI che comprendono il contesto e imparano dalle interazioni.',
                examples: ['Claude integration', 'OpenAI GPT-4', 'Custom fine-tuning']
              },
              {
                icon: <TrendingUp />,
                title: 'Analytics Predittive',
                description: 'Dashboard che anticipano trends e generano insights actionable.',
                examples: ['ML forecasting', 'User behavior prediction', 'Auto-optimization']
              },
              {
                icon: <Users />,
                title: 'Personalizzazione Dinamica',
                description: 'Contenuti e UX che si adattano in tempo reale alle preferenze.',
                examples: ['Content AI', 'Dynamic layouts', 'Smart recommendations']
              },
              {
                icon: <Shield />,
                title: 'Sicurezza AI-Enhanced',
                description: 'Monitoraggio e prevenzione automatica delle minacce.',
                examples: ['Anomaly detection', 'Fraud prevention', 'Smart rate limiting']
              },
              {
                icon: <Zap />,
                title: 'Automazioni Intelligenti',
                description: 'Workflow che si auto-ottimizzano basandosi sui pattern.',
                examples: ['Smart workflows', 'Auto-scaling', 'Predictive caching']
              },
              {
                icon: <Eye />,
                title: 'Computer Vision',
                description: 'Riconoscimento avanzato per immagini e video.',
                examples: ['Object detection', 'OCR', 'Image generation']
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-neutral-800/40 via-neutral-800/20 to-transparent border border-neutral-700/50 rounded-2xl p-6 backdrop-blur-sm hover:from-neutral-800/60 transition-all duration-300 animate-scale-in cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-3 right-3 opacity-30 group-hover:opacity-100 transition-opacity">
                  <BrainCircuit className="w-4 h-4 text-blue-400" />
                </div>
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-200 transition-colors">{feature.title}</h3>
                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors mb-4">{feature.description}</p>
                <div className="space-y-1">
                  {feature.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      {example}
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-blue-500 via-purple-500 to-transparent transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Results Metrics - AGGIORNATO */}
        <section className="mb-24" aria-labelledby="results-heading">
          <h2 id="results-heading" className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">Risultati</span> Misurabili
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: '3x',
                label: 'Sviluppo più veloce',
                description: 'Grazie a AI coding assistance',
                color: 'from-green-600 to-green-400',
                icon: <Zap />
              },
              {
                metric: '60%',
                label: 'Meno bug',
                description: 'Con AI testing e review',
                color: 'from-blue-600 to-blue-400',
                icon: <Shield />
              },
              {
                metric: '35%',
                label: 'ROI superiore',
                description: 'Rispetto a sviluppo tradizionale',
                color: 'from-purple-600 to-purple-400',
                icon: <TrendingUp />
              },
              {
                metric: '95%',
                label: 'Coverage automatica',
                description: 'Testing e documentazione',
                color: 'from-orange-600 to-orange-400',
                icon: <CheckCircle />
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-900/60 border border-neutral-800 p-6 text-center group hover:border-neutral-700 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.color} text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {item.icon}
                </div>
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.metric}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
                <p className="text-sm text-neutral-400">{item.description}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/10 via-purple-500/10 to-orange-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-l from-orange-600/10 via-purple-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative z-10 bg-gradient-to-br from-neutral-900/80 via-neutral-900/90 to-neutral-900/80 backdrop-blur-md rounded-2xl p-8 border border-neutral-800">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Vuoi Vedere l'AI in Azione?
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                Parliamo del tuo progetto e di come posso utilizzare l'AI per consegnarlo in metà tempo con funzionalità innovative.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/#contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-white rounded-full text-lg font-medium hover:from-blue-500 hover:via-purple-500 hover:to-orange-500 transition-all shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calcola il risparmio di tempo
                </Link>
                <Link 
                  href="/#process" 
                  className="px-8 py-4 border border-blue-500/30 hover:border-blue-500/50 text-white rounded-full text-lg font-medium hover:bg-blue-900/20 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  Vedi il processo AI
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

// Animations CSS
const customStyles = `
.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out both;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out both;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out both;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`