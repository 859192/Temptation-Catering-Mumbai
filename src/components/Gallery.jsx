import React from 'react';
import { Camera } from 'lucide-react';

export default function Gallery() {
  // Update image file names inside /image/ folder here
  const dishes = [
    { 
      title: "Royal French fries", 
      desc: "Fresh French fries, tomato catch up", 
      img: "/image/dish1.jpeg", 
      tag: "Popular" 
    },
    { 
      title: "Live Counters", 
      desc: "Custom cuisine fresh in front of guests", 
      img: "/image/dish2.jpeg", 
      tag: "Live Counter" 
    },
    { 
      title: "Artisanal Desserts", 
      desc: "Authentic Cup Cakes, Brownies & Pastries", 
      img: "/image/dish3.jpeg", 
      tag: "Sweets" 
    },
    { 
      title: "Chicken Appetizers", 
      desc: "Crispy Kebabs & Tikka Platters", 
      img: "/image/dish4.jpeg", 
      tag: "Starters" 
    },
    { 
      title: "Luxury Buffet Setup", 
      desc: "Elegant floral & illuminated display", 
      img: "/image/dish5.jpeg", 
      tag: "Setup" 
    },
    { 
      title: "Snacks Box Food Station", 
      desc: "Fresh Home Made Snack Stalls", 
      img: "/image/dish6.jpeg", 
      tag: "Street Food" 
    }
  ];

  return (
    <section id="dishes" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-wider uppercase mb-3">
            <Camera className="w-4 h-4" /> Signature Creations
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">Featured Dishes & Setup</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs px-3 py-1 rounded-full font-medium">
                {item.tag}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}