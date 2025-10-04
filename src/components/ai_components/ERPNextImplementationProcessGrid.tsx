import React from 'react';
import ProcessStepCard from '@/components/ai_components/ProcessStepCard';
import clsx from 'clsx';

interface Step {
  title: string;
  image: string;
  alt: string;
  description: string;
  bg?: string;
}

interface ERPNextImplementationProcessGridProps {
  steps: Step[];
}

const bgMap: Record<string, string> = {
  gray: 'bg-gray-100',
  lightgray: 'bg-gray-50',
  '': ''
};

const ERPNextImplementationProcessGrid: React.FC<ERPNextImplementationProcessGridProps> = ({ steps }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={clsx(
            'rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-1',
            step.bg === 'gray' ? 'bg-gray-100' : step.bg === 'lightgray' ? 'bg-gray-50' : 'bg-white',
            'flex flex-col h-full'
          )}
        >
          <div className="flex justify-center">
            <img
              src={step.image}
              alt={step.alt}
              title={step.alt}
              width={200}
              height={200}
              className="p-4 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <h3 className="mt-2 text-lg font-semibold text-center">{step.title}</h3>
          </div>
          <p className="mt-2 px-4 pb-4 text-gray-700 text-center">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ERPNextImplementationProcessGrid;
