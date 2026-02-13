import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

const PAGE_SLUG = "n8n/insights/n8n-vs-zapier-vs-make-comparison";
const PAGE_ROUTE = "ai-automation/insights/n8n-vs-zapier-vs-make-comparison";

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
    <FooterSection doctype="Web Page" docname="n8n/insights/n8n-vs-zapier-vs-make-comparison" />
    </>
  );
}
