
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Implementation & Integration Services | Finbyz Tech",
    description: "Expert AI implementation services to bring your intelligent solutions to life. We handle integration, deployment, and optimization of AI models and workflows.",
    keywords: "AI Implementation, AI Integration, MLOps, AI Deployment, Custom AI Solutions, Workflow Automation, Finbyz Tech Implementation",
    openGraph: {
        title: "AI Implementation & Integration Services | Finbyz Tech",
        description: "Expert AI implementation services to bring your intelligent solutions to life. We handle integration, deployment, and optimization of AI models and workflows.",
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
