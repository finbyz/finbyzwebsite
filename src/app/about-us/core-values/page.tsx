'use client';

import DynamicHero from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/text';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import TextSection from '@/components/sections/text';

import { Lightbulb, Users, ShieldCheck, BookOpenCheck, Zap } from 'lucide-react';
import React from 'react';

const overviewText = `Finbyz Tech's core values form the cornerstone of how we help clients navigate digital transformation. Our unwavering commitment to excellence, innovation, and integrity has empowered organizations to embrace change, adopt powerful technology, and unlock new opportunities for growth. By cultivating strong partnerships grounded in transparency and respect, fostering deep domain expertise, and engineering future-ready solutions, we ensure every client benefits from a truly consultative approach. Explore our foundational principles and see how they fuel operational efficiency, client success, and transformative results across industries.`;

const valuesGrids = [
  {
    title: 'Innovation & Scalability',
    subtitle: 'Building for Tomorrow, Today',
    cards: [
      {
        id: 1,
        title: 'Adaptable ERP & AI Solutions',
        description:
          'Industry-specific ERPNext modules and advanced AI automations designed to evolve with your business. From Chemical Manufacturing to EXIM and AI-CRM integration, our solutions enable seamless, disruption-free expansion.',
        icon: 'Zap',
         iconColor: "#ffffff",
         iconBg: "#1A5276",
      },
      {
        id: 2,
        title: 'Continuous Improvement',
        description:
          'Relentless R&D delivers proprietary tools like Productify and an array of marketplace apps, ensuring you benefit from cutting-edge technology and the most effective digital tools.',
        icon: 'RotateCw',
       iconColor: "#ffffff",
       iconBg: "#FF8C00",
      },
      {
        id: 3,
        title: 'Future-Proof Engineering',
        description:
          'Solutions built for adaptability ensure your tech stack remains relevant and powerful as your business faces new challenges and embraces new markets.',
        icon: 'Cpu',
        iconColor: "#ffffff",
        iconBg: "#27AE60",
      },
      {
        id: 4,
        title: 'Marketplace Extensions',
        description:
          'Custom apps and integrations extend ERPNext’s capabilities, giving you tools tailored to evolving business needs and competitive growth.',
        icon: 'Layers',
        iconColor: "#ffffff",
        iconBg: "#8E44AD",
      }
    ]
  },
  {
    title: 'Collaboration',
    subtitle: 'Your Vision, Our Expertise',
    cards: [
      {
        id: 5,
        title: 'Team-First Problem Solving',
        description:
          'A synergistic, multidisciplinary team of 30+ ERP consultants and developers tackles complex challenges, ensuring solutions are comprehensive and precise.',
        icon: 'Users',
        iconColor: "#ffffff",
        iconBg: "#1A5276",
      },
      {
        id: 6,
        title: 'Client-Centric Engagement',
        description:
          'Over 200 ERPNext projects rooted in deep client collaboration. We prioritize your vision, strategize together, and deliver tailored results.',
        icon: 'Handshake',
       iconColor: "#ffffff",
       iconBg: "#FF8C00",
      },
      {
        id: 7,
        title: 'Global Reach',
        description:
          'Clients in 12+ countries benefit from a culturally aware, responsive approach to digital transformation and tech partnership.',
        icon: 'Globe',
          iconColor: "#ffffff",
          iconBg: "#27AE60",
      },
      {
        id: 8,
        title: 'Feedback-Driven Iteration',
        description:
          'Client insights directly influence every project phase, ensuring the delivered solution aligns with your strategic objectives and operations.',
        icon: 'Repeat',
       iconColor: "#ffffff",
       iconBg: "#8E44AD",
      }
    ]
  },
  {
    title: 'Integrity & Respect',
    subtitle: 'Operating with Transparency and Trust',
    cards: [
      {
        id: 9,
        title: 'Ethical Operations',
        description:
          'Transparency from consultation to support—always clear about scope, cost, and timeline. No hidden charges, agendas, or surprises.',
        icon: 'ShieldCheck',
         iconColor: "#ffffff",
          iconBg: "#1A5276",
      },
      {
        id: 10,
        title: 'ISO 27001:2013 Certified',
        description:
          'Data security and operational integrity are paramount. Our certification demonstrates strict adherence to global compliance standards.',
        icon: 'Award',
         iconColor: "#ffffff",
         iconBg: "#FF8C00",
      },
      {
        id: 11,
        title: 'Respect for Stakeholders',
        description:
          'We value everyone we interact with—clients, partners, and team. Open communication and fair practices foster lasting trust.',
        icon: 'Heart',
       iconColor: "#ffffff",
       iconBg: "#27AE60",
      },
      {
        id: 12,
        title: 'Transparent Communication',
        description:
          'Open exchanges and honest updates keep your team confident and informed throughout the project life cycle.',
        icon: 'MessageCircle',
       iconColor: "#ffffff",
       iconBg: "#8E44AD",
      }
    ]
  },
  {
    title: 'Domain Expertise',
    subtitle: 'Deep Industry Knowledge for Targeted Solutions',
    cards: [
      {
        id: 13,
        title: 'Industry Specialization',
        description:
          'Expertise in Chemical, Pharma, Metal Casting, Engineering, EXIM, Logistics, and more. Our solutions anticipate and solve industry-specific challenges through targeted ERPNext modules.',
        icon: 'BookOpenCheck',
        iconColor: "#ffffff",
        iconBg: "#1A5276",
      },
      {
        id: 14,
        title: 'Real-World Application',
        description:
          'Our domain experts design systems based on practical business insights, ensuring immediate and measurable impact—whether batch management for chemicals or fleet operations for logistics.',
        icon: 'BarChart3',
        iconColor: "#ffffff",
        iconBg: "#FF8C00",
      },
      {
        id: 15,
        title: 'Targeted Customization',
        description:
          'Bespoke development and proprietary modules respond directly to your unique industry needs, for maximum efficacy and results.',
        icon: 'WandSparkles',
       iconColor: "#ffffff",
      iconBg: "#27AE60",
      },
      {
        id: 16,
        title: 'Functional Depth',
        description:
          'A hands-on understanding of workflows—from RoDTEP claim management to production control—unlocks specialized solutions for operational excellence.',
        icon: 'ClipboardList',
          iconColor: "#ffffff",
          iconBg: "#8E44AD",
      }
    ]
  },
  {
    title: 'Agile Digital Transformation',
    subtitle: 'Simplifying for Sustainable Growth',
    cards: [
      {
        id: 17,
        title: 'Streamlined Processes',
        description:
          'Our 10+ years of ERP experience reveal workflow inefficiencies and drive smooth, fast, cost-effective operations, freeing your team for key initiatives.',
        icon: 'Workflow',
       iconColor: "#ffffff",
       iconBg: "#1A5276",
      },
      {
        id: 18,
        title: 'Sustainable Impact',
        description:
          'By simplifying complex systems and automating tasks, we enable lasting improvement, reduced overhead, and empowered teams.',
        icon: 'TrendingUp',
        iconColor: "#ffffff",
        iconBg: "#FF8C00",
      },
      {
        id: 19,
        title: 'Incremental Value Delivery',
        description:
          'Agile rollouts make transformation less risky and more effective with measurable benefits at every stage.',
        icon: 'Activity',
        iconColor: "#ffffff",
        iconBg: "#27AE60",
      },
      {
        id: 20,
        title: 'Continuous Improvement Foundation',
        description:
          'Ongoing support and optimized system architecture set your business up for long-term success and profitability.',
        icon: 'Repeat2',
       iconColor: "#ffffff",
        iconBg: "#8E44AD",
      }
    ]
  }
];

