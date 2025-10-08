import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top 7 Benefits of ERP for Manufacturing | Best ERP Solutions for Small Manufacturers",
  description: "ERP for manufacturing provides a vast array of benefits that simplify your operations and help you control your expenses.",
  keywords: "best manufacturing erp software, manufacturing erp solutions, small manufacturing erp software, ERP for manufacturing , benefits of erp for manufacturing",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/benefits-of-erp-for-manufacturing",
  },
  openGraph: {
    title: "Top 7 Benefits of ERP for Manufacturing | Best ERP Solutions for Small Manufacturers",
    description: "ERP for manufacturing provides a vast array of benefits that simplify your operations and help you control your expenses.",
    url: "https://web.finbyz.tech/benefits-of-erp-for-manufacturing",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 7 Benefits of ERP for Manufacturing | Best ERP Solutions for Small Manufacturers",
    description: "ERP for manufacturing provides a vast array of benefits that simplify your operations and help you control your expenses.",
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
    "name": "Top 7 Benefits of ERP for Manufacturing | Best ERP Solutions for Small Manufacturers",
    "description": "ERP for manufacturing provides a vast array of benefits that simplify your operations and help you control your expenses.",
    "url": "https://web.finbyz.tech/benefits-of-erp-for-manufacturing",
    
    "keywords": "best manufacturing erp software, manufacturing erp solutions, small manufacturing erp software, ERP for manufacturing , benefits of erp for manufacturing",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top 7 Benefits of ERP for Manufacturing | Best ERP Solutions for Small Manufacturers",
      "description": "ERP for manufacturing provides a vast array of benefits that simplify your operations and help you control your expenses.",
      "articleBody": "<section>\n    <div class=\"container-fluid\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"Benefits of ERP for Manufacturing\" height=\"100%\"\n                    src=\"/files/benefits-of-erp-for-manufacturing.svg\" title=\"Benefits of ERP for Manufacturing\"\n                    width=\"100%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-50\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n            <div",
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
        <meta itemProp="name" content="Top 7 Benefits of ERP for Manufacturing | Best ERP Solutions for Small Manufacturers" />
        <meta itemProp="description" content="ERP for manufacturing provides a vast array of benefits that simplify your operations and help you control your expenses." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
