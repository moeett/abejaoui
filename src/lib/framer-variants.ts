import { Variants } from 'framer-motion'

// Page transition variants
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
}

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6,
}

// Fade variants
export const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Slide up variants
export const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Slide left variants
export const slideLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Slide right variants
export const slideRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Scale variants
export const scaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Stagger container variants
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Stagger item variants
export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Button hover variants
export const buttonHoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.95,
    y: 0,
    transition: {
      duration: 0.1,
      ease: 'easeOut',
    },
  },
}

// Card hover variants
export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
  },
  hover: {
    scale: 1.02,
    y: -8,
    rotateX: 5,
    rotateY: 5,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

// Float animation variants
export const floatVariants: Variants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

// Pulse animation variants
export const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

// Rotate animation variants
export const rotateVariants: Variants = {
  rotate: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: 'linear',
      repeat: Infinity,
    },
  },
}

// Progress bar variants
export const progressBarVariants: Variants = {
  hidden: {
    width: '0%',
  },
  visible: (percentage: number) => ({
    width: `${percentage}%`,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      delay: 0.5,
    },
  }),
}

// Modal variants
export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
}

// Backdrop variants
export const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}

// Navigation menu variants
export const menuVariants: Variants = {
  closed: {
    x: '100%',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
}

// Menu item variants
export const menuItemVariants: Variants = {
  closed: {
    opacity: 0,
    x: 20,
  },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
}

// Typewriter effect variants
export const typewriterVariants: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: 'auto',
    transition: {
      duration: 2,
      ease: 'linear',
    },
  },
}

// Reveal variants (for text)
export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

// Bounce variants
export const bounceVariants: Variants = {
  bounce: {
    y: [0, -20, 0],
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
}

// Shake variants
export const shakeVariants: Variants = {
  shake: {
    x: [-5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

// Loading spinner variants
export const spinnerVariants: Variants = {
  spin: {
    rotate: 360,
    transition: {
      duration: 1,
      ease: 'linear',
      repeat: Infinity,
    },
  },
}

// Gradient animation variants
export const gradientVariants: Variants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 3,
      ease: 'linear',
      repeat: Infinity,
    },
  },
}
