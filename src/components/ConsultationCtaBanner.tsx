import React from 'react';
import { Phone, ArrowUpRight, MessageCircle } from 'lucide-react';
import kitchenImg from '../assets/images/portfolio_kitchen_dining_1790858863683.jpg'; // or heroImg
import heroImg from '../assets/images/hero_interior_living_1790858863683.jpg';
import { BUSINESS_INFO } from '../data/businessData';

interface ConsultationCtaBannerProps {
  onRequestConsultation?: () => void;
}

export const ConsultationCtaBanner: React.FC<ConsultationCtaBannerProps> = ({
  onRequestConsultation,
}) => {
  const handleClick = () => {
    if (onRequestConsultation) {
      onRequestConsultation();
    } else {
      const el = document.querySelector('#contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden text-white">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Warm luxury interior living space background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1613]/95 via-[#222222]/85 to-[#222222]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B08D57] font-semibold mb-4">
          <span className="w-6 h-[1px] bg-[#B08D57]" />
          <span>Begin Your Design Journey</span>
          <span className="w-6 h-[1px] bg-[#B08D57]" />
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-white leading-tight max-w-3xl mx-auto text-balance">
          Ready to Transform Your Space?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#F7F4EF]/85 font-light max-w-2xl mx-auto leading-relaxed">
          Tell us about your space, your ideas, and what you want it to feel like. Let's start the conversation.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS_INFO.telLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#222222] bg-[#F7F4EF] hover:bg-[#C9B9A5] active:scale-[0.98] rounded transition-all shadow-md"
          >
            <Phone className="w-4 h-4 text-[#B08D57]" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={handleClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-white border border-[#F7F4EF]/50 hover:bg-white/10 active:scale-[0.98] rounded transition-all backdrop-blur-xs"
          >
            <span>Request a Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-[#C9B9A5]" />
          </button>
        </div>

        <div className="mt-8 text-xs text-[#C9B9A5] tracking-wider uppercase font-medium">
          Nagpur Studio · Jayanti Nagari, Besa / Manish Nagar Rd
        </div>
      </div>
    </section>
  );
};
