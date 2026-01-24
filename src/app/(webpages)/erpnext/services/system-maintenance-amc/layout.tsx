import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext System Maintenance Updates Performance Optimization",
  description: "Ensure your ERPNext system runs flawlessly with Finbyz Tech\'s comprehensive maintenance services. Get updates, performance optimization, and proactive support for peak business efficiency and security.",
  keywords: "ERPNext maintenance, ERP system updates, performance optimization, ERP support services, software security management, data backup and recovery, proactive ERP monitoring, ERPNext upgrades, IT consulting for ERP, business continuity ERP, Finbyz Tech services, ERP solutions reliability, system health checks",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/erpnext/services/system-maintenance-amc",
  },
  openGraph: {
    title: "ERPNext System Maintenance Updates Performance Optimization",
    description: "Ensure your ERPNext system runs flawlessly with Finbyz Tech\'s comprehensive maintenance services. Get updates, performance optimization, and proactive support for peak business efficiency and security.",
    url: "https://finbyz.tech/erpnext/services/system-maintenance-amc",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext System Maintenance Updates Performance Optimization",
    description: "Ensure your ERPNext system runs flawlessly with Finbyz Tech\'s comprehensive maintenance services. Get updates, performance optimization, and proactive support for peak business efficiency and security.",
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

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ERPNext System Maintenance Updates Performance Optimization",
    "description": "Ensure your ERPNext system runs flawlessly with Finbyz Tech\'s comprehensive maintenance services. Get updates, performance optimization, and proactive support for peak business efficiency and security.",
    "url": "https://finbyz.tech/erpnext-system-maintenance",
    
    "keywords": "ERPNext maintenance, ERP system updates, performance optimization, ERP support services, software security management, data backup and recovery, proactive ERP monitoring, ERPNext upgrades, IT consulting for ERP, business continuity ERP, Finbyz Tech services, ERP solutions reliability, system health checks",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERPNext System Maintenance Updates Performance Optimization",
      "description": "Ensure your ERPNext system runs flawlessly with Finbyz Tech\'s comprehensive maintenance services. Get updates, performance optimization, and proactive support for peak business efficiency and security.",
      "articleBody": "Comprehensive ERPNext system maintenance, updates, and performance optimization services.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-31T09:27:27.235Z",
      "dateModified": "2025-10-31T09:27:27.235Z",
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
        <meta itemProp="name" content="ERPNext System Maintenance Updates Performance Optimization" />
        <meta itemProp="description" content="Ensure your ERPNext system runs flawlessly with Finbyz Tech\'s comprehensive maintenance services. Get updates, performance optimization, and proactive support for peak business efficiency and security." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
