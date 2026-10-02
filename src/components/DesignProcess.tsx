import React from 'react';
import { DESIGN_PROCESS } from '../data/businessData';

export const DesignProcess: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#EDE7DD]/40 text-[#222222] border-t border-b border-[#C9B9A5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#B08D57] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B08D57]" />
            <span>How We Collaborate</span>
            <span className="w-6 h-[1px] bg-[#B08D57]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#222222] leading-tight">
            From Idea to Beautiful Space
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#77736E] font-light leading-relaxed">
            A clear, collaborative approach that ensures your preferences, budget, and daily living needs remain at the heart of every design decision.
          </p>
        </div>

        {/* 4 Process Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {DESIGN_PROCESS.map((stage, idx) => (
            <div
              key={stage.step}
              className="relative p-7 bg-[#F7F4EF] rounded-lg border border-[#C9B9A5]/40 flex flex-col justify-between hover:border-[#B08D57] transition-all duration-300"
            >
              <div>
                {/* Stage Number in Editorial Serif */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-serif-luxury font-medium text-[#B08D57]">
                    {stage.step}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#77736E]">
                    Stage 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-serif-luxury font-medium text-[#222222] mb-3">
                  {stage.title}
                </h3>

                <p className="text-sm text-[#77736E] font-light leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Deliverable focus */}
              <div className="mt-6 pt-4 border-t border-[#C9B9A5]/30">
                <span className="text-[11px] uppercase tracking-wider font-medium text-[#4A382C] block">
                  Key Focus:
                </span>
                <span className="text-xs text-[#77736E] font-light mt-1 block">
                  {stage.deliverables}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Process Note */}
        <div className="mt-12 text-center text-xs text-[#77736E] max-w-xl mx-auto font-light">
          * Each stage is adapted to your specific space, whether you need single-room advice or complete home spatial planning.
        </div>

      </div>
    </section>
  );
};
