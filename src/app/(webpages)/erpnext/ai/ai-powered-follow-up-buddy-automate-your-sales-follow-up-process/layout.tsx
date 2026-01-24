import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Effective Sales Follow-Up Automation Tool | Follow Up Buddy by FinByz Tech",
  description: "Follow Up Buddy automates your entire sales follow-up process with AI. It identifies inactive leads, crafts personalized email responses, and helps sales teams maintain consistent communication without manual effort. Improve lead nurturing, customer engagement, and conversion rates seamlessly.",
  keywords: "",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erpnext/ai/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process",
  },
  openGraph: {
    title: "Effective Sales Follow-Up Automation Tool | Follow Up Buddy by FinByz Tech",
    description: "Follow Up Buddy automates your entire sales follow-up process with AI. It identifies inactive leads, crafts personalized email responses, and helps sales teams maintain consistent communication without manual effort. Improve lead nurturing, customer engagement, and conversion rates seamlessly.",
    url: "https://finbyz.tech/erpnext/ai/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Effective Sales Follow-Up Automation Tool | Follow Up Buddy by FinByz Tech",
    description: "Follow Up Buddy automates your entire sales follow-up process with AI. It identifies inactive leads, crafts personalized email responses, and helps sales teams maintain consistent communication without manual effort. Improve lead nurturing, customer engagement, and conversion rates seamlessly.",
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
  "name": "Effective Sales Follow-Up Automation Tool | Follow Up Buddy by FinByz Tech",
  "url": "https://finbyz.tech/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "None",
  "description": "Follow Up Buddy automates your entire sales follow-up process with AI. It identifies inactive leads, crafts personalized email responses, and helps sales teams maintain consistent communication without manual effort. Improve lead nurturing, customer engagement, and conversion rates seamlessly.",
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
  const data = await getPageData("Web Page", "erpnext/ai/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process");
  const faqsGroup = await getFaqs("Web Page", "erpnext/ai/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process");
  
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
        <meta itemProp="name" content="Effective Sales Follow-Up Automation Tool | Follow Up Buddy by FinByz Tech" />
        <meta itemProp="description" content="Follow Up Buddy automates your entire sales follow-up process with AI. It identifies inactive leads, crafts personalized email responses, and helps sales teams maintain consistent communication without manual effort. Improve lead nurturing, customer engagement, and conversion rates seamlessly." />
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
