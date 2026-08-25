import React from 'react';
import { ShieldCheck, Sparkles, Users, UtensilsCrossed, Clock, Gem } from 'lucide-react';

export default function WhyUs() {
  const points = [
    { title: "Fresh Ingredients", icon: Sparkles, desc: "Sourced daily to ensure peak taste and quality." },
    { title: "Hygienic Kitchen", icon: ShieldCheck, desc: "Strict hygiene and cleanliness protocols followed." },
    { title: "Experienced Team", icon: Users, desc: "Skilled chefs and hospitable staff at your service." },
    { title: "Customized Menu", icon: UtensilsCrossed, desc: "Tailored to your guest preferences and theme." },
    { title: "On-Time Service", icon: Clock, desc: "Punctual setup and effortless execution every time." },
    { title: "Affordable Luxury", icon: Gem, desc: "Premium quality presentation at budget-friendly rates." },
  ];

  return (
    <section className="py-24 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Our Promise</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">Why Choose Temptation Catering</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{pt.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}