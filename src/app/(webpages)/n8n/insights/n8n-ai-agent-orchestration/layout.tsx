import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
  }) {
  // Structured Data for AI Agent Orchestration Service
  return (
    <>
      {/* JSON-LD Structured Data */}
      <main>
        {children}
      </main>
    <FooterSection docname="/n8n/insights/n8n-ai-agent-orchestration" />
    </>
  );
}
