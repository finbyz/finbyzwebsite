import FooterSection from "@/components/sections/FooterSection";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Web Page",
    "ai-outreach-lead-generation-research",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "ai-outreach-lead-generation-research",
  );

  return (
    <>
      <main>
        {children}
        <FooterSection doctype="Web Page" docname="ai-outreach-lead-generation-research" />
      </main>
    </>
  );
}
