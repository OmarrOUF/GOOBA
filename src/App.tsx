import React, { useState } from 'react';
import { Header } from './components/Header';
import { SideMetadata } from './components/SideMetadata';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Philosophy } from './components/Philosophy';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    setContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setContactModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#EAEAE4] text-[#292929] selection:bg-[#8C2545] selection:text-[#EAEAE4] overflow-x-hidden">
      {/* Editorial Fixed Right Metadata Bar & Left Hairline Guide */}
      <SideMetadata onOpenContact={handleOpenContact} />

      {/* Main Minimalist Header */}
      <Header onOpenContact={handleOpenContact} />

      {/* Main Content Landmarks */}
      <main id="main-content" role="main" tabIndex={-1} className="focus:outline-hidden">
        {/* Hero Section: The Asymmetric Swap (Gemstone Left, Typography Right) */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Systems & Capabilities Matrix [SYS.01 - SYS.06] */}
        <Services onOpenContact={handleOpenContact} />

        {/* Unforgettable Case Studies: GOOBA MUN Sites "5 Weeks to 5 Minutes" */}
        <CaseStudies onOpenContact={handleOpenContact} />

        {/* Core Architectural Philosophy & Manifesto */}
        <Philosophy />

        {/* Comprehensive FAQ Section */}
        <FAQ onOpenContact={handleOpenContact} />
      </main>

      {/* Editorial Footer with Global Timezones & Manifesto */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Executive Consultation Intake Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={handleCloseContact} />
    </div>
  );
}
