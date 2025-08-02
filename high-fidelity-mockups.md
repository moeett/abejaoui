# 🎨 HIGH-FIDELITY MOCKUPS 2025
## Visual Design Specifications for Modern Portfolio

---

## 🖼️ MOCKUP OVERVIEW

### Design System Implementation
- **Color Palette:** Primary blues with glassmorphism transparency
- **Typography:** Inter (body) + Clash Display (headings)
- **Effects:** Glassmorphism, neomorphism, and 3D elements
- **Layout:** Bento grid system with responsive behavior
- **Animations:** Micro-interactions and smooth transitions

---

## 🏠 HEADER MOCKUP

### Desktop Header (1200px width)
```
┌─────────────────────────────────────────────────────────────────┐
│ [🏠 LOGO]    Home  About  Skills  Experience  Portfolio  Contact │
│ Glass blur   ────  ─────  ──────  ──────────  ─────────  ─────── │
│ background   Hover underline animations                    [🌙☀️] │
│ rgba(255,255,255,0.1) + backdrop-filter: blur(20px)             │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Specifications:**
- **Background:** Glassmorphism with rgba(255,255,255,0.1)
- **Backdrop Filter:** blur(20px) for frosted glass effect
- **Border:** 1px solid rgba(255,255,255,0.2)
- **Height:** 80px with sticky positioning
- **Logo:** 40px height, primary color with hover glow
- **Navigation:** 16px Inter Medium, hover underline slide-in
- **Theme Toggle:** 32px icon with morphing animation

### Mobile Header (375px width)
```
┌─────────────────────────────────┐
│ [🏠 LOGO]           [☰] [🌙☀️] │
│ Glass background                │
│ 60px height                     │
└─────────────────────────────────┘
```

---

## 🌟 HERO SECTION MOCKUP

### Desktop Hero (1200px width, 100vh height)
```
┌─────────────────────────────────────────────────────────────────┐
│                    [Floating Particles Background]              │
│                                                                 │
│  ┌─────────────┐         Hi, I'm Ahmed                         │
│  │             │         ═══════════════                        │
│  │   Profile   │         Tech Lead - Software Engineer          │
│  │   Image     │         ────────────────────────────────       │
│  │   300px     │                                                │
│  │   Glow      │         High level experience in web design   │
│  │   Effect    │         and development knowledge, producing   │
│  │             │         quality work.                          │
│  └─────────────┘                                                │
│                          ┌─────────────┐ ┌─────────────┐        │
│  [Social Sidebar]        │ Contact Me  │ │ View        │        │
│  LinkedIn, GitHub        │ Primary Btn │ │ Portfolio   │        │
│  YouTube, etc.           │ Gradient +  │ │ Glass Btn   │        │
│  Glassmorphism           │ Glow Effect │ │ Hover Lift  │        │
│                          └─────────────┘ └─────────────┘        │
│                                                                 │
│                              ↓ Scroll down                     │
│                          Bounce animation                       │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Specifications:**
- **Background:** Gradient mesh with floating particles
- **Profile Image:** 300px diameter with subtle glow effect
- **Typography:** 
  - Greeting: text-6xl Clash Display (clamp(4rem, 3rem + 5vw, 6rem))
  - Title: text-4xl Inter Medium
  - Description: text-lg Inter Regular
- **Buttons:**
  - Primary: Gradient background (primary-500 to primary-600) + glow
  - Secondary: Glassmorphism with backdrop blur
- **Social Sidebar:** Fixed left, glassmorphism icons

---

## 👤 ABOUT SECTION MOCKUP

