import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERPNext Service Provider | Cloud ERP Software Company",
  description: "Discover leading ERPNext service providers for seamless business management solutions. Expert customization, support, and integration services.",
  keywords: "ERPNext Partner,\nERPNext Service Provider\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erpnext-service-provider",
  },
  openGraph: {
    title: "ERPNext Service Provider | Cloud ERP Software Company",
    description: "Discover leading ERPNext service providers for seamless business management solutions. Expert customization, support, and integration services.",
    url: "https://finbyz.tech/erpnext-service-provider",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Frappe-Certified-Erpnext-Partner.svg", width: 1200, height: 630, alt: "ERPNext Service Provider | Cloud ERP Software Company" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Service Provider | Cloud ERP Software Company",
    description: "Discover leading ERPNext service providers for seamless business management solutions. Expert customization, support, and integration services.",
    creator: "@finbyz",
    images: ["/files/Frappe-Certified-Erpnext-Partner.svg"],
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
  "name": "ERPNext Service Provider | Cloud ERP Software Company",
  "url": "https://finbyz.tech/erpnext-service-provider",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Frappe-Certified-Erpnext-Partner.svg",
  "description": "Discover leading ERPNext service providers for seamless business management solutions. Expert customization, support, and integration services.",
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
  const data = await getPageData("Web Page","erpnext-service-provider");
  const faqsGroup = await getFaqs("Web Page","erpnext-service-provider");
  const faqstructureData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsGroup?.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* JSON-LD structured data for LLMs */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="structured-faqs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqstructureData) }}
      />
      
      {/* Semantic HTML wrapper for better content extraction */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="ERPNext Service Provider | Cloud ERP Software Company" />
        <meta itemProp="description" content="Discover leading ERPNext service providers for seamless business management solutions. Expert customization, support, and integration services." />
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
