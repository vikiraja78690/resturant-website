import React, { useState } from 'react';
import { PageView } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <>
      <footer id="main-site-footer" className="bg-[#0A0A0A] border-t border-white/10 text-[#F5F2ED] pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Newsletter & Brand Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-light text-[#D4AF37]">
                  EMBER &amp; OAK
                </span>
                <span className="text-[10px] tracking-[0.4em] text-[#F5F2ED]/60 uppercase font-normal mt-1">
                  Restaurant &amp; Bar — Austin, Texas
                </span>
              </div>
              <p className="text-sm text-[#F5F2ED]/70 max-w-md leading-relaxed">
                Elevated American dining centered around wood-charcoal hearth cooking, 
                locally sourced Texas agriculture, and bespoke beverage crafting. 
                Join us for an unforgettable evening.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={RESTAURANT_INFO.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={RESTAURANT_INFO.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={RESTAURANT_INFO.social.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  <span className="text-xs font-bold font-sans">TT</span>
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="lg:col-span-7 flex flex-col justify-center bg-[#121212] p-8 border border-white/10 relative">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
                THE EMBER SOCIETY
              </span>
              <h4 className="font-serif text-2xl font-light text-[#F5F2ED] mt-1 mb-2">
                Seasonal Menus, Private Tastings &amp; Exclusive Invitations
              </h4>
              <p className="text-xs text-[#F5F2ED]/60 mb-6">
                Subscribe to receive private dinner announcements, sommelier wine releases, and holiday reservations first.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-[#D4AF37]/50 text-[#F5F2ED] text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  <span>Thank you for joining our private guest list. A welcome invitation is on its way.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#D4AF37] text-black text-[10px] font-bold tracking-widest uppercase hover:bg-white flex items-center justify-center gap-2 transition-all whitespace-nowrap cursor-pointer"
                  >
                    <span>JOIN LIST</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
            {/* Quick Navigation */}
            <div>
              <h5 className="font-serif text-lg font-light text-[#D4AF37] mb-5 tracking-wider border-b border-white/10 pb-2">
                EXPLORE
              </h5>
              <ul className="space-y-3 text-xs tracking-wider uppercase">
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    className="text-[#F5F2ED]/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    Home Overview
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-[#F5F2ED]/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    Our Story &amp; Philosophy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('menu')}
                    className="text-[#F5F2ED]/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    Full Dining &amp; Bar Menu
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('banquet')}
                    className="text-[#F5F2ED]/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    Banquet Facility &amp; Private Rooms
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('catering')}
                    className="text-[#F5F2ED]/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    Off-Premise &amp; Event Catering
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('gallery')}
                    className="text-[#F5F2ED]/70 hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    Atmosphere &amp; Dishes Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('menu-kit')}
                    className="text-[#D4AF37] hover:text-white transition-colors font-medium flex items-center gap-1 cursor-pointer"
                  >
                    Download Menu Kits (PDF)
                  </button>
                </li>
              </ul>
            </div>

            {/* Dining Hours */}
            <div>
              <h5 className="font-serif text-lg font-light text-[#D4AF37] mb-5 tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span>VISITING HOURS</span>
              </h5>
              <div className="space-y-3 text-xs text-[#F5F2ED]/70">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Monday – Thursday</span>
                  <span className="text-[#F5F2ED] font-medium">11:00 AM – 11:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Friday – Saturday</span>
                  <span className="text-[#F5F2ED] font-medium">11:00 AM – Midnight</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span>Sunday</span>
                  <span className="text-[#F5F2ED] font-medium">11:00 AM – 10:30 PM</span>
                </div>
                <p className="text-[11px] text-[#D4AF37] pt-2">
                  * Kitchen closes 45 minutes prior to closing time.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h5 className="font-serif text-lg font-light text-[#D4AF37] mb-5 tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>LOCATION &amp; CONTACT</span>
              </h5>
              <div className="space-y-3.5 text-xs text-[#F5F2ED]/70">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>
                    123 Oak Avenue<br />
                    Downtown Austin, Texas 78701<br />
                    United States
                  </span>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-white transition-colors">
                    {RESTAURANT_INFO.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-white transition-colors">
                    {RESTAURANT_INFO.email}
                  </a>
                </p>
                <div className="pt-2 text-[11px] text-[#F5F2ED]/50">
                  Complimentary valet parking available Wed – Sun after 5:00 PM.
                </div>
              </div>
            </div>

            {/* Direct Booking Column */}
            <div className="bg-[#121212] p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-1">
                  RESERVATIONS
                </span>
                <h5 className="font-serif text-xl font-light text-[#F5F2ED] mt-1 mb-2">
                  Table Reservations &amp; Inquiries
                </h5>
                <p className="text-xs text-[#F5F2ED]/60 leading-relaxed mb-6">
                  Experience prime dry-aged cuts and curated Texas wines. For parties of 8 or more, please reserve in advance.
                </p>
              </div>

              <button
                id="footer-reserve-btn"
                onClick={() => onNavigate('booking')}
                className="w-full py-3 bg-[#D4AF37] text-black text-[10px] font-bold tracking-widest uppercase hover:bg-white text-center transition-all cursor-pointer shadow-lg"
              >
                RESERVE YOUR TABLE
              </button>
            </div>
          </div>

          {/* Bottom Copyright & Legal */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#F5F2ED]/40 gap-4">
            <p>© 2026 EMBER &amp; OAK — LUXURY DINING EXPERIENCE</p>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-[#D4AF37] transition-colors cursor-pointer uppercase"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-[#D4AF37] transition-colors cursor-pointer uppercase"
              >
                Terms of Service
              </button>
              <span>•</span>
              <span>AUSTIN, TEXAS</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {activeLegalModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveLegalModal(null)}
        >
          <div
            className="bg-[#121212] border border-white/10 max-w-lg w-full p-8 text-[#F5F2ED] relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-2xl font-light text-[#D4AF37] mb-4">
              {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <div className="text-xs space-y-3 leading-relaxed text-[#F5F2ED]/70 max-h-80 overflow-y-auto pr-2">
              <p>
                <strong>Demo Website Notice:</strong> Ember &amp; Oak is presented as an ultra-premium demonstration website concept for a modern American restaurant &amp; bar in Austin, Texas.
              </p>
              <p>
                All brand identity, reservation forms, and newsletter submissions are provided for frontend evaluation and preview demonstration purposes.
              </p>
              <p>
                Any submitted guest details are handled strictly within your local browser session and are never transmitted to unauthorized third parties.
              </p>
            </div>
            <button
              onClick={() => setActiveLegalModal(null)}
              className="mt-6 px-6 py-2.5 bg-[#D4AF37] text-black text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
