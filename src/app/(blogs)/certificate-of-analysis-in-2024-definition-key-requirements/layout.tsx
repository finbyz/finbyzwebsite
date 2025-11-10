import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Certificate of Analysis (CoA) in 2025: Definition, Key Requirements & Documentation Process",
  description: "Explore the essentials of Certificate of Analysis (CoA) in 2025, including its definition, key components, documentation process, and the shift towards digital management.",
  keywords: "CoA, Certificate of Analysis, coa document",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/certificate-of-analysis-in-2024-definition-key-requirements",
  },
  openGraph: {
    title: "Certificate of Analysis (CoA) in 2025: Definition, Key Requirements & Documentation Process",
    description: "Explore the essentials of Certificate of Analysis (CoA) in 2025, including its definition, key components, documentation process, and the shift towards digital management.",
    url: "https://finbyz.tech/certificate-of-analysis-in-2024-definition-key-requirements",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificate of Analysis (CoA) in 2025: Definition, Key Requirements & Documentation Process",
    description: "Explore the essentials of Certificate of Analysis (CoA) in 2025, including its definition, key components, documentation process, and the shift towards digital management.",
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
const faqsGroup = await getFaqs("Blog Post","certificate-of-analysis-in-2024-definition-key-requirements");

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/certificate-of-analysis-in-2024-definition-key-requirements#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/certificate-of-analysis-in-2024-definition-key-requirements",
  "headline": "Certificate of Analysis (CoA) in 2025: Definition, Key Requirements & Documentation Process",
  "name": "Certificate of Analysis (CoA) in 2025: Definition, Key Requirements & Documentation Process",
  "description": "Explore the essentials of Certificate of Analysis (CoA) in 2025, including its definition, key components, documentation process, and the shift towards digital management.",
  "datePublished": "",
  "dateModified": "",
  "author": {
    "@type": "Person",
    "name": "FinByz Tech Pvt Ltd",
    "url": "https://finbyz.tech/about-us",
    "image": {
      "@type": "ImageObject",
      "url": "https://finbyz.tech/files/FinbyzLogo.png",
      "height": "96",
      "width": "96"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "FinByz Tech Pvt Ltd",
    "url": "https://finbyz.tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://finbyz.tech/files/FinbyzLogo.png",
      "width": "600",
      "height": "60"
    }
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://finbyz.tech/files/FinbyzLogo.png",
    "width": "1200",
    "height": "630"
  },
  "url": "https://finbyz.tech/certificate-of-analysis-in-2024-definition-key-requirements",
  "isPartOf": {
    "@type": "Blog",
    "@id": "https://finbyz.tech/blog-post/",
    "name": "FinByz Tech Blog",
    "publisher": {
      "@type": "Organization",
      "@id": "https://finbyz.tech",
      "name": "FinByz Tech Pvt Ltd"
    }
  },
  "keywords": [
    "CoA",
    "Certificate of Analysis",
    "coa document"
  ]
};
  const data = await getPageData("Blog Post","certificate-of-analysis-in-2024-definition-key-requirements");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Certificate of Analysis (CoA) in 2025: Definition, Key Requirements & Documentation Process" />
        <meta itemProp="description" content="Explore the essentials of Certificate of Analysis (CoA) in 2025, including its definition, key components, documentation process, and the shift towards digital management." />
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
