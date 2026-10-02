import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/businessData';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const handleStartProject = (serviceName?: string) => {
    if (onSelectService && serviceName) {
      onSelectService(serviceName);
    }
    const el = document.querySelector('#contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F7F4EF] text-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B08D57] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B08D57]" />
            <span>What We Offer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#222222] leading-tight">
            Tailored Interior Design Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#77736E] font-light leading-relaxed">
            From comprehensive residential living concepts to focused spatial consultations, we shape environments that align with your lifestyle and budget.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0 || index === 7;
            return (
              <div
                key={service.id}
                className={`group relative p-7 rounded-lg border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-[#EDE7DD]/60 border-[#C9B9A5]/80 hover:border-[#B08D57]'
                    : 'bg-white/80 border-[#C9B9A5]/40 hover:border-[#B08D57]/70 hover:bg-white'
                } hover:shadow-[0_8px_30px_rgba(74,56,44,0.06)]`}
              >
                <div>
                  {/* Clean Human Editorial Index (No mechanical slashes //) */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#77736E] mb-6">
                    <span className="tracking-wider">0{index + 1}</span>
                    <button
                      type="button"
                      onClick={() => handleStartProject(service.title)}
                      className="text-[#77736E] group-hover:text-[#B08D57] transition-colors p-1"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>

                  <h3 className="text-xl font-serif-luxury font-medium text-[#222222] group-hover:text-[#4A382C] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#77736E] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Scope points rendered as clean unboxed text with bullets */}
                <div className="mt-6 pt-5 border-t border-[#C9B9A5]/30">
                  <div className="text-[11px] font-sans tracking-wider uppercase text-[#77736E] mb-2 font-medium">
                    Core Focus:
                  </div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-[#4A382C]">
                    {service.tags.map((tag, tIndex) => (
                      <span key={tag} className="inline-flex items-center">
                        {tIndex > 0 && <span className="text-[#C9B9A5] mr-2" aria-hidden="true">·</span>}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleStartProject(service.title)}
                    className="mt-4 text-xs font-medium text-[#222222] hover:text-[#B08D57] transition-colors flex items-center gap-1 group/btn"
                  >
                    <span>Discuss this space</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B08D57] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar Below Services */}
        <div className="mt-14 sm:mt-18 p-8 sm:p-10 rounded-lg bg-[#222222] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-white">
              Have a Space in Mind? Let's Talk
            </h3>
            <p className="text-sm text-[#C9B9A5] font-light">
              Share your room dimensions, thoughts, or ideas with our studio team in Nagpur.
            </p>
          </div>

          <button
            onClick={() => handleStartProject('General Project')}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#222222] bg-[#F7F4EF] hover:bg-[#C9B9A5] active:scale-[0.98] rounded-md transition-all shadow-sm shrink-0"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 text-[#4A382C]" />
          </button>
        </div>

      </div>
    </section>
  );
};
