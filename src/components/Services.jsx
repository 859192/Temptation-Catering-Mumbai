import React from 'react';
import { Utensils, Heart, Home, Building, Flame, Trees } from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Wedding Catering", icon: Heart, desc: "Lavish multi-course spreads, grand decor counters, and bespoke menus for your big day." },
    { title: "Birthday Parties", icon: Utensils, desc: "Fun live stations, customized mocktails, and delicious spreads for all age groups." },
    { title: "House Parties", icon: Home, desc: "Intimate dining experiences with gourmet bite-sized starters and curated main courses." },
    { title: "Corporate Events", icon: Building, desc: "Professional buffet setups and executive lunches delivered with prompt service." },
    { title: "Live Counters", icon: Flame, desc: "Sizzling live Chaat, Pasta, Tandoor, and Dessert stations created on the spot." },
    { title: "Outdoor Catering", icon: Trees, desc: "Seamless full-service outdoor catering setups across Mumbai and surrounding areas." },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">What We Offer</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">Exquisite Catering Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card p-8 rounded-2xl glass-card-hover border border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


