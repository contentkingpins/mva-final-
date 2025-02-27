import { useFormContext } from 'react-hook-form'
import { motion } from 'framer-motion'

interface Step1BasicInfoProps {
  onNext: () => void
}

export default function Step1BasicInfo({ onNext }: Step1BasicInfoProps) {
  const { register, handleSubmit, formState: { errors } } = useFormContext()

  const onSubmit = (data: any) => {
    onNext()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="label">First Name</label>
            <input
              type="text"
              id="firstName"
              className={`input ${errors.firstName ? 'border-red-500' : ''}`}
              {...register('firstName', { required: 'First name is required' })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message as string}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName" className="label">Last Name</label>
            <input
              type="text"
              id="lastName"
              className={`input ${errors.lastName ? 'border-red-500' : ''}`}
              {...register('lastName', { required: 'Last name is required' })}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message as string}</p>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="label">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className={`input ${errors.phone ? 'border-red-500' : ''}`}
            {...register('phone', { 
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Please enter a valid 10-digit phone number'
              }
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="label">Email Address</label>
          <input
            type="email"
            id="email"
            className={`input ${errors.email ? 'border-red-500' : ''}`}
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
          )}
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Continue to Next Step
          </button>
        </div>
      </form>
    </motion.div>
  )
} 