### Desktop About (1200px width)
```
┌─────────────────────────────────────────────────────────────────┐
│                          About Me                               │
│                       My introduction                           │
│                      ═══════════════                            │
│                                                                 │
│  ┌─────────────────────────────────┐  ┌─────┐ ┌─────┐ ┌─────┐   │
│  │ Tech Lead, with extensive       │  │ 12+ │ │ 20+ │ │ 05+ │   │
│  │ knowledge and years of          │  │Years│ │Proj │ │Comp │   │
│  │ experience, working in web      │  │ ──── │ │ ──── │ │ ──── │   │
│  │ technologies, mobile, and       │  │ Exp │ │ Done│ │Work │   │
│  │ UI/UX design, delivering        │  └─────┘ └─────┘ └─────┘   │
│  │ quality work and solutions      │                            │
│  │ to every problem.               │  Neomorphism cards         │
│  │                                 │  Soft shadows + inset      │
│  │ Glassmorphism background        │  Hover lift animation      │
│  │ rgba(255,255,255,0.1)          │                            │
│  │                                 │                            │
│  │        ┌─────────────┐          │                            │
│  │        │ Download CV │          │                            │
│  │        │ Primary Btn │          │                            │
│  │        │ + Icon      │          │                            │
│  │        └─────────────┘          │                            │
│  └─────────────────────────────────┘                            │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Specifications:**
- **Text Container:** Glassmorphism card, 60% width
- **Stats Cards:** Neomorphism style, 120px width each
- **Typography:** text-2xl for numbers, text-sm for labels
- **CV Button:** Primary gradient with download icon
- **Spacing:** 6rem vertical padding, 2rem card padding

---

## 🛠️ SKILLS SECTION MOCKUP (Bento Grid)

### Desktop Skills (1200px width)
```
┌─────────────────────────────────────────────────────────────────┐
│                           Skills                                │
│                      My technical level                         │
│                      ═══════════════════                        │
│                                                                 │
│  ┌─────────────┬─────────────┬─────────────┬─────────────┐      │
│  │ Agile & PM  │ Frontend    │ Backend     │ Data Viz    │      │
│  │ 8 years     │ 10+ years   │ 10+ years   │ 2 years     │      │
│  │ ─────────── │ ─────────── │ ─────────── │ ─────────── │      │
│  │ Agile  98%  │ HTML  100%  │ NodeJs 95%  │ E-Charts80% │      │
│  │ ████████▒▒  │ ██████████  │ █████████▒  │ ████████▒▒  │      │
│  │ Scrum  98%  │ CSS   95%   │ Python 75%  │ D3     80%  │      │
│  │ ████████▒▒  │ █████████▒  │ ███████▒▒▒  │ ████████▒▒  │      │
│  │ Planning100%│ JS/TS 95%   │ Micro  80%  │ DataBr 70%  │      │
│  │ ██████████  │ █████████▒  │ ████████▒▒  │ ███████▒▒▒  │      │
│  │ Glass card  │ Glass card  │ Glass card  │ Glass card  │      │
│  │ Hover lift  │ Hover lift  │ Hover lift  │ Hover lift  │      │
│  └─────────────┴─────────────┴─────────────┴─────────────┘      │
│  ┌─────────────┬─────────────┬─────────────────────────────┐    │
│  │ DevOps &    │ Cloud       │ Database & Storage          │    │
│  │ Infra       │ 4 years     │ 10+ years                   │    │
│  │ 3 years     │ ─────────── │ ─────────────────────────── │    │
│  │ ─────────── │ AWS    90%  │ SQL/NoSQL         98%       │    │
│  │ Docker 95%  │ ████████▒▒  │ ██████████████████████      │    │
│  │ █████████▒  │ GCloud 50%  │ PostgreSQL        98%       │    │
│  │ K8s    75%  │ █████▒▒▒▒▒  │ ██████████████████████      │    │
│  │ ███████▒▒▒  │ Lambda 90%  │ DynamoDB          90%       │    │
│  │ Glass card  │ Glass card  │ Glass card (wide)           │    │
│  └─────────────┴─────────────┴─────────────────────────────┘    │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ Hardware & Prototyping - 4 years                       │    │
│  │ ─────────────────────────────────────────────────────── │    │
│  │ Arduino    80%  ████████▒▒                             │    │
│  │ RaspberryPI 75%  ███████▒▒▒                            │    │
│  │ Glass card (full width)                                │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Specifications:**
- **Bento Grid:** 4 columns, responsive gaps (1.5rem)
- **Cards:** Glassmorphism background with hover lift
- **Progress Bars:** Gradient fills with glow effects
- **Typography:** Category titles text-xl, skills text-sm
- **Animations:** Stagger reveal on scroll, progress bar fill
- **Hover States:** Card lift (-8px) + glow effect

