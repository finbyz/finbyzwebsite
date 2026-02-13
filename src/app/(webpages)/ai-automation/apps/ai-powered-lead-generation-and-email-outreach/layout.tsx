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
    "ai-automation/apps/ai-powered-lead-generation-and-email-outreach",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "ai-automation/apps/ai-powered-lead-generation-and-email-outreach",
  );

  return (
    <>
      <main>
        {children}
        
        
        
      </main>
    <FooterSection doctype="Web Page" docname="ai-automation/apps/ai-powered-lead-generation-and-email-outreach" />
    </>
  );
}
