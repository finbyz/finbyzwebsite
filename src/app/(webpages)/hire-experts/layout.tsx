import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Hire Expert Developers | Finbyz Tech",
  description:
    "Hire certified Python, JavaScript, Django, Web App, and ERPNext developers from Finbyz Tech. Get vetted experts ready to scale your projects with flexible engagement models.",
  keywords:
    "hire python developer, hire javascript developer, hire django developer, hire erpnext implementer, hire web app developer, remote developer India, offshore developer team, IT staffing Finbyz, hire software developers",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://web.finbyz.tech/hire-developers",
  },
  openGraph: {
    title: "Hire Expert Developers | Finbyz Tech",
    description:
      "Hire top remote developers skilled in Python, JavaScript, Django, ERPNext, and Web App Development. Scale your business with flexible hiring from Finbyz Tech.",
    url: "https://web.finbyz.tech/hire-experts",
    siteName: "FinByz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Expert Developers | Finbyz Tech",
    description:
      "Hire certified developers from Finbyz Tech — Python, JavaScript, ERPNext, and more. Get started in 48 hours with vetted, skilled experts.",
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
    name: "Hire Expert Developers | Finbyz Tech",
    description:
      "Hire Python, JavaScript, Django, ERPNext, and Web App developers from Finbyz Tech. Build your tech team faster with vetted experts and flexible engagement options.",
    url: "https://web.finbyz.tech/hire-experts",
    keywords:
      "hire python developer, hire javascript developer, hire django developer, hire erpnext implementer, hire web app developer, remote developer India, offshore developer team, IT staffing Finbyz, hire software developers",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    publisher: {
      "@type": "Organization",
      name: "FinByz Tech",
      url: "https://finbyz.tech",
      logo: {
        "@type": "ImageObject",
        url: "https://finbyz.tech/logo.png",
      },
    },
    mainEntity: {
      "@type": "Article",
      headline: "Hire Expert Developers",
      description:
        "Hire certified developers skilled in Python, JavaScript, Django, ERPNext, and Web App Development. Finbyz Tech provides vetted talent for full-time, part-time, or project-based needs.",
      articleBody:
        "Finbyz Tech connects you with top developers specializing in Python, JavaScript, Django, ERPNext, and Web App Development. Access flexible engagement models, quick onboarding, and risk-free hiring with Finbyz Tech.",
      author: {
        "@type": "Organization",
        name: "FinByz Tech",
      },
      datePublished: "2025-11-10T10:00:00.000Z",
      dateModified: "2025-11-10T10:00:00.000Z",
    },
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article itemScope itemType="https://schema.org/WebPage">
        <meta
          itemProp="name"
          content="Hire Expert Developers | Finbyz Tech"
        />
        <meta
          itemProp="description"
          content="Hire certified Python, JavaScript, Django, Web App, and ERPNext developers from Finbyz Tech. Get vetted experts ready to scale your projects with flexible engagement models."
        />
      </article>

      {children}

      <BusinessSlider />
    </>
  );
}
