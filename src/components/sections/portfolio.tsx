"use client"

import { projects, portfolioQuote } from '@/data/content'

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
            "{portfolioQuote.text}"
            <cite className="block text-sm font-medium text-primary-500 mt-2">
              – {portfolioQuote.author}
            </cite>
          </blockquote>
        </div>

        <div className="bento-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card-glass hover-lift ${
                project.featured ? 'bento-item-large' : 
                index % 3 === 0 ? 'bento-item-wide' : 'bento-item-small'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-2xl">
                  {getProjectIcon(project.category)}
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4">
                  {project.demoUrl && (
                    <button className="btn-primary text-sm px-4 py-2">
                      Demo
                    </button>
                  )}
                  <button className="btn-glass text-sm px-4 py-2">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-glass">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

function getProjectIcon(category?: string): string {
  const icons: Record<string, string> = {
    'IoT': '🛢️',
    'Analytics': '🔋',
    'FinTech': '💰',
    'Enterprise': '💡',
    'Travel': '✈️',
    'AI/ML': '🤖',
    'Hardware': '🏆',
    'Gaming': '🥊',
  }
  return icons[category || ''] || '🚀'
}
