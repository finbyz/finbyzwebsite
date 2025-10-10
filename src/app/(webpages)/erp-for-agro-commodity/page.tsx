'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import AgricultureFeatureGrid from '@/components/ai_components/AgricultureFeatureGrid';
import Image from 'next/image';
import { LucideQuote } from 'lucide-react';

export default function Page() {
  // Handlers for CTA buttons
  const handleContact = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  };
  const handleLearnMore = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/erp-software';
    }
  };

  return (
    <>
      <HeroSection
        headline="ERPNext for Commodity"
        highlightWords={["ERPNext", "Commodity"]}
        description="Discover how Finbyz Tech's ERPNext solutions revolutionize agricultural operations. Enhance efficiency, ensure compliance, and drive growth in your agro commodity business."
        primaryButton={{ text: 'Get Started', action: handleContact }}
        secondaryButton={{ text: 'Learn More', action: handleLearnMore }}
        heroImage={{
          alt: 'ERPNext for Commodity',
          src: '/images/Web Portal Development.svg',
          videoSrc: '/images/Agro_Slide_for_Site.mp4',
        }}
      />

      {/* Introduction Section */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl text-[#1A5276] font-bold mb-4">ERPNext for Agriculture Industry</h2>
          <p className="text-gray-700 mb-6">
            Looking to integrate your agro-business with a modern ERP solution? Adopting ERPNext for agriculture is essential in today’s evolving landscape, as the sector is foundational to food security and national development. By organizing business data systematically, ERP agro solutions empower effective decision-making and enhance long-term operational efficiency. ERP systems deliver real-time visibility across processes and unify the agricultural workforce on a single digital platform.
          </p>
          <QuoteBlock
            text="Agriculture is not crop production as popular belief holds - it's the production of food and fiber from the world's land and waters. Without agriculture, it is not possible to have a city, stock market, banks, university, church or army. Agriculture is the foundation of civilization and any stable economy. – Allan Savory"
            isHeading={false}
          />
          <p className="text-gray-700 mt-6 mb-6">
            The agricultural industry remains the backbone of the Indian economy. Although traditionally managed through manual practices, the rise of ERP agro technology has introduced automation and scalability to agribusinesses. ERP software for agriculture streamlines procurement, distribution, supply chain management, and quality control — helping agro commodity businesses maintain high standards while managing costs effectively.
          </p>
          <QuoteBlock
            text="Every organization that implements an ERP system is, in effect, reengineering.- Marianne Bradford"
            isHeading={false}
          />
          <p className="text-gray-700 mt-6">
            Implementing an agricultural ERP system offers powerful features that drive growth and sustainability. From minimizing paperwork to optimizing production levels, ERPNext for agriculture provides customizable modules tailored to farm operations, commodity management, and agri-supply chains. Below are some of the most impactful features an ERP system delivers for modern agriculture.
          </p>
        </div>
      </Section>

      {/* Features Grid Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl text-[#1A5276] font-bold text-center mb-10">Features that ERP Offers in the Agricultural Sector</h2>
          <AgricultureFeatureGrid
            features={[
              {
                title: 'Agricultural Data',
                description:
                  'With the rise of agricultural ERP systems, managing data from modern equipment, innovative farming techniques, and digital models becomes seamless. An ERPNext for agriculture system integrates these diverse elements on a unified, Cloud-based platform, streamlining collaboration across departments and contributing to national economic growth.'
              },
              {
                title: 'Agricultural Sales',
                description:
                  'An ERP agro solution reduces manual errors, enhances sales productivity, and empowers sales teams with intelligent insights. By integrating innovation and product features, agricultural ERP software also helps manufacturers effectively market and distribute their goods while increasing profitability.'
              },
              {
                title: 'Managing Processes',
                description:
                  'Agricultural ERP platforms streamline operations such as order processing, inventory tracking, dispatch scheduling, and procurement. ERPNext for agriculture enables organizations to align these processes with sector-specific goals, driving efficiency and compliance through advanced digital tools.'
              },
              {
                title: 'Government Compliance',
                description:
                  'Agro commodity businesses face numerous local and national compliance requirements. Agricultural ERP systems automate documentation and ensure adherence to regulations, helping minimize human error and legal risk in the procurement and sales lifecycle.'
              }
            ]}
          />
        </div>
      </Section>

      {/* Additional Features List Section */}
      <Section>
        <div className="container-custom py-8 relative">
          <div className="absolute right-0 bottom-0 hidden sm:block opacity-70 pointer-events-none">
            <Image src="/images/three-hexagon.svg" alt="hexagon background" width={120} height={120} className="animate-pulse" />
          </div>
          <List
            title="Other additional features of Our Agricultural ERP Solution:"
            items={[
              'Crop and Land Management: Monitor crop cycles, soil health, and land utilization to optimize yields and maintain soil fertility.',
              'Inventory Management: Real-time tracking of seeds, fertilizers, and equipment to prevent stockouts and overstocking.',
              'Financial Oversight: Detailed budgeting and expense tracking to enhance profitability and financial planning.',
              'Supply Chain Integration: Streamlined processes from procurement to distribution, ensuring timely delivery and traceability.',
              'Regulatory Compliance: Automated documentation and reporting to adhere to agricultural standards and certifications.'
            ]}
          />
        </div>
      </Section>
      {/* testimonial */}

      {/* Benefits List Section */}
      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl text-[#1A5276] font-bold text-center mb-6">Benefits of Implementing ERPNext in Agriculture</h2>
          <p className="text-gray-700 text-center mb-6">
            Above the general <a href="https://finbyz.tech/benefits-of-erp" target="_blank" className="text-blue-600 underline">benefits of ERP Software</a>, there are various benefits, specific for Agro-Industry, some of them are as below
          </p>
          <List
            title=""
            items={[
              'Enhanced Decision-Making: Access to real-time data facilitates informed choices regarding planting schedules, resource allocation, and market strategies.',
              'Operational Efficiency: Automation of routine tasks reduces manual labor, minimizes errors, and accelerates processes.',
              'Sustainability: Efficient resource management contributes to sustainable farming practices and environmental conservation.',
              'Scalability: Our ERP solutions are designed to grow with your business, accommodating expanding operations and market demands.',
              'Easy control and handling of operations: Records of all the resources and operations provides the business to evaluate, review and control the activities.',
              'Helps in future efficient planning: Manage your purchase and sales quantities with efficient planning tool based on projected inventory.'
            ]}
          />
          <div className="mt-8">
            <p className="text-gray-700 mb-6">
              We can help you analyze carefully all the needs and requirements of your business and then suggest you the solution that can help in increasing profits, productivity and control. There are many challenges in Implementing ERP software for agriculture industry, but adopting the latest technology is the only way to grow your business. We provide full hand holding in your journey to adopt <a href="/erp-software" className="text-blue-600 underline">ERP software</a> for effective management of procurement, supply chain and distribution of agro-products.
            </p>
            <QuoteBlock
              text="Without change, performance would never improve. -Marianne Bradford."
              isHeading={false}
            />
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your Agro Business?',
                icon: 'leaf',
              },
              title: 'Get Started with ERPNext for Agriculture',
              highlightText:"ERPNext for Agriculture",
              description: 'Contact our experts to discuss your requirements and see how ERPNext can revolutionize your agricultural operations.',
              primaryButton: {
                text: 'Request a Demo',
                icon: 'arrowRight',
                action: handleContact,
              },
              secondaryButton: {
                text: 'Learn More',
                icon: 'info',
                action: handleLearnMore,
              },
              trustIndicator: {
                text: 'Trusted by leading agro businesses',
                icon: 'checkCircle',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
