import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERP for Trading & Distribution Industry | Trading Software",
  description: "Unlock premium ERP for trading sector: Optimize processes, boost efficiency, and fuel business expansion. Transform your enterprise now!",
  keywords: "ERP for trading, \nERP for trading industry, \nInventory Management, \nOrder management, \nQuotation Management,\nerp for trading,\ntrading,\ntrading software",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erp-for-trading-industry",
  },
  openGraph: {
    title: "ERP for Trading & Distribution Industry | Trading Software",
    description: "Unlock premium ERP for trading sector: Optimize processes, boost efficiency, and fuel business expansion. Transform your enterprise now!",
    url: "https://finbyz.tech/erp-for-trading-industry",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/erp for trading.svg", width: 1200, height: 630, alt: "ERP for Trading & Distribution Industry | Trading Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP for Trading & Distribution Industry | Trading Software",
    description: "Unlock premium ERP for trading sector: Optimize processes, boost efficiency, and fuel business expansion. Transform your enterprise now!",
    creator: "@finbyz",
    images: ["/images/erp for trading.svg"],
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
  "name": "ERP for Trading & Distribution Industry | Trading Software",
  "url": "https://finbyz.tech/erp-for-trading-industry",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/images/erp for trading.svg",
  "description": "Unlock premium ERP for trading sector: Optimize processes, boost efficiency, and fuel business expansion. Transform your enterprise now!",
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
  const data = await getPageData("Web Page","erp-for-trading-industry");
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
        <meta itemProp="name" content="ERP for Trading & Distribution Industry | Trading Software" />
        <meta itemProp="description" content="Unlock premium ERP for trading sector: Optimize processes, boost efficiency, and fuel business expansion. Transform your enterprise now!" />
      </article>
      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
