"use client";

import { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero_section_without_button";

import { FAQSection, TimelineCarousel } from "@/components/ui/ComponentShowcase3";
import CompanyHistoryTimeline from "@/components/ui/CompanyHistoryTimeline";
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



  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-4">
        <Hero
          data={{
            title: "About Finbyz Tech",
            subtitle: "Where business challenges meet sharp solutions",
            description: "We're not just a tech company — we're your strategic partner in navigating complexity.",
            image: {
              src: "/AboutUs.png",
              alt: "Timeline and visual roadmap of Finbyz Tech as a business solution provider"
            }
          }}
        />

        {/* Page Intro */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We're not just a tech company — we're your strategic partner in navigating complexity. Since 2015, Finbyz Tech has empowered businesses with tailored digital solutions that unlock clarity, drive efficiency, and accelerate outcomes. From planning to execution, we simplify the road to transformation.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-green-500 to-blue-600 text-white border-0">
                Our Foundation
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Tagline, Mission, and Vision
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Tagline</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed font-semibold text-lg italic">Steer Your Vision</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">To shape a world where every great business idea has a technology partner ready to steer it to success.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-700 bg-white/80 backdrop-blur-sm overflow-hidden group hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">At Finbyz Tech, we partner with ambitious businesses to turn their vision into value. From planning to execution, we simplify complexity and bring clarity to digital transformation. Our team thrives on ownership, agility, and long-term relationships — because when our clients grow, we grow too.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Innovation & Impact Section */}
        <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0">
              Our Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              A Decade of Innovation & Impact
            </h2>
            <div className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              <p className="mb-6">
                Founded on the belief that technology should empower rather than overwhelm, Finbyz Tech has grown from a consulting firm into a full-fledged technology partner. We serve clients across industries — from manufacturing to finance — with solutions that are as strategic as they are scalable.
              </p>
              <p className="text-lg text-gray-600">
                What sets us apart is our commitment to <strong>clarity over complexity</strong>, <strong>precision in execution</strong>, and a <strong>collaborative mindset</strong>. Whether optimizing workflows, building custom applications, or automating decisions, our work helps businesses operate smarter and scale faster.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 bg-gradient-to-br from-orange-100 via-yellow-50 to-pink-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-10 h-10 text-white" />
            </div>
            <blockquote className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
              "We don't just build software — we help you steer toward smarter decisions, streamlined operations, and scalable outcomes."
            </blockquote>
            <p className="text-lg text-gray-600 font-medium">— Finbyz Tech Brand Persona</p>
          </div>
        </section>

        {/* Timeline Section */}
        <TimelineCarousel 
          timelineItems={timelineData}
          title="Our Journey Through the Years"
          subtitle="From humble beginnings to industry leadership — here's how we've evolved and grown."
        />

        {/* Company History Timeline */}
        <CompanyHistoryTimeline />

        {/* Values Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0">
                Our Values
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                What We Stand For
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

        {/* FAQ Section */}
        <FAQSection />

        {/* Related Pages */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-gray-500 to-blue-600 text-white border-0">
                Explore More
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
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
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to steer your vision with us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us in creating innovative solutions that drive business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all text-lg">
                Let's Steer Your Vision
              </button>
              <button className="border-2 border-gray-300 text-gray-300 bg-transparent hover:bg-gray-300 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all text-lg">
                Explore Our Services
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 