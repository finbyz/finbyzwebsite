import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header";



export const metadata: Metadata = {
  title: "ERP Solutions for Textile Manufacturing & Distribution",
  description: "Optimize textile manufacturing, supply chain, and operations with tailored ERP solutions. Enhance efficiency, reduce costs, and boost profitability for your textile business.",
  keywords: "ERP for textile industry, textile manufacturing ERP, textile production software, ERPNext textile solutions, apparel ERP system, garment manufacturing software, textile supply chain management, fabric inventory management, textile business operations, digital transformation textile, textile process automation, ERP customization textile, textile industry challenges, textile enterprise resource planning",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/erpnext/textile",
  },
  openGraph: {
    title: "ERP Solutions for Textile Manufacturing & Distribution",
    description: "Optimize textile manufacturing, supply chain, and operations with tailored ERP solutions. Enhance efficiency, reduce costs, and boost profitability for your textile business.",
    url: "https://finbyz.tech/erpnext/textile",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Solutions for Textile Manufacturing & Distribution",
    description: "Optimize textile manufacturing, supply chain, and operations with tailored ERP solutions. Enhance efficiency, reduce costs, and boost profitability for your textile business.",
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
    "name": "ERP Solutions for Textile Manufacturing & Distribution",
    "description": "Optimize textile manufacturing, supply chain, and operations with tailored ERP solutions. Enhance efficiency, reduce costs, and boost profitability for your textile business.",
    "url": "https://finbyz.tech/erp-for-textile-industry",

    "keywords": "ERP for textile industry, textile manufacturing ERP, textile production software, ERPNext textile solutions, apparel ERP system, garment manufacturing software, textile supply chain management, fabric inventory management, textile business operations, digital transformation textile, textile process automation, ERP customization textile, textile industry challenges, textile enterprise resource planning",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERP Solutions for Textile Manufacturing & Distribution",
      "description": "Optimize textile manufacturing, supply chain, and operations with tailored ERP solutions. Enhance efficiency, reduce costs, and boost profitability for your textile business.",
      "articleBody": "ERPNext solutions designed for textile manufacturing and distribution processes.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-28T09:34:00.039Z",
      "dateModified": "2025-10-28T09:34:00.039Z",
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
          <meta itemProp="name" content="ERP Solutions for Textile Manufacturing & Distribution" />
          <meta itemProp="description" content="Optimize textile manufacturing, supply chain, and operations with tailored ERP solutions. Enhance efficiency, reduce costs, and boost profitability for your textile business." />
        </article>

        {children}

        <BusinessSlider />

      </main>

    </>
  );
}
