'use client';

import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import { List } from '@/components/sections/list';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';


import { BookUser, Layers, BedDouble, FileText, LineChart, ShieldCheck, Users, Workflow, UserCheck, LayoutList, Briefcase, ListChecks, PackageSearch, BarChart, UserCircle, Headset, Coins, Trophy, Store, ThumbsUp, MessageCircle, Users2 } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <section>
        <DynamicHero
          headline="ERPNext for Hotels, Resorts, Travel Agencies & Hospitality"
          highlightWords={['Hotels,', 'Resorts,' ,'Travel Agencies', 'Hospitality']}
          description="Streamline hospitality operations with tailored ERPNext solutions. Manage bookings, guests, inventory, and finance efficiently for hotels, resorts, and travel agencies."
          heroImage={{
            alt: 'ERPNext for Hotels Resorts Travel Agencies Hospitality',
            src:'/images/erp-for-travel-hospitality.png',
          }}
          primaryButton={{
            text: 'Get Started',
            action: 'https://finbyz.tech/contact'
          }}
          secondaryButton={{
            text: 'Learn More',
            action: () => { const el = document.getElementById('overview'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }
          }}
          accentColor="orange"
        />
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview">
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">Discover how our specialized ERPNext solutions optimize operations for the dynamic Travel &amp; Hospitality sector.</p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">We provide end-to-end management for hotels, resorts, and travel agencies, enhancing guest experiences and driving efficiency. Leverage our decade of expertise in ERP implementation to transform your business processes and achieve sustainable growth. Whether you operate a boutique hotel, a resort chain, or a global travel agency, Finbyz Tech empowers you to deliver seamless service and operational excellence by integrating critical functions into one comprehensive platform.</p>
        </div>
      </section>

      {/* INTRO + CHALLENGES SECTION */}
      <section>
        <TextSection
          data={{
            title: 'Elevating Travel & Hospitality with Tailored ERPNext Solutions',
            paragraphs: [
              'The travel and hospitality industry thrives on seamless experiences, efficient operations, and exceptional guest satisfaction. However, managing complex reservations, diverse inventories, dynamic pricing, and intricate financial flows across multiple departments can be challenging without a robust, integrated system. This is where a specialized Enterprise Resource Planning (ERP) solution becomes indispensable.',
              "At Finbyz Tech, we understand the unique demands of hotels, resorts, travel agencies, and other hospitality businesses. With over a decade of experience in ERP implementation and consulting, we deliver bespoke ERPNext solutions designed to streamline your operations, enhance guest services, and drive profitability."
            ]
          }}
        />
      </section>
      <section>
        <div className="container-custom py-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#1A5276] mb-4">Common Challenges in Hospitality Operations</h3>
          <List
            title=""
            items={[
              'Fragmented Systems: Disconnected software for bookings, front desk, F&B, housekeeping, and accounting leading to inefficiencies and data silos.',
              'Manual Processes: Tedious manual tasks for reservations, check-ins, billing, and inventory tracking, prone to errors and delays.',
              'Guest Experience Management: Difficulty in personalizing services and maintaining consistent communication across touchpoints.',
              'Dynamic Resource Allocation: Challenges in managing staff, room inventory, and tour packages in real-time.',
              'Financial Complexity: Handling multi-currency transactions, varied payment methods, and intricate revenue recognition.'
            ]}
            accentColor="#fa7c14"
            iconColor="text-[#1A5276]"
            // Icon={Workflow}
          />
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section>
        <TextSection
          data={{
            title: "Finbyz Tech's Expertise in Hospitality ERPNext",
            paragraphs: [
              'As a Certified ERPNext Partner with over 200 successful ERPNext projects delivered globally, Finbyz Tech brings unparalleled expertise to the travel and hospitality sector. Our team of 30+ skilled ERP consultants, developers, and functional experts has served over 7000 ERPNext users across 12+ countries, demonstrating our capability to deliver complex, industry-specific solutions.',
              "We don't just implement ERP; we craft solutions that align with your specific business model, whether you're a boutique hotel, a chain of resorts, a tour operator, or an online travel agency. Our deep understanding of diverse industries, from logistics to general manufacturing, enables us to adapt and innovate, providing truly comprehensive systems."
            ]
          }}
        />
      </section>

      {/* KEY FEATURES/CAPABILITIES SECTION */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              variant: 'iconCard',
              title:'Key Features of Our Hospitality ERPNext Solutions',
              cards: [
                {
                  id: 1,
                  title: 'Reservation & Booking Management',
                  description: 'Centralized booking engine for rooms, tours, flights, and activities. Real-time availability, dynamic pricing, group bookings, and seamless online integration.',
                  icon: 'BookUser',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'Guest Relationship Management (CRM)',
                  description: 'Comprehensive guest profiles, personalized services, loyalty programs, and robust feedback & support management tools.',
                  icon: 'UserCircle',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'Property & Inventory Management',
                  description: 'Room and asset management, F&B inventory controls, housekeeping and maintenance scheduling for optimal property upkeep.',
                  icon: 'BedDouble',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Financial Management & Accounting',
                  description: 'Integrated accounting, billing, invoicing, multi-currency support, and payment gateway integration for transparent financials.',
                  icon: 'Coins',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 5,
                  title: 'Human Resources & Payroll',
                  description: 'Full spectrum staff management, automated payroll, attendance, shifts, compliance and performance tracking.',
                  icon: 'Users',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 6,
                  title: 'Tour & Package Management',
                  description: 'Flexible tour package creation, itinerary planning, and strong vendor management for agencies and travel services.',
                  icon: 'PackageSearch',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 7,
                  title: 'Reporting & Business Intelligence',
                  description: 'Powerful real-time dashboards, customizable reports, and actionable data insights for smarter decision-making.',
                  icon: 'BarChart',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 8,
                  title: 'Integration & Automation',
                  description: 'Leverage WhatsApp automation, AI-powered CRM, and seamless integration with other vital systems to boost efficiency.',
                  icon: 'Workflow',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ]
            }}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* FINBYZ ADVANTAGE SECTION */}
      <section>
        <Benefits
          data={{
            title: 'The Finbyz Tech Advantage for Travel & Hospitality',
            benefits: [
              {
                suffix: '',
                label: '',
                header: 'Proven Track Record',
                description: 'Over 200 successful ERPNext projects delivered globally, with expertise tailored for hospitality and travel businesses.',
                icon: 'Trophy',
                palette: { iconColor: '#fa7c14', iconBg: 'transparent' }
              },
              {
                suffix: '',
                label: '',
                header: 'Global Reach',
                description: 'Implementations across 12+ countries serving 7000+ active users in diverse travel & hospitality sectors.',
                icon: 'Globe',
                palette: { iconColor: '#fa7c14', iconBg: 'transparent' }
              },
              {
                suffix: '',
                label: '',
                header: 'Decade of Experience',
                description: 'More than a decade of domain expertise in ERP and digital transformation for service businesses.',
                icon: 'Briefcase',
                palette: { iconColor: '#fa7c14', iconBg: 'transparent' }
              },
              {
                suffix: '',
                label: '',
                header: 'Dedicated Support',
                description: '30+ ERP consultants, developers & experts providing continuous support and improvement.',
                icon: 'UserCheck',
                palette: { iconColor: '#fa7c14', iconBg: 'transparent' }
              }
            ]
          }}
        />
      </section>

      {/* INTEGRATION & AUTOMATION SECTION */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              variant: 'iconCard',
              title:'Seamless Integration & Automation',
              cards: [
                {
                  id: 1,
                  title: 'WhatsApp Integration',
                  description: 'Automate guest communications, booking confirmations, and real-time support directly within ERPNext using WhatsApp APIs.',
                  icon: 'MessageCircle',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'AI-CRM Capabilities',
                  description: 'Leverage AI agents to manage guest inquiries, personalize offers, and streamline follow-ups for enhanced guest engagement.',
                  icon: 'LayoutList',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'Data Analytics',
                  description: 'Transform operational data into actionable insights. Predict demand, optimize pricing, and identify growth opportunities.',
                  icon: 'LineChart',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Custom Integrations',
                  description: 'Connect ERPNext with PMS, payment gateways, online travel agencies, and more to unify your technology stack.',
                  icon: 'Layers',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ]
            }}
          />
        </div>
      </section>

      {/* SCALABILITY SECTION */}
      <section>
        <TextSection
          data={{
            title: 'Scalability for Growth',
            paragraphs: [
              "As your business expands, your ERP solution should evolve with you. ERPNext, customized by Finbyz Tech, offers the flexibility and scalability to adapt to new services, additional properties, or expanding market reach without requiring a complete overhaul."
            ]
          }}
        />
      </section>
    </>
  );
}
