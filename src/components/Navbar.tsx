import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { Phone, Clock, MapPin, Menu as MenuIcon, X, CalendarCheck, Download, ChevronRight, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll on mobile when drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const navItems: { label: string; page: PageView; sectionId?: string }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'OUR STORY', page: 'about' },
    { label: 'MENU', page: 'menu' },
    { label: 'BANQUET & EVENTS', page: 'banquet' },
    { label: 'CATERING', page: 'catering' },
    { label: 'GALLERY', page: 'gallery' },
    { label: 'CONTACT', page: 'contact' },
  ];

  const handleNavClick = (page: PageView, sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <>
      <header
        id="main-navigation-bar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-2xl py-3.5'
            : 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/[0.08] py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Emblem & Logo */}
          <button
            id="brand-logo-button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          >
            {/* Crest Mark */}
            <div className="w-10 h-10 border border-[#D4AF37]/50 bg-black/60 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300 shrink-0">
              <span className="font-serif text-sm font-semibold tracking-wider text-[#D4AF37]">
                E✦O
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-normal tracking-[0.2em] text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors">
                  EMBER &amp; OAK
                </span>
              </div>
              <span className="text-[9px] tracking-[0.35em] uppercase text-[#F5F2ED]/60 font-light hidden sm:block">
                AUSTIN, TEXAS • HEARTH &amp; BAR
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.label}
                  id={`nav-link-${item.page}`}
                  onClick={() => handleNavClick(item.page, item.sectionId)}
                  className={`text-[11px] tracking-[0.2em] uppercase transition-all duration-200 relative py-1 focus:outline-none cursor-pointer font-medium ${
                    isActive
                      ? 'text-[#D4AF37]'
                      : 'text-[#F5F2ED]/75 hover:text-[#D4AF37]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                  )}
                </button>
              );
            })}

            {/* Menu Kit Link */}
            <button
              id="nav-link-menu-kit"
              onClick={() => handleNavClick('menu-kit')}
              className={`text-[11px] tracking-[0.2em] uppercase transition-all py-1 flex items-center gap-1.5 focus:outline-none cursor-pointer font-medium ${
                currentPage === 'menu-kit'
                  ? 'text-[#D4AF37]'
                  : 'text-[#F5F2ED]/60 hover:text-[#D4AF37]'
              }`}
              title="Download Menu PDF Kits"
            >
              <Download className="w-3 h-3 text-[#D4AF37]" />
              <span>KIT</span>
            </button>
          </nav>

          {/* Right Live Status & Impossible-To-Miss CTA */}
          <div className="hidden sm:flex items-center space-x-5">
            {/* Live Service Indicator */}
            <div className="hidden xl:flex items-center gap-2 pr-4 border-r border-white/10 text-[10px] tracking-widest uppercase text-[#F5F2ED]/60 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>OPEN TONIGHT 5–11PM</span>
            </div>

            {/* Direct Reservation Primary CTA */}
            <button
              id="header-reserve-button"
              onClick={() => handleNavClick('booking')}
              className="btn-gold-shimmer bg-[#D4AF37] hover:bg-white text-black px-6 py-2.5 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.3)] flex items-center gap-2"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>RESERVE A TABLE</span>
            </button>
          </div>

          {/* Mobile Quick Reserve & Hamburger */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              id="mobile-reserve-quick-btn"
              onClick={() => handleNavClick('booking')}
              className="btn-gold-shimmer sm:hidden bg-[#D4AF37] text-black px-3.5 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-white transition-all cursor-pointer shadow-md"
            >
              RESERVE
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="p-2 text-[#F5F2ED] hover:text-[#D4AF37] transition-colors focus:outline-none cursor-pointer border border-white/10 bg-white/5"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#D4AF37]" />
              ) : (
                <MenuIcon className="w-5 h-5 text-[#F5F2ED]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md lg:hidden transition-opacity duration-300"
        />
      )}

      {/* Mobile Drawer Content */}
      <div
        id="mobile-nav-drawer"
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-50 bg-[#0d0d0d] border-l border-[#D4AF37]/30 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl overflow-y-auto pb-safe pt-safe ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 border border-[#D4AF37]/50 flex items-center justify-center">
                <span className="font-serif text-xs text-[#D4AF37] font-semibold">E✦O</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg tracking-[0.2em] text-[#F5F2ED] font-normal">
                  EMBER &amp; OAK
                </span>
                <span className="text-[8px] tracking-[0.3em] uppercase text-[#D4AF37]">
                  AUSTIN, TEXAS
                </span>
              </div>
            </div>

            <button
              id="mobile-drawer-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#F5F2ED]/70 hover:text-[#D4AF37] cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav id="mobile-drawer-links" className="mt-6 flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                id={`mobile-nav-${item.page}`}
                onClick={() => handleNavClick(item.page, item.sectionId)}
                className={`text-left text-xs uppercase tracking-[0.2em] py-4 min-h-[44px] flex items-center justify-between transition-colors border-b border-white/[0.06] cursor-pointer ${
                  currentPage === item.page
                    ? 'text-[#D4AF37] font-semibold pl-2 border-l-2 border-l-[#D4AF37]'
                    : 'text-[#F5F2ED]/80 hover:text-[#D4AF37]'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]/50" />
              </button>
            ))}

            <button
              id="mobile-nav-menu-kit"
              onClick={() => handleNavClick('menu-kit')}
              className={`text-left text-xs uppercase tracking-[0.2em] py-4 min-h-[44px] flex items-center justify-between transition-colors border-b border-white/[0.06] cursor-pointer ${
                currentPage === 'menu-kit'
                  ? 'text-[#D4AF37] font-semibold pl-2'
                  : 'text-[#F5F2ED]/60 hover:text-[#D4AF37]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                DOWNLOAD MENU KIT
              </span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]/50" />
            </button>
          </nav>
        </div>

        {/* Mobile footer concierge info */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <button
            id="mobile-drawer-reserve-cta"
            onClick={() => handleNavClick('booking')}
            className="btn-gold-shimmer w-full min-h-[44px] py-3.5 bg-[#D4AF37] text-black text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all text-center block shadow-xl cursor-pointer"
          >
            RESERVE A TABLE
          </button>

          <div className="text-[11px] text-[#F5F2ED]/70 space-y-2 pt-1 font-light">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Dinner: 5:00 PM – 11:00 PM Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>123 Oak Avenue, Downtown Austin</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#D4AF37] underline decoration-[#D4AF37]/50 py-1">
                {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

