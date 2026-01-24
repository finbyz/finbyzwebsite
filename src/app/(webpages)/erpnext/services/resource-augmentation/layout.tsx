import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext Resource Augmentation Hire Expert Developers",
  description: "Bridge skill gaps and accelerate projects with expert ERPNext resource augmentation. Access certified consultants, developers, and functional experts for flexible, scalable team expansion.",
  keywords: "ERPNext resource augmentation, hire ERPNext developers, ERPNext consultants for hire, outsource ERPNext development, ERPNext functional experts, scalable IT resources, remote ERPNext team, ERPNext project acceleration, IT staff augmentation India, ERPNext talent pool, flexible IT staffing, ERPNext implementation support, digital transformation resources, business process automation experts",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/erpnext/services/resource-augmentation",
  },
  openGraph: {
    title: "ERPNext Resource Augmentation Hire Expert Developers",
    description: "Bridge skill gaps and accelerate projects with expert ERPNext resource augmentation. Access certified consultants, developers, and functional experts for flexible, scalable team expansion.",
    url: "https://finbyz.tech/erpnext/services/resource-augmentation",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Resource Augmentation Hire Expert Developers",
    description: "Bridge skill gaps and accelerate projects with expert ERPNext resource augmentation. Access certified consultants, developers, and functional experts for flexible, scalable team expansion.",
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
    "name": "ERPNext Resource Augmentation Hire Expert Developers",
    "description": "Bridge skill gaps and accelerate projects with expert ERPNext resource augmentation. Access certified consultants, developers, and functional experts for flexible, scalable team expansion.",
    "url": "https://finbyz.tech/erpnext/services/resource-augmentation",
    
    "keywords": "ERPNext resource augmentation, hire ERPNext developers, ERPNext consultants for hire, outsource ERPNext development, ERPNext functional experts, scalable IT resources, remote ERPNext team, ERPNext project acceleration, IT staff augmentation India, ERPNext talent pool, flexible IT staffing, ERPNext implementation support, digital transformation resources, business process automation experts",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERPNext Resource Augmentation Hire Expert Developers",
      "description": "Bridge skill gaps and accelerate projects with expert ERPNext resource augmentation. Access certified consultants, developers, and functional experts for flexible, scalable team expansion.",
      "articleBody": "Scalable ERPNext resources and technology experts to augment your internal teams.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-25T08:07:25.718Z",
      "dateModified": "2025-10-25T08:07:25.718Z",
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
        <meta itemProp="name" content="ERPNext Resource Augmentation Hire Expert Developers" />
        <meta itemProp="description" content="Bridge skill gaps and accelerate projects with expert ERPNext resource augmentation. Access certified consultants, developers, and functional experts for flexible, scalable team expansion." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
