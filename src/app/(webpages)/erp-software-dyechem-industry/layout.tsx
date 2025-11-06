import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERP for DyeChem Industry | Dyes & Intermediates ERP Software",
  description: "ERP Software for DyeChem industry solve problems of batch-wise Inventory management, Samples management, Manufacturing of dyes and Pigment with yield, concentration and purity.",
  keywords: "ERP software for dye chem, dyes manufacturing software, DyeChem, Dye and Intermediate, erp chemical software,  erp software for Dyes manufacturing, Food Colour erp software, Acid Dyes erp software, Reactive Dyes ERP Software, accounting software for Dyes industry, CRM Software for Dyeschem industry",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erp-software-dyechem-industry",
  },
  openGraph: {
    title: "ERP for DyeChem Industry | Dyes & Intermediates ERP Software",
    description: "ERP Software for DyeChem industry solve problems of batch-wise Inventory management, Samples management, Manufacturing of dyes and Pigment with yield, concentration and purity.",
    url: "https://finbyz.tech/erp-software-dyechem-industry",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/chemical_Module 2019-04-12 12_42_16.svg", width: 1200, height: 630, alt: "ERP for DyeChem Industry | Dyes & Intermediates ERP Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP for DyeChem Industry | Dyes & Intermediates ERP Software",
    description: "ERP Software for DyeChem industry solve problems of batch-wise Inventory management, Samples management, Manufacturing of dyes and Pigment with yield, concentration and purity.",
    creator: "@finbyz",
    images: ["/files/chemical_Module 2019-04-12 12_42_16.svg"],
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
  "name": "ERP for DyeChem Industry | Dyes & Intermediates ERP Software",
  "url": "https://finbyz.tech/erp-software-dyechem-industry",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/chemical_Module 2019-04-12 12_42_16.svg",
  "description": "ERP Software for DyeChem industry solve problems of batch-wise Inventory management, Samples management, Manufacturing of dyes and Pigment with yield, concentration and purity.",
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
  const data = await getPageData("Web Page","erp-software-dyechem-industry");
  const faqsGroup = await getFaqs("Web Page","erp-software-dyechem-industry");
  const faqstructureData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsGroup?.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

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
        <meta itemProp="name" content="ERP for DyeChem Industry | Dyes & Intermediates ERP Software" />
        <meta itemProp="description" content="ERP Software for DyeChem industry solve problems of batch-wise Inventory management, Samples management, Manufacturing of dyes and Pigment with yield, concentration and purity." />
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
