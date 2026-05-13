"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/sections/Section";

const cards = [
  {
    image: "/custom-erp-solution.svg",
    alt: "Custom-ERPNext-solutions",
    title: "Custom ERPNext Solutions",
    text: "Experience a world where each feature and function is designed to capture the unique character of your company. Our customised ERPNext development services lead the way in innovation, offering features and modules that meet the changing needs of the Saudi market and match with your company's goals."
  },
  {
    image: "/images/376.svg",
    alt: "ERPNext-Implementation",
    title: "ERPNext Implementation",
    text: "Set out on an easy journey from start to finish. Our installation approach is set apart by careful planning, efficient execution, and continuous support, guaranteeing that your company is in the best possible position to take advantage of ERPNext's full potential."
  },
  {
    image: "/images/423.svg",
    alt: "Integration-Services",
    title: "Integration Services",
    text: "ERPNext's interface to many other apps and systems is improved by our smooth integration services, which fill in the gaps. Discover a seamless combination of integrated solutions that work in concert to improve business intelligence and operational efficiency."
  },
  {
    image: "/images/1099.svg",
    alt: "Increase in the Return on Investment",
    title: "Support and Servicing",
    text: "Your company deserves ongoing achievement. Our committed staff guarantees the seamless operation of your ERPNext system by offering continuous support and maintenance services that serve as the foundation for dependability and confidence."
  },
  {
    image: "/training-consultation.svg",
    alt: "Training-and-Consultation",
    title: "Training and Consultation",
    text: "Business excellence is the result of providing your staff with knowledge. By means of our all-inclusive training and advisory services, we grow proficiency, enable your personnel, and unlock new possibilities for expertise and adaptability within the ERPNext architecture."
  },
  {
    image: "/images/518.svg",
    alt: "Data-action",
    title: "Data Action",
    text: "Use our data movement services to go beyond typical limits. We ensure the accuracy, security, and integrity of your vital business data, enabling a seamless and meaningful transformation."
  }
];

export default function PartnerSaudiArabiaMotionCards() {
  return (
    <Section useGradient>
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center h-full">
                <Image src={card.image} alt={card.alt} width={80} height={80} className="mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-center">{card.title}</h3>
                <p className="text-gray-700 text-justify">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
