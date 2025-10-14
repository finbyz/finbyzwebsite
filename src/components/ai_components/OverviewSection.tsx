import Section from '@/components/sections/Section';
import { FC } from 'react';

const OverviewSection: FC = () => {
  return (
    <Section className="container-custom py-8">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p className="text-lg">
        Content Spark is a marketing automation tool built on the Frappe framework. It helps businesses save time, automate content creation, and maintain brand consistency across platforms like LinkedIn. With AI-powered agents, Content Spark transforms your ideas into ready-to-publish posts with visuals—all in just a few clicks.
      </p>
    </Section>
  );
};

export default OverviewSection;