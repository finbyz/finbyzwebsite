import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Import Export Licence Management | Finbyz tech",
  description: "Optimize your import-export operations with ERPNext. Streamline Advanced Authorisation Licence management, ensure compliance, and enhance efficiency.\n\n",
  keywords: "ERPNext for Advanced Authorisation Licence,\nAdvance Authorisation Licences,\nImport Export Lincence management",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/advanced-authorisation-licence-erpnext",
  },
  openGraph: {
    title: "Import Export Licence Management | Finbyz tech",
    description: "Optimize your import-export operations with ERPNext. Streamline Advanced Authorisation Licence management, ensure compliance, and enhance efficiency.\n\n",
    url: "https://finbyz.tech/advanced-authorisation-licence-erpnext",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Advance-Authorization-License-PageDesign.svg", width: 1200, height: 630, alt: "Import Export Licence Management | Finbyz tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Import Export Licence Management | Finbyz tech",
    description: "Optimize your import-export operations with ERPNext. Streamline Advanced Authorisation Licence management, ensure compliance, and enhance efficiency.\n\n",
    creator: "@finbyz",
    images: ["/files/Advance-Authorization-License-PageDesign.svg"],
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
  "name": "Import Export Licence Management | Finbyz tech",
  "url": "https://finbyz.tech/advanced-authorisation-licence-erpnext",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Advance-Authorization-License-PageDesign.svg",
  "description": "Optimize your import-export operations with ERPNext. Streamline Advanced Authorisation Licence management, ensure compliance, and enhance efficiency.\n\n",
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
  const data = await getPageData("Web Page","advanced-authorisation-licence-erpnext");
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
        <meta itemProp="name" content="Import Export Licence Management | Finbyz tech" />
        <meta itemProp="description" content="Optimize your import-export operations with ERPNext. Streamline Advanced Authorisation Licence management, ensure compliance, and enhance efficiency.\n\n" />
      </article>
      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
