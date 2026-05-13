"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/sections/Section";

interface ChallengeCard {
  title: string;
  image: string;
  alt: string;
  description: string;
}

interface Industry {
  title: string;
  image: string;
  alt: string;
  description: string;
  link: string;
}

interface Props {
  challengeCards: ChallengeCard[];
  industries: Industry[];
}

export default function HireERPNextMotionSections({ challengeCards, industries }: Props) {
  return (
    <>
      <Section className="bg-gradient-to-b from-gray-50 to-white py-20 relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1A5276] leading-tight">
              Overcoming ERPNext Challenges
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our proven solutions help you unlock ERPNext&rsquo;s full potential while avoiding common pitfalls.
            </p>
          </div>

          <div className="space-y-10">
            {challengeCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="w-full relative group bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500"
                style={{ height: "280px" }}
              >
                <div className="relative z-10 bg-white rounded-3xl h-full flex flex-col md:flex-row transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="relative md:w-1/3 w-full h-64 md:h-full flex items-center justify-center bg-gray-50 overflow-hidden">
                    <Image src={card.image} alt={card.alt} width={500} height={500} className="max-h-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                      <h3 className="text-white text-lg font-semibold">{card.alt}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center md:w-2/3 w-full">
                    <p className="text-gray-700 text-sm md:text-base leading-snug text-center md:text-left">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section useGradient className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-[#1A5276]">
            Industries We Serve with <span className="text-primary">Expert ERPNext Solutions</span>
          </h2>

          <motion.p
            className="mb-12 text-gray-700 text-center max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            As a trusted ERPNext Implementation Partner globally, FinByz Tech serves diverse industries with custom ERPNext solutions. Our ERPNext service providers design systems that meet unique operational needs across sectors.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {industries.map((industry, idx) => (
              <a
                key={idx}
                href={industry.link || undefined}
                className="group relative flex flex-col items-center justify-center bg-gray-100 rounded-full shadow-md transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] w-40 h-40"
              >
                <div className="absolute -inset-1 rounded-full bg-white opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-md"></div>
                <div className="w-20 h-20 mb-3 relative z-10 flex items-center justify-center">
                  <Image src={industry.image} alt={industry.alt} width={500} height={500} className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110" title={industry.alt} />
                </div>
                <span className="text-sm sm:text-base font-semibold text-gray-800 relative z-10 text-center leading-snug transition-colors duration-300 group-hover:text-primary px-2">
                  {industry.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
