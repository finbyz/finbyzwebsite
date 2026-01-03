
import InquiryForm from "@/components/ui/InquiryForm";


export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <main>
        {children}
       
        <InquiryForm />
      </main>

    </>
  );
}
