import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Evolution of ERP Systems: From MRP to Intelligent Cloud-Based Solutions",
  description: "Evolution of ERP systems has started for more than 2 decades now,  latest being the cloud ERP. ",
  keywords: "ERP Application ,Evolution of ERP, ERP System evolution, Cloud ERP, ERP system, ERP System, ERP , ERP applications, ERP evolution, ERP web application, ERP system evolution, ERP systems are an evolution of, stage ERP, base ERP, development of ERP	\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/evolution-of-erp",
  },
  openGraph: {
    title: "Evolution of ERP Systems: From MRP to Intelligent Cloud-Based Solutions",
    description: "Evolution of ERP systems has started for more than 2 decades now,  latest being the cloud ERP. ",
    url: "https://web.finbyz.tech/evolution-of-erp",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Evolution of ERP Systems: From MRP to Intelligent Cloud-Based Solutions",
    description: "Evolution of ERP systems has started for more than 2 decades now,  latest being the cloud ERP. ",
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
    "name": "Evolution of ERP Systems: From MRP to Intelligent Cloud-Based Solutions",
    "description": "Evolution of ERP systems has started for more than 2 decades now,  latest being the cloud ERP. ",
    "url": "https://web.finbyz.tech/evolution-of-erp",
    
    "keywords": "ERP Application ,Evolution of ERP, ERP System evolution, Cloud ERP, ERP system, ERP System, ERP , ERP applications, ERP evolution, ERP web application, ERP system evolution, ERP systems are an evolution of, stage ERP, base ERP, development of ERP	\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Evolution of ERP Systems: From MRP to Intelligent Cloud-Based Solutions",
      "description": "Evolution of ERP systems has started for more than 2 decades now,  latest being the cloud ERP. ",
      "articleBody": "    <div class=\"tech_update container-field\">\n    <div class=\"row p-lr-50\">\n        <div class=\"col-lg-12\"><img alt=\"ERP Evolution\" title=\"ERP Evolution\" height=\"100%\" src=\"/files/Evolution_of_ERP.svg\" width=\"100%\"> </div>\n    </div>\n</div>\n<br><br><br>\n<div class=\"container-field\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h2 align=\"center\" class=\"title-font\">Evolution of ERP System</h2>\n            <!-- <svg class=\"title-underline1\">                  <use xli",
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
        <meta itemProp="name" content="Evolution of ERP Systems: From MRP to Intelligent Cloud-Based Solutions" />
        <meta itemProp="description" content="Evolution of ERP systems has started for more than 2 decades now,  latest being the cloud ERP. " />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
