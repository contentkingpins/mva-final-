"use client"

import { motion } from 'framer-motion'
import { FaClipboardCheck, FaComments, FaBalanceScale, FaMoneyBillWave } from 'react-icons/fa'

const steps = [
  {
    id: 1,
    title: 'Submit Your Claim',
    description: 'Provide basic details about your rideshare accident.',
    icon: FaClipboardCheck,
    delay: 0,
  },
  {
    id: 2,
    title: 'Free Consultation',
    description: 'Speak to a rideshare accident expert about your case.',
    icon: FaComments,
    delay: 0.2,
  },
  {
    id: 3,
    title: 'We Handle Everything',
    description: 'We fight for maximum compensation on your behalf.',
    icon: FaBalanceScale,
    delay: 0.4,
  },
  {
    id: 4,
    title: 'Get Paid!',
    description: 'You receive your settlement quickly and hassle-free.',
    icon: FaMoneyBillWave,
    delay: 0.6,
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Our simple 4-step process makes getting compensated for your rideshare accident easy and stress-free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.delay }}
              viewport={{ once: true, margin: '-100px' }}
              className="card p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="text-3xl text-primary-600" />
              </div>
              
              <div className="inline-block bg-primary-100 text-primary-800 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                {step.id}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <a href="/claim" className="btn btn-primary text-lg">
              Start Your Claim Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 