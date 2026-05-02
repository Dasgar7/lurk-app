import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Parallax effect for the hero section
    const handleScroll = () => {
      const hero = document.querySelector('.hero-parallax');
      if (hero) {
        let scrollPosition = window.pageYOffset;
        hero.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0c0d1b] via-[#1a1b2d] to-[#0c0d1b] text-white">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;