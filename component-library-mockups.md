# 🧩 COMPONENT LIBRARY MOCKUPS 2025

## Reusable UI Components with Visual Specifications

---

## 🎨 BUTTON COMPONENTS

### Primary Button

```
┌─────────────────────────────────┐
│        Contact Me               │
│ ─────────────────────────────── │
│ Background: Linear gradient     │
│ (primary-500 → primary-600)     │
│ Color: White                    │
│ Padding: 12px 24px              │
│ Border-radius: 12px             │
│ Font: Inter Medium 16px         │
│ Hover: Lift (-2px) + Glow       │
│ Click: Scale (0.95x → 1.0x)     │
└─────────────────────────────────┘
```

### Glass Button

```
┌─────────────────────────────────┐
│      View Portfolio             │
│ ─────────────────────────────── │
│ Background: rgba(255,255,255,0.1)│
│ Backdrop-filter: blur(16px)     │
│ Border: 1px rgba(255,255,255,0.2)│
│ Color: Primary text             │
│ Padding: 12px 24px              │
│ Border-radius: 12px             │
│ Hover: Backdrop blur increase   │
│ Click: Inset shadow effect      │
└─────────────────────────────────┘
```

### Neomorphism Button

```
┌─────────────────────────────────┐
│      Download CV                │
│ ─────────────────────────────── │
│ Background: #f5f5f5             │
│ Box-shadow: 8px 8px 16px        │
│ rgba(0,0,0,0.1), -8px -8px 16px │
│ rgba(255,255,255,0.8)           │
│ Border-radius: 16px             │
│ Hover: Shadow depth increase    │
│ Active: Inset shadow effect     │
└─────────────────────────────────┘
```

---

## 🃏 CARD COMPONENTS

### Glass Card

```
┌─────────────────────────────────────────────┐
│ Project Title                               │
│ ─────────────                               │
│                                             │
│ [Project Image with overlay on hover]      │
│                                             │
│ Project description text goes here with     │
│ details about the technology stack and      │
│ implementation details.                     │
│                                             │
│ 🏷️ React  🏷️ Node.js  🏷️ AWS              │
│                                             │
│ ┌─────────┐ ┌─────────┐                    │
│ │  Demo   │ │  Code   │                    │
│ │ Primary │ │ Glass   │                    │
│ └─────────┘ └─────────┘                    │
│                                             │
│ Background: rgba(255,255,255,0.1)          │
│ Backdrop-filter: blur(16px)                │
│ Border: 1px solid rgba(255,255,255,0.2)    │
│ Border-radius: 24px                        │
│ Padding: 32px                              │
│ Hover: translateY(-8px) + glow             │
└─────────────────────────────────────────────┘
```

### Skill Card

```
┌─────────────────────────────────────────────┐
│ Frontend Developer                          │
│ More than 10 years                          │
│ ─────────────────────────────────────────── │
│                                             │
│ HTML        100%  ██████████████████████    │
│ CSS          95%  ████████████████████▒▒    │
│ JavaScript   95%  ████████████████████▒▒    │
│ React        95%  ████████████████████▒▒    │
│ Angular      95%  ████████████████████▒▒    │
│                                             │
│ ┌─────────────────────────────────────────┐ │
│ │ [Expand/Collapse Toggle]                │ │
│ └─────────────────────────────────────────┘ │
│                                             │
│ Glassmorphism background                    │
│ Progress bars with gradient fills           │
│ Hover: Glow effect + progress animation     │
│ Click: Expand/collapse with smooth height   │
└─────────────────────────────────────────────┘
```

### Testimonial Card

