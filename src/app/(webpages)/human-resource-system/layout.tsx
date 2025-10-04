import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech",
  description: "Discover Finbyz Tech\'s human resource software designed to streamline HR and payroll processes. Enhance efficiency, ensure compliance, and empower your workforce.",
  keywords: "human resource software,\nhr software,\nhr and payroll software,\nHuman Resource Management, \nLeave approval system, \nExpense claims management, \nworker Shift Management, \nRecruitment software, \nTraining and development software,\nhr system,\nbest hr software,\nemployee management software,\nemployee management system,\nhr software companies,\nhr payroll,\nhr system software,\nhr management software,\nhr management systems,\nhr payroll software",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/human-resource-system",
  },
  openGraph: {
    title: "Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech",
    description: "Discover Finbyz Tech\'s human resource software designed to streamline HR and payroll processes. Enhance efficiency, ensure compliance, and empower your workforce.",
    url: "https://web.finbyz.tech/human-resource-system",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/hr_system 2019-07-27 18_25_22.svg", width: 1200, height: 630, alt: "Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech",
    description: "Discover Finbyz Tech\'s human resource software designed to streamline HR and payroll processes. Enhance efficiency, ensure compliance, and empower your workforce.",
    creator: "@yourhandle",
    images: ["/files/hr_system 2019-07-27 18_25_22.svg"],
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
    "name": "Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech",
    "description": "Discover Finbyz Tech\'s human resource software designed to streamline HR and payroll processes. Enhance efficiency, ensure compliance, and empower your workforce.",
    "url": "https://web.finbyz.tech/human-resource-system",
    "image": "/files/hr_system 2019-07-27 18_25_22.svg",
    "keywords": "human resource software,\nhr software,\nhr and payroll software,\nHuman Resource Management, \nLeave approval system, \nExpense claims management, \nworker Shift Management, \nRecruitment software, \nTraining and development software,\nhr system,\nbest hr software,\nemployee management software,\nemployee management system,\nhr software companies,\nhr payroll,\nhr system software,\nhr management software,\nhr management systems,\nhr payroll software",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech",
      "description": "Discover Finbyz Tech\'s human resource software designed to streamline HR and payroll processes. Enhance efficiency, ensure compliance, and empower your workforce.",
      
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
        <meta itemProp="name" content="Comprehensive Human Resource & Payroll Software Solutions | Finbyz Tech" />
        <meta itemProp="description" content="Discover Finbyz Tech\'s human resource software designed to streamline HR and payroll processes. Enhance efficiency, ensure compliance, and empower your workforce." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
