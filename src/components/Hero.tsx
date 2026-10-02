import React from 'react';
import { ArrowDown, ArrowUpRight, Star } from 'lucide-react';
import wellbeingBedroomOriginal from '../assets/images/wellbeing_bedroom_original.webp';
import { BUSINESS_INFO } from '../data/businessData';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const scrollToWork = () => {
    const el = document.querySelector('#portfolio');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const el = document.querySelector('#contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={wellbeingBedroomOriginal}
          alt="WellBeing Design authentic bedroom project featuring teal accent wall, marble wainscoting and warm ambient lighting"
          className="w-full h-full object-cover object-center scale-[1.01]"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        {/* Editorial gradient scrim: transparent top, warm rich dark bottom for pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/90 via-[#222222]/60 to-[#222222]/35" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-10 sm:pt-16">
        {/* Trust Indicator - Zero-Pill Discipline: unboxed text with typographic bullet */}
        <div className="inline-flex items-center justify-center gap-2 mb-6 text-xs sm:text-sm font-medium text-[#F7F4EF]/90 tracking-wide">
          <div className="flex items-center text-[#B08D57]" aria-label="5 stars rating">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#B08D57] text-[#B08D57]" />
            ))}
          </div>
          <span className="font-semibold text-white tabular-nums">{BUSINESS_INFO.rating}/5</span>
          <span className="text-[#C9B9A5]" aria-hidden="true">·</span>
          <span>Google Rating</span>
          <span className="text-[#C9B9A5]" aria-hidden="true">·</span>
          <span className="tabular-nums">{BUSINESS_INFO.reviewCount} Reviews</span>
          <span className="text-[#C9B9A5] hidden sm:inline" aria-hidden="true">·</span>
          <span className="hidden sm:inline text-[#F7F4EF]/80">Nagpur, Maharashtra</span>
        </div>

        {/* Studio Tagline directly from official logo */}
        <div className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C9B9A5] font-medium font-sans mb-3">
          Design Creates Happiness
        </div>

        {/* Main Brand Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal tracking-tight text-white leading-[1.08] max-w-4xl mx-auto text-balance">
          WellBeing Design
        </h1>

        {/* Studio Living Philosophy */}
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-serif-luxury text-white/95 max-w-3xl mx-auto text-balance font-normal italic">
          Spaces Designed Around the Way You Live
        </p>

        {/* Supporting Copy */}
        <p className="mt-4 text-base sm:text-lg text-[#F7F4EF]/85 max-w-2xl mx-auto font-light leading-relaxed">
          Thoughtfully designed interiors that bring together beauty, functionality, comfort, and your personal style.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#222222] bg-[#F7F4EF] hover:bg-[#C9B9A5] active:scale-[0.98] rounded-md transition-all shadow-md cursor-pointer"
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-[#4A382C]" />
          </button>

          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm uppercase tracking-widest font-semibold text-white border border-[#F7F4EF]/40 hover:border-white hover:bg-white/10 active:scale-[0.98] rounded-md transition-all backdrop-blur-xs cursor-pointer"
          >
            <span>Explore Our Work</span>
          </button>
        </div>

        {/* Studio Location Micro-Kicker */}
        <div className="mt-8 text-xs text-[#C9B9A5]/80 tracking-wider uppercase font-medium">
          Interior Design Studio · Manish Nagar / Besa, Nagpur
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll down to introduction"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#F7F4EF]/70 hover:text-white transition-colors group cursor-pointer"
      >
        <span className="text-[11px] uppercase tracking-widest text-[#C9B9A5] mb-1 font-medium">Scroll</span>
        <ArrowDown className="w-4 h-4 text-[#C9B9A5] group-hover:translate-y-1 transition-transform" />
      </button>
    </section>
  );
};
