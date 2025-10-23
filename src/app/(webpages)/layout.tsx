import FAQ from "@/components/ai_components/FAQ";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import InquiryForm from "@/components/ui/InquiryForm";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header />
      <main>
        {children}
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
