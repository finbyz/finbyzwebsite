import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top ERP Software for Small Manufacturing Businesses in 2025 | Finbyz Tech",
  description: "Find the best ERP system for small businesses. Explore top options and discover the ideal ERP solution for your small business needs.\n\n     ",
  keywords: "ERP for small business, best ERP for small business , manufacturing software for small business , ERP system for small businesses, ERP systems for small companies , best ERP for small manufacturing , business manufacturing ERP for small business,  best manufacturing software for small business , cloud ERP for small business\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/the-best-erp-software-for-small-businesses-in-manufacturing-in-2024",
  },
  openGraph: {
    title: "Top ERP Software for Small Manufacturing Businesses in 2025 | Finbyz Tech",
    description: "Find the best ERP system for small businesses. Explore top options and discover the ideal ERP solution for your small business needs.\n\n     ",
    url: "https://web.finbyz.tech/the-best-erp-software-for-small-businesses-in-manufacturing-in-2024",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top ERP Software for Small Manufacturing Businesses in 2025 | Finbyz Tech",
    description: "Find the best ERP system for small businesses. Explore top options and discover the ideal ERP solution for your small business needs.\n\n     ",
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
    "name": "Top ERP Software for Small Manufacturing Businesses in 2025 | Finbyz Tech",
    "description": "Find the best ERP system for small businesses. Explore top options and discover the ideal ERP solution for your small business needs.\n\n     ",
    "url": "https://web.finbyz.tech/the-best-erp-software-for-small-businesses-in-manufacturing-in-2024",
    
    "keywords": "ERP for small business, best ERP for small business , manufacturing software for small business , ERP system for small businesses, ERP systems for small companies , best ERP for small manufacturing , business manufacturing ERP for small business,  best manufacturing software for small business , cloud ERP for small business\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top ERP Software for Small Manufacturing Businesses in 2025 | Finbyz Tech",
      "description": "Find the best ERP system for small businesses. Explore top options and discover the ideal ERP solution for your small business needs.\n\n     ",
      "articleBody": "<section>\n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup text-center\"><img alt=\"the-best-erp-software-for-small-businesses-in-manufacturing-in-2024\"\n                    height=\"100%\" src=\"/files/16-04-24.svg\" title=\"the-best-erp-software-for-small-businesses-in-manufacturing-in-2024\"\n                    width=\"80%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-5\">\n    <div clas",
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
        <meta itemProp="name" content="Top ERP Software for Small Manufacturing Businesses in 2025 | Finbyz Tech" />
        <meta itemProp="description" content="Find the best ERP system for small businesses. Explore top options and discover the ideal ERP solution for your small business needs.\n\n     " />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
