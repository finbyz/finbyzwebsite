import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "How to Use Span Table Cell Look in HTML Print Formats",
  description: "Learn how to create a span table cell look with HTML and inline CSS for print formats. This snippet shows how to style table cells to display data elegantly using colspan and display table-cell styles.",
  keywords: "HTML, print format, table cell span, CSS display table-cell, lorry challan, print layout, html snippet, inline CSS for print",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/span-table-cell-look",
  },
  openGraph: {
    title: "How to Use Span Table Cell Look in HTML Print Formats",
    description: "Learn how to create a span table cell look with HTML and inline CSS for print formats. This snippet shows how to style table cells to display data elegantly using colspan and display table-cell styles.",
    url: "https://erp.finbyz.tech/span-table-cell-look",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use Span Table Cell Look in HTML Print Formats",
    description: "Learn how to create a span table cell look with HTML and inline CSS for print formats. This snippet shows how to style table cells to display data elegantly using colspan and display table-cell styles.",
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
    "name": "How to Use Span Table Cell Look in HTML Print Formats",
    "url": "https://erp.finbyz.tech/span-table-cell-look",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "",
    "description": "Learn how to create a span table cell look with HTML and inline CSS for print formats. This snippet shows how to style table cells to display data elegantly using colspan and display table-cell styles.",
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

  const data = await getPageData("Code Snippet", "span-table-cell-look");
  const faqsGroup = await getFaqs("Code Snippet", "span-table-cell-look");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="How to Use Span Table Cell Look in HTML Print Formats" />
        <meta itemProp="description" content="Learn how to create a span table cell look with HTML and inline CSS for print formats. This snippet shows how to style table cells to display data elegantly using colspan and display table-cell styles." />
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
