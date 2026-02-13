import FooterSection from "@/components/sections/FooterSection";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Attempt to fetch data if it exists, otherwise these might return defaults or empty
  const data = await getPageData("Web Page", "resume-ranker");
  const faqsGroup = await getFaqs("Web Page", "resume-ranker");

  return (
    <>
      {/* JSON-LD structured data for LLMs */}
      {/* Semantic HTML wrapper for better content extraction */}
      {children}
      <FooterSection doctype="Web Page" docname="resume-ranker" />
    </>
  );
}
