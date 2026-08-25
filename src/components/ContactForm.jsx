import React, { useState } from 'react';
import { Send, Phone, MapPin, User } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', eventType: 'Wedding', date: '', guests: '', message: '' });

  // Restricts phone input to digits only and maximum 10 digits
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    const text = `Hello Temptation Catering,%0A%0A*New Booking Query:*%0A- Name: ${formData.name}%0A- Phone: ${formData.phone}%0A- Event: ${formData.eventType}%0A- Date: ${formData.date}%0A- Guests: ${formData.guests}%0A- Details: ${formData.message}`;
    window.open(`https://wa.me/919324197713?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">Plan Your Menu Today</h2>
              <p className="text-slate-400 text-sm mt-3">Fill out the form or contact our team directly to get a tailored quote for your event.</p>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Owner & Founder</div>
                  <div className="text-sm font-semibold text-white">Monica Sinha</div>
                </div>
              </div>

              <a href="tel:9324197713" className="glass-card p-4 rounded-xl flex items-center gap-4 block hover:border-amber-500/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Contact / Booking</div>
                  <div className="text-sm font-semibold text-white">+91 9324197713</div>
                </div>
              </a>

              <a href="https://www.instagram.com/temptation_catering_mumbai" target="_blank" rel="noreferrer" className="glass-card p-4 rounded-xl flex items-center gap-4 block hover:border-amber-500/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Instagram Handle</div>
                  <div className="text-sm font-semibold text-white">@temptation_catering_mumbai</div>
                </div>
              </a>

              <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-white">Mumbai, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-5 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Send an Event Query</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Your Name</label>
                  <input required type="text" placeholder="e.g. Manish Vishwakarma" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500" onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                
                {/* Fixed Phone Input Field */}
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    value={formData.phone}
                    maxLength={10}
                    pattern="[6-9][0-9]{9}"
                    title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
                    placeholder="10-digit Mobile Number" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500" 
                    onChange={handlePhoneChange} 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Event Type</label>
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500" onChange={e => setFormData({...formData, eventType: e.target.value})}>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday Party</option>
                    <option value="House Party">House Party</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Event Date</label>
                  <input type="date" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500" onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Guest Count</label>
                  <input type="number" placeholder="50" min="1" max="10000" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500" onChange={e => setFormData({...formData, guests: e.target.value})} />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Special Preferences / Requirements</label>
                <textarea rows="4" placeholder="Tell us about food preferences (Veg/Non-Veg), live counter requirements, etc." className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20">
                <Send className="w-4 h-4" /> Send Booking Query via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}