import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI-Powered Resume Ranker | Smart Candidate Scoring & Recruitment Automation by FinByz Tech",
  description: "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
  keywords: "",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erpnext/ai/ai-powered-resume-ranker",
  },
  openGraph: {
    title: "AI-Powered Resume Ranker | Smart Candidate Scoring & Recruitment Automation by FinByz Tech",
    description: "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
    url: "https://finbyz.tech/erpnext/ai/ai-powered-resume-ranker",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://finbyz.tech/images/resume-ranker.png",
        width: 1200,
        height: 630,
        alt: "AI-Powered Resume Ranker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Resume Ranker | Smart Candidate Scoring & Recruitment Automation by FinByz Tech",
    description: "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
    creator: "@finbyz",
    
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
  }
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "http://www.schema.org",
  "@type": "ProfessionalService",
  "name": "AI-Powered Resume Ranker | Smart Candidate Scoring & Recruitment Automation by FinByz Tech",
  "url": "https://finbyz.tech/ai-powered-resume-ranker",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "None",
  "description": "Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making.",
  "priceRange": "INR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "FinByz Tech Pvt Ltd, 504-Addor Ambition, Nr. Navrang Circle, Navrangpura, Ahmedabad, Gujarat 380009",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "addressCountry": "IN",
    "postalCode": "380009"
  },
  "telephone": "+919925701446",
  "openingHours": "Mo, Tu, We, Th, Fr, Sa 10.00:00-19:00",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91 7948912428",
      "contactType": "customer support",
      "areaServed": [
        "IN"
      ],
      "availableLanguage": [
        "Hindi",
        "Gujarati",
        "English"
      ]
    }
  ],
  "sameAs": [
    "https://www.facebook.com/FinByz",
    "https://twitter.com/FinByz",
    "https://www.linkedin.com/company/finbyz",
    "https://www.youtube.com/c/Finbyz",
    "https://www.instagram.com/finbyz/"
  ]
};
  const data = await getPageData("Web Page", "erpnext/ai/ai-powered-resume-ranker");
  const faqsGroup = await getFaqs("Web Page", "erpnext/ai/ai-powered-resume-ranker");
  
  return (
    <>
      {/* JSON-LD structured data for LLMs */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Semantic HTML wrapper for better content extraction */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="AI-Powered Resume Ranker | Smart Candidate Scoring & Recruitment Automation by FinByz Tech" />
        <meta itemProp="description" content="Streamline recruitment with an AI-powered resume ranking system that enhances candidate evaluation and decision-making." />
      </article>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
