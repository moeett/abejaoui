# 🎨 PORTFOLIO DESIGN SYSTEM 2025

## Modern Design Specification for Ahmed's Portfolio

---

## 🌈 COLOR PALETTE

### Primary Colors

```css
--primary-50: #f0f9ff --primary-100: #e0f2fe --primary-200: #bae6fd --primary-300: #7dd3fc
  --primary-400: #38bdf8 --primary-500: #0ea5e9 /* Main Brand */ --primary-600: #0284c7
  --primary-700: #0369a1 --primary-800: #075985 --primary-900: #0c4a6e;
```

### Neutral Colors (Dark/Light Mode)

```css
/* Light Mode */
--neutral-50: #fafafa --neutral-100: #f5f5f5 --neutral-200: #e5e5e5 --neutral-300: #d4d4d4
  --neutral-400: #a3a3a3 --neutral-500: #737373 --neutral-600: #525252 --neutral-700: #404040
  --neutral-800: #262626 --neutral-900: #171717 /* Dark Mode */ --dark-50: #18181b
  --dark-100: #27272a --dark-200: #3f3f46 --dark-300: #52525b --dark-400: #71717a
  --dark-500: #a1a1aa --dark-600: #d4d4d8 --dark-700: #e4e4e7 --dark-800: #f4f4f5
  --dark-900: #fafafa;
```

### Accent Colors

```css
--accent-purple: #8b5cf6 --accent-pink: #ec4899 --accent-orange: #f97316 --accent-green: #10b981
  --accent-yellow: #f59e0b --accent-red: #ef4444;
```

### Glassmorphism Colors

```css
--glass-white: rgba(255, 255, 255, 0.1) --glass-white-border: rgba(255, 255, 255, 0.2)
  --glass-dark: rgba(0, 0, 0, 0.1) --glass-dark-border: rgba(0, 0, 0, 0.2) --glass-blur: blur(16px);
```

---

## 📝 TYPOGRAPHY

### Font Families

```css
--font-primary:
  'Inter', -apple-system, BlinkMacSystemFont, sans-serif --font-heading: 'Clash Display', 'Inter',
  sans-serif --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Font Sizes (Fluid Typography)

```css
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem)
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem)
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem)
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem)
  --text-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)
  --text-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem) --text-5xl: clamp(3rem, 2.5rem + 2.5vw, 4rem)
  --text-6xl: clamp(4rem, 3rem + 5vw, 6rem);
```

### Font Weights

```css
--font-light: 300 --font-normal: 400 --font-medium: 500 --font-semibold: 600 --font-bold: 700
  --font-extrabold: 800;
```

### Line Heights

```css
--leading-tight: 1.25 --leading-snug: 1.375 --leading-normal: 1.5 --leading-relaxed: 1.625
  --leading-loose: 2;
```

---

## 📐 SPACING & LAYOUT

### Spacing Scale

```css
--space-1: 0.25rem /* 4px */ --space-2: 0.5rem /* 8px */ --space-3: 0.75rem /* 12px */
  --space-4: 1rem /* 16px */ --space-5: 1.25rem /* 20px */ --space-6: 1.5rem /* 24px */
  --space-8: 2rem /* 32px */ --space-10: 2.5rem /* 40px */ --space-12: 3rem /* 48px */
  --space-16: 4rem /* 64px */ --space-20: 5rem /* 80px */ --space-24: 6rem /* 96px */
  --space-32: 8rem /* 128px */;
```

### Container Sizes

```css
--container-sm: 640px --container-md: 768px --container-lg: 1024px --container-xl: 1280px
  --container-2xl: 1536px --container-max: 1600px;
```

### Border Radius

```css
--radius-sm: 0.375rem --radius-md: 0.5rem --radius-lg: 0.75rem --radius-xl: 1rem
  --radius-2xl: 1.5rem --radius-3xl: 2rem --radius-full: 9999px;
