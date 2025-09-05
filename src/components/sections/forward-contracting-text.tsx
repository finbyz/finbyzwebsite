'use client';

import React from "react";

export interface TextData {
  component_type?: "Text";
  title?: string;
  paragraphs: string[];
}

export default function Text({
  data,
}: {
  data?: TextData;
}) {
  const resolved: TextData | undefined =
    (data as any)?.example?.data || (data as any)?.data || (data as any);

  const content: TextData =
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
        "Forward contracting in ERPNext helps businesses hedge against forex volatility by locking exchange rates for future transactions.",
      ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-fluid  max-w-8xl">
        {content.title && (
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A5276] mb-4">
            {content.title}
          </h2>
        )}
        <div className="mx-auto">
          {paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-slate-700 text-base md:text-lg leading-8 md:leading-9 text-justify mb-6 md:mb-7"
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


