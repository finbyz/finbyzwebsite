import FooterSection from "@/components/sections/FooterSection";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", "working_hour_exception");
  const faqsGroup = await getFaqs("Web Page", "working_hour_exception");

  return (
    <>
      {children}
      <FooterSection doctype="Web Page" docname="working_hour_exception" />
    </>
  );
}
