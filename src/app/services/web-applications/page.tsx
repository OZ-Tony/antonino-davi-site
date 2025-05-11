import { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowLeft, 
  CheckCircle, 
  Smartphone,
  Layers,
  Sparkles,
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  AppWindow, // Changed from Api to AppWindow
  Wrench,
  Target,
  Clock,
  Cpu,
  Users,
  Activity,
  GitBranch,
  RefreshCw,
  Settings,
  Workflow,
  Network,
  Lock,
  Gauge,
  MonitorSpeaker,
  LineChart,
  CheckSquare,
  BarChart3,
  MessageSquare,
  Bot,
  BrainCircuit,
  Rocket,
  Eye,
  Calculator,
  PlayCircle,
  Monitor,
  Tablet,
  Globe,
  Cog,
  Box,
  Server,
  Container,
  Binary,
  Film,
  Clipboard,
  FileCode,
  Bug,
  AlertCircle,
  TrendingUp,
  Puzzle,
  Wand2,
  Terminal,
  MousePointer,
  Search,
  Palette
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Applicazioni Personalizzate | Antonino Daví - Sviluppo Su Misura',
  description: 'Applicazioni web e mobile completamente personalizzate per le tue esigenze specifiche. From idea to reality with bespoke development.',
  keywords: 'applicazioni personalizzate, sviluppo su misura, app custom, business logic personalizzata, software bespoke',
  openGraph: {
    title: 'Applicazioni Personalizzate - Soluzioni Su Misura',
    description: 'Trasformiamo le tue idee in app uniche, progettate specificamente per il tuo business',
    type: 'article',
    url: 'https://antoninodavi.com/services/web-applications',
    images: ['/images/og-web-applications.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Applicazioni Personalizzate - Antonino Daví',
    description: 'Software su misura per ogni esigenza di business',
  },
  alternates: {
    canonical: 'https://antoninodavi.com/services/web-applications',
  },
}

export default function WebApplications() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-24 relative overflow-hidden" style={{ colorScheme: 'dark' }}>
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-40 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-500/10 to-pink-600/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-500/10 via-indigo-600/20 to-blue-600/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb */}
        <div className="mb-6 md:mb-8">
          <Link 
            href="/#services" 
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 text-sm md:text-base
            bg-gradient-to-r from-neutral-800/80 to-neutral-800/60 
            border border-neutral-700/50 rounded-lg 
            text-neutral-400 hover:text-white hover:border-indigo-500/50
            transition-all duration-200 group 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
            aria-label="Torna alla sezione servizi"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Torna ai servizi</span>
            <span className="sm:hidden">Servizi</span>
            <div className="hidden md:inline text-xs text-neutral-600">→ App Personalizzate</div>
          </Link>
        </div>

        {/* Schema.org Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Applicazioni Personalizzate",
              "provider": {
                "@type": "Person",
                "name": "Antonino Daví"
              },
              "description": "Sviluppo di applicazioni web e mobile completamente personalizzate per esigenze specifiche di business",
              "serviceType": "Sviluppo Software Su Misura",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://antoninodavi.com/services/web-applications"
              }
            })
          }}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-24">
          <div>
            <div className="inline-block px-4 py-1 mb-2 rounded-full bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-pink-900/30 border border-indigo-500/30 text-indigo-400 text-sm font-medium animate-scale-in">
              Full-Stack Development AI-Enhanced
            </div>
            
            {/* Badge metric */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-gradient-to-r from-green-900/40 to-teal-900/40 border border-green-500/30 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Rocket className="w-3 h-3 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Pronto in 3-5 settimane</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Applicazioni <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">AI-Powered</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 mb-8 max-w-xl">
              Non soluzioni standard. Creo applicazioni su misura con <span className="text-white">architettura scalabile</span> e business logic personalizzata, sviluppate <span className="text-white">3x più velocemente</span> grazie all'AI.
            </p>

            <div className="space-y-4">
              {[
                'Architettura AI-assisted per complessità ridotta',
                'Backend development accelerato con automazioni smart',
                'Frontend responsive con component library custom',
                'API intelligent design e auto-documentation',
                'Testing automatizzato con AI coverage al 95%',
                'Deployment e monitoring AI-powered su cloud'
              ].map((feature, index) => (
                <div key={index} className="flex items-start animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="ml-3 text-neutral-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* App Development Studio Visualization */}
            <div className="relative rounded-xl sm:rounded-2xl border border-indigo-600/20 bg-gradient-to-br from-neutral-900/95 via-neutral-900/95 to-neutral-900/95 backdrop-blur-sm overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96 group">
              
              {/* IDE Header */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 sm:px-6 py-2 sm:py-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-b border-indigo-500/20">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Layers className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-400" />
                  <span className="text-white font-medium text-sm sm:text-base">Full-Stack AI Studio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">AI Running</span>
                  </div>
                  <BrainCircuit className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-400" />
                </div>
              </div>
              
              {/* App Architecture View */}
              <div className="absolute inset-0 top-10 sm:top-14 md:top-16 p-3 sm:p-6 space-y-3 sm:space-y-4">
                
                {/* Architecture Layers */}
                <div className="grid grid-cols-3 gap-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  {[
                    { icon: Globe, label: 'Frontend', color: 'text-blue-400', bg: 'bg-blue-900/20' },
                    { icon: AppWindow, label: 'API Layer', color: 'text-purple-400', bg: 'bg-purple-900/20' },
                    { icon: Database, label: 'Database', color: 'text-green-400', bg: 'bg-green-900/20' }
                  ].map((layer, i) => (
                    <div key={i} className={`p-2 rounded-lg border border-${layer.color.split('-')[1]}-500/30 ${layer.bg} text-center`}>
                      <layer.icon className={`w-5 h-5 ${layer.color} mx-auto mb-1`} />
                      <span className="text-xs text-neutral-300">{layer.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* AI-Generated Components */}
                <div className="bg-indigo-900/20 border border-indigo-500/30 rounded p-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    <span className="text-xs text-indigo-300">AI Component Generator</span>
                    <RefreshCw className="w-3 h-3 text-indigo-400 animate-spin ml-auto" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-neutral-800/50 p-2 rounded text-xs text-neutral-300">
                      <Code className="w-3 h-3 text-blue-400 mb-1" />
                      React Components
                    </div>
                    <div className="bg-neutral-800/50 p-2 rounded text-xs text-neutral-300">
                      <Shield className="w-3 h-3 text-green-400 mb-1" />
                      Auth Module
                    </div>
                  </div>
                </div>
                
                {/* Live Metrics Dashboard */}
                <div className="bg-neutral-900/80 rounded-lg p-3 border border-neutral-700/30 animate-fade-in" style={{ animationDelay: '1.1s' }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-neutral-400">Development Status</span>
                    <div className="flex items-center gap-1">
                      <Activity className="w-3 h-3 text-green-400" />
                      <span className="text-xs text-green-400">Active</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-xs text-neutral-500">Backend</div>
                      <div className="text-xs font-bold text-green-400">90%</div>
                      <div className="h-1 bg-neutral-800 rounded-full mt-1">
                        <div className="h-1 bg-green-500 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500">Frontend</div>
                      <div className="text-xs font-bold text-blue-400">75%</div>
                      <div className="h-1 bg-neutral-800 rounded-full mt-1">
                        <div className="h-1 bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-neutral-500">Tests</div>
                      <div className="text-xs font-bold text-purple-400">85%</div>
                      <div className="h-1 bg-neutral-800 rounded-full mt-1">
                        <div className="h-1 bg-purple-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* AI Tools Panel */}
                <div className="flex justify-between bg-neutral-800/60 rounded-lg p-2 sm:p-3 border border-neutral-700/50">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3 sm:w-4 h-3 sm:h-4 text-indigo-400" />
                    <span className="text-xs text-neutral-400">AI Commands</span>
                  </div>
                  <div className="flex gap-1">
                    {[
                      { icon: FileCode, tooltip: 'Generate Code' },
                      { icon: Bug, tooltip: 'Debug AI' },
                      { icon: Rocket, tooltip: 'Deploy' }
                    ].map((tool, i) => (
                      <button
                        key={i}
                        className="p-1 rounded bg-neutral-700/50 hover:bg-neutral-700 transition-colors"
                        title={tool.tooltip}
                      >
                        <tool.icon className="w-3 h-3 text-neutral-400" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Deployment Status */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-neutral-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/30">
                <div className="flex items-center gap-1">
                  <Cloud className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-green-400">Auto-Deployed</span>
                </div>
                <div className="h-3 w-px bg-neutral-700"></div>
                <div className="text-xs text-neutral-400">v2.1.0</div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Stack Development Timeline - NEW */}
        <section className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-in">
            Timeline App Development: <span className="text-neutral-600">Standard</span> vs <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">AI-Enhanced</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Timeline */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <h3 className="text-xl font-bold text-neutral-400 mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5" />
                Sviluppo App Standard
              </h3>
              <div className="space-y-4">
                {[
                  { phase: 'Planning & Architecture', weeks: '2-3' },
                  { phase: 'Database Design', weeks: '1-2' },
                  { phase: 'API Development', weeks: '3-4' },
                  { phase: 'Frontend Development', weeks: '4-6' },
                  { phase: 'Authentication System', weeks: '2-3' },
                  { phase: 'Integration Testing', weeks: '2-3' },
                  { phase: 'Deployment Setup', weeks: '1-2' },
                  { phase: 'Performance Optimization', weeks: '1-2' },
                  { phase: 'Security Audit', weeks: '1' },
                  { phase: 'Launch & Monitoring', weeks: '1' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-neutral-800 last:border-0">
                    <span className="text-neutral-400">{item.phase}</span>
                    <span className="text-white font-medium">{item.weeks} settimane</span>
                  </div>
                ))}
                <div className="border-t border-neutral-800 pt-4 mt-4">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-white">Totale:</span>
                    <span className="text-red-400">18-28 settimane</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI-Enhanced Timeline */}
            <div className="rounded-2xl border border-indigo-600/30 bg-gradient-to-br from-indigo-900/10 to-purple-900/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-indigo-400" />
                Sviluppo App AI-Enhanced
              </h3>
              <div className="space-y-4">
                {[
                  { phase: 'AI Architecture Planning', weeks: '0.5', ai: 'Claude Architecture' },
                  { phase: 'Smart Database Design', weeks: '0.5', ai: 'AI Schema Gen' },
                  { phase: 'API Auto-Generation', weeks: '1', ai: 'OpenAPI + Claude' },
                  { phase: 'AI-Assisted Frontend', weeks: '1.5', ai: 'Cursor + Copilot' },
                  { phase: 'Pre-built Auth Solutions', weeks: '0.3', ai: 'NextAuth AI' },
                  { phase: 'Automated Testing', weeks: '0.5', ai: 'Playwright AI' },
                  { phase: 'CI/CD Pipeline Auto', weeks: '0.2', ai: 'GitHub Actions' },
                  { phase: 'AI Performance Tuning', weeks: '0.3', ai: 'Lighthouse AI' },
                  { phase: 'Security Scan Auto', weeks: '0.2', ai: 'SAST Tools' },
                  { phase: 'Instant Deploy', weeks: '0.1', ai: 'Vercel + Monitoring' }
                ].map((item, i) => (
                  <div key={i} className="space-y-1 py-2 border-b border-indigo-600/20 last:border-0">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-300">{item.phase}</span>
                      <span className="text-green-400 font-medium">{item.weeks} settimane</span>
                    </div>
                    <div className="text-xs text-indigo-400 pl-4">{item.ai}</div>
                  </div>
                ))}
                <div className="border-t border-green-600/30 pt-4 mt-4">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-white">Totale:</span>
                    <span className="text-green-400">3-5 settimane</span>
                  </div>
                  <div className="text-sm text-green-400 mt-1 text-center">85% più veloce!</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Stack & Architecture - NEW */}
        <section className="mb-24" aria-labelledby="stack-heading">
          <h2 id="stack-heading" className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Stack Tecnologico</span> AI-Optimized
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Stack */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-indigo-400" />
                Frontend AI-Enhanced
              </h3>
              <div className="space-y-3">
                {[
                  { tech: 'React / Next.js 14', use: 'Server Components + AI Routing' },
                  { tech: 'TypeScript', use: 'Type Safety + AI Completion' },
                  { tech: 'Tailwind CSS', use: 'Utility-first + AI Classes' },
                  { tech: 'Zustand / Jotai', use: 'State Management + AI Sync' },
                  { tech: 'React Query', use: 'Data Fetching + AI Caching' },
                  { tech: 'Framer Motion', use: 'Animations + AI Transitions' }
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-indigo-900/20 border border-indigo-600/30 hover:border-indigo-500/50 transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <Code className="w-4 h-4 text-indigo-400" />
                      <span className="text-white font-medium">{item.tech}</span>
                    </div>
                    <p className="text-xs text-neutral-400 pl-6">{item.use}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Backend Stack */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-purple-400" />
                Backend AI-Powered
              </h3>
              <div className="space-y-3">
                {[
                  { tech: 'Node.js / Express', use: 'API Layer + AI Middleware' },
                  { tech: 'PostgreSQL / Prisma', use: 'Database + AI Migrations' },
                  { tech: 'Redis', use: 'Caching + AI Optimization' },
                  { tech: 'GraphQL', use: 'Flexible APIs + AI Schema' },
                  { tech: 'JWT / OAuth', use: 'Auth + AI Security' },
                  { tech: 'Webhook Handlers', use: 'Events + AI Processing' }
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-purple-900/20 border border-purple-600/30 hover:border-purple-500/50 transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <Database className="w-4 h-4 text-purple-400" />
                      <span className="text-white font-medium">{item.tech}</span>
                    </div>
                    <p className="text-xs text-neutral-400 pl-6">{item.use}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* DevOps & AI Stack */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-pink-400" />
                DevOps AI-Driven
              </h3>
              <div className="space-y-3">
                {[
                  { tech: 'Docker / K8s', use: 'Containers + AI Scaling' },
                  { tech: 'AWS / Vercel', use: 'Cloud + AI Deployment' },
                  { tech: 'GitHub Actions', use: 'CI/CD + AI Testing' },
                  { tech: 'Prometheus', use: 'Monitoring + AI Alerts' },
                  { tech: 'Sentry', use: 'Error Tracking + AI Analysis' },
                  { tech: 'Terraform', use: 'IaC + AI Optimization' }
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-pink-900/20 border border-pink-600/30 hover:border-pink-500/50 transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <Cog className="w-4 h-4 text-pink-400" />
                      <span className="text-white font-medium">{item.tech}</span>
                    </div>
                    <p className="text-xs text-neutral-400 pl-6">{item.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI-Enhanced App Features - NEW */}
        <section className="mb-24" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Funzionalità Smart</span> per le Tue App
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users />,
                title: 'Authentication AI+',
                description: 'Sistema di autenticazione avanzato con riconoscimento comportamentale e sicurezza adattiva.',
                features: ['Biometric integration', 'Risk-based auth', 'Session AI management', 'Social login enhanced']
              },
              {
                icon: <MessageSquare />,
                title: 'Real-time Chat AI',
                description: 'Chat in tempo reale con moderazione automatica e traduzione istantanea.',
                features: ['AI moderation', 'Auto-translate', 'Sentiment analysis', 'Smart notifications']
              },
              {
                icon: <BarChart3 />,
                title: 'Analytics Intelligenti',
                description: 'Dashboard con AI insights e previsioni comportamentali degli utenti.',
                features: ['Predictive analytics', 'User journey mapping', 'Anomaly detection', 'Custom reports']
              },
              {
                icon: <Workflow />,
                title: 'Automazioni Business',
                description: 'Workflow automatizzati che si adattano ai tuoi processi aziendali.',
                features: ['Workflow builder', 'Trigger-based actions', 'Email automation', 'API integrations']
              },
              {
                icon: <Search />,
                title: 'Search & Discovery',
                description: 'Motore di ricerca intelligente con suggerimenti e filtri dinamici.',
                features: ['Semantic search', 'Auto-complete', 'Faceted filters', 'ML recommendations']
              },
              {
                icon: <Shield />,
                title: 'Security AI Suite',
                description: 'Protezione completa con monitoraggio proattivo delle minacce.',
                features: ['Threat detection', 'DDoS protection', 'Data encryption', 'Compliance tools']
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-neutral-800/40 via-neutral-800/20 to-transparent border border-neutral-700/50 rounded-2xl p-6 backdrop-blur-sm hover:from-neutral-800/60 transition-all duration-300 animate-scale-in cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-100 transition-opacity">
                  <BrainCircuit className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-indigo-200 transition-colors">{feature.title}</h3>
                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Results Metrics - NEW */}
        <section className="mb-24" aria-labelledby="results-heading">
          <h2 id="results-heading" className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Performance</span> Garantite
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: '85%',
                label: 'Più veloce',
                description: 'Sviluppo in 3-5 settimane vs 18-28',
                color: 'from-green-600 to-green-400',
                icon: <Clock />,
                detail: '70% tempo risparmiato'
              },
              {
                metric: '99.9%',
                label: 'Uptime',
                description: 'Monitoraggio e auto-scaling AI',
                color: 'from-blue-600 to-blue-400',
                icon: <Activity />,
                detail: 'SLA enterprise garantito'
              },
              {
                metric: '1M+',
                label: 'Requests/day',
                description: 'Architettura scalabile AI-optimized',
                color: 'from-purple-600 to-purple-400',
                icon: <Network />,
                detail: 'Auto-scaling intelligente'
              },
              {
                metric: '95%',
                label: 'Test Coverage',
                description: 'Testing e QA completamente automatizzati',
                color: 'from-orange-600 to-orange-400',
                icon: <CheckSquare />,
                detail: 'Zero bug policy'
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
                <p className="text-sm text-neutral-400 mb-2">{item.description}</p>
                <p className="text-xs text-neutral-500">{item.detail}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-600/10 via-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-l from-pink-600/10 via-purple-500/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative z-10 bg-gradient-to-br from-neutral-900/80 via-neutral-900/90 to-neutral-900/80 backdrop-blur-md rounded-2xl p-8 border border-neutral-800">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Trasforma la Tua Idea in App
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                Sviluppiamo la tua applicazione custom in sole 3-5 settimane con architettura scalabile e funzionalità AI native.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/#contact" 
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-full text-lg font-medium hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all shadow-lg hover:shadow-indigo-500/25 transform hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Pianifica la tua app
                </Link>
                <Link 
                  href="/#process" 
                  className="px-8 py-4 border border-indigo-500/30 hover:border-indigo-500/50 text-white rounded-full text-lg font-medium hover:bg-indigo-900/20 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  Stack tecnologico
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

// Custom animations
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