```

---

## ✨ GLASSMORPHISM EFFECTS

### Glass Card Styles

```css
.glass-card {
  background: var(--glass-white);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-white-border);
  border-radius: var(--radius-xl);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-card-dark {
  background: var(--glass-dark);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-dark-border);
  border-radius: var(--radius-xl);
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.05);
}
```

### Glass Navigation

```css
.glass-nav {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
```

---

## 🎭 NEOMORPHISM EFFECTS

### Soft UI Elements

```css
.neo-button {
  background: var(--neutral-100);
  border-radius: var(--radius-xl);
  box-shadow:
    8px 8px 16px rgba(0, 0, 0, 0.1),
    -8px -8px 16px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.neo-button:hover {
  box-shadow:
    4px 4px 8px rgba(0, 0, 0, 0.15),
    -4px -4px 8px rgba(255, 255, 255, 0.9);
}

.neo-button:active {
  box-shadow:
    inset 4px 4px 8px rgba(0, 0, 0, 0.1),
    inset -4px -4px 8px rgba(255, 255, 255, 0.8);
}
```

---

## 🎬 ANIMATIONS & TRANSITIONS

### Transition Durations

```css
--duration-fast: 150ms --duration-normal: 300ms --duration-slow: 500ms --duration-slower: 700ms;
```

### Easing Functions

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1) --ease-out: cubic-bezier(0, 0, 0.2, 1)
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1) --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Micro-interactions

```css
.hover-lift {
  transition: transform var(--duration-normal) var(--ease-out);
}

.hover-lift:hover {
  transform: translateY(-4px);
}

.hover-scale {
  transition: transform var(--duration-normal) var(--ease-out);
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
--breakpoint-sm: 640px --breakpoint-md: 768px --breakpoint-lg: 1024px --breakpoint-xl: 1280px
  --breakpoint-2xl: 1536px;
```

### Mobile-First Media Queries

```css
@media (min-width: 640px) {
  /* sm */
}
@media (min-width: 768px) {
  /* md */
}
@media (min-width: 1024px) {
  /* lg */
}
@media (min-width: 1280px) {
  /* xl */
}
@media (min-width: 1536px) {
  /* 2xl */
}
```

---

## 🧩 COMPONENT SPECIFICATIONS

### Button Variants

```css
.btn-primary {
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  transition: all var(--duration-normal) var(--ease-out);
}

.btn-glass {
  background: var(--glass-white);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-white-border);
  color: var(--neutral-800);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
}

.btn-neo {
  background: var(--neutral-100);
  box-shadow:
    6px 6px 12px rgba(0, 0, 0, 0.1),
    -6px -6px 12px rgba(255, 255, 255, 0.8);
  border: none;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-xl);
}
```

### Card Variants

```css
.card-glass {
  background: var(--glass-white);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-white-border);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.card-neo {
  background: var(--neutral-50);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  box-shadow:
    12px 12px 24px rgba(0, 0, 0, 0.1),
    -12px -12px 24px rgba(255, 255, 255, 0.8);
}

.card-gradient {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
}
```

---

## 🎯 BENTO GRID SYSTEM

### Grid Layout Classes

```css
.bento-grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.bento-item-small {
  grid-column: span 1;
  grid-row: span 1;
}

.bento-item-wide {
  grid-column: span 2;
  grid-row: span 1;
}

.bento-item-tall {
  grid-column: span 1;
  grid-row: span 2;
}

.bento-item-large {
  grid-column: span 2;
  grid-row: span 2;
}
```

### Responsive Bento Grid

```css
@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-item-wide,
  .bento-item-tall,
  .bento-item-large {
    grid-column: span 1;
    grid-row: span 1;
  }
}
```

---

## 🌙 DARK MODE SPECIFICATIONS

### Theme Toggle Variables

```css
[data-theme='light'] {
  --bg-primary: var(--neutral-50);
  --bg-secondary: var(--neutral-100);
  --text-primary: var(--neutral-900);
  --text-secondary: var(--neutral-600);
  --border-color: var(--neutral-200);
}

[data-theme='dark'] {
  --bg-primary: var(--dark-50);
  --bg-secondary: var(--dark-100);
  --text-primary: var(--dark-900);
  --text-secondary: var(--dark-600);
  --border-color: var(--dark-200);
}
```

### Smooth Theme Transition

```css
* {
  transition:
    background-color var(--duration-normal) var(--ease-out),
    color var(--duration-normal) var(--ease-out),
    border-color var(--duration-normal) var(--ease-out);
}
```

---

## 🎨 GRADIENT DEFINITIONS

### Background Gradients

```css
.gradient-primary {
  background: linear-gradient(135deg, var(--primary-400), var(--primary-600));
}

.gradient-sunset {
  background: linear-gradient(135deg, var(--accent-orange), var(--accent-pink));
}

.gradient-ocean {
  background: linear-gradient(135deg, var(--primary-500), var(--accent-purple));
}

.gradient-mesh {
  background:
    radial-gradient(circle at 20% 80%, var(--primary-400) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, var(--accent-purple) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, var(--accent-pink) 0%, transparent 50%);
}
```

---

## 📏 COMPONENT SIZING

### Icon Sizes

```css
--icon-xs: 1rem --icon-sm: 1.25rem --icon-md: 1.5rem --icon-lg: 2rem --icon-xl: 2.5rem
  --icon-2xl: 3rem;
```

### Avatar Sizes

```css
--avatar-xs: 2rem --avatar-sm: 2.5rem --avatar-md: 3rem --avatar-lg: 4rem --avatar-xl: 5rem
  --avatar-2xl: 6rem;
```

---

## 🎪 SPECIAL EFFECTS

### Particle Animation

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.floating-element {
  animation: float 6s ease-in-out infinite;
}
```

### Glow Effects

```css
.glow-primary {
  box-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
}

.glow-accent {
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}
```

### Scroll Animations

```css
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.fade-in-up.in-view {
  opacity: 1;
  transform: translateY(0);
}
```
