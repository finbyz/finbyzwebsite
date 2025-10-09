import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech",
  description: "Discover how Finbyz Tech\'s ERP solutions streamline logistics operations, enhance efficiency, and provide real-time analytics for the logistics industry.",
  keywords: "erpnext for logistics industry,\nlogistics erp system,\nerp software for logistics industry,\nlogistics erp software,\nerp for logistics,\nlogistics companies,\nbest erp for logistics,\nsoftware for transport company,\nsoftware for logistics company,\n\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erp-for-logistics-industry",
  },
  openGraph: {
    title: "Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech",
    description: "Discover how Finbyz Tech\'s ERP solutions streamline logistics operations, enhance efficiency, and provide real-time analytics for the logistics industry.",
    url: "https://finbyz.tech/erp-for-logistics-industry",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Logistic90ec93.svg", width: 1200, height: 630, alt: "Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech",
    description: "Discover how Finbyz Tech\'s ERP solutions streamline logistics operations, enhance efficiency, and provide real-time analytics for the logistics industry.",
    creator: "@finbyz",
    images: ["/files/Logistic90ec93.svg"],
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
  "name": "Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech",
  "url": "https://finbyz.tech/erp-for-logistics-industry",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Logistic90ec93.svg",
  "description": "Discover how Finbyz Tech\'s ERP solutions streamline logistics operations, enhance efficiency, and provide real-time analytics for the logistics industry.",
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
        <meta itemProp="name" content="Logistics ERP System | ERP Software for Logistics Industry | Finbyz Tech" />
        <meta itemProp="description" content="Discover how Finbyz Tech\'s ERP solutions streamline logistics operations, enhance efficiency, and provide real-time analytics for the logistics industry." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
