import { getFaqs, getPageData } from "@/lib/getPageData";
import Header from "@/components/layout/header";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Web Page",
    "ai-automation/apps/sales-call-recording-and-analysis-in-erpnext",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "ai-automation/apps/sales-call-recording-and-analysis-in-erpnext",
  );

  return (
    <>
      <main>
        {/* JSON-LD structured data for LLMs */}

        {/* Semantic HTML wrapper for better content extraction */}
        {children}
        
        
        
      </main>
    <FooterSection doctype="Web Page" docname="ai-automation/apps/sales-call-recording-and-analysis-in-erpnext" />
    </>
  );
}
