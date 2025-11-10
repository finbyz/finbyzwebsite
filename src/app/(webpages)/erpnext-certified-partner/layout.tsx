import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech",
  description: "Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs.",
  keywords: "erpnext partner,\nfrappe partner,\nerpnext partner in ahmedabad, gujarat\nerpnext,\nerpnext software,\nerpnext certified partner in india,\nerpnext service providers,erpnext service in uk,\nerpnext service in Canada,	\nerpnext service provider in uk,\nerpnext certified partners,\nerpnext service provider in Canada,\nerpnext partners in uk,\nERP Software, CRM Software, \nAccounting Software, \nManufacturing Software",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erpnext-certified-partner",
  },
  openGraph: {
    title: "Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech",
    description: "Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs.",
    url: "https://finbyz.tech/erpnext-certified-partner",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Frappe-Certified-parnter-Page Design-SVG.svg", width: 1200, height: 630, alt: "Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech",
    description: "Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs.",
    creator: "@finbyz",
    images: ["/files/Frappe-Certified-parnter-Page Design-SVG.svg"],
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
  "name": "Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech",
  "url": "https://finbyz.tech/erpnext-certified-partner",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Frappe-Certified-parnter-Page Design-SVG.svg",
  "description": "Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs.",
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
  const data = await getPageData("Web Page","erpnext-certified-partner");
  const faqsGroup = await getFaqs("Web Page","erpnext-certified-partner");
  
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
        <meta itemProp="name" content="Certified ERPNext & Frappe Partner in Ahmedabad, Gujarat | Finbyz Tech" />
        <meta itemProp="description" content="Finbyz Tech, a certified ERPNext and Frappe Partner in Ahmedabad, offers expert ERP implementation, customization, and support services tailored to your business needs." />
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
