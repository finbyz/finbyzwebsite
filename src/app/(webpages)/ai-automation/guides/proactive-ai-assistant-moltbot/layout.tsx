import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

const PAGE_SLUG = "ai-automation/guides/proactive-ai-assistant-moltbot";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", PAGE_SLUG);
  const faqsGroup = await getFaqs("Web Page", PAGE_SLUG);

  return (
    <>
      {children}
      
      
      
    <FooterSection doctype="Web Page" docname="ai-automation/guides/proactive-ai-assistant-moltbot" />
    </>
  );
}
