
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Strategy & Consulting Services | Finbyz Tech",
    description: "Navigate the complex landscape of Artificial Intelligence with Finbyz Tech's expert consulting. We help businesses define AI roadmaps, assess feasibility, and calculate ROI.",
    keywords: "AI Consulting, AI Strategy, AI Roadmap, Machine Learning Consulting, AI Feasibility Study, AI ROI Analysis, Finbyz Tech Consulting",
    openGraph: {
        title: "AI Strategy & Consulting Services | Finbyz Tech",
        description: "Navigate the complex landscape of Artificial Intelligence with Finbyz Tech's expert consulting. We help businesses define AI roadmaps, assess feasibility, and calculate ROI.",
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
