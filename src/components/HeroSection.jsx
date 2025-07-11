import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiX, FiWhatsapp } = FiIcons;

const HeroSection = () => {
  const [showQR, setShowQR] = useState(false);

  const openWhatsApp = () => {
    window.open('https://wa.link/u793nt', '_blank');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,197,94,0.05)_50%,transparent_75%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 pt-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
              >
                <span className="block text-white">FIT WITH</span>
                <span className="block text-green-500 text-glow">SABITH</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light"
              >
                Your Personalized Fitness Journey Starts Here!
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0"
            >
              Transform your body and mind with expert guidance, personalized workout plans, and proven results that last.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-500">500+</div>
                <div className="text-sm text-gray-400">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-500">5+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-500">100%</div>
                <div className="text-sm text-gray-400">Results</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0"
            >
              <motion.button
                onClick={() => setShowQR(true)}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34,197,94,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full text-lg font-semibold flex items-center justify-center gap-3 hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg"
              >
                🔥 Start Your Journey
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={openWhatsApp}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37,211,102,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#25D366] text-white rounded-full text-lg font-semibold flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-all duration-300 shadow-lg"
              >
                <SafeIcon icon={FiWhatsapp} className="w-5 h-5" />
                Chat Now
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right column - Influencer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752253237904-1a1f22b0-6045-4832-a1fe-4beb55a3d5f0-removebg-preview%20%281%29.png"
                alt="Sabith - Fitness Trainer"
                className="max-h-[60vh] lg:max-h-[80vh] object-contain floating"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowQR(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <SafeIcon icon={FiX} className="w-6 h-6" />
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Scan to Join
              </h3>
              
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752253245204-WhatsApp%20Image%202025-07-11%20at%2022.28.57_a3f76915.jpg"
                alt="Payment QR Code"
                className="w-64 h-64 mx-auto mb-4 rounded-lg shadow-md"
              />
              
              <div className="text-gray-600 text-base mb-6">
                <p className="mb-2 font-medium">1. Scan the QR code to make the payment</p>
                <p className="mb-2 font-medium">2. After payment, send a message to us</p>
                <p className="font-semibold text-gray-800 text-lg mb-2">
                  📞 +91 91882 81900
                </p>
              </div>

              <motion.button
                onClick={openWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-[#25D366] text-white rounded-full text-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-colors"
              >
                <SafeIcon icon={FiWhatsapp} className="w-5 h-5" />
                🔗 Chat on WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;