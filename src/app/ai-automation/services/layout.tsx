import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Automation Services | Digital Transformation",
  description: "Expert AI and automation services for digital transformation. We help businesses modernize operations, integrate AI, and drive innovation with tailored solutions.",
  keywords: ["AI services", "automation services", "digital transformation", "business modernization", "AI consulting", "tech consulting"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `${process.env.SITE_URL}/ai-automation/services`,
  },
  openGraph: {
    title: "AI & Automation Services | Driving Innovation",
    description: "End-to-end digital transformation and AI services to future-proof your business.",
    url: `${process.env.SITE_URL}/ai-automation/services`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Automation Services | Digital Transformation",
    description: "Transform your business with our expert AI and automation services.",
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
  return <>{children}</>;
}
