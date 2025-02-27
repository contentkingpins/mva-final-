import { motion } from 'framer-motion'
import ClickToCallButton from '@/components/ui/ClickToCallButton'

interface Step5FinalCTAProps {
  onPrev: () => void
}

export default function Step5FinalCTA({ onPrev }: Step5FinalCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </motion.div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Your Claim is Ready!</h3>
      
      <motion.p 
        className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Based on your provided information, we are escalating this to a claims specialist. Please call now for immediate assistance!
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-8"
      >
        <ClickToCallButton className="btn-call text-lg py-4 px-8" phoneNumber="888-555-5555">
          Call Now to Finalize Your Claim
        </ClickToCallButton>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-sm text-gray-500 mb-8"
      >
        Our claims specialists are available 24/7 to assist you.
      </motion.p>
      
      <button
        type="button"
        onClick={onPrev}
        className="btn btn-outline"
      >
        Back to Summary
      </button>
    </motion.div>
  )
} 