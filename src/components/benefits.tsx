/**
 * @fileoverview Benefits component displays a list of product benefits with icons.
 * @component Benefits
 * @example
 * <Benefits data={{
 *   title: 'Why Choose Us?',
 *   items: [
 *     { icon: 'Rocket', title: 'Fast Launch', description: 'Deploy your app in minutes.' },
 *     { icon: 'ShieldCheck', title: 'Secure', description: 'Enterprise-grade security.' },
 *   ]
 * }} />
 */

import React from 'react';
import { Card } from '@/components/ui/card';
import { Rocket, ShieldCheck, Zap, Users } from 'lucide-react';
import '@/styles/components/benefits.css';

export interface BenefitItem {
  icon?: 'Rocket' | 'ShieldCheck' | 'Zap' | 'Users';
  title?: string;
  description?: string;
}

export interface BenefitsData {
  component_type?: string;
  title?: string;
  items?: BenefitItem[];
}

interface BenefitsProps {
  data?: BenefitsData;
}

const iconMap = {
  Rocket: Rocket,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Users: Users,
};

export default function Benefits({ data = {} }: BenefitsProps) {
  const {
    title = 'Why Choose Us?',
    items = [
      { icon: 'Rocket', title: 'Fast Launch', description: 'Deploy your app in minutes.' },
      { icon: 'ShieldCheck', title: 'Secure', description: 'Enterprise-grade security.' },
      { icon: 'Zap', title: 'Lightning Fast', description: 'Blazing performance at scale.' },
      { icon: 'Users', title: 'Collaboration', description: 'Work together seamlessly.' },
    ],
  } = data;

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-indigo-800 animate-fade-in">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, idx) => {
            const Icon = iconMap[item.icon || 'Rocket'] || Rocket;
            return (
              <Card
                key={idx}
                className="flex flex-col items-center p-6 bg-white/80 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in delay-100"
              >
                <span className="mb-4 p-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg">
                  <Icon className="w-8 h-8" />
                </span>
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
