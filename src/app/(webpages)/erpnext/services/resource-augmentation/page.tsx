'use client';

import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';


export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <DynamicHero
        headline="ERPNext Resource Augmentation Hire Expert Developers"
        highlightWords={["Resource Augmentation", "Expert Developers"]}
        description="Bridge skill gaps and accelerate projects with expert ERPNext resource augmentation. Access certified consultants, developers, and functional experts for flexible, scalable team expansion."
        heroImage={{
          alt: 'ERPNext Resource Augmentation Hire Expert Developers',
          // src: '/web-api/fb/n/files/placeholder.jpg',
          src:'/images/resource-augmentation.png',
        }}
        primaryButton={{ text: 'Get Started',action: 'https://finbyz.tech/contact' }}
        secondaryButton={{ text: 'Learn More' , action: () => {
          const el = document.getElementById('erpnext-resource');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        },}}
        accentColor="orange"
      />

      {/* OVERVIEW SECTION */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Overview</h2>
          <p className="text-lg text-black leading-relaxed" id="erpnext-resource">
            Elevate your projects with Finbyz Tech's ERPNext resource augmentation services. Our goal is to empower organizations to swiftly address skill gaps, meet pressing project deadlines, and optimize operational costs through flexible engagement models. We offer scalable access to certified ERPNext consultants, developers, and functional experts who seamlessly integrate with your current teams, drive operational efficiency, and accelerate your digital transformation journey. By leveraging our domain expertise and robust resource pool, businesses of any size can minimize recruitment overheads and ensure timely, high-quality delivery—making ERPNext resource augmentation a strategic advantage in today’s competitive business landscape.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <TextSection
        data={{
          component_type: 'Text',
          title: 'Scale Your Team, Accelerate Your Projects with Expert ERPNext Resource Augmentation',
          paragraphs: [
            "In today's dynamic business landscape, achieving digital transformation and operational excellence often hinges on having the right talent at the right time. However, building and maintaining an in-house team with specialized skills, especially in complex areas like ERPNext implementation and customization, can be challenging and costly. This is where ERPNext Resource Augmentation becomes a strategic imperative.",
            "Finbyz Tech offers a robust solution: providing scalable access to certified ERPNext resources and technology experts to seamlessly augment your internal teams. Whether you need to bridge a temporary skill gap, accelerate project timelines, or manage fluctuating workload demands, our flexible resource augmentation services empower your business to thrive without the overheads of traditional hiring."
          ]
        }}
      />

      {/* WHAT IS ERPNext RESOURCE AUGMENTATION (SIDE ILLUSTRATION) */}
      <TextSection
        data={{
          component_type: 'Text',
          title: 'What is ERPNext Resource Augmentation?',
          paragraphs: [
            'Resource augmentation is a strategic outsourcing model where external professionals are temporarily or long-term integrated into your existing team to enhance specific capabilities or capacity. For ERPNext, this means bringing in highly skilled consultants, developers, and functional experts who possess deep knowledge of the platform and various industry verticals. They work under your direction, becoming an extension of your team, ensuring project continuity and specialized expertise without the commitment of permanent employment.'
          ],
        }}
      />

      {/* WHY CHOOSE RESOURCE AUGMENTATION? (BENEFITS) */}
      <div className='py-8'>
      <Benefits
        data={{
          component_type: 'Card',
          title: 'Why Choose Resource Augmentation for Your ERPNext Initiatives?',
          benefits: [
            {
              header: 'Access to Specialized Expertise',
              // description: 'Gain immediate access to certified ERPNext professionals (consultants, developers, QA, project managers) with years of cross-industry experience. Finbyz Tech brings over 10 years of ERP implementation and consulting expertise, backed by 30+ skilled resources.',
              description: "Decade of expertise in delivering cutting-edge solutions",
              icon: 'UserCheck',
              palette: {
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-600',
              },
              number: 10,
              suffix: '+',
              label: 'Years',
            },
            {
              header: 'Enhanced Flexibility & Scalability',
              // description: 'Scale your team up or down as needed, avoiding the delays and commitment associated with traditional hiring and offboarding.',
              description:'Easily scale your team on demand without the delays of traditional hiring.',
              icon: 'Move',
              palette: {
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-600',
              },
              number: 30,
              suffix: '+',
              label: 'Resources',
            },
             {
              header: 'Reduced Recruitment Overhead',
              // description: 'Eliminate time-consuming talent acquisition so your HR and management teams can focus on strategic priorities.',
              description:'Free up HR and management to focus on strategy, not talent acquisition.',
              icon: 'UserMinus',
              palette: {
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-600',
              },
              number: 7000,
              suffix: '+',
              label: 'Users Served',
            },
           
            {
              header: 'Accelerated Project Delivery',
              description: 'Dedicated experts mean your projects move faster, helping you hit deadlines and go to market sooner.',
              icon: 'Rocket',
              palette: {
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-600',
              },
              number: 200,
              suffix: '+',
              label: 'Projects',
            },
             {
              header: 'Cost Efficiency',
              // description: 'Cut recruitment, training, and infrastructure costs. Only pay for the expertise you need—no more, no less.',
              description:'Reduce hiring and overhead costs—pay only for the expertise you need.',
              icon: 'DollarSign',
              palette: {
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-600',
              },
              number: 20,
              suffix: '%',
              label: 'Savings',
            },
           
            {
              header: 'Focus on Core Business',
              description: 'Let ERPNext experts handle the tasks while your team focuses on innovation and growth.',
              icon: 'Layers',
              palette: {
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-600',
              },
              number: 12,
              suffix: '+',
              label: 'Countries',
            },
            {
              header: 'Mitigate Project Risks',
              description: 'Overcome ERPNext challenges confidently with expert guidance and proven best practices.',
              icon: 'ShieldCheck',
              palette: {
                iconBg: 'bg-orange-100',
                iconColor: 'text-orange-600',
              },
              number: 1,
              suffix: 'st',
              label: 'Certified Partner',
            }
          ],
        }}
      /></div>

      {/* FINBYZ TECH'S EXPERTISE (FEATURE HIGHLIGHTS) */}
      <div className='py-8'>
      <ResponsiveCardGrid
        data={{
          title: "Finbyz Tech's Unmatched Expertise in ERPNext Resource Augmentation",
          subtitle: '',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'End-to-End ERPNext Implementation',
              description: 'From consultation and system design to data migration, customization, and go-live support, our resources cover all phases.',
              icon: 'Shield',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Custom Software Development',
              description: 'Tailored ERPNext solutions or bespoke applications that integrate seamlessly with your business.',
              icon: 'Cpu',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'Industry-Specific Modules',
              description: 'Expertise in Chemical Manufacturing, EXIM, Metal Foundry, Logistics, and more for domain-relevant outcomes.',
              icon: 'Globe',
              iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'AI-Driven Automation',
              description: 'Integrate AI solutions like AI-CRM, Resume Ranker, and Follow-up Buddy to amplify productivity.',
              icon: 'Zap',
              iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 5,
              title: 'Web & Mobile Applications',
              description: 'Developing responsive, user-centric extensions that expand ERPNext’s functionality anywhere.',
              icon: 'Monitor',
              iconColor: "#ffffff",
              iconBg: "#FF3333",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 6,
              title: 'Data Analytics',
              description: 'Leverage ERPNext data for actionable business intelligence and informed decision-making.',
              icon: 'BarChart3',
              iconColor: "#ffffff",
              iconBg: "#FFB347",
              className: 'border-none hover:shadow-xl transition-all',
            }
          ],
        }}
      /></div>

      {/* WHO CAN BENEFIT SECTION (LIST) */}
      <div className='py-8'>
      <ResponsiveCardGrid
        data={{
          title: 'Who Can Benefit from Our Resource Augmentation Services?',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'Startups & SMEs',
              description: 'Quickly implement or customize ERPNext without the need for a large in-house team or heavy upfront investment.',
              icon: 'Rocket',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Large Enterprises',
              description: 'Access niche skills for complex modules, integrations, and large-scale deployments, while maintaining business continuity.',
              icon: 'Building',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'IT Consulting Firms',
              description: 'Scale project teams rapidly for client engagements or to access specialized ERPNext domain expertise.',
              icon: 'Users',
              iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'Businesses with Fluctuating Workloads',
              description: 'Easily manage peak periods, short-term projects, or flexible development phases with on-demand talent.',
              icon: 'Repeat',
              iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 5,
              title: 'Organizations Facing Skill Gaps',
              description: 'Bridge critical functional or technical knowledge gaps within your current staff—permanently or temporarily.',
              icon: 'Settings2',
              iconColor: "#ffffff",
              iconBg: "#FF3333",
              className: 'border-none hover:shadow-xl transition-all',
            },
          ],
        }}
      /></div>

      {/* OUR SEAMLESS AUGMENTATION PROCESS (STEP LIST) */}
      <div className='py-8'>
      <ResponsiveCardGrid
        data={{
          title: 'Our Seamless Augmentation Process',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'Understand Your Needs',
              description: 'We start by understanding your project scope, required skill sets, duration, and budget for a customized approach.',
              icon: 'SearchCheck',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Resource Matching',
              description: 'Our experts identify and recommend the perfect ERPNext consultant or developer to fit your project and team culture.',
              icon: 'Users',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'Onboarding & Integration',
              description: 'Smooth integration with your existing team and workflows, ensuring the resource is up to speed from day one.',
              icon: 'UserPlus',
              iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'Ongoing Support',
              description: 'Continuous communication and support to ensure success for both your business and our deployed resource.',
              icon: 'LifeBuoy',
              iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            }
          ],
        }}
      /></div>

      {/* WHY FINBYZ TECH IS YOUR TRUSTED PARTNER (LIST) */}
      <div className='py-8'>
      <ResponsiveCardGrid
        data={{
          title: 'Why Finbyz Tech is Your Trusted Augmentation Partner',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'Proven Expertise',
              description: 'A decade of experience and hundreds of successful ERPNext projects showcase our capabilities.',
              icon: 'Medal',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Certified Professionals',
              description: 'Our team members are not only skilled, but fully certified ERPNext specialists.',
              icon: 'UserCheck2',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'Flexible Engagement Models',
              description: 'Choose hourly or project-based models to suit your business needs and budget.',
              icon: 'CalendarRange',
              iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'Domain-Specific Knowledge',
              description: 'Specialization in Chemical, Pharma, Metal Casting, EXIM, Logistics, and more for industry-aligned results.',
              icon: 'ActivitySquare',
              iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 5,
              title: 'Innovation at Core',
              description: 'Benefit from our AI automations and proprietary modules that enhance ERPNext’s value.',
              icon: 'WandSparkles',
              iconColor: "#ffffff",
              iconBg: "#FF3333",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 6,
              title: 'Client-Centric Approach',
              description: 'Your project success is our priority—expect clear communication, transparency, and dedicated support.',
              icon: 'Handshake',
              iconColor: "#ffffff",
              iconBg: "#FFB347",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 7,
              title: 'ISO 27001:2013 Certified',
              description: 'We are recognized for our quality and data security, providing peace of mind for every engagement.',
              icon: 'ShieldCheck',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            }
          ],
        }}
        /></div>
    </>
  );
}
