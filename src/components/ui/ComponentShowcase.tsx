'use client';

import React, { useState } from 'react';
import { 
  ChevronRight, 
  Calendar, 
  Play, 
  BarChart3, 
  Zap, 
  Code, 
  Users,
  Award,
  TrendingUp,
  Globe,
  Target,
  ArrowRight,
  Check,
  Star,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  FileText,
  Settings,
  Search,
  Filter,
  ChevronLeft,
  ChevronDown,
  Plus,
  Minus,
  X,
  AlertCircle,
  Info,
  CheckCircle,
  XCircle,
  Database,
  Cpu
} from 'lucide-react';

// Import all section components
import Benefits from '@/components/sections/benefits';
import ClientLogos from '@/components/sections/client-logos';
import ServicesOverview from '@/components/sections/services-overview';
import StatsShowcase from '@/components/sections/stats-showcase';
import TeamExpertise from '@/components/sections/team-expertise';
import TechnologyStack from '@/components/sections/technology-stack';
import ClientSuccessStories from '@/components/sections/client-success-stories';
import BusinessSlider from '@/components/sections/business-slider';
import Hero from '@/components/sections/hero';
import Testimonials from '@/components/sections/testimonials';
import AwardsRecognition from '@/components/sections/awards-recognition';
import InnovationLab from '@/components/sections/innovation-lab';
import ResourceCenter from '@/components/sections/resource-center';
// Removed per request
// import IndustrySolutions from '@/components/sections/industry-solutions';
// import CaseStudies from '@/components/sections/case-studies';
// import ServicePricing from '@/components/sections/service-pricing';
// import Services from '@/components/sections/services';
// import SecurityCompliance from '@/components/sections/security-compliance';
// import Partnerships from '@/components/sections/partnerships';
// import SupportServices from '@/components/sections/support-services';
import ContactInfo from '@/components/sections/contact-info';
import GlobalPresence from '@/components/sections/global-presence';
import Comment from '@/components/sections/comment';
import CTA from '@/components/sections/cta';
import Differentiators from '@/components/sections/differentiators';
// import FAQ from '@/components/sections/faq';
// import ProcessWorkflow from '@/components/sections/process-workflow';
import HeroSectionWithoutButton from '@/components/sections/hero_section_without_button';
import SuccessSnapshots from '@/components/sections/success-snapshots';

