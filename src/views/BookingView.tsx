import React, { useState } from 'react';
import { PageView, ReservationData } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { CalendarCheck, CheckCircle2, Clock, Users, Flame, Sparkles, Wine, ArrowRight, ShieldCheck, MapPin, Phone } from 'lucide-react';

interface BookingViewProps {
  onNavigate: (page: PageView) => void;
}

export const BookingView: React.FC<BookingViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '07:00 PM',
    guests: 2,
    seatingPreference: 'Main Dining Room',
    specialRequest: '',
    celebrationType: 'None',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState<ReservationData | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const seatingOptions = [
    {
      id: 'Main Dining Room',
      title: 'Main Dining Room',
      description: 'Warm ambient lighting, custom leather banquettes, view of open kitchen hearth.',
      tag: 'Classic Fine Dining'
    },
    {
      id: 'Bar & Lounge',
      title: 'Oak Bar & Cocktail Lounge',
      description: 'High-top marble tables, energetic craft cocktail atmosphere & vinyl soundtracks.',
      tag: 'Lively & Social'
    },
    {
      id: 'Oak Garden Veranda',
      title: 'The Garden Veranda',
      description: 'Covered climate-controlled patio with limestone fire pits & live heritage oaks.',
      tag: 'Al Fresco Ambience'
    },
    {
      id: "Chef's Hearth Counter",
      title: "Chef's Observation Counter",
      description: 'Front-row seats watching Chef Elena Vance and brigade plate directly over embers.',
      tag: 'Immersive Culinary'
    }
  ];

  const timeSlots = [
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', 
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your full name, email, and phone number.');
      return;
    }
    setErrorMsg(null);
    setBookingConfirmed({ ...formData });
  };

  const bookingRef = 'EO-' + Math.floor(100000 + Math.random() * 900000);

  return (
    <div id="booking-view-container" className="pt-24 pb-20 bg-[#0A0A0A]">
      {/* Photographic Hero */}
      <section data-hero="true" className="hero-banner relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center py-24 sm:py-32 overflow-hidden border-b border-white/10">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=85"
            alt="Intimate Candlelit Table Reservation at Ember & Oak"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/50" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]/90" />
        </div>

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 bg-[#0A0A0A]/70 backdrop-blur-md mb-6">
            <CalendarCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#F5F2ED]/80 font-normal">
              TABLE RESERVATIONS
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#F5F2ED] font-light">
            RESERVE YOUR TABLE
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F5F2ED]/75 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            Select your preferred dining room atmosphere, party size, and celebration details. Reservations open 30 days in advance.
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
        </div>
      </section>

      {/* Main Reservation Card */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-white/10 p-6 sm:p-12 shadow-2xl">
          {bookingConfirmed ? (
            /* Confirmation State */
            <div className="text-center py-6 max-w-2xl mx-auto space-y-6 animate-fade-in">
              <div className="w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full flex items-center justify-center text-[#D4AF37] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
                  CONFIRMATION RECEIVED
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2ED] mt-1 font-light">
                  Your Table is Requested
                </h2>
                <span className="text-xs text-[#D4AF37] font-mono block mt-2">
                  Reference Code: #{bookingRef}
                </span>
              </div>

              {/* Detail Card */}
              <div className="bg-[#0A0A0A] border border-white/10 p-6 text-left space-y-3 font-sans text-xs sm:text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#F5F2ED]/50 font-light">Guest Name:</span>
                  <span className="text-[#F5F2ED] font-semibold">{bookingConfirmed.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#F5F2ED]/50 font-light">Date &amp; Time:</span>
                  <span className="text-[#D4AF37] font-semibold">{bookingConfirmed.date} at {bookingConfirmed.time}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#F5F2ED]/50 font-light">Party Size:</span>
                  <span className="text-[#F5F2ED] font-semibold">{bookingConfirmed.guests} Guests</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#F5F2ED]/50 font-light">Seating Zone:</span>
                  <span className="text-[#F5F2ED] font-semibold">{bookingConfirmed.seatingPreference}</span>
                </div>
                {bookingConfirmed.celebrationType && bookingConfirmed.celebrationType !== 'None' && (
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#F5F2ED]/50 font-light">Celebration:</span>
                    <span className="text-[#D4AF37] font-semibold">{bookingConfirmed.celebrationType}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#F5F2ED]/50 font-light">Contact:</span>
                  <span className="text-[#F5F2ED] font-semibold">{bookingConfirmed.email} • {bookingConfirmed.phone}</span>
                </div>
                {bookingConfirmed.specialRequest && (
                  <div className="flex justify-between pt-1">
                    <span className="text-[#F5F2ED]/50 font-light">Special Notes:</span>
                    <span className="text-[#F5F2ED] text-right italic font-light">{bookingConfirmed.specialRequest}</span>
                  </div>
                )}
              </div>

              {/* Demo Notice Banner */}
              <div className="p-4 bg-white/5 border border-white/10 text-[#F5F2ED]/80 text-xs text-left leading-relaxed font-light">
                <strong className="text-[#D4AF37] font-medium">Portfolio Preview Notice:</strong> This reservation form operates as a real working frontend demo for Ember &amp; Oak. No live transaction or external booking notification was dispatched.
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                <button
                  onClick={() => setBookingConfirmed(null)}
                  className="px-8 py-3 bg-[#D4AF37] hover:bg-white text-black text-[10px] uppercase tracking-widest font-bold cursor-pointer transition-all"
                >
                  NEW RESERVATION
                </button>
                <button
                  onClick={() => onNavigate('menu')}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 text-[#F5F2ED] text-[10px] uppercase tracking-widest font-medium border border-white/10 cursor-pointer transition-all"
                >
                  EXPLORE DINING MENU
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-8">
              {errorMsg && (
                <div className="p-3.5 bg-rose-950/40 border border-rose-500/30 text-rose-200 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Step 1: Party Size & Date */}
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                  1. SELECT DATE &amp; GUEST COUNT
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#F5F2ED]/60 font-medium block mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#F5F2ED]/60 font-medium block mb-2">
                      Number of Guests *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value, 10) })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16].map((num) => (
                        <option key={num} value={num} className="bg-[#121212]">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Time Slots */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                  2. SELECT TIME SLOT
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {timeSlots.map((slot) => {
                    const isSelected = formData.time === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setFormData({ ...formData, time: slot })}
                        className={`py-3 px-2 min-h-[44px] flex items-center justify-center text-xs tracking-wider text-center border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#D4AF37] bg-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/20'
                            : 'border-white/10 bg-[#0A0A0A] text-[#F5F2ED]/60 hover:text-[#F5F2ED] hover:border-white/20'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Seating Preference Cards */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                  3. SEATING ATMOSPHERE
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {seatingOptions.map((opt) => {
                    const selected = formData.seatingPreference === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, seatingPreference: opt.id })}
                        className={`p-4 border transition-all cursor-pointer ${
                          selected
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                            : 'border-white/10 bg-[#0A0A0A] hover:border-white/20'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-base font-semibold text-[#F5F2ED]">
                            {opt.title}
                          </h4>
                          <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">
                            {opt.tag}
                          </span>
                        </div>
                        <p className="text-xs text-[#F5F2ED]/60 mt-1.5 leading-relaxed font-light">
                          {opt.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Contact & Celebrations */}
              <div className="space-y-4 pt-2 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                  4. GUEST DETAILS &amp; OCCASION
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#F5F2ED]/60 font-medium block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#F5F2ED]/60 font-medium block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#F5F2ED]/60 font-medium block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (512) 555-0198"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#F5F2ED]/60 font-medium block mb-2">
                      Celebrating an Occasion?
                    </label>
                    <select
                      value={formData.celebrationType}
                      onChange={(e) => setFormData({ ...formData, celebrationType: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="None">Just Dining Out</option>
                      <option value="Anniversary">Anniversary Celebration</option>
                      <option value="Birthday">Milestone Birthday</option>
                      <option value="Business Dinner">Executive Business Dinner</option>
                      <option value="Romantic Date">Romantic Evening</option>
                      <option value="Reunion">Family Gathering</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#F5F2ED]/60 font-medium block mb-2">
                      Special Requests / Dietary Needs
                    </label>
                    <input
                      type="text"
                      placeholder="Quiet booth, gluten allergies, wine recommendations..."
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <div className="text-xs text-[#F5F2ED]/60 font-light">
                  Tables held for 15 minutes past reservation time • Cancellations welcome anytime
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] hover:bg-white text-black font-sans text-[10px] uppercase tracking-widest font-bold shadow-xl transition-all cursor-pointer"
                >
                  CONFIRM RESERVATION
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
