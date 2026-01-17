import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Current Job Openings at Finbyz Tech | Join Our Team",
  description: "Explore current job openings at Finbyz Tech. Join our team of experts delivering cutting-edge ERP, AI, and software solutions to businesses worldwide.",
  keywords: "job openings, careers at finbyz, erpnext jobs, software developer jobs, AI jobs, remote tech jobs, finbyz careers, technology jobs",
  alternates: {
    canonical: `${process.env.SITE_URL}/careers/job-openings`,
  },
  openGraph: {
    title: "Current Job Openings at Finbyz Tech | Join Our Team",
    description: "Explore current job openings at Finbyz Tech. Join our team of experts delivering cutting-edge solutions.",
    url: `${process.env.SITE_URL}/careers/job-openings`,
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Job Openings at Finbyz Tech | Join Our Team",
    description: "Explore current job openings at Finbyz Tech. Join our team of experts delivering cutting-edge solutions.",
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
  },
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
