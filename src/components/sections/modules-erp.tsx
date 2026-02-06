
"use client";

import React, { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '@/styles/components/modules-erp.css'

interface ModuleCard {
  id: string;
  href: string,
  title: string;
  quote: string;
  author?: string;
  image: string;
  alt: string;
}
const modules: ModuleCard[] = [
  {
    id: 'account',
    href: "/modules-of-erp",
    title: 'Account',
    quote: 'Accounting is the language of Business.',
    author: 'Warren Buffet',
    image: '/module-account.svg',
    alt: 'Account Module'
  },
  {
    id: 'crm',
    href: "/crm-software",
    title: 'CRM',
    quote: 'If you are not taking care of your customers, your competitors will.',
    author: 'Bob Hooey',
    image: '/module-crm.svg',
    alt: 'CRM Module'
  },
  {
    id: 'inventory',
    href: "/modules-of-erp",
    title: 'Inventory',
    quote: 'Inventory is money sitting around in another form.',
    author: 'Rhonda Adams',
    image: '/module-inventory.svg',
    alt: 'Inventory Module'
  },
  {
    id: 'purchase',
    href: "/modules-of-erp",
    title: 'Purchase',
    quote: 'You sell on Emotion, But you justify a Purchase with Logic.',
    author: 'Joseph Sugarman',
    image: '/module-purchase.svg',
    alt: 'Purchase Module'
  },
  {
    id: 'manufacturing',
    href: "/modules-of-erp",
    title: 'Manufacturing',
    quote: 'This is where the real work gets done.',
    image: '/module-manufacturing.svg',
    alt: 'Manufacturing Module'
  },
  {
    id: 'hr',
    href: "/human-resource-system",
    title: 'HR',
    quote: 'You don\'t build a business. You build People and then people build the business.',
    author: 'Zig Ziglar',
    image: '/module-hr.svg',
    alt: 'HR Module'
  },
  {
    id: 'support',
    href: "/modules-of-erp",
    title: 'Support',
    quote: 'Delivery Excellence for creating a magical customer experience.',
    image: '/module-support.svg',
    alt: 'Support Module'
  },
  {
    id: 'pm',
    href: "/modules-of-erp",
    title: 'Project',
    quote: 'A goal without a plan is just a wish.',
    author: 'Antoine de Saint-Exupéry',
    image: '/project.svg',
    alt: 'Project Module'
  },
  {
    id: 'am',
    href: "/modules-of-erp",
    title: 'Asset',
    quote: 'Know what you own, and know why you own it.',
    author: 'Peter Lynch',
    image: '/assets.svg',
    alt: 'Asset Module'
  },
  {
    id: 'exim',
    href: "/modules-of-erp",
    title: 'Exim',
    quote: 'The Foreign Trade Should be Fair Rather than Free.',
    author: 'Lyn Nofziger',
    image: '/module-exim.svg',
    alt: 'Exim Module'
  }
];


interface CounterProps {
  end: number;
  label: string;
  showLines?: 'before' | 'after' | 'both';
}

const Counter: React.FC<CounterProps> = ({ end, label, showLines }) => {
  const [count, setCount] = React.useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className={`flex flex-col items-center ${showLines === 'after' || showLines === 'both' ? 'relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-20 after:bg-white/30' : ''
      } ${showLines === 'before' || showLines === 'both' ? 'relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-px before:h-20 before:bg-white/30' : ''
      } px-4 md:px-8`}>
      <span className="text-4xl md:text-5xl font-bold text-[#FF8C00] mb-2">
        {count}
        {end >= 1000 && '+'}
      </span>
      <span className="text-white font-semibold text-center text-sm md:text-base">{label}</span>
    </div>
  );
};

export default function ModulesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScroll);
      return () => carousel.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = 320 + 24; // card width (320px) + gap (24px)
      const container = carouselRef.current;
      const scrollAmount = cardWidth;

      if (direction === 'right') {
        // Scrolling right
        const newScrollLeft = container.scrollLeft + scrollAmount;

        // Check if we're near the end
        if (newScrollLeft >= container.scrollWidth - container.clientWidth) {
          // Jump to start smoothly
          container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: 'auto' });
          }, 300);
        } else {
          container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        }
      } else {
        // Scrolling left
        const newScrollLeft = container.scrollLeft - scrollAmount;

        // Check if we're at the beginning
        if (newScrollLeft <= 0) {
          // Jump to end smoothly
          container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
          setTimeout(() => {
            container.scrollTo({ left: container.scrollWidth - container.clientWidth, behavior: 'auto' });
          }, 300);
        } else {
          container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A5276] to-[#154360]" id="modules">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
          {/* Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block pb-3">
              Modules of ERP
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF8C00]"></span>
            </h2>
          </div>

          {/* Counters */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-0">
            <Counter end={100} label="Completed Projects" showLines="after" />
            <Counter end={6000} label="Active Users" />
            <Counter end={25} label="Expert Resources" showLines="before" />
          </div>
        </div>

        {/* Content Row */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Description */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-white text-base leading-relaxed">
              Finbyz Tech Pvt Ltd track record spans over 10+ years of IT business solutions. We have
              technology in our genes. We provide innovative solution that work for all the
              Industries/businesses.
            </p>
            <p className="text-white text-base leading-relaxed">
              We are adept enough to help fit an ERP solution that exactly meets your goals.
            </p>
          </div>

          {/* Carousel */}
          <div className="lg:col-span-8 relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-[#1A5276]" />
            </button>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-[#1A5276]" />
            </button>

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-8"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {modules.map((module) => (
                <a
                  key={module.id}
                  href={module.href || "/modules-of-erp"}
                  className="flex-shrink-0 w-80 group"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="p-8 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-t-lg">
                      <img
                        src={module.image}
                        alt={module.alt}
                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content Container */}
                    <div className="p-6 flex-grow flex flex-col justify-center text-center">
                      <h3 className="text-2xl font-bold text-[#1A5276] mb-4 relative inline-block mx-auto">
                        {module.title}
                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#FF8C00] group-hover:w-full transition-all"></span>
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {module.quote}
                        {module.author && (
                          <>
                            <br />
                            <span className="italic">- {module.author}</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}