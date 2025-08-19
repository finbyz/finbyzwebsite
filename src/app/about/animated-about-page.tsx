"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FAQSection } from "@/components/ui/ComponentShowcase3";
import { 
  Users, 
  Lightbulb, 
  Target, 
  Star, 
  ArrowRight, 
  Quote,
  Rocket,
  Heart,
  Zap,
  Mail,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Clock,
  TrendingUp,
  Award,
  Shield,
  Globe,
  Compass
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import React from "react";

export default function AnimatedAboutPage() {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

  // Timeline scroll-jack state
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [timelineActive, setTimelineActive] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for down, -1 for up
  const timelineLength = 14; // Number of timeline items
  const timelineIcons = [Award, Briefcase, Rocket, Lightbulb, TrendingUp, Clock, Zap, Star, Shield, Users, Globe];
  const gradients = [
    "from-pink-500 via-yellow-400 to-blue-500",
    "from-green-400 via-blue-500 to-purple-600",
    "from-orange-400 via-pink-500 to-purple-500",
    "from-blue-500 via-teal-400 to-green-400",
    "from-purple-500 via-pink-400 to-yellow-400",
    "from-red-400 via-yellow-400 to-green-400",
    "from-indigo-500 via-blue-400 to-pink-400",
    "from-yellow-500 via-orange-400 to-red-500",
    "from-teal-400 via-blue-500 to-purple-600",
    "from-pink-400 via-purple-500 to-blue-400",
    "from-blue-400 via-green-400 to-yellow-400"
  ];

  // Lock body scroll while timeline is active
  useEffect(() => {
    if (timelineActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [timelineActive]);

  // Handle scroll for timeline overlay
  useEffect(() => {
    if (!timelineActive) return;
    let ticking = false;
    const onWheel = (e: WheelEvent) => {
      if (ticking) return;
      ticking = true;
      setTimeout(() => { ticking = false; }, 400);
      if (e.deltaY > 0) {
        // Scroll down
        setDirection(1);
        setTimelineIndex((prev) => {
          if (prev === timelineLength - 1) {
            setTimelineActive(false);
            return prev;
          }
          return prev + 1;
        });
      } else if (e.deltaY < 0) {
        // Scroll up
        setDirection(-1);
        setTimelineIndex((prev) => (prev === 0 ? 0 : prev - 1));
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [timelineActive, timelineLength]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const timelineItems = [
    { year: "2015", title: "Finbyz Consulting Begins", description: "Launched as a financial and business consulting firm focused on unlocking operational efficiency." },
    { year: "2016", title: "Rebranded as Finbyz Tech Pvt Ltd", description: "Transitioned into a tech-first company focused on business process automation." },
    { year: "2017", title: "Exim App Built", description: "Launched a custom solution for managing export-import operations in ERP systems." },
    { year: "2018", title: "Specialized in Chemicals", description: "Created solutions for batch-wise inventory and regulatory compliance." },
    { year: "2019", title: "Entered Textile Manufacturing", description: "Designed complex production and inventory workflows for yarn manufacturers." },
    { year: "2020", title: "Serialized Inventory for Engineering", description: "Enabled bulk serialized item management for a heavy machinery manufacturer." },
    { year: "2021", title: "Optimized Plastic Operations", description: "Reduced machine downtime by solving mold change issues using smart tech." },
    { year: "2022", title: "Trading Bots & Agri Commodity Suite", description: "Built algorithmic trading automation and ERP workflows for agro-trading firms." },
    { year: "2023", title: "Solutions for Metal Casting", description: "Created tools to track rejections and process transparency in multi-stage manufacturing." },
    { year: "2024", title: "Resource Augmentation Model", description: "Launched a flexible model for businesses to hire dedicated tech talent. Also delivered industry-specific ERP for the solar pump sector." },
    { year: "2025", title: "AI-Powered Workflow Automations", description: "Integrated cutting-edge AI tools to solve real-world industry challenges, from production to procurement." },
    { year: "2026", title: "Placeholder Milestone 1", description: "Description for future milestone 1." },
    { year: "2027", title: "Placeholder Milestone 2", description: "Description for future milestone 2." },
    { year: "2028", title: "Placeholder Milestone 3", description: "Description for future milestone 3." }
  ];

  const valuesItems = [
    {
      icon: Target,
      title: "Clarity Over Complexity",
      description: "We untangle complex tech and business challenges into structured, actionable solutions."
    },
    {
      icon: Heart,
      title: "Ownership with Empathy",
      description: "We treat your business as our own — always mindful of the people and impact behind every decision."
    },
    {
      icon: Award,
      title: "Precision in Execution",
      description: "Whether it's a workflow or automation, we aim for excellence, not shortcuts."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "We build systems that scale — not just quickly, but wisely and sustainably."
    },
    {
      icon: Users,
      title: "Collaboration is Core",
      description: "We co-create with our clients, staying agile as business needs evolve."
    }
  ];



  const relatedPages = [
    {
      title: "Steer Your Vision",
      description: "Discover our strategic approach to solving complex business challenges.",
      url: "/steer-your-vision"
    },
    {
      title: "Our Team",
      description: "Meet the people behind Finbyz — technologists, analysts, and advisors.",
      url: "/our-team"
    },
    {
      title: "Life at Finbyz",
      description: "Get a glimpse into our culture, values, and what it's like to work with us.",
      url: "/life-at-finbyz"
    }
  ];

  const toggleAccordion = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  return (
    <>
      {/* Timeline Scroll-Jack Overlay */}
      <AnimatePresence>
        {timelineActive && (
          <motion.div
            key="timeline-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 via-white to-blue-50"
            style={{ minHeight: '100vh' }}
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey Through the Years</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">From humble beginnings to industry leadership — here's how we've evolved and grown.</p>
            </div>
            <div className="w-full max-w-2xl mx-auto relative flex-1 flex flex-col justify-center items-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={timelineIndex}
                  initial={{ opacity: 0, y: direction > 0 ? 80 : -80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: direction > 0 ? -80 : 80 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden p-8 text-center w-full"
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className={`w-32 h-32 bg-gradient-to-br ${gradients[timelineIndex % gradients.length]} rounded-full flex items-center justify-center shadow-2xl mb-6 transition-all duration-300`}>
                      {timelineIcons[timelineIndex % timelineIcons.length] && (
                        React.createElement(timelineIcons[timelineIndex % timelineIcons.length], { className: "w-16 h-16 text-white drop-shadow-lg" })
                      )}
                    </div>
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full mb-2">
                      {timelineItems[timelineIndex].year}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{timelineItems[timelineIndex].title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{timelineItems[timelineIndex].description}</p>
                  <div className="mt-6 text-gray-400 text-xs">Scroll to see next ({timelineIndex + 1}/{timelineLength})</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Rest of the page (only scrollable after timeline) */}
      <div style={{ filter: timelineActive ? 'blur(2px)' : 'none', pointerEvents: timelineActive ? 'none' : 'auto' }}>
        {/* Mission & Vision Section */}
        <section 
          id="mission-vision"
          ref={(el) => { sectionRefs.current['mission-vision'] = el; }}
          className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden w-full"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="w-full relative">
            <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['mission-vision'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <Badge className="mb-6 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white border-0 animate-fade-in-up-delayed">
                Our Foundation
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
                Our Tagline, Mission, and Vision
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible['mission-vision'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse">
                      <Compass className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#1A5276]">Tagline</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed font-semibold text-lg">Steer Your Vision</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#1A5276]">Vision</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">To shape a world where every great business idea has a technology partner ready to steer it to success.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-[#1A5276]">Mission</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">At Finbyz Tech, we partner with ambitious businesses to turn their vision into value. From planning to execution, we simplify complexity and bring clarity to digital transformation.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation & Impact Section */}
        <section 
          id="innovation-impact"
          ref={(el) => { sectionRefs.current['innovation-impact'] = el; }}
          className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden w-full"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-green-400/15 to-blue-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="w-full relative">
            <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['innovation-impact'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <Badge className="mb-6 bg-gradient-to-r from-green-500 to-blue-600 text-white border-0 animate-fade-in-up-delayed">
                Our Journey
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
                A Decade of Innovation & Impact
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed animate-fade-in-up-delayed-3">
                  Founded on the belief that technology should empower rather than overwhelm, Finbyz Tech has grown from a consulting firm into a full-fledged technology partner. We serve clients across industries — from manufacturing to finance — with solutions that are as strategic as they are scalable.
                </p>
                <p className="text-lg text-gray-600 mt-6 leading-relaxed">
                  What sets us apart is our commitment to <strong>clarity over complexity</strong>, <strong>precision in execution</strong>, and a <strong>collaborative mindset</strong>. Whether optimizing workflows, building custom applications, or automating decisions, our work helps businesses operate smarter and scale faster.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section 
          id="quote-section"
          ref={(el) => { sectionRefs.current['quote-section'] = el; }}
          className="py-24 bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-100 relative overflow-hidden w-full"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="w-full relative">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible['quote-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#FF8C00] to-[#FFA500] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Quote className="w-10 h-10 text-white" />
              </div>
              <blockquote className="text-2xl lg:text-3xl font-bold text-[#1A5276] mb-6 leading-relaxed animate-fade-in-up-delayed">
                "We don't just build software — we help you steer toward smarter decisions, streamlined operations, and scalable outcomes."
              </blockquote>
              <p className="text-lg text-gray-600 font-medium animate-fade-in-up-delayed-2">— Finbyz Tech</p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section 
          id="timeline"
          ref={(el) => { sectionRefs.current['timeline'] = el; }}
          className="py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden w-full"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.3s'}}></div>
          </div>
          
          <div className="w-full relative">
            <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['timeline'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <Badge className="mb-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 animate-fade-in-up-delayed">
                Our History
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-2 animate-fade-in-up-delayed-2">
                Our Journey Through the Years
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl  leading-relaxed animate-fade-in-up-delayed-3">
                From humble beginnings to industry leadership — here's how we've evolved and grown.
              </p>
            </div>
            
            <div className="max-w-10xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FF8C00] to-[#FFA500]"></div>
                
                {timelineItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`relative mb-12 transition-all duration-700 ${
                      isVisible['timeline'] 
                        ? 'animate-fade-in-up opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg font-bold text-[#1A5276]">{item.title}</CardTitle>
                              <Badge className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white border-0">
                                {item.year}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Timeline dot */}
                      <div className="w-2/12 flex justify-center">
                        <div className="w-6 h-6 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] rounded-full shadow-lg border-4 border-white"></div>
                      </div>
                      
                      {/* Empty space for alignment */}
                      <div className="w-5/12"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Stand For */}
        <section 
          id="values"
          ref={(el) => { sectionRefs.current['values'] = el; }}
          className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden w-full"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="w-full relative">
            <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['values'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 animate-fade-in-up-delayed">
                Our Values
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
                What We Stand For
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed-3">
                These principles guide every decision, every project, and every relationship we build.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valuesItems.map((item, index) => {
                const gradients = [
                  "from-blue-500 to-purple-600",
                  "from-orange-500 to-red-500", 
                  "from-green-500 to-teal-600",
                  "from-purple-500 to-pink-600",
                  "from-indigo-500 to-blue-600"
                ];
                return (
                  <Card 
                    key={index} 
                    className={`border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105 ${
                      isVisible['values'] 
                        ? 'animate-fade-in-up opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-[#1A5276]">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Related Pages */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden w-full">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/4 w-40 h-40 bg-gradient-to-br from-gray-400/20 to-blue-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-gray-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="w-full relative">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-gradient-to-r from-gray-500 to-blue-600 text-white border-0">
                Explore More
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6">
                Explore More
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                Ready to dive deeper into the Finbyz story? Explore these pages to learn more about our team, journey, and approach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPages.map((page, index) => {
                const gradients = [
                  "from-gray-500 to-blue-600",
                  "from-blue-500 to-purple-600",
                  "from-orange-500 to-red-600"
                ];
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group cursor-pointer hover:scale-105">
                    <CardHeader>
                      <div className={`w-12 h-12 mb-4 bg-gradient-to-br ${gradients[index]} rounded-lg flex items-center justify-center`}>
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-[#1A5276] group-hover:text-[#FF8C00] transition-colors duration-300">
                        {page.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed mb-4">{page.description}</p>
                      <Link href={page.url} className="inline-flex items-center text-[#FF8C00] hover:text-[#FFA500] font-medium group-hover:translate-x-1 transition-all duration-300">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden w-full">
          <div className="w-full relative">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to steer your vision with us?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button 
                  size="lg" 
                  className="rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Get in Touch
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full border-2 border-gray-300 text-gray-300 bg-transparent hover:bg-gray-300 hover:text-gray-900 text-lg px-8 py-4 h-auto font-semibold transition-all"
                >
                  <ArrowRight className="mr-2 w-5 h-5" />
                  Explore Our Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 