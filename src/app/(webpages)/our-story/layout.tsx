import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Our Story | Finbyz Tech",
  description:
    "Discover the journey of Finbyz Tech — from a small ERP-focused team founded in 2016 to a global technology partner delivering ERPNext, AI, and automation solutions across 12+ countries.",
  keywords:
    "Finbyz story, Finbyz tech history, company journey, ERPNext company, tech innovation, global technology partner, Finbyz mission, Finbyz vision",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/about-us/our-story",
  },
  openGraph: {
    title: "Our Story | Finbyz Tech",
    description:
      "Explore how Finbyz Tech grew from a small team in 2016 to a global leader in ERPNext, AI, and business automation.",
    url: "https://finbyz.tech/about-us/our-story",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/our-story-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Our Story | Finbyz Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | Finbyz Tech",
    description:
      "Explore how Finbyz Tech evolved into a global leader in ERPNext, AI, and digital transformation.",
    creator: "@finbyz",
    images: ["/images/our-story-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // -------------------------------------
  // STRUCTURED DATA (JSON-LD)
  // -------------------------------------
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Finbyz Tech Pvt Ltd",
    url: "https://finbyz.tech/our-story",
    logo: "https://finbyz.tech/files/FinbyzLogo.png",
    description:
      "Finbyz Tech is a global technology partner specializing in ERPNext, AI solutions, and digital transformation services.",
    foundingDate: "2016",
    founders: [
      {
        "@type": "Person",
        name: "Finbyz Tech Founding Team",
      },
    ],
    sameAs: [
      "https://www.facebook.com/FinByz",
      "https://twitter.com/FinByz",
      "https://www.linkedin.com/company/finbyz",
      "https://www.youtube.com/c/Finbyz",
      "https://www.instagram.com/finbyz/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "FinByz Tech Pvt Ltd, 504-Addor Ambition, Nr. Navrang Circle, Navrangpura",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380009",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 9925701446",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
    ],
  };

  const data = await getPageData("Web Page", "our-story");
  const faqsGroup = await getFaqs("Web Page", "our-story");

  return (
    <>
      {/* --- JSON-LD Structured Data --- */}
      <Script
        id="structured-data-our-story"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* --- Semantic Wrapper for LLMs & SEO --- */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Our Story | Finbyz Tech" />
        <meta
          itemProp="description"
          content="Learn how Finbyz Tech grew from a small ERP-focused team to a global leader in ERPNext, AI, and digital transformation."
        />
      </article>

      {/* --- Page Content --- */}
      {children}

      {/* --- Add FAQs if exists --- */}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}

      {/* --- Gallery and Related Reads --- */}
      {data.galleryItems.length > 0 || data.relatedReads.length > 0 ? (
        <FinbyzGallery
          relatedReads={data.relatedReads}
          galleryItems={data.galleryItems}
        />
      ) : null}

      {/* --- Footer Slider --- */}
      <BusinessSlider />
    </>
  );
}
