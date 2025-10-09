import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext Service Provider | Cloud ERP Software Company",
  description: "Discover leading ERPNext service providers for seamless business management solutions. Expert customization, support, and integration services.",
  keywords: "ERPNext Partner,\nERPNext Service Provider\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/erpnext-service-provider",
  },
  openGraph: {
    title: "ERPNext Service Provider | Cloud ERP Software Company",
    description: "Discover leading ERPNext service providers for seamless business management solutions. Expert customization, support, and integration services.",
    url: "https://web.finbyz.tech/erpnext-service-provider",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Frappe-Certified-Erpnext-Partner.svg", width: 1200, height: 630, alt: "ERPNext Service Provider | Cloud ERP Software Company" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Service Provider | Cloud ERP Software Company",
    description: "Discover leading ERPNext service providers for seamless business management solutions. Expert customization, support, and integration services.",
    creator: "@finbyz",
    images: ["/files/Frappe-Certified-Erpnext-Partner.svg"],
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
    "name": "ERPNext Service Provider | Cloud ERP Software Company",
    "description": "Discover leading ERPNext service providers for seamless business management solutions. Expert customization, support, and integration services.",
    "url": "https://web.finbyz.tech/erpnext-service-provider",
    "image": "/files/Frappe-Certified-Erpnext-Partner.svg",
    "keywords": "ERPNext Partner,\nERPNext Service Provider\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERPNext Service Provider | Cloud ERP Software Company",
      "description": "Discover leading ERPNext service providers for seamless business management solutions. Expert customization, support, and integration services.",
      
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
        <meta itemProp="name" content="ERPNext Service Provider | Cloud ERP Software Company" />
        <meta itemProp="description" content="Discover leading ERPNext service providers for seamless business management solutions. Expert customization, support, and integration services." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
