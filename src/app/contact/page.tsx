import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';

import ContactInfoCard from '@/components/ai_components/ContactInfoCard';
import ContactForm from '@/components/ai_components/ContactForm';
import { MapPin, Phone } from 'lucide-react';
import React from 'react';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Contact Us"
        highlightWords={["Contact"]}
        description="Have a question, project, or just want to say hi? We'd love to hear from you. Reach out and let's build something great together."
        primaryButton={{
          text: 'Send a Message',
          action: "#contact-form-section"
        }}
        secondaryButton={{
          text: 'Call Us',
          action: 'tel:9925701446'
        }}
        heroImage={{
          alt: 'contact',
          src: "/contact-hero.webp",
        }}
      />

      <Section useGradient={false} id='contact-form-section' className='scroll-mt-5'>
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="animate-fade-in-up order-2 lg:order-1">
              <ContactInfoCard
                phoneNumbers={[
                  { label: 'Sales Inquiry', number: '+91-9925701446', href: 'tel:9925701446' },
                  { label: 'Service & Support', number: '+91-8200899005', href: 'tel:8200899005' },
                  { label: 'Job Interviews', number: '+91-9978419445', href: 'tel:9978419445' }
                ]}
                email={{ label: 'info@finbyz.com', href: 'mailto:info@finbyz.com' }}
                address={
                  '504-Addor Ambition, Nr. Navrang Circle, Navrangpura, Ahmedabad, Gujarat 380009'
                }
                office={'Registered Office'}
              />
            </div>
            <div className="order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Section useGradient={false}>
        <div className="container-custom py-12 md:py-16">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-3">
              Our <span className="text-orange-500">Location</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Visit us at our office or find us on the map below
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in-up relative group max-w-5xl mx-auto">
            <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
              <span className="text-xs font-medium text-gray-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                504-Addor Ambition, Navrangpura, Ahmedabad
              </span>
            </div>
            <iframe
              title="Finbyz Location Map"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJSbfkVouEXjkR41KyNaJzb0s&key=AIzaSyDAgHcWBFDp0LBydBl5H05PU-fAYP2Ujeo"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[350px] md:h-[450px]"
            ></iframe>
          </div>
        </div>
      </Section>
    </>
  );
}
