import React from 'react';
import Section from "@/components/sections/Section";
import Image from 'next/image';

const InventiveCRMSection: React.FC = () => (
  <Section>
    <div className="container-custom py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#1A5276]">Inventive in CRM Software</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-2">Innovative CRM Software Solutions</h3>
          {/* <Image src="/images/61.svg" alt="Custom-Software-Solution" width={150} height={50} className="mb-4" /> */}
           <Image src="/Innovative CRM Software Solutions.svg" alt="Custom-Software-Solution" width={150} height={50} className="mb-4" />
          <p>
            At Finbyz, we specialize in <a href="/software-development" className="text-primary underline">software development</a>, crafting advanced CRM systems designed to enhance customer-business interactions. Our solutions use the latest technology to streamline customer relationship management, ensuring businesses can efficiently track, analyze, and respond to customer needs.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-2">Transformative Approach</h3>
          <Image src="/images/170%20(1).svg" alt="Erp-Implementation" width={150} height={50} className="mb-4" />
          <p>
            Leveraging our expertise in <a href="/erp-software" className="text-primary underline">ERP Implementation</a> and CRM systems, we build stronger, meaningful connections between businesses and their clients. Our approach focuses on understanding customer behavior and preferences, enabling tailored services and communication.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default InventiveCRMSection;
