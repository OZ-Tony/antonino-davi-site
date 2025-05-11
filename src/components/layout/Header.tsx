'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
      
      // Get the current active section
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(section => {
        // Cast Element to HTMLElement to access offsetTop and offsetHeight
        const htmlElement = section as HTMLElement
        const sectionTop = htmlElement.offsetTop - 100
        const sectionHeight = htmlElement.offsetHeight
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          const sectionId = section.getAttribute('id')
          if (sectionId) {
            setActiveSection(sectionId)
          }
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Disabilita lo scroll quando il menu mobile è aperto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  // Gestisci il click sui link di navigazione
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Header fisso */}
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrollPosition > 50 
          ? 'bg-neutral-900/90 backdrop-blur-md py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold relative z-[100]">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Antonino</span>
            <span className="text-white ml-1">Daví</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#services" 
              onClick={(e) => handleNavLinkClick(e, 'services')}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${activeSection === 'services' ? 'text-blue-500' : 'text-white/80'}`}
            >
              Servizi
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleNavLinkClick(e, 'skills')}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${activeSection === 'skills' ? 'text-blue-500' : 'text-white/80'}`}
            >
              Competenze
            </a>
            <a 
              href="#process" 
              onClick={(e) => handleNavLinkClick(e, 'process')}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${activeSection === 'process' ? 'text-blue-500' : 'text-white/80'}`}
            >
              Processo
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavLinkClick(e, 'contact')}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all shadow-md"
            >
              Contattami
            </a>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white relative z-[100]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation - separato completamente dal flusso principale */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-neutral-950/98 backdrop-blur-md z-[90] flex flex-col justify-center">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-8">
            <a 
              href="#services" 
              onClick={(e) => handleNavLinkClick(e, 'services')}
              className="text-2xl font-medium py-3 text-center text-white hover:text-blue-400 transition-colors"
            >
              Servizi
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleNavLinkClick(e, 'skills')}
              className="text-2xl font-medium py-3 text-center text-white hover:text-blue-400 transition-colors"
            >
              Competenze
            </a>
            <a 
              href="#process" 
              onClick={(e) => handleNavLinkClick(e, 'process')}
              className="text-2xl font-medium py-3 text-center text-white hover:text-blue-400 transition-colors"
            >
              Processo
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavLinkClick(e, 'contact')}
              className="mt-6 mx-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all text-center shadow-md w-full max-w-xs"
            >
              Contattami
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Header;