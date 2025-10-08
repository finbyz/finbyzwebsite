import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top ERP Solutions for the Manufacturing Industry | Boost Efficiency & Growth",
  description: "Explore the power of ERP for manufacturing industry: Streamline operations, optimize resources, and drive growth with advanced solutions. ",
  keywords: "ERP for Manufacturing industry, \nmanufacturing ERP , \nBest ERP for manufacturing , \nERP for Manufacturing industry.",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/unlocking-efficiency-and-growth-erp-for-manufacturing-industry",
  },
  openGraph: {
    title: "Top ERP Solutions for the Manufacturing Industry | Boost Efficiency & Growth",
    description: "Explore the power of ERP for manufacturing industry: Streamline operations, optimize resources, and drive growth with advanced solutions. ",
    url: "https://web.finbyz.tech/unlocking-efficiency-and-growth-erp-for-manufacturing-industry",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top ERP Solutions for the Manufacturing Industry | Boost Efficiency & Growth",
    description: "Explore the power of ERP for manufacturing industry: Streamline operations, optimize resources, and drive growth with advanced solutions. ",
    creator: "@yourhandle",
    
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Top ERP Solutions for the Manufacturing Industry | Boost Efficiency & Growth",
    "description": "Explore the power of ERP for manufacturing industry: Streamline operations, optimize resources, and drive growth with advanced solutions. ",
    "url": "https://web.finbyz.tech/unlocking-efficiency-and-growth-erp-for-manufacturing-industry",
    
    "keywords": "ERP for Manufacturing industry, \nmanufacturing ERP , \nBest ERP for manufacturing , \nERP for Manufacturing industry.",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top ERP Solutions for the Manufacturing Industry | Boost Efficiency & Growth",
      "description": "Explore the power of ERP for manufacturing industry: Streamline operations, optimize resources, and drive growth with advanced solutions. ",
      "articleBody": "<section>\n   \n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup text-center\"><img alt=\"unlocking-efficiency-and-growth-erp-for-manufacturing-industry\" height=\"100%\" src=\"/files/17-04-24.svg\" title=\"unlocking-efficiency-and-growth-erp-for-manufacturing-industry\" width=\"90%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-5\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\"",
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
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Top ERP Solutions for the Manufacturing Industry | Boost Efficiency & Growth" />
        <meta itemProp="description" content="Explore the power of ERP for manufacturing industry: Streamline operations, optimize resources, and drive growth with advanced solutions. " />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
