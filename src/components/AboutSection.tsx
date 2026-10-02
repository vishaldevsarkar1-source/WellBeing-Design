import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Heart, Sparkles, PhoneCall, Upload, RefreshCw } from 'lucide-react';
import wellbeingBedroomOriginal from '../assets/images/wellbeing_bedroom_original.webp';
import { BUSINESS_INFO } from '../data/businessData';

export const AboutSection: React.FC = () => {
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
      // Ignore
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
            // Ignore
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
    <section className="py-20 sm:py-28 bg-[#EDE7DD]/35 text-[#222222] border-t border-[#C9B9A5]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Asset */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-[#C9B9A5]/50 shadow-[0_12px_40px_rgba(74,56,44,0.06)] bg-[#EDE7DD] group">
              <img
                src={activeImage}
                alt="WellBeing Design bedroom interior featuring rich teal wall, marble wainscoting with warm concealed LED glow, and art lighting"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center"
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
                  id="aboutsection-image-upload"
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

              <div className="absolute bottom-4 left-4 right-4 bg-[#F7F4EF]/95 backdrop-blur-xs p-4 rounded border border-[#C9B9A5]/40 text-xs text-[#4A382C]">
                <div className="font-semibold uppercase tracking-wider text-[11px] text-[#B08D57] mb-1">
                  Residential Bedroom Project · Nagpur
                </div>
                <div>Teal Accent Wall, Marble Wainscoting & Ambient Lighting · Besa / Manish Nagar</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B08D57] font-semibold">
              <span className="w-6 h-[1px] bg-[#B08D57]" />
              <span>Studio Profile</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#222222] leading-tight">
              About WellBeing Design
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#77736E] font-light leading-relaxed">
              <p>
                WellBeing Design is an interior-design studio in Nagpur focused on creating beautiful, functional, and thoughtfully considered spaces. Our approach brings together design aesthetics, practical planning, and personalized ideas to help transform everyday spaces into environments that feel comfortable and inspiring.
              </p>
              <p>
                Whether assisting with a single room makeover, living room layout, or holistic residential planning, we believe in open communication, budget discipline, and genuine design care.
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#222222]">
                <MapPin className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span>
                  Based in <strong className="font-semibold text-[#4A382C]">Besa / Manish Nagar, Nagpur, Maharashtra</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#222222]">
                <Heart className="w-4 h-4 text-[#B08D57] shrink-0" />
                <span>An inclusive, welcoming, and LGBTQ+ friendly interior design studio</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href={BUSINESS_INFO.telLink}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#222222] hover:bg-[#4A382C] rounded transition-colors shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C9B9A5]" />
                <span>Speak with Our Studio</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
