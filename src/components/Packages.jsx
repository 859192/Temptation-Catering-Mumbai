import React, { useState } from 'react';
import { Sparkles, Users, Check, Flame, MessageCircle } from 'lucide-react';

export default function Packages() {
  const [activeTab, setActiveTab] = useState('veg');

  const vegPackages = [
    { title: "Small Gathering", price: "₹3,200 – ₹5,000", pax: "8–10 People", items: "4–5 Items", includes: ["Pasta (Red/White) 🍝", "Garlic Bread", "Veg Nuggets / Smiley", "Sandwich / Bruschetta", "Brownie / Gulab Jamun"], note: "Perfect for cozy house parties & movie nights" },
    { title: "Classic House Party", price: "₹7,000 – ₹10,000", pax: "12–15 People", items: "6–7 Items", badge: "Most Popular", includes: ["Hakka Noodles / Fried Rice 🍜", "Veg Manchurian", "Mini Pizza 🍕", "Paneer Tikka / Roll 🌯", "Fries 🍟 & Sandwich", "Brownie / Gulab Jamun"], note: "Complete mix of Indian, Chinese & Snacks" },
    { title: "Premium Party Setup", price: "₹10,000 – ₹15,000", pax: "15–20 People", items: "8–9 Items", includes: ["Paneer Biryani + Raita 🍛", "Pasta & Noodles/Fried Rice", "Manchurian & Paneer Tikka", "Mini Burger 🍔 & Fries", "Garlic Bread & Dessert"], note: "Comprehensive menu spread for larger crowds" },
    { title: "Celebration Special", price: "₹20,000 – ₹25,000", pax: "20–25 People", items: "10+ Items", includes: ["Paneer Biryani 🍛", "Chole / Rajma Poori", "Noodles + Manchurian & Pasta", "Paneer Tikka & Mini Pizza", "Sandwich, Fries & 2 Desserts"], note: "Full festive spread — no extra ordering needed" },
    { title: "Live Counter / Premium", price: "₹30,000 onwards", pax: "Custom Pax", items: "Live Setup", includes: ["Live Pasta Counter 🍝", "Live Chaat Station 🌮", "Starter Trays + Gourmet Snacks", "Customized Menu Choices"], note: "Live chef experience directly at your home" }
  ];

  const nonVegPackages = [
    { title: "Classic Non-Veg", price: "₹800 – ₹950 / person", pax: "Per Head Billing", items: "Standard Spread", includes: ["Chicken Chilli & Crispy Chicken Strips", "Chicken Biryani & Veg Pulao", "Dal Tadka, Raita & Salad", "Gulab Jamun Dessert"], note: "Ideal for casual birthdays, family get-togethers & housewarmings" },
    { title: "Premium Non-Veg", price: "₹1,000 – ₹1,300 / person", pax: "Per Head Billing", items: "Includes Live Counter", badge: "Chef Recommendation", includes: ["Chicken Malai Tikka & Chicken Chilli", "Veg Cheese Balls", "Live Pasta Station 🍝", "Chicken Handi & Paneer Lababdar", "Butter Naan, Jeera Rice & Brownie with Ice Cream"], note: "Best for birthdays, milestone celebrations & anniversaries" },
    { title: "Signature Experience", price: "₹1,400 – ₹1,800 / person", pax: "Per Head Billing", items: "Luxe Multi-Course", includes: ["Chicken Seekh Kebab, Malai Tikka & Fish Fingers", "Pizza & Pasta Live Counters", "Butter Chicken & Paneer Tikka Masala", "Mutton Rogan Josh (Optional)", "Mocktail Counter & Signature Desserts"], note: "Ultimate luxury for corporate meets and milestone events" }
  ];

  const grazingTables = [
    { title: "Classic Grazing Table", price: "₹10,000 – ₹15,000", pax: "15–20 Pax", includes: ["2 Sliders / Sandwiches", "1 Pasta or Noodles", "1 Starter (Spring rolls / Kebabs)", "Nachos + 2 Dips", "Cheese Cubes + Crackers", "Brownies & Dessert"], note: "Perfect for intimate gatherings with a premium touch" },
    { title: "Premium Grazing Table", price: "₹15,000 – ₹20,000", pax: "20–30 Pax", badge: "Trending", includes: ["3 Starters (Veg/Non-Veg Mix)", "2 Mains (Pasta + Rice/Noodles)", "Sliders / Wraps & Fusion Chaat", "Cheese + Crackers + Olives", "Nachos + 3 Dips", "2 Gourmet Desserts"], note: "Balanced mix of taste, variety & Instagrammable display" },
    { title: "Luxe Grazing Experience", price: "₹25,000 – ₹30,000", pax: "30–50 Pax", includes: ["4–5 Premium Starters", "2–3 Mains & Gourmet Sliders", "Premium Cheese Platter", "Fruits + Nuts + Olives + Bread Basket", "3 Dips & Sauces", "3 Desserts"], note: "Indulgent luxury experience for corporate and grand celebrations" },
    { title: "Signature Live Grazing", price: "₹35,000+", pax: "50+ Pax / Grand Events", includes: ["On-site Live Setup & Styling", "Customized Curated Menu", "Premium Decor Elements", "Professional Service Staff Support"], note: "A show-stopping centerpiece for weddings and launch events" }
  ];

  const handleBooking = (title, price) => {
    const text = `Hello Temptation Catering,%0AI am interested in booking the *${title}* package (${price}). Please share further details.`;
    window.open(`https://wa.me/919324197713?text=${text}`, '_blank');
  };

  return (
    <section id="packages" className="py-24 bg-slate-900/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-4 h-4" /> Customized Event Menus
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">House Party & Event Packages</h2>
          <p className="text-slate-400 text-sm">Select a party plan below or message us to tailor a custom menu for your event in Mumbai.</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-950 border border-slate-800 gap-2">
            <button
              onClick={() => setActiveTab('veg')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'veg' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              🟢 Veg Party Packages
            </button>
            <button
              onClick={() => setActiveTab('nonveg')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'nonveg' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              🔴 Non-Veg Specials
            </button>
            <button
              onClick={() => setActiveTab('grazing')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'grazing' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              ✨ Grazing Tables
            </button>
          </div>
        </div>

        {/* Content Render */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === 'veg' ? vegPackages : activeTab === 'nonveg' ? nonVegPackages : grazingTables).map((pkg, idx) => (
            <div key={idx} className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative border border-slate-800 hover:border-amber-500/40 transition-all">
              {pkg.badge && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {pkg.badge}
                </div>
              )}
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase mb-1">
                  <Users className="w-3.5 h-3.5" /> {pkg.pax}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                <div className="text-2xl font-extrabold text-amber-400 mb-4">{pkg.price}</div>
                <p className="text-xs text-slate-400 mb-6 italic border-l-2 border-amber-500/50 pl-3">"{pkg.note}"</p>

                <div className="space-y-2 mb-8">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">What's Included:</span>
                  {pkg.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleBooking(pkg.title, pkg.price)}
                className="w-full bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-400 border border-amber-500/30 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all text-xs"
              >
                <MessageCircle className="w-4 h-4" /> Book Package via WhatsApp
              </button>
            </div>
          ))}
        </div>

        {/* Addons Footer Note */}
        <div className="mt-12 glass-card p-6 rounded-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 className="text-sm font-bold text-white">🎁 Optional Add-ons & Service Staff</h4>
            <p className="text-xs text-slate-400 mt-1">Welcome drinks, extra desserts, premium plating, Chef, Waiter & Bartender options available on request.</p>
          </div>
          <a
            href="https://wa.me/919324197713?text=Hi%20Temptation%20Catering,%20I%20want%20to%20know%20more%20about%20add-ons%20and%20waiter/chef%20charges."
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-amber-400 hover:underline whitespace-nowrap"
          >
            Inquire About Extra Charges $\rightarrow$
          </a>
        </div>
      </div>
    </section>
  );
}