
import { Metadata } from "next";

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
        </main>
    );
}
