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
  Calendar
} from "lucide-react";
import { useState, useEffect } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: any;
  category: string;
}

export default function YearFilterTimeline() {
  const [selectedYear, setSelectedYear] = useState<string>("2025");
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('year-filter-timeline');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const timelineData: TimelineItem[] = [
    {
      year: "2015",
      title: "Finbyz Consulting Begins",
      description: "Launched as a financial and business consulting firm focused on unlocking operational efficiency.",
      icon: TrendingUp,
      category: "Foundation"
    },
    {
      year: "2016",
      title: "Rebranded as Finbyz Tech Pvt Ltd",
      description: "Transitioned into a tech-first company focused on business process automation.",
      icon: Cpu,
      category: "Transformation"
    },
    {
      year: "2017",
      title: "Exim App Built",
      description: "Launched a custom solution for managing export-import operations in ERP systems.",
      icon: Settings,
      category: "Innovation"
    },
    {
      year: "2018",
      title: "Specialized in Chemicals",
      description: "Created solutions for batch-wise inventory and regulatory compliance.",
      icon: FlaskConical,
      category: "Specialization"
    },
    {
      year: "2019",
      title: "Entered Textile Manufacturing",
      description: "Designed complex production and inventory workflows for yarn manufacturers.",
      icon: Scissors,
      category: "Expansion"
    },
    {
      year: "2020",
      title: "Serialized Inventory for Engineering",
      description: "Enabled bulk serialized item management for a heavy machinery manufacturer.",
      icon: Factory,
      category: "Engineering"
    },
    {
      year: "2021",
      title: "Optimized Plastic Operations",
      description: "Reduced machine downtime by solving mold change issues using smart tech.",
      icon: Zap,
      category: "Optimization"
    },
    {
      year: "2022",
      title: "Trading Bots & Agri Commodity Suite",
      description: "Built algorithmic trading automation and ERP workflows for agro-trading firms.",
      icon: Bot,
      category: "Automation"
    },
    {
      year: "2023",
      title: "Solutions for Metal Casting",
      description: "Created tools to track rejections and process transparency in multi-stage manufacturing.",
      icon: Factory,
      category: "Manufacturing"
    },
    {
      year: "2024",
      title: "Resource Augmentation Model",
      description: "Launched a flexible model for businesses to hire dedicated tech talent. Also delivered industry-specific ERP for the solar pump sector.",
      icon: Users,
      category: "Services"
    },
    {
      year: "2025",
      title: "AI-Powered Workflow Automations",
      description: "Integrated cutting-edge AI tools to solve real-world industry challenges, from production to procurement.",
      icon: Brain,
      category: "AI/ML"
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

  const selectedItem = timelineData.find(item => item.year === selectedYear) || timelineData[timelineData.length - 1];
  const years = ["All", ...timelineData.map(item => item.year)];

  return (
    <section id="year-filter-timeline" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <Badge className="mb-6 bg-gradient-to-r from-slate-600 to-blue-600 text-white border-0">
            Our Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            A Decade of Innovation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From humble beginnings to industry leadership — explore our evolution through the years.
          </p>
        </div>

        {/* Year Navigation */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year === "All" ? "2025" : year)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedYear === (year === "All" ? "2025" : year)
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Timeline Card */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '400ms' }}>
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm overflow-hidden group cursor-pointer hover:scale-105 max-w-4xl mx-auto">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${getCategoryColor(selectedItem.category)} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <selectedItem.icon className="w-8 h-8 text-white" />
                </div>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                  {selectedItem.year}
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                {selectedItem.title}
              </CardTitle>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-500 font-medium">{selectedItem.category}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed mb-6">
                {selectedItem.description}
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                <span className="text-sm">Learn more</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-slate-600">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-slate-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-slate-600">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
} 