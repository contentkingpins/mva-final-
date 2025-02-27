import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm, FormProvider } from 'react-hook-form'
import Step1BasicInfo from './Step1BasicInfo'
import Step2AccidentInvolvement from './Step2AccidentInvolvement'
import Step3LegalInfo from './Step3LegalInfo'
import Step4Summary from './Step4Summary'
import Step5FinalCTA from './Step5FinalCTA'
import DenialScreen from './DenialScreen'

type FormData = {
  firstName: string
  lastName: string
  phone: string
  email: string
  role: string
  otherVehicleFault?: boolean
  rideshareUserInfo?: string
  rideshareComplaint: boolean
  rideshareCompany: 'Uber' | 'Lyft'
  policeReport: boolean
  isFelon: boolean
}

export default function ClaimForm() {
  const [step, setStep] = useState(1)
  const [isDenied, setIsDenied] = useState(false)
  const [denialReason, setDenialReason] = useState('')
  const methods = useForm<FormData>()
  
  // Load saved form data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem('claimFormData')
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      Object.keys(parsedData).forEach((key) => {
        methods.setValue(key as keyof FormData, parsedData[key])
      })
    }
  }, [methods])

  const nextStep = () => {
    setStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleDenial = (reason: string) => {
    setIsDenied(true)
    setDenialReason(reason)
  }

  const renderStep = () => {
    if (isDenied) {
      return <DenialScreen reason={denialReason} />
    }

    switch (step) {
      case 1:
        return <Step1BasicInfo onNext={nextStep} />
      case 2:
        return <Step2AccidentInvolvement onNext={nextStep} onPrev={prevStep} onDenial={handleDenial} />
      case 3:
        return <Step3LegalInfo onNext={nextStep} onPrev={prevStep} onDenial={handleDenial} />
      case 4:
        return <Step4Summary onNext={nextStep} onPrev={prevStep} />
      case 5:
        return <Step5FinalCTA onPrev={prevStep} />
      default:
        return <Step1BasicInfo onNext={nextStep} />
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {!isDenied && (
        <div className="bg-gray-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Your Claim: Step {step} of 5</h2>
            <div className="w-1/2">
              <div className="h-2 bg-gray-300 rounded-full">
                <div
                  className="h-full bg-primary-600 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <FormProvider {...methods}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6 md:p-8"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </FormProvider>
    </div>
  )
} 