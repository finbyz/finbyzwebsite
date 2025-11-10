'use client';

import { Lightbulb, ArrowRight } from 'lucide-react';

interface Concept {
  title: string;
  description: string;
  relatedLink?: string;
}

interface KeyConceptsProps {
  concepts: Concept[];
}

export default function KeyConcepts({ concepts }: KeyConceptsProps) {
  return (
    <div className="bg-white py-16 px-2">
      <div className="container-custom">
        <div className="mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Key Concepts
            </h2>
          </div>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Important ideas to understand in this code
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {concepts.map((concept, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {concept.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {concept.description}
                </p>
                {concept.relatedLink && (
                  <a
                    href={concept.relatedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
