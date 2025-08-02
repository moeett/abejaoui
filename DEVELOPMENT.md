# 🛠️ DEVELOPMENT GUIDE

## Ahmed's Portfolio 2025 - Development Environment Setup

---

## 📋 DEVELOPMENT TOOLS CONFIGURED

### Code Quality & Formatting

- **ESLint** - JavaScript/TypeScript linting with Next.js rules
- **Prettier** - Code formatting with consistent style
- **TypeScript** - Static type checking
- **Husky** - Git hooks for pre-commit validation
- **lint-staged** - Run linters on staged files only

### VS Code Integration

- **Settings** - Optimized VS Code configuration
- **Extensions** - Recommended extensions for best development experience
- **IntelliSense** - Enhanced TypeScript and Tailwind CSS support

---

## 🚀 GETTING STARTED

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** 8+ or **yarn** 1.22+
- **Git** for version control
- **VS Code** (recommended editor)

### Installation

```bash
# Clone the repository
git clone https://github.com/moeett/abejaoui.git
cd abejaoui

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Server

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Export static files
npm run export
```

---

## 🔧 DEVELOPMENT SCRIPTS

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Check Prettier formatting
npm run prettier

# Fix Prettier formatting
npm run prettier:fix

# Run TypeScript type checking
npm run type-check

# Format all code (Prettier + ESLint)
npm run format

# Check all (TypeScript + ESLint + Prettier)
npm run check
```

### Build & Deploy

```bash
# Build for production
npm run build

# Export static files for Netlify
npm run export

# Build and export (deployment ready)
npm run deploy
```

---

## 📝 CODE STYLE GUIDE

### ESLint Rules

- **TypeScript** - Strict type checking enabled
- **React** - React hooks and JSX accessibility rules
- **Next.js** - Next.js specific optimizations
- **Accessibility** - WCAG compliance rules
- **Performance** - Core Web Vitals optimizations

### Prettier Configuration

- **Semi-colons** - Disabled (cleaner look)
- **Quotes** - Single quotes for strings
- **Print Width** - 100 characters
- **Tab Width** - 2 spaces
- **Trailing Commas** - ES5 compatible

### TypeScript Guidelines

- **Strict Mode** - Enabled for better type safety
- **No Any** - Avoid `any` type, use specific types
- **Explicit Returns** - Optional for better readability
- **Path Aliases** - Use `@/` for src imports

---

## 🔄 GIT WORKFLOW

### Pre-commit Hooks

Husky automatically runs these checks before each commit:

1. **lint-staged** - Lint and format only staged files
2. **TypeScript** - Type checking
3. **ESLint** - Code quality checks
4. **Prettier** - Code formatting

### Commit Message Format

```bash
# Feature
feat: add new animation system

# Bug fix
fix: resolve mobile navigation issue

# Documentation
docs: update development guide

# Style/formatting
style: format code with prettier

# Refactor
refactor: improve component structure

# Performance
perf: optimize animation performance

# Test
test: add unit tests for components
```

---

## 🎨 VS CODE SETUP

### Recommended Extensions

- **Prettier** - Code formatter
- **ESLint** - JavaScript/TypeScript linter
- **Tailwind CSS IntelliSense** - Tailwind class suggestions
- **TypeScript Importer** - Auto import suggestions
- **Auto Rename Tag** - Rename paired HTML/JSX tags
- **Path Intellisense** - File path autocompletion
- **Error Lens** - Inline error highlighting
- **Todo Tree** - TODO comment highlighting

### Settings Configured

- **Format on Save** - Automatic code formatting
- **Auto Fix on Save** - ESLint auto-fix
- **Import Organization** - Automatic import sorting
- **Tailwind IntelliSense** - Enhanced CSS class suggestions
- **TypeScript Hints** - Inline type information

---

## 🏗️ PROJECT STRUCTURE

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   ├── ui/               # Reusable UI components
│   └── providers/        # Context providers
├── lib/                  # Utility libraries
│   ├── utils.ts          # General utilities
│   ├── animations.ts     # GSAP animations
│   └── framer-variants.ts # Framer Motion variants
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── data/                 # Static data and content
└── styles/               # Additional styles
```

---

## 🧪 TESTING SETUP

### Testing Tools (Future)

- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Cypress** - End-to-end testing
- **Playwright** - Cross-browser testing

### Testing Commands (Future)

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

---

## 🚀 DEPLOYMENT

### Netlify Deployment

1. **Build Command:** `npm run build`
2. **Publish Directory:** `out`
3. **Environment Variables:** Set in Netlify dashboard
4. **Domain:** Configure custom domain in Netlify

### Environment Variables

```bash
# .env.local (not committed)
NEXT_PUBLIC_SITE_URL=https://portfolio.abejaoui.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 🔍 DEBUGGING

### Development Tools

- **React Developer Tools** - Component inspection
- **Next.js DevTools** - Performance monitoring
- **Browser DevTools** - Network and performance analysis
- **VS Code Debugger** - Breakpoint debugging

### Common Issues

1. **Build Errors** - Check TypeScript types and ESLint rules
2. **Import Errors** - Verify path aliases and file extensions
3. **Style Issues** - Check Tailwind CSS classes and custom styles
4. **Animation Issues** - Verify GSAP and Framer Motion setup

---

## 📚 RESOURCES

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/docs/)

### Code Quality

- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
- [TypeScript ESLint](https://typescript-eslint.io/)

---

## 🤝 CONTRIBUTING

### Development Workflow

1. **Create Feature Branch** - `git checkout -b feature/new-feature`
2. **Make Changes** - Follow code style guidelines
3. **Test Changes** - Run linting and type checking
4. **Commit Changes** - Use conventional commit messages
5. **Push Branch** - `git push origin feature/new-feature`
6. **Create Pull Request** - Describe changes and testing

### Code Review Checklist

- [ ] Code follows style guidelines
- [ ] TypeScript types are properly defined
- [ ] Components are accessible (WCAG compliant)
- [ ] Performance optimizations applied
- [ ] Documentation updated if needed
- [ ] No console errors or warnings

---

**Happy coding! 🚀**
