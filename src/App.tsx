import React, { useState, useEffect } from 'react';
import { PageView, GalleryItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { MenuKitModal } from './components/MenuKitModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { MenuView } from './views/MenuView';
import { BanquetView } from './views/BanquetView';
import { CateringView } from './views/CateringView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';
import { BookingView } from './views/BookingView';
import { MenuKitView } from './views/MenuKitView';
import { GALLERY_ITEMS } from './data/restaurantData';
import { ArrowUp, CalendarCheck, Phone, Utensils, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [menuKitModalOpen, setMenuKitModalOpen] = useState(false);
  const [activeMenuKitId, setActiveMenuKitId] = useState('dinner-menu');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageView[] = [
        'home', 'about', 'menu', 'banquet', 'catering', 
        'gallery', 'contact', 'booking', 'menu-kit'
      ];
      if (validPages.includes(hash as PageView)) {
        setCurrentPage(hash as PageView);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Monitor scroll for "Back to top"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageView, sectionId?: string) => {
    if (page === currentPage && sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleOpenLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  const handleCloseLightbox = () => {
    setLightboxItem(null);
  };

  const handleOpenMenuKit = (kitId: string = 'dinner-menu') => {
    setActiveMenuKitId(kitId);
    setMenuKitModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="ember-oak-app"
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#0c0c0e] text-[#e8e4dc] flex flex-col font-sans selection:bg-[#c5a059]/30 selection:text-[#f7f4ee] transition-colors duration-300 pb-16 lg:pb-0"
    >
      {/* Persistent Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Router */}
      <main id="main-content-region" className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
        {currentPage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}
        {currentPage === 'menu' && (
          <MenuView
            onNavigate={handleNavigate}
            onOpenMenuKit={() => handleOpenMenuKit('dinner-menu')}
          />
        )}
        {currentPage === 'banquet' && (
          <BanquetView onNavigate={handleNavigate} />
        )}
        {currentPage === 'catering' && (
          <CateringView onNavigate={handleNavigate} />
        )}
        {currentPage === 'gallery' && (
          <GalleryView
            onNavigate={handleNavigate}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
        {currentPage === 'contact' && (
          <ContactView onNavigate={handleNavigate} />
        )}
        {currentPage === 'booking' && (
          <BookingView onNavigate={handleNavigate} />
        )}
        {currentPage === 'menu-kit' && (
          <MenuKitView
            onNavigate={handleNavigate}
            onOpenKitModal={handleOpenMenuKit}
          />
        )}
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        item={lightboxItem}
        items={GALLERY_ITEMS}
        onClose={handleCloseLightbox}
        onSelect={setLightboxItem}
      />

      {/* Printable Menu Kit Modal */}
      {menuKitModalOpen && (
        <MenuKitModal
          initialKitId={activeMenuKitId}
          onClose={() => setMenuKitModalOpen(false)}
        />
      )}

      {/* Floating Scroll-To-Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-30">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 bg-[#181820]/90 backdrop-blur-md hover:bg-[#282734] text-[#D4AF37] border border-[#33313e] shadow-2xl rounded-full transition-transform hover:scale-110 active:scale-95 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Mobile Dedicated Bottom Concierge Bar (Visible on mobile/tablets < 1024px) */}
      <nav
        id="mobile-bottom-concierge-bar"
        aria-label="Mobile Quick Actions"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-[#D4AF37]/25 px-2 py-2 pb-safe flex items-center justify-around shadow-[0_-8px_25px_rgba(0,0,0,0.8)]"
      >
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="flex flex-col items-center justify-center px-3 py-1.5 min-h-[44px] text-[#F5F2ED]/75 active:text-[#D4AF37] hover:text-[#D4AF37] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[9px] tracking-wider uppercase font-medium mt-1">Call</span>
        </a>

        <button
          onClick={() => handleNavigate('menu')}
          className={`flex flex-col items-center justify-center px-3 py-1.5 min-h-[44px] transition-colors ${
            currentPage === 'menu' ? 'text-[#D4AF37]' : 'text-[#F5F2ED]/75 hover:text-[#D4AF37]'
          }`}
        >
          <Utensils className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[9px] tracking-wider uppercase font-medium mt-1">Menu</span>
        </button>

        <button
          onClick={() => handleNavigate('booking')}
          className="btn-gold-shimmer px-4 py-2 bg-[#D4AF37] active:bg-white text-black text-[10px] uppercase tracking-widest font-bold shadow-lg flex items-center gap-1.5 rounded-none min-h-[40px]"
        >
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Reserve</span>
        </button>

        <button
          onClick={() => handleNavigate('contact')}
          className={`flex flex-col items-center justify-center px-3 py-1.5 min-h-[44px] transition-colors ${
            currentPage === 'contact' ? 'text-[#D4AF37]' : 'text-[#F5F2ED]/75 hover:text-[#D4AF37]'
          }`}
        >
          <MapPin className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[9px] tracking-wider uppercase font-medium mt-1">Visit</span>
        </button>
      </nav>
    </div>
  );
}
