import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Smart Card Scanner Overview",
  description: "Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction.",
  keywords: "Smart Card Scanner, business card management, ERPNext, AI extraction, contact information, Telegram bot, data validation, lead generation, CRM, data hygiene, duplicate prevention",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/smart-card-scanner-overview",
  },
  openGraph: {
    title: "Smart Card Scanner Overview",
    description: "Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction.",
    url: "https://finbyz.tech/smart-card-scanner-overview",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/ChatGPT Image Oct 14, 2025, 03_00_34 PM.png", width: 1200, height: 630, alt: "Smart Card Scanner Overview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Card Scanner Overview",
    description: "Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction.",
    creator: "@finbyztech",
    images: ["/files/ChatGPT Image Oct 14, 2025, 03_00_34 PM.png"],
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
    "name": "Smart Card Scanner Overview",
    "url": "https://finbyz.tech/smart-card-scanner-overview",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "https://finbyz.tech/files/ChatGPT Image Oct 14, 2025, 03_00_34 PM.png",
    "description": "Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction.",
    "priceRange": "INR",
    "keywords": "Smart Card Scanner, business card management, ERPNext, AI extraction, contact information, Telegram bot, data validation, lead generation, CRM, data hygiene, duplicate prevention",
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
      "headline": "Smart Card Scanner Overview",
      "description": "Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction.",
      "articleBody": "Smart Card Scanner\nOverview\nThe Smart Card Scanner revolutionizes business card management by leveraging artificial intelligence and seamless integration with ERPNext. This intelligent tool allows users to scan or upload business card images using a Telegram chatbot interface, making the process highly accessible and convenient from anywhere.\n\nUpon receiving the scan, advanced AI models analyze the image, extracting structured contact information including full name, phone numbers, email address",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-14T11:52:16.066Z",
      "dateModified": "2025-10-14T11:52:16.066Z"
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
  "name": "Smart Card Scanner Overview",
  "url": "https://finbyz.tech/smart-card-scanner-overview",
  "description": "Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction.",  
  "softwareVersion": "–",       
  "applicationCategory": "MarketingAutomation",  
  "operatingSystem": "Web",    
  "image": [
    "https://finbyz.tech/files/ChatGPT Image Oct 14, 2025, 03_00_34 PM.png", 
    
  ],
  "offers": {
    "@type": "Offer",
    "price": "0",               
    "priceCurrency": "INR",    
    "url": "https://finbyz.tech/smart-card-scanner-overview", 
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
        <meta itemProp="name" content="Smart Card Scanner Overview" />
        <meta itemProp="description" content="Discover the Smart Card Scanner, an AI-driven tool for efficient business card management integrating with ERPNext for automated contact data extraction." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
