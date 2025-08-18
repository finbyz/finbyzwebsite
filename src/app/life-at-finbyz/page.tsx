import { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import AnimatedLifeAtFinbyz from "./animated-life-at-finbyz";

export const metadata: Metadata = {
  title: "Life at Finbyz | Inside Our Culture of Innovation & Collaboration",
  description: "Discover life at Finbyz Tech — where innovation meets collaboration, and every day is a chance to learn, grow, and create together.",
  keywords: ["Life at Finbyz", "Finbyz Tech culture", "Tech company work culture", "Innovation at workplace", "Fun at work India"],
};

export default function LifeAtFinbyzPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-4">
        <AnimatedLifeAtFinbyz />
      </main>
      <Footer />
    </div>
  );
} 