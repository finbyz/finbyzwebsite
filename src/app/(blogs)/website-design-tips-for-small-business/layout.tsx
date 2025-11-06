import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Website Design Tips for Small Businesses | Finbyz Tech",
  description: "Discover essential website design tips to enhance your small business\'s online presence. Learn how to create a user-friendly, SEO-optimized business website with Finbyz Tech.",
  keywords: "website design , business website , small business website , website for small business , website design tips , website design tips for small business",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/website-design-tips-for-small-business",
  },
  openGraph: {
    title: "Website Design Tips for Small Businesses | Finbyz Tech",
    description: "Discover essential website design tips to enhance your small business\'s online presence. Learn how to create a user-friendly, SEO-optimized business website with Finbyz Tech.",
    url: "https://finbyz.tech/website-design-tips-for-small-business",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Tips for Small Businesses | Finbyz Tech",
    description: "Discover essential website design tips to enhance your small business\'s online presence. Learn how to create a user-friendly, SEO-optimized business website with Finbyz Tech.",
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
const faqsGroup = await getFaqs("Blog Post","website-design-tips-for-small-business");
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
  "@id": "https://finbyz.tech/website-design-tips-for-small-business#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/website-design-tips-for-small-business",
  "headline": "Website Design Tips for Small Businesses | Finbyz Tech",
  "name": "Website Design Tips for Small Businesses | Finbyz Tech",
  "description": "Discover essential website design tips to enhance your small business\\'s online presence. Learn how to create a user-friendly, SEO-optimized business website with Finbyz Tech.",
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
  "url": "https://finbyz.tech/website-design-tips-for-small-business",
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
    "website design",
    "business website",
    "small business website",
    "website for small business",
    "website design tips",
    "website design tips for small business"
  ]
};
  const data = await getPageData("Blog Post","website-design-tips-for-small-business");

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
        <meta itemProp="headline" content="Website Design Tips for Small Businesses | Finbyz Tech" />
        <meta itemProp="description" content="Discover essential website design tips to enhance your small business\'s online presence. Learn how to create a user-friendly, SEO-optimized business website with Finbyz Tech." />
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
