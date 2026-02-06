
import { Metadata } from "next";
import { getFaqs } from "@/lib/getPageData";
import FAQ from "@/components/ai_components/FAQ";
import FinbyzGallery from "@/components/sections/FinbyzGallery";
import BusinessSlider from "@/components/sections/business-slider";
import StructureData from "@/components/seo/StructureData";

export const metadata: Metadata = {
    title: "Enterprise Business Solutions | Finbyz Tech",
    description: "Explore our comprehensive suite of business solutions including ERPNext implementation, AI Automation, Staff Augmentation, and Custom Software Development.",
    keywords: "ERPNext solutions, AI automation, Staff Augmentation, Custom Software, Business Transformation",
    openGraph: {
        title: "Enterprise Business Solutions | Finbyz Tech",
        description: "Explore our comprehensive suite of business solutions including ERPNext implementation, AI Automation, Staff Augmentation, and Custom Software Development.",
        type: "website",
    }
};

export default async function Layout({ children }: { children: React.ReactNode }) {
    // Fetch FAQs if applicable, using a generic term or specific slug if we had one in Frappe
    const faqs = await getFaqs("Web Page", "solutions");

    return (
        <main>
            {children}
        </main>
    );
}
