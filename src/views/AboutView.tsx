import React from 'react';
import { PageView } from '../types';
import { Flame, Compass, Sparkles, Award, ArrowRight, HeartHandshake, Wine, ShieldCheck } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageView) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div id="about-view-container" className="pt-24 pb-20 bg-[#0A0A0A]">
      {/* Editorial Photographic Hero */}
      <section data-hero="true" className="hero-banner relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center py-24 sm:py-32 overflow-hidden border-b border-white/10">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=85"
            alt="Wood-Fired Hearth Embers and Culinary Craft"
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
            <Flame className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#F5F2ED]/80 font-normal">
              OUR STORY &amp; CULINARY HERITAGE
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#F5F2ED] font-light leading-tight">
            THE ART OF POST OAK &amp; HOSPITALITY
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F5F2ED]/75 max-w-2xl mx-auto mt-6 leading-relaxed font-light">
            Ember &amp; Oak was conceived as a love letter to Central Texas: its ancient live oaks, fiery barbecue heritage, and vibrant modern culinary renaissance.
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
        </div>
      </section>

      {/* Main Philosophy Split */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              THE HEARTH PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F2ED] font-light">
              Cooking Over Ancient Embers
            </h2>
            <p className="text-sm sm:text-base text-[#F5F2ED]/70 leading-relaxed font-light">
              At the center of our kitchen stands a custom eight-foot open hearth engineered from Texas limestone and cast iron. Fueled exclusively by naturally cured Texas post oak and hickory, the hearth achieves searing temperatures exceeding 900°F alongside low-and-slow ember coals.
            </p>
            <p className="text-sm text-[#F5F2ED]/60 leading-relaxed font-light">
              Wood smoke is not merely an accent; it is an ingredient. By balancing intense radiant heat with precise ember roasting, we impart subtle notes of toasted caramel, wild herbs, and rich umami into our 45-day dry-aged steaks, heritage root vegetables, and hand-caught Gulf seafood.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#121212] border border-white/10">
                <span className="font-serif text-2xl font-bold text-[#D4AF37] block">
                  45 Days
                </span>
                <span className="text-xs text-[#F5F2ED]/60">In-House Dry Aging Vault</span>
              </div>
              <div className="p-4 bg-[#121212] border border-white/10">
                <span className="font-serif text-2xl font-bold text-[#D4AF37] block">
                  100% Post Oak
                </span>
                <span className="text-xs text-[#F5F2ED]/60">Sustainably Sourced Fuel</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative shadow-2xl border border-white/10 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                alt="Wood-Fired Hearth Plating"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Leadership */}
      <section className="py-24 bg-[#121212] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              CULINARY LEADERSHIP
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#F5F2ED] font-light">
              THE VISIONARIES
            </h2>
            <p className="text-sm text-[#F5F2ED]/60 font-light">
              Led by seasoned culinary minds with over four decades of collective Michelin-star and James Beard nominee experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Chef 1 */}
            <div className="bg-[#0A0A0A] border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80"
                  alt="Executive Chef Elena Vance"
                  className="w-full h-72 object-cover object-top border border-white/10 mb-6"
                />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
                  EXECUTIVE CHEF &amp; CO-FOUNDER
                </span>
                <h3 className="font-serif text-2xl text-[#F5F2ED] mt-1 font-semibold">
                  Elena Vance
                </h3>
                <p className="text-xs text-[#F5F2ED]/60 mt-3 leading-relaxed font-light">
                  Trained in Lyon and San Francisco, Chef Vance spent 12 years helming renowned kitchens before returning to Texas. Her philosophy champions raw fire technique tempered by classical French precision and Texas border spices.
                </p>
              </div>
            </div>

            {/* Beverage Director */}
            <div className="bg-[#0A0A0A] border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80"
                  alt="Julian Vance - Beverage Director"
                  className="w-full h-72 object-cover object-top border border-white/10 mb-6"
                />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
                  BEVERAGE DIRECTOR &amp; ADVANCED SOMMELIER
                </span>
                <h3 className="font-serif text-2xl text-[#F5F2ED] mt-1 font-semibold">
                  Julian Vance
                </h3>
                <p className="text-xs text-[#F5F2ED]/60 mt-3 leading-relaxed font-light">
                  An Advanced Sommelier (CMS) with an unyielding fascination for rare American whiskey and biodynamic terroir wines. Julian curates Ember &amp; Oak's 140-label cellar and barrel-aged cocktail program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Partners & Sustainability */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] border border-white/10 p-8 sm:p-14">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              ROOTED IN CENTRAL TEXAS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2ED] font-light mt-2 mb-6">
              Our Farming &amp; Ranching Partners
            </h2>
            <p className="text-sm text-[#F5F2ED]/70 leading-relaxed mb-8 font-light">
              We reject industrial supply chains. Over 85% of our seasonal produce, dairy, poultry, and beef travels less than 150 miles to our kitchen from generational Texas purveyors who practice regenerative agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="p-5 bg-[#0A0A0A] border border-white/10">
              <h4 className="font-serif text-lg text-[#D4AF37] font-semibold">
                Bastrop Heritage Cattle
              </h4>
              <p className="text-xs text-[#F5F2ED]/60 mt-1.5 leading-relaxed font-light">
                Pasture-raised, grain-finished Black Angus and Wagyu cattle raised without hormones or prophylactic antibiotics.
              </p>
            </div>
            <div className="p-5 bg-[#0A0A0A] border border-white/10">
              <h4 className="font-serif text-lg text-[#D4AF37] font-semibold">
                Hill Country Organics
              </h4>
              <p className="text-xs text-[#F5F2ED]/60 mt-1.5 leading-relaxed font-light">
                Heirloom tomatoes, wild foraged chanterelles, brassicas, and micro-herbs hand-harvested twice weekly.
              </p>
            </div>
            <div className="p-5 bg-[#0A0A0A] border border-white/10">
              <h4 className="font-serif text-lg text-[#D4AF37] font-semibold">
                Texas Coastal Fisheries
              </h4>
              <p className="text-xs text-[#F5F2ED]/60 mt-1.5 leading-relaxed font-light">
                Wild-caught snapper, black drum, and brown shrimp brought directly from day-boats in Port Aransas.
              </p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl text-[#F5F2ED] font-light">
                Ready to Experience Ember &amp; Oak?
              </h3>
              <p className="text-xs text-[#F5F2ED]/60 font-light">
                Reserve your table online or consult our events concierge.
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => onNavigate('booking')}
                className="px-6 py-3 bg-[#D4AF37] text-black text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all cursor-pointer"
              >
                RESERVE A TABLE
              </button>
              <button
                onClick={() => onNavigate('menu')}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-[#F5F2ED] border border-white/10 text-[10px] uppercase tracking-widest font-semibold transition-all cursor-pointer"
              >
                VIEW FULL MENU
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
