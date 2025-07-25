import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageCircle } = FiIcons;

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    // Direct WhatsApp link with pre-filled message for payment screenshot
    window.open('https://wa.me/919188281900?text=Hi%2C%20I%20have%20made%20the%20payment%20of%20%E2%82%B9799%20for%20the%201%20Month%20Package.%20Please%20find%20the%20payment%20screenshot%20attached.', '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={openWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group relative"
      >
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <SafeIcon icon={FiMessageCircle} className="w-7 h-7" />
        </motion.div>

        {/* Help text below button */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium bg-gray-800 text-white px-2 py-1 rounded">
          Send Screenshot
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Send Payment Screenshot
        </div>
      </motion.button>

      {/* Pulse animation */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
    </motion.div>
  );
};

export default WhatsAppButton;