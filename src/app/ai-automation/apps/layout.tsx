import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Apps | Lead Generation & Marketing Tools",
  description: "Explore AI-powered automation apps for lead generation, email outreach, content marketing, and sales call analysis. Transform your business with intelligent automation.",
  keywords: ["AI automation", "AI apps", "lead generation AI", "email automation", "content automation", "sales AI", "marketing automation"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `${process.env.SITE_URL}/ai-automation/apps`,
  },
  openGraph: {
    title: "AI Automation Apps | Intelligent Business Solutions",
    description: "Discover AI-powered apps for marketing, sales, and customer engagement automation.",
    url: `${process.env.SITE_URL}/ai-automation/apps`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Apps | Lead Generation & Marketing Tools",
    description: "Transform your business with AI-powered automation for marketing, sales, and engagement.",
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
