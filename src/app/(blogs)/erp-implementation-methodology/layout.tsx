import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Comprehensive Guide to ERP Implementation Methodologies: Traditional vs. Modern Approaches",
  description: "Explore the various ERP implementation methodologies, including traditional and modern approaches. Learn key considerations for successful ERP system implementation.",
  keywords: "ERP System Implementation,\nERP Implementation methodology,\ntraditional methodology, \nturnkey  methodology",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erp-implementation-methodology",
  },
  openGraph: {
    title: "Comprehensive Guide to ERP Implementation Methodologies: Traditional vs. Modern Approaches",
    description: "Explore the various ERP implementation methodologies, including traditional and modern approaches. Learn key considerations for successful ERP system implementation.",
    url: "https://finbyz.tech/erp-implementation-methodology",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Guide to ERP Implementation Methodologies: Traditional vs. Modern Approaches",
    description: "Explore the various ERP implementation methodologies, including traditional and modern approaches. Learn key considerations for successful ERP system implementation.",
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
  "@id": "https://finbyz.tech/erp-implementation-methodology#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/erp-implementation-methodology",
  "headline": "Comprehensive Guide to ERP Implementation Methodologies: Traditional vs. Modern Approaches",
  "name": "Comprehensive Guide to ERP Implementation Methodologies: Traditional vs. Modern Approaches",
  "description": "Explore the various ERP implementation methodologies, including traditional and modern approaches. Learn key considerations for successful ERP system implementation.",
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
  "url": "https://finbyz.tech/erp-implementation-methodology",
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
    "ERP System Implementation",
    "ERP Implementation methodology",
    "traditional methodology",
    "turnkey  methodology"
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
        <meta itemProp="headline" content="Comprehensive Guide to ERP Implementation Methodologies: Traditional vs. Modern Approaches" />
        <meta itemProp="description" content="Explore the various ERP implementation methodologies, including traditional and modern approaches. Learn key considerations for successful ERP system implementation." />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