---

## 📚 EXPERIENCE SECTION MOCKUP (Timeline)

### Desktop Experience (1200px width)
```
┌─────────────────────────────────────────────────────────────────┐
│                        Experience                               │
│                     My professional journey                     │
│                     ═══════════════════════                     │
│                                                                 │
│  Education                              Awards                  │
│  ═════════                              ══════                  │
│      │                                     │                   │
│      ▼                                     ▼                   │
│  ┌─────────────┐                     ┌─────────────┐           │
│  │ ESPRIT      │ ←─────────────────→ │ NASA        │           │
│  │ 2013-2016   │   Connecting line   │ Galactic    │           │
│  │ ─────────── │   Glassmorphism     │ Problem     │           │
│  │ Software    │   rgba(255,255,255, │ Solver      │           │
│  │ Engineer    │   0.2)              │ ─────────── │           │
│  │             │                     │ Certified   │           │
│  │ Glass card  │                     │ Glass card  │           │
│  │ Hover glow  │                     │ Hover glow  │           │
│  └─────────────┘                     └─────────────┘           │
│      │                                     │                   │
│      ▼                                     ▼                   │
│  ┌─────────────┐                     ┌─────────────┐           │
│  │ ENICAR      │ ←─────────────────→ │ Microsoft   │           │
│  │ 2010-2013   │                     │ Specialist  │           │
│  │ ─────────── │                     │ ─────────── │           │
│  │ Computer    │                     │ HTML5/CSS3  │           │
│  │ Science     │                     │ JavaScript  │           │
│  │ License     │                     │ Certified   │           │
│  │ Glass card  │                     │ Glass card  │           │
│  └─────────────┘                     └─────────────┘           │
│      │                                     │                   │
│      ▼                                     ▼                   │
│  ┌─────────────┐                     ┌─────────────┐           │
│  │ Hannibal    │ ←─────────────────→ │ Arduino     │           │
│  │ 2006-2010   │                     │ Specialist  │           │
│  │ ─────────── │                     │ ─────────── │           │
│  │ Bachelor    │                     │ TheBest     │           │
│  │ Computer    │                     │ Training    │           │
│  │ Science     │                     │ Center      │           │
│  │ Glass card  │                     │ Glass card  │           │
│  └─────────────┘                     └─────────────┘           │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Specifications:**
- **Timeline Cards:** Glassmorphism with subtle borders
- **Connecting Lines:** rgba(255,255,255,0.2) with glow
- **Typography:** Institution text-lg, degree text-sm
- **Animations:** Scroll-triggered reveals with stagger
- **Hover States:** Card glow + scale (1.02x)

---

## 💼 PORTFOLIO SECTION MOCKUP (Bento Grid)

### Desktop Portfolio (1200px width)
```
┌─────────────────────────────────────────────────────────────────┐
│                         Portfolio                               │
│  "The only way to discover the limits of the possible is to    │
│   go beyond them into the impossible." – Arthur C. Clarke      │
│  ═══════════════════════════════════════════════════════════   │
│                                                                 │
│  ┌─────────────────────┬─────────────┬─────────────┐           │
│  │ 🛢️ Oilfox Insights  │ 🔋 Twaice   │ 💰 finway   │           │
│  │ ─────────────────── │ ─────────── │ ─────────── │           │
│  │ [Project Image]     │ [Image]     │ [Image]     │           │
│  │ IoT device for tank │ Battery KPI │ Invoice     │           │
│  │ liquid measurement  │ analytics   │ processing  │           │
│  │ remotely with smart │ dashboard   │ and expense │           │
│  │ monitoring system   │ for safety  │ management  │           │
│  │                     │ performance │ platform    │           │
│  │ 🏷️ IoT, React, AWS  │ 🏷️ React   │ 🏷️ Vue.js  │           │
│  │ ┌─────┐ ┌─────────┐ │ ┌─────────┐ │ ┌─────────┐ │           │
│  │ │Demo │ │ Code    │ │ │Details  │ │ │Details  │ │           │
│  │ │Btn  │ │ Btn     │ │ │ Btn     │ │ │ Btn     │ │           │
│  │ └─────┘ └─────────┘ │ └─────────┘ │ └─────────┘ │           │
│  │ Glass card (large)  │ Glass card  │ Glass card  │           │
│  │ Hover lift + glow   │ Hover lift  │ Hover lift  │           │
│  └─────────────────────┴─────────────┴─────────────┘           │
│  ┌─────────────┬─────────────┬─────────────────────┐           │
│  │ 💡 innosabi │ ✈️ Holiday  │ 🤖 WatsomApp Ltd    │           │
│  │ ─────────── │ ─────────── │ ─────────────────── │           │
│  │ [Image]     │ [Image]     │ [Image]             │           │
│  │ Innovation  │ 480 micro   │ Co-founded as CTO   │           │
│  │ and idea    │ services    │ AI anti-bullying    │           │
│  │ management  │ booking     │ solution for        │           │
│  │ platform    │ platform    │ schools worldwide   │           │
│  │             │             │                     │           │
│  │ 🏷️ Angular  │ 🏷️ Node.js │ 🏷️ AI, Python      │           │
│  │ ┌─────────┐ │ ┌─────────┐ │ ┌─────┐ ┌─────────┐ │           │
│  │ │Details  │ │ │Details  │ │ │Demo │ │ Story   │ │           │
│  │ │ Btn     │ │ │ Btn     │ │ │Btn  │ │ Btn     │ │           │
│  │ └─────────┘ │ └─────────┘ │ └─────┘ └─────────┘ │           │
│  │ Glass card  │ Glass card  │ Glass card (wide)   │           │
│  └─────────────┴─────────────┴─────────────────────┘           │
│  ┌─────────────────────┬─────────────┬─────────────┐           │
│  │ 🏆 Flash To Cloud   │ 🥊 Real     │ 🎨 Painting │           │
│  │ ─────────────────── │ Fight       │ Scanner     │           │
│  │ [Image]             │ ─────────── │ ─────────── │           │
│  │ Microsoft Imagine   │ [Image]     │ [Image]     │           │
│  │ Cup Tunisia winner  │ Smart AR/VR │ AI & AR     │           │
│  │ Smart & connected   │ game control│ technology  │           │
│  │ USB drive concept   │ gloves for  │ for famous  │           │
│  │                     │ gaming      │ paintings   │           │
│  │ 🏷️ Hardware, IoT    │ 🏷️ AR/VR   │ 🏷️ AI, AR  │           │
│  │ ┌─────────┐         │ ┌─────────┐ │ ┌─────────┐ │           │
│  │ │Details  │         │ │Details  │ │ │Details  │ │           │
│  │ │ Btn     │         │ │ Btn     │ │ │ Btn     │ │           │
│  │ └─────────┘         │ └─────────┘ │ └─────────┘ │           │
│  │ Glass card (wide)   │ Glass card  │ Glass card  │           │
│  └─────────────────────┴─────────────┴─────────────┘           │
│                                                                 │
│                        ┌─────────────────┐                     │
│                        │ View All        │                     │
│                        │ Projects        │                     │
│                        │ Glass Button    │                     │
│                        └─────────────────┘                     │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Specifications:**
- **Bento Grid:** Variable card sizes based on project importance
- **Project Cards:** Glassmorphism with project images
- **Technology Tags:** Colored badges with glassmorphism
- **Buttons:** Primary for demos, secondary for details
- **Hover Effects:** Card lift + image scale + glow
- **Typography:** Project titles text-xl, descriptions text-sm

