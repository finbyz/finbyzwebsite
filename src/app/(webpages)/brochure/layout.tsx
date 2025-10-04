import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More",
  description: "Brochure",
  keywords: "Finbyz Tech brochure,\nERPNext brochure,\nERP solutions brochure,\nERPNext services PDF,\nCustom ERP brochure",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/brochure",
  },
  openGraph: {
    title: "Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More",
    description: "Brochure",
    url: "https://web.finbyz.tech/brochure",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/brocure banner.svg", width: 1200, height: 630, alt: "Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More",
    description: "Brochure",
    creator: "@yourhandle",
    images: ["/files/brocure banner.svg"],
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
    "name": "Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More",
    "description": "Brochure",
    "url": "https://web.finbyz.tech/brochure",
    "image": "/files/brocure banner.svg",
    "keywords": "Finbyz Tech brochure,\nERPNext brochure,\nERP solutions brochure,\nERPNext services PDF,\nCustom ERP brochure",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More",
      "description": "Brochure",
      
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
        <meta itemProp="name" content="Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More" />
        <meta itemProp="description" content="Brochure" />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
