import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERPNext Modules | CRM, HRMS & Business Solutions",
  description: "Explore ERPNext's powerful integrated modules including CRM Software and Human Resource Management System. Streamline your business operations with comprehensive, scalable solutions.",
  keywords: ["ERPNext modules", "CRM software", "HRMS", "human resource management", "business modules", "ERPNext features"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `${process.env.SITE_URL}/erpnext/modules`,
  },
  openGraph: {
    title: "ERPNext Modules | Complete Business Management Solutions",
    description: "Discover ERPNext's integrated modules for CRM, HRMS, and more. Built for scalability and seamless integration.",
    url: `${process.env.SITE_URL}/erpnext/modules`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Modules | CRM, HRMS & Business Solutions",
    description: "Explore ERPNext's powerful integrated modules for complete business management.",
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
