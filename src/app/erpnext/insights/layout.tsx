import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERPNext Insights | Expert Guides & Best Practices",
  description: "Explore ERPNext insights, implementation guides, v16 updates, performance tips, and expert analysis. Stay updated with best practices from certified ERPNext professionals.",
  keywords: ["ERPNext insights", "ERPNext guides", "ERPNext v16", "ERP best practices", "ERPNext implementation", "ERPNext tips", "ERP knowledge base"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `${process.env.SITE_URL}/erpnext/insights`,
  },
  openGraph: {
    title: "ERPNext Insights | Expert Knowledge & Best Practices",
    description: "Comprehensive ERPNext guides, updates, and expert analysis to maximize your ERP success.",
    url: `${process.env.SITE_URL}/erpnext/insights`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Insights | Expert Guides & Best Practices",
    description: "Stay ahead with ERPNext insights, guides, and expert tips from certified professionals.",
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
