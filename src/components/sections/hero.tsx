'use client'

import { Floating, Pulse } from '@/components/ui/animated-components'
import { personalInfo, socialLinks } from '@/data/content'
import { smoothScrollTo } from '@/lib/utils'
import { useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Smooth spring animations for parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  // Mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height
        setMousePosition({ x: x * 20, y: y * 20 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleContactClick = () => {
    smoothScrollTo('contact')
  }

  const handlePortfolioClick = () => {
    smoothScrollTo('portfolio')
  }

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-dark-50 dark:via-dark-100 dark:to-dark-200" />

        {/* 3D Geometric shapes */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Large geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-primary-400/20 rounded-3xl transform rotate-45 blur-sm" />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-primary-300/20 to-primary-500/20 rounded-2xl transform -rotate-12 blur-sm" />
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-xl transform rotate-12 blur-sm" />
        </div>

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/10 to-transparent dark:via-primary-900/10" />
      </div>

      {/* Enhanced 3D Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary particles with 3D transforms */}
        <Floating intensity="low" className="absolute top-1/4 left-1/4">
          <div
            className="transform-gpu"
            style={{
              transform: `translateZ(${mousePosition.x * 2}px) rotateY(${mousePosition.x * 0.5}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Pulse>
              <div className="w-3 h-3 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-lg shadow-primary/25" />
            </Pulse>
          </div>
        </Floating>

        <Floating intensity="medium" className="absolute top-1/3 right-1/3">
          <div
            className="transform-gpu"
            style={{
              transform: `translateZ(${mousePosition.y * -1.5}px) rotateX(${mousePosition.y * 0.3}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Pulse>
              <div className="w-2 h-2 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full shadow-md shadow-primary/20" />
            </Pulse>
          </div>
        </Floating>

        <Floating intensity="high" className="absolute bottom-1/4 left-1/3">
          <div
            className="transform-gpu"
            style={{
              transform: `translateZ(${mousePosition.x * -1}px) rotateZ(${mousePosition.x * 0.2}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Pulse>
              <div className="w-4 h-4 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full shadow-xl shadow-primary/30" />
            </Pulse>
          </div>
        </Floating>

        <Floating intensity="low" className="absolute top-2/3 right-1/4">
          <div
            className="transform-gpu"
            style={{
              transform: `translateZ(${mousePosition.y * 1.2}px) rotateY(${mousePosition.y * -0.4}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Pulse>
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full shadow-lg shadow-primary/25" />
            </Pulse>
          </div>
        </Floating>

        {/* Additional smaller particles for depth */}
        {Array.from({ length: 8 }).map((_, i) => (
          <Floating
            key={i}
            intensity={i % 2 === 0 ? 'low' : 'medium'}
            className={`absolute`}
            style={{
              top: `${20 + i * 10}%`,
              left: `${15 + i * 8}%`,
              transform: `translateZ(${mousePosition.x * (i % 2 === 0 ? 0.5 : -0.5)}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className={`w-1 h-1 bg-primary-${400 + (i % 3) * 100} rounded-full opacity-60`} />
          </Floating>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Enhanced Content with 3D Typography */}
          <div
            className="flex-1 text-center lg:text-left"
            style={{
              transform: `translateZ(${mousePosition.x * 0.5}px) rotateY(${mousePosition.x * 0.1}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="space-y-8">
              {/* Main heading with 3D text effect */}
              <div className="space-y-4">
                <div className="relative">
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 leading-tight">
                    Hi, I&apos;m
                    <br />
                    <span className="relative inline-block">
                      Ahmed
                      {/* 3D text shadow effect */}
                      <span
                        className="absolute inset-0 text-primary-300/30 -z-10"
                        style={{
                          transform: 'translate(2px, 2px)',
                        }}
                      >
                        Ahmed
                      </span>
                      <span
                        className="absolute inset-0 text-primary-200/20 -z-20"
                        style={{
                          transform: 'translate(4px, 4px)',
                        }}
                      >
                        Ahmed
                      </span>
                    </span>
                  </h1>
                </div>

                <div className="relative">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-muted-foreground/90 leading-relaxed">
                    {personalInfo.title}
                  </h2>
                  {/* Animated underline */}
                  <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full animate-[expand_2s_ease-out_1s_forwards]" />
                </div>
              </div>

              {/* Enhanced description */}
              <div className="relative max-w-2xl">
                <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed font-light">
                  {personalInfo.description}
                </p>
                {/* Decorative elements */}
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary-500/50 to-transparent rounded-full" />
              </div>

              {/* Enhanced action buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                <button
                  onClick={handleContactClick}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  style={{
                    transform: `translateZ(${mousePosition.x * 0.2}px)`,
                  }}
                >
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <button
                  onClick={handlePortfolioClick}
                  className="group relative px-8 py-4 glass border border-white/20 text-foreground font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  style={{
                    transform: `translateZ(${mousePosition.x * -0.2}px)`,
                  }}
                >
                  <span className="relative z-10">View Portfolio</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced 3D Profile Image */}
          <div
            className="flex-shrink-0 relative"
            style={{
              transform: `translateZ(${mousePosition.y * -0.5}px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * -0.1}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Floating intensity="low">
              <div className="relative group">
                {/* Main profile container with 3D effect */}
                <div className="w-72 h-72 md:w-96 md:h-96 relative">
                  {/* Outer ring with gradient */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 p-2 shadow-2xl shadow-primary/30">
                    {/* Inner container */}
                    <div className="w-full h-full rounded-full bg-background/95 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                      {/* Profile content */}
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 dark:from-primary-900 dark:via-primary-800 dark:to-primary-700 flex items-center justify-center text-7xl md:text-9xl relative">
                        👨‍💻
                        {/* Animated overlay */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/10 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Multiple glow layers for depth */}
                  <Pulse>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 opacity-20 blur-2xl scale-110" />
                  </Pulse>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-300 to-primary-500 opacity-10 blur-3xl scale-125" />

                  {/* Floating decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-lg animate-bounce" />
                  <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full shadow-md animate-pulse" />
                  <div className="absolute top-1/4 -left-8 w-4 h-4 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full shadow-sm animate-ping" />
                </div>

                {/* 3D reflection effect */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-t from-white/20 to-transparent opacity-30 pointer-events-none"
                  style={{
                    transform: 'rotateX(45deg) translateZ(1px)',
                  }}
                />
              </div>
            </Floating>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-start mt-12 space-x-6">
          {socialLinks.slice(0, 4).map(social => (
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
    medium: '📝',
  }
  return icons[icon] || '🔗'
}
