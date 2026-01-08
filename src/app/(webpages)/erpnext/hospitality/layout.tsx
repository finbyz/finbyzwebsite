import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header";



export const metadata: Metadata = {
  title: "ERPNext for Hotels Resorts Travel Agencies Hospitality",
  description: "Streamline hospitality operations with tailored ERPNext solutions. Manage bookings, guests, inventory, and finance efficiently for hotels, resorts, and travel agencies.",
  keywords: "ERP for Hospitality, ERPNext Hospitality, Travel Agency ERP, Hotel Management Software, Resort ERP System, Guest Management System, Booking Management Software, Tourism ERP Solution, F&B ERP System, Integrated Hospitality Software, Travel Tech Solutions, Hospitality Operations Management, ERP Implementation Hospitality",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/erp-for-travel-hospitality",
  },
  openGraph: {
    title: "ERPNext for Hotels Resorts Travel Agencies Hospitality",
    description: "Streamline hospitality operations with tailored ERPNext solutions. Manage bookings, guests, inventory, and finance efficiently for hotels, resorts, and travel agencies.",
    url: "https://finbyz.tech/erp-for-travel-hospitality",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext for Hotels Resorts Travel Agencies Hospitality",
    description: "Streamline hospitality operations with tailored ERPNext solutions. Manage bookings, guests, inventory, and finance efficiently for hotels, resorts, and travel agencies.",
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
    "name": "ERPNext for Hotels Resorts Travel Agencies Hospitality",
    "description": "Streamline hospitality operations with tailored ERPNext solutions. Manage bookings, guests, inventory, and finance efficiently for hotels, resorts, and travel agencies.",
    "url": "https://finbyz.tech/erp-for-travel-hospitality",

    "keywords": "ERP for Hospitality, ERPNext Hospitality, Travel Agency ERP, Hotel Management Software, Resort ERP System, Guest Management System, Booking Management Software, Tourism ERP Solution, F&B ERP System, Integrated Hospitality Software, Travel Tech Solutions, Hospitality Operations Management, ERP Implementation Hospitality",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERPNext for Hotels Resorts Travel Agencies Hospitality",
      "description": "Streamline hospitality operations with tailored ERPNext solutions. Manage bookings, guests, inventory, and finance efficiently for hotels, resorts, and travel agencies.",
      "articleBody": "ERPNext solutions tailored for travel agencies, hotels, and hospitality businesses.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-28T09:58:09.108Z",
      "dateModified": "2025-10-28T09:58:09.108Z",
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
          <meta itemProp="name" content="ERPNext for Hotels Resorts Travel Agencies Hospitality" />
          <meta itemProp="description" content="Streamline hospitality operations with tailored ERPNext solutions. Manage bookings, guests, inventory, and finance efficiently for hotels, resorts, and travel agencies." />
        </article>

        {children}

        <BusinessSlider />

      </main>

    </>
  );
}
