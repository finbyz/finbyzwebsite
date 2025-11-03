import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Legal Agreement for Software Services and Platform Use",
  description: "Understand the terms governing your use of our innovative IT consulting, software development, and ERPNext services. Review our legal agreement for digital solutions.",
  keywords: "terms of service, legal agreement, user agreement, website terms, software service terms, IT consulting terms, Finbyz Tech legal, ERPNext service terms, digital solution terms, intellectual property, data privacy, dispute resolution, service use policy, acceptable use policy",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/terms-of-service",
  },
  openGraph: {
    title: "Legal Agreement for Software Services and Platform Use",
    description: "Understand the terms governing your use of our innovative IT consulting, software development, and ERPNext services. Review our legal agreement for digital solutions.",
    url: "https://erp.finbyz.tech/terms-of-service",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Agreement for Software Services and Platform Use",
    description: "Understand the terms governing your use of our innovative IT consulting, software development, and ERPNext services. Review our legal agreement for digital solutions.",
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
    "name": "Legal Agreement for Software Services and Platform Use",
    "description": "Understand the terms governing your use of our innovative IT consulting, software development, and ERPNext services. Review our legal agreement for digital solutions.",
    "url": "https://erp.finbyz.tech/terms-of-service",
    
    "keywords": "terms of service, legal agreement, user agreement, website terms, software service terms, IT consulting terms, Finbyz Tech legal, ERPNext service terms, digital solution terms, intellectual property, data privacy, dispute resolution, service use policy, acceptable use policy",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Legal Agreement for Software Services and Platform Use",
      "description": "Understand the terms governing your use of our innovative IT consulting, software development, and ERPNext services. Review our legal agreement for digital solutions.",
      "articleBody": "Finbyz Tech’s terms of service governing the use of our website, products, and services.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-27T04:17:56.586Z",
      "dateModified": "2025-10-27T04:17:56.586Z",
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Legal Agreement for Software Services and Platform Use" />
        <meta itemProp="description" content="Understand the terms governing your use of our innovative IT consulting, software development, and ERPNext services. Review our legal agreement for digital solutions." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
