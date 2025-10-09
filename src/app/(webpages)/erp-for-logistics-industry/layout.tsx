import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech",
  description: "Discover how Finbyz Tech\'s ERP solutions streamline logistics operations, enhance efficiency, and provide real-time analytics for the logistics industry.",
  keywords: "erpnext for logistics industry,\nlogistics erp system,\nerp software for logistics industry,\nlogistics erp software,\nerp for logistics,\nlogistics companies,\nbest erp for logistics,\nsoftware for transport company,\nsoftware for logistics company,\n\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-for-logistics-industry",
  },
  openGraph: {
    title: "Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech",
    description: "Discover how Finbyz Tech\'s ERP solutions streamline logistics operations, enhance efficiency, and provide real-time analytics for the logistics industry.",
    url: "https://web.finbyz.tech/erp-for-logistics-industry",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Logistic90ec93.svg", width: 1200, height: 630, alt: "Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech",
    description: "Discover how Finbyz Tech\'s ERP solutions streamline logistics operations, enhance efficiency, and provide real-time analytics for the logistics industry.",
    creator: "@finbyz",
    images: ["/files/Logistic90ec93.svg"],
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
    "name": "Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech",
    "description": "Discover how Finbyz Tech\'s ERP solutions streamline logistics operations, enhance efficiency, and provide real-time analytics for the logistics industry.",
    "url": "https://web.finbyz.tech/erp-for-logistics-industry",
    "image": "/files/Logistic90ec93.svg",
    "keywords": "erpnext for logistics industry,\nlogistics erp system,\nerp software for logistics industry,\nlogistics erp software,\nerp for logistics,\nlogistics companies,\nbest erp for logistics,\nsoftware for transport company,\nsoftware for logistics company,\n\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech",
      "description": "Discover how Finbyz Tech\'s ERP solutions streamline logistics operations, enhance efficiency, and provide real-time analytics for the logistics industry.",
      
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
        <meta itemProp="name" content="Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech" />
        <meta itemProp="description" content="Discover how Finbyz Tech\'s ERP solutions streamline logistics operations, enhance efficiency, and provide real-time analytics for the logistics industry." />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
