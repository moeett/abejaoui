"use client"

import { socialLinks } from '@/data/content'

export function FloatingSocial() {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.slice(0, 4).map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
            aria-label={social.name}
          >
            <span className="text-xl">{getSocialIcon(social.icon)}</span>
          </a>
        ))}
      </div>
    </div>
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
