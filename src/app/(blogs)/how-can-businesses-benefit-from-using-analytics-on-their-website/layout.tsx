import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Unlocking Business Growth: Harnessing Website Analytics, CRO, and Data-Driven Decisions",
  description: "Unlock business potential with web analytics. Learn how data insights drive growth, improve decision-making, and enhance online performance.",
  keywords: "website analytics,\nconversion rate optimization,\nData-driven decision making",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/how-can-businesses-benefit-from-using-analytics-on-their-website",
  },
  openGraph: {
    title: "Unlocking Business Growth: Harnessing Website Analytics, CRO, and Data-Driven Decisions",
    description: "Unlock business potential with web analytics. Learn how data insights drive growth, improve decision-making, and enhance online performance.",
    url: "https://web.finbyz.tech/how-can-businesses-benefit-from-using-analytics-on-their-website",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Unlocking Business Growth: Harnessing Website Analytics, CRO, and Data-Driven Decisions",
    description: "Unlock business potential with web analytics. Learn how data insights drive growth, improve decision-making, and enhance online performance.",
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
    "name": "Unlocking Business Growth: Harnessing Website Analytics, CRO, and Data-Driven Decisions",
    "description": "Unlock business potential with web analytics. Learn how data insights drive growth, improve decision-making, and enhance online performance.",
    "url": "https://web.finbyz.tech/how-can-businesses-benefit-from-using-analytics-on-their-website",
    
    "keywords": "website analytics,\nconversion rate optimization,\nData-driven decision making",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Unlocking Business Growth: Harnessing Website Analytics, CRO, and Data-Driven Decisions",
      "description": "Unlock business potential with web analytics. Learn how data insights drive growth, improve decision-making, and enhance online performance.",
      "articleBody": "<section>\n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup\"><img alt=\"businesses benefit from using analytics on their website\"\n                    height=\"100%\" src=\"/files/blog.svg\" title=\"businesses benefit from using analytics on their website\"\n                    width=\"80%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-5\">\n    <div class=\" finbyz-fadeinup\">\n        <div cl",
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
        <meta itemProp="name" content="Unlocking Business Growth: Harnessing Website Analytics, CRO, and Data-Driven Decisions" />
        <meta itemProp="description" content="Unlock business potential with web analytics. Learn how data insights drive growth, improve decision-making, and enhance online performance." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
