import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "AL Freight Challan Print Format - Detailed HTML Template for Freight Documents",
  description: "Explore the AL Freight Challan print format code snippet. Learn how to generate a professional lorry freight challan using HTML templates for transport documentation. Perfect for developers implementing freight document templates.",
  keywords: "freight challan, lorry challan, print format, html template, freight document, logistics template, transport documentation, invoice template, freight charges, print format code snippet",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/al-freight-challan",
  },
  openGraph: {
    title: "AL Freight Challan Print Format - Detailed HTML Template for Freight Documents",
    description: "Explore the AL Freight Challan print format code snippet. Learn how to generate a professional lorry freight challan using HTML templates for transport documentation. Perfect for developers implementing freight document templates.",
    url: "https://erp.finbyz.tech/al-freight-challan",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "AL Freight Challan Print Format - Detailed HTML Template for Freight Documents",
    description: "Explore the AL Freight Challan print format code snippet. Learn how to generate a professional lorry freight challan using HTML templates for transport documentation. Perfect for developers implementing freight document templates.",
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
    "name": "AL Freight Challan Print Format - Detailed HTML Template for Freight Documents",
    "url": "https://erp.finbyz.tech/al-freight-challan",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Explore the AL Freight Challan print format code snippet. Learn how to generate a professional lorry freight challan using HTML templates for transport documentation. Perfect for developers implementing freight document templates.",
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

  const data = await getPageData("Code Snippet", "al-freight-challan");
  const faqsGroup = await getFaqs("Code Snippet", "al-freight-challan");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="AL Freight Challan Print Format - Detailed HTML Template for Freight Documents" />
        <meta itemProp="description" content="Explore the AL Freight Challan print format code snippet. Learn how to generate a professional lorry freight challan using HTML templates for transport documentation. Perfect for developers implementing freight document templates." />
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
