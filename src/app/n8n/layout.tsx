
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "n8n Automation Services | Finbyz Tech",
    description: "Streamline your business operations with our expert n8n automation services. We specialize in workflow orchestration, API integration, and self-hosted n8n setups.",
    keywords: "n8n Automation, Workflow Automation, API Integration, Self-hosted n8n, Business Process Automation, Finbyz Tech n8n, n8n Consultants",
    openGraph: {
        title: "n8n Automation Services | Finbyz Tech",
        description: "Streamline your business operations with our expert n8n automation services. We specialize in workflow orchestration, API integration, and self-hosted n8n setups.",
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
