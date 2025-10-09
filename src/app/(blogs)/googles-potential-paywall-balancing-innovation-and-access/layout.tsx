import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Google\'s Potential Paywall: Innovation in AI Search vs. Information Access",
  description: "Google considers placing AI-powered search behind a paywall, aiming to diversify revenue. Challenges include user access and legal scrutiny.",
  keywords: "google,\ngoogle\'s ai search,\nai powered search engine,\nai",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/googles-potential-paywall-balancing-innovation-and-access",
  },
  openGraph: {
    title: "Google\'s Potential Paywall: Innovation in AI Search vs. Information Access",
    description: "Google considers placing AI-powered search behind a paywall, aiming to diversify revenue. Challenges include user access and legal scrutiny.",
    url: "https://web.finbyz.tech/googles-potential-paywall-balancing-innovation-and-access",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Google\'s Potential Paywall: Innovation in AI Search vs. Information Access",
    description: "Google considers placing AI-powered search behind a paywall, aiming to diversify revenue. Challenges include user access and legal scrutiny.",
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
  },
  
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Google\'s Potential Paywall: Innovation in AI Search vs. Information Access",
    "description": "Google considers placing AI-powered search behind a paywall, aiming to diversify revenue. Challenges include user access and legal scrutiny.",
    "url": "https://web.finbyz.tech/googles-potential-paywall-balancing-innovation-and-access",
    
    "keywords": "google,\ngoogle\'s ai search,\nai powered search engine,\nai",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Google\'s Potential Paywall: Innovation in AI Search vs. Information Access",
      "description": "Google considers placing AI-powered search behind a paywall, aiming to diversify revenue. Challenges include user access and legal scrutiny.",
      "articleBody": "Google considers placing AI-powered search behind a paywall to diversify revenue while balancing access and regulatory scrutiny.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech Pvt Ltd"
      },
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
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
        <meta itemProp="name" content="Google\'s Potential Paywall: Innovation in AI Search vs. Information Access" />
        <meta itemProp="description" content="Google considers placing AI-powered search behind a paywall, aiming to diversify revenue. Challenges include user access and legal scrutiny." />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
