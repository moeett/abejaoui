'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import {
  fadeVariants,
  slideUpVariants,
  slideLeftVariants,
  slideRightVariants,
  scaleVariants,
  staggerContainerVariants,
  staggerItemVariants,
  buttonHoverVariants,
  cardHoverVariants,
  progressBarVariants,
  floatVariants,
  pulseVariants,
} from '@/lib/framer-variants'

// Animated Container
interface AnimatedContainerProps extends HTMLMotionProps<'div'> {
  variant?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'stagger'
  delay?: number
  duration?: number
  className?: string
  children: React.ReactNode
}

export const AnimatedContainer = forwardRef<HTMLDivElement, AnimatedContainerProps>(
  ({ variant = 'fade', delay = 0, duration = 0.6, className, children, ...props }, ref) => {
    const getVariants = () => {
      switch (variant) {
        case 'slideUp':
          return slideUpVariants
        case 'slideLeft':
          return slideLeftVariants
        case 'slideRight':
          return slideRightVariants
        case 'scale':
          return scaleVariants
        case 'stagger':
          return staggerContainerVariants
        default:
          return fadeVariants
      }
    }

    const variants = getVariants()

    // Override transition timing if provided
    const customVariants = {
      ...variants,
      visible: {
        ...variants.visible,
        transition: {
          ...(typeof variants.visible === 'object' && 'transition' in variants.visible
            ? variants.visible.transition
            : {}),
          delay,
          duration,
        },
      },
    }

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={customVariants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

AnimatedContainer.displayName = 'AnimatedContainer'

// Animated Text
interface AnimatedTextProps extends HTMLMotionProps<'div'> {
  text: string
  variant?: 'fade' | 'slideUp' | 'typewriter'
  delay?: number
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

export const AnimatedText = forwardRef<HTMLDivElement, AnimatedTextProps>(
  ({ text, variant = 'slideUp', delay = 0, className, as = 'div', ...props }, ref) => {
    const Component = motion[as] as any

    const getVariants = () => {
      switch (variant) {
        case 'fade':
          return fadeVariants
        case 'typewriter':
          return {
            hidden: { width: 0 },
            visible: {
              width: 'auto',
              transition: { duration: 2, ease: 'linear', delay },
            },
          }
        default:
          return slideUpVariants
      }
    }

    return (
      <Component
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={getVariants()}
        className={className}
        {...props}
      >
        {text}
      </Component>
    )
  }
)

AnimatedText.displayName = 'AnimatedText'

// Animated Button
interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'glass' | 'neo'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, variant = 'primary', size = 'md', className, disabled, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

    const variantClasses = {
      primary:
        'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary/25',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      glass:
        'bg-white/10 backdrop-blur-md border border-white/20 text-foreground hover:bg-white/20',
      neo: 'bg-neutral-100 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] text-foreground hover:shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(255,255,255,0.9)]',
    }

    const sizeClasses = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 px-8 text-lg',
    }

    return (
      <motion.button
        ref={ref}
        variants={buttonHoverVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

AnimatedButton.displayName = 'AnimatedButton'

// Animated Card
interface AnimatedCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  variant?: 'glass' | 'neo' | 'default'
  hover?: boolean
  className?: string
}

export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ children, variant = 'glass', hover = true, className, ...props }, ref) => {
    const baseClasses = 'rounded-2xl p-6 transition-all duration-300'

    const variantClasses = {
      glass: 'bg-white/10 backdrop-blur-md border border-white/20',
      neo: 'bg-neutral-100 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)]',
      default: 'bg-card text-card-foreground border',
    }

    const motionProps = hover
      ? {
          variants: cardHoverVariants,
          initial: 'rest',
          whileHover: 'hover',
        }
      : {
          variants: scaleVariants,
          initial: 'hidden',
          whileInView: 'visible',
          viewport: { once: true, amount: 0.1 },
        }

    return (
      <motion.div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

AnimatedCard.displayName = 'AnimatedCard'

// Animated Progress Bar
interface AnimatedProgressBarProps {
  percentage: number
  label?: string
  showPercentage?: boolean
  className?: string
  barClassName?: string
}

export const AnimatedProgressBar = forwardRef<HTMLDivElement, AnimatedProgressBarProps>(
  ({ percentage, label, showPercentage = true, className, barClassName }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-2', className)}>
        {(label || showPercentage) && (
          <div className="flex justify-between items-center">
            {label && <span className="text-sm font-medium text-foreground">{label}</span>}
            {showPercentage && <span className="text-sm text-muted-foreground">{percentage}%</span>}
          </div>
        )}
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <motion.div
            className={cn(
              'h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full',
              barClassName
            )}
            variants={progressBarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={percentage}
          />
        </div>
      </div>
    )
  }
)

AnimatedProgressBar.displayName = 'AnimatedProgressBar'

// Animated Counter
interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  className?: string
}

export const AnimatedCounter = forwardRef<HTMLSpanElement, AnimatedCounterProps>(
  ({ from = 0, to, duration = 2, className }, ref) => {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {to}
      </motion.span>
    )
  }
)

AnimatedCounter.displayName = 'AnimatedCounter'

// Animated List
interface AnimatedListProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export const AnimatedList = forwardRef<HTMLDivElement, AnimatedListProps>(
  ({ children, className, staggerDelay = 0.1, ...props }, ref) => {
    const customStaggerVariants = {
      ...staggerContainerVariants,
      visible: {
        ...staggerContainerVariants.visible,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.2,
        },
      },
    }

    return (
      <motion.div
        ref={ref}
        variants={customStaggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

AnimatedList.displayName = 'AnimatedList'

// Animated List Item
interface AnimatedListItemProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
}

export const AnimatedListItem = forwardRef<HTMLDivElement, AnimatedListItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div ref={ref} variants={staggerItemVariants} className={className} {...props}>
        {children}
      </motion.div>
    )
  }
)

AnimatedListItem.displayName = 'AnimatedListItem'

// Floating Animation
interface FloatingProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export const Floating = forwardRef<HTMLDivElement, FloatingProps>(
  ({ children, className, intensity = 'medium', ...props }, ref) => {
    const intensityMap = {
      low: { y: [-5, 5, -5], duration: 4 },
      medium: { y: [-10, 10, -10], duration: 3 },
      high: { y: [-15, 15, -15], duration: 2 },
    }

    const customFloatVariants = {
      float: {
        y: intensityMap[intensity].y,
        transition: {
          duration: intensityMap[intensity].duration,
          ease: 'easeInOut',
          repeat: Infinity,
        },
      },
    }

    return (
      <motion.div
        ref={ref}
        variants={customFloatVariants}
        animate="float"
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Floating.displayName = 'Floating'

// Pulse Animation
interface PulseProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
}

export const Pulse = forwardRef<HTMLDivElement, PulseProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={pulseVariants}
        animate="pulse"
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Pulse.displayName = 'Pulse'
