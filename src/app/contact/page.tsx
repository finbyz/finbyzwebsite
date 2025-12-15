'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import ContactInfoCard from '@/components/ai_components/ContactInfoCard';
import ContactForm from '@/components/ai_components/ContactForm';
import Image from 'next/image';
import React from 'react';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Contact"
        highlightWords={["Contact", "Finbyz"]}
        description="Contact Finbyz for streamlined business solutions. Transform your operations with our expertly designed ERP and digital strategies. Reach out now!"
        primaryButton={{
          text: 'Get in Touch',
          action:"#contact-form-section"
          
        }}
        secondaryButton={{
          text: 'Call Us',
          action: () => {
            window.open('tel:9925701446', '_self');
          }
        }}
        heroImage={{
          alt: 'contact',
          // src: '/images/icon-phone.svg',
          src: "/contact-hero.webp",

        }}
      />

      <Section>
        <div className="container-custom py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <ContactInfoCard
            phoneNumbers={[
              { label: 'Sales Inquiry', number: '+91-9925701446', href: 'tel:9925701446' },
              { label: 'Service & Support', number: '+91-8200899005', href: 'tel:8200899005' },
              { label: 'Job Interviews', number: '+91-9978419445', href: 'tel:9978419445' }
            ]}
            email={{ label: 'info@finbyz.com', href: 'mailto:info@finbyz.com' }}
            address={
              '504-Addor Ambition,Nr. Navrang Circle,Navrangpura,Ahmedabad, Gujarat 380009'
            }
            office={'Registered Office'}
          />
          {/* '504-Addor Ambition, Nr. Navrang Circle, Navrangpura, Ahmedabad, Gujarat 380009' */}
          <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in-up">
            <iframe
              title="Finbyz Location Map"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJSbfkVouEXjkR41KyNaJzb0s&key=AIzaSyDAgHcWBFDp0LBydBl5H05PU-fAYP2Ujeo"
              width="100%"
              height="430"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] md:h-[430px]"
            ></iframe>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8" id="contact-form-section">
          <ContactForm />
        </div>
      </Section>

      <CTA
        data={{
          subheading: {
            text: 'Ready to Transform?',
            icon: 'Phone',
          },
          title: 'Let’s Connect and Grow Your Business',
          highlightText:"Grow Your Business",
          description: 'Contact Finbyz for expert ERP and digital solutions. Our team is ready to help you streamline your business operations.',
          primaryButton: {
            text: 'Contact Now',
            icon: 'Send',
            action: () => {
              const el = document.getElementById('contact-form-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          },
          secondaryButton: {
            text: 'Call Us',
            icon: 'Phone',
            action: () => {
              window.open('tel:+919925701446', '_self');
            }
          },
          trustIndicator: {
            text: 'Trusted by 100+ businesses',
            icon: 'CheckCircle',
          }
        }}
      />
    </>
  );
}
