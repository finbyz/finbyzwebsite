'use client'
import React, { useState } from 'react';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import List from '@/components/sections/list';
import PrivacySectionHeading from '@/components/ai_components/PrivacySectionHeading';
import PrivacySubsectionHeading from '@/components/ai_components/PrivacySubsectionHeading';
import { Mail, MapPin } from 'lucide-react';
import Benefits from '@/components/sections/benefits';
import Image from 'next/image';
import DynamicHero from '@/components/sections/dynamic-hero';
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Shield,
  Zap,
  Users,
  Settings,
  TrendingUp,
  Layers,
  Lock,
  Clock,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function CustomERPDevelopment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState(null);

  const accent = "#1A5276";

  

  const industries = [
    { title: 'Chemical', image: '/images/nav-chemical.svg', alt: 'Chemical', description: '', link: '/erp-for-chemical-industry' },
    { title: 'Engineering', image: '/images/nav-engineering.svg', alt: 'Engineering', description: '', link: '/erp-for-engineering-industry' },
    { title: 'Logistics', image: '/images/nav-logistics.svg', alt: 'Logistics', description: '', link: '/erp-for-logistics-industry' },
    { title: 'Manufacturing', image: '/images/nav-manufacturing.svg', alt: 'Manufacturing', description: '', link: '/erp-for-manufacturing-industry' },
    { title: 'Agro Commodity', image: '/images/nav-agro.svg', alt: 'Agro Commodity', description: '', link: '/erp-for-agro-commodity' },
    { title: 'Trading', image: '/images/nav-trading.svg', alt: 'Trading', description: '', link: '/erp-for-trading-industry' },
    { title: 'Textile', image: '/images/yarn.svg', alt: 'Textile', description: '', link: '/erp-for-textile-industry' },
    { title: 'Services', image: '/images/nav-services.svg', alt: 'Services', description: '', link: '/erpnext-service-provider' },
    { title: 'Real Estate', image: '/images/icon-business-app.svg', alt: 'Real Estate', description: '', link: '' },
    { title: 'Ceramics', image: '/images/Ceramics.svg', alt: 'Ceramics', description: '', link: '' }
  ];

  

  const faqs = [
    {
      question: "What is Custom ERP Development?",
      answer:
        "It’s the process of designing an ERP system tailored specifically to your workflows, ensuring perfect fit and scalability for your organization.",
    },
    {
      question: "How long does ERP development take?",
      answer:
        "It depends on scope and complexity — smaller systems take 3–6 months, while enterprise-grade implementations can take 9–18 months.",
    },
    {
      question: "Do you integrate ERP with existing systems?",
      answer:
        "Yes, we specialize in integrating ERP with CRMs, eCommerce, accounting software, and more using APIs and secure data connections.",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you! We’ll get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
//   const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);
  

  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <Section>
        <DynamicHero
          headline="Custom ERP Development"
          highlightWords={[ "Custom", "Development"]}
          description="Build a fully tailored ERP system with Finbyz Tech — designed to
            streamline operations, enhance efficiency, and scale with your
            business."
          heroImage={{
            alt: "Custom ERP Development",
            src: "/images/custom-erp.jpeg",
          }}
          primaryButton={{
            text: "Get Started",
            action: () => {
              const el = document.getElementById('overview');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          secondaryButton={{
            text: "Learn More",
            action: () => {
              const el = document.getElementById('overview');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          accentColor="orange"
        />
      </Section>

      {/* Why Choose Section */}
      <section className="py-12 bg-white" id="overview">
        <div className="max-w-7xl mx-14 px-6">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-8">
            Why Choose Finbyz Tech?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "End-to-end ERP solutions — from consulting to support",
              "Proven track record across diverse industries",
              "Cloud-native, scalable and secure architecture",
              "Agile development with transparent communication",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-[#1A5276] p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <p className="text-white">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="erp-overview" className="py-16 bg-gray-50">
  <div className="max-w-6xl px-6 mx-14">
    <h2 className="text-3xl font-bold text-[#1A5276] mb-8">
      ERP Development Lifecycle
    </h2>

    <div className="space-y-12">
      {[
        {
          title: "1. Business Process Analysis",
          description:
            "We begin by analyzing your organization’s workflows, challenges, and technology landscape. This phase involves deep consultation with stakeholders to ensure your ERP solution supports every core operation efficiently.",
        },
        {
          title: "2. System Architecture Design",
          description:
            "Our architects create a scalable blueprint using modular design and microservices. This ensures flexibility, maintainability, and smooth integration with future business applications.",
        },
        {
          title: "3. Custom Development",
          description:
            "Using agile methodology, we build and test modules in sprints. This iterative approach allows continuous feedback and faster feature delivery with precision.",
        },
        {
          title: "4. Integration & Testing",
          description:
            "We integrate the ERP with your existing systems — CRM, accounting, HRMS, or eCommerce — ensuring seamless data flow. Rigorous testing guarantees stability and performance under real-world conditions.",
        },
        {
          title: "5. Deployment & Training",
          description:
            "After deployment, we provide extensive training for your team, helping them adopt the system with confidence. We ensure a smooth go-live experience with zero downtime.",
        },
        {
          title: "6. Ongoing Support & Maintenance",
          description:
            "Our dedicated support ensures updates, performance tuning, and new feature additions as your business evolves — keeping your ERP future-ready.",
        },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-start space-y-3">
          <h3 className="text-[#1A5276] text-2xl font-semibold">
            {item.title}
          </h3>
          <p className="text-slate-700 text-justify">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</Section>


{/* Technology Stack */}
<Section id="tech-stack" className="py-16 bg-white">
  <div className="container-custom text-center">
    <h2 className="text-3xl font-bold text-[#1A5276] mb-6">
      Our Technology Expertise
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      Finbyz Tech builds ERP systems on robust, modern frameworks ensuring
      scalability, security, and flexibility across cloud and on-premise setups.
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
      {[
        "Python", "Frappe", "ERPNext", "MariaDB", "React", "REST API",
        "Docker", "Redis", "AWS", "Nginx", "GitHub Actions", "Kubernetes"
      ].map((tech, i) => (
        <div key={i} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
          <p className="text-[#1A5276] font-semibold">{tech}</p>
        </div>
      ))}
    </div>
  </div>
</Section>

{/* Development Process */}
<Section id="process" className="py-16 bg-gray-50">
  <div className="container-custom text-center">
    <h2 className="text-3xl font-bold text-[#1A5276] mb-8">
      Our ERP Development Process
    </h2>
    <div className="grid md:grid-cols-3 gap-8 text-left">
      {[
        {
          title: "Discovery & Planning",
          icon: <Globe className="w-10 h-10 text-[#1A5276]" />,
          desc: "We define project goals, timelines, and deliverables aligned with your business objectives.",
        },
        {
          title: "Agile Development",
          icon: <Code className="w-10 h-10 text-[#FF6F61]" />,
          desc: "We use agile sprints for continuous feedback and iteration ensuring adaptability and transparency.",
        },
        {
          title: "Launch & Optimization",
          icon: <TrendingUp className="w-10 h-10 text-[#4CAF50]" />,
          desc: "After deployment, we monitor KPIs and optimize performance for sustained business growth.",
        },
      ].map((step, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-center mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold text-black mb-2 text-center">{step.title}</h3>
          <p className="text-gray-900 text-center">{step.desc}</p>
        </div>
      ))}
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

      <Section useGradient className="py-16">
  <div className="container-custom">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-[#1A5276]">
      Industries We Serve with <span className="text-primary">Expert ERPNext Solutions</span>
    </h2>

    {/* Paragraph with scroll animation */}
    <motion.p
      className="mb-12 text-gray-700 text-center max-w-3xl mx-auto text-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      As a trusted ERPNext Implementation Partner globally, FinByz Tech serves diverse industries with custom ERPNext solutions. Our ERPNext service providers design systems that meet unique operational needs across sectors.
    </motion.p>

    {/* Industries Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
      {industries.map((industry, idx) => (
        <a
          key={idx}
          href={industry.link || undefined}
          className="group relative flex flex-col items-center justify-center 
                     bg-gray-100 rounded-full shadow-md 
                     transition-all duration-500 
                     hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] 
                     w-40 h-40"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-full bg-white opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-md"></div>

          {/* Icon */}
          <div className="w-20 h-20 mb-3 relative z-10 flex items-center justify-center">
            <Image src={industry.image} alt={industry.alt} width={500} height={500} className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110" title={industry.alt} />
          </div>

          {/* Title */}
          <span className="text-sm sm:text-base font-semibold text-gray-800 relative z-10 text-center leading-snug transition-colors duration-300 group-hover:text-primary px-2">
            {industry.title}
          </span>
        </a>
      ))}
    </div>
  </div>
</Section>

      {/* FINAL CTA SECTION */}
      <Section>
        <div className="py-8">
          <CTA
            data={{
              subheading: { text: 'Ready to Customize your ERP?', icon: 'Rocket' },
              title: 'Start Your Custom ERP Development Journey',
              highlightText:'ERP',
              description: "Contact us today to discuss your requirements and discover how our custom ERP experts can help you achieve operational excellence.",
              primaryButton: {
                text: 'Talk to Our ERP Experts',
                icon: 'MessageCircle',
                action: 'https://finbyz.tech/contact',
              },
              secondaryButton: {
                text: 'Learn More',
                icon: 'Calendar',
                action: () => {
                  const el = document.getElementById('overview');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
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
