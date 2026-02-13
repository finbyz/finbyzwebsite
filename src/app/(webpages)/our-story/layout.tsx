import FooterSection from "@/components/sections/FooterSection";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // -------------------------------------
  // STRUCTURED DATA (JSON-LD)
  // -------------------------------------
  const data = await getPageData("Web Page", "our-story");
  const faqsGroup = await getFaqs("Web Page", "our-story");

  return (
    <>
      {/* --- JSON-LD Structured Data --- */}
      {/* --- Semantic Wrapper for LLMs & SEO --- */}
      {/* --- Page Content --- */}
      {children}
      <FooterSection doctype="Web Page" docname="our-story" />
    </>
  );
}
