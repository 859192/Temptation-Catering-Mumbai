import React from 'react';
import { Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Catering Spread" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Updated Badge with logo.jpeg */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
          <img 
            src={`${import.meta.env.BASE_URL}image/logo.jpeg`} 
            alt="Logo" 
            className="w-5 h-5 rounded-full object-cover border border-amber-500/50"  
          />
          <span>Temptation Catering Mumbai</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
          Make Every Celebration <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">Delicious</span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
          Crafting bespoke culinary experiences in Mumbai for Weddings, Birthdays, House Parties, Corporate Events, and Live Counters, <span className="text-amber-400 font-bold">Minimum order of 5k.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://wa.me/919324197713" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-8 py-4 rounded-full text-base transition-all shadow-lg shadow-amber-500/25"
          >
            <Calendar className="w-5 h-5" /> Book Now
          </a>
          <a 
            href="#dishes" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 glass-card hover:border-amber-500/50 text-white font-semibold px-8 py-4 rounded-full text-base transition-all"
          >
            View Dishes
          </a>
        </div>
      </div>
    </section>
  );
}