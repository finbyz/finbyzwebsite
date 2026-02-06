'use client';

import { CheckCircle, AlertCircle, Package } from 'lucide-react';

interface CodeOverviewProps {
  whatItDoes: string;
  whenToUse: string;
  prerequisites?: string[];
}

export default function CodeOverview({
  whatItDoes,
  whenToUse,
  prerequisites = [],
}: CodeOverviewProps) {
  return (
    <div className="bg-white py-16 px-2">
      <div className="container-custom">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Understanding This Code
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* What It Does */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900">What It Does</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{whatItDoes}</p>
            </div>

            {/* When To Use */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900">When To Use</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{whenToUse}</p>
            </div>
          </div>

          {/* Prerequisites */}
          {prerequisites.length > 0 && (
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="flex items-start gap-3 mb-4">
                <Package className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900">Prerequisites</h3>
              </div>
              <ul className="space-y-2">
                {prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-purple-600 font-bold mt-1">•</span>
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}