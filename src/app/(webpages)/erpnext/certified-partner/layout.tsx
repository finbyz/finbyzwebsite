import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", "erpnext/certified-partner");
  const faqsGroup = await getFaqs("Web Page", "erpnext/certified-partner");

  return (
    <>
      {children}
      
      
      
    <FooterSection doctype="Web Page" docname="erpnext/certified-partner" />
    </>
  );
}
