import React, { useState } from 'react';
import { MENU_KITS, RESTAURANT_INFO, SIGNATURE_DISHES } from '../data/restaurantData';
import { X, Download, FileText, CheckCircle2, Sparkles, Printer } from 'lucide-react';

interface MenuKitModalProps {
  initialKitId?: string;
  onClose: () => void;
}

export const MenuKitModal: React.FC<MenuKitModalProps> = ({ initialKitId = 'dinner-menu', onClose }) => {
  const [selectedKitId, setSelectedKitId] = useState<string>(initialKitId);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const currentKit = MENU_KITS.find((k) => k.id === selectedKitId) || MENU_KITS[0];

  const handleDownloadDemo = (kitTitle: string) => {
    setDownloadSuccess(kitTitle);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 4000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="menu-kit-modal"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#121212] border border-white/10 max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-[#0A0A0A]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-xl text-[#F5F2ED] font-light leading-tight">
                Ember &amp; Oak Digital Menu Kit
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#F5F2ED]/60 font-light">
                Official Culinary Collections &amp; Event Packages
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-[#F5F2ED]/60 hover:text-white rounded hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Kit Selector Tabs */}
        <div className="flex border-b border-white/10 bg-[#0A0A0A] overflow-x-auto touch-scroll-x scrollbar-none">
          {MENU_KITS.map((kit) => {
            const active = kit.id === selectedKitId;
            return (
              <button
                key={kit.id}
                onClick={() => setSelectedKitId(kit.id)}
                className={`px-4 sm:px-5 py-3 text-[10px] uppercase tracking-widest font-semibold whitespace-nowrap transition-colors flex items-center gap-2 border-b-2 shrink-0 min-h-[42px] ${
                  active
                    ? 'border-[#D4AF37] text-[#D4AF37] bg-white/5'
                    : 'border-transparent text-[#F5F2ED]/60 hover:text-[#F5F2ED]'
                }`}
              >
                <span>{kit.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body: Printable / Viewable Card */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0A0A0A] space-y-6">
          {downloadSuccess && (
            <div className="p-3 sm:p-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs flex items-center gap-3 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-light text-[11px] sm:text-xs">
                <strong className="font-semibold text-emerald-300">Demo Download:</strong> {downloadSuccess} simulation file prepared.
              </span>
            </div>
          )}

          {/* Luxury Menu Sheet Simulation */}
          <div className="bg-[#fdfbf7] text-[#1c1b18] p-5 sm:p-12 shadow-2xl border border-[#e0dacf] max-w-2xl mx-auto font-serif">
            {/* Top Crest */}
            <div className="text-center pb-6 border-b border-[#d8d0c2]">
              <span className="text-[10px] uppercase font-sans tracking-[0.35em] text-[#8c743e] block mb-1">
                AUSTIN, TEXAS • EST. 2026
              </span>
              <h2 className="text-3xl sm:text-4xl tracking-[0.18em] font-bold text-[#141416]">
                EMBER &amp; OAK
              </h2>
              <span className="text-xs italic tracking-widest text-[#666054] block mt-1">
                {currentKit.title}
              </span>
              <p className="text-[11px] font-sans text-[#7d776a] mt-2 max-w-md mx-auto font-light">
                {currentKit.description}
              </p>
            </div>

            {/* Highlights in Kit */}
            <div className="py-6 space-y-6">
              <div className="text-center">
                <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#8c743e] font-semibold">
                  FEATURED SELECTIONS
                </span>
                <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-2 mb-4" />
              </div>

              <div className="space-y-4">
                {SIGNATURE_DISHES.map((dish) => (
                  <div key={dish.id} className="flex justify-between items-baseline border-b border-dotted border-[#d6cfbe] pb-2">
                    <div className="pr-4">
                      <span className="font-semibold text-base sm:text-lg text-[#1a1916]">
                        {dish.name}
                      </span>
                      <p className="text-xs font-sans text-[#635f56] mt-0.5 leading-relaxed font-light">
                        {dish.description}
                      </p>
                    </div>
                    <span className="text-base font-bold text-[#1a1916] font-sans shrink-0">
                      {dish.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Menu Notes */}
            <div className="pt-6 border-t border-[#d8d0c2] text-center font-sans text-[11px] text-[#7a7467] space-y-1 font-light">
              <p>Executive Chef Elena Vance • Beverage Director Julian Vance</p>
              <p>123 Oak Avenue, Austin, Texas • Reservations: +1 (512) 555-0198</p>
              <p className="text-[10px] text-[#999285] italic pt-1">
                * Consumer Advisory: Consuming raw or undercooked meats, poultry, or seafood may increase foodborne illness risk.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#0A0A0A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#F5F2ED]/60 font-light">
            <span className="text-[#D4AF37] font-semibold">{currentKit.title}</span> ({currentKit.pages}) • Ready for Print &amp; Digital View
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-white/5 hover:bg-white/10 text-[#F5F2ED] text-[10px] uppercase tracking-widest font-semibold border border-white/10 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Printer className="w-4 h-4 text-[#D4AF37]" />
              <span>Print Preview</span>
            </button>
            <button
              onClick={() => handleDownloadDemo(currentKit.title)}
              className="flex-1 sm:flex-initial px-6 py-2.5 bg-[#D4AF37] hover:bg-white text-black text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF (Demo)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
