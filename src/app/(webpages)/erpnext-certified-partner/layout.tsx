import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech",
  description: "Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs.",
  keywords: "erpnext partner,\nfrappe partner,\nerpnext partner in ahmedabad, gujarat\nerpnext,\nerpnext software,\nerpnext certified partner in india,\nerpnext service providers,erpnext service in uk,\nerpnext service in Canada,	\nerpnext service provider in uk,\nerpnext certified partners,\nerpnext service provider in Canada,\nerpnext partners in uk,\nERP Software, CRM Software, \nAccounting Software, \nManufacturing Software",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/erpnext-certified-partner",
  },
  openGraph: {
    title: "Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech",
    description: "Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs.",
    url: "https://web.finbyz.tech/erpnext-certified-partner",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Frappe-Certified-parnter-Page Design-SVG.svg", width: 1200, height: 630, alt: "Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech",
    description: "Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs.",
    creator: "@yourhandle",
    images: ["/files/Frappe-Certified-parnter-Page Design-SVG.svg"],
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
    "name": "Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech",
    "description": "Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs.",
    "url": "https://web.finbyz.tech/erpnext-certified-partner",
    "image": "/files/Frappe-Certified-parnter-Page Design-SVG.svg",
    "keywords": "erpnext partner,\nfrappe partner,\nerpnext partner in ahmedabad, gujarat\nerpnext,\nerpnext software,\nerpnext certified partner in india,\nerpnext service providers,erpnext service in uk,\nerpnext service in Canada,	\nerpnext service provider in uk,\nerpnext certified partners,\nerpnext service provider in Canada,\nerpnext partners in uk,\nERP Software, CRM Software, \nAccounting Software, \nManufacturing Software",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech",
      "description": "Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs.",
      
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
        <meta itemProp="name" content="Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech" />
        <meta itemProp="description" content="Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
