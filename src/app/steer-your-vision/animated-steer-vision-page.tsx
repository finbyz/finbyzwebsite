"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FAQSection } from "@/components/ui/ComponentShowcase3";
import { 
  Compass, 
  Target, 
  Rocket, 
  ArrowRight, 
  Quote,
  Navigation,
  Map,
  Ship,
  Star,
  Zap,
  Mail,
  ChevronDown,
  ChevronUp,
  Clock,
  TrendingUp,
  Award,
  Shield,
  Globe,
  Users,
  Lightbulb,
  CheckCircle,
  ArrowUpRight,
  Route,
  Anchor
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AnimatedSteerVisionPage() {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

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

  const navigationSteps = [
    {
      step: "01",
      title: "Understand the Landscape",
      description: "Deep dive into your business, workflows, and blockers.",
      icon: Map,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      step: "02", 
      title: "Plot the Route",
      description: "Define clear goals, milestones, and KPIs with technology as the enabler.",
      icon: Route,
      gradient: "from-green-500 to-teal-600"
    },
    {
      step: "03",
      title: "Build the Vessel", 
      description: "Design and deploy systems — ERPNext, AI tools, automation engines — that carry your business forward.",
      icon: Ship,
      gradient: "from-orange-500 to-red-500"
    },
    {
      step: "04",
      title: "Navigate Together",
      description: "Continuous improvement, adoption support, and iterative upgrades.",
      icon: Navigation,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const whySteerVision = [
    {
      icon: Target,
      title: "Clarity over Complexity",
      description: "We simplify tech challenges into structured roadmaps."
    },
    {
      icon: Zap,
      title: "Speed with Stability",
      description: "Agile execution, enterprise-grade outcomes."
    },
    {
      icon: Lightbulb,
      title: "AI and ERP-Driven Innovation",
      description: "We embed intelligence in operations from day one."
    },
    {
      icon: Users,
      title: "Long-Term Partnership",
      description: "From idea to scale, we grow with you."
    }
  ];



  const relatedPages = [
    {
      title: "About Finbyz Tech",
      description: "Get to know our team, our mindset, and what sets us apart as your digital partner.",
      url: "/about"
    },
    {
      title: "ERPNext Implementation Services",
      description: "Explore how we implement ERPNext with speed, clarity, and long-term value.",
      url: "/hire-erpnext-implementer"
    },
    {
      title: "AI Automation for Businesses",
      description: "Discover how we're embedding AI into core business workflows to boost efficiency.",
      url: "/ai-automation"
    }
  ];

  const toggleAccordion = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  return (
    <>
      {/* Philosophy Section */}
      <section 
        id="philosophy"
        ref={(el) => { sectionRefs.current['philosophy'] = el; }}
        className="py-24 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="w-full relative">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['philosophy'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white border-0 animate-fade-in-up-delayed">
              Our Philosophy
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
              A Philosophy Rooted in Navigation
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed animate-fade-in-up-delayed-3">
                We see ourselves as Navigators — not just service providers. Whether you're drowning in data, stuck with legacy systems, or aiming for aggressive scale, our role is to steer your organization from confusion to clarity. Think of us as your digital compass, guiding every strategic turn with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Steer Your Vision Section */}
      <section 
        id="why-steer"
        ref={(el) => { sectionRefs.current['why-steer'] = el; }}
        className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-green-400/15 to-blue-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="w-full relative">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['why-steer'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-gradient-to-r from-green-500 to-blue-600 text-white border-0 animate-fade-in-up-delayed">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
              Why Steer Your Vision?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed-3">
              Our approach combines strategic thinking with practical execution to deliver real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySteerVision.map((item, index) => {
              const gradients = [
                "from-blue-500 to-purple-600",
                "from-green-500 to-teal-600",
                "from-orange-500 to-red-500",
                "from-purple-500 to-pink-600"
              ];
              return (
                <Card 
                  key={index} 
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105 ${
                    isVisible['why-steer'] 
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
            <p className="text-lg text-gray-600 font-medium animate-fade-in-up-delayed-2">— Finbyz Tech Brand Manifesto</p>
          </div>
        </div>
      </section>

      {/* Navigation Steps Section */}
      <section 
        id="navigation-steps"
        ref={(el) => { sectionRefs.current['navigation-steps'] = el; }}
        className="py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1.3s'}}></div>
        </div>
        
        <div className="w-full relative">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['navigation-steps'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 animate-fade-in-up-delayed">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
              How We Navigate Digital Transformation
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed-3">
              A proven methodology that transforms vision into actionable digital solutions.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FF8C00] to-[#FFA500]"></div>
              
              {navigationSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`relative mb-12 transition-all duration-700 ${
                    isVisible['navigation-steps'] 
                      ? 'animate-fade-in-up opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                                <step.icon className="w-6 h-6 text-white" />
                              </div>
                              <CardTitle className="text-lg font-bold text-[#1A5276]">{step.title}</CardTitle>
                            </div>
                            <Badge className="bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white border-0">
                              {step.step}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
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

      {/* Impact Section */}
      <section 
        id="impact"
        ref={(el) => { sectionRefs.current['impact'] = el; }}
        className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden w-full"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="w-full relative">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['impact'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 animate-fade-in-up-delayed">
              Our Impact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6 animate-fade-in-up-delayed-2">
              Built for Impact, Delivered with Clarity
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed animate-fade-in-up-delayed-3">
                We believe technology should never overwhelm. It should elevate. Every engagement with Finbyz Tech is designed to simplify, speed up, and sustain your business outcomes. From AI-powered workflows to end-to-end ERP implementations, we craft solutions with precision and empathy.
              </p>
            </div>
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
              Related Reads
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6">
              Related Reads
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Explore more about our services and approach to digital transformation.
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
                      <ArrowUpRight className="w-6 h-6 text-white" />
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
              Let's turn your vision into scalable outcomes.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFA500] text-white text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all"
              >
                <Mail className="mr-2 w-5 h-5" />
                Talk to Our Experts
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border-2 border-gray-300 text-gray-300 bg-transparent hover:bg-gray-300 hover:text-gray-900 text-lg px-8 py-4 h-auto font-semibold transition-all"
              >
                <Compass className="mr-2 w-5 h-5" />
                Start Your Digital Roadmap
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 