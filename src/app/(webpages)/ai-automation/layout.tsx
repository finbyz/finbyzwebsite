import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AI-Powered Automation for ERPNext | Finbyz Tech",
  description:
    "Automate workflows, enhance decision-making, and scale faster with Finbyz Tech’s AI-Powered Automation. Seamlessly integrate Artificial Intelligence with ERPNext for business growth.",
  keywords:
    "AI Automation, ERPNext Automation, Business Process Automation, AI in ERP, Artificial Intelligence ERP, Workflow Automation, Finbyz Tech Automation, AI Solutions, Automation Software",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/ai-automation",
  },
  openGraph: {
    title: "AI-Powered Automation for ERPNext | Finbyz Tech",
    description:
      "Discover Finbyz Tech’s AI automation solutions to boost efficiency, eliminate manual processes, and make smarter business decisions with ERPNext.",
    url: "https://finbyz.tech/ai-automation",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/ai-automation.jpeg",
        width: 1200,
        height: 630,
        alt: "AI-Powered Automation for ERPNext | Finbyz Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Automation for ERPNext | Finbyz Tech",
    description:
      "Finbyz Tech brings Artificial Intelligence to ERPNext to automate workflows, enhance productivity, and drive data-driven growth.",
    creator: "@finbyz",
    images: ["/images/ai-automation.jpeg"],
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
  // ✅ Structured Data for AI Automation Page
  const structuredData = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "AI-Powered Automation for ERPNext | Finbyz Tech",
    url: "https://finbyz.tech/ai-automation",
    logo: "https://finbyz.tech/files/FinbyzLogo.png",
    image: "/images/ai-automation.jpeg",
    description:
      "Automate workflows and drive business growth with Finbyz Tech’s AI-Powered Automation for ERPNext. Enhance efficiency, reduce costs, and scale smarter.",
    priceRange: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "FinByz Tech Pvt Ltd, 504-Addor Ambition, Nr. Navrang Circle, Navrangpura, Ahmedabad, Gujarat 380009",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
      postalCode: "380009",
    },
    telephone: "+919925701446",
    openingHours: "Mo, Tu, We, Th, Fr, Sa 10.00:00-19:00",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 7948912428",
        contactType: "customer support",
        areaServed: ["IN"],
        availableLanguage: ["Hindi", "Gujarati", "English"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/FinByz",
      "https://twitter.com/FinByz",
      "https://www.linkedin.com/company/finbyz",
      "https://www.youtube.com/c/Finbyz",
      "https://www.instagram.com/finbyz/",
    ],
  };

  // ✅ Fetch dynamic content (if connected to backend)
  const data = await getPageData("Web Page", "ai-automation");
  const faqsGroup = await getFaqs("Web Page", "ai-automation");

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="structured-data-ai-automation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Schema for WebPage context */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta
          itemProp="name"
          content="AI-Powered Automation for ERPNext | Finbyz Tech"
        />
        <meta
          itemProp="description"
          content="Automate workflows, enhance decision-making, and scale faster with Finbyz Tech’s AI-Powered Automation integrated with ERPNext."
        />
      </article>

      {/* Render main page content */}
      {children}

      {/* Conditional FAQ Section */}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}

      {/* Finbyz Gallery / Related Reads */}
      {(data.galleryItems.length > 0 || data.relatedReads.length > 0) && (
        <FinbyzGallery
          relatedReads={data.relatedReads}
          galleryItems={data.galleryItems}
        />
      )}

      {/* Global business slider */}
      <BusinessSlider />
    </>
  );
}
