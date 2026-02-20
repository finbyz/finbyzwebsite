import FooterSection from "@/components/sections/FooterSection";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}      
      <FooterSection docname="/careers/why-join-finbyz" showBusinessSlider={true} showInquiryForm={false} />
    </>
  );
}
