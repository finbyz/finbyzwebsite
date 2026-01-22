import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP Solutions | Enterprise Resource Planning",
  description: "Comprehensive ERP solutions to streamline your business operations. Manage finance, HR, supply chain, and sales in one unified platform.",
  keywords: ["ERP solutions", "enterprise resource planning", "business software", "finance software", "HRMS", "supply chain management", "CRM"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `${process.env.SITE_URL}/solutions/erp`,
  },
  openGraph: {
    title: "ERP Solutions | Unified Business Management",
    description: "Streamline operations with comprehensive ERP solutions for finance, HR, and more.",
    url: `${process.env.SITE_URL}/solutions/erp`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Solutions | Enterprise Resource Planning",
    description: "Unified ERP solutions for complete business management.",
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
