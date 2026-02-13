import FooterSection from "@/components/sections/FooterSection";
import { getFaqs, getPageData } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", "thank-you-for-inquiry");
  const faqsGroup = await getFaqs("Web Page", "thank-you-for-inquiry");

  return (
    <>
      {children}
      <FooterSection doctype="Web Page" docname="thank-you-for-inquiry" />
    </>
  );
}
