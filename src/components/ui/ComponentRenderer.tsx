import React from 'react';
import { HeroSection, ServiceCards, StatsSection, CallToAction } from './ComponentShowcase';
import { PricingCards, ContactForm } from './ComponentShowcase2';

interface ComponentData {
  component: string;
  data: any;
}

interface ComponentRendererProps {
  componentData: ComponentData;
}

export function ComponentRenderer({ componentData }: ComponentRendererProps) {
  const { component, data } = componentData;

  // Component mapping
  const componentMap: { [key: string]: React.ComponentType<any> } = {
    'HeroSection': HeroSection,
    'ServiceCards': ServiceCards,
    'StatsSection': StatsSection,
    'CallToAction': CallToAction,
    'PricingCards': PricingCards,
    'ContactForm': ContactForm,
  };

  const Component = componentMap[component];

  if (!Component) {
    console.warn(`Component "${component}" not found`);
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800">Component "{component}" not found</p>
      </div>
    );
  }

  return <Component data={data} />;
}

// Helper function to render multiple components
export function PageRenderer({ components }: { components: ComponentData[] }) {
  return (
    <div>
      {components.map((componentData, index) => (
        <ComponentRenderer key={index} componentData={componentData} />
      ))}
    </div>
  );
} 