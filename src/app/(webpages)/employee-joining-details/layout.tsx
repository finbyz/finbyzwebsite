import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Employee Onboarding Process at Finbyz Tech | Join Our Team",
  description: "Employee Joining details",
  keywords: "employee onboarding, new hire process, joining checklist, Finbyz Tech careers",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/employee-joining-details",
  },
  openGraph: {
    title: "Employee Onboarding Process at Finbyz Tech | Join Our Team",
    description: "Employee Joining details",
    url: "https://web.finbyz.tech/employee-joining-details",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Employee Onboarding Process at Finbyz Tech | Join Our Team",
    description: "Employee Joining details",
    creator: "@yourhandle",
    
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
    "name": "Employee Onboarding Process at Finbyz Tech | Join Our Team",
    "description": "Employee Joining details",
    "url": "https://web.finbyz.tech/employee-joining-details",
    
    "keywords": "employee onboarding, new hire process, joining checklist, Finbyz Tech careers",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Employee Onboarding Process at Finbyz Tech | Join Our Team",
      "description": "Employee Joining details",
      
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
        <meta itemProp="name" content="Employee Onboarding Process at Finbyz Tech | Join Our Team" />
        <meta itemProp="description" content="Employee Joining details" />
        {children}
      </article>
      
      <BusinessSlider />
    </>
  );
}
