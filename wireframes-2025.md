# 📐 WIREFRAMES 2025

## Visual Layout Specifications for Modern Portfolio

---

## 🖥️ DESKTOP WIREFRAMES (1024px+)

### HEADER COMPONENT

```
┌─────────────────────────────────────────────────────────────────┐
│ [LOGO]    Home  About  Skills  Experience  Portfolio  Contact   │
│                                                        [🌙/☀️]  │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- Height: 80px
- Glassmorphism background with backdrop blur
- Sticky positioning with scroll detection
- Logo: 40px height, animated hover
- Navigation: 16px font, smooth scroll links
- Theme toggle: 32px icon with morphing animation

### HERO SECTION

```
┌─────────────────────────────────────────────────────────────────┐
│                        [Particle Background]                    │
│                                                                 │
│  ┌─────────────┐    Hi, I'm Ahmed                              │
│  │             │    Tech Lead - Software Engineer               │
│  │   Profile   │                                               │
│  │   Image     │    High level experience in web design        │
│  │   + Glow    │    and development knowledge, producing        │
│  │             │    quality work.                              │
│  └─────────────┘                                               │
│                     [Contact Me] [View Portfolio]              │
│  [Social Links]                                                │
│  Sidebar                                                       │
│                                                                │
│                        ↓ Scroll down                          │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- Height: 100vh (full screen)
- Profile image: 300px diameter with glow effect
- Social sidebar: Fixed left position
- Particle background: Three.js or CSS animations
- Typography: Hero title 4xl, description text-lg
- CTAs: Primary and secondary button styles

### ABOUT SECTION

```
┌─────────────────────────────────────────────────────────────────┐
│                          About Me                               │
│                       My introduction                           │
│                                                                 │
│  ┌─────────────────────────────┐  ┌─────┐ ┌─────┐ ┌─────┐      │
│  │ Tech Lead, with extensive   │  │ 12+ │ │ 20+ │ │ 05+ │      │
│  │ knowledge and years of      │  │Years│ │Proj │ │Comp │      │
│  │ experience, working in web  │  │     │ │     │ │     │      │
│  │ technologies, mobile, and   │  │     │ │     │ │     │      │
│  │ UI/UX design, delivering    │  └─────┘ └─────┘ └─────┘      │
│  │ quality work and solutions  │                               │
│  │ to every problem.           │                               │
│  │                             │                               │
│  │        [Download CV]        │                               │
│  └─────────────────────────────┘                               │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- Section padding: 6rem vertical
- Text column: 60% width, glassmorphism background
- Stats cards: 120px width, neomorphism style
- CV button: Primary style with download icon

### SKILLS SECTION (Bento Grid)

```
┌─────────────────────────────────────────────────────────────────┐
│                           Skills                                │
│                      My technical level                         │
│                                                                 │
│  ┌─────────────┬─────────────┬─────────────┬─────────────┐      │
│  │ Agile & PM  │ Frontend    │ Backend     │ Data Viz    │      │
│  │ 8 years     │ 10+ years   │ 10+ years   │ 2 years     │      │
│  │             │             │             │             │      │
│  │ [Progress   │ [Progress   │ [Progress   │ [Progress   │      │
│  │  Bars]      │  Bars]      │  Bars]      │  Bars]      │      │
│  └─────────────┴─────────────┴─────────────┴─────────────┘      │
│  ┌─────────────┬─────────────┬─────────────────────────────┐    │
│  │ DevOps &    │ Cloud       │ Database & Storage          │    │
│  │ Infra       │ 4 years     │ 10+ years                   │    │
│  │ 3 years     │             │                             │    │
│  │             │ [Progress   │ [Progress Bars]             │    │
│  │ [Progress   │  Bars]      │                             │    │
│  │  Bars]      │             │                             │    │
│  └─────────────┴─────────────┴─────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Hardware & Prototyping - 4 years                       │    │
│  │ [Progress Bars]                                         │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- Bento grid: 4 columns on desktop
- Card heights: Variable based on content
- Glassmorphism cards with hover lift
- Progress bars: Animated on scroll into view
- Expandable cards: Click to show/hide details

### EXPERIENCE SECTION (Timeline)

