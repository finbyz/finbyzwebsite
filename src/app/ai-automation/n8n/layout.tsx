import { Metadata } from "next";

export const metadata: Metadata = {
  title: "n8n Workflow Automation | Connect & Automate Apps",
  description: "Discover n8n workflow automation for connecting apps, building integrations, and automating business processes. Visual automation with 400+ integrations and self-hosted control.",
  keywords: ["n8n", "workflow automation", "no-code automation", "business automation", "app integration", "n8n workflows", "automation platform"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `${process.env.SITE_URL}/ai-automation/n8n`,
  },
  openGraph: {
    title: "n8n Workflow Automation | Visual Automation Platform",
    description: "Build powerful automations with n8n's visual workflow builder. 400+ integrations available.",
    url: `${process.env.SITE_URL}/ai-automation/n8n`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Workflow Automation | Connect & Automate Apps",
    description: "Visual workflow automation with n8n. Connect apps, automate processes, boost productivity.",
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
