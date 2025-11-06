import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hire Dedicated Python Developers\n\n",
  description: "Looking for top Python development companies? Hire Python developer with expertise. Find skilled Python coders for your projects. Python developer hire.",
  keywords: "python development companies,\nhire python developer,\npython developers,\npython coder,\npython developer hire,\npython developers,\nfull stack developers,\npython development companies,\npython api development,\nweb app python,\npython company,\npython developers in india\n\n\n\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/hire-python-developer",
  },
  openGraph: {
    title: "Hire Dedicated Python Developers\n\n",
    description: "Looking for top Python development companies? Hire Python developer with expertise. Find skilled Python coders for your projects. Python developer hire.",
    url: "https://finbyz.tech/hire-python-developer",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: "/files/Hire-Python-Dev.svg", width: 1200, height: 630, alt: "Hire Dedicated Python Developers\n\n" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Dedicated Python Developers\n\n",
    description: "Looking for top Python development companies? Hire Python developer with expertise. Find skilled Python coders for your projects. Python developer hire.",
    creator: "@finbyz",
    images: ["/files/Hire-Python-Dev.svg"],
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
  "name": "Hire Dedicated Python Developers\n\n",
  "url": "https://finbyz.tech/hire-python-developer",
  "logo": "https://finbyz.tech/files/FinbyzLogo.png",
  "image": "/files/Hire-Python-Dev.svg",
  "description": "Looking for top Python development companies? Hire Python developer with expertise. Find skilled Python coders for your projects. Python developer hire.",
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
  const data = await getPageData("Web Page","hire-python-developer");
  const faqsGroup = await getFaqs("Web Page","hire-python-developer");
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
        <meta itemProp="name" content="Hire Dedicated Python Developers\n\n" />
        <meta itemProp="description" content="Looking for top Python development companies? Hire Python developer with expertise. Find skilled Python coders for your projects. Python developer hire." />
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
