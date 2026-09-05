import React, { useState } from 'react';
import { PageView, MenuItem } from '../types';
import { MENU_ITEMS, SIGNATURE_DISHES } from '../data/restaurantData';
import { Download, Search, Wine, CalendarCheck, Sparkles, Filter } from 'lucide-react';

interface MenuViewProps {
  onNavigate: (page: PageView) => void;
  onOpenMenuKit: () => void;
}

export const MenuView: React.FC<MenuViewProps> = ({ onNavigate, onOpenMenuKit }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'FULL COLLECTION' },
    { id: 'starters', label: 'STARTERS' },
    { id: 'soups-salads', label: 'SOUPS & SALADS' },
    { id: 'main-course', label: 'MAIN COURSE' },
    { id: 'pasta', label: 'PASTA' },
    { id: 'seafood', label: 'SEAFOOD' },
    { id: 'desserts', label: 'DESSERTS' },
    { id: 'cocktails', label: 'COCKTAILS' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category match
    if (activeCategory !== 'all' && item.category !== activeCategory) {
      return false;
    }
    // Dietary match
    if (dietaryFilter === 'vegetarian') {
      if (!item.tags?.some((t) => t.toLowerCase().includes('vegetarian'))) return false;
    } else if (dietaryFilter === 'gluten-free') {
      if (!item.tags?.some((t) => t.toLowerCase().includes('gluten'))) return false;
    } else if (dietaryFilter === 'signature') {
      if (!item.isSpecial && !item.tags?.some((t) => t.toLowerCase().includes('signature'))) return false;
    }
    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      if (!matchName && !matchDesc) return false;
    }
    return true;
  });

  return (
    <div id="menu-view-container" className="pt-24 pb-20 bg-[#0A0A0A]">
      {/* Photographic Hero Banner */}
      <section data-hero="true" className="hero-banner relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center py-24 sm:py-32 overflow-hidden border-b border-white/10">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=2000&q=85"
            alt="Ember & Oak Artisanal Culinary Feast and Wine"
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
            <Wine className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#F5F2ED]/80 font-normal">
              EMBER &amp; OAK CULINARY PROGRAM
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#F5F2ED] font-light">
            THE COMPLETE MENU
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F5F2ED]/75 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            Seasonal wood-fired hearth selections, bronze-die handmade pastas, wild coastal seafood, and rare botanical spirits.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenMenuKit}
              className="px-6 py-3.5 bg-[#D4AF37] text-black text-[10px] uppercase tracking-widest font-bold hover:bg-white inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#D4AF37]/10 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD MENU KITS (PDF)</span>
            </button>
            <button
              onClick={() => onNavigate('booking')}
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-[#F5F2ED] border border-white/10 text-[10px] uppercase tracking-widest font-semibold inline-flex items-center gap-2 cursor-pointer transition-all"
            >
              <CalendarCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>RESERVE A TABLE</span>
            </button>
          </div>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-14 sm:top-20 z-30 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3 sm:py-4 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* Category Tabs with edge-to-edge mobile swipe */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 touch-scroll-x scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 min-h-[38px] text-[10px] tracking-widest uppercase font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0 flex items-center justify-center ${
                    active
                      ? 'bg-[#D4AF37] text-black font-bold'
                      : 'bg-white/5 text-[#F5F2ED]/70 hover:text-[#D4AF37] hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Right Controls: Dietary + Search */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Dietary toggle */}
            <select
              value={dietaryFilter}
              onChange={(e) => setDietaryFilter(e.target.value)}
              className="bg-[#121212] border border-white/10 text-xs text-[#F5F2ED] py-2 px-3 focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="all">All Dietary Preferences</option>
              <option value="signature">Chef Signatures Only</option>
              <option value="vegetarian">Vegetarian Selections</option>
              <option value="gluten-free">Gluten-Free Friendly</option>
            </select>

            {/* Search Input */}
            <div className="relative flex-1 md:w-48">
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121212] border border-white/10 text-xs text-[#F5F2ED] pl-8 pr-3 py-2 placeholder-[#F5F2ED]/30 focus:outline-none focus:border-[#D4AF37]"
              />
              <Search className="w-3.5 h-3.5 text-[#D4AF37] absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

        </div>
      </section>

      {/* Menu Dishes List */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#121212] border border-white/10 max-w-md mx-auto p-8">
            <Sparkles className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#F5F2ED]">No Dishes Found</h3>
            <p className="text-xs text-[#F5F2ED]/60 mt-2 mb-4">
              We couldn't find items matching your search or dietary filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-[#D4AF37] text-black text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-5 p-5 bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 transition-all group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover shrink-0 border border-white/10 group-hover:scale-105 transition-transform duration-300"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3 border-b border-dotted border-white/15 pb-1.5">
                    <h3 className="font-serif text-xl text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors truncate font-semibold">
                      {item.name}
                    </h3>
                    <span className="font-serif text-xl font-bold text-[#D4AF37] shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#F5F2ED]/60 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    {item.tags?.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-white/5 text-[#D4AF37] text-[10px] tracking-wider uppercase border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                    {item.pairing && (
                      <span className="text-[11px] text-[#D4AF37]/80 italic flex items-center gap-1">
                        <Wine className="w-3 h-3 text-[#D4AF37]" />
                        <span>Pair with {item.pairing}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Reservation Callout */}
        <div className="mt-20 p-8 sm:p-12 bg-[#121212] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
              PLAN YOUR VISIT
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED] mt-1 font-light">
              Ready to Taste the Craftsmanship?
            </h3>
            <p className="text-xs text-[#F5F2ED]/60 mt-1 font-light">
              Reservations are strongly recommended for weekend dinners and parties of four or more.
            </p>
          </div>

          <button
            onClick={() => onNavigate('booking')}
            className="px-8 py-4 bg-[#D4AF37] hover:bg-white text-black text-[10px] uppercase tracking-widest font-bold whitespace-nowrap shadow-xl transition-all cursor-pointer"
          >
            RESERVE A TABLE NOW
          </button>
        </div>
      </section>
    </div>
  );
};
