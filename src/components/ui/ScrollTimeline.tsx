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
  ArrowRight,
  Calendar,
  Star,
  ChevronDown,
  ChevronUp
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

export default function ScrollTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const scrollToIndex = (index: number) => {
    if (isScrolling || index < 0 || index >= timelineData.length) return;
    
    setIsScrolling(true);
    setCurrentIndex(index);
    
    if (timelineRefs.current[index]) {
      timelineRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
    
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) return;
    
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    const newIndex = Math.max(0, Math.min(timelineData.length - 1, currentIndex + direction));
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [currentIndex, isScrolling]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isScrolling) return;
    
    if (e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      scrollToIndex(Math.min(timelineData.length - 1, currentIndex + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      scrollToIndex(Math.max(0, currentIndex - 1));
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isScrolling]);

  return (
    <section className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Background Pattern removed */}

      {/* Header */}
      <div className="absolute top-8 left-0 right-0 z-10 text-center">
        <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
          Our Journey
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Scroll Through Our Timeline
        </h2>
        <p className="text-gray-300 text-sm">
          Use scroll wheel, arrow keys, or click the navigation
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
        <div className="flex flex-col gap-3">
          {timelineData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-orange-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <ChevronUp className="w-4 h-4" />
          <span>Scroll to navigate</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Timeline Container */}
      <div 
        ref={containerRef}
        className="h-full flex items-center justify-center px-8"
      >
        <div className="max-w-4xl w-full">
          {timelineData.map((item, index) => (
            <div
              key={index}
              ref={(el) => { timelineRefs.current[index] = el; }}
              className={`transition-all duration-1000 ${
                currentIndex === index
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 absolute inset-0'
              }`}
            >
              <Card className="border-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm text-white shadow-2xl">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${getCategoryColor(item.category)} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-lg px-4 py-2">
                        {item.year}
                      </Badge>
                      <div className="text-sm text-gray-400 mt-2">{item.category}</div>
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-white mb-4">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>
                  
                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-orange-400 flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-gray-300">
                          <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          <span>{achievement}</span>
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

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / timelineData.length) * 100}%` }}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-8 flex gap-4">
        <button
          onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0 || isScrolling}
          className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
        <button
          onClick={() => scrollToIndex(Math.min(timelineData.length - 1, currentIndex + 1))}
          disabled={currentIndex === timelineData.length - 1 || isScrolling}
          className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Counter */}
      <div className="absolute top-8 right-8 text-right">
        <div className="text-2xl font-bold text-orange-500">{currentIndex + 1}</div>
        <div className="text-sm text-gray-400">of {timelineData.length}</div>
      </div>
    </section>
  );
} 