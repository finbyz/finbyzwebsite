import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Choose the Best ERP Software: A Comprehensive Guide to Top ERP Solutions",
  description: "Confused what’s the best ERP software for your business? Here’s a guide to help you choose best ERP solution for your company.",
  keywords: "Best ERP Software,\nerp solutions,\nbest erp system,\nERP Software,\nERP System\n",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/how-to-choose-the-right-erp-software-for-your-company",
  },
  openGraph: {
    title: "How to Choose the Best ERP Software: A Comprehensive Guide to Top ERP Solutions",
    description: "Confused what’s the best ERP software for your business? Here’s a guide to help you choose best ERP solution for your company.",
    url: "https://web.finbyz.tech/how-to-choose-the-right-erp-software-for-your-company",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose the Best ERP Software: A Comprehensive Guide to Top ERP Solutions",
    description: "Confused what’s the best ERP software for your business? Here’s a guide to help you choose best ERP solution for your company.",
    creator: "@yourhandle",
    
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
  other: {
    'article:content_tier': 'free',
    'article:opinion': 'false',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "How to Choose the Best ERP Software: A Comprehensive Guide to Top ERP Solutions",
    "description": "Confused what’s the best ERP software for your business? Here’s a guide to help you choose best ERP solution for your company.",
    "url": "https://web.finbyz.tech/how-to-choose-the-right-erp-software-for-your-company",
    
    "keywords": "Best ERP Software,\nerp solutions,\nbest erp system,\nERP Software,\nERP System\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "How to Choose the Best ERP Software: A Comprehensive Guide to Top ERP Solutions",
      "description": "Confused what’s the best ERP software for your business? Here’s a guide to help you choose best ERP solution for your company.",
      "articleBody": "<section class=\"mt-4\">\n    <div class=\"container-fluid\">\n        <div class=\"row p-lr-50 pt-20 pb-20\">\n            <div class=\"col-12 col-sm-12 text-center\">\n                <img class=\"blog-main-img w-100\" src=\"/files/right-erp-software.svg\"\n                    alt=\"How to choose the right ERP Software for your company\"\n                    title=\"How to choose the right ERP Software for your company\">\n            </div>\n        </div>\n    </div>\n        <div class=\"row\">\n        <div",
      "author": {
        "@type": "Organization",
        "name": "Your Company Name"
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
        <meta itemProp="name" content="How to Choose the Best ERP Software: A Comprehensive Guide to Top ERP Solutions" />
        <meta itemProp="description" content="Confused what’s the best ERP software for your business? Here’s a guide to help you choose best ERP solution for your company." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
