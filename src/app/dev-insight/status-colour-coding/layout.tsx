import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Status Colour Coding in Frappe ListView - JavaScript Snippet",
  description: "Learn how to implement status colour coding in Frappe ListView using JavaScript. This snippet demonstrates how to visually distinguish statuses in document lists to improve UX and efficiency.",
  keywords: "frappe, listview, status color coding, javascript snippet, ui color indicators, frappe listview settings, frontend development, enterprise software, erpnext, javascript",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/status-colour-coding",
  },
  openGraph: {
    title: "Status Colour Coding in Frappe ListView - JavaScript Snippet",
    description: "Learn how to implement status colour coding in Frappe ListView using JavaScript. This snippet demonstrates how to visually distinguish statuses in document lists to improve UX and efficiency.",
    url: "https://erp.finbyz.tech/status-colour-coding",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Status Colour Coding in Frappe ListView - JavaScript Snippet",
    description: "Learn how to implement status colour coding in Frappe ListView using JavaScript. This snippet demonstrates how to visually distinguish statuses in document lists to improve UX and efficiency.",
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
    "name": "Status Colour Coding in Frappe ListView - JavaScript Snippet",
    "url": "https://erp.finbyz.tech/status-colour-coding",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Learn how to implement status colour coding in Frappe ListView using JavaScript. This snippet demonstrates how to visually distinguish statuses in document lists to improve UX and efficiency.",
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
        <meta itemProp="name" content="Status Colour Coding in Frappe ListView - JavaScript Snippet" />
        <meta itemProp="description" content="Learn how to implement status colour coding in Frappe ListView using JavaScript. This snippet demonstrates how to visually distinguish statuses in document lists to improve UX and efficiency." />
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