---

## 💬 TESTIMONIALS SECTION MOCKUP

### Desktop Testimonials (1200px width)
```
┌─────────────────────────────────────────────────────────────────┐
│                      Recommendations                            │
│                      ═══════════════                            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ "Ahmed is an exceptional senior software engineer with │    │
│  │  a deep understanding of various different domains.    │    │
│  │  He consistently demonstrated a strong work ethic and  │    │
│  │  took great ownership of projects. Ahmed is a          │    │
│  │  fantastic team player who is always willing to help  │    │
│  │  and mentor junior engineers..."                       │    │
│  │                                                        │    │
│  │  ┌─────────┐  Matthias Simolka                         │    │
│  │  │ [Photo] │  Product Manager @ TWAICE                 │    │
│  │  │ 48px    │  ─────────────────────────                │    │
│  │  │ Avatar  │  Worked with Ahmed but on different teams │    │
│  │  └─────────┘                                           │    │
│  │                                                        │    │
│  │ Glassmorphism card with subtle glow                    │    │
│  │ rgba(255,255,255,0.1) + backdrop-filter: blur(16px)   │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
│              ● ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○                          │
│              Dot indicators with glassmorphism                  │
│              Active dot has glow effect                         │
│                                                                 │
│                    ┌─────────────────────┐                     │
│                    │ View All on         │                     │
│                    │ LinkedIn            │                     │
│                    │ Glass Button        │                     │
│                    └─────────────────────┘                     │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Specifications:**
- **Testimonial Cards:** Large glassmorphism cards
- **Avatar Images:** 48px circular with subtle border
- **Typography:** Quote text-lg italic, name text-base bold
- **Carousel:** Auto-play with pause on hover
- **Dot Indicators:** Glassmorphism with active state glow
- **Animations:** Smooth fade transitions between testimonials

---

## 📞 CONTACT SECTION MOCKUP

### Desktop Contact (1200px width)
```
┌─────────────────────────────────────────────────────────────────┐
│                        Contact Me                               │
│                        Get in touch                             │
│                        ═══════════                              │
│                                                                 │
│  ┌─────────────────────────────┐ ┌─────────────────────────────┐ │
│  │ Contact Form                │ │ Contact Information         │ │
│  │ ──────────────              │ │ ─────────────────────       │ │
│  │                             │ │                             │ │
│  │ ┌─────────────────────────┐ │ │ 📧 ahmed@abejaoui.com      │ │
│  │ │ Name                    │ │ │    Primary email address   │ │
│  │ │ Floating label          │ │ │                             │ │
│  │ └─────────────────────────┘ │ │ 📍 Munich, Germany         │ │
│  │ ┌─────────────────────────┐ │ │    Current location         │ │
│  │ │ Email                   │ │ │                             │ │
│  │ │ Floating label          │ │ │ 📅 calendly.com/akbejaoui  │ │
│  │ └─────────────────────────┘ │ │    Schedule a meeting       │ │
│  │ ┌─────────────────────────┐ │ │                             │ │
│  │ │ Subject                 │ │ │ Social Media:               │ │
│  │ │ Floating label          │ │ │ ─────────────               │ │
│  │ └─────────────────────────┘ │ │ [LinkedIn] [GitHub]         │ │
│  │ ┌─────────────────────────┐ │ │ [YouTube] [Instagram]       │ │
│  │ │ Message                 │ │ │ [Spotify] [Medium]          │ │
│  │ │ Textarea with           │ │ │                             │ │
│  │ │ floating label          │ │ │ Glassmorphism icons         │ │
│  │ │                         │ │ │ Hover glow effects          │ │
│  │ └─────────────────────────┘ │ │                             │ │
│  │                             │ │                             │ │
│  │ [reCAPTCHA Widget]          │ │                             │ │
│  │                             │ │                             │ │
│  │ ┌─────────────────────────┐ │ │                             │ │
│  │ │ Send Message            │ │ │                             │ │
│  │ │ Primary Button          │ │ │                             │ │
│  │ │ Gradient + Glow         │ │ │                             │ │
│  │ └─────────────────────────┘ │ │                             │ │
│  │                             │ │                             │ │
│  │ Glassmorphism form          │ │ Glassmorphism info card     │ │
│  │ Real-time validation        │ │ Contact details             │ │
│  └─────────────────────────────┘ └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Specifications:**
- **Split Layout:** 50/50 form and information
- **Form Inputs:** Glassmorphism with floating labels
- **Validation:** Real-time with error states (red glow)
- **Success States:** Green glow with checkmark animation
- **Social Icons:** 32px with glassmorphism background
- **Typography:** Labels text-sm, input text text-base

