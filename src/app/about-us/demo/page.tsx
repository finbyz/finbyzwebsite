import { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TimelineDemo from "../timeline-demo";

export const metadata: Metadata = {
  title: "Timeline Components Demo | Finbyz Tech",
  description: "Explore different timeline component designs for showcasing company history and milestones.",
  keywords: ["timeline components", "UI components", "company history", "milestones"],
};

export default function TimelineDemoPage() {
  return (
    <div className="min-h-screen">
      <main>
        <TimelineDemo />
      </main>
      <Footer />
    </div>
  );
} 