import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import FeatureShowcase from './components/FeatureShowcase';
import AppMockupSection from './components/AppMockupSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AnimatedBackground from './components/ui/AnimatedBackground';
import { Theme } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <BentoGrid />
          <FeatureShowcase />
          <AppMockupSection />
          <Pricing />
          <FAQ />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;