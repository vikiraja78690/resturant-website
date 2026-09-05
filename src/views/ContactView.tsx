import React, { useState } from 'react';
import { PageView } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Car, Compass, MessageSquare } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageView) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div id="contact-view-container" className="pt-24 pb-20 bg-[#0A0A0A]">
      {/* Photographic Hero */}
      <section data-hero="true" className="hero-banner relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center py-24 sm:py-32 overflow-hidden border-b border-white/10">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=2000&q=85"
            alt="Ember & Oak Cocktail Lounge and Hospitality Concierge"
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
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#F5F2ED]/80 font-normal">
              HOSPITALITY CONCIERGE
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#F5F2ED] font-light">
            GET IN TOUCH
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F5F2ED]/75 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            We are here to answer questions regarding dining reservations, banquet private events, press inquiries, or custom sommelier tasting experiences.
          </p>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-8" />
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121212] border border-white/10 p-6 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-serif text-xl font-semibold text-[#F5F2ED]">Location &amp; Address</h3>
              </div>
              <p className="text-xs text-[#F5F2ED]/70 leading-relaxed font-light">
                {RESTAURANT_INFO.address}<br />
                Downtown Arts &amp; Culinary District, Austin, Texas
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#D4AF37]">
                <Car className="w-4 h-4" />
                <span>Complimentary valet parking available Wed – Sun from 5:00 PM</span>
              </div>
            </div>

            <div className="bg-[#121212] border border-white/10 p-6 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-serif text-xl font-semibold text-[#F5F2ED]">Visiting Hours</h3>
              </div>
              <div className="text-xs text-[#F5F2ED]/70 space-y-1.5 font-light">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Lunch Service:</span>
                  <span className="text-[#F5F2ED]">Mon – Sun, 11:00 AM – 3:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span>Dinner Service:</span>
                  <span className="text-[#F5F2ED]">Mon – Sun, 5:00 PM – 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Oak Bar &amp; Lounge:</span>
                  <span className="text-[#F5F2ED]">Open Until Midnight (Fri/Sat to 1:00 AM)</span>
                </div>
              </div>
            </div>

            <div className="bg-[#121212] border border-white/10 p-6 space-y-3">
              <div className="flex items-center gap-3 text-[#D4AF37]">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="font-serif text-xl font-semibold text-[#F5F2ED]">Direct Communication</h3>
              </div>
              <p className="text-xs text-[#F5F2ED]/70 font-light leading-relaxed">
                Reservations &amp; Host Stand: <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#F5F2ED] hover:text-[#D4AF37] transition-colors">{RESTAURANT_INFO.phone}</a><br />
                General Concierge: <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-[#F5F2ED] hover:text-[#D4AF37] transition-colors">{RESTAURANT_INFO.email}</a><br />
                Banquet &amp; Catering: <span className="text-[#F5F2ED]">events@emberandoak.com</span>
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 p-8 sm:p-12 shadow-2xl">
            <h2 className="font-serif text-3xl text-[#F5F2ED] font-light mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-[#F5F2ED]/60 mb-8 font-light">
              Fill out the form below and our host concierge will respond promptly.
            </p>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#D4AF37] mx-auto" />
                <h3 className="font-serif text-3xl text-[#F5F2ED]">
                  Message Sent
                </h3>
                <p className="text-xs text-[#F5F2ED]/70 max-w-md mx-auto leading-relaxed font-light">
                  Thank you for reaching out, {formData.name}. We have received your message regarding {formData.subject}. (Portfolio demo: verified locally).
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#D4AF37] text-black text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (512) 555-0198"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="General Inquiry">General Dining Inquiry</option>
                      <option value="Private Banquet RFP">Private Banquet / Dining Room</option>
                      <option value="Catering Inquiry">Catering Event Request</option>
                      <option value="Press & Media">Press &amp; Media Relations</option>
                      <option value="Career Opportunities">Culinary &amp; Service Careers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium block mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How may we assist your dining experience or private event inquiry?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 text-sm text-[#F5F2ED] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] hover:bg-white text-black text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
