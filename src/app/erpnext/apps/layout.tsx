import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERPNext Apps | Specialized Business Applications",
  description: "Explore 9+ specialized ERPNext apps including Argentina E-Invoicing, Forward Contract, Investment Portfolio, and more. Enhance your ERP with plug-and-play solutions.",
  keywords: ["ERPNext apps", "ERPNext plugins", "ERPNext extensions", "business applications", "ERPNext marketplace", "custom ERPNext solutions"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `${process.env.SITE_URL}/erpnext/apps`,
  },
  openGraph: {
    title: "ERPNext Apps | Extend Your ERP Capabilities",
    description: "Discover specialized ERPNext applications for finance, compliance, and workflow automation.",
    url: `${process.env.SITE_URL}/erpnext/apps`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Apps | Specialized Business Applications",
    description: "Enhance your ERPNext system with specialized, plug-and-play applications.",
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
