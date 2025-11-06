import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Life at Finbyz | Work Culture, Innovation & Career Growth",
  description: "Discover life at Finbyz Tech – where innovation meets growth. Explore our vibrant work culture, values, and commitment to learning, collaboration, and work-life balance. Join a team that empowers creativity and professional development.",
  keywords: "Life at Finbyz,Work culture in tech companies,Learning and development in tech",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/life-at-finbyz",
  },
  openGraph: {
    title: "Life at Finbyz | Work Culture, Innovation & Career Growth",
    description: "Discover life at Finbyz Tech – where innovation meets growth. Explore our vibrant work culture, values, and commitment to learning, collaboration, and work-life balance. Join a team that empowers creativity and professional development.",
    url: "https://finbyz.tech/life-at-finbyz",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Final banner LAF.jpg", width: 1200, height: 630, alt: "Life at Finbyz | Work Culture, Innovation & Career Growth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Life at Finbyz | Work Culture, Innovation & Career Growth",
    description: "Discover life at Finbyz Tech – where innovation meets growth. Explore our vibrant work culture, values, and commitment to learning, collaboration, and work-life balance. Join a team that empowers creativity and professional development.",
    creator: "@finbyz",
    images: ["/files/Final banner LAF.jpg"],
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
  "name": "Life at Finbyz | Work Culture, Innovation & Career Growth",
  "url": "https://finbyz.tech/life-at-finbyz",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Final banner LAF.jpg",
  "description": "Discover life at Finbyz Tech – where innovation meets growth. Explore our vibrant work culture, values, and commitment to learning, collaboration, and work-life balance. Join a team that empowers creativity and professional development.",
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
  const data = await getPageData("Web Page","life-at-finbyz");
  const faqsGroup = await getFaqs("Web Page","life-at-finbyz");
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
        <meta itemProp="name" content="Life at Finbyz | Work Culture, Innovation & Career Growth" />
        <meta itemProp="description" content="Discover life at Finbyz Tech – where innovation meets growth. Explore our vibrant work culture, values, and commitment to learning, collaboration, and work-life balance. Join a team that empowers creativity and professional development." />
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
