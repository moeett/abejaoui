'use client'

import { skillCategories } from '@/data/content'
import {
  AnimatedContainer,
  AnimatedCard,
  AnimatedProgressBar,
  AnimatedList,
  AnimatedListItem,
} from '@/components/ui/animated-components'

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills</h2>
          <p className="text-xl text-muted-foreground">My technical level</p>
        </div>

        <AnimatedList className="bento-grid" staggerDelay={0.15}>
          {skillCategories.map((category, index) => (
            <AnimatedListItem
              key={category.name}
              className={`${index === 0 || index === 6 ? 'bento-item-wide' : 'bento-item-small'}`}
            >
              <AnimatedCard variant="glass" hover={true}>
                <h3 className="text-xl font-semibold text-foreground mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{category.experience}</p>

                <div className="space-y-4">
                  {category.skills.slice(0, 3).map((skill, skillIndex) => (
                    <AnimatedProgressBar
                      key={skill.name}
                      percentage={skill.percentage}
                      label={skill.name}
                      showPercentage={true}
                      className="delay-300"
                    />
                  ))}
                </div>
              </AnimatedCard>
            </AnimatedListItem>
          ))}
        </AnimatedList>
      </div>
    </section>
  )
}
