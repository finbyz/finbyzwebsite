"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Factory, 
  Cpu, 
  FlaskConical, 
  Scissors, 
  Settings, 
  Bot, 
  Zap, 
  Users, 
  Brain,
  ArrowUpRight,
  Calendar,
  Award,
  Target
} from "lucide-react";
import { useState, useEffect } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: any;
  category: string;
  impact: string;
  color: string;
}

export default function VerticalTimeline() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('vertical-timeline');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const timelineData: TimelineItem[] = [
    {
      year: "2015",
      title: "Finbyz Consulting Begins",
      description: "Launched as a financial and business consulting firm focused on unlocking operational efficiency.",
      icon: TrendingUp,
      category: "Foundation",
      impact: "Established core business principles",
      color: "blue"
    },
    {
      year: "2016",
      title: "Rebranded as Finbyz Tech Pvt Ltd",
      description: "Transitioned into a tech-first company focused on business process automation.",
      icon: Cpu,
      category: "Transformation",
      impact: "Pivoted to technology solutions",
      color: "purple"
    },
    {
      year: "2017",
      title: "Exim App Built",
      description: "Launched a custom solution for managing export-import operations in ERP systems.",
      icon: Settings,
      category: "Innovation",
      impact: "First major software product",
      color: "green"
    },
    {
      year: "2018",
      title: "Specialized in Chemicals",
      description: "Created solutions for batch-wise inventory and regulatory compliance.",
      icon: FlaskConical,
      category: "Specialization",
      impact: "Industry-specific expertise",
      color: "orange"
    },
    {
      year: "2019",
      title: "Entered Textile Manufacturing",
      description: "Designed complex production and inventory workflows for yarn manufacturers.",
      icon: Scissors,
      category: "Expansion",
      impact: "Multi-industry presence",
      color: "indigo"
    },
    {
      year: "2020",
      title: "Serialized Inventory for Engineering",
      description: "Enabled bulk serialized item management for a heavy machinery manufacturer.",
      icon: Factory,
      category: "Engineering",
      impact: "Advanced inventory solutions",
      color: "gray"
    },
    {
      year: "2021",
      title: "Optimized Plastic Operations",
      description: "Reduced machine downtime by solving mold change issues using smart tech.",
      icon: Zap,
      category: "Optimization",
      impact: "Smart manufacturing solutions",
      color: "yellow"
    },
    {
      year: "2022",
      title: "Trading Bots & Agri Commodity Suite",
      description: "Built algorithmic trading automation and ERP workflows for agro-trading firms.",
      icon: Bot,
      category: "Automation",
      impact: "AI-driven automation",
      color: "teal"
    },
    {
      year: "2023",
      title: "Solutions for Metal Casting",
      description: "Created tools to track rejections and process transparency in multi-stage manufacturing.",
      icon: Factory,
      category: "Manufacturing",
      impact: "Quality control systems",
      color: "red"
    },
    {
      year: "2024",
      title: "Resource Augmentation Model",
      description: "Launched a flexible model for businesses to hire dedicated tech talent. Also delivered industry-specific ERP for the solar pump sector.",
      icon: Users,
      category: "Services",
      impact: "Talent solutions & sector expertise",
      color: "violet"
    },
    {
      year: "2025",
      title: "AI-Powered Workflow Automations",
      description: "Integrated cutting-edge AI tools to solve real-world industry challenges, from production to procurement.",
      icon: Brain,
      category: "AI/ML",
      impact: "Next-generation AI integration",
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string; hover: string } } = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
        hover: "hover:bg-blue-100"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-700",
        hover: "hover:bg-purple-100"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-700",
        hover: "hover:bg-green-100"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-700",
        hover: "hover:bg-orange-100"
      },
      indigo: {
        bg: "bg-indigo-50",
        border: "border-indigo-200",
        text: "text-indigo-700",
        hover: "hover:bg-indigo-100"
      },
      gray: {
        bg: "bg-gray-50",
        border: "border-gray-200",
        text: "text-gray-700",
        hover: "hover:bg-gray-100"
      },
      yellow: {
        bg: "bg-yellow-50",
        border: "border-yellow-200",
        text: "text-yellow-700",
        hover: "hover:bg-yellow-100"
      },
      teal: {
        bg: "bg-teal-50",
        border: "border-teal-200",
        text: "text-teal-700",
        hover: "hover:bg-teal-100"
      },
      red: {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-700",
        hover: "hover:bg-red-100"
      },
      violet: {
        bg: "bg-violet-50",
        border: "border-violet-200",
        text: "text-violet-700",
        hover: "hover:bg-violet-100"
      },
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-700",
        hover: "hover:bg-emerald-100"
      }
    };
    return colors[color] || colors.gray;
  };

  return (
    <section id="vertical-timeline" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <Badge className="mb-6 bg-gradient-to-r from-slate-600 to-blue-600 text-white border-0">
            Our Story
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            A Decade of Growth & Innovation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Follow our journey from a small consulting firm to a leading technology partner.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
          
          {timelineData.map((item, index) => {
            const colorClasses = getColorClasses(item.color);
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`relative mb-12 transition-all duration-700 ${
                  isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className={`border-2 ${colorClasses.border} ${colorClasses.bg} ${colorClasses.hover} transition-all duration-500 shadow-lg hover:shadow-xl group cursor-pointer`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          {item.year}
                        </Badge>
                      </div>
                      <CardTitle className={`text-xl font-bold ${colorClasses.text} group-hover:text-${item.color}-800 transition-colors duration-300`}>
                        {item.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-500 font-medium">{item.category}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {/* Impact Section */}
                      <div className="bg-white/50 rounded-lg p-4 border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-slate-500" />
                          <span className="text-sm font-semibold text-slate-700">Impact</span>
                        </div>
                        <p className="text-sm text-slate-600">{item.impact}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Award className="w-4 h-4" />
                          <span>Milestone {index + 1}</span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1200ms' }}>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-blue-700 font-medium">Years of Excellence</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-purple-700 font-medium">Successful Projects</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-green-700 font-medium">Industries Served</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-orange-700 font-medium">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1400ms' }}>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Ready to write the next chapter with us?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join us in creating innovative solutions that drive business transformation.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
} 