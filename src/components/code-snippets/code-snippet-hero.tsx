import { Code, Tag, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import { getHeroImageFromERP } from '@/lib/getPageData';


interface CodeSnippetHeroProps {
  title: string;
  description: string;
  snippetName: string;
  language: string;
  category: string;
  heroImage?: {
    src: string;
    alt: string;
  }
  accentColor?: 'orange' | 'blue' | 'green';
}

export default async function CodeSnippetHero({
  title,
  description,
  snippetName,
  language,
  category,
  heroImage,
  accentColor = 'orange',
}: CodeSnippetHeroProps) {
  const accentColors = {
    orange: 'bg-orange-500 text-white',
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
  };

  const { image } = await getHeroImageFromERP();

  // Local prop takes priority, ERP image is the fallback
  const resolvedImage = heroImage ?? (image ? { src: image, alt: 'Hero image' } : undefined);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      <div className="container-custom">
        <Breadcrumbs />
        <div className={resolvedImage ? 'grid lg:grid-cols-2 gap-12 items-center' : ''}>
          {/* Left Content */}
          <div className={`mx-auto text-center${resolvedImage ? ' lg:text-left' : ''}`}>
            <div className={`flex items-center justify-center${resolvedImage ? ' lg:justify-start' : ''} gap-2 mb-6`}>
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${accentColors[accentColor]}`}>
                <Tag className="w-4 h-4" />
                {category}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-700 text-white">
                <Code className="w-4 h-4" />
                {language}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
              {title}
            </h1>

            {/* <div className={`flex items-center gap-2 mb-6${resolvedImage ? ' lg:justify-start' : ' justify-center'}`}>
              <BookOpen className="w-5 h-5 text-orange-500" />
              <code className="text-xl text-orange-400 font-mono">{snippetName}</code>
            </div> */}

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-delay">
              {description}
            </p>
          </div>

          {resolvedImage && (
            <div className="relative">
              <Image
                src={resolvedImage.src}
                alt={resolvedImage.alt}
                width={600}
                height={450}
                className="w-full h-auto rounded-2xl object-contain"
                priority
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-80 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-orange-500 rounded-full opacity-60 animate-bounce" />
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
    </div>
  );
}