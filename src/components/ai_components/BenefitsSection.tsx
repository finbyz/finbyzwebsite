import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import { FC } from 'react';

const BenefitsSection: FC = () => {
  return (
    <Section className="container-custom py-8">
      <h2 className="text-2xl font-bold mb-4">Benefits</h2>
      <ol>
        <li><strong>Save Time:</strong> No more blank-page struggle; get posts ready in minutes.</li>
        <li><strong>Consistency:</strong> Every piece follows your brand guidelines.</li>
        <li><strong>AI-Powered Ideas:</strong> Fresh, creative options for every campaign.</li>
        <li><strong>Visuals Included:</strong> Posts come with matching branded images.</li>
        <li><strong>All-in-One in Frappe:</strong> No switching tools; everything happens inside your ERPNext ecosystem.</li>
        <li><strong>Scale Easily:</strong> Generate and schedule multiple posts effortlessly.</li>
      </ol>
    </Section>
  );
};

export default BenefitsSection;