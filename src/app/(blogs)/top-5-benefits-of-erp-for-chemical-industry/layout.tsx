import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Unveiling the Top 5 Benefits of ERP for the Chemical Industry",
  description: "Maintaining safety standards, Strict Governance, Managing regulations, Real-time information of Manufacturing, R & D.",
  keywords: "chemical industries,\nchemical manufacturing,\nchemical ERP System, \nERP for Chemical,\nsample managements,",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/top-5-benefits-of-erp-for-chemical-industry",
  },
  openGraph: {
    title: "Unveiling the Top 5 Benefits of ERP for the Chemical Industry",
    description: "Maintaining safety standards, Strict Governance, Managing regulations, Real-time information of Manufacturing, R & D.",
    url: "https://web.finbyz.tech/top-5-benefits-of-erp-for-chemical-industry",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Unveiling the Top 5 Benefits of ERP for the Chemical Industry",
    description: "Maintaining safety standards, Strict Governance, Managing regulations, Real-time information of Manufacturing, R & D.",
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
    "name": "Unveiling the Top 5 Benefits of ERP for the Chemical Industry",
    "description": "Maintaining safety standards, Strict Governance, Managing regulations, Real-time information of Manufacturing, R & D.",
    "url": "https://web.finbyz.tech/top-5-benefits-of-erp-for-chemical-industry",
    
    "keywords": "chemical industries,\nchemical manufacturing,\nchemical ERP System, \nERP for Chemical,\nsample managements,",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Unveiling the Top 5 Benefits of ERP for the Chemical Industry",
      "description": "Maintaining safety standards, Strict Governance, Managing regulations, Real-time information of Manufacturing, R & D.",
      "articleBody": "<section>\n    <div class=\"container-fluid\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"Top 5 Benefits of ERP for Chemical Industry\"\n                    height=\"100%\" src=\"/files/chemical-banner.svg\" title=\"Top 5 Benefits of ERP for Chemical Industry\"\n                    width=\"100%\"></div>\n\n        </div>\n    </div>\n\n\n</section>\n<section class=\"mt-50\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n        ",
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
        <meta itemProp="name" content="Unveiling the Top 5 Benefits of ERP for the Chemical Industry" />
        <meta itemProp="description" content="Maintaining safety standards, Strict Governance, Managing regulations, Real-time information of Manufacturing, R & D." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
