import FooterSection from "@/components/sections/FooterSection";
import { generateAutoMetadata } from "@/lib/seo-metadata";

export async function generateMetadata() {
  return generateAutoMetadata();
}

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        {children}
        <FooterSection docname="" showBusinessSlider={true} showInquiryForm={true} />
      </main>
    </>
  );
}
