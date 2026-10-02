import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F4EF]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-b border-[#C9B9A5]/30'
          : 'bg-[#F7F4EF]/70 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text wordmark as per Top Bar contract */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl sm:text-2xl font-serif-luxury font-medium tracking-tight text-[#222222] hover:text-[#4A382C] transition-colors"
        >
          WellBeing Design
        </a>

        {/* Zone 2: Clean 4-7 text navigation links with subtle hover underlines */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wider uppercase font-medium text-[#77736E]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#222222] transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B08D57] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href={BUSINESS_INFO.telLink}
            aria-label={`Call ${BUSINESS_INFO.phoneDisplay}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#222222] hover:text-[#B08D57] transition-colors px-3 py-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
            <span className="tabular-nums">{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={() => {
              if (onOpenConsultation) {
                onOpenConsultation();
              } else {
                const contactEl = document.querySelector('#contact');
                contactEl?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-white bg-[#222222] hover:bg-[#4A382C] active:scale-[0.98] rounded-md transition-all shadow-sm"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C9B9A5]" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 text-[#222222] hover:text-[#B08D57] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57] rounded"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F4EF] border-b border-[#C9B9A5]/40 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-serif-luxury text-[#222222] hover:text-[#B08D57] transition-colors py-1.5 border-b border-[#C9B9A5]/20"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={BUSINESS_INFO.telLink}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs tracking-wider uppercase font-semibold text-[#222222] border border-[#222222]/30 rounded-md hover:bg-[#222222]/5 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B08D57]" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  const contactEl = document.querySelector('#contact');
                  contactEl?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs tracking-wider uppercase font-semibold text-white bg-[#222222] hover:bg-[#4A382C] rounded-md transition-colors shadow-sm"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#C9B9A5]" />
            </button>

            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 px-4 text-xs font-medium text-[#4A382C] hover:text-[#222222] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
