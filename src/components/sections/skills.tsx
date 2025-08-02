"use client"

import { skillCategories } from '@/data/content'

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-xl text-muted-foreground">
            My technical level
          </p>
        </div>

        <div className="bento-grid">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className={`card-glass ${
                index === 0 || index === 6 ? 'bento-item-wide' : 'bento-item-small'
              }`}
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {category.experience}
              </p>

              <div className="space-y-4">
                {category.skills.slice(0, 3).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
