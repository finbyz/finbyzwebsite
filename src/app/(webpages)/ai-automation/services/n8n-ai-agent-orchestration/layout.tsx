
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "n8n AI Agent Orchestration Services | Finbyz Tech",
    description: "Build intelligent multi-agent automation systems with n8n. Orchestrate OpenAI, Claude, and LangChain agents for autonomous enterprise workflows.",
    keywords: "n8n AI Agents, AI Orchestration, Multi-Agent Systems, LangChain n8n, n8n Consulting, AI Automation Services",
    openGraph: {
        title: "n8n AI Agent Orchestration Services | Finbyz Tech",
        description: "Build intelligent multi-agent automation systems with n8n. Orchestrate OpenAI, Claude, and LangChain agents for autonomous enterprise workflows.",
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
