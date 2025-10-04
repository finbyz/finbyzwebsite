import React from "react";
import FeatureCard from "@/components/ai_components/FeatureCard";
import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface EducationFeatureGridProps {
  features: Feature[];
}

const EducationFeatureGrid: React.FC<EducationFeatureGridProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
};

export default EducationFeatureGrid;
