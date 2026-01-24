import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Begin Your Digital Transformation Journey with ERPNext Adoption",
  description: "Unlock business growth with expert ERPNext adoption and digital transformation services. Guided implementation for every stage of your business journey.",
  keywords: "ERPNext adoption, digital transformation, ERP implementation, business growth solutions, customized ERP, ERP consulting, software development services, business process automation, ERP integration, cloud ERP solutions, industry-specific ERP, AI automation, Finbyz Tech ERP, enterprise resource planning",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/erpnext/services/start-your-erp-journey",
  },
  openGraph: {
    title: "Begin Your Digital Transformation Journey with ERPNext Adoption",
    description: "Unlock business growth with expert ERPNext adoption and digital transformation services. Guided implementation for every stage of your business journey.",
    url: "https://finbyz.tech/erpnext/services/start-your-erp-journey",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Begin Your Digital Transformation Journey with ERPNext Adoption",
    description: "Unlock business growth with expert ERPNext adoption and digital transformation services. Guided implementation for every stage of your business journey.",
    creator: "@finbyztech",
    
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Begin Your Digital Transformation Journey with ERPNext Adoption",
    "description": "Unlock business growth with expert ERPNext adoption and digital transformation services. Guided implementation for every stage of your business journey.",
    "url": "https://finbyz.tech/start-your-erp-journey",
    
    "keywords": "ERPNext adoption, digital transformation, ERP implementation, business growth solutions, customized ERP, ERP consulting, software development services, business process automation, ERP integration, cloud ERP solutions, industry-specific ERP, AI automation, Finbyz Tech ERP, enterprise resource planning",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Begin Your Digital Transformation Journey with ERPNext Adoption",
      "description": "Unlock business growth with expert ERPNext adoption and digital transformation services. Guided implementation for every stage of your business journey.",
      "articleBody": "Guided ERPNext adoption and digital transformation for businesses at every stage of implementation.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-28T09:12:51.634Z",
      "dateModified": "2025-10-28T09:12:51.634Z",
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Begin Your Digital Transformation Journey with ERPNext Adoption" />
        <meta itemProp="description" content="Unlock business growth with expert ERPNext adoption and digital transformation services. Guided implementation for every stage of your business journey." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
