import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Website Design Tips for Small Businesses | Finbyz Tech",
  description: "Your small business website should be designed in a manner such that it is able to portray a clear picture of  your business. Here are some ",
  keywords: "website design , business website , small business website , website for small business , website design tips , website design tips for small business",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/website-design-tips-for-small-business",
  },
  openGraph: {
    title: "Website Design Tips for Small Businesses | Finbyz Tech",
    description: "Your small business website should be designed in a manner such that it is able to portray a clear picture of  your business. Here are some ",
    url: "https://web.finbyz.tech/website-design-tips-for-small-business",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Tips for Small Businesses | Finbyz Tech",
    description: "Your small business website should be designed in a manner such that it is able to portray a clear picture of  your business. Here are some ",
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
    "name": "Website Design Tips for Small Businesses | Finbyz Tech",
    "description": "Your small business website should be designed in a manner such that it is able to portray a clear picture of  your business. Here are some ",
    "url": "https://web.finbyz.tech/website-design-tips-for-small-business",
    
    "keywords": "website design , business website , small business website , website for small business , website design tips , website design tips for small business",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Website Design Tips for Small Businesses | Finbyz Tech",
      "description": "Your small business website should be designed in a manner such that it is able to portray a clear picture of  your business. Here are some ",
      "articleBody": "<section>\n    <div class=\"container-fluid\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"How ERP Improves Business Performance\"\n                    height=\"100%\" src=\"/files/website-design-tips-for-a-small-business.svg\"\n                    title=\"How ERP Improves Business Performance\" width=\"100%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-50\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n ",
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
        <meta itemProp="name" content="Website Design Tips for Small Businesses | Finbyz Tech" />
        <meta itemProp="description" content="Your small business website should be designed in a manner such that it is able to portray a clear picture of  your business. Here are some " />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
