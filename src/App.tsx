/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { ServicesSection } from './components/ServicesSection';
import { DesignProcess } from './components/DesignProcess';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { ConsultationCtaBanner } from './components/ConsultationCtaBanner';
import { ContactSection } from './components/ContactSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Home Interior');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setModalOpen(true);
  };

  const handleSelectServiceFromGrid = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EF] text-[#222222] selection:bg-[#B08D57]/20 selection:text-[#222222]">
      {/* Sticky Header */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main className="flex-1">
        {/* Full-Screen Hero */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* Brand Story / Introduction */}
        <BrandStory />

        {/* Tailored Services */}
        <ServicesSection onSelectService={handleSelectServiceFromGrid} />

        {/* Design Process */}
        <DesignProcess />

        {/* Portfolio & Design Inspiration Gallery */}
        <PortfolioSection />

        {/* Why Choose WellBeing Design */}
        <WhyUsSection />

        {/* Verified Google Reviews */}
        <ReviewsSection />

        {/* Studio Profile / About */}
        <AboutSection />

        {/* Consultation Call to Action Banner */}
        <ConsultationCtaBanner onRequestConsultation={() => handleOpenConsultation()} />

        {/* Contact & Consultation Form */}
        <ContactSection initialProjectType={selectedService} />

        {/* Studio Location & Map */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar (Call / WhatsApp) */}
      <MobileStickyBar />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProjectType={selectedService}
      />
    </div>
  );
}
