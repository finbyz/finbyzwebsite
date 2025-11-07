import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Effective Sales Follow-Up Automation Tool",
  description: "Follow Up Buddy automates the sales process by generating personalized follow-up emails and identifying inactive leads, saving time and enhancing customer relationships.",
  keywords: "Lead Follow-Up, AI Tool, Sales Automation, Customer Engagement, Personalized Emails, Sales Follow-up, Opportunity Nurturing, Workflow Automation, Sales Team Efficiency",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/follow-up-buddy",
  },
  openGraph: {
    title: "Effective Sales Follow-Up Automation Tool",
    description: "Follow Up Buddy automates the sales process by generating personalized follow-up emails and identifying inactive leads, saving time and enhancing customer relationships.",
    url: "https://finbyz.tech/follow-up-buddy",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Effective Sales Follow-Up Automation Tool",
    description: "Follow Up Buddy automates the sales process by generating personalized follow-up emails and identifying inactive leads, saving time and enhancing customer relationships.",
    creator: "@finbyztech",
    
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
    "name": "Effective Sales Follow-Up Automation Tool",
    "description": "Follow Up Buddy automates the sales process by generating personalized follow-up emails and identifying inactive leads, saving time and enhancing customer relationships.",
    "url": "https://finbyz.tech/follow-up-buddy",
    
    "keywords": "Lead Follow-Up, AI Tool, Sales Automation, Customer Engagement, Personalized Emails, Sales Follow-up, Opportunity Nurturing, Workflow Automation, Sales Team Efficiency",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Effective Sales Follow-Up Automation Tool",
      "description": "Follow Up Buddy automates the sales process by generating personalized follow-up emails and identifying inactive leads, saving time and enhancing customer relationships.",
      "articleBody": "The Lead Follow-Up AI Tool automates the sales follow-up process by identifying inactive opportunities, analyzing customer context, and generating personalized follow-up emails using AI. It ensures every lead is nurtured on time without requiring manual effort from the sales team.\n\nWorkflow Steps\nIdentify Stale Opportunities\n\nAutomatically detects leads and opportunities with no customer response for more than 5 days.\n\nRetrieve Customer & Lead Information\n\nFetches contact details and company pro",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-14T12:18:59.060Z",
      "dateModified": "2025-10-14T12:18:59.060Z",
    }
  };
const productstructuredData = 

{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Effective Sales Follow-Up Automation Tool",
  "url": "https://finbyz.tech/follow-up-buddy",
  "description": "Follow Up Buddy automates the sales process by generating personalized follow-up emails and identifying inactive leads, saving time and enhancing customer relationships.",  
  "softwareVersion": "–",       
  "applicationCategory": "MarketingAutomation",  
  "operatingSystem": "Web",    
  "image": [
    // no image in page
    
  ],
  "offers": {
    "@type": "Offer",
    "price": "–",               
    "priceCurrency": "INR",    
    "url": "https://finbyz.tech/follow-up-buddy",
    "availability": "https://schema.org/InStock"  
  },
  "brand": {
    "@type": "Organization",
    "name": "Finbyz Tech Pvt Ltd",
    "url": "https://finbyz.tech"
  }
}

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
       <Script
        id="productstructured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productstructuredData) }}
      />
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Effective Sales Follow-Up Automation Tool" />
        <meta itemProp="description" content="Follow Up Buddy automates the sales process by generating personalized follow-up emails and identifying inactive leads, saving time and enhancing customer relationships." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