```
┌─────────────────────────────────────────────────────────────────┐
│                        Experience                               │
│                     My professional journey                     │
│                                                                 │
│  Education                              Awards                  │
│      │                                     │                   │
│      ▼                                     ▼                   │
│  ┌─────────────┐                     ┌─────────────┐           │
│  │ ESPRIT      │ ←─────────────────→ │ NASA        │           │
│  │ 2013-2016   │                     │ Galactic    │           │
│  │ Software    │                     │ Problem     │           │
│  │ Engineer    │                     │ Solver      │           │
│  └─────────────┘                     └─────────────┘           │
│      │                                     │                   │
│      ▼                                     ▼                   │
│  ┌─────────────┐                     ┌─────────────┐           │
│  │ ENICAR      │ ←─────────────────→ │ Microsoft   │           │
│  │ 2010-2013   │                     │ Specialist  │           │
│  │ Computer    │                     │ HTML5/CSS3  │           │
│  │ Science     │                     │ JavaScript  │           │
│  └─────────────┘                     └─────────────┘           │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- Two-column timeline layout
- Glassmorphism cards with hover effects
- Connecting lines between related items
- Scroll animations for timeline reveals
- Interactive hover states with additional details

### PORTFOLIO SECTION (Bento Grid)

```
┌─────────────────────────────────────────────────────────────────┐
│                         Portfolio                               │
│  "The only way to discover the limits of the possible is to    │
│   go beyond them into the impossible." – Arthur C. Clarke      │
│                                                                 │
│  ┌─────────────────────┬─────────────┬─────────────┐           │
│  │ Oilfox Insights     │ Twaice      │ finway      │           │
│  │ (Featured Project)  │ Technologies│ GmbH        │           │
│  │ IoT device for tank │ Battery KPI │ Invoice     │           │
│  │ liquid measurement  │ analytics   │ processing  │           │
│  │ [Demo] [Code]       │ [Details]   │ [Details]   │           │
│  └─────────────────────┴─────────────┴─────────────┘           │
│  ┌─────────────┬─────────────┬─────────────────────┐           │
│  │ innosabi    │ Holiday     │ WatsomApp Ltd       │           │
│  │ GmbH        │ Extras      │ (Co-founded as CTO) │           │
│  │ Innovation  │ 480 micro   │ AI anti-bullying    │           │
│  │ platform    │ services    │ solution            │           │
│  │ [Details]   │ [Details]   │ [Demo] [Story]      │           │
│  └─────────────┴─────────────┴─────────────────────┘           │
│  ┌─────────────────────┬─────────────┬─────────────┐           │
│  │ Flash To Cloud      │ Real Fight  │ Painting    │           │
│  │ Microsoft Winner    │ Gloves      │ Scanner     │           │
│  │ Smart USB drive     │ AR/VR game  │ AI & AR     │           │
│  │ [Details]           │ control     │ painting    │           │
│  │                     │ [Details]   │ info        │           │
│  └─────────────────────┴─────────────┴─────────────┘           │
│                                                                 │
│                        [View All Projects]                     │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- Bento grid with varying card sizes
- Featured projects get larger cards
- Hover effects reveal additional information
- Technology tags with color coding
- CTA buttons for demos and code repositories

### TESTIMONIALS SECTION

```
┌─────────────────────────────────────────────────────────────────┐
│                      Recommendations                            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ "Ahmed is an exceptional senior software engineer with │    │
│  │  a deep understanding of various different domains.    │    │
│  │  He consistently demonstrated a strong work ethic..."  │    │
│  │                                                        │    │
│  │  — Matthias Simolka, Product Manager @ TWAICE         │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│              ● ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○                          │
│                                                                 │
│                    [View All on LinkedIn]                      │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- Glassmorphism carousel cards
- Auto-play with pause on hover
- Dot indicators for navigation
- Swipe support on mobile
- Fade transitions between testimonials

### CONTACT SECTION

```
┌─────────────────────────────────────────────────────────────────┐
│                        Contact Me                               │
│                        Get in touch                             │
│                                                                 │
│  ┌─────────────────────────────┐ ┌─────────────────────────────┐ │
│  │ Contact Form                │ │ Contact Information         │ │
│  │                             │ │                             │ │
│  │ [Name Input]                │ │ 📧 ahmed@abejaoui.com      │ │
│  │ [Email Input]               │ │ 📍 Munich, Germany         │ │
│  │ [Subject Input]             │ │ 📅 calendly.com/akbejaoui  │ │
│  │ [Message Textarea]          │ │                             │ │
│  │                             │ │ Social Media:               │ │
│  │ [reCAPTCHA]                 │ │ [LinkedIn] [GitHub]         │ │
│  │                             │ │ [YouTube] [Instagram]       │ │
│  │ [Send Message Button]       │ │ [Spotify] [Medium]          │ │
│  └─────────────────────────────┘ └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- Split layout: 50/50 form and info
- Glassmorphism form with floating labels
- Real-time validation with error states
- Social media icons with hover animations
- Success/error feedback animations

