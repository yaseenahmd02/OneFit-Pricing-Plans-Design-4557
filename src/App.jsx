import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExclusiveOfferSection from './components/ExclusiveOfferSection';
import ResultsSection from './components/ResultsSection';
import PricingSection from './components/PricingSection';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  // Reference to pricing section for smoother scrolling
  const pricingRef = useRef(null);

  // Setup smooth scroll behavior
  useEffect(() => {
    // This ensures the section IDs are properly accessible for scrolling
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#pricing') {
        const pricingElement = document.getElementById('pricing');
        if (pricingElement) {
          pricingElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Check hash on initial load
    handleHashChange();
    
    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="exclusive-offer">
        <ExclusiveOfferSection />
      </div>
      <div id="results">
        <ResultsSection />
      </div>
      <div id="pricing" ref={pricingRef}>
        <PricingSection />
      </div>
      <WhatsAppButton />
    </div>
  );
}

export default App;