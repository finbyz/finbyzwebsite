import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import InquiryForm from "@/components/ui/InquiryForm";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ERP Migration to ERPNext | SAP, Oracle, Tally, Odoo Migration Experts",
  description:
    "Migrate from SAP, Oracle, Tally, Odoo, QuickBooks or any legacy ERP to ERPNext. Zero downtime, 100% data accuracy, expert implementation with proven methodology.",
  keywords:
    "erpnext migration, erp migration services, sap to erpnext, oracle to erpnext, tally to erpnext, odoo to erpnext, migrate erp system, erpnext data migration",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erp-migration",
  },
  openGraph: {
    title: "ERP Migration to ERPNext | SAP, Oracle, Tally Migration Experts",
    description:
      "Specialized ERP migration services ensuring 100% data accuracy, minimal downtime, and seamless transition to ERPNext.",
    url: "https://finbyz.tech/erp-migration",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/erp-migration.jpeg",
        width: 1200,
        height: 630,
        alt: "ERP Migration Services to ERPNext",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Migration to ERPNext | SAP, Oracle, Tally Migration Experts",
    description:
      "Reliable ERP migration from SAP, Oracle, Tally, Odoo & more to ERPNext with industry-leading accuracy and methodology.",
    creator: "@finbyz",
    images: ["/images/erp-migration.jpeg"],
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
    name: "ERP Migration to ERPNext | Finbyz Tech",
    url: "https://finbyz.tech/erp-migration",
    logo: "https://finbyz.tech/files/FinbyzLogo.png",
    image: "/images/erp-migration.jpeg",
    description:
      "Expert ERP migration services from SAP, Oracle, Tally, Odoo, QuickBooks and legacy systems to ERPNext with 100% data accuracy.",
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

  const data = await getPageData("Web Page", "erp-migration");
  const faqsGroup = await getFaqs("Web Page", "erp-migration");

  return (
    <>
      <main>
        {/* JSON-LD structured data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Semantic wrapper */}
        <article
          itemScope
          itemType="https://schema.org/WebPage"
        >
          <meta
            itemProp="name"
            content="ERP Migration to ERPNext | SAP, Oracle, Tally Migration Experts"
          />
          <meta
            itemProp="description"
            content="Expert ERP migration services ensuring seamless transition to ERPNext from SAP, Oracle, Tally, Odoo, QuickBooks & legacy systems."
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
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
