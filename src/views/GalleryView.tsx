import React, { useState } from 'react';
import { PageView, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { Eye, Filter, Camera } from 'lucide-react';

interface GalleryViewProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onNavigate: (page: PageView) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenLightbox, onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'ALL VISUALS' },
    { id: 'food', label: 'FOOD & HEARTH' },
    { id: 'cocktails', label: 'COCKTAILS & SPIRITS' },
    { id: 'interior', label: 'ATMOSPHERE & ROOMS' },
    { id: 'chef', label: 'CULINARY TEAM' },
    { id: 'private-dining', label: 'PRIVATE DINING' },
    { id: 'events', label: 'BANQUETS & CELEBRATIONS' },
  ];

  const filteredGallery = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div id="gallery-view-container" className="pt-24 pb-20 bg-[#0A0A0A]">
      {/* Photographic Hero */}
      <section data-hero="true" className="hero-banner relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center py-24 sm:py-32 overflow-hidden border-b border-white/10">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=2000&q=85"
            alt="Artisanal Cocktails and Visual Chronicle of Ember & Oak"
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
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#F5F2ED]/80 font-normal">
              VISUAL CHRONICLE
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#F5F2ED] font-light">
            THE GALLERY
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F5F2ED]/75 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            Step inside Ember &amp; Oak: open flames, handcrafted cocktails, hand-rolled pastas, and warm gatherings under the Texas stars.
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 sticky top-20 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-wrap gap-2">
          {filters.map((f) => {
            const active = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest font-semibold transition-colors cursor-pointer ${
                  active
                    ? 'bg-[#D4AF37] text-black font-bold'
                    : 'bg-white/5 text-[#F5F2ED]/60 hover:text-[#D4AF37] hover:bg-white/10 border border-white/10'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative overflow-hidden bg-[#121212] border border-white/10 cursor-pointer h-80 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-xl text-[#F5F2ED] font-semibold mt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#F5F2ED]/70 mt-1 line-clamp-2 font-light">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#D4AF37]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 text-center p-12 bg-[#121212] border border-white/10 max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl text-[#F5F2ED] font-light">
            Experience the Atmosphere in Person
          </h3>
          <p className="text-xs text-[#F5F2ED]/60 mt-2 mb-6 max-w-md mx-auto font-light">
            Join us for lunch, dinner, or late-night cocktails at 123 Oak Avenue in Downtown Austin.
          </p>
          <button
            onClick={() => onNavigate('booking')}
            className="px-8 py-3.5 bg-[#D4AF37] hover:bg-white text-black text-[10px] uppercase tracking-widest font-bold shadow-xl cursor-pointer transition-all"
          >
            RESERVE A TABLE
          </button>
        </div>
      </section>
    </div>
  );
};
