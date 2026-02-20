import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection docname="/erpnext/services/resource-augmentation" showBusinessSlider={true} showInquiryForm={false} />
    </>
  );
}
