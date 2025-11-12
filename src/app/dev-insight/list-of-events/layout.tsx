import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Understanding Frappe List of Events for Document and Child Table Triggers",
  description: "Explore the comprehensive list of Frappe framework events for document lifecycle and child table triggers. Learn when and how to use each event in your server-side or client-side scripts to customize document behavior effectively.",
  keywords: "Frappe, events, document lifecycle, child table triggers, before_insert, on_update, before_submit, on_cancel, validate, server side events, client side events, frappe hooks, frappe triggers",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/list-of-events",
  },
  openGraph: {
    title: "Understanding Frappe List of Events for Document and Child Table Triggers",
    description: "Explore the comprehensive list of Frappe framework events for document lifecycle and child table triggers. Learn when and how to use each event in your server-side or client-side scripts to customize document behavior effectively.",
    url: "https://erp.finbyz.tech/list-of-events",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding Frappe List of Events for Document and Child Table Triggers",
    description: "Explore the comprehensive list of Frappe framework events for document lifecycle and child table triggers. Learn when and how to use each event in your server-side or client-side scripts to customize document behavior effectively.",
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

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    "name": "Understanding Frappe List of Events for Document and Child Table Triggers",
    "url": "https://erp.finbyz.tech/list-of-events",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Explore the comprehensive list of Frappe framework events for document lifecycle and child table triggers. Learn when and how to use each event in your server-side or client-side scripts to customize document behavior effectively.",
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

  const data = await getPageData("Code Snippet", "list-of-events");
  const faqsGroup = await getFaqs("Code Snippet", "list-of-events");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Understanding Frappe List of Events for Document and Child Table Triggers" />
        <meta itemProp="description" content="Explore the comprehensive list of Frappe framework events for document lifecycle and child table triggers. Learn when and how to use each event in your server-side or client-side scripts to customize document behavior effectively." />
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
