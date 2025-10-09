import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Productify Privacy Policy | Finbyz Tech – Data Protection & User Privacy",
  description: "Productify Privacy Policy",
  keywords: "employee onboarding, new hire process, joining checklist, Finbyz Tech careers",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/productify-privacy-policy",
  },
  openGraph: {
    title: "Productify Privacy Policy | Finbyz Tech – Data Protection & User Privacy",
    description: "Productify Privacy Policy",
    url: "https://web.finbyz.tech/productify-privacy-policy",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Productify Privacy Policy | Finbyz Tech – Data Protection & User Privacy",
    description: "Productify Privacy Policy",
    creator: "@finbyz",
    
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
    "name": "Productify Privacy Policy | Finbyz Tech – Data Protection & User Privacy",
    "description": "Productify Privacy Policy",
    "url": "https://web.finbyz.tech/productify-privacy-policy",
    
    "keywords": "employee onboarding, new hire process, joining checklist, Finbyz Tech careers",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Productify Privacy Policy | Finbyz Tech – Data Protection & User Privacy",
      "description": "Productify Privacy Policy",
      
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
        <meta itemProp="name" content="Productify Privacy Policy | Finbyz Tech – Data Protection & User Privacy" />
        <meta itemProp="description" content="Productify Privacy Policy" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
