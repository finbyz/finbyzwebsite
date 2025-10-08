import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How ERP Software Revolutionizes Business Operations: A Comprehensive Guide",
  description: "ERP Software can optimize your business resources to deliver increased supply chain visibility, improved productivity, better customer satis",
  keywords: "supply chain management,\nEnterprise Resource Planning (ERP),\nERP solution,\nERP Software,\nERP Could,\nCRM software,\nERP system ",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/how-erp-software-can-change-your-business",
  },
  openGraph: {
    title: "How ERP Software Revolutionizes Business Operations: A Comprehensive Guide",
    description: "ERP Software can optimize your business resources to deliver increased supply chain visibility, improved productivity, better customer satis",
    url: "https://web.finbyz.tech/how-erp-software-can-change-your-business",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How ERP Software Revolutionizes Business Operations: A Comprehensive Guide",
    description: "ERP Software can optimize your business resources to deliver increased supply chain visibility, improved productivity, better customer satis",
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
    "name": "How ERP Software Revolutionizes Business Operations: A Comprehensive Guide",
    "description": "ERP Software can optimize your business resources to deliver increased supply chain visibility, improved productivity, better customer satis",
    "url": "https://web.finbyz.tech/how-erp-software-can-change-your-business",
    
    "keywords": "supply chain management,\nEnterprise Resource Planning (ERP),\nERP solution,\nERP Software,\nERP Could,\nCRM software,\nERP system ",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "How ERP Software Revolutionizes Business Operations: A Comprehensive Guide",
      "description": "ERP Software can optimize your business resources to deliver increased supply chain visibility, improved productivity, better customer satis",
      "articleBody": "<section>\n    <div class=\"container-fluid\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"> <img alt=\"How ERP Software Can Change Your Business\"\n                    height=\"100%\" src=\"/files/erp-can-change-your-business.svg\"\n                    title=\"How ERP Software Can Change Your Business\" width=\"100%\"> </div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-50\">\n    <div class=\"finbyz-fadeinup\">\n        <div class=\"row\">\n    ",
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
        <meta itemProp="name" content="How ERP Software Revolutionizes Business Operations: A Comprehensive Guide" />
        <meta itemProp="description" content="ERP Software can optimize your business resources to deliver increased supply chain visibility, improved productivity, better customer satis" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