---

## 🦶 FOOTER MOCKUP

### Desktop Footer (1200px width)
```
┌─────────────────────────────────────────────────────────────────┐
│ ┌─────────┐ Team lead - Software Engineer                       │
│ │ [LOGO]  │ ─────────────────────────────────                   │
│ │ 32px    │                                                     │
│ └─────────┘ About  Skills  Awards  Portfolio                    │
│             ─────  ──────  ──────  ─────────                    │
│             Quick navigation links                              │
│                                                                 │
│ [LinkedIn] [GitHub] [Instagram]                                 │
│ Glassmorphism social icons with hover glow                      │
│                                                                 │
│ © abejaoui.com 2025 All right reserved        ┌─────────────┐   │
│ ─────────────────────────────────────────      │ Back to Top │   │
│ Copyright text-sm                              │ ↑ Button    │   │
│                                                │ Glass style │   │
│                                                └─────────────┘   │
│                                                                 │
│ Minimal glassmorphism background                                │
│ rgba(255,255,255,0.05) + backdrop-filter: blur(10px)          │
└─────────────────────────────────────────────────────────────────┘
```

**Visual Specifications:**
- **Background:** Subtle glassmorphism rgba(255,255,255,0.05)
- **Logo:** 32px height with brand colors
- **Navigation:** text-sm with hover underlines
- **Social Icons:** 24px with glassmorphism backgrounds
- **Back to Top:** Floating button with smooth scroll
- **Typography:** Copyright text-xs, links text-sm