### FOOTER

```
┌─────────────────────────────────────────────────────────────────┐
│ [LOGO] Team lead - Software Engineer                           │
│                                                                 │
│ About  Skills  Awards  Portfolio                               │
│                                                                 │
│ [LinkedIn] [GitHub] [Instagram]                                 │
│                                                                 │
│ © abejaoui.com 2025 All right reserved        [Back to Top ↑] │
└─────────────────────────────────────────────────────────────────┘
```

**Specifications:**

- Minimal glassmorphism background
- Quick navigation links
- Social media icons
- Back to top button with smooth scroll

---

## 📱 MOBILE WIREFRAMES (< 768px)

### MOBILE HEADER

```
┌─────────────────────────────────┐
│ [LOGO]              [☰] [🌙/☀️] │
└─────────────────────────────────┘
```

**Specifications:**

- Height: 60px
- Hamburger menu slides in from right
- Theme toggle remains visible
- Logo scales to fit mobile

### MOBILE NAVIGATION OVERLAY

```
┌─────────────────────────────────┐
│                            [✕] │
│                                 │
│           Home                  │
│           About                 │
│           Skills                │
│           Experience            │
│           Portfolio             │
│           Contact               │
│                                 │
│     [LinkedIn] [GitHub]         │
│                                 │
└─────────────────────────────────┘
```

**Specifications:**

- Full-screen overlay with glassmorphism
- Large touch targets (44px minimum)
- Slide-in animation from right
- Social links at bottom

### MOBILE HERO

```
┌─────────────────────────────────┐
│        [Profile Image]          │
│                                 │
│        Hi, I'm Ahmed            │
│    Tech Lead - Software         │
│        Engineer                 │
│                                 │
│  High level experience in web   │
│  design and development...      │
│                                 │
│      [Contact Me]               │
│      [View Portfolio]           │
│                                 │
│  [Social Links Row]             │
│                                 │
│         ↓ Scroll down           │
└─────────────────────────────────┘
```

**Specifications:**

- Single column stacked layout
- Profile image: 200px diameter
- Social links in horizontal row
- Reduced particle effects for performance

### MOBILE ABOUT

```
┌─────────────────────────────────┐
│          About Me               │
│       My introduction           │
│                                 │
│  Tech Lead, with extensive      │
│  knowledge and years of         │
│  experience, working in web     │
│  technologies, mobile, and      │
│  UI/UX design...                │
│                                 │
│  ┌─────┐ ┌─────┐ ┌─────┐        │
│  │ 12+ │ │ 20+ │ │ 05+ │        │
│  │Years│ │Proj │ │Comp │        │
│  └─────┘ └─────┘ └─────┘        │
│                                 │
│      [Download CV]              │
└─────────────────────────────────┘
```

**Specifications:**

- Single column layout
- Stats cards in row of 3
- Full-width CV button
- Reduced padding for mobile

### MOBILE SKILLS (Single Column)

```
┌─────────────────────────────────┐
│           Skills                │
│      My technical level         │
│                                 │
│  ┌─────────────────────────────┐ │
│  │ Agile & Project Management  │ │
│  │ 8 years                     │ │
│  │ [Progress Bars]             │ │
│  └─────────────────────────────┘ │
│                                 │
│  ┌─────────────────────────────┐ │
│  │ Frontend Developer          │ │
│  │ More than 10 years          │ │
│  │ [Progress Bars]             │ │
│  └─────────────────────────────┘ │
│                                 │
│  ┌─────────────────────────────┐ │
│  │ Backend Developer           │ │
│  │ More than 10 years          │ │
│  │ [Progress Bars]             │ │
│  └─────────────────────────────┘ │
│                                 │
│  [Continue for all 8 categories]│
└─────────────────────────────────┘
```

**Specifications:**

- Single column stack
- Full-width cards
- Expandable/collapsible sections
- Touch-friendly interaction areas

### MOBILE PORTFOLIO (Single Column)

