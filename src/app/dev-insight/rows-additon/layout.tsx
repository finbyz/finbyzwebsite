import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Rows Addition in JavaScript with Frappe Framework - Calculate Totals in Child Tables",
  description: "Learn how to calculate and update total values dynamically in parent forms by summing child table rows using JavaScript in the Frappe framework. Understand practical examples and implementation details.",
  keywords: "JavaScript rows addition, Frappe child table total calculation, Dynamic total update Frappe, Frappe form scripting example, Summing child table fields, Frappe UI form events, Sales invoice total calculation, JavaScript arithmetic in forms, Frappe framework javascript examples",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/rows-additon",
  },
  openGraph: {
    title: "Rows Addition in JavaScript with Frappe Framework - Calculate Totals in Child Tables",
    description: "Learn how to calculate and update total values dynamically in parent forms by summing child table rows using JavaScript in the Frappe framework. Understand practical examples and implementation details.",
    url: "https://erp.finbyz.tech/rows-additon",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Rows Addition in JavaScript with Frappe Framework - Calculate Totals in Child Tables",
    description: "Learn how to calculate and update total values dynamically in parent forms by summing child table rows using JavaScript in the Frappe framework. Understand practical examples and implementation details.",
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
    "name": "Rows Addition in JavaScript with Frappe Framework - Calculate Totals in Child Tables",
    "url": "https://erp.finbyz.tech/rows-additon",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Learn how to calculate and update total values dynamically in parent forms by summing child table rows using JavaScript in the Frappe framework. Understand practical examples and implementation details.",
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

  const data = await getPageData("Code Snippet", "rows-additon");
  const faqsGroup = await getFaqs("Code Snippet", "rows-additon");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Rows Addition in JavaScript with Frappe Framework - Calculate Totals in Child Tables" />
        <meta itemProp="description" content="Learn how to calculate and update total values dynamically in parent forms by summing child table rows using JavaScript in the Frappe framework. Understand practical examples and implementation details." />
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
