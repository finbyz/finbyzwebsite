import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Engineering ERP Software Solutions | FinByz Tech",
  description: "FinByz Tech delivers ERPNext-based engineering ERP software solutions. Streamline engineering and software engineering operations with integrated project, inventory, and financial management.",
  keywords: "erpnext for engineering,\nengineering erp software,\nerp in software engineering,\nerp system engineering,\nerp for engineering industry,\nengineering erp systems,\nerp in industrial engineering,\nerp mechanical engineering,\nerp for engineering companies,",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erp-for-engineering-industry",
  },
  openGraph: {
    title: "Engineering ERP Software Solutions | FinByz Tech",
    description: "FinByz Tech delivers ERPNext-based engineering ERP software solutions. Streamline engineering and software engineering operations with integrated project, inventory, and financial management.",
    url: "https://finbyz.tech/erp-for-engineering-industry",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Engineeringaced93.svg", width: 1200, height: 630, alt: "Engineering ERP Software Solutions | FinByz Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering ERP Software Solutions | FinByz Tech",
    description: "FinByz Tech delivers ERPNext-based engineering ERP software solutions. Streamline engineering and software engineering operations with integrated project, inventory, and financial management.",
    creator: "@finbyz",
    images: ["/files/Engineeringaced93.svg"],
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
  "name": "Engineering ERP Software Solutions | FinByz Tech",
  "url": "https://finbyz.tech/erp-for-engineering-industry",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Engineeringaced93.svg",
  "description": "FinByz Tech delivers ERPNext-based engineering ERP software solutions. Streamline engineering and software engineering operations with integrated project, inventory, and financial management.",
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
  const data = await getPageData("Web Page","erp-for-engineering-industry");
  const faqsGroup = await getFaqs("Web Page","erp-for-engineering-industry");
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
        <meta itemProp="name" content="Engineering ERP Software Solutions | FinByz Tech" />
        <meta itemProp="description" content="FinByz Tech delivers ERPNext-based engineering ERP software solutions. Streamline engineering and software engineering operations with integrated project, inventory, and financial management." />
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
