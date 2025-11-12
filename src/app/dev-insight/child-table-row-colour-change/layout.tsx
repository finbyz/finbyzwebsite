import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "How to Change Child Table Row Colour Dynamically in Frappe Framework",
  description: "Learn how to dynamically change the background colour of child table rows in Frappe using JavaScript. This snippet demonstrates colour coding based on field values to enhance UI clarity in your ERPNext apps.",
  keywords: "frappe child table colour change, erpnext row colour javascript, frappe ui form colour coding, dynamic row highlight frappe, javascript frappe ui form, colour coding frappe child table, erpnext child table customization, frappe grid row styling",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/child-table-row-colour-change",
  },
  openGraph: {
    title: "How to Change Child Table Row Colour Dynamically in Frappe Framework",
    description: "Learn how to dynamically change the background colour of child table rows in Frappe using JavaScript. This snippet demonstrates colour coding based on field values to enhance UI clarity in your ERPNext apps.",
    url: "https://erp.finbyz.tech/child-table-row-colour-change",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Change Child Table Row Colour Dynamically in Frappe Framework",
    description: "Learn how to dynamically change the background colour of child table rows in Frappe using JavaScript. This snippet demonstrates colour coding based on field values to enhance UI clarity in your ERPNext apps.",
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
    "name": "How to Change Child Table Row Colour Dynamically in Frappe Framework",
    "url": "https://erp.finbyz.tech/child-table-row-colour-change",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Learn how to dynamically change the background colour of child table rows in Frappe using JavaScript. This snippet demonstrates colour coding based on field values to enhance UI clarity in your ERPNext apps.",
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

  const data = await getPageData("Code Snippet", "child-table-row-colour-change");
  const faqsGroup = await getFaqs("Code Snippet", "child-table-row-colour-change");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="How to Change Child Table Row Colour Dynamically in Frappe Framework" />
        <meta itemProp="description" content="Learn how to dynamically change the background colour of child table rows in Frappe using JavaScript. This snippet demonstrates colour coding based on field values to enhance UI clarity in your ERPNext apps." />
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
