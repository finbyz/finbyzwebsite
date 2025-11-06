import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Various Modules of ERP Software",
  description: "From Customer Relationship Management (CRM) to Supply Chain Management (SCM), from Accounts to HR we cover it all. Our ERP Software is highly developed which helps any business to get a control on management of almost all the major functions of the business. ",
  keywords: "Accounts Software, CRM Software, Inventory Software, Manufacturing Software, Human Resource Software, HR Software , modules of ERP, Modules of ERP Software, all about erp software, functional modules of erp software, modules in erp, different modules of erp ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/modules-of-erp",
  },
  openGraph: {
    title: "Various Modules of ERP Software",
    description: "From Customer Relationship Management (CRM) to Supply Chain Management (SCM), from Accounts to HR we cover it all. Our ERP Software is highly developed which helps any business to get a control on management of almost all the major functions of the business. ",
    url: "https://finbyz.tech/modules-of-erp",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/erp-modules.svg", width: 1200, height: 630, alt: "Various Modules of ERP Software" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Various Modules of ERP Software",
    description: "From Customer Relationship Management (CRM) to Supply Chain Management (SCM), from Accounts to HR we cover it all. Our ERP Software is highly developed which helps any business to get a control on management of almost all the major functions of the business. ",
    creator: "@finbyz",
    images: ["/files/erp-modules.svg"],
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
  "name": "Various Modules of ERP Software",
  "url": "https://finbyz.tech/modules-of-erp",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/erp-modules.svg",
  "description": "From Customer Relationship Management (CRM) to Supply Chain Management (SCM), from Accounts to HR we cover it all. Our ERP Software is highly developed which helps any business to get a control on management of almost all the major functions of the business. ",
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
  const data = await getPageData("Web Page","modules-of-erp");
  const faqsGroup = await getFaqs("Web Page","modules-of-erp");
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
        <meta itemProp="name" content="Various Modules of ERP Software" />
        <meta itemProp="description" content="From Customer Relationship Management (CRM) to Supply Chain Management (SCM), from Accounts to HR we cover it all. Our ERP Software is highly developed which helps any business to get a control on management of almost all the major functions of the business. " />
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
