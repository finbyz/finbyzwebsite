import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <>
      <main>
        {children}
      </main>
      <FooterSection docname="/ai-automation/apps/sales-call-recording-and-analysis-in-erpnext" />
    </>
  );
}
