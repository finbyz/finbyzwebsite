import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Industry-Specific vs. Generic ERP: Which ERP Software is Right for Your Business?",
  description: "Explore the key differences between industry-specific and generic ERP systems. Learn which ERP software aligns best with your business needs and industry requirements.",
  keywords: "industry specific erp,\ngeneric erp,\nindustry specific erp software\nIndustry Specific vs Generic ERP",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/industry-specific-vs-generic-erp",
  },
  openGraph: {
    title: "Industry-Specific vs. Generic ERP: Which ERP Software is Right for Your Business?",
    description: "Explore the key differences between industry-specific and generic ERP systems. Learn which ERP software aligns best with your business needs and industry requirements.",
    url: "https://finbyz.tech/industry-specific-vs-generic-erp",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry-Specific vs. Generic ERP: Which ERP Software is Right for Your Business?",
    description: "Explore the key differences between industry-specific and generic ERP systems. Learn which ERP software aligns best with your business needs and industry requirements.",
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
  "@id": "https://finbyz.tech/industry-specific-vs-generic-erp#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/industry-specific-vs-generic-erp",
  "headline": "Industry-Specific vs. Generic ERP: Which ERP Software is Right for Your Business?",
  "name": "Industry-Specific vs. Generic ERP: Which ERP Software is Right for Your Business?",
  "description": "Explore the key differences between industry-specific and generic ERP systems. Learn which ERP software aligns best with your business needs and industry requirements.",
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
  "url": "https://finbyz.tech/industry-specific-vs-generic-erp",
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
    "industry specific erp",
    "generic erp",
    "industry specific erp software\nIndustry Specific vs Generic ERP"
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
        <meta itemProp="headline" content="Industry-Specific vs. Generic ERP: Which ERP Software is Right for Your Business?" />
        <meta itemProp="description" content="Explore the key differences between industry-specific and generic ERP systems. Learn which ERP software aligns best with your business needs and industry requirements." />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
