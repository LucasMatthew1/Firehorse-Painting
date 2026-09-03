import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyFireHorse } from "@/components/WhyFireHorse";
import { Gallery } from "@/components/Gallery";
import { Process } from "@/components/Process";
import { CtaBanner } from "@/components/CtaBanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { EstimateModal } from "@/components/EstimateModal";
import { MobileCallBar } from "@/components/MobileCallBar";

const Index: React.FC = () => {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState("Exterior Home");

  const handleOpenEstimateModal = (projectType?: string) => {
    if (projectType) {
      setSelectedProjectType(projectType);
    }
    setIsEstimateModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedProjectType(serviceName);
    setIsEstimateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] text-slate-100 flex flex-col selection:bg-orange-600 selection:text-white">
      {/* Top Header */}
      <Header onOpenEstimateModal={() => handleOpenEstimateModal()} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenEstimateModal={() => handleOpenEstimateModal()} />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Why FireHorse Painting */}
        <WhyFireHorse onOpenEstimateModal={() => handleOpenEstimateModal()} />

        {/* Project Gallery & Before/After */}
        <Gallery onOpenEstimateModal={handleOpenEstimateModal} />

        {/* Process Section */}
        <Process onOpenEstimateModal={() => handleOpenEstimateModal()} />

        {/* CTA Banner */}
        <CtaBanner onOpenEstimateModal={() => handleOpenEstimateModal()} />

        {/* Contact Form Section */}
        <Contact initialProjectType={selectedProjectType} />
      </main>

      {/* Footer */}
      <Footer onOpenEstimateModal={() => handleOpenEstimateModal()} />

      {/* Floating Bottom Quick Action Bar on Mobile */}
      <MobileCallBar onOpenEstimateModal={() => handleOpenEstimateModal()} />

      {/* Interactive Free Estimate Request Modal */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        defaultProjectType={selectedProjectType}
      />
    </div>
  );
};

export default Index;
