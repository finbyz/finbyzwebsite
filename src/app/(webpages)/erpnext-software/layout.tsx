import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext: Free and Open Source Cloud ERP Software\n",
  description: "Discover ERPNext System - your ultimate ERP solution. Explore the ERP system to streamline operations and enhance efficiency. Join now!",
  keywords: "ERPNext Software,\nERPNext,\nERPNext System,\nERP Software",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/erpnext-software",
  },
  openGraph: {
    title: "ERPNext: Free and Open Source Cloud ERP Software\n",
    description: "Discover ERPNext System - your ultimate ERP solution. Explore the ERP system to streamline operations and enhance efficiency. Join now!",
    url: "https://web.finbyz.tech/erpnext-software",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Hire-ERPNext-Implementor679475.svg", width: 1200, height: 630, alt: "ERPNext: Free and Open Source Cloud ERP Software\n" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext: Free and Open Source Cloud ERP Software\n",
    description: "Discover ERPNext System - your ultimate ERP solution. Explore the ERP system to streamline operations and enhance efficiency. Join now!",
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
    "name": "ERPNext: Free and Open Source Cloud ERP Software\n",
    "description": "Discover ERPNext System - your ultimate ERP solution. Explore the ERP system to streamline operations and enhance efficiency. Join now!",
    "url": "https://web.finbyz.tech/erpnext-software",
    "image": "/files/Hire-ERPNext-Implementor679475.svg",
    "keywords": "ERPNext Software,\nERPNext,\nERPNext System,\nERP Software",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERPNext: Free and Open Source Cloud ERP Software\n",
      "description": "Discover ERPNext System - your ultimate ERP solution. Explore the ERP system to streamline operations and enhance efficiency. Join now!",
      
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
        <meta itemProp="name" content="ERPNext: Free and Open Source Cloud ERP Software\n" />
        <meta itemProp="description" content="Discover ERPNext System - your ultimate ERP solution. Explore the ERP system to streamline operations and enhance efficiency. Join now!" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
