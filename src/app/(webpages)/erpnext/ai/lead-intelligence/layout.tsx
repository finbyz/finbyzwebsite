import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Lead Intelligence: Revolutionizing Inquiry Processing with AI ",
  description: "Lead Intelligence by FinByz Tech leverages AI to automate inquiry email capture, classification, and CRM data creation. It intelligently extracts customer details, prevents duplicates, and ensures every lead is tracked within ERPNext. Empower your sales team with real-time insights, improved data accuracy, and complete pipeline visibility — all driven by intelligent automation.",
  keywords: "",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/lead-intelligence",
  },
  openGraph: {
    title: "Lead Intelligence: Revolutionizing Inquiry Processing with AI ",
    description: "Lead Intelligence by FinByz Tech leverages AI to automate inquiry email capture, classification, and CRM data creation. It intelligently extracts customer details, prevents duplicates, and ensures every lead is tracked within ERPNext. Empower your sales team with real-time insights, improved data accuracy, and complete pipeline visibility — all driven by intelligent automation.",
    url: "https://finbyz.tech/lead-intelligence",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Intelligence: Revolutionizing Inquiry Processing with AI ",
    description: "Lead Intelligence by FinByz Tech leverages AI to automate inquiry email capture, classification, and CRM data creation. It intelligently extracts customer details, prevents duplicates, and ensures every lead is tracked within ERPNext. Empower your sales team with real-time insights, improved data accuracy, and complete pipeline visibility — all driven by intelligent automation.",
    creator: "@finbyz",
    
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "http://www.schema.org",
  "@type": "ProfessionalService",
  "name": "Lead Intelligence: Revolutionizing Inquiry Processing with AI ",
  "url": "https://finbyz.tech/lead-intelligence",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "None",
  "description": "Lead Intelligence by FinByz Tech leverages AI to automate inquiry email capture, classification, and CRM data creation. It intelligently extracts customer details, prevents duplicates, and ensures every lead is tracked within ERPNext. Empower your sales team with real-time insights, improved data accuracy, and complete pipeline visibility — all driven by intelligent automation.",
  "priceRange": "INR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "FinByz Tech Pvt Ltd, 504-Addor Ambition, Nr. Navrang Circle, Navrangpura, Ahmedabad, Gujarat 380009",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "addressCountry": "IN",
    "postalCode": "380009"
  },
  "telephone": "+919925701446",
  "openingHours": "Mo, Tu, We, Th, Fr, Sa 10.00:00-19:00",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91 7948912428",
      "contactType": "customer support",
      "areaServed": [
        "IN"
      ],
      "availableLanguage": [
        "Hindi",
        "Gujarati",
        "English"
      ]
    }
  ],
  "sameAs": [
    "https://www.facebook.com/FinByz",
    "https://twitter.com/FinByz",
    "https://www.linkedin.com/company/finbyz",
    "https://www.youtube.com/c/Finbyz",
    "https://www.instagram.com/finbyz/"
  ]
};
  const data = await getPageData("Web Page", "erpnext/ai/lead-intelligence");
  const faqsGroup = await getFaqs("Web Page", "erpnext/ai/lead-intelligence");
  
  return (
    <>
      {/* JSON-LD structured data for LLMs */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Semantic HTML wrapper for better content extraction */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Lead Intelligence: Revolutionizing Inquiry Processing with AI " />
        <meta itemProp="description" content="Lead Intelligence by FinByz Tech leverages AI to automate inquiry email capture, classification, and CRM data creation. It intelligently extracts customer details, prevents duplicates, and ensures every lead is tracked within ERPNext. Empower your sales team with real-time insights, improved data accuracy, and complete pipeline visibility — all driven by intelligent automation." />
      </article>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
