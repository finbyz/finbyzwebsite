"use client";
import "@/styles/components/inquiry-form.css";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactWithMap from "@/components/sections/contact-with-map";
import ContactFormSection from "@/components/sections/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-4">
        <ContactWithMap
          data={{
            component_type: "Text",
            title: "Contact Us",
            subtitle: "We'd love to hear from you",
            items: [
              { label: "Sales Inquiry", value: "+91-9925701446", href: "tel:+919925701446", icon: "phone" },
              { label: "Service & Support", value: "+91-8200899005", href: "tel:+918200899005", icon: "headset" },
              { label: "Job Interviews", value: "079 48912428", href: "tel:+9107948912428", icon: "briefcase" },
              { label: "info@finbyz.tech", value: "info@finbyz.tech", href: "mailto:info@finbyz.tech", icon: "mail" },
            ],
            addressTitle: "Registered Office",
            addressLines: [
              "504-Addor Ambition, Nr. Navrang Circle, Vimal House",
              "Navrangpura, Ahmedabad, Gujarat 380009",
            ],
            mapEmbedUrl:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3816282476478!2d72.5582982!3d23.046466399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848b56e4b749%3A0x4b6f73a235b252e3!2sFinByz%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1755512221321!5m2!1sen!2sin",
          }}
        />

        {/* <ContactFormSection
          title="Send us a message"
          subtitle="Fill out the form below and our team will get back to you shortly."
          submitLabel="Send Message"
          toEmail="info@finbyz.tech"
        /> */}
      </main>
      <Footer />
    </div>
  );
}


