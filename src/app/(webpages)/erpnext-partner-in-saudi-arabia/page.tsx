'use client'
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import ERPNextBenefitsGrid from '@/components/ai_components/ERPNextBenefitsGrid';
import IndustryServiceGrid from '@/components/ai_components/IndustryServiceGrid';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERPNext Partner in Saudi Arabia"
        highlightWords={["ERPNext", "Saudi Arabia"]}
        description="Discover leading ERPNext service providers and partners in Saudi Arabia. Trusted solutions tailored to optimize your business operations and drive growth."
        primaryButton={{
          text: 'Get Consultation',
          action: () => {
            window.location.href = '/contact';
          },
        }}
        secondaryButton={{
          text: 'Learn More',
          action: () => {
            window.scrollTo({ top: 600, behavior: 'smooth' });
          },
        }}
        heroImage={{
          alt: 'ERPNext Partner in Saudi Arabia',
          src: '/files/Frappe-Certified-Erpnext-Partner.svg',
        }}
      />

      <Section>
        <div className="container-custom py-8">
          <div className="space-y-4 text-justify">
            <p>
              Welcome FinByz Tech, your trusted <a href="https://nexinews.com/boost-your-business-join-the-erpnext-partners-network" className="text-primary underline hover:text-primary/80 transition-colors">ERPNext partner</a> providing the best ERPNext services specifically designed for Saudi Arabian companies. By focusing on providing innovative ERP systems, we enable Saudi businesses to prosper in a market that is dynamic and full of both opportunities and difficulties. With ERPNext's powerful capabilities, which have been expertly customised to match the particular requirements of Saudi Arabian businesses, you can confidently move into the future.
            </p>
            <p>
              A wide range of industries, including manufacturing, distribution, retail, trading, services, education, non-profits, and healthcare, are served by the adaptable open-source ERP software ERPNext. For companies of all sizes in Saudi Arabia, its cost-effectiveness, user-friendliness, and cloud-based architecture make it a desirable choice.
            </p>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center h-full">
                <img src="/images/47 (1).svg" alt="Custom-ERPNext-solutions" width={80} height={80} className="mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-center">Custom ERPNext Solutions</h3>
                <p className="text-gray-700 text-justify">Experience a world where each feature and function is designed to capture the unique character of your company. Our customised ERPNext development services lead the way in innovation, offering features and modules that meet the changing needs of the Saudi market and match with your company's goals.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center h-full">
                <img src="/images/376.svg" alt="ERPNext-Implementation" width={80} height={80} className="mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-center">ERPNext Implementation</h3>
                <p className="text-gray-700 text-justify">Set out on an easy journey from start to finish. Our installation approach is set apart by careful planning, efficient execution, and continuous support, guaranteeing that your company is in the best possible position to take advantage of ERPNext's full potential.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center h-full">
                <img src="/images/423.svg" alt="Integration-Services" width={80} height={80} className="mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-center">Integration Services</h3>
                <p className="text-gray-700 text-justify">ERPNext's interface to many other apps and systems is improved by our smooth integration services, which fill in the gaps. Discover a seamless combination of integrated solutions that work in concert to improve business intelligence and operational efficiency.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center h-full">
                <img src="/images/1099.svg" alt="Increase in the Return on Investment" width={80} height={80} className="mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-center">Support and Servicing</h3>
                <p className="text-gray-700 text-justify">Your company deserves ongoing achievement. Our committed staff guarantees the seamless operation of your ERPNext system by offering continuous support and maintenance services that serve as the foundation for dependability and confidence.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center h-full">
                <img src="/images/116 (1).svg" alt="Training-and-Consultation" width={80} height={80} className="mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-center">Training and Consultation</h3>
                <p className="text-gray-700 text-justify">Business excellence is the result of providing your staff with knowledge. By means of our all-inclusive training and advisory services, we grow proficiency, enable your personnel, and unlock new possibilities for expertise and adaptability within the ERPNext architecture.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center h-full">
                <img src="/images/518.svg" alt="Data-action" width={80} height={80} className="mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-center">Data Action</h3>
                <p className="text-gray-700 text-justify">Use our data movement services to go beyond typical limits. We ensure the accuracy, security, and integrity of your vital business data, enabling a seamless and meaningful transformation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-4 text-primary">Some of the many features that ERPNext provides are the following</h2>
          <List
            title="ERPNext Features"
            items={[
              'Management of finances and accounting',
              'Inventory management',
              'Strategies for sales and marketing',
              'Management of production and manufacturing Project coordination',
              'Administration of human resources',
              'Relationship management with customers (CRM)',
              'Services for maintenance and support'
            ]}
            style={{ marginBottom: 0 }}
          />
          <div className="flex items-center gap-4 mt-8">
            {/* <img src="/images/Quotation_marks.svg" alt="Quotation_mark" width={40} height={40} /> */}
            <QuoteBlock text="ERPNext is flexible enough to meet the particular needs of any size business and is always adding new features and improvements to keep up with market expectations." isHeading={true} />
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">What follows are advantages of ERPNext implementation in Saudi Arabia</h2>
          <p className="text-justify mb-8 text-gray-700">ERPNext offers Saudi Arabian business owners a reliable, affordable, and easy-to-use ERP solution that may improve operational effectiveness, reduce costs, increase operational transparency, and guarantee regulatory compliance.</p>
          <ERPNextBenefitsGrid
            benefits={[
              {
                title: 'Enhanced Efficiency',
                description: 'ERPNext automates repetitive work to optimise corporate processes throughout Saudi Arabia. This frees up staff time for important tasks like customer interaction and sales.'
              },
              {
                title: 'Cost Savings',
                description: 'ERPNext\'s comprehensive ERP solution reduces the need for Saudi companies to purchase and maintain a variety of software platforms, resulting in a major reduction in operating expenses.'
              },
              {
                title: 'Increased Transparency',
                description: 'ERPNext gives Saudi businesses a real-time picture of their operations, making it easier to identify and resolve problems quickly and to make better-informed decisions.'
              },
              {
                title: 'Regulatory Compliance',
                description: 'ERPNext makes it easier for firms operating in Saudi Arabia to follow local rules and regulations by providing frequent updates that guarantee conformance to the most recent versions of these laws and regulations.'
              }
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center text-primary mb-6">Saudi Arabian ERP Services</h2>
          <div className="space-y-4 mb-8 text-justify">
            <p>In Saudi Arabia, there are many organisations that provide ERP services. These companies help businesses customise and deploy ERPNext while also provide continuous support and maintenance. It is important to take into account multiple factors while choosing an ERP service provider in Saudi Arabia, including industry experience, support, and maintenance options.</p>
            <p>For companies thinking about ERPNext, contacting a Saudi Arabian ERP service provider is a wise option. Such a provider can give ongoing support and maintenance, as well as help with the seamless adoption and customisation of ERPNext.</p>
          </div>
          <IndustryServiceGrid
            services={[
              {
                title: 'ERP for Manufacturing',
                image: '/images/97.svg',
                alt: 'Flawless UI with Real-time information',
                description: 'Our ERP software is essential to the manufacturing sector in Saudi Arabia because it streamlines production procedures, inventory control, quality control, and supply chain logistics. This helps manufacturers keep their operations running smoothly and optimise schedules and lead times.'
              },
              {
                title: 'ERP in the Medical Field',
                image: '/images/304 (2).svg',
                alt: 'Higher Productivity',
                description: 'Our ERP for Healthcare software, which is specifically made for Saudi healthcare organisations, addresses the particular requirements of the healthcare industry by improving core operations and adding specialised features like patient management, clinical coordination, and medical billing.'
              },
              {
                title: 'Retail ERP',
                image: '/images/265.svg',
                alt: 'Improved Collaboration',
                description: 'Our ERP for Retail system, specifically designed for the Saudi Arabian retail sector, simplifies procedures related to sales, inventory control, CRM, and financial monitoring. It provides a full range of benefits to improve retail operations and customer experiences.'
              },
              {
                title: 'ERP for Construction',
                image: '/images/customer onboarding.svg',
                alt: 'support & maintenance',
                description: 'Specifically designed for the Saudi Arabian construction market, this software automates financial tracking, resource allocation, procurement, and project management, allowing construction companies to effectively manage budgets and schedules while maintaining regulatory compliance.'
              }
            ]}
          />
          <p className="mt-8">ERPNext, when used in combination with a knowledgeable service provider, may change business operations in Saudi Arabia by providing customised solutions for improved productivity, regulatory compliance, and decision-making in a range of industries.</p>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
            <img
              src="/images/238 (2).svg"
              alt="ERPNext-partner-Saudi-Arebia"
              width={220}
              height={220}
              className="rounded-lg shadow-md object-contain bg-white p-4"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-primary">Serving Saudi Arabian Businesses Globally</h2>
            <p className='text-justify'>FinByz Tech, a leading global ERP implementation partner, is committed to helping companies worldwide, not just in Saudi Arabia. Our skilled staff is always available to handle your ERP implementation requirements, making sure that your company has the greatest ERP solutions available that are suited for the worldwide arena. Please do not hesitate to contact us if you need information, professional advice, or help. Regardless of where your company is located, we are dedicated to meeting your ERP requirements.</p>
          </div>
        </div>
      </Section>

      <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your Business?',
                icon: 'Rocket',
              },
              title: 'Get Started with ERPNext in Saudi Arabia',
              highlightText : "ERPNext in Saudi Arabia",
              description: 'Contact our experts today to discuss your requirements and discover how ERPNext can drive your business forward.',
              primaryButton: {
                text: 'Request a Demo',
                icon: 'ArrowRight',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              secondaryButton: {
                text: 'Learn More',
                icon: 'Info',
                action: () => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                },
              },
              trustIndicator: {
                text: 'Trusted by leading Saudi businesses',
                icon: 'ShieldCheck',
              },
            }}
          />
    </>
  );
}
