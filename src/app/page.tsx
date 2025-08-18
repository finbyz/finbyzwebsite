import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import ClientLogos from "@/components/sections/client-logos";
import StatsShowcase from "@/components/sections/stats-showcase";
import TechnologyStack from "@/components/sections/technology-stack";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-4">
        <Hero />
        
        <Benefits />
        
        <StatsShowcase />
        
        <TechnologyStack />
        
        <ClientLogos />
        
        <Testimonials />
        
        <CTA />
        
        {/* Navigation to Component System */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Component System</h2>
              <p className="text-lg text-gray-600">Explore our dynamic component library and page builder</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <Link
                href="/page-builder"
                className="group bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Page Builder
                </h3>
                <p className="text-gray-600 mb-4">
                  Create dynamic pages by selecting components and providing custom data.
                </p>
                <span className="text-blue-600 font-medium">Build Pages →</span>
              </Link>

              <Link
                href="/dynamic-page-example"
                className="group bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Dynamic Page Example
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  See a complete example of creating a page with 40+ components from JSON data.
                </p>
                <span className="text-blue-600 font-medium">View Example →</span>
              </Link>

              <Link
                href="/dynamic-page/test2561454"
                className="group bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Test Dynamic Page
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  View the test dynamic page with all components.
                </p>
                <span className="text-blue-600 font-medium">View Test Page →</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

