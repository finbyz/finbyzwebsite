'use client';
import Image from "next/image";
import React from 'react';
import HeroSection from '@/components/sections/dynamic-hero';
import Section from '@/components/sections/Section';
import List from '@/components/sections/list';

import QuoteBlock from '@/components/ai_components/QuoteBlock';
import FeatureCard from '@/components/ai_components/FeatureCard';
import UniqueSellingPropositions from '@/components/ai_components/UniqueSellingPropositions';
import CoreFeaturesFlipCards from '@/components/ai_components/CoreFeaturesFlipCards';
import AdvancedCRMCards from '@/components/ai_components/AdvancedCRMCards';
import InventiveCRMSection from '@/components/ai_components/InventiveCRMSection';
import CRMImportanceSection from '@/components/ai_components/CRMImportanceSection';

export default function Page() {
  return (
    <>
      <HeroSection
        headline="CRM Software"
        highlightWords={["CRM", "Software"]}
        description="Streamline your sales, marketing, and support with Finbyz CRM Software. Discover our powerful CRM system and flexible open source CRM solutions designed for growth."
        primaryButton={{
          text: 'Get Started',
          action:"#crm-software"
        }}
        secondaryButton={{
          text: 'Contact Us',
          action: () => {
            window.location.href = '/contact';
          },
        }}
        heroImage={{
          alt: 'CRM Software',
          src: '/images/CRMWord.svg',
        }}
      />

      {/* Introduction Section */}
      <Section id="aal-section">
        <div className="container-custom py-8">
          <div className="space-y-4">
            <QuoteBlock
              text="Looking for a Trusted CRM Software Development Company?"
              isHeading={true}
            />
            <p>
              Optimum customer relationship management is the key to achieving happy customers. Every business nowadays leverages CRM software to improve its productivity and efficiency. The technology of CRM systems allows organizations of all sizes to automate and synchronize the phases of customer interaction. The dynamic business environment has openly embraced this technology. Finbyz offers customized CRM software solutions in Ahmedabad for various industries, helping you increase sales and customer engagement.
            </p>
            <p id="crm-software">
              Customers should be a priority for every kind of business. This makes acquiring and retaining customers a very important part of the organization. This is where the power of CRM systems comes to play. It refers to the practices and guidelines adopted by firms to interact with their customers effectively. Maintaining strong customer relationships boosts sales volumes and simplifies sales and marketing functions. Businesses can specify their own rules within a CRM system to automate customer communications, reducing human errors and increasing customer satisfaction.
            </p>
          </div>
        </div>
      </Section>
    
      {/* Inventive in CRM Software */}
      <InventiveCRMSection />
    
  
      {/* Unique Selling Propositions */}
      <UniqueSellingPropositions />

      {/* Core Features: Beyond Sales Tracker Software */}
      <CoreFeaturesFlipCards />

      {/* Advanced CRM Capabilities */}
      <AdvancedCRMCards />

      {/* Why is CRM Software important for companies? */}
      <CRMImportanceSection />

      {/* Benefits Section */}
    
      <Section>
        <div className="container-custom py-8 relative">
          <div className="absolute right-0 bottom-0 hidden sm:block opacity-30 pointer-events-none">
            <Image src="/images/three-hexagon.svg" alt="haxagon-image" width={120} height={120} />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1A5276]">Benefits that CRM software offers</h2>
          <p className="text-center mb-8">
            Before investing in a CRM system, it’s natural to consider the value it brings. Here are key business benefits of integrating open source CRM software into your operations:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <List
              title=""
              items={[
                'Stronger client relationships',
                'Reduced customer attrition',
                'Higher in revenue and profitability',
                'Improved efficiency',
              ]}
            />
            <List
              title=""
              items={[
                'Cost savings',
                'Automation of routine tasks',
                'Better planning of sales strategy',
                'Improved reporting and analytics',
              ]}
            />
          </div>
          <div className="space-y-4">
            <p>
              A good CRM system helps you understand your customers through insightful data. It identifies purchasing patterns and behaviors, enabling strategic follow-ups and improving lead conversion. CRM software makes your marketing and sales process more streamlined and data-driven.
            </p>
            <QuoteBlock
              text={
                'The big benefit of CRM is the visibility of everything relating to customers going on in your company. If you want to provide a better service to your customer, you have to be able to manage everything from complaints to sales opportunities. - Roger Cole'
              }
              isHeading={true}
            />
          </div>
        </div>
      </Section>

      {/* Features of CRM Software */}
      <Section>
        <div className="container-custom py-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1A5276]">Features of CRM Software</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Customer Management"
              image="/images/icon-customer-management.svg"
              alt="Customer Management"
              description="Monitor and log all communication with customer contacts, including calls, emails, and meetings within the CRM system."
            />
            <FeatureCard
              title="Contact Management"
              image="/images/icon-contact-management.svg"
              alt="Contact Management"
              description="Set reminders, schedule appointments, send bulk SMS/emails, and automate greetings for special occasions."
            />
            <FeatureCard
              title="Task Management"
              image="/images/icon-task-management.svg"
              alt="Task Management"
              description="Assign, manage, and track tasks effectively—complete with deadlines, notifications, and outcome tracking."
            />
            <FeatureCard
              title="Quotation Management"
              image="/images/icon-quotation-management.svg"
              alt="Quotation Management"
              description="Generate and manage quotes, convert them into invoices, and link them directly to relevant contacts or companies."
            />
            <FeatureCard
              title="Inquiry Management"
              image="/images/icon-inquiry-management.svg"
              alt="Inquiry Management"
              description="Track the full lifecycle of inquiries, assign them in bulk, maintain communication records, and log customer requirements efficiently."
            />
            <FeatureCard
              title="Analytical Reports"
              image="/images/payroll.svg"
              alt="Analytical Reports"
              description="Generate detailed reports including lead reports, call logs, appointment summaries, and inquiry status insights using the CRM software."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
