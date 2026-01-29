import { Metadata } from "next";
import StructureData from "@/components/seo/StructureData";
import { LazyBusinessSlider } from "@/lib/lazy-components";
import { getFaqs, getPageData } from "@/lib/getPageData";
import FAQ from "@/components/ai_components/FAQ";
import FinbyzGallery from "@/components/sections/FinbyzGallery";

const PAGE_SLUG = "how-to-install-clawdbot-complete-30-minute-setup-guide";
const PAGE_ROUTE = "/ai-automation/guides/how-to-install-clawdbot";

export const metadata: Metadata = {
  title: "How to Install Clawdbot: Complete 30-Minute Setup Guide | Finbyz Tech",
  description:
    "Step-by-step guide to install Clawdbot, an open-source AI assistant that runs 24/7. Learn AWS setup, Telegram integration, automation tasks, and best practices for deployment.",
  keywords:
    "clawdbot installation, AI assistant setup, whatsapp automation, telegram bot, AWS EC2 setup, AI automation, 24/7 AI assistant, claude integration, open source AI, task automation",
  authors: [{ name: "Finbyz Tech" }],
  creator: "Finbyz Tech",
  publisher: "Finbyz Tech",
  alternates: {
    canonical: `https://finbyz.tech${PAGE_ROUTE}`,
  },
  openGraph: {
    title: "How to Install Clawdbot: Complete 30-Minute Setup Guide",
    description:
      "Step-by-step guide to install Clawdbot, an open-source AI assistant that runs 24/7. Learn AWS setup, Telegram integration, and automation tasks.",
    url: `https://finbyz.tech${PAGE_ROUTE}`,
    siteName: "Finbyz Tech",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/images/clawdbot-installation-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Clawdbot Installation Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Install Clawdbot: Complete 30-Minute Setup Guide",
    description:
      "Step-by-step guide to install Clawdbot, an open-source AI assistant that runs 24/7.",
    images: ["/images/clawdbot-installation-guide.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getPageData("Web Page", PAGE_SLUG);
  const faqsGroup = await getFaqs("Web Page", PAGE_SLUG);

  return (
    <>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {(data.galleryItems.length > 0 || data.relatedReads.length > 0) ? (
        <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} />
      ) : null}
      <LazyBusinessSlider />
      <StructureData name={PAGE_SLUG} type="webpage" />
    </>
  );
}
