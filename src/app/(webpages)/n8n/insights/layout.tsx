
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "n8n Insights & Tutorials | Finbyz Tech",
    description: "Expert guides, comparisons, and tutorials on n8n workflow automation, self-hosting, and AI agent orchestration.",
    keywords: "n8n tutorials, n8n guides, self-hosting n8n, n8n vs zapier, n8n ai agents, workflow automation blog",
    openGraph: {
        title: "n8n Insights & Tutorials | Finbyz Tech",
        description: "Expert guides, comparisons, and tutorials on n8n workflow automation, self-hosting, and AI agent orchestration.",
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
