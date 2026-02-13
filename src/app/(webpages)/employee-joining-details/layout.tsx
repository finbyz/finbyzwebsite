import FooterSection from "@/components/sections/FooterSection";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", "employee-joining-details");
  const faqsGroup = await getFaqs("Web Page", "employee-joining-details");

  return (
    <>
      {children}
      <FooterSection doctype="Web Page" docname="employee-joining-details" />
    </>
  );
}
