import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Industry-Specific vs. Generic ERP: Which ERP Software is Right for Your Business?",
  description: "Industry-Specific vs. Generic ERP",
  keywords: "industry specific erp,\ngeneric erp,\nindustry specific erp software\nIndustry Specific vs Generic ERP",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/industry-specific-vs-generic-erp",
  },
  openGraph: {
    title: "Industry-Specific vs. Generic ERP: Which ERP Software is Right for Your Business?",
    description: "Industry-Specific vs. Generic ERP",
    url: "https://web.finbyz.tech/industry-specific-vs-generic-erp",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry-Specific vs. Generic ERP: Which ERP Software is Right for Your Business?",
    description: "Industry-Specific vs. Generic ERP",
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
    "name": "Industry-Specific vs. Generic ERP: Which ERP Software is Right for Your Business?",
    "description": "Industry-Specific vs. Generic ERP",
    "url": "https://web.finbyz.tech/industry-specific-vs-generic-erp",
    
    "keywords": "industry specific erp,\ngeneric erp,\nindustry specific erp software\nIndustry Specific vs Generic ERP",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Industry-Specific vs. Generic ERP: Which ERP Software is Right for Your Business?",
      "description": "Industry-Specific vs. Generic ERP",
      "articleBody": "<section class=\"mt-4\">\n    <div class=\"container-fluid\">\n        <div class=\"row pt-20 pb-20 p-lr-50\">\n            <div class=\"col-12 col-sm-12 text-center\"> <img class=\"blog-main-img w-100\"\n                    src=\"/files/industry-specific-vs-generic-erp.svg\" alt=\"Industry-Specific vs. Generic ERP\"\n                    title=\"Industry-Specific vs. Generic ERP\"> </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2> Industry-Specific vs. ",
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
        <meta itemProp="name" content="Industry-Specific vs. Generic ERP: Which ERP Software is Right for Your Business?" />
        <meta itemProp="description" content="Industry-Specific vs. Generic ERP" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
