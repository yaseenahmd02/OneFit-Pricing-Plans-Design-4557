import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX } = FiIcons;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white font-bold text-2xl md:text-3xl cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-green-500">FIT WITH</span> SABITH
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => scrollToSection('hero')}
            className="text-white hover:text-green-400 transition-colors font-medium"
          >
            Home
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => scrollToSection('pricing')}
            className="text-white hover:text-green-400 transition-colors font-medium"
          >
            Pricing
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-green-400 transition-colors font-medium"
          >
            About
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-lg border-b border-gray-800"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-green-400 transition-colors font-medium text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-white hover:text-green-400 transition-colors font-medium text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-green-400 transition-colors font-medium text-left"
            >
              About
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;