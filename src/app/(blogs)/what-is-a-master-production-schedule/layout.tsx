import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Master Production Schedule (MPS): Definition, Importance & Steps",
  description: "Discover what a Master Production Schedule (MPS) is, its role in the production planning process, and how to create an effective MPS to optimize manufacturing operations.\n\n",
  keywords: "master production schedule,\nWhat is a Master Production Schedule?,\nproduction planning process\n",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/what-is-a-master-production-schedule",
  },
  openGraph: {
    title: "Master Production Schedule (MPS): Definition, Importance & Steps",
    description: "Discover what a Master Production Schedule (MPS) is, its role in the production planning process, and how to create an effective MPS to optimize manufacturing operations.\n\n",
    url: "https://finbyz.tech/what-is-a-master-production-schedule",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Production Schedule (MPS): Definition, Importance & Steps",
    description: "Discover what a Master Production Schedule (MPS) is, its role in the production planning process, and how to create an effective MPS to optimize manufacturing operations.\n\n",
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
  "@id": "https://finbyz.tech/what-is-a-master-production-schedule#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/what-is-a-master-production-schedule",
  "headline": "Master Production Schedule (MPS): Definition, Importance & Steps",
  "name": "Master Production Schedule (MPS): Definition, Importance & Steps",
  "description": "Discover what a Master Production Schedule (MPS) is, its role in the production planning process, and how to create an effective MPS to optimize manufacturing operations.\\n\\n",
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
  "url": "https://finbyz.tech/what-is-a-master-production-schedule",
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
    "master production schedule",
    "What is a Master Production Schedule?",
    "production planning process"
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
        <meta itemProp="headline" content="Master Production Schedule (MPS): Definition, Importance & Steps" />
        <meta itemProp="description" content="Discover what a Master Production Schedule (MPS) is, its role in the production planning process, and how to create an effective MPS to optimize manufacturing operations.\n\n" />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
