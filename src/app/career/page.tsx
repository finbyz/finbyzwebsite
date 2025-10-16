import { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from '@/components/sections/dynamic-hero';
import AnimatedCareerPage from "./animated-career-page";

export const metadata: Metadata = {
  title: "Careers at Finbyz Tech | Build the Future with Us",
  description: "Join Finbyz Tech — a place where innovation thrives, ideas matter, and your talent gets the spotlight. Explore our culture, values, and current openings.",
  keywords: ["Careers at Finbyz", "Finbyz Tech hiring", "Tech jobs in Ahmedabad", "Join a tech company", "Software developer career India"],
};

export default function CareerPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="">
        <HeroSection
        headline="Build Your Career with AI & ERP"
        highlightWords={["Career", "AI", "ERP"]}
        description="Join a team where innovation meets opportunity. Shape the future of technology and grow with us."
        heroImage={{
          alt: 'Career opportunities at Finbyz Tech - Join our innovative team',
          src: '/careers_5.png'
        }}
      />
        <AnimatedCareerPage />
      </main>
      <Footer />
    </div>
  );
} 