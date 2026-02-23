'use client';

import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import { List } from '@/components/sections/list';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import ContentIllustrationLeft from '@/components/sections/content-illustration-left';
import ContentIllustrationRight from '@/components/sections/content-illustration-right';
import Differentiators from '@/components/sections/differentiators';

import { Trophy, Smartphone, ArrowRight, Users, ShieldCheck, Activity, Handshake, BarChart3, Layers, Rocket, Code, LayoutDashboard, UserCheck, FileText, Users2, Building2, BookOpenCheck, SearchCheck, LineChart, HardDriveUpload, Globe2, Star } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden">
        <DynamicHero
          headline="Custom Mobile App Development Business & ERPNext Solutions"
          highlightWords={['Mobile App', 'Solutions', 'Development']}
          description="Unlock efficiency with custom mobile app development. Finbyz Tech builds powerful applications for ERPNext and unique business needs, ensuring seamless workflows and real-time access."
          heroImage={{
            alt: 'Custom Mobile App Development Business & ERPNext Solutions',
            src:'/images/mobile-app-development2.png',
          }}
          primaryButton={{ text: 'Get Started',action: 'https://finbyz.tech/contact' }}
          secondaryButton={{ text: 'Learn More' , action: () => {
            const el = document.getElementById('mobile-app');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },}}
          accentColor="orange"
        />
      </section>

      {/* OVERVIEW SECTION */}
      <section className="w-full bg-transparent" >
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1A5276] animate-fade-in-up">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify" >
            Finbyz Tech specializes in developing robust mobile applications that extend the power of ERPNext and address specific business requirements. Our solutions ensure seamless workflow access, real-time data, and enhanced productivity for your teams, whether in the office or in the field. We deliver intuitive, secure, and scalable mobile experiences tailored to your operational demands and strategic goals. With a deep understanding of industry needs and best practices, we enable businesses to drive digital transformation, streamline processes, and unlock new levels of business efficiency—all through powerful, purpose-built mobile applications.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTIONS */}
      {/* Section: Solutions Introduction */}
      <section className="w-full bg-transparent" id="mobile-app">
        <div className="container-custom py-8">
        <h2 className="text-3xl font-bold mb-4 text-[#1A5276] animate-fade-in-up">Mobile App Development Solutions for Modern Businesses</h2>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify" >
        In today's fast-paced digital landscape, being able to manage operations, access information, and make informed decisions on the go is vital for sustained growth and competitive advantage. Finbyz Tech delivers expert mobile app development services that seamlessly integrate with your existing systems—including ERPNext—and address your unique operational needs.
        </p>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify" >
        We empower businesses to extend their reach, optimize productivity, and streamline business processes through intuitive, secure, and high-performance mobile applications. Whether you need custom tools or powerful ERP extensions, our solutions are designed to deliver clarity, efficiency, and measurable impact.
        </p>
          {/* <TextSection
            data={{
              title: '',
              paragraphs: [
                ''
              ]
            }}
          /> */}
        </div>
      </section>

      {/* Section: Why Custom Mobile Applications (List) */}
      <section className="w-full bg-transparent">
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Why Your Business Needs Custom Mobile Applications',
              cards: [
                {
                  id: 1,
                  title: 'Enhanced Accessibility & Flexibility',
                  description: 'Empower your teams with instant access to vital data and functionalities from anywhere, at any time.',
                  icon: 'Smartphone',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 2,
                  title: 'Streamlined Workflows',
                  description: 'Automate and optimize mobile-centric business processes, reducing manual effort and errors.',
                  icon: 'Layers',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  id: 3,
                  title: 'Improved Productivity',
                  description: 'Tools tailored for each role to significantly boost efficiency for sales, service, logistics, and production teams.',
                  icon: 'Rocket',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  id: 4,
                  title: 'Real-time Data & Insights',
                  description: 'Capture, update, and analyze data in real-time for quicker, better-informed decisions.',
                  icon: 'BarChart3',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  id: 5,
                  title: 'Enhanced Customer Experience',
                  description: 'Deliver faster, more personalized service and self-service options for your clients.',
                  icon: 'Users',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                },
                {
                  id: 6,
                  title: 'Competitive Edge',
                  description: 'Stand out by offering innovative mobile capabilities others in your industry may not provide.',
                  icon: 'Trophy',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                }
              ],
              variant: 'iconCard',
            }}
          />
        </div>
      </section>

      {/* Section: Finbyz Tech's Approach */}
      <section className="w-full bg-transparent">
        <div className="container-custom py-8">
          <ContentIllustrationRight
            data={{
              title: "Finbyz Tech's Approach to Mobile App Development",
              paragraphs: [
                "At Finbyz Tech, we don't just build apps; we craft strategic mobile solutions rooted in a thorough understanding of your business challenges and strategic objectives.",
                "Our process ensures that each app is tailored to maximize impact, user adoption, and ROI, all while maintaining robust security and scalability."
              ],
              imageSrc:'/images/mobile-app-development1.webp',
              imageAlt: 'Custom Mobile App Development Approach',
            }}
          />
          <List
            title="Our Proven Process"
            items={[
              'Discovery & Strategy: Consult to define the best features, scope, and architecture for your operations.',
              'User-Centric Design (UX/UI): Design intuitive and engaging interfaces for a superior user experience.',
              'Robust Development: Employ secure, scalable, and high-performance technologies, including both native and cross-platform (iOS, Android) stacks.',
              'Rigorous Testing: Ensure flawless performance, security, and compatibility across devices.',
              'Deployment & Support: Seamless deployment with ongoing maintenance and evolution as your business grows.'
            ]}
            iconColor="text-[#1A5276]"
            // Icon={ArrowRight}
          />
        </div>
      </section>

      {/* Section: Services Grid */}
      <section className="w-full bg-transparent">
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Our Comprehensive Mobile App Development Services',
              subtitle: '',
              cards: [
                {
                  id: 'ERP1',
                  title: 'ERPNext Mobile Applications',
                  description: 'Extend ERPNext capabilities to mobile devices: custom modules, field force automation, shop floor & QA functionality, and executive dashboards.',
                  icon: 'LayoutDashboard',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 'ERP2',
                  title: 'Custom Business Mobile Applications',
                  description: 'Create bespoke mobile apps for workflow automation, data collection, client portals, and productivity tools to enhance your business processes.',
                  icon: 'Layers',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  id: 'ERP3',
                  title: 'Web & Mobile App Development',
                  description: 'Design unified digital experiences across responsive web and mobile platforms for maximum reach and flexibility.',
                  icon: 'Code',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  id: 'ERP4',
                  title: 'Productivity & Collaboration Tools',
                  description: 'Empower teams with integrated task management, communication, and AI-driven smart insights for smarter work management.',
                  icon: 'Activity',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  id: 'ERP5',
                  title: 'Workflow Automation Apps',
                  description: 'Automate approvals, HR tasks, expense reporting, and more with mobile-first internal process apps.',
                  icon: 'UserCheck',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                },
                {
                  id: 'ERP6',
                  title: 'Data Collection & Survey Apps',
                  description: 'Efficient tools for data capture—inspections, audits, market research—in the field, anytime, anywhere.',
                  icon: 'FileText',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                },
                {
                  id: 'ERP7',
                  title: 'Client & Partner Portals',
                  description: 'Boost loyalty with secure, branded mobile apps for customers and partners: orders, information & more.',
                  icon: 'Handshake',
                  iconColor: '#ffffff',
                  iconBg: '#1A5276',
                },
                {
                  id: 'ERP8',
                  title: 'Field Force Automation',
                  description: 'Sales, service, and delivery teams manage leads, update customers, and record field visits in real-time.',
                  icon: 'Users2',
                  iconColor: '#ffffff',
                  iconBg: '#FF8C00',
                },

              ],
              variant: 'iconCard',
            }}
          />
        </div>
      </section>

      {/* Section: Features and Benefits */}
      <section className="w-full bg-transparent">
        <div className="py-8">
          <Benefits
            data={{
              title: 'Key Features and Benefits We Deliver',
              benefits: [
                {
                  number: 24,
                  suffix: '/7',
                  label: 'Access',
                  header: 'Seamless Workflow Access',
                  description: 'Teams stay productive wherever work takes them with always-on tools for every task.',
                  icon: 'Smartphone',
                  palette: {
                    iconBg: 'transparent',
                    iconColor: '#f97316'
                  }
                },
                {
                  number: 100,
                  suffix: '%',
                  label: 'Sync',
                  header: 'Real-time Data Synchronization',
                  description: 'No silos—instant data flow between mobile apps and your core ERP/business platforms.',
                  icon: 'HardDriveUpload',
                  palette: {
                    iconBg: 'transparent',
                    iconColor: '#f97316'
                  }
                },
                {
                  number: 40,
                  suffix: '%',
                  label: 'Productivity',
                  header: 'Enhanced Field Team Productivity',
                  description: 'On-the-go teams leverage GPS tracking, offline capabilities, photo uploads, and digital forms.',
                  icon: 'BarChart3',
                  palette: {
                    iconBg: 'transparent',
                    iconColor: '#f97316'
                  }
                },
                {
                  number: 1,
                  suffix: '+',
                  label: 'Insights',
                  header: 'Actionable Insights',
                  description: 'Gain deeper operational visibility and enable proactive, strategic decisions.',
                  icon: 'SearchCheck',
                  palette: {
                    iconBg: 'transparent',
                    iconColor: '#f97316'
                  }
                },
                {
                  number: 27001,
                  suffix: ':2013',
                  label: 'InfoSec',
                  header: 'Robust Security',
                  description: 'Industry-best protocols protect business data and ensure total compliance.',
                  icon: 'ShieldCheck',
                  palette: {
                    iconBg: 'transparent',
                    iconColor: '#f97316'
                  }
                },
                {
                  number: 100,
                  suffix: 'x',
                  label: 'Scale',
                  header: 'Scalability & Future-Proofing',
                  description: 'Apps are built for scale and ready to grow as your business evolves.',
                  icon: 'LineChart',
                  palette: {
                    iconBg: 'transparent',
                    iconColor: '#f97316'
                  }
                }
              ]
            }}
          />
        </div>
      </section>

      {/* Section: Industries Grid */}
      <section className="w-full bg-transparent">
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Industries We Serve',
              cards: [
                {
                  id: 1,
                  title: 'Chemical & Pharma',
                  description: 'Solutions for process-driven compliance and efficiency.',
                  icon: 'FlaskConical',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  id: 2,
                  title: 'Metal Casting & Engineering',
                  description: 'Mobile management for manufacturing, job tracking, and QC.',
                  icon: 'Building2',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  id: 3,
                  title: 'FMCG & Retail',
                  description: 'Field force, order management, and logistics tools for fast-moving sectors.',
                  icon: 'ShoppingBag',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  id: 4,
                  title: 'Logistics & Supply Chain',
                  description: 'Real-time tracking and delivery coordination at every step.',
                  icon: 'Truck',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  id: 5,
                  title: 'Education & Healthcare',
                  description: 'Secure apps for learning management, student/doctor communication, and process automation.',
                  icon: 'BookOpenCheck',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                },
                {
                  id: 6,
                  title: 'Commodity Trading & EXIM',
                  description: 'Trade, compliance, and reporting solutions for commodity and EXIM businesses.',
                  icon: 'Globe2',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                },
                {
                  id: 7,
                  title: 'General Manufacturing & Distribution',
                  description: 'Manage production, inventory, and distribution from shop floor to customer.',
                  icon: 'Factory',
                  iconColor: '#ffffff',
                  iconBg: '#1A5276',
                },
                {
                  id: 8,
                  title: 'Custom Solutions for Your Sector',
                  description: 'Tailored mobile apps for any unique business process or sector requirement.',
                  icon: 'MapPinned',
                  iconColor: '#ffffff',
                  iconBg: '#FF8C00',
                }
              ],
              variant: 'iconCard',
            }}
          />
        </div>
      </section>

      {/* Section: Why Choose Finbyz Tech (Differentiators) */}
      <section className="w-full bg-transparent">
        <div className=" py-8">
          <Differentiators
            data={{
              title: 'Why Choose Finbyz Tech?',
              subtitle: '',
              differentiators: [
                {
                  icon: 'Star',
                  title: 'Proven Expertise',
                  description: '10+ years and 200+ completed ERPNext projects with deep functional know-how.',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  icon: 'Handshake',
                  title: 'Client-Centric Approach',
                  description: 'We focus on your needs, delivering solutions that solve real problems.',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  icon: 'Users',
                  title: 'Skilled Resource Pool',
                  description: '30+ skilled consultants, developers, and functional experts on the team.',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  icon: 'Layers',
                  title: 'Innovation & Automation',
                  description: 'We integrate cutting-edge technologies, including AI-driven insights.',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  icon: 'Activity',
                  title: 'Transparent & Agile Process',
                  description: 'Clear communication with agile development, so you\'re always informed.',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                },
                {
                  icon: 'ShieldCheck',
                  title: 'Commitment to Quality',
                  description: 'ISO 27001:2013 Certified for the highest standards of quality and data security.',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                }
              ],
              quote: {
                text: 'Finbyz Tech delivers transformative mobile solutions that empower working on-the-go, streamline workflows, and provide tangible value for modern businesses.',
                highlight: 'Empowering modern business mobility',
                author: 'Finbyz Tech Team'
              }
            }}
          />
        </div>
      </section>
    </>
  );
}
