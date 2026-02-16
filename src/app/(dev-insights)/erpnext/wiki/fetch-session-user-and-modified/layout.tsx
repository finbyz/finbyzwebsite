import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      {children}      
      <FooterSection docname="/erpnext/wiki/fetch-session-user-and-modified" />
    </>
  );
}