import { Metadata } from "next";

export const metadata: Metadata = {
  title: "n8n Workflows | Automation Templates & Examples",
  description: "Browse curated n8n workflow templates for email automation, lead enrichment, customer support, and more. Production-ready automation workflows for your business.",
  keywords: ["n8n workflows", "automation templates", "n8n examples", "workflow automation", "email automation", "business automation workflows"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `${process.env.SITE_URL}/ai-automation/n8n/workflows`,
  },
  openGraph: {
    title: "n8n Workflows | Automation Templates for Business",
    description: "Production-ready n8n workflows for email, leads, and support automation.",
    url: `${process.env.SITE_URL}/ai-automation/n8n/workflows`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Workflows | Automation Templates & Examples",
    description: "Browse our library of n8n automation workflows to streamline your business operations.",
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
