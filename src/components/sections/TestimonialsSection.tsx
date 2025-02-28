"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'John D.',
    text: 'Claim Connectors got me my settlement faster than I expected! Highly recommend!',
  },
  {
    id: 2,
    name: 'Sarah L.',
    text: 'I was lost after my accident, but their team made everything easy.',
  },
  {
    id: 3,
    name: 'Michael R.',
    text: 'Professional service from start to finish. They handled all the paperwork and negotiations.',
  },
  {
    id: 4,
    name: 'Jessica T.',
    text: 'After my Uber accident, I didn\'t know where to turn. Claim Connectors guided me through every step.',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="max-w-4xl mx-auto relative">
          <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-primary-600" />
            </button>
          </div>

          <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-12 z-10"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-primary-600" />
            </button>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="card p-8 md:p-10"
              >
                <FaQuoteLeft className="text-4xl text-primary-200 mb-6" />
                <p className="text-xl md:text-2xl mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <p className="font-bold text-right">– {testimonials[currentIndex].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 