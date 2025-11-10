'use client';

import { useState } from 'react';
import { Copy, Check, ChevronRight } from 'lucide-react';

interface TutorialStep {
  stepNumber: number;
  title: string;
  explanation: string;
  code: string;
  language: string;
}

interface StepByStepTutorialProps {
  steps: TutorialStep[];
}

export default function StepByStepTutorial({ steps }: StepByStepTutorialProps) {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const handleCopy = async (code: string, stepNumber: number) => {
    await navigator.clipboard.writeText(code);
    setCopiedStep(stepNumber);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-2">
      <div className="container-custom">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Step-by-Step Tutorial
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Follow along to understand how this code works
          </p>

          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Step Header */}
                
                <div className="bg-white border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center gap-3">
                  <div className="bg-orange-100 text-orange-600 font-bold text-lg rounded-full w-10 h-10 flex items-center justify-center">
                        {step.stepNumber}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                </div>

               

                {/* Step Content */}
                <div className="p-6">
                  {/* Explanation */}
                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed">{step.explanation}</p>
                  </div>

                  {/* Code Block */}
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    {/* Code Header */}
                    <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
                      <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded">
                        {step.language}
                      </span>
                      <button
                        onClick={() => handleCopy(step.code, step.stepNumber)}
                        className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors"
                      >
                        {copiedStep === step.stepNumber ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Code Content */}
                    <pre className="p-4 overflow-x-auto">
                      <code className="text-sm text-gray-300 font-mono">{step.code}</code>
                    </pre>
                  </div>
                </div>

                {/* Step Footer */}
                {step.stepNumber < steps.length && (
                  <div className="px-6 pb-4 flex justify-end">
                    <div className="flex items-center gap-2 text-orange-600 font-medium">
                      <span>Next Step</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}