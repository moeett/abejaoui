"use client"

import { aboutDescription, statistics } from '@/data/content'
import { AnimatedContainer, AnimatedCard, AnimatedButton, AnimatedCounter } from '@/components/ui/animated-components'

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground">
            My introduction
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Description */}
          <AnimatedContainer variant="slideLeft" className="lg:col-span-2">
            <AnimatedCard variant="glass">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {aboutDescription}
              </p>

              <AnimatedButton variant="primary">
                Download CV
              </AnimatedButton>
            </AnimatedCard>
          </AnimatedContainer>

          {/* Statistics */}
          <AnimatedContainer variant="slideRight" delay={0.2} className="space-y-6">
            <AnimatedCard variant="neo" className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                <AnimatedCounter to={12} />+
              </div>
              <div className="text-sm text-muted-foreground">
                Years<br />Experience
              </div>
            </AnimatedCard>

            <AnimatedCard variant="neo" className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                <AnimatedCounter to={20} />+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects<br />Done
              </div>
            </AnimatedCard>

            <AnimatedCard variant="neo" className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                <AnimatedCounter to={5} />+
              </div>
              <div className="text-sm text-muted-foreground">
                Companies<br />Worked
              </div>
            </AnimatedCard>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  )
}
