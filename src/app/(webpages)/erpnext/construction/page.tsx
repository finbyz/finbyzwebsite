'use client';
import DynamicHero from '@/components/sections/dynamic-hero';
import TextSection from '@/components/sections/text';
import ResponsiveCardGrid from '@/components/sections/responsive-card-grid';
import Comment from '@/components/sections/comment';


export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <DynamicHero
        headline="Construction ERP Software Solutions for Project Management"
        highlightWords={["ERP", "Construction", "Project Management"]}
        description="Streamline construction projects, resources, and finances with advanced ERPNext solutions. Optimize operations, reduce costs, and boost efficiency in the building industry."
        heroImage={{
          alt: 'Construction ERP Software Solutions for Project Management',
          src:'/images/erp-for-construction-industry.png',
         
        }}
        primaryButton={{ text: 'Get Started', action: 'https://finbyz.tech/contact' }}
        secondaryButton={{ text: 'Learn More', action: () => {
            const el = document.getElementById('contruction-resources');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}}
        accentColor="orange"
      />

      {/* OVERVIEW SECTION */}
      <section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
            Overview
          </h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
            Discover how our comprehensive ERPNext solutions empower the construction industry to manage projects, resources, and operations with unparalleled efficiency. We provide tailored software to streamline complex workflows, ensuring timely project delivery and enhanced profitability. Partner with us for robust, scalable ERP solutions designed for your construction business. No matter the complexities of your projects or the scale of your operations, our ERPNext platform brings everything together, supporting strategic decision-making, transparency, and growth. From initial planning to post-project analytics, we enable construction companies to transform operational efficiency, save costs, and exceed their clients' expectations.
          </p>
           <h2 className="text-3xl font-bold mb-4 text-[#1A5276] drop-shadow-sm animate-fade-in-up">
            Transform Your Construction Business with Advanced ERP Solutions
          </h2>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
          The construction industry thrives on precision, timely execution, and efficient resource allocation. Yet, managing complex projects, diverse teams, vast inventories, and stringent financial controls can be a monumental challenge. Are you struggling with project delays, budget overruns, or fragmented data across different departments?
          </p>
          <p className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify">
          Finbyz Tech offers robust and tailored ERPNext solutions designed specifically to address the unique demands of the construction sector. We empower construction companies to achieve operational excellence, enhance project profitability, and drive sustainable growth by providing a unified platform for all business processes.
          </p>
        </div>
      </section>

      {/* INTRO TEXT SECTION */}
         
      {/* <TextSection
        data={{
          title: 'Transform Your Construction Business with Advanced ERP Solutions',
          paragraphs: [
            '',
            ''
          ]
        }}
      /> */}

      {/* CHALLENGES SECTION */}
      <ResponsiveCardGrid
        className="animate-fade-in-up"
        data={{
          title: 'The Unique Challenges of the Construction Industry',
          subtitle: '',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'Inefficient Project Management',
              description: 'Difficulty tracking progress, managing changes, and ensuring adherence to schedules.',
              icon: 'CalendarClock',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Resource Mismanagement',
              description: 'Poor allocation of labor, equipment, and materials leading to delays and increased costs.',
              icon: 'Users',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'Lack of Financial Control',
              description: 'Inaccurate budgeting, cash flow issues, and challenges in cost-to-completion analysis.',
              icon: 'DollarSign',
              iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'Fragmented Communication',
              description: 'Siloed departments and lack of real-time information sharing between sites and headquarters.',
              icon: 'MessageSquare',
              iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 5,
              title: 'Supply Chain Disruptions',
              description: 'Inefficient procurement, inventory management, and vendor coordination.',
              icon: 'Truck',
              iconColor: "#ffffff",
              iconBg: "#FF3333",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 6,
              title: 'Compliance & Risk Management',
              description: 'Struggling to meet regulatory requirements and mitigate project risks effectively.',
              icon: 'ShieldCheck',
              iconColor: "#ffffff",
              iconBg: '#FFB347',
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 7,
              title: 'Data Silos',
              description: 'Critical information scattered across spreadsheets and disparate systems, hindering informed decision-making.',
              icon: 'Database',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 8,
              title: 'Other Operational Challenges',
              description: 'Numerous other workflow, compliance, or process issues inherent to construction.',
              icon: 'AlertTriangle',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            }
          ]
        }}
      />

      {/* WHY ERPNEXT SECTION */}
      <ResponsiveCardGrid
        className="animate-fade-in-up"
        data={{
          title: 'Why ERPNext is the Ideal Solution for Construction',
          subtitle: '',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'Centralized Data',
              description: 'A single source of truth for all project, financial, and operational data.',
              icon: 'Layers',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Enhanced Visibility',
              description: 'Real-time insights into project status, resource utilization, and financial performance.',
              icon: 'BarChart2',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'Improved Collaboration',
              description: 'Seamless communication and data sharing across teams, sites, and departments.',
              icon: 'Share2',
              iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'Streamlined Workflows',
              description: 'Automation of routine tasks, reducing manual errors and improving efficiency.',
              icon: 'Repeat',
              iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 5,
              title: 'Scalability',
              description: 'A system that grows with your business, adapting to new projects and expanding operations.',
              icon: 'TrendingUp',
              iconColor: "#ffffff",
              iconBg: "#FF3333",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 6,
              title: 'Industry Best Practices',
              description: 'Built-in features and flexibility specifically for the construction industry.',
              icon: 'MessageCircle',
             iconColor: "#ffffff",
              iconBg: '#FFB347',
              className: 'border-none hover:shadow-xl transition-all',
            }
          ]
        }}
      />

      {/* FINBYZ TEC'S TAILORED SOLUTIONS SECTION */}
      <div id='contruction-resources'></div>
      <TextSection
        data={{
          title: "Finbyz Tec's Tailored ERPNext Solutions for Construction",
          paragraphs: [
            "As a Certified ERPNext Partner with over a decade of experience and 200+ successful implementations, Finbyz Tec specializes in delivering industry-specific ERP solutions. We don't just implement software; we craft a digital strategy that aligns with your business goals, leveraging ERPNext's capabilities to solve your most pressing construction challenges.",
            "Our comprehensive ERPNext implementation for the construction industry includes innovative project management, robust financial controls, resource and equipment tracking, supply chain and vendor management, quality and compliance, and advanced business intelligence." ]
        }}
      />

      {/* ADVANCED PROJECT MANAGEMENT CARDS */}
      <ResponsiveCardGrid
        className="animate-fade-in-up"
        data={{
          title: 'Advanced Project Management',
          subtitle: '',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'Project Planning & Scheduling',
              description: 'Create detailed project plans, define tasks, set milestones, and manage dependencies with Gantt charts.',
              icon: 'ClipboardList',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Progress Tracking',
              description: 'Monitor real-time project progress, track actual vs. planned performance, and identify potential delays.',
              icon: 'BarChart3',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'Subcontractor Management',
              description: 'Efficiently manage contracts, work orders, and payments for subcontractors.',
              icon: 'UserCheck',
               iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'Change Order Management',
              description: 'Systematically track and manage change requests, ensuring proper approvals and impact assessment.',
              icon: 'FileCheck',
              iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            }
          ]
        }}
      />

      {/* ROBUST FINANCIAL MANAGEMENT CARDS */}
      <ResponsiveCardGrid
        className="animate-fade-in-up"
        data={{
          title: 'Robust Financial Management',
          subtitle: '',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'Budgeting & Cost Control',
              description: 'Develop detailed project budgets, track actual expenses, and analyze cost variances in real-time.',
              icon: 'BarChart',
             iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Procurement & Purchasing',
              description: 'Streamline the entire procure-to-pay cycle, from requisition to vendor invoice processing.',
              icon: 'ShoppingCart',
             iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'Billing & Invoicing',
              description: 'Generate accurate invoices based on project milestones, progress, or time and materials.',
              icon: 'FileText',
              iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'Payroll Integration',
              description: 'Manage employee payroll, attendance, and expense claims efficiently.',
              icon: 'Wallet',
             iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 5,
              title: 'Asset Accounting',
              description: 'Track fixed assets like machinery and equipment, including depreciation and maintenance costs.',
              icon: 'PackageCheck',
               iconColor: "#ffffff",
              iconBg: "#FF3333",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 6,
              title: 'More Financial Tools',
              description: 'An integrated suite for every accounting and expense need.',
              icon: 'Calculator',
               iconColor: "#ffffff",
              iconBg: '#FFB347',
              className: 'border-none hover:shadow-xl transition-all',
            }
          ]
        }}
      />

      {/* RESOURCE & EQUIPMENT MANAGEMENT CARDS */}
      <ResponsiveCardGrid
        className="animate-fade-in-up"
        data={{
          title: 'Efficient Resource & Equipment Management',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'Labor Management',
              description: 'Allocate workforce effectively, track labor hours, and manage employee skills and certifications.',
              icon: 'Users2',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Equipment Tracking',
              description: 'Monitor equipment location, utilization, maintenance schedules, and breakdown history.',
              icon: 'Truck',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'Inventory & Material Management',
              description: 'Optimize material procurement, track inventory levels across multiple sites, and minimize waste.',
              icon: 'Layers',
                iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'Tools & Consumables',
              description: 'Manage smaller tools and consumables efficiently to ensure availability when needed.',
              icon: 'Wrench',
              iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            }
          ]
        }}
      />

      {/* SUPPLY CHAIN & VENDOR MANAGEMENT CARDS */}
      <ResponsiveCardGrid
        className="animate-fade-in-up"
        data={{
          title: 'Supply Chain & Vendor Management',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'Vendor Database',
              description: 'Maintain a comprehensive database of suppliers, track performance, and manage contracts.',
              icon: 'Contact',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Purchase Orders & Receipts',
              description: 'Automate purchase order generation, goods receipt, and quality inspection processes.',
              icon: 'FilePlus2',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'Warehouse & Site Inventory',
              description: 'Manage inventory levels at central warehouses and individual project sites.',
              icon: 'Warehouse',
              iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'Vendor Coordination',
              description: 'Seamlessly coordinate with vendors for optimal supply chain performance.',
              icon: 'Network',
              iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            }
          ]
        }}
      />

      {/* QUALITY, SAFETY & COMPLIANCE CARDS */}
      <ResponsiveCardGrid
        className="animate-fade-in-up"
        data={{
          title: 'Quality, Safety & Compliance',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'Quality Control',
              description: 'Implement quality checks at various stages of a project, ensuring adherence to standards.',
              icon: 'CheckCircle2',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Safety Management',
              description: 'Track safety incidents, manage safety equipment, and ensure regulatory compliance.',
              icon: 'HardHat',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'Document Management',
              description: 'Centralize all project-related documents, drawings, contracts, and permits for easy access and version control.',
              icon: 'FileStack',
              iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'Regulatory Compliance',
              description: 'Maintain records and reporting for governmental and industry compliance needs.',
              icon: 'FileCheck2',
              iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            }
          ]
        }}
      />

      {/* BUSINESS INTELLIGENCE & REPORTING CARDS */}
      <ResponsiveCardGrid
        className="animate-fade-in-up"
        data={{
          title: 'Business Intelligence & Reporting',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'Real-time Dashboards',
              description: 'Gain instant insights into KPIs like project profitability, budget adherence, and resource utilization.',
              icon: 'Monitor',
             iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Custom Reports',
              description: 'Generate highly customizable reports for financial analysis, project status, and operational efficiency.',
              icon: 'FileBarChart',
                 iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'Data Analytics',
              description: 'Leverage data to identify trends, forecast needs, and make data-driven decisions.',
              icon: 'PieChart',
             iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'KPI Tracking',
              description: 'Monitor performance metrics with real-time and historical data visualizations.',
              icon: 'BarChart3',
               iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            }
          ]
        }}
      />

      {/* FINBYZ TEC ADVANTAGE SECTION */}
      <ResponsiveCardGrid
        className="animate-fade-in-up"
        data={{
          title: 'The Finbyz Tec Advantage: Your Partner in Digital Transformation',
          variant: 'iconCard',
          cards: [
            {
              id: 1,
              title: 'Deep Industry Knowledge',
              description: 'Decades of expertise in construction, manufacturing, and logistics for tailored digital strategies.',
              icon: 'Award',
              iconColor: "#ffffff",
              iconBg: "#1A5276",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 2,
              title: 'Custom Software Development',
              description: 'Bespoke modules and integrations for unique workflows and business rules.',
              icon: 'Code',
              iconColor: "#ffffff",
              iconBg: "#FF8C00",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 3,
              title: 'AI-Driven Automation',
              description: 'Integrate AI for smarter project scheduling, predictive maintenance, and resource allocation.',
              icon: 'Bot',
               iconColor: "#ffffff",
              iconBg: "#27AE60",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 4,
              title: 'End-to-End Implementation',
              description: 'From consultation through support, ensuring a smooth transition and successful adoption.',
              icon: 'CheckCircle',
               iconColor: "#ffffff",
              iconBg: "#8E44AD",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 5,
              title: 'Dedicated Support',
              description: 'Team of 30+ ERP consultants, developers, and experts provide continuous support.',
              icon: 'HelpCircle',
              iconColor: "#ffffff",
              iconBg: "#FF3333",
              className: 'border-none hover:shadow-xl transition-all',
            },
            {
              id: 6,
              title: 'Proven Track Record',
              description: '7000+ ERPNext users served across 12+ countries with measurable ROI.',
              icon: 'Globe',
              iconColor: "#ffffff",
              iconBg: '#FFB347',
              className: 'border-none hover:shadow-xl transition-all',
            }
          ]
        }}
      />

      {/* CEO QUOTE SECTION */}
      {/* <Comment
        data={{
          text: "\"In the construction industry, efficiency isn't just a buzzword – it's the bedrock of profitability and success. At Finbyz Tec, we believe in empowering businesses with solutions that bring clarity, drive efficiency, and deliver tangible impact. Our ERPNext implementations simplify complex construction processes, putting you in control of your projects, resources, and finances. We're not just selling software; we're providing a strategic advantage that helps you build smarter, faster, and more profitably.\"\n\n- Mukesh Variyani, CEO",
          symbol: ''
        }}
      /> */}
      <div className='container-custom mt-5'>
        <h2 className=' text-2xl md:text-2xl font-bold mb-4 text-[#1A5276] animate-fadeIn'>
          "In the construction industry, efficiency isn't just a buzzword – it's the bedrock of profitability and success. At Finbyz Tech, we believe in empowering businesses with solutions that bring clarity, drive efficiency, and deliver tangible impact. Our ERPNext implementations simplify complex construction processes, putting you in control of your projects, resources, and finances. We're not just selling software; we're providing a strategic advantage that helps you build smarter, faster, and more profitably."<br/>- Mukesh Variyani, CEO
        </h2>
      </div>
    </>
  );
}
