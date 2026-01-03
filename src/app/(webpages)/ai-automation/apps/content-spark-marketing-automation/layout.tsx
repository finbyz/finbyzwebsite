import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";

import InquiryForm from "@/components/ui/InquiryForm";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Content Spark | Streamline Marketing Automation with AI-Powered Content Creation",
  description: "Content Spark is an AI-powered marketing automation platform that helps teams create, plan, and publish content faster. Maintain brand consistency, automate content ideation, and scale marketing effortlessly with AI.",
  keywords: "",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/content-spark-marketing-automation",
  },
  openGraph: {
    title: "Content Spark | Streamline Marketing Automation with AI-Powered Content Creation",
    description: "Content Spark is an AI-powered marketing automation platform that helps teams create, plan, and publish content faster. Maintain brand consistency, automate content ideation, and scale marketing effortlessly with AI.",
    url: "https://finbyz.tech/content-spark-marketing-automation",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "Content Spark | Streamline Marketing Automation with AI-Powered Content Creation",
    description: "Content Spark is an AI-powered marketing automation platform that helps teams create, plan, and publish content faster. Maintain brand consistency, automate content ideation, and scale marketing effortlessly with AI.",
    creator: "@finbyz",

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
    "name": "Content Spark | Streamline Marketing Automation with AI-Powered Content Creation",
    "url": "https://finbyz.tech/content-spark-marketing-automation",
    "logo": "https://finbyz.tech/files/FinbyzLogo.png",
    "image": "None",
    "description": "Content Spark is an AI-powered marketing automation platform that helps teams create, plan, and publish content faster. Maintain brand consistency, automate content ideation, and scale marketing effortlessly with AI.",
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
  const data = await getPageData("Web Page", "content-spark-marketing-automation");
  const faqsGroup = await getFaqs("Web Page", "content-spark-marketing-automation");

  return (
    <>
      <main>
        {/* JSON-LD structured data for LLMs */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Semantic HTML wrapper for better content extraction */}
        <article itemScope itemType="https://schema.org/WebPage">
          <meta itemProp="name" content="Content Spark | Streamline Marketing Automation with AI-Powered Content Creation" />
          <meta itemProp="description" content="Content Spark is an AI-powered marketing automation platform that helps teams create, plan, and publish content faster. Maintain brand consistency, automate content ideation, and scale marketing effortlessly with AI." />
        </article>
        {children}
        {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
        {
          (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
        }
        <BusinessSlider />
        <InquiryForm />
      </main>

    </>
  );
}
