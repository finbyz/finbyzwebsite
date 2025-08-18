import Hero from "@/components/sections/hero";
import HeroSimple from "@/components/sections/hero_section_without_button";
import Testimonials from "@/components/sections/testimonials";
import { Services } from "@/utils/components";
// import ServicePricing from "@/components/sections/service-pricing";
// import Services from "@/components/sections/services";

export default function TestRefactoredComponents() {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center py-8">Testing Refactored Components</h1>
      
      <div className="space-y-20">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Hero Component</h2>
          <Hero />
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Hero Simple Component</h2>
          <HeroSimple />
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Services Component</h2>
          <Services 
            title="Our Services"
            subtitle="Comprehensive solutions for modern businesses"
            services={[
              {
                icon: "🚀",
                title: "Web Development",
                description: "Custom web applications built with modern technologies"
              },
              {
                icon: "📱",
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications"
              },
              {
                icon: "☁️",
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and deployment"
              }
            ]}
            ctaText="Get Started"
          />
        </section>
        
        {/* <section>
          <h2 className="text-2xl font-semibold mb-4">Service Pricing Component</h2>
          <ServicePricing />
        </section> */}
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Testimonials Component</h2>
          <Testimonials />
        </section>
      </div>
    </div>
  );
}
