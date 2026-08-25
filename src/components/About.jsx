import React from 'react';
import { Heart, PhoneCall } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl">

            <div className="w-full h-[480px] flex items-center justify-center bg-slate-900"> <img src="image/profile.jpeg" alt="Monica Verma" 
            className="w-[%] h-[92%] object-cover object-[center_30%]rounded-xl" /> </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-amber-400 font-bold">MS</div>
              <div>
                <h4 className="text-white font-bold">Monica Sinha</h4>
                <p className="text-xs text-amber-400">Founder & Chief Culinary Director</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-wider uppercase">
              <Heart className="w-4 h-4" /> Crafting Unforgettable Flavors
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">Hospitality Rooted in Passion & Authenticity</h2>
            <p className="text-slate-300 leading-relaxed">
              Founded by <strong className="text-white">Monica Sinha</strong>, Temptation Catering Mumbai brings custom menus, high hygiene standards, and exceptional flavors to weddings, corporate events, and house parties.
            </p>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 font-bold border border-slate-700">MV</div>
                <div>
                  <div className="text-xs text-slate-400">Event & Operations Manager</div>
                  <div className="text-sm font-bold text-white">Manish Vishwakarma</div>
                </div>
              </div>
              <a href="tel:8591928869" className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold border border-amber-500/30 px-3 py-1.5 rounded-lg">
                <PhoneCall className="w-3.5 h-3.5" /> 8591928869
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}