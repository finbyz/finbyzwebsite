import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "What is ERP Software? | Understanding Enterprise Resource Planning Systems",
  description: "Discover what ERP software is and how Enterprise Resource Planning Systems streamline business operations. Learn about components, benefits, and deployment options.",
  keywords: "Enterprise Resource Planning Systems\nWhat is ERP software,\nenterprise erp",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/What-is-ERP-software",
  },
  openGraph: {
    title: "What is ERP Software? | Understanding Enterprise Resource Planning Systems",
    description: "Discover what ERP software is and how Enterprise Resource Planning Systems streamline business operations. Learn about components, benefits, and deployment options.",
    url: "https://finbyz.tech/What-is-ERP-software",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "What is ERP Software? | Understanding Enterprise Resource Planning Systems",
    description: "Discover what ERP software is and how Enterprise Resource Planning Systems streamline business operations. Learn about components, benefits, and deployment options.",
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
  "@id": "https://finbyz.tech/What-is-ERP-software#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/What-is-ERP-software",
  "headline": "What is ERP Software? | Understanding Enterprise Resource Planning Systems",
  "name": "What is ERP Software? | Understanding Enterprise Resource Planning Systems",
  "description": "Discover what ERP software is and how Enterprise Resource Planning Systems streamline business operations. Learn about components, benefits, and deployment options.",
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
  "url": "https://finbyz.tech/What-is-ERP-software",
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
    "Enterprise Resource Planning Systems\nWhat is ERP software",
    "enterprise erp"
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
        <meta itemProp="headline" content="What is ERP Software? | Understanding Enterprise Resource Planning Systems" />
        <meta itemProp="description" content="Discover what ERP software is and how Enterprise Resource Planning Systems streamline business operations. Learn about components, benefits, and deployment options." />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
