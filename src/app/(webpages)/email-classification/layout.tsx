import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI-Driven Email Classification for Businesses",
  description: "Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity.",
  keywords: "Email Classification, AI-driven workflow, ERPNext, intent classification, data extraction, lead management, automated data capture, natural language processing, CRM, end-to-end automation",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://web.finbyz.tech/email-classification",
  },
  openGraph: {
    title: "AI-Driven Email Classification for Businesses",
    description: "Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity.",
    url: "https://web.finbyz.tech/email-classification",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Driven Email Classification for Businesses",
    description: "Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity.",
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
    "name": "AI-Driven Email Classification for Businesses",
    "description": "Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity.",
    "url": "https://web.finbyz.tech/email-classification",
    
    "keywords": "Email Classification, AI-driven workflow, ERPNext, intent classification, data extraction, lead management, automated data capture, natural language processing, CRM, end-to-end automation",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "AI-Driven Email Classification for Businesses",
      "description": "Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity.",
      "articleBody": "Email Classification\nOverview\nEmail Classification is an AI-driven workflow designed to automate the handling of incoming email inquiries efficiently and accurately. By integrating deeply with ERPNext, this solution enables businesses to quickly categorize emails based on their intent, extract vital contact and inquiry details, and automatically create or update leads and contacts in the ERP system. This automation eliminates manual inbox sorting and data entry, allowing sales and support teams ",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-14T12:21:08.459Z",
      "dateModified": "2025-10-14T12:21:08.459Z",
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
        <meta itemProp="name" content="AI-Driven Email Classification for Businesses" />
        <meta itemProp="description" content="Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
