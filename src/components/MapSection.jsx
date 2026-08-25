import React from 'react';

export default function MapSection() {
  return (
    <section className="py-12 bg-slate-900/40 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4768857115255!2d72.92984818134195!3d19.130591562123517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7cde1548b19%3A0x3186c8312c9f4f0!2sTemptation%20Catering!5e0!3m2!1sen!2sin!4v1786457408671!5m2!1sen!2sin" 
            width="100%" 
            height="350" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Temptation Catering Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}