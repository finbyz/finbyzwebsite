import { Metadata } from "next";
import StructureData from "@/components/seo/StructureData";
import FooterSection from "@/components/sections/FooterSection";

export const metadata: Metadata = {
    title: "Pricing | Finbyz Tech",
    description: "Flexible pricing plans for ERPNext, AI Automation, and Outsourcing services tailored to your business needs.",
    keywords: "Pricing, ERPNext Pricing, AI Automation Cost, Outsourcing Rates, Finbyz Tech, Business Solutions Cost",
    openGraph: {
        title: "Pricing | Finbyz Tech",
        description: "Flexible pricing plans for ERPNext, AI Automation, and Outsourcing services tailored to your business needs.",
        type: "website",
    }
};

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
            <FooterSection doctype="Web Page" docname="pricing" />
            <StructureData type="webpage" />
        </main>
    );
}
