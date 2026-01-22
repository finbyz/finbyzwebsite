import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Insights | Trends & Analysis",
  description: "Stay informed with the latest AI trends, automation insights, and technology analysis. Expert articles on how AI is revolutionizing business and communication.",
  keywords: ["AI insights", "automation trends", "artificial intelligence news", "AI business impact", "tech analysis", "machine learning trends"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `${process.env.SITE_URL}/ai-automation/insights`,
  },
  openGraph: {
    title: "AI Automation Insights | The Future of Business",
    description: "Expert analysis and insights on artificial intelligence and automation technologies.",
    url: `${process.env.SITE_URL}/ai-automation/insights`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Insights | Trends & Analysis",
    description: "Discover the latest trends and insights in AI and automation.",
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
