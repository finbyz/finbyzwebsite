import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best CRM Software & Open Source CRM System | Finbyz Tech",
  description: "Streamline your sales, marketing, and support with Finbyz CRM Software. Discover our powerful CRM system and flexible open source CRM solutions designed for growth.",
  keywords: "CRM Software, \ncrm system,\nopen source crm,\nSales Tracker Software,\nsales crm,\ncrm programs,\ncustomer management system,\ncrm companies,\n",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/crm-software",
  },
  openGraph: {
    title: "Best CRM Software & Open Source CRM System | Finbyz Tech",
    description: "Streamline your sales, marketing, and support with Finbyz CRM Software. Discover our powerful CRM system and flexible open source CRM solutions designed for growth.",
    url: "https://web.finbyz.tech/crm-software",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/CRMWord.svg", width: 1200, height: 630, alt: "Best CRM Software & Open Source CRM System | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best CRM Software & Open Source CRM System | Finbyz Tech",
    description: "Streamline your sales, marketing, and support with Finbyz CRM Software. Discover our powerful CRM system and flexible open source CRM solutions designed for growth.",
    creator: "@yourhandle",
    images: ["/files/CRMWord.svg"],
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
    "name": "Best CRM Software & Open Source CRM System | Finbyz Tech",
    "description": "Streamline your sales, marketing, and support with Finbyz CRM Software. Discover our powerful CRM system and flexible open source CRM solutions designed for growth.",
    "url": "https://web.finbyz.tech/crm-software",
    "image": "/files/CRMWord.svg",
    "keywords": "CRM Software, \ncrm system,\nopen source crm,\nSales Tracker Software,\nsales crm,\ncrm programs,\ncustomer management system,\ncrm companies,\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Best CRM Software & Open Source CRM System | Finbyz Tech",
      "description": "Streamline your sales, marketing, and support with Finbyz CRM Software. Discover our powerful CRM system and flexible open source CRM solutions designed for growth.",
      
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
        <meta itemProp="name" content="Best CRM Software & Open Source CRM System | Finbyz Tech" />
        <meta itemProp="description" content="Streamline your sales, marketing, and support with Finbyz CRM Software. Discover our powerful CRM system and flexible open source CRM solutions designed for growth." />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
