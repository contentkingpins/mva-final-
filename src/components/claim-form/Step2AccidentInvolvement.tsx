"use client"

import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { motion } from 'framer-motion'
import ClickToCallButton from '@/components/ui/ClickToCallButton'

interface Step2AccidentInvolvementProps {
  onNext: () => void
  onPrev: () => void
  onDenial: (reason: string) => void
}

export default function Step2AccidentInvolvement({
  onNext,
  onPrev,
  onDenial,
}: Step2AccidentInvolvementProps) {
  const { register, watch, handleSubmit, formState: { errors } } = useFormContext()
  const [showFollowUp, setShowFollowUp] = useState(false)
  const [followUpType, setFollowUpType] = useState<string | null>(null)
  
  const role = watch('role')
  const otherVehicleFault = watch('otherVehicleFault')
  const rideshareUserInfo = watch('rideshareUserInfo')

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedRole = e.target.value
    
    if (selectedRole === 'driver') {
      setShowFollowUp(true)
      setFollowUpType('driver')
    } else if (selectedRole === 'guest') {
      setShowFollowUp(true)
      setFollowUpType('guest')
    } else {
      setShowFollowUp(false)
      setFollowUpType(null)
    }
  }

  const onSubmit = (data: any) => {
    // Check denial conditions
    if (role === 'driver' && otherVehicleFault === false) {
      onDenial('Unfortunately, we cannot find you representation at this time.')
      return
    }
    
    if (role === 'guest' && !rideshareUserInfo) {
      onDenial('To proceed, we need the rideshare user\'s information.')
      return
    }
    
    onNext()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="text-2xl font-bold mb-6">Accident Involvement</h3>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="label">What was your role in the rideshare accident?</label>
          
          <div className="space-y-3 mt-2">
            <div className="flex items-start">
              <input
                type="radio"
                id="role-driver"
                value="driver"
                className="mt-1"
                {...register('role', { required: 'Please select your role' })}
                onChange={handleRoleChange}
              />
              <label htmlFor="role-driver" className="ml-2">
                <span className="font-medium">I was the rideshare driver.</span>
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                type="radio"
                id="role-passenger"
                value="passenger"
                className="mt-1"
                {...register('role', { required: 'Please select your role' })}
                onChange={handleRoleChange}
              />
              <label htmlFor="role-passenger" className="ml-2">
                <span className="font-medium">I was a passenger in a rideshare vehicle.</span>
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                type="radio"
                id="role-guest"
                value="guest"
                className="mt-1"
                {...register('role', { required: 'Please select your role' })}
                onChange={handleRoleChange}
              />
              <label htmlFor="role-guest" className="ml-2">
                <span className="font-medium">I was a guest traveling with a rideshare user.</span>
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                type="radio"
                id="role-other-vehicle"
                value="other-vehicle"
                className="mt-1"
                {...register('role', { required: 'Please select your role' })}
                onChange={handleRoleChange}
              />
              <label htmlFor="role-other-vehicle" className="ml-2">
                <span className="font-medium">I was in another vehicle hit by a rideshare car.</span>
              </label>
            </div>
          </div>
          
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message as string}</p>
          )}
        </div>
        
        {showFollowUp && followUpType === 'driver' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 p-4 bg-gray-50 rounded-lg"
          >
            <label className="label">Was the other vehicle at fault?</label>
            
            <div className="space-y-3 mt-2">
              <div className="flex items-start">
                <input
                  type="radio"
                  id="fault-yes"
                  value="true"
                  className="mt-1"
                  {...register('otherVehicleFault', { required: 'Please answer this question' })}
                />
                <label htmlFor="fault-yes" className="ml-2">
                  <span className="font-medium">Yes</span>
                </label>
              </div>
              
              <div className="flex items-start">
                <input
                  type="radio"
                  id="fault-no"
                  value="false"
                  className="mt-1"
                  {...register('otherVehicleFault', { required: 'Please answer this question' })}
                />
                <label htmlFor="fault-no" className="ml-2">
                  <span className="font-medium">No</span>
                </label>
              </div>
            </div>
            
            {errors.otherVehicleFault && (
              <p className="text-red-500 text-sm mt-1">{errors.otherVehicleFault.message as string}</p>
            )}
          </motion.div>
        )}
        
        {showFollowUp && followUpType === 'guest' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 p-4 bg-gray-50 rounded-lg"
          >
            <label htmlFor="rideshareUserInfo" className="label">
              Please provide the rideshare user's information (Name & Contact)
            </label>
            
            <textarea
              id="rideshareUserInfo"
              className={`input h-24 ${errors.rideshareUserInfo ? 'border-red-500' : ''}`}
              {...register('rideshareUserInfo', { required: 'This information is required to proceed' })}
            ></textarea>
            
            {errors.rideshareUserInfo && (
              <p className="text-red-500 text-sm mt-1">{errors.rideshareUserInfo.message as string}</p>
            )}
          </motion.div>
        )}
        
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={onPrev}
            className="btn btn-outline"
          >
            Back
          </button>
          
          <button
            type="submit"
            className="btn btn-primary"
          >
            Continue
          </button>
        </div>
      </form>
    </motion.div>
  )
} 