```
┌─────────────────────────────────────────────┐
│ "Ahmed is an exceptional senior software    │
│  engineer with a deep understanding of      │
│  various different domains. He consistently │
│  demonstrated a strong work ethic and took  │
│  great ownership of projects..."            │
│                                             │
│ ┌─────────┐  Matthias Simolka               │
│ │ [Photo] │  Product Manager @ TWAICE       │
│ │ 48px    │  ─────────────────────────      │
│ │ Avatar  │  Worked with Ahmed but on       │
│ │ Circle  │  different teams                │
│ └─────────┘                                 │
│                                             │
│ Large glassmorphism card                    │
│ Quote in italic text-lg                     │
│ Name in bold, title in regular              │
│ Hover: Pause carousel + subtle scale        │
└─────────────────────────────────────────────┘
```

---

## 📝 FORM COMPONENTS

### Input Field with Floating Label

```
┌─────────────────────────────────────────────┐
│ Name                                        │
│ ────                                        │
│ [User input text here]                      │
│                                             │
│ States:                                     │
│ Default: Label at top, border neutral       │
│ Focus: Label floats up, border glow         │
│ Valid: Green border + checkmark             │
│ Error: Red border + shake animation         │
│                                             │
│ Background: rgba(255,255,255,0.1)          │
│ Backdrop-filter: blur(16px)                │
│ Border: 1px solid rgba(255,255,255,0.2)    │
│ Border-radius: 12px                        │
│ Padding: 16px                              │
│ Font: Inter Regular 16px                    │
└─────────────────────────────────────────────┘
```

### Textarea with Floating Label

```
┌─────────────────────────────────────────────┐
│ Message                                     │
│ ───────                                     │
│ [Multi-line user input text here]          │
│ [Continues for multiple lines]              │
│ [Auto-resize based on content]              │
│                                             │
│ Min-height: 120px                           │
│ Max-height: 300px                           │
│ Resize: Vertical only                       │
│ Character count: Optional                   │
│                                             │
│ Same styling as input field                 │
│ Glassmorphism background                    │
│ Floating label animation                    │
└─────────────────────────────────────────────┘
```

---

## 🎛️ NAVIGATION COMPONENTS

### Header Navigation

```
┌─────────────────────────────────────────────────────────────────┐
│ [🏠 LOGO]    Home  About  Skills  Experience  Portfolio  Contact │
│              ────  ─────  ──────  ──────────  ─────────  ─────── │
│              Active state underline                        [🌙☀️] │
│                                                                  │
│ Background: rgba(255,255,255,0.8)                               │
│ Backdrop-filter: blur(20px)                                     │
│ Border-bottom: 1px solid rgba(255,255,255,0.2)                  │
│ Height: 80px                                                     │
│ Sticky positioning with scroll detection                        │
│ Logo hover: Glow effect                                          │
│ Nav hover: Underline slide-in animation                          │
│ Theme toggle: Sun/moon morphing animation                        │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile Navigation Overlay

```
┌─────────────────────────────────┐
│                            [✕] │
│                                 │
│           Home                  │
│           ────                  │
│           About                 │
│           Skills                │
│           Experience            │
│           Portfolio             │
│           Contact               │
│                                 │
│     [LinkedIn] [GitHub]         │
│     [YouTube] [Instagram]       │
│                                 │
│ Full-screen overlay             │
│ Glassmorphism background        │
│ Slide-in animation from right   │
│ Large touch targets (44px min)  │
│ Social links at bottom          │
│ Close on outside click          │
└─────────────────────────────────┘
```

### Floating Social Sidebar

```
┌─────────────┐
│ [LinkedIn]  │
│ [GitHub]    │
│ [YouTube]   │
│ [Instagram] │
│ [Spotify]   │
│ [Medium]    │
│             │
│ Fixed left  │
│ position    │
│ Glass icons │
│ 40px each   │
│ Hover glow  │
│ Stagger     │
│ animations  │
└─────────────┘
```

---

## 📊 DATA VISUALIZATION COMPONENTS

### Progress Bar

```
┌─────────────────────────────────────────────┐
│ React                                   95% │
│ ─────                                       │
│ ████████████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    │
│                                             │
│ Background: rgba(255,255,255,0.1)          │
│ Fill: Linear gradient (primary colors)      │
│ Height: 8px                                 │
│ Border-radius: 4px                          │
│ Animation: Fill on scroll into view         │
│ Glow effect on hover                        │
│ Percentage counter animation                │
└─────────────────────────────────────────────┘
```

### Statistics Card

```
┌─────────────────────┐
│        12+          │
│        ───          │
│       Years         │
│   Experience        │
│                     │
│ Neomorphism style   │
│ Large number text   │
│ (text-4xl bold)     │
│ Label text-sm       │
│ Hover lift effect   │
│ Counter animation   │
│ on scroll into view │
└─────────────────────┘
```

---

## 🎪 INTERACTIVE COMPONENTS

### Theme Toggle

```
┌─────────────┐
│     🌙☀️    │
│             │
│ 32px icon   │
│ Glass bg    │
│ Morphing    │
│ animation   │
│ Rotation    │
│ Color       │
│ transition  │
│ Tooltip     │
│ on hover    │
└─────────────┘
```

### Carousel Dots

```
● ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○

