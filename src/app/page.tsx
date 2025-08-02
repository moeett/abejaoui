import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Portfolio } from '@/components/sections/portfolio'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/layout/footer'
import { FloatingSocial } from '@/components/ui/floating-social'
import { BackToTop } from '@/components/ui/back-to-top'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
      
      <Footer />
      
      {/* Floating elements */}
      <FloatingSocial />
      <BackToTop />
    </main>
  )
}
