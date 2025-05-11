'use client'

import { ArrowRight, BrainCircuit, Cpu, Layers, Zap } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-black/0"></div>
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1 mb-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium animate-fade-in">
            AI-Enhanced Digital Solutions Architect
          </div>
          
          {/* Metric Badge - NEW */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-gradient-to-r from-green-900/40 to-teal-900/40 border border-green-500/30 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Zap className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Sviluppo 3x più veloce</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            Sviluppo <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">digitale potenziato dall'AI</span>
          </h1>
          
          {/* Enhanced subtitle with concrete benefits */}
          <p className="text-xl text-neutral-400 mb-4 max-w-2xl mx-auto animate-slide-up delay-100">
            Trasformo idee complesse in soluzioni digitali eleganti, completando progetti in <span className="text-white font-medium">metà tempo</span> grazie all'intelligenza artificiale.
          </p>
          
          {/* Added benefits list */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-slide-up delay-150">
            <div className="flex items-center gap-2 text-neutral-500">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Codice superiore</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-500">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm">60% meno bug</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-500">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm">Design intelligente</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
            <Link 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg w-full sm:w-auto group"
            >
              Iniziamo a collaborare
              <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={18} />
            </Link>
            <Link 
              href="#services" 
              className="px-8 py-4 border border-blue-500/30 text-white rounded-full text-lg font-medium hover:bg-blue-900/20 transition-all w-full sm:w-auto"
            >
              Scopri i servizi AI-enhanced
            </Link>
          </div>
        </div>
        
        {/* Floating elements - RIPOSIZIONATI per evitare sovrapposizioni con il testo */}
        {/* DESKTOP - visibili solo su desktop e posizionati strategicamente */}
        <div className="hidden md:block">
          {/* Elemento 1 - in alto a sinistra */}
          <div className="absolute top-10 left-10 md:left-20 lg:left-40 animate-pulse">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-900/50 border border-blue-500/20 text-blue-400 backdrop-blur-sm">
              <BrainCircuit size={28} />
            </div>
          </div>
          
          {/* Elemento 2 - in basso a destra */}
          <div className="absolute bottom-10 right-10 md:right-20 lg:right-32 animate-pulse delay-1000">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-500/20 text-purple-400 backdrop-blur-sm">
              <Cpu size={28} />
            </div>
          </div>
          
          {/* Elemento 3 - a destra */}
          <div className="absolute top-1/3 right-10 md:right-40 lg:right-80 animate-pulse delay-500">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-teal-900/50 border border-teal-500/20 text-teal-400 backdrop-blur-sm">
              <Layers size={28} />
            </div>
          </div>
        </div>
        
        {/* MOBILE - elemento decorativo non invadente */}
        <div className="md:hidden">
          {/* Unico elemento mobile - posizionato in modo da non interferire con il testo */}
          <div className="absolute -bottom-6 right-6 animate-pulse">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-900/40 border border-blue-500/20 text-blue-400 backdrop-blur-sm opacity-60">
              <BrainCircuit size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;