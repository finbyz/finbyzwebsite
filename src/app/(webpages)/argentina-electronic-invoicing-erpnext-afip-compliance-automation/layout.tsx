import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Argentina Electronic Invoicing in ERPNext: AFIP Compliance & Automation",
  description: "Implement AFIP-compliant electronic invoicing in ERP Next for Argentina. Automate invoice validation, ensure tax compliance, and streamline financial operations with custom fields, API integration, and optimized workflows.",
  keywords: "Argentina electronic invoicing ERPNext,\nERPNext AFIP integration,\nAFIP compliance ERPNext,\nERPNext Argentina localization",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/argentina-electronic-invoicing-erpnext-afip-compliance-automation",
  },
  openGraph: {
    title: "Argentina Electronic Invoicing in ERPNext: AFIP Compliance & Automation",
    description: "Implement AFIP-compliant electronic invoicing in ERP Next for Argentina. Automate invoice validation, ensure tax compliance, and streamline financial operations with custom fields, API integration, and optimized workflows.",
    url: "https://web.finbyz.tech/argentina-electronic-invoicing-erpnext-afip-compliance-automation",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Line Banner-41 (2)_11zon.png", width: 1200, height: 630, alt: "Argentina Electronic Invoicing in ERPNext: AFIP Compliance & Automation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Argentina Electronic Invoicing in ERPNext: AFIP Compliance & Automation",
    description: "Implement AFIP-compliant electronic invoicing in ERP Next for Argentina. Automate invoice validation, ensure tax compliance, and streamline financial operations with custom fields, API integration, and optimized workflows.",
    creator: "@finbyz",
    images: ["/files/Line Banner-41 (2)_11zon.png"],
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
    "name": "Argentina Electronic Invoicing in ERPNext: AFIP Compliance & Automation",
    "description": "Implement AFIP-compliant electronic invoicing in ERP Next for Argentina. Automate invoice validation, ensure tax compliance, and streamline financial operations with custom fields, API integration, and optimized workflows.",
    "url": "https://web.finbyz.tech/argentina-electronic-invoicing-erpnext-afip-compliance-automation",
    "image": "/files/Line Banner-41 (2)_11zon.png",
    "keywords": "Argentina electronic invoicing ERPNext,\nERPNext AFIP integration,\nAFIP compliance ERPNext,\nERPNext Argentina localization",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Argentina Electronic Invoicing in ERPNext: AFIP Compliance & Automation",
      "description": "Implement AFIP-compliant electronic invoicing in ERP Next for Argentina. Automate invoice validation, ensure tax compliance, and streamline financial operations with custom fields, API integration, and optimized workflows.",
      
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
        <meta itemProp="name" content="Argentina Electronic Invoicing in ERPNext: AFIP Compliance & Automation" />
        <meta itemProp="description" content="Implement AFIP-compliant electronic invoicing in ERP Next for Argentina. Automate invoice validation, ensure tax compliance, and streamline financial operations with custom fields, API integration, and optimized workflows." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
