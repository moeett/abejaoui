'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import * as React from 'react'
import { useEffect, useState } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: 'class' | 'data-theme' | 'data-mode'
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Add smooth transition classes to body
    const body = document.body
    body.style.transition = 'background-color 0.3s ease, color 0.3s ease'

    // Add transition to all elements for theme switching
    const style = document.createElement('style')
    style.textContent = `
      *, *::before, *::after {
        transition: background-color 0.3s ease,
                    border-color 0.3s ease,
                    color 0.3s ease,
                    fill 0.3s ease,
                    stroke 0.3s ease,
                    opacity 0.3s ease,
                    box-shadow 0.3s ease,
                    transform 0.3s ease !important;
      }

      /* Disable transitions during theme change to prevent flash */
      .theme-transition-disable *,
      .theme-transition-disable *::before,
      .theme-transition-disable *::after {
        transition: none !important;
      }

      /* Enhanced focus styles for accessibility */
      *:focus-visible {
        outline: 2px solid hsl(var(--primary));
        outline-offset: 2px;
        border-radius: 4px;
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          transition: none !important;
          animation: none !important;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
