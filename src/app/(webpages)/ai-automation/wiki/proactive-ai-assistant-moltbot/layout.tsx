import FooterSection from "@/components/sections/FooterSection";

const PAGE_SLUG = "ai-automation/guides/proactive-ai-assistant-moltbot";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      
      
      
      <FooterSection docname="/ai-automation/wiki/proactive-ai-assistant-moltbot" />
    </>
  );
}
