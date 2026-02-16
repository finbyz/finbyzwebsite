import FooterSection from "@/components/sections/FooterSection";


export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      {children}      
      <FooterSection docname="/erpnext/wiki/using-where-clause-in-sql" />
    </>
  );
}