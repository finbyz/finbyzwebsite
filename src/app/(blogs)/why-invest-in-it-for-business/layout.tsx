import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Reasons to Invest in IT: Boost Business Efficiency with ERP Software & IT Tools",
  description: "Discover how investing in IT, ERP software, and essential IT tools can enhance your business operations, improve customer engagement, and drive growth.",
  keywords: "IT,\nERP Software, \nIT Tools, \nbusiness software ",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/why-invest-in-it-for-business",
  },
  openGraph: {
    title: "Top Reasons to Invest in IT: Boost Business Efficiency with ERP Software & IT Tools",
    description: "Discover how investing in IT, ERP software, and essential IT tools can enhance your business operations, improve customer engagement, and drive growth.",
    url: "https://finbyz.tech/why-invest-in-it-for-business",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Reasons to Invest in IT: Boost Business Efficiency with ERP Software & IT Tools",
    description: "Discover how investing in IT, ERP software, and essential IT tools can enhance your business operations, improve customer engagement, and drive growth.",
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
const faqsGroup = await getFaqs("Blog Post","why-invest-in-it-for-business");
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
  "@id": "https://finbyz.tech/why-invest-in-it-for-business#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/why-invest-in-it-for-business",
  "headline": "Top Reasons to Invest in IT: Boost Business Efficiency with ERP Software & IT Tools",
  "name": "Top Reasons to Invest in IT: Boost Business Efficiency with ERP Software & IT Tools",
  "description": "Discover how investing in IT, ERP software, and essential IT tools can enhance your business operations, improve customer engagement, and drive growth.",
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
  "url": "https://finbyz.tech/why-invest-in-it-for-business",
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
    "IT",
    "ERP Software",
    "IT Tools",
    "business software"
  ]
};
  const data = await getPageData("Blog Post","why-invest-in-it-for-business");

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
        <meta itemProp="headline" content="Top Reasons to Invest in IT: Boost Business Efficiency with ERP Software & IT Tools" />
        <meta itemProp="description" content="Discover how investing in IT, ERP software, and essential IT tools can enhance your business operations, improve customer engagement, and drive growth." />
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
