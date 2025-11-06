import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Boost Efficiency with Top Production ERP Software Solutions for Manufacturing",
  description: "Discover how production ERP software streamlines manufacturing operations, enhances efficiency, and drives growth. Explore key features, benefits, and FAQs.",
  keywords: " production ERP software,\nerp systems for manufacturing,\nproduction manufacturing software,\nERP for manufacturing industry, \nmanufacturing ERP",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/streamlining-manufacturing-operations-with-production-erp-software",
  },
  openGraph: {
    title: "Boost Efficiency with Top Production ERP Software Solutions for Manufacturing",
    description: "Discover how production ERP software streamlines manufacturing operations, enhances efficiency, and drives growth. Explore key features, benefits, and FAQs.",
    url: "https://finbyz.tech/streamlining-manufacturing-operations-with-production-erp-software",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Boost Efficiency with Top Production ERP Software Solutions for Manufacturing",
    description: "Discover how production ERP software streamlines manufacturing operations, enhances efficiency, and drives growth. Explore key features, benefits, and FAQs.",
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
const faqsGroup = await getFaqs("Blog Post","streamlining-manufacturing-operations-with-production-erp-software");
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
export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/streamlining-manufacturing-operations-with-production-erp-software#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/streamlining-manufacturing-operations-with-production-erp-software",
  "headline": "Boost Efficiency with Top Production ERP Software Solutions for Manufacturing",
  "name": "Boost Efficiency with Top Production ERP Software Solutions for Manufacturing",
  "description": "Discover how production ERP software streamlines manufacturing operations, enhances efficiency, and drives growth. Explore key features, benefits, and FAQs.",
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
  "url": "https://finbyz.tech/streamlining-manufacturing-operations-with-production-erp-software",
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
    "production ERP software",
    "erp systems for manufacturing",
    "production manufacturing software",
    "ERP for manufacturing industry",
    "manufacturing ERP"
  ]
};
  const data = await getPageData("Blog Post","streamlining-manufacturing-operations-with-production-erp-software");

  return (
    <>
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

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Boost Efficiency with Top Production ERP Software Solutions for Manufacturing" />
        <meta itemProp="description" content="Discover how production ERP software streamlines manufacturing operations, enhances efficiency, and drives growth. Explore key features, benefits, and FAQs." />
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
