import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

const PAGE_SLUG = "erpnext/services/erpnext-v16-migration";
const PAGE_ROUTE = "erpnext/services/erpnext-v16-migration";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", PAGE_SLUG);
  const faqsGroup = await getFaqs("Web Page", PAGE_SLUG);

  return (
    <>
      <main>
        {children}
        
        
        
      </main>
    <FooterSection doctype="Web Page" docname="erpnext/services/erpnext-v16-migration" />
    </>
  );
}
