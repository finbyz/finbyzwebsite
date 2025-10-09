import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Benefits of Integrating ERP and CRM Systems for Business Growth",
  description: "Discover how ERP and CRM integration can streamline operations, enhance customer experiences, and drive business growth. Learn the key benefits and best practices.",
  keywords: "ERP and CRM,\nERP and CRM integration, \nbenefits of ERP and CRM integration, \nCRM systems,\nERP ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/benefits-of-erp-and-crm-integration",
  },
  openGraph: {
    title: "Top Benefits of Integrating ERP and CRM Systems for Business Growth",
    description: "Discover how ERP and CRM integration can streamline operations, enhance customer experiences, and drive business growth. Learn the key benefits and best practices.",
    url: "https://finbyz.tech/benefits-of-erp-and-crm-integration",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Benefits of Integrating ERP and CRM Systems for Business Growth",
    description: "Discover how ERP and CRM integration can streamline operations, enhance customer experiences, and drive business growth. Learn the key benefits and best practices.",
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
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/benefits-of-erp-and-crm-integration#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/benefits-of-erp-and-crm-integration",
  "headline": "Top Benefits of Integrating ERP and CRM Systems for Business Growth",
  "name": "Top Benefits of Integrating ERP and CRM Systems for Business Growth",
  "description": "Discover how ERP and CRM integration can streamline operations, enhance customer experiences, and drive business growth. Learn the key benefits and best practices.",
  "datePublished": "",
  "dateModified": "",
  "author": {
    "@type": "Person",
    "name": "FinByz Tech Pvt Ltd",
    "url": "https://finbyz.tech/about-us",
    "image": {
      "@type": "ImageObject",
      "url": "https://finbyz.tech/files/FinbyzLogo.png",
      "height": "96",
      "width": "96"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "FinByz Tech Pvt Ltd",
    "url": "https://finbyz.tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://finbyz.tech/files/FinbyzLogo.png",
      "width": "600",
      "height": "60"
    }
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://finbyz.tech/files/FinbyzLogo.png",
    "width": "1200",
    "height": "630"
  },
  "url": "https://finbyz.tech/benefits-of-erp-and-crm-integration",
  "isPartOf": {
    "@type": "Blog",
    "@id": "https://finbyz.tech/blog-post/",
    "name": "FinByz Tech Blog",
    "publisher": {
      "@type": "Organization",
      "@id": "https://finbyz.tech",
      "name": "FinByz Tech Pvt Ltd"
    }
  },
  "keywords": [
    "ERP and CRM",
    "ERP and CRM integration",
    "benefits of ERP and CRM integration",
    "CRM systems",
    "ERP"
  ]
};

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Top Benefits of Integrating ERP and CRM Systems for Business Growth" />
        <meta itemProp="description" content="Discover how ERP and CRM integration can streamline operations, enhance customer experiences, and drive business growth. Learn the key benefits and best practices." />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
