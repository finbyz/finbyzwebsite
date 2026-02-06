
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom AI Development Services | Finbyz Tech",
    description: "Unlock the power of Artificial Intelligence with Finbyz Tech. We build tailored AI solutions, LLMs, NLP models, and computer vision systems to solve specific business problems.",
    keywords: "Custom AI Development, Generative AI Services, NLP Solutions, Computer Vision Experts, AI Agents Development, Finbyz Tech AI",
    openGraph: {
        title: "Custom AI Development Services | Finbyz Tech",
        description: "Unlock the power of Artificial Intelligence with Finbyz Tech. We build tailored AI solutions, LLMs, NLP models, and computer vision systems to solve specific business problems.",
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
