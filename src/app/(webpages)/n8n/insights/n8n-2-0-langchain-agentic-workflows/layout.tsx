import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

const PAGE_SLUG = "n8n/insights/n8n-2-0-langchain-agentic-workflows";
const PAGE_ROUTE = "n8n/insights/n8n-2-0-langchain-agentic-workflows";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqsGroup = await getFaqs("Blog Post", PAGE_SLUG);
  const data = await getPageData("Blog Post", PAGE_SLUG);

  return (
    <>
      <main>
        {children}
        
        
        
      </main>
    <FooterSection doctype="Web Page" docname="n8n/insights/n8n-2-0-langchain-agentic-workflows" />
    </>
  );
}
