import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import ClientLogos from "@/components/sections/client-logos";
import ResponsiveCardGrid from "@/components/sections/responsive-card-grid";
import BusinessSlider from "@/components/sections/business-slider";
import InquiryForm from "@/components/ui/InquiryForm";
import { Clock } from "lucide-react";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main >
        <Hero />

        <Benefits />
        <div className="[&_h2]:text-[#1A5276]">
        <ResponsiveCardGrid 
            data={{
              title: "Our Services",
              subtitle: "Discover our comprehensive range of services designed to help your business grow and succeed in the digital world.",
              variant: "iconCard",
              layout: "standard",
              showImage: false,
              imageHeight: 200,
              imageWidth: 300,
              debug: false,
              cards: [
                {
                  id: 1,
                  title: "ERPNext Implementation",
                  description: "Innovative Solutions to Automate your Business!",
                  icon: "Cpu",
                  iconBg: "#1A5276",
                  iconColor: "#ffffff"
                },
                {
                  id: 2,
                  title: "AI Automations",
                  description: "Beautiful and functional websites that convert visitors into customers.",
                  icon: "TrendingUp",
                  iconBg: "#FF8C00",
                  iconColor: "#ffffff"
                },
                {
                  id: 3,
                  title: "Resource Augmentation",
                  description: "Native and cross-platform mobile applications for iOS and Android.",
                  icon: "Globe",
                  iconBg: "#27AE60",
                  iconColor: "#ffffff"
                },
                {
                  id: 4,
                  title: "Hourly Support",
                  description: "Scalable cloud infrastructure and deployment solutions.",
                  icon: "Target",
                  iconBg: "#8E44AD",
                  iconColor: "#ffffff"
                },
                {
                  id: 5,
                  title: "Data Analytics",
                  description: "Transform your data into actionable insights and reports.",
                  icon: "BarChart3",
                  iconBg: "#1A5276",
                  iconColor: "#ffffff"
                },
                {
                  id: 6,
                  title: "Software Development",
                  description: "Intelligent automation and predictive analytics solutions.",
                  icon: "Code",
                  iconBg: "#8E44AD",
                  iconColor: "#ffffff"
                }
              ]
            }}
          /></div>

        <BusinessSlider />

        <Testimonials />

        <ClientLogos />
        <CTA />

        {/* Inquiry Form */}
        <InquiryForm 
          data={{
            // component_type: "Form",  
            title: "Book a Free Consultation",
            highlightText: "Book a Free Consultation",
            description: "Get started with your free demo today and discover how our solutions can transform your business",
            fields: {
              name: "Name",
              organization: "Organization Name",
              email: "Email",
              mobile: "Mobile No"
            },
            submitText: "SUBMIT"
          }}
        />

        {/* Contact form (simple, compact) */}
        {/* If you want this on a separate page, we can move it to /contact */}
        {/* import ContactFormSection at top if you want to render here */}


      </main>
      <Footer />
    </div>
  );
}

