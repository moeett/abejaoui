export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    linkedin: string
    github: string
    youtube: string
    instagram: string
    spotify: string
    medium: string
    email: string
    calendly: string
  }
}

export interface PersonalInfo {
  name: string
  title: string
  description: string
  location: string
  email: string
  calendly: string
  cvUrl: string
  profileImage: string
}

export interface Skill {
  name: string
  percentage: number
}

export interface SkillCategory {
  name: string
  experience: string
  skills: Skill[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
}

export interface Award {
  title: string
  authority: string
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  demoUrl?: string
  codeUrl?: string
  featured?: boolean
  category?: string
}

export interface Testimonial {
  id: number
  name: string
  title: string
  relationship: string
  content: string
  avatar?: string
  linkedinUrl?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface Statistics {
  years: string
  projects: string
  companies: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
  color?: string
}

export interface NavigationItem {
  name: string
  href: string
  id: string
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  canonicalUrl: string
}

export interface AnimationConfig {
  duration: number
  delay?: number
  easing?: string
  threshold?: number
}

export interface ThemeConfig {
  defaultTheme: 'light' | 'dark' | 'system'
  enableSystem: boolean
  disableTransitionOnChange: boolean
}

// Component Props Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'glass' | 'neo'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
  variant?: 'glass' | 'neo' | 'default'
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export interface SectionProps {
  id: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  background?: 'default' | 'muted' | 'gradient'
}

export interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showPercentage?: boolean
  animated?: boolean
  color?: 'primary' | 'secondary' | 'accent'
  className?: string
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export interface ToastProps {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

// Hook Types
export interface UseScrollOptions {
  threshold?: number
  rootMargin?: string
}

export interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
}

export interface UseLocalStorageOptions<T> {
  defaultValue: T
  serializer?: {
    read: (value: string) => T
    write: (value: T) => string
  }
}

// API Types
export interface ContactFormResponse {
  success: boolean
  message: string
  error?: string
}

export interface NewsletterSubscription {
  email: string
  source?: string
}

// Error Types
export interface AppError {
  message: string
  code?: string
  statusCode?: number
  details?: any
}

// Utility Types
export type Theme = 'light' | 'dark'
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type Direction = 'up' | 'down' | 'left' | 'right'
export type Status = 'idle' | 'loading' | 'success' | 'error'
