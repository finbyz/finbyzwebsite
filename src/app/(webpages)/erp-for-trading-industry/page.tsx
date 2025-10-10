'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import FeatureGrid from '@/components/ai_components/FeatureGrid';
import CTA from '@/components/sections/cta';
import TradingGainTabs from '@/components/ai_components/TradingGainTabs';
import Image from 'next/image';
import { LucideArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Customer Management',
    image: 'api/fb/n/files/icon-customer-management.svg',
    alt: 'Customer Management',
    description: 'Data of all customers, their buying patterns, potential customers.'
  },
  {
    title: 'Quotation Management',
    image: 'api/fb/n/files/icon-quotation-management.svg',
    alt: 'Quotation Management',
    description: 'Issue of quotes, conversion, and management of quotation workflow.'
  },
  {
    title: 'Order Management',
    image: 'api/fb/n/files/icon-order-management.svg',
    alt: 'Order Management',
    description: 'Ensure timely delivery, billing and payment against the sales and purchase orders.'
  },
  {
    title: 'Inventory Management',
    image: 'api/fb/n/files/icon-blog-inventory-control-packages.svg',
    alt: 'Inventory Management',
    description: 'Get batch-wise current stock as well as projected stock for all the items.'
  },
  {
    title: 'Supplier Management',
    image: 'api/fb/n/files/icon-supplier-management.svg',
    alt: 'Supplier Management',
    description: 'Suppliers information, feedback to suppliers and quality controls.'
  },
  {
    title: 'Brokerage Commissions',
    image: 'api/fb/n/files/icon-brokerage-commission.svg',
    alt: 'Brokerage Commissions',
    description: 'Calculate and track item-wise brokerage against the sales/ purchase orders.'
  }
];

const gainTabs = [
  {
    title: 'Efficient management of leads:',
    description: 'ERP for trading businesses helps you in catering to the demands of the goods and make it easier to track and manage goods in the pipeline. The leads from the manufacturers or suppliers are efficiently managed by this automated system.'
  },
  {
    title: 'Handling of stocks:',
    description: 'The other most important function that ERP helps is inventory management. This prevents the business from losing the tracks of stocks and leads to theft and errors. It provides you about the insights of actual stock being held in the warehouses and forecasting the future demands.'
  },
  {
    title: 'Competitive advantage:',
    description: 'Effective management of all the processes in the trading business makes you a one-step-ahead from your competitors who still follow traditional ways of management. It also studies the customer needs and patterns of buying goods, providing methods to make strategic plans for future growth.'
  },
  {
    title: 'Sales Strategies:',
    description: 'Tracking of sales orders, invoices, buying behavior of the customers and the study of demand patterns helps the traders to strategically decide new plans and ways to promote their goods, to increase the sales volumes.'
  },
  {
    title: 'Effective sourcing:',
    description: 'Quantity and quality of goods, delivery times, and supplier’s data are handled completely by ERP for trading business. Sourcing of new orders becomes effective when all the existing orders and suppliers information is systematically stored and tracked.'
  },
  {
    title: 'Growth of business:',
    description: 'Employees in your organization can focus on the important and crucial decisions as all the data systematically and efficiently stored by an automated solution. This also motivates the sales team to work on their skills and enhance them to achieve the organization targets and aims for growth.'
  }
];

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERP for Trading"
        highlightWords={["ERP", "Trading"]}
        description="Unlock premium ERP for trading sector: Optimize processes, boost efficiency, and fuel business expansion. Transform your enterprise now!"
        primaryButton={{
          text: 'Get Started',
          action: () => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }
        }}
        secondaryButton={{
          text: 'Watch Demo',
          action: () => {
            window.open('https://www.youtube.com/results?search_query=erp+for+trading', '_blank');
          }
        }}
        heroImage={{
          alt: 'ERP for Trading',
          src: 'api/fb/n/files/erp for trading.svg',
          videoSrc: 'api/fb/n/files/for_website.mp4',
        }}
      />

      <Section>
        <div className="container-custom py-8">
          <div className="flex flex-col items-center gap-4 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-center">ERP Software for Trading Business</h2>
            <QuoteBlock
              text="The secret to being successful from a trading perspective is to have an indefatigable and an undying and unquenchable thirst for information and knowledge.- Paul Tudor Jones"
              isHeading={false}
            />
            <div className="mt-4 space-y-4 text-muted-foreground text-center">
              <p>
                In this new age information is the key to success. ERP for a Trading business not only helps collect this information, but it converts in knowledge which can convert your quotations to successful sales orders.
              </p>
              <p>
                Trading businesses are said to be the link between the manufacturers or suppliers and the end customers. They deal in one specific good or a few categories of goods that render benefit to them. The main function in the trading business is the management of logistics and distribution of the goods and products. Traditional ways of managing the sales of these goods are very hectic and tedious. The automation of these processes through ERP software can lead to more efficiency and growth in sales and distribution.
              </p>
              <p>
                Every piece of information and knowledge is important for every type of business.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <div className="flex flex-col items-center gap-4 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-center">Features of ERP for Trading Business</h2>
            <p className="text-muted-foreground text-center">
              The ERP software we offer has many features, but below are a few features which we think can add substantial value to the Trading business. Eventually, the ROI of any software is what counts the most, which can be generated through the featured listed below.
            </p>
            <div className="w-full mt-8">
              <FeatureGrid features={features} />
            </div>
          </div>
        </div>
      </Section>


      <Section>
        <div className="container-custom py-8">
          <div className="flex flex-col items-center gap-4 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-center">What will you gain?</h2>
            <p className="text-muted-foreground text-center">
              The most important question while automating any function, arises is that what will you gain out of it? Or is it worth spending money and time on new technology for your business? The benefits of ERP for trading business will help you answer these questions.
            </p>
            <div className="w-full mt-8">
              <TradingGainTabs items={gainTabs} />
            </div>
          </div>
        </div>
      </Section>

      

      <Section useGradient>
        <div className="container-custom py-8">
          <div className="flex flex-col items-center gap-4 animate-fade-in-up">
            <p>
              ERP for trading business has proved to be quite a boon for the traders as well as customers. It helps the traders to procure new suppliers and reach out to new and untapped markets of customers due to the automated services. Management of all the functions such as procurement, supply chain, distribution and sales become easier and result-oriented. Handling of all the real-time information about stocks prevents loss and theft issues. Advantage of costs and time is the basis of every ERP solution regardless of the industry it is integrated into. Traders take advantage of this time and cost-effectiveness to grow their profits and business.
            </p>
            <QuoteBlock
              text="Optimizing a business function is futile and non-value-added if it is not part of a revenue/competitive business process. - Worster, Weirick, Andera."
              isHeading={false}
            />
          </div>
        </div>
      </Section>

      <CTA
        data={{
          subheading: {
            text: 'Ready to transform your trading business?',
            icon: 'rocket',
          },
          title: 'Get Started with ERP for Trading',
          highlightText:"ERP for Trading",
          description: 'Unlock efficiency, boost sales, and gain a competitive edge. Contact us today to see how our ERP can revolutionize your trading operations.',
          primaryButton: {
            text: 'Request a Demo',
            icon: 'arrow-right',
            action: () => {
              window.open('/contact', '_self');
            },
          },
          secondaryButton: {
            text: 'Learn More',
            icon: 'info',
            action: () => {
              window.open('/erp-software', '_self');
            },
          },
          trustIndicator: {
            text: 'Trusted by leading trading businesses',
            icon: 'check-circle',
          },
        }}
      />
    </>
  );
}
