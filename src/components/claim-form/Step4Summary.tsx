"use client"

import { useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { motion } from 'framer-motion'

interface Step4SummaryProps {
  onNext: () => void
  onPrev: () => void
}

const processingSteps = [
  'Verifying claim details...',
  'Assessing liability and insurance coverage...',
  'Running compensation estimator...',
  'Finalizing results...',
]

export default function Step4Summary({ onNext, onPrev }: Step4SummaryProps) {
  const { getValues } = useFormContext()
  const [currentStep, setCurrentStep] = useState(0)
  const [isProcessing, setIsProcessing] = useState(true)
  
  const formData = getValues()

  useEffect(() => {
    // Simulate processing steps with delays
    const timer = setTimeout(() => {
      if (currentStep < processingSteps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setIsProcessing(false)
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [currentStep])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="text-2xl font-bold mb-6">Claim Summary</h3>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-semibold mb-4">Your Information</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{formData.firstName} {formData.lastName}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Contact</p>
            <p className="font-medium">{formData.phone}</p>
            <p className="font-medium">{formData.email}</p>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold mb-4">Accident Details</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-500">Your Role</p>
            <p className="font-medium">
              {formData.role === 'driver' && 'Rideshare Driver'}
              {formData.role === 'passenger' && 'Rideshare Passenger'}
              {formData.role === 'guest' && 'Guest with Rideshare User'}
              {formData.role === 'other-vehicle' && 'In Another Vehicle'}
            </p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Rideshare Company</p>
            <p className="font-medium">{formData.rideshareCompany}</p>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold mb-4">Legal Information</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Complaint Filed</p>
            <p className="font-medium">{formData.rideshareComplaint === 'true' ? 'Yes' : 'No'}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-500">Police Report</p>
            <p className="font-medium">{formData.policeReport === 'true' ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-semibold mb-4 text-blue-800">Processing Your Claim</h4>
        
        <div className="space-y-4">
          {processingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ 
                opacity: currentStep >= index ? 1 : 0.3,
                x: 0
              }}
              className="flex items-center"
            >
              <div 
                className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${
                  currentStep > index 
                    ? 'bg-green-500' 
                    : currentStep === index 
                    ? 'bg-blue-500' 
                    : 'bg-gray-300'
                }`}
              >
                {currentStep > index && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                )}
              </div>
              <p className={`${currentStep === index ? 'font-medium' : ''}`}>
                {step}
              </p>
              {currentStep === index && isProcessing && (
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-2 h-2 bg-blue-500 rounded-full ml-3"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        {isProcessing ? (
          <button
            type="button"
            disabled
            className="btn btn-outline opacity-50 cursor-not-allowed"
          >
            Processing...
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={onPrev}
              className="btn btn-outline"
            >
              Back
            </button>
            
            <button
              type="button"
              onClick={onNext}
              className="btn btn-primary"
            >
              Continue to Final Step
            </button>
          </>
        )}
      </div>
    </motion.div>
  )
} 