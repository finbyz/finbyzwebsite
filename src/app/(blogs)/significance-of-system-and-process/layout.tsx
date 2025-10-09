import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Enhancing Business Efficiency: The Importance of Systems, Processes, and SOPs",
  description: "Discover how implementing standard operating procedures and structured processes can drive efficiency, consistency, and adaptability in your business operations.",
  keywords: "standard operating procedures,\nprocess improvement,\nSystem and process",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/significance-of-system-and-process",
  },
  openGraph: {
    title: "Enhancing Business Efficiency: The Importance of Systems, Processes, and SOPs",
    description: "Discover how implementing standard operating procedures and structured processes can drive efficiency, consistency, and adaptability in your business operations.",
    url: "https://finbyz.tech/significance-of-system-and-process",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Enhancing Business Efficiency: The Importance of Systems, Processes, and SOPs",
    description: "Discover how implementing standard operating procedures and structured processes can drive efficiency, consistency, and adaptability in your business operations.",
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
  "@id": "https://finbyz.tech/significance-of-system-and-process#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/significance-of-system-and-process",
  "headline": "Enhancing Business Efficiency: The Importance of Systems, Processes, and SOPs",
  "name": "Enhancing Business Efficiency: The Importance of Systems, Processes, and SOPs",
  "description": "Discover how implementing standard operating procedures and structured processes can drive efficiency, consistency, and adaptability in your business operations.",
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
  "url": "https://finbyz.tech/significance-of-system-and-process",
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
    "standard operating procedures",
    "process improvement",
    "System and process"
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
        <meta itemProp="headline" content="Enhancing Business Efficiency: The Importance of Systems, Processes, and SOPs" />
        <meta itemProp="description" content="Discover how implementing standard operating procedures and structured processes can drive efficiency, consistency, and adaptability in your business operations." />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
