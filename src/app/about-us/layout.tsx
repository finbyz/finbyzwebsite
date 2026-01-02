import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finbyz Tech | ERP, AI, Software, and Dedicated Talent – All in One Partner",
  description: "Accelerate your business transformation with Finbyz Tech — expert-led ERP implementation, AI automation, custom software development, and global resource augmentation. Let's steer your vision.",
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
    title: "Finbyz Tech | ERP, AI, Software, and Dedicated Talent – All in One Partner",
    description: "Accelerate your business transformation with Finbyz Tech — expert-led ERP implementation, AI automation, custom software development, and global resource augmentation. Let's steer your vision.",
    type: "website",
    url: "https://finbyz.tech/about-us",
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
    title: "Finbyz Tech | ERP, AI, Software, and Dedicated Talent – All in One Partner",
    description: "Accelerate your business transformation with Finbyz Tech — expert-led ERP implementation, AI automation, custom software development, and global resource augmentation. Let's steer your vision.",
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
    canonical: "https://finbyz.tech/about-us",
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
