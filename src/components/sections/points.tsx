'use client';

import React from 'react';

export interface PointsData {
  component_type?: 'Text';
  title?: string;
  points: string[];
}

export default function Points({ data }: { data?: PointsData }) {
  const resolved: PointsData | undefined =
    (data as any)?.example?.data || (data as any)?.data || (data as any);

  const content: PointsData =
    resolved ?? {
      component_type: 'Text',
      title: 'How to Utilize Forward Contracts at Payment Time',
      points: [
        'Go to the Payment Entry list and click on "New".',
        'Select the Party Type and the relevant Customer/Supplier.',
        'Choose the Bank or Cash Account for "Paid To" and "Paid From".',
        'In the Forward Utilization table, select the applicable forward contract and enter the amount utilized.',
        'Enter the Amount Paid and provide bank reference if applicable.',
        'Save and Submit the entry.'
      ]
    };

  const items = Array.isArray(content.points) && content.points.length > 0
    ? content.points
    : ['Add bullet points to display here.'];

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="mx-auto">
        {content.title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A5276] mb-5">
            {content.title}
          </h2>
        )}
        <ul className="list-disc pl-6 space-y-3 text-slate-700 text-base md:text-lg leading-8 md:leading-9">
          {items.map((p, idx) => (
            <li key={idx}>{p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}