```
┌─────────────────────────────────┐
│         Portfolio               │
│                                 │
│  ┌─────────────────────────────┐ │
│  │ Oilfox Insights             │ │
│  │ IoT device for tank liquid  │ │
│  │ measurement remotely        │ │
│  │ [Demo] [Code]               │ │
│  └─────────────────────────────┘ │
│                                 │
│  ┌─────────────────────────────┐ │
│  │ Twaice Technologies GmbH    │ │
│  │ Battery KPI analytics and   │ │
│  │ Safety/Performance mgmt     │ │
│  │ [Details]                   │ │
│  └─────────────────────────────┘ │
│                                 │
│  [Continue for all projects]    │
│                                 │
│      [View All Projects]        │
└─────────────────────────────────┘
```

**Specifications:**

- Single column stack
- Equal-height cards
- Swipe gestures for navigation
- Simplified hover states (tap-based)

### MOBILE CONTACT

```
┌─────────────────────────────────┐
│        Contact Me               │
│        Get in touch             │
│                                 │
│  📧 ahmed@abejaoui.com          │
│  📍 Munich, Germany             │
│  📅 calendly.com/akbejaoui      │
│                                 │
│  [Social Media Icons Row]       │
│                                 │
│  ┌─────────────────────────────┐ │
│  │ [Name Input]                │ │
│  │ [Email Input]               │ │
│  │ [Subject Input]             │ │
│  │ [Message Textarea]          │ │
│  │ [reCAPTCHA]                 │ │
│  │ [Send Message Button]       │ │
│  └─────────────────────────────┘ │
└─────────────────────────────────┘
```

**Specifications:**

- Stacked layout: info then form
- Large touch targets for form inputs
- Floating labels for better UX
- Full-width submit button

---

## 🎯 INTERACTION SPECIFICATIONS

### Hover States (Desktop)

```
Card Hover:
- Lift: translateY(-8px)
- Shadow: Increase blur and spread
- Scale: 1.02x for images
- Glow: Add colored glow effect

Button Hover:
- Lift: translateY(-2px)
- Glow: Add primary color glow
- Scale: 1.05x for icons
- Color: Brighten background

Navigation Hover:
- Underline: Slide in from left
- Color: Change to primary
- Background: Subtle highlight
```

### Click/Tap States

```
Button Click:
- Scale: 0.95x briefly then back
- Ripple: Expanding circle from click point
- Color: Darken background briefly

Card Tap:
- Scale: 0.98x briefly
- Feedback: Subtle color change
- Navigation: Smooth transition to detail
```

### Scroll Animations

```
Fade In Up:
- Initial: opacity 0, translateY(30px)
- Final: opacity 1, translateY(0)
- Duration: 0.6s ease-out
- Trigger: 20% in viewport

Stagger Animation:
- Delay: 100ms between elements
- Direction: Left to right, top to bottom
- Easing: Ease-out for natural feel
```

---

## 📐 SPACING SPECIFICATIONS

### Desktop Spacing

```
Section Padding: 6rem (96px) vertical
Container Max-Width: 1200px
Card Gaps: 1.5rem (24px)
Content Padding: 2rem (32px)
Text Margins: 1rem (16px)
```

### Mobile Spacing

```
Section Padding: 3rem (48px) vertical
Container Padding: 1rem (16px) horizontal
Card Gaps: 1rem (16px)
Content Padding: 1.5rem (24px)
Text Margins: 0.75rem (12px)
```

### Component Sizing

```
Header Height: 80px desktop, 60px mobile
Button Height: 48px desktop, 44px mobile
Input Height: 48px desktop, 44px mobile
Card Min-Height: 200px desktop, 150px mobile
Icon Size: 24px desktop, 20px mobile
```

---

## 🎨 VISUAL SPECIFICATIONS

### Glassmorphism Effects

```
Background: rgba(255, 255, 255, 0.1)
Backdrop Filter: blur(16px)
Border: 1px solid rgba(255, 255, 255, 0.2)
Box Shadow: 0 8px 32px rgba(0, 0, 0, 0.1)
```

### Neomorphism Effects

```
Background: Neutral background color
Box Shadow:
  8px 8px 16px rgba(0, 0, 0, 0.1),
  -8px -8px 16px rgba(255, 255, 255, 0.8)
Border Radius: 1rem (16px)
```

### Animation Timing

```
Fast: 150ms (micro-interactions)
Normal: 300ms (hover states)
Slow: 500ms (page transitions)
Slower: 700ms (complex animations)
```

This wireframe specification provides a complete visual guide for implementing the modern 2025 portfolio design with bento grid layouts, glassmorphism effects, and responsive behavior across all device sizes.
