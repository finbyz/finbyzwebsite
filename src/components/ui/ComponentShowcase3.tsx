'use client';

import React, { useState, useEffect } from 'react';
import { 
  ChevronDown,
  Plus,
  Minus,
  BarChart3,
  Globe,
  Award,
  Cpu} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion'; // Add this import

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: any;
}

interface TimelineSectionProps {
  timelineItems?: TimelineItem[];
  title?: string;
  subtitle?: string;
}

// 11. Timeline Section Component
export function TimelineSection({ 
  timelineItems = [
    { year: "2024", title: "AI Integration Launch", description: "Successfully launched AI-powered automation features across all platforms", icon: Cpu },
    { year: "2023", title: "Global Expansion", description: "Expanded services to 12+ countries with localized solutions", icon: Globe },
    { year: "2022", title: "ERP Platform 2.0", description: "Released major update with enhanced analytics and reporting", icon: BarChart3 },
    { year: "2021", title: "Company Founded", description: "Started with a vision to transform business operations through technology", icon: Award }
  ],
  title = "Our Journey",
  subtitle = "Key milestones in our company's growth"
}: TimelineSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="max-w-10xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {/* Timeline items container with scroll */}
            <div className="relative max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400 transition-all duration-300">
              <div className="space-y-8 pr-4">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                    
                    {/* Content card */}
                    <div className="ml-16">
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group-hover:scale-105">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                                  {item.year}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            {item.title}
                          </h3>
                          
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FullScreenTimelineProps {
  timelineItems?: TimelineItem[];
  title?: string;
  subtitle?: string;
}

export function FullScreenTimeline({ 
  timelineItems = [
    { year: "2024", title: "AI Integration Launch", description: "Successfully launched AI-powered automation features across all platforms", icon: Cpu },
    { year: "2023", title: "Global Expansion", description: "Expanded services to 12+ countries with localized solutions", icon: Globe },
    { year: "2022", title: "ERP Platform 2.0", description: "Released major update with enhanced analytics and reporting", icon: BarChart3 },
    { year: "2021", title: "Company Founded", description: "Started with a vision to transform business operations through technology", icon: Award }
  ],
  title = "Our Journey",
  subtitle = "Key milestones in our company's growth"
}: FullScreenTimelineProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.timeline-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setCurrentIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.querySelector(`[data-index="${index}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative">
      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {timelineItems.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            title={`Go to ${timelineItems[index].year}`}
          />
        ))}
      </div>

      {/* Timeline Sections */}
      {timelineItems.map((item, index) => (
        <div
          key={index}
          data-index={index}
          className="timeline-section min-h-screen flex items-center justify-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, 
              ${index % 2 === 0 ? '#f8fafc' : '#f1f5f9'} 0%, 
              ${index % 2 === 0 ? '#e2e8f0' : '#e2e8f0'} 100%)`
          }}
        >
          {/* Background decorative elements removed */}

          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            {/* Year Badge */}
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-bold rounded-full shadow-lg">
                {item.year}
              </span>
            </div>

            {/* Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <item.icon className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              {item.description}
            </p>

            {/* Progress indicator */}
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm text-gray-500">
                {index + 1} of {timelineItems.length}
              </span>
              <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${((index + 1) / timelineItems.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Scroll indicator */}
            {index < timelineItems.length - 1 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

// 12. Team Section Component
export function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "10+ years in enterprise technology"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in AI and machine learning"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack development specialist"
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "User experience and product strategy"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600">The experts behind our innovative solutions</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 hover:opacity-20 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 13. Blog Grid Component
export function BlogGrid() {
  const blogPosts = [
    {
      title: "The Future of ERP Systems",
      excerpt: "Discover how AI is revolutionizing enterprise resource planning and what it means for your business.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      date: "March 15, 2024",
      author: "Alex Johnson",
      category: "Technology"
    },
    {
      title: "Automation Best Practices",
      excerpt: "Learn the key strategies for implementing successful automation in your organization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      date: "March 10, 2024",
      author: "Sarah Chen",
      category: "Automation"
    },
    {
      title: "Digital Transformation Guide",
      excerpt: "A comprehensive guide to navigating your company's digital transformation journey.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      date: "March 5, 2024",
      author: "Michael Rodriguez",
      category: "Strategy"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-gray-600">Stay updated with industry trends and best practices</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// 14. FAQ Section Component
export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes your ERP solutions different?",
      answer: "Our ERP solutions are built with modern technology, AI integration, and user-centric design. We focus on scalability, customization, and seamless integration with existing systems."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation timelines vary based on complexity. Simple setups take 3-6 months, while complex enterprise solutions may require 6-12 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide training and support?",
      answer: "Yes, we provide comprehensive training programs, documentation, and 24/7 support to ensure your team can effectively use the system from day one."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. Our solutions are designed for seamless integration with existing systems, databases, and third-party applications through APIs and standard protocols."
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A5276] mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about our services</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm mb-4">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openFaq === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 

interface TimelineCarouselProps {
  timelineItems?: TimelineItem[];
  title?: string;
  subtitle?: string;
  onFinish?: () => void; // Add this line
}

export function TimelineCarousel({
  timelineItems = [
    { year: "2024", title: "AI Integration Launch", description: "Successfully launched AI-powered automation features across all platforms", icon: Cpu },
    { year: "2023", title: "Global Expansion", description: "Expanded services to 12+ countries with localized solutions", icon: Globe },
    { year: "2022", title: "ERP Platform 2.0", description: "Released major update with enhanced analytics and reporting", icon: BarChart3 },
    { year: "2021", title: "Company Founded", description: "Started with a vision to transform business operations through technology", icon: Award }
  ],
  title = "Our Journey",
  subtitle = "Key milestones in our company's growth",
  onFinish,
}: TimelineCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for down, -1 for up

  // Auto-scroll effect
  useEffect(() => {
    if (index === timelineItems.length - 1) {
      if (onFinish) onFinish();
      return;
    }
    const timer = setTimeout(() => {
      setDirection(1);
      setIndex((prev) => prev + 1);
    }, 2500); // 2.5 seconds per card
    return () => clearTimeout(timer);
  }, [index, timelineItems.length, onFinish]);

  const Icon = timelineItems[index].icon;
  // Colorful gradients for logo backgrounds
  const gradients = [
    "from-pink-500 via-yellow-400 to-blue-500",
    "from-green-400 via-blue-500 to-purple-600",
    "from-orange-400 via-pink-500 to-purple-500",
    "from-blue-500 via-teal-400 to-green-400",
    "from-purple-500 via-pink-400 to-yellow-400",
    "from-red-400 via-yellow-400 to-green-400"
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center  relative overflow-hidden"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-2">{title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-gray-100 overflow-hidden px-12 py-6 sm:px-20 sm:py-8 max-w-2xl w-full text-center select-none outline-none focus:ring-2 focus:ring-blue-400"
            title="Auto-advancing timeline milestone"
          >
            <div className="flex flex-col items-center mb-6">
              <div className={`w-32 h-32 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center shadow-xl mb-6 transition-all duration-300`}>
                {Icon && <Icon className="w-16 h-16 text-white drop-shadow-lg" />}
              </div>
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full mb-2">
                {timelineItems[index].year}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">{timelineItems[index].title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">{timelineItems[index].description}</p>
            <div className="mt-2 text-gray-400 text-xs">Auto-advancing…</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 