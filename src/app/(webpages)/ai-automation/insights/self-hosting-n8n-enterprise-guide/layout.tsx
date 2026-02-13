import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

const PAGE_SLUG = "ai-automation/insights/self-hosting-n8n-enterprise-guide";
const PAGE_ROUTE = "ai-automation/insights/self-hosting-n8n-enterprise-guide";

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
    <FooterSection doctype="Web Page" docname="ai-automation/insights/self-hosting-n8n-enterprise-guide" />
    </>
  );
}
