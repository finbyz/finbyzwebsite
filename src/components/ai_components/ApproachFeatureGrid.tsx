import FeatureCard from '@/components/ai_components/FeatureCard';
import React from 'react';

interface Feature {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface ApproachFeatureGridProps {
  features: Feature[];
}

export default function ApproachFeatureGrid({ features }: ApproachFeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
      {features.map((feature) => (
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
