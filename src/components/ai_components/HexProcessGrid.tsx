import Image from 'next/image';
import React from 'react';

interface Step {
  title: string;
  image: string;
  alt: string;
}

interface HexProcessGridProps {
  steps: Step[];
}

export default function HexProcessGrid({ steps }: HexProcessGridProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-8">
      {steps.map((step, idx) => (
        <div
          key={step.title}
          className={
            `flex flex-col items-center relative animate-fade-in-up transition-transform duration-500 hover:scale-105` +
            (idx % 2 === 0 ? ' mt-0' : ' mt-8')
          }
        >
          <div className="relative flex flex-col items-center">
            <div className="w-32 h-36 flex items-center justify-center relative">
              <svg viewBox="0 0 177.4 197.4" className="absolute w-full h-full z-0" fill="#fff">
                <path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z" />
              </svg>
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <Image src={step.image} alt={step.alt} width={48} height={48} className="mb-2" />
                <span className="text-lg font-semibold text-primary uppercase tracking-wide">{step.title}</span>
              </div>
            </div>
            <span className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg border-2 border-white">{String(idx + 1).padStart(2, '0')}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
