'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import FeatureCard from '@/components/ai_components/FeatureCard';
import BenefitCard from '@/components/ai_components/BenefitCard';
import ProcessPhasesTabs from '@/components/ai_components/ProcessPhasesTabs';


const heroHighlightWords = [ "Logistics", "Industry"];

const features = [
  {
    title: 'Customer Indent',
    image: '/images/icon-customer_indent.svg',
    alt: 'Customer Indent',
    description: 'Seamlessly manage customer requirements by creating indents with item details, source/destination, and delivery dates. All orders are centrally accessible for improved tracking and planning.'
  },
  {
    title: 'Truck Allocation',
    image: '/images/icon-truck_allocation.svg',
    alt: 'Truck Allocation',
    description: 'Assign vehicles based on indent requirements and delivery timelines. Track truck availability, driver assignment, and hire third-party trucks for optimal fleet utilization.'
  },
  {
    title: 'Trip Management',
    image: '/images/icon-trip_management.svg',
    alt: 'Trip Management',
    description: 'Comprehensive trip planning, fuel management, and expense tracking. Supports direct payments to drivers, monitors truck status, and maximizes resource utilization.'
  },
  {
    title: 'Integrated Paper-work',
    image: '/images/icon-integrated_paperwork_.svg',
    alt: 'Integrated Paper-work',
    description: 'Automate generation of transport documents like Lorry Receipts and freight challans. Teams collaborate with real-time access to delivery, cost, and transit documentation.'
  },
  {
    title: 'Truck Documents Management',
    image: '/images/icon-truck_document_management.svg',
    alt: 'Truck Documents Management',
    description: 'Track truck-related documents including insurance, permits, and driver licenses. Get renewal alerts to avoid penalties and stay compliant.'
  },
  {
    title: 'Truck Maintenance Management',
    image: '/images/icon-truck_maintenance.svg',
    alt: 'Truck Maintenance Management',
    description: 'Detailed truck maintenance scheduling, including oil/filter changes, repairs, and spare parts tracking. Manage costs and avoid downtime.'
  }
];

const benefits = [
  {
    
    title: 'Vendor Management',
    image: '/images/icon-vendor_management.svg',
    alt: 'Vendor management',
    description: 'Maintain a comprehensive supply chain process with standardized modules and procedures for each vendor.'
  },
  {
    title: 'Cost Efficiency',
    image: '/images/icon-efficient_cost.svg',
    alt: 'Efficient costs',
    description: 'Simplify tasks, reduce redundancies, and save time, leading to significant cost reductions.'
  },
  {
    title: 'Failure Reduction',
    image: '/images/icon-reduction_in_cost.svg',
    alt: 'Reduction in failure',
    description: 'Eliminate common issues such as vehicle damages, delivery delays, and tracking errors through integrated monitoring and management tools.'
  },
  {
    title: 'Billing and Accounting',
    image: '/images/icon-billing_and_accounting.svg',
    alt: 'Billing and accounting',
    description: 'Manage order billing seamlessly by integrating accounting systems with service delivery, providing clear insights into expenses and profit margins.'
  },
  {
    title: 'Multi-Location Coordination',
    image: '/images/icon-multiple_locations.svg',
    alt: 'Multiple locations',
    description: 'Facilitate strong collaboration among teams across various locations, ensuring timely order deliveries and reducing communication gaps.'
  }
];

