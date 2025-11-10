import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Become a Software Engineer: Essential Skills & Entry-Level Guide",
  description: "Discover the steps to become a software engineer, from mastering key skills to landing entry-level positions. Your comprehensive guide to a successful tech career.",
  keywords: "How to Become a Software Engineer,\nsoftware engineer skills,\nentry level software engineer",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/how-to-become-a-software-engineer-the-path-to-success",
  },
  openGraph: {
    title: "How to Become a Software Engineer: Essential Skills & Entry-Level Guide",
    description: "Discover the steps to become a software engineer, from mastering key skills to landing entry-level positions. Your comprehensive guide to a successful tech career.",
    url: "https://finbyz.tech/how-to-become-a-software-engineer-the-path-to-success",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Become a Software Engineer: Essential Skills & Entry-Level Guide",
    description: "Discover the steps to become a software engineer, from mastering key skills to landing entry-level positions. Your comprehensive guide to a successful tech career.",
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
const faqsGroup = await getFaqs("Blog Post","how-to-become-a-software-engineer-the-path-to-success");

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/how-to-become-a-software-engineer-the-path-to-success#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/how-to-become-a-software-engineer-the-path-to-success",
  "headline": "How to Become a Software Engineer: Essential Skills & Entry-Level Guide",
  "name": "How to Become a Software Engineer: Essential Skills & Entry-Level Guide",
  "description": "Discover the steps to become a software engineer, from mastering key skills to landing entry-level positions. Your comprehensive guide to a successful tech career.",
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
  "url": "https://finbyz.tech/how-to-become-a-software-engineer-the-path-to-success",
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
    "How to Become a Software Engineer",
    "software engineer skills",
    "entry level software engineer"
  ]
};
  const data = await getPageData("Blog Post","how-to-become-a-software-engineer-the-path-to-success");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="How to Become a Software Engineer: Essential Skills & Entry-Level Guide" />
        <meta itemProp="description" content="Discover the steps to become a software engineer, from mastering key skills to landing entry-level positions. Your comprehensive guide to a successful tech career." />
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
