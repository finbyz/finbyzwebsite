import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top ERP Myths Debunked: What Small Businesses Need to Know",
  description: "Despite the popularity of technology, people still have some concerns related to it. Some common myths of ERP are Only Large businesses need",
  keywords: "ERP for small businesses,\nERP vs CRM,\nERP myths,\nERP misconceptions,\nERP implementation myths,",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/blog/business/common-myths-of-erp",
  },
  openGraph: {
    title: "Top ERP Myths Debunked: What Small Businesses Need to Know",
    description: "Despite the popularity of technology, people still have some concerns related to it. Some common myths of ERP are Only Large businesses need",
    url: "https://web.finbyz.tech/blog/business/common-myths-of-erp",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top ERP Myths Debunked: What Small Businesses Need to Know",
    description: "Despite the popularity of technology, people still have some concerns related to it. Some common myths of ERP are Only Large businesses need",
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
    "name": "Top ERP Myths Debunked: What Small Businesses Need to Know",
    "description": "Despite the popularity of technology, people still have some concerns related to it. Some common myths of ERP are Only Large businesses need",
    "url": "https://web.finbyz.tech/blog/business/common-myths-of-erp",
    
    "keywords": "ERP for small businesses,\nERP vs CRM,\nERP myths,\nERP misconceptions,\nERP implementation myths,",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top ERP Myths Debunked: What Small Businesses Need to Know",
      "description": "Despite the popularity of technology, people still have some concerns related to it. Some common myths of ERP are Only Large businesses need",
      "articleBody": "<section>\n    <div class=\"container-fluid\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"> <img alt=\"Common myths of ERP\" height=\"100%\"\n                    src=\"/files/common-myths-of-erp.svg\" title=\"Common myths of ERP\" width=\"100%\"> </div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-50\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h2>Common myths of ERP ",
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
        <meta itemProp="name" content="Top ERP Myths Debunked: What Small Businesses Need to Know" />
        <meta itemProp="description" content="Despite the popularity of technology, people still have some concerns related to it. Some common myths of ERP are Only Large businesses need" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
