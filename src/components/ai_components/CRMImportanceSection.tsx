import React from 'react';
import Section from "@/components/sections/Section";
import FlipCard from '@/components/ai_components/FlipCard';
import Image from 'next/image';

const crmBenefits = [
  {
    icon: "/images/icon-sales-automation.svg",
    title: "Sales Automation",
    description: "A CRM system automates lead management and inquiry tracking, reducing manual effort. The automation provided by CRM software allows your team to focus on converting more prospects into customers efficiently."
  },
  {
    icon: "/images/icon-personalized-touch.svg",
    title: "Personalized Touch",
    description: "CRM software stores detailed customer preferences, enabling businesses to personalize their offerings. This strengthens customer satisfaction and promotes long-term loyalty."
  },
  {
    icon: "/images/icon-shorter-sales-cycle.svg",
    title: "Shorter Sales Cycle",
    description: "CRM systems reduce the time taken to close deals by enforcing structured sales processes and automated follow-ups, resulting in a shorter and more efficient sales cycle."
  },
  {
    icon: "/images/icon-improved-service.svg",
    title: "Improved Service",
    description: "An open source CRM centralizes customer interactions, improving traceability and coordination. This leads to timely and effective responses, significantly improving service quality."
  },
  {
    icon: "/images/icon-customer-loyalty.svg",
    title: "Customer Loyalty",
    description: "Happy and satisfied customers stay loyal. CRM software nurtures this trust by ensuring consistent communication, ultimately leading to positive word-of-mouth marketing."
  },
  {
    icon: "/images/icon-resource-optimization.svg",
    title: "Resource Optimization",
    description: "A CRM system helps analyze customer behavior and campaign performance, enabling smarter resource allocation and maximizing your marketing ROI."
  }
];

const CRMImportanceSection = () => (
  <Section className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
    <div className="container-custom px-4 py-16 md:py-24">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold  text-[#1A5276] mb-6 leading-tight">
          Why is CRM Software Important for Companies?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Before diving into the role of CRM software, it's crucial to understand why Customer Relationship Management matters. A robust CRM system helps you build stronger relationships with customers, increasing repeat purchases, enhancing customer satisfaction, and improving brand reputation. An{' '}
          <a
            href="https://finbyz.tech/benefits-of-erp-and-crm-integration"
            className="text-orange-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-2 transition-colors"
          >
            open source CRM
          </a>
          {' '}solution automates customer engagement and relationship-building strategies. Below are key reasons that highlight its significance.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="flex justify-center gap-3 flex-wrap">
        {crmBenefits.map((benefit, idx) => (
          <FlipCard
            key={idx}
            front={
              <div className="h-full flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-20 h-20 mb-6 relative flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-sm">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center leading-tight px-2">
                  {benefit.title}
                </h3>
                <div className="mt-6 w-12 h-1 rounded-full" />
              </div>
            }
            back={
              <div className="h-full flex flex-col items-center justify-center p-8  rounded-2xl shadow-xl">
                <div className="mb-4">
                  <div className="w-14 h-14 relative flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-xl border border-white/30">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={32}
                      height={32}
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-black mb-4 text-center">
                  {benefit.title}
                </h4>
                <p className="text-black/95 text-sm leading-relaxed text-center">
                  {benefit.description}
                </p>
              </div>
            }
          />
        ))}
      </div>

      {/* Optional CTA Section */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
          <span className="text-gray-700 font-medium">Ready to transform your business?</span>
          <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </div>
  </Section>
);

export default CRMImportanceSection;