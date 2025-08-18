import { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero_section_without_button";
import AnimatedSteerVisionPage from "./animated-steer-vision-page";

export const metadata: Metadata = {
  title: "Steer Your Vision | Finbyz Tech Digital Transformation Approach",
  description: "Discover 'Steer Your Vision' — Finbyz Tech's signature approach to digital transformation. Navigate complexity with clarity, AI, ERP, and automation.",
  keywords: ["digital transformation", "AI ERP consulting", "business process reengineering", "technology partner", "automation strategy"],
};

export default function SteerVisionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-4">
        <Hero 
          data={{
            title: "Steer Your Vision with AI & ERP",
            subtitle: "Navigate complexity with clarity. From vision to value — your trusted partner in digital transformation.",
            description: "Your trusted partner in digital transformation.",
            image: {
              src: "/Steer Your Vision.png",
              alt: "Steer Your Vision - Lighthouse guiding business transformation with AI and ERP technology"
            }
          }}
        />
        <AnimatedSteerVisionPage />
      </main>
      <Footer />
    </div>
  );
} 