const processPhases = [
  {
    title: 'Phase 1: Requirement Management',
    description: 'Handle client logistics requirements, including precautions, truck types, and dispatch scheduling.'
  },
  {
    title: 'Phase 2: Execution',
    description: 'Allocate resources like trucks and drivers as per requirements and execute service orders efficiently.'
  },
  {
    title: 'Phase 3: Reporting',
    description: 'Trace fleet capabilities, driver performance, and process completion times for continuous improvement.'
  },
  {
    title: 'Phase 4: Invoicing',
    description: 'Bill executed service orders promptly and send timely payment reminders to clients.'
  },
  {
    title: 'Phase 5: Damage Claims',
    description: 'Manage goods damage or loss claims by issuing credit notes, ensuring client satisfaction and trust.'
  }
];

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERPNext for Logistics Industry"
        highlightWords={heroHighlightWords}
        description="Discover how Finbyz Tech's ERP solutions streamline logistics operations, enhance efficiency, and provide real-time analytics for the logistics industry."
        primaryButton={{
          text: 'Get a Demo',
          action: () => {
            if (typeof window !== 'undefined') {
              window.location.href = '/contact';
            }
          }
        }}
        secondaryButton={{
          text: 'Learn More',
          action: "#benefits-section"
        }}
        heroImage={{
          alt: 'ERPNext for Logistics Industry',
          src: '/images/Logistic90ec93.svg',
          videoSrc: '/images/phases_.mp4',
        }}
      />

      {/* Introduction Section */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 text-[#1A5276]">ERP Software for Logistics Industry</h2>
          <p className="text-muted-foreground text-base mb-4">
            The logistics sector operates under constant pressure to enhance speed, reliability, and cost-effectiveness. An ERP for the logistics industry, specifically designed for its unique operational demands, is crucial for navigating these complexities. By integrating key processes into a unified platform, a robust logistics ERP system provides the clarity and control needed to streamline your entire supply chain, from initial order to final delivery. This is how leading businesses gain a competitive edge.
          </p>
          <QuoteBlock
            text="Today’s leading real-world retailer, Walmart, uses software to power its logistics and distribution capabilities, which it has used to crush its competition. ~Mark Andreesen"
            isHeading={false}
          />
          <p className="text-base mt-6">
            Transportation in logistics is concerned with the transfer of goods from one place to another, generally moving goods between warehouses of the same company or multiple companies. Implementing <a href="/erp/services/erp-software-development" className="text-primary underline hover:text-primary-foreground transition-colors" target="_blank">ERP system</a> for the logistics industry with respect to transportation is all about providing real-time information of all indirect costs, related to manpower, documentation, truck maintenance and their impact on profitability.
          </p>
          <p className="text-base mt-2" id="benefits-section">
            It tracks all the functions of logistics in an efficient manner making it easy for the decision makers.
          </p>
        </div>
      </Section>

      {/* Features Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: " #1A5276" }}>Features of ERP Software for Logistics Industry</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {features.map((feature, idx) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                image={feature.image}
                alt={feature.alt}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
        <div  className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-[#1A5276]">What Benefits Does ERP Software Offer in the Logistics Industry?</h2>
          <p className="text-base text-muted-foreground mb-6 text-center">
            ERP software revolutionizes logistics by streamlining operations from planning to quality control. It replaces manual processes with automation, enhancing efficiency and accuracy.
          </p>
          <h3 className="text-lg font-semibold mb-6 text-center text-[#1A5276]">Here are some of the benefits that ERP software provides in logistics:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <BenefitCard
                key={benefit.title}
                title={benefit.title}
                image={benefit.image}
                alt={benefit.alt}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section useGradient>
        <div className="container-custom py-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-center" style={{color:" #1A5276;"}}>ERP Software Process in the Logistics Industry</h2>
          <h3 className="text-lg font-semibold mb-8 text-center text-[#1A5276]">The simplified process followed by ERP software is as below:</h3>
          <div className="w-full text-center mb-8">
            <ProcessPhasesTabs phases={processPhases} />
          </div>
          {/* max-w-2xl */}
          <QuoteBlock
            text="Eighty-five percent of the reasons for failure are deficiencies in the systems and process rather than the employee. The role of management is to change the process rather than badgering individuals to do better. ~ W. Edwards Deming"
            isHeading={false}
          />
          <div className="mt-8 text-base text-muted-foreground text-justify">
            <p>
              Finbyz is committed to transforming logistics operations with our specialized ERPNext for logistics industry. As a trusted ERP implementation partner, we deliver tailored ERP solutions designed specifically for the logistics sector. Our expertise ensures seamless integration and optimization of logistics workflows, empowering businesses with greater transparency, real-time data access, and operational efficiency.
            </p>
            <br />
            <p>
              Our logistics ERP system streamlines critical functions such as fleet management, inventory control, transportation tracking, and maintenance scheduling. With ERP software for logistics industry, including vertical solutions like <a href="/erpnext/chemical/" className="text-primary underline hover:text-primary-foreground transition-colors" target="_blank">ERP for Chemical Industry</a>, <a href="/erpnext/manufacturing" className="text-primary underline hover:text-primary-foreground transition-colors" target="_blank">Manufacturing ERP</a>, <a href="/erpnext/engineering" className="text-primary underline hover:text-primary-foreground transition-colors" target="_blank">Engineering ERP Software</a>, and <a href="/erpnext/trading" className="text-primary underline hover:text-primary-foreground transition-colors" target="_blank">ERP for Trading</a>, businesses gain a unified platform that connects departments like <a href="/erpnext/modules/human-resource-system" className="text-primary underline hover:text-primary-foreground transition-colors" target="_blank">Human Resource Management</a>, finance, and marketing. This not only reduces manual documentation but also supports data-driven decision-making, resource optimization, and improved workforce productivity.
            </p>
          </div>
        </div>
      </Section>

    </>
  );
}
