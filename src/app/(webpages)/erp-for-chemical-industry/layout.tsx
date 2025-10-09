import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Comprehensive ERP Solutions for the Chemical Industry | Finbyz Tech",
  description: "Discover Finbyz Tech\'s tailored ERP solutions for the chemical industry. Streamline operations, ensure compliance, and boost productivity with our specialized ERP software.",
  keywords: "chemical erp,\nerp software for chemicals,\nerpnext for chemical manufacturing,\ncrm software for chemical industry,\nerp software for chemical industry,\nerp for chemical manufacturing,",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-for-chemical-industry",
  },
  openGraph: {
    title: "Comprehensive ERP Solutions for the Chemical Industry | Finbyz Tech",
    description: "Discover Finbyz Tech\'s tailored ERP solutions for the chemical industry. Streamline operations, ensure compliance, and boost productivity with our specialized ERP software.",
    url: "https://web.finbyz.tech/erp-for-chemical-industry",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/chemical_new.svg", width: 1200, height: 630, alt: "Comprehensive ERP Solutions for the Chemical Industry | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive ERP Solutions for the Chemical Industry | Finbyz Tech",
    description: "Discover Finbyz Tech\'s tailored ERP solutions for the chemical industry. Streamline operations, ensure compliance, and boost productivity with our specialized ERP software.",
    creator: "@finbyz",
    images: ["/files/chemical_new.svg"],
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
    "name": "Comprehensive ERP Solutions for the Chemical Industry | Finbyz Tech",
    "description": "Discover Finbyz Tech\'s tailored ERP solutions for the chemical industry. Streamline operations, ensure compliance, and boost productivity with our specialized ERP software.",
    "url": "https://web.finbyz.tech/erp-for-chemical-industry",
    "image": "/files/chemical_new.svg",
    "keywords": "chemical erp,\nerp software for chemicals,\nerpnext for chemical manufacturing,\ncrm software for chemical industry,\nerp software for chemical industry,\nerp for chemical manufacturing,",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Comprehensive ERP Solutions for the Chemical Industry | Finbyz Tech",
      "description": "Discover Finbyz Tech\'s tailored ERP solutions for the chemical industry. Streamline operations, ensure compliance, and boost productivity with our specialized ERP software.",
      
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
        <meta itemProp="name" content="Comprehensive ERP Solutions for the Chemical Industry | Finbyz Tech" />
        <meta itemProp="description" content="Discover Finbyz Tech\'s tailored ERP solutions for the chemical industry. Streamline operations, ensure compliance, and boost productivity with our specialized ERP software." />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
