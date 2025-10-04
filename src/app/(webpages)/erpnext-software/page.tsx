'use client'

import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import QuoteBlock from '@/components/ai_components/QuoteBlock';
import ERPNextFeatureGrid from '@/components/ai_components/ERPNextFeatureGrid';
import ERPNextKeyFeaturesSlider from '@/components/ai_components/ERPNextKeyFeaturesSlider';
import List from '@/components/sections/list';
import CTA from '@/components/sections/cta';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="ERPNext"
        highlightWords={["ERP", "Next"]}
        description="Discover ERPNext System - your ultimate ERP solution. Streamline operations and enhance efficiency with a unified, open-source platform. Join now to transform your business."
        primaryButton={{
          text: 'Get Started',
          action: () => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          },
        }}
        secondaryButton={{
          text: 'Learn More',
          action: () => {
            const el = document.getElementById('about-erpnext');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        heroImage={{
          alt: 'ERPNext',
          src: 'api/fb/n/files/Hire-ERPNext-Implementor679475.svg',
          videoSrc: null,
        }}
      />

      <Section>
        <div className="container-custom py-8">
          <QuoteBlock text="A Unified Solution for Growing Enterprises" isHeading={true} />
          <div className="mt-6 text-gray-700 animate-fadeInUp">
            <p>
              In today's fast-paced business environment, efficiency and integration are the keys to staying ahead. ERPNext Software emerges as the beacon of innovation for businesses seeking to streamline operations, enhance productivity, and drive growth. This comprehensive, open-source platform is more than just software; it's a catalyst for transformation, designed to adapt to your unique business needs.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8" id="about-erpnext">
          <QuoteBlock text="What is ERPNext ?" isHeading={true} />
          <div className="mt-6 text-gray-700 animate-fadeInUp space-y-4">
            <p>
              ERPNext is an open-source enterprise resource planning (ERP) software that is designed to serve small to medium-sized businesses across various industries. It's a comprehensive suite of applications that manages core business processes in a single system, which can include finance, <a href="/human-resource-system" className="text-primary underline hover:text-primary/80">Human Resource</a>, manufacturing, sales, purchasing, <a href="/crm-software" className="text-primary underline hover:text-primary/80">customer relationship management</a> (CRM), inventory, and more.
            </p>
            <p>
              One of the key advantages of ERPNext is its flexibility and ease of use. The software can be customized to fit the unique needs of a business, making it a versatile choice for companies in sectors such as manufacturing, retail, distribution, education, healthcare, agriculture, and services. Its modular design allows businesses to select and implement only the modules they need, with the option to add more functionality as the business grows.
            </p>
          </div>
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8 animate-fadeInUp">Why Choose ERPNext?</h2>
          <ERPNextFeatureGrid
            features={[
              {
                title: 'Customization at Its Core',
                image: 'api/fb/n/files/icon%20Real-time%20information.svg',
                alt: 'Customization-at-its-core',
                description:
                  'Unlike one-size-fits-all solutions, ERPNext Software is built with flexibility in mind. It caters to a wide range of industries including manufacturing, retail, education, and healthcare, ensuring that every aspect of your business is covered. From sales to HR, inventory, and beyond, ERPNext streamlines disparate processes into a cohesive, efficient workflow.',
              },
              {
                title: 'User-Friendly Interface',
                image: 'api/fb/n/files/387.svg',
                alt: 'User-Friendly-Interface',
                description:
                  'Navigate the complexities of your enterprise with an intuitive interface that simplifies operations without sacrificing depth or functionality. ERPNext is designed for users of all skill levels, ensuring that your team can leverage its full potential from day one.',
              },
              {
                title: 'Real-Time Insights',
                image: 'api/fb/n/files/304.svg',
                alt: 'Real-Time-Insights',
                description:
                  'Armed with powerful analytics and reporting tools, ERPNext Software gives you a 360-degree view of your business. Make informed decisions with real-time data on your financials, sales, customer engagements, and inventory levels, all at your fingertips.',
              },
              {
                title: 'Seamless Integration',
                image: 'api/fb/n/files/4111.svg',
                alt: 'Seamless-Integration',
                description:
                  'In the digital age, integration is crucial. ERPNext effortlessly connects with a plethora of platforms and applications, enhancing your operational flexibility. Whether it\'s e-commerce, payment gateways, or email services, ERPNext Partners ensures your business is interconnected and primed for growth.',
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8 animate-fadeInUp">Elevate Your Operations with Advanced Features</h2>
          <ERPNextFeatureGrid
            features={[
              {
                title: 'Project Management Made Easy',
                image: 'api/fb/n/files/147.svg',
                alt: 'Project-Management-Made-Easy',
                description:
                  "Keep your projects on track with ERPNext's robust project management tools. Assign tasks, track progress, and manage resources efficiently to ensure timely delivery and high-quality outcomes.",
              },
              {
                title: 'Empower Your Sales Team',
                image: 'api/fb/n/files/1099.svg',
                alt: 'Empower-Your-Sales-Team',
                description:
                  "With ERPNext's integrated CRM, your sales team can nurture leads, manage customer interactions, and close deals faster. The seamless flow of information ensures that every customer touchpoint is personalized and impactful.",
              },
              {
                title: 'Optimize Your Supply Chain',
                image: 'api/fb/n/files/4 (1).svg',
                alt: 'Optimize-Your-Supply-Chain',
                description:
                  "Gain complete control over your supply chain with ERPNext's inventory management features. From procurement to sales, you have the visibility and tools needed to optimize stock levels, reduce costs, and meet customer demands with precision.",
              },
              {
                title: 'Financial Management and Compliance',
                image: 'api/fb/n/files/59b82606.svg',
                alt: 'Financial-Management-and-Compliance',
                description:
                  "ERPNext simplifies complex financial processes, ensuring that your accounting, tax, and compliance requirements are met with ease. With comprehensive financial reporting, you can stay ahead of regulations and make strategic decisions based on accurate financial data.",
              },
            ]}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold mb-6 animate-fadeInUp">Benefits of ERPNext</h2>
          <List
            title="Benefits of ERPNext"
            items={[
              'Cost-Effective Solution',
              'Comprehensive and Integrated System',
              'Flexibility and Scalability',
              'User-Friendly Interface',
              'Global Compatibility',
              'Community Support and Continuous Improvement',
              'Enhanced Security',
              'Streamlined Communication',
              'Better Resource Management',
              'Improved Customer Satisfaction',
            ]}
            style={{
              color: '#374151',
              fontSize: '1rem',
              gap: '0.5rem',
            }}
          />
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-8 animate-fadeInUp">Key Features of ERPNext</h2>
          <ERPNextKeyFeaturesSlider
            features={[
              {
                title: 'Integrated Functionality',
                image: 'api/fb/n/files/179.svg',
                alt: 'Integrated Functionality',
                description:
                  'ERPNext consolidates all your core business functions into one cohesive system, reducing complexity and improving collaboration across departments.',
              },
              {
                title: 'Customization',
                image: 'api/fb/n/files/45.svg',
                alt: 'Customization',
                description:
                  'Tailor ERPNext to your unique business needs with customizable fields, forms, and workflows—no coding required.',
              },
              {
                title: 'Scalability',
                image: 'api/fb/n/files/88.svg',
                alt: 'Scalability',
                description:
                  'Grow your business with confidence, knowing that ERPNext can scale alongside your operations, from startup to enterprise level.',
              },
              {
                title: 'User-Friendly Interface',
                image: 'api/fb/n/files/UI (1).svg',
                alt: 'User-Friendly Interface',
                description:
                  'With an intuitive design and easy navigation, ERPNext ensures quick adoption by your team, accelerating ROI.',
              },
              {
                title: 'Seamless Integration',
                image: 'api/fb/n/files/96.svg',
                alt: 'Seamless Integration',
                description:
                  'Connect ERPNext with your favorite tools and services through its robust REST API, enabling a truly connected ecosystem.',
              },
              {
                title: 'Cost-Effective',
                image: 'api/fb/n/files/59.svg',
                alt: 'Cost-Effective',
                description:
                  'Say goodbye to expensive licensing fees—ERPNext is open-source, making it a cost-effective choice for businesses of all sizes.',
              },
            ]}
          />
        </div>
      </Section>

      <Section useGradient>
        <div className="container-custom py-8">
          <h2 className="text-2xl font-bold text-center mb-4 animate-fadeInUp">Serving Businesses Worldwide</h2>
          <p className="text-gray-700 text-center animate-fadeInUp">
            At FinByz, we take pride in serving businesses worldwide as a leading <a href="/hire-erpnext-implementer" className="text-primary underline hover:text-primary/80">ERPNext implementation</a> partner. From India to the USA, Canada, UAE, Saudi Arabia, and the UK, our global footprint ensures that businesses everywhere can benefit from our expertise. Our dedicated team stands ready to assist with all your ERP implementation needs. Whether you have inquiries, require consultations, or need any form of assistance, please don't hesitate to reach out to us. We're here to help your business thrive.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-custom py-8">
          <CTA
            data={{
              subheading: {
                text: 'Ready to Transform Your Business?',
                icon: 'rocket',
              },
              title: 'Get Started with ERPNext Today',
              description: 'Experience the power of a unified, open-source ERP solution. Contact us for a free consultation or demo.',
              primaryButton: {
                text: 'Request a Demo',
                icon: 'play-circle',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              secondaryButton: {
                text: 'Contact Us',
                icon: 'mail',
                action: () => {
                  window.location.href = '/contact';
                },
              },
              trustIndicator: {
                text: 'Trusted by 100+ businesses worldwide',
                icon: 'check-circle',
              },
            }}
          />
        </div>
      </Section>
    </>
  );
}
