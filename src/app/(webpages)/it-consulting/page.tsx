'use client';
import React from 'react';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import ITConsultingFlipCards from '@/components/ai_components/ITConsultingFlipCards';
import CTA from '@/components/sections/cta';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="IT Consulting"
        highlightWords={["IT", "Consulting"]}
        description="Elevate your business goals with our IT Consulting Services in Ahmedabad. Expert support, unbiased advice, and innovative solutions for optimal IT investment."
        primaryButton={{
          text: 'Get Consultation',
          action: () => {
            if (typeof window !== 'undefined') {
              window.location.href = '/contact';
            }
          }
        }}
        secondaryButton={{
          text: 'Contact Us',
          action: () => {
            if (typeof window !== 'undefined') {
              window.location.href = '/contact';
            }
          }
        }}
        heroImage={{
          alt: 'IT Consulting',
          src: '/images/banner-consulting.svg',
          // src:'/it-consulting2.png',
          videoSrc: undefined
        }}
      />

      <Section>
        <div id='it-consulting' className="container-custom py-8">
          <p className="text-gray-700 text-justify text-base mb-4">
            With our IT expertise and in-depth understanding of the industry, we can help you develop or update your strategy, refine your goals and business objectives, and maximize your chances of success. This results in better, measurable goals from your IT investment. We work as an IT partner to our clients, where we not only guide them on current issues in hand but by understanding their current processes we also suggest possible solutions for increasing the productivity of the team.
          </p>
          <QuoteBlock text="Your business goals should drive your technology choices – not the other way around!" isHeading={false} />
          <p className="text-gray-700 text-justify text-base mt-6 mb-4">
            In ever-evolving technology, the businesses face challenge to identify new technologies to reduce cost, increase sales and improve productivity. This requires constant tracking of new opportunities presented by evolving technologies. Many times the cost of upgrading the old legacy system can run higher than buying next-generation solutions for the same problem. But lack of knowledge of new technology can lead to poor decision making. FinByz Tech’s consulting service is a way to bridge this gap.
          </p>
          <p   className="text-gray-700 text-justify text-base">
            Our experienced team will take time to understand you and your responsibilities. The processes you have in place, the technologies that are available to you, and how you like to work. We will then work with you to achieve your goals. As necessary we can redesign processes, re-define responsibilities, and help you select the most suitable technologies that drive user adoption and let you capitalize on your technology investments.
          </p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <ITConsultingFlipCards />
        </div>
      </Section>

      <Section>
        <div className="py-8 " id="It">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your IT?',
                icon: 'Zap'
              },
              title: 'Get Expert IT Consulting Today',
              highlightText:"IT Consulting",
              description: 'Contact us for unbiased, innovative, and expert IT solutions tailored to your business goals.',
              primaryButton: {
                text: 'Request Consultation',
                icon: 'ArrowRight',
                action: () => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/contact';
                  }
                }
              },
              secondaryButton: {
                text: 'Learn More',
                icon: 'Info',
                 action: () => {
            const el = document.getElementById('it-consulting');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
              },
              trustIndicator: {
                text: 'Trusted by 100+ Businesses',
                icon: 'ShieldCheck'
              }
            }}
          />
        </div>
      </Section>
    </>
  );
}
