"use client"

import { motion } from 'framer-motion'
import ClickToCallButton from '@/components/ui/ClickToCallButton'

interface DenialScreenProps {
  reason: string
}

export default function DenialScreen({ reason }: DenialScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
      </motion.div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-4">We're Sorry</h3>
      
      <motion.p 
        className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {reason}
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-8"
      >
        <ClickToCallButton className="btn-call text-lg py-4 px-8" phoneNumber="888-555-5555">
          Need Help? Contact us for other legal options
        </ClickToCallButton>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-sm text-gray-500 mb-4"
      >
        Our legal experts may be able to suggest alternative options for your situation.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="/" className="text-primary-600 hover:underline">
          Return to Home Page
        </a>
      </motion.div>
    </motion.div>
  )
} 