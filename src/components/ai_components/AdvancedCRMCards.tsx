import React from 'react';
import Section from "@/components/sections/Section";
import FeatureCard from '@/components/ai_components/FeatureCard';

const features = [
  {
    title: 'Integrated Campaign Management',
    image: 'api/fb/n/files/webapplicationdevloper.svg',
    alt: 'Integrated Campaign Management',
    description: 'Our CRM system offers integrated tools to efficiently manage marketing campaigns enabled through our expertise in ERP Implementation. You can plan, execute, and monitor marketing strategies directly within the open source CRM software.'
  },
  {
    title: 'Team Collaboration Tools',
    image: 'api/fb/n/files/171.svg',
    alt: 'Team Collaboration Tools',
    description: 'Enhance internal communication and collaboration through built-in features of our CRM software. These tools, backed by our IT consulting experience, foster a seamless work environment and improve team productivity.'
  },
  {
    title: 'Customizable Reporting',
    image: 'api/fb/n/files/61.svg',
    alt: 'Customizable Reporting',
    description: 'With our CRM system, you can generate customizable reports tailored to your business objectives. This feature reflects our strong software development capabilities, delivering actionable insights with precision.'
  }
];

const AdvancedCRMCards: React.FC = () => (
  <Section>
    <div className="container-custom py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Advanced CRM System Capabilities: Elevating Open Source CRM</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </div>
  </Section>
);

export default AdvancedCRMCards;
