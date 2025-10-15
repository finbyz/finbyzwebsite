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
      <div className="mx-auto px-12 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
        {content.title && (
          <h2 className="text-2xl text-bold md:text-3xl font-semibold text-[#1A5276] mb-4 ">
            {content.title}
          </h2>
        )}
        <div>
          {paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-slate-700 text-base md:text-lg mb-6 md:mb-7 text-justify"
              style={{ hyphens: 'auto' as const }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
  );
}


