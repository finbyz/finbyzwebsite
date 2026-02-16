'use client';
import React from 'react';
import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import Comment from '@/components/sections/comment';
import CTA from '@/components/sections/cta';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <DynamicHero
        headline="Career Growth & Innovation at a Leading Tech Company"
        highlightWords={['Career', 'Growth', 'Innovation', 'Tech Company']}
        description="Explore dynamic career opportunities at a top ERPNext & AI automation firm. Join a team passionate about innovation, learning, and making a real business impact."
        heroImage={{
          alt: 'Career Growth & Innovation at a Leading Tech Company',
          src: '/images/why-join-finbyz.png',
        }}
        primaryButton={{ text: 'Get Started', action: '/careers/job-openings' }}
        secondaryButton={{
          text: 'Learn More', action: () => {
            const el = document.getElementById('why-join');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        accentColor="orange"
      />

      {/* OVERVIEW SECTION */}
      <section>
        <div className="container-custom py-8" id="why-join">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-6 animate-fade-in">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Discover a rewarding career path at Finbyz, a rapidly growing IT consulting and software development company. We offer unparalleled opportunities for professional development, exposure to cutting-edge technologies, and a collaborative, supportive work environment. As a leader in ERPNext and AI-powered automation, our team is dedicated to continuous learning and delivering impactful solutions for global clients. By joining Finbyz, you step into a culture that values initiative, innovation, and real business impact, giving you the tools and freedom to grow your skills and shape the future of digital transformation across diverse industries.
          </p>
        </div>
      </section>

      {/* WHY FINBYZ SECTION */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-6 animate-fade-in">Why Build Your Career at Finbyz?</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">At Finbyz, we don't just build software; we craft the future of business efficiency and digital transformation. As an ISO 27001:2013 Certified IT Consulting & Software Development Company and a Certified ERPNext Partner, we stand at the forefront of innovation. If you desire a career offering continuous learning, impactful projects, and a culture that truly values your contribution, your journey begins with Finbyz.</p>
        </div>
      </section>

      {/* CULTURE & VALUES SECTION */}
      <section>
        <div className="py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-6 animate-fade-in container-custom">A Culture of Innovation, Collaboration, and Impact</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify container-custom">Our foundation is built on a set of core values that define who we are and how we operate. When you join Finbyz, you become part of a team that thrives on values such as innovation, collaboration, integrity, and expertise.</p>
          <div className='py-8'>
            <ResponsiveCardGrid
              data={{
                title: 'Our Core Values in Action',
                cards: [
                  {
                    id: 1,
                    title: 'Innovation & Scalability',
                    description: 'Build adaptable, advanced ERP and AI solutions that push boundaries. Work on projects that challenge conventional thinking and set new industry standards.',
                    icon: 'Sparkles',
                    iconColor: "#ffffff",
                    iconBg: "#1A5276",
                    className: 'border-none hover:shadow-xl transition-all',
                  },
                  {
                    id: 2,
                    title: 'Collaboration',
                    description: 'Embrace a team-first, problem-solving approach. Your ideas are valued; your voice contributes to our collective success in an environment of knowledge sharing.',
                    icon: 'Users',
                    iconColor: "#ffffff",
                    iconBg: "#FF8C00",
                    className: 'border-none hover:shadow-xl transition-all',
                  },
                  {
                    id: 3,
                    title: 'Integrity & Respect',
                    description: 'Operate with ethical practices and transparency. Treat every team member, client, and partner with the utmost respect, building trust in every interaction.',
                    icon: 'ShieldCheck',
                    iconColor: "#ffffff",
                    iconBg: "#27AE60",
                    className: 'border-none hover:shadow-xl transition-all',
                  },
                  {
                    id: 4,
                    title: 'Domain Expertise',
                    description: 'Rely on strong functional knowledge in sectors like chemicals, EXIM, and logistics to deliver specialized, effective solutions and gain deep industry exposure.',
                    icon: 'Award',
                    iconColor: "#ffffff",
                    iconBg: "#8E44AD",
                    className: 'border-none hover:shadow-xl transition-all',
                  },
                  {
                    id: 5,
                    title: 'Agile Digital Transformation',
                    description: 'Simplify complex processes to enable sustainable growth for businesses. Be instrumental in driving transformative changes and seeing direct impact.',
                    icon: 'Activity',
                    iconColor: "#ffffff",
                    iconBg: "#FF3333",
                    className: 'border-none hover:shadow-xl transition-all',
                  },
                  {
                    id: 6,
                    title: 'Continuous Learning',
                    description: 'Experience a growth culture with internal workshops and knowledge sharing that help you push boundaries and advance professionally.',
                    icon: 'BookOpen',
                    iconColor: "#ffffff",
                    iconBg: "#FFB347",
                    className: 'border-none hover:shadow-xl transition-all',
                  },
                ],
                variant: 'iconCard',
                layout: 'standard',
                showImage: false,
              }}
            /></div>
        </div>
      </section>

      {/* IMPACT & INDUSTRIES SECTION */}
      {/* <section>
        <div className="py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-6 animate-fade-in container-custom">Work That Matters: Shaping Industries</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify container-custom">Imagine contributing to solutions that empower businesses in 12+ countries. With over 200 successful ERPNext projects and 7000+ ERPNext users served, your work at Finbyz directly impacts diverse industries and clients worldwide. This breadth ensures every project is unique, blending challenge and learning.</p>
          <ResponsiveCardGrid
            data={{
              title: 'Industries You Impact',
              cards: [
                {
                  id: 1,
                  title: 'Chemical',
                  description: '',
                  icon: 'FlaskConical',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 2,
                  title: 'Pharma',
                  description: '',
                  icon: 'Pill',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 3,
                  title: 'Metal Casting',
                  description: '',
                  icon: 'Hammer',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 4,
                  title: 'Engineering',
                  description: '',
                  icon: 'Cpu',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 5,
                  title: 'Ceramic',
                  description: '',
                  icon: 'Square',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 6,
                  title: 'Education',
                  description: '',
                  icon: 'GraduationCap',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 7,
                  title: 'FMCG',
                  description: '',
                  icon: 'ShoppingBag',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 8,
                  title: 'Healthcare',
                  description: '',
                  icon: 'HeartPulse',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 9,
                  title: 'Textile',
                  description: '',
                  icon: 'Layers',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 10,
                  title: 'Logistics',
                  description: '',
                  icon: 'Truck',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 11,
                  title: 'Agro',
                  description: '',
                  icon: 'Leaf',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 12,
                  title: 'Plastic',
                  description: '',
                  icon: 'Recycle',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 13,
                  title: 'Commodity Trading',
                  description: '',
                  icon: 'Repeat',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 14,
                  title: 'Export/Import (EXIM)',
                  description: '',
                  icon: 'Ship',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 15,
                  title: 'General Manufacturing',
                  description: '',
                  icon: 'Factory',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all',
                },
                {
                  id: 16,
                  title: 'Trading & Distribution',
                  description: '',
                  icon: 'Boxes',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all',
                },
              ],
              variant: 'iconCard',
              layout: 'standard',
              showImage: false,
            }}
          />
        </div>
      </section> */}

      {/* GROWTH & LEARNING SECTION */}
      <section>
        <div className="py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-6 animate-fade-in container-custom">Unparalleled Growth and Learning Opportunities</h2>
          <TextSection
            data={{
              paragraphs: [
                'Your career at Finbyz is a journey of continuous learning and professional advancement. We invest in our team, providing the tools and environment required to master cutting-edge technologies and develop high-demand expertise.'
              ]
            }}
          />
          <div className='py-8'>
            <ResponsiveCardGrid
              data={{
                title: 'Master the Future of Business Technology',
                cards: [
                  {
                    id: 1,
                    title: 'ERPNext Implementation',
                    description: 'Engage in end-to-end ERP deployments with intricate, industry-focused customizations that solve real-world challenges.',
                    icon: 'Database',
                    iconColor: "#ffffff",
                    iconBg: "#1A5276",
                    className: 'border-none hover:shadow-xl transition-all',
                  },
                  {
                    id: 2,
                    title: 'AI Automation',
                    description: 'Dive into AI-CRM Integration, Resume Ranker, Smarter Hiring, Call Feedback, and more. Revolutionize business processes with AI.',
                    icon: 'Brain',
                    iconColor: "#ffffff",
                    iconBg: "#FF8C00",
                    className: 'border-none hover:shadow-xl transition-all',
                  },
                  {
                    id: 3,
                    title: 'Custom Software Development',
                    description: 'Craft tailored automation and business process solutions, enhancing your skills in bespoke software architecture and development.',
                    icon: 'Code2',
                    iconColor: "#ffffff",
                    iconBg: "#27AE60",
                    className: 'border-none hover:shadow-xl transition-all',
                  },
                  {
                    id: 4,
                    title: 'Web & Mobile Applications',
                    description: 'Build responsive, user-centric web and mobile apps that deliver seamless digital experiences.',
                    icon: 'TabletSmartphone',
                    iconColor: "#ffffff",
                    iconBg: "#8E44AD",
                    className: 'border-none hover:shadow-xl transition-all',
                  },
                  {
                    id: 5,
                    title: 'IT Consulting',
                    description: 'Contribute to digital transformation advisory and strategy, guiding clients on their technological evolution.',
                    icon: 'Globe2',
                    iconColor: "#ffffff",
                    iconBg: "#FF3333",
                    className: 'border-none hover:shadow-xl transition-all',
                  },
                  {
                    id: 6,
                    title: 'Data Analytics',
                    description: 'Transform raw business data into actionable intelligence and strategic insight.',
                    icon: 'BarChart2',
                    iconColor: "#ffffff",
                    iconBg: "#FFB347",
                    className: 'border-none hover:shadow-xl transition-all',
                  },
                ],
                variant: 'iconCard',
                layout: 'standard',
                showImage: false,
              }}
            /></div>

        </div>
      </section>

      {/* PROPRIETARY SOLUTIONS & PRODUCTS SECTION */}
      <section>
        <div className="py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-6 animate-fade-in container-custom">Innovate with Proprietary Solutions and Products</h2>
          <TextSection
            data={{
              paragraphs: [
                'Finbyz extends innovation through proprietary modules and marketplace applications, offering unique opportunities to build and shape groundbreaking solutions.'
              ]
            }}
          />
          {/* <div className='py-8'>
          <ResponsiveCardGrid
            data={{
              title: 'Specialized Offerings',
              cards: [
                {
                  id: 1,
                  title: 'Chemical Manufacturing Module',
                  description: 'Master batch management, BOM, QA checks, and compliance reporting.',
                  icon: 'TestTube2',
                  iconColor: "#ffffff",
                  iconBg: '#1A5276',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'EXIM Module',
                  description: 'Expertise in export documentation, customs, packing lists, RoDTEP claims.',
                  icon: 'FileText',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'Metal Foundry Module',
                  description: 'Specialize in casting, production, and industrial workflows.',
                  icon: 'Layers',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Logistics Module',
                  description: 'Fleet, shipment, and route management solutions.',
                  icon: 'Truck',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 5,
                  title: 'WhatsApp Integration',
                  description: 'Build seamless communication workflows directly linked to ERPNext.',
                  icon: 'MessageCircle',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 6,
                  title: 'Marketplace Apps',
                  description: 'Contribute to Meeting Management, Payment Management, and industry-specific marketplace solutions.',
                  icon: 'Store',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 7,
                  title: 'Productify – Work Insights',
                  description: 'Enhance ERPNext productivity with task management, auto-timesheets, and team analytics.',
                  icon: 'PieChart',
                  iconColor: "#ffffff",
                  iconBg: '#1A5276',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 8,
                  title: 'Investment Solutions',
                  description: 'Work on portfolio management, forward contract, and licensing apps for client industries.',
                  icon: 'Briefcase',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard',
              layout: 'standard',
              showImage: false,
            }}
          /></div> */}
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section>
        <div className="py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-6 animate-fade-in container-custom">Our Visionary Leadership</h2>
          <TextSection
            data={{
              paragraphs: [
                "Finbyz is led by Managing Director Mukesh Variyani and HR Director Nishita Variyani, together fostering a clear vision for growth and impact. Mukesh's expertise in IT and Finance guides strategy, efficiency, and results. Nishita champions a supportive, growth-driven culture where every talent thrives. Our leadership empowers teams, encourages innovation, and insists on real, measurable value creation."
              ]
            }}
          />
        </div>
      </section>

      {/* WHO WE SEEK SECTION */}
      <section>
        <div className="py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-6 animate-fade-in container-custom">What We Look For</h2>
          <TextSection
            data={{
              paragraphs: [
                'We are always seeking passionate, driven individuals eager to make a difference. If you are a problem-solver, a team player, and committed to excellence, you\'ll find a home at Finbyz. We value those who align with our core values and are excited to work with cutting-edge technology to create impactful solutions for our global clientele.'
              ]
            }}
          />
        </div>
      </section>

      {/* JOIN US COMMENT SECTION */}
      <section>
        <div className="container-custom">
          <Comment
            data={{
              text:
                "If you\'re ready to be part of a company that values innovation, fosters growth, and makes a significant impact on businesses worldwide, we invite you to explore career opportunities at Finbyz. Discover how your skills and ambition can contribute to our collective success and help shape the future of digital transformation.",
              symbol: '',
            }}
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section>
        <div className="py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to start your Finbyz journey?',
                icon: 'Send',
              },
              title: 'Join Our Talent-First Team',
              highlightText: 'Talent-First',
              description: 'Innovate, learn, and grow with a passionate team driving ERPNext, AI automation, and business transformation worldwide. Connect with us or explore open career opportunities at Finbyz.',
              primaryButton: {
                text: 'Apply Now',
                icon: 'ArrowRight',
                action: 'https://finbyz.tech/contact',
              },
              secondaryButton: {
                text: 'View Careers',
                icon: 'BookOpen',
                action: '/careers/job-openings',
              },
              trustIndicator: {
                text: 'ISO 27001:2013 • ERPNext Certified Partners • 200+ Projects',
                icon: 'CheckCircle',
              },
            }}
          />
        </div>
      </section>
    </>
  );
}
