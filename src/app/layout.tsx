import { Inter, Manrope, JetBrains_Mono } from 'next/font/google'
import './globals.css'

// Configurazione font
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
})

export const metadata = {
  title: 'Antonino Daví | AI-Enhanced Digital Solutions Architect',
  description: 'Sviluppo soluzioni digitali potenziate dall\'intelligenza artificiale con approccio full-stack.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-neutral-900 text-white">
        {children}
      </body>
    </html>
  )
}