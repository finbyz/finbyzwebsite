'use client';
import React from 'react';
import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import { List } from '@/components/sections/list';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Benefits from '@/components/sections/benefits';
import CTA from '@/components/sections/cta';

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <section>
        <DynamicHero
          headline="ERP Solutions for Textile Manufacturing & Distribution"
          highlightWords={[ "Textile", "Manufacturing", "Distribution"]}
          description="Optimize textile manufacturing, supply chain, and operations with tailored ERP solutions. Enhance efficiency, reduce costs, and boost profitability for your textile business."
          heroImage={{
            alt: "ERP Solutions for Textile Manufacturing & Distribution",
            src: "/images/erp-for-textile-industry.png",
          }}
          primaryButton={{
            text: "Get Started",
            action: "https://finbyz.tech/contact"
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
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview">
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-6">Overview</h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            The textile sector faces swift demand shifts, intricate manufacturing processes, global supply chain management, and precise quality requirements. Modern ERP solutions empower textile manufacturers and distributors by connecting operations from raw material sourcing to finished goods delivery. Finbyz Tech delivers ERPNext implementations purpose-built for textile operations, weaving industry best-practices and technology together. With seamless data visibility, optimized production, advanced analytics, and cost controls, your textile enterprise can streamline every workflow, minimize risks, and unlock new opportunities for growth and profitability.
          </p>
        </div>
      </section>

      {/* INTRO CONTENT */}
      <section>
        <div className="container-custom py-8">
        <h2 className="text-3xl font-bold text-[#1A5276] mb-6">Revolutionizing the Textile Industry with Advanced ERP Solutions</h2>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">The textile industry is dynamic and complex, characterized by intricate supply chains, fluctuating demands, and an ongoing need for innovation. From yarn production and weaving to dyeing, finishing, and garment manufacturing, every stage presents specialized operational challenges.</p>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">To thrive in this competitive landscape, textile businesses need robust, integrated systems that deliver clarity, efficiency, and control. A specialized Enterprise Resource Planning (ERP) system is essential for unifying the value chain and delivering transformation.</p>
        <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">At Finbyz Tech, we bring over a decade of ERP expertise, blending deep industry knowledge with custom ERPNext implementations tailored to the nuances and workflows unique to textiles.</p>
        </div>
      </section>

      {/* CHALLENGES SECTION - ResponsiveCardGrid */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'The Unique Challenges of the Textile Sector',
              cards: [
                {
                  id: 1,
                  title: 'Complex Production Processes',
                  description: 'Managing diverse production lines, batch processes, and product specifications such as fabric types, colors, and prints.',
                  icon: 'Layers',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'Inventory Management',
                  description: 'Handling vast quantities of yarn, dyes, chemicals, WIP, and finished goods — with many attributes and variants.',
                  icon: 'Package',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'Supply Chain Volatility',
                  description: 'Global sourcing, fluctuating material costs, and unpredictable demand patterns require agile responses.',
                  icon: 'ArrowLeftRight',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Quality Control',
                  description: 'Ensuring consistent product quality and meeting stringent standards across all production batches.',
                  icon: 'ShieldCheck',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 5,
                  title: 'Compliance & Regulations',
                  description: 'Adhering to environmental, labor, and safety standards which differ by region and product.',
                  icon: 'CheckCircle2',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 6,
                  title: 'Demand Forecasting',
                  description: 'Predicting market trends and preferences for optimal stock levels and minimized overproduction.',
                  icon: 'TrendingUp',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 7,
                  title: 'Cost Management',
                  description: 'Tracking and controlling variable costs for raw materials, labor, utilities, and machine maintenance.',
                  icon: 'CreditCard',
                  iconColor: '#ffffff',
                  iconBg: '#1A5276',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 8,
                  title: 'Seasonality & Trends',
                  description: 'Responding quickly to seasonal fashion trends and fluctuating demand cycles for maximum profitability.',
                  icon: 'RefreshCcw',
                  iconColor: '#ffffff',
                  iconBg: '#FF8C00',
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard',
            }}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* BENEFITS SECTION - Benefits component */}
      <section>
        <div className="py-8">
          <Benefits
            data={{
              component_type: 'Card',
              title: 'Key Benefits of ERPNext for Textile Businesses',
              benefits: [
                {
                  suffix: '',
                  // label: 'End-to-End Visibility',
                  label:'',
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
                  header: 'Schedule Smartly',
                  description: 'Efficiently schedule production runs, manage machines, and track real-time work orders with precision.',
                  icon: 'CalendarClock',
                  palette: {
                    iconBg: '#fff7ed',
                    iconColor: '#ea580c'
                  }
                },
                {
                  suffix: '',
                  // label: 'Precision Inventory Control',
                  label:'',
                  header: 'Smart Stock Management',
                  description: 'Maintain accurate raw materials, WIP, and finished goods stock to minimize waste and costs.',
                  icon: 'Database',
                  palette: {
                    iconBg: '#fff7ed',
                    iconColor: '#ea580c'
                  }
                },
                {
                  suffix: '',
                  // label: 'Streamlined Supply Chain',
                  label:'',
                  header: 'Logistics Automated',
                  description: 'Automate vendor management and purchase orders for timely and cost-effective deliveries.',
                  icon: 'Truck',
                  palette: {
                    iconBg: '#fff7ed',
                    iconColor: '#ea580c'
                  }
                },
                {
                  suffix: '',
                  // label: 'Enhanced Quality Management',
                  label:'',
                  header: 'Consistent Quality',
                  description: 'Enforce quality checks at every stage, from material purchase to finished product.',
                  icon: 'Star',
                  palette: {
                    iconBg: '#fff7ed',
                    iconColor: '#ea580c'
                  }
                },
                {
                  suffix: '',
                  // label: 'Cost Reduction',
                  label:'',
                  header: 'Maximize Profits',
                  description: 'Identify cost-saving opportunities and increase efficiency across all processes.',
                  icon: 'Activity',
                  palette: {
                    iconBg: '#fff7ed',
                    iconColor: '#ea580c'
                  }
                },
                {
                  suffix: '',
                  // label: 'Improved Decision-Making',
                  label:'',
                  header: 'Real-Time Analytics',
                  description: 'Access on-demand insights and analytics to drive business growth and agility.',
                  icon: 'BarChart2',
                  palette: {
                    iconBg: '#fff7ed',
                    iconColor: '#ea580c'
                  }
                },
                {
                  suffix: '',
                  // label: 'Scalability',
                  label:'',
                  header: 'Grow with Ease',
                  description: 'Expand your ERP system as your business grows, handling increased scale and complexity.',
                  icon: 'PackagePlus',
                  palette: {
                    iconBg: '#fff7ed',
                    iconColor: '#ea580c'
                  }
                }
              ]
            }}
          />
        </div>
      </section>

      {/* CORE MODULES & CUSTOMIZATIONS SECTION - ResponsiveCardGrid */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: "Core ERP Modules & Customizations",
              cards: [
                {
                  id: '1',
                  title: 'Production Planning & Control',
                  description: 'Manage BOMs for textile products, batch production, routing, and machine schedules; integrate with shop-floor data.',
                  icon: 'Settings',
                  iconColor: '#ffffff',
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: '2',
                  title: 'Raw Material & Inventory',
                  description: 'Handle units (meters, kg, rolls), manage attributes (color, width, GSM), optimize warehouses, automate reorder.',
                  icon: 'Boxes',
                  iconColor: '#ffffff',
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: '3',
                  title: 'Quality Assurance & Control',
                  description: 'Quality checks at all critical stages—raw materials, in-process, and final—plus non-conformance management.',
                  icon: 'BadgeCheck',
                  iconColor: '#ffffff',
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: '4',
                  title: 'Sales & Distribution',
                  description: 'Handle customer orders, sales forecasts, pricing, and logistics; integrated CRM for stronger engagement.',
                  icon: 'ShoppingCart',
                  iconColor: '#ffffff',
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: '5',
                  title: 'Procurement & Supplier Mgmt',
                  description: 'Automates purchase requisitions/orders, receipts, supplier performance tracking, & contract management.',
                  icon: 'Users',
                  iconColor: '#ffffff',
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: '6',
                  title: 'Financial Management',
                  description: 'Comprehensive accounting, cost centres, multi-currency and profitability analysis by product or batch.',
                  icon: 'DollarSign',
                  iconColor: '#ffffff',
                  iconBg: "#FFB347",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: '7',
                  title: 'Human Resources',
                  description: 'Workforce management, payroll, attendance, and performance for labor-intensive textile operations.',
                  icon: 'UserCheck',
                  iconColor: '#ffffff',
                  iconBg: '#1A5276',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: '8',
                  title: 'Customizations & Extensions',
                  description: 'Additional modules tailored to your business processes for maximum fit and adoption.',
                  icon: 'Sliders',
                  iconColor: '#ffffff',
                  iconBg: '#FF8C00',
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard',
            }}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* ADVANCED FEATURES SECTION - ResponsiveCardGrid */}
      <section>
        <div className="py-8">
          <ResponsiveCardGrid
            data={{
              title: 'Advanced Features & Integrations',
              cards: [
                {
                  id: 1,
                  title: 'AI-Powered Demand Forecasting',
                  description: 'Leverage AI to predict demand using historical, seasonal, and market data – reducing waste and boosting accuracy.',
                  icon: 'BarChart',
                  iconColor: "#ffffff",
                  iconBg: "#1A5276",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 2,
                  title: 'Supply Chain Optimization',
                  description: 'Logistics modules manage materials and finished goods flow with route optimization and cost reduction.',
                  icon: 'Send',
                  iconColor: "#ffffff",
                  iconBg: "#FF8C00",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 3,
                  title: 'IoT Integration (Optional)',
                  description: 'Connect shop-floor machines for real-time data, predictive maintenance, and operational efficiency.',
                  icon: 'Cpu',
                  iconColor: "#ffffff",
                  iconBg: "#27AE60",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 4,
                  title: 'Compliance & Reporting Tools',
                  description: 'Automated regulatory, audit, and sustainability reports; maintain effortless compliance.',
                  icon: 'FileText',
                  iconColor: "#ffffff",
                  iconBg: "#8E44AD",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 5,
                  title: 'Custom Reporting & Analytics',
                  description: 'Dashboards and reports delivering actionable business insights for production, inventory, cost, and sales.',
                  icon: 'PieChart',
                  iconColor: "#ffffff",
                  iconBg: "#FF3333",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 6,
                  title: '3rd Party Integrations',
                  description: 'Seamlessly integrate with CRMs, logistics, BI tools, or other enterprise apps as your digital needs expand.',
                  icon: 'Plug',
                  iconColor: "#ffffff",
                  iconBg: "#FFB347",
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 7,
                  title: 'Mobile Access',
                  description: 'Access key ERP features from mobile devices, enabling on-the-go management and approvals.',
                  icon: 'Smartphone',
                  iconColor: '#ffffff',
                  iconBg: '#1A5276',
                  className: 'border-none hover:shadow-xl transition-all'
                },
                {
                  id: 8,
                  title: 'Automated Alerts & Workflows',
                  description: 'Stay informed and proactive with event-triggered notifications and workflow automation.',
                  icon: 'Bell',
                  iconColor: '#ffffff',
                  iconBg: '#FF8C00',
                  className: 'border-none hover:shadow-xl transition-all'
                }
              ],
              variant: 'iconCard',
            }}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* THE FINBYZ TECH ADVANTAGE - List (simple bullets) */}
      <section>
        <div className="container-custom py-8">
          <List
            title="The Finbyz Tech Advantage"
            items={[
              'Deep industry expertise in manufacturing, logistics, and trading for the textile sector.',
              'Proven track record: 200+ successful ERPNext projects, 7000+ users, 12+ countries.',
              'Customization beyond one-size-fits-all — tailored modules to fit unique business processes.',
              'End-to-end implementation, training, and lifetime support with a partnership mindset.',
              'Cutting-edge AI and automation for real competitive advantage.',
              'Agile, adaptive digital transformation approach for sustainable success.',
            ]}
            accentColor="#ea580c"
            iconColor="text-[#1A5276]"
          />
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section>
        <div className="py-8">
          <CTA
            data={{
              subheading: { text: 'Transform Your Textile Business', icon: 'Rocket' },
              title: 'Ready to streamline your Textile operations?',
              highlightText:'Textile',
              description: "Let Finbyz Tech help you weave a future of efficiency, profitability, and sustainable growth with an integrated ERPNext solution tailored for the textile industry.",
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
      </section>
    </>
  );
}
