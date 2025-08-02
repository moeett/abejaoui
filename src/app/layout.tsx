import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ahmed Khalil Bejaoui - Portfolio',
    template: '%s | Ahmed Khalil Bejaoui'
  },
  description: 'Tech Lead & Software Engineer specializing in modern web technologies, mobile development, and UI/UX design. 12+ years of experience delivering quality solutions.',
  keywords: [
    'Ahmed Khalil Bejaoui',
    'Software Engineer',
    'Tech Lead',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'AWS',
    'Munich',
    'Germany'
  ],
  authors: [{ name: 'Ahmed Khalil Bejaoui', url: 'https://portfolio.abejaoui.com' }],
  creator: 'Ahmed Khalil Bejaoui',
  publisher: 'Ahmed Khalil Bejaoui',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolio.abejaoui.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.abejaoui.com',
    title: 'Ahmed Khalil Bejaoui - Portfolio',
    description: 'Tech Lead & Software Engineer specializing in modern web technologies',
    siteName: 'Ahmed Khalil Bejaoui Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahmed Khalil Bejaoui - Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Khalil Bejaoui - Portfolio',
    description: 'Tech Lead & Software Engineer specializing in modern web technologies',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.variable,
        'min-h-screen bg-background font-sans antialiased'
      )}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
