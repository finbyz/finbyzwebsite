import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech",
  description: "Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!",
  keywords: "ERPnext Implementation Partner,\nERPnext Implementation Company, Ahmedabad, Gujarat\nerpnext service providers,\nERP Implementation in UK,\nERP Implementation in Canada,\nerpnext service in uk,\nerpnext service in Canada,	\nerpnext service provider in uk,\nerpnext partners,\nerpnext service provider in Canada,\nerpnext partners in uk,\nfrappe partners,\nERP Software, \nERP Software uk, \nERP Solution,  \nAccounting Software, \nManufacturing Software",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/hire-erpnext-implementer",
  },
  openGraph: {
    title: "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech",
    description: "Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!",
    url: "https://web.finbyz.tech/hire-erpnext-implementer",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Hire-ERPNext-Implementor679475.svg", width: 1200, height: 630, alt: "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech",
    description: "Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!",
    creator: "@yourhandle",
    images: ["/files/Hire-ERPNext-Implementor679475.svg"],
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
  // Structured data for LLMs and search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech",
    "description": "Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!",
    "url": "https://web.finbyz.tech/hire-erpnext-implementer",
    "image": "/files/Hire-ERPNext-Implementor679475.svg",
    "keywords": "ERPnext Implementation Partner,\nERPnext Implementation Company, Ahmedabad, Gujarat\nerpnext service providers,\nERP Implementation in UK,\nERP Implementation in Canada,\nerpnext service in uk,\nerpnext service in Canada,	\nerpnext service provider in uk,\nerpnext partners,\nerpnext service provider in Canada,\nerpnext partners in uk,\nfrappe partners,\nERP Software, \nERP Software uk, \nERP Solution,  \nAccounting Software, \nManufacturing Software",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech",
      "description": "Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!",
      
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
      {/* JSON-LD structured data for LLMs */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Semantic HTML wrapper for better content extraction */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="ERPNext Implementation Partner in Ahmedabad | Finbyz Tech" />
        <meta itemProp="description" content="Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
