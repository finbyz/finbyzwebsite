import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Engineering ERP Software Solutions | FinByz Tech",
  description: "FinByz Tech delivers ERPNext-based engineering ERP software solutions. Streamline engineering and software engineering operations with integrated project, inventory, and financial management.",
  keywords: "erpnext for engineering,\nengineering erp software,\nerp in software engineering,\nerp system engineering,\nerp for engineering industry,\nengineering erp systems,\nerp in industrial engineering,\nerp mechanical engineering,\nerp for engineering companies,",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/erp-for-engineering-industry",
  },
  openGraph: {
    title: "Engineering ERP Software Solutions | FinByz Tech",
    description: "FinByz Tech delivers ERPNext-based engineering ERP software solutions. Streamline engineering and software engineering operations with integrated project, inventory, and financial management.",
    url: "https://web.finbyz.tech/erp-for-engineering-industry",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Engineeringaced93.svg", width: 1200, height: 630, alt: "Engineering ERP Software Solutions | FinByz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering ERP Software Solutions | FinByz Tech",
    description: "FinByz Tech delivers ERPNext-based engineering ERP software solutions. Streamline engineering and software engineering operations with integrated project, inventory, and financial management.",
    creator: "@finbyz",
    images: ["/files/Engineeringaced93.svg"],
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
    "name": "Engineering ERP Software Solutions | FinByz Tech",
    "description": "FinByz Tech delivers ERPNext-based engineering ERP software solutions. Streamline engineering and software engineering operations with integrated project, inventory, and financial management.",
    "url": "https://web.finbyz.tech/erp-for-engineering-industry",
    "image": "/files/Engineeringaced93.svg",
    "keywords": "erpnext for engineering,\nengineering erp software,\nerp in software engineering,\nerp system engineering,\nerp for engineering industry,\nengineering erp systems,\nerp in industrial engineering,\nerp mechanical engineering,\nerp for engineering companies,",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Engineering ERP Software Solutions | FinByz Tech",
      "description": "FinByz Tech delivers ERPNext-based engineering ERP software solutions. Streamline engineering and software engineering operations with integrated project, inventory, and financial management.",
      
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
        <meta itemProp="name" content="Engineering ERP Software Solutions | FinByz Tech" />
        <meta itemProp="description" content="FinByz Tech delivers ERPNext-based engineering ERP software solutions. Streamline engineering and software engineering operations with integrated project, inventory, and financial management." />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
