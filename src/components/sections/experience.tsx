"use client"

import { education, awards } from '@/data/content'

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="card-glass">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-primary-500 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.location}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Awards
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="card-glass">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {award.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {award.authority}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
