'use client';
import React from 'react';
import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import Differentiators from '@/components/sections/differentiators';

import { CheckCircle, Award, Layers, Boxes, ClipboardList, Globe, BarChart3, Zap, Users, Star } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <DynamicHero
        headline="ERP Solutions for Electronics Manufacturing & Supply Chain"
        highlightWords={["ERP Solutions", "Manufacturing", "Supply Chain"]}
        description="Optimize electronics manufacturing, inventory, and global supply chains with powerful ERP solutions. Streamline production, enhance quality, and reduce costs."
        primaryButton={{ text: "Get Started" , action: 'https://finbyz.tech/contact'}}
        secondaryButton={{ text: "Learn More",action: () => {
              const el = document.getElementById('erpnext-overview');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            } }}
        heroImage={{
          alt: 'ERP Solutions for Electronics Manufacturing & Supply Chain',
          src: '/images/erp-for-electronics-industry.png'
        }}
        accentColor="orange"
        // className="animate-fade-in-up animate-duration-700 animate-ease-out"
      />

      {/* OVERVIEW SECTION */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4">Overview</h2>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Discover how advanced ERP solutions are revolutionizing the electronics industry. As global companies face rapidly evolving technologies, market fluctuations, intricate supply chains, and tight regulatory requirements, it's essential to adopt a robust, integrated ERP system designed for the unique dynamics of electronics manufacturing and distribution. With real-time data and complete process visibility, you can streamline operations, improve inventory control, enhance quality management, and position your business for sustainable growth. Embrace a tailored ERP platform to drive efficiency, agility, and operational excellence across your organization.
           </p>
            <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
             Our solutions empower electronics businesses to meet customer demand, control costs, and increase profitability by eliminating silos and providing end-to-end integration—from procurement to production and fulfillment. Experience a new level of process optimization, compliance, and innovation.
           </p>
          {/* <TextSection
            data={{
              paragraphs: [
                
                            ]
            }}
          /> */}
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section id='erpnext-overview'>
        <div className="container-custom py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4">Transform Your Electronics Business with Advanced ERP Solutions</h2>
          <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            The electronics industry is a dynamic landscape, characterized by rapid innovation, intricate supply chains, stringent quality demands, and constant pressure to reduce costs and accelerate time-to-market. Managing these complexities effectively requires more than just traditional business tools; it demands a robust, integrated Enterprise Resource Planning (ERP) system tailored to the unique challenges of electronics manufacturing and distribution.
           </p>
            <p className=" text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            At Finbyz Tech, we understand these nuances. We provide specialized ERPNext solutions designed to empower electronics companies to streamline operations, optimize inventory, enhance quality control, and gain unparalleled visibility across their entire value chain. From component procurement to final product assembly and distribution, our ERP expertise ensures your business operates with peak efficiency.
           </p>
          {/* <TextSection
            data={{
              title: "Transform Your Electronics Business with Advanced ERP Solutions",
              paragraphs: [
                "",
                ""
              ]
            }}
          /> */}
        </div>
      </section>

      {/* CHALLENGES SECTION WITH ICON LIST */}
      <section>
        <div className="py-8">
          {/* <h2 className="text-2xl md:text-3xl font-semibold text-[#1A5276] mb-6"></h2> */}
          <ResponsiveCardGrid
            data={{
              title: 'Navigating the Complexities of the Electronics Industry',
              cards: [
                {
                  id: 1,
                  title: 'Complex Bill of Materials & Routing',
                  description: 'Manage multi-level BOMs with thousands of components, sub-assemblies, and intricate assembly-line routing.',
                  icon: 'Layers',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'Volatile Global Supply Chains',
                  description: 'Address component shortages, geopolitical disruptions, lead time variations, and multi-region supplier management.',
                  icon: 'Globe',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'Rigorous Quality Control & Compliance',
                  description: 'Ensure RoHS/REACH and other standards, manage defect rates, and maintain complete traceability of components.',
                  icon: 'ClipboardCheck',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Rapid Product Lifecycles',
                  description: 'Quickly adapt to tech changes, manage product variations, and minimize risks from obsolete inventory.',
                  icon: 'Zap',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 5,
                  title: 'Discrete Manufacturing & Batch Tracking',
                  description: 'Control both discrete assemblies and batch-managed production with precise serialization and lot tracking.',
                  icon: 'Box',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 6,
                  title: 'R&D Management',
                  description: 'Manage NPI projects, prototyping, and design iterations for continual product renewal.',
                  icon: 'FlaskConical',
                  iconColor: "#ffffff",
                  iconBg: '#FFB347',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 7,
                  title: 'Cost Management & Profitability',
                  description: 'Track assembly costs, manage scrap, and optimize production margins across all lines.',
                  icon: 'Award',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 8,
                  title: 'Obsolescence Management',
                  description: 'Proactively handle slow-moving or excess inventory to minimize carrying costs and avoid write-offs.',
                  icon: 'PackageX',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard'
            }}
          />
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS SECTION */}
      <section>
        <div className="py-8">
          <Benefits
            data={{
              title: "How ERPNext Transforms Electronics Operations",
              benefits: [
                {
                  // number: 1,
                  // suffix: '.',
                  header: 'Advanced Production & Manufacturing',
                  label: '',
                  description: 'Multi-level BOM management, detailed work order routing, capacity planning, and shop floor control ensure optimal throughput.',
                  icon: 'layers',
                  palette: { iconBg: '#fff4ed', iconColor: '#fa7207' }
                },
                {
                  // number: 2,
                  // suffix: '.',
                  header: 'Intelligent Inventory & Warehouse',
                  label: '',
                  description: 'Serialized/batch inventory tracking, warehouse management, demand forecasting, and proactive obsolescence management.',
                  icon: 'boxes',
                  palette: { iconBg: '#fff4ed', iconColor: '#fa7207' }
                },
                {
                  // number: 3,
                  // suffix: '.',
                  header: 'Robust Supply Chain & Procurement',
                  label: '',
                  description: 'Centralized vendor management, automated procurement, global sourcing support, and supply chain visibility.',
                  icon: 'globe',
                  palette: { iconBg: '#fff4ed', iconColor: '#fa7207' }
                },
                {
                  // number: 4,
                  // suffix: '.',
                  header: 'Comprehensive Quality Control',
                  label: '',
                  description: 'Inspection plans, non-conformance reporting, traceability, and integrated QA for continuous improvement.',
                  icon: 'clipboard-list',
                  palette: { iconBg: '#fff4ed', iconColor: '#fa7207' }
                },
                {
                  // number: 5,
                  // suffix: '.',
                  header: 'Sales, CRM & Financial Integration',
                  label: '',
                  description: 'End-to-end sales management, CRM, integrated projects and R&D, and powerful financial tools for global operations.',
                  icon: 'bar-chart-3',
                  palette: { iconBg: '#fff4ed', iconColor: '#fa7207' }
                },
                {
                  // number: 6,
                  // suffix: '.',
                  header: 'AI-Driven Automation',
                  label: '',
                  description: 'Boost productivity with AI-powered automations for CRM tasks, demand forecasting, and supply chain optimizations.',
                  icon: 'zap',
                  palette: { iconBg: '#fff4ed', iconColor: '#fa7207' }
                }
              ]
            }}
          />
        </div>
      </section>

      {/* DIFFERENTIATORS SECTION */}
      <section>
        <div className="py-8">
          <Differentiators
            data={{
              title: "Why Choose Finbyz Tech for Your Electronics ERP?",
              subtitle: '',
              differentiators: [
                {
                  icon: 'Award',
                  title: 'Certified ERPNext Partner',
                  description: 'Access certified guidance and best-in-class ERPNext implementation.' ,
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  icon: 'Star',
                  title: 'Proven Track Record',
                  description: 'Over 10 years experience and 200+ successful ERPNext projects, including complex manufacturing.',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                },
                {
                  icon: 'Layers',
                  title: 'Industry Specialization',
                  description: 'Deep expertise in manufacturing, including complex BOMs and discrete production flows.',
                 iconColor: "#ffffff",
                  iconBg: "#27AE60",
                },
                {
                  icon: 'ClipboardList',
                  title: 'Tailored Customizations',
                  description: 'Custom modules that perfectly align ERPNext to electronics workflows.',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                },
                {
                  icon: 'Brain',
                  title: 'AI-Driven Automation',
                  description: 'Unique AI capabilities to supercharge automation and predictive analytics.',
                 iconColor: "#ffffff",
                  iconBg: "#FF3333",
                },
                {
                  icon: 'Infinity',
                  title: 'End-to-End Support',
                  description: 'Comprehensive services from consultation to training and ongoing support.',
                 iconColor: "#ffffff",
                  iconBg: '#FFB347',
                },
                {
                  icon: 'Globe',
                  title: 'Global Reach',
                  description: 'Experience supporting international operations in 12+ countries.',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                },
                {
                  icon: 'Rocket',
                  title: 'Continuous Innovation',
                  description: 'Always evolving to deliver the latest ERP, manufacturing, and digital transformation solutions.',
                 iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                }
              ],
              quote: {
                text: 'We don\'t just implement software; we craft solutions that drive tangible business outcomes.',
                highlight: 'Finbyz Tech Advantage',
                author: 'Finbyz Tech Team'
              }
            }}
          />
        </div>
      </section>

      {/* BENEFITS SECTION - ADVANTAGES */}
      <section>
        <div className="py-8">
          <Benefits
            data={{
              title: 'Realize the Benefits of a Smart Electronics ERP',
              benefits: [
                {
                  
                  header: 'Increased Operational Efficiency',
                  label: '',
                  description: 'Automate repetitive tasks, reduce errors, and streamline workflows across departments.',
                  icon: 'Zap',
                  palette: { iconBg: '#fff4ed', iconColor: '#fa7207' }
                },
                {
                 
                  header: 'Optimized Inventory & Reduced Costs',
                  label: '',
                  description: 'Prevent obsolescence, minimize holding costs, and ensure optimal stock levels with advanced forecasting.',
                  icon: 'bar-chart-3',
                  palette: { iconBg: '#fff4ed', iconColor: '#fa7207' }
                },
                {
                  
                  header: 'Enhanced Product Quality',
                  label: '',
                  description: 'Implement rigorous quality checks and traceability, reducing defect rates for higher satisfaction.',
                  icon: 'CheckCircle',
                  palette: { iconBg: '#fff4ed', iconColor: '#fa7207' }
                },
                {
                  
                  header: 'Faster Time-to-Market',
                  label: '',
                  description: 'Accelerate product development cycles and boost production throughput for market agility.',
                  icon: 'Layers',
                  palette: { iconBg: '#fff4ed', iconColor: '#fa7207' }
                },
                {
                 
                  header: 'Improved Decision Making',
                  label: '',
                  description: 'Gain real-time actionable insights through comprehensive reporting and analytics.',
                  icon: 'bar-chart-3',
                  palette: { iconBg: '#fff4ed', iconColor: '#fa7207' }
                },
                {
                 
                  header: 'Regulatory Compliance',
                  label: '',
                  description: 'Maintain compliance with industry regulations through integrated and auditable records.',
                  icon: 'clipboard-list',
                  palette: { iconBg: '#fff4ed', iconColor: '#fa7207' }
                }
              ]
            }}
          />
        </div>
      </section>
    </>
  );
}
