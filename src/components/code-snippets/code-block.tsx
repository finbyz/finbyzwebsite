'use client';

import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  fileName?: string;
  showLineNumbers?: boolean;
  allowCopy?: boolean;
  referenceLink?: string;
  referenceLinkText?: string;
}

export default function CodeBlock({
  code,
  language,
  fileName,
  showLineNumbers = true,
  allowCopy = true,
  referenceLink,
  referenceLinkText = 'View Documentation',
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="container-custom">
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
          <div className="flex items-center gap-3">
            {fileName && (
              <span className="text-sm font-mono text-gray-300">{fileName}</span>
            )}
            <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded">
              {language}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {referenceLink && (
              <a
                href={referenceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{referenceLinkText}</span>
              </a>
            )}
            {allowCopy && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Code Content */}
        <div className="relative overflow-x-auto">
          <pre className="p-4 text-sm leading-relaxed">
            <code className="font-mono text-gray-300">
              {showLineNumbers ? (
                <table className="w-full">
                  <tbody>
                    {lines.map((line, index) => (
                      <tr key={index}>
                        <td className="pr-4 text-right text-gray-500 select-none w-12">
                          {index + 1}
                        </td>
                        <td className="text-gray-300">{line || '\n'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                code
              )}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}