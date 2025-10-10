import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import { getPageData } from "@/lib/getPageData";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Google\'s Potential Paywall: Innovation in AI Search vs. Information Access",
  description: "Explore how Google\'s AI-powered search is reshaping the web, and what the proposed paywall for premium AI features could mean for users, publishers, and digital inclusivity.",
  keywords: "google,\ngoogle\'s ai search,\nai powered search engine,\nai",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/googles-potential-paywall-balancing-innovation-and-access",
  },
  openGraph: {
    title: "Google\'s Potential Paywall: Innovation in AI Search vs. Information Access",
    description: "Explore how Google\'s AI-powered search is reshaping the web, and what the proposed paywall for premium AI features could mean for users, publishers, and digital inclusivity.",
    url: "https://finbyz.tech/googles-potential-paywall-balancing-innovation-and-access",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Google\'s Potential Paywall: Innovation in AI Search vs. Information Access",
    description: "Explore how Google\'s AI-powered search is reshaping the web, and what the proposed paywall for premium AI features could mean for users, publishers, and digital inclusivity.",
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
  "@id": "https://finbyz.tech/googles-potential-paywall-balancing-innovation-and-access#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/googles-potential-paywall-balancing-innovation-and-access",
  "headline": "Google\\'s Potential Paywall: Innovation in AI Search vs. Information Access",
  "name": "Google\\'s Potential Paywall: Innovation in AI Search vs. Information Access",
  "description": "Explore how Google\\'s AI-powered search is reshaping the web, and what the proposed paywall for premium AI features could mean for users, publishers, and digital inclusivity.",
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
  "url": "https://finbyz.tech/googles-potential-paywall-balancing-innovation-and-access",
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
    "google",
    "google's ai search",
    "ai powered search engine",
    "ai"
  ]
};
  const data = await getPageData("Blog Post","googles-potential-paywall-balancing-innovation-and-access");

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content="Google\'s Potential Paywall: Innovation in AI Search vs. Information Access" />
        <meta itemProp="description" content="Explore how Google\'s AI-powered search is reshaping the web, and what the proposed paywall for premium AI features could mean for users, publishers, and digital inclusivity." />
      </article>

      {children}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <BusinessSlider />
    </>
  );
}
