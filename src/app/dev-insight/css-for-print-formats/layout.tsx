import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "CSS for Print Formats - Clean, Consistent Print Styling for Tables",
  description: "Learn how to use CSS to style print formats for tables, ensuring margin, padding, border, and spacing consistency for high-quality printed documents.",
  keywords: "CSS print formats, print CSS tables, print stylesheet, CSS table borders, table styling for print, print format CSS, print margin CSS, CSS print design, table padding print, print layout CSS",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/css-for-print-formats",
  },
  openGraph: {
    title: "CSS for Print Formats - Clean, Consistent Print Styling for Tables",
    description: "Learn how to use CSS to style print formats for tables, ensuring margin, padding, border, and spacing consistency for high-quality printed documents.",
    url: "https://erp.finbyz.tech/css-for-print-formats",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS for Print Formats - Clean, Consistent Print Styling for Tables",
    description: "Learn how to use CSS to style print formats for tables, ensuring margin, padding, border, and spacing consistency for high-quality printed documents.",
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
    "name": "CSS for Print Formats - Clean, Consistent Print Styling for Tables",
    "url": "https://erp.finbyz.tech/css-for-print-formats",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Learn how to use CSS to style print formats for tables, ensuring margin, padding, border, and spacing consistency for high-quality printed documents.",
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

  const data = await getPageData("Code Snippet", "css-for-print-formats");
  const faqsGroup = await getFaqs("Code Snippet", "css-for-print-formats");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="CSS for Print Formats - Clean, Consistent Print Styling for Tables" />
        <meta itemProp="description" content="Learn how to use CSS to style print formats for tables, ensuring margin, padding, border, and spacing consistency for high-quality printed documents." />
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
