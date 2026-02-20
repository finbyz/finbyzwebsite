import FooterSection from "@/components/sections/FooterSection";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FooterSection docname="/about-us/partnership-programs" showBusinessSlider={true} showInquiryForm={false} />
    </>
  );
}
