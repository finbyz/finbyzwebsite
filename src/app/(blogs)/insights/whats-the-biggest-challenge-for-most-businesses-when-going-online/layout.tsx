import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  

  return (
    <>
      {children}
      <FooterSection docname="/insights/whats-the-biggest-challenge-for-most-businesses-when-going-online" />
    </>
  );
}
