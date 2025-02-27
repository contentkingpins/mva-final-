import { useFormContext } from 'react-hook-form'
import { motion } from 'framer-motion'

interface Step3LegalInfoProps {
  onNext: () => void
  onPrev: () => void
  onDenial: (reason: string) => void
}

export default function Step3LegalInfo({
  onNext,
  onPrev,
  onDenial,
}: Step3LegalInfoProps) {
  const { register, watch, handleSubmit, formState: { errors } } = useFormContext()
  
  const rideshareComplaint = watch('rideshareComplaint')
  const policeReport = watch('policeReport')
  const isFelon = watch('isFelon')

  const onSubmit = (data: any) => {
    // Check denial conditions
    if (!rideshareComplaint && !policeReport) {
      onDenial('To process a rideshare claim, there must be either a rideshare report or a police report. Unfortunately, we cannot proceed with your claim at this time.')
      return
    }
    
    if (isFelon === true) {
      onDenial('Unfortunately, we cannot proceed with your claim at this time.')
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
      <h3 className="text-2xl font-bold mb-6">Legal & Insurance Information</h3>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="label">Did you file a complaint with the rideshare app?</label>
          
          <div className="space-y-3 mt-2">
            <div className="flex items-start">
              <input
                type="radio"
                id="complaint-yes"
                value="true"
                className="mt-1"
                {...register('rideshareComplaint', { required: 'Please answer this question' })}
              />
              <label htmlFor="complaint-yes" className="ml-2">
                <span className="font-medium">Yes</span>
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                type="radio"
                id="complaint-no"
                value="false"
                className="mt-1"
                {...register('rideshareComplaint', { required: 'Please answer this question' })}
              />
              <label htmlFor="complaint-no" className="ml-2">
                <span className="font-medium">No</span>
              </label>
            </div>
          </div>
          
          {errors.rideshareComplaint && (
            <p className="text-red-500 text-sm mt-1">{errors.rideshareComplaint.message as string}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label className="label">Were you in an Uber or Lyft?</label>
          
          <select
            className={`input ${errors.rideshareCompany ? 'border-red-500' : ''}`}
            {...register('rideshareCompany', { required: 'Please select a rideshare company' })}
          >
            <option value="">Select a rideshare company</option>
            <option value="Uber">Uber</option>
            <option value="Lyft">Lyft</option>
          </select>
          
          {errors.rideshareCompany && (
            <p className="text-red-500 text-sm mt-1">{errors.rideshareCompany.message as string}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label className="label">Is there a police report?</label>
          
          <div className="space-y-3 mt-2">
            <div className="flex items-start">
              <input
                type="radio"
                id="police-report-yes"
                value="true"
                className="mt-1"
                {...register('policeReport', { required: 'Please answer this question' })}
              />
              <label htmlFor="police-report-yes" className="ml-2">
                <span className="font-medium">Yes</span>
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                type="radio"
                id="police-report-no"
                value="false"
                className="mt-1"
                {...register('policeReport', { required: 'Please answer this question' })}
              />
              <label htmlFor="police-report-no" className="ml-2">
                <span className="font-medium">No</span>
              </label>
            </div>
          </div>
          
          {errors.policeReport && (
            <p className="text-red-500 text-sm mt-1">{errors.policeReport.message as string}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label className="label">Are you currently a felon?</label>
          
          <div className="space-y-3 mt-2">
            <div className="flex items-start">
              <input
                type="radio"
                id="felon-yes"
                value="true"
                className="mt-1"
                {...register('isFelon', { required: 'Please answer this question' })}
              />
              <label htmlFor="felon-yes" className="ml-2">
                <span className="font-medium">Yes</span>
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                type="radio"
                id="felon-no"
                value="false"
                className="mt-1"
                {...register('isFelon', { required: 'Please answer this question' })}
              />
              <label htmlFor="felon-no" className="ml-2">
                <span className="font-medium">No</span>
              </label>
            </div>
          </div>
          
          {errors.isFelon && (
            <p className="text-red-500 text-sm mt-1">{errors.isFelon.message as string}</p>
          )}
        </div>
        
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