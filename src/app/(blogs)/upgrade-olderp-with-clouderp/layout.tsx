import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Upgrade to Cloud ERP: Enhance Efficiency and Scalability",
  description: "Upgrade old ERP with cloud ERP systems has taken place because of various advantages of cloud ERP like cost, flexibility, functionality etc.",
  keywords: "ERP, ERP System, cloud ERP, clouderp,	tech cloud erp",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/upgrade-olderp-with-clouderp",
  },
  openGraph: {
    title: "Upgrade to Cloud ERP: Enhance Efficiency and Scalability",
    description: "Upgrade old ERP with cloud ERP systems has taken place because of various advantages of cloud ERP like cost, flexibility, functionality etc.",
    url: "https://web.finbyz.tech/upgrade-olderp-with-clouderp",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Upgrade to Cloud ERP: Enhance Efficiency and Scalability",
    description: "Upgrade old ERP with cloud ERP systems has taken place because of various advantages of cloud ERP like cost, flexibility, functionality etc.",
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
    "name": "Upgrade to Cloud ERP: Enhance Efficiency and Scalability",
    "description": "Upgrade old ERP with cloud ERP systems has taken place because of various advantages of cloud ERP like cost, flexibility, functionality etc.",
    "url": "https://web.finbyz.tech/upgrade-olderp-with-clouderp",
    
    "keywords": "ERP, ERP System, cloud ERP, clouderp,	tech cloud erp",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Upgrade to Cloud ERP: Enhance Efficiency and Scalability",
      "description": "Upgrade old ERP with cloud ERP systems has taken place because of various advantages of cloud ERP like cost, flexibility, functionality etc.",
      "articleBody": "<section>\n    <div class=\"tech_update\">\n        <div class=\"row\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"ERP with CLoud\"\n                    title=\"Upgrade old ERP with cloud ERP\" height=\"100%\" src=\"/files/Cloud-ERP.svg\" width=\"100%\"></div>\n        </div>\n    </div>\n</section>\n<section>\n    <div class=\"mt-50\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h2 class=\"title-font\">Upgrade old ERP with cloud ERP</h2>\n       ",
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
        <meta itemProp="name" content="Upgrade to Cloud ERP: Enhance Efficiency and Scalability" />
        <meta itemProp="description" content="Upgrade old ERP with cloud ERP systems has taken place because of various advantages of cloud ERP like cost, flexibility, functionality etc." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
