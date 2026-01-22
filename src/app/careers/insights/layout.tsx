import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Insights | Tech Career Advice & Guides",
  description: "Expert career advice for software engineers and tech professionals. Read our guides on career paths, skill development, and thriving in the technology industry.",
  keywords: ["career insights", "tech career advice", "software engineer career path", "career development", "tech jobs guide", "hiring advice"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `${process.env.SITE_URL}/careers/insights`,
  },
  openGraph: {
    title: "Career Insights | Build Your Tech Career",
    description: "Guides and advice to help you build a successful career in technology.",
    url: `${process.env.SITE_URL}/careers/insights`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Insights | Tech Career Advice & Guides",
    description: "Expert guidance for your tech career journey.",
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
