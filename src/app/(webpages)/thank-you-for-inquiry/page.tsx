'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import ThankYouCard from '@/components/ai_components/ThankYouCard';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {
  const router = useRouter();

  const handleHome = () => {
    window.open('https://finbyz.tech', '_self');
  };

  return (
    <>
      <HeroSection
        headline="Thank you for Inquiry"
        highlightWords={["Thank you", "Inquiry"]}
        description="Thanks for reaching out! We're excited to assist you. Our team is on it and will get back to you soon."
        primaryButton={{
          text: 'Home',
          action: handleHome,
        }}
        heroImage={{
          alt: 'Thank you for Inquiry',
          src: 'api/fb/n/files/Thank-you.svg',
          videoSrc: null,
        }}
      />
      <Section>
        <div className="container-custom py-8 flex justify-center">
          <ThankYouCard
            title="Thank you for Inquiry"
            message="Thanks for reaching out! We're excited to assist you. Our team is on it and will get back to you soon."
            buttonText="Home"
            buttonAction={handleHome}
          />
        </div>
      </Section>
      <Section useGradient>
        <div className="container-custom py-8 flex flex-col items-center">
          <CTA
            data={{
              subheading: {
                text: 'Ready to get started?',
                icon: 'Smile',
              },
              title: 'Return to Home or Explore More',
              description: 'Discover our services and solutions to help your business grow.',
              primaryButton: {
                text: 'Go to Home',
                icon: 'ArrowLeft',
                action: handleHome,
              },
              secondaryButton: {
                text: 'Contact Us',
                icon: 'Mail',
                action: () => router.push('/contact'),
              },
              trustIndicator: {
                text: 'Trusted by 100+ businesses',
                icon: 'CheckCircle',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
