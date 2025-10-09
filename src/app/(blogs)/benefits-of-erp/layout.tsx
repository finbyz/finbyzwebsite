import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Benefits and Advantages of ERP Systems for Business Efficiency",
  description: "There are various benefits of ERP systems like real time information,high productivity,better analytics,improved collaboration and security,",
  keywords: "benefits of ERP, advantages of erp, advantages of erp systems,  erp benefits, advantages of erp system, erp software advantages, benefits of erp system, erp benefits presentation, erp software benefits advantages, erp system benefits advantages",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/benefits-of-erp",
  },
  openGraph: {
    title: "Top Benefits and Advantages of ERP Systems for Business Efficiency",
    description: "There are various benefits of ERP systems like real time information,high productivity,better analytics,improved collaboration and security,",
    url: "https://web.finbyz.tech/benefits-of-erp",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Benefits and Advantages of ERP Systems for Business Efficiency",
    description: "There are various benefits of ERP systems like real time information,high productivity,better analytics,improved collaboration and security,",
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
    "name": "Top Benefits and Advantages of ERP Systems for Business Efficiency",
    "description": "There are various benefits of ERP systems like real time information,high productivity,better analytics,improved collaboration and security,",
    "url": "https://web.finbyz.tech/benefits-of-erp",
    
    "keywords": "benefits of ERP, advantages of erp, advantages of erp systems,  erp benefits, advantages of erp system, erp software advantages, benefits of erp system, erp benefits presentation, erp software benefits advantages, erp system benefits advantages",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top Benefits and Advantages of ERP Systems for Business Efficiency",
      "description": "There are various benefits of ERP systems like real time information,high productivity,better analytics,improved collaboration and security,",
      "articleBody": "<div class=\"container-fluid\">\n    <div class=\"row p-lr-50\">\n        <div class=\"col-md-12 finbyz-fadeinup\"><img alt=\"Benefits of ERP\" title=\"Benefits of ERP\"\n                src=\"/files/Benefits-of-ERP.svg\" width=\"100%\"></div>\n    </div>\n</div>\n<br>\n<div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2 class=\"title-font\">Benefits of ERP</h2>\n            <br>\n            <div>\n                <p class=\"text-justify\">Modern, cloud-based Enterprise Resource Planni",
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
        <meta itemProp="name" content="Top Benefits and Advantages of ERP Systems for Business Efficiency" />
        <meta itemProp="description" content="There are various benefits of ERP systems like real time information,high productivity,better analytics,improved collaboration and security," />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
