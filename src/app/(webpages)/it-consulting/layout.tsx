import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "IT Consulting Services in Ahmedabad, Gujarat - India",
  description: "Elevate your business goals with our IT Consulting Services in Ahmedabad. Expert support, unbiased advice, and innovative solutions for optimal IT investment. ",
  keywords: "IT Consulting, IT Investment , consulting of IT , consulting in IT , IT consulting support, expert business advice, expert IT advice, IT consulting services, it consulting companies, it consulting companies in ahmedabad, IT consulting service in ahmedabad, IT consulting ahmedabad, IT service ahmedabad, it adviser ahmedabad, it adviser  ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/it-consulting",
  },
  openGraph: {
    title: "IT Consulting Services in Ahmedabad, Gujarat - India",
    description: "Elevate your business goals with our IT Consulting Services in Ahmedabad. Expert support, unbiased advice, and innovative solutions for optimal IT investment. ",
    url: "https://finbyz.tech/it-consulting",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/banner-consulting.svg", width: 1200, height: 630, alt: "IT Consulting Services in Ahmedabad, Gujarat - India" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consulting Services in Ahmedabad, Gujarat - India",
    description: "Elevate your business goals with our IT Consulting Services in Ahmedabad. Expert support, unbiased advice, and innovative solutions for optimal IT investment. ",
    creator: "@finbyz",
    images: ["/images/banner-consulting.svg"],
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
  "name": "IT Consulting Services in Ahmedabad, Gujarat - India",
  "url": "https://finbyz.tech/it-consulting",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/images/banner-consulting.svg",
  "description": "Elevate your business goals with our IT Consulting Services in Ahmedabad. Expert support, unbiased advice, and innovative solutions for optimal IT investment. ",
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
  const data = await getPageData("Web Page","it-consulting");
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
        <meta itemProp="name" content="IT Consulting Services in Ahmedabad, Gujarat - India" />
        <meta itemProp="description" content="Elevate your business goals with our IT Consulting Services in Ahmedabad. Expert support, unbiased advice, and innovative solutions for optimal IT investment. " />
      </article>
      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
