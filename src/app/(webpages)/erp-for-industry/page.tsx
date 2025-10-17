'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import CTA from '@/components/sections/cta';
import IndustryTabs from '@/components/ai_components/IndustryTabs';

export default function Page() {
  const industryTabs = [
    {
      key: 'chemical',
      title: 'ERP for Chemical',
      image: '/images/nav-chemical.svg',
      alt: 'Chemical Industry',
      description:
        'Companies in the industry of Chemicals like Dye chem, Paints & Intermediaries face challenges in managing the recipes of the products they supply. Even the consumption of raw material changes each time based on the reaction process. This requires BOM which allows fluctuation and consumption of raw material and production of finished goods.',
      link: '/erp-for-chemical-industry',
    },
    {
      key: 'engineering',
      title: 'ERP for Engineering',
      image: '/images/nav-engineering.svg',
      alt: 'Engineering Industry',
      description:
        'Engineering industry comprises of companies that deal with the manufacturing and designing of machines, complex structures and various kinds of devices. The main functions of this industry are manufacturing, design, processing, and construction of structures. But this industry faces a lot of challenges in terms of complex projects, costs of production and pricing of the structures. It also has to strive in the cutthroat competition in the market.',
      link: '/erp-for-engineering-industry',
    },
    {
      key: 'logistics',
      title: 'ERP for Logistics',
      image: '/images/nav-logistics.svg',
      alt: 'Logistics Industry',
      description:
        'Logistics is one of the highly competitive sectors which include complex operations such as supply chain management, freight management, transportation, warehousing and storage and much other variety of functions. Implementation of ERP software in the logistic industry can align business operations such as Trip Management, Truck Maintenance and staff management with accounting and management systems for the logistics industry.',
      link: '/erp-for-logistics-industry',
    },
    {
      key: 'manufacturing',
      title: 'ERP for Manufacturing',
      image: '/images/nav-manufacturing.svg',
      alt: 'Manufacturing Industry',
      description:
        'A manufacturing concern deals with the creation of products which deals with processing, preparation of goods at every stage. It deals with the conversion of raw material to the ultimate finished goods that comes in the hands of consumers. Manufacturing industry is in itself a vast one that has many sub categories.',
      link: '/erp-for-manufacturing-industry',
    },
    {
      key: 'agro',
      title: 'ERP for Agro',
      image: '/images/nav-agro.svg',
      alt: 'Agro Commodity Industry',
      description:
        'Looking to integrate your business with the ERP solution? Learning the ways to automate the Agro-business is too important as it is the integral sector for any country, as it is what provides the basic need for living beings i.e. food. With the help of data available in the systematic form, the business tends to take effective decisions that benefit them in the long run. ERP provides real-time data and information that connects all the processes and workforce in the organization.',
      link: '/erp-for-agro-commodity',
    },
    {
      key: 'trading',
      title: 'ERP for Trading',
      image: '/images/nav-trading.svg',
      alt: 'Trading Industry',
      description:
        'In this new age information is the key to success. ERP for a Trading business not only helps collect this information, but it converts in knowledge which can convert your quotations to successful sales orders. Trading businesses are said to be the link between the manufacturers or suppliers and the end customers. They deal in one specific good or a few categories of goods that render benefit to them. The main function in the trading business is the management of logistics and distribution of the goods and products. Traditional ways of managing the sales of these goods are very hectic and tedious. The automation of these processes through ERP software can lead to more efficiency and growth in sales and distribution.',
      link: '/erp-for-trading-industry',
    },
  ];

  return (
    <>
      <HeroSection
        headline="Customized ERP For Industries"
        highlightWords={["ERP", "Industries"]}
        description="Discover tailored solutions with customized ERP software and custom ERP system customization services. Optimize your business processes today."
        primaryButton={{
          text: 'Get Started',
          action: () => {
            const intro = document.getElementById('industry-intro');
            if (intro) intro.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        secondaryButton={{
          text: 'Learn More',
          action: () => {
            const intro = document.getElementById('industry-intro');
            if (intro) intro.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        heroImage={{
          alt: 'Customized ERP For Industries',
          src: '/images/INDUSTRY.svg',
        }}
      />

      <Section>
        <div className="container-custom py-8" id="industry-intro">
          <p className="text-lg text-justify leading-relaxed animate-fade-in">
            When it comes to ERP Software, customization on the basis of industries plays a very important role. Industry-specific ERP is more beneficial to a company as they are very flexible and provide the possibility of adding features and integrating add-on customization as per the specific industry that your company belongs to. It is a solution that is made according to the different requirements and needs of various departments of your business. Implementation of Industry-specific ERP in your business helps you to simplify and fasten the planning and decision making of your business. The Industrial Specific ERP mainly provides the advantages of speed, efficiency, and convenience. Some of the main Industry Specific ERP Software are as follows:
          </p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <IndustryTabs tabs={industryTabs} />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <p className="text-lg text-justify leading-relaxed animate-fade-in">
            In the realm of <a href="/erp-software" className="text-primary underline hover:text-primary/80 transition-colors">ERP software</a>, tailoring solutions to specific industry needs is crucial for maximizing effectiveness. Industry-specific ERP solutions offer unparalleled flexibility, enabling the seamless addition of features and integration of bespoke customizations tailored to the unique requirements of your business sector. These tailored solutions are crafted to meet the diverse needs of various departments within your organization, providing a cohesive tool that enhances operational efficiency. As a distinguished <a href="/erpnext-certified-partner" className="text-primary underline hover:text-primary/80 transition-colors">ERPNext service provider</a>, we excel in delivering customized ERPNext solutions that cater to the unique demands of your industry. Implementing an industry-specific ERP system within your business streamlines planning and decision-making processes, significantly boosting speed, efficiency, and convenience. Key sectors that benefit from our specialized ERPNext solutions include manufacturing, retail, healthcare, and education, among others. Partner with us to harness the power of ERPNext and propel your business towards streamlined operations and strategic growth.
          </p>
        </div>
      </Section>

      <Section>
        <div className="py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your Industry?',
                icon: 'factory',
              },
              title: 'Get a Customized ERP Solution for Your Business',
              highlightText:' ERP Solution ',
              description: 'Contact us today to discover how our tailored ERP solutions can streamline your operations and drive growth.',
              primaryButton: {
                text: 'Request a Demo',
                icon: 'arrow-right',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              secondaryButton: {
                text: 'Talk to an Expert',
                icon: 'phone',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              trustIndicator: {
                text: 'Trusted by 100+ Industry Leaders',
                icon: 'check-circle',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
