'use client'

import Link from 'next/link'
import { Linkedin, Github, Twitter, Mail, ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Gestione del pulsante "torna in alto"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Funzione per scorrere verso l'alto
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="relative bg-neutral-950 pt-16 pb-10 border-t border-neutral-800 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Griglia principale del footer - ridisegnata per evitare sovrapposizioni */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Colonna 1: Logo e breve descrizione */}
          <div className="md:col-span-5">
            {/* Logo senza box, coerente con l'header */}
            <div className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Antonino</span>
              <span className="text-white ml-1">Daví</span>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              AI-Enhanced Digital Solutions Architect. Unisco competenze tecniche ed expertise nell'intelligenza artificiale per creare soluzioni digitali innovative.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://linkedin.com/in/antoninodavi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-blue-900/30 hover:text-blue-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/antoninodavi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://twitter.com/antoninodavi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-blue-600/30 hover:text-blue-400 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="mailto:contact@antoninodavi.com" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-800 text-neutral-400 hover:bg-blue-900/30 hover:text-blue-400 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Colonna centrale - Collegamenti rapidi */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-4">Collegamenti rapidi</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Servizi
                </a>
              </li>
              <li>
                <a href="#skills" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Competenze
                </a>
              </li>
              <li>
                <a href="#process" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Processo di lavoro
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>
          
          {/* Colonna 3: Servizi */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold text-lg mb-4">Servizi</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Sviluppo Siti Web
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Applicazioni Web
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Integrazione AI
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-blue-400 transition-colors">
                  Consulenza Tecnologica
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Separatore */}
        <div className="h-px bg-neutral-800 w-full my-8"></div>
        
        {/* Sezione copyright - redesign con struttura più semplice */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Antonino Daví. Tutti i diritti riservati.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors">
              Cookies
            </a>
            <a href="#" className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors">
              Termini di servizio
            </a>
          </div>
        </div>
      </div>
      
      {/* Sfondo potenziato per migliorare visibilità del testo chiaro su sfondo scuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-black opacity-50 z-0"></div>
      
      {/* Pulsante "torna in alto" */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-500 transition-all z-50 animate-fade-in"
          aria-label="Torna in alto"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  )
}

export default Footer;