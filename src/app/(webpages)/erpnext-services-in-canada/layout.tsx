import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext Service providers in Canada | ERP Implementation",
  description: "ERPNext Partners in Canada: ERPNext Service Providers offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors.",
  keywords: "ERPNext Services in Canada,\nERPNext Partners in Canada,\nERPNext Service providers in canada,\nERPNext Service provider in canada",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/erpnext-services-in-canada",
  },
  openGraph: {
    title: "ERPNext Service providers in Canada | ERP Implementation",
    description: "ERPNext Partners in Canada: ERPNext Service Providers offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors.",
    url: "https://web.finbyz.tech/erpnext-services-in-canada",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Hire-ERPNext-Implementor679475.svg", width: 1200, height: 630, alt: "ERPNext Service providers in Canada | ERP Implementation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Service providers in Canada | ERP Implementation",
    description: "ERPNext Partners in Canada: ERPNext Service Providers offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors.",
    creator: "@yourhandle",
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
  },
  other: {
    'article:content_tier': 'free',
    'article:opinion': 'false',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // Structured data for LLMs and search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ERPNext Service providers in Canada | ERP Implementation",
    "description": "ERPNext Partners in Canada: ERPNext Service Providers offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors.",
    "url": "https://web.finbyz.tech/erpnext-services-in-canada",
    "image": "/files/Hire-ERPNext-Implementor679475.svg",
    "keywords": "ERPNext Services in Canada,\nERPNext Partners in Canada,\nERPNext Service providers in canada,\nERPNext Service provider in canada",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERPNext Service providers in Canada | ERP Implementation",
      "description": "ERPNext Partners in Canada: ERPNext Service Providers offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors.",
      
      "author": {
        "@type": "Organization",
        "name": "Your Company Name"
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
        <meta itemProp="name" content="ERPNext Service providers in Canada | ERP Implementation" />
        <meta itemProp="description" content="ERPNext Partners in Canada: ERPNext Service Providers offers bespoke ERP solutions in manufacturing, agro, chemical, healthcare & pharmaceutical sectors." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
