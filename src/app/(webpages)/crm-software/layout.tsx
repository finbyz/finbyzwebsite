import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best CRM Software & Open Source CRM System | Finbyz Tech",
  description: "Streamline your sales, marketing, and support with Finbyz CRM Software. Discover our powerful CRM system and flexible open source CRM solutions designed for growth.",
  keywords: "CRM Software, \ncrm system,\nopen source crm,\nSales Tracker Software,\nsales crm,\ncrm programs,\ncustomer management system,\ncrm companies,\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/crm-software",
  },
  openGraph: {
    title: "Best CRM Software & Open Source CRM System | Finbyz Tech",
    description: "Streamline your sales, marketing, and support with Finbyz CRM Software. Discover our powerful CRM system and flexible open source CRM solutions designed for growth.",
    url: "https://finbyz.tech/crm-software",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/CRMWord.svg", width: 1200, height: 630, alt: "Best CRM Software & Open Source CRM System | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best CRM Software & Open Source CRM System | Finbyz Tech",
    description: "Streamline your sales, marketing, and support with Finbyz CRM Software. Discover our powerful CRM system and flexible open source CRM solutions designed for growth.",
    creator: "@finbyz",
    images: ["/files/CRMWord.svg"],
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
  "name": "Best CRM Software & Open Source CRM System | Finbyz Tech",
  "url": "https://finbyz.tech/crm-software",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/CRMWord.svg",
  "description": "Streamline your sales, marketing, and support with Finbyz CRM Software. Discover our powerful CRM system and flexible open source CRM solutions designed for growth.",
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
        <meta itemProp="name" content="Best CRM Software & Open Source CRM System | Finbyz Tech" />
        <meta itemProp="description" content="Streamline your sales, marketing, and support with Finbyz CRM Software. Discover our powerful CRM system and flexible open source CRM solutions designed for growth." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
