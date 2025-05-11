import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import Hero from '@/components/sections/Hero'
import ServicesOverview from '@/components/sections/ServicesOverview'
import Skills from '@/components/sections/Skills'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <CustomCursor />
      <Header />
      <Hero />
      <ServicesOverview />
      <Skills />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}