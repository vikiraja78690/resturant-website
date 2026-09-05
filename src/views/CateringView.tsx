import React, { useState } from 'react';
import { PageView } from '../types';
import { CATERING_SERVICES } from '../data/restaurantData';
import { CheckCircle2, Calculator, ArrowRight, Sparkles, ChefHat, GlassWater } from 'lucide-react';

interface CateringViewProps {
  onNavigate: (page: PageView) => void;
}

export const CateringView: React.FC<CateringViewProps> = ({ onNavigate }) => {
  // Calculator state
  const [guests, setGuests] = useState(50);
  const [serviceStyle, setServiceStyle] = useState<'stations' | 'plated' | 'passed'>('plated');
  const [beverageTier, setBeverageTier] = useState<'none' | 'wine-beer' | 'full-craft'>('wine-beer');

  // Estimate calculation
  const baseFoodPricePerPerson = {
    passed: 65,
    plated: 95,
    stations: 85,
  }[serviceStyle];

  const beveragePricePerPerson = {
    none: 0,
    'wine-beer': 35,
    'full-craft': 55,
  }[beverageTier];

  const totalPerPerson = baseFoodPricePerPerson + beveragePricePerPerson;
  const estimatedTotal = guests * totalPerPerson;

  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName && contactEmail) {
      setInquirySubmitted(true);
    }
  };

  return (
    <div id="catering-view-container" className="pt-24 pb-20 bg-[#0A0A0A]">
      {/* Photographic Hero */}
      <section data-hero="true" className="hero-banner relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center py-24 sm:py-32 overflow-hidden border-b border-white/10">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=85"
            alt="Luxury Catering and Estate Events by Ember & Oak"
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
            <ChefHat className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#F5F2ED]/80 font-normal">
              OFF-PREMISE CULINARY EXCELLENCE
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#F5F2ED] font-light">
            CATERING BY EMBER &amp; OAK
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F5F2ED]/75 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            Bring our signature wood-fired hearth flavors, hand-crafted cocktails, and polished hospitality to your private estate, ranch, or venue.
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATERING_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bg-[#121212] border border-white/10 overflow-hidden flex flex-col justify-between"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={serv.image}
                  alt={serv.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                    EVENT TYPE
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F2ED] font-light">
                    {serv.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs text-[#D4AF37] font-medium">{serv.subtitle}</p>
                  <p className="text-xs text-[#F5F2ED]/60 mt-2 leading-relaxed font-light">
                    {serv.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-1.5">
                  {serv.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#F5F2ED]/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Catering Estimator */}
      <section className="py-20 bg-[#121212] border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0A0A] border border-white/10 p-8 sm:p-12 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#F5F2ED] font-light">
                  Interactive Catering Cost Estimator
                </h3>
                <p className="text-xs text-[#F5F2ED]/60 font-light">
                  Instant transparent ballpark pricing for your custom event package.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-2">
              {/* Guest Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                    Guest Count
                  </label>
                  <span className="font-serif text-xl font-bold text-[#D4AF37]">
                    {guests} Guests
                  </span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={300}
                  step={5}
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                  className="w-full accent-[#D4AF37] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#F5F2ED]/40 mt-1">
                  <span>20 Guests</span>
                  <span>150 Guests</span>
                  <span>300 Guests</span>
                </div>
              </div>

              {/* Service Style */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block mb-2">
                  Dining &amp; Culinary Style
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'passed', label: 'Passed Tapas & Hors d’Oeuvres', price: '$65/pp' },
                    { id: 'plated', label: '3-Course Plated Fine Dining', price: '$95/pp' },
                    { id: 'stations', label: 'Live Hearth Culinary Stations', price: '$85/pp' },
                  ].map((style) => (
                    <button
                      type="button"
                      key={style.id}
                      onClick={() => setServiceStyle(style.id as any)}
                      className={`p-3 text-left border transition-colors cursor-pointer ${
                        serviceStyle === style.id
                          ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F5F2ED]'
                          : 'border-white/10 bg-[#121212] text-[#F5F2ED]/60 hover:text-[#F5F2ED]'
                      }`}
                    >
                      <span className="font-serif text-sm font-semibold block">{style.label}</span>
                      <span className="text-xs text-[#D4AF37] mt-0.5 block">{style.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Beverage Tier */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block mb-2">
                  Beverage &amp; Bar Program
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'none', label: 'Food Only (Client provides bar)', price: '$0/pp' },
                    { id: 'wine-beer', label: 'Sommelier Wine & Craft Beer', price: '+$35/pp' },
                    { id: 'full-craft', label: 'Full Bar & Smoked Cocktails', price: '+$55/pp' },
                  ].map((bev) => (
                    <button
                      type="button"
                      key={bev.id}
                      onClick={() => setBeverageTier(bev.id as any)}
                      className={`p-3 text-left border transition-colors cursor-pointer ${
                        beverageTier === bev.id
                          ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F5F2ED]'
                          : 'border-white/10 bg-[#121212] text-[#F5F2ED]/60 hover:text-[#F5F2ED]'
                      }`}
                    >
                      <span className="font-serif text-sm font-semibold block">{bev.label}</span>
                      <span className="text-xs text-[#D4AF37] mt-0.5 block">{bev.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Real-time Calculation Result */}
              <div className="p-6 bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                    ESTIMATED CATERING BUDGET
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl text-[#D4AF37] font-bold mt-0.5">
                    ${estimatedTotal.toLocaleString()}*
                  </div>
                  <span className="text-[11px] text-[#F5F2ED]/60">
                    Approximately ${totalPerPerson} per guest for {guests} guests
                  </span>
                </div>

                <p className="text-[11px] text-[#F5F2ED]/40 max-w-xs text-right sm:text-left font-light">
                  * Ballpark estimate covers food and selected bar packages. Service staffing, rentals, and local tax calculated during final contract.
                </p>
              </div>
            </div>

            {/* Quick Inquiry */}
            <div className="mt-8 pt-8 border-t border-white/10">
              {inquirySubmitted ? (
                <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>
                    Thank you {contactName}! Your estimate of ${estimatedTotal.toLocaleString()} has been sent to our catering sales team. (Portfolio demo validation).
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="flex-1 bg-[#121212] border border-white/10 px-4 py-3 text-xs text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="flex-1 bg-[#121212] border border-white/10 px-4 py-3 text-xs text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#D4AF37] hover:bg-white text-black text-[10px] uppercase tracking-widest font-bold whitespace-nowrap cursor-pointer transition-all"
                  >
                    LOCK IN THIS ESTIMATE
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
