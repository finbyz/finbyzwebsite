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
  Star
} from "lucide-react";
import { useState, useEffect } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: any;
  category: string;
  achievements: string[];
}

export default function VisualTimeline() {
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

    const element = document.getElementById('visual-timeline');
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

  return (
    <section id="visual-timeline" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : ''
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

        {/* Timeline Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : ''
        }`} style={{ transitionDelay: '200ms' }}>
          {timelineData.map((item, index) => (
            <Card 
              key={index}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm overflow-hidden hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(item.category)} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                    {item.year}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
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
                
                {/* Achievements */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Star className="w-4 h-4 text-orange-400" />
                    Key Achievements
                  </div>
                  <div className="space-y-1">
                    {item.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <ArrowRight className="w-3 h-3 text-orange-400" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : ''
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-blue-700 font-medium">Years of Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-purple-700 font-medium">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-blue-700 font-medium">Industries Served</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-orange-700 font-medium">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up opacity-100' : ''
        }`} style={{ transitionDelay: '600ms' }}>
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