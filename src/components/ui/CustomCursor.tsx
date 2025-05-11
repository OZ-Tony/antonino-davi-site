'use client'

import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [showCursor, setShowCursor] = useState(false)

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      setShowCursor(true)
    }
    
    const handleMouseLeave = () => {
      setShowCursor(false)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!showCursor) return null
  
  return (
    <div 
      className="fixed w-8 h-8 rounded-full border-2 border-blue-500 pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
      style={{ 
        left: `${cursorPosition.x}px`, 
        top: `${cursorPosition.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    />
  )
}