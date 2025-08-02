"use client"

import { aboutDescription, statistics } from '@/data/content'

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
          <div className="lg:col-span-2">
            <div className="card-glass">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {aboutDescription}
              </p>
              
              <button className="btn-primary">
                Download CV
              </button>
            </div>
          </div>

          {/* Statistics */}
          <div className="space-y-6">
            <div className="card-neo text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {statistics.years}
              </div>
              <div className="text-sm text-muted-foreground">
                Years<br />Experience
              </div>
            </div>

            <div className="card-neo text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {statistics.projects}
              </div>
              <div className="text-sm text-muted-foreground">
                Projects<br />Done
              </div>
            </div>

            <div className="card-neo text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">
                {statistics.companies}
              </div>
              <div className="text-sm text-muted-foreground">
                Companies<br />Worked
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
