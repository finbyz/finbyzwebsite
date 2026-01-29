import { LazyBusinessSlider } from "@/lib/lazy-components";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { fetchFrappeSchemaData } from "@/lib/fetchFrappeSeoData";
import { getFaqs, getPageData } from "@/lib/getPageData";
import { Metadata } from "next";

const PAGE_SLUG = "ai-automation/clawdbot-moltbot-rebrand";
const PAGE_ROUTE = "ai-automation/clawdbot-moltbot-rebrand";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await fetchFrappeSchemaData({
    name: PAGE_SLUG,
    type: "blog"
  })
  
  return {
    title: pageData?.data?.title || "ClawdBot Becomes MoltBot: Inside the Viral AI Assistant's Clever Rebrand | Finbyz",
    description: pageData?.data?.description || "Discover why the viral open-source AI assistant ClawdBot changed its name to MoltBot, including trademark considerations from Anthropic and the creative lobster molting metaphor behind the rebrand.",
    keywords: pageData?.data?.keywords || "ClawdBot, MoltBot, AI assistant, Anthropic, Claude AI, AI automation, open-source AI, AI tools, trademark, rebrand",
    authors: [{ "name": "Finbyz Tech Pvt Ltd" }],
    creator: "Finbyz Tech Pvt Ltd",
    publisher: "Finbyz Tech Pvt Ltd",
    alternates: {
      "canonical": `${process.env.SITE_URL}/${PAGE_ROUTE}`,
    },
    openGraph: {
      title: pageData?.data?.seo_title || "ClawdBot Becomes MoltBot: The Story Behind the Viral AI Assistant's Rebrand",
      description: pageData?.data?.meta_description || "Discover why the viral open-source AI assistant ClawdBot changed its name to MoltBot after trademark concerns from Anthropic, makers of Claude AI.",
      url: `${process.env.SITE_URL}/${PAGE_ROUTE}`,
      siteName: "Finbyz Tech",
      type: "article",
      locale: "en_US",
      images: [{ 
        url: `${process.env.FRAPPE_URL}/${pageData?.data?.meta_image}` || `${process.env.SITE_URL}/images/moltbot-rebrand.jpg`, 
        width: 1200, 
        height: 630, 
        alt: "MoltBot AI Assistant Rebrand" 
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageData?.data?.seo_title || "ClawdBot Becomes MoltBot: The Viral AI Assistant's Rebrand Story",
      description: pageData?.data?.small_description || "Inside the story of how ClawdBot became MoltBot after trademark considerations from Anthropic.",
      creator: "@finbyz",
      images: [`${process.env.FRAPPE_URL}/${pageData?.data?.meta_image}`],
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
  }
}

const faqsGroup = await getFaqs("Blog Post", PAGE_SLUG);

export default async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getPageData("Blog Post", PAGE_SLUG);

  return (
    <>
      {children}
      {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
      {
        (data.galleryItems.length > 0 || data.relatedReads.length > 0) ? <FinbyzGallery relatedReads={data.relatedReads} galleryItems={data.galleryItems} /> : null
      }
      <LazyBusinessSlider />
      <StructureData name={PAGE_SLUG} type="blog" />
    </>
  );
}
