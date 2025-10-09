import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Ultimate ERP Go Live Plan: Your Comprehensive Guide to Successful ERP Implementation",
  description: "\n",
  keywords: "Workflow Automation, ERP Implementation Guide, ERP System Optimization, ERP Adoption",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/blog/Business/ultimate-erp-go-live-plan",
  },
  openGraph: {
    title: "Ultimate ERP Go Live Plan: Your Comprehensive Guide to Successful ERP Implementation",
    description: "\n",
    url: "https://web.finbyz.tech/blog/Business/ultimate-erp-go-live-plan",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate ERP Go Live Plan: Your Comprehensive Guide to Successful ERP Implementation",
    description: "\n",
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
    "name": "Ultimate ERP Go Live Plan: Your Comprehensive Guide to Successful ERP Implementation",
    "description": "\n",
    "url": "https://web.finbyz.tech/blog/Business/ultimate-erp-go-live-plan",
    
    "keywords": "Workflow Automation, ERP Implementation Guide, ERP System Optimization, ERP Adoption",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Ultimate ERP Go Live Plan: Your Comprehensive Guide to Successful ERP Implementation",
      "description": "\n",
      "articleBody": "<section>\n    <div class=\"container-fluid\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"The Ultimate ERP Go Live Plan\"\n                    height=\"100%\" src=\"/files/Line Banner-37.png\" title=\"The Ultimate ERP Go Live Plan\"\n                    width=\"100%\"></div>\n\n        </div>\n    </div>\n</section>\n<section class=\"mt-5\">\n        <div class=\"row\">\n            <!--<div class=\"col-md-12 py-4 finbyz-fadeinup text-center\">-->\n            <!",
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
        <meta itemProp="name" content="Ultimate ERP Go Live Plan: Your Comprehensive Guide to Successful ERP Implementation" />
        <meta itemProp="description" content="\n" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
