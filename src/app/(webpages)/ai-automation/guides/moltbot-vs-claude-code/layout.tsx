import { Metadata } from "next";
import StructureData from "@/components/seo/StructureData";
import { LazyBusinessSlider } from "@/lib/lazy-components";
import { getFaqs, getPageData } from "@/lib/getPageData";
import FAQ from "@/components/ai_components/FAQ";
import FinbyzGallery from "@/components/sections/FinbyzGallery";

export const metadata: Metadata = {
  title: "Moltbot vs Claude Code: Complete Comparison Guide 2026 | FinByz Tech",
  description: "Comprehensive comparison of Moltbot (formerly Claudebot) and Claude Code. Expert analysis of 8 key metrics including setup, cost, security, ROI, and real-world use cases. Make the right choice for your AI automation needs.",
  keywords: "Moltbot, Claude Code, Claudebot comparison, AI coding assistant, AI executive assistant, cloud code vs moltbot, AI automation tools, Claude Opus 4.5, VPS AI setup, AI security, AI ROI, developer tools 2026, AI assistant comparison, best AI coding tools, executive AI assistant, AI automation security, VPS setup, Anthropic Claude, AI tool selection",
  authors: [{ name: "FinByz Tech" }],
  creator: "FinByz Tech",
  publisher: "FinByz Tech",
  alternates: {
    canonical: "https://finbyz.tech/ai-automation/guides/moltbot-vs-claude-code",
  },
  openGraph: {
    title: "Moltbot vs Claude Code: Complete Comparison Guide 2026 | FinByz Tech",
    description: "Comprehensive comparison of Moltbot (formerly Claudebot) and Claude Code. Expert analysis of 8 key metrics including setup, cost, security, ROI, and real-world use cases.",
    url: "https://finbyz.tech/ai-automation/guides/moltbot-vs-claude-code",
    siteName: "FinByz Tech",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "/images/moltbot-vs-claude-code-comparison.png",
        width: 1200,
        height: 630,
        alt: "Moltbot vs Claude Code Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moltbot vs Claude Code: Complete Comparison Guide 2026",
    description: "Expert comparison of two powerful AI tools. Discover which AI assistant is right for your business needs.",
    creator: "@finbyztech",
    images: ["/images/moltbot-vs-claude-code-comparison.png"],
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

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getPageData("Web Page", "moltbot-vs-claude-code-complete-comparison-guide-2026");
  const faqsGroup = await getFaqs("Web Page", "moltbot-vs-claude-code-complete-comparison-guide-2026");
  return (
    <>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <LazyBusinessSlider />
      <StructureData name="moltbot-vs-claude-code-complete-comparison-guide-2026" type="webpage" />
    </>
  );
}
