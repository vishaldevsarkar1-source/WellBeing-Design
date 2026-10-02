import React, { useState, useEffect, useRef } from 'react';
import { Star, MapPin, HeartHandshake, CheckCircle2, Upload, Camera, RefreshCw } from 'lucide-react';
import wellbeingBedroomOriginal from '../assets/images/wellbeing_bedroom_original.webp';
import { BUSINESS_INFO } from '../data/businessData';

export const BrandStory: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string>(wellbeingBedroomOriginal);
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('wellbeing_bedroom_exact_photo');
      if (savedPhoto) {
        setActiveImage(savedPhoto);
        setIsCustomPhoto(true);
      }
    } catch {
      // Ignore localStorage errors in restricted contexts
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setActiveImage(result);
          setIsCustomPhoto(true);
          try {
            localStorage.setItem('wellbeing_bedroom_exact_photo', result);
          } catch {
            // Quota or storage exception handling
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setActiveImage(wellbeingBedroomOriginal);
    setIsCustomPhoto(false);
    try {
      localStorage.removeItem('wellbeing_bedroom_exact_photo');
    } catch {
      // Ignore
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F7F4EF] text-[#222222] border-b border-[#C9B9A5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Brand Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
              <span className="w-6 h-[1px] bg-[#B08D57]" />
              <span>Studio Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#222222] leading-[1.15] text-balance">
              Designing Spaces That Feel Like You
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#77736E] font-light leading-relaxed">
              <p>
                At WellBeing Design, we believe a beautiful interior should do more than look good—it should feel right. Every space deserves thoughtful planning, practical functionality, and a design language that reflects the people who live or work there.
              </p>
              <p>
                From concept and color palettes to furniture, lighting, finishes, and spatial details, our approach focuses on creating interiors that balance aesthetics with everyday living.
              </p>
            </div>

            {/* Subtle Values List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#222222]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span className="font-medium">Budget-Conscious Guidance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span className="font-medium">Personalized Living Concepts</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span className="font-medium">Balanced Practical Layouts</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span className="font-medium">LGBTQ+ Friendly Studio</span>
              </div>
            </div>

            {/* Stat-Style Trust Section */}
            <div className="pt-6 border-t border-[#C9B9A5]/40 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-[#222222] tabular-nums">
                    {BUSINESS_INFO.rating}
                  </span>
                  <Star className="w-4 h-4 fill-[#B08D57] text-[#B08D57] inline" />
                </div>
                <div className="text-xs text-[#77736E] uppercase tracking-wider mt-1 font-medium">
                  Google Rating
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-[#222222] tabular-nums">
                  {BUSINESS_INFO.reviewCount}
                </div>
                <div className="text-xs text-[#77736E] uppercase tracking-wider mt-1 font-medium">
                  Google Reviews
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-serif-luxury font-semibold text-[#222222]">
                    Nagpur
                  </span>
                  <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
                </div>
                <div className="text-xs text-[#77736E] uppercase tracking-wider mt-1 font-medium">
                  Maharashtra, India
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Image */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-[0_12px_40px_rgba(74,56,44,0.08)] border border-[#C9B9A5]/40 bg-[#EDE7DD] group">
                <img
                  src={activeImage}
                  alt="WellBeing Design modern bedroom project featuring rich teal accent wall with lower marble wainscoting and warm ambient LED lighting"
                  className="w-full h-[400px] sm:h-[500px] object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Direct Upload / Exact Photo Control Bar */}
                <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                    id="brandstory-image-upload"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#222222]/85 hover:bg-[#222222] text-white text-[11px] font-sans uppercase tracking-wider font-semibold rounded-md shadow-md backdrop-blur-xs transition-colors cursor-pointer"
                    title="Select your original photo file directly"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#C9B9A5]" />
                    <span>{isCustomPhoto ? 'Change Photo' : 'Upload Exact Photo'}</span>
                  </button>

                  {isCustomPhoto && (
                    <button
                      type="button"
                      onClick={handleResetPhoto}
                      className="p-1.5 bg-[#222222]/80 hover:bg-[#222222] text-[#C9B9A5] hover:text-white rounded-md transition-colors cursor-pointer"
                      title="Reset to default photo"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {isCustomPhoto && (
                  <div className="absolute top-3 left-3 bg-emerald-800/90 text-white text-[10px] font-sans tracking-wider uppercase px-2.5 py-1 rounded backdrop-blur-xs">
                    Original Studio Photo
                  </div>
                )}
              </div>

              {/* Floating Architectural Note */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#F7F4EF] p-5 rounded-md shadow-lg border border-[#C9B9A5]/50 max-w-xs">
                <p className="text-xs font-serif-luxury italic text-[#4A382C] leading-snug">
                  "Every space deserves thoughtful planning, practical functionality, and a design language that reflects the people who live or work there."
                </p>
                <div className="mt-2 text-[11px] font-sans tracking-wider uppercase text-[#77736E]">
                  — WellBeing Design Studio · Nagpur
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

