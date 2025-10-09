import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Comprehensive Guide to ERP Implementation Steps for Business Success",
  description: "ERP Implementation steps includes analyzing why do we need it,assessing its scope,transferring the data,training,customization and many more",
  keywords: "erp implementation steps, \nprocess of erp implementation,\nerp implementation companies\nERP Implementation",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-implementation-steps",
  },
  openGraph: {
    title: "Comprehensive Guide to ERP Implementation Steps for Business Success",
    description: "ERP Implementation steps includes analyzing why do we need it,assessing its scope,transferring the data,training,customization and many more",
    url: "https://web.finbyz.tech/erp-implementation-steps",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Guide to ERP Implementation Steps for Business Success",
    description: "ERP Implementation steps includes analyzing why do we need it,assessing its scope,transferring the data,training,customization and many more",
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
    "name": "Comprehensive Guide to ERP Implementation Steps for Business Success",
    "description": "ERP Implementation steps includes analyzing why do we need it,assessing its scope,transferring the data,training,customization and many more",
    "url": "https://web.finbyz.tech/erp-implementation-steps",
    
    "keywords": "erp implementation steps, \nprocess of erp implementation,\nerp implementation companies\nERP Implementation",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Comprehensive Guide to ERP Implementation Steps for Business Success",
      "description": "ERP Implementation steps includes analyzing why do we need it,assessing its scope,transferring the data,training,customization and many more",
      "articleBody": "<section>\n    <div class=\"tech_update\">\n        <div class=\"container-fluid\">\n            <div class=\"row p-lr-50\">\n                <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"ERP with CLoud\" height=\"100%\"\n                        src=\"/files/ERP_Implement.svg\" title=\"Upgrade old ERP with cloud ERP\" width=\"100%\"></div>\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-50\">\n    <div class=\"finbyz-fadeinup\">\n        <div class=\"row\">\n            <",
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
        <meta itemProp="name" content="Comprehensive Guide to ERP Implementation Steps for Business Success" />
        <meta itemProp="description" content="ERP Implementation steps includes analyzing why do we need it,assessing its scope,transferring the data,training,customization and many more" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
