import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Web Page",
    "erpnext/agro/erp-for-commodity-trading",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "erpnext/agro/erp-for-commodity-trading",
  );

  return (
    <>
      {children}
      
      
      
    <FooterSection doctype="Web Page" docname="erpnext/agro/erp-for-commodity-trading" />
    </>
  );
}
