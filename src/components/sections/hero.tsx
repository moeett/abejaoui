"use client"

import { personalInfo, socialLinks } from '@/data/content'
import { smoothScrollTo } from '@/lib/utils'
import { AnimatedContainer, AnimatedText, AnimatedButton, Floating, Pulse } from '@/components/ui/animated-components'

export function Hero() {
  const handleContactClick = () => {
    smoothScrollTo('contact')
  }

  const handlePortfolioClick = () => {
    smoothScrollTo('portfolio')
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-50 dark:via-dark-100 dark:to-dark-200" />
      
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        <Floating intensity="low" className="absolute top-1/4 left-1/4">
          <Pulse>
            <div className="w-2 h-2 bg-primary-400 rounded-full" />
          </Pulse>
        </Floating>
        <Floating intensity="medium" className="absolute top-1/3 right-1/3">
          <Pulse>
            <div className="w-1 h-1 bg-primary-500 rounded-full" />
          </Pulse>
        </Floating>
        <Floating intensity="high" className="absolute bottom-1/4 left-1/3">
          <Pulse>
            <div className="w-3 h-3 bg-primary-300 rounded-full" />
          </Pulse>
        </Floating>
        <Floating intensity="low" className="absolute top-2/3 right-1/4">
          <Pulse>
            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
          </Pulse>
        </Floating>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <AnimatedContainer variant="slideUp" className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <AnimatedContainer variant="slideUp" delay={0.2}>
                <div className="space-y-2">
                  <AnimatedText
                    text="Hi, I'm Ahmed"
                    as="h1"
                    variant="slideUp"
                    delay={0.3}
                    className="text-4xl md:text-6xl font-bold text-foreground"
                  />
                  <AnimatedText
                    text={personalInfo.title}
                    as="h2"
                    variant="slideUp"
                    delay={0.4}
                    className="text-2xl md:text-4xl font-semibold text-muted-foreground"
                  />
                </div>
              </AnimatedContainer>

              <AnimatedText
                text={personalInfo.description}
                as="p"
                variant="slideUp"
                delay={0.5}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              />

              <AnimatedContainer variant="slideUp" delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AnimatedButton
                  onClick={handleContactClick}
                  variant="primary"
                >
                  Contact Me
                </AnimatedButton>
                <AnimatedButton
                  onClick={handlePortfolioClick}
                  variant="glass"
                >
                  View Portfolio
                </AnimatedButton>
              </AnimatedContainer>
            </div>
          </AnimatedContainer>

          {/* Profile Image */}
          <AnimatedContainer variant="scale" delay={0.7} className="flex-shrink-0">
            <Floating intensity="low">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center text-6xl md:text-8xl">
                      👨‍💻
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <Pulse>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 opacity-20 blur-xl" />
                </Pulse>
              </div>
            </Floating>
          </AnimatedContainer>
        </div>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-start mt-12 space-x-6">
          {socialLinks.slice(0, 4).map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 rounded-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              aria-label={social.name}
            >
              <span className="text-xl">{getSocialIcon(social.icon)}</span>
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-muted-foreground">
            <span className="text-sm">Scroll down</span>
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function getSocialIcon(icon: string): string {
  const icons: Record<string, string> = {
    linkedin: '💼',
    github: '🐙',
    youtube: '📺',
    instagram: '📸',
    spotify: '🎵',
    medium: '📝'
  }
  return icons[icon] || '🔗'
}
