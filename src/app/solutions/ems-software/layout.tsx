import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMS Software | Emergency Management System",
  description: "Advanced Emergency Management System (EMS) software for rapid response coordination, volunteer management, and two-way communication during crises.",
  keywords: ["EMS software", "emergency management system", "volunteer management", "crisis response software", "emergency communication", "disaster management"],
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: `${process.env.SITE_URL}/solutions/ems-software`,
  },
  openGraph: {
    title: "EMS Software | Rapid Response & Coordination",
    description: "Reliable software tools for emergency management and volunteer coordination.",
    url: `${process.env.SITE_URL}/solutions/ems-software`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMS Software | Emergency Management System",
    description: "Empower your emergency response with our advanced EMS software.",
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
