import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Web Page",
    "erpnext/ai/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "erpnext/ai/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process",
  );

  return (
    <>
      {/* JSON-LD structured data for LLMs */}
      {/* Semantic HTML wrapper for better content extraction */}
      {children}
      
      
      
    <FooterSection doctype="Web Page" docname="erpnext/ai/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process" />
    </>
  );
}
