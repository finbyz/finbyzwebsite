import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Boost Efficiency with Top Production ERP Software Solutions for Manufacturing",
  description: "Discover how production ERP software streamlines manufacturing operations, enhances resource management, and drives efficiency. Explore solu",
  keywords: " production ERP software,\nerp systems for manufacturing,\nproduction manufacturing software,\nERP for manufacturing industry, \nmanufacturing ERP",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/streamlining-manufacturing-operations-with-production-erp-software",
  },
  openGraph: {
    title: "Boost Efficiency with Top Production ERP Software Solutions for Manufacturing",
    description: "Discover how production ERP software streamlines manufacturing operations, enhances resource management, and drives efficiency. Explore solu",
    url: "https://web.finbyz.tech/streamlining-manufacturing-operations-with-production-erp-software",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Boost Efficiency with Top Production ERP Software Solutions for Manufacturing",
    description: "Discover how production ERP software streamlines manufacturing operations, enhances resource management, and drives efficiency. Explore solu",
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
    "name": "Boost Efficiency with Top Production ERP Software Solutions for Manufacturing",
    "description": "Discover how production ERP software streamlines manufacturing operations, enhances resource management, and drives efficiency. Explore solu",
    "url": "https://web.finbyz.tech/streamlining-manufacturing-operations-with-production-erp-software",
    
    "keywords": " production ERP software,\nerp systems for manufacturing,\nproduction manufacturing software,\nERP for manufacturing industry, \nmanufacturing ERP",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Boost Efficiency with Top Production ERP Software Solutions for Manufacturing",
      "description": "Discover how production ERP software streamlines manufacturing operations, enhances resource management, and drives efficiency. Explore solu",
      "articleBody": "<section>\n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup text-center\"><img alt=\"streamlining-manufacturing-operations-with-production-erp-software\"\n                    height=\"80%\" src=\"https://finbyz.tech/files/benefits-of-erp-for-manufacturing.svg\" title=\"streamlining-manufacturing-operations-with-production-erp-software\"\n                    width=\"80%\"></div>\n        </div>\n    </div>\n<br> \n<",
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
        <meta itemProp="name" content="Boost Efficiency with Top Production ERP Software Solutions for Manufacturing" />
        <meta itemProp="description" content="Discover how production ERP software streamlines manufacturing operations, enhances resource management, and drives efficiency. Explore solu" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