---

## 📱 MOBILE MOCKUPS

### Mobile Responsive Adaptations (375px width)

#### Mobile Hero
```
┌─────────────────────────────────┐
│        [Profile Image]          │
│        200px diameter           │
│        Glow effect              │
│                                 │
│        Hi, I'm Ahmed            │
│        ═══════════              │
│    Tech Lead - Software         │
│        Engineer                 │
│        ─────────────            │
│                                 │
│  High level experience in web   │
│  design and development         │
│  knowledge, producing quality   │
│  work.                          │
│                                 │
│      ┌─────────────────┐        │
│      │ Contact Me      │        │
│      │ Primary Button  │        │
│      └─────────────────┘        │
│      ┌─────────────────┐        │
│      │ View Portfolio  │        │
│      │ Glass Button    │        │
│      └─────────────────┘        │
│                                 │
│  [Social Links Row]             │
│  LinkedIn GitHub YouTube etc.   │
│                                 │
│         ↓ Scroll down           │
└─────────────────────────────────┘
```

#### Mobile Skills (Single Column)
```
┌─────────────────────────────────┐
│           Skills                │
│      My technical level         │
│      ═══════════════            │
│                                 │
│  ┌─────────────────────────────┐ │
│  │ Agile & Project Management  │ │
│  │ 8 years                     │ │
│  │ ─────────────────────────── │ │
│  │ Agile      98% ████████▒▒   │ │
│  │ Scrum      98% ████████▒▒   │ │
│  │ Planning  100% ██████████   │ │
│  │ [Expand for more details]   │ │
│  │ Glassmorphism card          │ │
│  └─────────────────────────────┘ │
│                                 │
│  ┌─────────────────────────────┐ │
│  │ Frontend Developer          │ │
│  │ More than 10 years          │ │
│  │ ─────────────────────────── │ │
│  │ HTML      100% ██████████   │ │
│  │ CSS        95% █████████▒   │ │
│  │ JS/TS      95% █████████▒   │ │
│  │ [Expand for more details]   │ │
│  │ Glassmorphism card          │ │
│  └─────────────────────────────┘ │
│                                 │
│  [Continue for all 8 categories]│
└─────────────────────────────────┘
```

