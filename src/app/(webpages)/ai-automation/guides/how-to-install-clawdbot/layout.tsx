import { getFaqs, getPageData } from "@/lib/getPageData";
import FooterSection from "@/components/sections/FooterSection";

const PAGE_SLUG = "how-to-install-clawdbot-complete-30-minute-setup-guide";
const PAGE_ROUTE = "/ai-automation/guides/how-to-install-clawdbot";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getPageData("Web Page", PAGE_SLUG);
  const faqsGroup = await getFaqs("Web Page", PAGE_SLUG);

  return (
    <>
      {children}
      
      
      
    <FooterSection doctype="Web Page" docname="how-to-install-clawdbot-complete-30-minute-setup-guide" />
    </>
  );
}
