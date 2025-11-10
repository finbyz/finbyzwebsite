'use client';

import { AlertTriangle, CheckCircle } from 'lucide-react';

interface TroubleshootingItem {
  problem: string;
  solution: string;
}

interface TroubleshootingProps {
  items: TroubleshootingItem[];
}

export default function Troubleshooting({ items }: TroubleshootingProps) {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-2">
      <div className="container-custom">
        <div className="mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Common Issues & Solutions
            </h2>
          </div>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Troubleshoot problems you might encounter
          </p>

          <div className="space-y-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Problem */}
                <div className="bg-red-50 border-b border-red-100 px-6 py-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Problem</h3>
                      <p className="text-gray-700">{item.problem}</p>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="bg-green-50 px-6 py-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Solution</h3>
                      <p className="text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}