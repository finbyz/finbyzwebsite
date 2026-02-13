import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqsGroup = await getFaqs(
    "Blog Post",
    "ai-automation/insights/ai-revolutionizing-global-communication-a-hint-of-change",
  );
  const data = await getPageData(
    "Blog Post",
    "ai-automation/insights/ai-revolutionizing-global-communication-a-hint-of-change",
  );

  return (
    <>
      <main>
        {children}
        
        
        
      </main>
    <FooterSection doctype="Web Page" docname="ai-automation/insights/ai-revolutionizing-global-communication-a-hint-of-change" />
    </>
  );
}
