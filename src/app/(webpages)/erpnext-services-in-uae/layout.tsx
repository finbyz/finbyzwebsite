import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext Service Provider in Dubai | UAE-based ERP Experts",
  description: "ERPNext Service Provider in UAE: ERPNext Partner offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors.",
  keywords: "ERPNext service Provider\nERPNext service Provider in UAE\nERPNext Certified partner,\nERPNext service Provider in UAE,\nERP services in the UAE,\nERP service provider in the UAE,\nERP software for manufacturing,\nERP solutions,\nERP Agro system,\nERP for Chemical,\nERP for Healthcare,\nERP for Pharmaceutical,\nERP implementation partner,\nERP implementation,\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erpnext-services-in-uae",
  },
  openGraph: {
    title: "ERPNext Service Provider in Dubai | UAE-based ERP Experts",
    description: "ERPNext Service Provider in UAE: ERPNext Partner offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors.",
    url: "https://finbyz.tech/erpnext-services-in-uae",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Hire-ERPNext-Implementor679475.svg", width: 1200, height: 630, alt: "ERPNext Service Provider in Dubai | UAE-based ERP Experts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Service Provider in Dubai | UAE-based ERP Experts",
    description: "ERPNext Service Provider in UAE: ERPNext Partner offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors.",
    creator: "@finbyz",
    images: ["/files/Hire-ERPNext-Implementor679475.svg"],
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
  "name": "ERPNext Service Provider in Dubai | UAE-based ERP Experts",
  "url": "https://finbyz.tech/erpnext-services-in-uae",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Hire-ERPNext-Implementor679475.svg",
  "description": "ERPNext Service Provider in UAE: ERPNext Partner offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors.",
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
  const data = await getPageData("Web Page","erpnext-services-in-uae");
  const faqsGroup = await getFaqs("Web Page","erpnext-services-in-uae");
  
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
        <meta itemProp="name" content="ERPNext Service Provider in Dubai | UAE-based ERP Experts" />
        <meta itemProp="description" content="ERPNext Service Provider in UAE: ERPNext Partner offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors." />
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
