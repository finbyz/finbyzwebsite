import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top ERP Benefits & How Automation Enhances Business Performance",
  description: "ERP provides a plethora of benefits to escalate your business potential and ensure you always remain in the forefront.",
  keywords: "erp benefits,\nHow ERP improves business performance,\nerp automation",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/how-erp-improves-business-performance",
  },
  openGraph: {
    title: "Top ERP Benefits & How Automation Enhances Business Performance",
    description: "ERP provides a plethora of benefits to escalate your business potential and ensure you always remain in the forefront.",
    url: "https://web.finbyz.tech/how-erp-improves-business-performance",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top ERP Benefits & How Automation Enhances Business Performance",
    description: "ERP provides a plethora of benefits to escalate your business potential and ensure you always remain in the forefront.",
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
    "name": "Top ERP Benefits & How Automation Enhances Business Performance",
    "description": "ERP provides a plethora of benefits to escalate your business potential and ensure you always remain in the forefront.",
    "url": "https://web.finbyz.tech/how-erp-improves-business-performance",
    
    "keywords": "erp benefits,\nHow ERP improves business performance,\nerp automation",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top ERP Benefits & How Automation Enhances Business Performance",
      "description": "ERP provides a plethora of benefits to escalate your business potential and ensure you always remain in the forefront.",
      "articleBody": "<section>\n    <div class=\"container-fluid\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"> <img alt=\"How ERP Improves Business Performance\"\n                    height=\"100%\" src=\"/files/how-erp-improves-business.svg\"\n                    title=\"How ERP Improves Business Performance\" width=\"100%\"> </div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-50\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n            <d",
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
        <meta itemProp="name" content="Top ERP Benefits & How Automation Enhances Business Performance" />
        <meta itemProp="description" content="ERP provides a plethora of benefits to escalate your business potential and ensure you always remain in the forefront." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
