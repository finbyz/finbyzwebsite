import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header";



export const metadata: Metadata = {
  title: "Retail ERP Solutions Streamline Operations & Boost Sales",
  description: "Transform your retail business with ERPNext solutions. Optimize inventory, POS, supply chain, and customer experience for enhanced efficiency and growth.",
  keywords: "retail ERP solutions, ERPNext for retail, retail inventory management, POS system retail, retail supply chain management, e-commerce integration retail, multi-channel retail ERP, retail business automation, warehouse management retail, retail CRM solutions, finbyz tech retail, retail operations optimization, erp consulting retail, digital transformation retail",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/erp-for-retail-industry",
  },
  openGraph: {
    title: "Retail ERP Solutions Streamline Operations & Boost Sales",
    description: "Transform your retail business with ERPNext solutions. Optimize inventory, POS, supply chain, and customer experience for enhanced efficiency and growth.",
    url: "https://erp.finbyz.tech/erp-for-retail-industry",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "Retail ERP Solutions Streamline Operations & Boost Sales",
    description: "Transform your retail business with ERPNext solutions. Optimize inventory, POS, supply chain, and customer experience for enhanced efficiency and growth.",
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
    "name": "Retail ERP Solutions Streamline Operations & Boost Sales",
    "description": "Transform your retail business with ERPNext solutions. Optimize inventory, POS, supply chain, and customer experience for enhanced efficiency and growth.",
    "url": "https://erp.finbyz.tech/erp-for-retail-industry",

    "keywords": "retail ERP solutions, ERPNext for retail, retail inventory management, POS system retail, retail supply chain management, e-commerce integration retail, multi-channel retail ERP, retail business automation, warehouse management retail, retail CRM solutions, finbyz tech retail, retail operations optimization, erp consulting retail, digital transformation retail",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Retail ERP Solutions Streamline Operations & Boost Sales",
      "description": "Transform your retail business with ERPNext solutions. Optimize inventory, POS, supply chain, and customer experience for enhanced efficiency and growth.",
      "articleBody": "ERPNext solutions for retail operations including inventory, POS, and supply chain management.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-28T10:12:06.596Z",
      "dateModified": "2025-10-28T10:12:06.596Z",
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
          <meta itemProp="name" content="Retail ERP Solutions Streamline Operations & Boost Sales" />
          <meta itemProp="description" content="Transform your retail business with ERPNext solutions. Optimize inventory, POS, supply chain, and customer experience for enhanced efficiency and growth." />
        </article>

        {children}

        <BusinessSlider />

      </main>

    </>
  );
}
