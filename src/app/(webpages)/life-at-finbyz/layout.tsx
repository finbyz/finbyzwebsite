import FooterSection from "@/components/sections/FooterSection";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", "life-at-finbyz");
  const faqsGroup = await getFaqs("Web Page", "life-at-finbyz");

  return (
    <>
      {children}
      <FooterSection doctype="Web Page" docname="life-at-finbyz" />
    </>
  );
}
