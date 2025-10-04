'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import ModuleSection from '@/components/ai_components/ModuleSection';

const modules = [
  {
    title: 'Account',
    image: '/api/fb/n/files/module-account.svg',
    alt: 'Account',
    quote: 'Accounting is the language of Business - Warren Buffet.',
    description: 'Accounts module delivers insight into the key account needs of your organization and lets you manage the organizational expenses by delivering valuable insights. It allows you to automate financial and accounting activities such as Sales Invoice, Purchase Invoice and Payment Entries. You can also manage your assets with automated depreciation entries at a selected period.',
    features: [
      'Multi-company accounting with the possibility to get combined accounting reports.',
      'Automated payment reminders for your receivables.',
      'Easy Integration with CRM.',
      'Multi-currency accounting for export/import and hedging.',
      'Manage term loans with scheduled automated ECS accounting entries.',
      'Detail analytical reports on sales, purchase, gross profit.'
    ]
  },
  {
    title: 'CRM',
    image: '/api/fb/n/files/module-crm.svg',
    alt: 'CRM',
    quote: 'If you are not taking care of your customer, your competitors will. - Bob Hooey',
    description: 'The CRM Module of ERP solutions allows you to optimally manage your relationship with the customers by providing you a broader range of functionalities that are specially designed to improve your customer service. Say no to searching multiple platforms like emails to accounting software to get 360-degree view of the customer, you can get conversations, orders, invoices, deliveries and payment details all on single page.',
    features: [
      'Manage full conversion cycle from Lead -> Inquiry -> customer management.',
      'Never forget to do follow-up calls on time through system reminders.',
      'Timeline feature like Facebook for each customer/lead allows you to view all mail/phone conversations on a single page.',
      'Make delegation and monitoring of tasks task more efficient through system generated escalation emails.'
    ]
  },
  {
    title: 'Inventory',
    image: '/api/fb/n/files/module-inventory.svg',
    alt: 'Inventory',
    quote: 'Inventory is money sitting around in another form. - Rhonda Adams',
    description: 'Stock Inventory management is the heart of any ERP. Here you can not only check the current stock levels with valuation, but you can also see the projected quantity of stock based on purchase orders, sales orders and production orders in hand. The versatility of this ERP makes stock management module highly suitable for all forms of businesses.',
    features: [
      'Manage exact location storage space though Tree structure of the warehouse.',
      'Possibility of Serial No/Batchwise inventory management.',
      'Generate product bundles selling multiple items together.',
      'Create multiple price lists for each item, including multi-currency price list.',
      'Allow seasonal discounts or offer special pricing to loyal customers through Pricing rules based on customer, Customer Group, Territory or Season.',
      'Strong quality control based on predefined inspection criteria to be filled in quality check before receipt of delivery of item.'
    ]
  },
  {
    title: 'Purchase',
    image: '/api/fb/n/files/module-purchase.svg',
    alt: 'Purchase',
    quote: 'You sell on Emotion, But you justify a Purchase with Logic. - Joseph Sugarman',
    description: 'Manage the purchase through workflow of material request. You can create a request for a quotation and send it in mail to multiple suppliers with the click of a button. Ensuring multiple quotations are received for the requirement and choosing the best quote for purchase order, you can improve the efficiency of your purchase department. In fact, this can improve your bottom line by bringing down your cost of goods.',
    features: [
      'Manage your sourcing activities by comparing quotes of multiple suppliers.',
      'Send request for quotation to multiple suppliers on click of a button.',
      'Item-wise or supplier-wise purchase price analytics.',
      'Rate suppliers based on various factors from delivery time to the quality of the product.',
      'Maintain buffer stock with automatic purchase requisition if available quantity in warehouse is below the defined level.'
    ]
  },
  {
    title: 'Manufacturing',
    image: '/api/fb/n/files/module-manufacturing.svg',
    alt: 'Manufacturing',
    quote: 'This is where the real work gets done.',
    description: 'The Manufacturing part of the ERP has been designed to serve businesses in diverse industry backgrounds. The versatility of the software allows SMEs to manage their manufacturing activities with minimal data entries. The system is capable of managing the cost of manufactured goods based on raw materials consumed and operational cost based on manufacturing activity time.',
    features: [
      'Manage workstations and standardize operations to be performed with benchmark timing.',
      'Allows Multiple Bill of Materials(BOM) for single item with variation in manufacturing formula.',
      'Manage not only inventory but also operational cost and workstation availability through BoM.',
      'Production planning tool for scheduling manufacturing activities along with sub-assemblies.',
      'Production analysis for each batch against the benchmark for getting possible areas of improvement.'
    ]
  },
  {
    title: 'Human Resource',
    image: '/api/fb/n/files/module-hr.svg',
    alt: 'Human Resource',
    quote: "You don't build a business. You build People and then people build the business. - Zig Ziglar",
    description: 'Human resource is most important for but ignored part of most of SMEs. The reduction in time wasted in non-core activities and goal-oriented approach increases the productivity of employees. Automation of attendance, payroll and expense claim allows better tracking and reduced redundancies.',
    features: [
      'Manage Employee attendance.',
      'Automated Payroll Processing.',
      'Leave/holiday management.',
      'Expense claim management.',
      'Job openings and applicants.',
      'Professional Appraisal system.',
      'Training and feedback.'
    ]
  },
  {
    title: 'Asset',
    image: '/api/fb/n/files/asset.svg',
    alt: 'Asset',
    quote: 'Know what you own, and know why you own it. - Peter Lynch',
    description: 'ERPNext simplifies asset management from procurement to disposal, including IT infrastructure and equipment, all through a centralized system. With multiple capabilities integrated into a single application, managing assets has never been easier.',
    features: [
      'ERPNext offers a centralized system for asset management.',
      'The platform facilitates managing assets from procurement to disposal.',
      'IT infrastructure and equipment can be managed through the system.',
      'Multiple capabilities are integrated into a single application to make asset management more efficient.',
      'Asset masters can be created and managed.',
      'Depreciation and maintenance can be tracked.',
      'Real-time reporting and analytics are available to assist with decision-making.'
    ]
  },
  {
    title: 'Project',
    image: '/api/fb/n/files/Project Management.svg',
    alt: 'Project Management',
    quote: 'A goal without a plan is just a wish. - Antoine de Saint-Exupéry',
    description: 'ERPNext project management assists in the planning, organization, and administration of the various tasks and activities involved in managing a project, ensuring that they are documented and tracked.',
    features: [
      'ERPNext project management assists in planning, organizing, and administering various tasks and activities of a project.',
      'It helps to break down a project into smaller tasks and assign responsibilities.',
      'Project timelines, budgets, and progress can be tracked and monitored.',
      'Communication among team members can be managed through the system.',
      'Project templates can be created and reused.',
      "Real-time analytics and reporting are available to monitor the project's progress."
    ]
  },
  {
    title: 'Support',
    image: '/api/fb/n/files/module-support.svg',
    alt: 'Support',
    quote: 'Delivery Excellence for creating a magical customer experience.',
    description: 'Poor customer service and support cost companies billions of dollars each year. According to the Customer Engagement Index by almost half of consumers will stop buying from a company and move to a competitor within one day of having poor customer service. Best brands are known for their best in class service and support. ERP helps you create a system for tracking and resolving customer issues. You can also manage guarantee/warrantee of your products.',
    features: [
      'Ticketing system for issue recording, where tickets can be automatically created through customer email.',
      'Possibility of assigning issues to the relevant person for resolution.',
      'Automated email/sms to the customer on a resolution of issue.',
      'Manage invoicing for maintenance/repair service for items out of warranty or AMC.',
      'Take customer feedback against service to maintain quality standards.'
    ]
  },
  {
    title: 'Exim',
    image: '/api/fb/n/files/module-exim.svg',
    alt: 'Exim',
    quote: 'The Foreign Trade Should be Fair Rather than Free. - Lyn Nofziger',
    description: 'Given the complex nature of export-import business we designed a special module, which will allow you to manage your requirements more effectively. As you must deal with many regulations the accuracy of the documents is most important for the organization. There are also local laws providing special benefits to exports like Duty drawback, MEIS, etc which require special accounting treatment. Import / Export finance also has multi-currency nature and many times it come with the fixed repayment date.',
    features: [
      'Generate all export documents like Draft BL, Shipping Invoice, Customer Invoice, Packing List, etc on a single click.',
      'Manage export/import finance with maturity date.',
      'Letter of credit facility withdrawn amount, conditions and maturity.',
      'Manage forward booking in system and check your hedging ratio.',
      'Calculate Duty drawback, MEIS and IGST on exports and make accounting entries for these receivables.',
      'Manage calculations of Export and Import against Advance Authorization license.'
    ]
  }
];

