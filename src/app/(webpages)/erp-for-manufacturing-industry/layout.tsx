import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERP Software for Manufacturing Industry | FinByz Tech",
  description: "FinByz Tech’s ERPNext manufacturing ERP software streamlines production and inventory management, reducing costs and improving efficiency.",
  keywords: "erp software for manufacturing industry,\nmanufacturing erp software,\nerpnext for manufacturing,\nbest erp for manufacturing,\nerp for manufacturing industry,\nerp software manufacturing industry,\nerp for manufacturing,\nerp software for manufacturing,\nerp for manufacturing industry,\nbest erp for manufacturing,\nmanufacturing resource planning,\nbest manufacturing erp software,\nerpnext manufacturing",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erp-for-manufacturing-industry",
  },
  openGraph: {
    title: "ERP Software for Manufacturing Industry | FinByz Tech",
    description: "FinByz Tech’s ERPNext manufacturing ERP software streamlines production and inventory management, reducing costs and improving efficiency.",
    url: "https://finbyz.tech/erp-for-manufacturing-industry",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Manufacturing7ad5f1.svg", width: 1200, height: 630, alt: "ERP Software for Manufacturing Industry | FinByz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Software for Manufacturing Industry | FinByz Tech",
    description: "FinByz Tech’s ERPNext manufacturing ERP software streamlines production and inventory management, reducing costs and improving efficiency.",
    creator: "@finbyz",
    images: ["/files/Manufacturing7ad5f1.svg"],
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
  "name": "ERP Software for Manufacturing Industry | FinByz Tech",
  "url": "https://finbyz.tech/erp-for-manufacturing-industry",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Manufacturing7ad5f1.svg",
  "description": "FinByz Tech’s ERPNext manufacturing ERP software streamlines production and inventory management, reducing costs and improving efficiency.",
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
  const data = await getPageData("Web Page","erp-for-manufacturing-industry");
  const faqsGroup = await getFaqs("Web Page","erp-for-manufacturing-industry");
  
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
        <meta itemProp="name" content="ERP Software for Manufacturing Industry | FinByz Tech" />
        <meta itemProp="description" content="FinByz Tech’s ERPNext manufacturing ERP software streamlines production and inventory management, reducing costs and improving efficiency." />
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
