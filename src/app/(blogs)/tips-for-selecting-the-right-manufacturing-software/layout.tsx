import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Tips for Selecting the Best Manufacturing ERP Software",
  description: "Find 6 essential tips for choosing the ideal manufacturing software: seek industry-specific features, easy integration, and user-friendly de",
  keywords: "ERP for manufacturing\nBest Manufacturing Software, \nsmall manufacturing ERP software",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/tips-for-selecting-the-right-manufacturing-software",
  },
  openGraph: {
    title: "Top Tips for Selecting the Best Manufacturing ERP Software",
    description: "Find 6 essential tips for choosing the ideal manufacturing software: seek industry-specific features, easy integration, and user-friendly de",
    url: "https://web.finbyz.tech/tips-for-selecting-the-right-manufacturing-software",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Tips for Selecting the Best Manufacturing ERP Software",
    description: "Find 6 essential tips for choosing the ideal manufacturing software: seek industry-specific features, easy integration, and user-friendly de",
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
    "name": "Top Tips for Selecting the Best Manufacturing ERP Software",
    "description": "Find 6 essential tips for choosing the ideal manufacturing software: seek industry-specific features, easy integration, and user-friendly de",
    "url": "https://web.finbyz.tech/tips-for-selecting-the-right-manufacturing-software",
    
    "keywords": "ERP for manufacturing\nBest Manufacturing Software, \nsmall manufacturing ERP software",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Top Tips for Selecting the Best Manufacturing ERP Software",
      "description": "Find 6 essential tips for choosing the ideal manufacturing software: seek industry-specific features, easy integration, and user-friendly de",
      "articleBody": "<section>\n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup text-center\"><img alt=\"Manufacturing-Software\"\n                    height=\"90%\" src=\"/files/46cb2df.svg\" title=\"Manufacturing-Software\"\n                    width=\"90%\"></div>\n\n        </div>\n    </div>\n<br> \n</section>\n<section class=\"mt-5\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n            <div class=\"col-md-12",
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
        <meta itemProp="name" content="Top Tips for Selecting the Best Manufacturing ERP Software" />
        <meta itemProp="description" content="Find 6 essential tips for choosing the ideal manufacturing software: seek industry-specific features, easy integration, and user-friendly de" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
