import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Customized ERP Software | ERP system customization",
  description: "Discover tailored solutions with customized ERP software and custom ERP system customization services. Optimize your business processes today.",
  keywords: "ERP Software for Industries, Customized ERP for Industries, ERP System for Industry, erp software for small scale industries, customized ERP software for industries, Industrial ERP, ERP for industry, customized ERP, erp software for industries in ahmedabad, customized erp software for industries in ahmedabad, industrial erp software in ahmedabad,customized erp software\ncustom erp,erp system customization",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-for-industry",
  },
  openGraph: {
    title: "Customized ERP Software | ERP system customization",
    description: "Discover tailored solutions with customized ERP software and custom ERP system customization services. Optimize your business processes today.",
    url: "https://web.finbyz.tech/erp-for-industry",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/INDUSTRY.svg", width: 1200, height: 630, alt: "Customized ERP Software | ERP system customization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customized ERP Software | ERP system customization",
    description: "Discover tailored solutions with customized ERP software and custom ERP system customization services. Optimize your business processes today.",
    creator: "@yourhandle",
    images: ["/files/INDUSTRY.svg"],
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
    "name": "Customized ERP Software | ERP system customization",
    "description": "Discover tailored solutions with customized ERP software and custom ERP system customization services. Optimize your business processes today.",
    "url": "https://web.finbyz.tech/erp-for-industry",
    "image": "/files/INDUSTRY.svg",
    "keywords": "ERP Software for Industries, Customized ERP for Industries, ERP System for Industry, erp software for small scale industries, customized ERP software for industries, Industrial ERP, ERP for industry, customized ERP, erp software for industries in ahmedabad, customized erp software for industries in ahmedabad, industrial erp software in ahmedabad,customized erp software\ncustom erp,erp system customization",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Customized ERP Software | ERP system customization",
      "description": "Discover tailored solutions with customized ERP software and custom ERP system customization services. Optimize your business processes today.",
      
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
        <meta itemProp="name" content="Customized ERP Software | ERP system customization" />
        <meta itemProp="description" content="Discover tailored solutions with customized ERP software and custom ERP system customization services. Optimize your business processes today." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
