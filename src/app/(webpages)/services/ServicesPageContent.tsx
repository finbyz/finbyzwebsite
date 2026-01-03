'use client'
import React, { useState } from 'react';
import {
  ArrowRight, CheckCircle, Code, Headphones, Users, Wrench, Zap, Brain,
  Database, Cloud, TrendingUp, Settings, Lightbulb, Target, Shield, BarChart,
  Rocket, GitBranch, Globe
} from 'lucide-react';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import List from '@/components/sections/list';
import PrivacySectionHeading from '@/components/ai_components/PrivacySectionHeading';
import PrivacySubsectionHeading from '@/components/ai_components/PrivacySubsectionHeading';
import { Mail, MapPin } from 'lucide-react';
import Benefits from '@/components/sections/benefits';
import Image from 'next/image';

export default function ServicesPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thank you! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sectionHeading =
    'text-3xl md:text-4xl font-bold text-[#1A5276] mb-6 text-center';
  const sectionDesc =
    'text-lg text-slate-700 leading-relaxed mb-12 max-w-4xl mx-auto text-justify';



  return (
    <div className="min-h-screen bg-white text-slate-700">
      {/* Hero Section */}
      <HeroSection
        headline="Comprehensive Technology Services"
        highlightWords={["Technology", "Services"]}
        description="Optimize your business operations with tailored technology
            solutions from Finbyz Tech. We help you enhance efficiency, reduce
            costs, and scale with confidence."
        primaryButton={{
          text: 'Get Started',
          action: () => {
            const el = document.getElementById('overview');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        secondaryButton={{
          text: 'Contact Support',
          action: () => {
            window.location.href = './contact';
          },
        }}
        heroImage={{
          alt: ' Services ',
          src: "/images/services.jpeg",
          videoSrc: undefined,
        }}
      />

      {/* Overview */}
      <Section id="overview">
        <div className="container-custom py-12">
          {/* Main Heading */}
          <h2 className="text-3xl font-bold text-[#1A5276] mb-6">
            Empowering Businesses Through Technology
          </h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            At <span className="font-semibold text-gray-900">Finbyz Tech</span>, we help businesses harness the power of
            modern technology — from ERP systems to automation — enabling smarter operations,
            seamless collaboration, and sustainable growth.
          </p>

          {/* Subsections one below another */}
          <div className="space-y-10">
            {/* Section 1 */}
            <div className="animate-fade-up">
              <h3 className="text-2xl font-semibold text-[#1A5276] mb-3">
                Digital Transformation with ERPNext
              </h3>
              <p className="text-slate-700 text-base md:text-lg text-justify leading-relaxed">
                We implement <span className="font-semibold text-gray-900">ERPNext</span> to unify your business processes
                — accounting, inventory, HR, CRM, and more — into one seamless system.
                Our approach focuses on efficiency, scalability, and automation, empowering your teams
                to work smarter with real-time visibility and data-driven insights.
              </p>
            </div>

            {/* Section 2 */}
            <div className="animate-fade-up">
              <h3 className="text-2xl font-semibold text-[#1A5276] mb-3">
                Smart Automation & AI Integration
              </h3>
              <p className="text-slate-700 text-base md:text-lg text-justify leading-relaxed">
                We integrate <span className="font-semibold text-gray-900">AI-powered automation</span> and
                process optimization tools to reduce manual workloads, enhance accuracy,
                and improve decision-making. From predictive analytics to chatbots and
                workflow automation, we help your business evolve faster.
              </p>
            </div>

            {/* Section 3 */}
            <div className="animate-fade-up">
              <h3 className="text-2xl font-semibold text-[#1A5276] mb-3">
                Custom Software Development
              </h3>
              <p className="text-slate-700 text-base md:text-lg text-justify leading-relaxed">
                Every business is unique. Our development team builds
                <span className="font-semibold text-gray-900"> tailor-made applications</span>
                that align with your goals, whether it’s a custom ERP module, mobile app,
                or data management platform — ensuring reliability, scalability, and security.
              </p>
            </div>

            {/* Section 4 */}
            <div className="animate-fade-up">
              <h3 className="text-2xl font-semibold text-[#1A5276] mb-3">
                Continuous Support & Innovation
              </h3>
              <p className="text-slate-700 text-base md:text-lg text-justify leading-relaxed">
                Technology never stands still — and neither do we. Our
                <span className="font-semibold text-gray-900"> dedicated support team</span>
                provides regular system updates, proactive monitoring, and expert consultation
                to ensure your digital ecosystem grows alongside your business.
              </p>
            </div>
          </div>
        </div>
      </Section>



      <Section>
        <div className="py-8">
          <Benefits
            data={{
              component_type: 'Card',
              title: 'Overcoming ERP Implementation Challenges',
              benefits: [
                {
                  suffix: '',
                  label: '',
                  header: 'Dedicated Development Team',
                  description:
                    'We provide dedicated ERP developers who work as an extension of your team. Our experts bring deep functional and technical knowledge, ensuring your custom ERP solution aligns perfectly with your business goals.',
                  icon: 'Code',
                  palette: {
                    iconBg: '#eef2ff',
                    iconColor: '#1A5276'
                  }
                },
                {
                  suffix: '',
                  label: '',
                  header: 'Data Architecture',
                  description:
                    'We design scalable, secure, and efficient database architectures that maintain data integrity and performance. Our structured approach ensures reliability, flexibility, and smooth future enhancements.',
                  icon: 'Database',
                  palette: {
                    iconBg: '#eef2ff',
                    iconColor: '#1A5276'
                  }
                },
                {
                  suffix: '',
                  label: '',
                  header: 'System Integration',
                  description:
                    'We seamlessly integrate ERP systems with CRMs, eCommerce, HR, and accounting software using APIs, webhooks, and microservices for efficient data flow across all platforms.',
                  icon: 'Layers',
                  palette: {
                    iconBg: '#eef2ff',
                    iconColor: '#1A5276'
                  }
                },
                {
                  suffix: '',
                  label: '',
                  header: 'Custom Features',
                  description:
                    'Our team builds features tailored to your unique processes and workflows, ensuring the system supports your operational efficiency and business scalability.',
                  icon: 'Settings',
                  palette: {
                    iconBg: '#eef2ff',
                    iconColor: '#1A5276'
                  }
                },
                {
                  suffix: '',
                  label: '',
                  header: 'Scalability & Performance',
                  description:
                    'We architect ERP systems with cloud-ready, microservice-based frameworks that ensure scalability and optimal performance even as your business expands globally.',
                  icon: 'TrendingUp',
                  palette: {
                    iconBg: '#eef2ff',
                    iconColor: '#1A5276'
                  }
                },
                {
                  suffix: '',
                  label: '',
                  header: 'Security & Compliance',
                  description:
                    'Our ERP systems adhere to global standards including GDPR and SOC2. We use secure coding practices, encryption, and RBAC to protect your sensitive business data.',
                  icon: 'Lock',
                  palette: {
                    iconBg: '#eef2ff',
                    iconColor: '#1A5276'
                  }
                }
              ]
            }}
          />
        </div>
      </Section>


      {/* Benefits */}
      <Section>
        <div className="py-8">
          <Benefits
            data={{
              component_type: 'Card',
              title: 'Key Benefits of Our Solutions',
              benefits: [
                {
                  suffix: '',
                  // label: 'End-to-End Visibility',
                  label: '',
                  header: 'Unified Operations',
                  description: 'Centralize all operations from procurement and production to sales and finance, ensuring clarity at every level.',
                  icon: 'Eye',
                  palette: {
                    iconBg: '#fff7ed',
                    iconColor: '#ea580c'
                  }
                },
                {
                  suffix: '',
                  label: '',
                  header: 'Consistent Quality',
                  description: 'Maintain quality standards with automated checks and optimized processes.',
                  icon: 'CalendarClock',
                  palette: {
                    iconBg: '#fff7ed',
                    iconColor: '#ea580c'
                  }
                },
                {
                  suffix: '',
                  // label: 'Precision Inventory Control',
                  label: '',
                  header: 'Maximize Profits',
                  description: 'Identify cost-saving opportunities and increase efficiency across all processes.',
                  icon: 'Database',
                  palette: {
                    iconBg: '#fff7ed',
                    iconColor: '#ea580c'
                  }
                },
                {
                  suffix: '',
                  // label: 'Cost Reduction',
                  label: '',
                  header: 'Grow with Ease',
                  description: 'Expand your systems seamlessly as your business scales.',
                  icon: 'Activity',
                  palette: {
                    iconBg: '#fff7ed',
                    iconColor: '#ea580c'
                  }
                },

              ]
            }}
          />
        </div>
      </Section>
      <Section>
        <div className="py-8">
          <CTA
            data={{
              subheading: { text: 'Our Services', icon: 'Rocket' },
              title: 'Interested in Our Services?',
              highlightText: 'Services',
              description: "Let Finbyz Tech help you weave a future of efficiency, profitability, and sustainable growth with an integrated ERPNext solution .",
              primaryButton: {
                text: 'Talk to Our ERP Experts',
                icon: 'MessageCircle',
                action: 'https://finbyz.tech/contact',
              },
              secondaryButton: {
                text: 'Book a Consultation',
                icon: 'Calendar',
                action: 'https://finbyz.tech/contact',
              },
              trustIndicator: {
                text: '200+ ERPNext Projects | 7000+ Users | 12+ Countries',
                icon: 'CheckCircle',
              }
            }}
          />
        </div>
      </Section>


    </div>
  );
}
