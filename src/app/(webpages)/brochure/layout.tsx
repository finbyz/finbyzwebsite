import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More",
  description: "Brochure",
  keywords: "Finbyz Tech brochure,\nERPNext brochure,\nERP solutions brochure,\nERPNext services PDF,\nCustom ERP brochure",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/brochure",
  },
  openGraph: {
    title: "Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More",
    description: "Brochure",
    url: "https://finbyz.tech/brochure",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/brocure banner.svg", width: 1200, height: 630, alt: "Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More",
    description: "Brochure",
    creator: "@finbyz",
    images: ["/files/brocure banner.svg"],
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
  }
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "http://www.schema.org",
  "@type": "ProfessionalService",
  "name": "Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More",
  "url": "https://finbyz.tech/brochure",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/brocure banner.svg",
  "description": "Brochure",
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
  const data = await getPageData("Web Page","brochure");
  const faqsGroup = await getFaqs("Web Page","brochure");
  
  return (
    <>
      {/* JSON-LD structured data for LLMs */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Semantic HTML wrapper for better content extraction */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Download Finbyz Tech Brochure | ERPNext Services, Custom ERP Solutions & More" />
        <meta itemProp="description" content="Brochure" />
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
