'use client';

import React from "react";

export interface TextSectionData {
  component_type?: "Text";
  title?: string;
  paragraphs: string[];
}

export default function TextSection({
  data,
}: {
  data?: TextSectionData;
}) {
  const resolved: TextSectionData | undefined =
    (data as any)?.example?.data || (data as any)?.data || (data as any);

  const content: TextSectionData =
    resolved ?? {
      component_type: "Text",
      title: undefined,
      paragraphs: [
        "Forward contracting in ERPNext is a powerful tool for currency hedging, allowing businesses to lock in exchange rates for future international transactions. Through the forward contract ERPNext feature, importers and exporters can minimize the impact of currency fluctuations by setting a fixed rate in advance. With integrated forward contract accounting ERPNext capabilities, companies can efficiently track forward contracts, manage gains or losses, and maintain accurate financial records aligned with their forex exposures.",
      ],
    };

  const paragraphs = Array.isArray(content.paragraphs) && content.paragraphs.length > 0
    ? content.paragraphs
    : [
        "This is a generic text section. Provide an array of paragraphs to display.",
      ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {content.title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A5276] mb-4 text-center">
            {content.title}
          </h2>
        )}
        <div className="max-w-[1040px] mx-auto">
          {paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-slate-700 text-base md:text-lg leading-8 md:leading-9 text-center mb-6 md:mb-7"
              style={{ hyphens: 'auto' as const }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}


