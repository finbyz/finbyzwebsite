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
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    "name": "Effective Sales Follow-Up Automation Tool",
    "url": "https://finbyz.tech/follow-up-buddy",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Follow Up Buddy automates the sales process by generating personalized follow-up emails and identifying inactive leads, saving time and enhancing customer relationships.",
    "priceRange": "INR",
    "keywords": "Lead Follow-Up, AI Tool, Sales Automation, Customer Engagement, Personalized Emails, Sales Follow-up, Opportunity Nurturing, Workflow Automation, Sales Team Efficiency",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "FinByz Tech Pvt Ltd, 504-Addor Ambition, Nr. Navrang Circle, Navrangpura, Ahmedabad, Gujarat 380009",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN",
      "postalCode": "380009"
    },
    "telephone": "+919925701446",
    "openingHours": "Mo, Tu, We, Th, Fr, Sa 10:00-19:00",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 7948912428",
        "contactType": "customer support",
        "areaServed": ["IN"],
        "availableLanguage": ["Hindi", "Gujarati", "English"]
      }
    ],
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
      "dateModified": "2025-10-14T12:18:59.060Z"
    },
    "sameAs": [
      "https://www.facebook.com/FinByz",
      "https://twitter.com/FinByz",
      "https://www.linkedin.com/company/finbyz",
      "https://www.youtube.com/c/Finbyz",
      "https://www.instagram.com/finbyz/"
    ]
  };
const softwareApplicationStructuredData = 

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
    "price": "0",               
    "priceCurrency": "INR",    
    "url": "https://finbyz.tech/follow-up-buddy",
    "availability": "https://schema.org/InStock"  
  },
   "aggregateRating":
    {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "54"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationStructuredData) }}
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
