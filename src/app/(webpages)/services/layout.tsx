import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Comprehensive Technology Services | FinByz Tech",
  description:
    "Transform your business operations with tailored technology solutions including ERPNext implementation, automation, AI integration, custom software development, and continuous support.",
  keywords:
    "technology services, ERPNext implementation, AI automation, business automation, custom software development, enterprise solutions, digital transformation, system integration, cloud architecture, ERP customization, process automation",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/services",
  },

  openGraph: {
    title: "Comprehensive Technology Services | FinByz Tech",
    description:
      "Optimize operations with ERPNext, automation, AI, and custom-built solutions tailored to your business.",
    url: "https://finbyz.tech/services",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Technology Services | FinByz Tech",
    description:
      "Modernize your business with ERPNext, automation, AI, and custom-built software solutions.",
    creator: "@finbyztech",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Comprehensive Technology Services",
    description:
      "Technology solutions including ERPNext implementation, automation, AI integration, custom software development, and ongoing innovation.",
    url: "https://finbyz.tech/services",
    keywords:
      "technology services, ERPNext implementation, automation, AI integration, custom ERP solutions, business optimization, cloud architecture, digital transformation",
    inLanguage: "en-US",
    isAccessibleForFree: true,

    publisher: {
      "@type": "Organization",
      name: "FinByz Tech",
      url: "https://finbyz.tech",
    },

    mainEntity: {
      "@type": "Article",
      headline: "Comprehensive Technology Services",
      description:
        "Tailored ERPNext, automation, AI, and custom development solutions built for modern business efficiency.",
      articleBody:
        "FinByz Tech provides ERPNext implementation, automation, AI integration, custom development, and scalable technology infrastructure.",
      author: {
        "@type": "Organization",
        name: "FinByz Tech",
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
    },
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="structured-data-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/WebPage">
        <meta
          itemProp="name"
          content="Comprehensive Technology Services | FinByz Tech"
        />
        <meta
          itemProp="description"
          content="Enterprise technology services including ERPNext, automation, AI, custom development, and continuous innovation."
        />
      </article>

      {children}

      <BusinessSlider />
    </>
  );
}
