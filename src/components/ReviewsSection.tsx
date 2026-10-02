import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { VERIFIED_REVIEWS, BUSINESS_INFO } from '../data/businessData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F7F4EF] text-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Prominent Trust Score */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#B08D57] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B08D57]" />
            <span>Client Experiences</span>
            <span className="w-6 h-[1px] bg-[#B08D57]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#222222] leading-tight">
            Loved by Our Clients
          </h2>

          {/* Trust Score Banner */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-[#77736E]">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-[#222222] tabular-nums">
                {BUSINESS_INFO.rating} / 5
              </span>
              <div className="flex text-[#B08D57]" aria-label="Rated 4.8 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B08D57] text-[#B08D57]" />
                ))}
              </div>
            </div>

            <span className="hidden sm:inline text-[#C9B9A5]" aria-hidden="true">·</span>
            
            <span className="font-medium text-[#222222]">
              <span className="tabular-nums font-semibold">{BUSINESS_INFO.reviewCount}</span> Google Reviews
            </span>

            <span className="hidden sm:inline text-[#C9B9A5]" aria-hidden="true">·</span>

            <span className="text-xs text-[#77736E]">Nagpur, Maharashtra</span>
          </div>
        </div>

        {/* 3 Verified Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VERIFIED_REVIEWS.map((review, idx) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-lg border border-[#C9B9A5]/50 flex flex-col justify-between shadow-[0_4px_24px_rgba(74,56,44,0.04)] relative"
            >
              <div>
                <Quote className="w-7 h-7 text-[#B08D57]/40 mb-4" />
                <div className="flex items-center gap-1 text-[#B08D57] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B08D57] text-[#B08D57]" />
                  ))}
                </div>
                <p className="text-base sm:text-lg font-serif-luxury text-[#222222] leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C9B9A5]/30 flex items-center justify-between text-xs text-[#77736E]">
                <span className="font-medium text-[#4A382C]">{review.context}</span>
                <span className="font-mono text-[11px] text-[#B08D57]">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* See More Reviews Button */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#222222] border border-[#222222]/40 rounded hover:border-[#222222] hover:bg-[#222222]/5 transition-all"
          >
            <span>See More Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#B08D57]" />
          </a>
        </div>

      </div>
    </section>
  );
};
