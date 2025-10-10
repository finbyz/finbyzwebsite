import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech",
  description: "Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!",
  keywords: "ERPnext Implementation Partner,\nERPnext Implementation Company, Ahmedabad, Gujarat\nerpnext service providers,\nERP Implementation in UK,\nERP Implementation in Canada,\nerpnext service in uk,\nerpnext service in Canada,	\nerpnext service provider in uk,\nerpnext partners,\nerpnext service provider in Canada,\nerpnext partners in uk,\nfrappe partners,\nERP Software, \nERP Software uk, \nERP Solution,  \nAccounting Software, \nManufacturing Software",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/hire-erpnext-implementer",
  },
  openGraph: {
    title: "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech",
    description: "Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!",
    url: "https://finbyz.tech/hire-erpnext-implementer",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/Hire-ERPNext-Implementor679475.svg", width: 1200, height: 630, alt: "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech",
    description: "Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!",
    creator: "@finbyz",
    images: ["/images/Hire-ERPNext-Implementor679475.svg"],
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
  "name": "ERPNext Implementation Partner in Ahmedabad | Finbyz Tech",
  "url": "https://finbyz.tech/hire-erpnext-implementer",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/images/Hire-ERPNext-Implementor679475.svg",
  "description": "Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!",
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
  const data = await getPageData("Web Page","hire-erpnext-implementer");
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
        <meta itemProp="name" content="ERPNext Implementation Partner in Ahmedabad | Finbyz Tech" />
        <meta itemProp="description" content="Looking for a trusted ERPNext Implementation Partner in Ahmedabad? Finbyz Tech offers expert ERPNext services tailored to your business needs. Contact us today!" />
      </article>
      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
