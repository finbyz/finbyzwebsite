import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI-Powered Lead Generation and Email Outreach",
  description: "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates.",
  keywords: "lead generation, email outreach, AI-driven research, Apollo, personalized outreach, conversion rates, email drafting, company insights, contact insights, automated scheduling",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/ai-outreach-lead-generation-research",
  },
  openGraph: {
    title: "AI-Powered Lead Generation and Email Outreach",
    description: "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates.",
    url: "https://finbyz.tech/ai-outreach-lead-generation-research",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Lead Generation and Email Outreach",
    description: "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates.",
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
    "name": "AI-Powered Lead Generation and Email Outreach",
    "url": "https://finbyz.tech/ai-outreach-lead-generation-research",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "https://finbyz.tech/assets/images/ai-outreach-cover.jpg",
    "description": "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates.",
    "priceRange": "INR",
    "keywords": "lead generation, email outreach, AI-driven research, Apollo, personalized outreach, conversion rates, email drafting, company insights, contact insights, automated scheduling",
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
      "headline": "AI-Powered Lead Generation and Email Outreach",
      "description": "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-14T11:31:10.210Z",
      "dateModified": "2025-10-14T11:31:10.210Z"
    },
    "sameAs": [
      "https://www.facebook.com/FinByz",
      "https://twitter.com/FinByz",
      "https://www.linkedin.com/company/finbyz",
      "https://www.youtube.com/c/Finbyz",
      "https://www.instagram.com/finbyz/"
    ]
  };
  const softwareApplicationStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI-Powered Lead Generation and Email Outreach",
    "url": "https://finbyz.tech/ai-outreach-lead-generation-research",
    "description": "Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates.",
    "softwareVersion": "–",
    "applicationCategory": "MarketingAutomation",
    "operatingSystem": "Web",
    "image": "https://finbyz.tech/images/AI_Powered_Resume_Ranker.gif",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "url": "https://finbyz.tech/ai-outreach-lead-generation-research",
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
        <meta itemProp="name" content="AI-Powered Lead Generation and Email Outreach" />
        <meta itemProp="description" content="Streamline your lead generation and outreach with AI-driven research and automated email drafting for higher conversion rates." />
      </article>

      {children}

      <BusinessSlider />
    </>
  );
}
