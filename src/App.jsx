import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <PricingSection />
      <WhatsAppButton />
    </div>
  );
}

export default App;