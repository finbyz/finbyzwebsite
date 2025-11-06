import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext Meeting Management",
  description: "Optimize your meeting processes with ERPNext\'s Meeting Management App. Schedule meetings, record summaries, and track action items seamlessly within your CRM.",
  keywords: "ERPNext for Meeting Management,\nerpnext meeting scheduling,\nmeeting summary erpnext,\nmeeting management,\nmanagement meeting,\nevent management plans,\nmanagement and meeting,\nmanagerial meeting",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/meeting-management-erpnext",
  },
  openGraph: {
    title: "ERPNext Meeting Management",
    description: "Optimize your meeting processes with ERPNext\'s Meeting Management App. Schedule meetings, record summaries, and track action items seamlessly within your CRM.",
    url: "https://finbyz.tech/meeting-management-erpnext",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Meeting-Management-PageDesign-SVG.avif", width: 1200, height: 630, alt: "ERPNext Meeting Management" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Meeting Management",
    description: "Optimize your meeting processes with ERPNext\'s Meeting Management App. Schedule meetings, record summaries, and track action items seamlessly within your CRM.",
    creator: "@finbyz",
    images: ["/files/Meeting-Management-PageDesign-SVG.avif"],
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
  "name": "ERPNext Meeting Management",
  "url": "https://finbyz.tech/meeting-management-erpnext",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Meeting-Management-PageDesign-SVG.avif",
  "description": "Optimize your meeting processes with ERPNext\'s Meeting Management App. Schedule meetings, record summaries, and track action items seamlessly within your CRM.",
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
  const data = await getPageData("Web Page","meeting-management-erpnext");
  const faqsGroup = await getFaqs("Web Page","meeting-management-erpnext");
  const faqstructureData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsGroup?.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

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
        <meta itemProp="name" content="ERPNext Meeting Management" />
        <meta itemProp="description" content="Optimize your meeting processes with ERPNext\'s Meeting Management App. Schedule meetings, record summaries, and track action items seamlessly within your CRM." />
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
