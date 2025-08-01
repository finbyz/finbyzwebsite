import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Benefits from "@/components/sections/benefits";
import Differentiators from "@/components/sections/differentiators";
import Testimonials from "@/components/sections/testimonials";
import SuccessSnapshots from "@/components/sections/success-snapshots";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Differentiators />
        <Testimonials />
        <SuccessSnapshots />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

