import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERP for Trading & Distribution Industry | Trading Software",
  description: "Unlock premium ERP for trading sector: Optimize processes, boost efficiency, and fuel business expansion. Transform your enterprise now!",
  keywords: "ERP for trading, \nERP for trading industry, \nInventory Management, \nOrder management, \nQuotation Management,\nerp for trading,\ntrading,\ntrading software",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-for-trading-industry",
  },
  openGraph: {
    title: "ERP for Trading & Distribution Industry | Trading Software",
    description: "Unlock premium ERP for trading sector: Optimize processes, boost efficiency, and fuel business expansion. Transform your enterprise now!",
    url: "https://web.finbyz.tech/erp-for-trading-industry",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/erp for trading.svg", width: 1200, height: 630, alt: "ERP for Trading & Distribution Industry | Trading Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP for Trading & Distribution Industry | Trading Software",
    description: "Unlock premium ERP for trading sector: Optimize processes, boost efficiency, and fuel business expansion. Transform your enterprise now!",
    creator: "@yourhandle",
    images: ["/files/erp for trading.svg"],
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
    "name": "ERP for Trading & Distribution Industry | Trading Software",
    "description": "Unlock premium ERP for trading sector: Optimize processes, boost efficiency, and fuel business expansion. Transform your enterprise now!",
    "url": "https://web.finbyz.tech/erp-for-trading-industry",
    "image": "/files/erp for trading.svg",
    "keywords": "ERP for trading, \nERP for trading industry, \nInventory Management, \nOrder management, \nQuotation Management,\nerp for trading,\ntrading,\ntrading software",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERP for Trading & Distribution Industry | Trading Software",
      "description": "Unlock premium ERP for trading sector: Optimize processes, boost efficiency, and fuel business expansion. Transform your enterprise now!",
      
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
        <meta itemProp="name" content="ERP for Trading & Distribution Industry | Trading Software" />
        <meta itemProp="description" content="Unlock premium ERP for trading sector: Optimize processes, boost efficiency, and fuel business expansion. Transform your enterprise now!" />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
