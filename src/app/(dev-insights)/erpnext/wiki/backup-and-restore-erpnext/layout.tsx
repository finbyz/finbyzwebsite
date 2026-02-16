import StructureData from "@/components/seo/StructureData";

import { Metadata } from "next";
import FooterSection from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "ERPNext Backup & Restore Cheat Sheet: Bench Commands, Files & Migration",
  description: "Quick guide for `bench backup --with-files`, `bench restore` (SQL & Files), and `bench migrate`. Complete cheat sheet for ERPNext administrators.",
  keywords: "bench restore command, erpnext backup, bench backup with files, bench migrate command, erpnext restore backup, bench backup command, erpnext database backup",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erpnext/wiki/backup-and-restore-erpnext",
  },
  openGraph: {
    title: "ERPNext Backup & Restore Cheat Sheet",
    description: "Master bench backup and restore commands. Includes --with-files and migration steps.",
    url: "https://finbyz.tech/erpnext/wiki/backup-and-restore-erpnext",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: `${process.env.SITE_URL}/images/FinbyzLogo.png`, width: 1200, height: 630, alt: "ERPNext Backup Cheat Sheet" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPNext Backup & Restore Cheat Sheet",
    description: "Quick guide for bench backup and restore.",
    creator: "@finbyz",
    images: ["https://finbyz.tech/images/finbyz-banner.png"],
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

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      {children}

      <StructureData name="SNI-00063" type="code-snippet" />  
      
      <FooterSection docname="/erpnext/wiki/backup-&-restore-erpnext" />
    </>
  );
}