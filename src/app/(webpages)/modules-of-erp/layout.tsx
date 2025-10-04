import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Various Modules of ERP Software",
  description: "From Customer Relationship Management (CRM) to Supply Chain Management (SCM), from Accounts to HR we cover it all. Our ERP Software is highly developed which helps any business to get a control on management of almost all the major functions of the business. ",
  keywords: "Accounts Software, CRM Software, Inventory Software, Manufacturing Software, Human Resource Software, HR Software , modules of ERP, Modules of ERP Software, all about erp software, functional modules of erp software, modules in erp, different modules of erp ",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/modules-of-erp",
  },
  openGraph: {
    title: "Various Modules of ERP Software",
    description: "From Customer Relationship Management (CRM) to Supply Chain Management (SCM), from Accounts to HR we cover it all. Our ERP Software is highly developed which helps any business to get a control on management of almost all the major functions of the business. ",
    url: "https://web.finbyz.tech/modules-of-erp",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/erp-modules.svg", width: 1200, height: 630, alt: "Various Modules of ERP Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Various Modules of ERP Software",
    description: "From Customer Relationship Management (CRM) to Supply Chain Management (SCM), from Accounts to HR we cover it all. Our ERP Software is highly developed which helps any business to get a control on management of almost all the major functions of the business. ",
    creator: "@yourhandle",
    images: ["/files/erp-modules.svg"],
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
    "name": "Various Modules of ERP Software",
    "description": "From Customer Relationship Management (CRM) to Supply Chain Management (SCM), from Accounts to HR we cover it all. Our ERP Software is highly developed which helps any business to get a control on management of almost all the major functions of the business. ",
    "url": "https://web.finbyz.tech/modules-of-erp",
    "image": "/files/erp-modules.svg",
    "keywords": "Accounts Software, CRM Software, Inventory Software, Manufacturing Software, Human Resource Software, HR Software , modules of ERP, Modules of ERP Software, all about erp software, functional modules of erp software, modules in erp, different modules of erp ",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Various Modules of ERP Software",
      "description": "From Customer Relationship Management (CRM) to Supply Chain Management (SCM), from Accounts to HR we cover it all. Our ERP Software is highly developed which helps any business to get a control on management of almost all the major functions of the business. ",
      
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
        <meta itemProp="name" content="Various Modules of ERP Software" />
        <meta itemProp="description" content="From Customer Relationship Management (CRM) to Supply Chain Management (SCM), from Accounts to HR we cover it all. Our ERP Software is highly developed which helps any business to get a control on management of almost all the major functions of the business. " />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
