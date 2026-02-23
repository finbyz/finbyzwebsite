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
      </main>
    </>
  );
}
