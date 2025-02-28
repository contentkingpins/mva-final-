"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ClickToCallButton from '../common/ClickToCallButton'

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-blue-600">Injured</span> in a Rideshare Accident?
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Get the compensation you deserve. Our network of specialized attorneys has helped thousands of rideshare accident victims recover millions in damages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/#claim-form" 
                  className="btn-primary inline-block text-center w-full sm:w-auto"
                >
                  Start Your Free Claim
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ClickToCallButton 
                  variant="outline" 
                  text="Call For Free Consultation" 
                  className="w-full sm:w-auto"
                />
              </motion.div>
            </div>
            
            <div className="mt-8 flex items-center text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden">
                    <span className="text-xs font-bold">★</span>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <p className="font-bold">Trusted by 10,000+ clients</p>
                <div className="flex text-yellow-400 text-sm">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>★</span>
                  ))}
                  <span className="text-gray-600 ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              
              <ul className="space-y-4">
                {[
                  { title: 'Specialized Expertise', desc: 'Attorneys focused exclusively on rideshare accidents' },
                  { title: 'No Fees Unless You Win', desc: 'You pay nothing unless we secure compensation for you' },
                  { title: 'Fast Response Time', desc: 'Get connected with an attorney within 24 hours' },
                  { title: 'Maximum Compensation', desc: 'We fight to get you every dollar you deserve' }
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-4">
                  Join thousands of satisfied clients
                </p>
                <Link 
                  href="/#claim-form" 
                  className="btn-primary block text-center w-full"
                >
                  Start Your Free Claim Now
                </Link>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full z-[-1]" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-100 rounded-full z-[-1]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 