const successCards = [
  {
    id: 21,
    title: 'Reduced Operational Costs',
    description:
      'Innovative ERPNext implementations and AI automations minimize manual effort and unnecessary expenses, delivering measurable cost savings.',
    icon: 'TrendingDown',
     iconColor: "#ffffff",
     iconBg: "#1A5276",
  },
  {
    id: 22,
    title: 'Enhanced Efficiency',
    description:
      'Expert-led, tailored solutions boost productivity from the shop floor to executive suite across your organization.',
    icon: 'Rocket',
     iconColor: "#ffffff",
     iconBg: "#FF8C00",
  },
  {
    id: 23,
    title: 'Strategic Growth',
    description:
      'Scalable systems and industry expertise give you the agility and confidence to seize new market opportunities.',
    icon: 'TrendingUp',
    iconColor: "#ffffff",
    iconBg: "#27AE60",
  },
  {
    id: 24,
    title: 'Reliable Partnership',
    description:
      'A transparent, values-driven relationship built on integrity ensures peace of mind and dedicated, ongoing support.',
    icon: 'Handshake',
    iconColor: "#ffffff",
    iconBg: "#8E44AD",
  }
];

const ctaData = {
  subheading: {
    text: 'Ready to transform?',
    icon: 'Zap'
  },
  title: 'Let\'s Build a Value-Driven Future Together',
  highlightText:'Future Together',
  description:
    'Connect with our experts today and discover how Finbyz Tech\'s core values deliver real business results. Experience partnership based on innovation, integrity, and client success.',
  primaryButton: {
    text: 'Get Started',
    action: 'https://finbyz.tech/contact',
    icon: 'Rocket'
  },
  secondaryButton: {
    text: 'Contact Us',
    action: 'https://finbyz.tech/contact',
    icon: 'Users'
  },
  trustIndicator: {
    text: 'Trusted by 7000+ ERPNext users',
    icon: 'Star'
  }
};

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <DynamicHero
          headline="Our Core Values Driving Innovation for Business Success"
          highlightWords={["Driving", "Innovation", "Business", "Success"]}
          description="Discover the foundational values that define our approach to IT consulting, ERPNext implementation, and AI automation. Experience innovation, integrity, and client success."
          primaryButton={{
            text: "Get Started",
            action: 'https://finbyz.tech/contact'
          }}
          secondaryButton={{
            text: "Learn More",
            action: () => { const el = document.getElementById('overview'); 
              if (el) el.scrollIntoView({ behavior: 'smooth' }); }
          }}
          heroImage={{
            alt: "Our Core Values Driving Innovation for Business Success",
            src: "/images/core-values.png",
    
          }}
          accentColor="orange"
        />
      </section>

      {/* Overview Section */}
      <section id="overview" className="w-full">
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">{overviewText}</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="w-full bg-transparent">
        <div className="container-custom py-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A5276] mb-6 animate-fade-in">Our Core Values: The Foundation of Your Digital Transformation</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            At Finbyz Tech, our journey since 2016 has been defined not just by the cutting-edge solutions we deliver, but by the unwavering values that guide every decision, every project, and every client interaction. We believe that true technological advancement is built on a strong ethical and cultural framework. Our core values are more than just words; they are the living principles that empower our team, foster innovation, and ensure your business achieves sustainable, impactful growth.
          </p>
        </div>
      </section>

      {/* Value Grids Sections */}
      {valuesGrids.map((section, idx) => (
        <section className="w-full bg-transparent" key={section.title}>
          <div className="container-custom py-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">{section.title}: <span className="text-3xl md:text-4xl font-bold mb-4 text-[#1A5276] animate-fadeIn">{section.subtitle}</span></h3>
           
          </div>
           <ResponsiveCardGrid
              className="animate-fade-in-up"
              data={{
                cards: section.cards.map(card => ({
                  ...card,
                  className: "border-none hover:shadow-xl transition-all"
                })),
                variant: 'iconCard',
                layout: 'standard',
                showImage: false
              }}
            />
        </section>
      ))}

      {/* How Our Values Translate to Your Success */}
      <section className="w-full bg-transparent">
        <div className="container-custom py-8">
          <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-[#1A5276] animate-fade-in">How Our Values Translate to Your Success</h3>
         
        </div>
         <ResponsiveCardGrid
            className="animate-fade-in-up"
            data={{
              cards: successCards.map(card => ({
                ...card,
                className: "border-none hover:shadow-xl transition-all"
              })),
              variant: 'iconCard',
              layout: 'standard',
              showImage: false
            }}
          />
      </section>

      {/* Closing Text / Experience the Finbyz Tech Difference */}
      <section className="w-full bg-transparent">
        <div className="container-custom py-8">
          <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-[#1A5276] animate-fade-in">Experience the Finbyz Tech Difference</h3>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
        Our values are the engine behind our decade of success, transforming businesses for over 7000 ERPNext users worldwide. We invite you to experience the difference that a value-driven technology partner can make.
           </p>
            <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
        Ready to build a future where technology and integrity drive your success? Connect with our experts today to discuss how our core values translate into exceptional results for your business.
           </p>
          {/* <TextSection
            data={{
              paragraphs: [
                ""
              ]
            }}
          /> */}
        </div>
      </section>
    </>
  );
}
