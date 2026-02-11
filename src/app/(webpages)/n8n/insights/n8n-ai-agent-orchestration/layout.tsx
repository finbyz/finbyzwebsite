import BusinessSlider from "@/components/sections/business-slider";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Web Page",
    "n8n/insights/n8n-ai-agent-orchestration",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "n8n/insights/n8n-ai-agent-orchestration",
  );

  // Structured Data for AI Agent Orchestration Service
  return (
    <>
      {/* JSON-LD Structured Data */}
      <main>
        {children}
        {faqsGroup?.faqs && <FAQ faqs={faqsGroup.faqs} />}
        {(data.galleryItems.length > 0 || data.relatedReads.length > 0) && (
          <FinbyzGallery
            relatedReads={data.relatedReads}
            galleryItems={data.galleryItems}
          />
        )}
        <BusinessSlider />
      </main>
    </>
  );
}
