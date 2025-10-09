import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERP for Chemical Industry: Comprehensive Cost-Benefit Analysis Guide",
  description: "Discover the benefits of ERP systems in the chemical industry. Learn how to conduct a cost-benefit analysis to maximize ROI and enhance operational efficiency.",
  keywords: "Chemical Industry ERP,\nchemical ERP Software,\nERP For Chemical, \nERP in Chemical Industry\n\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/cost-benefit-analysis-of-erp-investments-in-the-chemical-sector",
  },
  openGraph: {
    title: "ERP for Chemical Industry: Comprehensive Cost-Benefit Analysis Guide",
    description: "Discover the benefits of ERP systems in the chemical industry. Learn how to conduct a cost-benefit analysis to maximize ROI and enhance operational efficiency.",
    url: "https://finbyz.tech/cost-benefit-analysis-of-erp-investments-in-the-chemical-sector",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP for Chemical Industry: Comprehensive Cost-Benefit Analysis Guide",
    description: "Discover the benefits of ERP systems in the chemical industry. Learn how to conduct a cost-benefit analysis to maximize ROI and enhance operational efficiency.",
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
  "@id": "https://finbyz.tech/cost-benefit-analysis-of-erp-investments-in-the-chemical-sector#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/cost-benefit-analysis-of-erp-investments-in-the-chemical-sector",
  "headline": "ERP for Chemical Industry: Comprehensive Cost-Benefit Analysis Guide",
  "name": "ERP for Chemical Industry: Comprehensive Cost-Benefit Analysis Guide",
  "description": "Discover the benefits of ERP systems in the chemical industry. Learn how to conduct a cost-benefit analysis to maximize ROI and enhance operational efficiency.",
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
  "url": "https://finbyz.tech/cost-benefit-analysis-of-erp-investments-in-the-chemical-sector",
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
    "Chemical Industry ERP",
    "chemical ERP Software",
    "ERP For Chemical",
    "ERP in Chemical Industry"
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
        <meta itemProp="headline" content="ERP for Chemical Industry: Comprehensive Cost-Benefit Analysis Guide" />
        <meta itemProp="description" content="Discover the benefits of ERP systems in the chemical industry. Learn how to conduct a cost-benefit analysis to maximize ROI and enhance operational efficiency." />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
