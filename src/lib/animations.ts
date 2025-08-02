import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Animation configurations
export const animationConfig = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    slower: 1.5,
  },
  ease: {
    power1: 'power1.out',
    power2: 'power2.out',
    power3: 'power3.out',
    back: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)',
    bounce: 'bounce.out',
  },
  stagger: {
    fast: 0.1,
    normal: 0.2,
    slow: 0.3,
  },
}

// Fade in up animation
export const fadeInUp = (element: string | Element, options: any = {}) => {
  const defaults = {
    duration: animationConfig.duration.normal,
    ease: animationConfig.ease.power2,
    y: 30,
    opacity: 0,
    delay: 0,
  }

  const config = { ...defaults, ...options }

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: config.y,
    },
    {
      opacity: 1,
      y: 0,
      duration: config.duration,
      ease: config.ease,
      delay: config.delay,
    }
  )
}

// Fade in left animation
export const fadeInLeft = (element: string | Element, options: any = {}) => {
  const defaults = {
    duration: animationConfig.duration.normal,
    ease: animationConfig.ease.power2,
    x: -30,
    opacity: 0,
    delay: 0,
  }

  const config = { ...defaults, ...options }

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x: config.x,
    },
    {
      opacity: 1,
      x: 0,
      duration: config.duration,
      ease: config.ease,
      delay: config.delay,
    }
  )
}

// Fade in right animation
export const fadeInRight = (element: string | Element, options: any = {}) => {
  const defaults = {
    duration: animationConfig.duration.normal,
    ease: animationConfig.ease.power2,
    x: 30,
    opacity: 0,
    delay: 0,
  }

  const config = { ...defaults, ...options }

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      x: config.x,
    },
    {
      opacity: 1,
      x: 0,
      duration: config.duration,
      ease: config.ease,
      delay: config.delay,
    }
  )
}

// Scale in animation
export const scaleIn = (element: string | Element, options: any = {}) => {
  const defaults = {
    duration: animationConfig.duration.normal,
    ease: animationConfig.ease.back,
    scale: 0.8,
    opacity: 0,
    delay: 0,
  }

  const config = { ...defaults, ...options }

  return gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: config.scale,
    },
    {
      opacity: 1,
      scale: 1,
      duration: config.duration,
      ease: config.ease,
      delay: config.delay,
    }
  )
}

// Stagger animation
export const staggerAnimation = (elements: string | Element[], options: any = {}) => {
  const defaults = {
    duration: animationConfig.duration.normal,
    ease: animationConfig.ease.power2,
    y: 30,
    opacity: 0,
    stagger: animationConfig.stagger.normal,
  }

  const config = { ...defaults, ...options }

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: config.y,
    },
    {
      opacity: 1,
      y: 0,
      duration: config.duration,
      ease: config.ease,
      stagger: config.stagger,
    }
  )
}

// Progress bar animation
export const animateProgressBar = (
  element: string | Element,
  percentage: number,
  options: any = {}
) => {
  const defaults = {
    duration: animationConfig.duration.slow,
    ease: animationConfig.ease.power2,
    delay: 0,
  }

  const config = { ...defaults, ...options }

  return gsap.fromTo(
    element,
    {
      width: '0%',
    },
    {
      width: `${percentage}%`,
      duration: config.duration,
      ease: config.ease,
      delay: config.delay,
    }
  )
}

// Counter animation
export const animateCounter = (element: string | Element, endValue: number, options: any = {}) => {
  const defaults = {
    duration: animationConfig.duration.slow,
    ease: animationConfig.ease.power2,
    delay: 0,
  }

  const config = { ...defaults, ...options }

  const obj = { value: 0 }

  return gsap.to(obj, {
    value: endValue,
    duration: config.duration,
    ease: config.ease,
    delay: config.delay,
    onUpdate: () => {
      if (typeof element === 'string') {
        const el = document.querySelector(element)
        if (el) el.textContent = Math.round(obj.value).toString()
      } else {
        element.textContent = Math.round(obj.value).toString()
      }
    },
  })
}

// Scroll-triggered animation
export const scrollTriggerAnimation = (
  element: string | Element,
  animation: any,
  options: any = {}
) => {
  const defaults = {
    trigger: element,
    start: 'top 80%',
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    once: true,
  }

  const config = { ...defaults, ...options }

  return ScrollTrigger.create({
    ...config,
    animation: animation,
  })
}

// Parallax effect
export const parallaxEffect = (element: string | Element, options: any = {}) => {
  const defaults = {
    yPercent: -50,
    ease: 'none',
  }

  const config = { ...defaults, ...options }

  return gsap.to(element, {
    yPercent: config.yPercent,
    ease: config.ease,
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}

// Hover animations
export const hoverLift = (element: string | Element) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element
  if (!el) return

  el.addEventListener('mouseenter', () => {
    gsap.to(el, {
      y: -8,
      duration: animationConfig.duration.fast,
      ease: animationConfig.ease.power2,
    })
  })

  el.addEventListener('mouseleave', () => {
    gsap.to(el, {
      y: 0,
      duration: animationConfig.duration.fast,
      ease: animationConfig.ease.power2,
    })
  })
}

// Click animation
export const clickScale = (element: string | Element) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element
  if (!el) return

  el.addEventListener('mousedown', () => {
    gsap.to(el, {
      scale: 0.95,
      duration: 0.1,
      ease: animationConfig.ease.power2,
    })
  })

  el.addEventListener('mouseup', () => {
    gsap.to(el, {
      scale: 1,
      duration: 0.2,
      ease: animationConfig.ease.back,
    })
  })

  el.addEventListener('mouseleave', () => {
    gsap.to(el, {
      scale: 1,
      duration: 0.2,
      ease: animationConfig.ease.power2,
    })
  })
}

// Timeline creation helper
export const createTimeline = (options: any = {}) => {
  return gsap.timeline(options)
}

// Kill all animations
export const killAllAnimations = () => {
  gsap.killTweensOf('*')
  ScrollTrigger.killAll()
}

// Refresh ScrollTrigger
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh()
}
