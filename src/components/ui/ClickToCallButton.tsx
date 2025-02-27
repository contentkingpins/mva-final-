"use client"

import { motion } from 'framer-motion'
import { FaPhone } from 'react-icons/fa'

interface ClickToCallButtonProps {
  children: React.ReactNode
  className?: string
  phoneNumber: string
}

export default function ClickToCallButton({
  children,
  className = '',
  phoneNumber,
}: ClickToCallButtonProps) {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`btn ${className}`}
      onClick={handleCall}
      aria-label={`Call ${phoneNumber}`}
    >
      <FaPhone className="mr-2" />
      {children}
    </motion.button>
  )
} 