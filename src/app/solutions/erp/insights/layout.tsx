import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERP Insights | Guides, Tips & Trends",
  description: "Comprehensive ERP resources covering basics, benefits, implementation guides, manufacturing ERP, and future trends. Your go-to knowledge base for Enterprise Resource Planning.",
  keywords: ["what is erp", "erp benefits", "erp implementation", "manufacturing erp", "erp guide", "erp trends", "erp software"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `${process.env.SITE_URL}/solutions/erp/insights`,
  },
  openGraph: {
    title: "ERP Insights | Comprehensive ERP Guides",
    description: "Expert articles and guides on ERP implementation, benefits, and best practices.",
    url: `${process.env.SITE_URL}/solutions/erp/insights`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Insights | Guides, Tips & Trends",
    description: "Deep dive into ERP software with our expert guides and insights.",
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
