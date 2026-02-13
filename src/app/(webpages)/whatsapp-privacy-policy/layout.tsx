import FooterSection from "@/components/sections/FooterSection";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", "whatsapp-privacy-policy");
  const faqsGroup = await getFaqs("Web Page", "whatsapp-privacy-policy");

  return (
    <>
      {children}
      <FooterSection doctype="Web Page" docname="whatsapp-privacy-policy" />
    </>
  );
}
