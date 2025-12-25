import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Finbyz Tech | ERPNext Implementation Partner & ERP Software Experts",
  description: "Finbyz Tech is a leading ERPNext and Frappe development company since 2015. We provide ERP software implementation, AI automation, and custom software development to businesses in New York, London, Dubai, Sydney, and 50+ cities globally.",
  keywords: [
    // Primary Keywords
    "About Finbyz Tech", "ERPNext Partner", "Frappe Framework Experts",
    "ERP Software Company", "ERP Implementation Partner", "AI Automation Company",
    "Software Development Company", "ERPNext Consultant", "Digital Transformation Partner",
    // Service Keywords
    "ERPNext Implementation Services", "Frappe Development", "ERP Customization",
    "Business Process Automation", "AI Workflow Solutions", "Custom ERP Solutions",
    // North America Cities
    "ERPNext Partner New York", "ERP Consulting San Francisco", "AI Automation Los Angeles",
    "ERPNext Toronto", "ERP Software Chicago", "ERPNext Houston",
    "ERP Solutions Vancouver", "ERPNext Montreal",
    // Europe Cities
    "ERPNext Partner London", "ERP Software Manchester", "Frappe Developer Berlin",
    "ERPNext Munich", "ERP Implementation Paris", "ERPNext Madrid", "ERP Barcelona",
    "ERPNext Amsterdam", "ERP Partner Zurich", "ERPNext Dublin",
    "AI Automation Stockholm", "ERPNext Oslo", "ERP Copenhagen", "ERPNext Brussels",
    // Middle East/Gulf Cities
    "ERPNext Partner Dubai", "ERP Software Abu Dhabi", "ERPNext Riyadh",
    "ERP Implementation Jeddah", "ERPNext Doha", "ERP Partner Kuwait City",
    "ERPNext Muscat", "ERPNext Bahrain",
    // Other Regions
    "ERPNext Partner Sydney", "ERP Software Melbourne", "ERPNext Johannesburg",
    "ERP Partner Cape Town", "ERPNext Buenos Aires"
  ],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  openGraph: {
    title: "About Finbyz Tech | ERPNext Partner & AI Automation Experts Since 2015",
    description: "Discover how Finbyz Tech has been transforming businesses since 2015 with ERPNext implementation, Frappe development, AI automation, and custom software solutions. Serving clients in New York, London, Dubai, Sydney, and worldwide.",
    type: "website",
    url: "https://finbyz.tech/about",
    siteName: "Finbyz Tech",
    locale: "en_US",
    images: [
      {
        url: "https://finbyz.tech/images/AboutUs.png",
        width: 1200,
        height: 630,
        alt: "About Finbyz Tech - ERPNext Implementation Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Finbyz Tech | ERPNext Partner & AI Automation Experts",
    description: "Since 2015, Finbyz Tech has been a trusted ERPNext partner delivering ERP software, AI automation, and software development worldwide.",
    images: ["https://finbyz.tech/images/AboutUs.png"],
    creator: "@FinByz",
    site: "@FinByz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://finbyz.tech/about",
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
