import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import InquiryForm from "@/components/ui/InquiryForm";

export const metadata: Metadata = {
  title: "Custom Mobile App Development Business & ERPNext Solutions",
  description: "Unlock efficiency with custom mobile app development. Finbyz Tech builds powerful applications for ERPNext and unique business needs, ensuring seamless workflows and real-time access. Transform your operations today.",
  keywords: "mobile app development, custom mobile apps, ERPNext mobile applications, business mobile solutions, enterprise mobile apps, field force automation, workflow mobile access, android app development, ios app development, cross-platform mobile development, mobile app integration, business productivity apps, real-time data access mobile, mobile solutions for manufacturing, mobile app consulting",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://erp.finbyz.tech/mobile-app-development",
  },
  openGraph: {
    title: "Custom Mobile App Development Business & ERPNext Solutions",
    description: "Unlock efficiency with custom mobile app development. Finbyz Tech builds powerful applications for ERPNext and unique business needs, ensuring seamless workflows and real-time access. Transform your operations today.",
    url: "https://erp.finbyz.tech/mobile-app-development",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",

  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Mobile App Development Business & ERPNext Solutions",
    description: "Unlock efficiency with custom mobile app development. Finbyz Tech builds powerful applications for ERPNext and unique business needs, ensuring seamless workflows and real-time access. Transform your operations today.",
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
    "name": "Custom Mobile App Development Business & ERPNext Solutions",
    "description": "Unlock efficiency with custom mobile app development. Finbyz Tech builds powerful applications for ERPNext and unique business needs, ensuring seamless workflows and real-time access. Transform your operations today.",
    "url": "https://erp.finbyz.tech/mobile-app-development",

    "keywords": "mobile app development, custom mobile apps, ERPNext mobile applications, business mobile solutions, enterprise mobile apps, field force automation, workflow mobile access, android app development, ios app development, cross-platform mobile development, mobile app integration, business productivity apps, real-time data access mobile, mobile solutions for manufacturing, mobile app consulting",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "publisher": {
      "@type": "Organization",
      "name": "FinByz Tech",
      "url": "https://finbyz.tech"
    },
    "mainEntity": {
      "@type": "Article",
      "headline": "Custom Mobile App Development Business & ERPNext Solutions",
      "description": "Unlock efficiency with custom mobile app development. Finbyz Tech builds powerful applications for ERPNext and unique business needs, ensuring seamless workflows and real-time access. Transform your operations today.",
      "articleBody": "Mobile applications for ERPNext and custom business needs for seamless workflow access.",
      "author": {
        "@type": "Organization",
        "name": "FinByz Tech"
      },
      "datePublished": "2025-10-28T04:23:50.613Z",
      "dateModified": "2025-10-28T04:23:50.613Z",
    }
  };

  return (
    <>
      <main>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <article itemScope itemType="https://schema.org/WebPage">
          <meta itemProp="name" content="Custom Mobile App Development Business & ERPNext Solutions" />
          <meta itemProp="description" content="Unlock efficiency with custom mobile app development. Finbyz Tech builds powerful applications for ERPNext and unique business needs, ensuring seamless workflows and real-time access. Transform your operations today." />
        </article>

        {children}

        <BusinessSlider />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
