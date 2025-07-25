import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiStar, FiCheck, FiZap, FiTarget, FiX, FiWhatsapp } = FiIcons;

const ExclusiveOfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/919188281900?text=Hi%2C%20I%20have%20made%20the%20payment%20of%20%E2%82%B9799%20for%20the%201%20Month%20Package.%20Please%20find%20the%20payment%20screenshot%20attached.', '_blank');
  };

  return (
    <>
      <div className="bg-gradient-to-br from-red-600 via-pink-600 to-purple-700 py-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
              <SafeIcon icon={FiZap} className="w-4 h-4" />
              EXCLUSIVE WEB OFFER
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              🔥 Limited Time <span className="text-yellow-300">Special</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get started with our proven system at an unbeatable price!
            </p>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black/30 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                <SafeIcon icon={FiClock} className="w-6 h-6 text-yellow-400" />
                Offer Expires Soon!
              </h3>
            </div>
            
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="bg-white/10 rounded-2xl p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-white/70 text-sm">Hours</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-white/70 text-sm">Minutes</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-white/70 text-sm">Seconds</div>
              </div>
            </div>
          </motion.div>

          {/* Offer Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Special Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-bl-3xl">
              <div className="flex items-center gap-2 font-bold">
                <SafeIcon icon={FiStar} className="w-5 h-5" />
                WEB EXCLUSIVE
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Offer Details */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  1 Month Package
                </h3>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl text-gray-500 line-through">₹1499</span>
                    <span className="text-5xl font-bold text-red-600">₹799</span>
                  </div>
                  <div className="text-green-600 font-bold text-lg">Save 47% Today!</div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Daily workout videos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Customised diet plan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">WhatsApp support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <SafeIcon icon={FiTarget} className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-bold">Lose up to 5kg easily!</span>
                  </div>
                </div>

                <motion.button
                  onClick={() => setShowQR(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 px-8 rounded-2xl text-lg font-bold hover:from-red-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                >
                  🚀 Start Your Transformation - ₹799
                </motion.button>
              </div>

              {/* Right Side - Visual */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 text-white">
                  <div className="text-6xl mb-4">🎯</div>
                  <h4 className="text-2xl font-bold mb-4">Quick Results Guaranteed</h4>
                  <div className="space-y-2 text-lg">
                    <div>✅ 1 Month Program</div>
                    <div>✅ Lose 5kg Target</div>
                    <div>✅ Expert Guidance</div>
                    <div>✅ Instant Access</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Urgency Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-lg">
              <SafeIcon icon={FiZap} className="w-5 h-5" />
              Only 50 Spots Available - 32 Already Taken!
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
            className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <SafeIcon icon={FiX} className="w-6 h-6" />
            </button>

            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                EXCLUSIVE WEB OFFER - ₹799
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Your Payment
              </h3>
              
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752253245204-WhatsApp%20Image%202025-07-11%20at%2022.28.57_a3f76915.jpg"
                alt="Payment QR Code"
                className="w-64 h-64 mx-auto mb-6 rounded-2xl shadow-lg"
              />
              
              <div className="text-gray-600 text-base mb-6 space-y-2">
                <p className="font-medium">📱 1. Pay ₹799 using QR code above</p>
                <p className="font-medium">💬 2. Click below to send payment screenshot</p>
                <p className="font-medium">🎯 3. Get instant access to your program</p>
                <div className="bg-gray-50 p-4 rounded-xl mt-4">
                  <p className="font-bold text-gray-800 text-lg">
                    📞 +91 91882 81900
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <motion.button
                  onClick={openWhatsApp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-4 bg-[#25D366] text-white rounded-2xl text-lg font-bold flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-colors shadow-lg"
                >
                  <SafeIcon icon={FiWhatsapp} className="w-6 h-6" />
                  Send ₹799 Payment Screenshot
                </motion.button>

                <p className="text-sm text-gray-500">
                  Click above to open WhatsApp with pre-filled message
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ExclusiveOfferSection;