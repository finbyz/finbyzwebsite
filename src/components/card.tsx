/**
 * @fileoverview Card component displays a single card with optional icon, title, and description.
 * @component Card
 * @example
 * <Card
 *   icon="Rocket"
 *   title="Fast Launch"
 *   description="Deploy your app in minutes."
 * />
 */

'use client';

import React, { JSX } from 'react';
import { Card as UiCard } from '@/components/ui/card';
import '@/styles/components/benefits.css'; // reuse the same CSS

export interface CardProps {
  icon?: JSX.Element,
  title?: string;
  description?: string;
}

export default function CardComponent({ icon, title, description }: CardProps) {

  return (
    <UiCard className="flex flex-col items-center p-6 bg-white/80 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
      {icon && (
        <span className="mb-4 p-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg">
          {icon}
        </span>
      )}
      {title && <h3 className="text-xl font-semibold mb-2 text-indigo-700">{title}</h3>}
      {description && <p className="text-gray-600 text-center">{description}</p>}
    </UiCard>
  );
}
