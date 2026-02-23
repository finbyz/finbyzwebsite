'use client'
import React, { useState } from "react";
import HeroSection from '@/components/sections/dynamic-hero';
import Section from "@/components/sections/Section";

import DownloadSection from "@/components/ai_components/DownloadSection";
import DownloadFormModal from "@/components/ai_components/DownloadFormModal";

const brochureItems = [
  {
    title: "Company Profile",
    image: "/images/blog-only-for-large-businesses.svg",
    alt: "Real-time information",
    fileUrl: "/web-api/fb/n/files/Company Profile_Finbyz Tech Pvt. Ltd..pdf"
  },
  {
    title: "Productify Brochure",
    image: "/images/480.svg",
    alt: "Goals & Higher Productivity",
    fileUrl: "/web-api/fb/n/files/Productify Product Info.pdf"
  },
  {
    title: "Outsourcing Service",
    image: "/images/icon-supplier-management.svg",
    alt: "Improved TeamWork & Collaboration",
    fileUrl: "/web-api/fb/n/files/Dedicated Resource Plan.pdf"
  },
  {
    title: "Exim",
    image: "/images/226.svg",
    alt: "Exim",
    fileUrl: "/web-api/fb/n/files/EXIM1.pdf"
  },
  {
    title: "Chemical",
    image: "/images/web development.svg",
    alt: "Chemical",
    fileUrl: "/web-api/fb/n/files/CHEMICAL1.pdf"
  },
  {
    title: "Whatsapp Integration",
    image: "/images/lack-of-communication.svg",
    alt: "Whatsapp Integration",
    fileUrl: "/web-api/fb/n/files/Whatsapp Integration With ERPNext.pdf"
  }
];

const aiCrmItems = [
  {
    title: "Content Spark",
    image: "/images/335.svg",
    alt: "Content Spark",
    fileUrl: "/web-api/fb/n/files/FinByz Tech - Content Spark.pdf"
  },
  {
    title: "Smart Card Scanner",
    image: "/images/blog-icon-innovates-your-human-resource.svg",
    alt: "Smart Card Scanner",
    fileUrl: "/web-api/fb/n/files/smart_card_scanner.pdf"
  },
  {
    title: "Lead Enrichment",
    image: "/images/208.svg",
    alt: "Lead Enrichment",
    fileUrl: "/web-api/fb/n/files/Email Classification.pdf"
  },
  {
    title: "Lead Intelligence",
    image: "/images/18.svg",
    alt: "Lead Intelligence",
    fileUrl: "/web-api/fb/n/files/Lead Intelligence.pdf"
  },
  {
    title: "Quote Assistant",
    image: "/images/lack-of-communication.svg",
    alt: "Quote Assistant",
    fileUrl: "/web-api/fb/n/files/Quote_Assistant.pdf"
  },
  {
    title: "Follow-Up Buddy",
    image: "/images/go live.svg",
    alt: "Follow-Up Buddy",
    fileUrl: "/web-api/fb/n/files/Follow_up_Buddy.pdf"
  }
];

const aiAutomationItems = [
  {
    title: "Resume Ranker",
    image: "/images/79.svg",
    alt: "Resume Ranker",
    fileUrl: "/web-api/fb/n/files/AI_Powered_Resume_Ranker (1) 1 (1).pdf"
  },
  {
    title: "Call Feedback",
    image: "/images/3939ac579.svg",
    alt: "Call Feedback",
    fileUrl: "/web-api/fb/n/files/FinByz Tech - Voice Recording + AI Feedback.pdf"
  },
  {
    title: "AI Outreach",
    image: "/images/380.svg",
    alt: "AI Outreach",
    fileUrl: "/web-api/fb/n/files/FinByz Tech -  AI Outreach Lead Generation + Research.pdf"
  }
];

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  // Simulate download after form submit
  const handleDownload = (fileUrl: string) => {
    setSelectedFile(fileUrl);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedFile(null);
  };

  const handleFormSubmit = (form: { name: string; email: string; mobile: string; organization: string; fileUrl: string }) => {
    // Here you can send form data to backend or analytics
    // After submit, trigger download
    const link = document.createElement('a');
    link.href = form.fileUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setModalOpen(false);
    setSelectedFile(null);
  };

  return (
    <>
      <HeroSection
        headline="Brochure"
        highlightWords={["Brochure"]}
        description="Download our latest company profile, product brochures, and AI-powered ERPNext solutions. Explore resources to accelerate your business transformation."
        primaryButton={{
          text: "Download Brochure",
          action: '#brochure-section'
        }}
        secondaryButton={{
          text: "Contact Us",
          action: () => {
            window.location.href = '/contact';
          }
        }}
        heroImage={{
          alt: "Brochure",
          src: "/images/brocure banner.svg",
          
        }}
      />

      <div id="brochure-section" className="text-[#1A5276]">
        <DownloadSection
          title="Download Brochure"
          items={brochureItems}
          onDownload={handleDownload}
        />
      </div>
       
      <div className="text-[#1A5276]">
      <DownloadSection 
        title="AI-CRM Integration with ERPNext"
        items={aiCrmItems}
        onDownload={handleDownload}
      />
      </div>

      <div className="text-[#1A5276]">
        <DownloadSection
        title="AI Automations"
        items={aiAutomationItems}
        onDownload={handleDownload}
      />
      </div>

      <DownloadFormModal
        open={modalOpen}
        onClose={handleModalClose}
        fileUrl={selectedFile}
        onSubmit={handleFormSubmit}
      />

      <Section>
        <div className="container-custom py-8 flex flex-col items-center text-center gap-4">
          <h2 className="text-2xl font-bold text-[#1A5276]" id="download">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground">Contact us to learn more about our solutions or request a personalized demo.</p>
        </div>
      </Section>
    </>
  );
}
