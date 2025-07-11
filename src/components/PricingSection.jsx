import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiCalendar, FiStar, FiWhatsapp, FiX, FiZap } = FiIcons;

const PricingSection = () => {
  const [showQR, setShowQR] = useState(false);

  const openWhatsApp = () => {
    window.open('https://wa.link/u793nt', '_blank');
  };

  const plans = [
    {
      id: 'rec-1-month',
      title: '1 Month Plan',
      subtitle: 'Quick Start',
      originalPrice: '2799',
      offerPrice: '1499',
      features: [
        'Customized diet plan',
        'Daily workout videos',
        '2 Diet variations',
        'WhatsApp support'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'rec-3-month',
      title: '3 Month Plan',
      subtitle: 'Most Popular',
      originalPrice: '6499',
      offerPrice: '3799',
      features: [
        'Customized diet plan',
        'Daily workout videos',
        '6 Diet variations',
        'Priority WhatsApp support',
        'Progress tracking'
      ],
      popular: true,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'rec-6-month',
      title: '6 Month Plan',
      subtitle: 'Best Value',
      originalPrice: '10999',
      offerPrice: '6499',
      features: [
        'Customized diet plan',
        'Daily workout videos',
        '12 Diet variations',
        'Priority WhatsApp support',
        'Progress tracking',
        'Bonus meal plans'
      ],
      popular: false,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'live-session',
      title: 'Premium 1-on-1',
      subtitle: 'Personal Training',
      originalPrice: null,
      offerPrice: 'Custom',
      features: [
        'Customized diet plan',
        'Personalized workouts',
        'Live video sessions',
        'Direct trainer access',
        'Instant support',
        'Custom meal planning'
      ],
      popular: false,
      premium: true,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <>
      <div id="pricing" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-green-600">Transformation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect plan to kickstart your fitness journey with personalized guidance and proven results
            </p>
          </motion.div>

          {/* Pricing Cards - Enhanced for better mobile display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-500 ring-4 ring-green-500 ring-opacity-20 shadow-2xl' 
                    : plan.premium 
                      ? 'border-yellow-400 ring-4 ring-yellow-400 ring-opacity-20' 
                      : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-bl-2xl text-sm font-bold flex items-center gap-1">
                    <SafeIcon icon={FiZap} className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                )}
                
                {/* Premium Badge */}
                {plan.premium && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-bold flex items-center gap-1">
                    <SafeIcon icon={FiStar} className="w-4 h-4" />
                    PREMIUM
                  </div>
                )}

                {/* Plan Header */}
                <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                  <h3 className="text-2xl font-bold mb-1">{plan.title}</h3>
                  <p className="text-sm opacity-90">{plan.subtitle}</p>
                </div>

                <div className="p-6">
                  {/* Pricing */}
                  <div className="text-center mb-6">
                    {plan.premium ? (
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                        Contact Us
                      </div>
                    ) : (
                      <>
                        {plan.originalPrice && (
                          <div className="text-lg text-gray-500 line-through mb-1">
                            ₹{plan.originalPrice}
                          </div>
                        )}
                        <div className="text-4xl font-bold text-gray-900 mb-1">
                          ₹{plan.offerPrice}
                        </div>
                        <div className="text-sm text-gray-500">One-time payment</div>
                      </>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <SafeIcon
                          icon={FiCheck}
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.premium 
                              ? 'text-yellow-500' 
                              : plan.popular 
                                ? 'text-green-500' 
                                : 'text-blue-500'
                          }`}
                        />
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={plan.premium ? openWhatsApp : () => setShowQR(true)}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg ${
                      plan.premium
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600'
                        : plan.popular
                          ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                          : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black'
                    }`}
                  >
                    {plan.premium && <SafeIcon icon={FiWhatsapp} className="w-5 h-5" />}
                    {plan.premium ? 'Contact Us' : 'Get Started'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Offer Alert */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg">
              <SafeIcon icon={FiCalendar} className="w-6 h-6" />
              Limited Time Offer - Save up to 40%!
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
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Your Payment
              </h3>
              
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1752253245204-WhatsApp%20Image%202025-07-11%20at%2022.28.57_a3f76915.jpg"
                alt="Payment QR Code"
                className="w-64 h-64 mx-auto mb-6 rounded-2xl shadow-lg"
              />
              
              <div className="text-gray-600 text-base mb-8 space-y-2">
                <p className="font-medium">📱 1. Scan the QR code to make payment</p>
                <p className="font-medium">💬 2. Send payment screenshot to us</p>
                <div className="bg-gray-50 p-4 rounded-xl mt-4">
                  <p className="font-bold text-gray-800 text-lg">
                    📞 +91 91882 81900
                  </p>
                </div>
              </div>

              <motion.button
                onClick={openWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-[#25D366] text-white rounded-2xl text-lg font-bold flex items-center justify-center gap-3 hover:bg-[#128C7E] transition-colors shadow-lg"
              >
                <SafeIcon icon={FiWhatsapp} className="w-6 h-6" />
                Send Payment Proof
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default PricingSection;