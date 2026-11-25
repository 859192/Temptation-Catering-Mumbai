import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  useEffect(() => {
    let lenis;
    let animationFrameId;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenis.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);
    } catch (error) {
      console.warn('Smooth scroll initialization skipped:', error);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Packages />
        <WhyUs />
        <Gallery />
        <About />
        <Testimonials />
        <ContactForm />
        <MapSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}