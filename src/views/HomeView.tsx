import React, { useState } from 'react';
import { PageView, MenuItem, GalleryItem, ReservationData } from '../types';
import { 
  RESTAURANT_INFO, 
  SIGNATURE_DISHES, 
  MENU_ITEMS, 
  GALLERY_ITEMS, 
  DEMO_TESTIMONIALS, 
  BANQUET_SPACES, 
  CATERING_SERVICES 
} from '../data/restaurantData';
import { 
  Clock, 
  MapPin, 
  Phone, 
  CalendarCheck, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  Utensils, 
  Sparkles, 
  Wine, 
  Heart, 
  CheckCircle2, 
  Users, 
  Calendar, 
  Compass, 
  Share2, 
  Eye, 
  Award,
  Flame
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageView, sectionId?: string) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenLightbox }) => {
  // Menu Category Filter Tab State
  const [selectedCategory, setSelectedCategory] = useState<string>('starters');

  // Testimonial Carousel State
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Reservation Form State
  const [reservationForm, setReservationForm] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '07:00 PM',
    guests: 2,
    seatingPreference: 'Main Dining Room',
    specialRequest: '',
  });

  const [reservationSuccess, setReservationSuccess] = useState<ReservationData | null>(null);
  const [reservationError, setReservationError] = useState<string | null>(null);

  const menuCategories = [
    { id: 'starters', label: 'STARTERS' },
    { id: 'soups-salads', label: 'SOUPS & SALADS' },
    { id: 'main-course', label: 'MAIN COURSE' },
    { id: 'pasta', label: 'PASTA' },
    { id: 'seafood', label: 'SEAFOOD' },
    { id: 'desserts', label: 'DESSERTS' },
    { id: 'cocktails', label: 'COCKTAILS' },
  ];

  const filteredMenuItems = MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const availableTimeSlots = [
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', 
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM'
  ];

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reservationForm.name.trim() || !reservationForm.email.trim() || !reservationForm.phone.trim()) {
      setReservationError('Please fill in all contact details to request your table.');
      return;
    }
    setReservationError(null);
    setReservationSuccess({ ...reservationForm });
  };

  const handleResetReservation = () => {
    setReservationSuccess(null);
    setReservationForm({
      name: '',
      email: '',
      phone: '',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      time: '07:00 PM',
      guests: 2,
      seatingPreference: 'Main Dining Room',
      specialRequest: '',
    });
  };

  const handleHeroQuickFindTable = () => {
    const bookingEl = document.getElementById('booking-section');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
      // highlight booking form
      const nameInput = document.querySelector('#booking-section input[type="text"]') as HTMLInputElement | null;
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 600);
      }
    } else {
      onNavigate('booking');
    }
  };

  return (
    <div id="home-view-container" className="w-full overflow-hidden bg-[#0A0A0A] text-[#F5F2ED]">
      {/* =========================================================================
          1. CINEMATIC LUXURY HERO SECTION
          ========================================================================= */}
      <section 
        id="hero-section" 
        data-hero="true"
        className="hero-banner relative min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pb-16 bg-[#070708] overflow-hidden"
      >
        {/* Cinematic Background with Slow Breathing Motion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2200&q=90"
            alt="Ember & Oak Live Fire Hearth Cooking"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center animate-cinematic-zoom"
          />
          {/* Multi-layered dramatic vignette scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-transparent to-[#0A0A0A]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0A0A0A_85%)]" />
        </div>

        {/* Ambient Golden Ember Pulsing Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none animate-ember-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none animate-ember-glow" />

        {/* Center Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex-1 flex flex-col items-center justify-center my-auto">
          {/* Subtle Editorial Kicker */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#D4AF37]/40 bg-black/60 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              LIVE POST-OAK HEARTH &bull; DOWNTOWN AUSTIN
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-3xl min-[360px]:text-4xl min-[480px]:text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.08em] min-[360px]:tracking-[0.12em] sm:tracking-[0.18em] font-light text-[#F5F2ED] uppercase leading-[0.95] drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] break-words">
            EMBER <span className="text-[#D4AF37] font-serif font-normal">&amp;</span> OAK
          </h1>

          {/* Tagline */}
          <div className="flex items-center gap-3 sm:gap-4 my-4 sm:my-6">
            <span className="h-[1px] w-6 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <p className="font-serif text-xs min-[380px]:text-sm sm:text-lg md:text-xl text-[#D4AF37] tracking-[0.15em] sm:tracking-[0.3em] uppercase italic font-light">
              Modern American Gastronomy &bull; Wood Fire &bull; Rare Spirits
            </p>
            <span className="h-[1px] w-6 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* Editorial lead paragraph */}
          <p className="text-xs min-[380px]:text-sm sm:text-base md:text-lg text-[#F5F2ED]/75 max-w-2xl font-light leading-relaxed mb-6 sm:mb-8 font-sans px-2">
            "Where ancient Texas fire craft converges with Michelin-caliber discipline. Dry-aged heritage cuts, bronze-die handmade pastas, and a 180-bottle sommelier cellar."
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center mb-8 sm:mb-10">
            <button
              id="hero-cta-reserve"
              onClick={() => onNavigate('booking')}
              className="btn-gold-shimmer w-full sm:w-auto min-h-[44px] px-8 sm:px-9 py-3.5 sm:py-4 bg-[#D4AF37] text-black font-sans text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-white transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>RESERVE A TABLE</span>
            </button>

            <button
              id="hero-cta-menu"
              onClick={() => {
                const el = document.getElementById('menu-preview-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onNavigate('menu');
                }
              }}
              className="w-full sm:w-auto min-h-[44px] px-8 sm:px-9 py-3.5 sm:py-4 bg-black/50 hover:bg-white/10 text-[#F5F2ED] hover:text-[#D4AF37] border border-white/25 hover:border-[#D4AF37] font-sans text-[11px] uppercase tracking-[0.25em] font-medium transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Utensils className="w-4 h-4 text-[#D4AF37]" />
              <span>EXPLORE MENU</span>
            </button>
          </div>

          {/* Floating Hero Quick VIP Reservation Pod */}
          <div className="w-full max-w-4xl bg-[#111114]/95 border border-[#D4AF37]/35 p-3 sm:p-4 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 sm:gap-3 items-center">
              {/* Date */}
              <div className="text-left px-3 py-2 bg-black/50 border border-white/10 min-h-[46px] flex flex-col justify-center">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold mb-0.5">
                  DATE
                </span>
                <input
                  type="date"
                  value={reservationForm.date}
                  onChange={(e) => setReservationForm({ ...reservationForm, date: e.target.value })}
                  className="w-full bg-transparent text-sm sm:text-xs text-[#F5F2ED] focus:outline-none cursor-pointer"
                />
              </div>

              {/* Time */}
              <div className="text-left px-3 py-2 bg-black/50 border border-white/10 min-h-[46px] flex flex-col justify-center">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold mb-0.5">
                  TIME
                </span>
                <select
                  value={reservationForm.time}
                  onChange={(e) => setReservationForm({ ...reservationForm, time: e.target.value })}
                  className="w-full bg-transparent text-sm sm:text-xs text-[#F5F2ED] focus:outline-none cursor-pointer"
                >
                  {availableTimeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-[#121212]">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Guests */}
              <div className="text-left px-3 py-2 bg-black/50 border border-white/10 min-h-[46px] flex flex-col justify-center">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold mb-0.5">
                  PARTY SIZE
                </span>
                <select
                  value={reservationForm.guests}
                  onChange={(e) => setReservationForm({ ...reservationForm, guests: parseInt(e.target.value, 10) })}
                  className="w-full bg-transparent text-sm sm:text-xs text-[#F5F2ED] focus:outline-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                    <option key={num} value={num} className="bg-[#121212]">
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Find Table Action */}
              <button
                type="button"
                onClick={handleHeroQuickFindTable}
                className="btn-gold-shimmer w-full h-full min-h-[46px] bg-[#D4AF37] hover:bg-white text-black text-[11px] font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
              >
                <span>FIND TABLE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Accolades Ribbon at Bottom of Hero */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full pt-6 sm:pt-8 mt-6 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between items-center gap-3 sm:gap-6 text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.25em] uppercase text-[#F5F2ED]/60 font-light text-center">
            <span className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-[#D4AF37]">
              <Award className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>MICHELIN 2025</span>
            </span>
            <span className="hidden md:inline text-white/20">&bull;</span>
            <span className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
              <Wine className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>WINE SPECTATOR</span>
            </span>
            <span className="hidden md:inline text-white/20">&bull;</span>
            <span className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>JAMES BEARD NOMINEE</span>
            </span>
            <span className="hidden md:inline text-white/20">&bull;</span>
            <span className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
              <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37] shrink-0" />
              <span>EATER AUSTIN 38</span>
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. QUICK INFORMATION BAR
          ========================================================================= */}
      <section 
        id="quick-info-bar"
        className="bg-[#0f0f13] border-y border-[#D4AF37]/25 relative z-20 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
            {/* Visiting Hours */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:px-4 group">
              <div className="w-12 h-12 rounded-none bg-black/60 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:border-[#D4AF37] transition-colors">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
                  VISITING HOURS
                </span>
                <p className="text-xs font-semibold text-[#F5F2ED] mt-0.5">
                  Mon – Sun: 11:00 AM – 11:00 PM
                </p>
                <span className="text-[11px] text-[#F5F2ED]/60 font-light">Dinner Service Begins at 5:00 PM</span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:px-4 group">
              <div className="w-12 h-12 rounded-none bg-black/60 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:border-[#D4AF37] transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
                  AUSTIN, TEXAS
                </span>
                <p className="text-xs font-semibold text-[#F5F2ED] mt-0.5">
                  123 Oak Avenue
                </p>
                <span className="text-[11px] text-[#F5F2ED]/60 font-light">Complimentary Valet Wed – Sun</span>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:px-4 group">
              <div className="w-12 h-12 rounded-none bg-black/60 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:border-[#D4AF37] transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
                  CONCIERGE &amp; EVENTS
                </span>
                <a 
                  href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-xs font-semibold text-[#F5F2ED] hover:text-[#D4AF37] transition-colors mt-0.5 block"
                >
                  +1 (512) 555-0198
                </a>
                <span className="text-[11px] text-[#F5F2ED]/60 font-light">Direct Host Stand Inquiries</span>
              </div>
            </div>

            {/* Book A Table */}
            <div className="flex items-center justify-between pt-4 sm:pt-0 lg:px-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-none bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shrink-0">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
                    BOOK A TABLE
                  </span>
                  <p className="text-xs font-semibold text-[#F5F2ED] mt-0.5">
                    Real-Time Confirmation
                  </p>
                  <span className="text-[11px] text-[#F5F2ED]/60 font-light">Parties up to 16 Online</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('booking')}
                aria-label="Book reservation now"
                className="p-3 bg-[#D4AF37] text-black hover:bg-white transition-all shrink-0 cursor-pointer shadow-md"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR STORY SECTION (Editorial Asymmetric Split Layout)
          ========================================================================= */}
      <section id="our-story-section" className="py-24 sm:py-32 bg-[#070708] relative overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-10 h-[1px] bg-[#D4AF37]" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
                  OUR PHILOSOPHY &amp; HERITAGE
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F2ED] font-light leading-[1.08]">
                AN OBSESSION WITH<br />
                <span className="italic font-serif text-[#D4AF37] font-normal">POST-OAK, FLAME &amp; HARVEST</span>
              </h2>

              <p className="text-sm sm:text-base text-[#F5F2ED]/80 leading-relaxed font-light">
                Founded in the historic heart of Austin, Ember &amp; Oak was born from a singular culinary reverence: the elemental alchemy of Texas live post-oak embers paired with the precision of contemporary American gastronomy.
              </p>

              <p className="text-sm sm:text-base text-[#F5F2ED]/65 leading-relaxed font-light">
                Every evening at 5:00 PM, our custom 12-foot open hearth ignites. Dry-aged cuts from Hill Country family ranches, line-caught Gulf waters, and heirloom vegetables harvested at dawn are transformed into poetic harmonies of wood smoke, acidity, and immaculate texture.
              </p>

              {/* Chef Signature Block */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-6">
                <div>
                  <h4 className="font-serif text-base text-[#F5F2ED] font-medium tracking-wide">
                    Elena Vance &amp; Marcus Reed
                  </h4>
                  <p className="text-[11px] uppercase tracking-widest text-[#D4AF37] mt-0.5">
                    Chef-Patrons &amp; Culinary Directors
                  </p>
                </div>
                <div className="font-serif italic text-2xl text-[#D4AF37]/80 tracking-wider">
                  Elena Vance
                </div>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <button
                  id="story-learn-more-btn"
                  onClick={() => onNavigate('about')}
                  className="btn-gold-shimmer px-8 py-3.5 bg-[#D4AF37] text-black font-sans text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>OUR CULINARY ORIGINS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Asymmetric 3-Image Layout + Feature Card */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
                {/* Image 1: Steak / Fire Plating */}
                <div className="relative overflow-hidden shadow-2xl border border-white/15 group">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=85"
                    alt="Wood-Fired Ribeye Steak"
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-black/70 px-2 py-0.5 border border-[#D4AF37]/30">
                    700° LIVE OAK HEARTH
                  </span>
                </div>

                {/* Image 2: Chef in Action */}
                <div className="relative overflow-hidden shadow-2xl border border-white/15 translate-y-6 sm:translate-y-10 group">
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=85"
                    alt="Executive Chef Plating with Passion"
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-black/70 px-2 py-0.5 border border-[#D4AF37]/30">
                    MICHELIN-LEVEL CRAFT
                  </span>
                </div>

                {/* Image 3: Cocktail / Ambience (spanning full width beneath) */}
                <div className="col-span-2 relative overflow-hidden shadow-2xl border border-white/15 mt-4 sm:mt-8 group">
                  <img
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1100&q=85"
                    alt="Smoked Cocktail at the Marble Bar"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-black/70 px-2 py-0.5 border border-[#D4AF37]/30">
                    BOTANICAL &amp; RARE AGAVE COCKTAILS
                  </span>
                </div>
              </div>

              {/* Overlaid Dark Feature Card: FRESH INGREDIENTS */}
              <div 
                id="fresh-ingredients-card"
                className="relative sm:absolute mt-6 sm:mt-0 sm:bottom-4 left-0 sm:-left-8 max-w-full sm:max-w-sm bg-[#111115]/95 border border-[#D4AF37]/40 p-5 sm:p-6 shadow-2xl backdrop-blur-md z-20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
                    HILL COUNTRY TERROIR
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#F5F2ED]/85 leading-relaxed mb-3 font-light">
                  "Every grain, cut, and herb is sourced directly from sustainable Texas ranches and local organic growers within a 150-mile radius."
                </p>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37] hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>DISCOVER OUR PROVENANCE</span>
                  <span>&rarr;</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SIGNATURE DISHES (Chef's Specials - Premium Editorial Menu Cards)
          ========================================================================= */}
      <section id="signature-dishes-section" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-[#D4AF37]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              EXECUTIVE CHEF'S REPERTOIRE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F2ED] font-light">
              SIGNATURE DISHES
            </h2>
            <p className="text-sm sm:text-base text-[#F5F2ED]/65 max-w-xl mx-auto font-light">
              Celebrated highlights from our open hearth, pairing rare Texas ranch harvests with contemporary sommelier selections.
            </p>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          {/* 4 Signature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {SIGNATURE_DISHES.map((dish) => (
              <div
                key={dish.id}
                id={`signature-dish-${dish.id}`}
                className="group bg-[#111114] border border-white/10 hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-between overflow-hidden hover:-translate-y-2 shadow-2xl hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)]"
              >
                {/* Image Container with zoom hover */}
                <div className="relative h-64 overflow-hidden bg-[#070708]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent opacity-90" />
                  
                  {/* Price Tag badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-black/90 backdrop-blur-md border border-[#D4AF37]/60 text-[#D4AF37] font-serif font-bold text-base">
                    {dish.price}
                  </div>

                  {dish.tags && dish.tags[0] && (
                    <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-[#D4AF37]/25 backdrop-blur-md border border-[#D4AF37]/50 text-[#F5F2ED] text-[9px] tracking-widest uppercase font-semibold">
                      {dish.tags[0]}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors font-semibold leading-tight">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-[#F5F2ED]/65 leading-relaxed mt-2.5 font-light">
                      {dish.description}
                    </p>
                  </div>

                  {dish.pairing && (
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#D4AF37] bg-white/[0.02] p-2">
                      <Wine className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate italic font-light">{dish.pairing}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View Full Menu CTA Button */}
          <div className="mt-14 text-center">
            <button
              id="view-full-menu-btn"
              onClick={() => onNavigate('menu')}
              className="px-9 py-4 bg-transparent hover:bg-[#D4AF37] text-[#F5F2ED] hover:text-black border border-[#D4AF37] font-sans text-[10px] uppercase tracking-widest font-bold transition-all duration-300 inline-flex items-center gap-3 cursor-pointer shadow-lg hover:shadow-[#D4AF37]/20"
            >
              <span>EXPLORE COMPLETE A LA CARTE MENU</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. DINING EXPERIENCE ("More Than A Meal" - Dark Luxury Refinement)
          ========================================================================= */}
      <section 
        id="dining-experience-section" 
        className="py-24 sm:py-32 bg-[#0c0c0f] text-[#F5F2ED] relative overflow-hidden border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Big Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative shadow-2xl border border-white/15 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Fine Dining Experience at Ember & Oak"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Decorative Accent Card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#121217]/95 text-[#F5F2ED] p-6 shadow-2xl border border-[#D4AF37]/40 max-w-xs backdrop-blur-md">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-1">
                  AUSTIN CRITICS' RECOGNITION
                </span>
                <p className="text-xs text-[#F5F2ED]/75 font-light leading-relaxed">
                  Voted Top New American Dining Experience &amp; Best Beverage Program in Central Texas.
                </p>
              </div>
            </div>

            {/* Right Text & 3 Pillars */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#D4AF37]" />
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] font-semibold">
                    THE SENSORY ARCHITECTURE
                  </span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F2ED] leading-[1.08]">
                  MORE THAN A MEAL.<br />
                  <span className="italic font-serif text-[#D4AF37]">AN IMMERSIVE RITUAL.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#F5F2ED]/70 leading-relaxed font-light">
                  Fine dining at Ember &amp; Oak is designed without sterile pretense. Every table is enveloped by warm walnut acoustics, curated vinyl warmth, and the generous spirit of Southern hospitality.
                </p>
              </div>

              {/* 3 Core Pillars */}
              <div className="space-y-4 pt-2">
                {/* Feature 1 */}
                <div className="flex items-start gap-4 p-5 bg-[#121216] border border-white/10 hover:border-[#D4AF37]/50 transition-colors">
                  <div className="w-10 h-10 rounded-none bg-black/60 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#F5F2ED] tracking-wide">
                      I. HEARTH &amp; LIVE FLAME
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F5F2ED]/65 mt-1 font-light leading-relaxed">
                      Every dish touches real wood smoke, balancing caramelized crusts with tender rare centers.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4 p-5 bg-[#121216] border border-white/10 hover:border-[#D4AF37]/50 transition-colors">
                  <div className="w-10 h-10 rounded-none bg-black/60 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#F5F2ED] tracking-wide">
                      II. TERROIR-DRIVEN PURVEYORS
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F5F2ED]/65 mt-1 font-light leading-relaxed">
                      Hand-selected heirloom ingredients from trusted Texas ranchers, Gulf fishmongers, and artisan dairies.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4 p-5 bg-[#121216] border border-white/10 hover:border-[#D4AF37]/50 transition-colors">
                  <div className="w-10 h-10 rounded-none bg-black/60 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#F5F2ED] tracking-wide">
                      III. DISCREET, TAILORED HOSPITALITY
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F5F2ED]/65 mt-1 font-light leading-relaxed">
                      Intuitive service anticipating every desire, from bespoke wine decanting to personalized tasting courses.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('booking')}
                  className="btn-gold-shimmer px-8 py-3.5 bg-[#D4AF37] text-black text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>RESERVE YOUR TABLE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. BANQUET FACILITY (Private Events Made Memorable)
          ========================================================================= */}
      <section id="banquet-section" className="py-24 sm:py-32 bg-[#0A0A0A] relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold block">
                EXCLUSIVE SPACES
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F2ED] font-light leading-[1.08]">
                PRIVATE EVENTS<br />
                <span className="italic font-serif text-[#D4AF37]">MADE MEMORABLE</span>
              </h2>

              <p className="text-sm sm:text-base text-[#F5F2ED]/70 leading-relaxed font-light">
                Whether celebrating an intimate rehearsal dinner, a milestone anniversary, or a corporate executive summit, Ember &amp; Oak offers bespoke architectural spaces tailored to your vision.
              </p>

              {/* 4 Core Inclusions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#121216] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                  <h4 className="font-serif text-base text-[#D4AF37] font-semibold">
                    The Oak Cellar Vault
                  </h4>
                  <p className="text-xs text-[#F5F2ED]/60 mt-1 font-light">
                    Acoustic privacy, 1,200-bottle glass wine display &amp; private sommelier.
                  </p>
                </div>

                <div className="p-4 bg-[#121216] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                  <h4 className="font-serif text-base text-[#D4AF37] font-semibold">
                    Custom Tasting Menus
                  </h4>
                  <p className="text-xs text-[#F5F2ED]/60 mt-1 font-light">
                    3 to 5-course wood-fired menus paired with allocated reserve vintages.
                  </p>
                </div>

                <div className="p-4 bg-[#121216] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                  <h4 className="font-serif text-base text-[#D4AF37] font-semibold">
                    Dedicated Maitre D'
                  </h4>
                  <p className="text-xs text-[#F5F2ED]/60 mt-1 font-light">
                    Personalized event director, private waitstaff &amp; bespoke cocktail mixologists.
                  </p>
                </div>

                <div className="p-4 bg-[#121216] border border-white/10 hover:border-[#D4AF37]/40 transition-colors">
                  <h4 className="font-serif text-base text-[#D4AF37] font-semibold">
                    Flexible Event Capacities
                  </h4>
                  <p className="text-xs text-[#F5F2ED]/60 mt-1 font-light">
                    Accommodating 12 seated guests up to 250 guests for estate buyouts.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  id="explore-banquet-cta"
                  onClick={() => onNavigate('banquet')}
                  className="btn-gold-shimmer px-8 py-3.5 bg-[#D4AF37] text-black font-sans text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>EXPLORE BANQUET SPACES</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Luxury Event Image Grid */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative overflow-hidden shadow-2xl border border-white/15 group">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85"
                  alt="Luxury Private Event and Banquet at Ember & Oak"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-[#F5F2ED]">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37] block font-semibold">
                      PREMIER BANQUET HALL
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold">
                      The Garden Veranda &amp; Pavilion
                    </h3>
                  </div>
                  <span className="text-xs text-[#D4AF37] border border-[#D4AF37]/60 px-3 py-1 bg-black/80 font-serif font-bold">
                    Up to 150 Guests
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden border border-white/15 group">
                  <img
                    src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80"
                    alt="The Oak Private Dining Room"
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 text-[10px] font-semibold text-white bg-black/80 px-2 py-0.5 border border-white/10">
                    The Oak Room (32 Seated)
                  </div>
                </div>
                <div className="relative overflow-hidden border border-white/15 group">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
                    alt="Private Banquet Table Setting"
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 text-[10px] font-semibold text-white bg-black/80 px-2 py-0.5 border border-white/10">
                    Bespoke Table Styling
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          7. CATERING (Bring Ember & Oak To Your Event)
          ========================================================================= */}
      <section id="catering-section" className="py-24 sm:py-32 bg-[#08080a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              OFF-SITE HEARTH EXPERIENCES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F2ED] font-light">
              BRING EMBER &amp; OAK TO YOUR ESTATE
            </h2>
            <p className="text-sm sm:text-base text-[#F5F2ED]/65 max-w-2xl mx-auto font-light">
              Our mobile wood-fire pit rigs and executive culinary brigade travel to private ranches, Hill Country vineyards, and corporate galas.
            </p>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          {/* 4 Catering Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATERING_SERVICES.map((cat) => (
              <div
                key={cat.id}
                className="bg-[#111115] border border-white/10 hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-between overflow-hidden group shadow-xl hover:-translate-y-1.5"
              >
                <div className="relative h-48 overflow-hidden bg-[#070708]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] text-[#D4AF37] block mt-1 font-medium tracking-wide">
                      {cat.subtitle}
                    </span>
                    <p className="text-xs text-[#F5F2ED]/65 mt-3 leading-relaxed font-light">
                      {cat.description}
                    </p>
                  </div>

                  <ul className="mt-4 pt-3 border-t border-white/10 space-y-1.5 text-[11px] text-[#F5F2ED]/70">
                    {cat.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              id="explore-catering-cta"
              onClick={() => onNavigate('catering')}
              className="btn-gold-shimmer px-9 py-4 bg-[#D4AF37] text-black font-sans text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all shadow-xl inline-flex items-center gap-2 cursor-pointer"
            >
              <span>EXPLORE CATERING PACKAGES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. MENU PREVIEW (Categorized Tabs with Smooth Animation)
          ========================================================================= */}
      <section id="menu-preview-section" className="py-24 sm:py-32 bg-[#0A0A0A] relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              OUR CULINARY REPERTOIRE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F2ED] font-light">
              MENU PREVIEW
            </h2>
            <p className="text-sm sm:text-base text-[#F5F2ED]/60 font-light">
              Select a category to explore seasonal plates crafted with Texas post-oak wood embers.
            </p>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
            {menuCategories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`tab-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-6 py-2.5 text-[10px] uppercase tracking-widest font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 font-bold'
                      : 'bg-white/5 text-[#F5F2ED]/70 hover:text-[#D4AF37] hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Categorized Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredMenuItems.map((item) => (
              <div
                key={item.id}
                id={`menu-item-${item.id}`}
                className="flex items-start gap-4 p-4 bg-[#121212] border border-white/10 hover:border-[#D4AF37]/40 transition-all group"
              >
                {/* Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover shrink-0 border border-white/10 group-hover:scale-105 transition-transform duration-300"
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2 border-b border-dotted border-white/15 pb-1.5">
                    <h3 className="font-serif text-lg sm:text-xl text-[#F5F2ED] group-hover:text-[#D4AF37] transition-colors truncate font-semibold">
                      {item.name}
                    </h3>
                    <span className="font-serif text-lg font-bold text-[#D4AF37] shrink-0">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#F5F2ED]/60 mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-white/5 text-[#D4AF37] text-[10px] tracking-wider uppercase border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA: View Complete Menu */}
          <div className="mt-14 text-center">
            <button
              id="view-complete-menu-btn"
              onClick={() => onNavigate('menu')}
              className="px-9 py-4 bg-[#D4AF37] text-black font-sans text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all inline-flex items-center gap-3 cursor-pointer shadow-xl shadow-[#D4AF37]/10"
            >
              <span>VIEW COMPLETE MENU</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. GALLERY (Masonry with Lightbox)
          ========================================================================= */}
      <section id="gallery-section" className="py-24 sm:py-32 bg-[#0A0A0A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              VISUAL CHRONICLE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F2ED] font-light">
              THE EMBER &amp; OAK GALLERY
            </h2>
            <p className="text-sm sm:text-base text-[#F5F2ED]/60 font-light">
              An inside glance into our hearth, crafted spirits, private cellars, and culinary celebrations. Click any image to view in fullscreen.
            </p>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          {/* Masonry-Style Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.slice(0, 6).map((item) => (
              <div
                key={item.id}
                id={`gallery-thumb-${item.id}`}
                onClick={() => onOpenLightbox(item)}
                className="group relative overflow-hidden bg-[#121212] border border-white/10 cursor-pointer h-72 sm:h-80"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-bold">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg text-white font-bold mt-1">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-xs text-[#D4AF37]">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View fullscreen</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA: View Full Gallery */}
          <div className="mt-14 text-center">
            <button
              id="view-full-gallery-btn"
              onClick={() => onNavigate('gallery')}
              className="px-9 py-4 bg-transparent hover:bg-[#D4AF37] text-[#F5F2ED] hover:text-black border border-[#D4AF37] font-sans text-[10px] uppercase tracking-widest font-bold transition-all inline-flex items-center gap-3 cursor-pointer"
            >
              <span>VIEW FULL GALLERY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          10. TESTIMONIALS (Subtle Carousel - Labeled Demo)
          ========================================================================= */}
      <section id="testimonials-section" className="py-24 sm:py-32 bg-[#121212] border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>PORTFOLIO DEMO TESTIMONIALS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F2ED] font-light mb-12">
            WHAT OUR GUESTS ARE SAYING
          </h2>

          {/* Active Testimonial Card */}
          <div className="relative min-h-[220px] flex flex-col items-center justify-center px-4 sm:px-10">
            <div className="flex items-center gap-1 text-[#D4AF37] mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
              ))}
            </div>

            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F5F2ED]/90 italic font-normal leading-relaxed max-w-2xl">
              "{DEMO_TESTIMONIALS[activeTestimonialIdx].quote}"
            </p>

            <div className="mt-8">
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                {DEMO_TESTIMONIALS[activeTestimonialIdx].author}
              </h3>
              <p className="text-xs text-[#F5F2ED]/50 mt-0.5">
                {DEMO_TESTIMONIALS[activeTestimonialIdx].role} • {DEMO_TESTIMONIALS[activeTestimonialIdx].occasion}
              </p>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              id="testimonial-prev-btn"
              onClick={() => {
                setActiveTestimonialIdx((prev) => (prev === 0 ? DEMO_TESTIMONIALS.length - 1 : prev - 1));
              }}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-[#F5F2ED] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {DEMO_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeTestimonialIdx === idx
                      ? 'w-6 bg-[#D4AF37]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              id="testimonial-next-btn"
              onClick={() => {
                setActiveTestimonialIdx((prev) => (prev + 1) % DEMO_TESTIMONIALS.length);
              }}
              aria-label="Next testimonial"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-[#F5F2ED] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-[11px] text-[#F5F2ED]/40 mt-6 italic">
            * Clearly noted: Demonstration reviews illustrating client feedback UI formatting for portfolio preview.
          </p>

        </div>
      </section>

      {/* =========================================================================
          11. ONLINE BOOKING (Reserve Your Table)
          ========================================================================= */}
      <section id="booking-section" className="py-24 sm:py-32 bg-[#0A0A0A] relative border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
              INSTANT ONLINE TABLE BOOKING
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F2ED] font-light">
              RESERVE YOUR TABLE
            </h2>
            <p className="text-sm sm:text-base text-[#F5F2ED]/60 font-light">
              Join us for an evening of wood-charcoal steaks and vintage cocktails. Reserve easily below.
            </p>
            <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4" />
          </div>

          {/* Interactive Booking Container */}
          <div className="bg-[#121212] border border-white/10 p-6 sm:p-12 shadow-2xl relative">
            
            {reservationSuccess ? (
              /* Success State Confirmation Card */
              <div 
                id="reservation-confirmation-card"
                className="text-center py-8 px-4 max-w-2xl mx-auto space-y-6 animate-fade-in"
              >
                <div className="w-16 h-16 bg-[#17291a] border border-[#2b5932] rounded-full flex items-center justify-center text-[#4ade80] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#4ade80] font-bold">
                    RESERVATION REQUEST RECEIVED
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F2ED] mt-1 font-light">
                    We Look Forward to Welcoming You
                  </h3>
                </div>

                {/* Summary Box */}
                <div className="bg-[#0A0A0A] border border-white/10 p-6 text-left space-y-3 font-sans text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#F5F2ED]/60">Guest Name:</span>
                    <span className="text-[#F5F2ED] font-semibold">{reservationSuccess.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#F5F2ED]/60">Date &amp; Time:</span>
                    <span className="text-[#D4AF37] font-semibold">{reservationSuccess.date} at {reservationSuccess.time}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#F5F2ED]/60">Party Size:</span>
                    <span className="text-[#F5F2ED] font-semibold">{reservationSuccess.guests} Guests</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#F5F2ED]/60">Seating Area:</span>
                    <span className="text-[#F5F2ED] font-semibold">{reservationSuccess.seatingPreference}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-[#F5F2ED]/60">Contact:</span>
                    <span className="text-[#F5F2ED] font-semibold">{reservationSuccess.email} • {reservationSuccess.phone}</span>
                  </div>
                  {reservationSuccess.specialRequest && (
                    <div className="flex justify-between pt-1">
                      <span className="text-[#F5F2ED]/60">Special Notes:</span>
                      <span className="text-[#F5F2ED] text-right italic">{reservationSuccess.specialRequest}</span>
                    </div>
                  )}
                </div>

                {/* Explicit Demo Notification Banner */}
                <div className="p-4 bg-white/5 border border-white/10 text-[#D4AF37] text-xs text-left">
                  <strong>Portfolio Demo Notice:</strong> This is a working frontend demonstration for Ember &amp; Oak. No real table was booked or external restaurant notification sent. All submitted fields have successfully executed local validation.
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                  <button
                    onClick={handleResetReservation}
                    className="px-8 py-3.5 bg-[#D4AF37] text-black font-sans text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all cursor-pointer"
                  >
                    MAKE ANOTHER RESERVATION
                  </button>
                  <button
                    onClick={() => onNavigate('menu')}
                    className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-[#F5F2ED] font-sans text-[10px] uppercase tracking-widest font-medium border border-white/10 transition-all cursor-pointer"
                  >
                    BROWSE MENU IN THE MEANTIME
                  </button>
                </div>
              </div>
            ) : (
              /* Reservation Form */
              <form onSubmit={handleReservationSubmit} className="space-y-6">
                {reservationError && (
                  <div className="p-3.5 bg-[#2b1616] border border-[#592626] text-[#fca5a5] text-xs">
                    {reservationError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johnathan Vance"
                      value={reservationForm.name}
                      onChange={(e) => setReservationForm({ ...reservationForm, name: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] placeholder-[#F5F2ED]/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jvance@example.com"
                      value={reservationForm.email}
                      onChange={(e) => setReservationForm({ ...reservationForm, email: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] placeholder-[#F5F2ED]/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (512) 555-0198"
                      value={reservationForm.phone}
                      onChange={(e) => setReservationForm({ ...reservationForm, phone: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] placeholder-[#F5F2ED]/30 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-medium">
                      Reservation Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={reservationForm.date}
                      onChange={(e) => setReservationForm({ ...reservationForm, date: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Time slot picker */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-medium">
                      Preferred Time *
                    </label>
                    <select
                      value={reservationForm.time}
                      onChange={(e) => setReservationForm({ ...reservationForm, time: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    >
                      {availableTimeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-[#121212]">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Number of Guests */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-medium">
                      Number of Guests *
                    </label>
                    <select
                      value={reservationForm.guests}
                      onChange={(e) => setReservationForm({ ...reservationForm, guests: parseInt(e.target.value, 10) })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16].map((num) => (
                        <option key={num} value={num} className="bg-[#121212]">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Seating Preference Pills */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-medium block">
                    Seating Preference
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      'Main Dining Room',
                      'Bar & Lounge',
                      'Oak Garden Patio',
                      'Chef Counter'
                    ].map((area) => {
                      const selected = reservationForm.seatingPreference === area;
                      return (
                        <button
                          type="button"
                          key={area}
                          onClick={() => setReservationForm({ ...reservationForm, seatingPreference: area })}
                          className={`py-2.5 px-3 text-[10px] tracking-widest uppercase font-semibold text-center border transition-colors cursor-pointer ${
                            selected
                              ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37]'
                              : 'border-white/10 bg-[#0A0A0A] text-[#F5F2ED]/60 hover:text-[#F5F2ED]'
                          }`}
                        >
                          {area}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Special Request */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-medium">
                    Special Request or Dietary Accommodations (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Celebrating 10th anniversary, prefer quiet booth, gluten sensitivity..."
                    value={reservationForm.specialRequest}
                    onChange={(e) => setReservationForm({ ...reservationForm, specialRequest: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] placeholder-[#F5F2ED]/30 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#F5F2ED]/50 font-light">
                    Instant email confirmation • No prepayment required
                  </span>
                  <button
                    id="submit-reservation-btn"
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black font-sans text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all shadow-xl shadow-[#D4AF37]/15 cursor-pointer"
                  >
                    REQUEST RESERVATION
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* =========================================================================
          12. VISITING HOURS & LOCATION (with Google Maps-Style Visual Placeholder)
          ========================================================================= */}
      <section id="visiting-hours-section" className="py-24 bg-[#0A0A0A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Info details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold block">
                FIND US IN AUSTIN
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#F5F2ED] font-light">
                HOURS &amp; LOCATION
              </h2>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-[#121212] border border-white/10">
                  <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm mb-1">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>OPERATING HOURS</span>
                  </div>
                  <p className="text-xs text-[#F5F2ED]/80">
                    Monday – Sunday: 11:00 AM – 11:00 PM
                  </p>
                  <p className="text-xs text-[#F5F2ED]/50 mt-1">
                    Lunch: 11:00 AM – 3:00 PM • Dinner: 5:00 PM – 11:00 PM
                  </p>
                </div>

                <div className="p-4 bg-[#121212] border border-white/10">
                  <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm mb-1">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span>RESTAURANT ADDRESS</span>
                  </div>
                  <p className="text-xs text-[#F5F2ED]/80">
                    123 Oak Avenue, Downtown Austin, Texas 78701
                  </p>
                  <p className="text-xs text-[#F5F2ED]/50 mt-1">
                    Complimentary Valet Parking available Wed – Sun evenings.
                  </p>
                </div>

                <div className="p-4 bg-[#121212] border border-white/10">
                  <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-sm mb-1">
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>PHONE &amp; CONCIERGE</span>
                  </div>
                  <p className="text-xs text-[#F5F2ED]/80">
                    +1 (512) 555-0198
                  </p>
                  <p className="text-xs text-[#F5F2ED]/50 mt-1">
                    Host desk answers daily from 10:00 AM.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3 bg-white/5 hover:bg-white/10 text-[#F5F2ED] border border-white/10 text-[10px] uppercase tracking-widest font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>FULL CONTACT &amp; DIRECTIONS</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
            </div>

            {/* Google Maps-Style Visual Placeholder */}
            <div className="lg:col-span-7">
              <div className="relative h-96 sm:h-[420px] bg-[#121212] border border-white/10 overflow-hidden shadow-2xl group">
                {/* Styled dark map simulation */}
                <div className="absolute inset-0 bg-[#0A0A0A] flex items-center justify-center">
                  {/* Subtle map grid vector lines */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
                  <svg className="absolute inset-0 w-full h-full opacity-15 stroke-[#F5F2ED]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,80 Q200,60 400,120 T800,100" fill="none" strokeWidth="6" />
                    <path d="M120,0 Q180,200 160,450" fill="none" strokeWidth="4" />
                    <path d="M420,0 Q390,220 480,450" fill="none" strokeWidth="5" />
                    <path d="M0,280 Q350,300 700,260" fill="none" strokeWidth="8" />
                  </svg>

                  {/* Colorado River simulation */}
                  <div className="absolute bottom-12 left-0 right-0 h-16 bg-[#1a2330]/40 -rotate-3 border-y border-[#293d56]/40" />

                  {/* Central Map Pin at 123 Oak Ave */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50 animate-pulse">
                      <Flame className="w-6 h-6 fill-black" />
                    </div>
                    <div className="mt-3 px-4 py-2 bg-[#0A0A0A]/95 border border-[#D4AF37] text-center shadow-2xl">
                      <span className="font-serif text-sm font-bold text-[#F5F2ED] block">
                        EMBER &amp; OAK
                      </span>
                      <span className="text-[10px] text-[#D4AF37] tracking-widest uppercase block">
                        123 Oak Avenue • Austin, TX
                      </span>
                    </div>
                  </div>
                </div>

                {/* Map UI Controls Simulation */}
                <div className="absolute top-4 left-4 bg-black/90 border border-white/10 px-3 py-1.5 text-[10px] text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Interactive Map Preview • Austin, TX</span>
                </div>

                <div className="absolute bottom-4 right-4 flex gap-2">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest shadow-lg hover:bg-white transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
