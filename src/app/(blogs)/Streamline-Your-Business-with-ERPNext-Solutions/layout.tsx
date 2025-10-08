import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Streamline Your Business with ERPNext: The Leading Open Source ERP System",
  description: "Discover ERPNext: A powerful, open-source ERP software for streamlining business processes and boosting productivity. Try it now!",
  keywords: "ERPNext,\nOpen source erp,\nerpnext system",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/Streamline-Your-Business-with-ERPNext-Solutions",
  },
  openGraph: {
    title: "Streamline Your Business with ERPNext: The Leading Open Source ERP System",
    description: "Discover ERPNext: A powerful, open-source ERP software for streamlining business processes and boosting productivity. Try it now!",
    url: "https://web.finbyz.tech/Streamline-Your-Business-with-ERPNext-Solutions",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Streamline Your Business with ERPNext: The Leading Open Source ERP System",
    description: "Discover ERPNext: A powerful, open-source ERP software for streamlining business processes and boosting productivity. Try it now!",
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
    "name": "Streamline Your Business with ERPNext: The Leading Open Source ERP System",
    "description": "Discover ERPNext: A powerful, open-source ERP software for streamlining business processes and boosting productivity. Try it now!",
    "url": "https://web.finbyz.tech/Streamline-Your-Business-with-ERPNext-Solutions",
    
    "keywords": "ERPNext,\nOpen source erp,\nerpnext system",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Streamline Your Business with ERPNext: The Leading Open Source ERP System",
      "description": "Discover ERPNext: A powerful, open-source ERP software for streamlining business processes and boosting productivity. Try it now!",
      "articleBody": "<section>\n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 mb-12 rollover finbyz-fadeinup\"><img alt=\"ERPNext\"\n                    height=\"80%\" src=\"/files/Evolution of ERP5b37d9.svg\" title=\"ERPNext\"\n                    width=\"80%\"></div>\n\n        </div>\n    </div>\n</section>\n<section class=\"mt-5\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-12 finbyz-fadeinup\">\n  ",
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
        <meta itemProp="name" content="Streamline Your Business with ERPNext: The Leading Open Source ERP System" />
        <meta itemProp="description" content="Discover ERPNext: A powerful, open-source ERP software for streamlining business processes and boosting productivity. Try it now!" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
