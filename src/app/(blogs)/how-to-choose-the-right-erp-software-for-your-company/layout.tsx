import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Choose the Best ERP Software: A Comprehensive Guide to Top ERP Solutions",
  description: "Discover how to select the best ERP software for your business. Explore top ERP solutions, compare leading systems, and make informed decisions to optimize your operations.",
  keywords: "Best ERP Software,\nerp solutions,\nbest erp system,\nERP Software,\nERP System\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/how-to-choose-the-right-erp-software-for-your-company",
  },
  openGraph: {
    title: "How to Choose the Best ERP Software: A Comprehensive Guide to Top ERP Solutions",
    description: "Discover how to select the best ERP software for your business. Explore top ERP solutions, compare leading systems, and make informed decisions to optimize your operations.",
    url: "https://finbyz.tech/how-to-choose-the-right-erp-software-for-your-company",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose the Best ERP Software: A Comprehensive Guide to Top ERP Solutions",
    description: "Discover how to select the best ERP software for your business. Explore top ERP solutions, compare leading systems, and make informed decisions to optimize your operations.",
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
  "@id": "https://finbyz.tech/how-to-choose-the-right-erp-software-for-your-company#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/how-to-choose-the-right-erp-software-for-your-company",
  "headline": "How to Choose the Best ERP Software: A Comprehensive Guide to Top ERP Solutions",
  "name": "How to Choose the Best ERP Software: A Comprehensive Guide to Top ERP Solutions",
  "description": "Discover how to select the best ERP software for your business. Explore top ERP solutions, compare leading systems, and make informed decisions to optimize your operations.",
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
  "url": "https://finbyz.tech/how-to-choose-the-right-erp-software-for-your-company",
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
    "Best ERP Software",
    "erp solutions",
    "best erp system",
    "ERP Software",
    "ERP System"
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
        <meta itemProp="headline" content="How to Choose the Best ERP Software: A Comprehensive Guide to Top ERP Solutions" />
        <meta itemProp="description" content="Discover how to select the best ERP software for your business. Explore top ERP solutions, compare leading systems, and make informed decisions to optimize your operations." />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
