import React from 'react';
import { Compass, Wallet, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHY_US } from '../data/businessData';

export const WhyUsSection: React.FC = () => {
  const icons = [Compass, Wallet, UserCheck, Sparkles];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#EDE7DD]/30 text-[#222222] border-t border-[#C9B9A5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B08D57] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B08D57]" />
            <span>Our Principles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#222222] leading-tight">
            Why Choose WellBeing Design?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#77736E] font-light leading-relaxed">
            We focus on honest advice, clear communication, and creating interior spaces that elevate daily living without unnecessary complexity.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.title}
                className="bg-[#F7F4EF] p-8 rounded-lg border border-[#C9B9A5]/50 hover:border-[#B08D57] transition-all duration-300 shadow-[0_4px_20px_rgba(74,56,44,0.03)] hover:shadow-[0_8px_30px_rgba(74,56,44,0.08)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-[#EDE7DD] flex items-center justify-center text-[#B08D57] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-serif-luxury font-medium text-[#222222] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#77736E] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.note && (
                  <div className="mt-6 pt-4 border-t border-[#C9B9A5]/30 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B08D57] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#4A382C] font-light italic">
                      {item.note}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
