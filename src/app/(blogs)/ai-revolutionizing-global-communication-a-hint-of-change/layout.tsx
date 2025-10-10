import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How Artificial Intelligence is Transforming Global Communication",
  description: "Explore the impact of Artificial Intelligence on global communication, including enhanced accessibility, personalized interactions, and ethical considerations shaping the future of AI-driven communication.",
  keywords: "Artificial intelligence,\nCommunication,\nAI in communication",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/ai-revolutionizing-global-communication-a-hint-of-change",
  },
  openGraph: {
    title: "How Artificial Intelligence is Transforming Global Communication",
    description: "Explore the impact of Artificial Intelligence on global communication, including enhanced accessibility, personalized interactions, and ethical considerations shaping the future of AI-driven communication.",
    url: "https://finbyz.tech/ai-revolutionizing-global-communication-a-hint-of-change",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "How Artificial Intelligence is Transforming Global Communication",
    description: "Explore the impact of Artificial Intelligence on global communication, including enhanced accessibility, personalized interactions, and ethical considerations shaping the future of AI-driven communication.",
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

export default async function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/ai-revolutionizing-global-communication-a-hint-of-change#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/ai-revolutionizing-global-communication-a-hint-of-change",
  "headline": "How Artificial Intelligence is Transforming Global Communication",
  "name": "How Artificial Intelligence is Transforming Global Communication",
  "description": "Explore the impact of Artificial Intelligence on global communication, including enhanced accessibility, personalized interactions, and ethical considerations shaping the future of AI-driven communication.",
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
  "url": "https://finbyz.tech/ai-revolutionizing-global-communication-a-hint-of-change",
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
    "Artificial intelligence",
    "Communication",
    "AI in communication"
  ]
};
  const data = await getPageData("Blog Post","ai-revolutionizing-global-communication-a-hint-of-change");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="How Artificial Intelligence is Transforming Global Communication" />
        <meta itemProp="description" content="Explore the impact of Artificial Intelligence on global communication, including enhanced accessibility, personalized interactions, and ethical considerations shaping the future of AI-driven communication." />
      </article>

      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
