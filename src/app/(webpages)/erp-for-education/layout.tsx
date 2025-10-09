import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best Education ERP Software - Best ERP for Schools",
  description: "Discover the best ERP for schools: our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions.",
  keywords: "education erp software,\nerp for education,\nbest erp for schools\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erp-for-education",
  },
  openGraph: {
    title: "Best Education ERP Software - Best ERP for Schools",
    description: "Discover the best ERP for schools: our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions.",
    url: "https://finbyz.tech/erp-for-education",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Education ERP Software - Best ERP for Schools",
    description: "Discover the best ERP for schools: our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions.",
    creator: "@finbyz",
    
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

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "http://www.schema.org",
  "@type": "ProfessionalService",
  "name": "Best Education ERP Software - Best ERP for Schools",
  "url": "https://finbyz.tech/erp-for-education",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "None",
  "description": "Discover the best ERP for schools: our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions.",
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
        <meta itemProp="name" content="Best Education ERP Software - Best ERP for Schools" />
        <meta itemProp="description" content="Discover the best ERP for schools: our education ERP software streamlines operations, enhancing efficiency and learning outcomes for educational institutions." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
