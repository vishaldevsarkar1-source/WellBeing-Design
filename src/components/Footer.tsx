import React from 'react';
import { Phone, MapPin, Star, MessageCircle, ArrowUp, ExternalLink, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#222222] text-[#F7F4EF] pt-16 pb-12 border-t border-[#4A382C]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-serif-luxury font-medium text-white tracking-tight">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#B08D57] font-medium">
              Interior Design Studio · Nagpur, Maharashtra
            </p>
            <p className="text-xs text-[#C9B9A5]/80 font-light leading-relaxed max-w-sm">
              Thoughtfully considered residential and commercial interior spaces that balance beauty, functionality, and personal comfort.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C9B9A5]">
              <div className="flex text-[#B08D57]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#B08D57] text-[#B08D57]" />
                ))}
              </div>
              <span className="text-white font-medium tabular-nums">{BUSINESS_INFO.rating}/5</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{BUSINESS_INFO.reviewCount} Reviews on Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B08D57]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#C9B9A5]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B08D57]">
              Studio Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#C9B9A5] font-light">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B08D57] shrink-0" />
                <a
                  href={BUSINESS_INFO.telLink}
                  className="hover:text-white transition-colors tabular-nums font-normal"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B08D57] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Besa / Manish Nagar, Nagpur, Maharashtra
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-emerald-300 font-normal"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Connect / Verified Profiles Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#B08D57]">
              Connect & Feedback
            </h4>
            <p className="text-xs text-[#C9B9A5]/80 font-light">
              Read verified feedback from our clients in Nagpur or connect with us online:
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <a
                href={BUSINESS_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#C9B9A5] hover:text-white transition-colors"
              >
                <span>Google Business Profile & Reviews</span>
                <ExternalLink className="w-3 h-3 text-[#B08D57]" />
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#C9B9A5] hover:text-white transition-colors"
              >
                <span>Google Maps Location</span>
                <ExternalLink className="w-3 h-3 text-[#B08D57]" />
              </a>

              {/* Instagram link placeholder without fake URL */}
              <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] pt-1">
                <Instagram className="w-3 h-3 text-[#77736E]" />
                <span>Instagram: @wellbeingdesign (Studio Showcase)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77736E] font-light">
          <div>
            © 2026 {BUSINESS_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Interior Designer Nagpur</span>
            <span aria-hidden="true">·</span>
            <span>Besa / Manish Nagar</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#C9B9A5] hover:text-white transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
