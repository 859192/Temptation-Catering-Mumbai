import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  useEffect(() => {
    // Check if script is already added
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-wider uppercase mb-3">
            <Star className="w-4 h-4 fill-current" /> Live Ratings
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Clients Say on Google
          </h2>
        </div>

        {/* Elfsight Google Reviews Embed */}
        <div className="glass-card p-4 sm:p-8 rounded-2xl border border-slate-800">
          <div 
            className="elfsight-app-bfa606cb-0491-4c4c-8878-50465aa2fcfe" 
            data-elfsight-app-lazy 
          />
        </div>
      </div>
    </section>
  );
}