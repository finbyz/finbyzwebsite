import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top 8 ERP Implementation Challenges and How to Overcome Them",
  description: "Discover the 8 most common challenges faced during ERP implementation and learn effective strategies to overcome these hurdles for a successful ERP integration.",
  keywords: "erp implementation, Challenges of ERP, erp implementation challenges",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/challenges-of-erp-implementation",
  },
  openGraph: {
    title: "Top 8 ERP Implementation Challenges and How to Overcome Them",
    description: "Discover the 8 most common challenges faced during ERP implementation and learn effective strategies to overcome these hurdles for a successful ERP integration.",
    url: "https://finbyz.tech/challenges-of-erp-implementation",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 8 ERP Implementation Challenges and How to Overcome Them",
    description: "Discover the 8 most common challenges faced during ERP implementation and learn effective strategies to overcome these hurdles for a successful ERP integration.",
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
  "@id": "https://finbyz.tech/challenges-of-erp-implementation#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/challenges-of-erp-implementation",
  "headline": "Top 8 ERP Implementation Challenges and How to Overcome Them",
  "name": "Top 8 ERP Implementation Challenges and How to Overcome Them",
  "description": "Discover the 8 most common challenges faced during ERP implementation and learn effective strategies to overcome these hurdles for a successful ERP integration.",
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
  "url": "https://finbyz.tech/challenges-of-erp-implementation",
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
    "erp implementation",
    "Challenges of ERP",
    "erp implementation challenges"
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
        <meta itemProp="headline" content="Top 8 ERP Implementation Challenges and How to Overcome Them" />
        <meta itemProp="description" content="Discover the 8 most common challenges faced during ERP implementation and learn effective strategies to overcome these hurdles for a successful ERP integration." />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
