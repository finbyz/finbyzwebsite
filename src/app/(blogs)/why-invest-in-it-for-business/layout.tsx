import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Reasons to Invest in IT: Boost Business Efficiency with ERP Software & IT Tools",
  description: "Investing in IT for business is an excellent idea for the current market. It can improve speed , optimize interface, and reduce complexities",
  keywords: "IT,\nERP Software, \nIT Tools, \nbusiness software ",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/why-invest-in-it-for-business",
  },
  openGraph: {
    title: "Top Reasons to Invest in IT: Boost Business Efficiency with ERP Software & IT Tools",
    description: "Investing in IT for business is an excellent idea for the current market. It can improve speed , optimize interface, and reduce complexities",
    url: "https://web.finbyz.tech/why-invest-in-it-for-business",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Reasons to Invest in IT: Boost Business Efficiency with ERP Software & IT Tools",
    description: "Investing in IT for business is an excellent idea for the current market. It can improve speed , optimize interface, and reduce complexities",
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
    "name": "Top Reasons to Invest in IT: Boost Business Efficiency with ERP Software & IT Tools",
    "description": "Investing in IT for business is an excellent idea for the current market. It can improve speed , optimize interface, and reduce complexities",
    "url": "https://web.finbyz.tech/why-invest-in-it-for-business",
    
    "keywords": "IT,\nERP Software, \nIT Tools, \nbusiness software ",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top Reasons to Invest in IT: Boost Business Efficiency with ERP Software & IT Tools",
      "description": "Investing in IT for business is an excellent idea for the current market. It can improve speed , optimize interface, and reduce complexities",
      "articleBody": "<div class=\"why-invest\">\n    <div class=\"row pd p-lr-50\">\n        <img height=\"100%\" src=\"/files/Startup.svg\" width=\"100%\" alt=\"Why Invest in IT for business\"\n            title=\"Why Invest in IT for business\">\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <p class=\"why-invest-txt text-justify pt-50\">\n                In today\'s digital-driven world, investing in IT infrastructure is a strategic move for any organization aiming for sustainable growth. Compani",
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
        <meta itemProp="name" content="Top Reasons to Invest in IT: Boost Business Efficiency with ERP Software & IT Tools" />
        <meta itemProp="description" content="Investing in IT for business is an excellent idea for the current market. It can improve speed , optimize interface, and reduce complexities" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
