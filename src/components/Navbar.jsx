import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Dishes', href: '#dishes' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            {/* Image Logo */}
            <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-500/40 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform bg-slate-900">
              <img 
                src="image/logo.jpeg" 
                alt="Temptation Catering Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-amber-400 tracking-wide leading-tight">TEMPTATION</span>
              <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase">Catering Mumbai</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
                {link.name}
              </a>
            ))}
            <a href="tel:9324197713" className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-md shadow-amber-500/20">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300 hover:text-amber-400 p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-card border-t border-slate-800 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-base font-medium text-slate-300 hover:text-amber-400">
              {link.name}
            </a>
          ))}
          <a href="tel:9324197713" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 w-full bg-amber-500 text-slate-950 font-bold py-3 rounded-xl text-center">
            <Phone className="w-4 h-4" /> Call 9324197713
          </a>
        </div>
      )}
    </nav>
  );
}