export default function Page() {
  return (
    <>
      <HeroSection
        headline="Modules of ERP Software"
        highlightWords={["ERP", "Software", "Modules"]}
        description="From Customer Relationship Management (CRM) to Supply Chain Management (SCM), from Accounts to HR we cover it all. Our ERP Software is highly developed which helps any business to get a control on management of almost all the major functions of the business."
        primaryButton={{
          text: 'Get a Demo',
          action: () => {
            if (typeof window !== 'undefined') {
              window.location.href = '/contact';
            }
          }
        }}
        secondaryButton={{
          text: 'Download Brochure',
          action: () => {
            if (typeof window !== 'undefined') {
              window.open('/api/fb/n/files/erp-modules.svg', '_blank');
            }
          }
        }}
        heroImage={{
          alt: 'Modules of ERP Software',
          src: '/api/fb/n/files/erp-modules.svg',
          videoSrc: null
        }}
      />
      <Section useGradient>
        <div className="container-custom py-8">
          {modules.map((mod, idx) => (
            <div key={mod.title} className="mb-16 last:mb-0">
              <ModuleSection {...mod} />
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your Business?',
                icon: 'Rocket',
              },
              title: 'Get Started with ERP Software Modules',
              description: 'Unlock the full potential of your business with our comprehensive ERP modules. Contact us for a personalized demo or download our brochure to learn more.',
              primaryButton: {
                text: 'Request Demo',
                icon: 'ArrowRight',
                action: () => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/contact';
                  }
                }
              },
              secondaryButton: {
                text: 'Download Brochure',
                icon: 'Download',
                action: () => {
                  if (typeof window !== 'undefined') {
                    window.open('/api/fb/n/files/erp-modules.svg', '_blank');
                  }
                }
              },
              trustIndicator: {
                text: 'Trusted by 100+ Businesses',
                icon: 'ShieldCheck',
              }
            }}
          />
        </div>
      </Section>
    </>
  );
}
