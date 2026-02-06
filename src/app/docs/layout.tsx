import { Metadata } from "next";
import StructureData from "@/components/seo/StructureData";

export const metadata: Metadata = {
    title: "Docs | Finbyz Tech",
    description: "Central documentation hub for ERPNext, User Guides, Developer Resources, and Finbyz Tech solutions.",
    keywords: "Documentation, ERPNext Docs, User Guides, Developer Resources, Knowledge Base, Finbyz Tech",
    openGraph: {
        title: "Docs | Finbyz Tech",
        description: "Central documentation hub for ERPNext, User Guides, Developer Resources, and Finbyz Tech solutions.",
        type: "website",
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
            <StructureData type="webpage" />
        </main>
    );
}
