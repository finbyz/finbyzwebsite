import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Comprehensive Guide to ERP Implementation Methodologies: Traditional vs. Modern Approaches",
  description: "ERP implementation methodology #1 Traditional Method, #2 Turnkey Method , choosing right kind of ERP system reduces risk and losses.",
  keywords: "ERP System Implementation,\nERP Implementation methodology,\ntraditional methodology, \nturnkey  methodology",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-implementation-methodology",
  },
  openGraph: {
    title: "Comprehensive Guide to ERP Implementation Methodologies: Traditional vs. Modern Approaches",
    description: "ERP implementation methodology #1 Traditional Method, #2 Turnkey Method , choosing right kind of ERP system reduces risk and losses.",
    url: "https://web.finbyz.tech/erp-implementation-methodology",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Guide to ERP Implementation Methodologies: Traditional vs. Modern Approaches",
    description: "ERP implementation methodology #1 Traditional Method, #2 Turnkey Method , choosing right kind of ERP system reduces risk and losses.",
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
    "name": "Comprehensive Guide to ERP Implementation Methodologies: Traditional vs. Modern Approaches",
    "description": "ERP implementation methodology #1 Traditional Method, #2 Turnkey Method , choosing right kind of ERP system reduces risk and losses.",
    "url": "https://web.finbyz.tech/erp-implementation-methodology",
    
    "keywords": "ERP System Implementation,\nERP Implementation methodology,\ntraditional methodology, \nturnkey  methodology",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Comprehensive Guide to ERP Implementation Methodologies: Traditional vs. Modern Approaches",
      "description": "ERP implementation methodology #1 Traditional Method, #2 Turnkey Method , choosing right kind of ERP system reduces risk and losses.",
      "articleBody": "<section class=\"\">\n    <div class=\"tech_update\">\n        <div class=\"container-fluid\">\n            <div class=\"row p-lr-50\">\n                <div class=\"col-md-12 rollover finbyz-fadeinup\">\n                    <img alt=\"ERP Implementation Methodology\" title=\"ERP Implementation Methodology\" height=\"100%\"\n                        src=\"/files/ERP_Implement_Methodology.svg\" width=\"100%\">\n                </div>\n            </div>\n\n        </div>\n    </div>\n</section>\n<section>\n    <div class=\"row\">\n  ",
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
        <meta itemProp="name" content="Comprehensive Guide to ERP Implementation Methodologies: Traditional vs. Modern Approaches" />
        <meta itemProp="description" content="ERP implementation methodology #1 Traditional Method, #2 Turnkey Method , choosing right kind of ERP system reduces risk and losses." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
