"use client"

import { personalInfo, footerNavigation, socialLinks } from '@/data/content'
import { smoothScrollTo } from '@/lib/utils'

export function Footer() {
  const handleNavClick = (id: string) => {
    smoothScrollTo(id)
  }

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  {personalInfo.title}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              {personalInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {footerNavigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block text-sm text-muted-foreground hover:text-primary-500 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.slice(0, 4).map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <span className="text-lg">{getSocialIcon(social.icon)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © abejaoui.com 2025 All rights reserved
          </p>
          
          <button
            onClick={handleBackToTop}
            className="mt-4 md:mt-0 btn-glass text-sm px-4 py-2"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

function getSocialIcon(icon: string): string {
  const icons: Record<string, string> = {
    linkedin: '💼',
    github: '🐙',
    youtube: '📺',
    instagram: '📸',
    spotify: '🎵',
    medium: '📝'
  }
  return icons[icon] || '🔗'
}
