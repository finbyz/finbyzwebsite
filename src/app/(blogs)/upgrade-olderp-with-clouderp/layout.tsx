import BusinessSlider from "@/components/sections/business-slider";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Upgrade to Cloud ERP: Enhance Efficiency and Scalability",
  description: "Discover the benefits of transitioning from legacy ERP systems to cloud-based solutions. Learn how cloud ERP enhances data security, scalability, and operational efficiency.\n\n",
  keywords: "ERP, ERP System, cloud ERP, clouderp,	tech cloud erp",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/upgrade-olderp-with-clouderp",
  },
  openGraph: {
    title: "Upgrade to Cloud ERP: Enhance Efficiency and Scalability",
    description: "Discover the benefits of transitioning from legacy ERP systems to cloud-based solutions. Learn how cloud ERP enhances data security, scalability, and operational efficiency.\n\n",
    url: "https://finbyz.tech/upgrade-olderp-with-clouderp",
    siteName: "Finbyz Tech",
    type: "article",
    locale: "en_US",
    
  },
  twitter: {
    card: "summary_large_image",
    title: "Upgrade to Cloud ERP: Enhance Efficiency and Scalability",
    description: "Discover the benefits of transitioning from legacy ERP systems to cloud-based solutions. Learn how cloud ERP enhances data security, scalability, and operational efficiency.\n\n",
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
  "@id": "https://finbyz.tech/upgrade-olderp-with-clouderp#BlogPosting",
  "mainEntityOfPage": "https://finbyz.tech/upgrade-olderp-with-clouderp",
  "headline": "Upgrade to Cloud ERP: Enhance Efficiency and Scalability",
  "name": "Upgrade to Cloud ERP: Enhance Efficiency and Scalability",
  "description": "Discover the benefits of transitioning from legacy ERP systems to cloud-based solutions. Learn how cloud ERP enhances data security, scalability, and operational efficiency.\\n\\n",
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
  "url": "https://finbyz.tech/upgrade-olderp-with-clouderp",
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
    "ERP",
    "ERP System",
    "cloud ERP",
    "clouderp",
    "tech cloud erp"
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
        <meta itemProp="headline" content="Upgrade to Cloud ERP: Enhance Efficiency and Scalability" />
        <meta itemProp="description" content="Discover the benefits of transitioning from legacy ERP systems to cloud-based solutions. Learn how cloud ERP enhances data security, scalability, and operational efficiency.\n\n" />
      </article>

      {children}
      <BusinessSlider />
    </>
  );
}
