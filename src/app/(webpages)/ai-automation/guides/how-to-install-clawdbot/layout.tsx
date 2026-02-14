import FooterSection from "@/components/sections/FooterSection";

const PAGE_SLUG = "how-to-install-clawdbot-complete-30-minute-setup-guide";
const PAGE_ROUTE = "/ai-automation/guides/how-to-install-clawdbot";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      
      
      
    <FooterSection docname="/how-to-install-clawdbot-complete-30-minute-setup-guide" />
    </>
  );
}
