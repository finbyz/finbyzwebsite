import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import InquiryForm from "@/components/ui/InquiryForm";

export const metadata: Metadata = {
  title: "ERPNext System Maintenance Updates Performance Optimization",
  description: "Ensure your ERPNext system runs flawlessly with Finbyz Tech\'s comprehensive maintenance services. Get updates, performance optimization, and proactive support for peak business efficiency and security.",
  keywords: "ERPNext maintenance, ERP system updates, performance optimization, ERP support services, software security management, data backup and recovery, proactive ERP monitoring, ERPNext upgrades, IT consulting for ERP, business continuity ERP, Finbyz Tech services, ERP solutions reliability, system health checks",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/erpnext-system-maintenance",
  },
  openGraph: {
    title: "ERPNext System Maintenance Updates Performance Optimization",
    description: "Ensure your ERPNext system runs flawlessly with Finbyz Tech\'s comprehensive maintenance services. Get updates, performance optimization, and proactive support for peak business efficiency and security.",
    url: "https://erp.finbyz.tech/erpnext-system-maintenance",
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
    "url": "https://erp.finbyz.tech/erpnext-system-maintenance",

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
      <main>
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
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
