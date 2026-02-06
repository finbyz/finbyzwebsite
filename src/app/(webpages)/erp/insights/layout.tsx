import { LazyBusinessSlider } from "@/lib/lazy-components";
import FAQ from "@/components/ai_components/FAQ";
import StructureData from "@/components/seo/StructureData";
import { getFaqs } from "@/lib/getPageData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ERP Insights & Strategies | Finbyz",
    description: "Expert guides, industry solutions, and strategic insights for ERPNext implementation and digital transformation.",
    alternates: {
        canonical: "/erp/insights",
    },
};

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
            <StructureData
                type="webpage"
                data={{
                    name: "ERP Insights & Strategies",
                    description: "Expert guides, industry solutions, and strategic insights for ERPNext implementation and digital transformation.",
                    route: "erp/insights"
                }}
            />
        </main>
    );
}
