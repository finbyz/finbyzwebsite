import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Job Opening | Career Opportunity",
  description: "At FinByz, we believe the team builds company. Initiator or leader, Technical or Creative there is a space for each one.",
  keywords: "Job, Internship, Job in Ahmedabad,Python, finbyz tech private limited, python developer, python jobs, python programmer, jobs, job, python careers, software developer jobs, python developers, sales manager,tech sales manager, written communication jobs, content writer, content writer jobs, content writing jobs, job for content writer, job writer, analytics solution provider, analytics solution ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/career",
  },
  openGraph: {
    title: "Job Opening | Career Opportunity",
    description: "At FinByz, we believe the team builds company. Initiator or leader, Technical or Creative there is a space for each one.",
    url: "https://finbyz.tech/career",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/banner-career.svg", width: 1200, height: 630, alt: "Job Opening | Career Opportunity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Opening | Career Opportunity",
    description: "At FinByz, we believe the team builds company. Initiator or leader, Technical or Creative there is a space for each one.",
    creator: "@finbyz",
    images: ["/files/banner-career.svg"],
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
  "name": "Job Opening | Career Opportunity",
  "url": "https://finbyz.tech/career",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/banner-career.svg",
  "description": "At FinByz, we believe the team builds company. Initiator or leader, Technical or Creative there is a space for each one.",
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
  const data = await getPageData("Web Page","career");
  const faqsGroup = await getFaqs("Web Page","career");
  
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
        <meta itemProp="name" content="Job Opening | Career Opportunity" />
        <meta itemProp="description" content="At FinByz, we believe the team builds company. Initiator or leader, Technical or Creative there is a space for each one." />
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
