import { Metadata } from "next";
import PageFooter from "@/components/sections/PageFooter";

export const metadata: Metadata = {
    title: "Case Studies | Finbyz Tech - Real Results, Real Impact",
    description: "Discover how Finbyz Tech has transformed businesses across industries with ERPNext, AI automation, and custom software solutions.",
    keywords: "Finbyz Case Studies, ERPNext Success Stories, AI Automation Examples, Software Development Projects",
    openGraph: {
        title: "Case Studies | Finbyz Tech - Real Results, Real Impact",
        description: "Discover how Finbyz Tech has transformed businesses across industries with ERPNext, AI automation, and custom software solutions.",
        type: "website",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
            <PageFooter
                doctype="Web Page"
                docname="case-studies"
                showInquiryForm={false}
                structureDataName="case-studies"
                structureDataType="webpage"
            />
        </main>
    );
}
