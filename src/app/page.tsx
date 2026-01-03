import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import ClientLogos from "@/components/sections/client-logos";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import BusinessSlider from "@/components/sections/business-slider";
import InquiryForm from "@/components/ui/InquiryForm";
import { Metadata } from "next";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";


export const metadata: Metadata = {
  title: "Finbyz Tech (Finbyz®) | Official Website – ERPNext & AI Automation Experts",
  // description: "Finbyz Tech (commonly known as Finbyz) is a global ERPNext implementation partner and AI automation company. This is the official website of Finbyz Tech Pvt Ltd, serving the UK, USA, India, and worldwide.",

  description: "Finbyz Tech is a certified ERPNext implementation partner and Frappe framework experts. We deliver AI automation, ERP software solutions, and custom software development for businesses in New York, London, Dubai, Sydney, Toronto, and worldwide.",
  keywords: [
    // Primary Keywords
    "ERPNext", "ERPNext Implementation", "ERPNext Partner", "ERPNext Consultant",
    "Frappe", "Frappe Framework", "Frappe Developer",
    "ERP Software", "ERP Solutions", "ERP Implementation",
    "AI Automation", "AI Workflow Automation", "Business Process Automation",
    "Software Development", "Custom Software Development", "Software Development Company",
    // North America Cities
    "ERPNext Partner New York", "ERP Software San Francisco", "AI Automation Los Angeles",
    "ERPNext Implementation Toronto", "Software Development Chicago", "ERP Solutions Houston",
    "ERPNext Vancouver", "ERP Montreal",
    // Europe Cities
    "ERPNext Partner London", "ERP Software Berlin", "Frappe Developer Paris",
    "ERPNext Implementation Amsterdam", "AI Automation Dublin", "ERP Solutions Zurich",
    "Software Development Munich", "ERPNext Stockholm", "ERP Barcelona", "ERP Milan",
    // Middle East/Gulf Cities
    "ERPNext Partner Dubai", "ERP Software Abu Dhabi", "ERPNext Implementation Riyadh",
    "AI Automation Jeddah", "ERP Solutions Doha", "ERPNext Kuwait City",
    "Software Development Muscat", "ERP Bahrain",
    // Other Regions
    "ERPNext Partner Sydney", "ERP Software Melbourne", "ERPNext Johannesburg",
    "AI Automation Cape Town", "ERP Solutions Buenos Aires"
  ],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  openGraph: {
    title: "Finbyz Tech | ERPNext Implementation Partner & AI Automation Experts",
    description: "Transform your business with Finbyz Tech - certified ERPNext and Frappe experts. We provide ERP software implementation, AI-powered automation, and custom software development to enterprises in New York, London, Dubai, Sydney, and 50+ cities globally.",
    type: "website",
    url: "https://finbyz.tech",
    siteName: "Finbyz Tech",
    locale: "en_US",
    images: [
      {
        url: "https://finbyz.tech/images/FinbyzLogo.png",
        width: 1200,
        height: 630,
        alt: "Finbyz Tech - ERPNext Partner & AI Automation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finbyz Tech | ERPNext Partner & AI Automation Experts",
    description: "Certified ERPNext implementation partner delivering ERP software, AI automation, and custom software development to businesses worldwide.",
    images: ["https://finbyz.tech/images/FinbyzLogo.png"],
    creator: "@FinByz",
    site: "@FinByz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://finbyz.tech",
  }
};


export default async function Home() {
  const faqsGroup = await getFaqs("Web Page","homepage");
  console.log(faqsGroup)
  return (
    <div className="min-h-screen">
      <main >
        <Hero />
        <Benefits />
        <div className="[&_h2]:text-[#1A5276]">
          <ResponsiveCardGrid
            data={{
              title: "ERPNext & AI Automation Services",
              subtitle: "Partner with certified Frappe and ERPNext experts for comprehensive ERP software implementation, AI-powered automation, and custom software development solutions.",
              variant: "iconCard",
              layout: "standard",
              showImage: false,
              imageHeight: 200,
              imageWidth: 300,
              debug: false,
              cards: [
                {
                  id: 1,
                  title: "ERPNext Implementation",
                  description: "End-to-end ERPNext deployment by certified Frappe partners. From consulting to go-live, we handle configuration, data migration, and training.",
                  icon: "Cpu",
                  iconBg: "#1A5276",
                  iconColor: "#ffffff"
                },
                {
                  id: 2,
                  title: "AI Automation Solutions",
                  description: "Intelligent workflow automation powered by AI. Automate business processes, enhance decision-making, and boost operational efficiency.",
                  icon: "TrendingUp",
                  iconBg: "#FF8C00",
                  iconColor: "#ffffff"
                },
                {
                  id: 3,
                  title: "Frappe Development",
                  description: "Custom Frappe framework development for tailored ERP solutions. Build powerful business applications with open-source technology.",
                  icon: "Globe",
                  iconBg: "#27AE60",
                  iconColor: "#ffffff"
                },
                {
                  id: 4,
                  title: "ERPNext Support & Upgrades",
                  description: "24/7 ERPNext support, maintenance, and version upgrades. Keep your ERP software running smoothly with expert assistance.",
                  icon: "Target",
                  iconBg: "#8E44AD",
                  iconColor: "#ffffff"
                },
                {
                  id: 5,
                  title: "ERP Data Analytics",
                  description: "Custom reports, dashboards, and predictive analytics for ERPNext. Make data-driven decisions with intelligent business insights.",
                  icon: "BarChart3",
                  iconBg: "#FF3333",
                  iconColor: "#ffffff"
                },
                {
                  id: 6,
                  title: "Custom Software Development",
                  description: "End-to-end custom software development tailored to your business needs. From web applications to enterprise solutions.",
                  icon: "Cpu",
                  iconBg: "#FFB347",
                  iconColor: "#ffffff"
                }
              ]
            }}
          /></div>

        <BusinessSlider />

        <Testimonials />

        <ClientLogos data={{ useAPI: true, apiEndpoint: '/api/client-logos' }} />
        <CTA
          data={{
            title: "Ready to Transform Your Business with ERPNext & AI?",
            highlightText: "ERPNext & AI?",
          }}
        />


        {/* Inquiry Form */}
        <InquiryForm
          data={{
            // component_type: "Form",  
            title: "Book a Free Consultation",
            highlightText: "Book a Free Consultation",
            description: "Get started with your free demo today and discover how our solutions can transform your business",
            fields: {
              name: "Name",
              organization: "Organization Name",
              email: "Email",
              mobile: "Mobile No"
            },
            submitText: "SUBMIT"
          }}
        />

        {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      
        
    
       

        {/* Contact form (simple, compact) */}
        {/* If you want this on a separate page, we can move it to /contact */}
        {/* import ContactFormSection at top if you want to render here */}


      </main>

    </div>
  );
}

