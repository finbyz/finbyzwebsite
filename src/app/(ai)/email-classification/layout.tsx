import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI-Driven Email Classification for Businesses",
  description: "Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity.",
  keywords: "Email Classification, AI-driven workflow, ERPNext, intent classification, data extraction, lead management, automated data capture, natural language processing, CRM, end-to-end automation",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/email-classification",
  },
  openGraph: {
    title: "AI-Driven Email Classification for Businesses",
    description: "Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity.",
    url: "https://finbyz.tech/email-classification",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Driven Email Classification for Businesses",
    description: "Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity.",
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
    "name": "AI-Driven Email Classification for Businesses",
    "url": "https://finbyz.tech/email-classification",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity.",
    "priceRange": "INR",
    "keywords": "Email Classification, AI-driven workflow, ERPNext, intent classification, data extraction, lead management, automated data capture, natural language processing, CRM, end-to-end automation",
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
      "headline": "AI-Driven Email Classification for Businesses",
      "description": "Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity.",
      "articleBody": "Email Classification\nOverview\nEmail Classification is an AI-driven workflow designed to automate the handling of incoming email inquiries efficiently and accurately. By integrating deeply with ERPNext, this solution enables businesses to quickly categorize emails based on their intent, extract vital contact and inquiry details, and automatically create or update leads and contacts in the ERP system. This automation eliminates manual inbox sorting and data entry, allowing sales and support teams ",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-15T05:44:10.464Z",
      "dateModified": "2025-10-15T05:44:10.464Z"
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
  "name": "AI-Driven Email Classification for Businesses",
    "url": "https://finbyz.tech/email-classification",
  "description": "Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity.",  
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
    "url": "https://finbyz.tech/email-classification",
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
        <meta itemProp="name" content="AI-Driven Email Classification for Businesses" />
        <meta itemProp="description" content="Discover how AI-driven email classification automates email handling, improves lead management, and enhances productivity." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
