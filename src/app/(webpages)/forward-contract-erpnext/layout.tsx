import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide",
  description: "Learn how to manage forward contracts in ERPNext effectively. Our guide covers setup, utilization, cancellation, and accounting integration for currency hedging.",
  keywords: "forward contract erpnext, \nforward contract accounting erpnext, \nCurrency Hedging ERPNext,\nforward contract,\nforward and futures,\nforward rate contract,\nforward transaction",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/forward-contract-erpnext",
  },
  openGraph: {
    title: "Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide",
    description: "Learn how to manage forward contracts in ERPNext effectively. Our guide covers setup, utilization, cancellation, and accounting integration for currency hedging.",
    url: "https://web.finbyz.tech/forward-contract-erpnext",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Forward-Contract-PageDesign.svg", width: 1200, height: 630, alt: "Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide",
    description: "Learn how to manage forward contracts in ERPNext effectively. Our guide covers setup, utilization, cancellation, and accounting integration for currency hedging.",
    creator: "@yourhandle",
    images: ["/files/Forward-Contract-PageDesign.svg"],
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
    "name": "Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide",
    "description": "Learn how to manage forward contracts in ERPNext effectively. Our guide covers setup, utilization, cancellation, and accounting integration for currency hedging.",
    "url": "https://web.finbyz.tech/forward-contract-erpnext",
    "image": "/files/Forward-Contract-PageDesign.svg",
    "keywords": "forward contract erpnext, \nforward contract accounting erpnext, \nCurrency Hedging ERPNext,\nforward contract,\nforward and futures,\nforward rate contract,\nforward transaction",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide",
      "description": "Learn how to manage forward contracts in ERPNext effectively. Our guide covers setup, utilization, cancellation, and accounting integration for currency hedging.",
      
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
        <meta itemProp="name" content="Forward Contract Management in ERPNext | Currency Hedging & Accounting Guide" />
        <meta itemProp="description" content="Learn how to manage forward contracts in ERPNext effectively. Our guide covers setup, utilization, cancellation, and accounting integration for currency hedging." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
