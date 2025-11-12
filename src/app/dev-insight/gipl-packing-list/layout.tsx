import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "GIPL Packing List Print Format - HTML Template for Efficient Packaging Documentation",
  description: "Explore the GIPL Packing List HTML print format snippet designed for packaging and shipping documentation in ERP systems. Learn how to implement and customize this detailed packing list template with dynamic data bindings.",
  keywords: "GIPL Packing List, HTML print format, packaging list template, ERP print format, shipping documentation HTML, Jinja template ERPNext, dynamic packing list, export invoice template, Next.js code snippet, Frappe print format",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/gipl-packing-list",
  },
  openGraph: {
    title: "GIPL Packing List Print Format - HTML Template for Efficient Packaging Documentation",
    description: "Explore the GIPL Packing List HTML print format snippet designed for packaging and shipping documentation in ERP systems. Learn how to implement and customize this detailed packing list template with dynamic data bindings.",
    url: "https://erp.finbyz.tech/gipl-packing-list",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "GIPL Packing List Print Format - HTML Template for Efficient Packaging Documentation",
    description: "Explore the GIPL Packing List HTML print format snippet designed for packaging and shipping documentation in ERP systems. Learn how to implement and customize this detailed packing list template with dynamic data bindings.",
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
    "name": "GIPL Packing List Print Format - HTML Template for Efficient Packaging Documentation",
    "url": "https://erp.finbyz.tech/gipl-packing-list",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Explore the GIPL Packing List HTML print format snippet designed for packaging and shipping documentation in ERP systems. Learn how to implement and customize this detailed packing list template with dynamic data bindings.",
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

  const data = await getPageData("Code Snippet", "gipl-packing-list");
  const faqsGroup = await getFaqs("Code Snippet", "gipl-packing-list");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="GIPL Packing List Print Format - HTML Template for Efficient Packaging Documentation" />
        <meta itemProp="description" content="Explore the GIPL Packing List HTML print format snippet designed for packaging and shipping documentation in ERP systems. Learn how to implement and customize this detailed packing list template with dynamic data bindings." />
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
