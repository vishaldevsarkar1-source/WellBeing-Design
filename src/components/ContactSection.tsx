import React, { useState } from 'react';
import { Phone, Mail, MapPin, Star, Send, CheckCircle2, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: initialProjectType || 'Home Interior',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if initialProjectType changes
  React.useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief note about your space or ideas.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate pristine UX submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const createWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello WellBeing Design, I have submitted an enquiry:\n- Name: ${formData.fullName}\n- Project Type: ${formData.projectType}\n- Phone: ${formData.phone}\n- Budget: ${formData.budget || 'Open to discussion'}\n- Message: ${formData.message}`
    );
    return `https://wa.me/919923028897?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F7F4EF] text-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Studio Information & Direct Contact */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B08D57] font-semibold mb-3">
                <span className="w-6 h-[1px] bg-[#B08D57]" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-[#222222] leading-tight">
                Let's Talk About Your Space
              </h2>
              <p className="mt-4 text-base text-[#77736E] font-light leading-relaxed">
                Whether you have an upcoming apartment handover, wish to redesign your living room, or need initial layout direction, we are ready to assist.
              </p>
            </div>

            {/* Business Contact Card */}
            <div className="bg-[#EDE7DD]/50 p-6 rounded-lg border border-[#C9B9A5]/50 space-y-5">
              <div>
                <h3 className="text-lg font-serif-luxury font-semibold text-[#222222]">
                  {BUSINESS_INFO.name}
                </h3>
                <div className="text-xs uppercase tracking-wider text-[#B08D57] font-medium">
                  {BUSINESS_INFO.category}
                </div>
              </div>

              <div className="space-y-3.5 text-sm text-[#4A382C]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm font-light leading-relaxed">
                    {BUSINESS_INFO.addressFull}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#B08D57] shrink-0" />
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={BUSINESS_INFO.telLink}
                      className="font-medium hover:text-[#B08D57] transition-colors tabular-nums"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    {BUSINESS_INFO.phoneSecondary && (
                      <>
                        <span className="text-[#C9B9A5]" aria-hidden="true">·</span>
                        <a
                          href={`tel:+91${BUSINESS_INFO.phoneSecondary.replace(/\s/g, '')}`}
                          className="font-medium hover:text-[#B08D57] transition-colors tabular-nums"
                        >
                          {BUSINESS_INFO.phoneSecondary}
                        </a>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1 border-t border-[#C9B9A5]/30">
                  <Star className="w-4 h-4 fill-[#B08D57] text-[#B08D57] shrink-0" />
                  <span className="text-xs">
                    <strong className="font-semibold text-[#222222]">{BUSINESS_INFO.rating}★</strong> · {BUSINESS_INFO.reviewCount} Google Reviews
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs uppercase tracking-wider font-semibold text-[#222222] bg-[#EDE7DD] hover:bg-[#C9B9A5]/50 border border-[#C9B9A5] rounded transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="text-xs text-[#77736E] font-light">
              * Studio visits available by appointment at Besa - Manish Nagar Rd, Nagpur.
            </div>
          </div>

          {/* Right Column: Consultation / Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-lg border border-[#C9B9A5]/50 shadow-[0_8px_30px_rgba(74,56,44,0.04)]">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-[#EDE7DD] text-[#B08D57] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-[#222222]">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm text-[#77736E] font-light max-w-md mx-auto leading-relaxed">
                    Your enquiry details have been recorded. You can also chat directly with WellBeing Design on WhatsApp or call <strong className="text-[#222222]">{BUSINESS_INFO.phoneDisplay}</strong> for immediate discussion.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={createWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward Brief to WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          projectType: 'Home Interior',
                          budget: '',
                          message: '',
                        });
                      }}
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-semibold text-[#222222] border border-[#222222]/30 rounded hover:bg-black/5 transition-colors"
                    >
                      <span>Send Another Note</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-[#C9B9A5]/30 pb-4 mb-6">
                    <h3 className="text-xl font-serif-luxury font-medium text-[#222222]">
                      Request a Consultation
                    </h3>
                    <p className="text-xs text-[#77736E] font-light mt-1">
                      Share basic details about your space. We'll connect with helpful design suggestions.
                    </p>
                  </div>

                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-wider text-[#4A382C] mb-1.5">
                        Full Name <span className="text-[#B08D57]">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sneha Sharma"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F4EF]/60 border rounded-md focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#C9B9A5]/70 focus:border-[#222222]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-[#4A382C] mb-1.5">
                        Phone Number <span className="text-[#B08D57]">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 099230 28897"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F4EF]/60 border rounded-md focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#C9B9A5]/70 focus:border-[#222222]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-[#4A382C] mb-1.5">
                        Email Address <span className="text-[#B08D57]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@example.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F4EF]/60 border rounded-md focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#C9B9A5]/70 focus:border-[#222222]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-xs font-medium uppercase tracking-wider text-[#4A382C] mb-1.5">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F7F4EF]/60 border border-[#C9B9A5]/70 rounded-md focus:outline-none focus:border-[#222222] transition-colors"
                      >
                        <option value="Home Interior">Home Interior</option>
                        <option value="Apartment Interior">Apartment Interior</option>
                        <option value="Living Room">Living Room</option>
                        <option value="Bedroom">Bedroom</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Commercial Space">Commercial Space</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Approximate Budget (Optional) */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="budget" className="block text-xs font-medium uppercase tracking-wider text-[#4A382C]">
                        Approximate Budget (Optional)
                      </label>
                      <span className="text-[11px] text-[#77736E] font-light">Flexible / To be discussed</span>
                    </div>
                    <input
                      id="budget"
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g. ₹5 Lakhs - ₹15 Lakhs or Open to guidance"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F7F4EF]/60 border border-[#C9B9A5]/70 rounded-md focus:outline-none focus:border-[#222222] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-[#4A382C] mb-1.5">
                      Tell us about your space & requirements <span className="text-[#B08D57]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the rooms, preferred style, location in Nagpur, or timeline..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#F7F4EF]/60 border rounded-md focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#C9B9A5]/70 focus:border-[#222222]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs uppercase tracking-wider font-semibold text-white bg-[#222222] hover:bg-[#4A382C] active:scale-[0.99] rounded transition-all shadow-md disabled:opacity-70 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-[#C9B9A5]" />
                      <span>{isSubmitting ? 'Recording Enquiry...' : 'Send Enquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
