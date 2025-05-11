import { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowLeft, 
  CheckCircle, 
  Monitor,
  Palette,
  Sparkles,
  Code,
  Layout,
  Gauge,
  Globe,
  TrendingUp,
  Smartphone,
  Tablet,
  Search,
  Eye,
  Database,
  Cloud,
  Shield,
  Users,
  MousePointer,
  Layers,
  Settings,
  Camera,
  Grid,
  Type,
  Image,
  Video,
  Sliders,
  BarChart3,
  CheckSquare,
  ArrowRight,
  Target,
  Zap,
  MousePointerClick,
  RefreshCw,
  Activity,
  Calendar,
  MessageCircle,
  ChevronRight,
  Package,
  PlayCircle,
  Star,
  CheckCircle2,
  Clock,
  Focus,
  Wrench,
  GitBranch,
  Box,
  Wifi,
  Network,
  Heart,
  Cpu,
  Lock,
  BrainCircuit,
  Bot,
  Calculator
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Siti Web Personalizzati | Antonino Daví - Design & Sviluppo Premium',
  description: 'Siti web unici, performanti e convertenti. Design personalizzato, UX studiata, SEO avanzato e performance ottimizzate. Dal concept al successo.',
  keywords: 'siti web personalizzati, design premium, UX personalizzata, sviluppo web su misura, siti performanti',
  openGraph: {
    title: 'Siti Web Personalizzati - Design & Sviluppo Premium',
    description: 'Trasformiamo la tua visione in un sito web unico che converte',
    type: 'article',
    url: 'https://antoninodavi.com/services/custom-websites',
    images: ['/images/og-custom-websites.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siti Web Personalizzati - Antonino Daví',
    description: 'Design e sviluppo web su misura',
  },
  alternates: {
    canonical: 'https://antoninodavi.com/services/custom-websites',
  },
}

export default function CustomWebsites() {
  return (
    <main className="min-h-screen bg-neutral-950 pt-32 pb-24 relative overflow-hidden" style={{ colorScheme: 'dark' }}>
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-40 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/20 via-teal-500/10 to-green-600/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-tr from-green-500/10 via-teal-600/20 to-blue-600/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-500/5 via-transparent to-teal-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Breadcrumb */}
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
            <div className="hidden md:inline text-xs text-neutral-600">→ Siti Web</div>
          </Link>
        </div>

        {/* Schema.org Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Siti Web Personalizzati",
              "provider": {
                "@type": "Person",
                "name": "Antonino Daví"
              },
              "description": "Sviluppo siti web premium con design personalizzato, UX studiata e performance ottimizzate",
              "serviceType": "Design e Sviluppo Web Premium",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://antoninodavi.com/services/custom-websites"
              }
            })
          }}
        />

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-24">
          <div>
            <div className="inline-block px-4 py-1 mb-2 rounded-full bg-gradient-to-r from-blue-900/30 via-teal-900/30 to-green-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium animate-scale-in">
              Design & Sviluppo Web AI-Enhanced
            </div>
            
            {/* Aggiungiamo badge metric - NEW */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-gradient-to-r from-green-900/40 to-teal-900/40 border border-green-500/30 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Clock className="w-3 h-3 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Delivery in 2-3 settimane</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Siti Web <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">Potenziati dall'AI</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 mb-8 max-w-xl">
              Non un semplice sito template. Creo esperienze web uniche che si sviluppano <span className="text-white">3x più velocemente</span> grazie all'AI, con design personalizzato e funzionalità smart integrate.
            </p>

            <div className="space-y-4">
              {[
                'Design UI/UX AI-optimized per massima conversione',
                'Sviluppo accelerato con AI coding assistance',
                'SEO automatizzato e content optimization',
                'Performance Core Web Vitals al 100%',
                'Funzionalità smart (chatbot, analytics, automazioni)',
                'Testing e debugging AI-powered per zero bug'
              ].map((feature, index) => (
                <div key={index} className="flex items-start animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="ml-3 text-neutral-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Website Builder Visualization */}
            <div className="relative rounded-xl sm:rounded-2xl border border-blue-600/20 bg-gradient-to-br from-neutral-900/95 via-neutral-900/95 to-neutral-900/95 backdrop-blur-sm overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96 group">
              
              {/* Design Studio Header */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 sm:px-6 py-2 sm:py-4 bg-gradient-to-r from-blue-900/50 to-teal-900/50 border-b border-blue-500/20">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Layout className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
                  <span className="text-white font-medium text-sm sm:text-base">AI Website Studio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">AI Active</span>
                  </div>
                  <BrainCircuit className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
                </div>
              </div>
              
              {/* Design Canvas */}
              <div className="absolute inset-0 top-10 sm:top-14 md:top-16 p-3 sm:p-6 space-y-3 sm:space-y-4">
                
                {/* AI Design Suggestions */}
                <div className="bg-blue-900/20 border border-blue-500/30 rounded p-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    <span className="text-xs text-blue-300">AI Design Suggestions</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {['Color theme', 'Layout options', 'Typography'].map((suggestion, i) => (
                      <div key={i} className="flex items-center gap-1 text-xs text-neutral-300">
                        <CheckCircle className="w-2 h-2 text-green-400" />
                        {suggestion}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Live Canvas - Website Being Built */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-neutral-700/30 relative overflow-hidden">
                  <div className="space-y-3">
                    {/* Header Area */}
                    <div className="flex items-center justify-between p-2 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded animate-fade-in" 
                         style={{ animationDelay: '0.8s' }}>
                      <div className="w-16 sm:w-20 h-4 sm:h-5 bg-gradient-to-r from-blue-500 to-teal-500 rounded"></div>
                      <div className="hidden sm:flex gap-2">
                        {['Home', 'About', 'Services'].map((item) => (
                          <div key={item} className="text-xs text-white/70">{item}</div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hero Section */}
                    <div className="bg-gradient-to-br from-teal-600/20 to-green-600/20 p-3 rounded animate-fade-in" 
                         style={{ animationDelay: '1.1s' }}>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1">
                          <div className="h-3 sm:h-4 bg-white/30 rounded mb-2"></div>
                          <div className="h-2 bg-white/20 rounded mb-2"></div>
                          <div className="h-2 bg-white/20 rounded w-3/4"></div>
                        </div>
                        <div className="w-full sm:w-24 h-16 sm:h-20 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded flex items-center justify-center">
                          <Cpu className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 animate-float" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-3 gap-2 animate-fade-in" style={{ animationDelay: '1.4s' }}>
                      {[Zap, Shield, TrendingUp].map((Icon, i) => (
                        <div key={i} className="bg-neutral-800/40 p-2 rounded text-center">
                          <Icon className="w-5 h-5 mx-auto text-green-400 mb-1" />
                          <div className="h-1 bg-white/20 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* AI Enhancement Working */}
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-neutral-900/90 px-2 py-1 rounded-full border border-green-500/30">
                    <RefreshCw className="w-3 h-3 text-green-400 animate-spin" />
                    <span className="text-xs text-green-400">AI Optimizing</span>
                  </div>
                </div>
                
                {/* Performance Metrics - NEW */}
                <div className="flex justify-between bg-neutral-800/60 rounded-lg p-2 sm:p-3 border border-neutral-700/50">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" />
                    <span className="text-xs text-neutral-400">Performance</span>
                  </div>
                  <div className="flex gap-3">
                    {[
                      { label: 'Speed', value: '98', color: 'text-green-400' },
                      { label: 'SEO', value: '100', color: 'text-blue-400' },
                      { label: 'UX', value: '96', color: 'text-purple-400' }
                    ].map((metric) => (
                      <div key={metric.label} className="text-xs">
                        <span className="text-neutral-500">{metric.label}</span>
                        <span className={`ml-1 font-bold ${metric.color}`}>{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* AI Tools Floating */}
              <div className="absolute bottom-4 left-4 flex gap-2 opacity-80 hover:opacity-100 transition-opacity">
                {[
                  { icon: BrainCircuit, label: 'Claude', color: 'text-blue-400' },
                  { icon: Palette, label: 'Midjourney', color: 'text-purple-400' },
                  { icon: Code, label: 'Cursor', color: 'text-green-400' }
                ].map((tool, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 bg-neutral-900/80 backdrop-blur-sm px-2 py-1 rounded border border-neutral-700/30"
                  >
                    <tool.icon className={`w-3 h-3 ${tool.color}`} />
                    <span className="text-xs text-neutral-300">{tool.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Web Development Timeline Comparison - NEW */}
        <section className="mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center animate-fade-in">
            Timeline di Sviluppo: <span className="text-neutral-600">Tradizionale</span> vs <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">AI-Enhanced</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Timeline */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <h3 className="text-xl font-bold text-neutral-400 mb-6 flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Sviluppo Web Tradizionale
              </h3>
              <div className="space-y-4">
                {[
                  { phase: 'Discovery & UX Research', weeks: '1-2' },
                  { phase: 'Design & Mockups', weeks: '2-3' },
                  { phase: 'Frontend Development', weeks: '3-4' },
                  { phase: 'Backend Development', weeks: '2-3' },
                  { phase: 'Content Creation', weeks: '1-2' },
                  { phase: 'Testing & Debugging', weeks: '1-2' },
                  { phase: 'SEO & Optimization', weeks: '1' },
                  { phase: 'Launch & Deploy', weeks: '0.5' }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-neutral-800 last:border-0">
                    <span className="text-neutral-400">{item.phase}</span>
                    <span className="text-white font-medium">{item.weeks} settimane</span>
                  </div>
                ))}
                <div className="border-t border-neutral-800 pt-4 mt-4">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-white">Totale:</span>
                    <span className="text-red-400">11-19 settimane</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AI-Enhanced Timeline */}
            <div className="rounded-2xl border border-blue-600/30 bg-gradient-to-br from-blue-900/10 to-teal-900/10 p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-blue-400" />
                Sviluppo Web AI-Enhanced
              </h3>
              <div className="space-y-4">
                {[
                  { phase: 'AI Strategy & Research', weeks: '0.3', ai: 'Claude, Perplexity' },
                  { phase: 'AI Design Generation', weeks: '0.5', ai: 'Midjourney, Claude' },
                  { phase: 'AI-Assisted Frontend', weeks: '1', ai: 'Cursor, Copilot' },
                  { phase: 'Smart Backend Setup', weeks: '0.5', ai: 'AI Templates' },
                  { phase: 'AI Content Optimization', weeks: '0.3', ai: 'ChatGPT, Claude' },
                  { phase: 'Automated Testing', weeks: '0.2', ai: 'AI Testing' },
                  { phase: 'Auto SEO & Performance', weeks: '0.2', ai: 'SEO AI Tools' },
                  { phase: 'Smart Deploy', weeks: '0.1', ai: 'CI/CD AI' }
                ].map((item, i) => (
                  <div key={i} className="space-y-1 py-2 border-b border-blue-600/20 last:border-0">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-300">{item.phase}</span>
                      <span className="text-green-400 font-medium">{item.weeks} settimane</span>
                    </div>
                    <div className="text-xs text-blue-400 pl-4">{item.ai}</div>
                  </div>
                ))}
                <div className="border-t border-green-600/30 pt-4 mt-4">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-white">Totale:</span>
                    <span className="text-green-400">2-3 settimane</span>
                  </div>
                  <div className="text-sm text-green-400 mt-1 text-center">85% più veloce!</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Enhanced Features for Websites - NEW */}
        <section className="mb-24" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">Funzionalità AI</span> Integrate
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Eye />,
                title: 'SEO AI-Optimized',
                description: 'Ottimizzazione automatica per massima visibilità sui motori di ricerca.',
                features: ['Meta tags dinamici', 'Schema markup auto', 'Content optimization', 'Sitemap smart']
              },
              {
                icon: <MessageCircle />,
                title: 'Chatbot Intelligente',
                description: 'Assistant AI integrato per supporto clienti 24/7.',
                features: ['Risposte contestuali', 'Lead generation', 'FAQ automation', 'Multi-lingua']
              },
              {
                icon: <BarChart3 />,
                title: 'Analytics Predittive',
                description: 'Dashboard con insights automatici sui comportamenti utente.',
                features: ['Heatmaps AI', 'Conversion tracking', 'User journey analysis', 'A/B testing auto']
              },
              {
                icon: <MousePointerClick />,
                title: 'UX Personalizzata',
                description: 'Esperienza che si adatta dinamicamente a ogni visitatore.',
                features: ['Content dinamico', 'CTAs ottimizzate', 'Personalization engine', 'Smart recommendations']
              },
              {
                icon: <Zap />,
                title: 'Performance AI',
                description: 'Ottimizzazione automatica per velocità e Core Web Vitals.',
                features: ['Image optimization', 'Code splitting', 'Lazy loading smart', 'CDN automatico']
              },
              {
                icon: <Shield />,
                title: 'Sicurezza Intelligente',
                description: 'Protezione avanzata con monitoraggio AI.',
                features: ['Threat detection', 'Spam protection', 'SSL automation', 'Backup intelligenti']
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-neutral-800/40 via-neutral-800/20 to-transparent border border-neutral-700/50 rounded-2xl p-6 backdrop-blur-sm hover:from-neutral-800/60 transition-all duration-300 animate-scale-in cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-100 transition-opacity">
                  <BrainCircuit className="w-4 h-4 text-teal-400" />
                </div>
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-200 transition-colors">{feature.title}</h3>
                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-blue-500 to-teal-500 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Tools for Web Development - NEW */}
        <section className="mb-24" aria-labelledby="tools-heading">
          <h2 id="tools-heading" className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">Tool AI</span> per Web Development
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design AI Tools */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-400" />
                Design AI
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Midjourney', use: 'Hero images e backgrounds' },
                  { name: 'Figma AI', use: 'Layout automatico' },
                  { name: 'Claude', use: 'UX copywriting' },
                  { name: 'DALL-E', use: 'Icone personalizzate' }
                ].map((tool, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-neutral-800/30 border border-neutral-700/30 hover:border-purple-500/30 transition-all">
                    <BrainCircuit className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="text-white text-sm font-medium">{tool.name}</div>
                      <div className="text-xs text-neutral-400">{tool.use}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Development AI Tools */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-green-400" />
                Development AI
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Cursor IDE', use: 'AI pair programming' },
                  { name: 'GitHub Copilot', use: 'Code completion' },
                  { name: 'V0', use: 'Component generation' },
                  { name: 'Claude', use: 'Code review e debugging' }
                ].map((tool, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-neutral-800/30 border border-neutral-700/30 hover:border-green-500/30 transition-all">
                    <BrainCircuit className="w-4 h-4 text-green-400" />
                    <div>
                      <div className="text-white text-sm font-medium">{tool.name}</div>
                      <div className="text-xs text-neutral-400">{tool.use}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Content & SEO AI Tools */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-400" />
                Content & SEO AI
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Jasper', use: 'Content creation' },
                  { name: 'Surfer SEO', use: 'SEO optimization' },
                  { name: 'Claude', use: 'Meta descriptions' },
                  { name: 'Screaming Frog', use: 'Technical SEO' }
                ].map((tool, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-neutral-800/30 border border-neutral-700/30 hover:border-blue-500/30 transition-all">
                    <BrainCircuit className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-white text-sm font-medium">{tool.name}</div>
                      <div className="text-xs text-neutral-400">{tool.use}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Web Results Metrics - UPDATED */}
        <section className="mb-24" aria-labelledby="results-heading">
          <h2 id="results-heading" className="text-2xl md:text-3xl font-bold mb-8 text-center animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">Risultati</span> per i Tuoi Siti Web
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: '85%',
                label: 'Più veloce',
                description: 'Sviluppo in 2-3 settimane vs 11-19',
                color: 'from-green-600 to-green-400',
                icon: <Clock />,
                detail: '16 settimane risparmiate'
              },
              {
                metric: '100',
                label: 'Lighthouse Score',
                description: 'Performance, SEO e Accessibilità',
                color: 'from-blue-600 to-blue-400',
                icon: <Gauge />,
                detail: 'Tutte le metriche al top'
              },
              {
                metric: '+47%',
                label: 'Conversioni',
                description: 'Grazie a UX e UI AI-optimized',
                color: 'from-purple-600 to-purple-400',
                icon: <TrendingUp />,
                detail: 'Media su 30 progetti'
              },
              {
                metric: '98%',
                label: 'Uptime',
                description: 'Hosting smart e monitoraggio AI',
                color: 'from-teal-600 to-teal-400',
                icon: <Shield />,
                detail: 'Disponibilità garantita'
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/10 via-teal-500/10 to-green-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-l from-green-600/10 via-teal-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative z-10 bg-gradient-to-br from-neutral-900/80 via-neutral-900/90 to-neutral-900/80 backdrop-blur-md rounded-2xl p-8 border border-neutral-800">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                Trasforma la Tua Vision in Realtà
              </h2>
              <p className="text-lg text-neutral-400 mb-8">
                Non accontentarti di un sito template. Creiamo insieme un'esperienza web unica in sole 2-3 settimane con l'AI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/#contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white rounded-full text-lg font-medium hover:from-blue-500 hover:via-teal-500 hover:to-green-500 transition-all shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calcola i tempi di sviluppo
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

// Custom CSS for enhanced animations
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

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-slide-in {
  animation: slideIn 0.6s ease-out both;
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
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .animate-ping {
    animation-duration: 2s;
  }
  
  .animate-pulse {
    animation-duration: 3s;
  }
}
`