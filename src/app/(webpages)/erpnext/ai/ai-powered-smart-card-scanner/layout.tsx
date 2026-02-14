import { getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("erpnext/ai/ai-powered-smart-card-scanner",
  );
  return (
    <>
      {/* JSON-LD structured data for LLMs */}
      {/* Semantic HTML wrapper for better content extraction */}
      {children}
      
      
      
    <FooterSection docname="/erpnext/ai/ai-powered-smart-card-scanner" />
    </>
  );
}
