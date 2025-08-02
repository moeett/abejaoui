'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Simple hook for intersection observer
export const useInViewAnimation = (options: any = {}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  })

  return { ref, inView }
}

// Hook for GSAP animations
export const useGSAPAnimation = () => {
  const ref = useRef<HTMLElement>(null)

  const animate = (animation: any) => {
    if (ref.current) {
      return animation(ref.current)
    }
  }

  return { ref, animate }
}
