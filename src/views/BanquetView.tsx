import React, { useState } from 'react';
import { PageView } from '../types';
import { BANQUET_SPACES } from '../data/restaurantData';
import { Users, CheckCircle2, Calendar, Mail, Phone, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface BanquetViewProps {
  onNavigate: (page: PageView) => void;
}

export const BanquetView: React.FC<BanquetViewProps> = ({ onNavigate }) => {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Corporate Dinner',
    guestCount: '25-40',
    preferredDate: '',
    preferredSpace: 'The Oak Private Dining Room',
    message: '',
  });

  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.email || !inquiryForm.phone) {
      return;
    }
    setInquirySubmitted(true);
  };

  return (
    <div id="banquet-view-container" className="pt-24 pb-20 bg-[#0A0A0A]">
      {/* Photographic Hero Header */}
      <section data-hero="true" className="hero-banner relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center py-24 sm:py-32 overflow-hidden border-b border-white/10">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
            alt="Opulent Private Dining and Banquet Hall at Ember & Oak"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/50" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]/90" />
        </div>

        {/* Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 bg-[#0A0A0A]/70 backdrop-blur-md mb-6">
            <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#F5F2ED]/80 font-normal">
              EXCLUSIVE PRIVATE GATHERINGS
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#F5F2ED] font-light">
            BANQUET FACILITY &amp; PRIVATE DINING
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F5F2ED]/75 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            From boardroom dinners and celebratory galas to rehearsal celebrations, our private venues feature bespoke menus, dedicated sommelier service, and modern AV capabilities.
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
        </div>
      </section>

      {/* Spaces Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {BANQUET_SPACES.map((space, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={space.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-2'}`}>
                <div className="relative overflow-hidden shadow-2xl border border-white/10 group">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#0A0A0A]/90 border border-[#D4AF37] text-[#D4AF37] text-xs font-semibold">
                    {space.capacity}
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                  ROOM DIMENSIONS &amp; DETAILS
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2ED] font-light">
                  {space.name}
                </h2>
                <p className="text-sm text-[#F5F2ED]/70 leading-relaxed font-light">
                  {space.description}
                </p>

                {/* Specs Pill */}
                <div className="grid grid-cols-3 gap-3 py-2 border-y border-white/10">
                  <div>
                    <span className="text-[10px] uppercase text-[#F5F2ED]/40 block">Seated</span>
                    <span className="font-serif text-lg font-bold text-[#D4AF37]">{space.seated} Guests</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#F5F2ED]/40 block">Cocktail</span>
                    <span className="font-serif text-lg font-bold text-[#D4AF37]">{space.cocktail} Guests</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#F5F2ED]/40 block">Area</span>
                    <span className="font-serif text-lg font-bold text-[#D4AF37]">{space.squareFeet} Sq Ft</span>
                  </div>
                </div>

                {/* Key Features */}
                <ul className="space-y-2">
                  {space.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#F5F2ED]/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setInquiryForm({ ...inquiryForm, preferredSpace: space.name });
                    const el = document.getElementById('banquet-inquiry-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-[#D4AF37] text-black text-[10px] uppercase tracking-widest font-bold hover:bg-white inline-flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>INQUIRE ABOUT THIS SPACE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* Banquet Tasting Tiers */}
      <section className="py-20 bg-[#121212] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              CURATED PACKAGES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#F5F2ED] font-light">
              BANQUET DINING TIERS
            </h2>
            <p className="text-sm text-[#F5F2ED]/60 font-light">
              All packages include personalized printed menus, house-baked focaccia service, and dedicated sommelier coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  3-COURSE PLATED
                </span>
                <h3 className="font-serif text-2xl text-[#F5F2ED] mt-1 mb-2 font-semibold">
                  The Silver Oak Tier
                </h3>
                <div className="font-serif text-3xl font-bold text-[#D4AF37] mb-6">
                  $85 <span className="text-xs font-sans text-[#F5F2ED]/40 font-normal">/ per guest</span>
                </div>
                <ul className="space-y-3 text-xs text-[#F5F2ED]/70 font-light">
                  <li>• Choice of Smoked Corn Bisque or Caesar</li>
                  <li>• Entrée: Grilled Ribeye or Seared King Salmon</li>
                  <li>• Dessert: Chocolate Lava Cake or Pecan Tart</li>
                  <li>• Coffee, tea, and sparkling water service</li>
                </ul>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="bg-[#121212] border-2 border-[#D4AF37] p-8 flex flex-col justify-between relative shadow-2xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#D4AF37] text-black text-[10px] uppercase font-bold tracking-widest">
                MOST REQUESTED
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  4-COURSE PLATED
                </span>
                <h3 className="font-serif text-2xl text-[#F5F2ED] mt-1 mb-2 font-semibold">
                  The Reserve Oak Tier
                </h3>
                <div className="font-serif text-3xl font-bold text-[#D4AF37] mb-6">
                  $125 <span className="text-xs font-sans text-[#F5F2ED]/40 font-normal">/ per guest</span>
                </div>
                <ul className="space-y-3 text-xs text-[#F5F2ED]/80 font-light">
                  <li>• Passed Hors d'oeuvres during cocktail hour</li>
                  <li>• Starter: Wagyu Carpaccio or Golden Beet Salad</li>
                  <li>• Mid-Course: Truffle Handcrafted Tagliolini</li>
                  <li>• Entrée: Prime Dry-Aged Ribeye &amp; Scallops Duo</li>
                  <li>• Dessert: Valrhona Chocolate &amp; Tart tasting</li>
                </ul>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  5-COURSE SOMMELIER
                </span>
                <h3 className="font-serif text-2xl text-[#F5F2ED] mt-1 mb-2 font-semibold">
                  The Executive Hearth
                </h3>
                <div className="font-serif text-3xl font-bold text-[#D4AF37] mb-6">
                  $165 <span className="text-xs font-sans text-[#F5F2ED]/40 font-normal">/ per guest</span>
                </div>
                <ul className="space-y-3 text-xs text-[#F5F2ED]/70 font-light">
                  <li>• Welcome Champagne &amp; Oysters greeting</li>
                  <li>• 5 custom courses designed with Executive Chef</li>
                  <li>• Full table-side sommelier cellar pairings</li>
                  <li>• Handcrafted mignardises &amp; take-home gift</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banquet Inquiry Form */}
      <section id="banquet-inquiry-form" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
              PLAN YOUR EVENT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2ED] font-light mt-1">
              Event Inquiry &amp; Date Request
            </h2>
            <p className="text-xs text-[#F5F2ED]/60 mt-2 font-light">
              Our Private Dining Director will respond within 24 hours with floorplan layouts and tailored proposals.
            </p>
          </div>

          {inquirySubmitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-14 h-14 text-[#D4AF37] mx-auto" />
              <h3 className="font-serif text-3xl text-[#F5F2ED]">
                Inquiry Received
              </h3>
              <p className="text-xs text-[#F5F2ED]/70 max-w-md mx-auto leading-relaxed font-light">
                Thank you, {inquiryForm.name}. We have logged your request for {inquiryForm.preferredSpace}. (Portfolio demo: submission validated locally).
              </p>
              <button
                onClick={() => setInquirySubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-[#D4AF37] text-black text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all cursor-pointer"
              >
                SUBMIT ANOTHER INQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Vance"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (512) 555-0198"
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                    Estimated Guests
                  </label>
                  <select
                    value={inquiryForm.guestCount}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, guestCount: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="10-24">10 – 24 Guests (The Oak Room)</option>
                    <option value="25-45">25 – 45 Guests</option>
                    <option value="50-85">50 – 85 Guests (Garden Veranda)</option>
                    <option value="100-250">100 – 250 Guests (Full Buyout)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                    Target Event Date
                  </label>
                  <input
                    type="date"
                    value={inquiryForm.preferredDate}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, preferredDate: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                    Preferred Space
                  </label>
                  <select
                    value={inquiryForm.preferredSpace}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, preferredSpace: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                  >
                    {BANQUET_SPACES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                  Event Vision, Timeline &amp; Dietary Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about the occasion, preferred dining format, audiovisual requirements..."
                  value={inquiryForm.message}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#D4AF37] hover:bg-white text-black text-[10px] uppercase tracking-widest font-bold shadow-xl transition-all cursor-pointer"
              >
                SUBMIT BANQUET INQUIRY
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
