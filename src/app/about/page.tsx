"use client";

import { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from '@/components/sections/dynamic-hero';

// Lazy-loaded heavy components for better performance
import { LazyFAQSection, LazyCompanyHistoryTimeline } from "@/lib/lazy-components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Heart, 
  Award, 
  TrendingUp, 
  Users,
  Quote,
  ArrowRight,
  Award as AwardIcon,
  BarChart3,
  Globe,
  Cpu,
  Settings,
  Zap,
  Bot,
  Factory,
  TrendingUp as TrendingUpIcon
} from "lucide-react";
import Link from "next/link";



export default function AboutPage() {
  // Timeline data for Finbyz
  const timelineData = [
    { year: "2015", title: "Finbyz Consulting Begins", description: "Launched as a financial and business consulting firm focused on unlocking operational efficiency.", icon: AwardIcon },
    { year: "2016", title: "Rebranded as Finbyz Tech Pvt Ltd", description: "Transitioned into a tech-first company focused on business process automation.", icon: Cpu },
    { year: "2017", title: "Exim App Built", description: "Launched a custom solution for managing export-import operations in ERP systems.", icon: Settings },
    { year: "2018", title: "Specialized in Chemicals", description: "Created solutions for batch-wise inventory and regulatory compliance.", icon: Factory },
    { year: "2019", title: "Entered Textile Manufacturing", description: "Designed complex production and inventory workflows for yarn manufacturers.", icon: TrendingUpIcon },
    { year: "2020", title: "Serialized Inventory for Engineering", description: "Enabled bulk serialized item management for a heavy machinery manufacturer.", icon: BarChart3 },
    { year: "2021", title: "Optimized Plastic Operations", description: "Reduced machine downtime by solving mold change issues using smart tech.", icon: Zap },
    { year: "2022", title: "Trading Bots & Agri Commodity Suite", description: "Built algorithmic trading automation and ERP workflows for agro-trading firms.", icon: Bot },
    { year: "2023", title: "Solutions for Metal Casting", description: "Created tools to track rejections and process transparency in multi-stage manufacturing.", icon: Factory },
    { year: "2024", title: "Resource Augmentation Model", description: "Launched a flexible model for businesses to hire dedicated tech talent. Also delivered industry-specific ERP for the solar pump sector.", icon: Users },
    { year: "2025", title: "AI-Powered Workflow Automations", description: "Integrated cutting-edge AI tools to solve real-world industry challenges, from production to procurement.", icon: Cpu },
  ];

  const valuesItems = [
    {
      icon: Cpu,
      title: "Technology in Genes",
      description: "Innovative ERPNext and Frappe solutions that work. We leverage advanced technologies to provide ERP software implementations that are easy to adopt and scale."
    },
    {
      icon: Target,
      title: "Problem Solving Attitude",
      description: "Improvise, Adapt, Overcome! Our ERPNext consultants diagnose business operations and provide valuable insights for AI-powered process improvements."
    },
    {
      icon: Award,
      title: "Domain Expertise",
      description: "We understand your ERP requirements better. Mixing our industry expertise with Frappe technology, we create innovative automation solutions for businesses worldwide."
    },
    {
      icon: Heart,
      title: "Values at Core",
      description: "Honesty, Integrity, Respect. These values are the foundation of Finbyz Tech. We never let success supersede the moral values we carry along."
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Mukesh Variyani",
      role: "Managing Director",
      description: "Mukesh believed professional management practice can help companies outshine peers, and decided to play his role through Finbyz in bringing this change for clientele through IT and Financial expertise.",
      image: "/images/team/mukesh.jpg"
    },
    {
      name: "Nishita Variyani",
      role: "Director",
      description: "Nishita holds a Master's degree in Computer Science. Building a strong team of developers, she adds value by strengthening the technical foundation for Finbyz Tech.",
      image: "/images/team/nishita.jpg"
    },
    {
      name: "Ravin Ramoliya",
      role: "Functional Consultant",
      description: "He is a key player of the implementation team with expertise in ERPNext. Part of 30+ ERP implementations, he understands customer pain points and builds strong rapport with end users.",
      image: "/images/team/ravin.jpg"
    }
  ];

  const relatedPages = [
    {
      title: "Steer Your Vision",
      description: "Discover our strategic approach to solving complex business challenges.",
      url: "/about-us/steer-your-vision"
    },
    {
      title: "Our Team",
      description: "Meet the people behind Finbyz — technologists, analysts, and advisors.",
      url: "/about-us/our-story"
    },
    {
      title: "Life at Finbyz",
      description: "Get a glimpse into our culture, values, and what it's like to work with us.",
      url: "/about-us/life-at-finbyz"
    }
  ];



  return (
    <div className="min-h-screen">
      <main className="">
        <HeroSection
          headline="About Finbyz Tech - Certified ERPNext Partner"
          highlightWords={["Finbyz", "ERPNext", "AI", "Frappe"]}
          description="Your trusted ERPNext implementation partner and AI automation experts since 2015"
        heroImage={{
          alt: 'Finbyz Tech ERPNext Implementation Partner and AI Automation Experts',
          src: '/AboutUs-removebg-preview.png'
        }}
        />

        {/* Page Intro */}
        <section className="py-16">
          <div className="container-custom">
            <p className="text-xl md:text-xl text-gray-700 leading-relaxed">
              As a <strong>certified ERPNext implementation partner</strong> and <strong>Frappe framework experts</strong>, Finbyz Tech has been transforming businesses since 2015. We specialize in <strong>ERP software implementation</strong>, <strong>AI-powered automation</strong>, and <strong>custom software development</strong> for enterprises across New York, London, Dubai, Sydney, and 50+ cities worldwide. From strategic planning to execution, we simplify digital transformation and accelerate business outcomes.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Foundation
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that drive our ERPNext implementations and AI automation solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Tagline Card */}
              <div className="bg-gradient-to-br from-[#1A5276] to-[#2980B9] rounded-2xl p-8 text-center flex flex-col justify-center min-h-[280px] shadow-xl hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Tagline</h3>
                <p className="text-3xl font-bold text-orange-400 italic">"Steer Your Vision"</p>
              </div>
              
              {/* Vision Card */}
              <div className="bg-white rounded-2xl p-8 text-center flex flex-col justify-center min-h-[280px] shadow-xl hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A5276] mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To shape a world where every great business idea has a technology partner ready to steer it to success through ERPNext and AI automation.
                </p>
              </div>
              
              {/* Mission Card */}
              <div className="bg-gradient-to-br from-[#1A5276] to-[#2980B9] rounded-2xl p-8 text-center flex flex-col justify-center min-h-[280px] shadow-xl hover:scale-105 transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
                <p className="text-gray-200 leading-relaxed text-sm">
                  We partner with ambitious businesses to turn their vision into value through ERPNext implementation, Frappe development, and AI-powered automation—simplifying complexity and accelerating digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation & Impact Section */}
        <section className="py-20">
          <div className="container-custom">
            {/* <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0">
              Our Journey
            </Badge> */}
            <h2 className="text-2xl md:text-5xl font-bold text-[#1A5276] mb-6">
              A Decade of ERPNext Excellence & Innovation
            </h2>
            <div className="text-xl md:text-xl text-gray-600 leading-relaxed">
              <p className="mb-6">
                As a <strong>certified Frappe partner</strong> and <strong>ERPNext implementation experts</strong>, Finbyz Tech has evolved from a consulting firm into a trusted technology partner for enterprises worldwide. We deliver tailored <strong>ERP software solutions</strong> across manufacturing, healthcare, retail, trading, and non-profit sectors—helping businesses in New York, London, Dubai, and beyond achieve digital transformation.
              </p>
              <p className="text-lg text-gray-600">
                What sets us apart is our commitment to <strong>clarity over complexity</strong>, <strong>precision in execution</strong>, and a <strong>collaborative mindset</strong>. Whether implementing ERPNext, building <strong>AI-powered automation</strong>, or developing custom software, our work helps businesses operate smarter and scale faster.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-8 ">
          <div className="container-custom">
            {/* <div className="w-20 h-20 mx-auto mb-8  rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-10 h-10 text-black" />
            </div> */}
            <blockquote className="text-2xl lg:text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
              "We don't just build software — we help you steer toward smarter decisions, streamlined operations, and scalable outcomes."
            </blockquote>
            <p className="text-lg text-gray-600 font-medium">— Finbyz Tech Brand Persona</p>
          </div>
        </section>

        {/* Timeline Section */}
        

        {/* Company History Timeline - Lazy loaded for performance */}
        <LazyCompanyHistoryTimeline />

        {/* Values Section */}
        <section className="py-24 ">
          <div className="container-custom">
            <div className="text-center mb-16">
              {/* <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0">
                Our Values
              </Badge> */}
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6">
                What We Stand For
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide every decision, every project, and every relationship we build.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valuesItems.map((item, index) => {
                const gradients = [
                  "from-blue-500 to-purple-500",
                  "from-orange-500 to-red-500", 
                  "from-green-500 to-teal-600",
                  "from-blue-500 to-blue-600",
                  "from-indigo-500 to-blue-600"
                ];
                return (
                  <Card 
                    key={index} 
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">{item.title}</CardTitle>
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

        {/* Team Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6">
                Key People Behind Finbyz
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Behind every great achievement, there is a team. Meet the leaders driving ERPNext implementations and AI automation solutions at Finbyz Tech.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white overflow-hidden group hover:scale-105"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-[#1A5276] to-[#2980B9] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{member.name}</CardTitle>
                    <p className="text-[#1A5276] font-semibold">{member.role}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Lazy loaded for performance */}
        <LazyFAQSection />

        {/* Related Pages */}
        <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              {/* <Badge className="mb-6 bg-gradient-to-r from-gray-500 to-blue-600 text-white border-0">
                Explore More
              </Badge> */}
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A5276] mb-6">
                Explore More
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                        {page.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed mb-4">{page.description}</p>
                      <Link href={page.url} className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group-hover:translate-x-1 transition-all duration-300">
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
        <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="container-custom">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-[#1A5276]">
              Ready to steer your vision with us?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-center">
              Join us in creating innovative solutions that drive business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/about-us/steer-your-vision">
              <button className="bg-[#f97316] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all text-lg">
              Let's Steer Your Vision
              </button>
              </Link>
              <Link href="/erpnext/services/erpnext-service-provider">
                <button className="border-2 border-gray-300 text-gray-900 bg-transparent hover:bg-gray-300 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all text-lg">
                Explore Our Services
              </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
} 