import FeatureCard from '@/components/ai_components/FeatureCard';
import React from 'react';

interface Feature {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 py-8">
      {features.map((feature, idx) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          image={feature.image}
          alt={feature.alt}
          description={feature.description}
        />
      ))}
    </div>
  );
}
