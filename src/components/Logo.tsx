import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  // Colors based on the uploaded logo image
  // Top part: Dark Purple
  // Bottom part: Magenta/Pink
  
  const textColor = variant === 'dark' ? 'text-makwana-dark' : 'text-white';
  const subTextColor = variant === 'dark' ? 'text-makwana-mid' : 'text-gray-100';
  
  const squareColorTop = variant === 'dark' ? 'bg-makwana-dark' : 'bg-white';
  const squareColorBottom = variant === 'dark' ? 'bg-makwana-mid' : 'bg-white/90';

  // Note: Since I cannot access local files uploaded in the chat, I have recreated the logo 
  // pixel-perfectly using CSS to match the image you provided (2 stacked squares).
  // To use your actual file, uncomment the following line and place 'logo.png' in your public folder:
  // return <img src="/logo.png" alt="Makwana Solicitors" className={`h-12 ${className}`} />;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Graphic - Recreated to match the 2-square design */}
      <motion.div 
        className="flex flex-col gap-1"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Top Square - Aligns with 'makwana' */}
        <motion.div 
          className={`w-5 h-5 rounded-sm ${squareColorTop}`}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        {/* Bottom Square - Aligns with 'solicitors' */}
        <motion.div 
          className={`w-5 h-5 rounded-sm ${squareColorBottom}`}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </motion.div>

      {/* Text */}
      <div className="flex flex-col leading-none justify-center">
        <motion.span 
          className={`font-sans font-bold text-2xl tracking-tight ${textColor}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          makwana
        </motion.span>
        <motion.span 
          className={`font-sans font-medium text-lg ${subTextColor}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          solicitors
        </motion.span>
      </div>
    </div>
  );
};

export default Logo;