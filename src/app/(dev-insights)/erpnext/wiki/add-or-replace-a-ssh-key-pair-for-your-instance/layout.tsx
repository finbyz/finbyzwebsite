import FooterSection from "@/components/sections/FooterSection";


export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      {children}      
      <FooterSection docname="/erpnext/wiki/add-or-replace-a-ssh-key-pair-for-your-instance" />
    </>
  );
}