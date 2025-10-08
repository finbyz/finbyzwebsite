import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top 10 ERP Software Vendors Transforming Business Operations",
  description: "Explore top 10 ERP software vendors like Finbyz, Oracle, Microsoft, SAP, and more for streamlined operations and increased productivity.",
  keywords: "ERP Software Companies,\nERP Software Solutions,\nERP Software Vendors",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/the-top-10-erp-software-companies-revolutionizing-business-operations",
  },
  openGraph: {
    title: "Top 10 ERP Software Vendors Transforming Business Operations",
    description: "Explore top 10 ERP software vendors like Finbyz, Oracle, Microsoft, SAP, and more for streamlined operations and increased productivity.",
    url: "https://web.finbyz.tech/the-top-10-erp-software-companies-revolutionizing-business-operations",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 10 ERP Software Vendors Transforming Business Operations",
    description: "Explore top 10 ERP software vendors like Finbyz, Oracle, Microsoft, SAP, and more for streamlined operations and increased productivity.",
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
    "name": "Top 10 ERP Software Vendors Transforming Business Operations",
    "description": "Explore top 10 ERP software vendors like Finbyz, Oracle, Microsoft, SAP, and more for streamlined operations and increased productivity.",
    "url": "https://web.finbyz.tech/the-top-10-erp-software-companies-revolutionizing-business-operations",
    
    "keywords": "ERP Software Companies,\nERP Software Solutions,\nERP Software Vendors",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top 10 ERP Software Vendors Transforming Business Operations",
      "description": "Explore top 10 ERP software vendors like Finbyz, Oracle, Microsoft, SAP, and more for streamlined operations and increased productivity.",
      "articleBody": "<section>\n   \n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup text-center\"><img alt=\"the-top-10-erp-software-companies-revolutionizing-business-operations\"\n                    height=\"80%\" src=\"/files/Benefits of ERP286bf5.svg\" title=\"the-top-10-erp-software-companies-revolutionizing-business-operations\"\n                    width=\"90%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"",
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
        <meta itemProp="name" content="Top 10 ERP Software Vendors Transforming Business Operations" />
        <meta itemProp="description" content="Explore top 10 ERP software vendors like Finbyz, Oracle, Microsoft, SAP, and more for streamlined operations and increased productivity." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
