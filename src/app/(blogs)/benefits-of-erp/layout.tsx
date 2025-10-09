import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Benefits and Advantages of ERP Systems for Business Efficiency",
  description: "Discover the key benefits and advantages of ERP systems, including enhanced efficiency, real-time analytics, and cost savings, to streamline your business operations.",
  keywords: "benefits of ERP, advantages of erp, advantages of erp systems,  erp benefits, advantages of erp system, erp software advantages, benefits of erp system, erp benefits presentation, erp software benefits advantages, erp system benefits advantages",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/benefits-of-erp",
  },
  openGraph: {
    title: "Top Benefits and Advantages of ERP Systems for Business Efficiency",
    description: "Discover the key benefits and advantages of ERP systems, including enhanced efficiency, real-time analytics, and cost savings, to streamline your business operations.",
    url: "https://finbyz.tech/benefits-of-erp",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Benefits and Advantages of ERP Systems for Business Efficiency",
    description: "Discover the key benefits and advantages of ERP systems, including enhanced efficiency, real-time analytics, and cost savings, to streamline your business operations.",
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
  "@id": "https://finbyz.tech/benefits-of-erp#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/benefits-of-erp",
  "headline": "Top Benefits and Advantages of ERP Systems for Business Efficiency",
  "name": "Top Benefits and Advantages of ERP Systems for Business Efficiency",
  "description": "Discover the key benefits and advantages of ERP systems, including enhanced efficiency, real-time analytics, and cost savings, to streamline your business operations.",
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
  "url": "https://finbyz.tech/benefits-of-erp",
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
    "benefits of ERP",
    "advantages of erp",
    "advantages of erp systems",
    "erp benefits",
    "advantages of erp system",
    "erp software advantages",
    "benefits of erp system",
    "erp benefits presentation",
    "erp software benefits advantages",
    "erp system benefits advantages"
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
        <meta itemProp="headline" content="Top Benefits and Advantages of ERP Systems for Business Efficiency" />
        <meta itemProp="description" content="Discover the key benefits and advantages of ERP systems, including enhanced efficiency, real-time analytics, and cost savings, to streamline your business operations." />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
