import FooterSection from "@/components/sections/FooterSection";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection docname="/restrict-users-to-add/delete-rows" />
    </>
  );
}