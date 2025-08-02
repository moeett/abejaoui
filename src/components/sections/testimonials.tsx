'use client'

import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Matthias Simolka',
    title: 'Product Manager @ TWAICE',
    relationship: 'Worked with Ahmed but on different teams',
    content:
      'Ahmed is an exceptional senior software engineer with a deep understanding of various different domains. He consistently demonstrated a strong work ethic and took great ownership of projects. Ahmed is a fantastic team player who is always willing to help and mentor junior engineers...',
    avatar: '👨‍💼',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Recommendations</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-glass text-center">
            <blockquote className="text-lg italic text-muted-foreground mb-8">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-2xl">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-primary-500">{testimonials[currentIndex].title}</div>
                <div className="text-xs text-muted-foreground">
                  {testimonials[currentIndex].relationship}
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-500 shadow-lg shadow-primary/25'
                    : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="btn-glass">View All on LinkedIn</button>
          </div>
        </div>
      </div>
    </section>
  )
}
