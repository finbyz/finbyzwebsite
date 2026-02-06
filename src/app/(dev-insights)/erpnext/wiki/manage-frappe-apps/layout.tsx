import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";
import StructureData from "@/components/seo/StructureData";

import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Bench App Management Cheat Sheet: Install, Remove & Get Apps",
  description: "Quick listing of bench commands: `bench get-app`, `bench install-app`, `bench remove-app`, and `bench uninstall-app`. Complete guide for managing Frappe apps.",
  keywords: "bench remove app, bench uninstall app, bench install app, bench get-app, bench create app, frappe remove app, bench new-app, frappe install custom app",
  authors: [{ name: "FinByz Tech Pvt Ltd" }],
  creator: "FinByz Tech Pvt Ltd",
  publisher: "FinByz Tech Pvt Ltd",
  alternates: {
    canonical: "https://finbyz.tech/erpnext/wiki/manage-frappe-apps",
  },
  openGraph: {
    title: "Bench App Management Cheat Sheet",
    description: "Install, Uninstall, and Manage Frappe Apps with Bench.",
    url: "https://finbyz.tech/erpnext/wiki/manage-frappe-apps",
    siteName: "Finbyz Tech",
    type: "website",
    locale: "en_US",
    images: [{ url: `${process.env.SITE_URL}/images/FinbyzLogo.png`, width: 1200, height: 630, alt: "Bench App Commands" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bench App Management Cheat Sheet",
    description: "Quick guide for bench app commands.",
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
  const data = await getPageData("Code Snippet", "create-install/-uninstall-app");
  const faqsGroup = await getFaqs("Code Snippet", "create-install/-uninstall-app");

  return (
    <>

      {children}
      {faqsGroup?.faqs.length && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <StructureData name="SNI-00072" type="code-snippet" />
      <LazyBusinessSlider />
    </>
  );
}
