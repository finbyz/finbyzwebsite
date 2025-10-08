import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Commodity Trading ERP Solutions: Streamlining Operations and Enhancing Profitability",
  description: "Discover how ERP for commodity management enhances trading efficiency, risk management, and profitability in volatile markets.",
  keywords: "commodity trading erp, ERP for commodity, ERP for commodity management \n",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-options-for-trading-commodities-using-insight-and-efficiency",
  },
  openGraph: {
    title: "Commodity Trading ERP Solutions: Streamlining Operations and Enhancing Profitability",
    description: "Discover how ERP for commodity management enhances trading efficiency, risk management, and profitability in volatile markets.",
    url: "https://web.finbyz.tech/erp-options-for-trading-commodities-using-insight-and-efficiency",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Commodity Trading ERP Solutions: Streamlining Operations and Enhancing Profitability",
    description: "Discover how ERP for commodity management enhances trading efficiency, risk management, and profitability in volatile markets.",
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
    "name": "Commodity Trading ERP Solutions: Streamlining Operations and Enhancing Profitability",
    "description": "Discover how ERP for commodity management enhances trading efficiency, risk management, and profitability in volatile markets.",
    "url": "https://web.finbyz.tech/erp-options-for-trading-commodities-using-insight-and-efficiency",
    
    "keywords": "commodity trading erp, ERP for commodity, ERP for commodity management \n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Commodity Trading ERP Solutions: Streamlining Operations and Enhancing Profitability",
      "description": "Discover how ERP for commodity management enhances trading efficiency, risk management, and profitability in volatile markets.",
      "articleBody": "<section>\n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup text-center\"><img alt=\"erp-for-trading\"\n                    height=\"80%\" src=\"/files/drawing-1.svg\" title=\"erp-options-for-trading-commodities-using-insight-and-efficiency\"\n                    width=\"80%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-5\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n     ",
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
        <meta itemProp="name" content="Commodity Trading ERP Solutions: Streamlining Operations and Enhancing Profitability" />
        <meta itemProp="description" content="Discover how ERP for commodity management enhances trading efficiency, risk management, and profitability in volatile markets." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