---

## 🎨 VISUAL EFFECTS SPECIFICATIONS

### Glassmorphism Implementation
```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-nav {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Neomorphism Implementation
```css
.neo-card {
  background: #f5f5f5;
  border-radius: 1.5rem;
  box-shadow: 
    8px 8px 16px rgba(0, 0, 0, 0.1),
    -8px -8px 16px rgba(255, 255, 255, 0.8);
}

.neo-button:hover {
  box-shadow: 
    4px 4px 8px rgba(0, 0, 0, 0.15),
    -4px -4px 8px rgba(255, 255, 255, 0.9);
}
```

### Animation Specifications
```css
.hover-lift {
  transition: transform 300ms ease-out;
}

.hover-lift:hover {
  transform: translateY(-8px);
}

.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-up.in-view {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 🎯 INTERACTIVE PROTOTYPES

### Hover State Specifications
```
Card Hover Effects:
- Transform: translateY(-8px)
- Box Shadow: Increase blur and spread
- Duration: 300ms ease-out
- Glow: Add primary color glow (0 0 20px rgba(14, 165, 233, 0.3))

Button Hover Effects:
- Primary Button: Lift (-2px) + Glow effect
- Glass Button: Backdrop blur increase + Border glow
- Scale: 1.05x for icons
- Duration: 300ms ease-out

Navigation Hover:
- Underline: Slide in from left (200ms)
- Color: Transition to primary (150ms)
- Background: Subtle highlight (300ms)
```

### Click/Tap Feedback
```
Button Click:
- Scale: 0.95x briefly then back to 1.0x
- Ripple: Expanding circle from click point
- Duration: 400ms with bounce easing
- Color: Brief darken effect

Card Tap (Mobile):
- Scale: 0.98x briefly
- Feedback: Subtle color change
- Duration: 150ms ease-out
```

### Loading States
```
Skeleton Loaders:
- Shimmer animation across placeholder content
- Glassmorphism background with moving gradient
- Duration: 1.5s infinite ease-in-out

Form Submission:
- Button shows spinner animation
- Disabled state with reduced opacity
- Success: Checkmark animation with green glow
- Error: Shake animation with red glow
```

---

## 🎨 DARK MODE MOCKUPS

### Dark Theme Specifications
```css
[data-theme="dark"] {
  --bg-primary: #18181b;
  --bg-secondary: #27272a;
  --text-primary: #fafafa;
  --text-secondary: #d4d4d8;
  --glass-bg: rgba(0, 0, 0, 0.1);
  --glass-border: rgba(0, 0, 0, 0.2);
}
```

### Dark Mode Visual Changes
- **Background:** Deep dark (#18181b) with subtle gradients
- **Glassmorphism:** Dark glass with rgba(0, 0, 0, 0.1)
- **Text:** High contrast white (#fafafa) for readability
- **Borders:** Subtle dark borders with glow effects
- **Shadows:** Lighter shadows for depth in dark theme

---

## 📊 PERFORMANCE CONSIDERATIONS

### Optimized Assets
- **Images:** WebP format with AVIF fallbacks
- **Icons:** SVG sprites for scalability
- **Fonts:** Subset fonts for faster loading
- **Animations:** GPU-accelerated properties only

### Loading Strategy
- **Critical CSS:** Inline above-the-fold styles
- **Lazy Loading:** Images and components below fold
- **Progressive Enhancement:** Core functionality without JS
- **Code Splitting:** Route-based bundle optimization

This high-fidelity mockup specification provides complete visual guidance for implementing the modern 2025 portfolio design with glassmorphism effects, bento grid layouts, and responsive behavior.
