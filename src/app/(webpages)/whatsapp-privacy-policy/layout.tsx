import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "WhatsApp Privacy Policy | Finbyz Tech Data Protection and User Privacy",
  description: "We care about protecting the personal information of our customers and visitors who use our website www.finbyz.tech, our products or services (collectively, our \"Users\").\nThis Privacy Policy governs the manner in which Finbyz Tech collects, uses, shares, maintains and discloses information collected from users (each, a \"User\", you ) of the https://www.finbyz.tech/privacy-policy website (\"Site\"). This privacy policy applies to the Site and all products and services offered by Finbyz Tech. In this policy, \"we\", \"us\" and \"our\" referred to Finbyz Tech and Finbyz Tech Corporate family\n",
  keywords: "Finbyz WhatsApp privacy policy,\nWhatsApp data usage policy,\nFinbyz Tech data protection,\nWhatsApp communication privacy",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://web.finbyz.tech/whatsapp-privacy-policy",
  },
  openGraph: {
    title: "WhatsApp Privacy Policy | Finbyz Tech Data Protection and User Privacy",
    description: "We care about protecting the personal information of our customers and visitors who use our website www.finbyz.tech, our products or services (collectively, our \"Users\").\nThis Privacy Policy governs the manner in which Finbyz Tech collects, uses, shares, maintains and discloses information collected from users (each, a \"User\", you ) of the https://www.finbyz.tech/privacy-policy website (\"Site\"). This privacy policy applies to the Site and all products and services offered by Finbyz Tech. In this policy, \"we\", \"us\" and \"our\" referred to Finbyz Tech and Finbyz Tech Corporate family\n",
    url: "https://web.finbyz.tech/whatsapp-privacy-policy",
    siteName: "Your Site Name",
    type: "website",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Privacy Policy | Finbyz Tech Data Protection and User Privacy",
    description: "We care about protecting the personal information of our customers and visitors who use our website www.finbyz.tech, our products or services (collectively, our \"Users\").\nThis Privacy Policy governs the manner in which Finbyz Tech collects, uses, shares, maintains and discloses information collected from users (each, a \"User\", you ) of the https://www.finbyz.tech/privacy-policy website (\"Site\"). This privacy policy applies to the Site and all products and services offered by Finbyz Tech. In this policy, \"we\", \"us\" and \"our\" referred to Finbyz Tech and Finbyz Tech Corporate family\n",
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
  // Structured data for LLMs and search engines
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "WhatsApp Privacy Policy | Finbyz Tech Data Protection and User Privacy",
    "description": "We care about protecting the personal information of our customers and visitors who use our website www.finbyz.tech, our products or services (collectively, our \"Users\").\nThis Privacy Policy governs the manner in which Finbyz Tech collects, uses, shares, maintains and discloses information collected from users (each, a \"User\", you ) of the https://www.finbyz.tech/privacy-policy website (\"Site\"). This privacy policy applies to the Site and all products and services offered by Finbyz Tech. In this policy, \"we\", \"us\" and \"our\" referred to Finbyz Tech and Finbyz Tech Corporate family\n",
    "url": "https://web.finbyz.tech/whatsapp-privacy-policy",
    
    "keywords": "Finbyz WhatsApp privacy policy,\nWhatsApp data usage policy,\nFinbyz Tech data protection,\nWhatsApp communication privacy",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech Pvt Ltd",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "WhatsApp Privacy Policy | Finbyz Tech Data Protection and User Privacy",
      "description": "We care about protecting the personal information of our customers and visitors who use our website www.finbyz.tech, our products or services (collectively, our \"Users\").\nThis Privacy Policy governs the manner in which Finbyz Tech collects, uses, shares, maintains and discloses information collected from users (each, a \"User\", you ) of the https://www.finbyz.tech/privacy-policy website (\"Site\"). This privacy policy applies to the Site and all products and services offered by Finbyz Tech. In this policy, \"we\", \"us\" and \"our\" referred to Finbyz Tech and Finbyz Tech Corporate family\n",
      
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
      {/* JSON-LD structured data for LLMs */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Semantic HTML wrapper for better content extraction */}
      <article itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="WhatsApp Privacy Policy | Finbyz Tech Data Protection and User Privacy" />
        <meta itemProp="description" content={`We care about protecting the personal information of our customers and visitors who use our website www.finbyz.tech, our products or services (collectively, our Users).\nThis Privacy Policy governs the manner in which Finbyz Tech collects, uses, shares, maintains and discloses information collected from users (each, a \"User\", you ) of the https://www.finbyz.tech/privacy-policy website (\"Site\"). This privacy policy applies to the Site and all products and services offered by Finbyz Tech. In this policy, \"we\", \"us\" and "our" referred to Finbyz Tech and Finbyz Tech Corporate family\n`} />
      </article>
      {children}
      
      <BusinessSlider />
    </>
  );
}
