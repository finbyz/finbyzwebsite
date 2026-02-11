import { LazyBusinessSlider } from "@/lib/lazy-components";
import FAQ from "@/components/ai_components/FAQ";
import { getFaqs } from "@/lib/getPageData";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqsGroup = await getFaqs("ERP Insights", "erp-insights");

  return (
    <main>
      {children}
      {faqsGroup && faqsGroup.faqs && <FAQ faqs={faqsGroup.faqs} />}
      <LazyBusinessSlider />
    </main>
  );
}
