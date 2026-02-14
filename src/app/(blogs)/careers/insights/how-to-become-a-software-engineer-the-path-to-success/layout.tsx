import FooterSection from "@/components/sections/FooterSection";
import Header from "@/components/layout/header";
import InquiryForm from "@/components/ui/InquiryForm";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <>
      <Header />
      <main>
        {children}
        <FooterSection docname="/careers/insights/how-to-become-a-software-engineer-the-path-to-success" />
      </main>
    </>
  );
}
