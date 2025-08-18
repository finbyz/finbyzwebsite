import { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero_section_without_button";
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
      <main className="pt-4">
        <Hero 
          data={{
            title: "Build Your Career with AI & ERP",
            subtitle: "Join a team where innovation meets opportunity. Shape the future of technology and grow with us.",
            description: "Join our innovative team and shape the future of technology.",
            image: {
              src: "/Career.png",
              alt: "Career opportunities at Finbyz Tech - Join our innovative team"
            }
          }}
        />
        <AnimatedCareerPage />
      </main>
      <Footer />
    </div>
  );
} 