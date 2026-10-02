import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectType?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultProjectType = 'Home Interior',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: defaultProjectType,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (defaultProjectType) {
      setFormData((prev) => ({ ...prev, projectType: defaultProjectType }));
    }
  }, [defaultProjectType]);

  if (!isOpen) return null;

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.fullName.trim()) err.fullName = 'Please enter your name';
    if (!formData.phone.trim()) err.phone = 'Please provide your phone number';
    else if (formData.phone.replace(/\D/g, '').length < 10) err.phone = 'Valid 10-digit number needed';
    if (!formData.email.trim()) err.email = 'Please provide your email address';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) err.email = 'Valid email required';
    if (!formData.message.trim()) err.message = 'Please provide brief details about your space';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#222222]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#F7F4EF] rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#C9B9A5] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-1.5 text-[#77736E] hover:text-[#222222] transition-colors rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 bg-[#EDE7DD] text-[#B08D57] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif-luxury font-medium text-[#222222]">
              Enquiry Received
            </h3>
            <p className="text-xs sm:text-sm text-[#77736E] font-light leading-relaxed">
              Thank you for considering WellBeing Design. Our studio team will review your space details and get in touch with design ideas.
            </p>
            <div className="pt-3 flex flex-col gap-2">
              <a
                href={`https://wa.me/919923028897?text=${encodeURIComponent(
                  `Hi WellBeing Design, I submitted an enquiry for ${formData.projectType} from ${formData.fullName} (${formData.phone}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs uppercase tracking-wider font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="py-2 text-xs text-[#77736E] hover:text-[#222222]"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#B08D57] block">
                Design Consultation
              </span>
              <h3 className="text-2xl font-serif-luxury font-medium text-[#222222]">
                Book a Consultation
              </h3>
              <p className="text-xs text-[#77736E] font-light mt-1">
                WellBeing Design · Manish Nagar / Besa, Nagpur
              </p>
            </div>

            <div>
              <label htmlFor="modal-name" className="block text-xs uppercase font-medium text-[#4A382C] mb-1">
                Full Name *
              </label>
              <input
                id="modal-name"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Your name"
                className="w-full px-3 py-2 text-sm bg-white border border-[#C9B9A5] rounded focus:outline-none focus:border-[#222222]"
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-0.5">{errors.fullName}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="modal-phone" className="block text-xs uppercase font-medium text-[#4A382C] mb-1">
                  Phone Number *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="099230 28897"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#C9B9A5] rounded focus:outline-none focus:border-[#222222]"
                />
                {errors.phone && <p className="text-xs text-red-600 mt-0.5">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-xs uppercase font-medium text-[#4A382C] mb-1">
                  Email Address *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@email.com"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#C9B9A5] rounded focus:outline-none focus:border-[#222222]"
                />
                {errors.email && <p className="text-xs text-red-600 mt-0.5">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="modal-type" className="block text-xs uppercase font-medium text-[#4A382C] mb-1">
                Project Type
              </label>
              <select
                id="modal-type"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-white border border-[#C9B9A5] rounded focus:outline-none focus:border-[#222222]"
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

            <div>
              <label htmlFor="modal-message" className="block text-xs uppercase font-medium text-[#4A382C] mb-1">
                Space Details or Questions *
              </label>
              <textarea
                id="modal-message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Number of rooms, floor area, layout thoughts..."
                className="w-full px-3 py-2 text-sm bg-white border border-[#C9B9A5] rounded focus:outline-none focus:border-[#222222] resize-none"
              />
              {errors.message && <p className="text-xs text-red-600 mt-0.5">{errors.message}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold text-white bg-[#222222] hover:bg-[#4A382C] rounded transition-colors shadow cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#C9B9A5]" />
                <span>{loading ? 'Submitting...' : 'Submit Consultation Request'}</span>
              </button>
            </div>

            <div className="pt-2 text-center">
              <a
                href={BUSINESS_INFO.telLink}
                className="inline-flex items-center gap-1.5 text-xs text-[#4A382C] hover:text-[#222222]"
              >
                <Phone className="w-3 h-3 text-[#B08D57]" />
                <span>Prefer to call immediately? Dial {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
