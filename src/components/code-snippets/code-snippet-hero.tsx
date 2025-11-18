'use client';

import { Code, Tag, BookOpen } from 'lucide-react';

interface CodeSnippetHeroProps {
  title: string;
  description: string;
  snippetName: string;
  language: string;
  category: string;
  accentColor?: 'orange' | 'blue' | 'green';
}

export default function CodeSnippetHero({
  title,
  description,
  snippetName,
  language,
  category,
  accentColor = 'orange',
}: CodeSnippetHeroProps) {
  const accentColors = {
    orange: 'bg-orange-500 text-white',
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="container-custom">
        <div className="mx-auto text-center">
          {/* Category Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${accentColors[accentColor]}`}>
              <Tag className="w-4 h-4" />
              {category}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-700 text-white">
              <Code className="w-4 h-4" />
              {language}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            {title}
          </h1>

          {/* Snippet Name */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-orange-500" />
            <code className="text-xl text-orange-400 font-mono">{snippetName}</code>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-delay">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
    </div>
  );
}