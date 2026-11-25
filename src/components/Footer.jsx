import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-10 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="text-white font-semibold">Temptation Catering Mumbai</p>
          <p className="text-xs text-slate-500 mt-0.5">Owner: Monica Verma | Manager: Manish (8591928869)</p>
        </div>
        <div className="text-xs text-slate-400">
          Crafted with ❤️ in Mumbai • Copyright © 2027-28 All Rights Reserved
        </div>
        <div className="text-xs text-amber-400 font-medium">
          Built with Manish
        </div>
      </div>
    </footer>
  );
}