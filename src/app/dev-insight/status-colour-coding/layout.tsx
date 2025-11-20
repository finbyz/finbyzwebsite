import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "How to Use Status Colour Coding in Frappe ListView for Better Visual Indicators?",
  description: "Learn how to implement status-based colour coding in Frappe ListView to visually distinguish document statuses using custom color indicators in client-side scripts.",
  keywords: "Frappe, DocType, ListView, status color coding, client script, frappe.listview_settings, get_indicator, frontend customization, ERPNext, select field, JavaScript, Frappe Framework",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/status-colour-coding",
  },
  openGraph: {
    title: "How to Use Status Colour Coding in Frappe ListView for Better Visual Indicators?",
    description: "Learn how to implement status-based colour coding in Frappe ListView to visually distinguish document statuses using custom color indicators in client-side scripts.",
    url: "https://erp.finbyz.tech/status-colour-coding",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use Status Colour Coding in Frappe ListView for Better Visual Indicators?",
    description: "Learn how to implement status-based colour coding in Frappe ListView to visually distinguish document statuses using custom color indicators in client-side scripts.",
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
    "name": "How to Use Status Colour Coding in Frappe ListView for Better Visual Indicators?",
    "url": "https://erp.finbyz.tech/status-colour-coding",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Learn how to implement status-based colour coding in Frappe ListView to visually distinguish document statuses using custom color indicators in client-side scripts.",
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

  const data = await getPageData("Code Snippet", "status-colour-coding");
  const faqsGroup = await getFaqs("Code Snippet", "status-colour-coding");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="How to Use Status Colour Coding in Frappe ListView for Better Visual Indicators?" />
        <meta itemProp="description" content="Learn how to implement status-based colour coding in Frappe ListView to visually distinguish document statuses using custom color indicators in client-side scripts." />
      </article>
      
      {children}
      {faqsGroup?.faqs.length && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
