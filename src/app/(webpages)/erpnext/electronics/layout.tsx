import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header";



export const metadata: Metadata = {
  title: "ERP Solutions for Electronics Manufacturing & Supply Chain",
  description: "Optimize electronics manufacturing, inventory, and global supply chains with powerful ERP solutions. Streamline production, enhance quality, and reduce costs. Get a demo today!",
  keywords: "ERP for electronics industry, electronics manufacturing ERP, ERPNext electronics, electronics supply chain management, inventory management electronics, BOM management electronics, quality control electronics, electronics production planning, discrete manufacturing ERP, electronics software solutions, ERP implementation electronics, finbyz tech electronics, circuit board manufacturing software, component tracking ERP, electronics industry challenges",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/erpnext/electronics",
  },
  openGraph: {
    title: "ERP Solutions for Electronics Manufacturing & Supply Chain",
    description: "Optimize electronics manufacturing, inventory, and global supply chains with powerful ERP solutions. Streamline production, enhance quality, and reduce costs. Get a demo today!",
    url: "https://finbyz.tech/erpnext/electronics",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Solutions for Electronics Manufacturing & Supply Chain",
    description: "Optimize electronics manufacturing, inventory, and global supply chains with powerful ERP solutions. Streamline production, enhance quality, and reduce costs. Get a demo today!",
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
    "name": "ERP Solutions for Electronics Manufacturing & Supply Chain",
    "description": "Optimize electronics manufacturing, inventory, and global supply chains with powerful ERP solutions. Streamline production, enhance quality, and reduce costs. Get a demo today!",
    "url": "https://finbyz.tech/erp-for-electronics-industry",

    "keywords": "ERP for electronics industry, electronics manufacturing ERP, ERPNext electronics, electronics supply chain management, inventory management electronics, BOM management electronics, quality control electronics, electronics production planning, discrete manufacturing ERP, electronics software solutions, ERP implementation electronics, finbyz tech electronics, circuit board manufacturing software, component tracking ERP, electronics industry challenges",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERP Solutions for Electronics Manufacturing & Supply Chain",
      "description": "Optimize electronics manufacturing, inventory, and global supply chains with powerful ERP solutions. Streamline production, enhance quality, and reduce costs. Get a demo today!",
      "articleBody": "ERPNext solutions to manage electronics manufacturing, inventory, and supply chain efficiently.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-25T09:31:36.987Z",
      "dateModified": "2025-10-25T09:31:36.987Z",
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
          <meta itemProp="name" content="ERP Solutions for Electronics Manufacturing & Supply Chain" />
          <meta itemProp="description" content="Optimize electronics manufacturing, inventory, and global supply chains with powerful ERP solutions. Streamline production, enhance quality, and reduce costs. Get a demo today!" />
        </article>

        {children}

        <BusinessSlider />

      </main>

    </>
  );
}
