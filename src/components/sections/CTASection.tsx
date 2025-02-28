"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ClickToCallButton from '../common/ClickToCallButton';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Get the Compensation You Deserve?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Don't wait any longer. Our team is standing by to help you with your rideshare injury claim.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/#claim-form" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 inline-block"
              >
                Start Your Claim
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ClickToCallButton 
                variant="secondary" 
                text="Call for Free Consultation" 
                className="whitespace-nowrap"
              />
            </motion.div>
          </div>
          
          <motion.p 
            className="mt-8 text-sm text-blue-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            No fees unless we win. Free consultations available 24/7.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 