// 1. Hero Section Component
export function HeroSection({ data }: { data?: any }) {
  // Default data for backward compatibility
  const defaultData = {
    headline: "Empower Your Business with",
    highlightText: "AI & ERP",
    description: "Unlock efficiency, automation, and growth with next-gen technology and expert talent.",
    primaryButton: {
      text: "Book a Free Consultation",
      action: "/contact"
    },
    secondaryButton: {
      text: "Watch Demo",
      action: "/demo"
    },
    background: {
      type: "gradient",
      value: "from-blue-900 via-purple-900 to-blue-800"
    }
  };

  const heroData = data || defaultData;

  return (
    <section 
      className="text-white py-20 hero-section"
      style={{
        background: 'var(--hero-gradient, linear-gradient(135deg, #1e40af, #7c3aed))'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              {heroData.headline}{' '}
              <span style={{ color: 'var(--hero-highlight, #f97316)' }}>{heroData.highlightText}</span>
            </h1>
            <p className="text-xl mb-8" style={{ color: 'var(--hero-text, #e2e8f0)' }}>
              {heroData.description}
            </p>
            <div className="flex gap-4">
              {heroData.primaryButton && (
                <button 
                  className="px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  style={{
                    background: 'var(--hero-button-primary, linear-gradient(135deg, #f97316, #eab308))',
                    color: 'var(--hero-text, white)'
                  }}
                >
                  {heroData.primaryButton.text}
                </button>
              )}
              {heroData.secondaryButton && (
                <button 
                  className="border px-8 py-3 rounded-lg font-semibold transition-all"
                  style={{
                    borderColor: 'var(--hero-text, white)',
                    color: 'var(--hero-text, white)'
                  }}
                >
                  {heroData.secondaryButton.text}
                </button>
              )}
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-500/20 rounded-full p-8 w-64 h-64 mx-auto relative">
              {/* Decorative pulse overlay removed */}
              <div className="absolute top-4 left-4 bg-orange-500/20 rounded-lg p-3">
                <BarChart3 className="w-6 h-6 text-orange-400" />
                <p className="text-xs mt-1">ERP</p>
              </div>
              <div className="absolute top-4 right-4 bg-blue-500/20 rounded-lg p-3">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-xs mt-1">AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. Service Cards Component
export function ServiceCards({ data }: { data?: any }) {
  // Default data for backward compatibility
  const defaultServices = [
    {
      title: "ERP Implementation",
      description: "Streamline operations and scale faster with expert ERPNext implementations — from vanilla to custom builds.",
      icon: BarChart3,
      tags: ["ERP", "Analytics", "Integration"]
    },
    {
      title: "AI Automation",
      description: "Automate intelligently. From data workflows to business logic, we build AI that works where it matters.",
      icon: Zap,
      tags: ["AI", "Automation", "ML"]
    },
    {
      title: "Software Development",
      description: "From SaaS apps to custom tools, we develop scalable, user-centric software built to solve real problems.",
      icon: Code,
      tags: ["Development", "SaaS", "Custom"]
    },
    {
      title: "Resource Augmentation",
      description: "Tap into our skilled developers and consultants — as dedicated team members or project-based specialists.",
      icon: Users,
      tags: ["Team", "Consulting", "Dedicated"]
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
      icon: Database,
      tags: ["Analytics", "BI", "Data"]
    },
    {
      title: "Cloud Solutions",
      description: "Migrate and optimize your infrastructure with scalable cloud solutions and DevOps best practices.",
      icon: Cpu,
      tags: ["Cloud", "DevOps", "Infrastructure"]
    }
  ];

  const services = data?.services || defaultServices;
  const title = data?.title || "What We Do – Snapshot";
  const subtitle = data?.subtitle || "Comprehensive technology solutions for modern businesses";

  // Color scheme for different cards
  const colorSchemes = [
    {
      border: "border-blue-500",
      text: "text-blue-600",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      border: "border-orange-500",
      text: "text-orange-600",
      bg: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      border: "border-green-500",
      text: "text-green-600",
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      border: "border-purple-500",
      text: "text-purple-600",
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      border: "border-red-500",
      text: "text-red-600",
      bg: "bg-red-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      border: "border-teal-500",
      text: "text-teal-600",
      bg: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <div 
          className="grid gap-6 service-cards"
          style={{
            gridTemplateColumns: (() => {
              if (services.length <= 4) {
                return `repeat(${services.length}, 1fr)`;
              } else if (services.length <= 6) {
                return 'repeat(3, 1fr)';
              } else if (services.length <= 8) {
                return 'repeat(4, 1fr)';
              } else if (services.length <= 12) {
                return 'repeat(4, 1fr)';
              } else {
                return 'repeat(auto-fit, minmax(280px, 1fr))';
              }
            })(),
            maxWidth: services.length <= 6 ? '1200px' : '100%',
            margin: services.length <= 6 ? '0 auto' : '0',
            justifyContent: services.length <= 4 ? 'center' : 'stretch'
          }}
        >
          {services.map((service: any, index: number) => {
            const colorScheme = colorSchemes[index % colorSchemes.length];
            
            return (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${colorScheme.border} service-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div 
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorScheme.iconBg} ${colorScheme.iconColor}`}
                >
                  {typeof service.icon === 'string' ? (
                    <div className="w-6 h-6">{service.icon}</div>
                  ) : (
                    <service.icon className="w-6 h-6" />
                  )}
                </div>
                <h3 className={`font-bold text-lg mb-3 ${colorScheme.text}`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags?.map((tag: string, tagIndex: number) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1 rounded-full text-sm ${colorScheme.bg} ${colorScheme.text} border border-current border-opacity-20`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Ready to get started? <ArrowRight className="inline ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

// 3. Stats Section Component
export function StatsSection({ data }: { data?: any }) {
  // Default data for backward compatibility
  const defaultStats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered across various industries"
    },
    {
      number: "50+",
      label: "Happy Clients",
      description: "Long-term partnerships built on trust"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance"
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      description: "Consistently high satisfaction ratings"
    },
    {
      number: "10+",
      label: "Years Experience",
      description: "Deep expertise in technology solutions"
    },
    {
      number: "100%",
      label: "On-Time Delivery",
      description: "Never missed a project deadline"
    }
  ];

  const stats = data?.stats || defaultStats;
  const title = data?.title || "Our Impact in Numbers";
  const subtitle = data?.subtitle || "Delivering measurable results for our clients";

  // Color scheme for different stat cards
  const colorSchemes = [
    {
      bg: "bg-blue-600",
      text: "text-white",
      icon: "text-blue-200"
    },
    {
      bg: "bg-orange-600",
      text: "text-white", 
      icon: "text-orange-200"
    },
    {
      bg: "bg-green-600",
      text: "text-white",
      icon: "text-green-200"
    },
    {
      bg: "bg-purple-600",
      text: "text-white",
      icon: "text-purple-200"
    },
    {
      bg: "bg-red-600",
      text: "text-white",
      icon: "text-red-200"
    },
    {
      bg: "bg-teal-600",
      text: "text-white",
      icon: "text-teal-200"
    }
  ];

  // Calculate grid layout based on number of stats
  const getGridLayout = () => {
    const count = stats.length;
    
    if (count <= 4) {
      // 3-4 stats: display in one row
      return {
        gridCols: `repeat(${count}, 1fr)`,
        maxWidth: '1200px',
        center: true,
        gap: 'gap-6'
      };
    } else if (count <= 6) {
      // 5-6 stats: display in two rows (3 per row)
      return {
        gridCols: 'repeat(3, 1fr)',
        maxWidth: '1200px',
        center: true,
        gap: 'gap-6'
      };
    } else if (count <= 8) {
      // 7-8 stats: display in two rows (4 per row)
      return {
        gridCols: 'repeat(4, 1fr)',
        maxWidth: '1400px',
        center: true,
        gap: 'gap-6'
      };
    } else {
      // 9+ stats: auto-fit with minimum width
      return {
        gridCols: 'repeat(auto-fit, minmax(280px, 1fr))',
        maxWidth: '100%',
        center: false,
        gap: 'gap-6'
      };
    }
  };

  const gridLayout = getGridLayout();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        <div 
          className={`grid ${gridLayout.gap} stats-section mx-auto`}
          style={{
            gridTemplateColumns: gridLayout.gridCols,
            maxWidth: gridLayout.maxWidth,
            justifyContent: gridLayout.center ? 'center' : 'stretch'
          }}
        >
          {stats.map((stat: any, index: number) => {
            const colorScheme = colorSchemes[index % colorSchemes.length];
            
            return (
              <div 
                key={index} 
                className={`${colorScheme.bg} ${colorScheme.text} rounded-lg p-6 text-center stat-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`text-4xl font-bold mb-2 ${colorScheme.icon}`}>
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm opacity-90">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 4. Call to Action Component
export function CallToAction({ data }: { data?: any }) {
  // Default data for backward compatibility
  const defaultData = {
    badge: {
      text: "Talk to our Experts",
      icon: "Calendar"
    },
    headline: "Ready to Scale with",
    highlightText: "Smart Tech?",
    description: "Transform your business processes with AI-powered automation and expert implementation.",
    buttons: [
      {
        text: "Book Demo",
        action: "/demo",
        variant: "primary",
        icon: "Calendar"
      }
    ],
    footer: {
      text: "Trusted by 100+ businesses",
      icon: "Calendar"
    }
  };

  const ctaData = data || defaultData;

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-red-50 cta-section">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {ctaData.badge && (
            <div className="inline-flex items-center px-4 py-2 rounded-lg mb-6 bg-orange-600 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{ctaData.badge.text}</span>
            </div>
          )}
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            {ctaData.headline}{' '}
            <span className="text-orange-600">{ctaData.highlightText}</span>
            <br />
            Let's Talk.
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            {ctaData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {ctaData.buttons?.map((button: any, index: number) => (
              <button 
                key={index}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                  button.variant === 'primary' 
                    ? 'bg-orange-600 text-white hover:bg-orange-700' 
                    : 'bg-transparent text-orange-600 border border-orange-600 hover:bg-orange-50'
                }`}
              >
                {button.icon && <Calendar className="w-4 h-4 mr-2" />}
                {button.text}
              </button>
            ))}
          </div>
          {ctaData.footer && (
            <div className="flex items-center justify-center mt-8 text-gray-600">
              <Calendar className="w-4 h-4 mr-2 text-orange-600" />
              <span className="text-sm">{ctaData.footer.text}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// 5. Accordion Section Component
export function AccordionSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const accordionItems = [
    {
      title: "What services does Finbyz offer?",
      content: "We offer comprehensive technology solutions including ERP implementation, AI automation, custom software development, and resource augmentation services tailored to modern business needs."
    },
    {
      title: "How long does a typical ERP implementation take?",
      content: "ERP implementation timelines vary based on complexity and scope. Simple implementations can take 3-6 months, while complex custom solutions may require 6-12 months or more."
    },
    {
      title: "Do you provide ongoing support after implementation?",
      content: "Yes, we provide comprehensive post-implementation support including training, maintenance, updates, and 24/7 technical assistance to ensure your systems run smoothly."
    },
    {
      title: "What industries do you specialize in?",
      content: "We serve diverse industries including manufacturing, healthcare, retail, finance, and technology. Our solutions are adaptable to any industry's specific requirements."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about our services</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {accordionItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg mb-4">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{item.title}</span>
                {openItems.includes(index) ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4 text-gray-600">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. Image Gallery Component
export function ImageGallery() {
  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop", alt: "Business Analytics", title: "Data Analytics" },
    { id: 2, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", alt: "AI Technology", title: "AI Solutions" },
    { id: 3, src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=300&fit=crop", alt: "ERP System", title: "ERP Implementation" },
    { id: 4, src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop", alt: "Software Development", title: "Custom Development" },
    { id: 5, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop", alt: "Team Collaboration", title: "Team Work" },
    { id: 6, src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop", alt: "Consulting", title: "Expert Consulting" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
          <p className="text-gray-600">Explore our latest projects and solutions</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. Testimonial Carousel Component
export function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Finbyz transformed our entire operation with their ERP implementation. The efficiency gains were immediate and substantial.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Director, Global Manufacturing",
      content: "Their AI automation solutions helped us reduce processing time by 70%. The team is incredibly knowledgeable and professional.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO, StartupXYZ",
      content: "Working with Finbyz was a game-changer for our business. Their custom software development exceeded all expectations.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">Real feedback from satisfied customers</p>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">"{testimonials[currentSlide].content}"</p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonials[currentSlide].name}</h4>
                <p className="text-gray-600">{testimonials[currentSlide].role}</p>
              </div>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 8. Client Logos Carousel Component
export function ClientLogosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const clientLogos = [
    {
      name: "South India Trading Co.",
      location: "DELHI, INDIA",
      logo: "SOUTH INDIA TRADING CO.",
      colors: {
        primary: "#FFD700", // Yellow
        secondary: "#FF6B35", // Orange
        accent: "#4CAF50" // Green
      },
      description: "Multi-colored map of India with bold yellow text"
    },
    {
      name: "Elkins Trade Link Ltd.",
      location: "TRADE LINK LTD.",
      logo: "elkins",
      colors: {
        primary: "#87CEEB", // Light blue
        secondary: "#808080" // Gray
      },
      description: "Light blue text with stylized 'k' as shopping bag"
    },
    {
      name: "G.M.'s Tulsi Tea",
      location: "TEA",
      logo: "Tulsi",
      colors: {
        primary: "#8A2BE2", // Purple
        secondary: "#FFD700", // Yellow
        text: "#FFFFFF" // White
      },
      description: "Purple background with yellow banner and white text"
    },
    {
      name: "Farmindia Impex Pvt. Ltd.",
      location: "IMPEX PVT. LTD.",
      logo: "FARMINDIA",
      colors: {
        primary: "#228B22", // Dark green
        secondary: "#808080" // Gray
      },
      description: "Dark green leaf with bold company name"
    },
    {
      name: "Raymond",
      location: "",
      logo: "Raymond",
      colors: {
        primary: "#DC143C", // Red
        secondary: "#DC143C" // Red
      },
      description: "Mirrored red 'R's with script text"
    },
    {
      name: "Aditya Birla Tanfac",
      location: "TANFAC",
      logo: "ADITYA BIRLA",
      colors: {
        primary: "#FF4500", // Orange-red
        secondary: "#FFD700", // Yellow
        accent: "#008080" // Teal
      },
      description: "Geometric sunburst pattern with teal band"
    }
  ];

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === clientLogos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === clientLogos.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? clientLogos.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Banner Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Some of The Loyal Clients of FinByz
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${clientLogos.length * 100}%`
              }}
            >
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  style={{ width: `${100 / clientLogos.length}%` }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {clientLogos.slice(index, index + 6).map((clientItem, itemIndex) => {
                      const actualIndex = (index + itemIndex) % clientLogos.length;
                      return (
                        <div
                          key={actualIndex}
                          className="group flex flex-col items-center justify-center p-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                          {/* Logo Container */}
                          <div className="w-20 h-20 md:w-24 md:h-24 mb-3 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300">
                            <div className="text-center">
                              {/* Company Logo/Initials */}
                              <div className="text-lg md:text-xl font-bold text-gray-700 mb-1">
                                {clientItem.logo.split(' ').map(word => word[0]).join('')}
                              </div>
                              {/* Company Name */}
                              <div className="text-xs md:text-sm text-gray-600 text-center leading-tight">
                                {clientItem.name}
                              </div>
                            </div>
                          </div>
                          
                          {/* Company Details */}
                          <div className="text-center">
                            <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                              {clientItem.name}
                            </h3>
                            {clientItem.location && (
                              <p className="text-xs text-gray-500">
                                {clientItem.location}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {clientLogos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Inquiry Button */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer group">
            <span className="text-sm font-medium">Inquiry</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

// 9. Benefits Component
export function BenefitsSection() {
  return <Benefits />;
}

// 10. Client Logos Component
export function ClientLogosSection() {
  return <ClientLogos />;
}

// 11. Services Overview Component
export function ServicesOverviewSection() {
  return <ServicesOverview />;
}

// 12. Stats Showcase Component
export function StatsShowcaseSection() {
  return <StatsShowcase />;
}

// 13. Process Timeline Component
export function ProcessTimelineSection() { return null; }

// 14. Team Expertise Component
export function TeamExpertiseSection() {
  return <TeamExpertise />;
}

// 15. Industry Solutions Component
export function IndustrySolutionsSection() { return null; }

// 16. Technology Stack Component
export function TechnologyStackSection() {
  return <TechnologyStack />;
}

// 17. Case Studies Component
export function CaseStudiesSection() { return null; }

// 18. Client Success Stories Component
export function ClientSuccessStoriesSection() {
  return <ClientSuccessStories />;
}

// 19. Business Slider Component
export function BusinessSliderSection() {
  return <BusinessSlider />;
}

// 20. Hero Section Component
export function HeroSectionComponent() {
  return <Hero />;
}

// 21. Service Pricing Component
export function ServicePricingSection() { return null; }

// 22. Services Component
export function ServicesSection() { return null; }

// 23. Testimonials Component
export function TestimonialsSection() {
  return <Testimonials />;
}

// 24. Awards Recognition Component
export function AwardsRecognitionSection() {
  return <AwardsRecognition />;
}

// 25. Innovation Lab Component
export function InnovationLabSection() {
  return <InnovationLab />;
}

// 26. Security Compliance Component
export function SecurityComplianceSection() { return null; }

// 27. Partnerships Component
export function PartnershipsSection() { return null; }

// 28. Resource Center Component
export function ResourceCenterSection() {
  return <ResourceCenter />;
}

// 29. Support Services Component
export function SupportServicesSection() { return null; }

// 30. Contact Info Component
export function ContactInfoSection() {
  return <ContactInfo />;
}

// 31. Global Presence Component
export function GlobalPresenceSection() {
  return <GlobalPresence />;
}

// 32. Comment Component
export function CommentSection() {
  return <Comment />;
}

// 33. CTA Component
export function CTASection() {
  return <CTA />;
}

// 34. Differentiators Component
export function DifferentiatorsSection() {
  return <Differentiators />;
}

// 35. FAQ Component
export function FAQSection() { return null; }

// 36. Process Workflow Component
export function ProcessWorkflowSection() { return null; }

// 37. Hero Section Without Button Component
export function HeroSectionWithoutButtonComponent() {
  return <HeroSectionWithoutButton />;
}

// 38. Success Snapshots Component
export function SuccessSnapshotsSection() {
  return <SuccessSnapshots />;
}