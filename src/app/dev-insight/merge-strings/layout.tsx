import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Merge Strings in JavaScript: Concatenate and Handle Null Values",
  description: "Learn how to merge strings effectively in JavaScript, including handling cases where parts of the string might be null or undefined. This snippet demonstrates concatenation using concat method with conditional checks in Frappe framework forms.",
  keywords: "JavaScript string merge, string concatenation, handle null string JavaScript, Frappe form scripting, concat method, merge strings tutorial, form before_save event, JavaScript string operations",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/merge-strings",
  },
  openGraph: {
    title: "Merge Strings in JavaScript: Concatenate and Handle Null Values",
    description: "Learn how to merge strings effectively in JavaScript, including handling cases where parts of the string might be null or undefined. This snippet demonstrates concatenation using concat method with conditional checks in Frappe framework forms.",
    url: "https://erp.finbyz.tech/merge-strings",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge Strings in JavaScript: Concatenate and Handle Null Values",
    description: "Learn how to merge strings effectively in JavaScript, including handling cases where parts of the string might be null or undefined. This snippet demonstrates concatenation using concat method with conditional checks in Frappe framework forms.",
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
    "name": "Merge Strings in JavaScript: Concatenate and Handle Null Values",
    "url": "https://erp.finbyz.tech/merge-strings",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Learn how to merge strings effectively in JavaScript, including handling cases where parts of the string might be null or undefined. This snippet demonstrates concatenation using concat method with conditional checks in Frappe framework forms.",
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

  const data = await getPageData("Code Snippet", "merge-strings");
  const faqsGroup = await getFaqs("Code Snippet", "merge-strings");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Merge Strings in JavaScript: Concatenate and Handle Null Values" />
        <meta itemProp="description" content="Learn how to merge strings effectively in JavaScript, including handling cases where parts of the string might be null or undefined. This snippet demonstrates concatenation using concat method with conditional checks in Frappe framework forms." />
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
