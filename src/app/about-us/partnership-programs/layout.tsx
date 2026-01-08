import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Grow Your Business Strategic Technology Partnership Programs",
  description: "Unlock new opportunities and expand your reach by partnering with a leading IT consulting and software development firm. Explore our collaboration programs for mutual growth.",
  keywords: "technology partnership programs, IT consulting partnerships, software development collaboration, ERPNext partner program, AI automation partnerships, business collaboration opportunities, referral partner program, reseller program technology, strategic alliances IT, custom software partnerships, digital transformation partners, channel partner program, technology solutions partnerships, mutual growth business, finbyz tech partnerships",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/partnership-programs",
  },
  openGraph: {
    title: "Grow Your Business Strategic Technology Partnership Programs",
    description: "Unlock new opportunities and expand your reach by partnering with a leading IT consulting and software development firm. Explore our collaboration programs for mutual growth.",
    url: "https://finbyz.tech/partnership-programs",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Your Business Strategic Technology Partnership Programs",
    description: "Unlock new opportunities and expand your reach by partnering with a leading IT consulting and software development firm. Explore our collaboration programs for mutual growth.",
    creator: "@finbyztech",
    
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
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Grow Your Business Strategic Technology Partnership Programs",
    "description": "Unlock new opportunities and expand your reach by partnering with a leading IT consulting and software development firm. Explore our collaboration programs for mutual growth.",
    "url": "https://finbyz.tech/partnership-programs",
    
    "keywords": "technology partnership programs, IT consulting partnerships, software development collaboration, ERPNext partner program, AI automation partnerships, business collaboration opportunities, referral partner program, reseller program technology, strategic alliances IT, custom software partnerships, digital transformation partners, channel partner program, technology solutions partnerships, mutual growth business, finbyz tech partnerships",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Grow Your Business Strategic Technology Partnership Programs",
      "description": "Unlock new opportunities and expand your reach by partnering with a leading IT consulting and software development firm. Explore our collaboration programs for mutual growth.",
      "articleBody": "Opportunities to collaborate with Finbyz Tech through structured partnership programs.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-28T09:09:35.446Z",
      "dateModified": "2025-10-28T09:09:35.446Z",
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Grow Your Business Strategic Technology Partnership Programs" />
        <meta itemProp="description" content="Unlock new opportunities and expand your reach by partnering with a leading IT consulting and software development firm. Explore our collaboration programs for mutual growth." />
      </article>
      
      {children}
      
      <BusinessSlider />
    </>
  );
}
