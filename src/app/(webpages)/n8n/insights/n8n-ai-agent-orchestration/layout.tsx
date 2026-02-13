import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

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
        
        {(data.galleryItems.length > 0 || data.relatedReads.length > 0) && (
          <FinbyzGallery
            relatedReads={data.relatedReads}
            galleryItems={data.galleryItems}
          />
        )}
        
      </main>
    <FooterSection doctype="Web Page" docname="n8n/insights/n8n-ai-agent-orchestration" />
    </>
  );
}
