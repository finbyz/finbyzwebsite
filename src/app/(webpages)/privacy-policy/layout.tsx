import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Privacy Policy | Finbyz Tech Data Protection & User Information Security",
  description: "This Privacy Policy is meant to help you understand what information we collect, why we collect it, and what you can do to protect your information.",
  keywords: "Finbyz Tech privacy policy,\nData protection policy Finbyz,\nPersonal information policy,\nERPNext user data privacy",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Finbyz Tech Data Protection & User Information Security",
    description: "This Privacy Policy is meant to help you understand what information we collect, why we collect it, and what you can do to protect your information.",
    url: "https://web.finbyz.tech/privacy-policy",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Finbyz Tech Data Protection & User Information Security",
    description: "This Privacy Policy is meant to help you understand what information we collect, why we collect it, and what you can do to protect your information.",
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
    "name": "Privacy Policy | Finbyz Tech Data Protection & User Information Security",
    "description": "This Privacy Policy is meant to help you understand what information we collect, why we collect it, and what you can do to protect your information.",
    "url": "https://web.finbyz.tech/privacy-policy",
    
    "keywords": "Finbyz Tech privacy policy,\nData protection policy Finbyz,\nPersonal information policy,\nERPNext user data privacy",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Privacy Policy | Finbyz Tech Data Protection & User Information Security",
      "description": "This Privacy Policy is meant to help you understand what information we collect, why we collect it, and what you can do to protect your information.",
      
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
        <meta itemProp="name" content="Privacy Policy | Finbyz Tech Data Protection & User Information Security" />
        <meta itemProp="description" content="This Privacy Policy is meant to help you understand what information we collect, why we collect it, and what you can do to protect your information." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
