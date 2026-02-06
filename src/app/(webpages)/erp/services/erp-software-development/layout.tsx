import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import InquiryForm from "@/components/ui/InquiryForm";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Custom ERP Development | Tailored ERP Solutions for Your Business",
  description:
    "FinByz Tech builds custom ERP solutions designed around your workflows. Scalable, secure, integrated ERP systems for enterprises and growing businesses.",
  keywords:
    "custom ERP development, ERPNext development, ERP customization, ERP developers, business process automation, enterprise software development",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/custom-erp-development",
  },
  openGraph: {
    title: "Custom ERP Development | FinByz Tech",
    description:
      "End-to-end custom ERP development tailored to your internal workflows. Build scalable, secure and integrated ERP systems with FinByz Tech.",
    url: "https://finbyz.tech/custom-erp-development",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/custom-erp.jpeg",
        width: 1200,
        height: 630,
        alt: "Custom ERP Development by Finbyz Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom ERP Development | FinByz Tech",
    description:
      "Custom-built ERP systems tailored to your workflows — scalable, secure and future-ready.",
    images: ["/images/custom-erp.jpeg"],
    creator: "@finbyz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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
    name: "Custom ERP Development | FinByz Tech",
    url: "https://finbyz.tech/custom-erp-development",
    logo: "https://finbyz.tech/files/FinbyzLogo.png",
    image: "/images/custom-erp.jpeg",
    description:
      "Custom ERP development services tailored to your internal processes, including consulting, architecture design, development, and system integration.",
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
        availableLanguage: ["English", "Hindi", "Gujarati"],
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

  const data = await getPageData("Web Page", "custom-erp-development");
  const faqsGroup = await getFaqs("Web Page", "custom-erp-development");

  return (
    <>
      <main>
        {/* Structured JSON-LD */}
        <Script
          id="structured-data-custom-erp"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* WebPage Schema */}
        <article itemScope itemType="https://schema.org/WebPage">
          <meta
            itemProp="name"
            content="Custom ERP Development | FinByz Tech"
          />
          <meta
            itemProp="description"
            content="Build custom ERP solutions designed for your business workflows. Scalable, secure and integrated ERP development services."
          />
        </article>

        {/* Main Page Content */}
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

        {/* Business Customers Slider */}
        <BusinessSlider />
        <InquiryForm />
      </main>

    </>
  );
}
