import React from 'react';
import { ArrowRight, Users, Code, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/sections/BreadCrumbs';

type ColorKey = 'orange' | 'blue' | 'green' | 'purple';

type IconComponentType = React.ComponentType<{ className?: string }>

interface ButtonConfig {
  text: string;
  action?: string | (() => void);
}

interface HeroMedia {
  alt: string;
  src?: string;
  videoSrc?: string;
  poster?: string;
}

interface FeatureItem {
  icon: IconComponentType;
  title: string;
  description: string;
}

interface HeroSectionProps {
  headline?: string;
  highlightWords?: string[];
  description?: string;
  primaryButton?: ButtonConfig;
  secondaryButton?: ButtonConfig;
  heroImage?: HeroMedia;
  features?: FeatureItem[];
  backgroundColor?: string;
  accentColor?: ColorKey;
  imageClassName?: string;
  minHeight?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline = "Empowering Businesses with ERPNext Solutions Worldwide",
  highlightWords = ["ERPNext Solutions"],
  description = "From implementation to custom development, we provide comprehensive ERPNext services that transform businesses across 25+ countries with 500+ successful deployments.",
  primaryButton = undefined,
  secondaryButton = undefined,
  heroImage = {
    alt: "Dashboard interfaces on multiple devices",
    src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23001122'/%3E%3Crect x='50' y='50' width='200' height='150' rx='10' fill='%23003366' stroke='%23FF6B35' stroke-width='2'/%3E%3Crect x='200' y='80' width='250' height='180' rx='10' fill='%23002244' stroke='%23FF6B35' stroke-width='2'/%3E%3Crect x='350' y='120' width='180' height='140' rx='10' fill='%23003366' stroke='%23FF6B35' stroke-width='2'/%3E%3Ccircle cx='100' cy='200' r='15' fill='%23FF6B35'/%3E%3Ccircle cx='450' cy='150' r='12' fill='%23FF6B35'/%3E%3Ccircle cx='300' cy='100' r='10' fill='%23FF6B35'/%3E%3Ctext x='300' y='350' text-anchor='middle' fill='%23FFFFFF' font-family='Arial' font-size='16'%3EReplace with your hero image%3C/text%3E%3C/svg%3E",
    // Optional: if provided, video will be rendered instead of image
    videoSrc: undefined,
    poster: undefined
  },
  backgroundColor = "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
  accentColor = "orange",
  imageClassName = "w-full h-auto rounded-2xl object-contain mx-auto",
  minHeight = "min-h-[80vh]",
  className = "mt-12"
}) => {
  // Dynamic color classes based on accentColor prop
  const colorClasses: Record<ColorKey, {
    text: string;
    bg: string;
    bgHover: string;
    border: string;
    bgOpacity: string;
    bgOpacityHover: string;
  }> = {
    orange: {
      text: "text-orange-500",
      bg: "bg-orange-500",
      bgHover: "hover:bg-orange-600",
      border: "border-orange-500",
      bgOpacity: "bg-orange-500/10",
      bgOpacityHover: "hover:bg-orange-500/20"
    },
    blue: {
      text: "text-blue-500",
      bg: "bg-orange-500",
      bgHover: "hover:bg-orange-600",
      border: "border-blue-500",
      bgOpacity: "bg-orange-500/10",
      bgOpacityHover: "hover:bg-orange-500/20"
    },
    green: {
      text: "text-green-500",
      bg: "bg-green-500",
      bgHover: "hover:bg-green-600",
      border: "border-green-500",
      bgOpacity: "bg-green-500/10",
      bgOpacityHover: "hover:bg-green-500/20"
    },
    purple: {
      text: "text-purple-500",
      bg: "bg-purple-500",
      bgHover: "hover:bg-purple-600",
      border: "border-purple-500",
      bgOpacity: "bg-purple-500/10",
      bgOpacityHover: "hover:bg-purple-500/20"
    }
  };

  const colors = colorClasses[accentColor as ColorKey] || colorClasses.orange;

  // Function to highlight specific words in the headline
  const highlightWordsInText = (text: string, wordsToHighlight: string[]): React.ReactNode => {
    if (!wordsToHighlight || wordsToHighlight.length === 0) {
      return <span>{text}</span>;
    }

    let highlightedText = text;
    wordsToHighlight.forEach((word: string) => {
      const regex = new RegExp(`(${word})`, 'gi');
      highlightedText = highlightedText.replace(regex, '|||HIGHLIGHT_START|||$1|||HIGHLIGHT_END|||');
    });

    return highlightedText.split('|||').map((part: string, index: number) => {
      if (part === 'HIGHLIGHT_START') return null;
      if (part === 'HIGHLIGHT_END') return null;

      const prevPart = highlightedText.split('|||')[index - 1];
      if (prevPart === 'HIGHLIGHT_START') {
        return <span key={index} className={colors.text}>{part}</span>;
      }
      return <span key={index}>{part}</span>;
    }).filter(Boolean);
  };

  return (
    <div className={`container-custom min-h-screen ${backgroundColor} text-white ${className}`}>
      {/* Main Hero Section */}
      <div className="mx-auto">
        <Breadcrumbs
          textColor="text-white/90"
          currentTextColor="text-white"
          hoverColor="hover:text-orange-600"
          separatorColor="text-white/40"
        />
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${minHeight}`}>
          {/* Left Content */}
          <div className="space-y-6">

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight lg:leading-none">
              {highlightWordsInText(headline, highlightWords)}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-slate-300 leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-full sm:max-w-xl md:max-w-2xl">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButton && (
                primaryButton.action && typeof primaryButton.action === 'string' ? (
                  <Link
                    href={primaryButton.action}
                    className={`group ${colors.bg} ${colors.bgHover} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105`}
                  >
                    <span>{primaryButton.text}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : primaryButton.action && typeof primaryButton.action === 'function' && (
                  <button
                    onClick={primaryButton.action}
                    className={`group ${colors.bg} ${colors.bgHover} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105`}
                  >
                    <span>{primaryButton.text}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )
              )}
              {secondaryButton && (
                secondaryButton.action ? (
                  typeof secondaryButton.action === 'string' ? (
                    <Link
                      href={secondaryButton.action}
                      className={`group border-2 border-slate-600 hover:${colors.border} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-slate-800`}
                    >
                      <span>{secondaryButton.text}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={secondaryButton.action}
                      className={`group border-2 border-slate-600 hover:${colors.border} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-slate-800`}
                    >
                      <span>{secondaryButton.text}</span>
                    </button>
                  )
                ) : (
                  <span className="text-slate-300 px-2 py-1 font-medium">
                    {secondaryButton.text}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative ">
              {heroImage.videoSrc ? (
                <video
                  src={heroImage?.videoSrc}
                  poster={heroImage?.poster}
                  aria-label={heroImage.alt}
                  className="w-full h-auto max-h-[520px] rounded-2xl object-contain"
                  playsInline
                  muted
                  autoPlay
                  preload="metadata"
                />
              ) : (
                <Image
                  src={heroImage.poster || heroImage.src || ""}
                  alt={heroImage.alt || "Hero image"}
                  width={600}
                  height={450}
                    className={imageClassName}
                  priority
                />
              )}
              {/* "w-full h-auto max-h-[520px] rounded-2xl object-contain" */}

              {/* Decorative floating elements */}
              <div className={`absolute -top-4 -right-4 w-8 h-8 ${colors.bg} rounded-full opacity-80 animate-pulse`}></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-orange-500 rounded-full opacity-60 animate-bounce"></div>
              <div className={`absolute top-1/2 -right-8 w-4 h-4 ${colors.bg} opacity-70 rounded-full hidden md:block`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${colors.bg}/5 rounded-full blur-3xl`}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default HeroSection;