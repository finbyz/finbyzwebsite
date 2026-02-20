import FooterSection from "@/components/sections/FooterSection";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <FooterSection docname="/ai-automation/services/implementation" showBusinessSlider={true} showInquiryForm={false} />
    </main>
  );
}
