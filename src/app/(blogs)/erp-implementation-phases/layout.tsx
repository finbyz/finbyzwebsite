import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERP Implementation Life Cycle: Comprehensive Guide to ERP Implementation Phases",
  description: "ERP has several implementation phases like finding out the right software,project planning,gap analysis",
  keywords: "erp implementation life cycle, ERP Implementation Phase, different phases of erp implementation, implementation phases of erp, phases of erp implementation life cycle, erp implementation cycle, erp life cycle phases, steps in erp implementation life cycle, phases of erp implementation",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-implementation-phases",
  },
  openGraph: {
    title: "ERP Implementation Life Cycle: Comprehensive Guide to ERP Implementation Phases",
    description: "ERP has several implementation phases like finding out the right software,project planning,gap analysis",
    url: "https://web.finbyz.tech/erp-implementation-phases",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Implementation Life Cycle: Comprehensive Guide to ERP Implementation Phases",
    description: "ERP has several implementation phases like finding out the right software,project planning,gap analysis",
    creator: "@finbyz",
    
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
    "name": "ERP Implementation Life Cycle: Comprehensive Guide to ERP Implementation Phases",
    "description": "ERP has several implementation phases like finding out the right software,project planning,gap analysis",
    "url": "https://web.finbyz.tech/erp-implementation-phases",
    
    "keywords": "erp implementation life cycle, ERP Implementation Phase, different phases of erp implementation, implementation phases of erp, phases of erp implementation life cycle, erp implementation cycle, erp life cycle phases, steps in erp implementation life cycle, phases of erp implementation",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERP Implementation Life Cycle: Comprehensive Guide to ERP Implementation Phases",
      "description": "ERP has several implementation phases like finding out the right software,project planning,gap analysis",
      "articleBody": "<section class=\"\">\n    <div class=\"tech_update\">\n        <div class=\"container-fluid\">\n            <div class=\"row p-lr-50\">\n                <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"Phases of ERP Implementation life cycle\"\n                        title=\"Phases of ERP Implementation life cycle\" height=\"100%\"\n                        src=\"/files/Phases_of_ERP_Implementation.svg\" width=\"100%\"></div>\n            </div>\n        </div>\n    </div>\n</section>\n<section>\n      ",
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
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="ERP Implementation Life Cycle: Comprehensive Guide to ERP Implementation Phases" />
        <meta itemProp="description" content="ERP has several implementation phases like finding out the right software,project planning,gap analysis" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
