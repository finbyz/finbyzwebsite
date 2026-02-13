import FooterSection from "@/components/sections/FooterSection";
import Header from "@/components/layout/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        {children}

        <FooterSection doctype="Web Page" docname="erpnext/textile" />
      </main>
    </>
  );
}
