"use client";

import { Eye, Heart, CheckCircle, BarChart3 } from "lucide-react";

const differentiators = [
  {
    icon: Eye,
    title: "Clarity Over Complexity",
    description: "We simplify tech jargon into action plans. No overengineering, just elegant problem-solving.",
    iconColor: "#1A5276",
    iconBg: "#EAF1F8"
  },
  {
    icon: Heart,
    title: "Ownership with Empathy",
    description: "Your goals become our goals. We bring care into consulting.",
    iconColor: "#FF8C00",
    iconBg: "#FFF4E5"
  },
  {
    icon: CheckCircle,
    title: "Precision in Execution",
    description: "We sweat the details — ERP flows, automations, dashboards — done right the first time.",
    iconColor: "#16A085",
    iconBg: "#E6F7F4"
  },
  {
    icon: BarChart3,
    title: "Adaptable Team Model",
    description: "Need a full-time developer or quick AI prototype? Our team scales as you grow.",
    iconColor: "#8E44AD",
    iconBg: "#F3EAF8"
  }
];

export default function Differentiators() {
  return (
    <section className="py-16 bg-white w-full min-h-screen flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1A5276]">
            Our Differentiators
          </h2>
          <p className="text-lg md:text-xl text-[#1A5276] max-w-3xl mx-auto leading-relaxed">
            What sets us apart in the technology landscape
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 lg:p-8 flex flex-col items-center text-center gap-4 lg:gap-6 transition-all duration-500 hover:scale-105 border border-gray-100 h-full">
                <div
                  className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-2xl transition-transform duration-300 hover:scale-110 flex-shrink-0"
                  style={{ background: item.iconBg }}
                >
                  <item.icon className="w-7 h-7 lg:w-8 lg:h-8" style={{ color: item.iconColor }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg lg:text-xl font-bold mb-2 text-[#1A5276] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Quote Section - Made Smaller */}
        <div className="animate-fade-in-delayed">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl px-6 py-6 text-center shadow-md" style={{ background: "#FFF4E5" }}>
              <div className="text-lg md:text-xl font-bold mb-2 text-[#1A5276] leading-tight">
                "You bring the vision — <span className="text-[#FF8C00]">we'll build the roadmap.</span>"
              </div>
              <div className="text-sm md:text-base font-semibold text-[#1A5276]">
                — The Finbyz Promise
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

