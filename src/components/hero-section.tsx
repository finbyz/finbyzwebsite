/**
 * @fileoverview HeroSection component displays the main hero area with title, subtitle, and CTA button.
 * @component HeroSection
 * @example
 * <HeroSection data={{
 *   title: 'Welcome to NextGen SaaS',
 *   subtitle: 'Build, scale, and launch your product with ease.',
 *   cta: { label: 'Get Started', href: '/signup' }
 * }} />
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
// import '@/styles/components/hero-section.css';

export interface HeroSectionData {
  component_type?: string;
  title?: string;
  subtitle?: string;
  cta?: {
    label?: string;
    href?: string;
  };
}

interface HeroSectionProps {
  data?: HeroSectionData;
}

export default function HeroSection({ data = {} }: HeroSectionProps) {
  const {
    title = 'Welcome to NextGen SaaS',
    subtitle = 'Build, scale, and launch your product with ease.',
    cta = { label: 'Get Started', href: '/signup' },
  } = data;

  return (
    <section className="relative w-full py-15 md:py-32 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 text-white overflow-hidden shadow-xl">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-2xl font-medium mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
          {subtitle}
        </p>
        {cta?.label && cta?.href && (
          <Button asChild size="lg" className="bg-white text-indigo-700 font-bold shadow-lg hover:scale-105 transition-transform animate-fade-in delay-200">
            <a href={cta.href}>
              {cta.label}
              <ArrowRight className="ml-2 w-5 h-5 inline-block" />
            </a>
          </Button>
        )}
      </div>
      <div className="absolute inset-0 pointer-events-none bg-hero-glow" aria-hidden="true" />
    </section>
  );
}
