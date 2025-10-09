import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERP for Chemical Industry: Comprehensive Cost-Benefit Analysis Guide",
  description: "Discover the financial benefits and costs of ERP systems in the chemical industry with our comprehensive guide to making informed decisions.",
  keywords: "Chemical Industry ERP,\nchemical ERP Software,\nERP For Chemical, \nERP in Chemical Industry\n\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/cost-benefit-analysis-of-erp-investments-in-the-chemical-sector",
  },
  openGraph: {
    title: "ERP for Chemical Industry: Comprehensive Cost-Benefit Analysis Guide",
    description: "Discover the financial benefits and costs of ERP systems in the chemical industry with our comprehensive guide to making informed decisions.",
    url: "https://web.finbyz.tech/cost-benefit-analysis-of-erp-investments-in-the-chemical-sector",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP for Chemical Industry: Comprehensive Cost-Benefit Analysis Guide",
    description: "Discover the financial benefits and costs of ERP systems in the chemical industry with our comprehensive guide to making informed decisions.",
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
  },
  
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ERP for Chemical Industry: Comprehensive Cost-Benefit Analysis Guide",
    "description": "Discover the financial benefits and costs of ERP systems in the chemical industry with our comprehensive guide to making informed decisions.",
    "url": "https://web.finbyz.tech/cost-benefit-analysis-of-erp-investments-in-the-chemical-sector",
    
    "keywords": "Chemical Industry ERP,\nchemical ERP Software,\nERP For Chemical, \nERP in Chemical Industry\n\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "ERP for Chemical Industry: Comprehensive Cost-Benefit Analysis Guide",
      "description": "Discover the financial benefits and costs of ERP systems in the chemical industry with our comprehensive guide to making informed decisions.",
      "articleBody": "<section>\n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup text-center\"><img alt=\"cost-benefit-analysis-of-erp-investments-in-the-chemical-sector\"\n                    height=\"100%\" src=\"/files/15-04-24.svg\" title=\"cost-benefit-analysis-of-erp-investments-in-the-chemical-sector\"\n                    width=\"80%\"></div>\n        </div>\n    </div>\n<br> \n</section>\n<section class=\"mt-5\">\n    <div class",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech Pvt Ltd"
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
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
        <meta itemProp="name" content="ERP for Chemical Industry: Comprehensive Cost-Benefit Analysis Guide" />
        <meta itemProp="description" content="Discover the financial benefits and costs of ERP systems in the chemical industry with our comprehensive guide to making informed decisions." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
