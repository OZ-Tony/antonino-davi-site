'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Monitor, 
  Smartphone, 
  BrainCircuit, 
  ArrowRight, 
  Database, 
  Code, 
  LineChart, 
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react'

// Definizione dei tipi
type Service = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  detailId: string;
  metric?: string; // New: metric for AI enhancement
};

const ServicesOverview = () => {
  // Mapping tra gli ID locali e quelli delle pagine
  const serviceDetailMap: Record<string, string> = {
    'websites': 'custom-websites',
    'applications': 'web-applications',
    'ai': 'ai-integration'
  };
  
  // Dati dei servizi aggiornati con metriche AI
  const services: Service[] = [
    {
      id: 'websites',
      icon: <Monitor size={32} />,
      title: 'Siti Web Personalizzati',
      description: 'Siti web performanti, accessibili e visivamente accattivanti, progettati per convertire visitatori in clienti.',
      features: [
        'Design AI-optimized per massima conversione',
        'Sviluppo 3x più veloce grazie all\'AI',
        'SEO AI-enhanced per visibilità superiore',
        'Performance elevate (Core Web Vitals ottimizzati)',
        'CMS integrato con automazioni smart',
        'Analytics predittive integrate'
      ],
      color: 'from-blue-600 to-teal-500',
      detailId: serviceDetailMap['websites'],
      metric: '2-3 settimane'
    },
    {
      id: 'applications',
      icon: <Smartphone size={32} />,
      title: 'Applicazioni Web',
      description: 'Applicazioni web e mobile su misura, scalabili e robuste, che risolvono problemi complessi con interfacce intuitive.',
      features: [
        'Architettura AI-assisted per minor complessità',
        'Sviluppo 40% più rapido con AI coding',
        'Testing automatizzato con AI QA',
        'Integrazione API e servizi di terze parti',
        'Real-time features con ML integrato',
        'Deployment intelligente su cloud'
      ],
      color: 'from-purple-600 to-blue-600',
      detailId: serviceDetailMap['applications'],
      metric: '3-5 settimane'
    },
    {
      id: 'ai',
      icon: <BrainCircuit size={32} />,
      title: 'Sviluppo Potenziato dall\'AI',
      description: 'Combino sviluppo full-stack e intelligenza artificiale per creare soluzioni digitali più veloci, eleganti e performanti.',
      features: [
        'Sviluppo 3x più veloce con AI assistance',
        'Qualità del codice superiore (60% meno bug)',
        'Design UI/UX AI-optimized',
        'Feature smart native (chatbot, predictions)',
        'Testing e debugging AI-powered',
        'ROI superiore del 35%'
      ],
      color: 'from-blue-600 to-orange-500',
      detailId: serviceDetailMap['ai'],
      metric: 'Metà tempo'
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-40 -left-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium">
            Servizi AI-Enhanced
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tutti i servizi <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">potenziati dall'AI</span>
          </h2>
          <p className="text-lg text-neutral-400">
            L'intelligenza artificiale è il mio superpotere. Ogni progetto beneficia di sviluppo più veloce, qualità superiore e funzionalità innovative.
          </p>
        </div>

        {/* Card dei servizi - Funzionano su mobile e desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-8 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300 h-full overflow-hidden"
            >
              {/* AI Badge - NEW */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 rounded-full bg-gradient-to-r from-green-600/20 to-teal-600/20 border border-green-500/30">
                <Sparkles className="w-3 h-3 text-green-400" />
                <span className="text-xs font-medium text-green-400">AI-Enhanced</span>
              </div>
              
              {/* Metric Badge - NEW */}
              {service.metric && (
                <div className="absolute top-4 left-4 px-2 py-1 rounded-full bg-blue-900/40 border border-blue-500/30">
                  <span className="text-xs font-medium text-blue-300">{service.metric}</span>
                </div>
              )}
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ 
                backgroundImage: `linear-gradient(to right, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})` 
              }}></div>
              
              {/* Icon */}
              <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-3 text-white shadow-lg`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-neutral-400 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${
                        index === 0 ? 'from-green-500 to-teal-500' : service.color
                      }`}></div>
                    </div>
                    <span className={`ml-3 ${
                      index === 0 ? 'text-white' : 'text-neutral-300'
                    }`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button - Già fixato per mobile */}
              <Link 
                href={`/services/${service.detailId}`}
                className="relative z-10 block"
              >
                <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 mt-auto group">
                  Scopri come l'AI accelera
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                </button>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Sezione "Perché AI-Enhanced" - MIGLIORATA */}
        <div className="mt-24">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Perché ogni progetto <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">beneficia dell'AI</span>?
            </h2>
            <p className="text-lg text-neutral-400">
              L'intelligenza artificiale non è solo un tool, ma il mio superpotere per consegnare risultati superiori in meno tempo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 - AI Enhanced */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-6 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-green-600/30 to-teal-600/30 text-green-400">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">3x Più Veloce</h3>
              <p className="text-neutral-400">
                AI coding assistance accelera lo sviluppo senza compromessi sulla qualità.
              </p>
            </div>
            
            {/* Feature 2 - AI Enhanced */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-6 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-400">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">60% Meno Bug</h3>
              <p className="text-neutral-400">
                AI testing e debugging trovano errori prima che diventino problemi.
              </p>
            </div>
            
            {/* Feature 3 - AI Enhanced */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-6 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500/30 to-blue-500/30 text-teal-400">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Design Intelligente</h3>
              <p className="text-neutral-400">
                AI insights ottimizzano UX per massima conversione e engagement.
              </p>
            </div>
            
            {/* Feature 4 - AI Enhanced */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm p-6 hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600/30 to-orange-500/30 text-blue-400">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Feature Innovative</h3>
              <p className="text-neutral-400">
                Integrazione nativa di AI per funzionalità smart che fanno la differenza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview;