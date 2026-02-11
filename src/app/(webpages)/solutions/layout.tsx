import { getFaqs } from "@/lib/getPageData";
import FAQ from "@/components/ai_components/FAQ";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import BusinessSlider from "@/components/sections/business-slider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch FAQs if applicable, using a generic term or specific slug if we had one in Frappe
  const faqs = await getFaqs("Web Page", "solutions");

  return <main>{children}</main>;
}
