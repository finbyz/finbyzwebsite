'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import FeatureCard from '@/components/ai_components/FeatureCard';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import AdvantageList from '@/components/ai_components/AdvantageList';
import Image from 'next/image';
import React from 'react';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Web Application Development"
        // highlightWords={["Web", "Application", "Development"]}
        highlightWords={["Web"]}
        description="Access premier web app development from our top web application development company. We're leaders in expert solutions among web development companies."
        primaryButton={{
          text: 'Get Started',
          action: "#web-app"
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
          alt: 'Web Application Development',
          src: '/images/web-app-development.svg',
          videoSrc: undefined
        }}
      />

      {/* Intro Quote Section */}
      <Section>
        <div className="container-custom py-8">
          <div className="pb-6">
            <QuoteBlock text="Creating robust, affordable and efficient web applications that are tailor-made for your business" isHeading={false} />
          </div>
          <p className="text-muted-foreground text-justify text-base animate-fade-in-up" id="web-app">
            We at FinByz use best programming practices and structured framework programming to deliver the most efficient web application solutions for you. We are constantly updating ourselves with the advancements in technology and programming arena to stay on top of the growing technological requirements of our clients.
          </p>
        </div>
      </Section>

      {/* Technology Expertise Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-[#1A5276] animate-fade-in-up text-center md:text-left">Technology expertise</h2>
              <p className="text-base text-justify text-muted-foreground animate-fade-in-up">
                Our adaptive web applications are built using the latest array of web technologies and practices to enable the clients to simplify complex business workflows. To make web applications not only powerful but also interactive, reliable and robust, we work with a wide range of technologies.
              </p>
            </div>
            <div className="flex-1 flex justify-center animate-fade-in-up">
              <Image src="/images/technology-expertise.svg" alt="Technology expertise" width={320} height={250} className="object-contain" />
            </div>
          </div>
          <div className="mt-10">
            <QuoteBlock text="We treat our clients like our partners" isHeading={false} />
            <div className="mt-4 text-justify space-y-3 animate-fade-in-up">
              <p>
                We are focused on successfully achieving the same target as our clients and do so by having a strong foundation based on respect, professionalism, and understanding of client’s business.
              </p>
              <p>
                We deliver the best in class business software solutions to our clients using an agile framework for the web application development process. Our team of professionals has been hand-picked based on their experience, reputation and business acumen making sure that you receive a positive return on your investment when you work with us.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Scalable & Responsive Web Application Development Section */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-[#1A5276] mb-4 animate-fade-in-up">Scalable & Responsive Web Application Development</h2>
          <p className="text-base text-justify text-muted-foreground mb-8 animate-fade-in-up">
            We provide scalable & responsive web app development services that are focused on meeting the client's business requirements and strategies. We solve business problems by end-to-end web application development solutions using the latest technologies. The architect web applications keeping in mind your future growth, and build business software which can scale as your business grows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              title="Scalable Business Software"
              image="/images/scalable-web-app.svg"
              alt="Scalable Business Software"
              description="We develop web applications that are highly scalable to handle your daily increasing business data without any downtime."
            />
            <FeatureCard
              title="Responsive Web Applications"
              image="/images/responsive-web-app.svg"
              alt="Responsive Web Applications"
              description="We create optimized business software solutions that offer excellent user experience irrespective of the screen resolutions and size."
            />
          </div>
        </div>
      </Section>

      {/* Advantages Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h3 className="text-xl font-semibold text-[#1A5276] mb-6 animate-fade-in-up">Advantages of working with us</h3>
          <AdvantageList
            items={[
              { description: 'We have a Highly Talented and Experienced in-house Team' },
              { description: 'Having extensive experience in working with various technologies and businesses, we have keen insight into the vital requirements of every business.' },
              { description: 'We have a disciplined and structured business software development plan that ensures in delivering the most optimized web application solutions', link: { href: '/software-development', text: 'software development' } },
              { description: 'Providing intuitive and eye-catching designs, our web application based business software solutions offer the best user interface thus ensuring utmost user satisfaction.', link: { href: '/software-development', text: 'software solutions' } },
            ]}
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="py-8">
          <CTA
            data={{
              subheading: {
                text: 'Looking for a Web Application Development Partner?',
                icon: 'MonitorSmartphone',
              },
              title: 'Let’s Build Your Next Web App',
              highlightText:"Web App",
              description: 'Finbyz is a leading provider of advanced web application development services customized for your specific needs. Our team of knowledgeable web app developers is committed to making your ideas a reality and giving your audience a perfect online experience.',
              primaryButton: {
                text: 'Request a Consultation',
                icon: 'ArrowRight',
                action: () => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/contact';
                  }
                },
              },
              secondaryButton: {
                text: 'See Our Work',
                icon: 'Eye',
                action: () => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/portfolio';
                  }
                },
              },
              trustIndicator: {
                text: 'Trusted by 100+ businesses',
                icon: 'ShieldCheck',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
