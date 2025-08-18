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
  ChevronRight,
  Calendar,
  Star
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: any;
  category: string;
  achievements: string[];
}

export default function AlternativeTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

    const element = document.getElementById('alternative-timeline');
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
      achievements: ["Financial consulting", "Operational efficiency", "Business strategy"]
    },
    {
      year: "2016",
      title: "Rebranded as Finbyz Tech Pvt Ltd",
      description: "Transitioned into a tech-first company focused on business process automation.",
      icon: Cpu,
      category: "Transformation",
      achievements: ["Tech-first approach", "Process automation", "Digital transformation"]
    },
    {
      year: "2017",
      title: "Exim App Built",
      description: "Launched a custom solution for managing export-import operations in ERP systems.",
      icon: Settings,
      category: "Innovation",
      achievements: ["Custom ERP solution", "Export-import management", "System integration"]
    },
    {
      year: "2018",
      title: "Specialized in Chemicals",
      description: "Created solutions for batch-wise inventory and regulatory compliance.",
      icon: FlaskConical,
      category: "Specialization",
      achievements: ["Batch inventory", "Regulatory compliance", "Chemical industry"]
    },
    {
      year: "2019",
      title: "Entered Textile Manufacturing",
      description: "Designed complex production and inventory workflows for yarn manufacturers.",
      icon: Scissors,
      category: "Expansion",
      achievements: ["Production workflows", "Inventory management", "Textile industry"]
    },
    {
      year: "2020",
      title: "Serialized Inventory for Engineering",
      description: "Enabled bulk serialized item management for a heavy machinery manufacturer.",
      icon: Factory,
      category: "Engineering",
      achievements: ["Serialized inventory", "Heavy machinery", "Bulk management"]
    },
    {
      year: "2021",
      title: "Optimized Plastic Operations",
      description: "Reduced machine downtime by solving mold change issues using smart tech.",
      icon: Zap,
      category: "Optimization",
      achievements: ["Machine optimization", "Downtime reduction", "Smart technology"]
    },
    {
      year: "2022",
      title: "Trading Bots & Agri Commodity Suite",
      description: "Built algorithmic trading automation and ERP workflows for agro-trading firms.",
      icon: Bot,
      category: "Automation",
      achievements: ["Algorithmic trading", "Agro-trading", "Automation"]
    },
    {
      year: "2023",
      title: "Solutions for Metal Casting",
      description: "Created tools to track rejections and process transparency in multi-stage manufacturing.",
      icon: Factory,
      category: "Manufacturing",
      achievements: ["Rejection tracking", "Process transparency", "Multi-stage manufacturing"]
    },
    {
      year: "2024",
      title: "Resource Augmentation Model",
      description: "Launched a flexible model for businesses to hire dedicated tech talent. Also delivered industry-specific ERP for the solar pump sector.",
      icon: Users,
      category: "Services",
      achievements: ["Resource augmentation", "Tech talent", "Solar pump ERP"]
    },
    {
      year: "2025",
      title: "AI-Powered Workflow Automations",
      description: "Integrated cutting-edge AI tools to solve real-world industry challenges, from production to procurement.",
      icon: Brain,
      category: "AI/ML",
      achievements: ["AI integration", "Workflow automation", "Industry solutions"]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Foundation": "from-blue-500 to-cyan-500",
      "Transformation": "from-purple-500 to-pink-500",
      "Innovation": "from-green-500 to-emerald-500",
      "Specialization": "from-orange-500 to-red-500",
      "Expansion": "from-indigo-500 to-blue-500",
      "Engineering": "from-gray-500 to-slate-500",
      "Optimization": "from-yellow-500 to-orange-500",
      "Automation": "from-teal-500 to-cyan-500",
      "Manufacturing": "from-red-500 to-pink-500",
      "Services": "from-violet-500 to-purple-500",
      "AI/ML": "from-emerald-500 to-green-500"
    };
    return colors[category] || "from-gray-500 to-slate-500";
  };

  const scrollToItem = (index: number) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / timelineData.length;
      container.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="alternative-timeline" className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
            Our Evolution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Journey Through Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From consulting to cutting-edge technology — witness our transformation over the years.
          </p>
        </div>

        {/* Year Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="flex flex-wrap justify-center gap-2">
            {timelineData.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToItem(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Cards */}
        <div className={`relative transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '400ms' }}>
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {timelineData.map((item, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 scroll-snap-start"
                style={{ scrollSnapAlign: 'start' }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(item.category)} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                        {item.year}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400 font-medium">{item.category}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-orange-400 flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <ChevronRight className="w-3 h-3 text-orange-400" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className={`mt-8 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((activeIndex + 1) / timelineData.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-400">
            {activeIndex + 1} of {timelineData.length} milestones
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '800ms' }}>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to be part of our next milestone?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in shaping the future of technology and business transformation.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
} 