import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERP Software for Manufacturing Industry | FinByz Tech",
  description: "FinByz Tech’s ERPNext manufacturing ERP software streamlines production and inventory management, reducing costs and improving efficiency.",
  keywords: "erp software for manufacturing industry,\nmanufacturing erp software,\nerpnext for manufacturing,\nbest erp for manufacturing,\nerp for manufacturing industry,\nerp software manufacturing industry,\nerp for manufacturing,\nerp software for manufacturing,\nerp for manufacturing industry,\nbest erp for manufacturing,\nmanufacturing resource planning,\nbest manufacturing erp software,\nerpnext manufacturing",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-for-manufacturing-industry",
  },
  openGraph: {
    title: "ERP Software for Manufacturing Industry | FinByz Tech",
    description: "FinByz Tech’s ERPNext manufacturing ERP software streamlines production and inventory management, reducing costs and improving efficiency.",
    url: "https://web.finbyz.tech/erp-for-manufacturing-industry",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://finbyz.tech/files/Manufacturingc334bc.svg", width: 1200, height: 630, alt: "ERP Software for Manufacturing Industry | FinByz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Software for Manufacturing Industry | FinByz Tech",
    description: "FinByz Tech’s ERPNext manufacturing ERP software streamlines production and inventory management, reducing costs and improving efficiency.",
    creator: "@yourhandle",
    images: ["https://finbyz.tech/files/Manufacturingc334bc.svg"],
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
    "name": "ERP Software for Manufacturing Industry | FinByz Tech",
    "description": "FinByz Tech’s ERPNext manufacturing ERP software streamlines production and inventory management, reducing costs and improving efficiency.",
    "url": "https://web.finbyz.tech/erp-for-manufacturing-industry",
    "image": "https://finbyz.tech/files/Manufacturingc334bc.svg",
    "keywords": "erp software for manufacturing industry,\nmanufacturing erp software,\nerpnext for manufacturing,\nbest erp for manufacturing,\nerp for manufacturing industry,\nerp software manufacturing industry,\nerp for manufacturing,\nerp software for manufacturing,\nerp for manufacturing industry,\nbest erp for manufacturing,\nmanufacturing resource planning,\nbest manufacturing erp software,\nerpnext manufacturing",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERP Software for Manufacturing Industry | FinByz Tech",
      "description": "FinByz Tech’s ERPNext manufacturing ERP software streamlines production and inventory management, reducing costs and improving efficiency.",
      
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
        <meta itemProp="name" content="ERP Software for Manufacturing Industry | FinByz Tech" />
        <meta itemProp="description" content="FinByz Tech’s ERPNext manufacturing ERP software streamlines production and inventory management, reducing costs and improving efficiency." />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
