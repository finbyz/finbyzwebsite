import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "How to Evaluate Field Visibility Using JavaScript Conditions in Doctype Fields",
  description: "Learn how to control field visibility dynamically in your Doctype forms using JavaScript evaluation expressions. Understand various condition patterns and practical uses in ERPNext/Frappe.",
  keywords: "field visibility, javascript evaluation, doctype visible on, erpnext, frappe, dynamic field visibility, javascript conditions, form visibility control, eval doc fields, erpnext customization",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/field-visibility-evaluation",
  },
  openGraph: {
    title: "How to Evaluate Field Visibility Using JavaScript Conditions in Doctype Fields",
    description: "Learn how to control field visibility dynamically in your Doctype forms using JavaScript evaluation expressions. Understand various condition patterns and practical uses in ERPNext/Frappe.",
    url: "https://erp.finbyz.tech/field-visibility-evaluation",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Evaluate Field Visibility Using JavaScript Conditions in Doctype Fields",
    description: "Learn how to control field visibility dynamically in your Doctype forms using JavaScript evaluation expressions. Understand various condition patterns and practical uses in ERPNext/Frappe.",
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
    "name": "How to Evaluate Field Visibility Using JavaScript Conditions in Doctype Fields",
    "url": "https://erp.finbyz.tech/field-visibility-evaluation",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Learn how to control field visibility dynamically in your Doctype forms using JavaScript evaluation expressions. Understand various condition patterns and practical uses in ERPNext/Frappe.",
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

  const data = await getPageData("Code Snippet", "field-visibility-evaluation");
  const faqsGroup = await getFaqs("Code Snippet", "field-visibility-evaluation");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="How to Evaluate Field Visibility Using JavaScript Conditions in Doctype Fields" />
        <meta itemProp="description" content="Learn how to control field visibility dynamically in your Doctype forms using JavaScript evaluation expressions. Understand various condition patterns and practical uses in ERPNext/Frappe." />
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
