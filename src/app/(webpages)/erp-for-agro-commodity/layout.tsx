import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext for Agriculture | Streamline Agro Commodity Management with Finbyz Tech",
  description: "Discover how Finbyz Tech\'s ERPNext solutions revolutionize agricultural operations. Enhance efficiency, ensure compliance, and drive growth in your agro commodity business.",
  keywords: "erpext for agriculture,\nagricultural erp, \nerp agro, \nERP for agriculture company,\nerp agro product, \nERP for agro product, \nERP for agriculture products, \nagriculture erp provider company,\n agriculture commodity ERP, \nERP for agriculture commodities, \nagro commodity ERP",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-for-agro-commodity",
  },
  openGraph: {
    title: "ERPNext for Agriculture | Streamline Agro Commodity Management with Finbyz Tech",
    description: "Discover how Finbyz Tech\'s ERPNext solutions revolutionize agricultural operations. Enhance efficiency, ensure compliance, and drive growth in your agro commodity business.",
    url: "https://web.finbyz.tech/erp-for-agro-commodity",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Web Portal Development.svg", width: 1200, height: 630, alt: "ERPNext for Agriculture | Streamline Agro Commodity Management with Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext for Agriculture | Streamline Agro Commodity Management with Finbyz Tech",
    description: "Discover how Finbyz Tech\'s ERPNext solutions revolutionize agricultural operations. Enhance efficiency, ensure compliance, and drive growth in your agro commodity business.",
    creator: "@yourhandle",
    images: ["/files/Web Portal Development.svg"],
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
    "name": "ERPNext for Agriculture | Streamline Agro Commodity Management with Finbyz Tech",
    "description": "Discover how Finbyz Tech\'s ERPNext solutions revolutionize agricultural operations. Enhance efficiency, ensure compliance, and drive growth in your agro commodity business.",
    "url": "https://web.finbyz.tech/erp-for-agro-commodity",
    "image": "/files/Web Portal Development.svg",
    "keywords": "erpext for agriculture,\nagricultural erp, \nerp agro, \nERP for agriculture company,\nerp agro product, \nERP for agro product, \nERP for agriculture products, \nagriculture erp provider company,\n agriculture commodity ERP, \nERP for agriculture commodities, \nagro commodity ERP",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERPNext for Agriculture | Streamline Agro Commodity Management with Finbyz Tech",
      "description": "Discover how Finbyz Tech\'s ERPNext solutions revolutionize agricultural operations. Enhance efficiency, ensure compliance, and drive growth in your agro commodity business.",
      
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
        <meta itemProp="name" content="ERPNext for Agriculture | Streamline Agro Commodity Management with Finbyz Tech" />
        <meta itemProp="description" content="Discover how Finbyz Tech\'s ERPNext solutions revolutionize agricultural operations. Enhance efficiency, ensure compliance, and drive growth in your agro commodity business." />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
