import FooterSection from "@/components/sections/FooterSection";

const PAGE_SLUG = "ai-automation/clawdbot-moltbot-rebrand";
const PAGE_ROUTE = "ai-automation/clawdbot-moltbot-rebrand";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  

  return (
    <>
      {children}
      <FooterSection docname="/ai-automation/clawdbot-moltbot-rebrand" />
    </>
  );
}
