'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'glass' | 'neo'
}

export function ThemeToggle({ className, size = 'md', variant = 'glass' }: ThemeToggleProps) {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  const toggleTheme = async () => {
    if (isAnimating) return

    setIsAnimating(true)

    // Add a brief delay for smooth animation
    await new Promise(resolve => setTimeout(resolve, 150))

    setTheme(isDark ? 'light' : 'dark')

    // Reset animation state
    setTimeout(() => setIsAnimating(false), 300)
  }

  if (!mounted) {
    return (
      <div
        className={cn(
          'rounded-xl',
          size === 'sm' && 'w-8 h-8',
          size === 'md' && 'w-12 h-12',
          size === 'lg' && 'w-14 h-14',
          className
        )}
      />
    )
  }

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-lg',
    lg: 'w-14 h-14 text-xl',
  }

  const variantClasses = {
    default: 'bg-background border border-border hover:bg-accent',
    glass: 'glass hover:bg-white/20',
    neo: 'neo hover:shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(255,255,255,0.9)]',
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className={cn(
        'relative flex items-center justify-center rounded-xl transition-all duration-300 group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        sizeClasses[size],
        variantClasses[variant],
        isAnimating && 'pointer-events-none',
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      role="switch"
      aria-checked={isDark}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        layoutId="theme-glow"
      />

      {/* Icon container */}
      <div className="relative z-10 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? 'dark' : 'light'}
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            className="flex items-center justify-center"
          >
            {isDark ? (
              <SunIcon
                className={size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'}
              />
            ) : (
              <MoonIcon
                className={size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        initial={false}
        animate={isAnimating ? { scale: [1, 1.2, 1], opacity: [0, 0.3, 0] } : {}}
        transition={{ duration: 0.6 }}
        style={{
          background: `radial-gradient(circle, ${isDark ? 'rgba(251, 191, 36, 0.3)' : 'rgba(59, 130, 246, 0.3)'} 0%, transparent 70%)`,
        }}
      />
    </motion.button>
  )
}

// Sun Icon Component
function SunIcon({ className }: { className?: string }) {
  return (
    <motion.svg
      className={cn('text-yellow-500', className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </motion.svg>
  )
}

// Moon Icon Component
function MoonIcon({ className }: { className?: string }) {
  return (
    <motion.svg
      className={cn('text-blue-400', className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      initial={{ rotate: 0 }}
      animate={{ rotate: -30 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </motion.svg>
  )
}

// System Theme Toggle (3-state toggle)
interface SystemThemeToggleProps {
  className?: string
}

export function SystemThemeToggle({ className }: SystemThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={cn('w-32 h-10 rounded-lg', className)} />
  }

  const themes = [
    { value: 'light', label: 'Light', icon: '☀️' },
    { value: 'dark', label: 'Dark', icon: '🌙' },
    { value: 'system', label: 'System', icon: '💻' },
  ]

  return (
    <div className={cn('flex items-center glass rounded-lg p-1', className)}>
      {themes.map(themeOption => (
        <motion.button
          key={themeOption.value}
          onClick={() => setTheme(themeOption.value)}
          className={cn(
            'relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200',
            theme === themeOption.value
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {theme === themeOption.value && (
            <motion.div
              className="absolute inset-0 bg-primary rounded-md"
              layoutId="theme-selector"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-1">
            <span>{themeOption.icon}</span>
            <span className="hidden sm:inline">{themeOption.label}</span>
          </span>
        </motion.button>
      ))}
    </div>
  )
}

// Theme Status Indicator
export function ThemeStatusIndicator() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme
  const isDark = currentTheme === 'dark'

  return (
    <motion.div
      className="fixed bottom-4 right-4 glass rounded-lg px-3 py-2 text-xs font-medium z-50"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.3 }}
    >
      <div className="flex items-center gap-2">
        <div className={cn('w-2 h-2 rounded-full', isDark ? 'bg-blue-400' : 'bg-yellow-500')} />
        <span className="capitalize">
          {theme === 'system' ? `System (${systemTheme})` : theme} mode
        </span>
      </div>
    </motion.div>
  )
}
