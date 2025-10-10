'use client';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import ServiceFlipCards from '@/components/ai_components/ServiceFlipCards';
import HexProcessGrid from '@/components/ai_components/HexProcessGrid';
import FeatureGrid from '@/components/ai_components/FeatureGrid';
import ApproachFeatureGrid from '@/components/ai_components/ApproachFeatureGrid';
import CTA from '@/components/sections/cta';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function Page() {
  // Hero Section props
  const heroProps = {
    headline: 'Software Development',
    highlightWords: ['Software', 'Development'],
    description:
      'Looking for a reliable software development company in Ahmedabad? FinByz Tech offers custom software solutions tailored to your business needs. We deliver scalable, secure, and high-performing applications to empower your business.',
    primaryButton: {
      text: 'Get Started',
      action: () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      },
    },
    secondaryButton: {
      text: 'Our Services',
      action: () => {
        const el = document.getElementById('sd-cards');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    },
    heroImage: {
      alt: 'Software Development',
      src: 'api/fb/n/files/banner-softwaredevelopment.svg',
    },
  };

  // Service Flip Cards
  const serviceCards = [
    {
      title: 'Custom Software Development',
      image: 'api/fb/n/svg/icon-custom-software-developement.svg',
      alt: 'Custom Software Development',
      description:
        'Empower your business infrastructure with robust software development that enhances automation, collaboration, and decision-making. Our custom software development services are designed to meet specific business goals through scalable, secure, and high-performing enterprise solutions.',
      link: '/erp-implementaion',
    },
    {
      title: 'Software Solution Integration',
      image: 'api/fb/n/svg/icon-software-integration.svg',
      alt: 'Software Solution Integration',
      description:
        'As a full-service software development company, we help businesses integrate cloud-based SaaS and on-premise systems seamlessly. Our services include API development, microservices architecture, and enterprise application integration to ensure unified data flow and optimized performance across platforms.',
      link: '/erp-implementaion',
    },
    {
      title: 'Legacy Application Modernization',
      image: 'api/fb/n/svg/icon-legecy-application-modernization.svg',
      alt: 'Legacy Application Modernization',
      description:
        'Legacy systems can hinder growth and efficiency. Our software development experts evaluate and upgrade outdated enterprise applications using the latest technologies. Through our modernization services, we transform legacy systems into agile, future-ready platforms that enhance user satisfaction and productivity.',
      link: '/erp-implementaion',
    },
  ];

  // Process Steps for Hex Grid
  const processSteps = [
    {
      title: 'Consult',
      image: 'api/fb/n/files/consult-finbyz.svg',
      alt: 'Consult us',
    },
    {
      title: 'Design',
      image: 'api/fb/n/files/design-finbyz.svg',
      alt: 'Design Process',
    },
    {
      title: 'Develop',
      image: 'api/fb/n/files/develop-finbyz.svg',
      alt: 'Develop',
    },
    {
      title: 'Deploy',
      image: 'api/fb/n/files/deploy-finbyz.svg',
      alt: 'Deploy',
    },
    {
      title: 'Support',
      image: 'api/fb/n/files/support-finbyz.svg',
      alt: 'Support',
    },
  ];

  // Methodology Features
  const methodologyFeatures = [
    {
      title: 'Flawless UX',
      image: 'api/fb/n/files/icon%20Real-time%20information.svg',
      alt: 'Flawless UX',
      description:
        'As a trusted software development company, we prioritize easy adoption, uniquely branded designs, and intuitive interfaces to enhance user experience and encourage seamless use of your custom software development solution.',
    },
    {
      title: 'Seamless integration',
      image: 'api/fb/n/files/icon%20Higher%20Productivity.svg',
      alt: 'Seamless integration',
      description:
        'Our software development experts ensure that your newly built solution integrates effortlessly with existing systems, creating a unified digital environment for your business operations.',
    },
    {
      title: 'Total information security',
      image: 'api/fb/n/files/icon%20Improved%20Collaboration.svg',
      alt: 'Total information security',
      description:
        'We develop custom software with robust security protocols embedded at every phase of the software development lifecycle, protecting your data and ensuring compliance with industry standards.',
    },
    {
      title: 'Reliable Support & Maintenance',
      image: 'api/fb/n/files/icon%20Better%20Analytics.svg',
      alt: 'Reliable Support & Maintenance',
      description:
        'We offer ongoing support and maintenance services to ensure that your custom software remains up-to-date, relevant, and aligned with changing business environments and technological advancements.',
    },
  ];

  // Approach Features
  const approachFeatures = [
    {
      title: 'Understanding Your Vision',
      image: 'api/fb/n/files/understanding_your_vision.svg',
      alt: 'Understanding Your Vision',
      description:
        'Our software development process starts by thoroughly understanding your goals, industry, and unique challenges to deliver a tailor-made solution through expert custom software development practices.',
    },
    {
      title: 'Continuous Collaboration',
      image: 'api/fb/n/files/asynchnorus.svg',
      alt: 'Continuous Collaboration',
      description:
        'As a collaborative software development company, we work closely with you throughout the project, ensuring your insights shape the outcome and align with your evolving business needs.',
    },
    {
      title: 'Exceeding Expectations',
      image: 'api/fb/n/files/speed-strikes-the-first-impression.svg',
      alt: 'Exceeding Expectations',
      description:
        'We don’t just build software; we deliver solutions that go beyond expectations. Our software development services are designed to maximize value and performance for your business operations.',
    },
  ];

  // CTA Data
  const ctaData = {
    subheading: {
      text: 'Ready to Transform Your Business?',
      icon: 'Rocket',
    },
    title: 'Let’s Get It Started',
    description:
      'Partner with a leading software development company with years of experience in delivering world-class custom software development. Let’s explore how our solutions can be crafted to meet your specific needs and unlock new opportunities for your business.',
    primaryButton: {
      text: 'Request a Consultation',
      icon: 'ArrowRight',
      action: () => {
        window.location.href = '/contact';
      },
    },
    secondaryButton: {
      text: 'See Our Work',
      icon: 'Eye',
      action: () => {
        window.location.href = '/portfolio';
      },
    },
    trustIndicator: {
      text: 'Trusted by 100+ Businesses',
      icon: 'CheckCircle',
    },
  };

  return (
    <>
      <HeroSection {...heroProps} />

      {/* Quote Block Section */}
      <Section>
        <div className="container-custom py-8">
          <QuoteBlock
            text="Need a customized Software Development Company for your Business?"
            isHeading={true}
          />
          <div className="mt-6 space-y-4 text-base text-muted-foreground">
            <p>
              We provide tailored <a href="/erpnext-services-in-uae" className="text-primary underline hover:text-primary/80" target="_blank" rel="noopener noreferrer">custom software development</a> and enterprise software implementation services designed to meet your unique business needs. As a trusted software development company, we deliver scalable solutions that support critical operations, integrate with mobile apps and third-party software, adopt advanced technologies, and align with your long-term business objectives.
            </p>
            <p>
              Our custom software development approach ensures your solution is crafted to solve specific challenges. We align with your business processes to deliver software that streamlines workflow, improves productivity, and enhances overall efficiency.
            </p>
          </div>
        </div>
      </Section>

      {/* Software Development Services Section */}
      <Section useGradient>
        <div className="container-custom py-8" id="sd-cards">
          <h2 className="text-center text-2xl font-bold mb-8 relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2">Software Development Services</h2>
          <ServiceFlipCards cards={serviceCards} />
        </div>
      </Section>

      {/* Software Development Stages (Hex Grid) */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-center text-2xl font-bold mb-8 relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2">Software Development Stages</h2>
          <div className="relative w-full flex justify-center mb-8">
            <img
              src="/api/fb/n/files/dotted-wave.svg"
              alt="bg-wave"
              width={800}
              height={60}
              className="w-full h-12 object-contain opacity-60"
            />
          </div>
          <HexProcessGrid steps={processSteps} />
        </div>
      </Section>

      {/* Software Development Methodology Section */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-center text-2xl font-bold mb-8 relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2">Software Development Methodology</h2>
          <FeatureGrid features={methodologyFeatures} />
        </div>
      </Section>

      {/* Our Collaborative and Client-Centric Approach */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-center text-2xl font-bold mb-8 relative inline-block after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2">Our Collaborative and Client-Centric Approach</h2>
          <ApproachFeatureGrid features={approachFeatures} />
        </div>
      </Section>

      {/* Conclusion Section with CTA */}
      <Section>
        <div className="container-custom py-8">
          <CTA data={ctaData} />
        </div>
      </Section>
    </>
  );
}
