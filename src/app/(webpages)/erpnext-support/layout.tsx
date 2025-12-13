import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "ERPNext Support Services | AMC, Bug Fixes, Customization & Functional Support",
  description:
    "FinByz Tech provides expert ERPNext support including AMC, bug fixing, customizations, functional support, upgrades and performance optimization.",
  keywords:
    "erpnext support services, erpnext amc, erpnext bug fixes, erpnext customization, erpnext maintenance, erpnext technical support, erpnext experts",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erpnext-support-services",
  },
  openGraph: {
    title:
      "ERPNext Support Services | AMC, Bug Fixes, Customization & Maintenance",
    description:
      "Reliable ERPNext support for businesses: AMC, customization, performance optimization, bug fixes, version upgrades and functional consultation.",
    url: "https://finbyz.tech/erpnext-support-services",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/erpnext-support.jpeg",
        width: 1200,
        height: 630,
        alt: "ERPNext Support Services by Finbyz Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ERPNext Support Services | AMC, Bug Fixes, Customization & Maintenance",
    description:
      "Professional ERPNext support including bug fixes, customizations, upgrades and ongoing maintenance.",
    creator: "@finbyz",
    images: ["/images/erpnext-support.jpeg"],
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
  const structuredData = {
    "@context": "http://www.schema.org",
    "@type": "ProfessionalService",
    name: "ERPNext Support Services | Finbyz Tech",
    url: "https://finbyz.tech/erpnext-support-services",
    logo: "https://finbyz.tech/files/FinbyzLogo.png",
    image: "/images/erpnext-support.jpeg",
    description:
      "Expert ERPNext support services including AMC, bug fixing, customization, version upgrades, server optimization and ongoing ERP maintenance.",
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
    openingHours: "Mo, Tu, We, Th, Fr, Sa 10.00-19:00",
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

  const data = await getPageData("Web Page", "erpnext-support-services");
  const faqsGroup = await getFaqs("Web Page", "erpnext-support-services");

  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="structured-data-support"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* WebPage schema wrapper */}
      <article
        itemScope
        itemType="https://schema.org/WebPage"
      >
        <meta
          itemProp="name"
          content="ERPNext Support Services | AMC, Bug Fixing & Customization"
        />
        <meta
          itemProp="description"
          content="Professional ERPNext support including AMC, bug fixes, customization, upgrades and server optimization."
        />
      </article>

      {/* Page Content */}
      {children}

      {/* FAQ Section */}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}

      {/* Gallery + Related Reads */}
      {(data.galleryItems.length > 0 || data.relatedReads.length > 0) && (
        <FinbyzGallery
          relatedReads={data.relatedReads}
          galleryItems={data.galleryItems}
        />
      )}

      {/* Business Slider */}
      <BusinessSlider />
    </>
  );
}
