import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Web Page",
    "moltbot-vs-claude-code-complete-comparison-guide-2026",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "moltbot-vs-claude-code-complete-comparison-guide-2026",
  );
  return (
    <>
      {children}
      
      
      
    <FooterSection doctype="Web Page" docname="moltbot-vs-claude-code-complete-comparison-guide-2026" />
    </>
  );
}
