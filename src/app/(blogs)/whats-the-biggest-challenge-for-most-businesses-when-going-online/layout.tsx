import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Top Challenges in Digital Transformation and How to Overcome Them",
  description: "Discover the primary obstacles businesses face during digital transformation and explore effective strategies to navigate these challenges successfully.",
  keywords: "What\'s the biggest challenge for most businesses when going online,\ndigital transformation challenges,\nonline business challenges",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/whats-the-biggest-challenge-for-most-businesses-when-going-online",
  },
  openGraph: {
    title: "Top Challenges in Digital Transformation and How to Overcome Them",
    description: "Discover the primary obstacles businesses face during digital transformation and explore effective strategies to navigate these challenges successfully.",
    url: "https://finbyz.tech/whats-the-biggest-challenge-for-most-businesses-when-going-online",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Challenges in Digital Transformation and How to Overcome Them",
    description: "Discover the primary obstacles businesses face during digital transformation and explore effective strategies to navigate these challenges successfully.",
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

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
  "@context": "https://schema.org/",
  "@type": "BlogPosting",
  "@id": "https://finbyz.tech/whats-the-biggest-challenge-for-most-businesses-when-going-online#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/whats-the-biggest-challenge-for-most-businesses-when-going-online",
  "headline": "Top Challenges in Digital Transformation and How to Overcome Them",
  "name": "Top Challenges in Digital Transformation and How to Overcome Them",
  "description": "Discover the primary obstacles businesses face during digital transformation and explore effective strategies to navigate these challenges successfully.",
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
  "url": "https://finbyz.tech/whats-the-biggest-challenge-for-most-businesses-when-going-online",
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
    "What's the biggest challenge for most businesses when going online",
    "digital transformation challenges",
    "online business challenges"
  ]
};

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Top Challenges in Digital Transformation and How to Overcome Them" />
        <meta itemProp="description" content="Discover the primary obstacles businesses face during digital transformation and explore effective strategies to navigate these challenges successfully." />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
