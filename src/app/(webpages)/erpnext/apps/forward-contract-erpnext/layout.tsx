import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData(
    "Web Page",
    "erpnext/apps/forward-contract-erpnext",
  );
  const faqsGroup = await getFaqs(
    "Web Page",
    "erpnext/apps/forward-contract-erpnext",
  );

  return (
    <>
      <main>
        {children}



      </main>
      <FooterSection doctype="Web Page" docname="erpnext/apps/forward-contract-erpnext" />
    </>
  );
}
