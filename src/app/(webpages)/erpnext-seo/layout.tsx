import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Boost Your Business with ERPNext Website SEO Services",
  description: "Optimize your ERPNext platform with SEO to Increase visibility, attract more visitors, and drive growth. Start enhancing your online presence today!",
  keywords: " ERPNext SEO,\n ERPNext Website SEO\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erpnext-seo",
  },
  openGraph: {
    title: "Boost Your Business with ERPNext Website SEO Services",
    description: "Optimize your ERPNext platform with SEO to Increase visibility, attract more visitors, and drive growth. Start enhancing your online presence today!",
    url: "https://finbyz.tech/erpnext-seo",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/seo.png", width: 1200, height: 630, alt: "Boost Your Business with ERPNext Website SEO Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boost Your Business with ERPNext Website SEO Services",
    description: "Optimize your ERPNext platform with SEO to Increase visibility, attract more visitors, and drive growth. Start enhancing your online presence today!",
    creator: "@finbyz",
    images: ["/files/seo.png"],
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
  "name": "Boost Your Business with ERPNext Website SEO Services",
  "url": "https://finbyz.tech/erpnext-seo",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/seo.png",
  "description": "Optimize your ERPNext platform with SEO to Increase visibility, attract more visitors, and drive growth. Start enhancing your online presence today!",
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
  const data = await getPageData("Web Page","erpnext-seo");
  const faqsGroup = await getFaqs("Web Page","erpnext-seo");
  
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
        <meta itemProp="name" content="Boost Your Business with ERPNext Website SEO Services" />
        <meta itemProp="description" content="Optimize your ERPNext platform with SEO to Increase visibility, attract more visitors, and drive growth. Start enhancing your online presence today!" />
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
