'use client'
import React, { useState } from "react";
import HeroSection from '@/components/sections/dynamic-hero';
import Section from "@/components/sections/Section";
import CTA from "@/components/sections/cta";
import DownloadSection from "@/components/ai_components/DownloadSection";
import DownloadFormModal from "@/components/ai_components/DownloadFormModal";

const brochureItems = [
  {
    title: "Company Profile",
    image: "api/fb/n/files/blog-only-for-large-businesses.svg",
    alt: "Real-time information",
    fileUrl: "api/fb/n/files/Company Profile_Finbyz Tech Pvt. Ltd..pdf"
  },
  {
    title: "Productify Brochure",
    image: "api/fb/n/files/480.svg",
    alt: "Goals & Higher Productivity",
    fileUrl: "api/fb/n/files/Productify Product Info.pdf"
  },
  {
    title: "Outsourcing Service",
    image: "api/fb/n/files/icon-supplier-management.svg",
    alt: "Improved TeamWork & Collaboration",
    fileUrl: "api/fb/n/files/Dedicated Resource Plan.pdf"
  },
  {
    title: "Exim",
    image: "api/fb/n/files/226.svg",
    alt: "Exim",
    fileUrl: "api/fb/n/files/EXIM1.pdf"
  },
  {
    title: "Chemical",
    image: "api/fb/n/files/web development.svg",
    alt: "Chemical",
    fileUrl: "api/fb/n/files/CHEMICAL1.pdf"
  },
  {
    title: "Whatsapp Integration",
    image: "api/fb/n/files/lack-of-communication.svg",
    alt: "Whatsapp Integration",
    fileUrl: "api/fb/n/files/Whatsapp Integration With ERPNext.pdf"
  }
];

const aiCrmItems = [
  {
    title: "Content Spark",
    image: "api/fb/n/files/335.svg",
    alt: "Content Spark",
    fileUrl: "api/fb/n/files/FinByz Tech - Content Spark.pdf"
  },
  {
    title: "Smart Card Scanner",
    image: "api/fb/n/files/blog-icon-innovates-your-human-resource.svg",
    alt: "Smart Card Scanner",
    fileUrl: "api/fb/n/files/smart_card_scanner.pdf"
  },
  {
    title: "Lead Enrichment",
    image: "api/fb/n/files/208.svg",
    alt: "Lead Enrichment",
    fileUrl: "api/fb/n/files/Email Classification.pdf"
  },
  {
    title: "Lead Intelligence",
    image: "api/fb/n/files/18.svg",
    alt: "Lead Intelligence",
    fileUrl: "api/fb/n/files/Lead Intelligence.pdf"
  },
  {
    title: "Quote Assistant",
    image: "api/fb/n/files/lack-of-communication.svg",
    alt: "Quote Assistant",
    fileUrl: "api/fb/n/files/Quote_Assistant.pdf"
  },
  {
    title: "Follow-Up Buddy",
    image: "api/fb/n/files/go live.svg",
    alt: "Follow-Up Buddy",
    fileUrl: "api/fb/n/files/Follow_up_Buddy.pdf"
  }
];

const aiAutomationItems = [
  {
    title: "Resume Ranker",
    image: "api/fb/n/files/79.svg",
    alt: "Resume Ranker",
    fileUrl: "api/fb/n/files/AI_Powered_Resume_Ranker (1) 1 (1).pdf"
  },
  {
    title: "Call Feedback",
    image: "api/fb/n/files/3939ac579.svg",
    alt: "Call Feedback",
    fileUrl: "api/fb/n/files/FinByz Tech - Voice Recording + AI Feedback.pdf"
  },
  {
    title: "AI Outreach",
    image: "api/fb/n/files/380.svg",
    alt: "AI Outreach",
    fileUrl: "api/fb/n/files/FinByz Tech -  AI Outreach Lead Generation + Research.pdf"
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
          action: () => {
            // Scroll to first download section
            const el = document.getElementById('brochure-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        secondaryButton={{
          text: "Contact Us",
          action: () => {
            window.location.href = '/contact';
          }
        }}
        heroImage={{
          alt: "Brochure",
          src: "api/fb/n/files/brocure banner.svg",
          
        }}
      />

      <div id="brochure-section">
        <DownloadSection
          title="Download Brochure"
          items={brochureItems}
          onDownload={handleDownload}
        />
      </div>

      <DownloadSection
        title="AI-CRM Integration with ERPNext"
        items={aiCrmItems}
        onDownload={handleDownload}
      />

      <DownloadSection
        title="AI Automations"
        items={aiAutomationItems}
        onDownload={handleDownload}
      />

      <DownloadFormModal
        open={modalOpen}
        onClose={handleModalClose}
        fileUrl={selectedFile}
        onSubmit={handleFormSubmit}
      />

      <Section>
        <div className="container-custom py-8 flex flex-col items-center text-center gap-4">
          <h2 className="text-2xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground">Contact us to learn more about our solutions or request a personalized demo.</p>
        </div>
      </Section>
      <CTA
        data={{
          subheading: {
            text: "Get Started",
            icon: "Rocket"
          },
          title: "Download, Explore, and Accelerate Your Growth!",
          description: "Access our brochures and discover how our AI-powered ERPNext solutions can help your business thrive.",
          primaryButton: {
            text: "Download Now",
            icon: "Download",
            action: () => {
              const el = document.getElementById('brochure-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          },
          secondaryButton: {
            text: "Contact Sales",
            icon: "MessageCircle",
            action: () => {
              window.location.href = '/contact';
            }
          },
          trustIndicator: {
            text: "Trusted by 100+ businesses",
            icon: "ShieldCheck"
          }
        }}
      />
    </>
  );
}
