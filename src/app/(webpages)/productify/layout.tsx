import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software",
  description: "Boost your team\'s efficiency with Productify, the leading employee productivity tracker and sales person monitoring software. Gain insights, enhance accountability, and drive performance.",
  keywords: "Employee Monitoring Software, \nTime tracking software, \nStaff Monitoring software",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/productify",
  },
  openGraph: {
    title: "Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software",
    description: "Boost your team\'s efficiency with Productify, the leading employee productivity tracker and sales person monitoring software. Gain insights, enhance accountability, and drive performance.",
    url: "https://finbyz.tech/productify",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Productify image (1).svg", width: 1200, height: 630, alt: "Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software",
    description: "Boost your team\'s efficiency with Productify, the leading employee productivity tracker and sales person monitoring software. Gain insights, enhance accountability, and drive performance.",
    creator: "@finbyz",
    images: ["/files/Productify image (1).svg"],
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
  "name": "Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software",
  "url": "https://finbyz.tech/productify",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Productify image (1).svg",
  "description": "Boost your team\'s efficiency with Productify, the leading employee productivity tracker and sales person monitoring software. Gain insights, enhance accountability, and drive performance.",
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
  const data = await getPageData("Web Page","productify");
  const faqsGroup = await getFaqs("Web Page","productify");
  
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
        <meta itemProp="name" content="Productify: Advanced Employee Productivity Tracker & Sales Monitoring Software" />
        <meta itemProp="description" content="Boost your team\'s efficiency with Productify, the leading employee productivity tracker and sales person monitoring software. Gain insights, enhance accountability, and drive performance." />
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
