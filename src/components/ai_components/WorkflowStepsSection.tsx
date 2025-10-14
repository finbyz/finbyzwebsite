import Section from '@/components/sections/Section';
import List from '@/components/sections/list';
import { FC } from 'react';

const WorkflowStepsSection: FC = () => {
  return (
    <Section className="container-custom py-8">
      <h2 className="text-2xl font-bold mb-4">Workflow Steps</h2>
      <ol>
        <li><strong>Train your AI Agent:</strong> Define your brand’s voice, tone, and style once—so every post feels consistent.</li>
        <li><strong>Provide Input:</strong> Enter topic, audience, or number of ideas you want.</li>
        <li><strong>Get Ideas Instantly:</strong> AI suggests creative directions tailored to your input.</li>
        <li><strong>Create Content:</strong> Pick an idea → system drafts a professional LinkedIn post.</li>
        <li><strong>Generate Images:</strong> AI agents design branded visuals to match the content.</li>
        <li><strong>Refine with Prompts:</strong> Adjust with simple feedback until it’s perfect.</li>
        <li><strong>Publish or Schedule:</strong> Post instantly or schedule for later—directly from ERPNext.</li>
      </ol>
    </Section>
  );
};

export default WorkflowStepsSection;