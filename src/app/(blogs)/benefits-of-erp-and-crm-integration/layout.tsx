import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Benefits of Integrating ERP and CRM Systems for Business Growth",
  description: "With ERP and CRM Integration, not only streamline your core back-end operations but also manage all customer-centric activities with ease.",
  keywords: "ERP and CRM,\nERP and CRM integration, \nbenefits of ERP and CRM integration, \nCRM systems,\nERP ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/benefits-of-erp-and-crm-integration",
  },
  openGraph: {
    title: "Top Benefits of Integrating ERP and CRM Systems for Business Growth",
    description: "With ERP and CRM Integration, not only streamline your core back-end operations but also manage all customer-centric activities with ease.",
    url: "https://web.finbyz.tech/benefits-of-erp-and-crm-integration",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Benefits of Integrating ERP and CRM Systems for Business Growth",
    description: "With ERP and CRM Integration, not only streamline your core back-end operations but also manage all customer-centric activities with ease.",
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
    "name": "Top Benefits of Integrating ERP and CRM Systems for Business Growth",
    "description": "With ERP and CRM Integration, not only streamline your core back-end operations but also manage all customer-centric activities with ease.",
    "url": "https://web.finbyz.tech/benefits-of-erp-and-crm-integration",
    
    "keywords": "ERP and CRM,\nERP and CRM integration, \nbenefits of ERP and CRM integration, \nCRM systems,\nERP ",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top Benefits of Integrating ERP and CRM Systems for Business Growth",
      "description": "With ERP and CRM Integration, not only streamline your core back-end operations but also manage all customer-centric activities with ease.",
      "articleBody": "<section>\n    <div class=\"container-fluid\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"Benefits of ERP and CRM integration\" height=\"100%\"\n                    src=\"/files/benefits-of-erp-and-crm-integration.svg\" title=\"Benefits of ERP and CRM integration\"\n                    width=\"100%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-50\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n          ",
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
        <meta itemProp="name" content="Top Benefits of Integrating ERP and CRM Systems for Business Growth" />
        <meta itemProp="description" content="With ERP and CRM Integration, not only streamline your core back-end operations but also manage all customer-centric activities with ease." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
