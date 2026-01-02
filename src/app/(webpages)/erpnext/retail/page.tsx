'use client';

import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import Differentiators from '@/components/sections/differentiators';
import { List } from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import { Award, Database, TrendingUp, Users, BarChart3, ShieldCheck, ShoppingCart, BarChartHorizontal, UserCheck, PackageCheck, Cloud, CreditCard, Truck, Store, Zap, UserPlus } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full">
        <DynamicHero
          headline="Retail ERP Solutions Streamline Operations & Boost Sales"
          highlightWords={["ERP", "Retail", "Operations", "Sales"]}
          description="Transform your retail business with ERPNext solutions. Optimize inventory, POS, supply chain, and customer experience for enhanced efficiency and growth."
          primaryButton={{
            text: 'Get Started',
            action: 'https://finbyz.tech/contact',
          }}
          secondaryButton={{
            text: 'Learn More',
            action: () => {
              const el = document.getElementById('overview');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          heroImage={{
            alt: 'Retail ERP Solutions Streamline Operations & Boost Sales',
            src:'/images/erp-for-retail-industry.png',
          }}
          accentColor="orange"
        />
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview">
        <div className="container-custom py-8">
          <h2 className="text-3xl font-extrabold text-[#1A5276] mb-4">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">Finbyz Tech's ERPNext retail solutions are transforming the way modern businesses operate in an ever-evolving landscape. Today's retailers face hurdles ranging from inventory control across locations, seamless POS integrations, and complex supply chain logistics, to delivering consistent customer experiences across channels. Traditional approaches fall short, leading to missed sales, errors, and operational friction. Our solutions offer a unified platform tailored for retail, giving you real-time visibility, increased automation, and scalable infrastructure to support new stores, channels, and product lines. By leveraging our ERPNext expertise, you can streamline operations, reduce costs, and dedicate staff resources to more strategic initiatives while building lasting customer relationships and a resilient, data-driven organization.</p> 
          
        </div>
      </section>

      {/* INTRO SECTION */}
      <section>
        <div className="container-custom py-8">
        <h2 className="text-3xl font-extrabold text-[#1A5276] mb-4">Elevate Your Retail Business with Advanced ERP Solutions</h2>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">The retail landscape is dynamic, demanding agility, precision, and an unwavering focus on customer satisfaction. From managing vast inventories across multiple locations to streamlining point-of-sale (POS) operations and optimizing complex supply chains, retailers face a myriad of challenges daily. Without an integrated system, these challenges can lead to inefficiencies, lost sales, and diminished customer loyalty.</p> 
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">Finbyz Tech understands the unique pressures of the retail sector. As a certified ERPNext partner with over a decade of experience, we specialize in delivering robust, industry-specific ERP solutions that empower retail businesses to thrive. Our tailored ERPNext implementations are designed to integrate every facet of your operations, providing a unified view that drives efficiency, reduces costs, and enhances the overall customer journey.</p> 
        </div>
      </section>

      {/* WHY RETAIL BUSINESSES NEED ERP SECTION */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Why Retail Businesses Need a Specialized ERP System',
              cards: [
                {
                  id: 1,
                  title: 'Centralizing Data',
                  description: 'Brings together inventory, sales, customer data, and financials into a single source of truth.',
                  icon: 'Database',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: "border-none hover:shadow-xl transition-all"
                },
                {
                  id: 2,
                  title: 'Automating Processes',
                  description: 'Reduces manual tasks in purchasing, order fulfillment, and accounting, freeing up staff for more strategic activities.',
                  icon: 'Zap',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: "border-none hover:shadow-xl transition-all"
                },
                {
                  id: 3,
                  title: 'Enhancing Visibility',
                  description: 'Real-time insights into stock levels, sales performance, and customer behavior across all channels.',
                  icon: 'BarChart3',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: "border-none hover:shadow-xl transition-all"
                },
                {
                  id: 4,
                  title: 'Improving Customer Experience',
                  description: 'Enables personalized marketing, faster checkout, and seamless omni-channel interactions.',
                  icon: 'UserCheck',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: "border-none hover:shadow-xl transition-all"
                },
                {
                  id: 5,
                  title: 'Driving Scalability',
                  description: 'A flexible platform that grows with your business, easily accommodating new stores, products, or sales channels.',
                  icon: 'TrendingUp',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: "border-none hover:shadow-xl transition-all"
                },
                {
                  id: 6,
                  title: 'Eliminating Data Silos',
                  description: 'Ensures seamless data flow and accelerates decision-making across departments.',
                  icon: 'Cloud',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                  className: "border-none hover:shadow-xl transition-all"
                },
              ],
              variant: 'iconCard',
              layout: 'standard'
            }}
          />
        </div>
      </section>

      {/* ERPNext FOR RETAIL - THE FINBYZ TECH ADVANTAGE SECTION */}
      <section>
        <div className="container-custom py-8">
        <h2 className="text-3xl font-extrabold text-[#1A5276] mb-4">ERPNext for Retail: The Finbyz Tech Advantage</h2>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">ERPNext is a powerful open-source ERP platform renowned for its flexibility and comprehensive features. At Finbyz Tech, we leverage our deep expertise to transform ERPNext into a highly specialized solution for the retail industry. Our approach goes beyond standard implementation; we focus on understanding your specific retail workflows, challenges, and growth objectives to deliver a system that truly adds value.</p> 

        </div>
      </section>

      {/* KEY MODULES & CAPABILITIES SECTION */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Key Modules & Capabilities for Retail Operations',
              subtitle: '',
              cards: [
                {
                  id: 1,
                  title: 'Advanced Inventory Management',
                  description: 'Real-time stock tracking, automated reordering, batch & serial number tracking, bundle management, and forecasting.',
                  icon: 'PackageCheck',
                  iconColor: "#ffffff",
                  iconBg: '#1A5276',
                  className: "border-none hover:shadow-xl transition-all"
                },
                {
                  id: 2,
                  title: 'Integrated Point of Sale (POS)',
                  description: 'Fast and intuitive checkout, online & offline capabilities, barcode scanning, payment gateway integration, loyalty management.',
                  icon: 'CreditCard',
                  iconColor: "#ffffff",
                  iconBg: '#FF8C00',
                  className: "border-none hover:shadow-xl transition-all"
                },
                {
                  id: 3,
                  title: 'Comprehensive Supply Chain & Procurement',
                  description: 'Vendor management, purchase order automation, logistics & shipment tracking, returns & replacements management.',
                  icon: 'Truck',
                  iconColor: "#ffffff",
                  iconBg: '#27AE60',
                  className: "border-none hover:shadow-xl transition-all"
                },
                {
                  id: 4,
                  title: 'Customer Relationship Management (CRM)',
                  description: 'Centralized customer database, targeted marketing, customer service & AI-CRM integration, loyalty programs.',
                  icon: 'Users',
                  iconColor: "#ffffff",
                  iconBg: '#8E44AD',
                  className: "border-none hover:shadow-xl transition-all"
                },
                {
                  id: 5,
                  title: 'E-commerce Integration',
                  description: 'Seamlessly sync Shopify, Magento, WooCommerce with ERPNext. Provide omni-channel experience.',
                  icon: 'Store',
                  iconColor: "#ffffff",
                  iconBg: '#FF3333',
                  className: "border-none hover:shadow-xl transition-all"
                },
                {
                  id: 6,
                  title: 'Financial Management',
                  description: 'General ledger, accounts payable/receivable, automated entries, budgeting, tax compliance.',
                  icon: 'BarChartHorizontal',
                  iconColor: "#ffffff",
                  iconBg: '#FFB347',
                  className: "border-none hover:shadow-xl transition-all"
                },
                {
                  id: 7,
                  title: 'Data Analytics & Business Intelligence',
                  description: 'Custom dashboards, sales and profitability reports, customer insights, actionable data analytics.',
                  icon: 'BarChart3',
                  iconColor: "#ffffff",
                  iconBg: '#1A5276',
                  className: "border-none hover:shadow-xl transition-all"
                },
                {
                  id: 8,
                  title: 'AI-Driven Automation',
                  description: 'Automate lead intelligence, follow-ups, sentiment analysis, and more — all linked through ERPNext.',
                  icon: 'Zap',
                  iconColor: "#ffffff",
                  iconBg: '#FF8C00',
                  className: "border-none hover:shadow-xl transition-all"
                },
              ],
              variant: 'iconCard',
              layout: 'standard',
            }}
          />
        </div>
      </section>

      {/* FINBYZ TECH'S DIFFERENTIATING EDGE SECTION */}
      <section>
        <div className="py-8">
          <Benefits
            data={{
              title: "Finbyz Tech's Differentiating Edge for Retail",
              benefits: [
                {
                  header: 'Certified ERPNext Partner',
                  label:"",
                  description: 'Optimal ERPNext implementation and customization by certified experts.',
                  icon: 'Award',
                  palette: { iconBg: '#FFF8F1', iconColor: '#F59E42' },
                },
                {
                  header: '10+ Years of Expertise',
                  description: 'Proven methodologies from a decade of driving successful digital projects.',
                  label:"",
                  icon: 'TrendingUp',
                  palette: { iconBg: '#FFF8F1', iconColor: '#F59E42' },
                },
                {
                  header: 'Industry-Specific Customizations',
                  description: 'Tailor-made modules for retail, based on deep cross-sector knowledge.',
                  label:"",
                  icon: 'ShoppingCart',
                  palette: { iconBg: '#FFF8F1', iconColor: '#F59E42' },
                },
                {
                  header: 'AI-Driven Automation',
                  description: 'Cutting-edge AI tools integrated to enhance every aspect of retail operations.',
                  label:"",
                  icon: 'Zap',
                  palette: { iconBg: '#FFF8F1', iconColor: '#F59E42' },
                },
                {
                  header: 'Custom Software Development',
                  description: 'Bespoke solutions to solve unique retail challenges, with seamless ERPNext integration.',
                  label:"",
                  icon: 'Database',
                  palette: { iconBg: '#FFF8F1', iconColor: '#F59E42' },
                },
                {
                  header: 'Resource Augmentation',
                  description: 'Flexible access to expert ERPNext consultants and development teams.',
                  label:"",
                  icon: 'UserPlus',
                  palette: { iconBg: '#FFF8F1', iconColor: '#F59E42' },
                },
              ],
              component_type: 'Card',
            }}
          />
        </div>
      </section>

      {/* THE BENEFITS OF PARTNERING SECTION */}
      <section>
        <div className="container-custom py-8">
          <List
            title="The Benefits of Partnering with Finbyz Tech for Your Retail ERP"
            items={[
              'Increased Operational Efficiency: Streamline processes from inventory to sales and reduce manual effort.',
              'Enhanced Customer Experience: Personalize interactions, speed up service, and build lasting loyalty.',
              'Improved Decision-Making: Access real-time data and analytics for strategic insights.',
              'Cost Reduction: Optimize inventory, reduce waste, and improve resource allocation.',
              'Scalability & Growth: A flexible system that adapts as you expand into new markets or channels.',
              'Competitive Advantage: Stay ahead with advanced automation and fully integrated processes.'
            ]}
            accentColor="#F59E42"
            // Icon={ShieldCheck}
            iconColor="text-[#1A5276]"
          />
        </div>
      </section>

      {/* IMPLEMENTATION PROCESS SECTION */}
      <section>
        <div className="container-custom py-8">
          <List
            title="Our Seamless Implementation Process"
            items={[
              'Discovery & Analysis: Deep dive into current processes, challenges, and goals.',
              'Customization & Configuration: Tailor ERPNext modules to your requirements.',
              'Data Migration: Securely transition existing data to the new system.',
              'User Training: Comprehensive team training for smooth adoption.',
              'Deployment & Go-Live: Launch with minimal disruption.',
              'Ongoing Support & Optimization: Continuous improvement and enhancements.'
            ]}
            accentColor="#F59E42"
            // Icon={BarChart3}
            iconColor="text-[#1A5276]"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section>
        <div className="py-8">
          <CTA
            data={{
              subheading: {
                text: 'Start Your Retail Transformation',
                icon: 'TrendingUp',
              },
              title: 'Ready to Transform Your Retail Business?',
              highlightText:'Retail Business',
              description:
                'Unlock next-level efficiency and customer experience with Finbyz Tech’s tailored ERPNext retail solutions. Connect with our team for a free personalized consultation today!',
              primaryButton: {
                text: 'Get a Free Consultation',
                icon: 'UserCheck',
                action: 'https://finbyz.tech/contact',
              },
              secondaryButton: {
                text: 'Explore Our ERPNext Services',
                icon: 'Store',
                action: 'https://finbyz.tech/erpnext-software',
              },
              trustIndicator: {
                text: 'Trusted by leading retailers for digital transformation',
                icon: 'Award',
              },
            }}
          />
        </div>
      </section>
    </>
  );
}
