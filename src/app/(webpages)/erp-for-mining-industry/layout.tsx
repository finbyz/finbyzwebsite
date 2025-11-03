import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Mining ERP Solutions Efficient Operations Streamlined",
  description: "Streamline your mining operations with specialized ERP solutions. Finbyz Tech offers tailored ERPNext for inventory, logistics, and compliance, ensuring efficient mine-to-market processes and profitability.",
  keywords: "ERP for mining, mining ERP solutions, ERPNext mining, mining software, mine management system, mining operations management, inventory management mining, logistics mining, compliance mining, mining industry digitalization, resource management mining, mine-to-market ERP, mining supply chain, heavy equipment management ERP, mining asset management",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/erp-for-mining-industry",
  },
  openGraph: {
    title: "Mining ERP Solutions Efficient Operations Streamlined",
    description: "Streamline your mining operations with specialized ERP solutions. Finbyz Tech offers tailored ERPNext for inventory, logistics, and compliance, ensuring efficient mine-to-market processes and profitability.",
    url: "https://erp.finbyz.tech/erp-for-mining-industry",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/FinByz (11).gif", width: 1200, height: 630, alt: "Mining ERP Solutions Efficient Operations Streamlined" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mining ERP Solutions Efficient Operations Streamlined",
    description: "Streamline your mining operations with specialized ERP solutions. Finbyz Tech offers tailored ERPNext for inventory, logistics, and compliance, ensuring efficient mine-to-market processes and profitability.",
    creator: "@finbyztech",
    images: ["/files/FinByz (11).gif"],
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
    "name": "Mining ERP Solutions Efficient Operations Streamlined",
    "description": "Streamline your mining operations with specialized ERP solutions. Finbyz Tech offers tailored ERPNext for inventory, logistics, and compliance, ensuring efficient mine-to-market processes and profitability.",
    "url": "https://erp.finbyz.tech/erp-for-mining-industry",
    "image": "/files/FinByz (11).gif",
    "keywords": "ERP for mining, mining ERP solutions, ERPNext mining, mining software, mine management system, mining operations management, inventory management mining, logistics mining, compliance mining, mining industry digitalization, resource management mining, mine-to-market ERP, mining supply chain, heavy equipment management ERP, mining asset management",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Mining ERP Solutions Efficient Operations Streamlined",
      "description": "Streamline your mining operations with specialized ERP solutions. Finbyz Tech offers tailored ERPNext for inventory, logistics, and compliance, ensuring efficient mine-to-market processes and profitability.",
      "articleBody": "Finbyz Tech delivers ERP solutions customized for the mining sector. Our ERPNext system streamlines inventory, logistics, and compliance tracking, enabling efficient mine-to-market operations and enhanced profitability.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-25T06:49:26.974Z",
      "dateModified": "2025-10-25T06:49:26.974Z",
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
        <meta itemProp="name" content="Mining ERP Solutions Efficient Operations Streamlined" />
        <meta itemProp="description" content="Streamline your mining operations with specialized ERP solutions. Finbyz Tech offers tailored ERPNext for inventory, logistics, and compliance, ensuring efficient mine-to-market processes and profitability." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
