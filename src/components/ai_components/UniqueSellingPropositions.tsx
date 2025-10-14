import React from 'react';
import Section from "@/components/sections/Section";
import FeatureCard from '@/components/ai_components/FeatureCard';
import Image from 'next/image';

const features = [
  {
    title: 'Customizable Sales CRM',
    image: '/Customizable Sales CRM.svg',
    alt: 'Customizable Sales CRM',
    description: 'Our sales CRM software, a product of our extensive software development expertise, is designed to be highly adaptable, catering to the unique needs and workflows of different businesses. It offers various customization options to perfectly align with your specific requirements.'
  },
  {
    title: 'User-Friendly CRM System',
    image: '/images/Contractual Obligations.svg',
    alt: 'User-Friendly CRM System',
    description: 'The user interface of our CRM system, enhanced by our ERP implementation skills, is intuitive and easy to navigate, making it accessible for users of all levels. This simplicity ensures your team can effectively utilize the CRM software without a steep learning curve.'
  },
  {
    title: 'Data-Driven Insights',
    image: '/images/171.svg',
    alt: 'Data-Driven Insight',
    description: 'In line with our IT Consulting services, our CRM software provides advanced analytics and data-driven insights, empowering companies to make well-informed decisions based on up-to-date customer data.'
  },
  {
    title: 'Seamless Integration',
    image: '/images/webapplicationdevloper.svg',
    alt: 'Seamless Integration',
    description: 'Our CRM system integrates seamlessly with your existing business applications, reflecting our software development expertise, ensuring a unified and efficient workflow that minimizes disruption and maximizes productivity.'
  },
  {
    title: 'Dedicated Support',
    image: '/images/system setup.svg',
    alt: 'Dedicated Support',
    description: 'As a leading IT Consulting and CRM software provider, we offer comprehensive support throughout your CRM system journey from setup to ongoing maintenance.'
  },
  {
    title: 'Offline Functionality',
    image: '/images/170 (1).svg',
    alt: 'Offline Functionality',
    description: 'Recognizing dynamic business needs, your Sales CRM software offers offline functionality. Users can continue working seamlessly even in low or no internet connectivity areas.'
  }
];

const UniqueSellingPropositions: React.FC = () => (
  <Section>
    <div className="container-custom py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Unique Selling Propositions of Our Sales CRM Software</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </div>
  </Section>
);

export default UniqueSellingPropositions;
