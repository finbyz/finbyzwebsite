import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: " ERPNext Partners in Saudi Arabia | ERP Implementation",
  description: "Discover leading ERPNext service providers and ERPNext Partners in Saudi Arabia. Trusted solutions tailored to optimize your business operations.",
  keywords: "ERPNext Partners,\nERPNext Service Provider,\nERPNext Implementation Partners\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/erpnext-partner-in-saudi-arabia",
  },
  openGraph: {
    title: " ERPNext Partners in Saudi Arabia | ERP Implementation",
    description: "Discover leading ERPNext service providers and ERPNext Partners in Saudi Arabia. Trusted solutions tailored to optimize your business operations.",
    url: "https://web.finbyz.tech/erpnext-partner-in-saudi-arabia",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Frappe-Certified-Erpnext-Partner.svg", width: 1200, height: 630, alt: " ERPNext Partners in Saudi Arabia | ERP Implementation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: " ERPNext Partners in Saudi Arabia | ERP Implementation",
    description: "Discover leading ERPNext service providers and ERPNext Partners in Saudi Arabia. Trusted solutions tailored to optimize your business operations.",
    creator: "@finbyz",
    images: ["/files/Frappe-Certified-Erpnext-Partner.svg"],
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
  // Structured data for LLMs and search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": " ERPNext Partners in Saudi Arabia | ERP Implementation",
    "description": "Discover leading ERPNext service providers and ERPNext Partners in Saudi Arabia. Trusted solutions tailored to optimize your business operations.",
    "url": "https://web.finbyz.tech/erpnext-partner-in-saudi-arabia",
    "image": "/files/Frappe-Certified-Erpnext-Partner.svg",
    "keywords": "ERPNext Partners,\nERPNext Service Provider,\nERPNext Implementation Partners\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": " ERPNext Partners in Saudi Arabia | ERP Implementation",
      "description": "Discover leading ERPNext service providers and ERPNext Partners in Saudi Arabia. Trusted solutions tailored to optimize your business operations.",
      
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
      {/* JSON-LD structured data for LLMs */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Semantic HTML wrapper for better content extraction */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content=" ERPNext Partners in Saudi Arabia | ERP Implementation" />
        <meta itemProp="description" content="Discover leading ERPNext service providers and ERPNext Partners in Saudi Arabia. Trusted solutions tailored to optimize your business operations." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
