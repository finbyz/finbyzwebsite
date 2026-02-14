import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      
      
      
    <FooterSection docname="/moltbot-vs-claude-code-complete-comparison-guide-2026" />
    </>
  );
}
