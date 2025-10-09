import BusinessSlider from "@/components/sections/business-slider";
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
    canonical: "https://web.finbyz.tech/erp-software-dyechem-industry",
  },
  openGraph: {
    title: "ERP for DyeChem Industry | Dyes & Intermediates ERP Software",
    description: "ERP Software for DyeChem industry solve problems of batch-wise Inventory management, Samples management, Manufacturing of dyes and Pigment with yield, concentration and purity.",
    url: "https://web.finbyz.tech/erp-software-dyechem-industry",
    siteName: "Your Site Name",
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
  },
  
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // Structured data for LLMs and search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ERP for DyeChem Industry | Dyes & Intermediates ERP Software",
    "description": "ERP Software for DyeChem industry solve problems of batch-wise Inventory management, Samples management, Manufacturing of dyes and Pigment with yield, concentration and purity.",
    "url": "https://web.finbyz.tech/erp-software-dyechem-industry",
    "image": "/files/chemical_Module 2019-04-12 12_42_16.svg",
    "keywords": "ERP software for dye chem, dyes manufacturing software, DyeChem, Dye and Intermediate, erp chemical software,  erp software for Dyes manufacturing, Food Colour erp software, Acid Dyes erp software, Reactive Dyes ERP Software, accounting software for Dyes industry, CRM Software for Dyeschem industry",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERP for DyeChem Industry | Dyes & Intermediates ERP Software",
      "description": "ERP Software for DyeChem industry solve problems of batch-wise Inventory management, Samples management, Manufacturing of dyes and Pigment with yield, concentration and purity.",
      
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech Pvt Ltd"
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
    }
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
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
