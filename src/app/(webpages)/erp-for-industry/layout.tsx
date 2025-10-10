import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Customized ERP Software | ERP system customization",
  description: "Discover tailored solutions with customized ERP software and custom ERP system customization services. Optimize your business processes today.",
  keywords: "ERP Software for Industries, Customized ERP for Industries, ERP System for Industry, erp software for small scale industries, customized ERP software for industries, Industrial ERP, ERP for industry, customized ERP, erp software for industries in ahmedabad, customized erp software for industries in ahmedabad, industrial erp software in ahmedabad,customized erp software\ncustom erp,erp system customization",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erp-for-industry",
  },
  openGraph: {
    title: "Customized ERP Software | ERP system customization",
    description: "Discover tailored solutions with customized ERP software and custom ERP system customization services. Optimize your business processes today.",
    url: "https://finbyz.tech/erp-for-industry",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/INDUSTRY.svg", width: 1200, height: 630, alt: "Customized ERP Software | ERP system customization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customized ERP Software | ERP system customization",
    description: "Discover tailored solutions with customized ERP software and custom ERP system customization services. Optimize your business processes today.",
    creator: "@finbyz",
    images: ["/images/INDUSTRY.svg"],
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
  "name": "Customized ERP Software | ERP system customization",
  "url": "https://finbyz.tech/erp-for-industry",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/images/INDUSTRY.svg",
  "description": "Discover tailored solutions with customized ERP software and custom ERP system customization services. Optimize your business processes today.",
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
  const data = await getPageData("Web Page","erp-for-industry");
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
        <meta itemProp="name" content="Customized ERP Software | ERP system customization" />
        <meta itemProp="description" content="Discover tailored solutions with customized ERP software and custom ERP system customization services. Optimize your business processes today." />
      </article>
      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
