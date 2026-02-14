import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <>
      {children}
      <FooterSection docname="/erpnext/ai/ai-powered-follow-up-buddy-automate-your-sales-follow-up-process" />
    </>
  );
}
