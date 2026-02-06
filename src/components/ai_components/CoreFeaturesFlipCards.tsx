import React from 'react';
import Section from "@/components/sections/Section";
import FlipCard from '@/components/ai_components/FlipCard';
import Image from 'next/image';

const cards = [
  {
    icon: "/images/django%20devloper.svg",
    title: "Comprehensive Lead Management",
    description: "Our CRM software offers a comprehensive lead management system, streamlining the entire sales process from initial contact to conversion."
  },
  {
    icon: "/images/49.svg",
    title: "Customer Segmentation",
    description: "Our CRM system uses ERP expertise to enable detailed customer segmentation, improving targeted marketing, sales, and customer experiences."
  },
  {
    icon: "/sales forecasting.svg",
    title: "Sales Forecasting",
    description: "Using advanced algorithms a hallmark of our software development capabilities our CRM software delivers accurate sales forecasting, assisting strategic business planning."
  }
];

const CoreFeaturesFlipCards: React.FC = () => (
  <Section className="bg-gradient-to-b from-gray-50 to-white">
    <div className="container-custom px-4 py-16 md:py-20">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold  text-[#1A5276] bg-orange-50 rounded-full">
          Core Features
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276]">
          Beyond Sales Tracker Software
        </h2>
        <p className="text-lg text-gray-600">
          Discover powerful features designed to transform your sales process
        </p>
      </div>

      {/* Cards Grid */}
      <div className="container-custom justify-center flex gap-4 flex-wrap ">
        {cards.map((card, idx) => (
          <FlipCard
            key={idx}
            front={
              <div className="h-full flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-30 h-30 mb-6 relative flex items-center justify-center  rounded-2xl">
                  <img
                    src={card.icon}
                    alt={card.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center leading-tight">
                  {card.title}
                </h3>
                <div className="mt-6 text-[#1A5276] text-sm font-medium flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            }
            back={
              <div className="h-full flex flex-col items-center justify-center p-8  rounded-xl shadow-lg">
                <div className="mb-4">
                  <div className="w-12 h-12 relative flex items-center justify-center bg-black/20 rounded-xl">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={28}
                      height={28}
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-black mb-3 text-center">
                  {card.title}
                </h4>
                <p className="text-black text-sm leading-relaxed text-center">
                  {card.description}
                </p>
              </div>
            }
          />
        ))}
      </div>
    </div>
  </Section>
);

export default CoreFeaturesFlipCards;