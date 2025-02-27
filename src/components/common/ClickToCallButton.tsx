import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

interface ClickToCallButtonProps {
  phoneNumber?: string;
  className?: string;
  text?: string;
  showIcon?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

const ClickToCallButton: React.FC<ClickToCallButtonProps> = ({
  phoneNumber = '1-800-555-1234',
  className = '',
  text = 'Call Now',
  showIcon = true,
  variant = 'primary',
}) => {
  const handleClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
  };

  const getButtonClasses = () => {
    const baseClasses = 'flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 px-6 py-3';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl`;
      case 'secondary':
        return `${baseClasses} bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl`;
      case 'outline':
        return `${baseClasses} bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50`;
      default:
        return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl`;
    }
  };

  return (
    <motion.button
      className={`${getButtonClasses()} ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {showIcon && (
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity, 
            repeatType: 'loop', 
            repeatDelay: 3 
          }}
        >
          <FaPhone className="text-lg" />
        </motion.span>
      )}
      <span>{text}</span>
    </motion.button>
  );
};

export default ClickToCallButton; 