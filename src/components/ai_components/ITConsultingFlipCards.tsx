import React from "react";
import FlipCard from "@/components/ai_components/FlipCard";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const cards = [
  {
    title: "Innovative Approach",
    image: "api/fb/n/files/it-consulting-innovative-approach.svg",
    alt: "Innovative Approach",
    quote: "Innovation distinguishes between a leader and a follower. - Steve Jobs.",
    description:
      "Most companies still use age old systems to do most of the regular tasks manually, which makes the job monotonous and reduces the employee productivity. Result, with higher employee attrition, most employees become short sighted, leading to no process improvements. We support companies to come out this vicious cycles, and getting the growth back on the fast track. We suggest business process re-engineering to optimize the task management and increase productivity."
  },
  {
    title: "Expert Support",
    image: "api/fb/n/files/it-consulting-expert-support.svg",
    alt: "Expert Support",
    quote: "People expect good service but few are willing to give it. - Robert Gately.",
    description:
      "You can access a dedicated IT Analyst at FinByz that helps you achieve your IT goals and streamline operations. This expert will be your one-point contact during any IT needs, who will help you define direction of the project, choose the functionality wisely & understand the supporting services."
  },
  {
    title: "Value Analysis",
    image: "api/fb/n/files/it-consulting-value-analysis.svg",
    alt: "Value Analysis",
    quote: "Causal analysis provides absolutely no value judgment, and a value judgment is not a causal explanation. - Max Weber.",
    description:
      "In technology, there are many ways to achieve your goals depending upon the technology you choose. But your investment and ease of operation may change depending upon the choices you make. We provide a cost benefit analysis to help you make important decisions about the IT Investment and resource management. We help business to achieve their IT goals, optimise business processes and take full advantage of existing or new investments in technology."
  },
  {
    title: "Unbiased Recommendations",
    image: "api/fb/n/files/it-consulting-unbiased-recommendations.svg",
    alt: "Unbiased Recommendations",
    quote: "The guest will judge better of a feast than the cook - Aristotle.",
    description:
      "We keep the goals of the client in centre of our recommendations, and not the technologies we provide solutions in. We understand the resource limitations of the company and we recommend most feasible solutions. The unbiased advice from FinByz will help you choose the best options. Our expert analysis can help management understand pros and cons of various tech solutions allowing them to choose the technology which can achieve their business goals at lowest costs."
  }
];

const ITConsultingFlipCards: React.FC = () => {
  return (
   <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {cards.map((card, idx) => (
    <FlipCard
      key={card.title}
      className="border-none shadow-lg hover:scale-105 transition-transform duration-300 bg-white rounded-xl overflow-hidden"
      front={
        <div className="flex flex-col items-center justify-center py-8 px-4 text-center break-words">
          <Image
            src={card.image}
            alt={card.alt}
            width={180}
            height={180}
            className="mb-4 max-w-full h-auto object-contain"
            loading="lazy"
          />
          <h3 className="text-lg font-semibold text-gray-900 mt-2 leading-snug">
            {card.title}
          </h3>
        </div>
      }
      back={
        <div className="flex flex-col items-center justify-center py-8 px-4 h-full text-center overflow-hidden break-words">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
            {card.title}
          </h3>
          <div className="flex items-start gap-2 mb-2 text-primary flex-wrap justify-center">
            <FaQuoteLeft className="text-xl text-primary shrink-0" />
            <span className="italic text-sm text-gray-700 break-words">
              {card.quote}
            </span>
          </div>
          <p className="text-gray-700 text-sm mt-4 leading-relaxed break-words">
            {card.description}
          </p>
        </div>
      }
      flipOnClick={true}
    />
  ))}
</div>

  );
};

export default ITConsultingFlipCards;
