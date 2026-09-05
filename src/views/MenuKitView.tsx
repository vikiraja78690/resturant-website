import React, { useState } from 'react';
import { PageView } from '../types';
import { MENU_KITS, RESTAURANT_INFO } from '../data/restaurantData';
import { Download, FileText, CheckCircle2, Eye, Printer, Sparkles, ArrowRight } from 'lucide-react';

interface MenuKitViewProps {
  onOpenKitModal: (kitId: string) => void;
  onNavigate: (page: PageView) => void;
}

export const MenuKitView: React.FC<MenuKitViewProps> = ({ onOpenKitModal, onNavigate }) => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownloadSimulation = (title: string) => {
    setDownloadNotice(title);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 4500);
  };

  return (
    <div id="menu-kit-view-container" className="pt-24 pb-20 bg-[#0A0A0A]">
      {/* Photographic Hero */}
      <section data-hero="true" className="hero-banner relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center py-24 sm:py-32 overflow-hidden border-b border-white/10">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=85"
            alt="Wine Cellar and Digital Press Kits at Ember & Oak"
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
            <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#F5F2ED]/80 font-normal">
              DIGITAL PRESS &amp; EVENT PACKS
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#F5F2ED] font-light">
            DOWNLOAD OUR MENU
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F5F2ED]/75 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            Access our complete digital culinary collections, midday lunch offerings, sommelier wine folios, and private event packages.
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
        </div>
      </section>

      {/* Main Kits Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {downloadNotice && (
          <div className="mb-10 p-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs flex items-center justify-between animate-fade-in max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="font-light">
                <strong className="font-semibold text-emerald-300">Demo Download Triggered:</strong> {downloadNotice} PDF simulation prepared. (Portfolio preview: demonstrates client asset delivery workflow).
              </span>
            </div>
            <button
              onClick={() => setDownloadNotice(null)}
              className="text-emerald-300 hover:text-white text-xs underline cursor-pointer ml-3"
            >
              Dismiss
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MENU_KITS.map((kit) => (
            <div
              key={kit.id}
              className="bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 p-8 flex flex-col justify-between transition-all shadow-xl group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-[#D4AF37] bg-white/5 px-3 py-1 border border-white/10">
                    {kit.pages}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
                  {kit.updated}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2ED] font-light mt-1">
                  {kit.title}
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium mt-1">
                  {kit.subtitle}
                </p>
                <p className="text-xs text-[#F5F2ED]/60 mt-3 leading-relaxed font-light">
                  {kit.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#F5F2ED]/40 block font-semibold">
                    Sample Highlight Items:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-[#F5F2ED]/70 font-light">
                    {kit.sampleItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenKitModal(kit.id)}
                  className="w-full sm:w-1/2 py-3 bg-white/5 hover:bg-white/10 text-[#F5F2ED] text-[10px] uppercase tracking-widest font-semibold border border-white/10 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#D4AF37]" />
                  <span>Preview PDF</span>
                </button>

                <button
                  onClick={() => handleDownloadSimulation(kit.title)}
                  className="w-full sm:w-1/2 py-3 bg-[#D4AF37] hover:bg-white text-black text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download (Demo)</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note block */}
        <div className="mt-16 p-8 bg-[#121212] border border-white/10 text-center max-w-3xl mx-auto">
          <Sparkles className="w-6 h-6 text-[#D4AF37] mx-auto mb-2" />
          <h4 className="font-serif text-xl text-[#F5F2ED] font-light">
            Custom Banquet Menus &amp; Wine Cellar Inquiries
          </h4>
          <p className="text-xs text-[#F5F2ED]/60 mt-1 mb-4 font-light">
            Looking for bespoke 5-course paired tasting menus for weddings or corporate galas?
          </p>
          <button
            onClick={() => onNavigate('banquet')}
            className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] hover:text-white inline-flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span>CONSULT PRIVATE DINING TEAM</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