Active: Filled circle with glow
Inactive: Outline circle
Hover: Scale (1.2x) + glow
Click: Smooth transition to slide
Glassmorphism background
8px diameter, 4px gap
```

### Back to Top Button

```
┌─────────────┐
│      ↑      │
│             │
│ Fixed       │
│ bottom-     │
│ right       │
│ Glass bg    │
│ 48px size   │
│ Hover lift  │
│ Smooth      │
│ scroll      │
│ animation   │
└─────────────┘
```

---

## 🎨 LOADING COMPONENTS

### Skeleton Loader

```
┌─────────────────────────────────────────────┐
│ ████████████████████████████████████████    │ Title
│ ████████████████████████████████████████    │
│                                             │
│ ████████████████████████████████████████    │ Line 1
│ ████████████████████████████████████████    │ Line 2
│ ████████████████████████████████████████    │ Line 3
│ ████████████████████████████████████████    │ Line 4
│                                             │
│ ████████████████████████████████████████    │ Button
│                                             │
│ Shimmer animation moving left to right      │
│ Glassmorphism background                    │
│ Matches content structure                   │
│ Fade out when content loads                 │
└─────────────────────────────────────────────┘
```

### Loading Spinner

```
┌─────────────┐
│      ⟳      │
│             │
│ 24px size   │
│ Primary     │
│ color       │
│ Smooth      │
│ rotation    │
│ 360deg      │
│ infinite    │
│ 1s linear   │
└─────────────┘
```

---

## 🎯 RESPONSIVE BEHAVIOR

### Breakpoint Adaptations

#### Desktop (1024px+)

- Full hover effects active
- Complex animations enabled
- Multi-column layouts
- Glassmorphism at full opacity

#### Tablet (768px-1024px)

- Touch-optimized hover states
- Simplified animations
- Condensed layouts
- Reduced glassmorphism complexity

#### Mobile (<768px)

- Touch-only interactions
- Minimal animations for performance
- Single-column layouts
- Simplified visual effects

---

## 🎨 ANIMATION SPECIFICATIONS

### Micro-interactions

```css
/* Hover Effects */
.hover-lift {
  transition: transform 300ms ease-out;
}
.hover-lift:hover {
  transform: translateY(-8px);
}

/* Click Effects */
.click-scale {
  transition: transform 150ms ease-out;
}
.click-scale:active {
  transform: scale(0.95);
}

/* Glow Effects */
.hover-glow {
  transition: box-shadow 300ms ease-out;
}
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
}
```

### Page Transitions

```css
/* Fade In Up */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}
.fade-in-up.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger Animation */
.stagger-item:nth-child(1) {
  transition-delay: 0ms;
}
.stagger-item:nth-child(2) {
  transition-delay: 100ms;
}
.stagger-item:nth-child(3) {
  transition-delay: 200ms;
}
```

This component library provides comprehensive visual specifications for all reusable UI components in the modern 2025 portfolio design.
