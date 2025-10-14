import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import { FC } from 'react';

const HowItWorksSection: FC = () => {
  return (
    <Section className="container-custom py-8">
      <h2 className="text-2xl font-bold mb-4">How It Works</h2>
      <ol>
        <li>User provides topic & audience details.</li>
        <li>AI generates ideas + draft posts.</li>
        <li>AI Agents create matching branded images.</li>
        <li>User refines the content with prompts.</li>
        <li>System publishes or schedules the post to LinkedIn.</li>
      </ol>
    </Section>
  );
};

export default HowItWorksSection;