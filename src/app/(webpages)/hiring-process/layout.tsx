import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <FooterSection doctype="Web Page" docname="hiring-process" />
    </>
  );
}
