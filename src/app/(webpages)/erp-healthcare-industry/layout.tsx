import FAQ from "@/components/ai_components/FAQ";
import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERP Solutions for Healthcare Providers Streamline Operations",
  description: "Transform healthcare operations with robust ERP solutions. Enhance patient care, streamline billing, manage inventory, and ensure compliance with Finbyz Tech\'s tailored ERPNext implementations.",
  keywords: "ERP for Healthcare, Healthcare Management System, Hospital ERP Software, Clinic Management System, ERPNext Healthcare Solutions, Patient Management Software, Medical Billing System, Healthcare Inventory Management, Digital Transformation Healthcare, Healthcare IT Solutions, Hospital Operations Management, Clinical Workflow Optimization, Healthcare Compliance Software, Finbyz Tech Healthcare ERP",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/erp-healthcare-industry",
  },
  openGraph: {
    title: "ERP Solutions for Healthcare Providers Streamline Operations",
    description: "Transform healthcare operations with robust ERP solutions. Enhance patient care, streamline billing, manage inventory, and ensure compliance with Finbyz Tech\'s tailored ERPNext implementations.",
    url: "https://erp.finbyz.tech/erp-healthcare-industry",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Solutions for Healthcare Providers Streamline Operations",
    description: "Transform healthcare operations with robust ERP solutions. Enhance patient care, streamline billing, manage inventory, and ensure compliance with Finbyz Tech\'s tailored ERPNext implementations.",
    creator: "@finbyztech",
    
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

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ERP Solutions for Healthcare Providers Streamline Operations",
    "description": "Transform healthcare operations with robust ERP solutions. Enhance patient care, streamline billing, manage inventory, and ensure compliance with Finbyz Tech\'s tailored ERPNext implementations.",
    "url": "https://erp.finbyz.tech/erp-healthcare-industry",
    
    "keywords": "ERP for Healthcare, Healthcare Management System, Hospital ERP Software, Clinic Management System, ERPNext Healthcare Solutions, Patient Management Software, Medical Billing System, Healthcare Inventory Management, Digital Transformation Healthcare, Healthcare IT Solutions, Hospital Operations Management, Clinical Workflow Optimization, Healthcare Compliance Software, Finbyz Tech Healthcare ERP",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERP Solutions for Healthcare Providers Streamline Operations",
      "description": "Transform healthcare operations with robust ERP solutions. Enhance patient care, streamline billing, manage inventory, and ensure compliance with Finbyz Tech\'s tailored ERPNext implementations.",
      "articleBody": "ERPNext solutions for hospitals, clinics, and healthcare providers for efficient operations.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-25T09:26:42.760Z",
      "dateModified": "2025-10-25T09:26:42.760Z",
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
        <meta itemProp="name" content="ERP Solutions for Healthcare Providers Streamline Operations" />
        <meta itemProp="description" content="Transform healthcare operations with robust ERP solutions. Enhance patient care, streamline billing, manage inventory, and ensure compliance with Finbyz Tech\'s tailored ERPNext implementations." />
      </article>
      
      {children}
      <BusinessSlider />
    </>
  );
}
