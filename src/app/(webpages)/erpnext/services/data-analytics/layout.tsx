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
      <FooterSection docname="/erpnext/services/data-analytics" />
    </>
  );
}
