import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "How to Filter Fields Dynamically in JavaScript Forms | Field Filteration Code Snippet",
  description: "Learn how to dynamically filter form fields in JavaScript using custom get_query filters for various field types including table fields and child tables. This snippet demonstrates practical code examples for efficient field filtering in web applications.",
  keywords: "JavaScript field filtering, dynamic form filters, get_query filter, ERP form filtering, child table filtering, JavaScript form customization, front-end filtering examples, filteration code snippet, filter table fields, ERPNext filtering",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/field-filteration",
  },
  openGraph: {
    title: "How to Filter Fields Dynamically in JavaScript Forms | Field Filteration Code Snippet",
    description: "Learn how to dynamically filter form fields in JavaScript using custom get_query filters for various field types including table fields and child tables. This snippet demonstrates practical code examples for efficient field filtering in web applications.",
    url: "https://erp.finbyz.tech/field-filteration",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Filter Fields Dynamically in JavaScript Forms | Field Filteration Code Snippet",
    description: "Learn how to dynamically filter form fields in JavaScript using custom get_query filters for various field types including table fields and child tables. This snippet demonstrates practical code examples for efficient field filtering in web applications.",
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
    "name": "How to Filter Fields Dynamically in JavaScript Forms | Field Filteration Code Snippet",
    "url": "https://erp.finbyz.tech/field-filteration",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Learn how to dynamically filter form fields in JavaScript using custom get_query filters for various field types including table fields and child tables. This snippet demonstrates practical code examples for efficient field filtering in web applications.",
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

  const data = await getPageData("Code Snippet", "field-filteration");
  const faqsGroup = await getFaqs("Code Snippet", "field-filteration");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="How to Filter Fields Dynamically in JavaScript Forms | Field Filteration Code Snippet" />
        <meta itemProp="description" content="Learn how to dynamically filter form fields in JavaScript using custom get_query filters for various field types including table fields and child tables. This snippet demonstrates practical code examples for efficient field filtering in web applications." />
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
