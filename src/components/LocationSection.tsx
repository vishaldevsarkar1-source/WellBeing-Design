import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const LocationSection: React.FC = () => {
  // Direct embed map URL for Besa Manish Nagar Rd, Nagpur
  const mapEmbedUrl = `https://maps.google.com/maps?q=WellBeing+Design+Jayanti+Nagari+F-29+Besa+Manish+Nagar+Rd+Nagpur+Maharashtra+440034&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="py-20 sm:py-28 bg-[#EDE7DD]/40 text-[#222222] border-t border-[#C9B9A5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B08D57] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B08D57]" />
            <span>Studio Location</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#222222] leading-tight">
            Visit WellBeing Design
          </h2>
          <p className="mt-3 text-base text-[#77736E] font-light leading-relaxed">
            Conveniently located in Manish Nagar / Besa, Nagpur. Consultations arranged in advance to give your project dedicated focus.
          </p>
        </div>

        {/* Content & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Studio Details Card */}
          <div className="lg:col-span-5 bg-[#F7F4EF] p-8 rounded-lg border border-[#C9B9A5]/60 flex flex-col justify-between space-y-6 shadow-[0_4px_24px_rgba(74,56,44,0.04)]">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#B08D57] block mb-1">
                  Studio Address
                </span>
                <h3 className="text-xl font-serif-luxury font-medium text-[#222222]">
                  WellBeing Design
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#4A382C]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-1" />
                  <div className="leading-relaxed font-light">
                    Jayanti Nagari, F-29, Besa - Manish Nagar Rd, beside Purti Super Bazar, Manish Nagar, Besa, Besa Pipla, Nagpur, Maharashtra 440034, India
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Navigation className="w-4 h-4 text-[#B08D57] shrink-0" />
                  <div className="text-xs">
                    <span className="text-[#77736E]">Google Maps Plus Code: </span>
                    <strong className="font-mono text-[#222222]">{BUSINESS_INFO.plusCode}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
                  <div className="text-xs">
                    <span className="text-[#77736E]">Direct Line: </span>
                    <a href={BUSINESS_INFO.telLink} className="font-semibold text-[#222222] hover:text-[#B08D57] transition-colors tabular-nums">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#C9B9A5]/30 text-xs text-[#77736E] leading-relaxed font-light">
                  Landmark: Beside Purti Super Bazar on Besa - Manish Nagar Road.
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#222222] hover:bg-[#4A382C] rounded transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C9B9A5]" />
                <span>Get Directions</span>
              </a>

              <a
                href={BUSINESS_INFO.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-medium text-[#222222] border border-[#222222]/30 rounded hover:bg-[#222222]/5 transition-colors"
              >
                <span>View on Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#B08D57]" />
              </a>
            </div>
          </div>

          {/* Interactive Map Iframe */}
          <div className="lg:col-span-7 min-h-[380px] rounded-lg overflow-hidden border border-[#C9B9A5]/60 bg-[#EDE7DD] shadow-[0_4px_24px_rgba(74,56,44,0.04)] relative">
            <iframe
              title="WellBeing Design Nagpur Location Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[25%] contrast-[1.05]"
            />
            {/* Subtle Map Overlay Kicker */}
            <div className="absolute top-3 left-3 bg-[#222222]/90 text-white px-3 py-1.5 rounded text-xs backdrop-blur-xs flex items-center gap-2 shadow-sm pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>WellBeing Design · Besa / Manish Nagar</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
