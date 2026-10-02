import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F7F4EF]/95 backdrop-blur-md border-t border-[#C9B9A5]/60 px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] flex items-center justify-between gap-3"
      style={{ maxHeight: '60px' }}
      aria-label="Mobile quick actions"
    >
      {/* Call button */}
      <a
        href={BUSINESS_INFO.telLink}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs uppercase tracking-wider font-semibold text-[#222222] bg-[#EDE7DD] hover:bg-[#C9B9A5] border border-[#C9B9A5] rounded transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#B08D57]" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp button */}
      <a
        href={BUSINESS_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs uppercase tracking-wider font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded transition-colors shadow-sm"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
