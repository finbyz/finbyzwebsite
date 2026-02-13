import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <FooterSection doctype="Web Page" docname="custom-erp-development" />
    </main>
  );
}
