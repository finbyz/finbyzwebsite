import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Master Production Schedule (MPS): Definition, Importance & Steps",
  description: "Explore What is a Master Production Schedule? A crucial plan for aligning production with demand, optimizing resources, and boosting efficie",
  keywords: "master production schedule,\nWhat is a Master Production Schedule?,\nproduction planning process\n",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  alternates: {
    canonical: "https://web.finbyz.tech/what-is-a-master-production-schedule",
  },
  openGraph: {
    title: "Master Production Schedule (MPS): Definition, Importance & Steps",
    description: "Explore What is a Master Production Schedule? A crucial plan for aligning production with demand, optimizing resources, and boosting efficie",
    url: "https://web.finbyz.tech/what-is-a-master-production-schedule",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Production Schedule (MPS): Definition, Importance & Steps",
    description: "Explore What is a Master Production Schedule? A crucial plan for aligning production with demand, optimizing resources, and boosting efficie",
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
    "name": "Master Production Schedule (MPS): Definition, Importance & Steps",
    "description": "Explore What is a Master Production Schedule? A crucial plan for aligning production with demand, optimizing resources, and boosting efficie",
    "url": "https://web.finbyz.tech/what-is-a-master-production-schedule",
    
    "keywords": "master production schedule,\nWhat is a Master Production Schedule?,\nproduction planning process\n",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "Your Company Name",
      "url": "https://yourdomain.com"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Master Production Schedule (MPS): Definition, Importance & Steps",
      "description": "Explore What is a Master Production Schedule? A crucial plan for aligning production with demand, optimizing resources, and boosting efficie",
      "articleBody": "<section>\n   \n    <div class=\"container-fluid text-justify\">\n        <div class=\"row p-lr-50\">\n            <div class=\"col-md-12 rollover finbyz-fadeinup text-center\"><img alt=\"master-production-schedule\"\n                    height=\"100%\" src=\"/files/19-04-2024.svg\" title=\"master-production-schedule\"\n                    width=\"90%\"></div>\n        </div>\n    </div>\n</section>\n<section class=\"mt-5\">\n    <div class=\" finbyz-fadeinup\">\n        <div class=\"row\">\n            <div class=\"c",
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
        <meta itemProp="name" content="Master Production Schedule (MPS): Definition, Importance & Steps" />
        <meta itemProp="description" content="Explore What is a Master Production Schedule? A crucial plan for aligning production with demand, optimizing resources, and boosting efficie" />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
