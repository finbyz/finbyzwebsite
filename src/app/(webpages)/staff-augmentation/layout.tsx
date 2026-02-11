import { getFaqs } from "@/lib/getPageData";
import FAQ from "@/components/ai_components/FAQ";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import BusinessSlider from "@/components/sections/business-slider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch FAQs if applicable
  const faqs = await getFaqs("Web Page", "staff-augmentation");

  return <main>{children}</main>;
}
