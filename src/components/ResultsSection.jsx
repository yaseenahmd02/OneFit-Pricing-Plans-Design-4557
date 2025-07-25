import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiTrendingUp, FiAward } = FiIcons;

const ResultsSection = () => {
  const results = [
    {
      id: 1,
      image: 'https://i.postimg.cc/FsBxP68g/Whats-App-Image-2025-05-09-at-14-46-09-ad7832d0.jpg',
      title: 'Amazing Transformation',
      description: 'Lost 12kg in 3 months with our personalized program'
    },
    {
      id: 2,
      image: 'https://i.postimg.cc/NFPRzyJf/Whats-App-Image-2025-05-09-at-14-46-10-2984ec9a.jpg',
      title: 'Incredible Results',
      description: 'Built lean muscle and improved overall fitness'
    },
    {
      id: 3,
      image: 'https://i.postimg.cc/tgHWwG5P/Whats-App-Image-2025-05-09-at-14-46-09-1876d19f.jpg',
      title: 'Life-Changing Journey',
      description: 'Complete body transformation with expert guidance'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real <span className="text-green-500 text-glow">Results</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See the incredible transformations achieved by our clients with our proven fitness programs
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300 shadow-2xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <SafeIcon icon={FiAward} className="w-5 h-5 text-green-500" />
                  <h3 className="text-xl font-bold text-white">{result.title}</h3>
                </div>
                <p className="text-gray-400">{result.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-green-500 mb-2">5000+</div>
            <div className="text-gray-400">Transformations</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-green-500 mb-2">95%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-green-500 mb-2">12kg</div>
            <div className="text-gray-400">Avg Weight Loss</div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
            <div className="text-3xl font-bold text-green-500 mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsSection;